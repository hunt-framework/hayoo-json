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
        "word": "access-time"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Directory.AccessTime",
          "name": "AccessTime",
          "package": "access-time",
          "source": "src/System-Directory-AccessTime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Directory AccessTime",
          "module": "System.Directory.AccessTime",
          "name": "AccessTime",
          "package": "access-time",
          "partial": "Access Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/access-time/docs/System-Directory-AccessTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetAccessTime\u003c/a\u003e\u003c/code\u003e operation returns the clock time at which the file or directory was last accessed.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to obtain the access time; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Directory.AccessTime",
          "name": "getAccessTime",
          "package": "access-time",
          "signature": "FilePath -\u003e IO ClockTime",
          "source": "src/System-Directory-AccessTime.html#getAccessTime",
          "type": "function"
        },
        "index": {
          "description": "The getAccessTime operation returns the clock time at which the file or directory was last accessed The operation may fail with isPermissionError if the user is not permitted to obtain the access time or isDoesNotExistError if the file or directory does not exist",
          "hierarchy": "System Directory AccessTime",
          "module": "System.Directory.AccessTime",
          "name": "getAccessTime",
          "normalized": "FilePath-\u003eIO ClockTime",
          "package": "access-time",
          "partial": "Access Time",
          "signature": "FilePath-\u003eIO ClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/access-time/docs/System-Directory-AccessTime.html#v:getAccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate resolution of access times on your system for the given file or directory.\n\u003c/p\u003e\u003cp\u003ePresently this will not attempt to determine whether access times are actually enabled on the relevant file system.\n\u003c/p\u003e",
          "module": "System.Directory.AccessTime",
          "name": "getAccessTimeResolution",
          "package": "access-time",
          "signature": "FilePath -\u003e IO TimeDiff",
          "source": "src/System-Directory-AccessTime.html#getAccessTimeResolution",
          "type": "function"
        },
        "index": {
          "description": "Approximate resolution of access times on your system for the given file or directory Presently this will not attempt to determine whether access times are actually enabled on the relevant file system",
          "hierarchy": "System Directory AccessTime",
          "module": "System.Directory.AccessTime",
          "name": "getAccessTimeResolution",
          "normalized": "FilePath-\u003eIO TimeDiff",
          "package": "access-time",
          "partial": "Access Time Resolution",
          "signature": "FilePath-\u003eIO TimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/access-time/docs/System-Directory-AccessTime.html#v:getAccessTimeResolution"
      }
    }
  ]
]