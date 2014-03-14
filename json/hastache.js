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
        "word": "hastache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHastache context helpers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Hastache.Context",
          "name": "Context",
          "package": "hastache",
          "source": "src/Text-Hastache-Context.html",
          "type": "module"
        },
        "index": {
          "description": "Hastache context helpers",
          "hierarchy": "Text Hastache Context",
          "module": "Text.Hastache.Context",
          "name": "Context",
          "package": "hastache",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake Hastache context from Data.Data deriving type\n\u003c/p\u003e\u003cp\u003eSupported field types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String\n\u003c/li\u003e\u003cli\u003e Char\n\u003c/li\u003e\u003cli\u003e Double\n\u003c/li\u003e\u003cli\u003e Float\n\u003c/li\u003e\u003cli\u003e Int\n\u003c/li\u003e\u003cli\u003e Int8\n\u003c/li\u003e\u003cli\u003e Int16\n\u003c/li\u003e\u003cli\u003e Int32\n\u003c/li\u003e\u003cli\u003e Int64\n\u003c/li\u003e\u003cli\u003e Integer\n\u003c/li\u003e\u003cli\u003e Word\n\u003c/li\u003e\u003cli\u003e Word8\n\u003c/li\u003e\u003cli\u003e Word16\n\u003c/li\u003e\u003cli\u003e Word32\n\u003c/li\u003e\u003cli\u003e Word64\n\u003c/li\u003e\u003cli\u003e Data.ByteString.ByteString\n\u003c/li\u003e\u003cli\u003e Data.ByteString.Lazy.ByteString\n\u003c/li\u003e\u003cli\u003e Data.Text.Text\n\u003c/li\u003e\u003cli\u003e Data.Text.Lazy.Text\n\u003c/li\u003e\u003cli\u003e Bool\n\u003c/li\u003e\u003cli\u003e Data.ByteString.ByteString -\u003e Data.ByteString.ByteString\n\u003c/li\u003e\u003cli\u003e String -\u003e String\n\u003c/li\u003e\u003cli\u003e Data.ByteString.ByteString -\u003e Data.ByteString.Lazy.ByteString\n\u003c/li\u003e\u003cli\u003e MonadIO m =\u003e Data.ByteString.ByteString -\u003e m Data.ByteString.ByteString\n\u003c/li\u003e\u003cli\u003e MonadIO m =\u003e String -\u003e m String\n\u003c/li\u003e\u003cli\u003e MonadIO m =\u003e Data.ByteString.ByteString -\u003e m Data.ByteString.Lazy.ByteString\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.Hastache \nimport Text.Hastache.Context \nimport qualified Data.ByteString as B\nimport qualified Data.ByteString.Lazy as LZ \nimport Data.Data \nimport Data.Generics \nimport Data.Char\n\ndata InternalData = InternalData {\n    someField       :: String,\n    anotherField    :: Int\n    } deriving (Data, Typeable, Show)\n\ndata Example = Example {\n    stringField             :: String,\n    intField                :: Int,\n    dataField               :: InternalData,\n    simpleListField         :: [String],\n    dataListField           :: [InternalData],\n    stringFunc              :: String -\u003e String,\n    byteStringFunc          :: B.ByteString -\u003e B.ByteString,\n    monadicStringFunc       :: String -\u003e IO String,\n    monadicByteStringFunc   :: B.ByteString -\u003e IO B.ByteString\n    } deriving (Data, Typeable)\n\nexample = hastacheStr defaultConfig (encodeStr template) \n    (mkGenericContext context)\n    where\n    template = concat $ map (++ \"\\n\") [\n        \"string: {{stringField}}\",\n        \"int: {{intField}}\",\n        \"data: {{dataField.someField}}, {{dataField.anotherField}}\",\n        \"data: {{#dataField}}{{someField}}, {{anotherField}}{{/dataField}}\",\n        \"simple list: {{#simpleListField}}{{.}} {{/simpleListField}}\",\n        \"data list:\",\n        \"{{#dataListField}}\",\n        \" * {{someField}}, {{anotherField}}. top level var: {{intField}}\",\n        \"{{/dataListField}}\",\n        \"{{#stringFunc}}upper{{/stringFunc}}\",\n        \"{{#byteStringFunc}}reverse{{/byteStringFunc}}\",\n        \"{{#monadicStringFunc}}upper (monadic){{/monadicStringFunc}}\",\n        \"{{#monadicByteStringFunc}}reverse (monadic){{/monadicByteStringFunc}}\"]\n    context = Example { stringField = \"string value\", intField = 1, \n        dataField = InternalData \"val\" 123, simpleListField = [\"a\",\"b\",\"c\"],\n        dataListField = [InternalData \"aaa\" 1, InternalData \"bbb\" 2],\n        stringFunc = map toUpper,\n        byteStringFunc = B.reverse,\n        monadicStringFunc = return . map toUpper,\n        monadicByteStringFunc = return . B.reverse }\n\nmain = example \u003e\u003e= LZ.putStrLn\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e\nstring: string value \nint: 1 \ndata: val, 123 \ndata: val, 123 \nsimple list: a b c  \ndata list: \n * aaa, 1. top level var: 1 \n * bbb, 2. top level var: 1 \nUPPER \nesrever \nUPPER (MONADIC)\n)cidanom( esrever\n\u003c/pre\u003e",
          "module": "Text.Hastache.Context",
          "name": "mkGenericContext",
          "package": "hastache",
          "signature": "a -\u003e MuContext m",
          "source": "src/Text-Hastache-Context.html#mkGenericContext",
          "type": "function"
        },
        "index": {
          "description": "Make Hastache context from Data.Data deriving type Supported field types String Char Double Float Int Int8 Int16 Int32 Int64 Integer Word Word8 Word16 Word32 Word64 Data.ByteString.ByteString Data.ByteString.Lazy.ByteString Data.Text.Text Data.Text.Lazy.Text Bool Data.ByteString.ByteString Data.ByteString.ByteString String String Data.ByteString.ByteString Data.ByteString.Lazy.ByteString MonadIO Data.ByteString.ByteString Data.ByteString.ByteString MonadIO String String MonadIO Data.ByteString.ByteString Data.ByteString.Lazy.ByteString Example import Text.Hastache import Text.Hastache.Context import qualified Data.ByteString as import qualified Data.ByteString.Lazy as LZ import Data.Data import Data.Generics import Data.Char data InternalData InternalData someField String anotherField Int deriving Data Typeable Show data Example Example stringField String intField Int dataField InternalData simpleListField String dataListField InternalData stringFunc String String byteStringFunc B.ByteString B.ByteString monadicStringFunc String IO String monadicByteStringFunc B.ByteString IO B.ByteString deriving Data Typeable example hastacheStr defaultConfig encodeStr template mkGenericContext context where template concat map string stringField int intField data dataField.someField dataField.anotherField data dataField someField anotherField dataField simple list simpleListField simpleListField data list dataListField someField anotherField top level var intField dataListField stringFunc upper stringFunc byteStringFunc reverse byteStringFunc monadicStringFunc upper monadic monadicStringFunc monadicByteStringFunc reverse monadic monadicByteStringFunc context Example stringField string value intField dataField InternalData val simpleListField dataListField InternalData aaa InternalData bbb stringFunc map toUpper byteStringFunc B.reverse monadicStringFunc return map toUpper monadicByteStringFunc return B.reverse main example LZ.putStrLn Result string string value int data val data val simple list data list aaa top level var bbb top level var UPPER esrever UPPER MONADIC cidanom esrever",
          "hierarchy": "Text Hastache Context",
          "module": "Text.Hastache.Context",
          "name": "mkGenericContext",
          "normalized": "a-\u003eMuContext b",
          "package": "hastache",
          "partial": "Generic Context",
          "signature": "a-\u003eMuContext m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#v:mkGenericContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake Hastache context from String -\u003e MuType function\n\u003c/p\u003e",
          "module": "Text.Hastache.Context",
          "name": "mkStrContext",
          "package": "hastache",
          "signature": "(String -\u003e MuType m) -\u003e MuContext m",
          "source": "src/Text-Hastache-Context.html#mkStrContext",
          "type": "function"
        },
        "index": {
          "description": "Make Hastache context from String MuType function",
          "hierarchy": "Text Hastache Context",
          "module": "Text.Hastache.Context",
          "name": "mkStrContext",
          "normalized": "(String-\u003eMuType a)-\u003eMuContext a",
          "package": "hastache",
          "partial": "Str Context",
          "signature": "(String-\u003eMuType m)-\u003eMuContext m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#v:mkStrContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake Hastache context from monadic String -\u003e MuType function\n\u003c/p\u003e",
          "module": "Text.Hastache.Context",
          "name": "mkStrContextM",
          "package": "hastache",
          "signature": "(String -\u003e m (MuType m)) -\u003e MuContext m",
          "source": "src/Text-Hastache-Context.html#mkStrContextM",
          "type": "function"
        },
        "index": {
          "description": "Make Hastache context from monadic String MuType function",
          "hierarchy": "Text Hastache Context",
          "module": "Text.Hastache.Context",
          "name": "mkStrContextM",
          "normalized": "(String-\u003ea(MuType a))-\u003eMuContext a",
          "package": "hastache",
          "partial": "Str Context",
          "signature": "(String-\u003em(MuType m))-\u003eMuContext m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache-Context.html#v:mkStrContextM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell implementation of Mustache templates\n\u003c/p\u003e\u003cp\u003eSee homepage for examples of usage: \u003ca\u003ehttp://github.com/lymar/hastache\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSimplest example:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.Hastache \nimport Text.Hastache.Context \nimport qualified Data.ByteString.Lazy.Char8 as LZ \n\nmain = do \n    res \u003c- hastacheStr defaultConfig (encodeStr template)  \n        (mkStrContext context) \n    LZ.putStrLn res \n  where \n    template = \"Hello, {{name}}!\\n\\nYou have {{unread}} unread messages.\" \n    context \"name\" = MuVariable \"Haskell\"\n    context \"unread\" = MuVariable (100 :: Int)\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e\nHello, Haskell!\n\nYou have 100 unread messages.\n\u003c/pre\u003e\u003cp\u003eUsing Generics:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.Hastache \nimport Text.Hastache.Context \nimport qualified Data.ByteString.Lazy.Char8 as LZ \nimport Data.Data \nimport Data.Generics \n\ndata Info = Info { \n    name    :: String, \n    unread  :: Int \n    } deriving (Data, Typeable)\n\nmain = do \n    res \u003c- hastacheStr defaultConfig (encodeStr template) \n        (mkGenericContext inf) \n    LZ.putStrLn res \n  where \n    template = \"Hello, {{name}}!\\n\\nYou have {{unread}} unread messages.\"\n    inf = Info \"Haskell\" 100\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Hastache",
          "name": "Hastache",
          "package": "hastache",
          "source": "src/Text-Hastache.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell implementation of Mustache templates See homepage for examples of usage http github.com lymar hastache Simplest example import Text.Hastache import Text.Hastache.Context import qualified Data.ByteString.Lazy.Char8 as LZ main do res hastacheStr defaultConfig encodeStr template mkStrContext context LZ.putStrLn res where template Hello name nYou have unread unread messages context name MuVariable Haskell context unread MuVariable Int Result Hello Haskell You have unread messages Using Generics import Text.Hastache import Text.Hastache.Context import qualified Data.ByteString.Lazy.Char8 as LZ import Data.Data import Data.Generics data Info Info name String unread Int deriving Data Typeable main do res hastacheStr defaultConfig encodeStr template mkGenericContext inf LZ.putStrLn res where template Hello name nYou have unread unread messages inf Info Haskell",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "Hastache",
          "package": "hastache",
          "partial": "Hastache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuConfig",
          "package": "hastache",
          "source": "src/Text-Hastache.html#MuConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuConfig",
          "package": "hastache",
          "partial": "Mu Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData for Hastache variable\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "MuContext",
          "package": "hastache",
          "source": "src/Text-Hastache.html#MuContext",
          "type": "type"
        },
        "index": {
          "description": "Data for Hastache variable",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuContext",
          "package": "hastache",
          "partial": "Mu Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuType",
          "package": "hastache",
          "source": "src/Text-Hastache.html#MuType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuType",
          "package": "hastache",
          "partial": "Mu Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuVar",
          "package": "hastache",
          "source": "src/Text-Hastache.html#MuVar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuVar",
          "package": "hastache",
          "partial": "Mu Var",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#t:MuVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuBool",
          "package": "hastache",
          "signature": "MuBool Bool",
          "source": "src/Text-Hastache.html#MuType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuBool",
          "package": "hastache",
          "partial": "Mu Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuConfig",
          "package": "hastache",
          "signature": "MuConfig",
          "source": "src/Text-Hastache.html#MuConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuConfig",
          "package": "hastache",
          "partial": "Mu Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuLambda",
          "package": "hastache",
          "signature": "MuLambda (ByteString -\u003e a)",
          "source": "src/Text-Hastache.html#MuType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuLambda",
          "normalized": "MuLambda(ByteString-\u003ea)",
          "package": "hastache",
          "partial": "Mu Lambda",
          "signature": "MuLambda(ByteString-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuLambdaM",
          "package": "hastache",
          "signature": "MuLambdaM (ByteString -\u003e m a)",
          "source": "src/Text-Hastache.html#MuType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuLambdaM",
          "normalized": "MuLambdaM(ByteString-\u003ea b)",
          "package": "hastache",
          "partial": "Mu Lambda",
          "signature": "MuLambdaM(ByteString-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuLambdaM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuList",
          "package": "hastache",
          "signature": "MuList [MuContext m]",
          "source": "src/Text-Hastache.html#MuType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuList",
          "normalized": "MuList[MuContext a]",
          "package": "hastache",
          "partial": "Mu List",
          "signature": "MuList[MuContext m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuNothing",
          "package": "hastache",
          "signature": "MuNothing",
          "source": "src/Text-Hastache.html#MuType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuNothing",
          "package": "hastache",
          "partial": "Mu Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hastache",
          "name": "MuVariable",
          "package": "hastache",
          "signature": "MuVariable a",
          "source": "src/Text-Hastache.html#MuType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "MuVariable",
          "package": "hastache",
          "partial": "Mu Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:MuVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert UTF-8 Bytestring to String\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "decodeStr",
          "package": "hastache",
          "signature": "ByteString -\u003e String",
          "source": "src/Text-Hastache.html#decodeStr",
          "type": "function"
        },
        "index": {
          "description": "Convert UTF-8 Bytestring to String",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "decodeStr",
          "normalized": "ByteString-\u003eString",
          "package": "hastache",
          "partial": "Str",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:decodeStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert UTF-8 Lazy Bytestring to String\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "decodeStrLBS",
          "package": "hastache",
          "signature": "ByteString -\u003e String",
          "source": "src/Text-Hastache.html#decodeStrLBS",
          "type": "function"
        },
        "index": {
          "description": "Convert UTF-8 Lazy Bytestring to String",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "decodeStrLBS",
          "normalized": "ByteString-\u003eString",
          "package": "hastache",
          "partial": "Str LBS",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:decodeStrLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault config: HTML escape function, current directory as \n     template directory, template file extension not specified \n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "defaultConfig",
          "package": "hastache",
          "signature": "MuConfig m",
          "source": "src/Text-Hastache.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default config HTML escape function current directory as template directory template file extension not specified",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "defaultConfig",
          "package": "hastache",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo escape\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "emptyEscape",
          "package": "hastache",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-Hastache.html#emptyEscape",
          "type": "function"
        },
        "index": {
          "description": "No escape",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "emptyEscape",
          "normalized": "ByteString-\u003eByteString",
          "package": "hastache",
          "partial": "Escape",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:emptyEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert String to UTF-8 Bytestring\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "encodeStr",
          "package": "hastache",
          "signature": "String -\u003e ByteString",
          "source": "src/Text-Hastache.html#encodeStr",
          "type": "function"
        },
        "index": {
          "description": "Convert String to UTF-8 Bytestring",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "encodeStr",
          "normalized": "String-\u003eByteString",
          "package": "hastache",
          "partial": "Str",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:encodeStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert String to UTF-8 Lazy Bytestring\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "encodeStrLBS",
          "package": "hastache",
          "signature": "String -\u003e ByteString",
          "source": "src/Text-Hastache.html#encodeStrLBS",
          "type": "function"
        },
        "index": {
          "description": "Convert String to UTF-8 Lazy Bytestring",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "encodeStrLBS",
          "normalized": "String-\u003eByteString",
          "package": "hastache",
          "partial": "Str LBS",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:encodeStrLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender Hastache template from file\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "hastacheFile",
          "package": "hastache",
          "signature": "MuConfig m-\u003e FilePath-\u003e MuContext m-\u003e m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Render Hastache template from file",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "hastacheFile",
          "normalized": "MuConfig a-\u003eFilePath-\u003eMuContext a-\u003ea ByteString",
          "package": "hastache",
          "partial": "File",
          "signature": "MuConfig m-\u003eFilePath-\u003eMuContext m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender Hastache template from file\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "hastacheFileBuilder",
          "package": "hastache",
          "signature": "MuConfig m-\u003e FilePath-\u003e MuContext m-\u003e m Builder",
          "type": "function"
        },
        "index": {
          "description": "Render Hastache template from file",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "hastacheFileBuilder",
          "normalized": "MuConfig a-\u003eFilePath-\u003eMuContext a-\u003ea Builder",
          "package": "hastache",
          "partial": "File Builder",
          "signature": "MuConfig m-\u003eFilePath-\u003eMuContext m-\u003em Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheFileBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender Hastache template from ByteString\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "hastacheStr",
          "package": "hastache",
          "signature": "MuConfig m-\u003e ByteString-\u003e MuContext m-\u003e m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Render Hastache template from ByteString",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "hastacheStr",
          "normalized": "MuConfig a-\u003eByteString-\u003eMuContext a-\u003ea ByteString",
          "package": "hastache",
          "partial": "Str",
          "signature": "MuConfig m-\u003eByteString-\u003eMuContext m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender Hastache template from ByteString\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "hastacheStrBuilder",
          "package": "hastache",
          "signature": "MuConfig m-\u003e ByteString-\u003e MuContext m-\u003e m Builder",
          "type": "function"
        },
        "index": {
          "description": "Render Hastache template from ByteString",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "hastacheStrBuilder",
          "normalized": "MuConfig a-\u003eByteString-\u003eMuContext a-\u003ea Builder",
          "package": "hastache",
          "partial": "Str Builder",
          "signature": "MuConfig m-\u003eByteString-\u003eMuContext m-\u003em Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:hastacheStrBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape HTML symbols\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "htmlEscape",
          "package": "hastache",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-Hastache.html#htmlEscape",
          "type": "function"
        },
        "index": {
          "description": "Escape HTML symbols",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "htmlEscape",
          "normalized": "ByteString-\u003eByteString",
          "package": "hastache",
          "partial": "Escape",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:htmlEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs empty variable (empty string, zero number etc.)\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "isEmpty",
          "package": "hastache",
          "signature": "a -\u003e Bool",
          "source": "src/Text-Hastache.html#isEmpty",
          "type": "method"
        },
        "index": {
          "description": "Is empty variable empty string zero number etc",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "isEmpty",
          "normalized": "a-\u003eBool",
          "package": "hastache",
          "partial": "Empty",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape function (\u003ccode\u003e\u003ca\u003ehtmlEscape\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eemptyEscape\u003c/a\u003e\u003c/code\u003e etc.)\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "muEscapeFunc",
          "package": "hastache",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-Hastache.html#MuConfig",
          "type": "function"
        },
        "index": {
          "description": "Escape function htmlEscape emptyEscape etc",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "muEscapeFunc",
          "normalized": "ByteString-\u003eByteString",
          "package": "hastache",
          "partial": "Escape Func",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muEscapeFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory for search partial templates ({{\u003e templateName}})\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "muTemplateFileDir",
          "package": "hastache",
          "signature": "Maybe FilePath",
          "source": "src/Text-Hastache.html#MuConfig",
          "type": "function"
        },
        "index": {
          "description": "Directory for search partial templates templateName",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "muTemplateFileDir",
          "package": "hastache",
          "partial": "Template File Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muTemplateFileDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial template files extension\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "muTemplateFileExt",
          "package": "hastache",
          "signature": "Maybe String",
          "source": "src/Text-Hastache.html#MuConfig",
          "type": "function"
        },
        "index": {
          "description": "Partial template files extension",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "muTemplateFileExt",
          "package": "hastache",
          "partial": "Template File Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muTemplateFileExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate retrieval function. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates that the\n   template could not be found.\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "muTemplateRead",
          "package": "hastache",
          "signature": "FilePath -\u003e m (Maybe ByteString)",
          "source": "src/Text-Hastache.html#MuConfig",
          "type": "function"
        },
        "index": {
          "description": "Template retrieval function Nothing indicates that the template could not be found",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "muTemplateRead",
          "normalized": "FilePath-\u003ea(Maybe ByteString)",
          "package": "hastache",
          "partial": "Template Read",
          "signature": "FilePath-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:muTemplateRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to Lazy ByteString\n\u003c/p\u003e",
          "module": "Text.Hastache",
          "name": "toLByteString",
          "package": "hastache",
          "signature": "a -\u003e ByteString",
          "source": "src/Text-Hastache.html#toLByteString",
          "type": "method"
        },
        "index": {
          "description": "Convert to Lazy ByteString",
          "hierarchy": "Text Hastache",
          "module": "Text.Hastache",
          "name": "toLByteString",
          "normalized": "a-\u003eByteString",
          "package": "hastache",
          "partial": "LByte String",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hastache/docs/Text-Hastache.html#v:toLByteString"
      }
    }
  ]
]