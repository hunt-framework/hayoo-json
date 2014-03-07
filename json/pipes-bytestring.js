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
        "word": "pipes-bytestring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003epipes\u003c/code\u003e utilities for \"byte streams\", which are\n    streams of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es chunks.  Use byte streams to interact\n    with both \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es and lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eTo stream to or from \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es, use \u003ccode\u003e\u003ca\u003efromHandle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoHandle\u003c/a\u003e\u003c/code\u003e.  For\n    example, the following program copies data from one file to another:\n\u003c/p\u003e\u003cpre\u003e import Pipes\n import qualified Pipes.ByteString as P\n import System.IO\n\n main =\n     withFile \"inFile.txt\"  ReadMode  $ \\hIn  -\u003e\n     withFile \"outFile.txt\" WriteMode $ \\hOut -\u003e\n     runEffect $ P.fromHandle hIn \u003e-\u003e P.toHandle hOut\n\u003c/pre\u003e\u003cp\u003eYou can stream to and from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using the predefined \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e pipes, like in the following \"echo\" program:\n\u003c/p\u003e\u003cpre\u003e main = runEffect $ P.stdin \u003e-\u003e P.stdout\n\u003c/pre\u003e\u003cp\u003eYou can also translate pure lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to and from pipes:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Lazy.Char8 as BL\n\n main = runEffect $ P.fromLazy (BL.pack \"Hello, world!\\n\") \u003e-\u003e P.stdout\n\u003c/pre\u003e\u003cp\u003eIn addition, this module provides many functions equivalent to lazy\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e functions so that you can transform or fold byte streams.  For\n    example, to stream only the first three lines of \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e you\n    would write:\n\u003c/p\u003e\u003cpre\u003e import Lens.Family (over)\n import Pipes\n import qualified Pipes.ByteString as PB\n import Pipes.Parse (takes)\n\n main = runEffect $ over PB.lines (takes 3) PB.stdin \u003e-\u003e PB.stdout\n\u003c/pre\u003e\u003cp\u003eThe above program will never bring more than one chunk (~ 32 KB) into\n    memory, no matter how long the lines are.\n\u003c/p\u003e\u003cp\u003eNote that functions in this library are designed to operate on streams that\n    are insensitive to chunk boundaries.  This means that they may freely split\n    chunks into smaller chunks and \u003cem\u003ediscard empty chunks\u003c/em\u003e.  However, they will\n    \u003cem\u003enever concatenate chunks\u003c/em\u003e in order to provide strict upper bounds on memory\n    usage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.ByteString",
          "name": "ByteString",
          "package": "pipes-bytestring",
          "source": "src/Pipes-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides pipes utilities for byte streams which are streams of strict ByteString chunks Use byte streams to interact with both Handle and lazy ByteString To stream to or from Handle use fromHandle or toHandle For example the following program copies data from one file to another import Pipes import qualified Pipes.ByteString as import System.IO main withFile inFile.txt ReadMode hIn withFile outFile.txt WriteMode hOut runEffect P.fromHandle hIn P.toHandle hOut You can stream to and from stdin and stdout using the predefined stdin and stdout pipes like in the following echo program main runEffect P.stdin P.stdout You can also translate pure lazy ByteString to and from pipes import qualified Data.ByteString.Lazy.Char8 as BL main runEffect P.fromLazy BL.pack Hello world P.stdout In addition this module provides many functions equivalent to lazy ByteString functions so that you can transform or fold byte streams For example to stream only the first three lines of stdin to stdout you would write import Lens.Family over import Pipes import qualified Pipes.ByteString as PB import Pipes.Parse takes main runEffect over PB.lines takes PB.stdin PB.stdout The above program will never bring more than one chunk KB into memory no matter how long the lines are Note that functions in this library are designed to operate on streams that are insensitive to chunk boundaries This means that they may freely split chunks into smaller chunks and discard empty chunks However they will never concatenate chunks in order to provide strict upper bounds on memory usage",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "ByteString",
          "package": "pipes-bytestring",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold that returns whether \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e received \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es satisfy the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "all",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m Bool",
          "source": "src/Pipes-ByteString.html#all",
          "type": "function"
        },
        "index": {
          "description": "Fold that returns whether All received Word8 satisfy the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "all",
          "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea Bool",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold that returns whether \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e received \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es satisfy the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "any",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m Bool",
          "source": "src/Pipes-ByteString.html#any",
          "type": "function"
        },
        "index": {
          "description": "Fold that returns whether Any received Word8 satisfy the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "any",
          "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea Bool",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper lens that splits after the longest consecutive group of bytes that\n    fail the given predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "break",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Lens' (Producer ByteString m x) (Producer ByteString m (Producer ByteString m x))",
          "source": "src/Pipes-ByteString.html#break",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that splits after the longest consecutive group of bytes that fail the given predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "break",
          "normalized": "(Word-\u003eBool)-\u003eLens'(Producer ByteString a b)(Producer ByteString a(Producer ByteString a b))",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eBool)-\u003eLens'(Producer ByteString m x)(Producer ByteString m(Producer ByteString m x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a byte stream into \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited byte streams of fixed size\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "chunksOf",
          "package": "pipes-bytestring",
          "signature": "n -\u003e Lens' (Producer ByteString m x) (FreeT (Producer ByteString m) m x)",
          "source": "src/Pipes-ByteString.html#chunksOf",
          "type": "function"
        },
        "index": {
          "description": "Split byte stream into FreeT delimited byte streams of fixed size",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "chunksOf",
          "normalized": "a-\u003eLens'(Producer ByteString b c)(FreeT(Producer ByteString b)b c)",
          "package": "pipes-bytestring",
          "partial": "Of",
          "signature": "n-\u003eLens'(Producer ByteString m x)(FreeT(Producer ByteString m)m x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:chunksOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup byte stream chunks into chunks of fixed length\n\u003c/p\u003e\u003cp\u003eNote: This is the \u003cem\u003eonly\u003c/em\u003e function in this API that concatenates\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks, which requires allocating new \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "chunksOf'",
          "package": "pipes-bytestring",
          "signature": "n -\u003e Producer ByteString m r -\u003e Producer ByteString m r",
          "source": "src/Pipes-ByteString.html#chunksOf%27",
          "type": "function"
        },
        "index": {
          "description": "Group byte stream chunks into chunks of fixed length Note This is the only function in this API that concatenates ByteString chunks which requires allocating new ByteString",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "chunksOf'",
          "normalized": "a-\u003eProducer ByteString b c-\u003eProducer ByteString b c",
          "package": "pipes-bytestring",
          "partial": "Of'",
          "signature": "n-\u003eProducer ByteString m r-\u003eProducer ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:chunksOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the byte stream and concatenate the results\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "concatMap",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e ByteString) -\u003e Pipe ByteString ByteString m r",
          "source": "src/Pipes-ByteString.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over the byte stream and concatenate the results",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "concatMap",
          "normalized": "(Word-\u003eByteString)-\u003ePipe ByteString ByteString a b",
          "package": "pipes-bytestring",
          "partial": "Map",
          "signature": "(Word-\u003eByteString)-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a tally of how many elements match the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "count",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Producer ByteString m () -\u003e m n",
          "source": "src/Pipes-ByteString.html#count",
          "type": "function"
        },
        "index": {
          "description": "Store tally of how many elements match the given Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "count",
          "normalized": "Word-\u003eProducer ByteString a()-\u003ea b",
          "package": "pipes-bytestring",
          "signature": "Word-\u003eProducer ByteString m()-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw one \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "drawByte",
          "package": "pipes-bytestring",
          "signature": "Parser ByteString m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#drawByte",
          "type": "function"
        },
        "index": {
          "description": "Draw one Word8 from the underlying Producer returning Nothing if the Producer is empty",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "drawByte",
          "package": "pipes-bytestring",
          "partial": "Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:drawByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(drop n)\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e bytes\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "drop",
          "package": "pipes-bytestring",
          "signature": "a -\u003e Pipe ByteString ByteString m r",
          "source": "src/Pipes-ByteString.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop drops the first bytes",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "drop",
          "normalized": "a-\u003ePipe ByteString ByteString b c",
          "package": "pipes-bytestring",
          "signature": "a-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop bytes until they fail the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "dropWhile",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m r",
          "source": "src/Pipes-ByteString.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Drop bytes until they fail the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a b",
          "package": "pipes-bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether any element in the byte stream matches the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "elem",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Producer ByteString m () -\u003e m Bool",
          "source": "src/Pipes-ByteString.html#elem",
          "type": "function"
        },
        "index": {
          "description": "Determine whether any element in the byte stream matches the given Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "elem",
          "normalized": "Word-\u003eProducer ByteString a()-\u003ea Bool",
          "package": "pipes-bytestring",
          "signature": "Word-\u003eProducer ByteString m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the index of an element that matches the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "elemIndex",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Producer ByteString m () -\u003e m (Maybe n)",
          "source": "src/Pipes-ByteString.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "Find the index of an element that matches the given Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "elemIndex",
          "normalized": "Word-\u003eProducer ByteString a()-\u003ea(Maybe b)",
          "package": "pipes-bytestring",
          "partial": "Index",
          "signature": "Word-\u003eProducer ByteString m()-\u003em(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream all indices whose elements match the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "elemIndices",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Pipe ByteString n m r",
          "source": "src/Pipes-ByteString.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "Stream all indices whose elements match the given Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "elemIndices",
          "normalized": "Word-\u003ePipe ByteString a b c",
          "package": "pipes-bytestring",
          "partial": "Indices",
          "signature": "Word-\u003ePipe ByteString n m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly allows \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es to pass if they satisfy the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "filter",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m r",
          "source": "src/Pipes-ByteString.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Only allows Word8 to pass if they satisfy the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "filter",
          "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a b",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first element in the stream that matches the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "find",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find the first element in the stream that matches the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "find",
          "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea(Maybe Word)",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore the first index of an element that satisfies the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "findIndex",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m (Maybe n)",
          "source": "src/Pipes-ByteString.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "Store the first index of an element that satisfies the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "findIndex",
          "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea(Maybe b)",
          "package": "pipes-bytestring",
          "partial": "Index",
          "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream all indices whose elements satisfy the given predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "findIndices",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString n m r",
          "source": "src/Pipes-ByteString.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "Stream all indices whose elements satisfy the given predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "findIndices",
          "normalized": "(Word-\u003eBool)-\u003ePipe ByteString a b c",
          "package": "pipes-bytestring",
          "partial": "Indices",
          "signature": "(Word-\u003eBool)-\u003ePipe ByteString n m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the stream of bytes using a strict left fold\n\u003c/p\u003e\u003cp\u003eNote: It's more efficient to use folds from \u003ccode\u003eControl.Foldl.ByteString\u003c/code\u003e in\n    conjunction with \u003ccode\u003ePipes.Prelude.\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e when possible\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "foldBytes",
          "package": "pipes-bytestring",
          "signature": "(x -\u003e Word8 -\u003e x) -\u003e x -\u003e (x -\u003e r) -\u003e Producer ByteString m () -\u003e m r",
          "source": "src/Pipes-ByteString.html#foldBytes",
          "type": "function"
        },
        "index": {
          "description": "Reduce the stream of bytes using strict left fold Note It more efficient to use folds from Control.Foldl.ByteString in conjunction with Pipes.Prelude fold when possible",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "foldBytes",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003e(a-\u003eb)-\u003eProducer ByteString c()-\u003ec b",
          "package": "pipes-bytestring",
          "partial": "Bytes",
          "signature": "(x-\u003eWord-\u003ex)-\u003ex-\u003e(x-\u003er)-\u003eProducer ByteString m()-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:foldBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e into a byte stream using a default chunk size\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "fromHandle",
          "package": "pipes-bytestring",
          "signature": "Handle -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-ByteString.html#fromHandle",
          "type": "function"
        },
        "index": {
          "description": "Convert Handle into byte stream using default chunk size",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "fromHandle",
          "normalized": "Handle-\u003eProducer' ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Handle",
          "signature": "Handle-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:fromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "fromLazy",
          "package": "pipes-bytestring",
          "signature": "ByteString -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-ByteString.html#fromLazy",
          "type": "function"
        },
        "index": {
          "description": "Convert lazy ByteString into Producer of strict ByteString",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "fromLazy",
          "normalized": "ByteString-\u003eProducer' ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Lazy",
          "signature": "ByteString-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:fromLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, where the equality predicate is (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "group",
          "package": "pipes-bytestring",
          "signature": "Lens' (Producer ByteString m r) (Producer ByteString m (Producer ByteString m r))",
          "source": "src/Pipes-ByteString.html#group",
          "type": "function"
        },
        "index": {
          "description": "Like groupBy where the equality predicate is",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "group",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper lens that splits after the first group of matching bytes, as\n    defined by the given equality predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "groupBy",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e Lens' (Producer ByteString m r) (Producer ByteString m (Producer ByteString m r))",
          "source": "src/Pipes-ByteString.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that splits after the first group of matching bytes as defined by the given equality predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "groupBy",
          "normalized": "(Word-\u003eWord-\u003eBool)-\u003eLens'(Producer ByteString a b)(Producer ByteString a(Producer ByteString a b))",
          "package": "pipes-bytestring",
          "partial": "By",
          "signature": "(Word-\u003eWord-\u003eBool)-\u003eLens'(Producer ByteString m r)(Producer ByteString m(Producer ByteString m r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egroupsBy\u003c/a\u003e\u003c/code\u003e, where the equality predicate is (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "groups",
          "package": "pipes-bytestring",
          "signature": "Lens' (Producer ByteString m x) (FreeT (Producer ByteString m) m x)",
          "source": "src/Pipes-ByteString.html#groups",
          "type": "function"
        },
        "index": {
          "description": "Like groupsBy where the equality predicate is",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "groups",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:groups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphism between a byte stream and groups of identical bytes using the\n    supplied equality predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "groupsBy",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e Lens' (Producer ByteString m x) (FreeT (Producer ByteString m) m x)",
          "source": "src/Pipes-ByteString.html#groupsBy",
          "type": "function"
        },
        "index": {
          "description": "Isomorphism between byte stream and groups of identical bytes using the supplied equality predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "groupsBy",
          "normalized": "(Word-\u003eWord-\u003eBool)-\u003eLens'(Producer ByteString a b)(FreeT(Producer ByteString a)a b)",
          "package": "pipes-bytestring",
          "partial": "By",
          "signature": "(Word-\u003eWord-\u003eBool)-\u003eLens'(Producer ByteString m x)(FreeT(Producer ByteString m)m x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:groupsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a handle into a byte stream using a fixed chunk size\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e waits until exactly the requested number of bytes are available for\n    each chunk.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "hGet",
          "package": "pipes-bytestring",
          "signature": "Int -\u003e Handle -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-ByteString.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Convert handle into byte stream using fixed chunk size hGet waits until exactly the requested number of bytes are available for each chunk",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "hGet",
          "normalized": "Int-\u003eHandle-\u003eProducer' ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Get",
          "signature": "Int-\u003eHandle-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except you can vary the chunk size for each request\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "hGetN",
          "package": "pipes-bytestring",
          "signature": "Handle -\u003e Int -\u003e Server' Int ByteString m ()",
          "source": "src/Pipes-ByteString.html#hGetN",
          "type": "function"
        },
        "index": {
          "description": "Like hGet except you can vary the chunk size for each request",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "hGetN",
          "normalized": "Handle-\u003eInt-\u003eServer' Int ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eServer' Int ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGetN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a handle into a byte stream using a maximum chunk size\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e forwards input immediately as it becomes available, splitting the\n    input into multiple chunks if it exceeds the maximum chunk size.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "hGetSome",
          "package": "pipes-bytestring",
          "signature": "Int -\u003e Handle -\u003e Producer' ByteString m ()",
          "source": "src/Pipes-ByteString.html#hGetSome",
          "type": "function"
        },
        "index": {
          "description": "Convert handle into byte stream using maximum chunk size hGetSome forwards input immediately as it becomes available splitting the input into multiple chunks if it exceeds the maximum chunk size",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "hGetSome",
          "normalized": "Int-\u003eHandle-\u003eProducer' ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Get Some",
          "signature": "Int-\u003eHandle-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e, except you can vary the maximum chunk size for each request\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "hGetSomeN",
          "package": "pipes-bytestring",
          "signature": "Handle -\u003e Int -\u003e Server' Int ByteString m ()",
          "source": "src/Pipes-ByteString.html#hGetSomeN",
          "type": "function"
        },
        "index": {
          "description": "Like hGetSome except you can vary the maximum chunk size for each request",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "hGetSomeN",
          "normalized": "Handle-\u003eInt-\u003eServer' Int ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Get Some",
          "signature": "Handle-\u003eInt-\u003eServer' Int ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGetSomeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the first \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "head",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#head",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the first Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "head",
          "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m()-\u003em(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex into a byte stream\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "index",
          "package": "pipes-bytestring",
          "signature": "a -\u003e Producer ByteString m () -\u003e m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#index",
          "type": "function"
        },
        "index": {
          "description": "Index into byte stream",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "index",
          "normalized": "a-\u003eProducer ByteString b()-\u003eb(Maybe Word)",
          "package": "pipes-bytestring",
          "signature": "a-\u003eProducer ByteString m()-\u003em(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersperse a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in between the bytes of the byte stream\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "intersperse",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Producer ByteString m r -\u003e Producer ByteString m r",
          "source": "src/Pipes-ByteString.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "Intersperse Word8 in between the bytes of the byte stream",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "intersperse",
          "normalized": "Word-\u003eProducer ByteString a b-\u003eProducer ByteString a b",
          "package": "pipes-bytestring",
          "signature": "Word-\u003eProducer ByteString m r-\u003eProducer ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has no more bytes\n\u003c/p\u003e\u003cp\u003eNote that this will skip over empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks, unlike\n    \u003ccode\u003e\u003ca\u003eisEndOfInput\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003epipes-parse\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e isEndOfBytes = liftM isNothing peekByte\n\u003c/pre\u003e",
          "module": "Pipes.ByteString",
          "name": "isEndOfBytes",
          "package": "pipes-bytestring",
          "signature": "Parser ByteString m Bool",
          "source": "src/Pipes-ByteString.html#isEndOfBytes",
          "type": "function"
        },
        "index": {
          "description": "Check if the underlying Producer has no more bytes Note that this will skip over empty ByteString chunks unlike isEndOfInput from pipes-parse isEndOfBytes liftM isNothing peekByte",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "isEndOfBytes",
          "package": "pipes-bytestring",
          "partial": "End Of Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:isEndOfBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the last \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "last",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#last",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the last Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "last",
          "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m()-\u003em(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of bytes\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "length",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m n",
          "source": "src/Pipes-ByteString.html#length",
          "type": "function"
        },
        "index": {
          "description": "Count the number of bytes",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "length",
          "normalized": "Producer ByteString a()-\u003ea b",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m()-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper lens that splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e after the first line\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e, this does not consume the newline marker, which is stored\n    within the inner \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "line",
          "package": "pipes-bytestring",
          "signature": "Lens' (Producer ByteString m r) (Producer ByteString m (Producer ByteString m r))",
          "source": "src/Pipes-ByteString.html#line",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that splits Producer after the first line Unlike lines this does not consume the newline marker which is stored within the inner Producer Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "line",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper isomorphism between a bytestream and its lines\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "lines",
          "package": "pipes-bytestring",
          "signature": "Iso' (Producer ByteString m x) (FreeT (Producer ByteString m) m x)",
          "source": "src/Pipes-ByteString.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Improper isomorphism between bytestream and its lines Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "lines",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to each \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in the stream\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "map",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e Pipe ByteString ByteString m r",
          "source": "src/Pipes-ByteString.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation to each Word8 in the stream",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "map",
          "normalized": "(Word-\u003eWord)-\u003ePipe ByteString ByteString a b",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eWord)-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e within a byte stream\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "maximum",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum Word8 within byte stream",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "maximum",
          "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m()-\u003em(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e within a byte stream\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "minimum",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum Word8 within byte stream",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "minimum",
          "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m()-\u003em(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the first byte from a byte stream\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e either fails with a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has no more bytes or\n    succeeds with a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e providing the next byte and the remainder of the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "nextByte",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m r -\u003e m (Either r (Word8, Producer ByteString m r))",
          "source": "src/Pipes-ByteString.html#nextByte",
          "type": "function"
        },
        "index": {
          "description": "Consume the first byte from byte stream next either fails with Left if the Producer has no more bytes or succeeds with Right providing the next byte and the remainder of the Producer",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "nextByte",
          "normalized": "Producer ByteString a b-\u003ea(Either b(Word,Producer ByteString a b))",
          "package": "pipes-bytestring",
          "partial": "Byte",
          "signature": "Producer ByteString m r-\u003em(Either r(Word,Producer ByteString m r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:nextByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether all elements in the byte stream do not match the given\n    \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "notElem",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Producer ByteString m () -\u003e m Bool",
          "source": "src/Pipes-ByteString.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "Determine whether all elements in the byte stream do not match the given Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "notElem",
          "normalized": "Word-\u003eProducer ByteString a()-\u003ea Bool",
          "package": "pipes-bytestring",
          "partial": "Elem",
          "signature": "Word-\u003eProducer ByteString m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the stream is empty\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "null",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m Bool",
          "source": "src/Pipes-ByteString.html#null",
          "type": "function"
        },
        "index": {
          "description": "Determine if the stream is empty",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "null",
          "normalized": "Producer ByteString a()-\u003ea Bool",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m()-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper isomorphism between a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "pack",
          "package": "pipes-bytestring",
          "signature": "Iso' (Producer Word8 m x) (Producer ByteString m x)",
          "source": "src/Pipes-ByteString.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Improper isomorphism between Producer of ByteString and Word8",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "pack",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekByte\u003c/a\u003e\u003c/code\u003e checks the first \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in the stream, but uses \u003ccode\u003e\u003ca\u003eunDrawByte\u003c/a\u003e\u003c/code\u003e to\n    push the \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e back\n\u003c/p\u003e\u003cpre\u003e peekByte = do\n     x \u003c- drawByte\n     case x of\n         Nothing -\u003e return ()\n         Just w8 -\u003e unDrawByte w8\n     return x\n\u003c/pre\u003e",
          "module": "Pipes.ByteString",
          "name": "peekByte",
          "package": "pipes-bytestring",
          "signature": "Parser ByteString m (Maybe Word8)",
          "source": "src/Pipes-ByteString.html#peekByte",
          "type": "function"
        },
        "index": {
          "description": "peekByte checks the first Word8 in the stream but uses unDrawByte to push the Word8 back peekByte do drawByte case of Nothing return Just w8 unDrawByte w8 return",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "peekByte",
          "package": "pipes-bytestring",
          "partial": "Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:peekByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left scan over the bytes\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "scan",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e Pipe ByteString ByteString m r",
          "source": "src/Pipes-ByteString.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Strict left scan over the bytes",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "scan",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003ePipe ByteString ByteString a b",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper lens that splits after the longest consecutive group of bytes that\n    satisfy the given predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "span",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Lens' (Producer ByteString m x) (Producer ByteString m (Producer ByteString m x))",
          "source": "src/Pipes-ByteString.html#span",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that splits after the longest consecutive group of bytes that satisfy the given predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "span",
          "normalized": "(Word-\u003eBool)-\u003eLens'(Producer ByteString a b)(Producer ByteString a(Producer ByteString a b))",
          "package": "pipes-bytestring",
          "signature": "(Word-\u003eBool)-\u003eLens'(Producer ByteString m x)(Producer ByteString m(Producer ByteString m x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper lens that splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e after the given number of bytes\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "splitAt",
          "package": "pipes-bytestring",
          "signature": "n -\u003e Lens' (Producer ByteString m x) (Producer ByteString m (Producer ByteString m x))",
          "source": "src/Pipes-ByteString.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that splits Producer after the given number of bytes",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "splitAt",
          "normalized": "a-\u003eLens'(Producer ByteString b c)(Producer ByteString b(Producer ByteString b c))",
          "package": "pipes-bytestring",
          "partial": "At",
          "signature": "n-\u003eLens'(Producer ByteString m x)(Producer ByteString m(Producer ByteString m x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a byte stream into groups separated by the given byte\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "splits",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Lens' (Producer ByteString m x) (FreeT (Producer ByteString m) m x)",
          "source": "src/Pipes-ByteString.html#splits",
          "type": "function"
        },
        "index": {
          "description": "Split byte stream into groups separated by the given byte",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "splits",
          "normalized": "Word-\u003eLens'(Producer ByteString a b)(FreeT(Producer ByteString a)a b)",
          "package": "pipes-bytestring",
          "signature": "Word-\u003eLens'(Producer ByteString m x)(FreeT(Producer ByteString m)m x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:splits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a byte stream into groups separated by bytes that satisfy the\n    predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "splitsWith",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m x -\u003e FreeT (Producer ByteString m) m x",
          "source": "src/Pipes-ByteString.html#splitsWith",
          "type": "function"
        },
        "index": {
          "description": "Split byte stream into groups separated by bytes that satisfy the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "splitsWith",
          "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
          "package": "pipes-bytestring",
          "partial": "With",
          "signature": "(Word-\u003eBool)-\u003eProducer ByteString m x-\u003eFreeT(Producer ByteString m)m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:splitsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream bytes from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "stdin",
          "package": "pipes-bytestring",
          "signature": "Producer' ByteString m ()",
          "source": "src/Pipes-ByteString.html#stdin",
          "type": "function"
        },
        "index": {
          "description": "Stream bytes from stdin",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "stdin",
          "normalized": "Producer' ByteString a()",
          "package": "pipes-bytestring",
          "signature": "Producer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream bytes to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003etoHandle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e gracefully terminates on a broken output pipe.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "stdout",
          "package": "pipes-bytestring",
          "signature": "Consumer' ByteString m ()",
          "source": "src/Pipes-ByteString.html#stdout",
          "type": "function"
        },
        "index": {
          "description": "Stream bytes to stdout Unlike toHandle stdout gracefully terminates on broken output pipe",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "stdout",
          "normalized": "Consumer' ByteString a()",
          "package": "pipes-bytestring",
          "signature": "Consumer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(take n)\u003c/code\u003e only allows \u003ccode\u003en\u003c/code\u003e bytes to pass\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "take",
          "package": "pipes-bytestring",
          "signature": "a -\u003e Pipe ByteString ByteString m ()",
          "source": "src/Pipes-ByteString.html#take",
          "type": "function"
        },
        "index": {
          "description": "take only allows bytes to pass",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "take",
          "normalized": "a-\u003ePipe ByteString ByteString b()",
          "package": "pipes-bytestring",
          "signature": "a-\u003ePipe ByteString ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake bytes until they fail the predicate\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "takeWhile",
          "package": "pipes-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m ()",
          "source": "src/Pipes-ByteString.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Take bytes until they fail the predicate",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a()",
          "package": "pipes-bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a byte stream into a \u003ccode\u003eHandle\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e p \u003e-\u003e toHandle handle = for p (liftIO . hPutStr handle)\n\u003c/pre\u003e",
          "module": "Pipes.ByteString",
          "name": "toHandle",
          "package": "pipes-bytestring",
          "signature": "Handle -\u003e Consumer' ByteString m r",
          "source": "src/Pipes-ByteString.html#toHandle",
          "type": "function"
        },
        "index": {
          "description": "Convert byte stream into Handle toHandle handle for liftIO hPutStr handle",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "toHandle",
          "normalized": "Handle-\u003eConsumer' ByteString a b",
          "package": "pipes-bytestring",
          "partial": "Handle",
          "signature": "Handle-\u003eConsumer' ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:toHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a pure \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a lazy\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "toLazy",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString Identity () -\u003e ByteString",
          "source": "src/Pipes-ByteString.html#toLazy",
          "type": "function"
        },
        "index": {
          "description": "Fold pure Producer of strict ByteString into lazy ByteString",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "toLazy",
          "normalized": "Producer ByteString Identity()-\u003eByteString",
          "package": "pipes-bytestring",
          "partial": "Lazy",
          "signature": "Producer ByteString Identity()-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:toLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold an effectful \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a lazy\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003etoLazyM\u003c/a\u003e\u003c/code\u003e is not an idiomatic use of \u003ccode\u003epipes\u003c/code\u003e, but I provide it for\n    simple testing purposes.  Idiomatic \u003ccode\u003epipes\u003c/code\u003e style consumes the chunks\n    immediately as they are generated instead of loading them all into memory.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "toLazyM",
          "package": "pipes-bytestring",
          "signature": "Producer ByteString m () -\u003e m ByteString",
          "source": "src/Pipes-ByteString.html#toLazyM",
          "type": "function"
        },
        "index": {
          "description": "Fold an effectful Producer of strict ByteString into lazy ByteString Note toLazyM is not an idiomatic use of pipes but provide it for simple testing purposes Idiomatic pipes style consumes the chunks immediately as they are generated instead of loading them all into memory",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "toLazyM",
          "normalized": "Producer ByteString a()-\u003ea ByteString",
          "package": "pipes-bytestring",
          "partial": "Lazy",
          "signature": "Producer ByteString m()-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:toLazyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush back a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e onto the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "unDrawByte",
          "package": "pipes-bytestring",
          "signature": "Word8 -\u003e Parser ByteString m ()",
          "source": "src/Pipes-ByteString.html#unDrawByte",
          "type": "function"
        },
        "index": {
          "description": "Push back Word8 onto the underlying Producer",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "unDrawByte",
          "normalized": "Word-\u003eParser ByteString a()",
          "package": "pipes-bytestring",
          "partial": "Draw Byte",
          "signature": "Word-\u003eParser ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:unDrawByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper lens that splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e after the first word\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e, this does not drop leading whitespace\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "word",
          "package": "pipes-bytestring",
          "signature": "Lens' (Producer ByteString m r) (Producer ByteString m (Producer ByteString m r))",
          "source": "src/Pipes-ByteString.html#word",
          "type": "function"
        },
        "index": {
          "description": "Improper lens that splits Producer after the first word Unlike words this does not drop leading whitespace Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "word",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproper isomorphism between a bytestream and its words\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
          "module": "Pipes.ByteString",
          "name": "words",
          "package": "pipes-bytestring",
          "signature": "Iso' (Producer ByteString m x) (FreeT (Producer ByteString m) m x)",
          "source": "src/Pipes-ByteString.html#words",
          "type": "function"
        },
        "index": {
          "description": "Improper isomorphism between bytestream and its words Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
          "hierarchy": "Pipes ByteString",
          "module": "Pipes.ByteString",
          "name": "words",
          "package": "pipes-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:words"
      }
    }
  ]
]