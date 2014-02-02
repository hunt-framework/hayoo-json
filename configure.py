#!/usr/bin/env python3
import glob
import os

__author__ = 'Sebastian'


def target(name, dependencies, commands=None):
    """
    @type commands: list | map
    """
    if not commands: commands = []
    d = " ".join(dependencies) if len(dependencies) < 5 else " \\\n\t\t".join(dependencies)
    commands = map(lambda c: "\n\t" + c, commands)
    return name + ": " + d + "".join(commands) + "\n\n"


def main():
    files = list(glob.glob("json/*.js"))
    names = list(map(os.path.basename, files))
    newFiles = list(map(lambda x: "newJson/" + x, names))

    with open("Makefile", "w") as f:
        f.write("SERVER = http://localhost:3000/\n\n")
        f.write("NEWFILES = " + " \\\n\t\t".join(newFiles) + "\n\n")
        f.write(target(".PHONY", ["all", "clean"]))
        f.write(target("all", ["hayooContexts.js", "$(NEWFILES)"]))
        f.write(target("clean", [], ["rm -f hayooContexts.js $(NEWFILES) && rmdir newJson"]))
        f.write(target("hayooContexts.js", ["makeJs.py"], ["./makeJs.py --contexts hayooContexts.js"]))

        for (old, name, new) in zip(files, names, newFiles):
            f.write(target(new, ["makeJs.py", old], ["./makeJs.py " + old + " " + new]))

        f.write(target("insert", [], map(lambda j: "curl -X POST -d @" + j + " $(SERVER)/eval", ["hayooContexts.js"] + newFiles)))



if __name__ == "__main__":
    main()