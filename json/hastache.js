[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHastache context helpers\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Hastache.Context",
        "fct-package": "hastache",
        "fct-signature": "module",
        "fct-source": "src/Text-Hastache-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "Hastache context helpers",
        "hierarchy": "Text Hastache Context",
        "module": "Text.Hastache.Context",
        "name": "Context",
        "normalized": "",
        "package": "hastache",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#v:mkGenericContext",
      "description": {
        "fct-descr": "\u003cp\u003eMake Hastache context from Data.Data deriving type\n\u003c/p\u003e\u003cp\u003eSupported field types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String\n\u003c/li\u003e\u003cli\u003e Char\n\u003c/li\u003e\u003cli\u003e Double\n\u003c/li\u003e\u003cli\u003e Float\n\u003c/li\u003e\u003cli\u003e Int\n\u003c/li\u003e\u003cli\u003e Int8\n\u003c/li\u003e\u003cli\u003e Int16\n\u003c/li\u003e\u003cli\u003e Int32\n\u003c/li\u003e\u003cli\u003e Int64\n\u003c/li\u003e\u003cli\u003e Integer\n\u003c/li\u003e\u003cli\u003e Word\n\u003c/li\u003e\u003cli\u003e Word8\n\u003c/li\u003e\u003cli\u003e Word16\n\u003c/li\u003e\u003cli\u003e Word32\n\u003c/li\u003e\u003cli\u003e Word64\n\u003c/li\u003e\u003cli\u003e Data.ByteString.ByteString\n\u003c/li\u003e\u003cli\u003e Data.ByteString.Lazy.ByteString\n\u003c/li\u003e\u003cli\u003e Data.Text.Text\n\u003c/li\u003e\u003cli\u003e Data.Text.Lazy.Text\n\u003c/li\u003e\u003cli\u003e Bool\n\u003c/li\u003e\u003cli\u003e Data.ByteString.ByteString -\u003e Data.ByteString.ByteString\n\u003c/li\u003e\u003cli\u003e String -\u003e String\n\u003c/li\u003e\u003cli\u003e Data.ByteString.ByteString -\u003e Data.ByteString.Lazy.ByteString\n\u003c/li\u003e\u003cli\u003e MonadIO m =\u003e Data.ByteString.ByteString -\u003e m Data.ByteString.ByteString\n\u003c/li\u003e\u003cli\u003e MonadIO m =\u003e String -\u003e m String\n\u003c/li\u003e\u003cli\u003e MonadIO m =\u003e Data.ByteString.ByteString -\u003e m Data.ByteString.Lazy.ByteString\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.Hastache \nimport Text.Hastache.Context \nimport qualified Data.ByteString as B\nimport qualified Data.ByteString.Lazy as LZ \nimport Data.Data \nimport Data.Generics \nimport Data.Char\n\ndata InternalData = InternalData {\n    someField       :: String,\n    anotherField    :: Int\n    } deriving (Data, Typeable, Show)\n\ndata Example = Example {\n    stringField             :: String,\n    intField                :: Int,\n    dataField               :: InternalData,\n    simpleListField         :: [String],\n    dataListField           :: [InternalData],\n    stringFunc              :: String -\u003e String,\n    byteStringFunc          :: B.ByteString -\u003e B.ByteString,\n    monadicStringFunc       :: String -\u003e IO String,\n    monadicByteStringFunc   :: B.ByteString -\u003e IO B.ByteString\n    } deriving (Data, Typeable)\n\nexample = hastacheStr defaultConfig (encodeStr template) \n    (mkGenericContext context)\n    where\n    template = concat $ map (++ \"\\n\") [\n        \"string: {{stringField}}\",\n        \"int: {{intField}}\",\n        \"data: {{dataField.someField}}, {{dataField.anotherField}}\",\n        \"data: {{#dataField}}{{someField}}, {{anotherField}}{{/dataField}}\",\n        \"simple list: {{#simpleListField}}{{.}} {{/simpleListField}}\",\n        \"data list:\",\n        \"{{#dataListField}}\",\n        \" * {{someField}}, {{anotherField}}. top level var: {{intField}}\",\n        \"{{/dataListField}}\",\n        \"{{#stringFunc}}upper{{/stringFunc}}\",\n        \"{{#byteStringFunc}}reverse{{/byteStringFunc}}\",\n        \"{{#monadicStringFunc}}upper (monadic){{/monadicStringFunc}}\",\n        \"{{#monadicByteStringFunc}}reverse (monadic){{/monadicByteStringFunc}}\"]\n    context = Example { stringField = \"string value\", intField = 1, \n        dataField = InternalData \"val\" 123, simpleListField = [\"a\",\"b\",\"c\"],\n        dataListField = [InternalData \"aaa\" 1, InternalData \"bbb\" 2],\n        stringFunc = map toUpper,\n        byteStringFunc = B.reverse,\n        monadicStringFunc = return . map toUpper,\n        monadicByteStringFunc = return . B.reverse }\n\nmain = example \u003e\u003e= LZ.putStrLn\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e\nstring: string value \nint: 1 \ndata: val, 123 \ndata: val, 123 \nsimple list: a b c  \ndata list: \n * aaa, 1. top level var: 1 \n * bbb, 2. top level var: 1 \nUPPER \nesrever \nUPPER (MONADIC)\n)cidanom( esrever\n\u003c/pre\u003e",
        "fct-module": "Text.Hastache.Context",
        "fct-package": "hastache",
        "fct-signature": "a -\u003e MuContext m",
        "fct-source": "src/Text-Hastache-Context.html#mkGenericContext",
        "fct-type": "function",
        "title": "mkGenericContext"
      },
      "index": {
        "description": "Make Hastache context from Data.Data deriving type Supported field types String Char Double Float Int Int8 Int16 Int32 Int64 Integer Word Word8 Word16 Word32 Word64 Data.ByteString.ByteString Data.ByteString.Lazy.ByteString Data.Text.Text Data.Text.Lazy.Text Bool Data.ByteString.ByteString Data.ByteString.ByteString String String Data.ByteString.ByteString Data.ByteString.Lazy.ByteString MonadIO Data.ByteString.ByteString Data.ByteString.ByteString MonadIO String String MonadIO Data.ByteString.ByteString Data.ByteString.Lazy.ByteString Example import Text.Hastache import Text.Hastache.Context import qualified Data.ByteString as import qualified Data.ByteString.Lazy as LZ import Data.Data import Data.Generics import Data.Char data InternalData InternalData someField String anotherField Int deriving Data Typeable Show data Example Example stringField String intField Int dataField InternalData simpleListField String dataListField InternalData stringFunc String String byteStringFunc B.ByteString B.ByteString monadicStringFunc String IO String monadicByteStringFunc B.ByteString IO B.ByteString deriving Data Typeable example hastacheStr defaultConfig encodeStr template mkGenericContext context where template concat map string stringField int intField data dataField.someField dataField.anotherField data dataField someField anotherField dataField simple list simpleListField simpleListField data list dataListField someField anotherField top level var intField dataListField stringFunc upper stringFunc byteStringFunc reverse byteStringFunc monadicStringFunc upper monadic monadicStringFunc monadicByteStringFunc reverse monadic monadicByteStringFunc context Example stringField string value intField dataField InternalData val simpleListField dataListField InternalData aaa InternalData bbb stringFunc map toUpper byteStringFunc B.reverse monadicStringFunc return map toUpper monadicByteStringFunc return B.reverse main example LZ.putStrLn Result string string value int data val data val simple list data list aaa top level var bbb top level var UPPER esrever UPPER MONADIC cidanom esrever",
        "hierarchy": "Text Hastache Context",
        "module": "Text.Hastache.Context",
        "name": "mkGenericContext",
        "normalized": "a-\u003eMuContext b",
        "package": "hastache",
        "partial": "Generic Context",
        "signature": "a-\u003eMuContext m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#v:mkStrContext",
      "description": {
        "fct-descr": "\u003cp\u003eMake Hastache context from String -\u003e MuType function\n\u003c/p\u003e",
        "fct-module": "Text.Hastache.Context",
        "fct-package": "hastache",
        "fct-signature": "(String -\u003e MuType m) -\u003e MuContext m",
        "fct-source": "src/Text-Hastache-Context.html#mkStrContext",
        "fct-type": "function",
        "title": "mkStrContext"
      },
      "index": {
        "description": "Make Hastache context from String MuType function",
        "hierarchy": "Text Hastache Context",
        "module": "Text.Hastache.Context",
        "name": "mkStrContext",
        "normalized": "(String-\u003eMuType a)-\u003eMuContext a",
        "package": "hastache",
        "partial": "Str Context",
        "signature": "(String-\u003eMuType m)-\u003eMuContext m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#v:mkStrContextM",
      "description": {
        "fct-descr": "\u003cp\u003eMake Hastache context from monadic String -\u003e MuType function\n\u003c/p\u003e",
        "fct-module": "Text.Hastache.Context",
        "fct-package": "hastache",
        "fct-signature": "(String -\u003e m (MuType m)) -\u003e MuContext m",
        "fct-source": "src/Text-Hastache-Context.html#mkStrContextM",
        "fct-type": "function",
        "title": "mkStrContextM"
      },
      "index": {
        "description": "Make Hastache context from monadic String MuType function",
        "hierarchy": "Text Hastache Context",
        "module": "Text.Hastache.Context",
        "name": "mkStrContextM",
        "normalized": "(String-\u003ea(MuType a))-\u003eMuContext a",
        "package": "hastache",
        "partial": "Str Context",
        "signature": "(String-\u003em(MuType m))-\u003eMuContext m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell implementation of Mustache templates\n\u003c/p\u003e\u003cp\u003eSee homepage for examples of usage: \u003ca\u003ehttp://github.com/lymar/hastache\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSimplest example:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.Hastache \nimport Text.Hastache.Context \nimport qualified Data.ByteString.Lazy.Char8 as LZ \n\nmain = do \n    res \u003c- hastacheStr defaultConfig (encodeStr template)  \n        (mkStrContext context) \n    LZ.putStrLn res \n  where \n    template = \"Hello, {{name}}!\\n\\nYou have {{unread}} unread messages.\" \n    context \"name\" = MuVariable \"Haskell\"\n    context \"unread\" = MuVariable (100 :: Int)\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e\nHello, Haskell!\n\nYou have 100 unread messages.\n\u003c/pre\u003e\u003cp\u003eUsing Generics:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.Hastache \nimport Text.Hastache.Context \nimport qualified Data.ByteString.Lazy.Char8 as LZ \nimport Data.Data \nimport Data.Generics \n\ndata Info = Info { \n    name    :: String, \n    unread  :: Int \n    } deriving (Data, Typeable)\n\nmain = do \n    res \u003c- hastacheStr defaultConfig (encodeStr template) \n        (mkGenericContext inf) \n    LZ.putStrLn res \n  where \n    template = \"Hello, {{name}}!\\n\\nYou have {{unread}} unread messages.\"\n    inf = Info \"Haskell\" 100\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "module",
        "fct-source": "src/Text-Hastache.html",
        "fct-type": "module",
        "title": "Hastache"
      },
      "index": {
        "description": "Haskell implementation of Mustache templates See homepage for examples of usage http github.com lymar hastache Simplest example import Text.Hastache import Text.Hastache.Context import qualified Data.ByteString.Lazy.Char8 as LZ main do res hastacheStr defaultConfig encodeStr template mkStrContext context LZ.putStrLn res where template Hello name nYou have unread unread messages context name MuVariable Haskell context unread MuVariable Int Result Hello Haskell You have unread messages Using Generics import Text.Hastache import Text.Hastache.Context import qualified Data.ByteString.Lazy.Char8 as LZ import Data.Data import Data.Generics data Info Info name String unread Int deriving Data Typeable main do res hastacheStr defaultConfig encodeStr template mkGenericContext inf LZ.putStrLn res where template Hello name nYou have unread unread messages inf Info Haskell",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "Hastache",
        "normalized": "",
        "package": "hastache",
        "partial": "Hastache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuConfig",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "data",
        "fct-source": "src/Text-Hastache.html#MuConfig",
        "fct-type": "data",
        "title": "MuConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuConfig",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuContext",
      "description": {
        "fct-descr": "\u003cp\u003eData for Hastache variable\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "type",
        "fct-source": "src/Text-Hastache.html#MuContext",
        "fct-type": "type",
        "title": "MuContext"
      },
      "index": {
        "description": "Data for Hastache variable",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuContext",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuType",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "data",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "data",
        "title": "MuType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuType",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuVar",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "class",
        "fct-source": "src/Text-Hastache.html#MuVar",
        "fct-type": "class",
        "title": "MuVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuVar",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuBool",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuBool Bool",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "function",
        "title": "MuBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuBool",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuConfig",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuConfig",
        "fct-source": "src/Text-Hastache.html#MuConfig",
        "fct-type": "function",
        "title": "MuConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuConfig",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuLambda",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuLambda (ByteString -\u003e a)",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "function",
        "title": "MuLambda"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuLambda",
        "normalized": "MuLambda(ByteString-\u003ea)",
        "package": "hastache",
        "partial": "Mu Lambda",
        "signature": "MuLambda(ByteString-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuLambdaM",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuLambdaM (ByteString -\u003e m a)",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "function",
        "title": "MuLambdaM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuLambdaM",
        "normalized": "MuLambdaM(ByteString-\u003ea b)",
        "package": "hastache",
        "partial": "Mu Lambda",
        "signature": "MuLambdaM(ByteString-\u003em a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuList",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuList [MuContext m]",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "function",
        "title": "MuList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuList",
        "normalized": "MuList[MuContext a]",
        "package": "hastache",
        "partial": "Mu List",
        "signature": "MuList[MuContext m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuNothing",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuNothing",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "function",
        "title": "MuNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuNothing",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuVariable",
      "description": {
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuVariable a",
        "fct-source": "src/Text-Hastache.html#MuType",
        "fct-type": "function",
        "title": "MuVariable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "MuVariable",
        "normalized": "",
        "package": "hastache",
        "partial": "Mu Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:decodeStr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert UTF-8 Bytestring to String\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Text-Hastache.html#decodeStr",
        "fct-type": "function",
        "title": "decodeStr"
      },
      "index": {
        "description": "Convert UTF-8 Bytestring to String",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "decodeStr",
        "normalized": "ByteString-\u003eString",
        "package": "hastache",
        "partial": "Str",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:decodeStrLBS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert UTF-8 Lazy Bytestring to String\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Text-Hastache.html#decodeStrLBS",
        "fct-type": "function",
        "title": "decodeStrLBS"
      },
      "index": {
        "description": "Convert UTF-8 Lazy Bytestring to String",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "decodeStrLBS",
        "normalized": "ByteString-\u003eString",
        "package": "hastache",
        "partial": "Str LBS",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDefault config: HTML escape function, current directory as \n     template directory, template file extension not specified \n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuConfig m",
        "fct-source": "src/Text-Hastache.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "Default config HTML escape function current directory as template directory template file extension not specified",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "defaultConfig",
        "normalized": "",
        "package": "hastache",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:emptyEscape",
      "description": {
        "fct-descr": "\u003cp\u003eNo escape\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Text-Hastache.html#emptyEscape",
        "fct-type": "function",
        "title": "emptyEscape"
      },
      "index": {
        "description": "No escape",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "emptyEscape",
        "normalized": "ByteString-\u003eByteString",
        "package": "hastache",
        "partial": "Escape",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:encodeStr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert String to UTF-8 Bytestring\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Text-Hastache.html#encodeStr",
        "fct-type": "function",
        "title": "encodeStr"
      },
      "index": {
        "description": "Convert String to UTF-8 Bytestring",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "encodeStr",
        "normalized": "String-\u003eByteString",
        "package": "hastache",
        "partial": "Str",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:encodeStrLBS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert String to UTF-8 Lazy Bytestring\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Text-Hastache.html#encodeStrLBS",
        "fct-type": "function",
        "title": "encodeStrLBS"
      },
      "index": {
        "description": "Convert String to UTF-8 Lazy Bytestring",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "encodeStrLBS",
        "normalized": "String-\u003eByteString",
        "package": "hastache",
        "partial": "Str LBS",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheFile",
      "description": {
        "fct-descr": "\u003cp\u003eRender Hastache template from file\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuConfig m-\u003e FilePath-\u003e MuContext m-\u003e m ByteString",
        "fct-type": "function",
        "title": "hastacheFile"
      },
      "index": {
        "description": "Render Hastache template from file",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "hastacheFile",
        "normalized": "MuConfig a-\u003eFilePath-\u003eMuContext a-\u003ea ByteString",
        "package": "hastache",
        "partial": "File",
        "signature": "MuConfig m-\u003eFilePath-\u003eMuContext m-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheFileBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eRender Hastache template from file\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuConfig m-\u003e FilePath-\u003e MuContext m-\u003e m Builder",
        "fct-type": "function",
        "title": "hastacheFileBuilder"
      },
      "index": {
        "description": "Render Hastache template from file",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "hastacheFileBuilder",
        "normalized": "MuConfig a-\u003eFilePath-\u003eMuContext a-\u003ea Builder",
        "package": "hastache",
        "partial": "File Builder",
        "signature": "MuConfig m-\u003eFilePath-\u003eMuContext m-\u003em Builder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheStr",
      "description": {
        "fct-descr": "\u003cp\u003eRender Hastache template from ByteString\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuConfig m-\u003e ByteString-\u003e MuContext m-\u003e m ByteString",
        "fct-type": "function",
        "title": "hastacheStr"
      },
      "index": {
        "description": "Render Hastache template from ByteString",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "hastacheStr",
        "normalized": "MuConfig a-\u003eByteString-\u003eMuContext a-\u003ea ByteString",
        "package": "hastache",
        "partial": "Str",
        "signature": "MuConfig m-\u003eByteString-\u003eMuContext m-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheStrBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eRender Hastache template from ByteString\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "MuConfig m-\u003e ByteString-\u003e MuContext m-\u003e m Builder",
        "fct-type": "function",
        "title": "hastacheStrBuilder"
      },
      "index": {
        "description": "Render Hastache template from ByteString",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "hastacheStrBuilder",
        "normalized": "MuConfig a-\u003eByteString-\u003eMuContext a-\u003ea Builder",
        "package": "hastache",
        "partial": "Str Builder",
        "signature": "MuConfig m-\u003eByteString-\u003eMuContext m-\u003em Builder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:htmlEscape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape HTML symbols\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Text-Hastache.html#htmlEscape",
        "fct-type": "function",
        "title": "htmlEscape"
      },
      "index": {
        "description": "Escape HTML symbols",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "htmlEscape",
        "normalized": "ByteString-\u003eByteString",
        "package": "hastache",
        "partial": "Escape",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eIs empty variable (empty string, zero number etc.)\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Text-Hastache.html#isEmpty",
        "fct-type": "method",
        "title": "isEmpty"
      },
      "index": {
        "description": "Is empty variable empty string zero number etc",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "isEmpty",
        "normalized": "a-\u003eBool",
        "package": "hastache",
        "partial": "Empty",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muEscapeFunc",
      "description": {
        "fct-descr": "\u003cp\u003eEscape function (\u003ccode\u003e\u003ca\u003ehtmlEscape\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eemptyEscape\u003c/a\u003e\u003c/code\u003e etc.)\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Text-Hastache.html#MuConfig",
        "fct-type": "function",
        "title": "muEscapeFunc"
      },
      "index": {
        "description": "Escape function htmlEscape emptyEscape etc",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "muEscapeFunc",
        "normalized": "ByteString-\u003eByteString",
        "package": "hastache",
        "partial": "Escape Func",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muTemplateFileDir",
      "description": {
        "fct-descr": "\u003cp\u003eDirectory for search partial templates ({{\u003e templateName}})\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Text-Hastache.html#MuConfig",
        "fct-type": "function",
        "title": "muTemplateFileDir"
      },
      "index": {
        "description": "Directory for search partial templates templateName",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "muTemplateFileDir",
        "normalized": "",
        "package": "hastache",
        "partial": "Template File Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muTemplateFileExt",
      "description": {
        "fct-descr": "\u003cp\u003ePartial template files extension\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-Hastache.html#MuConfig",
        "fct-type": "function",
        "title": "muTemplateFileExt"
      },
      "index": {
        "description": "Partial template files extension",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "muTemplateFileExt",
        "normalized": "",
        "package": "hastache",
        "partial": "Template File Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muTemplateRead",
      "description": {
        "fct-descr": "\u003cp\u003eTemplate retrieval function. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates that the\n   template could not be found.\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "FilePath -\u003e m (Maybe ByteString)",
        "fct-source": "src/Text-Hastache.html#MuConfig",
        "fct-type": "function",
        "title": "muTemplateRead"
      },
      "index": {
        "description": "Template retrieval function Nothing indicates that the template could not be found",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "muTemplateRead",
        "normalized": "FilePath-\u003ea(Maybe ByteString)",
        "package": "hastache",
        "partial": "Template Read",
        "signature": "FilePath-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:toLByteString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to Lazy ByteString\n\u003c/p\u003e",
        "fct-module": "Text.Hastache",
        "fct-package": "hastache",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Text-Hastache.html#toLByteString",
        "fct-type": "method",
        "title": "toLByteString"
      },
      "index": {
        "description": "Convert to Lazy ByteString",
        "hierarchy": "Text Hastache",
        "module": "Text.Hastache",
        "name": "toLByteString",
        "normalized": "a-\u003eByteString",
        "package": "hastache",
        "partial": "LByte String",
        "signature": "a-\u003eByteString"
      }
    }
  }
]