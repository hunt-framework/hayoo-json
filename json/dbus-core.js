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
        "word": "dbus-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "Address",
          "package": "dbus-core",
          "source": "src/DBus-Address.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "Address",
          "package": "dbus-core",
          "partial": "Address",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "Address",
          "package": "dbus-core",
          "source": "src/DBus-Address.html#Address",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "Address",
          "package": "dbus-core",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "address",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe Address",
          "source": "src/DBus-Address.html#address",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "address",
          "normalized": "Text-\u003eMaybe Address",
          "package": "dbus-core",
          "signature": "Text-\u003eMaybe Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "addressMethod",
          "package": "dbus-core",
          "signature": "Address -\u003e Text",
          "source": "src/DBus-Address.html#addressMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "addressMethod",
          "normalized": "Address-\u003eText",
          "package": "dbus-core",
          "partial": "Method",
          "signature": "Address-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:addressMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "addressParameters",
          "package": "dbus-core",
          "signature": "Address -\u003e Map Text Text",
          "source": "src/DBus-Address.html#addressParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "addressParameters",
          "normalized": "Address-\u003eMap Text Text",
          "package": "dbus-core",
          "partial": "Parameters",
          "signature": "Address-\u003eMap Text Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:addressParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "addressText",
          "package": "dbus-core",
          "signature": "Address -\u003e Text",
          "source": "src/DBus-Address.html#addressText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "addressText",
          "normalized": "Address-\u003eText",
          "package": "dbus-core",
          "partial": "Text",
          "signature": "Address-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:addressText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "addresses",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe [Address]",
          "source": "src/DBus-Address.html#addresses",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "addresses",
          "normalized": "Text-\u003eMaybe[Address]",
          "package": "dbus-core",
          "signature": "Text-\u003eMaybe[Address]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:addresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "getSession",
          "package": "dbus-core",
          "signature": "IO (Maybe [Address])",
          "source": "src/DBus-Address.html#getSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "getSession",
          "normalized": "IO(Maybe[Address])",
          "package": "dbus-core",
          "partial": "Session",
          "signature": "IO(Maybe[Address])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "getStarter",
          "package": "dbus-core",
          "signature": "IO (Maybe [Address])",
          "source": "src/DBus-Address.html#getStarter",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "getStarter",
          "normalized": "IO(Maybe[Address])",
          "package": "dbus-core",
          "partial": "Starter",
          "signature": "IO(Maybe[Address])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:getStarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Address",
          "name": "getSystem",
          "package": "dbus-core",
          "signature": "IO (Maybe [Address])",
          "source": "src/DBus-Address.html#getSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Address",
          "module": "DBus.Address",
          "name": "getSystem",
          "normalized": "IO(Maybe[Address])",
          "package": "dbus-core",
          "partial": "System",
          "signature": "IO(Maybe[Address])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Address.html#v:getSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "Simple",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "Simple",
          "package": "dbus-core",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to automatically generate a \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e from a return value. See\n \u003ccode\u003e\u003ca\u003eAutoSignature\u003c/a\u003e\u003c/code\u003e for some caveats about supported signatures.\n\u003c/p\u003e\u003cp\u003eTo match common Haskell use, if the return value is a tuple, it will be\n converted to a list of return values.\n\u003c/p\u003e",
          "module": "DBus.Client.Simple",
          "name": "AutoReply",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html#AutoReply",
          "type": "class"
        },
        "index": {
          "description": "Used to automatically generate Reply from return value See AutoSignature for some caveats about supported signatures To match common Haskell use if the return value is tuple it will be converted to list of return values",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "AutoReply",
          "package": "dbus-core",
          "partial": "Auto Reply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:AutoReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to automatically generate method signatures for introspection\n documents. To support automatic signatures, a method#8217;s parameters and\n return value must all be instances of \u003ccode\u003e\u003ca\u003eIsValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis class maps Haskell idioms to D&#8208;Bus; it is therefore unable to\n generate some signatures. In particular, it does not support methods\n which accept/return a single structure, or single&#8208;element structures.\n It also cannot generate signatures for methods with parameters or return\n values which are only instances of \u003ccode\u003e\u003ca\u003eIsVariant\u003c/a\u003e\u003c/code\u003e. For these cases, please\n use \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo match common Haskell use, if the return value is a tuple, it will be\n converted to a list of return values.\n\u003c/p\u003e",
          "module": "DBus.Client.Simple",
          "name": "AutoSignature",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html#AutoSignature",
          "type": "class"
        },
        "index": {
          "description": "Used to automatically generate method signatures for introspection documents To support automatic signatures method parameters and return value must all be instances of IsValue This class maps Haskell idioms to Bus it is therefore unable to generate some signatures In particular it does not support methods which accept return single structure or single element structures It also cannot generate signatures for methods with parameters or return values which are only instances of IsVariant For these cases please use method To match common Haskell use if the return value is tuple it will be converted to list of return values",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "AutoSignature",
          "package": "dbus-core",
          "partial": "Auto Signature",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:AutoSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "Client",
          "package": "dbus-core",
          "source": "src/DBus-Client-Internal.html#Client",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "Client",
          "package": "dbus-core",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "Method",
          "package": "dbus-core",
          "source": "src/DBus-Client-Internal.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "Method",
          "package": "dbus-core",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "Proxy",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html#Proxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "Proxy",
          "package": "dbus-core",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "ReleaseNameReply",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html#ReleaseNameReply",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "ReleaseNameReply",
          "package": "dbus-core",
          "partial": "Release Name Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:ReleaseNameReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "RequestNameFlag",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html#RequestNameFlag",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "RequestNameFlag",
          "package": "dbus-core",
          "partial": "Request Name Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:RequestNameFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "RequestNameReply",
          "package": "dbus-core",
          "source": "src/DBus-Client-Simple.html#RequestNameReply",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "RequestNameReply",
          "package": "dbus-core",
          "partial": "Request Name Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#t:RequestNameReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "AllowReplacement",
          "package": "dbus-core",
          "signature": "AllowReplacement",
          "source": "src/DBus-Client-Simple.html#RequestNameFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "AllowReplacement",
          "package": "dbus-core",
          "partial": "Allow Replacement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:AllowReplacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "AlreadyOwner",
          "package": "dbus-core",
          "signature": "AlreadyOwner",
          "source": "src/DBus-Client-Simple.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "AlreadyOwner",
          "package": "dbus-core",
          "partial": "Already Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:AlreadyOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "DoNotQueue",
          "package": "dbus-core",
          "signature": "DoNotQueue",
          "source": "src/DBus-Client-Simple.html#RequestNameFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "DoNotQueue",
          "package": "dbus-core",
          "partial": "Do Not Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:DoNotQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "Exists",
          "package": "dbus-core",
          "signature": "Exists",
          "source": "src/DBus-Client-Simple.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "Exists",
          "package": "dbus-core",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "InQueue",
          "package": "dbus-core",
          "signature": "InQueue",
          "source": "src/DBus-Client-Simple.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "InQueue",
          "package": "dbus-core",
          "partial": "In Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:InQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "NonExistent",
          "package": "dbus-core",
          "signature": "NonExistent",
          "source": "src/DBus-Client-Simple.html#ReleaseNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "NonExistent",
          "package": "dbus-core",
          "partial": "Non Existent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:NonExistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "NotOwner",
          "package": "dbus-core",
          "signature": "NotOwner",
          "source": "src/DBus-Client-Simple.html#ReleaseNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "NotOwner",
          "package": "dbus-core",
          "partial": "Not Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:NotOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "PrimaryOwner",
          "package": "dbus-core",
          "signature": "PrimaryOwner",
          "source": "src/DBus-Client-Simple.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "PrimaryOwner",
          "package": "dbus-core",
          "partial": "Primary Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:PrimaryOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "Released",
          "package": "dbus-core",
          "signature": "Released",
          "source": "src/DBus-Client-Simple.html#ReleaseNameReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "Released",
          "package": "dbus-core",
          "partial": "Released",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:Released"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "ReplaceExisting",
          "package": "dbus-core",
          "signature": "ReplaceExisting",
          "source": "src/DBus-Client-Simple.html#RequestNameFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "ReplaceExisting",
          "package": "dbus-core",
          "partial": "Replace Existing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:ReplaceExisting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "call",
          "package": "dbus-core",
          "signature": "Proxy -\u003e InterfaceName -\u003e MemberName -\u003e [Variant] -\u003e IO [Variant]",
          "source": "src/DBus-Client-Simple.html#call",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "call",
          "normalized": "Proxy-\u003eInterfaceName-\u003eMemberName-\u003e[Variant]-\u003eIO[Variant]",
          "package": "dbus-core",
          "signature": "Proxy-\u003eInterfaceName-\u003eMemberName-\u003e[Variant]-\u003eIO[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_SESSION_BUS_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e",
          "module": "DBus.Client.Simple",
          "name": "connectSession",
          "package": "dbus-core",
          "signature": "IO Client",
          "source": "src/DBus-Client-Simple.html#connectSession",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS SESSION BUS ADDRESS which must be set",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "connectSession",
          "package": "dbus-core",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:connectSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_STARTER_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e",
          "module": "DBus.Client.Simple",
          "name": "connectStarter",
          "package": "dbus-core",
          "signature": "IO Client",
          "source": "src/DBus-Client-Simple.html#connectStarter",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS STARTER ADDRESS which must be set",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "connectStarter",
          "package": "dbus-core",
          "partial": "Starter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:connectStarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e, or to\n \u003ccode\u003eunix:path=/var/run/dbus/system_bus_socket\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e\n is not set.\n\u003c/p\u003e",
          "module": "DBus.Client.Simple",
          "name": "connectSystem",
          "package": "dbus-core",
          "signature": "IO Client",
          "source": "src/DBus-Client-Simple.html#connectSystem",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS SYSTEM BUS ADDRESS or to unix path var run dbus system bus socket if DBUS SYSTEM BUS ADDRESS is not set",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "connectSystem",
          "package": "dbus-core",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:connectSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop a \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e&#8217;s callback thread and close its underlying socket.\n\u003c/p\u003e",
          "module": "[\"DBus.Client.Simple\",\"DBus.Client\"]",
          "name": "disconnect",
          "package": "dbus-core",
          "signature": "Client -\u003e IO ()",
          "source": "src/DBus-Client-Internal.html#disconnect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:disconnect\",\"http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:disconnect\"]"
        },
        "index": {
          "description": "Stop Client callback thread and close its underlying socket",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "disconnect",
          "normalized": "Client-\u003eIO()",
          "package": "dbus-core",
          "signature": "Client-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "emit",
          "package": "dbus-core",
          "signature": "Client -\u003e ObjectPath -\u003e InterfaceName -\u003e MemberName -\u003e [Variant] -\u003e IO ()",
          "source": "src/DBus-Client-Simple.html#emit",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "emit",
          "normalized": "Client-\u003eObjectPath-\u003eInterfaceName-\u003eMemberName-\u003e[Variant]-\u003eIO()",
          "package": "dbus-core",
          "signature": "Client-\u003eObjectPath-\u003eInterfaceName-\u003eMemberName-\u003e[Variant]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport the given functions under the given \u003ccode\u003e\u003ca\u003eObjectPath\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eInterfaceName\u003c/a\u003e\u003c/code\u003e. The functions may accept/return any types that are\n instances of \u003ccode\u003e\u003ca\u003eIsValue\u003c/a\u003e\u003c/code\u003e; see \u003ccode\u003e\u003ca\u003eAutoSignature\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\nsayHello :: Text -\u003e IO Text\nsayHello name = return (\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e [\"Hello \", name, \"!\"])\n\nexport client \"/hello_world\"\n    [ \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e \"com.example.HelloWorld\" \"Hello\" sayHello\n    ]\n\u003c/pre\u003e",
          "module": "DBus.Client.Simple",
          "name": "export",
          "package": "dbus-core",
          "signature": "Client -\u003e ObjectPath -\u003e [Method] -\u003e IO ()",
          "source": "src/DBus-Client-Simple.html#export",
          "type": "function"
        },
        "index": {
          "description": "Export the given functions under the given ObjectPath and InterfaceName The functions may accept return any types that are instances of IsValue see AutoSignature sayHello Text IO Text sayHello name return concat Hello name export client hello world method com.example.HelloWorld Hello sayHello",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "export",
          "normalized": "Client-\u003eObjectPath-\u003e[Method]-\u003eIO()",
          "package": "dbus-core",
          "signature": "Client-\u003eObjectPath-\u003e[Method]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "listen",
          "package": "dbus-core",
          "signature": "Proxy -\u003e InterfaceName -\u003e MemberName -\u003e (BusName -\u003e Signal -\u003e IO ()) -\u003e IO ()",
          "source": "src/DBus-Client-Simple.html#listen",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "listen",
          "normalized": "Proxy-\u003eInterfaceName-\u003eMemberName-\u003e(BusName-\u003eSignal-\u003eIO())-\u003eIO()",
          "package": "dbus-core",
          "signature": "Proxy-\u003eInterfaceName-\u003eMemberName-\u003e(BusName-\u003eSignal-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a Haskell function for export. This automatically detects the\n function#8217;s type signature; see \u003ccode\u003e\u003ca\u003eAutoSignature\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAutoReply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo manage the type signature and marshaling yourself, use\n \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "DBus.Client.Simple",
          "name": "method",
          "package": "dbus-core",
          "signature": "InterfaceName -\u003e MemberName -\u003e fun -\u003e Method",
          "source": "src/DBus-Client-Simple.html#method",
          "type": "function"
        },
        "index": {
          "description": "Prepare Haskell function for export This automatically detects the function type signature see AutoSignature and AutoReply To manage the type signature and marshaling yourself use method instead",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "method",
          "normalized": "InterfaceName-\u003eMemberName-\u003ea-\u003eMethod",
          "package": "dbus-core",
          "signature": "InterfaceName-\u003eMemberName-\u003efun-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "proxy",
          "package": "dbus-core",
          "signature": "Client -\u003e BusName -\u003e ObjectPath -\u003e IO Proxy",
          "source": "src/DBus-Client-Simple.html#proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "proxy",
          "normalized": "Client-\u003eBusName-\u003eObjectPath-\u003eIO Proxy",
          "package": "dbus-core",
          "signature": "Client-\u003eBusName-\u003eObjectPath-\u003eIO Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "releaseName",
          "package": "dbus-core",
          "signature": "Client -\u003e BusName -\u003e IO ReleaseNameReply",
          "source": "src/DBus-Client-Simple.html#releaseName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "releaseName",
          "normalized": "Client-\u003eBusName-\u003eIO ReleaseNameReply",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Client-\u003eBusName-\u003eIO ReleaseNameReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:releaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client.Simple",
          "name": "requestName",
          "package": "dbus-core",
          "signature": "Client -\u003e BusName -\u003e [RequestNameFlag] -\u003e IO RequestNameReply",
          "source": "src/DBus-Client-Simple.html#requestName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "requestName",
          "normalized": "Client-\u003eBusName-\u003e[RequestNameFlag]-\u003eIO RequestNameReply",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Client-\u003eBusName-\u003e[RequestNameFlag]-\u003eIO RequestNameReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:requestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally, any exceptions raised while executing a method will be\n given the generic \u003ccode\u003e\"org.freedesktop.DBus.Error.Failed\"\u003c/code\u003e name.\n \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e allows the programmer to specify an error name, and provide\n additional information to the remote application. You may use this instead\n of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e to abort a method call.\n\u003c/p\u003e",
          "module": "[\"DBus.Client.Simple\",\"DBus.Client\"]",
          "name": "throwError",
          "package": "dbus-core",
          "signature": "ErrorName -\u003e Text -\u003e [Variant] -\u003e IO a",
          "source": "src/DBus-Client-Internal.html#throwError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:throwError\",\"http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:throwError\"]"
        },
        "index": {
          "description": "Normally any exceptions raised while executing method will be given the generic org.freedesktop.DBus.Error.Failed name throwError allows the programmer to specify an error name and provide additional information to the remote application You may use this instead of throwIO to abort method call",
          "hierarchy": "DBus Client Simple",
          "module": "DBus.Client.Simple",
          "name": "throwError",
          "normalized": "ErrorName-\u003eText-\u003e[Variant]-\u003eIO a",
          "package": "dbus-core",
          "partial": "Error",
          "signature": "ErrorName-\u003eText-\u003e[Variant]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client-Simple.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus-core",
          "source": "src/DBus-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus-core",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus-core",
          "source": "src/DBus-Client-Internal.html#Client",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus-core",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "MatchRule",
          "package": "dbus-core",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "MatchRule",
          "package": "dbus-core",
          "partial": "Match Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#t:MatchRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "Method",
          "package": "dbus-core",
          "source": "src/DBus-Client-Internal.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Method",
          "package": "dbus-core",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "Reply",
          "package": "dbus-core",
          "source": "src/DBus-Client-Internal.html#Reply",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Reply",
          "package": "dbus-core",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "MatchRule",
          "package": "dbus-core",
          "signature": "MatchRule",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "MatchRule",
          "package": "dbus-core",
          "partial": "Match Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:MatchRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "ReplyError",
          "package": "dbus-core",
          "signature": "ReplyError ErrorName [Variant]",
          "source": "src/DBus-Client-Internal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "ReplyError",
          "normalized": "ReplyError ErrorName[Variant]",
          "package": "dbus-core",
          "partial": "Reply Error",
          "signature": "ReplyError ErrorName[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:ReplyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "ReplyReturn",
          "package": "dbus-core",
          "signature": "ReplyReturn [Variant]",
          "source": "src/DBus-Client-Internal.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "ReplyReturn",
          "normalized": "ReplyReturn[Variant]",
          "package": "dbus-core",
          "partial": "Reply Return",
          "signature": "ReplyReturn[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:ReplyReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "attach",
          "package": "dbus-core",
          "signature": "Connection -\u003e IO Client",
          "source": "src/DBus-Client-Internal.html#attach",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "attach",
          "normalized": "Connection-\u003eIO Client",
          "package": "dbus-core",
          "signature": "Connection-\u003eIO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "call",
          "package": "dbus-core",
          "signature": "Client -\u003e MethodCall -\u003e IO (Either Error MethodReturn)",
          "source": "src/DBus-Client-Internal.html#call",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "call",
          "normalized": "Client-\u003eMethodCall-\u003eIO(Either Error MethodReturn)",
          "package": "dbus-core",
          "signature": "Client-\u003eMethodCall-\u003eIO(Either Error MethodReturn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "call_",
          "package": "dbus-core",
          "signature": "Client -\u003e MethodCall -\u003e IO MethodReturn",
          "source": "src/DBus-Client-Internal.html#call_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "call_",
          "normalized": "Client-\u003eMethodCall-\u003eIO MethodReturn",
          "package": "dbus-core",
          "signature": "Client-\u003eMethodCall-\u003eIO MethodReturn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:call_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "connect",
          "package": "dbus-core",
          "signature": "Address -\u003e IO Client",
          "source": "src/DBus-Client-Internal.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "connect",
          "normalized": "Address-\u003eIO Client",
          "package": "dbus-core",
          "signature": "Address-\u003eIO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "emit",
          "package": "dbus-core",
          "signature": "Client -\u003e Signal -\u003e IO ()",
          "source": "src/DBus-Client-Internal.html#emit",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "emit",
          "normalized": "Client-\u003eSignal-\u003eIO()",
          "package": "dbus-core",
          "signature": "Client-\u003eSignal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "export",
          "package": "dbus-core",
          "signature": "Client -\u003e ObjectPath -\u003e [Method] -\u003e IO ()",
          "source": "src/DBus-Client-Internal.html#export",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "export",
          "normalized": "Client-\u003eObjectPath-\u003e[Method]-\u003eIO()",
          "package": "dbus-core",
          "signature": "Client-\u003eObjectPath-\u003e[Method]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "listen",
          "package": "dbus-core",
          "signature": "Client -\u003e MatchRule -\u003e (BusName -\u003e Signal -\u003e IO ()) -\u003e IO ()",
          "source": "src/DBus-Client-Internal.html#listen",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "listen",
          "normalized": "Client-\u003eMatchRule-\u003e(BusName-\u003eSignal-\u003eIO())-\u003eIO()",
          "package": "dbus-core",
          "signature": "Client-\u003eMatchRule-\u003e(BusName-\u003eSignal-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "matchDestination",
          "package": "dbus-core",
          "signature": "Maybe BusName",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchDestination",
          "package": "dbus-core",
          "partial": "Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:matchDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "matchInterface",
          "package": "dbus-core",
          "signature": "Maybe InterfaceName",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchInterface",
          "package": "dbus-core",
          "partial": "Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:matchInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "matchMember",
          "package": "dbus-core",
          "signature": "Maybe MemberName",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchMember",
          "package": "dbus-core",
          "partial": "Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:matchMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "matchPath",
          "package": "dbus-core",
          "signature": "Maybe ObjectPath",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchPath",
          "package": "dbus-core",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:matchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "matchSender",
          "package": "dbus-core",
          "signature": "Maybe BusName",
          "source": "src/DBus-Client-Internal.html#MatchRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchSender",
          "package": "dbus-core",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:matchSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "method",
          "package": "dbus-core",
          "signature": "InterfaceName -\u003e MemberName -\u003e Signature -\u003e Signature -\u003e ([Variant] -\u003e IO Reply) -\u003e Method",
          "source": "src/DBus-Client-Internal.html#method",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "method",
          "normalized": "InterfaceName-\u003eMemberName-\u003eSignature-\u003eSignature-\u003e([Variant]-\u003eIO Reply)-\u003eMethod",
          "package": "dbus-core",
          "signature": "InterfaceName-\u003eMemberName-\u003eSignature-\u003eSignature-\u003e([Variant]-\u003eIO Reply)-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "setMessageProcessor",
          "package": "dbus-core",
          "signature": "Client -\u003e (ReceivedMessage -\u003e IO Bool) -\u003e IO ()",
          "source": "src/DBus-Client-Internal.html#setMessageProcessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "setMessageProcessor",
          "normalized": "Client-\u003e(ReceivedMessage-\u003eIO Bool)-\u003eIO()",
          "package": "dbus-core",
          "partial": "Message Processor",
          "signature": "Client-\u003e(ReceivedMessage-\u003eIO Bool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Client.html#v:setMessageProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "Connection",
          "package": "dbus-core",
          "source": "src/DBus-Connection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "Connection",
          "package": "dbus-core",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is an opaque handle to an open D&#8208;Bus channel, with\n an internal state for maintaining the current message serial.\n\u003c/p\u003e",
          "module": "DBus.Connection",
          "name": "Connection",
          "package": "dbus-core",
          "source": "src/DBus-Connection.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Connection is an opaque handle to an open Bus channel with an internal state for maintaining the current message serial",
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "Connection",
          "package": "dbus-core",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "ConnectionError",
          "package": "dbus-core",
          "source": "src/DBus-Connection-Error.html#ConnectionError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "ConnectionError",
          "package": "dbus-core",
          "partial": "Connection Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#t:ConnectionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "Mechanism",
          "package": "dbus-core",
          "source": "src/DBus-Connection-Authentication.html#Mechanism",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "Mechanism",
          "package": "dbus-core",
          "partial": "Mechanism",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#t:Mechanism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "Socket",
          "package": "dbus-core",
          "source": "src/DBus-Connection-Transport.html#Socket",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "Socket",
          "package": "dbus-core",
          "partial": "Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#t:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e is anything which can send and receive bytestrings,\n typically via a socket.\n\u003c/p\u003e",
          "module": "DBus.Connection",
          "name": "Transport",
          "package": "dbus-core",
          "source": "src/DBus-Connection-Transport.html#Transport",
          "type": "data"
        },
        "index": {
          "description": "Transport is anything which can send and receive bytestrings typically via socket",
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "Transport",
          "package": "dbus-core",
          "partial": "Transport",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a connection to some address, using a given authentication\n mechanism. If the connection fails, a \u003ccode\u003e\u003ca\u003eConnectionError\u003c/a\u003e\u003c/code\u003e will be thrown.\n\u003c/p\u003e",
          "module": "DBus.Connection",
          "name": "connect",
          "package": "dbus-core",
          "signature": "[Transport] -\u003e [Mechanism] -\u003e Address -\u003e IO Connection",
          "source": "src/DBus-Connection.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Open connection to some address using given authentication mechanism If the connection fails ConnectionError will be thrown",
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "connect",
          "normalized": "[Transport]-\u003e[Mechanism]-\u003eAddress-\u003eIO Connection",
          "package": "dbus-core",
          "signature": "[Transport]-\u003e[Mechanism]-\u003eAddress-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open connection. Once closed, the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is no longer\n valid and must not be used.\n\u003c/p\u003e",
          "module": "DBus.Connection",
          "name": "disconnect",
          "package": "dbus-core",
          "signature": "Connection -\u003e IO ()",
          "source": "src/DBus-Connection.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Close an open connection Once closed the Connection is no longer valid and must not be used",
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "disconnect",
          "normalized": "Connection-\u003eIO()",
          "package": "dbus-core",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "external",
          "package": "dbus-core",
          "signature": "Mechanism",
          "source": "src/DBus-Connection-Authentication.html#external",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "external",
          "package": "dbus-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:external"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "mechanism",
          "package": "dbus-core",
          "signature": "(Socket -\u003e IO Bool) -\u003e Mechanism",
          "source": "src/DBus-Connection-Authentication.html#mechanism",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "mechanism",
          "normalized": "(Socket-\u003eIO Bool)-\u003eMechanism",
          "package": "dbus-core",
          "signature": "(Socket-\u003eIO Bool)-\u003eMechanism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:mechanism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive the next message from the connection, blocking until one is\n available.\n\u003c/p\u003e\u003cp\u003eOnly one message may be received at a time; if multiple threads attempt\n to receive messages in parallel, one will block until after the other has\n finished.\n\u003c/p\u003e",
          "module": "DBus.Connection",
          "name": "receive",
          "package": "dbus-core",
          "signature": "Connection -\u003e IO (Either UnmarshalError ReceivedMessage)",
          "source": "src/DBus-Connection.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive the next message from the connection blocking until one is available Only one message may be received at time if multiple threads attempt to receive messages in parallel one will block until after the other has finished",
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "receive",
          "normalized": "Connection-\u003eIO(Either UnmarshalError ReceivedMessage)",
          "package": "dbus-core",
          "signature": "Connection-\u003eIO(Either UnmarshalError ReceivedMessage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a single message, with a generated \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e. The second parameter\n exists to prevent race conditions when registering a reply handler; it\n receives the serial the message \u003cem\u003ewill\u003c/em\u003e be sent with, before it&#8217;s\n actually sent.\n\u003c/p\u003e\u003cp\u003eOnly one message may be sent at a time; if multiple threads attempt to\n send messages in parallel, one will block until after the other has\n finished.\n\u003c/p\u003e",
          "module": "DBus.Connection",
          "name": "send",
          "package": "dbus-core",
          "signature": "Connection -\u003e msg -\u003e (Serial -\u003e IO a) -\u003e IO (Either MarshalError a)",
          "source": "src/DBus-Connection.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send single message with generated Serial The second parameter exists to prevent race conditions when registering reply handler it receives the serial the message will be sent with before it actually sent Only one message may be sent at time if multiple threads attempt to send messages in parallel one will block until after the other has finished",
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "send",
          "normalized": "Connection-\u003ea-\u003e(Serial-\u003eIO b)-\u003eIO(Either MarshalError b)",
          "package": "dbus-core",
          "signature": "Connection-\u003emsg-\u003e(Serial-\u003eIO a)-\u003eIO(Either MarshalError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "socket",
          "package": "dbus-core",
          "signature": "(ByteString -\u003e IO ()) -\u003e (Word32 -\u003e IO ByteString) -\u003e IO () -\u003e Socket",
          "source": "src/DBus-Connection-Transport.html#socket",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "socket",
          "normalized": "(ByteString-\u003eIO())-\u003e(Word-\u003eIO ByteString)-\u003eIO()-\u003eSocket",
          "package": "dbus-core",
          "signature": "(ByteString-\u003eIO())-\u003e(Word-\u003eIO ByteString)-\u003eIO()-\u003eSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "socketGet",
          "package": "dbus-core",
          "signature": "Socket -\u003e Word32 -\u003e IO ByteString",
          "source": "src/DBus-Connection-Transport.html#socketGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "socketGet",
          "normalized": "Socket-\u003eWord-\u003eIO ByteString",
          "package": "dbus-core",
          "partial": "Get",
          "signature": "Socket-\u003eWord-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:socketGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "socketPut",
          "package": "dbus-core",
          "signature": "Socket -\u003e ByteString -\u003e IO ()",
          "source": "src/DBus-Connection-Transport.html#socketPut",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "socketPut",
          "normalized": "Socket-\u003eByteString-\u003eIO()",
          "package": "dbus-core",
          "partial": "Put",
          "signature": "Socket-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:socketPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "tcp",
          "package": "dbus-core",
          "signature": "Transport",
          "source": "src/DBus-Connection-Transport.html#tcp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "tcp",
          "package": "dbus-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:tcp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "transport",
          "package": "dbus-core",
          "signature": "Text -\u003e (Address -\u003e IO Socket) -\u003e Transport",
          "source": "src/DBus-Connection-Transport.html#transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "transport",
          "normalized": "Text-\u003e(Address-\u003eIO Socket)-\u003eTransport",
          "package": "dbus-core",
          "signature": "Text-\u003e(Address-\u003eIO Socket)-\u003eTransport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Connection",
          "name": "unix",
          "package": "dbus-core",
          "signature": "Transport",
          "source": "src/DBus-Connection-Transport.html#unix",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Connection",
          "module": "DBus.Connection",
          "name": "unix",
          "package": "dbus-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Connection.html#v:unix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "Constants",
          "package": "dbus-core",
          "source": "src/DBus-Constants.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "Constants",
          "package": "dbus-core",
          "partial": "Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "dbusInterface",
          "package": "dbus-core",
          "signature": "InterfaceName",
          "source": "src/DBus-Constants.html#dbusInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "dbusInterface",
          "package": "dbus-core",
          "partial": "Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:dbusInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "dbusName",
          "package": "dbus-core",
          "signature": "BusName",
          "source": "src/DBus-Constants.html#dbusName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "dbusName",
          "package": "dbus-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:dbusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "dbusPath",
          "package": "dbus-core",
          "signature": "ObjectPath",
          "source": "src/DBus-Constants.html#dbusPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "dbusPath",
          "package": "dbus-core",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:dbusPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorAccessDenied",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorAccessDenied",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorAccessDenied",
          "package": "dbus-core",
          "partial": "Access Denied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorAccessDenied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorAddressInUse",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorAddressInUse",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorAddressInUse",
          "package": "dbus-core",
          "partial": "Address In Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorAddressInUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorAdtAuditDataUnknown",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorAdtAuditDataUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorAdtAuditDataUnknown",
          "package": "dbus-core",
          "partial": "Adt Audit Data Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorAdtAuditDataUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorAuthFailed",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorAuthFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorAuthFailed",
          "package": "dbus-core",
          "partial": "Auth Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorAuthFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorBadAddress",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorBadAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorBadAddress",
          "package": "dbus-core",
          "partial": "Bad Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorBadAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorDisconnected",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorDisconnected",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorDisconnected",
          "package": "dbus-core",
          "partial": "Disconnected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorDisconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorFailed",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorFailed",
          "package": "dbus-core",
          "partial": "Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorFileExists",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorFileExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorFileExists",
          "package": "dbus-core",
          "partial": "File Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorFileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorFileNotFound",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorFileNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorFileNotFound",
          "package": "dbus-core",
          "partial": "File Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorFileNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorIOError",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorIOError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorIOError",
          "package": "dbus-core",
          "partial": "IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorInconsistentMessage",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorInconsistentMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorInconsistentMessage",
          "package": "dbus-core",
          "partial": "Inconsistent Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorInconsistentMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorInvalidFileContent",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorInvalidFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorInvalidFileContent",
          "package": "dbus-core",
          "partial": "Invalid File Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorInvalidFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorInvalidParameters",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorInvalidParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorInvalidParameters",
          "package": "dbus-core",
          "partial": "Invalid Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorInvalidParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorLimitsExceeded",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorLimitsExceeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorLimitsExceeded",
          "package": "dbus-core",
          "partial": "Limits Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorLimitsExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorMatchRuleInvalid",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorMatchRuleInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorMatchRuleInvalid",
          "package": "dbus-core",
          "partial": "Match Rule Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorMatchRuleInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorMatchRuleNotFound",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorMatchRuleNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorMatchRuleNotFound",
          "package": "dbus-core",
          "partial": "Match Rule Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorMatchRuleNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorNameHasNoOwner",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorNameHasNoOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorNameHasNoOwner",
          "package": "dbus-core",
          "partial": "Name Has No Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorNameHasNoOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorNoMemory",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorNoMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorNoMemory",
          "package": "dbus-core",
          "partial": "No Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorNoMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorNoNetwork",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorNoNetwork",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorNoNetwork",
          "package": "dbus-core",
          "partial": "No Network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorNoNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorNoReply",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorNoReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorNoReply",
          "package": "dbus-core",
          "partial": "No Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorNoReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorNoServer",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorNoServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorNoServer",
          "package": "dbus-core",
          "partial": "No Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorNoServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorNotSupported",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorNotSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorNotSupported",
          "package": "dbus-core",
          "partial": "Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorObjectPathInUse",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorObjectPathInUse",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorObjectPathInUse",
          "package": "dbus-core",
          "partial": "Object Path In Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorObjectPathInUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSELinuxSecurityContextUnknown",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSELinuxSecurityContextUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSELinuxSecurityContextUnknown",
          "package": "dbus-core",
          "partial": "SELinux Security Context Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSELinuxSecurityContextUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorServiceUnknown",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorServiceUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorServiceUnknown",
          "package": "dbus-core",
          "partial": "Service Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorServiceUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnChildExited",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnChildExited",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnChildExited",
          "package": "dbus-core",
          "partial": "Spawn Child Exited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnChildExited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnChildSignaled",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnChildSignaled",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnChildSignaled",
          "package": "dbus-core",
          "partial": "Spawn Child Signaled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnChildSignaled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnConfigInvalid",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnConfigInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnConfigInvalid",
          "package": "dbus-core",
          "partial": "Spawn Config Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnConfigInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnExecFailed",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnExecFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnExecFailed",
          "package": "dbus-core",
          "partial": "Spawn Exec Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnExecFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnFailed",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnFailed",
          "package": "dbus-core",
          "partial": "Spawn Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnFailedToSetup",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnFailedToSetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnFailedToSetup",
          "package": "dbus-core",
          "partial": "Spawn Failed To Setup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnFailedToSetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnFileInvalid",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnFileInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnFileInvalid",
          "package": "dbus-core",
          "partial": "Spawn File Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnFileInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnForkFailed",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnForkFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnForkFailed",
          "package": "dbus-core",
          "partial": "Spawn Fork Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnForkFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnNoMemory",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnNoMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnNoMemory",
          "package": "dbus-core",
          "partial": "Spawn No Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnNoMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnPermissionsInvalid",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnPermissionsInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnPermissionsInvalid",
          "package": "dbus-core",
          "partial": "Spawn Permissions Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnPermissionsInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnServiceNotFound",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnServiceNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnServiceNotFound",
          "package": "dbus-core",
          "partial": "Spawn Service Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnServiceNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorSpawnServiceNotValid",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorSpawnServiceNotValid",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorSpawnServiceNotValid",
          "package": "dbus-core",
          "partial": "Spawn Service Not Valid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorSpawnServiceNotValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorTimedOut",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorTimedOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorTimedOut",
          "package": "dbus-core",
          "partial": "Timed Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorTimedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorTimeout",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorTimeout",
          "package": "dbus-core",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorUnixProcessIdUnknown",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorUnixProcessIdUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorUnixProcessIdUnknown",
          "package": "dbus-core",
          "partial": "Unix Process Id Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorUnixProcessIdUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorUnknownInterface",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorUnknownInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorUnknownInterface",
          "package": "dbus-core",
          "partial": "Unknown Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorUnknownInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorUnknownMethod",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorUnknownMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorUnknownMethod",
          "package": "dbus-core",
          "partial": "Unknown Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorUnknownMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "errorUnknownObject",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Constants.html#errorUnknownObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "errorUnknownObject",
          "package": "dbus-core",
          "partial": "Unknown Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:errorUnknownObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "interfaceIntrospectable",
          "package": "dbus-core",
          "signature": "InterfaceName",
          "source": "src/DBus-Constants.html#interfaceIntrospectable",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "interfaceIntrospectable",
          "package": "dbus-core",
          "partial": "Introspectable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:interfaceIntrospectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "interfacePeer",
          "package": "dbus-core",
          "signature": "InterfaceName",
          "source": "src/DBus-Constants.html#interfacePeer",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "interfacePeer",
          "package": "dbus-core",
          "partial": "Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:interfacePeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Constants",
          "name": "interfaceProperties",
          "package": "dbus-core",
          "signature": "InterfaceName",
          "source": "src/DBus-Constants.html#interfaceProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Constants",
          "module": "DBus.Constants",
          "name": "interfaceProperties",
          "package": "dbus-core",
          "partial": "Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Constants.html#v:interfaceProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Introspection",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Introspection",
          "package": "dbus-core",
          "partial": "Introspection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Interface",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#Interface",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Interface",
          "package": "dbus-core",
          "partial": "Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Method",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Method",
          "package": "dbus-core",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Object",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#Object",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Object",
          "package": "dbus-core",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Parameter",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#Parameter",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Parameter",
          "package": "dbus-core",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Property",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#Property",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Property",
          "package": "dbus-core",
          "partial": "Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "PropertyAccess",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#PropertyAccess",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "PropertyAccess",
          "package": "dbus-core",
          "partial": "Property Access",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:PropertyAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Signal",
          "package": "dbus-core",
          "source": "src/DBus-Introspection.html#Signal",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Signal",
          "package": "dbus-core",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Interface",
          "package": "dbus-core",
          "signature": "Interface InterfaceName [Method] [Signal] [Property]",
          "source": "src/DBus-Introspection.html#Interface",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Interface",
          "normalized": "Interface InterfaceName[Method][Signal][Property]",
          "package": "dbus-core",
          "partial": "Interface",
          "signature": "Interface InterfaceName[Method][Signal][Property]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Method",
          "package": "dbus-core",
          "signature": "Method MemberName [Parameter] [Parameter]",
          "source": "src/DBus-Introspection.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Method",
          "normalized": "Method MemberName[Parameter][Parameter]",
          "package": "dbus-core",
          "partial": "Method",
          "signature": "Method MemberName[Parameter][Parameter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Object",
          "package": "dbus-core",
          "signature": "Object ObjectPath [Interface] [Object]",
          "source": "src/DBus-Introspection.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Object",
          "normalized": "Object ObjectPath[Interface][Object]",
          "package": "dbus-core",
          "partial": "Object",
          "signature": "Object ObjectPath[Interface][Object]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Parameter",
          "package": "dbus-core",
          "signature": "Parameter Text Signature",
          "source": "src/DBus-Introspection.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Parameter",
          "package": "dbus-core",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Property",
          "package": "dbus-core",
          "signature": "Property Text Signature [PropertyAccess]",
          "source": "src/DBus-Introspection.html#Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Property",
          "normalized": "Property Text Signature[PropertyAccess]",
          "package": "dbus-core",
          "partial": "Property",
          "signature": "Property Text Signature[PropertyAccess]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Read",
          "package": "dbus-core",
          "signature": "Read",
          "source": "src/DBus-Introspection.html#PropertyAccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Read",
          "package": "dbus-core",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Signal",
          "package": "dbus-core",
          "signature": "Signal MemberName [Parameter]",
          "source": "src/DBus-Introspection.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Signal",
          "normalized": "Signal MemberName[Parameter]",
          "package": "dbus-core",
          "partial": "Signal",
          "signature": "Signal MemberName[Parameter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Write",
          "package": "dbus-core",
          "signature": "Write",
          "source": "src/DBus-Introspection.html#PropertyAccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Write",
          "package": "dbus-core",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "fromXML",
          "package": "dbus-core",
          "signature": "ObjectPath -\u003e Text -\u003e Maybe Object",
          "source": "src/DBus-Introspection.html#fromXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "fromXML",
          "normalized": "ObjectPath-\u003eText-\u003eMaybe Object",
          "package": "dbus-core",
          "partial": "XML",
          "signature": "ObjectPath-\u003eText-\u003eMaybe Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:fromXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "toXML",
          "package": "dbus-core",
          "signature": "Object -\u003e Maybe Text",
          "source": "src/DBus-Introspection.html#toXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "toXML",
          "normalized": "Object-\u003eMaybe Text",
          "package": "dbus-core",
          "partial": "XML",
          "signature": "Object-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Introspection.html#v:toXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Message",
          "package": "dbus-core",
          "source": "src/DBus-Message.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Message",
          "package": "dbus-core",
          "partial": "Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Error",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Error",
          "package": "dbus-core",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Flag",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#Flag",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Flag",
          "package": "dbus-core",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Message",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#Message",
          "type": "class"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Message",
          "package": "dbus-core",
          "partial": "Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "MethodCall",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "MethodCall",
          "package": "dbus-core",
          "partial": "Method Call",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "MethodReturn",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#MethodReturn",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "MethodReturn",
          "package": "dbus-core",
          "partial": "Method Return",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:MethodReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot an actual message type, but a wrapper around messages received from\n the bus. Each value contains the message&#8217;s \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e and possibly the\n origin&#8217;s \u003ccode\u003e\u003ca\u003eBusName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DBus.Message",
          "name": "ReceivedMessage",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#ReceivedMessage",
          "type": "data"
        },
        "index": {
          "description": "Not an actual message type but wrapper around messages received from the bus Each value contains the message Serial and possibly the origin BusName",
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "ReceivedMessage",
          "package": "dbus-core",
          "partial": "Received Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:ReceivedMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value used to uniquely identify a particular message within a session.\n \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003es are 32&#8208;bit unsigned integers, and eventually wrap.\n\u003c/p\u003e",
          "module": "DBus.Message",
          "name": "Serial",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#Serial",
          "type": "data"
        },
        "index": {
          "description": "value used to uniquely identify particular message within session Serial are bit unsigned integers and eventually wrap",
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Serial",
          "package": "dbus-core",
          "partial": "Serial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Signal",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Signal",
          "package": "dbus-core",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Unknown",
          "package": "dbus-core",
          "source": "src/DBus-Message-Internal.html#Unknown",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Unknown",
          "package": "dbus-core",
          "partial": "Unknown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#t:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Error",
          "package": "dbus-core",
          "signature": "Error",
          "source": "src/DBus-Message-Internal.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Error",
          "package": "dbus-core",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "MethodCall",
          "package": "dbus-core",
          "signature": "MethodCall",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "MethodCall",
          "package": "dbus-core",
          "partial": "Method Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "MethodReturn",
          "package": "dbus-core",
          "signature": "MethodReturn",
          "source": "src/DBus-Message-Internal.html#MethodReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "MethodReturn",
          "package": "dbus-core",
          "partial": "Method Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:MethodReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "NoAutoStart",
          "package": "dbus-core",
          "signature": "NoAutoStart",
          "source": "src/DBus-Message-Internal.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "NoAutoStart",
          "package": "dbus-core",
          "partial": "No Auto Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:NoAutoStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "NoReplyExpected",
          "package": "dbus-core",
          "signature": "NoReplyExpected",
          "source": "src/DBus-Message-Internal.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "NoReplyExpected",
          "package": "dbus-core",
          "partial": "No Reply Expected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:NoReplyExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "ReceivedError",
          "package": "dbus-core",
          "signature": "ReceivedError Serial (Maybe BusName) Error",
          "source": "src/DBus-Message-Internal.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "ReceivedError",
          "package": "dbus-core",
          "partial": "Received Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:ReceivedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "ReceivedMethodCall",
          "package": "dbus-core",
          "signature": "ReceivedMethodCall Serial (Maybe BusName) MethodCall",
          "source": "src/DBus-Message-Internal.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "ReceivedMethodCall",
          "package": "dbus-core",
          "partial": "Received Method Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:ReceivedMethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "ReceivedMethodReturn",
          "package": "dbus-core",
          "signature": "ReceivedMethodReturn Serial (Maybe BusName) MethodReturn",
          "source": "src/DBus-Message-Internal.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "ReceivedMethodReturn",
          "package": "dbus-core",
          "partial": "Received Method Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:ReceivedMethodReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "ReceivedSignal",
          "package": "dbus-core",
          "signature": "ReceivedSignal Serial (Maybe BusName) Signal",
          "source": "src/DBus-Message-Internal.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "ReceivedSignal",
          "package": "dbus-core",
          "partial": "Received Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:ReceivedSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "ReceivedUnknown",
          "package": "dbus-core",
          "signature": "ReceivedUnknown Serial (Maybe BusName) Unknown",
          "source": "src/DBus-Message-Internal.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "ReceivedUnknown",
          "package": "dbus-core",
          "partial": "Received Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:ReceivedUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Signal",
          "package": "dbus-core",
          "signature": "Signal",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Signal",
          "package": "dbus-core",
          "partial": "Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "Unknown",
          "package": "dbus-core",
          "signature": "Unknown",
          "source": "src/DBus-Message-Internal.html#Unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "Unknown",
          "package": "dbus-core",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "errorBody",
          "package": "dbus-core",
          "signature": "[Variant]",
          "source": "src/DBus-Message-Internal.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "errorBody",
          "normalized": "[Variant]",
          "package": "dbus-core",
          "partial": "Body",
          "signature": "[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:errorBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "errorDestination",
          "package": "dbus-core",
          "signature": "Maybe BusName",
          "source": "src/DBus-Message-Internal.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "errorDestination",
          "package": "dbus-core",
          "partial": "Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:errorDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "errorMessage",
          "package": "dbus-core",
          "signature": "Error -\u003e Text",
          "source": "src/DBus-Message-Internal.html#errorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "errorMessage",
          "normalized": "Error-\u003eText",
          "package": "dbus-core",
          "partial": "Message",
          "signature": "Error-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "errorName",
          "package": "dbus-core",
          "signature": "ErrorName",
          "source": "src/DBus-Message-Internal.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "errorName",
          "package": "dbus-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:errorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "errorSerial",
          "package": "dbus-core",
          "signature": "Serial",
          "source": "src/DBus-Message-Internal.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "errorSerial",
          "package": "dbus-core",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:errorSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "messageBody",
          "package": "dbus-core",
          "signature": "a -\u003e [Variant]",
          "source": "src/DBus-Message-Internal.html#messageBody",
          "type": "method"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "messageBody",
          "normalized": "a-\u003e[Variant]",
          "package": "dbus-core",
          "partial": "Body",
          "signature": "a-\u003e[Variant]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:messageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "messageFlags",
          "package": "dbus-core",
          "signature": "a -\u003e Set Flag",
          "source": "src/DBus-Message-Internal.html#messageFlags",
          "type": "method"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "messageFlags",
          "normalized": "a-\u003eSet Flag",
          "package": "dbus-core",
          "partial": "Flags",
          "signature": "a-\u003eSet Flag",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:messageFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodCallBody",
          "package": "dbus-core",
          "signature": "[Variant]",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodCallBody",
          "normalized": "[Variant]",
          "package": "dbus-core",
          "partial": "Call Body",
          "signature": "[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodCallBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodCallDestination",
          "package": "dbus-core",
          "signature": "Maybe BusName",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodCallDestination",
          "package": "dbus-core",
          "partial": "Call Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodCallDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodCallFlags",
          "package": "dbus-core",
          "signature": "Set Flag",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodCallFlags",
          "package": "dbus-core",
          "partial": "Call Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodCallFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodCallInterface",
          "package": "dbus-core",
          "signature": "Maybe InterfaceName",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodCallInterface",
          "package": "dbus-core",
          "partial": "Call Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodCallInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodCallMember",
          "package": "dbus-core",
          "signature": "MemberName",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodCallMember",
          "package": "dbus-core",
          "partial": "Call Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodCallMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodCallPath",
          "package": "dbus-core",
          "signature": "ObjectPath",
          "source": "src/DBus-Message-Internal.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodCallPath",
          "package": "dbus-core",
          "partial": "Call Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodCallPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodReturnBody",
          "package": "dbus-core",
          "signature": "[Variant]",
          "source": "src/DBus-Message-Internal.html#MethodReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodReturnBody",
          "normalized": "[Variant]",
          "package": "dbus-core",
          "partial": "Return Body",
          "signature": "[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodReturnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodReturnDestination",
          "package": "dbus-core",
          "signature": "Maybe BusName",
          "source": "src/DBus-Message-Internal.html#MethodReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodReturnDestination",
          "package": "dbus-core",
          "partial": "Return Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodReturnDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "methodReturnSerial",
          "package": "dbus-core",
          "signature": "Serial",
          "source": "src/DBus-Message-Internal.html#MethodReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "methodReturnSerial",
          "package": "dbus-core",
          "partial": "Return Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:methodReturnSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "receivedBody",
          "package": "dbus-core",
          "signature": "ReceivedMessage -\u003e [Variant]",
          "source": "src/DBus-Message-Internal.html#receivedBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "receivedBody",
          "normalized": "ReceivedMessage-\u003e[Variant]",
          "package": "dbus-core",
          "partial": "Body",
          "signature": "ReceivedMessage-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:receivedBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "receivedSender",
          "package": "dbus-core",
          "signature": "ReceivedMessage -\u003e Maybe BusName",
          "source": "src/DBus-Message-Internal.html#receivedSender",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "receivedSender",
          "normalized": "ReceivedMessage-\u003eMaybe BusName",
          "package": "dbus-core",
          "partial": "Sender",
          "signature": "ReceivedMessage-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:receivedSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "receivedSerial",
          "package": "dbus-core",
          "signature": "ReceivedMessage -\u003e Serial",
          "source": "src/DBus-Message-Internal.html#receivedSerial",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "receivedSerial",
          "normalized": "ReceivedMessage-\u003eSerial",
          "package": "dbus-core",
          "partial": "Serial",
          "signature": "ReceivedMessage-\u003eSerial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:receivedSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "serialValue",
          "package": "dbus-core",
          "signature": "Serial -\u003e Word32",
          "source": "src/DBus-Message-Internal.html#serialValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "serialValue",
          "normalized": "Serial-\u003eWord",
          "package": "dbus-core",
          "partial": "Value",
          "signature": "Serial-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:serialValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "signalBody",
          "package": "dbus-core",
          "signature": "[Variant]",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "signalBody",
          "normalized": "[Variant]",
          "package": "dbus-core",
          "partial": "Body",
          "signature": "[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:signalBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "signalDestination",
          "package": "dbus-core",
          "signature": "Maybe BusName",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "signalDestination",
          "package": "dbus-core",
          "partial": "Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:signalDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "signalInterface",
          "package": "dbus-core",
          "signature": "InterfaceName",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "signalInterface",
          "package": "dbus-core",
          "partial": "Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:signalInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "signalMember",
          "package": "dbus-core",
          "signature": "MemberName",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "signalMember",
          "package": "dbus-core",
          "partial": "Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:signalMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "signalPath",
          "package": "dbus-core",
          "signature": "ObjectPath",
          "source": "src/DBus-Message-Internal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "signalPath",
          "package": "dbus-core",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:signalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "unknownBody",
          "package": "dbus-core",
          "signature": "[Variant]",
          "source": "src/DBus-Message-Internal.html#Unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "unknownBody",
          "normalized": "[Variant]",
          "package": "dbus-core",
          "partial": "Body",
          "signature": "[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:unknownBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "unknownFlags",
          "package": "dbus-core",
          "signature": "Set Flag",
          "source": "src/DBus-Message-Internal.html#Unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "unknownFlags",
          "package": "dbus-core",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:unknownFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Message",
          "name": "unknownType",
          "package": "dbus-core",
          "signature": "Word8",
          "source": "src/DBus-Message-Internal.html#Unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Message",
          "module": "DBus.Message",
          "name": "unknownType",
          "package": "dbus-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Message.html#v:unknownType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "Types",
          "package": "dbus-core",
          "source": "src/DBus-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Types",
          "package": "dbus-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "Array",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#Array",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Array",
          "package": "dbus-core",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "BusName",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#BusName",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "BusName",
          "package": "dbus-core",
          "partial": "Bus Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:BusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "Dictionary",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#Dictionary",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Dictionary",
          "package": "dbus-core",
          "partial": "Dictionary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:Dictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "ErrorName",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#ErrorName",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "ErrorName",
          "package": "dbus-core",
          "partial": "Error Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:ErrorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "InterfaceName",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#InterfaceName",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "InterfaceName",
          "package": "dbus-core",
          "partial": "Interface Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:InterfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "IsAtom",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#IsAtom",
          "type": "class"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "IsAtom",
          "package": "dbus-core",
          "partial": "Is Atom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:IsAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "IsValue",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#IsValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "IsValue",
          "package": "dbus-core",
          "partial": "Is Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:IsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "IsVariant",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#IsVariant",
          "type": "class"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "IsVariant",
          "package": "dbus-core",
          "partial": "Is Variant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:IsVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "MemberName",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#MemberName",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "MemberName",
          "package": "dbus-core",
          "partial": "Member Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:MemberName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "ObjectPath",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#ObjectPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "ObjectPath",
          "package": "dbus-core",
          "partial": "Object Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:ObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "Signature",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#Signature",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Signature",
          "package": "dbus-core",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "Structure",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#Structure",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Structure",
          "package": "dbus-core",
          "partial": "Structure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:Structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "Type",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Type",
          "package": "dbus-core",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003es may contain any other built&#8208;in D&#8208;Bus value. Besides\n representing native \u003ccode\u003eVARIANT\u003c/code\u003e values, they allow type&#8208;safe storage and\n deconstruction of heterogeneous collections.\n\u003c/p\u003e",
          "module": "DBus.Types",
          "name": "Variant",
          "package": "dbus-core",
          "source": "src/DBus-Types-Internal.html#Variant",
          "type": "data"
        },
        "index": {
          "description": "Variant may contain any other built in Bus value Besides representing native VARIANT values they allow type safe storage and deconstruction of heterogeneous collections",
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "Variant",
          "package": "dbus-core",
          "partial": "Variant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#t:Variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeArray",
          "package": "dbus-core",
          "signature": "TypeArray Type",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeArray",
          "package": "dbus-core",
          "partial": "Type Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeBoolean",
          "package": "dbus-core",
          "signature": "TypeBoolean",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeBoolean",
          "package": "dbus-core",
          "partial": "Type Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeDictionary",
          "package": "dbus-core",
          "signature": "TypeDictionary Type Type",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeDictionary",
          "package": "dbus-core",
          "partial": "Type Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeDouble",
          "package": "dbus-core",
          "signature": "TypeDouble",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeDouble",
          "package": "dbus-core",
          "partial": "Type Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeInt16",
          "package": "dbus-core",
          "signature": "TypeInt16",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeInt16",
          "package": "dbus-core",
          "partial": "Type Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeInt32",
          "package": "dbus-core",
          "signature": "TypeInt32",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeInt32",
          "package": "dbus-core",
          "partial": "Type Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeInt64",
          "package": "dbus-core",
          "signature": "TypeInt64",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeInt64",
          "package": "dbus-core",
          "partial": "Type Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeObjectPath",
          "package": "dbus-core",
          "signature": "TypeObjectPath",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeObjectPath",
          "package": "dbus-core",
          "partial": "Type Object Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeSignature",
          "package": "dbus-core",
          "signature": "TypeSignature",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeSignature",
          "package": "dbus-core",
          "partial": "Type Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeString",
          "package": "dbus-core",
          "signature": "TypeString",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeString",
          "package": "dbus-core",
          "partial": "Type String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeStructure",
          "package": "dbus-core",
          "signature": "TypeStructure [Type]",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeStructure",
          "normalized": "TypeStructure[Type]",
          "package": "dbus-core",
          "partial": "Type Structure",
          "signature": "TypeStructure[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeVariant",
          "package": "dbus-core",
          "signature": "TypeVariant",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeVariant",
          "package": "dbus-core",
          "partial": "Type Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeWord16",
          "package": "dbus-core",
          "signature": "TypeWord16",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeWord16",
          "package": "dbus-core",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeWord32",
          "package": "dbus-core",
          "signature": "TypeWord32",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeWord32",
          "package": "dbus-core",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeWord64",
          "package": "dbus-core",
          "signature": "TypeWord64",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeWord64",
          "package": "dbus-core",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "TypeWord8",
          "package": "dbus-core",
          "signature": "TypeWord8",
          "source": "src/DBus-Types-Internal.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "TypeWord8",
          "package": "dbus-core",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:TypeWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "arrayItems",
          "package": "dbus-core",
          "signature": "Array -\u003e [Variant]",
          "source": "src/DBus-Types-Internal.html#arrayItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "arrayItems",
          "normalized": "Array-\u003e[Variant]",
          "package": "dbus-core",
          "partial": "Items",
          "signature": "Array-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:arrayItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "busName",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe BusName",
          "source": "src/DBus-Types-Internal.html#busName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "busName",
          "normalized": "Text-\u003eMaybe BusName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:busName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "busNameText",
          "package": "dbus-core",
          "signature": "BusName -\u003e Text",
          "source": "src/DBus-Types-Internal.html#busNameText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "busNameText",
          "normalized": "BusName-\u003eText",
          "package": "dbus-core",
          "partial": "Name Text",
          "signature": "BusName-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:busNameText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "busName_",
          "package": "dbus-core",
          "signature": "Text -\u003e BusName",
          "source": "src/DBus-Types-Internal.html#busName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "busName_",
          "normalized": "Text-\u003eBusName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eBusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:busName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "dictionaryItems",
          "package": "dbus-core",
          "signature": "Dictionary -\u003e [(Variant, Variant)]",
          "source": "src/DBus-Types-Internal.html#dictionaryItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "dictionaryItems",
          "normalized": "Dictionary-\u003e[(Variant,Variant)]",
          "package": "dbus-core",
          "partial": "Items",
          "signature": "Dictionary-\u003e[(Variant,Variant)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:dictionaryItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "errorName",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe ErrorName",
          "source": "src/DBus-Types-Internal.html#errorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "errorName",
          "normalized": "Text-\u003eMaybe ErrorName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eMaybe ErrorName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:errorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "errorNameText",
          "package": "dbus-core",
          "signature": "ErrorName -\u003e Text",
          "source": "src/DBus-Types-Internal.html#errorNameText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "errorNameText",
          "normalized": "ErrorName-\u003eText",
          "package": "dbus-core",
          "partial": "Name Text",
          "signature": "ErrorName-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:errorNameText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "errorName_",
          "package": "dbus-core",
          "signature": "Text -\u003e ErrorName",
          "source": "src/DBus-Types-Internal.html#errorName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "errorName_",
          "normalized": "Text-\u003eErrorName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eErrorName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:errorName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "fromVariant",
          "package": "dbus-core",
          "signature": "Variant -\u003e Maybe a",
          "source": "src/DBus-Types-Internal.html#fromVariant",
          "type": "method"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "fromVariant",
          "normalized": "Variant-\u003eMaybe a",
          "package": "dbus-core",
          "partial": "Variant",
          "signature": "Variant-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:fromVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "interfaceName",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe InterfaceName",
          "source": "src/DBus-Types-Internal.html#interfaceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "interfaceName",
          "normalized": "Text-\u003eMaybe InterfaceName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eMaybe InterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:interfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "interfaceNameText",
          "package": "dbus-core",
          "signature": "InterfaceName -\u003e Text",
          "source": "src/DBus-Types-Internal.html#interfaceNameText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "interfaceNameText",
          "normalized": "InterfaceName-\u003eText",
          "package": "dbus-core",
          "partial": "Name Text",
          "signature": "InterfaceName-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:interfaceNameText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "interfaceName_",
          "package": "dbus-core",
          "signature": "Text -\u003e InterfaceName",
          "source": "src/DBus-Types-Internal.html#interfaceName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "interfaceName_",
          "normalized": "Text-\u003eInterfaceName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eInterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:interfaceName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "memberName",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe MemberName",
          "source": "src/DBus-Types-Internal.html#memberName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "memberName",
          "normalized": "Text-\u003eMaybe MemberName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eMaybe MemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:memberName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "memberNameText",
          "package": "dbus-core",
          "signature": "MemberName -\u003e Text",
          "source": "src/DBus-Types-Internal.html#memberNameText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "memberNameText",
          "normalized": "MemberName-\u003eText",
          "package": "dbus-core",
          "partial": "Name Text",
          "signature": "MemberName-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:memberNameText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "memberName_",
          "package": "dbus-core",
          "signature": "Text -\u003e MemberName",
          "source": "src/DBus-Types-Internal.html#memberName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "memberName_",
          "normalized": "Text-\u003eMemberName",
          "package": "dbus-core",
          "partial": "Name",
          "signature": "Text-\u003eMemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:memberName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "objectPath",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe ObjectPath",
          "source": "src/DBus-Types-Internal.html#objectPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "objectPath",
          "normalized": "Text-\u003eMaybe ObjectPath",
          "package": "dbus-core",
          "partial": "Path",
          "signature": "Text-\u003eMaybe ObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:objectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "objectPathText",
          "package": "dbus-core",
          "signature": "ObjectPath -\u003e Text",
          "source": "src/DBus-Types-Internal.html#objectPathText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "objectPathText",
          "normalized": "ObjectPath-\u003eText",
          "package": "dbus-core",
          "partial": "Path Text",
          "signature": "ObjectPath-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:objectPathText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "objectPath_",
          "package": "dbus-core",
          "signature": "Text -\u003e ObjectPath",
          "source": "src/DBus-Types-Internal.html#objectPath_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "objectPath_",
          "normalized": "Text-\u003eObjectPath",
          "package": "dbus-core",
          "partial": "Path",
          "signature": "Text-\u003eObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:objectPath_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "signature",
          "package": "dbus-core",
          "signature": "Text -\u003e Maybe Signature",
          "source": "src/DBus-Types-Internal.html#signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "signature",
          "normalized": "Text-\u003eMaybe Signature",
          "package": "dbus-core",
          "signature": "Text-\u003eMaybe Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "signatureText",
          "package": "dbus-core",
          "signature": "Signature -\u003e Text",
          "source": "src/DBus-Types-Internal.html#signatureText",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "signatureText",
          "normalized": "Signature-\u003eText",
          "package": "dbus-core",
          "partial": "Text",
          "signature": "Signature-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:signatureText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "signatureTypes",
          "package": "dbus-core",
          "signature": "Signature -\u003e [Type]",
          "source": "src/DBus-Types-Internal.html#signatureTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "signatureTypes",
          "normalized": "Signature-\u003e[Type]",
          "package": "dbus-core",
          "partial": "Types",
          "signature": "Signature-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:signatureTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "signature_",
          "package": "dbus-core",
          "signature": "Text -\u003e Signature",
          "source": "src/DBus-Types-Internal.html#signature_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "signature_",
          "normalized": "Text-\u003eSignature",
          "package": "dbus-core",
          "signature": "Text-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:signature_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "structureItems",
          "package": "dbus-core",
          "signature": "Structure -\u003e [Variant]",
          "source": "src/DBus-Types-Internal.html#structureItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "structureItems",
          "normalized": "Structure-\u003e[Variant]",
          "package": "dbus-core",
          "partial": "Items",
          "signature": "Structure-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:structureItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "toVariant",
          "package": "dbus-core",
          "signature": "a -\u003e Variant",
          "source": "src/DBus-Types-Internal.html#toVariant",
          "type": "method"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "toVariant",
          "normalized": "a-\u003eVariant",
          "package": "dbus-core",
          "partial": "Variant",
          "signature": "a-\u003eVariant",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:toVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Types",
          "name": "typeOf",
          "package": "dbus-core",
          "signature": "a -\u003e Type",
          "source": "src/DBus-Types.html#typeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "typeOf",
          "normalized": "a-\u003eType",
          "package": "dbus-core",
          "partial": "Of",
          "signature": "a-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery variant is strongly&#8208;typed; that is, the type of its contained\n value is known at all times. This function retrieves that type, so that\n the correct cast can be used to retrieve the value.\n\u003c/p\u003e",
          "module": "DBus.Types",
          "name": "variantType",
          "package": "dbus-core",
          "signature": "Variant -\u003e Type",
          "source": "src/DBus-Types-Internal.html#variantType",
          "type": "function"
        },
        "index": {
          "description": "Every variant is strongly typed that is the type of its contained value is known at all times This function retrieves that type so that the correct cast can be used to retrieve the value",
          "hierarchy": "DBus Types",
          "module": "DBus.Types",
          "name": "variantType",
          "normalized": "Variant-\u003eType",
          "package": "dbus-core",
          "partial": "Type",
          "signature": "Variant-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Types.html#v:variantType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Wire",
          "name": "Wire",
          "package": "dbus-core",
          "source": "src/DBus-Wire.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "Wire",
          "package": "dbus-core",
          "partial": "Wire",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Wire",
          "name": "Endianness",
          "package": "dbus-core",
          "source": "src/DBus-Wire-Internal.html#Endianness",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "Endianness",
          "package": "dbus-core",
          "partial": "Endianness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#t:Endianness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Wire",
          "name": "MarshalError",
          "package": "dbus-core",
          "source": "src/DBus-Wire-Internal.html#MarshalError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "MarshalError",
          "package": "dbus-core",
          "partial": "Marshal Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#t:MarshalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Wire",
          "name": "UnmarshalError",
          "package": "dbus-core",
          "source": "src/DBus-Wire-Internal.html#UnmarshalError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "UnmarshalError",
          "package": "dbus-core",
          "partial": "Unmarshal Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#t:UnmarshalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Wire",
          "name": "BigEndian",
          "package": "dbus-core",
          "signature": "BigEndian",
          "source": "src/DBus-Wire-Internal.html#Endianness",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "BigEndian",
          "package": "dbus-core",
          "partial": "Big Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#v:BigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Wire",
          "name": "LittleEndian",
          "package": "dbus-core",
          "signature": "LittleEndian",
          "source": "src/DBus-Wire-Internal.html#Endianness",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "LittleEndian",
          "package": "dbus-core",
          "partial": "Little Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#v:LittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Although unusual, it is\n possible for marshaling to fail; if this occurs, an error will be\n returned instead.\n\u003c/p\u003e",
          "module": "DBus.Wire",
          "name": "marshalMessage",
          "package": "dbus-core",
          "signature": "Endianness -\u003e Serial -\u003e a -\u003e Either MarshalError ByteString",
          "source": "src/DBus-Wire-Internal.html#marshalMessage",
          "type": "function"
        },
        "index": {
          "description": "Convert Message into ByteString Although unusual it is possible for marshaling to fail if this occurs an error will be returned instead",
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "marshalMessage",
          "normalized": "Endianness-\u003eSerial-\u003ea-\u003eEither MarshalError ByteString",
          "package": "dbus-core",
          "partial": "Message",
          "signature": "Endianness-\u003eSerial-\u003ea-\u003eEither MarshalError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#v:marshalMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eReceivedMessage\u003c/a\u003e\u003c/code\u003e. The result can be\n inspected to see what type of message was parsed. Unknown message types\n can still be parsed successfully, as long as they otherwise conform to\n the D&#8208;Bus standard.\n\u003c/p\u003e",
          "module": "DBus.Wire",
          "name": "unmarshalMessage",
          "package": "dbus-core",
          "signature": "ByteString -\u003e Either UnmarshalError ReceivedMessage",
          "source": "src/DBus-Wire-Internal.html#unmarshalMessage",
          "type": "function"
        },
        "index": {
          "description": "Parse ByteString into ReceivedMessage The result can be inspected to see what type of message was parsed Unknown message types can still be parsed successfully as long as they otherwise conform to the Bus standard",
          "hierarchy": "DBus Wire",
          "module": "DBus.Wire",
          "name": "unmarshalMessage",
          "normalized": "ByteString-\u003eEither UnmarshalError ReceivedMessage",
          "package": "dbus-core",
          "partial": "Message",
          "signature": "ByteString-\u003eEither UnmarshalError ReceivedMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus-core/docs/DBus-Wire.html#v:unmarshalMessage"
      }
    }
  ]
]