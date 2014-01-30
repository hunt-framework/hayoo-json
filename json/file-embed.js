[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses template Haskell. Following is a simplified explanation of usage for those unfamiliar with calling Template Haskell functions.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003eembedFile\u003c/code\u003e in this modules embeds a file into the exceutable\n that you can use it at runtime. A file is represented as a \u003ccode\u003eByteString\u003c/code\u003e.\n However, as you can see below, the type signature indicates a value of type\n \u003ccode\u003eQ Exp\u003c/code\u003e will be returned. In order to convert this into a \u003ccode\u003eByteString\u003c/code\u003e, you\n must use Template Haskell syntax, e.g.:\n\u003c/p\u003e\u003cpre\u003e $(embedFile \"myfile.txt\")\n\u003c/pre\u003e\u003cp\u003eThis expression will have type \u003ccode\u003eByteString\u003c/code\u003e. Be certain to enable the\n TemplateHaskell language extension, usually by adding the following to the\n top of your module:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "module",
        "fct-source": "src/Data-FileEmbed.html",
        "fct-type": "module",
        "title": "FileEmbed"
      },
      "index": {
        "description": "This module uses template Haskell Following is simplified explanation of usage for those unfamiliar with calling Template Haskell functions The function embedFile in this modules embeds file into the exceutable that you can use it at runtime file is represented as ByteString However as you can see below the type signature indicates value of type Exp will be returned In order to convert this into ByteString you must use Template Haskell syntax e.g embedFile myfile.txt This expression will have type ByteString Be certain to enable the TemplateHaskell language extension usually by adding the following to the top of your module LANGUAGE TemplateHaskell",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "FileEmbed",
        "normalized": "",
        "package": "file-embed",
        "partial": "File Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:dummySpace",
      "description": {
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "Int -\u003e Q Exp",
        "fct-source": "src/Data-FileEmbed.html#dummySpace",
        "fct-type": "function",
        "title": "dummySpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "dummySpace",
        "normalized": "Int-\u003eQ Exp",
        "package": "file-embed",
        "partial": "Space",
        "signature": "Int-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:embedDir",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a directory recursively in your source code.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString\n\n myDir :: [(FilePath, Data.ByteString.ByteString)]\n myDir = $(embedDir \"dirName\")\n\u003c/pre\u003e",
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Data-FileEmbed.html#embedDir",
        "fct-type": "function",
        "title": "embedDir"
      },
      "index": {
        "description": "Embed directory recursively in your source code import qualified Data.ByteString myDir FilePath Data.ByteString.ByteString myDir embedDir dirName",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "embedDir",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "file-embed",
        "partial": "Dir",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:embedFile",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a single file in your source code.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString\n\n myFile :: Data.ByteString.ByteString\n myFile = $(embedFile \"dirName/fileName\")\n\u003c/pre\u003e",
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Data-FileEmbed.html#embedFile",
        "fct-type": "function",
        "title": "embedFile"
      },
      "index": {
        "description": "Embed single file in your source code import qualified Data.ByteString myFile Data.ByteString.ByteString myFile embedFile dirName fileName",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "embedFile",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "file-embed",
        "partial": "File",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:embedOneFileOf",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a single existing file in your source code\n out of list a list of paths supplied.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString\n\n myFile :: Data.ByteString.ByteString\n myFile = $(embedFile' [ \"dirName/fileName\", \"src/dirName/fileName\" ])\n\u003c/pre\u003e",
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "[FilePath] -\u003e Q Exp",
        "fct-source": "src/Data-FileEmbed.html#embedOneFileOf",
        "fct-type": "function",
        "title": "embedOneFileOf"
      },
      "index": {
        "description": "Embed single existing file in your source code out of list list of paths supplied import qualified Data.ByteString myFile Data.ByteString.ByteString myFile embedFile dirName fileName src dirName fileName",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "embedOneFileOf",
        "normalized": "[FilePath]-\u003eQ Exp",
        "package": "file-embed",
        "partial": "One File Of",
        "signature": "[FilePath]-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:getDir",
      "description": {
        "fct-descr": "\u003cp\u003eGet a directory tree in the IO monad.\n\u003c/p\u003e\u003cp\u003eThis is the workhorse of \u003ccode\u003e\u003ca\u003eembedDir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "FilePath -\u003e IO [(FilePath, ByteString)]",
        "fct-source": "src/Data-FileEmbed.html#getDir",
        "fct-type": "function",
        "title": "getDir"
      },
      "index": {
        "description": "Get directory tree in the IO monad This is the workhorse of embedDir",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "getDir",
        "normalized": "FilePath-\u003eIO[(FilePath,ByteString)]",
        "package": "file-embed",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO[(FilePath,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:inject",
      "description": {
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Maybe ByteString",
        "fct-type": "function",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "inject",
        "normalized": "ByteString-\u003eByteString-\u003eMaybe ByteString",
        "package": "file-embed",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:injectFile",
      "description": {
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "ByteString-\u003e FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "injectFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "injectFile",
        "normalized": "ByteString-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "file-embed",
        "partial": "File",
        "signature": "ByteString-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/file-embed/docs/Data-FileEmbed.html#v:stringToBs",
      "description": {
        "fct-module": "Data.FileEmbed",
        "fct-package": "file-embed",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Data-FileEmbed.html#stringToBs",
        "fct-type": "function",
        "title": "stringToBs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileEmbed",
        "module": "Data.FileEmbed",
        "name": "stringToBs",
        "normalized": "String-\u003eByteString",
        "package": "file-embed",
        "partial": "To Bs",
        "signature": "String-\u003eByteString"
      }
    }
  }
]