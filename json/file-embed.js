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
        "word": "file-embed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses template Haskell. Following is a simplified explanation of usage for those unfamiliar with calling Template Haskell functions.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003eembedFile\u003c/code\u003e in this modules embeds a file into the exceutable\n that you can use it at runtime. A file is represented as a \u003ccode\u003eByteString\u003c/code\u003e.\n However, as you can see below, the type signature indicates a value of type\n \u003ccode\u003eQ Exp\u003c/code\u003e will be returned. In order to convert this into a \u003ccode\u003eByteString\u003c/code\u003e, you\n must use Template Haskell syntax, e.g.:\n\u003c/p\u003e\u003cpre\u003e $(embedFile \"myfile.txt\")\n\u003c/pre\u003e\u003cp\u003eThis expression will have type \u003ccode\u003eByteString\u003c/code\u003e. Be certain to enable the\n TemplateHaskell language extension, usually by adding the following to the\n top of your module:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.FileEmbed",
          "name": "FileEmbed",
          "package": "file-embed",
          "source": "src/Data-FileEmbed.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses template Haskell Following is simplified explanation of usage for those unfamiliar with calling Template Haskell functions The function embedFile in this modules embeds file into the exceutable that you can use it at runtime file is represented as ByteString However as you can see below the type signature indicates value of type Exp will be returned In order to convert this into ByteString you must use Template Haskell syntax e.g embedFile myfile.txt This expression will have type ByteString Be certain to enable the TemplateHaskell language extension usually by adding the following to the top of your module LANGUAGE TemplateHaskell",
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "FileEmbed",
          "package": "file-embed",
          "partial": "File Embed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileEmbed",
          "name": "dummySpace",
          "package": "file-embed",
          "signature": "Int -\u003e Q Exp",
          "source": "src/Data-FileEmbed.html#dummySpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "dummySpace",
          "normalized": "Int-\u003eQ Exp",
          "package": "file-embed",
          "partial": "Space",
          "signature": "Int-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:dummySpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a directory recursively in your source code.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString\n\n myDir :: [(FilePath, Data.ByteString.ByteString)]\n myDir = $(embedDir \"dirName\")\n\u003c/pre\u003e",
          "module": "Data.FileEmbed",
          "name": "embedDir",
          "package": "file-embed",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Data-FileEmbed.html#embedDir",
          "type": "function"
        },
        "index": {
          "description": "Embed directory recursively in your source code import qualified Data.ByteString myDir FilePath Data.ByteString.ByteString myDir embedDir dirName",
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "embedDir",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "file-embed",
          "partial": "Dir",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:embedDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a single file in your source code.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString\n\n myFile :: Data.ByteString.ByteString\n myFile = $(embedFile \"dirName/fileName\")\n\u003c/pre\u003e",
          "module": "Data.FileEmbed",
          "name": "embedFile",
          "package": "file-embed",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Data-FileEmbed.html#embedFile",
          "type": "function"
        },
        "index": {
          "description": "Embed single file in your source code import qualified Data.ByteString myFile Data.ByteString.ByteString myFile embedFile dirName fileName",
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "embedFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "file-embed",
          "partial": "File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:embedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a single existing file in your source code\n out of list a list of paths supplied.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString\n\n myFile :: Data.ByteString.ByteString\n myFile = $(embedFile' [ \"dirName/fileName\", \"src/dirName/fileName\" ])\n\u003c/pre\u003e",
          "module": "Data.FileEmbed",
          "name": "embedOneFileOf",
          "package": "file-embed",
          "signature": "[FilePath] -\u003e Q Exp",
          "source": "src/Data-FileEmbed.html#embedOneFileOf",
          "type": "function"
        },
        "index": {
          "description": "Embed single existing file in your source code out of list list of paths supplied import qualified Data.ByteString myFile Data.ByteString.ByteString myFile embedFile dirName fileName src dirName fileName",
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "embedOneFileOf",
          "normalized": "[FilePath]-\u003eQ Exp",
          "package": "file-embed",
          "partial": "One File Of",
          "signature": "[FilePath]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:embedOneFileOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a directory tree in the IO monad.\n\u003c/p\u003e\u003cp\u003eThis is the workhorse of \u003ccode\u003e\u003ca\u003eembedDir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.FileEmbed",
          "name": "getDir",
          "package": "file-embed",
          "signature": "FilePath -\u003e IO [(FilePath, ByteString)]",
          "source": "src/Data-FileEmbed.html#getDir",
          "type": "function"
        },
        "index": {
          "description": "Get directory tree in the IO monad This is the workhorse of embedDir",
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "getDir",
          "normalized": "FilePath-\u003eIO[(FilePath,ByteString)]",
          "package": "file-embed",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO[(FilePath,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:getDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileEmbed",
          "name": "inject",
          "package": "file-embed",
          "signature": "ByteString-\u003e ByteString-\u003e Maybe ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "inject",
          "normalized": "ByteString-\u003eByteString-\u003eMaybe ByteString",
          "package": "file-embed",
          "signature": "ByteString-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileEmbed",
          "name": "injectFile",
          "package": "file-embed",
          "signature": "ByteString-\u003e FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "injectFile",
          "normalized": "ByteString-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "file-embed",
          "partial": "File",
          "signature": "ByteString-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:injectFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FileEmbed",
          "name": "stringToBs",
          "package": "file-embed",
          "signature": "String -\u003e ByteString",
          "source": "src/Data-FileEmbed.html#stringToBs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FileEmbed",
          "module": "Data.FileEmbed",
          "name": "stringToBs",
          "normalized": "String-\u003eByteString",
          "package": "file-embed",
          "partial": "To Bs",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:stringToBs"
      }
    }
  ]
]