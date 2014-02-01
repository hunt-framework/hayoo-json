#!/usr/bin/env python3
import glob
import os

__author__ = 'Sebastian'


def target(name, dependencies, command=None):
    d = " ".join(dependencies) if len(dependencies) < 5 else " \\\n\t\t".join(dependencies)
    t = "\n\t" + command if command else ""
    return name + ": " + d + t + "\n\n"


def main():
    files = list(glob.glob("json/*.js"))
    names = list(map(os.path.basename, files))
    newFiles = list(map(lambda x: "newJson/" + x, names))

    with open("Makefile", "w") as f:
        f.write(target(".PHONY", ["all", "clean"]))
        f.write(target("all", ["hayooContexts.js"] + newFiles))
        f.write(target("clean", [], "rm -f hayooContexts.js \\\n\t\t" + " \\\n\t\t".join(newFiles) + " && rmdir newJson"))
        f.write(target("hayooContexts.js", ["makeJs.py"], "./makeJs.py --contexts hayooContexts.js"))

        for (old, name, new) in zip(files, names, newFiles):
            f.write(target(new, ["makeJs.py", old], "./makeJs.py " + old + " " + new))


if __name__ == "__main__":
    main()