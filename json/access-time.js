[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/access-time/docs/System-Directory-AccessTime.html#",
      "description": {
        "fct-module": "System.Directory.AccessTime",
        "fct-package": "access-time",
        "fct-signature": "module",
        "fct-source": "src/System-Directory-AccessTime.html",
        "fct-type": "module",
        "title": "AccessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System Directory AccessTime",
        "module": "System.Directory.AccessTime",
        "name": "AccessTime",
        "normalized": "",
        "package": "access-time",
        "partial": "Access Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/access-time/docs/System-Directory-AccessTime.html#v:getAccessTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetAccessTime\u003c/a\u003e\u003c/code\u003e operation returns the clock time at which the file or directory was last accessed.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user is not permitted to obtain the access time; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file or directory does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Directory.AccessTime",
        "fct-package": "access-time",
        "fct-signature": "FilePath -\u003e IO ClockTime",
        "fct-source": "src/System-Directory-AccessTime.html#getAccessTime",
        "fct-type": "function",
        "title": "getAccessTime"
      },
      "index": {
        "description": "The getAccessTime operation returns the clock time at which the file or directory was last accessed The operation may fail with isPermissionError if the user is not permitted to obtain the access time or isDoesNotExistError if the file or directory does not exist",
        "hierarchy": "System Directory AccessTime",
        "module": "System.Directory.AccessTime",
        "name": "getAccessTime",
        "normalized": "FilePath-\u003eIO ClockTime",
        "package": "access-time",
        "partial": "Access Time",
        "signature": "FilePath-\u003eIO ClockTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/access-time/docs/System-Directory-AccessTime.html#v:getAccessTimeResolution",
      "description": {
        "fct-descr": "\u003cp\u003eApproximate resolution of access times on your system for the given file or directory.\n\u003c/p\u003e\u003cp\u003ePresently this will not attempt to determine whether access times are actually enabled on the relevant file system.\n\u003c/p\u003e",
        "fct-module": "System.Directory.AccessTime",
        "fct-package": "access-time",
        "fct-signature": "FilePath -\u003e IO TimeDiff",
        "fct-source": "src/System-Directory-AccessTime.html#getAccessTimeResolution",
        "fct-type": "function",
        "title": "getAccessTimeResolution"
      },
      "index": {
        "description": "Approximate resolution of access times on your system for the given file or directory Presently this will not attempt to determine whether access times are actually enabled on the relevant file system",
        "hierarchy": "System Directory AccessTime",
        "module": "System.Directory.AccessTime",
        "name": "getAccessTimeResolution",
        "normalized": "FilePath-\u003eIO TimeDiff",
        "package": "access-time",
        "partial": "Access Time Resolution",
        "signature": "FilePath-\u003eIO TimeDiff"
      }
    }
  }
]