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
        "word": "binembed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport code used by the output of \u003ccode\u003ebinembed --output-hs=\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given \u003ccode\u003eMyData.binembed\u003c/code\u003e listing some files, you might\n get at the contents embedded into your executable using:\n\u003c/p\u003e\u003cpre\u003e import MyData   -- which re-exports this module\n main = do\n   myData' \u003c- unBinEmbed myData\n   ...\n\u003c/pre\u003e\u003cp\u003eSee the 'binembed-example' package for a more detailed example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BinEmbed",
          "name": "BinEmbed",
          "package": "binembed",
          "source": "src/Data-BinEmbed.html",
          "type": "module"
        },
        "index": {
          "description": "Support code used by the output of binembed output-hs For example given MyData.binembed listing some files you might get at the contents embedded into your executable using import MyData which re-exports this module main do myData unBinEmbed myData See the binembed-example package for more detailed example",
          "hierarchy": "Data BinEmbed",
          "module": "Data.BinEmbed",
          "name": "BinEmbed",
          "package": "binembed",
          "partial": "Bin Embed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directory tree\n\u003c/p\u003e",
          "module": "Data.BinEmbed",
          "name": "Node",
          "package": "binembed",
          "source": "src/Data-BinEmbed.html#Node",
          "type": "data"
        },
        "index": {
          "description": "directory tree",
          "hierarchy": "Data BinEmbed",
          "module": "Data.BinEmbed",
          "name": "Node",
          "package": "binembed",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directory has named \u003ccode\u003eNode\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.BinEmbed",
          "name": "Dir",
          "package": "binembed",
          "signature": "Dir (Map String (Node a))",
          "source": "src/Data-BinEmbed.html#Node",
          "type": "function"
        },
        "index": {
          "description": "directory has named Node",
          "hierarchy": "Data BinEmbed",
          "module": "Data.BinEmbed",
          "name": "Dir",
          "package": "binembed",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file has contents.\n\u003c/p\u003e",
          "module": "Data.BinEmbed",
          "name": "File",
          "package": "binembed",
          "signature": "File a",
          "source": "src/Data-BinEmbed.html#Node",
          "type": "function"
        },
        "index": {
          "description": "file has contents",
          "hierarchy": "Data BinEmbed",
          "module": "Data.BinEmbed",
          "name": "File",
          "package": "binembed",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack embedded data.\n\u003c/p\u003e",
          "module": "Data.BinEmbed",
          "name": "unBinEmbed",
          "package": "binembed",
          "signature": "Node (IO ByteString) -\u003e IO (Node ByteString)",
          "source": "src/Data-BinEmbed.html#unBinEmbed",
          "type": "function"
        },
        "index": {
          "description": "Unpack embedded data",
          "hierarchy": "Data BinEmbed",
          "module": "Data.BinEmbed",
          "name": "unBinEmbed",
          "normalized": "Node(IO ByteString)-\u003eIO(Node ByteString)",
          "package": "binembed",
          "partial": "Bin Embed",
          "signature": "Node(IO ByteString)-\u003eIO(Node ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:unBinEmbed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepack the contents between two pointers.  Your code probably\n   doesn't need to call this, but it's needed in generated code.\n\u003c/p\u003e",
          "module": "Data.BinEmbed",
          "name": "unBinEmbedFile",
          "package": "binembed",
          "signature": "Ptr () -\u003e Ptr () -\u003e IO ByteString",
          "source": "src/Data-BinEmbed.html#unBinEmbedFile",
          "type": "function"
        },
        "index": {
          "description": "Repack the contents between two pointers Your code probably doesn need to call this but it needed in generated code",
          "hierarchy": "Data BinEmbed",
          "module": "Data.BinEmbed",
          "name": "unBinEmbedFile",
          "normalized": "Ptr()-\u003ePtr()-\u003eIO ByteString",
          "package": "binembed",
          "partial": "Bin Embed File",
          "signature": "Ptr()-\u003ePtr()-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Data-BinEmbed.html#v:unBinEmbedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport code to use \u003ccode\u003ebinembed\u003c/code\u003e as a pre-processor in Cabal.  For\n example, your \u003ccode\u003eSetup.hs\u003c/code\u003e might look like:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple\n import Distribution.Simple.BinEmbed\n main = defaultMainWithHooks (withBinEmbed simpleUserHooks)\n\u003c/pre\u003e\u003cp\u003eSee the 'binembed-example' package for a more detailed example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Simple.BinEmbed",
          "name": "BinEmbed",
          "package": "binembed",
          "source": "src/Distribution-Simple-BinEmbed.html",
          "type": "module"
        },
        "index": {
          "description": "Support code to use binembed as pre-processor in Cabal For example your Setup.hs might look like import Distribution.Simple import Distribution.Simple.BinEmbed main defaultMainWithHooks withBinEmbed simpleUserHooks See the binembed-example package for more detailed example",
          "hierarchy": "Distribution Simple BinEmbed",
          "module": "Distribution.Simple.BinEmbed",
          "name": "BinEmbed",
          "package": "binembed",
          "partial": "Bin Embed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Distribution-Simple-BinEmbed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd hooks to use \u003ccode\u003ebinembed\u003c/code\u003e as a pre-processor, with input files\n   having the file name extension \u003ccode\u003e.binembed\u003c/code\u003e.  These hooks also\n   handle building the assembly output of \u003ccode\u003ebinembed\u003c/code\u003e, as well as\n   cleaning it up afterwards.\n\u003c/p\u003e",
          "module": "Distribution.Simple.BinEmbed",
          "name": "withBinEmbed",
          "package": "binembed",
          "signature": "UserHooks -\u003e UserHooks",
          "source": "src/Distribution-Simple-BinEmbed.html#withBinEmbed",
          "type": "function"
        },
        "index": {
          "description": "Add hooks to use binembed as pre-processor with input files having the file name extension binembed These hooks also handle building the assembly output of binembed as well as cleaning it up afterwards",
          "hierarchy": "Distribution Simple BinEmbed",
          "module": "Distribution.Simple.BinEmbed",
          "name": "withBinEmbed",
          "normalized": "UserHooks-\u003eUserHooks",
          "package": "binembed",
          "partial": "Bin Embed",
          "signature": "UserHooks-\u003eUserHooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binembed/docs/Distribution-Simple-BinEmbed.html#v:withBinEmbed"
      }
    }
  ]
]