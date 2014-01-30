#!/usr/bin/env python3
import glob
import os

__author__ = 'Sebastian'

def main():
    files = list(glob.glob("json/*.js"))
    names = list(map(os.path.basename, files))
    newFiles = list(map(lambda x: "newJson/" + x, names))

    with open("Makefile", "w") as f:
        f.write("\n")
        f.write("all: " + " \\\n\t\t".join(newFiles))
        f.write("\n")
        f.write("newJson:\n\tmkdir newJson\n")
        f.write("clean:\n\trm -f " + " \\\n\t\t".join(newFiles) + " && rmdir newJson\n\n")

        for (old, name, new) in zip(files, names, newFiles):
            f.write(new + ": newJson " + old + "\n")
            f.write("\t./makeJs.py " + old + " " + new + "\n")
            f.write("\n")


if __name__ == "__main__":
    main()