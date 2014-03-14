[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "xdg-userdirs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.XDG.UserDir",
          "name": "UserDir",
          "package": "xdg-userdirs",
          "source": "src/System-Environment-XDG-UserDir.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Environment XDG UserDir",
          "module": "System.Environment.XDG.UserDir",
          "name": "UserDir",
          "package": "xdg-userdirs",
          "partial": "User Dir",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xdg-userdirs/docs/System-Environment-XDG-UserDir.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one specific user directory (e. g., \n getUserDir \"DOWNLOAD\"). If there is no\n such specified directory, return home directory.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.UserDir",
          "name": "getUserDir",
          "package": "xdg-userdirs",
          "signature": "String -\u003e IO String",
          "source": "src/System-Environment-XDG-UserDir.html#getUserDir",
          "type": "function"
        },
        "index": {
          "description": "Get one specific user directory getUserDir DOWNLOAD If there is no such specified directory return home directory",
          "hierarchy": "System Environment XDG UserDir",
          "module": "System.Environment.XDG.UserDir",
          "name": "getUserDir",
          "normalized": "String-\u003eIO String",
          "package": "xdg-userdirs",
          "partial": "User Dir",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-userdirs/docs/System-Environment-XDG-UserDir.html#v:getUserDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead user-configured set of user directories\n (from user-dirs.dirs)\n\u003c/p\u003e",
          "module": "System.Environment.XDG.UserDir",
          "name": "readUserDirs",
          "package": "xdg-userdirs",
          "signature": "IO (Map String String)",
          "source": "src/System-Environment-XDG-UserDir.html#readUserDirs",
          "type": "function"
        },
        "index": {
          "description": "Read user-configured set of user directories from user-dirs.dirs",
          "hierarchy": "System Environment XDG UserDir",
          "module": "System.Environment.XDG.UserDir",
          "name": "readUserDirs",
          "package": "xdg-userdirs",
          "partial": "User Dirs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-userdirs/docs/System-Environment-XDG-UserDir.html#v:readUserDirs"
      }
    }
  ]
]