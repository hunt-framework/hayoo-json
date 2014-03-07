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
        "word": "netspec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse Lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to send and receive messages.\n For this module, a message is prefixed by a\n 64-bit little-endian signed integer, indicating the length in bytes\n of the remaining message.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NetSpec.ByteString",
          "name": "ByteString",
          "package": "netspec",
          "source": "src/Network-NetSpec-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Use Lazy ByteString to send and receive messages For this module message is prefixed by bit little-endian signed integer indicating the length in bytes of the remaining message",
          "hierarchy": "Network NetSpec ByteString",
          "module": "Network.NetSpec.ByteString",
          "name": "ByteString",
          "package": "netspec",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe staple for sending a message.\n \u003ccode\u003e!\u003c/code\u003e is typeclassed so that you can\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e using the same simple syntax.\n The \u003ccode\u003eCanSend\u003c/code\u003e typeclass is not exposed.\n Instances of CanSend include \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eTraversable t =\u003e t Handle\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e!\u003c/code\u003e produces an \u003ccode\u003eIO\u003c/code\u003e action lifted into any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e,\n so can be used without the extra cruft of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n for most monad stacks. \u003ccode\u003e!\u003c/code\u003e is declared as \u003ccode\u003einfix 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e destination ! someByteString\n\u003c/pre\u003e",
          "module": "Network.NetSpec.ByteString",
          "name": "(!)",
          "package": "netspec",
          "signature": "h -\u003e ByteString -\u003e io ()",
          "source": "src/Network-NetSpec-ByteString.html#%21",
          "type": "function"
        },
        "index": {
          "description": "The staple for sending message is typeclassed so that you can send or broadcast using the same simple syntax The CanSend typeclass is not exposed Instances of CanSend include Handle and Traversable Handle produces an IO action lifted into any MonadIO so can be used without the extra cruft of liftIO for most monad stacks is declared as infix Usage destination someByteString",
          "hierarchy": "Network NetSpec ByteString",
          "module": "Network.NetSpec.ByteString",
          "name": "(!) !",
          "normalized": "a-\u003eByteString-\u003eb()",
          "package": "netspec",
          "signature": "h-\u003eByteString-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e message to multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.NetSpec.ByteString",
          "name": "broadcast",
          "package": "netspec",
          "signature": "f Handle -\u003e ByteString -\u003e io ()",
          "source": "src/Network-NetSpec-ByteString.html#broadcast",
          "type": "function"
        },
        "index": {
          "description": "Broadcast ByteString message to multiple Handle",
          "hierarchy": "Network NetSpec ByteString",
          "module": "Network.NetSpec.ByteString",
          "name": "broadcast",
          "normalized": "a Handle-\u003eByteString-\u003eb()",
          "package": "netspec",
          "signature": "f Handle-\u003eByteString-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e message from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec.ByteString",
          "name": "receive",
          "package": "netspec",
          "signature": "Handle -\u003e io ByteString",
          "source": "src/Network-NetSpec-ByteString.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive ByteString message from Handle",
          "hierarchy": "Network NetSpec ByteString",
          "module": "Network.NetSpec.ByteString",
          "name": "receive",
          "normalized": "Handle-\u003ea ByteString",
          "package": "netspec",
          "signature": "Handle-\u003eio ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e message to exactly one \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec.ByteString",
          "name": "send",
          "package": "netspec",
          "signature": "Handle -\u003e ByteString -\u003e io ()",
          "source": "src/Network-NetSpec-ByteString.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send ByteString message to exactly one Handle",
          "hierarchy": "Network NetSpec ByteString",
          "module": "Network.NetSpec.ByteString",
          "name": "send",
          "normalized": "Handle-\u003eByteString-\u003ea()",
          "package": "netspec",
          "signature": "Handle-\u003eByteString-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse Lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es of JSON to send and receive messages.\n For this module, a message is prefixed by a\n 64-bit little-endian signed integer, indicating the length in bytes\n of the remaining message, which is encoded in JSON format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NetSpec.Json",
          "name": "Json",
          "package": "netspec",
          "source": "src/Network-NetSpec-Json.html",
          "type": "module"
        },
        "index": {
          "description": "Use Lazy ByteString of JSON to send and receive messages For this module message is prefixed by bit little-endian signed integer indicating the length in bytes of the remaining message which is encoded in JSON format",
          "hierarchy": "Network NetSpec Json",
          "module": "Network.NetSpec.Json",
          "name": "Json",
          "package": "netspec",
          "partial": "Json",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe staple for sending a message.\n \u003ccode\u003e!\u003c/code\u003e is typeclassed so that you can\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e using the same simple syntax.\n The \u003ccode\u003eCanSendJson\u003c/code\u003e typeclass is not exposed.\n Instances of CanSendJson include \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eTraversable t =\u003e t Handle\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e!\u003c/code\u003e produces an \u003ccode\u003eIO\u003c/code\u003e action lifted into any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e,\n so can be used without the extra cruft of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n for most monad stacks. \u003ccode\u003e!\u003c/code\u003e is declared as \u003ccode\u003einfix 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e destination ! someData\n\u003c/pre\u003e\u003cp\u003eAnything that is an instance of \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e can be used\n on the right-hand side of \u003ccode\u003e!\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Json",
          "name": "(!)",
          "package": "netspec",
          "signature": "h -\u003e j -\u003e io ()",
          "source": "src/Network-NetSpec-Json.html#%21",
          "type": "function"
        },
        "index": {
          "description": "The staple for sending message is typeclassed so that you can send or broadcast using the same simple syntax The CanSendJson typeclass is not exposed Instances of CanSendJson include Handle and Traversable Handle produces an IO action lifted into any MonadIO so can be used without the extra cruft of liftIO for most monad stacks is declared as infix Usage destination someData Anything that is an instance of ToJSON can be used on the right-hand side of",
          "hierarchy": "Network NetSpec Json",
          "module": "Network.NetSpec.Json",
          "name": "(!) !",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "netspec",
          "signature": "h-\u003ej-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast a JSON message to multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Json",
          "name": "broadcast",
          "package": "netspec",
          "signature": "f Handle -\u003e j -\u003e io ()",
          "source": "src/Network-NetSpec-Json.html#broadcast",
          "type": "function"
        },
        "index": {
          "description": "Broadcast JSON message to multiple Handle",
          "hierarchy": "Network NetSpec Json",
          "module": "Network.NetSpec.Json",
          "name": "broadcast",
          "normalized": "a Handle-\u003eb-\u003ec()",
          "package": "netspec",
          "signature": "f Handle-\u003ej-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instances\n for your data types. These are necessary in order to\n use the functions this module provides with your\n custom data types.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e\n  {-# LANGUAGE TemplateHaskell #-}\n  data Foo = Bar | Baz { quux :: Int }\n  $(deriveJson id ''Foo)\n\u003c/pre\u003e\u003cp\u003eAlteratively, you could write your own instances.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Json",
          "name": "deriveJson",
          "package": "netspec",
          "signature": "(String -\u003e String) -\u003e Name -\u003e Q [Dec]",
          "source": "src/Network-NetSpec-Json.html#deriveJson",
          "type": "function"
        },
        "index": {
          "description": "Derives ToJSON and FromJSON instances for your data types These are necessary in order to use the functions this module provides with your custom data types Usage LANGUAGE TemplateHaskell data Foo Bar Baz quux Int deriveJson id Foo Alteratively you could write your own instances",
          "hierarchy": "Network NetSpec Json",
          "module": "Network.NetSpec.Json",
          "name": "deriveJson",
          "normalized": "(String-\u003eString)-\u003eName-\u003eQ[Dec]",
          "package": "netspec",
          "partial": "Json",
          "signature": "(String-\u003eString)-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:deriveJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a JSON message from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n Unlike \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, the result\n of this MonadIO action is wrapped in a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the data received\n could not be parsed from JSON to the correct data type.\n It is up to you to decide whether or not to explicitly handle\n the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e case.\n\u003c/p\u003e\u003cp\u003eNotice that this action is polymorphic in its return type.\n Type annotations are usually unnecessary, since type inference\n can usually determine the correct target type. Example usage:\n\u003c/p\u003e\u003cpre\u003e\n  do Just m \u003c- receive h\n     case m of Foo x y -\u003e handleFoo x y\n               Bar z   -\u003e handleBar z\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003em\u003c/code\u003e is inferred to have whatever type \u003ccode\u003eFoo\u003c/code\u003e and \u003ccode\u003eBar\u003c/code\u003e belong to.\n This example code assumes that the JSON parse will succeed.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e function will be invoked for the Monad you are working\n in if such a pattern match fails.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Json",
          "name": "receive",
          "package": "netspec",
          "signature": "Handle -\u003e io (Maybe j)",
          "source": "src/Network-NetSpec-Json.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive JSON message from Handle Unlike Text and ByteString the result of this MonadIO action is wrapped in Maybe Nothing means that the data received could not be parsed from JSON to the correct data type It is up to you to decide whether or not to explicitly handle the Nothing case Notice that this action is polymorphic in its return type Type annotations are usually unnecessary since type inference can usually determine the correct target type Example usage do Just receive case of Foo handleFoo Bar handleBar Here is inferred to have whatever type Foo and Bar belong to This example code assumes that the JSON parse will succeed The fail function will be invoked for the Monad you are working in if such pattern match fails",
          "hierarchy": "Network NetSpec Json",
          "module": "Network.NetSpec.Json",
          "name": "receive",
          "normalized": "Handle-\u003ea(Maybe b)",
          "package": "netspec",
          "signature": "Handle-\u003eio(Maybe j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a JSON message to exactly one \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Json",
          "name": "send",
          "package": "netspec",
          "signature": "Handle -\u003e j -\u003e io ()",
          "source": "src/Network-NetSpec-Json.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send JSON message to exactly one Handle",
          "hierarchy": "Network NetSpec Json",
          "module": "Network.NetSpec.Json",
          "name": "send",
          "normalized": "Handle-\u003ea-\u003eb()",
          "package": "netspec",
          "signature": "Handle-\u003ej-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to send and receive messages.\n For this module, a message is a single line;\n the newline character acts as the end-of-message flag.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NetSpec.Text",
          "name": "Text",
          "package": "netspec",
          "source": "src/Network-NetSpec-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Use Text to send and receive messages For this module message is single line the newline character acts as the end-of-message flag",
          "hierarchy": "Network NetSpec Text",
          "module": "Network.NetSpec.Text",
          "name": "Text",
          "package": "netspec",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe staple for sending a message.\n \u003ccode\u003e!\u003c/code\u003e is typeclassed so that you can\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e using the same simple syntax.\n The \u003ccode\u003eCanSend\u003c/code\u003e typeclass is not exposed.\n Instances of CanSend include \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eTraversable t =\u003e t Handle\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e!\u003c/code\u003e produces an \u003ccode\u003eIO\u003c/code\u003e action lifted into any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e,\n so can be used without the extra cruft of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n for most monad stacks. \u003ccode\u003e!\u003c/code\u003e is declared as \u003ccode\u003einfix 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e destination ! someText\n\u003c/pre\u003e",
          "module": "Network.NetSpec.Text",
          "name": "(!)",
          "package": "netspec",
          "signature": "h -\u003e Text -\u003e io ()",
          "source": "src/Network-NetSpec-Text.html#%21",
          "type": "function"
        },
        "index": {
          "description": "The staple for sending message is typeclassed so that you can send or broadcast using the same simple syntax The CanSend typeclass is not exposed Instances of CanSend include Handle and Traversable Handle produces an IO action lifted into any MonadIO so can be used without the extra cruft of liftIO for most monad stacks is declared as infix Usage destination someText",
          "hierarchy": "Network NetSpec Text",
          "module": "Network.NetSpec.Text",
          "name": "(!) !",
          "normalized": "a-\u003eText-\u003eb()",
          "package": "netspec",
          "signature": "h-\u003eText-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e message to multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Text",
          "name": "broadcast",
          "package": "netspec",
          "signature": "f Handle -\u003e Text -\u003e io ()",
          "source": "src/Network-NetSpec-Text.html#broadcast",
          "type": "function"
        },
        "index": {
          "description": "Broadcast Text message to multiple Handle",
          "hierarchy": "Network NetSpec Text",
          "module": "Network.NetSpec.Text",
          "name": "broadcast",
          "normalized": "a Handle-\u003eText-\u003eb()",
          "package": "netspec",
          "signature": "f Handle-\u003eText-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e message from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Text",
          "name": "receive",
          "package": "netspec",
          "signature": "Handle -\u003e io Text",
          "source": "src/Network-NetSpec-Text.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive Text message from Handle",
          "hierarchy": "Network NetSpec Text",
          "module": "Network.NetSpec.Text",
          "name": "receive",
          "normalized": "Handle-\u003ea Text",
          "package": "netspec",
          "signature": "Handle-\u003eio Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e message to exactly one \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec.Text",
          "name": "send",
          "package": "netspec",
          "signature": "Handle -\u003e Text -\u003e io ()",
          "source": "src/Network-NetSpec-Text.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send Text message to exactly one Handle",
          "hierarchy": "Network NetSpec Text",
          "module": "Network.NetSpec.Text",
          "name": "send",
          "normalized": "Handle-\u003eText-\u003ea()",
          "package": "netspec",
          "signature": "Handle-\u003eText-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplify static Networking tasks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NetSpec",
          "name": "NetSpec",
          "package": "netspec",
          "source": "src/Network-NetSpec.html",
          "type": "module"
        },
        "index": {
          "description": "Simplify static Networking tasks",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "NetSpec",
          "package": "netspec",
          "partial": "Net Spec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the specification of your networking task\n as a begin, loop, and end proceedure. Run your NetSpec\n with \u003ccode\u003e\u003ca\u003erunSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003et\u003c/code\u003e indicates the \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e structure used.\n \u003ccode\u003e[]\u003c/code\u003e is recommended for simplicity, but you are at liberty\n to use any Traversable you see fit.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003es\u003c/code\u003e indicates the type used for state.\n Use \u003ccode\u003e()\u003c/code\u003e for a stateless specification.\n\u003c/p\u003e\u003cp\u003eA server must specify which ports to listen on,\n while a client instead specifies tuples of (hostname, port)\n to connect to.\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "NetSpec",
          "package": "netspec",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "data"
        },
        "index": {
          "description": "Define the specification of your networking task as begin loop and end proceedure Run your NetSpec with runSpec indicates the Traversable structure used is recommended for simplicity but you are at liberty to use any Traversable you see fit indicates the type used for state Use for stateless specification server must specify which ports to listen on while client instead specifies tuples of hostname port to connect to",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "NetSpec",
          "package": "netspec",
          "partial": "Net Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#t:NetSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether to \u003ccode\u003eContinue\u003c/code\u003e or \u003ccode\u003eStop\u003c/code\u003e\n with a given state\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "SpecState",
          "package": "netspec",
          "source": "src/Network-NetSpec.html#SpecState",
          "type": "data"
        },
        "index": {
          "description": "Indicate whether to Continue or Stop with given state",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "SpecState",
          "package": "netspec",
          "partial": "Spec State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#t:SpecState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two functions, similar to \u003ccode\u003e.\u003c/code\u003e from \u003ca\u003ePrelude\u003c/a\u003e.\n If \u003ccode\u003eh = f .: g\u003c/code\u003e then \u003ccode\u003eh x y = f (g x y)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "(.:)",
          "package": "netspec",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d -\u003e a) -\u003e c -\u003e d -\u003e b",
          "source": "src/Network-NetSpec.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Compose two functions similar to from Prelude If then",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "(.:) .:",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "netspec",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "ClientSpec",
          "package": "netspec",
          "signature": "ClientSpec",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "ClientSpec",
          "package": "netspec",
          "partial": "Client Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:ClientSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "Continue",
          "package": "netspec",
          "signature": "Continue s",
          "source": "src/Network-NetSpec.html#SpecState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "Continue",
          "package": "netspec",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "ServerSpec",
          "package": "netspec",
          "signature": "ServerSpec",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "ServerSpec",
          "package": "netspec",
          "partial": "Server Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:ServerSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "Stop",
          "package": "netspec",
          "signature": "Stop s",
          "source": "src/Network-NetSpec.html#SpecState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "Stop",
          "package": "netspec",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "_begin",
          "package": "netspec",
          "signature": "t Handle -\u003e IO s",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "_begin",
          "normalized": "a Handle-\u003eIO b",
          "package": "netspec",
          "signature": "t Handle-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "_conns",
          "package": "netspec",
          "signature": "t (String, PortID)",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "_conns",
          "normalized": "a(String,PortID)",
          "package": "netspec",
          "signature": "t(String,PortID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_conns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "_end",
          "package": "netspec",
          "signature": "t Handle -\u003e s -\u003e IO ()",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "_end",
          "normalized": "a Handle-\u003eb-\u003eIO()",
          "package": "netspec",
          "signature": "t Handle-\u003es-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "_loop",
          "package": "netspec",
          "signature": "t Handle -\u003e s -\u003e IO (SpecState s)",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "_loop",
          "normalized": "a Handle-\u003eb-\u003eIO(SpecState b)",
          "package": "netspec",
          "signature": "t Handle-\u003es-\u003eIO(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NetSpec",
          "name": "_ports",
          "package": "netspec",
          "signature": "t PortID",
          "source": "src/Network-NetSpec.html#NetSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "_ports",
          "package": "netspec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_ports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue with a given state\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "continue",
          "package": "netspec",
          "signature": "s -\u003e m (SpecState s)",
          "source": "src/Network-NetSpec.html#continue",
          "type": "function"
        },
        "index": {
          "description": "Continue with given state",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "continue",
          "normalized": "a-\u003eb(SpecState a)",
          "package": "netspec",
          "signature": "s-\u003em(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally continue with a given state,\n based on that state and additional given information.\n\u003c/p\u003e\u003cp\u003eRecommended usage:\n\u003c/p\u003e\u003cpre\u003e _loop = \\handles -\u003e continueIf f .: runStateT $ do ...\n\u003c/pre\u003e",
          "module": "Network.NetSpec",
          "name": "continueIf",
          "package": "netspec",
          "signature": "(a -\u003e s -\u003e Bool) -\u003e m (a, s) -\u003e m (SpecState s)",
          "source": "src/Network-NetSpec.html#continueIf",
          "type": "function"
        },
        "index": {
          "description": "Conditionally continue with given state based on that state and additional given information Recommended usage loop handles continueIf runStateT do",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "continueIf",
          "normalized": "(a-\u003eb-\u003eBool)-\u003ec(a,b)-\u003ec(SpecState b)",
          "package": "netspec",
          "partial": "If",
          "signature": "(a-\u003es-\u003eBool)-\u003em(a,s)-\u003em(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continueIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally continue with a given state,\n based solely on that state.\n\u003c/p\u003e\u003cp\u003eRecommended usage:\n\u003c/p\u003e\u003cpre\u003e _loop = \\handles -\u003e continueIf' f .: execStateT $ do ...\n\u003c/pre\u003e",
          "module": "Network.NetSpec",
          "name": "continueIf'",
          "package": "netspec",
          "signature": "(s -\u003e Bool) -\u003e m s -\u003e m (SpecState s)",
          "source": "src/Network-NetSpec.html#continueIf%27",
          "type": "function"
        },
        "index": {
          "description": "Conditionally continue with given state based solely on that state Recommended usage loop handles continueIf execStateT do",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "continueIf'",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState a)",
          "package": "netspec",
          "partial": "If'",
          "signature": "(s-\u003eBool)-\u003em s-\u003em(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continueIf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally continue statelessly,\n based on given information.\n\u003c/p\u003e\u003cp\u003eRecommended usage\n\u003c/p\u003e\u003cpre\u003e _loop = \\handles () -\u003e continueIf_ f $ do ...\n\u003c/pre\u003e",
          "module": "Network.NetSpec",
          "name": "continueIf_",
          "package": "netspec",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m (SpecState ())",
          "source": "src/Network-NetSpec.html#continueIf_",
          "type": "function"
        },
        "index": {
          "description": "Conditionally continue statelessly based on given information Recommended usage loop handles continueIf do",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "continueIf_",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState())",
          "package": "netspec",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003em a-\u003em(SpecState())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continueIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue (statless)\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "continue_",
          "package": "netspec",
          "signature": "m (SpecState ())",
          "source": "src/Network-NetSpec.html#continue_",
          "type": "function"
        },
        "index": {
          "description": "Continue statless",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "continue_",
          "normalized": "a(SpecState())",
          "package": "netspec",
          "signature": "m(SpecState())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continue_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eNetSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRunning a spec will step through your \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e\n of connection descriptions, and replace each one with a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e,\n preserving the structure of the Traversable otherwise.\n\u003c/p\u003e\u003cp\u003eRegardless of exceptions, all Handles and Sockets\n opened by the spec will be closed at the end of the run;\n you should not need to close any of the Handles given to you\n by the spec.\n\u003c/p\u003e\u003cp\u003e(Note \u003ccode\u003erunSpec\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e for you)\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "runSpec",
          "package": "netspec",
          "signature": "NetSpec t s -\u003e IO ()",
          "source": "src/Network-NetSpec.html#runSpec",
          "type": "function"
        },
        "index": {
          "description": "Run NetSpec Running spec will step through your Traversable of connection descriptions and replace each one with Handle preserving the structure of the Traversable otherwise Regardless of exceptions all Handles and Sockets opened by the spec will be closed at the end of the run you should not need to close any of the Handles given to you by the spec Note runSpec calls withSocketsDo for you",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "runSpec",
          "normalized": "NetSpec a b-\u003eIO()",
          "package": "netspec",
          "partial": "Spec",
          "signature": "NetSpec t s-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:runSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a state function into a \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e monad stack\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "stateT",
          "package": "netspec",
          "signature": "(s -\u003e (a, s)) -\u003e StateT s m a",
          "source": "src/Network-NetSpec.html#stateT",
          "type": "function"
        },
        "index": {
          "description": "Lift state function into StateT monad stack",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "stateT",
          "normalized": "(a-\u003e(b,a))-\u003eStateT a c b",
          "package": "netspec",
          "signature": "(s-\u003e(a,s))-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop with a given state\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "stop",
          "package": "netspec",
          "signature": "s -\u003e m (SpecState s)",
          "source": "src/Network-NetSpec.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stop with given state",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "stop",
          "normalized": "a-\u003eb(SpecState a)",
          "package": "netspec",
          "signature": "s-\u003em(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally stop with a given state,\n based on that state and additional given information.\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "stopIf",
          "package": "netspec",
          "signature": "(a -\u003e s -\u003e Bool) -\u003e m (a, s) -\u003e m (SpecState s)",
          "source": "src/Network-NetSpec.html#stopIf",
          "type": "function"
        },
        "index": {
          "description": "Conditionally stop with given state based on that state and additional given information",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "stopIf",
          "normalized": "(a-\u003eb-\u003eBool)-\u003ec(a,b)-\u003ec(SpecState b)",
          "package": "netspec",
          "partial": "If",
          "signature": "(a-\u003es-\u003eBool)-\u003em(a,s)-\u003em(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stopIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally stop with a given state,\n based solely on that state.\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "stopIf'",
          "package": "netspec",
          "signature": "(s -\u003e Bool) -\u003e m s -\u003e m (SpecState s)",
          "source": "src/Network-NetSpec.html#stopIf%27",
          "type": "function"
        },
        "index": {
          "description": "Conditionally stop with given state based solely on that state",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "stopIf'",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState a)",
          "package": "netspec",
          "partial": "If'",
          "signature": "(s-\u003eBool)-\u003em s-\u003em(SpecState s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stopIf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally stop statlessly,\n based on given information.\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "stopIf_",
          "package": "netspec",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m (SpecState ())",
          "source": "src/Network-NetSpec.html#stopIf_",
          "type": "function"
        },
        "index": {
          "description": "Conditionally stop statlessly based on given information",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "stopIf_",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState())",
          "package": "netspec",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003em a-\u003em(SpecState())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stopIf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop (stateless)\n\u003c/p\u003e",
          "module": "Network.NetSpec",
          "name": "stop_",
          "package": "netspec",
          "signature": "m (SpecState ())",
          "source": "src/Network-NetSpec.html#stop_",
          "type": "function"
        },
        "index": {
          "description": "Stop stateless",
          "hierarchy": "Network NetSpec",
          "module": "Network.NetSpec",
          "name": "stop_",
          "normalized": "a(SpecState())",
          "package": "netspec",
          "signature": "m(SpecState())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stop_"
      }
    }
  ]
]