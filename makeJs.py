#!/usr/bin/env python3

import json
import sys
import os


__author__ = 'Sebastian'


def context(name, weight=1.0, default=True, normalizers=None, regexp="\\w*", type="text"):
    if not normalizers: normalizers = []
    return {
        "cmd": "insert-context",
        "context": name,
        "schema": {
            "weight": weight,
            "default": default,
            "normalizers": normalizers,
            "regexp": regexp,
            "type": type
        }
    }


def insertCommand(d):
    """
    @type d: tuple
    """
    return {
        "cmd": d[1],
        "document": d[0]
    }


def stripCommand(c):
    return c if "uri" in c else c["document"]


def checkCopy(old, oldKey, new, newKey):
    if oldKey in old:
        new[newKey] = old[oldKey]


def printIfMissing(old, oldKey, doc):
    if oldKey not in old:
        print("missing %s in %s" % (oldKey, doc["uri"]), file=sys.stderr)


def removeEmptyKeys(descr):
    for key in list(descr.keys()):
        if not len(descr[key]):
            del descr[key]


def alterInline(doc, newDoc, descr, newDescr):
    for key in descr.keys():
        if key not in ["fct-module", "fct-package", "fct-signature", "title", "fct-type", "fct-descr", "fct-source"]:
            raise Exception("unexpected %s in %s" % (key, doc["uri"]))

    printIfMissing(descr, "fct-module", doc)
    checkCopy(descr, "fct-module", newDescr, "module")

    printIfMissing(descr, "fct-package", doc)
    checkCopy(descr, "fct-package", newDescr, "package")

    printIfMissing(descr, "fct-signature", doc)
    checkCopy(descr, "fct-signature", newDescr, "signature")

    printIfMissing(descr, "title", doc)
    checkCopy(descr, "title", newDescr, "name")

    printIfMissing(descr, "fct-type", doc)
    checkCopy(descr, "fct-type", newDescr, "type")

    checkCopy(descr, "fct-descr", newDescr, "description")

    if "signature" in newDescr and newDescr["signature"] == newDescr["type"]:
        # print("Warinig: signature == type in %s %s" % (newDescr["type"], doc["uri"]))
        if newDescr["type"] not in ["module", "type", "data", "class", "newtype"]:
            raise Exception("unexpected " + newDescr["type"] + " in " + doc["uri"])
        del newDescr["signature"]


    newDoc["index"] = dict(newDescr)

    checkCopy(descr, "fct-source", newDescr, "source")
    return "insert"


def alterPackage(doc, newDoc, descr, newDescr):
    for key in descr.keys():
        if key not in ["pkg-author", "pkg-category", "pkg-description", "pkg-name", "pkg-synopsis", "pkg-dependencies", "pkg-maintainer", "title", "pkg-version", "pkg-homepage"]:
            raise Exception("unexpected " + key + " in " + doc["uri"])

    newDescr["type"] = "package"

    #printIfMissing(descr, "pkg-author", doc)
    checkCopy(descr, "pkg-author", newDescr, "author")

    printIfMissing(descr, "pkg-category", doc)
    checkCopy(descr, "pkg-category", newDescr, "category")

    printIfMissing(descr, "pkg-description", doc)
    checkCopy(descr, "pkg-description", newDescr, "description")

    printIfMissing(descr, "pkg-name", doc)
    checkCopy(descr, "pkg-name", newDescr, "name")

    printIfMissing(descr, "pkg-synopsis", doc)
    checkCopy(descr, "pkg-synopsis", newDescr, "synopsis")

    newDoc["index"] = dict(newDescr)

    printIfMissing(descr, "pkg-dependencies", doc)
    checkCopy(descr, "pkg-dependencies", newDescr, "dependencies")

    printIfMissing(descr, "pkg-maintainer", doc)
    checkCopy(descr, "pkg-maintainer", newDescr, "maintainer")

    #printIfMissing(descr, "pkg-version", doc)
    checkCopy(descr, "pkg-version", newDescr, "version")

    # printIfMissing(descr, "pkg-homepage", doc)
    checkCopy(descr, "pkg-homepage", newDescr, "homepage")
    return "insert"


def alterRank(doc, newDoc, descr, newDescr):
    if list(descr.keys()) != ["pkg-rank"]:
        raise Exception("unexpected %s " % descr.keys())
    checkCopy(descr, "pkg-rank", newDescr, "rank")
    return "update"


def alterDocument(doc):
    newDoc = {"uri": doc["uri"]}
    descr = doc["description"]
    newDescr = {}

    removeEmptyKeys(descr)

    keyPrefixes = set(map(lambda x: x[0:3], descr.keys()))
    cmd = "insert"
    if not keyPrefixes:
        print("nothing to index for " + doc["uri"], file=sys.stderr)
        newDoc["index"] = {}
    elif "pkg-rank" in descr.keys():
        cmd = alterRank(doc, newDoc, descr, newDescr)
    elif "fct" in keyPrefixes:
        cmd = alterInline(doc, newDoc, descr, newDescr)
    elif "pkg" in keyPrefixes:
        cmd = alterPackage(doc, newDoc, descr, newDescr)
    else:
        raise Exception("unknown key prefixes: " + str(keyPrefixes))

    newDoc["description"] = newDescr

    return newDoc, cmd


def createContexts(fName):
    c = [context("description", weight=0.3),
         context("type", weight=0.0, default=False),
         context("module", weight=0.5, regexp=".*"),
         context("package"),
         context("signature", weight=0.2, regexp=".*"),
         context("source", weight=0.1, default=False, regexp=".*"),
         context("name", weight=3.0),
         context("author", regexp="[^,]*"),
         context("category", default=False),
         context("synopsis", weight=0.8),
         context("dependencies", default=False),
         context("maintainer", default=False),
         context("version", default=False),
         context("homepage", default=False, regexp=".*")
         ]
    #noinspection PyArgumentList
    data = bytes(json.dumps(list(c), indent=4), encoding='UTF-8')
    with open(fName, 'wb') as f:
        f.write(data)


def main():
    inF = sys.argv[1]
    outF = sys.argv[2]
    if inF == "--contexts":
        createContexts(outF)
        exit(0)

    with (open(inF, 'r')) as f:
        newJson = map(lambda x: insertCommand(alterDocument(stripCommand(x))), json.load(f))
    #noinspection PyArgumentList
    newContent = bytes(json.dumps(list(newJson), indent=4), encoding='UTF-8')
    os.makedirs(os.path.dirname(outF), exist_ok=True)
    with open(outF, 'wb') as f:
        f.write(newContent)

if __name__ == "__main__":
    main()