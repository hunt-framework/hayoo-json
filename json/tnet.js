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
        "word": "tnet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTNET\u003c/a\u003e\u003c/code\u003e is a library that implements the TNET serialization protocol\n to be used for PGI\n (\u003ca\u003ehttp://code.google.com/p/polyweb/source/browse/doc/PGI.txt\u003c/a\u003e)\n applications. The TNET protocol\n (\u003ca\u003ehttp://tnetstrings.org\u003c/a\u003e) is designed to be simple to implement in\n any language, please look at the README for the changes to the\n original tnetstrings spec.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TNET",
          "name": "TNET",
          "package": "tnet",
          "source": "src/TNET.html",
          "type": "module"
        },
        "index": {
          "description": "TNET is library that implements the TNET serialization protocol to be used for PGI http code.google.com polyweb source browse doc PGI.txt applications The TNET protocol http tnetstrings.org is designed to be simple to implement in any language please look at the README for the changes to the original tnetstrings spec",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "TNET",
          "package": "tnet",
          "partial": "TNET",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTNET\u003c/a\u003e\u003c/code\u003e typeclass represents types that\n can be encoded and decoded in the TNET format.\n An example instance:\n\u003c/p\u003e\u003cpre\u003e data Person = Person {\n                 name :: String\n               , age  :: Integer\n               }\n instance TNET Person where\n   toTNET (Person n a) = dict [ \"name\" .= n\n                              , \"age\"  .= a\n                              ]\n   fromTNET tval = do\n     n \u003c- tval .: \"name\"\n     a \u003c- tval .: \"age\"\n     return $ Person n a\n\u003c/pre\u003e",
          "module": "TNET",
          "name": "TNET",
          "package": "tnet",
          "source": "src/TNET.html#TNET",
          "type": "class"
        },
        "index": {
          "description": "The TNET typeclass represents types that can be encoded and decoded in the TNET format An example instance data Person Person name String age Integer instance TNET Person where toTNET Person dict name age fromTNET tval do tval name tval age return Person",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "TNET",
          "package": "tnet",
          "partial": "TNET",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#t:TNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTValue\u003c/a\u003e\u003c/code\u003e represents a raw TNET object. TNET values\n are one of the following types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a string of bytes\n\u003c/li\u003e\u003cli\u003e a UTF-8 encoded string\n\u003c/li\u003e\u003cli\u003e an integer\n\u003c/li\u003e\u003cli\u003e a floating point number\n\u003c/li\u003e\u003cli\u003e a boolean\n\u003c/li\u003e\u003cli\u003e null\n\u003c/li\u003e\u003cli\u003e a dictionary type\n\u003c/li\u003e\u003cli\u003e a list of TValues\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "TNET",
          "name": "TValue",
          "package": "tnet",
          "source": "src/TNET.html#TValue",
          "type": "data"
        },
        "index": {
          "description": "TValue represents raw TNET object TNET values are one of the following types string of bytes UTF-8 encoded string an integer floating point number boolean null dictionary type list of TValues",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "TValue",
          "package": "tnet",
          "partial": "TValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#t:TValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TNET",
          "name": "(.=)",
          "package": "tnet",
          "signature": "String -\u003e a -\u003e (String, TValue)",
          "source": "src/TNET.html#.%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "(.=) .=",
          "normalized": "String-\u003ea-\u003e(String,TValue)",
          "package": "tnet",
          "signature": "String-\u003ea-\u003e(String,TValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to extract TNET values from\n a TNET dictionary. Meant to be used as in the\n following example:\n\u003c/p\u003e\u003cpre\u003e data Person = Person {\n                 name :: String\n               , age  :: Integer\n               }\n personFromDict :: TValue -\u003e Maybe Person\n personFromDict tdict = do\n   name \u003c- tdict .: \"name\"\n   age  \u003c- tdict .: \"age\"\n   return $ Person name age\n\u003c/pre\u003e",
          "module": "TNET",
          "name": "(.:)",
          "package": "tnet",
          "signature": "TValue -\u003e String -\u003e Maybe a",
          "source": "src/TNET.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Helper function to extract TNET values from TNET dictionary Meant to be used as in the following example data Person Person name String age Integer personFromDict TValue Maybe Person personFromDict tdict do name tdict name age tdict age return Person name age",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "(.:) .:",
          "normalized": "TValue-\u003eString-\u003eMaybe a",
          "package": "tnet",
          "signature": "TValue-\u003eString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a TNET format bytestring into a Haskell\n value. An explicit type annotation may be needed\n if the type of the decoded value can not be\n determined:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode \"0:~\" :: Maybe ()\n\u003c/code\u003e\u003c/strong\u003eJust ()\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode \"0:~\" :: Maybe (Maybe String)\n\u003c/code\u003e\u003c/strong\u003eJust Nothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode \"1:5#\" :: Maybe Integer\n\u003c/code\u003e\u003c/strong\u003eJust 5\n\u003c/pre\u003e\u003cpre\u003e let x = decode \"4:true!\" in\n case x of\n   Just True  -\u003e putStrLn \"got true!\"\n   Just False -\u003e putStrLn \"got false!\"\n   Nothing    -\u003e putStrLn \"error decoding\"\n\u003c/pre\u003e",
          "module": "TNET",
          "name": "decode",
          "package": "tnet",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/TNET.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode TNET format bytestring into Haskell value An explicit type annotation may be needed if the type of the decoded value can not be determined decode Maybe Just decode Maybe Maybe String Just Nothing decode Maybe Integer Just let decode true in case of Just True putStrLn got true Just False putStrLn got false Nothing putStrLn error decoding",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "tnet",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to create a TNET dictionary from\n TNET values. Meant to be used with the\n \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e operator as in the following example:\n\u003c/p\u003e\u003cpre\u003e myDict = dict [ \"a\" .= 5\n               , \"is_dict\" .= True\n               ]\n\u003c/pre\u003e",
          "module": "TNET",
          "name": "dict",
          "package": "tnet",
          "signature": "[(String, TValue)] -\u003e TValue",
          "source": "src/TNET.html#dict",
          "type": "function"
        },
        "index": {
          "description": "Used to create TNET dictionary from TNET values Meant to be used with the operator as in the following example myDict dict is dict True",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "dict",
          "normalized": "[(String,TValue)]-\u003eTValue",
          "package": "tnet",
          "signature": "[(String,TValue)]-\u003eTValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a Haskell value into the TNET format.\n Some examples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode 5\n\u003c/code\u003e\u003c/strong\u003e\"1:5#\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode \"Hello\"\n\u003c/code\u003e\u003c/strong\u003e\"5:Hello$\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode (-12.3)\n\u003c/code\u003e\u003c/strong\u003e\"5:-12.3^\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode ()\n\u003c/code\u003e\u003c/strong\u003e\"0:~\"\n\u003c/pre\u003e",
          "module": "TNET",
          "name": "encode",
          "package": "tnet",
          "signature": "a -\u003e ByteString",
          "source": "src/TNET.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode Haskell value into the TNET format Some examples encode encode Hello Hello encode encode",
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "tnet",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TNET",
          "name": "fromTNET",
          "package": "tnet",
          "signature": "TValue -\u003e Maybe a",
          "source": "src/TNET.html#fromTNET",
          "type": "method"
        },
        "index": {
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "fromTNET",
          "normalized": "TValue-\u003eMaybe a",
          "package": "tnet",
          "partial": "TNET",
          "signature": "TValue-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:fromTNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TNET",
          "name": "tnetParser",
          "package": "tnet",
          "signature": "Parser TValue",
          "source": "src/TNET.html#tnetParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "tnetParser",
          "package": "tnet",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:tnetParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TNET",
          "name": "toTNET",
          "package": "tnet",
          "signature": "a -\u003e TValue",
          "source": "src/TNET.html#toTNET",
          "type": "method"
        },
        "index": {
          "hierarchy": "TNET",
          "module": "TNET",
          "name": "toTNET",
          "normalized": "a-\u003eTValue",
          "package": "tnet",
          "partial": "TNET",
          "signature": "a-\u003eTValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tnet/docs/TNET.html#v:toTNET"
      }
    }
  ]
]