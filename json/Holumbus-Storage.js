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
        "word": "Holumbus-Storage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Controller.ControllerData",
          "name": "ControllerData",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Controller-ControllerData.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem Controller ControllerData",
          "module": "Holumbus.FileSystem.Controller.ControllerData",
          "name": "ControllerData",
          "package": "Holumbus-Storage",
          "partial": "Controller Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller.ControllerData",
          "name": "ControllerData",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Controller-ControllerData.html#ControllerData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller ControllerData",
          "module": "Holumbus.FileSystem.Controller.ControllerData",
          "name": "ControllerData",
          "package": "Holumbus-Storage",
          "partial": "Controller Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerData.html#t:ControllerData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller.ControllerData",
          "name": "newController",
          "package": "Holumbus-Storage",
          "signature": "StreamName -\u003e Maybe PortNumber -\u003e IO ControllerData",
          "source": "src/Holumbus-FileSystem-Controller-ControllerData.html#newController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller ControllerData",
          "module": "Holumbus.FileSystem.Controller.ControllerData",
          "name": "newController",
          "normalized": "StreamName-\u003eMaybe PortNumber-\u003eIO ControllerData",
          "package": "Holumbus-Storage",
          "partial": "Controller",
          "signature": "StreamName-\u003eMaybe PortNumber-\u003eIO ControllerData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerData.html#v:newController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "ControllerPort",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Controller-ControllerPort.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem Controller ControllerPort",
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "ControllerPort",
          "package": "Holumbus-Storage",
          "partial": "Controller Port",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerPort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "ControllerPort",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Controller-ControllerPort.html#ControllerPort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller ControllerPort",
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "ControllerPort",
          "package": "Holumbus-Storage",
          "partial": "Controller Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerPort.html#t:ControllerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new ControllerPort\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "newControllerPort",
          "package": "Holumbus-Storage",
          "signature": "StreamName -\u003e Maybe SocketId -\u003e IO ControllerPort",
          "source": "src/Holumbus-FileSystem-Controller-ControllerPort.html#newControllerPort",
          "type": "function"
        },
        "index": {
          "description": "Creates new ControllerPort",
          "hierarchy": "Holumbus FileSystem Controller ControllerPort",
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "newControllerPort",
          "normalized": "StreamName-\u003eMaybe SocketId-\u003eIO ControllerPort",
          "package": "Holumbus-Storage",
          "partial": "Controller Port",
          "signature": "StreamName-\u003eMaybe SocketId-\u003eIO ControllerPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerPort.html#v:newControllerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "newControllerPortFromServerPort",
          "package": "Holumbus-Storage",
          "signature": "ServerPort -\u003e ControllerPort",
          "source": "src/Holumbus-FileSystem-Controller-ControllerPort.html#newControllerPortFromServerPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller ControllerPort",
          "module": "Holumbus.FileSystem.Controller.ControllerPort",
          "name": "newControllerPortFromServerPort",
          "normalized": "ServerPort-\u003eControllerPort",
          "package": "Holumbus-Storage",
          "partial": "Controller Port From Server Port",
          "signature": "ServerPort-\u003eControllerPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller-ControllerPort.html#v:newControllerPortFromServerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Controller",
          "name": "Controller",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Controller.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "Controller",
          "package": "Holumbus-Storage",
          "partial": "Controller",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "ControllerClass",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Controller.html#ControllerClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "ControllerClass",
          "package": "Holumbus-Storage",
          "partial": "Controller Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#t:ControllerClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "appendFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e IdType -\u003e c -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Controller.html#appendFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "appendFile",
          "normalized": "FileId-\u003eIdType-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eIdType-\u003ec-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "closeController",
          "package": "Holumbus-Storage",
          "signature": "c -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Controller.html#closeController",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "closeController",
          "normalized": "a-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "Controller",
          "signature": "c-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:closeController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "containsFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e c -\u003e IO Bool",
          "source": "src/Holumbus-FileSystem-Controller.html#containsFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "containsFile",
          "normalized": "FileId-\u003ea-\u003eIO Bool",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003ec-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:containsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "createFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e IdType -\u003e c -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Controller.html#createFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "createFile",
          "normalized": "FileId-\u003eIdType-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eIdType-\u003ec-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:createFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "createFiles",
          "package": "Holumbus-Storage",
          "signature": "[(FileId, IdType)] -\u003e c -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Controller.html#createFiles",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "createFiles",
          "normalized": "[(FileId,IdType)]-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "Files",
          "signature": "[(FileId,IdType)]-\u003ec-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:createFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "deleteFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e IdType -\u003e c -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Controller.html#deleteFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "deleteFile",
          "normalized": "FileId-\u003eIdType-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eIdType-\u003ec-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "getFileSites",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e c -\u003e IO (Set SiteId)",
          "source": "src/Holumbus-FileSystem-Controller.html#getFileSites",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "getFileSites",
          "normalized": "FileId-\u003ea-\u003eIO(Set SiteId)",
          "package": "Holumbus-Storage",
          "partial": "File Sites",
          "signature": "FileId-\u003ec-\u003eIO(Set SiteId)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:getFileSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortForFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e Integer -\u003e SiteId -\u003e c -\u003e IO (Maybe ClientPort)",
          "source": "src/Holumbus-FileSystem-Controller.html#getNearestNodePortForFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortForFile",
          "normalized": "FileId-\u003eInteger-\u003eSiteId-\u003ea-\u003eIO(Maybe ClientPort)",
          "package": "Holumbus-Storage",
          "partial": "Nearest Node Port For File",
          "signature": "FileId-\u003eInteger-\u003eSiteId-\u003ec-\u003eIO(Maybe ClientPort)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:getNearestNodePortForFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortForFiles",
          "package": "Holumbus-Storage",
          "signature": "[(FileId, Integer)] -\u003e SiteId -\u003e c -\u003e IO ClientPortMap",
          "source": "src/Holumbus-FileSystem-Controller.html#getNearestNodePortForFiles",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortForFiles",
          "normalized": "[(FileId,Integer)]-\u003eSiteId-\u003ea-\u003eIO ClientPortMap",
          "package": "Holumbus-Storage",
          "partial": "Nearest Node Port For Files",
          "signature": "[(FileId,Integer)]-\u003eSiteId-\u003ec-\u003eIO ClientPortMap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:getNearestNodePortForFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortWithFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e SiteId -\u003e c -\u003e IO (Maybe ClientPort)",
          "source": "src/Holumbus-FileSystem-Controller.html#getNearestNodePortWithFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortWithFile",
          "normalized": "FileId-\u003eSiteId-\u003ea-\u003eIO(Maybe ClientPort)",
          "package": "Holumbus-Storage",
          "partial": "Nearest Node Port With File",
          "signature": "FileId-\u003eSiteId-\u003ec-\u003eIO(Maybe ClientPort)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:getNearestNodePortWithFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortWithFiles",
          "package": "Holumbus-Storage",
          "signature": "[FileId] -\u003e SiteId -\u003e c -\u003e IO ClientPortMap",
          "source": "src/Holumbus-FileSystem-Controller.html#getNearestNodePortWithFiles",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Controller",
          "module": "Holumbus.FileSystem.Controller",
          "name": "getNearestNodePortWithFiles",
          "normalized": "[FileId]-\u003eSiteId-\u003ea-\u003eIO ClientPortMap",
          "package": "Holumbus-Storage",
          "partial": "Nearest Node Port With Files",
          "signature": "[FileId]-\u003eSiteId-\u003ec-\u003eIO ClientPortMap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Controller.html#v:getNearestNodePortWithFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileSystem",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-FileSystem.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileSystem",
          "package": "Holumbus-Storage",
          "partial": "File System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSClientConf",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSClientConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSClientConf",
          "package": "Holumbus-Storage",
          "partial": "FSClient Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FSClientConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSControllerConf",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSControllerConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSControllerConf",
          "package": "Holumbus-Storage",
          "partial": "FSController Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FSControllerConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSNodeConf",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSNodeConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSNodeConf",
          "package": "Holumbus-Storage",
          "partial": "FSNode Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FSNodeConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSStandaloneConf",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSStandaloneConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSStandaloneConf",
          "package": "Holumbus-Storage",
          "partial": "FSStandalone Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FSStandaloneConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileContent",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#FileContent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileContent",
          "package": "Holumbus-Storage",
          "partial": "File Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emetadata of a file, known by the storage.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileData",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "data"
        },
        "index": {
          "description": "metadata of file known by the storage",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileData",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file-identifier, should be unique in the whole system and\n   be an instance of the classes show, eq, ord and binary\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileId",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#FileId",
          "type": "type"
        },
        "index": {
          "description": "The file-identifier should be unique in the whole system and be an instance of the classes show eq ord and binary",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileId",
          "package": "Holumbus-Storage",
          "partial": "File Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileSystem",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FileSystem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FileSystem",
          "package": "Holumbus-Storage",
          "partial": "File System",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#t:FileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSClientConf",
          "package": "Holumbus-Storage",
          "signature": "FSClientConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSClientConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSClientConf",
          "package": "Holumbus-Storage",
          "partial": "FSClient Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:FSClientConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSControllerConf",
          "package": "Holumbus-Storage",
          "signature": "FSControllerConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSControllerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSControllerConf",
          "package": "Holumbus-Storage",
          "partial": "FSController Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:FSControllerConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSNodeConf",
          "package": "Holumbus-Storage",
          "signature": "FSNodeConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSNodeConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSNodeConf",
          "package": "Holumbus-Storage",
          "partial": "FSNode Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:FSNodeConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSStandaloneConf",
          "package": "Holumbus-Storage",
          "signature": "FSStandaloneConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSStandaloneConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "FSStandaloneConf",
          "package": "Holumbus-Storage",
          "partial": "FSStandalone Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:FSStandaloneConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "MkFileData",
          "package": "Holumbus-Storage",
          "signature": "MkFileData",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:MkFileData\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:MkFileData\"]"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "MkFileData",
          "package": "Holumbus-Storage",
          "partial": "Mk File Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:MkFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends a file in the fileSystem.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "appendFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileContent -\u003e FileSystem -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-FileSystem.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Appends file in the fileSystem",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "appendFile",
          "normalized": "FileId-\u003eFileContent-\u003eFileSystem-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eFileContent-\u003eFileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the filesystem.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "closeFileSystem",
          "package": "Holumbus-Storage",
          "signature": "FileSystem -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-FileSystem.html#closeFileSystem",
          "type": "function"
        },
        "index": {
          "description": "Closes the filesystem",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "closeFileSystem",
          "normalized": "FileSystem-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File System",
          "signature": "FileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:closeFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a file is in the filesystem\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "containsFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO Bool",
          "source": "src/Holumbus-FileSystem-FileSystem.html#containsFile",
          "type": "function"
        },
        "index": {
          "description": "Checks if file is in the filesystem",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "containsFile",
          "normalized": "FileId-\u003eFileSystem-\u003eIO Bool",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eFileSystem-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:containsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a file in the filesystem.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "createFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileContent -\u003e FileSystem -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-FileSystem.html#createFile",
          "type": "function"
        },
        "index": {
          "description": "Creates file in the filesystem",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "createFile",
          "normalized": "FileId-\u003eFileContent-\u003eFileSystem-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eFileContent-\u003eFileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:createFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a list of files in the filesystem.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "createFiles",
          "package": "Holumbus-Storage",
          "signature": "[(FileId, FileContent)] -\u003e FileSystem -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-FileSystem.html#createFiles",
          "type": "function"
        },
        "index": {
          "description": "Creates list of files in the filesystem",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "createFiles",
          "normalized": "[(FileId,FileContent)]-\u003eFileSystem-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "Files",
          "signature": "[(FileId,FileContent)]-\u003eFileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:createFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSClientConfig",
          "package": "Holumbus-Storage",
          "signature": "FSClientConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#defaultFSClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSClientConfig",
          "package": "Holumbus-Storage",
          "partial": "FSClient Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:defaultFSClientConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSControllerConfig",
          "package": "Holumbus-Storage",
          "signature": "FSControllerConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#defaultFSControllerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSControllerConfig",
          "package": "Holumbus-Storage",
          "partial": "FSController Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:defaultFSControllerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSNodeConfig",
          "package": "Holumbus-Storage",
          "signature": "FSNodeConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#defaultFSNodeConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSNodeConfig",
          "package": "Holumbus-Storage",
          "partial": "FSNode Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:defaultFSNodeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSStandaloneConfig",
          "package": "Holumbus-Storage",
          "signature": "FSStandaloneConf",
          "source": "src/Holumbus-FileSystem-FileSystem.html#defaultFSStandaloneConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "defaultFSStandaloneConfig",
          "package": "Holumbus-Storage",
          "partial": "FSStandalone Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:defaultFSStandaloneConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a file from the filesystem.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "deleteFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-FileSystem.html#deleteFile",
          "type": "function"
        },
        "index": {
          "description": "Deletes file from the filesystem",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "deleteFile",
          "normalized": "FileId-\u003eFileSystem-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eFileSystem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fclc_SocketId",
          "package": "Holumbus-Storage",
          "signature": "Maybe SocketId",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSClientConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fclc_SocketId",
          "package": "Holumbus-Storage",
          "partial": "Socket Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fclc_SocketId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fclc_StreamName",
          "package": "Holumbus-Storage",
          "signature": "StreamName",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSClientConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fclc_StreamName",
          "package": "Holumbus-Storage",
          "partial": "Stream Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fclc_StreamName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fcoc_PortNumber",
          "package": "Holumbus-Storage",
          "signature": "Maybe PortNumber",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSControllerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fcoc_PortNumber",
          "package": "Holumbus-Storage",
          "partial": "Port Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fcoc_PortNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fcoc_StreamName",
          "package": "Holumbus-Storage",
          "signature": "StreamName",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSControllerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fcoc_StreamName",
          "package": "Holumbus-Storage",
          "partial": "Stream Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fcoc_StreamName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreation date\n\u003c/p\u003e",
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "fd_CreationDate",
          "package": "Holumbus-Storage",
          "signature": "UTCTime",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_CreationDate\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:fd_CreationDate\"]"
        },
        "index": {
          "description": "creation date",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fd_CreationDate",
          "package": "Holumbus-Storage",
          "partial": "Creation Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_CreationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilename\n\u003c/p\u003e",
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "fd_FileId",
          "package": "Holumbus-Storage",
          "signature": "FileId",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_FileId\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:fd_FileId\"]"
        },
        "index": {
          "description": "filename",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fd_FileId",
          "package": "Holumbus-Storage",
          "partial": "File Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_FileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash value\n\u003c/p\u003e",
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "fd_Hashvalue",
          "package": "Holumbus-Storage",
          "signature": "Integer",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_Hashvalue\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:fd_Hashvalue\"]"
        },
        "index": {
          "description": "hash value",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fd_Hashvalue",
          "package": "Holumbus-Storage",
          "partial": "Hashvalue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_Hashvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elast modified date\n\u003c/p\u003e",
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "fd_LastModifiedDate",
          "package": "Holumbus-Storage",
          "signature": "UTCTime",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_LastModifiedDate\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:fd_LastModifiedDate\"]"
        },
        "index": {
          "description": "last modified date",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fd_LastModifiedDate",
          "package": "Holumbus-Storage",
          "partial": "Last Modified Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_LastModifiedDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilesize\n\u003c/p\u003e",
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "fd_Size",
          "package": "Holumbus-Storage",
          "signature": "Integer",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_Size\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:fd_Size\"]"
        },
        "index": {
          "description": "filesize",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fd_Size",
          "package": "Holumbus-Storage",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fd_Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_SocketId",
          "package": "Holumbus-Storage",
          "signature": "Maybe SocketId",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSNodeConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_SocketId",
          "package": "Holumbus-Storage",
          "partial": "Socket Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fnoc_SocketId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_StorageFile",
          "package": "Holumbus-Storage",
          "signature": "FilePath",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSNodeConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_StorageFile",
          "package": "Holumbus-Storage",
          "partial": "Storage File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fnoc_StorageFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_StoragePath",
          "package": "Holumbus-Storage",
          "signature": "FilePath",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSNodeConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_StoragePath",
          "package": "Holumbus-Storage",
          "partial": "Storage Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fnoc_StoragePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_StreamName",
          "package": "Holumbus-Storage",
          "signature": "StreamName",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSNodeConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fnoc_StreamName",
          "package": "Holumbus-Storage",
          "partial": "Stream Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fnoc_StreamName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fstc_StorageFile",
          "package": "Holumbus-Storage",
          "signature": "FilePath",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSStandaloneConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fstc_StorageFile",
          "package": "Holumbus-Storage",
          "partial": "Storage File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fstc_StorageFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fstc_StoragePath",
          "package": "Holumbus-Storage",
          "signature": "FilePath",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSStandaloneConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fstc_StoragePath",
          "package": "Holumbus-Storage",
          "partial": "Storage Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fstc_StoragePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fstc_StreamName",
          "package": "Holumbus-Storage",
          "signature": "StreamName",
          "source": "src/Holumbus-FileSystem-FileSystem.html#FSStandaloneConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "fstc_StreamName",
          "package": "Holumbus-Storage",
          "partial": "Stream Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:fstc_StreamName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.FileSystem.FileSystem\",\"Holumbus.FileSystem.Storage\"]",
          "name": "getContentLength",
          "package": "Holumbus-Storage",
          "signature": "FileContent -\u003e Integer",
          "source": "src/Holumbus-FileSystem-Storage.html#getContentLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getContentLength\",\"http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:getContentLength\"]"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getContentLength",
          "normalized": "FileContent-\u003eInteger",
          "package": "Holumbus-Storage",
          "partial": "Content Length",
          "signature": "FileContent-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the file content from the nearest site whitch holds the file\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getFileContent",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO (Maybe FileContent)",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getFileContent",
          "type": "function"
        },
        "index": {
          "description": "Gets the file content from the nearest site whitch holds the file",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getFileContent",
          "normalized": "FileId-\u003eFileSystem-\u003eIO(Maybe FileContent)",
          "package": "Holumbus-Storage",
          "partial": "File Content",
          "signature": "FileId-\u003eFileSystem-\u003eIO(Maybe FileContent)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the file data from the nearest site whitch holds the file\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getFileData",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO (Maybe FileData)",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getFileData",
          "type": "function"
        },
        "index": {
          "description": "Gets the file data from the nearest site whitch holds the file",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getFileData",
          "normalized": "FileId-\u003eFileSystem-\u003eIO(Maybe FileData)",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "signature": "FileId-\u003eFileSystem-\u003eIO(Maybe FileData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a set of all sites the file exists.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getFileSites",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO (Set SiteId)",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getFileSites",
          "type": "function"
        },
        "index": {
          "description": "Get set of all sites the file exists",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getFileSites",
          "normalized": "FileId-\u003eFileSystem-\u003eIO(Set SiteId)",
          "package": "Holumbus-Storage",
          "partial": "File Sites",
          "signature": "FileId-\u003eFileSystem-\u003eIO(Set SiteId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getFileSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the file content from the nearest site whitch holds the file\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getMultiFileContent",
          "package": "Holumbus-Storage",
          "signature": "[FileId] -\u003e FileSystem -\u003e IO [(FileId, FileContent)]",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getMultiFileContent",
          "type": "function"
        },
        "index": {
          "description": "Gets the file content from the nearest site whitch holds the file",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getMultiFileContent",
          "normalized": "[FileId]-\u003eFileSystem-\u003eIO[(FileId,FileContent)]",
          "package": "Holumbus-Storage",
          "partial": "Multi File Content",
          "signature": "[FileId]-\u003eFileSystem-\u003eIO[(FileId,FileContent)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getMultiFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getMySiteId",
          "package": "Holumbus-Storage",
          "signature": "FileSystem -\u003e IO SiteId",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getMySiteId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getMySiteId",
          "normalized": "FileSystem-\u003eIO SiteId",
          "package": "Holumbus-Storage",
          "partial": "My Site Id",
          "signature": "FileSystem-\u003eIO SiteId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getMySiteId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the nearest NodePort on which we can create our fileId. we need the\n   content-size to get a node with enough space.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getNearestNodePortForFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e Integer -\u003e FileSystem -\u003e IO (Maybe NodePort)",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getNearestNodePortForFile",
          "type": "function"
        },
        "index": {
          "description": "gets the nearest NodePort on which we can create our fileId we need the content-size to get node with enough space",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getNearestNodePortForFile",
          "normalized": "FileId-\u003eInteger-\u003eFileSystem-\u003eIO(Maybe NodePort)",
          "package": "Holumbus-Storage",
          "partial": "Nearest Node Port For File",
          "signature": "FileId-\u003eInteger-\u003eFileSystem-\u003eIO(Maybe NodePort)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getNearestNodePortForFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the nearest NodePort with our fileId\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getNearestNodePortWithFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO (Maybe NodePort)",
          "source": "src/Holumbus-FileSystem-FileSystem.html#getNearestNodePortWithFile",
          "type": "function"
        },
        "index": {
          "description": "gets the nearest NodePort with our fileId",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "getNearestNodePortWithFile",
          "normalized": "FileId-\u003eFileSystem-\u003eIO(Maybe NodePort)",
          "package": "Holumbus-Storage",
          "partial": "Nearest Node Port With File",
          "signature": "FileId-\u003eFileSystem-\u003eIO(Maybe NodePort)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:getNearestNodePortWithFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests, if the local storage (if one exists) holds the file\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "isFileLocal",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileSystem -\u003e IO Bool",
          "source": "src/Holumbus-FileSystem-FileSystem.html#isFileLocal",
          "type": "function"
        },
        "index": {
          "description": "Tests if the local storage if one exists holds the file",
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "isFileLocal",
          "normalized": "FileId-\u003eFileSystem-\u003eIO Bool",
          "package": "Holumbus-Storage",
          "partial": "File Local",
          "signature": "FileId-\u003eFileSystem-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:isFileLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkFileSystemClient",
          "package": "Holumbus-Storage",
          "signature": "FSClientConf -\u003e IO FileSystem",
          "source": "src/Holumbus-FileSystem-FileSystem.html#mkFileSystemClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkFileSystemClient",
          "normalized": "FSClientConf-\u003eIO FileSystem",
          "package": "Holumbus-Storage",
          "partial": "File System Client",
          "signature": "FSClientConf-\u003eIO FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:mkFileSystemClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkFileSystemController",
          "package": "Holumbus-Storage",
          "signature": "FSControllerConf -\u003e IO FileSystem",
          "source": "src/Holumbus-FileSystem-FileSystem.html#mkFileSystemController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkFileSystemController",
          "normalized": "FSControllerConf-\u003eIO FileSystem",
          "package": "Holumbus-Storage",
          "partial": "File System Controller",
          "signature": "FSControllerConf-\u003eIO FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:mkFileSystemController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkFileSystemNode",
          "package": "Holumbus-Storage",
          "signature": "FSNodeConf -\u003e IO FileSystem",
          "source": "src/Holumbus-FileSystem-FileSystem.html#mkFileSystemNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkFileSystemNode",
          "normalized": "FSNodeConf-\u003eIO FileSystem",
          "package": "Holumbus-Storage",
          "partial": "File System Node",
          "signature": "FSNodeConf-\u003eIO FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:mkFileSystemNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkStandaloneFileSystem",
          "package": "Holumbus-Storage",
          "signature": "FSStandaloneConf -\u003e IO FileSystem",
          "source": "src/Holumbus-FileSystem-FileSystem.html#mkStandaloneFileSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem FileSystem",
          "module": "Holumbus.FileSystem.FileSystem",
          "name": "mkStandaloneFileSystem",
          "normalized": "FSStandaloneConf-\u003eIO FileSystem",
          "package": "Holumbus-Storage",
          "partial": "Standalone File System",
          "signature": "FSStandaloneConf-\u003eIO FileSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-FileSystem.html#v:mkStandaloneFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module contains all message types which are exchanged between node and\n  Controller.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Messages",
          "name": "Messages",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html",
          "type": "module"
        },
        "index": {
          "description": "Version This module contains all message types which are exchanged between node and Controller",
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "Messages",
          "package": "Holumbus-Storage",
          "partial": "Messages",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "ClientPortMap",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html#ClientPortMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "ClientPortMap",
          "package": "Holumbus-Storage",
          "partial": "Client Port Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#t:ClientPortMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests datatype, which is send to a filesystem Controller.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Messages",
          "name": "ControllerRequestMessage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "data"
        },
        "index": {
          "description": "Requests datatype which is send to filesystem Controller",
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "ControllerRequestMessage",
          "package": "Holumbus-Storage",
          "partial": "Controller Request Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#t:ControllerRequestMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse datatype from a filesystem Controller.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Messages",
          "name": "ControllerResponseMessage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "data"
        },
        "index": {
          "description": "Response datatype from filesystem Controller",
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "ControllerResponseMessage",
          "package": "Holumbus-Storage",
          "partial": "Controller Response Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#t:ControllerResponseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NodeId",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NodeId",
          "package": "Holumbus-Storage",
          "partial": "Node Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests datatype, which is send to a filesystem node.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NodeRequestMessage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "data"
        },
        "index": {
          "description": "Requests datatype which is send to filesystem node",
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NodeRequestMessage",
          "package": "Holumbus-Storage",
          "partial": "Node Request Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#t:NodeRequestMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse datatype from a filesystem node.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NodeResponseMessage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "data"
        },
        "index": {
          "description": "Response datatype from filesystem node",
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NodeResponseMessage",
          "package": "Holumbus-Storage",
          "partial": "Node Response Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#t:NodeResponseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqAppend",
          "package": "Holumbus-Storage",
          "signature": "CReqAppend FileId NodeId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqAppend",
          "package": "Holumbus-Storage",
          "partial": "CReq Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqContains",
          "package": "Holumbus-Storage",
          "signature": "CReqContains FileId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqContains",
          "package": "Holumbus-Storage",
          "partial": "CReq Contains",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqCreate",
          "package": "Holumbus-Storage",
          "signature": "CReqCreate FileId NodeId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqCreate",
          "package": "Holumbus-Storage",
          "partial": "CReq Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqCreateS",
          "package": "Holumbus-Storage",
          "signature": "CReqCreateS [(FileId, NodeId)]",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqCreateS",
          "normalized": "CReqCreateS[(FileId,NodeId)]",
          "package": "Holumbus-Storage",
          "partial": "CReq Create",
          "signature": "CReqCreateS[(FileId,NodeId)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqCreateS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqDelete",
          "package": "Holumbus-Storage",
          "signature": "CReqDelete FileId NodeId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqDelete",
          "package": "Holumbus-Storage",
          "partial": "CReq Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetFileSites",
          "package": "Holumbus-Storage",
          "signature": "CReqGetFileSites FileId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetFileSites",
          "package": "Holumbus-Storage",
          "partial": "CReq Get File Sites",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqGetFileSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortForFile",
          "package": "Holumbus-Storage",
          "signature": "CReqGetNearestNodePortForFile FileId Integer SiteId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortForFile",
          "package": "Holumbus-Storage",
          "partial": "CReq Get Nearest Node Port For File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqGetNearestNodePortForFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortForFiles",
          "package": "Holumbus-Storage",
          "signature": "CReqGetNearestNodePortForFiles [(FileId, Integer)] SiteId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortForFiles",
          "normalized": "CReqGetNearestNodePortForFiles[(FileId,Integer)]SiteId",
          "package": "Holumbus-Storage",
          "partial": "CReq Get Nearest Node Port For Files",
          "signature": "CReqGetNearestNodePortForFiles[(FileId,Integer)]SiteId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqGetNearestNodePortForFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortWithFile",
          "package": "Holumbus-Storage",
          "signature": "CReqGetNearestNodePortWithFile FileId SiteId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortWithFile",
          "package": "Holumbus-Storage",
          "partial": "CReq Get Nearest Node Port With File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqGetNearestNodePortWithFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortWithFiles",
          "package": "Holumbus-Storage",
          "signature": "CReqGetNearestNodePortWithFiles [FileId] SiteId",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqGetNearestNodePortWithFiles",
          "normalized": "CReqGetNearestNodePortWithFiles[FileId]SiteId",
          "package": "Holumbus-Storage",
          "partial": "CReq Get Nearest Node Port With Files",
          "signature": "CReqGetNearestNodePortWithFiles[FileId]SiteId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqGetNearestNodePortWithFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqUnknown",
          "package": "Holumbus-Storage",
          "signature": "CReqUnknown",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CReqUnknown",
          "package": "Holumbus-Storage",
          "partial": "CReq Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CReqUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspContains",
          "package": "Holumbus-Storage",
          "signature": "CRspContains Bool",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspContains",
          "package": "Holumbus-Storage",
          "partial": "CRsp Contains",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspError",
          "package": "Holumbus-Storage",
          "signature": "CRspError String",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspError",
          "package": "Holumbus-Storage",
          "partial": "CRsp Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetFileSites",
          "package": "Holumbus-Storage",
          "signature": "CRspGetFileSites (Set SiteId)",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetFileSites",
          "package": "Holumbus-Storage",
          "partial": "CRsp Get File Sites",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspGetFileSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortForFile",
          "package": "Holumbus-Storage",
          "signature": "CRspGetNearestNodePortForFile (Maybe ClientPort)",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortForFile",
          "package": "Holumbus-Storage",
          "partial": "CRsp Get Nearest Node Port For File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspGetNearestNodePortForFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortForFiles",
          "package": "Holumbus-Storage",
          "signature": "CRspGetNearestNodePortForFiles ClientPortMap",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortForFiles",
          "package": "Holumbus-Storage",
          "partial": "CRsp Get Nearest Node Port For Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspGetNearestNodePortForFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortWithFile",
          "package": "Holumbus-Storage",
          "signature": "CRspGetNearestNodePortWithFile (Maybe ClientPort)",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortWithFile",
          "package": "Holumbus-Storage",
          "partial": "CRsp Get Nearest Node Port With File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspGetNearestNodePortWithFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortWithFiles",
          "package": "Holumbus-Storage",
          "signature": "CRspGetNearestNodePortWithFiles ClientPortMap",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspGetNearestNodePortWithFiles",
          "package": "Holumbus-Storage",
          "partial": "CRsp Get Nearest Node Port With Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspGetNearestNodePortWithFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspSuccess",
          "package": "Holumbus-Storage",
          "signature": "CRspSuccess",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspSuccess",
          "package": "Holumbus-Storage",
          "partial": "CRsp Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspUnknown",
          "package": "Holumbus-Storage",
          "signature": "CRspUnknown",
          "source": "src/Holumbus-FileSystem-Messages.html#ControllerResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "CRspUnknown",
          "package": "Holumbus-Storage",
          "partial": "CRsp Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:CRspUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqAppend",
          "package": "Holumbus-Storage",
          "signature": "NReqAppend FileId FileContent",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqAppend",
          "package": "Holumbus-Storage",
          "partial": "NReq Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqContains",
          "package": "Holumbus-Storage",
          "signature": "NReqContains FileId",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqContains",
          "package": "Holumbus-Storage",
          "partial": "NReq Contains",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqCopy",
          "package": "Holumbus-Storage",
          "signature": "NReqCopy FileId ClientPort",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqCopy",
          "package": "Holumbus-Storage",
          "partial": "NReq Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqCreate",
          "package": "Holumbus-Storage",
          "signature": "NReqCreate FileId FileContent",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqCreate",
          "package": "Holumbus-Storage",
          "partial": "NReq Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqCreateS",
          "package": "Holumbus-Storage",
          "signature": "NReqCreateS [(FileId, FileContent)]",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqCreateS",
          "normalized": "NReqCreateS[(FileId,FileContent)]",
          "package": "Holumbus-Storage",
          "partial": "NReq Create",
          "signature": "NReqCreateS[(FileId,FileContent)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqCreateS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqDelete",
          "package": "Holumbus-Storage",
          "signature": "NReqDelete FileId Bool",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqDelete",
          "package": "Holumbus-Storage",
          "partial": "NReq Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetFileContent",
          "package": "Holumbus-Storage",
          "signature": "NReqGetFileContent FileId",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetFileContent",
          "package": "Holumbus-Storage",
          "partial": "NReq Get File Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqGetFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetFileData",
          "package": "Holumbus-Storage",
          "signature": "NReqGetFileData FileId",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetFileData",
          "package": "Holumbus-Storage",
          "partial": "NReq Get File Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqGetFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetFileIds",
          "package": "Holumbus-Storage",
          "signature": "NReqGetFileIds",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetFileIds",
          "package": "Holumbus-Storage",
          "partial": "NReq Get File Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqGetFileIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetMultiFileContent",
          "package": "Holumbus-Storage",
          "signature": "NReqGetMultiFileContent [FileId]",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqGetMultiFileContent",
          "normalized": "NReqGetMultiFileContent[FileId]",
          "package": "Holumbus-Storage",
          "partial": "NReq Get Multi File Content",
          "signature": "NReqGetMultiFileContent[FileId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqGetMultiFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqUnknown",
          "package": "Holumbus-Storage",
          "signature": "NReqUnknown",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeRequestMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NReqUnknown",
          "package": "Holumbus-Storage",
          "partial": "NReq Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NReqUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspContains",
          "package": "Holumbus-Storage",
          "signature": "NRspContains Bool",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspContains",
          "package": "Holumbus-Storage",
          "partial": "NRsp Contains",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspError",
          "package": "Holumbus-Storage",
          "signature": "NRspError String",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspError",
          "package": "Holumbus-Storage",
          "partial": "NRsp Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetFileContent",
          "package": "Holumbus-Storage",
          "signature": "NRspGetFileContent (Maybe FileContent)",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetFileContent",
          "package": "Holumbus-Storage",
          "partial": "NRsp Get File Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspGetFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetFileData",
          "package": "Holumbus-Storage",
          "signature": "NRspGetFileData (Maybe FileData)",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetFileData",
          "package": "Holumbus-Storage",
          "partial": "NRsp Get File Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspGetFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetFileIds",
          "package": "Holumbus-Storage",
          "signature": "NRspGetFileIds [FileId]",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetFileIds",
          "normalized": "NRspGetFileIds[FileId]",
          "package": "Holumbus-Storage",
          "partial": "NRsp Get File Ids",
          "signature": "NRspGetFileIds[FileId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspGetFileIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetMultiFileContent",
          "package": "Holumbus-Storage",
          "signature": "NRspGetMultiFileContent [(FileId, FileContent)]",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspGetMultiFileContent",
          "normalized": "NRspGetMultiFileContent[(FileId,FileContent)]",
          "package": "Holumbus-Storage",
          "partial": "NRsp Get Multi File Content",
          "signature": "NRspGetMultiFileContent[(FileId,FileContent)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspGetMultiFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspSuccess",
          "package": "Holumbus-Storage",
          "signature": "NRspSuccess",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspSuccess",
          "package": "Holumbus-Storage",
          "partial": "NRsp Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspUnknown",
          "package": "Holumbus-Storage",
          "signature": "NRspUnknown",
          "source": "src/Holumbus-FileSystem-Messages.html#NodeResponseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "NRspUnknown",
          "package": "Holumbus-Storage",
          "partial": "NRsp Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:NRspUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request to the server (stream) and handles the response and all\n   error cases. Very helpful when simulating a request response scheme\n   with the mailboxes.                    \n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Messages",
          "name": "performPortAction",
          "package": "Holumbus-Storage",
          "signature": "Port a-\u003e Stream b-\u003e Int-\u003e a-\u003e (b -\u003e IO (Maybe c))-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Sends request to the server stream and handles the response and all error cases Very helpful when simulating request response scheme with the mailboxes",
          "hierarchy": "Holumbus FileSystem Messages",
          "module": "Holumbus.FileSystem.Messages",
          "name": "performPortAction",
          "normalized": "Port a-\u003eStream b-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c",
          "package": "Holumbus-Storage",
          "partial": "Port Action",
          "signature": "Port a-\u003eStream b-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Messages.html#v:performPortAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Node.NodeData",
          "name": "NodeData",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Node-NodeData.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem Node NodeData",
          "module": "Holumbus.FileSystem.Node.NodeData",
          "name": "NodeData",
          "package": "Holumbus-Storage",
          "partial": "Node Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node-NodeData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode datatype.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Node.NodeData",
          "name": "NodeData",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Node-NodeData.html#NodeData",
          "type": "data"
        },
        "index": {
          "description": "Node datatype",
          "hierarchy": "Holumbus FileSystem Node NodeData",
          "module": "Holumbus.FileSystem.Node.NodeData",
          "name": "NodeData",
          "package": "Holumbus-Storage",
          "partial": "Node Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node-NodeData.html#t:NodeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node.NodeData",
          "name": "newNode",
          "package": "Holumbus-Storage",
          "signature": "StreamName -\u003e Maybe SocketId -\u003e FileStorage -\u003e IO Node",
          "source": "src/Holumbus-FileSystem-Node-NodeData.html#newNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node NodeData",
          "module": "Holumbus.FileSystem.Node.NodeData",
          "name": "newNode",
          "normalized": "StreamName-\u003eMaybe SocketId-\u003eFileStorage-\u003eIO Node",
          "package": "Holumbus-Storage",
          "partial": "Node",
          "signature": "StreamName-\u003eMaybe SocketId-\u003eFileStorage-\u003eIO Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node-NodeData.html#v:newNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Node.NodePort",
          "name": "NodePort",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Node-NodePort.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem Node NodePort",
          "module": "Holumbus.FileSystem.Node.NodePort",
          "name": "NodePort",
          "package": "Holumbus-Storage",
          "partial": "Node Port",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node-NodePort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node.NodePort",
          "name": "NodePort",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Node-NodePort.html#NodePort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node NodePort",
          "module": "Holumbus.FileSystem.Node.NodePort",
          "name": "NodePort",
          "package": "Holumbus-Storage",
          "partial": "Node Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node-NodePort.html#t:NodePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new NodePort.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Node.NodePort",
          "name": "newNodePort",
          "package": "Holumbus-Storage",
          "signature": "ClientPort -\u003e NodePort",
          "source": "src/Holumbus-FileSystem-Node-NodePort.html#newNodePort",
          "type": "function"
        },
        "index": {
          "description": "Creates new NodePort",
          "hierarchy": "Holumbus FileSystem Node NodePort",
          "module": "Holumbus.FileSystem.Node.NodePort",
          "name": "newNodePort",
          "normalized": "ClientPort-\u003eNodePort",
          "package": "Holumbus-Storage",
          "partial": "Node Port",
          "signature": "ClientPort-\u003eNodePort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node-NodePort.html#v:newNodePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Node",
          "name": "Node",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Node.html",
          "type": "module"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "Node",
          "package": "Holumbus-Storage",
          "partial": "Node",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "NodeClass",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Node.html#NodeClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "NodeClass",
          "package": "Holumbus-Storage",
          "partial": "Node Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#t:NodeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "appendFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileContent -\u003e n -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Node.html#appendFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "appendFile",
          "normalized": "FileId-\u003eFileContent-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eFileContent-\u003en-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "closeNode",
          "package": "Holumbus-Storage",
          "signature": "n -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Node.html#closeNode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "closeNode",
          "normalized": "a-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "Node",
          "signature": "n-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:closeNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "containsFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e n -\u003e IO Bool",
          "source": "src/Holumbus-FileSystem-Node.html#containsFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "containsFile",
          "normalized": "FileId-\u003ea-\u003eIO Bool",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003en-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:containsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "copyFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e ClientPort -\u003e n -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Node.html#copyFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "copyFile",
          "normalized": "FileId-\u003eClientPort-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eClientPort-\u003en-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:copyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "createFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileContent -\u003e n -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Node.html#createFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "createFile",
          "normalized": "FileId-\u003eFileContent-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eFileContent-\u003en-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:createFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "createFiles",
          "package": "Holumbus-Storage",
          "signature": "[(FileId, FileContent)] -\u003e n -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Node.html#createFiles",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "createFiles",
          "normalized": "[(FileId,FileContent)]-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "Files",
          "signature": "[(FileId,FileContent)]-\u003en-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:createFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "deleteFile",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e Bool -\u003e n -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-Node.html#deleteFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "deleteFile",
          "normalized": "FileId-\u003eBool-\u003ea-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "FileId-\u003eBool-\u003en-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "getFileContent",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e n -\u003e IO (Maybe FileContent)",
          "source": "src/Holumbus-FileSystem-Node.html#getFileContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "getFileContent",
          "normalized": "FileId-\u003ea-\u003eIO(Maybe FileContent)",
          "package": "Holumbus-Storage",
          "partial": "File Content",
          "signature": "FileId-\u003en-\u003eIO(Maybe FileContent)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:getFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "getFileData",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e n -\u003e IO (Maybe FileData)",
          "source": "src/Holumbus-FileSystem-Node.html#getFileData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "getFileData",
          "normalized": "FileId-\u003ea-\u003eIO(Maybe FileData)",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "signature": "FileId-\u003en-\u003eIO(Maybe FileData)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:getFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "getFileIds",
          "package": "Holumbus-Storage",
          "signature": "n -\u003e IO [FileId]",
          "source": "src/Holumbus-FileSystem-Node.html#getFileIds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "getFileIds",
          "normalized": "a-\u003eIO[FileId]",
          "package": "Holumbus-Storage",
          "partial": "File Ids",
          "signature": "n-\u003eIO[FileId]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:getFileIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Node",
          "name": "getMultiFileContent",
          "package": "Holumbus-Storage",
          "signature": "[FileId] -\u003e n -\u003e IO [(FileId, FileContent)]",
          "source": "src/Holumbus-FileSystem-Node.html#getMultiFileContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Node",
          "module": "Holumbus.FileSystem.Node",
          "name": "getMultiFileContent",
          "normalized": "[FileId]-\u003ea-\u003eIO[(FileId,FileContent)]",
          "package": "Holumbus-Storage",
          "partial": "Multi File Content",
          "signature": "[FileId]-\u003en-\u003eIO[(FileId,FileContent)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Node.html#v:getMultiFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eImplementation of the storage class.\n  The FileStorage saves each file in a single physical file. The metadata of\n  the files is hold in an extra directory an saved on disk.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Storage.FileStorage",
          "name": "FileStorage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage-FileStorage.html",
          "type": "module"
        },
        "index": {
          "description": "Version Implementation of the storage class The FileStorage saves each file in single physical file The metadata of the files is hold in an extra directory an saved on disk",
          "hierarchy": "Holumbus FileSystem Storage FileStorage",
          "module": "Holumbus.FileSystem.Storage.FileStorage",
          "name": "FileStorage",
          "package": "Holumbus-Storage",
          "partial": "File Storage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage-FileStorage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe filestorage datatype.\n   Every file is physically saved in one file on the harddisk\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage.FileStorage",
          "name": "FileStorage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage-FileStorage.html#FileStorage",
          "type": "data"
        },
        "index": {
          "description": "The filestorage datatype Every file is physically saved in one file on the harddisk",
          "hierarchy": "Holumbus FileSystem Storage FileStorage",
          "module": "Holumbus.FileSystem.Storage.FileStorage",
          "name": "FileStorage",
          "package": "Holumbus-Storage",
          "partial": "File Storage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage-FileStorage.html#t:FileStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new filestorage, which is empty an contains no files \n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage.FileStorage",
          "name": "newFileStorage",
          "package": "Holumbus-Storage",
          "signature": "FilePath-\u003e FilePath-\u003e FileStorage",
          "type": "function"
        },
        "index": {
          "description": "Create new filestorage which is empty an contains no files",
          "hierarchy": "Holumbus FileSystem Storage FileStorage",
          "module": "Holumbus.FileSystem.Storage.FileStorage",
          "name": "newFileStorage",
          "normalized": "FilePath-\u003eFilePath-\u003eFileStorage",
          "package": "Holumbus-Storage",
          "partial": "File Storage",
          "signature": "FilePath-\u003eFilePath-\u003eFileStorage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage-FileStorage.html#v:newFileStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis Module contains the typeclass of a storage and the associated datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "Storage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html",
          "type": "module"
        },
        "index": {
          "description": "Version This Module contains the typeclass of storage and the associated datatypes",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "Storage",
          "package": "Holumbus-Storage",
          "partial": "Storage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Storage",
          "name": "FileContent",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#FileContent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "FileContent",
          "package": "Holumbus-Storage",
          "partial": "File Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#t:FileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emetadata of a file, known by the storage.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "FileData",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#FileData",
          "type": "data"
        },
        "index": {
          "description": "metadata of file known by the storage",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "FileData",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#t:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file-identifier, should be unique in the whole system and\n   be an instance of the classes show, eq, ord and binary\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "FileId",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#FileId",
          "type": "type"
        },
        "index": {
          "description": "The file-identifier should be unique in the whole system and be an instance of the classes show eq ord and binary",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "FileId",
          "package": "Holumbus-Storage",
          "partial": "File Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#t:FileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface of a storage.  \n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "Storage",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-Storage.html#Storage",
          "type": "class"
        },
        "index": {
          "description": "The interface of storage",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "Storage",
          "package": "Holumbus-Storage",
          "partial": "Storage",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#t:Storage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend the content of the file.\n   Create a new file, if it doesn't already exist\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "appendFile",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e FileId -\u003e FileContent -\u003e IO s",
          "source": "src/Holumbus-FileSystem-Storage.html#appendFile",
          "type": "method"
        },
        "index": {
          "description": "Append the content of the file Create new file if it doesn already exist",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "appendFile",
          "normalized": "a-\u003eFileId-\u003eFileContent-\u003eIO a",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "s-\u003eFileId-\u003eFileContent-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeinitialize the storage.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "closeStorage",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e IO s",
          "source": "src/Holumbus-FileSystem-Storage.html#closeStorage",
          "type": "method"
        },
        "index": {
          "description": "Deinitialize the storage",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "closeStorage",
          "normalized": "a-\u003eIO a",
          "package": "Holumbus-Storage",
          "partial": "Storage",
          "signature": "s-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:closeStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the file is already in the storage\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "containsFile",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e FileId -\u003e IO Bool",
          "source": "src/Holumbus-FileSystem-Storage.html#containsFile",
          "type": "method"
        },
        "index": {
          "description": "Check if the file is already in the storage",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "containsFile",
          "normalized": "a-\u003eFileId-\u003eIO Bool",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "s-\u003eFileId-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:containsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new file in the storage.\n   Overwrite the file if it already exists.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "createFile",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e FileId -\u003e FileContent -\u003e IO s",
          "source": "src/Holumbus-FileSystem-Storage.html#createFile",
          "type": "method"
        },
        "index": {
          "description": "Create new file in the storage Overwrite the file if it already exists",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "createFile",
          "normalized": "a-\u003eFileId-\u003eFileContent-\u003eIO a",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "s-\u003eFileId-\u003eFileContent-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:createFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new file data item.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "createFileData",
          "package": "Holumbus-Storage",
          "signature": "FileId -\u003e FileContent -\u003e IO FileData",
          "source": "src/Holumbus-FileSystem-Storage.html#createFileData",
          "type": "function"
        },
        "index": {
          "description": "Create new file data item",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "createFileData",
          "normalized": "FileId-\u003eFileContent-\u003eIO FileData",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "signature": "FileId-\u003eFileContent-\u003eIO FileData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:createFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.FileSystem.Storage",
          "name": "createFiles",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e [(FileId, FileContent)] -\u003e IO s",
          "source": "src/Holumbus-FileSystem-Storage.html#createFiles",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "createFiles",
          "normalized": "a-\u003e[(FileId,FileContent)]-\u003eIO a",
          "package": "Holumbus-Storage",
          "partial": "Files",
          "signature": "s-\u003e[(FileId,FileContent)]-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:createFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a file in the storage.\n   Nothing happens if the file doesn't exist\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "deleteFile",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e FileId -\u003e IO s",
          "source": "src/Holumbus-FileSystem-Storage.html#deleteFile",
          "type": "method"
        },
        "index": {
          "description": "Delete file in the storage Nothing happens if the file doesn exist",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "deleteFile",
          "normalized": "a-\u003eFileId-\u003eIO a",
          "package": "Holumbus-Storage",
          "partial": "File",
          "signature": "s-\u003eFileId-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the content of a file.\n   Return Nothing, if the file doesn't exist\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "getFileContent",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e FileId -\u003e IO (Maybe FileContent)",
          "source": "src/Holumbus-FileSystem-Storage.html#getFileContent",
          "type": "method"
        },
        "index": {
          "description": "Get the content of file Return Nothing if the file doesn exist",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "getFileContent",
          "normalized": "a-\u003eFileId-\u003eIO(Maybe FileContent)",
          "package": "Holumbus-Storage",
          "partial": "File Content",
          "signature": "s-\u003eFileId-\u003eIO(Maybe FileContent)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:getFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the metadata of a file.\n   Return Nothing, if the file doesn't exist\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "getFileData",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e FileId -\u003e IO (Maybe FileData)",
          "source": "src/Holumbus-FileSystem-Storage.html#getFileData",
          "type": "method"
        },
        "index": {
          "description": "Get the metadata of file Return Nothing if the file doesn exist",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "getFileData",
          "normalized": "a-\u003eFileId-\u003eIO(Maybe FileData)",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "signature": "s-\u003eFileId-\u003eIO(Maybe FileData)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:getFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the files in the storage   \n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "getFileIds",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e IO [FileId]",
          "source": "src/Holumbus-FileSystem-Storage.html#getFileIds",
          "type": "method"
        },
        "index": {
          "description": "List the files in the storage",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "getFileIds",
          "normalized": "a-\u003eIO[FileId]",
          "package": "Holumbus-Storage",
          "partial": "File Ids",
          "signature": "s-\u003eIO[FileId]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:getFileIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the storage.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "openStorage",
          "package": "Holumbus-Storage",
          "signature": "s -\u003e IO s",
          "source": "src/Holumbus-FileSystem-Storage.html#openStorage",
          "type": "method"
        },
        "index": {
          "description": "Initialize the storage",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "openStorage",
          "normalized": "a-\u003eIO a",
          "package": "Holumbus-Storage",
          "partial": "Storage",
          "signature": "s-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:openStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a new file data item with the date, size and hash value of\n   an old one. First parameter is the new item, second the old one.\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.Storage",
          "name": "updateFileData",
          "package": "Holumbus-Storage",
          "signature": "FileData -\u003e FileData -\u003e FileData",
          "source": "src/Holumbus-FileSystem-Storage.html#updateFileData",
          "type": "function"
        },
        "index": {
          "description": "Updates new file data item with the date size and hash value of an old one First parameter is the new item second the old one",
          "hierarchy": "Holumbus FileSystem Storage",
          "module": "Holumbus.FileSystem.Storage",
          "name": "updateFileData",
          "normalized": "FileData-\u003eFileData-\u003eFileData",
          "package": "Holumbus-Storage",
          "partial": "File Data",
          "signature": "FileData-\u003eFileData-\u003eFileData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-Storage.html#v:updateFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eA nice console-user interface for the Holumbus-Filesystem based on the\n  Holumbus-Commandline-Interface. To get a standalone FileSystem-Site, just\n  add a filesystem-object.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.FileSystem.UserInterface",
          "name": "UserInterface",
          "package": "Holumbus-Storage",
          "source": "src/Holumbus-FileSystem-UserInterface.html",
          "type": "module"
        },
        "index": {
          "description": "Version nice console-user interface for the Holumbus-Filesystem based on the Holumbus-Commandline-Interface To get standalone FileSystem-Site just add filesystem-object",
          "hierarchy": "Holumbus FileSystem UserInterface",
          "module": "Holumbus.FileSystem.UserInterface",
          "name": "UserInterface",
          "package": "Holumbus-Storage",
          "partial": "User Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-UserInterface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eruns the user interface... just add an fileSystem an a fancy version-number\n\u003c/p\u003e",
          "module": "Holumbus.FileSystem.UserInterface",
          "name": "runUI",
          "package": "Holumbus-Storage",
          "signature": "FileSystem -\u003e String -\u003e IO ()",
          "source": "src/Holumbus-FileSystem-UserInterface.html#runUI",
          "type": "function"
        },
        "index": {
          "description": "runs the user interface just add an fileSystem an fancy version-number",
          "hierarchy": "Holumbus FileSystem UserInterface",
          "module": "Holumbus.FileSystem.UserInterface",
          "name": "runUI",
          "normalized": "FileSystem-\u003eString-\u003eIO()",
          "package": "Holumbus-Storage",
          "partial": "UI",
          "signature": "FileSystem-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Storage/docs/Holumbus-FileSystem-UserInterface.html#v:runUI"
      }
    }
  ]
]