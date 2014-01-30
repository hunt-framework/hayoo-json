#!/usr/bin/env python3

import json
import sys


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
    return {
        "cmd": "insert",
        "document": d
    }


def stripCommand(c):
    return c["document"]


def checkCopy(old, oldKey, new, newKey):
    if oldKey in old:
        new[newKey] = old[oldKey]


def printIfMissing(old, oldKey, doc):
    if oldKey not in old:
        print("missing " + oldKey +" in " + doc["uri"], file=sys.stderr)


def removeEmptyKeys(descr):
    for key in list(descr.keys()):
        if not len(descr[key]):
            del descr[key]

def alterDocument(doc):
    newDoc = {"uri": doc["uri"]}
    descr = doc["description"]
    newDescr = {}

    for key in descr.keys():
        if key not in ["fct-module", "fct-package", "fct-signature", "title", "fct-type", "fct-descr", "fct-source"]:
            raise Exception("unexpected " + key + " in " + doc["uri"])

    removeEmptyKeys(descr)

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

    newDoc["description"] = newDescr
    return newDoc


def main():
    inF = sys.argv[1]
    outF = sys.argv[2]

    with (open(inF, 'r')) as f:
        newJson = map(lambda x: insertCommand(alterDocument(stripCommand(x))), json.load(f))
    newContent = bytes(json.dumps(list(newJson), indent=4), encoding='UTF-8')
    with open(outF, 'wb') as f:
        f.write(newContent)

if __name__ == "__main__":
    main()