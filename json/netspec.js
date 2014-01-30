[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse Lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to send and receive messages.\n For this module, a message is prefixed by a\n 64-bit little-endian signed integer, indicating the length in bytes\n of the remaining message.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NetSpec.ByteString",
        "fct-package": "netspec",
        "fct-signature": "module",
        "fct-source": "src/Network-NetSpec-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Use Lazy ByteString to send and receive messages For this module message is prefixed by bit little-endian signed integer indicating the length in bytes of the remaining message",
        "hierarchy": "Network NetSpec ByteString",
        "module": "Network.NetSpec.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "netspec",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eThe staple for sending a message.\n \u003ccode\u003e!\u003c/code\u003e is typeclassed so that you can\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e using the same simple syntax.\n The \u003ccode\u003eCanSend\u003c/code\u003e typeclass is not exposed.\n Instances of CanSend include \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eTraversable t =\u003e t Handle\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e!\u003c/code\u003e produces an \u003ccode\u003eIO\u003c/code\u003e action lifted into any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e,\n so can be used without the extra cruft of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n for most monad stacks. \u003ccode\u003e!\u003c/code\u003e is declared as \u003ccode\u003einfix 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e destination ! someByteString\n\u003c/pre\u003e",
        "fct-module": "Network.NetSpec.ByteString",
        "fct-package": "netspec",
        "fct-signature": "h -\u003e ByteString -\u003e io ()",
        "fct-source": "src/Network-NetSpec-ByteString.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "The staple for sending message is typeclassed so that you can send or broadcast using the same simple syntax The CanSend typeclass is not exposed Instances of CanSend include Handle and Traversable Handle produces an IO action lifted into any MonadIO so can be used without the extra cruft of liftIO for most monad stacks is declared as infix Usage destination someByteString",
        "hierarchy": "Network NetSpec ByteString",
        "module": "Network.NetSpec.ByteString",
        "name": "(!) !",
        "normalized": "a-\u003eByteString-\u003eb()",
        "package": "netspec",
        "partial": "",
        "signature": "h-\u003eByteString-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:broadcast",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e message to multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.ByteString",
        "fct-package": "netspec",
        "fct-signature": "f Handle -\u003e ByteString -\u003e io ()",
        "fct-source": "src/Network-NetSpec-ByteString.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "Broadcast ByteString message to multiple Handle",
        "hierarchy": "Network NetSpec ByteString",
        "module": "Network.NetSpec.ByteString",
        "name": "broadcast",
        "normalized": "a Handle-\u003eByteString-\u003eb()",
        "package": "netspec",
        "partial": "",
        "signature": "f Handle-\u003eByteString-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e message from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.ByteString",
        "fct-package": "netspec",
        "fct-signature": "Handle -\u003e io ByteString",
        "fct-source": "src/Network-NetSpec-ByteString.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive ByteString message from Handle",
        "hierarchy": "Network NetSpec ByteString",
        "module": "Network.NetSpec.ByteString",
        "name": "receive",
        "normalized": "Handle-\u003ea ByteString",
        "package": "netspec",
        "partial": "",
        "signature": "Handle-\u003eio ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-ByteString.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e message to exactly one \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.ByteString",
        "fct-package": "netspec",
        "fct-signature": "Handle -\u003e ByteString -\u003e io ()",
        "fct-source": "src/Network-NetSpec-ByteString.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send ByteString message to exactly one Handle",
        "hierarchy": "Network NetSpec ByteString",
        "module": "Network.NetSpec.ByteString",
        "name": "send",
        "normalized": "Handle-\u003eByteString-\u003ea()",
        "package": "netspec",
        "partial": "",
        "signature": "Handle-\u003eByteString-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse Lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es of JSON to send and receive messages.\n For this module, a message is prefixed by a\n 64-bit little-endian signed integer, indicating the length in bytes\n of the remaining message, which is encoded in JSON format.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NetSpec.Json",
        "fct-package": "netspec",
        "fct-signature": "module",
        "fct-source": "src/Network-NetSpec-Json.html",
        "fct-type": "module",
        "title": "Json"
      },
      "index": {
        "description": "Use Lazy ByteString of JSON to send and receive messages For this module message is prefixed by bit little-endian signed integer indicating the length in bytes of the remaining message which is encoded in JSON format",
        "hierarchy": "Network NetSpec Json",
        "module": "Network.NetSpec.Json",
        "name": "Json",
        "normalized": "",
        "package": "netspec",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eThe staple for sending a message.\n \u003ccode\u003e!\u003c/code\u003e is typeclassed so that you can\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e using the same simple syntax.\n The \u003ccode\u003eCanSendJson\u003c/code\u003e typeclass is not exposed.\n Instances of CanSendJson include \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eTraversable t =\u003e t Handle\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e!\u003c/code\u003e produces an \u003ccode\u003eIO\u003c/code\u003e action lifted into any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e,\n so can be used without the extra cruft of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n for most monad stacks. \u003ccode\u003e!\u003c/code\u003e is declared as \u003ccode\u003einfix 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e destination ! someData\n\u003c/pre\u003e\u003cp\u003eAnything that is an instance of \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e can be used\n on the right-hand side of \u003ccode\u003e!\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Json",
        "fct-package": "netspec",
        "fct-signature": "h -\u003e j -\u003e io ()",
        "fct-source": "src/Network-NetSpec-Json.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "The staple for sending message is typeclassed so that you can send or broadcast using the same simple syntax The CanSendJson typeclass is not exposed Instances of CanSendJson include Handle and Traversable Handle produces an IO action lifted into any MonadIO so can be used without the extra cruft of liftIO for most monad stacks is declared as infix Usage destination someData Anything that is an instance of ToJSON can be used on the right-hand side of",
        "hierarchy": "Network NetSpec Json",
        "module": "Network.NetSpec.Json",
        "name": "(!) !",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "netspec",
        "partial": "",
        "signature": "h-\u003ej-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:broadcast",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a JSON message to multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Json",
        "fct-package": "netspec",
        "fct-signature": "f Handle -\u003e j -\u003e io ()",
        "fct-source": "src/Network-NetSpec-Json.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "Broadcast JSON message to multiple Handle",
        "hierarchy": "Network NetSpec Json",
        "module": "Network.NetSpec.Json",
        "name": "broadcast",
        "normalized": "a Handle-\u003eb-\u003ec()",
        "package": "netspec",
        "partial": "",
        "signature": "f Handle-\u003ej-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:deriveJson",
      "description": {
        "fct-descr": "\u003cp\u003eDerives \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instances\n for your data types. These are necessary in order to\n use the functions this module provides with your\n custom data types.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e\n  {-# LANGUAGE TemplateHaskell #-}\n  data Foo = Bar | Baz { quux :: Int }\n  $(deriveJson id ''Foo)\n\u003c/pre\u003e\u003cp\u003eAlteratively, you could write your own instances.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Json",
        "fct-package": "netspec",
        "fct-signature": "(String -\u003e String) -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Network-NetSpec-Json.html#deriveJson",
        "fct-type": "function",
        "title": "deriveJson"
      },
      "index": {
        "description": "Derives ToJSON and FromJSON instances for your data types These are necessary in order to use the functions this module provides with your custom data types Usage LANGUAGE TemplateHaskell data Foo Bar Baz quux Int deriveJson id Foo Alteratively you could write your own instances",
        "hierarchy": "Network NetSpec Json",
        "module": "Network.NetSpec.Json",
        "name": "deriveJson",
        "normalized": "(String-\u003eString)-\u003eName-\u003eQ[Dec]",
        "package": "netspec",
        "partial": "Json",
        "signature": "(String-\u003eString)-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a JSON message from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n Unlike \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, the result\n of this MonadIO action is wrapped in a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the data received\n could not be parsed from JSON to the correct data type.\n It is up to you to decide whether or not to explicitly handle\n the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e case.\n\u003c/p\u003e\u003cp\u003eNotice that this action is polymorphic in its return type.\n Type annotations are usually unnecessary, since type inference\n can usually determine the correct target type. Example usage:\n\u003c/p\u003e\u003cpre\u003e\n  do Just m \u003c- receive h\n     case m of Foo x y -\u003e handleFoo x y\n               Bar z   -\u003e handleBar z\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003em\u003c/code\u003e is inferred to have whatever type \u003ccode\u003eFoo\u003c/code\u003e and \u003ccode\u003eBar\u003c/code\u003e belong to.\n This example code assumes that the JSON parse will succeed.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e function will be invoked for the Monad you are working\n in if such a pattern match fails.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Json",
        "fct-package": "netspec",
        "fct-signature": "Handle -\u003e io (Maybe j)",
        "fct-source": "src/Network-NetSpec-Json.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive JSON message from Handle Unlike Text and ByteString the result of this MonadIO action is wrapped in Maybe Nothing means that the data received could not be parsed from JSON to the correct data type It is up to you to decide whether or not to explicitly handle the Nothing case Notice that this action is polymorphic in its return type Type annotations are usually unnecessary since type inference can usually determine the correct target type Example usage do Just receive case of Foo handleFoo Bar handleBar Here is inferred to have whatever type Foo and Bar belong to This example code assumes that the JSON parse will succeed The fail function will be invoked for the Monad you are working in if such pattern match fails",
        "hierarchy": "Network NetSpec Json",
        "module": "Network.NetSpec.Json",
        "name": "receive",
        "normalized": "Handle-\u003ea(Maybe b)",
        "package": "netspec",
        "partial": "",
        "signature": "Handle-\u003eio(Maybe j)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Json.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a JSON message to exactly one \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Json",
        "fct-package": "netspec",
        "fct-signature": "Handle -\u003e j -\u003e io ()",
        "fct-source": "src/Network-NetSpec-Json.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send JSON message to exactly one Handle",
        "hierarchy": "Network NetSpec Json",
        "module": "Network.NetSpec.Json",
        "name": "send",
        "normalized": "Handle-\u003ea-\u003eb()",
        "package": "netspec",
        "partial": "",
        "signature": "Handle-\u003ej-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to send and receive messages.\n For this module, a message is a single line;\n the newline character acts as the end-of-message flag.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NetSpec.Text",
        "fct-package": "netspec",
        "fct-signature": "module",
        "fct-source": "src/Network-NetSpec-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Use Text to send and receive messages For this module message is single line the newline character acts as the end-of-message flag",
        "hierarchy": "Network NetSpec Text",
        "module": "Network.NetSpec.Text",
        "name": "Text",
        "normalized": "",
        "package": "netspec",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eThe staple for sending a message.\n \u003ccode\u003e!\u003c/code\u003e is typeclassed so that you can\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e using the same simple syntax.\n The \u003ccode\u003eCanSend\u003c/code\u003e typeclass is not exposed.\n Instances of CanSend include \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eTraversable t =\u003e t Handle\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e!\u003c/code\u003e produces an \u003ccode\u003eIO\u003c/code\u003e action lifted into any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e,\n so can be used without the extra cruft of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n for most monad stacks. \u003ccode\u003e!\u003c/code\u003e is declared as \u003ccode\u003einfix 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e destination ! someText\n\u003c/pre\u003e",
        "fct-module": "Network.NetSpec.Text",
        "fct-package": "netspec",
        "fct-signature": "h -\u003e Text -\u003e io ()",
        "fct-source": "src/Network-NetSpec-Text.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "The staple for sending message is typeclassed so that you can send or broadcast using the same simple syntax The CanSend typeclass is not exposed Instances of CanSend include Handle and Traversable Handle produces an IO action lifted into any MonadIO so can be used without the extra cruft of liftIO for most monad stacks is declared as infix Usage destination someText",
        "hierarchy": "Network NetSpec Text",
        "module": "Network.NetSpec.Text",
        "name": "(!) !",
        "normalized": "a-\u003eText-\u003eb()",
        "package": "netspec",
        "partial": "",
        "signature": "h-\u003eText-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:broadcast",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e message to multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Text",
        "fct-package": "netspec",
        "fct-signature": "f Handle -\u003e Text -\u003e io ()",
        "fct-source": "src/Network-NetSpec-Text.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "Broadcast Text message to multiple Handle",
        "hierarchy": "Network NetSpec Text",
        "module": "Network.NetSpec.Text",
        "name": "broadcast",
        "normalized": "a Handle-\u003eText-\u003eb()",
        "package": "netspec",
        "partial": "",
        "signature": "f Handle-\u003eText-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e message from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Text",
        "fct-package": "netspec",
        "fct-signature": "Handle -\u003e io Text",
        "fct-source": "src/Network-NetSpec-Text.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive Text message from Handle",
        "hierarchy": "Network NetSpec Text",
        "module": "Network.NetSpec.Text",
        "name": "receive",
        "normalized": "Handle-\u003ea Text",
        "package": "netspec",
        "partial": "",
        "signature": "Handle-\u003eio Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec-Text.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e message to exactly one \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec.Text",
        "fct-package": "netspec",
        "fct-signature": "Handle -\u003e Text -\u003e io ()",
        "fct-source": "src/Network-NetSpec-Text.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send Text message to exactly one Handle",
        "hierarchy": "Network NetSpec Text",
        "module": "Network.NetSpec.Text",
        "name": "send",
        "normalized": "Handle-\u003eText-\u003ea()",
        "package": "netspec",
        "partial": "",
        "signature": "Handle-\u003eText-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplify static Networking tasks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "module",
        "fct-source": "src/Network-NetSpec.html",
        "fct-type": "module",
        "title": "NetSpec"
      },
      "index": {
        "description": "Simplify static Networking tasks",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "NetSpec",
        "normalized": "",
        "package": "netspec",
        "partial": "Net Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#t:NetSpec",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the specification of your networking task\n as a begin, loop, and end proceedure. Run your NetSpec\n with \u003ccode\u003e\u003ca\u003erunSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003et\u003c/code\u003e indicates the \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e structure used.\n \u003ccode\u003e[]\u003c/code\u003e is recommended for simplicity, but you are at liberty\n to use any Traversable you see fit.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003es\u003c/code\u003e indicates the type used for state.\n Use \u003ccode\u003e()\u003c/code\u003e for a stateless specification.\n\u003c/p\u003e\u003cp\u003eA server must specify which ports to listen on,\n while a client instead specifies tuples of (hostname, port)\n to connect to.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "data",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "data",
        "title": "NetSpec"
      },
      "index": {
        "description": "Define the specification of your networking task as begin loop and end proceedure Run your NetSpec with runSpec indicates the Traversable structure used is recommended for simplicity but you are at liberty to use any Traversable you see fit indicates the type used for state Use for stateless specification server must specify which ports to listen on while client instead specifies tuples of hostname port to connect to",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "NetSpec",
        "normalized": "",
        "package": "netspec",
        "partial": "Net Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#t:SpecState",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether to \u003ccode\u003eContinue\u003c/code\u003e or \u003ccode\u003eStop\u003c/code\u003e\n with a given state\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "data",
        "fct-source": "src/Network-NetSpec.html#SpecState",
        "fct-type": "data",
        "title": "SpecState"
      },
      "index": {
        "description": "Indicate whether to Continue or Stop with given state",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "SpecState",
        "normalized": "",
        "package": "netspec",
        "partial": "Spec State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two functions, similar to \u003ccode\u003e.\u003c/code\u003e from \u003ca\u003ePrelude\u003c/a\u003e.\n If \u003ccode\u003eh = f .: g\u003c/code\u003e then \u003ccode\u003eh x y = f (g x y)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(a -\u003e b) -\u003e (c -\u003e d -\u003e a) -\u003e c -\u003e d -\u003e b",
        "fct-source": "src/Network-NetSpec.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Compose two functions similar to from Prelude If then",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "(.:) .:",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
        "package": "netspec",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:ClientSpec",
      "description": {
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "ClientSpec",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "ClientSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "ClientSpec",
        "normalized": "",
        "package": "netspec",
        "partial": "Client Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:Continue",
      "description": {
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "Continue s",
        "fct-source": "src/Network-NetSpec.html#SpecState",
        "fct-type": "function",
        "title": "Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "Continue",
        "normalized": "",
        "package": "netspec",
        "partial": "Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:ServerSpec",
      "description": {
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "ServerSpec",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "ServerSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "ServerSpec",
        "normalized": "",
        "package": "netspec",
        "partial": "Server Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:Stop",
      "description": {
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "Stop s",
        "fct-source": "src/Network-NetSpec.html#SpecState",
        "fct-type": "function",
        "title": "Stop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "Stop",
        "normalized": "",
        "package": "netspec",
        "partial": "Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_begin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "t Handle -\u003e IO s",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "_begin"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "_begin",
        "normalized": "a Handle-\u003eIO b",
        "package": "netspec",
        "partial": "",
        "signature": "t Handle-\u003eIO s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_conns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "t (String, PortID)",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "_conns"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "_conns",
        "normalized": "a(String,PortID)",
        "package": "netspec",
        "partial": "",
        "signature": "t(String,PortID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_end",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "t Handle -\u003e s -\u003e IO ()",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "_end"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "_end",
        "normalized": "a Handle-\u003eb-\u003eIO()",
        "package": "netspec",
        "partial": "",
        "signature": "t Handle-\u003es-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_loop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "t Handle -\u003e s -\u003e IO (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "_loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "_loop",
        "normalized": "a Handle-\u003eb-\u003eIO(SpecState b)",
        "package": "netspec",
        "partial": "",
        "signature": "t Handle-\u003es-\u003eIO(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:_ports",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "t PortID",
        "fct-source": "src/Network-NetSpec.html#NetSpec",
        "fct-type": "function",
        "title": "_ports"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "_ports",
        "normalized": "",
        "package": "netspec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continue",
      "description": {
        "fct-descr": "\u003cp\u003eContinue with a given state\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "s -\u003e m (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "Continue with given state",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "continue",
        "normalized": "a-\u003eb(SpecState a)",
        "package": "netspec",
        "partial": "",
        "signature": "s-\u003em(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continueIf",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally continue with a given state,\n based on that state and additional given information.\n\u003c/p\u003e\u003cp\u003eRecommended usage:\n\u003c/p\u003e\u003cpre\u003e _loop = \\handles -\u003e continueIf f .: runStateT $ do ...\n\u003c/pre\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(a -\u003e s -\u003e Bool) -\u003e m (a, s) -\u003e m (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#continueIf",
        "fct-type": "function",
        "title": "continueIf"
      },
      "index": {
        "description": "Conditionally continue with given state based on that state and additional given information Recommended usage loop handles continueIf runStateT do",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "continueIf",
        "normalized": "(a-\u003eb-\u003eBool)-\u003ec(a,b)-\u003ec(SpecState b)",
        "package": "netspec",
        "partial": "If",
        "signature": "(a-\u003es-\u003eBool)-\u003em(a,s)-\u003em(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continueIf-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally continue with a given state,\n based solely on that state.\n\u003c/p\u003e\u003cp\u003eRecommended usage:\n\u003c/p\u003e\u003cpre\u003e _loop = \\handles -\u003e continueIf' f .: execStateT $ do ...\n\u003c/pre\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(s -\u003e Bool) -\u003e m s -\u003e m (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#continueIf%27",
        "fct-type": "function",
        "title": "continueIf'"
      },
      "index": {
        "description": "Conditionally continue with given state based solely on that state Recommended usage loop handles continueIf execStateT do",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "continueIf'",
        "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState a)",
        "package": "netspec",
        "partial": "If'",
        "signature": "(s-\u003eBool)-\u003em s-\u003em(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continueIf_",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally continue statelessly,\n based on given information.\n\u003c/p\u003e\u003cp\u003eRecommended usage\n\u003c/p\u003e\u003cpre\u003e _loop = \\handles () -\u003e continueIf_ f $ do ...\n\u003c/pre\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(a -\u003e Bool) -\u003e m a -\u003e m (SpecState ())",
        "fct-source": "src/Network-NetSpec.html#continueIf_",
        "fct-type": "function",
        "title": "continueIf_"
      },
      "index": {
        "description": "Conditionally continue statelessly based on given information Recommended usage loop handles continueIf do",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "continueIf_",
        "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState())",
        "package": "netspec",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003em a-\u003em(SpecState())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:continue_",
      "description": {
        "fct-descr": "\u003cp\u003eContinue (statless)\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "m (SpecState ())",
        "fct-source": "src/Network-NetSpec.html#continue_",
        "fct-type": "function",
        "title": "continue_"
      },
      "index": {
        "description": "Continue statless",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "continue_",
        "normalized": "a(SpecState())",
        "package": "netspec",
        "partial": "",
        "signature": "m(SpecState())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:runSpec",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eNetSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRunning a spec will step through your \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e\n of connection descriptions, and replace each one with a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e,\n preserving the structure of the Traversable otherwise.\n\u003c/p\u003e\u003cp\u003eRegardless of exceptions, all Handles and Sockets\n opened by the spec will be closed at the end of the run;\n you should not need to close any of the Handles given to you\n by the spec.\n\u003c/p\u003e\u003cp\u003e(Note \u003ccode\u003erunSpec\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e for you)\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "NetSpec t s -\u003e IO ()",
        "fct-source": "src/Network-NetSpec.html#runSpec",
        "fct-type": "function",
        "title": "runSpec"
      },
      "index": {
        "description": "Run NetSpec Running spec will step through your Traversable of connection descriptions and replace each one with Handle preserving the structure of the Traversable otherwise Regardless of exceptions all Handles and Sockets opened by the spec will be closed at the end of the run you should not need to close any of the Handles given to you by the spec Note runSpec calls withSocketsDo for you",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "runSpec",
        "normalized": "NetSpec a b-\u003eIO()",
        "package": "netspec",
        "partial": "Spec",
        "signature": "NetSpec t s-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stateT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a state function into a \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e monad stack\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(s -\u003e (a, s)) -\u003e StateT s m a",
        "fct-source": "src/Network-NetSpec.html#stateT",
        "fct-type": "function",
        "title": "stateT"
      },
      "index": {
        "description": "Lift state function into StateT monad stack",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "stateT",
        "normalized": "(a-\u003e(b,a))-\u003eStateT a c b",
        "package": "netspec",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStop with a given state\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "s -\u003e m (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stop with given state",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "stop",
        "normalized": "a-\u003eb(SpecState a)",
        "package": "netspec",
        "partial": "",
        "signature": "s-\u003em(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stopIf",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally stop with a given state,\n based on that state and additional given information.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(a -\u003e s -\u003e Bool) -\u003e m (a, s) -\u003e m (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#stopIf",
        "fct-type": "function",
        "title": "stopIf"
      },
      "index": {
        "description": "Conditionally stop with given state based on that state and additional given information",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "stopIf",
        "normalized": "(a-\u003eb-\u003eBool)-\u003ec(a,b)-\u003ec(SpecState b)",
        "package": "netspec",
        "partial": "If",
        "signature": "(a-\u003es-\u003eBool)-\u003em(a,s)-\u003em(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stopIf-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally stop with a given state,\n based solely on that state.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(s -\u003e Bool) -\u003e m s -\u003e m (SpecState s)",
        "fct-source": "src/Network-NetSpec.html#stopIf%27",
        "fct-type": "function",
        "title": "stopIf'"
      },
      "index": {
        "description": "Conditionally stop with given state based solely on that state",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "stopIf'",
        "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState a)",
        "package": "netspec",
        "partial": "If'",
        "signature": "(s-\u003eBool)-\u003em s-\u003em(SpecState s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stopIf_",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally stop statlessly,\n based on given information.\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "(a -\u003e Bool) -\u003e m a -\u003e m (SpecState ())",
        "fct-source": "src/Network-NetSpec.html#stopIf_",
        "fct-type": "function",
        "title": "stopIf_"
      },
      "index": {
        "description": "Conditionally stop statlessly based on given information",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "stopIf_",
        "normalized": "(a-\u003eBool)-\u003eb a-\u003eb(SpecState())",
        "package": "netspec",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003em a-\u003em(SpecState())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netspec/docs/Network-NetSpec.html#v:stop_",
      "description": {
        "fct-descr": "\u003cp\u003eStop (stateless)\n\u003c/p\u003e",
        "fct-module": "Network.NetSpec",
        "fct-package": "netspec",
        "fct-signature": "m (SpecState ())",
        "fct-source": "src/Network-NetSpec.html#stop_",
        "fct-type": "function",
        "title": "stop_"
      },
      "index": {
        "description": "Stop stateless",
        "hierarchy": "Network NetSpec",
        "module": "Network.NetSpec",
        "name": "stop_",
        "normalized": "a(SpecState())",
        "package": "netspec",
        "partial": "",
        "signature": "m(SpecState())"
      }
    }
  }
]