[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport code used by the output of \u003ccode\u003ebinembed --output-hs=\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given \u003ccode\u003eMyData.binembed\u003c/code\u003e listing some files, you might\n get at the contents embedded into your executable using:\n\u003c/p\u003e\u003cpre\u003e import MyData   -- which re-exports this module\n main = do\n   myData' \u003c- unBinEmbed myData\n   ...\n\u003c/pre\u003e\u003cp\u003eSee the 'binembed-example' package for a more detailed example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "module",
        "fct-source": "src/Data-BinEmbed.html",
        "fct-type": "module",
        "title": "BinEmbed"
      },
      "index": {
        "description": "Support code used by the output of binembed output-hs For example given MyData.binembed listing some files you might get at the contents embedded into your executable using import MyData which re-exports this module main do myData unBinEmbed myData See the binembed-example package for more detailed example",
        "hierarchy": "Data BinEmbed",
        "module": "Data.BinEmbed",
        "name": "BinEmbed",
        "normalized": "",
        "package": "binembed",
        "partial": "Bin Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA directory tree\n\u003c/p\u003e",
        "fct-module": "Data.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "data",
        "fct-source": "src/Data-BinEmbed.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "directory tree",
        "hierarchy": "Data BinEmbed",
        "module": "Data.BinEmbed",
        "name": "Node",
        "normalized": "",
        "package": "binembed",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:Dir",
      "description": {
        "fct-descr": "\u003cp\u003eA directory has named \u003ccode\u003eNode\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "Dir (Map String (Node a))",
        "fct-source": "src/Data-BinEmbed.html#Node",
        "fct-type": "function",
        "title": "Dir"
      },
      "index": {
        "description": "directory has named Node",
        "hierarchy": "Data BinEmbed",
        "module": "Data.BinEmbed",
        "name": "Dir",
        "normalized": "",
        "package": "binembed",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:File",
      "description": {
        "fct-descr": "\u003cp\u003eA file has contents.\n\u003c/p\u003e",
        "fct-module": "Data.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "File a",
        "fct-source": "src/Data-BinEmbed.html#Node",
        "fct-type": "function",
        "title": "File"
      },
      "index": {
        "description": "file has contents",
        "hierarchy": "Data BinEmbed",
        "module": "Data.BinEmbed",
        "name": "File",
        "normalized": "",
        "package": "binembed",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:unBinEmbed",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack embedded data.\n\u003c/p\u003e",
        "fct-module": "Data.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "Node (IO ByteString) -\u003e IO (Node ByteString)",
        "fct-source": "src/Data-BinEmbed.html#unBinEmbed",
        "fct-type": "function",
        "title": "unBinEmbed"
      },
      "index": {
        "description": "Unpack embedded data",
        "hierarchy": "Data BinEmbed",
        "module": "Data.BinEmbed",
        "name": "unBinEmbed",
        "normalized": "Node(IO ByteString)-\u003eIO(Node ByteString)",
        "package": "binembed",
        "partial": "Bin Embed",
        "signature": "Node(IO ByteString)-\u003eIO(Node ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:unBinEmbedFile",
      "description": {
        "fct-descr": "\u003cp\u003eRepack the contents between two pointers.  Your code probably\n   doesn't need to call this, but it's needed in generated code.\n\u003c/p\u003e",
        "fct-module": "Data.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "Ptr () -\u003e Ptr () -\u003e IO ByteString",
        "fct-source": "src/Data-BinEmbed.html#unBinEmbedFile",
        "fct-type": "function",
        "title": "unBinEmbedFile"
      },
      "index": {
        "description": "Repack the contents between two pointers Your code probably doesn need to call this but it needed in generated code",
        "hierarchy": "Data BinEmbed",
        "module": "Data.BinEmbed",
        "name": "unBinEmbedFile",
        "normalized": "Ptr()-\u003ePtr()-\u003eIO ByteString",
        "package": "binembed",
        "partial": "Bin Embed File",
        "signature": "Ptr()-\u003ePtr()-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Distribution-Simple-BinEmbed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport code to use \u003ccode\u003ebinembed\u003c/code\u003e as a pre-processor in Cabal.  For\n example, your \u003ccode\u003eSetup.hs\u003c/code\u003e might look like:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple\n import Distribution.Simple.BinEmbed\n main = defaultMainWithHooks (withBinEmbed simpleUserHooks)\n\u003c/pre\u003e\u003cp\u003eSee the 'binembed-example' package for a more detailed example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.Simple.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Simple-BinEmbed.html",
        "fct-type": "module",
        "title": "BinEmbed"
      },
      "index": {
        "description": "Support code to use binembed as pre-processor in Cabal For example your Setup.hs might look like import Distribution.Simple import Distribution.Simple.BinEmbed main defaultMainWithHooks withBinEmbed simpleUserHooks See the binembed-example package for more detailed example",
        "hierarchy": "Distribution Simple BinEmbed",
        "module": "Distribution.Simple.BinEmbed",
        "name": "BinEmbed",
        "normalized": "",
        "package": "binembed",
        "partial": "Bin Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binembed/docs/Distribution-Simple-BinEmbed.html#v:withBinEmbed",
      "description": {
        "fct-descr": "\u003cp\u003eAdd hooks to use \u003ccode\u003ebinembed\u003c/code\u003e as a pre-processor, with input files\n   having the file name extension \u003ccode\u003e.binembed\u003c/code\u003e.  These hooks also\n   handle building the assembly output of \u003ccode\u003ebinembed\u003c/code\u003e, as well as\n   cleaning it up afterwards.\n\u003c/p\u003e",
        "fct-module": "Distribution.Simple.BinEmbed",
        "fct-package": "binembed",
        "fct-signature": "UserHooks -\u003e UserHooks",
        "fct-source": "src/Distribution-Simple-BinEmbed.html#withBinEmbed",
        "fct-type": "function",
        "title": "withBinEmbed"
      },
      "index": {
        "description": "Add hooks to use binembed as pre-processor with input files having the file name extension binembed These hooks also handle building the assembly output of binembed as well as cleaning it up afterwards",
        "hierarchy": "Distribution Simple BinEmbed",
        "module": "Distribution.Simple.BinEmbed",
        "name": "withBinEmbed",
        "normalized": "UserHooks-\u003eUserHooks",
        "package": "binembed",
        "partial": "Bin Embed",
        "signature": "UserHooks-\u003eUserHooks"
      }
    }
  }
]