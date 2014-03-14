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
        "word": "dbus-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.TH",
          "name": "TH",
          "package": "dbus-th",
          "source": "src/DBus-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "TH",
          "package": "dbus-th",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBus names are used to identify particular clients on the message bus.\n A bus name may be either \u003cem\u003eunique\u003c/em\u003e or \u003cem\u003ewell-known\u003c/em\u003e, where unique names\n start with a colon. Bus names consist of alphanumeric characters separated\n by periods.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-bus\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "BusName",
          "package": "dbus-th",
          "type": "data"
        },
        "index": {
          "description": "Bus names are used to identify particular clients on the message bus bus name may be either unique or well-known where unique names start with colon Bus names consist of alphanumeric characters separated by periods See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-bus for details",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "BusName",
          "package": "dbus-th",
          "partial": "Bus Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:BusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn active client session to a message bus. Clients may send or receive\n method calls, and listen for or emit signals.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "Client",
          "package": "dbus-th",
          "type": "data"
        },
        "index": {
          "description": "An active client session to message bus Clients may send or receive method calls and listen for or emit signals",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "Client",
          "package": "dbus-th",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction with DBus name and Haskell name\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "Function",
          "package": "dbus-th",
          "source": "src/DBus-TH.html#Function",
          "type": "data"
        },
        "index": {
          "description": "Function with DBus name and Haskell name",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "Function",
          "package": "dbus-th",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterfaces are used to group a set of methods and signals within an\n exported object. Interface names consist of alphanumeric characters\n separated by periods.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-interface\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "InterfaceName",
          "package": "dbus-th",
          "type": "data"
        },
        "index": {
          "description": "Interfaces are used to group set of methods and signals within an exported object Interface names consist of alphanumeric characters separated by periods See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-interface for details",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "InterfaceName",
          "package": "dbus-th",
          "partial": "Interface Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:InterfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMember names are used to identify a single method or signal within an\n interface. Method names consist of alphanumeric characters.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-member\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "MemberName",
          "package": "dbus-th",
          "type": "data"
        },
        "index": {
          "description": "Member names are used to identify single method or signal within an interface Method names consist of alphanumeric characters See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-member for details",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "MemberName",
          "package": "dbus-th",
          "partial": "Member Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:MemberName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject paths are special strings, used to identify a particular object\n exported from a D-Bus application.\n\u003c/p\u003e\u003cp\u003eObject paths must begin with a slash, and consist of alphanumeric\n characters separated by slashes.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-marshaling-object-path\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "ObjectPath",
          "package": "dbus-th",
          "type": "data"
        },
        "index": {
          "description": "Object paths are special strings used to identify particular object exported from D-Bus application Object paths must begin with slash and consist of alphanumeric characters separated by slashes See http dbus.freedesktop.org doc dbus-specification.html message-protocol-marshaling-object-path for details",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "ObjectPath",
          "package": "dbus-th",
          "partial": "Object Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:ObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction signature\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "Signature",
          "package": "dbus-th",
          "source": "src/DBus-TH.html#Signature",
          "type": "data"
        },
        "index": {
          "description": "Function signature",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "Signature",
          "package": "dbus-th",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariants may contain any other built-in D-Bus value. Besides\n representing native \u003ccode\u003eVARIANT\u003c/code\u003e values, they allow type-safe storage and\n inspection of D-Bus collections.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "Variant",
          "package": "dbus-th",
          "type": "data"
        },
        "index": {
          "description": "Variants may contain any other built-in D-Bus value Besides representing native VARIANT values they allow type-safe storage and inspection of D-Bus collections",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "Variant",
          "package": "dbus-th",
          "partial": "Variant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#t:Variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Function from it's name and Signature.\n Sets fnDBusName == fnName.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "(=::)",
          "package": "dbus-th",
          "signature": "String -\u003e Signature -\u003e Function",
          "source": "src/DBus-TH.html#%3D%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "Create Function from it name and Signature Sets fnDBusName fnName",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "(=::) =::",
          "normalized": "String-\u003eSignature-\u003eFunction",
          "package": "dbus-th",
          "signature": "String-\u003eSignature-\u003eFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:-61-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.TH",
          "name": ":-\u003e",
          "package": "dbus-th",
          "signature": "Name :-\u003e Signature",
          "source": "src/DBus-TH.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": ":-\u003e",
          "normalized": "Name-\u003eSignature",
          "package": "dbus-th",
          "signature": "Name-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.TH",
          "name": "Function",
          "package": "dbus-th",
          "signature": "Function",
          "source": "src/DBus-TH.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "Function",
          "package": "dbus-th",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.TH",
          "name": "Return",
          "package": "dbus-th",
          "signature": "Return Name",
          "source": "src/DBus-TH.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "Return",
          "package": "dbus-th",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet specific Haskell name for Function.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "as",
          "package": "dbus-th",
          "signature": "Function -\u003e String -\u003e Function",
          "source": "src/DBus-TH.html#as",
          "type": "function"
        },
        "index": {
          "description": "Set specific Haskell name for Function",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "as",
          "normalized": "Function-\u003eString-\u003eFunction",
          "package": "dbus-th",
          "signature": "Function-\u003eString-\u003eFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:as"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_SESSION_BUS_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_SESSION_BUS_ADDRESS\u003c/code\u003e is unset, contains an\n invalid address, or if connecting to the bus failed.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "connectSession",
          "package": "dbus-th",
          "signature": "IO Client",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS SESSION BUS ADDRESS which must be set Throws ClientError if DBUS SESSION BUS ADDRESS is unset contains an invalid address or if connecting to the bus failed",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "connectSession",
          "package": "dbus-th",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:connectSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e, or to\n \u003ccode\u003eunix:path=/var/run/dbus/system_bus_socket\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e\n is not set.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e contains an invalid\n address, or if connecting to the bus failed.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "connectSystem",
          "package": "dbus-th",
          "signature": "IO Client",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS SYSTEM BUS ADDRESS or to unix path var run dbus system bus socket if DBUS SYSTEM BUS ADDRESS is not set Throws ClientError if DBUS SYSTEM BUS ADDRESS contains an invalid address or if connecting to the bus failed",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "connectSystem",
          "package": "dbus-th",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:connectSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction name to use in DBus\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "fnDBusName",
          "package": "dbus-th",
          "signature": "String",
          "source": "src/DBus-TH.html#Function",
          "type": "function"
        },
        "index": {
          "description": "Function name to use in DBus",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "fnDBusName",
          "package": "dbus-th",
          "partial": "DBus Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:fnDBusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction name to use in Haskell\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "fnName",
          "package": "dbus-th",
          "signature": "String",
          "source": "src/DBus-TH.html#Function",
          "type": "function"
        },
        "index": {
          "description": "Function name to use in Haskell",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "fnName",
          "package": "dbus-th",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:fnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction signature\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "fnSignature",
          "package": "dbus-th",
          "signature": "Signature",
          "source": "src/DBus-TH.html#Function",
          "type": "function"
        },
        "index": {
          "description": "Function signature",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "fnSignature",
          "package": "dbus-th",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:fnSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate bindings for methods in specific DBus interface.\n If second argument is (Just prefix), then prefix will be\n added to the beginning of all DBus names and removed from all\n Haskell names.\n\u003c/p\u003e",
          "module": "DBus.TH",
          "name": "interface",
          "package": "dbus-th",
          "signature": "String-\u003e String-\u003e String-\u003e Maybe String-\u003e [Function]-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generate bindings for methods in specific DBus interface If second argument is Just prefix then prefix will be added to the beginning of all DBus names and removed from all Haskell names",
          "hierarchy": "DBus TH",
          "module": "DBus.TH",
          "name": "interface",
          "normalized": "String-\u003eString-\u003eString-\u003eMaybe String-\u003e[Function]-\u003eQ[Dec]",
          "package": "dbus-th",
          "signature": "String-\u003eString-\u003eString-\u003eMaybe String-\u003e[Function]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-th/docs/DBus-TH.html#v:interface"
      }
    }
  ]
]