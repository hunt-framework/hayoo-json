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
        "word": "graceful"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides function to make process graceful.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Graceful",
          "name": "Graceful",
          "package": "graceful",
          "source": "src/System-Posix-Graceful.html",
          "type": "module"
        },
        "index": {
          "description": "Provides function to make process graceful",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "Graceful",
          "package": "graceful",
          "partial": "Graceful",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer settings\n\u003c/p\u003e\u003cp\u003eSince 0.1.0.0\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "GracefulSettings",
          "package": "graceful",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "data"
        },
        "index": {
          "description": "Server settings Since",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "GracefulSettings",
          "package": "graceful",
          "partial": "Graceful Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#t:GracefulSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorker process settings\n\u003c/p\u003e\u003cp\u003eSince 0.1.0.0\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "GracefulWorker",
          "package": "graceful",
          "source": "src/System-Posix-Graceful-Worker.html#GracefulWorker",
          "type": "data"
        },
        "index": {
          "description": "Worker process settings Since",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "GracefulWorker",
          "package": "graceful",
          "partial": "Graceful Worker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#t:GracefulWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Graceful",
          "name": "GracefulSettings",
          "package": "graceful",
          "signature": "GracefulSettings",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "GracefulSettings",
          "package": "graceful",
          "partial": "Graceful Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:GracefulSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Graceful",
          "name": "GracefulWorker",
          "package": "graceful",
          "signature": "forall resource . GracefulWorker",
          "source": "src/System-Posix-Graceful-Worker.html#GracefulWorker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "GracefulWorker",
          "package": "graceful",
          "partial": "Graceful Worker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:GracefulWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake server application enable shutdown/restart gracefully\n\u003c/p\u003e\u003cp\u003eSince 0.1.0.0\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "graceful",
          "package": "graceful",
          "signature": "GracefulSettings -\u003e GracefulWorker -\u003e IO ()",
          "source": "src/System-Posix-Graceful.html#graceful",
          "type": "function"
        },
        "index": {
          "description": "Make server application enable shutdown restart gracefully Since",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "graceful",
          "normalized": "GracefulSettings-\u003eGracefulWorker-\u003eIO()",
          "package": "graceful",
          "signature": "GracefulSettings-\u003eGracefulWorker-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:graceful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe binary file to upgrade\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsBinary",
          "package": "graceful",
          "signature": "FilePath",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "function"
        },
        "index": {
          "description": "The binary file to upgrade",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsBinary",
          "package": "graceful",
          "partial": "Settings Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulSettingsBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen socket\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsListen",
          "package": "graceful",
          "signature": "IO Socket",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "function"
        },
        "index": {
          "description": "Listen socket",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsListen",
          "package": "graceful",
          "partial": "Settings Listen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulSettingsListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file to which the server records the process id\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsPidFile",
          "package": "graceful",
          "signature": "FilePath",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "function"
        },
        "index": {
          "description": "The file to which the server records the process id",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsPidFile",
          "package": "graceful",
          "partial": "Settings Pid File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulSettingsPidFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnix domain socket file\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsSockFile",
          "package": "graceful",
          "signature": "FilePath",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "function"
        },
        "index": {
          "description": "Unix domain socket file",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsSockFile",
          "package": "graceful",
          "partial": "Settings Sock File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulSettingsSockFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefork worker count\n\u003c/p\u003e",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsWorkerCount",
          "package": "graceful",
          "signature": "Int",
          "source": "src/System-Posix-Graceful.html#GracefulSettings",
          "type": "function"
        },
        "index": {
          "description": "Prefork worker count",
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulSettingsWorkerCount",
          "package": "graceful",
          "partial": "Settings Worker Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulSettingsWorkerCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Graceful",
          "name": "gracefulWorkerApplication",
          "package": "graceful",
          "signature": "Socket -\u003e resource -\u003e IO ()",
          "source": "src/System-Posix-Graceful-Worker.html#GracefulWorker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulWorkerApplication",
          "normalized": "Socket-\u003ea-\u003eIO()",
          "package": "graceful",
          "partial": "Worker Application",
          "signature": "Socket-\u003eresource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulWorkerApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Graceful",
          "name": "gracefulWorkerFinalize",
          "package": "graceful",
          "signature": "resource -\u003e IO ()",
          "source": "src/System-Posix-Graceful-Worker.html#GracefulWorker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulWorkerFinalize",
          "normalized": "a-\u003eIO()",
          "package": "graceful",
          "partial": "Worker Finalize",
          "signature": "resource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulWorkerFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Graceful",
          "name": "gracefulWorkerInitialize",
          "package": "graceful",
          "signature": "IO resource",
          "source": "src/System-Posix-Graceful-Worker.html#GracefulWorker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Graceful",
          "module": "System.Posix.Graceful",
          "name": "gracefulWorkerInitialize",
          "package": "graceful",
          "partial": "Worker Initialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graceful/docs/System-Posix-Graceful.html#v:gracefulWorkerInitialize"
      }
    }
  ]
]