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
        "word": "dbus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eD-Bus clients are an abstraction over the lower-level messaging\n system. When combined with an external daemon called the \"bus\", clients\n can perform remote procedure calls to other clients on the bus.\n\u003c/p\u003e\u003cp\u003eClients may also listen for or emit \u003cem\u003esignals\u003c/em\u003e, which are asynchronous\n broadcast notifications.\n\u003c/p\u003e\u003cp\u003eExample: connect to the session bus, and get a list of active names.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE OverloadedStrings #-}\n\nimport Data.List (sort)\nimport DBus\nimport DBus.Client\n\nmain = do\n    client \u003c- \u003ccode\u003e\u003ca\u003econnectSession\u003c/a\u003e\u003c/code\u003e\n    \u003cem/\u003e\n    -- Request a list of connected clients from the bus\n    reply \u003c- \u003ccode\u003e\u003ca\u003ecall_\u003c/a\u003e\u003c/code\u003e client (\u003ccode\u003e\u003ca\u003emethodCall\u003c/a\u003e\u003c/code\u003e \"/org/freedesktop/DBus\" \"org.freedesktop.DBus\" \"ListNames\")\n        { \u003ccode\u003e\u003ca\u003emethodCallDestination\u003c/a\u003e\u003c/code\u003e = Just \"org.freedesktop.DBus\"\n        }\n    \u003cem/\u003e\n    -- org.freedesktop.DBus.ListNames() returns a single value, which is\n    -- a list of names (here represented as [String])\n    let Just names = \u003ccode\u003e\u003ca\u003efromVariant\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emethodReturnBody\u003c/a\u003e\u003c/code\u003e reply !! 0)\n    \u003cem/\u003e\n    -- Print each name on a line, sorted so reserved names are below\n    -- temporary names.\n    mapM_ putStrLn (sort names)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus",
          "source": "src/DBus-Client.html",
          "type": "module"
        },
        "index": {
          "description": "D-Bus clients are an abstraction over the lower-level messaging system When combined with an external daemon called the bus clients can perform remote procedure calls to other clients on the bus Clients may also listen for or emit signals which are asynchronous broadcast notifications Example connect to the session bus and get list of active names LANGUAGE OverloadedStrings import Data.List sort import DBus import DBus.Client main do client connectSession Request list of connected clients from the bus reply call client methodCall org freedesktop DBus org.freedesktop.DBus ListNames methodCallDestination Just org.freedesktop.DBus org.freedesktop.DBus.ListNames returns single value which is list of names here represented as String let Just names fromVariant methodReturnBody reply Print each name on line sorted so reserved names are below temporary names mapM putStrLn sort names",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to automatically generate method signatures for introspection\n documents. To support automatic signatures, a method's parameters and\n return value must all be instances of \u003ccode\u003e\u003ca\u003eIsValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis class maps Haskell idioms to D-Bus; it is therefore unable to\n generate some signatures. In particular, it does not support methods\n which accept/return a single structure, or single-element structures.\n It also cannot generate signatures for methods with parameters or return\n values which are only instances of \u003ccode\u003e\u003ca\u003eIsVariant\u003c/a\u003e\u003c/code\u003e. For these cases, please\n use \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo match common Haskell use, if the return value is a tuple, it will be\n converted to a list of return values.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "AutoMethod",
          "package": "dbus",
          "source": "src/DBus-Client.html#AutoMethod",
          "type": "class"
        },
        "index": {
          "description": "Used to automatically generate method signatures for introspection documents To support automatic signatures method parameters and return value must all be instances of IsValue This class maps Haskell idioms to D-Bus it is therefore unable to generate some signatures In particular it does not support methods which accept return single structure or single-element structures It also cannot generate signatures for methods with parameters or return values which are only instances of IsVariant For these cases please use method To match common Haskell use if the return value is tuple it will be converted to list of return values",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "AutoMethod",
          "package": "dbus",
          "partial": "Auto Method",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:AutoMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn active client session to a message bus. Clients may send or receive\n method calls, and listen for or emit signals.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus",
          "source": "src/DBus-Client.html#Client",
          "type": "data"
        },
        "index": {
          "description": "An active client session to message bus Clients may send or receive method calls and listen for or emit signals",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Client",
          "package": "dbus",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "ClientError",
          "package": "dbus",
          "source": "src/DBus-Client.html#ClientError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "ClientError",
          "package": "dbus",
          "partial": "Client Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:ClientError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "ClientOptions",
          "package": "dbus",
          "source": "src/DBus-Client.html#ClientOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "ClientOptions",
          "package": "dbus",
          "partial": "Client Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:ClientOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA match rule describes which signals a particular callback is interested\n in. Use \u003ccode\u003e\u003ca\u003ematchAny\u003c/a\u003e\u003c/code\u003e to construct match rules.\n\u003c/p\u003e\u003cp\u003eExample: a match rule which matches signals sent by the root object.\n\u003c/p\u003e\u003cpre\u003e\nmatchFromRoot :: MatchRule\nmatchFromRoot = \u003ccode\u003e\u003ca\u003ematchAny\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003ematchPath\u003c/a\u003e\u003c/code\u003e = Just \"/\" }\n\u003c/pre\u003e",
          "module": "DBus.Client",
          "name": "MatchRule",
          "package": "dbus",
          "source": "src/DBus-Client.html#MatchRule",
          "type": "data"
        },
        "index": {
          "description": "match rule describes which signals particular callback is interested in Use matchAny to construct match rules Example match rule which matches signals sent by the root object matchFromRoot MatchRule matchFromRoot matchAny matchPath Just",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "MatchRule",
          "package": "dbus",
          "partial": "Match Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:MatchRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "Method",
          "package": "dbus",
          "source": "src/DBus-Client.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Method",
          "package": "dbus",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "ReleaseNameReply",
          "package": "dbus",
          "source": "src/DBus-Client.html#ReleaseNameReply",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "ReleaseNameReply",
          "package": "dbus",
          "partial": "Release Name Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:ReleaseNameReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "Reply",
          "package": "dbus",
          "source": "src/DBus-Client.html#Reply",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "Reply",
          "package": "dbus",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "RequestNameFlag",
          "package": "dbus",
          "source": "src/DBus-Client.html#RequestNameFlag",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "RequestNameFlag",
          "package": "dbus",
          "partial": "Request Name Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:RequestNameFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "RequestNameReply",
          "package": "dbus",
          "source": "src/DBus-Client.html#RequestNameReply",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "RequestNameReply",
          "package": "dbus",
          "partial": "Request Name Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#t:RequestNameReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis client is already the primary owner of the requested name.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NameAlreadyOwner",
          "package": "dbus",
          "signature": "NameAlreadyOwner",
          "source": "src/DBus-Client.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "description": "This client is already the primary owner of the requested name",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NameAlreadyOwner",
          "package": "dbus",
          "partial": "Name Already Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NameAlreadyOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name was already reserved by another client, \u003ccode\u003eDoNotQueue\u003c/code\u003e\n was set, and replacement was either not attempted or not\n successful.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NameExists",
          "package": "dbus",
          "signature": "NameExists",
          "source": "src/DBus-Client.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "description": "The name was already reserved by another client DoNotQueue was set and replacement was either not attempted or not successful",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NameExists",
          "package": "dbus",
          "partial": "Name Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NameExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name was already reserved by another client, and replacement\n was either not attempted or not successful.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NameInQueue",
          "package": "dbus",
          "signature": "NameInQueue",
          "source": "src/DBus-Client.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "description": "The name was already reserved by another client and replacement was either not attempted or not successful",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NameInQueue",
          "package": "dbus",
          "partial": "Name In Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NameInQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe provided name is not assigned to any client on the bus.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NameNonExistent",
          "package": "dbus",
          "signature": "NameNonExistent",
          "source": "src/DBus-Client.html#ReleaseNameReply",
          "type": "function"
        },
        "index": {
          "description": "The provided name is not assigned to any client on the bus",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NameNonExistent",
          "package": "dbus",
          "partial": "Name Non Existent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NameNonExistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe provided name is not assigned to this client.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NameNotOwner",
          "package": "dbus",
          "signature": "NameNotOwner",
          "source": "src/DBus-Client.html#ReleaseNameReply",
          "type": "function"
        },
        "index": {
          "description": "The provided name is not assigned to this client",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NameNotOwner",
          "package": "dbus",
          "partial": "Name Not Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NameNotOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis client is now the primary owner of the requested name.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NamePrimaryOwner",
          "package": "dbus",
          "signature": "NamePrimaryOwner",
          "source": "src/DBus-Client.html#RequestNameReply",
          "type": "function"
        },
        "index": {
          "description": "This client is now the primary owner of the requested name",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NamePrimaryOwner",
          "package": "dbus",
          "partial": "Name Primary Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NamePrimaryOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis client has released the provided name.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "NameReleased",
          "package": "dbus",
          "signature": "NameReleased",
          "source": "src/DBus-Client.html#ReleaseNameReply",
          "type": "function"
        },
        "index": {
          "description": "This client has released the provided name",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "NameReleased",
          "package": "dbus",
          "partial": "Name Released",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:NameReleased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a Haskell function for export, automatically detecting the\n function's type signature.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eAutoMethod\u003c/a\u003e\u003c/code\u003e for details on the limitations of this function.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e for exporting functions with user-defined types.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "autoMethod",
          "package": "dbus",
          "signature": "InterfaceName -\u003e MemberName -\u003e fn -\u003e Method",
          "source": "src/DBus-Client.html#autoMethod",
          "type": "function"
        },
        "index": {
          "description": "Prepare Haskell function for export automatically detecting the function type signature See AutoMethod for details on the limitations of this function See method for exporting functions with user-defined types",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "autoMethod",
          "normalized": "InterfaceName-\u003eMemberName-\u003ea-\u003eMethod",
          "package": "dbus",
          "partial": "Method",
          "signature": "InterfaceName-\u003eMemberName-\u003efn-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:autoMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a method call to the bus, and wait for the response.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the method call couldn't be sent, or if the reply\n couldn't be parsed.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "call",
          "package": "dbus",
          "signature": "Client -\u003e MethodCall -\u003e IO (Either MethodError MethodReturn)",
          "source": "src/DBus-Client.html#call",
          "type": "function"
        },
        "index": {
          "description": "Send method call to the bus and wait for the response Throws ClientError if the method call couldn be sent or if the reply couldn be parsed",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "call",
          "normalized": "Client-\u003eMethodCall-\u003eIO(Either MethodError MethodReturn)",
          "package": "dbus",
          "signature": "Client-\u003eMethodCall-\u003eIO(Either MethodError MethodReturn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a method call to the bus, and do not wait for a response.\n\u003c/p\u003e\u003cp\u003eSets the \u003ccode\u003enoReplyExpected\u003c/code\u003e message flag before sending.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the method call couldn't be sent.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "callNoReply",
          "package": "dbus",
          "signature": "Client -\u003e MethodCall -\u003e IO ()",
          "source": "src/DBus-Client.html#callNoReply",
          "type": "function"
        },
        "index": {
          "description": "Send method call to the bus and do not wait for response Sets the noReplyExpected message flag before sending Throws ClientError if the method call couldn be sent",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "callNoReply",
          "normalized": "Client-\u003eMethodCall-\u003eIO()",
          "package": "dbus",
          "partial": "No Reply",
          "signature": "Client-\u003eMethodCall-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:callNoReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a method call to the bus, and wait for the response.\n\u003c/p\u003e\u003cp\u003eUnsets the \u003ccode\u003enoReplyExpected\u003c/code\u003e message flag before sending.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the method call couldn't sent, if the reply\n couldn't be parsed, or if the reply was a \u003ccode\u003e\u003ca\u003eMethodError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "call_",
          "package": "dbus",
          "signature": "Client -\u003e MethodCall -\u003e IO MethodReturn",
          "source": "src/DBus-Client.html#call_",
          "type": "function"
        },
        "index": {
          "description": "Send method call to the bus and wait for the response Unsets the noReplyExpected message flag before sending Throws ClientError if the method call couldn sent if the reply couldn be parsed or if the reply was MethodError",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "call_",
          "normalized": "Client-\u003eMethodCall-\u003eIO MethodReturn",
          "package": "dbus",
          "signature": "Client-\u003eMethodCall-\u003eIO MethodReturn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:call_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "clientError",
          "package": "dbus",
          "signature": "String -\u003e ClientError",
          "source": "src/DBus-Client.html#clientError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "clientError",
          "normalized": "String-\u003eClientError",
          "package": "dbus",
          "partial": "Error",
          "signature": "String-\u003eClientError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:clientError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "clientErrorFatal",
          "package": "dbus",
          "signature": "ClientError -\u003e Bool",
          "source": "src/DBus-Client.html#clientErrorFatal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "clientErrorFatal",
          "normalized": "ClientError-\u003eBool",
          "package": "dbus",
          "partial": "Error Fatal",
          "signature": "ClientError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:clientErrorFatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Client",
          "name": "clientErrorMessage",
          "package": "dbus",
          "signature": "ClientError -\u003e String",
          "source": "src/DBus-Client.html#clientErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "clientErrorMessage",
          "normalized": "ClientError-\u003eString",
          "package": "dbus",
          "partial": "Error Message",
          "signature": "ClientError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:clientErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for the underlying socket, for advanced use cases. See\n the \u003ca\u003eDBus.Socket\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "clientSocketOptions",
          "package": "dbus",
          "signature": "ClientOptions t -\u003e SocketOptions t",
          "source": "src/DBus-Client.html#clientSocketOptions",
          "type": "function"
        },
        "index": {
          "description": "Options for the underlying socket for advanced use cases See the DBus.Socket module",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "clientSocketOptions",
          "normalized": "ClientOptions a-\u003eSocketOptions a",
          "package": "dbus",
          "partial": "Socket Options",
          "signature": "ClientOptions t-\u003eSocketOptions t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:clientSocketOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to run the client thread. The provided IO computation\n should be called repeatedly; each time it is called, it will process\n one incoming message.\n\u003c/p\u003e\u003cp\u003eThe provided computation will throw a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if it fails to\n process an incoming message, or if the connection is lost.\n\u003c/p\u003e\u003cp\u003eThe default implementation is \u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "clientThreadRunner",
          "package": "dbus",
          "signature": "ClientOptions t -\u003e IO () -\u003e IO ()",
          "source": "src/DBus-Client.html#clientThreadRunner",
          "type": "function"
        },
        "index": {
          "description": "function to run the client thread The provided IO computation should be called repeatedly each time it is called it will process one incoming message The provided computation will throw ClientError if it fails to process an incoming message or if the connection is lost The default implementation is forever",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "clientThreadRunner",
          "normalized": "ClientOptions a-\u003eIO()-\u003eIO()",
          "package": "dbus",
          "partial": "Thread Runner",
          "signature": "ClientOptions t-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:clientThreadRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus at the specified address.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "connect",
          "package": "dbus",
          "signature": "Address -\u003e IO Client",
          "source": "src/DBus-Client.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus at the specified address Throws ClientError on failure",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "connect",
          "normalized": "Address-\u003eIO Client",
          "package": "dbus",
          "signature": "Address-\u003eIO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_SESSION_BUS_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_SESSION_BUS_ADDRESS\u003c/code\u003e is unset, contains an\n invalid address, or if connecting to the bus failed.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "connectSession",
          "package": "dbus",
          "signature": "IO Client",
          "source": "src/DBus-Client.html#connectSession",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS SESSION BUS ADDRESS which must be set Throws ClientError if DBUS SESSION BUS ADDRESS is unset contains an invalid address or if connecting to the bus failed",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "connectSession",
          "package": "dbus",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:connectSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_STARTER_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_STARTER_ADDRESS\u003c/code\u003e is unset, contains an\n invalid address, or if connecting to the bus failed.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "connectStarter",
          "package": "dbus",
          "signature": "IO Client",
          "source": "src/DBus-Client.html#connectStarter",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS STARTER ADDRESS which must be set Throws ClientError if DBUS STARTER ADDRESS is unset contains an invalid address or if connecting to the bus failed",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "connectStarter",
          "package": "dbus",
          "partial": "Starter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:connectStarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus specified in the environment variable\n \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e, or to\n \u003ccode\u003eunix:path=/var/run/dbus/system_bus_socket\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e\n is not set.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e contains an invalid\n address, or if connecting to the bus failed.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "connectSystem",
          "package": "dbus",
          "signature": "IO Client",
          "source": "src/DBus-Client.html#connectSystem",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus specified in the environment variable DBUS SYSTEM BUS ADDRESS or to unix path var run dbus system bus socket if DBUS SYSTEM BUS ADDRESS is not set Throws ClientError if DBUS SYSTEM BUS ADDRESS contains an invalid address or if connecting to the bus failed",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "connectSystem",
          "package": "dbus",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:connectSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the bus at the specified address, with the given connection\n options. Most users should use \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "connectWith",
          "package": "dbus",
          "signature": "ClientOptions t -\u003e Address -\u003e IO Client",
          "source": "src/DBus-Client.html#connectWith",
          "type": "function"
        },
        "index": {
          "description": "Connect to the bus at the specified address with the given connection options Most users should use connect instead Throws ClientError on failure",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "connectWith",
          "normalized": "ClientOptions a-\u003eAddress-\u003eIO Client",
          "package": "dbus",
          "partial": "With",
          "signature": "ClientOptions t-\u003eAddress-\u003eIO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:connectWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault client options. Uses the built-in Socket-based transport, which\n supports the \u003ccode\u003etcp:\u003c/code\u003e and \u003ccode\u003eunix:\u003c/code\u003e methods.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "defaultClientOptions",
          "package": "dbus",
          "signature": "ClientOptions SocketTransport",
          "source": "src/DBus-Client.html#defaultClientOptions",
          "type": "function"
        },
        "index": {
          "description": "Default client options Uses the built-in Socket-based transport which supports the tcp and unix methods",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "defaultClientOptions",
          "package": "dbus",
          "partial": "Client Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:defaultClientOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop a \u003ccode\u003eClient'\u003c/code\u003es callback thread and close its underlying socket.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "disconnect",
          "package": "dbus",
          "signature": "Client -\u003e IO ()",
          "source": "src/DBus-Client.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Stop Client callback thread and close its underlying socket",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "disconnect",
          "normalized": "Client-\u003eIO()",
          "package": "dbus",
          "signature": "Client-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit the signal on the bus.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the signal message couldn't be sent.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "emit",
          "package": "dbus",
          "signature": "Client -\u003e Signal -\u003e IO ()",
          "source": "src/DBus-Client.html#emit",
          "type": "function"
        },
        "index": {
          "description": "Emit the signal on the bus Throws ClientError if the signal message couldn be sent",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "emit",
          "normalized": "Client-\u003eSignal-\u003eIO()",
          "package": "dbus",
          "signature": "Client-\u003eSignal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport the given functions under the given \u003ccode\u003e\u003ca\u003eObjectPath\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eInterfaceName\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eautoMethod\u003c/a\u003e\u003c/code\u003e to construct a \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e from a function that accepts and\n returns simple types.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e to construct a \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e from a function that handles parameter\n conversion manually.\n\u003c/p\u003e\u003cpre\u003e\nping :: MethodCall -\u003e IO \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e\nping _ = replyReturn []\n\nsayHello :: String -\u003e IO String\nsayHello name = return (\"Hello \" ++ name ++ \"!\")\n\nexport client \"/hello_world\"\n    [ \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e \"com.example.HelloWorld\" \"Ping\" ping\n    , \u003ccode\u003e\u003ca\u003eautoMethod\u003c/a\u003e\u003c/code\u003e \"com.example.HelloWorld\" \"Hello\" sayHello\n    ]\n\u003c/pre\u003e",
          "module": "DBus.Client",
          "name": "export",
          "package": "dbus",
          "signature": "Client -\u003e ObjectPath -\u003e [Method] -\u003e IO ()",
          "source": "src/DBus-Client.html#export",
          "type": "function"
        },
        "index": {
          "description": "Export the given functions under the given ObjectPath and InterfaceName Use autoMethod to construct Method from function that accepts and returns simple types Use method to construct Method from function that handles parameter conversion manually ping MethodCall IO Reply ping replyReturn sayHello String IO String sayHello name return Hello name export client hello world method com.example.HelloWorld Ping ping autoMethod com.example.HelloWorld Hello sayHello",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "export",
          "normalized": "Client-\u003eObjectPath-\u003e[Method]-\u003eIO()",
          "package": "dbus",
          "signature": "Client-\u003eObjectPath-\u003e[Method]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a match rule into the textual format accepted by the bus.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "formatMatchRule",
          "package": "dbus",
          "signature": "MatchRule -\u003e String",
          "source": "src/DBus-Client.html#formatMatchRule",
          "type": "function"
        },
        "index": {
          "description": "Convert match rule into the textual format accepted by the bus",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "formatMatchRule",
          "normalized": "MatchRule-\u003eString",
          "package": "dbus",
          "partial": "Match Rule",
          "signature": "MatchRule-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:formatMatchRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that the bus forward signals matching the given rule to this\n client, and process them in a callback.\n\u003c/p\u003e\u003cp\u003eA received signal might be processed by more than one callback at a time.\n Callbacks each run in their own thread.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the match rule couldn't be added to the bus.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "listen",
          "package": "dbus",
          "signature": "Client -\u003e MatchRule -\u003e (Signal -\u003e IO ()) -\u003e IO ()",
          "source": "src/DBus-Client.html#listen",
          "type": "function"
        },
        "index": {
          "description": "Request that the bus forward signals matching the given rule to this client and process them in callback received signal might be processed by more than one callback at time Callbacks each run in their own thread Throws ClientError if the match rule couldn be added to the bus",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "listen",
          "normalized": "Client-\u003eMatchRule-\u003e(Signal-\u003eIO())-\u003eIO()",
          "package": "dbus",
          "signature": "Client-\u003eMatchRule-\u003e(Signal-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any signal.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "matchAny",
          "package": "dbus",
          "signature": "MatchRule",
          "source": "src/DBus-Client.html#matchAny",
          "type": "function"
        },
        "index": {
          "description": "Match any signal",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchAny",
          "package": "dbus",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, only receives signals sent to the given bus name.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "matchDestination",
          "package": "dbus",
          "signature": "MatchRule -\u003e Maybe BusName",
          "source": "src/DBus-Client.html#matchDestination",
          "type": "function"
        },
        "index": {
          "description": "If set only receives signals sent to the given bus name",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchDestination",
          "normalized": "MatchRule-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Destination",
          "signature": "MatchRule-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:matchDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, only receives signals sent with the given interface name.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "matchInterface",
          "package": "dbus",
          "signature": "MatchRule -\u003e Maybe InterfaceName",
          "source": "src/DBus-Client.html#matchInterface",
          "type": "function"
        },
        "index": {
          "description": "If set only receives signals sent with the given interface name",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchInterface",
          "normalized": "MatchRule-\u003eMaybe InterfaceName",
          "package": "dbus",
          "partial": "Interface",
          "signature": "MatchRule-\u003eMaybe InterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:matchInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, only receives signals sent with the given member name.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "matchMember",
          "package": "dbus",
          "signature": "MatchRule -\u003e Maybe MemberName",
          "source": "src/DBus-Client.html#matchMember",
          "type": "function"
        },
        "index": {
          "description": "If set only receives signals sent with the given member name",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchMember",
          "normalized": "MatchRule-\u003eMaybe MemberName",
          "package": "dbus",
          "partial": "Member",
          "signature": "MatchRule-\u003eMaybe MemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:matchMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, only receives signals sent with the given path.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "matchPath",
          "package": "dbus",
          "signature": "MatchRule -\u003e Maybe ObjectPath",
          "source": "src/DBus-Client.html#matchPath",
          "type": "function"
        },
        "index": {
          "description": "If set only receives signals sent with the given path",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchPath",
          "normalized": "MatchRule-\u003eMaybe ObjectPath",
          "package": "dbus",
          "partial": "Path",
          "signature": "MatchRule-\u003eMaybe ObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:matchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, only receives signals sent from the given bus name.\n\u003c/p\u003e\u003cp\u003eThe standard D-Bus implementation from \u003ca\u003ehttp://dbus.freedesktop.org/\u003c/a\u003e\n almost always sets signal senders to the unique name of the sending\n client. If \u003ccode\u003e\u003ca\u003ematchSender\u003c/a\u003e\u003c/code\u003e is a requested name like\n \u003ccode\u003e\"com.example.Foo\"\u003c/code\u003e, it will not match any signals.\n\u003c/p\u003e\u003cp\u003eThe exception is for signals sent by the bus itself, which always\n have a sender of \u003ccode\u003e\"org.freedesktop.DBus\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "matchSender",
          "package": "dbus",
          "signature": "MatchRule -\u003e Maybe BusName",
          "source": "src/DBus-Client.html#matchSender",
          "type": "function"
        },
        "index": {
          "description": "If set only receives signals sent from the given bus name The standard D-Bus implementation from http dbus.freedesktop.org almost always sets signal senders to the unique name of the sending client If matchSender is requested name like com.example.Foo it will not match any signals The exception is for signals sent by the bus itself which always have sender of org.freedesktop.DBus",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "matchSender",
          "normalized": "MatchRule-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Sender",
          "signature": "MatchRule-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:matchSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a method handler, which will accept method calls with the given\n interface and member name.\n\u003c/p\u003e\u003cp\u003eNote that the input and output parameter signatures are used for\n introspection, but are not checked when executing a method.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eautoMethod\u003c/a\u003e\u003c/code\u003e for an easier way to export functions with simple\n parameter and return types.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "method",
          "package": "dbus",
          "signature": "InterfaceName-\u003e MemberName-\u003e Signature-\u003e Signature-\u003e (MethodCall -\u003e IO Reply)-\u003e Method",
          "type": "function"
        },
        "index": {
          "description": "Define method handler which will accept method calls with the given interface and member name Note that the input and output parameter signatures are used for introspection but are not checked when executing method See autoMethod for an easier way to export functions with simple parameter and return types",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "method",
          "normalized": "InterfaceName-\u003eMemberName-\u003eSignature-\u003eSignature-\u003e(MethodCall-\u003eIO Reply)-\u003eMethod",
          "package": "dbus",
          "signature": "InterfaceName-\u003eMemberName-\u003eSignature-\u003eSignature-\u003e(MethodCall-\u003eIO Reply)-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow this client's reservation to be replaced, if another client\n requests it with the \u003ccode\u003e\u003ca\u003enameReplaceExisting\u003c/a\u003e\u003c/code\u003e flag.\n\u003c/p\u003e\u003cp\u003eIf this client's reservation is replaced, this client will be added to the\n wait queue unless the request also included the \u003ccode\u003e\u003ca\u003enameDoNotQueue\u003c/a\u003e\u003c/code\u003e flag.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "nameAllowReplacement",
          "package": "dbus",
          "signature": "RequestNameFlag",
          "source": "src/DBus-Client.html#nameAllowReplacement",
          "type": "function"
        },
        "index": {
          "description": "Allow this client reservation to be replaced if another client requests it with the nameReplaceExisting flag If this client reservation is replaced this client will be added to the wait queue unless the request also included the nameDoNotQueue flag",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "nameAllowReplacement",
          "package": "dbus",
          "partial": "Allow Replacement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:nameAllowReplacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the name is already in use, do not add this client to the queue, just\n return an error.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "nameDoNotQueue",
          "package": "dbus",
          "signature": "RequestNameFlag",
          "source": "src/DBus-Client.html#nameDoNotQueue",
          "type": "function"
        },
        "index": {
          "description": "If the name is already in use do not add this client to the queue just return an error",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "nameDoNotQueue",
          "package": "dbus",
          "partial": "Do Not Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:nameDoNotQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the name being requested is already reserved, attempt to replace it.\n This only works if the current owner provided the \u003ccode\u003e\u003ca\u003enameAllowReplacement\u003c/a\u003e\u003c/code\u003e\n flag.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "nameReplaceExisting",
          "package": "dbus",
          "signature": "RequestNameFlag",
          "source": "src/DBus-Client.html#nameReplaceExisting",
          "type": "function"
        },
        "index": {
          "description": "If the name being requested is already reserved attempt to replace it This only works if the current owner provided the nameAllowReplacement flag",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "nameReplaceExisting",
          "package": "dbus",
          "partial": "Replace Existing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:nameReplaceExisting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease a name that this client previously requested. See \u003ccode\u003e\u003ca\u003erequestName\u003c/a\u003e\u003c/code\u003e\n for an explanation of name reservation.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the call failed.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "releaseName",
          "package": "dbus",
          "signature": "Client -\u003e BusName -\u003e IO ReleaseNameReply",
          "source": "src/DBus-Client.html#releaseName",
          "type": "function"
        },
        "index": {
          "description": "Release name that this client previously requested See requestName for an explanation of name reservation Throws ClientError if the call failed",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "releaseName",
          "normalized": "Client-\u003eBusName-\u003eIO ReleaseNameReply",
          "package": "dbus",
          "partial": "Name",
          "signature": "Client-\u003eBusName-\u003eIO ReleaseNameReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:releaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReply to a method call with an error, containing the given error name and\n body.\n\u003c/p\u003e\u003cp\u003eTypically, the first item of the error body is a string with a message\n describing the error.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "replyError",
          "package": "dbus",
          "signature": "ErrorName -\u003e [Variant] -\u003e Reply",
          "source": "src/DBus-Client.html#replyError",
          "type": "function"
        },
        "index": {
          "description": "Reply to method call with an error containing the given error name and body Typically the first item of the error body is string with message describing the error",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "replyError",
          "normalized": "ErrorName-\u003e[Variant]-\u003eReply",
          "package": "dbus",
          "partial": "Error",
          "signature": "ErrorName-\u003e[Variant]-\u003eReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:replyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReply to a method call with a successful return, containing the given body.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "replyReturn",
          "package": "dbus",
          "signature": "[Variant] -\u003e Reply",
          "source": "src/DBus-Client.html#replyReturn",
          "type": "function"
        },
        "index": {
          "description": "Reply to method call with successful return containing the given body",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "replyReturn",
          "normalized": "[Variant]-\u003eReply",
          "package": "dbus",
          "partial": "Return",
          "signature": "[Variant]-\u003eReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:replyReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsks the message bus to assign the given name to this client. The bus\n maintains a queue of possible owners, where the head of the queue is the\n current (\"primary\") owner.\n\u003c/p\u003e\u003cp\u003eThere are several uses for name reservation:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Clients which export methods reserve a name so users and applications\n   can send them messages. For example, the GNOME Keyring reserves the name\n   \u003ccode\u003e\"org.gnome.keyring\"\u003c/code\u003e on the user's session bus, and NetworkManager\n   reserves \u003ccode\u003e\"org.freedesktop.NetworkManager\"\u003c/code\u003e on the system bus.\n\u003c/li\u003e\u003cli\u003e When there are multiple implementations of a particular service, the\n   service standard will ususally include a generic bus name for the\n   service. This allows other clients to avoid depending on any particular\n   implementation's name. For example, both the GNOME Keyring and KDE\n   KWallet services request the \u003ccode\u003e\"org.freedesktop.secrets\"\u003c/code\u003e name on the\n   user's session bus.\n\u003c/li\u003e\u003cli\u003e A process with \"single instance\" behavior can use name assignment to\n   check whether the instance is already running, and invoke some method\n   on it (e.g. opening a new window).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eClientError\u003c/a\u003e\u003c/code\u003e if the call failed.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "requestName",
          "package": "dbus",
          "signature": "Client -\u003e BusName -\u003e [RequestNameFlag] -\u003e IO RequestNameReply",
          "source": "src/DBus-Client.html#requestName",
          "type": "function"
        },
        "index": {
          "description": "Asks the message bus to assign the given name to this client The bus maintains queue of possible owners where the head of the queue is the current primary owner There are several uses for name reservation Clients which export methods reserve name so users and applications can send them messages For example the GNOME Keyring reserves the name org.gnome.keyring on the user session bus and NetworkManager reserves org.freedesktop.NetworkManager on the system bus When there are multiple implementations of particular service the service standard will ususally include generic bus name for the service This allows other clients to avoid depending on any particular implementation name For example both the GNOME Keyring and KDE KWallet services request the org.freedesktop.secrets name on the user session bus process with single instance behavior can use name assignment to check whether the instance is already running and invoke some method on it e.g opening new window Throws ClientError if the call failed",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "requestName",
          "normalized": "Client-\u003eBusName-\u003e[RequestNameFlag]-\u003eIO RequestNameReply",
          "package": "dbus",
          "partial": "Name",
          "signature": "Client-\u003eBusName-\u003e[RequestNameFlag]-\u003eIO RequestNameReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:requestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally, any exceptions raised while executing a method will be\n given the generic \u003ccode\u003e\"org.freedesktop.DBus.Error.Failed\"\u003c/code\u003e name.\n \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e allows the programmer to specify an error name, and provide\n additional information to the remote application. You may use this instead\n of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e to abort a method call.\n\u003c/p\u003e",
          "module": "DBus.Client",
          "name": "throwError",
          "package": "dbus",
          "signature": "ErrorName-\u003e String-\u003e [Variant]-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Normally any exceptions raised while executing method will be given the generic org.freedesktop.DBus.Error.Failed name throwError allows the programmer to specify an error name and provide additional information to the remote application You may use this instead of throwIO to abort method call",
          "hierarchy": "DBus Client",
          "module": "DBus.Client",
          "name": "throwError",
          "normalized": "ErrorName-\u003eString-\u003e[Variant]-\u003eIO a",
          "package": "dbus",
          "partial": "Error",
          "signature": "ErrorName-\u003eString-\u003e[Variant]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Client.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Introspection",
          "package": "dbus",
          "source": "src/DBus-Introspection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Introspection",
          "package": "dbus",
          "partial": "Introspection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Direction",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Direction",
          "package": "dbus",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Interface",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#Interface",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Interface",
          "package": "dbus",
          "partial": "Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Method",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Method",
          "package": "dbus",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "MethodArg",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#MethodArg",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "MethodArg",
          "package": "dbus",
          "partial": "Method Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:MethodArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Object",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#Object",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Object",
          "package": "dbus",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Property",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#Property",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Property",
          "package": "dbus",
          "partial": "Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "Signal",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#Signal",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "Signal",
          "package": "dbus",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "SignalArg",
          "package": "dbus",
          "source": "src/DBus-Introspection.html#SignalArg",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "SignalArg",
          "package": "dbus",
          "partial": "Signal Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#t:SignalArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "directionIn",
          "package": "dbus",
          "signature": "Direction",
          "source": "src/DBus-Introspection.html#directionIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "directionIn",
          "package": "dbus",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:directionIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "directionOut",
          "package": "dbus",
          "signature": "Direction",
          "source": "src/DBus-Introspection.html#directionOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "directionOut",
          "package": "dbus",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:directionOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "formatXML",
          "package": "dbus",
          "signature": "Object -\u003e Maybe String",
          "source": "src/DBus-Introspection.html#formatXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "formatXML",
          "normalized": "Object-\u003eMaybe String",
          "package": "dbus",
          "partial": "XML",
          "signature": "Object-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:formatXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "interface",
          "package": "dbus",
          "signature": "InterfaceName -\u003e Interface",
          "source": "src/DBus-Introspection.html#interface",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "interface",
          "normalized": "InterfaceName-\u003eInterface",
          "package": "dbus",
          "signature": "InterfaceName-\u003eInterface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "interfaceMethods",
          "package": "dbus",
          "signature": "Interface -\u003e [Method]",
          "source": "src/DBus-Introspection.html#interfaceMethods",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "interfaceMethods",
          "normalized": "Interface-\u003e[Method]",
          "package": "dbus",
          "partial": "Methods",
          "signature": "Interface-\u003e[Method]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:interfaceMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "interfaceName",
          "package": "dbus",
          "signature": "Interface -\u003e InterfaceName",
          "source": "src/DBus-Introspection.html#interfaceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "interfaceName",
          "normalized": "Interface-\u003eInterfaceName",
          "package": "dbus",
          "partial": "Name",
          "signature": "Interface-\u003eInterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:interfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "interfaceProperties",
          "package": "dbus",
          "signature": "Interface -\u003e [Property]",
          "source": "src/DBus-Introspection.html#interfaceProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "interfaceProperties",
          "normalized": "Interface-\u003e[Property]",
          "package": "dbus",
          "partial": "Properties",
          "signature": "Interface-\u003e[Property]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:interfaceProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "interfaceSignals",
          "package": "dbus",
          "signature": "Interface -\u003e [Signal]",
          "source": "src/DBus-Introspection.html#interfaceSignals",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "interfaceSignals",
          "normalized": "Interface-\u003e[Signal]",
          "package": "dbus",
          "partial": "Signals",
          "signature": "Interface-\u003e[Signal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:interfaceSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "method",
          "package": "dbus",
          "signature": "MemberName -\u003e Method",
          "source": "src/DBus-Introspection.html#method",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "method",
          "normalized": "MemberName-\u003eMethod",
          "package": "dbus",
          "signature": "MemberName-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "methodArg",
          "package": "dbus",
          "signature": "String -\u003e Type -\u003e Direction -\u003e MethodArg",
          "source": "src/DBus-Introspection.html#methodArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "methodArg",
          "normalized": "String-\u003eType-\u003eDirection-\u003eMethodArg",
          "package": "dbus",
          "partial": "Arg",
          "signature": "String-\u003eType-\u003eDirection-\u003eMethodArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:methodArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "methodArgDirection",
          "package": "dbus",
          "signature": "MethodArg -\u003e Direction",
          "source": "src/DBus-Introspection.html#methodArgDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "methodArgDirection",
          "normalized": "MethodArg-\u003eDirection",
          "package": "dbus",
          "partial": "Arg Direction",
          "signature": "MethodArg-\u003eDirection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:methodArgDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "methodArgName",
          "package": "dbus",
          "signature": "MethodArg -\u003e String",
          "source": "src/DBus-Introspection.html#methodArgName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "methodArgName",
          "normalized": "MethodArg-\u003eString",
          "package": "dbus",
          "partial": "Arg Name",
          "signature": "MethodArg-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:methodArgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "methodArgType",
          "package": "dbus",
          "signature": "MethodArg -\u003e Type",
          "source": "src/DBus-Introspection.html#methodArgType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "methodArgType",
          "normalized": "MethodArg-\u003eType",
          "package": "dbus",
          "partial": "Arg Type",
          "signature": "MethodArg-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:methodArgType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "methodArgs",
          "package": "dbus",
          "signature": "Method -\u003e [MethodArg]",
          "source": "src/DBus-Introspection.html#methodArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "methodArgs",
          "normalized": "Method-\u003e[MethodArg]",
          "package": "dbus",
          "partial": "Args",
          "signature": "Method-\u003e[MethodArg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:methodArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "methodName",
          "package": "dbus",
          "signature": "Method -\u003e MemberName",
          "source": "src/DBus-Introspection.html#methodName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "methodName",
          "normalized": "Method-\u003eMemberName",
          "package": "dbus",
          "partial": "Name",
          "signature": "Method-\u003eMemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:methodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "object",
          "package": "dbus",
          "signature": "ObjectPath -\u003e Object",
          "source": "src/DBus-Introspection.html#object",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "object",
          "normalized": "ObjectPath-\u003eObject",
          "package": "dbus",
          "signature": "ObjectPath-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "objectChildren",
          "package": "dbus",
          "signature": "Object -\u003e [Object]",
          "source": "src/DBus-Introspection.html#objectChildren",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "objectChildren",
          "normalized": "Object-\u003e[Object]",
          "package": "dbus",
          "partial": "Children",
          "signature": "Object-\u003e[Object]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:objectChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "objectInterfaces",
          "package": "dbus",
          "signature": "Object -\u003e [Interface]",
          "source": "src/DBus-Introspection.html#objectInterfaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "objectInterfaces",
          "normalized": "Object-\u003e[Interface]",
          "package": "dbus",
          "partial": "Interfaces",
          "signature": "Object-\u003e[Interface]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:objectInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "objectPath",
          "package": "dbus",
          "signature": "Object -\u003e ObjectPath",
          "source": "src/DBus-Introspection.html#objectPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "objectPath",
          "normalized": "Object-\u003eObjectPath",
          "package": "dbus",
          "partial": "Path",
          "signature": "Object-\u003eObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:objectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "parseXML",
          "package": "dbus",
          "signature": "ObjectPath -\u003e String -\u003e Maybe Object",
          "source": "src/DBus-Introspection.html#parseXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "parseXML",
          "normalized": "ObjectPath-\u003eString-\u003eMaybe Object",
          "package": "dbus",
          "partial": "XML",
          "signature": "ObjectPath-\u003eString-\u003eMaybe Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:parseXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "property",
          "package": "dbus",
          "signature": "String -\u003e Type -\u003e Property",
          "source": "src/DBus-Introspection.html#property",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "property",
          "normalized": "String-\u003eType-\u003eProperty",
          "package": "dbus",
          "signature": "String-\u003eType-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "propertyName",
          "package": "dbus",
          "signature": "Property -\u003e String",
          "source": "src/DBus-Introspection.html#propertyName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "propertyName",
          "normalized": "Property-\u003eString",
          "package": "dbus",
          "partial": "Name",
          "signature": "Property-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:propertyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "propertyRead",
          "package": "dbus",
          "signature": "Property -\u003e Bool",
          "source": "src/DBus-Introspection.html#propertyRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "propertyRead",
          "normalized": "Property-\u003eBool",
          "package": "dbus",
          "partial": "Read",
          "signature": "Property-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:propertyRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "propertyType",
          "package": "dbus",
          "signature": "Property -\u003e Type",
          "source": "src/DBus-Introspection.html#propertyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "propertyType",
          "normalized": "Property-\u003eType",
          "package": "dbus",
          "partial": "Type",
          "signature": "Property-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:propertyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "propertyWrite",
          "package": "dbus",
          "signature": "Property -\u003e Bool",
          "source": "src/DBus-Introspection.html#propertyWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "propertyWrite",
          "normalized": "Property-\u003eBool",
          "package": "dbus",
          "partial": "Write",
          "signature": "Property-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:propertyWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "signal",
          "package": "dbus",
          "signature": "MemberName -\u003e Signal",
          "source": "src/DBus-Introspection.html#signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "signal",
          "normalized": "MemberName-\u003eSignal",
          "package": "dbus",
          "signature": "MemberName-\u003eSignal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "signalArg",
          "package": "dbus",
          "signature": "String -\u003e Type -\u003e SignalArg",
          "source": "src/DBus-Introspection.html#signalArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "signalArg",
          "normalized": "String-\u003eType-\u003eSignalArg",
          "package": "dbus",
          "partial": "Arg",
          "signature": "String-\u003eType-\u003eSignalArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:signalArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "signalArgName",
          "package": "dbus",
          "signature": "SignalArg -\u003e String",
          "source": "src/DBus-Introspection.html#signalArgName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "signalArgName",
          "normalized": "SignalArg-\u003eString",
          "package": "dbus",
          "partial": "Arg Name",
          "signature": "SignalArg-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:signalArgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "signalArgType",
          "package": "dbus",
          "signature": "SignalArg -\u003e Type",
          "source": "src/DBus-Introspection.html#signalArgType",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "signalArgType",
          "normalized": "SignalArg-\u003eType",
          "package": "dbus",
          "partial": "Arg Type",
          "signature": "SignalArg-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:signalArgType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "signalArgs",
          "package": "dbus",
          "signature": "Signal -\u003e [SignalArg]",
          "source": "src/DBus-Introspection.html#signalArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "signalArgs",
          "normalized": "Signal-\u003e[SignalArg]",
          "package": "dbus",
          "partial": "Args",
          "signature": "Signal-\u003e[SignalArg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:signalArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Introspection",
          "name": "signalName",
          "package": "dbus",
          "signature": "Signal -\u003e MemberName",
          "source": "src/DBus-Introspection.html#signalName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Introspection",
          "module": "DBus.Introspection",
          "name": "signalName",
          "normalized": "Signal-\u003eMemberName",
          "package": "dbus",
          "partial": "Name",
          "signature": "Signal-\u003eMemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Introspection.html#v:signalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eD-Bus sockets are used for communication between two peers. In this model,\n there is no \"bus\" or \"client\", simply two endpoints sending messages.\n\u003c/p\u003e\u003cp\u003eMost users will want to use the \u003ca\u003eDBus.Client\u003c/a\u003e module instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DBus.Socket",
          "name": "Socket",
          "package": "dbus",
          "source": "src/DBus-Socket.html",
          "type": "module"
        },
        "index": {
          "description": "D-Bus sockets are used for communication between two peers In this model there is no bus or client simply two endpoints sending messages Most users will want to use the DBus.Client module instead",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "Socket",
          "package": "dbus",
          "partial": "Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Authenticator defines how the local peer (client) authenticates\n itself to the remote peer (server).\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "Authenticator",
          "package": "dbus",
          "source": "src/DBus-Socket.html#Authenticator",
          "type": "data"
        },
        "index": {
          "description": "An Authenticator defines how the local peer client authenticates itself to the remote peer server",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "Authenticator",
          "package": "dbus",
          "partial": "Authenticator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#t:Authenticator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn open socket to another process. Messages can be sent to the remote\n peer using \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e, or received using \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "Socket",
          "package": "dbus",
          "source": "src/DBus-Socket.html#Socket",
          "type": "data"
        },
        "index": {
          "description": "An open socket to another process Messages can be sent to the remote peer using send or received using receive",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "Socket",
          "package": "dbus",
          "partial": "Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#t:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores information about an error encountered while creating or using a\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "SocketError",
          "package": "dbus",
          "source": "src/DBus-Socket.html#SocketError",
          "type": "data"
        },
        "index": {
          "description": "Stores information about an error encountered while creating or using Socket",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "SocketError",
          "package": "dbus",
          "partial": "Socket Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#t:SocketError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Socket",
          "name": "SocketListener",
          "package": "dbus",
          "source": "src/DBus-Socket.html#SocketListener",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "SocketListener",
          "package": "dbus",
          "partial": "Socket Listener",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#t:SocketListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed with \u003ccode\u003e\u003ca\u003eopenWith\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elistenWith\u003c/a\u003e\u003c/code\u003e to provide custom authenticators or\n transport options.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "SocketOptions",
          "package": "dbus",
          "source": "src/DBus-Socket.html#SocketOptions",
          "type": "data"
        },
        "index": {
          "description": "Used with openWith and listenWith to provide custom authenticators or transport options",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "SocketOptions",
          "package": "dbus",
          "partial": "Socket Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#t:SocketOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a new connection from a socket listener.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "accept",
          "package": "dbus",
          "signature": "SocketListener -\u003e IO Socket",
          "source": "src/DBus-Socket.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Accept new connection from socket listener Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "accept",
          "normalized": "SocketListener-\u003eIO Socket",
          "package": "dbus",
          "signature": "SocketListener-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty authenticator. Use \u003ccode\u003e\u003ca\u003eauthenticatorClient\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eauthenticatorServer\u003c/a\u003e\u003c/code\u003e\n to control how the authentication is performed.\n\u003c/p\u003e\u003cpre\u003e\nmyAuthenticator :: Authenticator MyTransport\nmyAuthenticator = authenticator\n    { \u003ccode\u003e\u003ca\u003eauthenticatorClient\u003c/a\u003e\u003c/code\u003e = clientMyAuth\n    , \u003ccode\u003e\u003ca\u003eauthenticatorServer\u003c/a\u003e\u003c/code\u003e = serverMyAuth\n    }\n\nclientMyAuth :: MyTransport -\u003e IO Bool\nserverMyAuth :: MyTransport -\u003e String -\u003e IO Bool\n\u003c/pre\u003e",
          "module": "DBus.Socket",
          "name": "authenticator",
          "package": "dbus",
          "signature": "Authenticator t",
          "source": "src/DBus-Socket.html#authenticator",
          "type": "function"
        },
        "index": {
          "description": "An empty authenticator Use authenticatorClient or authenticatorServer to control how the authentication is performed myAuthenticator Authenticator MyTransport myAuthenticator authenticator authenticatorClient clientMyAuth authenticatorServer serverMyAuth clientMyAuth MyTransport IO Bool serverMyAuth MyTransport String IO Bool",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "authenticator",
          "package": "dbus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:authenticator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the client-side half of an authenticator.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "authenticatorClient",
          "package": "dbus",
          "signature": "Authenticator t -\u003e t -\u003e IO Bool",
          "source": "src/DBus-Socket.html#authenticatorClient",
          "type": "function"
        },
        "index": {
          "description": "Defines the client-side half of an authenticator",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "authenticatorClient",
          "normalized": "Authenticator a-\u003ea-\u003eIO Bool",
          "package": "dbus",
          "partial": "Client",
          "signature": "Authenticator t-\u003et-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:authenticatorClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the server-side half of an authenticator. The UUID is\n allocated by the socket listener.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "authenticatorServer",
          "package": "dbus",
          "signature": "Authenticator t -\u003e t -\u003e UUID -\u003e IO Bool",
          "source": "src/DBus-Socket.html#authenticatorServer",
          "type": "function"
        },
        "index": {
          "description": "Defines the server-side half of an authenticator The UUID is allocated by the socket listener",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "authenticatorServer",
          "normalized": "Authenticator a-\u003ea-\u003eUUID-\u003eIO Bool",
          "package": "dbus",
          "partial": "Server",
          "signature": "Authenticator t-\u003et-\u003eUUID-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:authenticatorServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. Once closed, the socket is no longer valid and\n must not be used.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "close",
          "package": "dbus",
          "signature": "Socket -\u003e IO ()",
          "source": "src/DBus-Socket.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close an open Socket Once closed the socket is no longer valid and must not be used",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "close",
          "normalized": "Socket-\u003eIO()",
          "package": "dbus",
          "signature": "Socket-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open \u003ccode\u003e\u003ca\u003eSocketListener\u003c/a\u003e\u003c/code\u003e. Once closed, the listener is no longer\n valid and must not be used.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "closeListener",
          "package": "dbus",
          "signature": "SocketListener -\u003e IO ()",
          "source": "src/DBus-Socket.html#closeListener",
          "type": "function"
        },
        "index": {
          "description": "Close an open SocketListener Once closed the listener is no longer valid and must not be used",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "closeListener",
          "normalized": "SocketListener-\u003eIO()",
          "package": "dbus",
          "partial": "Listener",
          "signature": "SocketListener-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:closeListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eSocketOptions\u003c/a\u003e\u003c/code\u003e, which uses the default Unix/TCP transport and\n authenticator.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "defaultSocketOptions",
          "package": "dbus",
          "signature": "SocketOptions SocketTransport",
          "source": "src/DBus-Socket.html#defaultSocketOptions",
          "type": "function"
        },
        "index": {
          "description": "Default SocketOptions which uses the default Unix TCP transport and authenticator",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "defaultSocketOptions",
          "package": "dbus",
          "partial": "Socket Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:defaultSocketOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin listening at the given address.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e to create sockets from incoming connections.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecloseListener\u003c/a\u003e\u003c/code\u003e to stop listening, and to free underlying transport\n resources such as file descriptors.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "listen",
          "package": "dbus",
          "signature": "Address -\u003e IO SocketListener",
          "source": "src/DBus-Socket.html#listen",
          "type": "function"
        },
        "index": {
          "description": "Begin listening at the given address Use accept to create sockets from incoming connections Use closeListener to stop listening and to free underlying transport resources such as file descriptors Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "listen",
          "normalized": "Address-\u003eIO SocketListener",
          "package": "dbus",
          "signature": "Address-\u003eIO SocketListener",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin listening at the given address.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e to create sockets from incoming connections.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecloseListener\u003c/a\u003e\u003c/code\u003e to stop listening, and to free underlying transport\n resources such as file descriptors.\n\u003c/p\u003e\u003cp\u003eThis function is for users who need to define custom authenticators\n or transports.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "listenWith",
          "package": "dbus",
          "signature": "SocketOptions t -\u003e Address -\u003e IO SocketListener",
          "source": "src/DBus-Socket.html#listenWith",
          "type": "function"
        },
        "index": {
          "description": "Begin listening at the given address Use accept to create sockets from incoming connections Use closeListener to stop listening and to free underlying transport resources such as file descriptors This function is for users who need to define custom authenticators or transports Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "listenWith",
          "normalized": "SocketOptions a-\u003eAddress-\u003eIO SocketListener",
          "package": "dbus",
          "partial": "With",
          "signature": "SocketOptions t-\u003eAddress-\u003eIO SocketListener",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:listenWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a socket to a remote peer listening at the given address.\n\u003c/p\u003e\u003cpre\u003e\nopen = \u003ccode\u003e\u003ca\u003eopenWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultSocketOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "open",
          "package": "dbus",
          "signature": "Address -\u003e IO Socket",
          "source": "src/DBus-Socket.html#open",
          "type": "function"
        },
        "index": {
          "description": "Open socket to remote peer listening at the given address open openWith defaultSocketOptions Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "open",
          "normalized": "Address-\u003eIO Socket",
          "package": "dbus",
          "signature": "Address-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a socket to a remote peer listening at the given address.\n\u003c/p\u003e\u003cp\u003eMost users should use \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e. This function is for users who need to define\n custom authenticators or transports.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "openWith",
          "package": "dbus",
          "signature": "SocketOptions t -\u003e Address -\u003e IO Socket",
          "source": "src/DBus-Socket.html#openWith",
          "type": "function"
        },
        "index": {
          "description": "Open socket to remote peer listening at the given address Most users should use open This function is for users who need to define custom authenticators or transports Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "openWith",
          "normalized": "SocketOptions a-\u003eAddress-\u003eIO Socket",
          "package": "dbus",
          "partial": "With",
          "signature": "SocketOptions t-\u003eAddress-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:openWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive the next message from the socket , blocking until one is available.\n\u003c/p\u003e\u003cp\u003eSockets are thread-safe. Only one message may be received at a time; if\n multiple threads attempt to receive messages concurrently, one will block\n until after the other has finished.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "receive",
          "package": "dbus",
          "signature": "Socket -\u003e IO ReceivedMessage",
          "source": "src/DBus-Socket.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive the next message from the socket blocking until one is available Sockets are thread-safe Only one message may be received at time if multiple threads attempt to receive messages concurrently one will block until after the other has finished Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "receive",
          "normalized": "Socket-\u003eIO ReceivedMessage",
          "package": "dbus",
          "signature": "Socket-\u003eIO ReceivedMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a single message, with a generated \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e. The second parameter\n exists to prevent race conditions when registering a reply handler; it\n receives the serial the message \u003cem\u003ewill\u003c/em\u003e be sent with, before it's\n actually sent.\n\u003c/p\u003e\u003cp\u003eSockets are thread-safe. Only one message may be sent at a time; if\n multiple threads attempt to send messages concurrently, one will block\n until after the other has finished.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eSocketError\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "send",
          "package": "dbus",
          "signature": "Socket -\u003e msg -\u003e (Serial -\u003e IO a) -\u003e IO a",
          "source": "src/DBus-Socket.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send single message with generated Serial The second parameter exists to prevent race conditions when registering reply handler it receives the serial the message will be sent with before it actually sent Sockets are thread-safe Only one message may be sent at time if multiple threads attempt to send messages concurrently one will block until after the other has finished Throws SocketError on failure",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "send",
          "normalized": "Socket-\u003ea-\u003e(Serial-\u003eIO b)-\u003eIO b",
          "package": "dbus",
          "signature": "Socket-\u003emsg-\u003e(Serial-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to perform authentication with the remote peer. After a\n transport has been opened, it will be passed to the authenticator.\n If the authenticator returns true, then the socket was\n authenticated.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "socketAuthenticator",
          "package": "dbus",
          "signature": "SocketOptions t -\u003e Authenticator t",
          "source": "src/DBus-Socket.html#socketAuthenticator",
          "type": "function"
        },
        "index": {
          "description": "Used to perform authentication with the remote peer After transport has been opened it will be passed to the authenticator If the authenticator returns true then the socket was authenticated",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketAuthenticator",
          "normalized": "SocketOptions a-\u003eAuthenticator a",
          "package": "dbus",
          "partial": "Authenticator",
          "signature": "SocketOptions t-\u003eAuthenticator t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketAuthenticator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Socket",
          "name": "socketError",
          "package": "dbus",
          "signature": "String -\u003e SocketError",
          "source": "src/DBus-Socket.html#socketError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketError",
          "normalized": "String-\u003eSocketError",
          "package": "dbus",
          "partial": "Error",
          "signature": "String-\u003eSocketError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Socket",
          "name": "socketErrorAddress",
          "package": "dbus",
          "signature": "SocketError -\u003e Maybe Address",
          "source": "src/DBus-Socket.html#socketErrorAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketErrorAddress",
          "normalized": "SocketError-\u003eMaybe Address",
          "package": "dbus",
          "partial": "Error Address",
          "signature": "SocketError-\u003eMaybe Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketErrorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Socket",
          "name": "socketErrorFatal",
          "package": "dbus",
          "signature": "SocketError -\u003e Bool",
          "source": "src/DBus-Socket.html#socketErrorFatal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketErrorFatal",
          "normalized": "SocketError-\u003eBool",
          "package": "dbus",
          "partial": "Error Fatal",
          "signature": "SocketError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketErrorFatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Socket",
          "name": "socketErrorMessage",
          "package": "dbus",
          "signature": "SocketError -\u003e String",
          "source": "src/DBus-Socket.html#socketErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketErrorMessage",
          "normalized": "SocketError-\u003eString",
          "package": "dbus",
          "partial": "Error Message",
          "signature": "SocketError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the address to use to connect to a listener.\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "socketListenerAddress",
          "package": "dbus",
          "signature": "SocketListener -\u003e Address",
          "source": "src/DBus-Socket.html#socketListenerAddress",
          "type": "function"
        },
        "index": {
          "description": "Get the address to use to connect to listener",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketListenerAddress",
          "normalized": "SocketListener-\u003eAddress",
          "package": "dbus",
          "partial": "Listener Address",
          "signature": "SocketListener-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketListenerAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for the underlying transport, to be used by custom transports\n for controlling how to connect to the remote peer.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eDBus.Transport\u003c/a\u003e for details on defining custom transports\n\u003c/p\u003e",
          "module": "DBus.Socket",
          "name": "socketTransportOptions",
          "package": "dbus",
          "signature": "SocketOptions t -\u003e TransportOptions t",
          "source": "src/DBus-Socket.html#socketTransportOptions",
          "type": "function"
        },
        "index": {
          "description": "Options for the underlying transport to be used by custom transports for controlling how to connect to the remote peer See DBus.Transport for details on defining custom transports",
          "hierarchy": "DBus Socket",
          "module": "DBus.Socket",
          "name": "socketTransportOptions",
          "normalized": "SocketOptions a-\u003eTransportOptions a",
          "package": "dbus",
          "partial": "Transport Options",
          "signature": "SocketOptions t-\u003eTransportOptions t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Socket.html#v:socketTransportOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for defining custom transport mechanisms. Most users will not\n need to care about the types defined in this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DBus.Transport",
          "name": "Transport",
          "package": "dbus",
          "source": "src/DBus-Transport.html",
          "type": "module"
        },
        "index": {
          "description": "Support for defining custom transport mechanisms Most users will not need to care about the types defined in this module",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "Transport",
          "package": "dbus",
          "partial": "Transport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupports connecting over Unix or TCP sockets.\n\u003c/p\u003e\u003cp\u003eUnix sockets are similar to pipes, but exist as special files in the\n filesystem. On Linux, \u003cem\u003eabstract sockets\u003c/em\u003e have a path-like address, but do\n not actually have entries in the filesystem.\n\u003c/p\u003e\u003cp\u003eTCP sockets may use either IPv4 or IPv6.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "SocketTransport",
          "package": "dbus",
          "source": "src/DBus-Transport.html#SocketTransport",
          "type": "data"
        },
        "index": {
          "description": "Supports connecting over Unix or TCP sockets Unix sockets are similar to pipes but exist as special files in the filesystem On Linux abstract sockets have path-like address but do not actually have entries in the filesystem TCP sockets may use either IPv4 or IPv6",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "SocketTransport",
          "package": "dbus",
          "partial": "Socket Transport",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#t:SocketTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e can exchange bytes with a remote peer.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "Transport",
          "package": "dbus",
          "source": "src/DBus-Transport.html#Transport",
          "type": "class"
        },
        "index": {
          "description": "Transport can exchange bytes with remote peer",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "Transport",
          "package": "dbus",
          "partial": "Transport",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown from transport methods when an error occurs.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "TransportError",
          "package": "dbus",
          "source": "src/DBus-Transport.html#TransportError",
          "type": "data"
        },
        "index": {
          "description": "Thrown from transport methods when an error occurs",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "TransportError",
          "package": "dbus",
          "partial": "Transport Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#t:TransportError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e which can listen for and accept connections from remote\n peers.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "TransportListen",
          "package": "dbus",
          "source": "src/DBus-Transport.html#TransportListen",
          "type": "class"
        },
        "index": {
          "description": "Transport which can listen for and accept connections from remote peers",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "TransportListen",
          "package": "dbus",
          "partial": "Transport Listen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#t:TransportListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e which can open a connection to a remote peer.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "TransportOpen",
          "package": "dbus",
          "source": "src/DBus-Transport.html#TransportOpen",
          "type": "class"
        },
        "index": {
          "description": "Transport which can open connection to remote peer",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "TransportOpen",
          "package": "dbus",
          "partial": "Transport Open",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#t:TransportOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the processID, userID, and groupID of the socket's peer.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetPeerCred\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "socketTransportCredentials",
          "package": "dbus",
          "signature": "SocketTransport -\u003e IO (CUInt, CUInt, CUInt)",
          "source": "src/DBus-Transport.html#socketTransportCredentials",
          "type": "function"
        },
        "index": {
          "description": "Returns the processID userID and groupID of the socket peer See getPeerCred",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "socketTransportCredentials",
          "normalized": "SocketTransport-\u003eIO(CUInt,CUInt,CUInt)",
          "package": "dbus",
          "partial": "Transport Credentials",
          "signature": "SocketTransport-\u003eIO(CUInt,CUInt,CUInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:socketTransportCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Transport",
          "name": "socketTransportOptionBacklog",
          "package": "dbus",
          "signature": "TransportOptions SocketTransport -\u003e Int",
          "source": "src/DBus-Transport.html#socketTransportOptionBacklog",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "socketTransportOptionBacklog",
          "normalized": "TransportOptions SocketTransport-\u003eInt",
          "package": "dbus",
          "partial": "Transport Option Backlog",
          "signature": "TransportOptions SocketTransport-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:socketTransportOptionBacklog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a new connection.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eTransportError\u003c/a\u003e\u003c/code\u003e if some error happens before the\n transport is ready to exchange bytes.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportAccept",
          "package": "dbus",
          "signature": "TransportListener t -\u003e IO t",
          "source": "src/DBus-Transport.html#transportAccept",
          "type": "method"
        },
        "index": {
          "description": "Accept new connection Throws TransportError if some error happens before the transport is ready to exchange bytes",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportAccept",
          "normalized": "TransportListener a-\u003eIO a",
          "package": "dbus",
          "partial": "Accept",
          "signature": "TransportListener t-\u003eIO t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open transport, and release any associated resources\n or handles.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportClose",
          "package": "dbus",
          "signature": "t -\u003e IO ()",
          "source": "src/DBus-Transport.html#transportClose",
          "type": "method"
        },
        "index": {
          "description": "Close an open transport and release any associated resources or handles",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportClose",
          "normalized": "a-\u003eIO()",
          "package": "dbus",
          "partial": "Close",
          "signature": "t-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault values for this transport's options.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportDefaultOptions",
          "package": "dbus",
          "signature": "TransportOptions t",
          "source": "src/DBus-Transport.html#transportDefaultOptions",
          "type": "method"
        },
        "index": {
          "description": "Default values for this transport options",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportDefaultOptions",
          "package": "dbus",
          "partial": "Default Options",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportDefaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Transport",
          "name": "transportError",
          "package": "dbus",
          "signature": "String -\u003e TransportError",
          "source": "src/DBus-Transport.html#transportError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportError",
          "normalized": "String-\u003eTransportError",
          "package": "dbus",
          "partial": "Error",
          "signature": "String-\u003eTransportError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Transport",
          "name": "transportErrorAddress",
          "package": "dbus",
          "signature": "TransportError -\u003e Maybe Address",
          "source": "src/DBus-Transport.html#transportErrorAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportErrorAddress",
          "normalized": "TransportError-\u003eMaybe Address",
          "package": "dbus",
          "partial": "Error Address",
          "signature": "TransportError-\u003eMaybe Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportErrorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus.Transport",
          "name": "transportErrorMessage",
          "package": "dbus",
          "signature": "TransportError -\u003e String",
          "source": "src/DBus-Transport.html#transportErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportErrorMessage",
          "normalized": "TransportError-\u003eString",
          "package": "dbus",
          "partial": "Error Message",
          "signature": "TransportError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e of the given size from the transport. The\n transport should block until sufficient bytes are available, and\n only return fewer than the requested amount if there will not be\n any more data.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eTransportError\u003c/a\u003e\u003c/code\u003e if an error occurs.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportGet",
          "package": "dbus",
          "signature": "t -\u003e Int -\u003e IO ByteString",
          "source": "src/DBus-Transport.html#transportGet",
          "type": "method"
        },
        "index": {
          "description": "Receive ByteString of the given size from the transport The transport should block until sufficient bytes are available and only return fewer than the requested amount if there will not be any more data Throws TransportError if an error occurs",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportGet",
          "normalized": "a-\u003eInt-\u003eIO ByteString",
          "package": "dbus",
          "partial": "Get",
          "signature": "t-\u003eInt-\u003eIO ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin listening for connections on the given address, using the\n given options.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eTransportError\u003c/a\u003e\u003c/code\u003e if it's not possible to listen at that\n address (for example, if the port is already in use).\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportListen",
          "package": "dbus",
          "signature": "TransportOptions t -\u003e Address -\u003e IO (TransportListener t)",
          "source": "src/DBus-Transport.html#transportListen",
          "type": "method"
        },
        "index": {
          "description": "Begin listening for connections on the given address using the given options Throws TransportError if it not possible to listen at that address for example if the port is already in use",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportListen",
          "normalized": "TransportOptions a-\u003eAddress-\u003eIO(TransportListener a)",
          "package": "dbus",
          "partial": "Listen",
          "signature": "TransportOptions t-\u003eAddress-\u003eIO(TransportListener t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the address to use to connect to a listener.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportListenerAddress",
          "package": "dbus",
          "signature": "TransportListener t -\u003e Address",
          "source": "src/DBus-Transport.html#transportListenerAddress",
          "type": "method"
        },
        "index": {
          "description": "Get the address to use to connect to listener",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportListenerAddress",
          "normalized": "TransportListener a-\u003eAddress",
          "package": "dbus",
          "partial": "Listener Address",
          "signature": "TransportListener t-\u003eAddress",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportListenerAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open listener.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportListenerClose",
          "package": "dbus",
          "signature": "TransportListener t -\u003e IO ()",
          "source": "src/DBus-Transport.html#transportListenerClose",
          "type": "method"
        },
        "index": {
          "description": "Close an open listener",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportListenerClose",
          "normalized": "TransportListener a-\u003eIO()",
          "package": "dbus",
          "partial": "Listener Close",
          "signature": "TransportListener t-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportListenerClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the UUID allocated to this transport listener.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erandomUUID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportListenerUUID",
          "package": "dbus",
          "signature": "TransportListener t -\u003e UUID",
          "source": "src/DBus-Transport.html#transportListenerUUID",
          "type": "method"
        },
        "index": {
          "description": "Get the UUID allocated to this transport listener See randomUUID",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportListenerUUID",
          "normalized": "TransportListener a-\u003eUUID",
          "package": "dbus",
          "partial": "Listener UUID",
          "signature": "TransportListener t-\u003eUUID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportListenerUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a connection to the given address, using the given options.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eTransportError\u003c/a\u003e\u003c/code\u003e if the connection could not be\n established.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportOpen",
          "package": "dbus",
          "signature": "TransportOptions t -\u003e Address -\u003e IO t",
          "source": "src/DBus-Transport.html#transportOpen",
          "type": "method"
        },
        "index": {
          "description": "Open connection to the given address using the given options Throws TransportError if the connection could not be established",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportOpen",
          "normalized": "TransportOptions a-\u003eAddress-\u003eIO a",
          "package": "dbus",
          "partial": "Open",
          "signature": "TransportOptions t-\u003eAddress-\u003eIO t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the transport.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eTransportError\u003c/a\u003e\u003c/code\u003e if an error occurs.\n\u003c/p\u003e",
          "module": "DBus.Transport",
          "name": "transportPut",
          "package": "dbus",
          "signature": "t -\u003e ByteString -\u003e IO ()",
          "source": "src/DBus-Transport.html#transportPut",
          "type": "method"
        },
        "index": {
          "description": "Send ByteString over the transport Throws TransportError if an error occurs",
          "hierarchy": "DBus Transport",
          "module": "DBus.Transport",
          "name": "transportPut",
          "normalized": "a-\u003eByteString-\u003eIO()",
          "package": "dbus",
          "partial": "Put",
          "signature": "t-\u003eByteString-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus-Transport.html#v:transportPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types, useful to every D-Bus application.\n\u003c/p\u003e\u003cp\u003eAuthors of client applications should import \u003ca\u003eDBus.Client\u003c/a\u003e, which provides\n an easy RPC-oriented interface to D-Bus methods and signals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DBus",
          "name": "DBus",
          "package": "dbus",
          "source": "src/DBus.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types useful to every D-Bus application Authors of client applications should import DBus.Client which provides an easy RPC-oriented interface to D-Bus methods and signals",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "DBus",
          "package": "dbus",
          "partial": "DBus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a D-Bus server must listen for connections, or a client must connect\n to a server, the listening socket's configuration is specified with an\n \u003cem\u003eaddress\u003c/em\u003e. An address contains the \u003cem\u003emethod\u003c/em\u003e, which determines the\n protocol and transport mechanism, and \u003cem\u003eparameters\u003c/em\u003e, which provide\n additional method-specific information about the address.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Address",
          "package": "dbus",
          "source": "src/DBus-Address.html#Address",
          "type": "data"
        },
        "index": {
          "description": "When D-Bus server must listen for connections or client must connect to server the listening socket configuration is specified with an address An address contains the method which determines the protocol and transport mechanism and parameters which provide additional method-specific information about the address",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Address",
          "package": "dbus",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA D-Bus Array is a container type similar to Haskell lists, storing\n zero or more values of a single D-Bus type.\n\u003c/p\u003e\u003cp\u003eMost users can use the \u003ccode\u003e\u003ca\u003eIsVariant\u003c/a\u003e\u003c/code\u003e instance for lists or vectors to extract\n the values of an array. This type is for advanced use cases, where the user\n wants to convert array values to Haskell types that are not instances of\n \u003ccode\u003e\u003ca\u003eIsValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Array",
          "package": "dbus",
          "source": "src/DBus-Types.html#Array",
          "type": "data"
        },
        "index": {
          "description": "D-Bus Array is container type similar to Haskell lists storing zero or more values of single D-Bus type Most users can use the IsVariant instance for lists or vectors to extract the values of an array This type is for advanced use cases where the user wants to convert array values to Haskell types that are not instances of IsValue",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Array",
          "package": "dbus",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBus names are used to identify particular clients on the message bus.\n A bus name may be either \u003cem\u003eunique\u003c/em\u003e or \u003cem\u003ewell-known\u003c/em\u003e, where unique names\n start with a colon. Bus names consist of alphanumeric characters separated\n by periods.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-bus\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "BusName",
          "package": "dbus",
          "source": "src/DBus-Types.html#BusName",
          "type": "data"
        },
        "index": {
          "description": "Bus names are used to identify particular clients on the message bus bus name may be either unique or well-known where unique names start with colon Bus names consist of alphanumeric characters separated by periods See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-bus for details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "BusName",
          "package": "dbus",
          "partial": "Bus Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:BusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA D-Bus Dictionary is a container type similar to Haskell maps, storing\n zero or more associations between keys and values.\n\u003c/p\u003e\u003cp\u003eMost users can use the \u003ccode\u003e\u003ca\u003eIsVariant\u003c/a\u003e\u003c/code\u003e instance for maps to extract the values\n of a dictionary. This type is for advanced use cases, where the user\n wants to convert dictionary items to Haskell types that are not instances\n of \u003ccode\u003e\u003ca\u003eIsValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Dictionary",
          "package": "dbus",
          "source": "src/DBus-Types.html#Dictionary",
          "type": "data"
        },
        "index": {
          "description": "D-Bus Dictionary is container type similar to Haskell maps storing zero or more associations between keys and values Most users can use the IsVariant instance for maps to extract the values of dictionary This type is for advanced use cases where the user wants to convert dictionary items to Haskell types that are not instances of IsValue",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Dictionary",
          "package": "dbus",
          "partial": "Dictionary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Dictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "Endianness",
          "package": "dbus",
          "source": "src/DBus-Wire.html#Endianness",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Endianness",
          "package": "dbus",
          "partial": "Endianness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Endianness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError names are used to identify which type of error was returned from\n a method call. Error names consist of alphanumeric characters\n separated by periods.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-error\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "ErrorName",
          "package": "dbus",
          "source": "src/DBus-Types.html#ErrorName",
          "type": "data"
        },
        "index": {
          "description": "Error names are used to identify which type of error was returned from method call Error names consist of alphanumeric characters separated by periods See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-error for details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ErrorName",
          "package": "dbus",
          "partial": "Error Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:ErrorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterfaces are used to group a set of methods and signals within an\n exported object. Interface names consist of alphanumeric characters\n separated by periods.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-interface\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "InterfaceName",
          "package": "dbus",
          "source": "src/DBus-Types.html#InterfaceName",
          "type": "data"
        },
        "index": {
          "description": "Interfaces are used to group set of methods and signals within an exported object Interface names consist of alphanumeric characters separated by periods See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-interface for details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "InterfaceName",
          "package": "dbus",
          "partial": "Interface Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:InterfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic types can be used as keys to dictionaries.\n\u003c/p\u003e\u003cp\u003eUsers may not provide new instances of \u003ccode\u003e\u003ca\u003eIsAtom\u003c/a\u003e\u003c/code\u003e because this could allow\n dictionaries to be created with invalid keys.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "IsAtom",
          "package": "dbus",
          "source": "src/DBus-Types.html#IsAtom",
          "type": "class"
        },
        "index": {
          "description": "Atomic types can be used as keys to dictionaries Users may not provide new instances of IsAtom because this could allow dictionaries to be created with invalid keys",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "IsAtom",
          "package": "dbus",
          "partial": "Is Atom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:IsAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue types can be used as items in containers, such as lists or\n dictionaries.\n\u003c/p\u003e\u003cp\u003eUsers may not provide new instances of \u003ccode\u003e\u003ca\u003eIsValue\u003c/a\u003e\u003c/code\u003e because this could allow\n containers to be created with items of heterogenous types.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "IsValue",
          "package": "dbus",
          "source": "src/DBus-Types.html#IsValue",
          "type": "class"
        },
        "index": {
          "description": "Value types can be used as items in containers such as lists or dictionaries Users may not provide new instances of IsValue because this could allow containers to be created with items of heterogenous types",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "IsValue",
          "package": "dbus",
          "partial": "Is Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:IsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "IsVariant",
          "package": "dbus",
          "source": "src/DBus-Types.html#IsVariant",
          "type": "class"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "IsVariant",
          "package": "dbus",
          "partial": "Is Variant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:IsVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "MarshalError",
          "package": "dbus",
          "source": "src/DBus-Wire.html#MarshalError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "MarshalError",
          "package": "dbus",
          "partial": "Marshal Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:MarshalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMember names are used to identify a single method or signal within an\n interface. Method names consist of alphanumeric characters.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-names-member\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "MemberName",
          "package": "dbus",
          "source": "src/DBus-Types.html#MemberName",
          "type": "data"
        },
        "index": {
          "description": "Member names are used to identify single method or signal within an interface Method names consist of alphanumeric characters See http dbus.freedesktop.org doc dbus-specification.html message-protocol-names-member for details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "MemberName",
          "package": "dbus",
          "partial": "Member Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:MemberName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "Message",
          "package": "dbus",
          "source": "src/DBus-Message.html#Message",
          "type": "class"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Message",
          "package": "dbus",
          "partial": "Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method call is a request to run some procedure exported by the\n remote process. Procedures are identified by an (object_path,\n interface_name, method_name) tuple.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "MethodCall",
          "package": "dbus",
          "source": "src/DBus-Message.html#MethodCall",
          "type": "data"
        },
        "index": {
          "description": "method call is request to run some procedure exported by the remote process Procedures are identified by an object path interface name method name tuple",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "MethodCall",
          "package": "dbus",
          "partial": "Method Call",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method error is a reply to a method call, indicating that the call\n received an error and did not succeed.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "MethodError",
          "package": "dbus",
          "source": "src/DBus-Message.html#MethodError",
          "type": "data"
        },
        "index": {
          "description": "method error is reply to method call indicating that the call received an error and did not succeed",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "MethodError",
          "package": "dbus",
          "partial": "Method Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:MethodError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method return is a reply to a method call, indicating that the call\n succeeded.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "MethodReturn",
          "package": "dbus",
          "source": "src/DBus-Message.html#MethodReturn",
          "type": "data"
        },
        "index": {
          "description": "method return is reply to method call indicating that the call succeeded",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "MethodReturn",
          "package": "dbus",
          "partial": "Method Return",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:MethodReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject paths are special strings, used to identify a particular object\n exported from a D-Bus application.\n\u003c/p\u003e\u003cp\u003eObject paths must begin with a slash, and consist of alphanumeric\n characters separated by slashes.\n\u003c/p\u003e\u003cp\u003eSee\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-marshaling-object-path\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "ObjectPath",
          "package": "dbus",
          "source": "src/DBus-Types.html#ObjectPath",
          "type": "data"
        },
        "index": {
          "description": "Object paths are special strings used to identify particular object exported from D-Bus application Object paths must begin with slash and consist of alphanumeric characters separated by slashes See http dbus.freedesktop.org doc dbus-specification.html message-protocol-marshaling-object-path for details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ObjectPath",
          "package": "dbus",
          "partial": "Object Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:ObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot an actual message type, but a wrapper around messages received from\n the bus. Each value contains the message's \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf casing against these constructors, always include a default case to\n handle messages of an unknown type. New message types may be added to the\n D-Bus specification, and applications should handle them gracefully by\n either ignoring or logging them.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "ReceivedMessage",
          "package": "dbus",
          "source": "src/DBus-Message.html#ReceivedMessage",
          "type": "data"
        },
        "index": {
          "description": "Not an actual message type but wrapper around messages received from the bus Each value contains the message Serial If casing against these constructors always include default case to handle messages of an unknown type New message types may be added to the D-Bus specification and applications should handle them gracefully by either ignoring or logging them",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ReceivedMessage",
          "package": "dbus",
          "partial": "Received Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:ReceivedMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value used to uniquely identify a particular message within a session.\n Serials are 32-bit unsigned integers, and eventually wrap.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Serial",
          "package": "dbus",
          "source": "src/DBus-Types.html#Serial",
          "type": "data"
        },
        "index": {
          "description": "value used to uniquely identify particular message within session Serials are bit unsigned integers and eventually wrap",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Serial",
          "package": "dbus",
          "partial": "Serial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals are broadcast by applications to notify other clients of some\n event.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Signal",
          "package": "dbus",
          "source": "src/DBus-Message.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "Signals are broadcast by applications to notify other clients of some event",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Signal",
          "package": "dbus",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signature is a list of D-Bus types, obeying some basic rules of\n validity.\n\u003c/p\u003e\u003cp\u003eThe rules of signature validity are complex: see\n \u003ca\u003ehttp://dbus.freedesktop.org/doc/dbus-specification.html#message-protocol-signatures\u003c/a\u003e\n for details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Signature",
          "package": "dbus",
          "source": "src/DBus-Types.html#Signature",
          "type": "data"
        },
        "index": {
          "description": "signature is list of D-Bus types obeying some basic rules of validity The rules of signature validity are complex see http dbus.freedesktop.org doc dbus-specification.html message-protocol-signatures for details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Signature",
          "package": "dbus",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA D-Bus Structure is a container type similar to Haskell tuples, storing\n values of any type that is convertable to \u003ccode\u003e\u003ca\u003eIsVariant\u003c/a\u003e\u003c/code\u003e. A Structure may\n contain up to 255 values.\n\u003c/p\u003e\u003cp\u003eMost users can use the \u003ccode\u003e\u003ca\u003eIsVariant\u003c/a\u003e\u003c/code\u003e instance for tuples to extract the\n values of a structure. This type is for very large structures, which may\n be awkward to work with as tuples.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Structure",
          "package": "dbus",
          "source": "src/DBus-Types.html#Structure",
          "type": "data"
        },
        "index": {
          "description": "D-Bus Structure is container type similar to Haskell tuples storing values of any type that is convertable to IsVariant Structure may contain up to values Most users can use the IsVariant instance for tuples to extract the values of structure This type is for very large structures which may be awkward to work with as tuples",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Structure",
          "package": "dbus",
          "partial": "Structure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "Type",
          "package": "dbus",
          "source": "src/DBus-Types.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Type",
          "package": "dbus",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA D-Bus UUID is 128 bits of data, usually randomly generated. They are\n used for identifying unique server instances to clients.\n\u003c/p\u003e\u003cp\u003eOlder versions of the D-Bus spec also called these values \u003cem\u003eGUIDs\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eD-Bus UUIDs are not the same as the RFC-standardized UUIDs or GUIDs.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "UUID",
          "package": "dbus",
          "source": "src/DBus.html#UUID",
          "type": "data"
        },
        "index": {
          "description": "D-Bus UUID is bits of data usually randomly generated They are used for identifying unique server instances to clients Older versions of the D-Bus spec also called these values GUIDs D-Bus UUIDs are not the same as the RFC-standardized UUIDs or GUIDs",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "UUID",
          "package": "dbus",
          "partial": "UUID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:UUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "UnmarshalError",
          "package": "dbus",
          "source": "src/DBus-Wire.html#UnmarshalError",
          "type": "data"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "UnmarshalError",
          "package": "dbus",
          "partial": "Unmarshal Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:UnmarshalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariants may contain any other built-in D-Bus value. Besides\n representing native \u003ccode\u003eVARIANT\u003c/code\u003e values, they allow type-safe storage and\n inspection of D-Bus collections.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "Variant",
          "package": "dbus",
          "source": "src/DBus-Types.html#Variant",
          "type": "data"
        },
        "index": {
          "description": "Variants may contain any other built-in D-Bus value Besides representing native VARIANT values they allow type-safe storage and inspection of D-Bus collections",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "Variant",
          "package": "dbus",
          "partial": "Variant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#t:Variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "BigEndian",
          "package": "dbus",
          "signature": "BigEndian",
          "source": "src/DBus-Wire.html#Endianness",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "BigEndian",
          "package": "dbus",
          "partial": "Big Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:BigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "LittleEndian",
          "package": "dbus",
          "signature": "LittleEndian",
          "source": "src/DBus-Wire.html#Endianness",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "LittleEndian",
          "package": "dbus",
          "partial": "Little Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:LittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "ReceivedMethodCall",
          "package": "dbus",
          "signature": "ReceivedMethodCall Serial MethodCall",
          "source": "src/DBus-Message.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ReceivedMethodCall",
          "package": "dbus",
          "partial": "Received Method Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:ReceivedMethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "ReceivedMethodError",
          "package": "dbus",
          "signature": "ReceivedMethodError Serial MethodError",
          "source": "src/DBus-Message.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ReceivedMethodError",
          "package": "dbus",
          "partial": "Received Method Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:ReceivedMethodError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "ReceivedMethodReturn",
          "package": "dbus",
          "signature": "ReceivedMethodReturn Serial MethodReturn",
          "source": "src/DBus-Message.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ReceivedMethodReturn",
          "package": "dbus",
          "partial": "Received Method Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:ReceivedMethodReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "ReceivedSignal",
          "package": "dbus",
          "signature": "ReceivedSignal Serial Signal",
          "source": "src/DBus-Message.html#ReceivedMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "ReceivedSignal",
          "package": "dbus",
          "partial": "Received Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:ReceivedSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeArray",
          "package": "dbus",
          "signature": "TypeArray Type",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeArray",
          "package": "dbus",
          "partial": "Type Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeBoolean",
          "package": "dbus",
          "signature": "TypeBoolean",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeBoolean",
          "package": "dbus",
          "partial": "Type Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeDictionary",
          "package": "dbus",
          "signature": "TypeDictionary Type Type",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeDictionary",
          "package": "dbus",
          "partial": "Type Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeDouble",
          "package": "dbus",
          "signature": "TypeDouble",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeDouble",
          "package": "dbus",
          "partial": "Type Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeInt16",
          "package": "dbus",
          "signature": "TypeInt16",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeInt16",
          "package": "dbus",
          "partial": "Type Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeInt32",
          "package": "dbus",
          "signature": "TypeInt32",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeInt32",
          "package": "dbus",
          "partial": "Type Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeInt64",
          "package": "dbus",
          "signature": "TypeInt64",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeInt64",
          "package": "dbus",
          "partial": "Type Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeObjectPath",
          "package": "dbus",
          "signature": "TypeObjectPath",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeObjectPath",
          "package": "dbus",
          "partial": "Type Object Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeSignature",
          "package": "dbus",
          "signature": "TypeSignature",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeSignature",
          "package": "dbus",
          "partial": "Type Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeString",
          "package": "dbus",
          "signature": "TypeString",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeString",
          "package": "dbus",
          "partial": "Type String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeStructure",
          "package": "dbus",
          "signature": "TypeStructure [Type]",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeStructure",
          "normalized": "TypeStructure[Type]",
          "package": "dbus",
          "partial": "Type Structure",
          "signature": "TypeStructure[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeVariant",
          "package": "dbus",
          "signature": "TypeVariant",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeVariant",
          "package": "dbus",
          "partial": "Type Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeWord16",
          "package": "dbus",
          "signature": "TypeWord16",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeWord16",
          "package": "dbus",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeWord32",
          "package": "dbus",
          "signature": "TypeWord32",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeWord32",
          "package": "dbus",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeWord64",
          "package": "dbus",
          "signature": "TypeWord64",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeWord64",
          "package": "dbus",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "TypeWord8",
          "package": "dbus",
          "signature": "TypeWord8",
          "source": "src/DBus-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "TypeWord8",
          "package": "dbus",
          "partial": "Type Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:TypeWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert a method string and parameter map to an \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the method or parameters are invalid.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "address",
          "package": "dbus",
          "signature": "String -\u003e Map String String -\u003e Maybe Address",
          "source": "src/DBus-Address.html#address",
          "type": "function"
        },
        "index": {
          "description": "Try to convert method string and parameter map to an Address Returns Nothing if the method or parameters are invalid",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "address",
          "normalized": "String-\u003eMap String String-\u003eMaybe Address",
          "package": "dbus",
          "signature": "String-\u003eMap String String-\u003eMaybe Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "addressMethod",
          "package": "dbus",
          "signature": "Address -\u003e String",
          "source": "src/DBus-Address.html#addressMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "addressMethod",
          "normalized": "Address-\u003eString",
          "package": "dbus",
          "partial": "Method",
          "signature": "Address-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:addressMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "addressParameters",
          "package": "dbus",
          "signature": "Address -\u003e Map String String",
          "source": "src/DBus-Address.html#addressParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "addressParameters",
          "normalized": "Address-\u003eMap String String",
          "package": "dbus",
          "partial": "Parameters",
          "signature": "Address-\u003eMap String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:addressParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "arrayItems",
          "package": "dbus",
          "signature": "Array -\u003e [Variant]",
          "source": "src/DBus-Types.html#arrayItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "arrayItems",
          "normalized": "Array-\u003e[Variant]",
          "package": "dbus",
          "partial": "Items",
          "signature": "Array-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:arrayItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "busName_",
          "package": "dbus",
          "signature": "String -\u003e BusName",
          "source": "src/DBus-Types.html#busName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "busName_",
          "normalized": "String-\u003eBusName",
          "package": "dbus",
          "partial": "Name",
          "signature": "String-\u003eBusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:busName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "dictionaryItems",
          "package": "dbus",
          "signature": "Dictionary -\u003e [(Variant, Variant)]",
          "source": "src/DBus-Types.html#dictionaryItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "dictionaryItems",
          "normalized": "Dictionary-\u003e[(Variant,Variant)]",
          "package": "dbus",
          "partial": "Items",
          "signature": "Dictionary-\u003e[(Variant,Variant)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:dictionaryItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "errorName_",
          "package": "dbus",
          "signature": "String -\u003e ErrorName",
          "source": "src/DBus-Types.html#errorName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "errorName_",
          "normalized": "String-\u003eErrorName",
          "package": "dbus",
          "partial": "Name",
          "signature": "String-\u003eErrorName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:errorName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first serial in the sequence.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "firstSerial",
          "package": "dbus",
          "signature": "Serial",
          "source": "src/DBus-Types.html#firstSerial",
          "type": "function"
        },
        "index": {
          "description": "Get the first serial in the sequence",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "firstSerial",
          "package": "dbus",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:firstSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an address to a string in the format expected by \u003ccode\u003e\u003ca\u003eparseAddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "formatAddress",
          "package": "dbus",
          "signature": "Address -\u003e String",
          "source": "src/DBus-Address.html#formatAddress",
          "type": "function"
        },
        "index": {
          "description": "Convert an address to string in the format expected by parseAddress",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatAddress",
          "normalized": "Address-\u003eString",
          "package": "dbus",
          "partial": "Address",
          "signature": "Address-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of addresses to a string in the format expected by\n \u003ccode\u003e\u003ca\u003eparseAddresses\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "formatAddresses",
          "package": "dbus",
          "signature": "[Address] -\u003e String",
          "source": "src/DBus-Address.html#formatAddresses",
          "type": "function"
        },
        "index": {
          "description": "Convert list of addresses to string in the format expected by parseAddresses",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatAddresses",
          "normalized": "[Address]-\u003eString",
          "package": "dbus",
          "partial": "Addresses",
          "signature": "[Address]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatAddresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "formatBusName",
          "package": "dbus",
          "signature": "BusName -\u003e String",
          "source": "src/DBus-Types.html#formatBusName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatBusName",
          "normalized": "BusName-\u003eString",
          "package": "dbus",
          "partial": "Bus Name",
          "signature": "BusName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatBusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "formatErrorName",
          "package": "dbus",
          "signature": "ErrorName -\u003e String",
          "source": "src/DBus-Types.html#formatErrorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatErrorName",
          "normalized": "ErrorName-\u003eString",
          "package": "dbus",
          "partial": "Error Name",
          "signature": "ErrorName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatErrorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "formatInterfaceName",
          "package": "dbus",
          "signature": "InterfaceName -\u003e String",
          "source": "src/DBus-Types.html#formatInterfaceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatInterfaceName",
          "normalized": "InterfaceName-\u003eString",
          "package": "dbus",
          "partial": "Interface Name",
          "signature": "InterfaceName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatInterfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "formatMemberName",
          "package": "dbus",
          "signature": "MemberName -\u003e String",
          "source": "src/DBus-Types.html#formatMemberName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatMemberName",
          "normalized": "MemberName-\u003eString",
          "package": "dbus",
          "partial": "Member Name",
          "signature": "MemberName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatMemberName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "formatObjectPath",
          "package": "dbus",
          "signature": "ObjectPath -\u003e String",
          "source": "src/DBus-Types.html#formatObjectPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatObjectPath",
          "normalized": "ObjectPath-\u003eString",
          "package": "dbus",
          "partial": "Object Path",
          "signature": "ObjectPath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a signature into a signature string. The inverse of\n \u003ccode\u003e\u003ca\u003eparseSignature\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "formatSignature",
          "package": "dbus",
          "signature": "Signature -\u003e String",
          "source": "src/DBus-Types.html#formatSignature",
          "type": "function"
        },
        "index": {
          "description": "Convert signature into signature string The inverse of parseSignature",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatSignature",
          "normalized": "Signature-\u003eString",
          "package": "dbus",
          "partial": "Signature",
          "signature": "Signature-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a D-Bus UUID as hex-encoded ASCII.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "formatUUID",
          "package": "dbus",
          "signature": "UUID -\u003e String",
          "source": "src/DBus.html#formatUUID",
          "type": "function"
        },
        "index": {
          "description": "Format D-Bus UUID as hex-encoded ASCII",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "formatUUID",
          "normalized": "UUID-\u003eString",
          "package": "dbus",
          "partial": "UUID",
          "signature": "UUID-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:formatUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "fromVariant",
          "package": "dbus",
          "signature": "Variant -\u003e Maybe a",
          "source": "src/DBus-Types.html#fromVariant",
          "type": "method"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "fromVariant",
          "normalized": "Variant-\u003eMaybe a",
          "package": "dbus",
          "partial": "Variant",
          "signature": "Variant-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:fromVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the address in the environment variable\n \u003ccode\u003eDBUS_SESSION_BUS_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e is unset or contains an\n invalid address.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "getSessionAddress",
          "package": "dbus",
          "signature": "IO (Maybe Address)",
          "source": "src/DBus-Address.html#getSessionAddress",
          "type": "function"
        },
        "index": {
          "description": "Returns the address in the environment variable DBUS SESSION BUS ADDRESS which must be set Returns Nothing if DBUS SYSTEM BUS ADDRESS is unset or contains an invalid address",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "getSessionAddress",
          "package": "dbus",
          "partial": "Session Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:getSessionAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the address in the environment variable\n \u003ccode\u003eDBUS_STARTER_ADDRESS\u003c/code\u003e, which must be set.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_STARTER_ADDRESS\u003c/code\u003e is unset or contains an\n invalid address.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "getStarterAddress",
          "package": "dbus",
          "signature": "IO (Maybe Address)",
          "source": "src/DBus-Address.html#getStarterAddress",
          "type": "function"
        },
        "index": {
          "description": "Returns the address in the environment variable DBUS STARTER ADDRESS which must be set Returns Nothing if DBUS STARTER ADDRESS is unset or contains an invalid address",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "getStarterAddress",
          "package": "dbus",
          "partial": "Starter Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:getStarterAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the address in the environment variable\n \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e, or\n \u003ccode\u003eunix:path=/var/run/dbus/system_bus_socket\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e\n is not set.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eDBUS_SYSTEM_BUS_ADDRESS\u003c/code\u003e contains an invalid address.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "getSystemAddress",
          "package": "dbus",
          "signature": "IO (Maybe Address)",
          "source": "src/DBus-Address.html#getSystemAddress",
          "type": "function"
        },
        "index": {
          "description": "Returns the address in the environment variable DBUS SYSTEM BUS ADDRESS or unix path var run dbus system bus socket if DBUS SYSTEM BUS ADDRESS is not set Returns Nothing if DBUS SYSTEM BUS ADDRESS contains an invalid address",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "getSystemAddress",
          "package": "dbus",
          "partial": "System Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:getSystemAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "interfaceName_",
          "package": "dbus",
          "signature": "String -\u003e InterfaceName",
          "source": "src/DBus-Types.html#interfaceName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "interfaceName_",
          "normalized": "String-\u003eInterfaceName",
          "package": "dbus",
          "partial": "Name",
          "signature": "String-\u003eInterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:interfaceName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Although unusual, it is\n possible for marshaling to fail; if this occurs, an error will be\n returned instead.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "marshal",
          "package": "dbus",
          "signature": "Endianness -\u003e Serial -\u003e msg -\u003e Either MarshalError ByteString",
          "source": "src/DBus.html#marshal",
          "type": "function"
        },
        "index": {
          "description": "Convert Message into ByteString Although unusual it is possible for marshaling to fail if this occurs an error will be returned instead",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "marshal",
          "normalized": "Endianness-\u003eSerial-\u003ea-\u003eEither MarshalError ByteString",
          "package": "dbus",
          "signature": "Endianness-\u003eSerial-\u003emsg-\u003eEither MarshalError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:marshal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "marshalErrorMessage",
          "package": "dbus",
          "signature": "MarshalError -\u003e String",
          "source": "src/DBus-Wire.html#marshalErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "marshalErrorMessage",
          "normalized": "MarshalError-\u003eString",
          "package": "dbus",
          "partial": "Error Message",
          "signature": "MarshalError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:marshalErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "memberName_",
          "package": "dbus",
          "signature": "String -\u003e MemberName",
          "source": "src/DBus-Types.html#memberName_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "memberName_",
          "normalized": "String-\u003eMemberName",
          "package": "dbus",
          "partial": "Name",
          "signature": "String-\u003eMemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:memberName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new \u003ccode\u003e\u003ca\u003eMethodCall\u003c/a\u003e\u003c/code\u003e for the given object, interface, and method.\n\u003c/p\u003e\u003cp\u003eUse fields such as \u003ccode\u003e\u003ca\u003emethodCallDestination\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emethodCallBody\u003c/a\u003e\u003c/code\u003e to populate\n a \u003ccode\u003e\u003ca\u003eMethodCall\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE OverloadedStrings #-}\n\nmethodCall \"/\" \"org.example.Math\" \"Add\"\n    { \u003ccode\u003e\u003ca\u003emethodCallDestination\u003c/a\u003e\u003c/code\u003e = Just \"org.example.Calculator\"\n    , \u003ccode\u003e\u003ca\u003emethodCallBody\u003c/a\u003e\u003c/code\u003e = [\u003ccode\u003e\u003ca\u003etoVariant\u003c/a\u003e\u003c/code\u003e (1 :: Int32), \u003ccode\u003e\u003ca\u003etoVariant\u003c/a\u003e\u003c/code\u003e (2 :: Int32)]\n    }\n\u003c/pre\u003e",
          "module": "DBus",
          "name": "methodCall",
          "package": "dbus",
          "signature": "ObjectPath -\u003e InterfaceName -\u003e MemberName -\u003e MethodCall",
          "source": "src/DBus.html#methodCall",
          "type": "function"
        },
        "index": {
          "description": "Construct new MethodCall for the given object interface and method Use fields such as methodCallDestination and methodCallBody to populate MethodCall LANGUAGE OverloadedStrings methodCall org.example.Math Add methodCallDestination Just org.example.Calculator methodCallBody toVariant Int32 toVariant Int32",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCall",
          "normalized": "ObjectPath-\u003eInterfaceName-\u003eMemberName-\u003eMethodCall",
          "package": "dbus",
          "partial": "Call",
          "signature": "ObjectPath-\u003eInterfaceName-\u003eMemberName-\u003eMethodCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet whether the bus should auto-start the remote\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallAutoStart",
          "package": "dbus",
          "signature": "MethodCall -\u003e Bool",
          "source": "src/DBus-Message.html#methodCallAutoStart",
          "type": "function"
        },
        "index": {
          "description": "Set whether the bus should auto-start the remote Defaults to True",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallAutoStart",
          "normalized": "MethodCall-\u003eBool",
          "package": "dbus",
          "partial": "Call Auto Start",
          "signature": "MethodCall-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallAutoStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arguments to the method call. See \u003ccode\u003e\u003ca\u003etoVariant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallBody",
          "package": "dbus",
          "signature": "MethodCall -\u003e [Variant]",
          "source": "src/DBus-Message.html#methodCallBody",
          "type": "function"
        },
        "index": {
          "description": "The arguments to the method call See toVariant Defaults to",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallBody",
          "normalized": "MethodCall-\u003e[Variant]",
          "package": "dbus",
          "partial": "Call Body",
          "signature": "MethodCall-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application to send the call to.\n\u003c/p\u003e\u003cp\u003eMost users should set this. If a message with no destination is\n sent to the bus, the bus will behave as if the destination was\n set to \u003ccode\u003eorg.freedesktop.DBus\u003c/code\u003e. For peer-peer connections, the\n destination can be empty because there is only one peer.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallDestination",
          "package": "dbus",
          "signature": "MethodCall -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#methodCallDestination",
          "type": "function"
        },
        "index": {
          "description": "The name of the application to send the call to Most users should set this If message with no destination is sent to the bus the bus will behave as if the destination was set to org.freedesktop.DBus For peer-peer connections the destination can be empty because there is only one peer Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallDestination",
          "normalized": "MethodCall-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Call Destination",
          "signature": "MethodCall-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface of the method call. Each object may implement any\n number of interfaces. Each method is part of at least one\n interface.\n\u003c/p\u003e\u003cp\u003eIn certain cases, this may be \u003ccode\u003eNothing\u003c/code\u003e, but most users should set\n it to a value.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallInterface",
          "package": "dbus",
          "signature": "MethodCall -\u003e Maybe InterfaceName",
          "source": "src/DBus-Message.html#methodCallInterface",
          "type": "function"
        },
        "index": {
          "description": "The interface of the method call Each object may implement any number of interfaces Each method is part of at least one interface In certain cases this may be Nothing but most users should set it to value",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallInterface",
          "normalized": "MethodCall-\u003eMaybe InterfaceName",
          "package": "dbus",
          "partial": "Call Interface",
          "signature": "MethodCall-\u003eMaybe InterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method name of the method call. Method names are unique within\n an interface, but might not be unique within an object.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallMember",
          "package": "dbus",
          "signature": "MethodCall -\u003e MemberName",
          "source": "src/DBus-Message.html#methodCallMember",
          "type": "function"
        },
        "index": {
          "description": "The method name of the method call Method names are unique within an interface but might not be unique within an object",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallMember",
          "normalized": "MethodCall-\u003eMemberName",
          "package": "dbus",
          "partial": "Call Member",
          "signature": "MethodCall-\u003eMemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe object path of the method call. Conceptually, object paths\n act like a procedural language's pointers. Each object referenced\n by a path is a collection of procedures.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallPath",
          "package": "dbus",
          "signature": "MethodCall -\u003e ObjectPath",
          "source": "src/DBus-Message.html#methodCallPath",
          "type": "function"
        },
        "index": {
          "description": "The object path of the method call Conceptually object paths act like procedural language pointers Each object referenced by path is collection of procedures",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallPath",
          "normalized": "MethodCall-\u003eObjectPath",
          "package": "dbus",
          "partial": "Call Path",
          "signature": "MethodCall-\u003eObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet whether a reply is expected. This can save network and cpu\n resources by inhibiting unnecessary replies.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallReplyExpected",
          "package": "dbus",
          "signature": "MethodCall -\u003e Bool",
          "source": "src/DBus-Message.html#methodCallReplyExpected",
          "type": "function"
        },
        "index": {
          "description": "Set whether reply is expected This can save network and cpu resources by inhibiting unnecessary replies Defaults to True",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallReplyExpected",
          "normalized": "MethodCall-\u003eBool",
          "package": "dbus",
          "partial": "Call Reply Expected",
          "signature": "MethodCall-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallReplyExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application that sent this call.\n\u003c/p\u003e\u003cp\u003eMost users will just leave this empty, because the bus overwrites\n the sender for security reasons. Setting the sender manually is\n used for peer-peer connections.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodCallSender",
          "package": "dbus",
          "signature": "MethodCall -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#methodCallSender",
          "type": "function"
        },
        "index": {
          "description": "The name of the application that sent this call Most users will just leave this empty because the bus overwrites the sender for security reasons Setting the sender manually is used for peer-peer connections Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodCallSender",
          "normalized": "MethodCall-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Call Sender",
          "signature": "MethodCall-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodCallSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new \u003ccode\u003e\u003ca\u003eMethodError\u003c/a\u003e\u003c/code\u003e, in reply to a method call with the given\n serial.\n\u003c/p\u003e\u003cp\u003eUse fields such as \u003ccode\u003e\u003ca\u003emethodErrorBody\u003c/a\u003e\u003c/code\u003e to populate a \u003ccode\u003e\u003ca\u003eMethodError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodError",
          "package": "dbus",
          "signature": "Serial -\u003e ErrorName -\u003e MethodError",
          "source": "src/DBus.html#methodError",
          "type": "function"
        },
        "index": {
          "description": "Construct new MethodError in reply to method call with the given serial Use fields such as methodErrorBody to populate MethodError",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodError",
          "normalized": "Serial-\u003eErrorName-\u003eMethodError",
          "package": "dbus",
          "partial": "Error",
          "signature": "Serial-\u003eErrorName-\u003eMethodError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional information about the error. By convention, if\n the error body contains any items, the first item should be a\n string describing the error.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodErrorBody",
          "package": "dbus",
          "signature": "MethodError -\u003e [Variant]",
          "source": "src/DBus-Message.html#methodErrorBody",
          "type": "function"
        },
        "index": {
          "description": "Additional information about the error By convention if the error body contains any items the first item should be string describing the error",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodErrorBody",
          "normalized": "MethodError-\u003e[Variant]",
          "package": "dbus",
          "partial": "Error Body",
          "signature": "MethodError-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodErrorBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application that initiated the call.\n\u003c/p\u003e\u003cp\u003eMost users should set this. If a message with no destination is\n sent to the bus, the bus will behave as if the destination was\n set to \u003ccode\u003eorg.freedesktop.DBus\u003c/code\u003e. For peer-peer connections, the\n destination can be empty because there is only one peer.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodErrorDestination",
          "package": "dbus",
          "signature": "MethodError -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#methodErrorDestination",
          "type": "function"
        },
        "index": {
          "description": "The name of the application that initiated the call Most users should set this If message with no destination is sent to the bus the bus will behave as if the destination was set to org.freedesktop.DBus For peer-peer connections the destination can be empty because there is only one peer Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodErrorDestination",
          "normalized": "MethodError-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Error Destination",
          "signature": "MethodError-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodErrorDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a human-readable description of the error, by returning the first\n item in the error body if it's a string.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodErrorMessage",
          "package": "dbus",
          "signature": "MethodError -\u003e String",
          "source": "src/DBus-Message.html#methodErrorMessage",
          "type": "function"
        },
        "index": {
          "description": "Get human-readable description of the error by returning the first item in the error body if it string",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodErrorMessage",
          "normalized": "MethodError-\u003eString",
          "package": "dbus",
          "partial": "Error Message",
          "signature": "MethodError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the error type. Names are used so clients can\n handle certain classes of error differently from others.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodErrorName",
          "package": "dbus",
          "signature": "MethodError -\u003e ErrorName",
          "source": "src/DBus-Message.html#methodErrorName",
          "type": "function"
        },
        "index": {
          "description": "The name of the error type Names are used so clients can handle certain classes of error differently from others",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodErrorName",
          "normalized": "MethodError-\u003eErrorName",
          "package": "dbus",
          "partial": "Error Name",
          "signature": "MethodError-\u003eErrorName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodErrorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application that is returning from a call.\n\u003c/p\u003e\u003cp\u003eMost users will just leave this empty, because the bus overwrites\n the sender for security reasons. Setting the sender manually is\n used for peer-peer connections.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodErrorSender",
          "package": "dbus",
          "signature": "MethodError -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#methodErrorSender",
          "type": "function"
        },
        "index": {
          "description": "The name of the application that is returning from call Most users will just leave this empty because the bus overwrites the sender for security reasons Setting the sender manually is used for peer-peer connections Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodErrorSender",
          "normalized": "MethodError-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Error Sender",
          "signature": "MethodError-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodErrorSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe serial of the original method call. This lets the original\n caller match up this reply to the pending call.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodErrorSerial",
          "package": "dbus",
          "signature": "MethodError -\u003e Serial",
          "source": "src/DBus-Message.html#methodErrorSerial",
          "type": "function"
        },
        "index": {
          "description": "The serial of the original method call This lets the original caller match up this reply to the pending call",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodErrorSerial",
          "normalized": "MethodError-\u003eSerial",
          "package": "dbus",
          "partial": "Error Serial",
          "signature": "MethodError-\u003eSerial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodErrorSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new \u003ccode\u003e\u003ca\u003eMethodReturn\u003c/a\u003e\u003c/code\u003e, in reply to a method call with the given\n serial.\n\u003c/p\u003e\u003cp\u003eUse fields such as \u003ccode\u003e\u003ca\u003emethodReturnBody\u003c/a\u003e\u003c/code\u003e to populate a \u003ccode\u003e\u003ca\u003eMethodReturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodReturn",
          "package": "dbus",
          "signature": "Serial -\u003e MethodReturn",
          "source": "src/DBus.html#methodReturn",
          "type": "function"
        },
        "index": {
          "description": "Construct new MethodReturn in reply to method call with the given serial Use fields such as methodReturnBody to populate MethodReturn",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodReturn",
          "normalized": "Serial-\u003eMethodReturn",
          "package": "dbus",
          "partial": "Return",
          "signature": "Serial-\u003eMethodReturn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues returned from the method call. See \u003ccode\u003e\u003ca\u003etoVariant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodReturnBody",
          "package": "dbus",
          "signature": "MethodReturn -\u003e [Variant]",
          "source": "src/DBus-Message.html#methodReturnBody",
          "type": "function"
        },
        "index": {
          "description": "Values returned from the method call See toVariant Defaults to",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodReturnBody",
          "normalized": "MethodReturn-\u003e[Variant]",
          "package": "dbus",
          "partial": "Return Body",
          "signature": "MethodReturn-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodReturnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application that initiated the call.\n\u003c/p\u003e\u003cp\u003eMost users should set this. If a message with no destination is\n sent to the bus, the bus will behave as if the destination was\n set to \u003ccode\u003eorg.freedesktop.DBus\u003c/code\u003e. For peer-peer connections, the\n destination can be empty because there is only one peer.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodReturnDestination",
          "package": "dbus",
          "signature": "MethodReturn -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#methodReturnDestination",
          "type": "function"
        },
        "index": {
          "description": "The name of the application that initiated the call Most users should set this If message with no destination is sent to the bus the bus will behave as if the destination was set to org.freedesktop.DBus For peer-peer connections the destination can be empty because there is only one peer Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodReturnDestination",
          "normalized": "MethodReturn-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Return Destination",
          "signature": "MethodReturn-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodReturnDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application that is returning from a call.\n\u003c/p\u003e\u003cp\u003eMost users will just leave this empty, because the bus overwrites\n the sender for security reasons. Setting the sender manually is\n used for peer-peer connections.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodReturnSender",
          "package": "dbus",
          "signature": "MethodReturn -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#methodReturnSender",
          "type": "function"
        },
        "index": {
          "description": "The name of the application that is returning from call Most users will just leave this empty because the bus overwrites the sender for security reasons Setting the sender manually is used for peer-peer connections Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodReturnSender",
          "normalized": "MethodReturn-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Return Sender",
          "signature": "MethodReturn-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodReturnSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe serial of the original method call. This lets the original\n caller match up this reply to the pending call.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "methodReturnSerial",
          "package": "dbus",
          "signature": "MethodReturn -\u003e Serial",
          "source": "src/DBus-Message.html#methodReturnSerial",
          "type": "function"
        },
        "index": {
          "description": "The serial of the original method call This lets the original caller match up this reply to the pending call",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "methodReturnSerial",
          "normalized": "MethodReturn-\u003eSerial",
          "package": "dbus",
          "partial": "Return Serial",
          "signature": "MethodReturn-\u003eSerial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:methodReturnSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next serial in the sequence. This may wrap around to\n \u003ccode\u003e\u003ca\u003efirstSerial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "nextSerial",
          "package": "dbus",
          "signature": "Serial -\u003e Serial",
          "source": "src/DBus-Types.html#nextSerial",
          "type": "function"
        },
        "index": {
          "description": "Get the next serial in the sequence This may wrap around to firstSerial",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "nextSerial",
          "normalized": "Serial-\u003eSerial",
          "package": "dbus",
          "partial": "Serial",
          "signature": "Serial-\u003eSerial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:nextSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "objectPath_",
          "package": "dbus",
          "signature": "String -\u003e ObjectPath",
          "source": "src/DBus-Types.html#objectPath_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "objectPath_",
          "normalized": "String-\u003eObjectPath",
          "package": "dbus",
          "partial": "Path",
          "signature": "String-\u003eObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:objectPath_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse a string containing one valid address.\n\u003c/p\u003e\u003cp\u003eAn address string is in the format \u003ccode\u003emethod:key1=val1,key2=val2\u003c/code\u003e. There\n are some limitations on the characters allowed within methods and\n parameters; see the D-Bus specification for full details.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "parseAddress",
          "package": "dbus",
          "signature": "String -\u003e Maybe Address",
          "source": "src/DBus-Address.html#parseAddress",
          "type": "function"
        },
        "index": {
          "description": "Try to parse string containing one valid address An address string is in the format method key1 val1 key2 val2 There are some limitations on the characters allowed within methods and parameters see the D-Bus specification for full details",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseAddress",
          "normalized": "String-\u003eMaybe Address",
          "package": "dbus",
          "partial": "Address",
          "signature": "String-\u003eMaybe Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse a string containing one or more valid addresses.\n\u003c/p\u003e\u003cp\u003eAddresses are separated by semicolons. See \u003ccode\u003e\u003ca\u003eparseAddress\u003c/a\u003e\u003c/code\u003e for the format\n of addresses.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "parseAddresses",
          "package": "dbus",
          "signature": "String -\u003e Maybe [Address]",
          "source": "src/DBus-Address.html#parseAddresses",
          "type": "function"
        },
        "index": {
          "description": "Try to parse string containing one or more valid addresses Addresses are separated by semicolons See parseAddress for the format of addresses",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseAddresses",
          "normalized": "String-\u003eMaybe[Address]",
          "package": "dbus",
          "partial": "Addresses",
          "signature": "String-\u003eMaybe[Address]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseAddresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "parseBusName",
          "package": "dbus",
          "signature": "String -\u003e Maybe BusName",
          "source": "src/DBus-Types.html#parseBusName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseBusName",
          "normalized": "String-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Bus Name",
          "signature": "String-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseBusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "parseErrorName",
          "package": "dbus",
          "signature": "String -\u003e Maybe ErrorName",
          "source": "src/DBus-Types.html#parseErrorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseErrorName",
          "normalized": "String-\u003eMaybe ErrorName",
          "package": "dbus",
          "partial": "Error Name",
          "signature": "String-\u003eMaybe ErrorName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseErrorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "parseInterfaceName",
          "package": "dbus",
          "signature": "String -\u003e Maybe InterfaceName",
          "source": "src/DBus-Types.html#parseInterfaceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseInterfaceName",
          "normalized": "String-\u003eMaybe InterfaceName",
          "package": "dbus",
          "partial": "Interface Name",
          "signature": "String-\u003eMaybe InterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseInterfaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "parseMemberName",
          "package": "dbus",
          "signature": "String -\u003e Maybe MemberName",
          "source": "src/DBus-Types.html#parseMemberName",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseMemberName",
          "normalized": "String-\u003eMaybe MemberName",
          "package": "dbus",
          "partial": "Member Name",
          "signature": "String-\u003eMaybe MemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseMemberName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "parseObjectPath",
          "package": "dbus",
          "signature": "String -\u003e Maybe ObjectPath",
          "source": "src/DBus-Types.html#parseObjectPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseObjectPath",
          "normalized": "String-\u003eMaybe ObjectPath",
          "package": "dbus",
          "partial": "Object Path",
          "signature": "String-\u003eMaybe ObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseObjectPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a signature string into a valid signature.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003eNothing\u003c/code\u003e if the given string is not a valid signature.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "parseSignature",
          "package": "dbus",
          "signature": "String -\u003e Maybe Signature",
          "source": "src/DBus-Types.html#parseSignature",
          "type": "function"
        },
        "index": {
          "description": "Parse signature string into valid signature Returns Nothing if the given string is not valid signature",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "parseSignature",
          "normalized": "String-\u003eMaybe Signature",
          "package": "dbus",
          "partial": "Signature",
          "signature": "String-\u003eMaybe Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:parseSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random D-Bus UUID. This value is suitable for use in a\n randomly-allocated address, or as a listener's socket address\n \u003ccode\u003e\"guid\"\u003c/code\u003e parameter.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "randomUUID",
          "package": "dbus",
          "signature": "IO UUID",
          "source": "src/DBus.html#randomUUID",
          "type": "function"
        },
        "index": {
          "description": "Generate random D-Bus UUID This value is suitable for use in randomly-allocated address or as listener socket address guid parameter",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "randomUUID",
          "package": "dbus",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:randomUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo matter what sort of message was received, get its body (if provided).\n\u003c/p\u003e",
          "module": "DBus",
          "name": "receivedMessageBody",
          "package": "dbus",
          "signature": "ReceivedMessage -\u003e [Variant]",
          "source": "src/DBus.html#receivedMessageBody",
          "type": "function"
        },
        "index": {
          "description": "No matter what sort of message was received get its body if provided",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "receivedMessageBody",
          "normalized": "ReceivedMessage-\u003e[Variant]",
          "package": "dbus",
          "partial": "Message Body",
          "signature": "ReceivedMessage-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:receivedMessageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo matter what sort of message was received, get its sender (if provided).\n\u003c/p\u003e",
          "module": "DBus",
          "name": "receivedMessageSender",
          "package": "dbus",
          "signature": "ReceivedMessage -\u003e Maybe BusName",
          "source": "src/DBus.html#receivedMessageSender",
          "type": "function"
        },
        "index": {
          "description": "No matter what sort of message was received get its sender if provided",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "receivedMessageSender",
          "normalized": "ReceivedMessage-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Message Sender",
          "signature": "ReceivedMessage-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:receivedMessageSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo matter what sort of message was received, get its serial.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "receivedMessageSerial",
          "package": "dbus",
          "signature": "ReceivedMessage -\u003e Serial",
          "source": "src/DBus.html#receivedMessageSerial",
          "type": "function"
        },
        "index": {
          "description": "No matter what sort of message was received get its serial",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "receivedMessageSerial",
          "normalized": "ReceivedMessage-\u003eSerial",
          "package": "dbus",
          "partial": "Message Serial",
          "signature": "ReceivedMessage-\u003eSerial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:receivedMessageSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "serialValue",
          "package": "dbus",
          "signature": "Serial -\u003e Word32",
          "source": "src/DBus-Types.html#serialValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "serialValue",
          "normalized": "Serial-\u003eWord",
          "package": "dbus",
          "partial": "Value",
          "signature": "Serial-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:serialValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e for the given object, interface, and signal name.\n\u003c/p\u003e\u003cp\u003eUse fields such as \u003ccode\u003e\u003ca\u003esignalBody\u003c/a\u003e\u003c/code\u003e to populate a \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signal",
          "package": "dbus",
          "signature": "ObjectPath -\u003e InterfaceName -\u003e MemberName -\u003e Signal",
          "source": "src/DBus.html#signal",
          "type": "function"
        },
        "index": {
          "description": "Construct new Signal for the given object interface and signal name Use fields such as signalBody to populate Signal",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signal",
          "normalized": "ObjectPath-\u003eInterfaceName-\u003eMemberName-\u003eSignal",
          "package": "dbus",
          "signature": "ObjectPath-\u003eInterfaceName-\u003eMemberName-\u003eSignal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional information about the signal, such as the new value\n or the time.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signalBody",
          "package": "dbus",
          "signature": "Signal -\u003e [Variant]",
          "source": "src/DBus-Message.html#signalBody",
          "type": "function"
        },
        "index": {
          "description": "Additional information about the signal such as the new value or the time Defaults to",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signalBody",
          "normalized": "Signal-\u003e[Variant]",
          "package": "dbus",
          "partial": "Body",
          "signature": "Signal-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signalBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application to emit the signal to. If \u003ccode\u003eNothing\u003c/code\u003e,\n the signal is sent to any application that has registered an\n appropriate match rule.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signalDestination",
          "package": "dbus",
          "signature": "Signal -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#signalDestination",
          "type": "function"
        },
        "index": {
          "description": "The name of the application to emit the signal to If Nothing the signal is sent to any application that has registered an appropriate match rule Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signalDestination",
          "normalized": "Signal-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Destination",
          "signature": "Signal-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signalDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface that this signal belongs to.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signalInterface",
          "package": "dbus",
          "signature": "Signal -\u003e InterfaceName",
          "source": "src/DBus-Message.html#signalInterface",
          "type": "function"
        },
        "index": {
          "description": "The interface that this signal belongs to",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signalInterface",
          "normalized": "Signal-\u003eInterfaceName",
          "package": "dbus",
          "partial": "Interface",
          "signature": "Signal-\u003eInterfaceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signalInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this signal.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signalMember",
          "package": "dbus",
          "signature": "Signal -\u003e MemberName",
          "source": "src/DBus-Message.html#signalMember",
          "type": "function"
        },
        "index": {
          "description": "The name of this signal",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signalMember",
          "normalized": "Signal-\u003eMemberName",
          "package": "dbus",
          "partial": "Member",
          "signature": "Signal-\u003eMemberName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signalMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path of the object that emitted this signal.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signalPath",
          "package": "dbus",
          "signature": "Signal -\u003e ObjectPath",
          "source": "src/DBus-Message.html#signalPath",
          "type": "function"
        },
        "index": {
          "description": "The path of the object that emitted this signal",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signalPath",
          "normalized": "Signal-\u003eObjectPath",
          "package": "dbus",
          "partial": "Path",
          "signature": "Signal-\u003eObjectPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the application that emitted this signal.\n\u003c/p\u003e\u003cp\u003eMost users will just leave this empty, because the bus overwrites\n the sender for security reasons. Setting the sender manually is\n used for peer-peer connections.\n\u003c/p\u003e\u003cp\u003eDefaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signalSender",
          "package": "dbus",
          "signature": "Signal -\u003e Maybe BusName",
          "source": "src/DBus-Message.html#signalSender",
          "type": "function"
        },
        "index": {
          "description": "The name of the application that emitted this signal Most users will just leave this empty because the bus overwrites the sender for security reasons Setting the sender manually is used for peer-peer connections Defaults to Nothing",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signalSender",
          "normalized": "Signal-\u003eMaybe BusName",
          "package": "dbus",
          "partial": "Sender",
          "signature": "Signal-\u003eMaybe BusName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signalSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of types into a valid signature.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003eNothing\u003c/code\u003e if the given types are not a valid signature.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signature",
          "package": "dbus",
          "signature": "[Type] -\u003e Maybe Signature",
          "source": "src/DBus-Types.html#signature",
          "type": "function"
        },
        "index": {
          "description": "Convert list of types into valid signature Returns Nothing if the given types are not valid signature",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signature",
          "normalized": "[Type]-\u003eMaybe Signature",
          "package": "dbus",
          "signature": "[Type]-\u003eMaybe Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of types in a signature. The inverse of \u003ccode\u003e\u003ca\u003esignature\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signatureTypes",
          "package": "dbus",
          "signature": "Signature -\u003e [Type]",
          "source": "src/DBus-Types.html#signatureTypes",
          "type": "function"
        },
        "index": {
          "description": "Get the list of types in signature The inverse of signature",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signatureTypes",
          "normalized": "Signature-\u003e[Type]",
          "package": "dbus",
          "partial": "Types",
          "signature": "Signature-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signatureTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of types into a valid signature.\n\u003c/p\u003e\u003cp\u003eThrows an exception if the given types are not a valid signature.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "signature_",
          "package": "dbus",
          "signature": "[Type] -\u003e Signature",
          "source": "src/DBus-Types.html#signature_",
          "type": "function"
        },
        "index": {
          "description": "Convert list of types into valid signature Throws an exception if the given types are not valid signature",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "signature_",
          "normalized": "[Type]-\u003eSignature",
          "package": "dbus",
          "signature": "[Type]-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:signature_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "structureItems",
          "package": "dbus",
          "signature": "Structure -\u003e [Variant]",
          "source": "src/DBus-Types.html#structureItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "structureItems",
          "normalized": "Structure-\u003e[Variant]",
          "package": "dbus",
          "partial": "Items",
          "signature": "Structure-\u003e[Variant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:structureItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "toVariant",
          "package": "dbus",
          "signature": "a -\u003e Variant",
          "source": "src/DBus-Types.html#toVariant",
          "type": "method"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "toVariant",
          "normalized": "a-\u003eVariant",
          "package": "dbus",
          "partial": "Variant",
          "signature": "a-\u003eVariant",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:toVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the D-Bus type corresponding to the given Haskell value. The value\n may be \u003ccode\u003eundefined\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "typeOf",
          "package": "dbus",
          "signature": "a -\u003e Type",
          "source": "src/DBus.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "Get the D-Bus type corresponding to the given Haskell value The value may be undefined",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "typeOf",
          "normalized": "a-\u003eType",
          "package": "dbus",
          "partial": "Of",
          "signature": "a-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eReceivedMessage\u003c/a\u003e\u003c/code\u003e. The result can be\n inspected to see what type of message was parsed. Unknown message types\n can still be parsed successfully, as long as they otherwise conform to\n the D-Bus standard.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "unmarshal",
          "package": "dbus",
          "signature": "ByteString -\u003e Either UnmarshalError ReceivedMessage",
          "source": "src/DBus.html#unmarshal",
          "type": "function"
        },
        "index": {
          "description": "Parse ByteString into ReceivedMessage The result can be inspected to see what type of message was parsed Unknown message types can still be parsed successfully as long as they otherwise conform to the D-Bus standard",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "unmarshal",
          "normalized": "ByteString-\u003eEither UnmarshalError ReceivedMessage",
          "package": "dbus",
          "signature": "ByteString-\u003eEither UnmarshalError ReceivedMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:unmarshal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DBus",
          "name": "unmarshalErrorMessage",
          "package": "dbus",
          "signature": "UnmarshalError -\u003e String",
          "source": "src/DBus-Wire.html#unmarshalErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "unmarshalErrorMessage",
          "normalized": "UnmarshalError-\u003eString",
          "package": "dbus",
          "partial": "Error Message",
          "signature": "UnmarshalError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:unmarshalErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery variant is strongly-typed; that is, the type of its contained\n value is known at all times. This function retrieves that type, so that\n the correct cast can be used to retrieve the value.\n\u003c/p\u003e",
          "module": "DBus",
          "name": "variantType",
          "package": "dbus",
          "signature": "Variant -\u003e Type",
          "source": "src/DBus-Types.html#variantType",
          "type": "function"
        },
        "index": {
          "description": "Every variant is strongly-typed that is the type of its contained value is known at all times This function retrieves that type so that the correct cast can be used to retrieve the value",
          "hierarchy": "DBus",
          "module": "DBus",
          "name": "variantType",
          "normalized": "Variant-\u003eType",
          "package": "dbus",
          "partial": "Type",
          "signature": "Variant-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbus/docs/DBus.html#v:variantType"
      }
    }
  ]
]