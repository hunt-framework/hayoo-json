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
        "word": "knob"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate memory&#8208;backed \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es, referencing virtual files. This is\n mostly useful for testing \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e&#8208;based APIs without having to\n interact with the filesystem.\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString (pack)\n import Data.Knob\n import System.IO\n\n main = do\n     knob \u003c- newKnob (pack [])\n     h \u003c- newFileHandle knob \"test.txt\" WriteMode\n     hPutStrLn h \"Hello world!\"\n     hClose h\n     bytes \u003c- Data.Knob.getContents knob\n     putStrLn (\"Wrote bytes: \" ++ show bytes)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Knob",
          "name": "Knob",
          "package": "knob",
          "source": "src/Data-Knob.html",
          "type": "module"
        },
        "index": {
          "description": "Create memory backed Handle referencing virtual files This is mostly useful for testing Handle based APIs without having to interact with the filesystem import Data.ByteString pack import Data.Knob import System.IO main do knob newKnob pack newFileHandle knob test.txt WriteMode hPutStrLn Hello world hClose bytes Data.Knob.getContents knob putStrLn Wrote bytes show bytes",
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "Knob",
          "package": "knob",
          "partial": "Knob",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA knob is a basic virtual file, which contains a byte buffer. A knob can\n have multiple \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es open to it, each of which behaves like a standard\n file handle.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetContents\u003c/a\u003e\u003c/code\u003e to inspect and modify the knob&#8217;s\n byte buffer.\n\u003c/p\u003e",
          "module": "Data.Knob",
          "name": "Knob",
          "package": "knob",
          "source": "src/Data-Knob.html#Knob",
          "type": "data"
        },
        "index": {
          "description": "knob is basic virtual file which contains byte buffer knob can have multiple Handle open to it each of which behaves like standard file handle Use getContents and setContents to inspect and modify the knob byte buffer",
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "Knob",
          "package": "knob",
          "partial": "Knob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#t:Knob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Knob",
          "name": "getContents",
          "package": "knob",
          "signature": "Knob -\u003e m ByteString",
          "source": "src/Data-Knob.html#getContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "getContents",
          "normalized": "Knob-\u003ea ByteString",
          "package": "knob",
          "partial": "Contents",
          "signature": "Knob-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e pointing to a \u003ccode\u003e\u003ca\u003eKnob\u003c/a\u003e\u003c/code\u003e. This handle behaves like\n a file-backed handle for most purposes.\n\u003c/p\u003e",
          "module": "Data.Knob",
          "name": "newFileHandle",
          "package": "knob",
          "signature": "Knob-\u003e String-\u003e IOMode-\u003e m Handle",
          "type": "function"
        },
        "index": {
          "description": "Create new Handle pointing to Knob This handle behaves like file-backed handle for most purposes",
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "newFileHandle",
          "normalized": "Knob-\u003eString-\u003eIOMode-\u003ea Handle",
          "package": "knob",
          "partial": "File Handle",
          "signature": "Knob-\u003eString-\u003eIOMode-\u003em Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#v:newFileHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Knob",
          "name": "newKnob",
          "package": "knob",
          "signature": "ByteString -\u003e m Knob",
          "source": "src/Data-Knob.html#newKnob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "newKnob",
          "normalized": "ByteString-\u003ea Knob",
          "package": "knob",
          "partial": "Knob",
          "signature": "ByteString-\u003em Knob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#v:newKnob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Knob",
          "name": "setContents",
          "package": "knob",
          "signature": "Knob -\u003e ByteString -\u003e m ()",
          "source": "src/Data-Knob.html#setContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "setContents",
          "normalized": "Knob-\u003eByteString-\u003ea()",
          "package": "knob",
          "partial": "Contents",
          "signature": "Knob-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#v:setContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewFileHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Knob",
          "name": "withFileHandle",
          "package": "knob",
          "signature": "Knob-\u003e String-\u003e IOMode-\u003e (Handle -\u003e IO a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "See newFileHandle",
          "hierarchy": "Data Knob",
          "module": "Data.Knob",
          "name": "withFileHandle",
          "normalized": "Knob-\u003eString-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eb a",
          "package": "knob",
          "partial": "File Handle",
          "signature": "Knob-\u003eString-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/knob/docs/Data-Knob.html#v:withFileHandle"
      }
    }
  ]
]