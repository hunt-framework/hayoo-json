[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing utilities for bytestrings, in the style of \u003ccode\u003epipes-parse\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Pipes-ByteString-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "Parsing utilities for bytestrings in the style of pipes-parse",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:drawByte",
      "description": {
        "fct-descr": "\u003cp\u003eDraw one \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "StateT (Producer ByteString m r) m (Either r Word8)",
        "fct-source": "src/Pipes-ByteString-Parse.html#drawByte",
        "fct-type": "function",
        "title": "drawByte"
      },
      "index": {
        "description": "Draw one Word8 from the underlying Producer returning Left if the Producer is empty",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "drawByte",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:isEndOfBytes",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has no more bytes\n\u003c/p\u003e\u003cp\u003eNote that this will skip over empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks, unlike\n    \u003ccode\u003e\u003ca\u003eisEndOfInput\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003epipes-parse\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e isEndOfBytes = liftM isLeft peekByte\n\u003c/pre\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "StateT (Producer ByteString m r) m Bool",
        "fct-source": "src/Pipes-ByteString-Parse.html#isEndOfBytes",
        "fct-type": "function",
        "title": "isEndOfBytes"
      },
      "index": {
        "description": "Check if the underlying Producer has no more bytes Note that this will skip over empty ByteString chunks unlike isEndOfInput from pipes-parse isEndOfBytes liftM isLeft peekByte",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "isEndOfBytes",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "End Of Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:nextByte",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the first byte from a byte stream\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e either fails with a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has no more bytes or\n    succeeds with a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e providing the next byte and the remainder of the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m r -\u003e m (Either r (Word8, Producer ByteString m r))",
        "fct-source": "src/Pipes-ByteString-Parse.html#nextByte",
        "fct-type": "function",
        "title": "nextByte"
      },
      "index": {
        "description": "Consume the first byte from byte stream next either fails with Left if the Producer has no more bytes or succeeds with Right providing the next byte and the remainder of the Producer",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "nextByte",
        "normalized": "Producer ByteString a b-\u003ea(Either b(Word,Producer ByteString a b))",
        "package": "pipes-bytestring",
        "partial": "Byte",
        "signature": "Producer ByteString m r-\u003em(Either r(Word,Producer ByteString m r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:peekByte",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekByte\u003c/a\u003e\u003c/code\u003e checks the first \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in the stream, but uses \u003ccode\u003e\u003ca\u003eunDrawByte\u003c/a\u003e\u003c/code\u003e to\n    push the \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e back\n\u003c/p\u003e\u003cpre\u003e peekByte = do\n     x \u003c- drawByte\n     case x of\n         Left  _  -\u003e return ()\n         Right w8 -\u003e unDrawByte w8\n     return x\n\u003c/pre\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "StateT (Producer ByteString m r) m (Either r Word8)",
        "fct-source": "src/Pipes-ByteString-Parse.html#peekByte",
        "fct-type": "function",
        "title": "peekByte"
      },
      "index": {
        "description": "peekByte checks the first Word8 in the stream but uses unDrawByte to push the Word8 back peekByte do drawByte case of Left return Right w8 unDrawByte w8 return",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "peekByte",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(take n)\u003c/code\u003e only allows \u003ccode\u003en\u003c/code\u003e bytes to pass\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003ePipes.ByteString.\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, this \u003ccode\u003e\u003ca\u003eunDraw\u003c/a\u003e\u003c/code\u003es unused\n    bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "a -\u003e Pipe ByteString ByteString (StateT (Producer ByteString m r) m) ()",
        "fct-source": "src/Pipes-ByteString-Parse.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take only allows bytes to pass Unlike Pipes.ByteString take this unDraw unused bytes",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "take",
        "normalized": "a-\u003ePipe ByteString ByteString(StateT(Producer ByteString b c)b)()",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "a-\u003ePipe ByteString ByteString(StateT(Producer ByteString m r)m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eTake bytes until they fail the predicate\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003ePipes.ByteString.\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, this \u003ccode\u003e\u003ca\u003eunDraw\u003c/a\u003e\u003c/code\u003es\n    unused bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString (StateT (Producer ByteString m r) m) ()",
        "fct-source": "src/Pipes-ByteString-Parse.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Take bytes until they fail the predicate Unlike Pipes.ByteString takeWhile this unDraw unused bytes",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "takeWhile",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString(StateT(Producer ByteString a b)a)()",
        "package": "pipes-bytestring",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString(StateT(Producer ByteString m r)m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString-Parse.html#v:unDrawByte",
      "description": {
        "fct-descr": "\u003cp\u003ePush back a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e onto the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString.Parse",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e StateT (Producer ByteString m r) m ()",
        "fct-source": "src/Pipes-ByteString-Parse.html#unDrawByte",
        "fct-type": "function",
        "title": "unDrawByte"
      },
      "index": {
        "description": "Push back Word8 onto the underlying Producer",
        "hierarchy": "Pipes ByteString Parse",
        "module": "Pipes.ByteString.Parse",
        "name": "unDrawByte",
        "normalized": "Word-\u003eStateT(Producer ByteString a b)a()",
        "package": "pipes-bytestring",
        "partial": "Draw Byte",
        "signature": "Word-\u003eStateT(Producer ByteString m r)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003epipes\u003c/code\u003e utilities for \"byte streams\", which are\n    streams of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es chunks.  Use byte streams to interact\n    with both \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es and lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eTo stream to or from \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es, use \u003ccode\u003e\u003ca\u003efromHandle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoHandle\u003c/a\u003e\u003c/code\u003e.  For\n    example, the following program copies data from one file to another:\n\u003c/p\u003e\u003cpre\u003e import Pipes\n import qualified Pipes.ByteString as P\n import System.IO\n\n main =\n     withFile \"inFile.txt\"  ReadMode  $ \\hIn  -\u003e\n     withFile \"outFile.txt\" WriteMode $ \\hOut -\u003e\n     runEffect $ P.fromHandle hIn \u003e-\u003e P.toHandle hOut\n\u003c/pre\u003e\u003cp\u003eYou can stream to and from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e using the predefined \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e proxies, like in the following \"echo\" program:\n\u003c/p\u003e\u003cpre\u003e main = runEffect $ P.stdin \u003e-\u003e P.stdout\n\u003c/pre\u003e\u003cp\u003eYou can also translate pure lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to and from proxies:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Lazy.Char8 as BL\n\n main = runEffect $ P.fromLazy (BL.pack \"Hello, world!\\n\") \u003e-\u003e P.stdout\n\u003c/pre\u003e\u003cp\u003eIn addition, this module provides many functions equivalent to lazy\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e functions so that you can transform or fold byte streams.  For\n    example, to stream only the first three lines of \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e you\n    would write:\n\u003c/p\u003e\u003cpre\u003e import Pipes\n import qualified Pipes.ByteString as PB\n import qualified Pipes.Parse      as PP\n\n main = runEffect $ takeLines 3 PB.stdin \u003e-\u003e PB.stdout\n   where\n     takeLines n = PB.unlines . PP.takeFree n . PB.lines\n\u003c/pre\u003e\u003cp\u003eThe above program will never bring more than one chunk (~ 32 KB) into\n    memory, no matter how long the lines are.\n\u003c/p\u003e\u003cp\u003eNote that functions in this library are designed to operate on streams that\n    are insensitive to chunk boundaries.  This means that they may freely split\n    chunks into smaller chunks and \u003cem\u003ediscard empty chunks\u003c/em\u003e.  However, they will\n    \u003cem\u003enever concatenate chunks\u003c/em\u003e in order to provide strict upper bounds on memory\n    usage.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Pipes-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "This module provides pipes utilities for byte streams which are streams of strict ByteString chunks Use byte streams to interact with both Handle and lazy ByteString To stream to or from Handle use fromHandle or toHandle For example the following program copies data from one file to another import Pipes import qualified Pipes.ByteString as import System.IO main withFile inFile.txt ReadMode hIn withFile outFile.txt WriteMode hOut runEffect P.fromHandle hIn P.toHandle hOut You can stream to and from stdin and stdout using the predefined stdin and stdout proxies like in the following echo program main runEffect P.stdin P.stdout You can also translate pure lazy ByteString to and from proxies import qualified Data.ByteString.Lazy.Char8 as BL main runEffect P.fromLazy BL.pack Hello world P.stdout In addition this module provides many functions equivalent to lazy ByteString functions so that you can transform or fold byte streams For example to stream only the first three lines of stdin to stdout you would write import Pipes import qualified Pipes.ByteString as PB import qualified Pipes.Parse as PP main runEffect takeLines PB.stdin PB.stdout where takeLines PB.unlines PP.takeFree PB.lines The above program will never bring more than one chunk KB into memory no matter how long the lines are Note that functions in this library are designed to operate on streams that are insensitive to chunk boundaries This means that they may freely split chunks into smaller chunks and discard empty chunks However they will never concatenate chunks in order to provide strict upper bounds on memory usage",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eFold that returns whether \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e received \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es satisfy the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m Bool",
        "fct-source": "src/Pipes-ByteString.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "Fold that returns whether All received Word8 satisfy the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "all",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea Bool",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eFold that returns whether \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e received \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es satisfy the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m Bool",
        "fct-source": "src/Pipes-ByteString.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "Fold that returns whether Any received Word8 satisfy the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "any",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea Bool",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream in two, where the first byte stream is the longest\n    consecutive group of bytes that don't satisfy the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m r -\u003e Producer ByteString m (Producer ByteString m r)",
        "fct-source": "src/Pipes-ByteString.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Split byte stream in two where the first byte stream is the longest consecutive group of bytes that don satisfy the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "break",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a b-\u003eProducer ByteString a(Producer ByteString a b)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m r-\u003eProducer ByteString m(Producer ByteString m r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:chunksOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream into \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited byte streams of fixed size\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "n -\u003e Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#chunksOf",
        "fct-type": "function",
        "title": "chunksOf"
      },
      "index": {
        "description": "Split byte stream into FreeT delimited byte streams of fixed size",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "chunksOf",
        "normalized": "a-\u003eProducer ByteString b c-\u003eFreeT(Producer ByteString b)b c",
        "package": "pipes-bytestring",
        "partial": "Of",
        "signature": "n-\u003eProducer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the byte stream and concatenate the results\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e ByteString) -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Map function over the byte stream and concatenate the results",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "concatMap",
        "normalized": "(Word-\u003eByteString)-\u003ePipe ByteString ByteString a b",
        "package": "pipes-bytestring",
        "partial": "Map",
        "signature": "(Word-\u003eByteString)-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eStore a tally of how many elements match the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Producer ByteString m () -\u003e m n",
        "fct-source": "src/Pipes-ByteString.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Store tally of how many elements match the given Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "count",
        "normalized": "Word-\u003eProducer ByteString a()-\u003ea b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Word-\u003eProducer ByteString m()-\u003em n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:drawByte",
      "description": {
        "fct-descr": "\u003cp\u003eDraw one \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "StateT (Producer ByteString m r) m (Either r Word8)",
        "fct-source": "src/Pipes-ByteString-Parse.html#drawByte",
        "fct-type": "function",
        "title": "drawByte"
      },
      "index": {
        "description": "Draw one Word8 from the underlying Producer returning Left if the Producer is empty",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "drawByte",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(drop n)\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "a -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop drops the first bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "drop",
        "normalized": "a-\u003ePipe ByteString ByteString b c",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "a-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eDrop bytes until they fail the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Drop bytes until they fail the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "dropWhile",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a b",
        "package": "pipes-bytestring",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether any element in the byte stream matches the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Producer ByteString m () -\u003e m Bool",
        "fct-source": "src/Pipes-ByteString.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "Determine whether any element in the byte stream matches the given Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "elem",
        "normalized": "Word-\u003eProducer ByteString a()-\u003ea Bool",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Word-\u003eProducer ByteString m()-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003eFind the index of an element that matches the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Producer ByteString m () -\u003e m (Maybe n)",
        "fct-source": "src/Pipes-ByteString.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "Find the index of an element that matches the given Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "elemIndex",
        "normalized": "Word-\u003eProducer ByteString a()-\u003ea(Maybe b)",
        "package": "pipes-bytestring",
        "partial": "Index",
        "signature": "Word-\u003eProducer ByteString m()-\u003em(Maybe n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:elemIndices",
      "description": {
        "fct-descr": "\u003cp\u003eStream all indices whose elements match the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Pipe ByteString n m r",
        "fct-source": "src/Pipes-ByteString.html#elemIndices",
        "fct-type": "function",
        "title": "elemIndices"
      },
      "index": {
        "description": "Stream all indices whose elements match the given Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "elemIndices",
        "normalized": "Word-\u003ePipe ByteString a b c",
        "package": "pipes-bytestring",
        "partial": "Indices",
        "signature": "Word-\u003ePipe ByteString n m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eOnly allows \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es to pass if they satisfy the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Only allows Word8 to pass if they satisfy the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "filter",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFind the first element in the stream that matches the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m (Maybe Word8)",
        "fct-source": "src/Pipes-ByteString.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Find the first element in the stream that matches the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "find",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea(Maybe Word)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003eStore the first index of an element that satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m () -\u003e m (Maybe n)",
        "fct-source": "src/Pipes-ByteString.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "Store the first index of an element that satisfies the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "findIndex",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a()-\u003ea(Maybe b)",
        "package": "pipes-bytestring",
        "partial": "Index",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m()-\u003em(Maybe n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:findIndices",
      "description": {
        "fct-descr": "\u003cp\u003eStream all indices whose elements satisfy the given predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString n m r",
        "fct-source": "src/Pipes-ByteString.html#findIndices",
        "fct-type": "function",
        "title": "findIndices"
      },
      "index": {
        "description": "Stream all indices whose elements satisfy the given predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "findIndices",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString a b c",
        "package": "pipes-bytestring",
        "partial": "Indices",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString n m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the stream of bytes using a strict left fold\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(x -\u003e Word8 -\u003e x) -\u003e x -\u003e (x -\u003e r) -\u003e Producer ByteString m () -\u003e m r",
        "fct-source": "src/Pipes-ByteString.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Reduce the stream of bytes using strict left fold",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "fold",
        "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003e(a-\u003eb)-\u003eProducer ByteString c()-\u003ec b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(x-\u003eWord-\u003ex)-\u003ex-\u003e(x-\u003er)-\u003eProducer ByteString m()-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:fromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e into a byte stream using a default chunk size\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Handle -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#fromHandle",
        "fct-type": "function",
        "title": "fromHandle"
      },
      "index": {
        "description": "Convert Handle into byte stream using default chunk size",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "fromHandle",
        "normalized": "Handle-\u003eProducer' ByteString a()",
        "package": "pipes-bytestring",
        "partial": "Handle",
        "signature": "Handle-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:fromLazy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "ByteString -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#fromLazy",
        "fct-type": "function",
        "title": "fromLazy"
      },
      "index": {
        "description": "Convert lazy ByteString into Producer of strict ByteString",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "fromLazy",
        "normalized": "ByteString-\u003eProducer' ByteString a()",
        "package": "pipes-bytestring",
        "partial": "Lazy",
        "signature": "ByteString-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eGroup a byte stream into \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited byte streams of identical bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Group byte stream into FreeT delimited byte streams of identical bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "group",
        "normalized": "Producer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eGroup a byte stream into \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited byte streams using the supplied\n    equality predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Group byte stream into FreeT delimited byte streams using the supplied equality predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "groupBy",
        "normalized": "(Word-\u003eWord-\u003eBool)-\u003eProducer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
        "package": "pipes-bytestring",
        "partial": "By",
        "signature": "(Word-\u003eWord-\u003eBool)-\u003eProducer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGet",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a handle into a byte stream using a fixed chunk size\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e waits until exactly the requested number of bytes are available for\n    each chunk.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Int -\u003e Handle -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#hGet",
        "fct-type": "function",
        "title": "hGet"
      },
      "index": {
        "description": "Convert handle into byte stream using fixed chunk size hGet waits until exactly the requested number of bytes are available for each chunk",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "hGet",
        "normalized": "Int-\u003eHandle-\u003eProducer' ByteString a()",
        "package": "pipes-bytestring",
        "partial": "Get",
        "signature": "Int-\u003eHandle-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGetN",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except you can vary the chunk size for each request\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Handle -\u003e Int -\u003e Server' Int ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#hGetN",
        "fct-type": "function",
        "title": "hGetN"
      },
      "index": {
        "description": "Like hGet except you can vary the chunk size for each request",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "hGetN",
        "normalized": "Handle-\u003eInt-\u003eServer' Int ByteString a()",
        "package": "pipes-bytestring",
        "partial": "Get",
        "signature": "Handle-\u003eInt-\u003eServer' Int ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGetSome",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a handle into a byte stream using a maximum chunk size\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e forwards input immediately as it becomes available, splitting the\n    input into multiple chunks if it exceeds the maximum chunk size.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Int -\u003e Handle -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#hGetSome",
        "fct-type": "function",
        "title": "hGetSome"
      },
      "index": {
        "description": "Convert handle into byte stream using maximum chunk size hGetSome forwards input immediately as it becomes available splitting the input into multiple chunks if it exceeds the maximum chunk size",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "hGetSome",
        "normalized": "Int-\u003eHandle-\u003eProducer' ByteString a()",
        "package": "pipes-bytestring",
        "partial": "Get Some",
        "signature": "Int-\u003eHandle-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:hGetSomeN",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e, except you can vary the maximum chunk size for each request\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Handle -\u003e Int -\u003e Server' Int ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#hGetSomeN",
        "fct-type": "function",
        "title": "hGetSomeN"
      },
      "index": {
        "description": "Like hGetSome except you can vary the maximum chunk size for each request",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "hGetSomeN",
        "normalized": "Handle-\u003eInt-\u003eServer' Int ByteString a()",
        "package": "pipes-bytestring",
        "partial": "Get Some",
        "signature": "Handle-\u003eInt-\u003eServer' Int ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the first \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
        "fct-source": "src/Pipes-ByteString.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Retrieve the first Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "head",
        "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003em(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eIndex into a byte stream\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "a -\u003e Producer ByteString m () -\u003e m (Maybe Word8)",
        "fct-source": "src/Pipes-ByteString.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Index into byte stream",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "index",
        "normalized": "a-\u003eProducer ByteString b()-\u003eb(Maybe Word)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "a-\u003eProducer ByteString m()-\u003em(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e concatenates the \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited byte streams after\n    interspersing a byte stream in between them\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e FreeT (Producer ByteString m) m r -\u003e Producer ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "intercalate concatenates the FreeT delimited byte streams after interspersing byte stream in between them",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "intercalate",
        "normalized": "Producer ByteString a()-\u003eFreeT(Producer ByteString a)a b-\u003eProducer ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003eFreeT(Producer ByteString m)m r-\u003eProducer ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003eIntersperse a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in between the bytes of the byte stream\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Producer ByteString m r -\u003e Producer ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "Intersperse Word8 in between the bytes of the byte stream",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "intersperse",
        "normalized": "Word-\u003eProducer ByteString a b-\u003eProducer ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Word-\u003eProducer ByteString m r-\u003eProducer ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:isEndOfBytes",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has no more bytes\n\u003c/p\u003e\u003cp\u003eNote that this will skip over empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks, unlike\n    \u003ccode\u003e\u003ca\u003eisEndOfInput\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003epipes-parse\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e isEndOfBytes = liftM isLeft peekByte\n\u003c/pre\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "StateT (Producer ByteString m r) m Bool",
        "fct-source": "src/Pipes-ByteString-Parse.html#isEndOfBytes",
        "fct-type": "function",
        "title": "isEndOfBytes"
      },
      "index": {
        "description": "Check if the underlying Producer has no more bytes Note that this will skip over empty ByteString chunks unlike isEndOfInput from pipes-parse isEndOfBytes liftM isLeft peekByte",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "isEndOfBytes",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "End Of Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the last \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
        "fct-source": "src/Pipes-ByteString.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Retrieve the last Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "last",
        "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003em(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m n",
        "fct-source": "src/Pipes-ByteString.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Count the number of bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "length",
        "normalized": "Producer ByteString a()-\u003ea b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003em n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream into \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited lines\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split byte stream into FreeT delimited lines Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "lines",
        "normalized": "Producer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply a transformation to each \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in the stream\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Word8) -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply transformation to each Word8 in the stream",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "map",
        "normalized": "(Word-\u003eWord)-\u003ePipe ByteString ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eWord)-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the maximum \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e within a byte stream\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
        "fct-source": "src/Pipes-ByteString.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "Return the maximum Word8 within byte stream",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "maximum",
        "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003em(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the minimum \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e within a byte stream\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m (Maybe Word8)",
        "fct-source": "src/Pipes-ByteString.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "Return the minimum Word8 within byte stream",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "minimum",
        "normalized": "Producer ByteString a()-\u003ea(Maybe Word)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003em(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:nextByte",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the first byte from a byte stream\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e either fails with a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e has no more bytes or\n    succeeds with a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e providing the next byte and the remainder of the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m r -\u003e m (Either r (Word8, Producer ByteString m r))",
        "fct-source": "src/Pipes-ByteString-Parse.html#nextByte",
        "fct-type": "function",
        "title": "nextByte"
      },
      "index": {
        "description": "Consume the first byte from byte stream next either fails with Left if the Producer has no more bytes or succeeds with Right providing the next byte and the remainder of the Producer",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "nextByte",
        "normalized": "Producer ByteString a b-\u003ea(Either b(Word,Producer ByteString a b))",
        "package": "pipes-bytestring",
        "partial": "Byte",
        "signature": "Producer ByteString m r-\u003em(Either r(Word,Producer ByteString m r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether all elements in the byte stream do not match the given\n    \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Producer ByteString m () -\u003e m Bool",
        "fct-source": "src/Pipes-ByteString.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "Determine whether all elements in the byte stream do not match the given Word8",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "notElem",
        "normalized": "Word-\u003eProducer ByteString a()-\u003ea Bool",
        "package": "pipes-bytestring",
        "partial": "Elem",
        "signature": "Word-\u003eProducer ByteString m()-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if the stream is empty\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m Bool",
        "fct-source": "src/Pipes-ByteString.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Determine if the stream is empty",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "null",
        "normalized": "Producer ByteString a()-\u003ea Bool",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m()-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e producer into a byte stream using a default chunk size\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer Word8 m () -\u003e Producer ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Convert Word8 producer into byte stream using default chunk size",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "pack",
        "normalized": "Producer Word a()-\u003eProducer ByteString a()",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer Word m()-\u003eProducer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:peekByte",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekByte\u003c/a\u003e\u003c/code\u003e checks the first \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e in the stream, but uses \u003ccode\u003e\u003ca\u003eunDrawByte\u003c/a\u003e\u003c/code\u003e to\n    push the \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e back\n\u003c/p\u003e\u003cpre\u003e peekByte = do\n     x \u003c- drawByte\n     case x of\n         Left  _  -\u003e return ()\n         Right w8 -\u003e unDrawByte w8\n     return x\n\u003c/pre\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "StateT (Producer ByteString m r) m (Either r Word8)",
        "fct-source": "src/Pipes-ByteString-Parse.html#peekByte",
        "fct-type": "function",
        "title": "peekByte"
      },
      "index": {
        "description": "peekByte checks the first Word8 in the stream but uses unDrawByte to push the Word8 back peekByte do drawByte case of Left return Right w8 unDrawByte w8 return",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "peekByte",
        "normalized": "",
        "package": "pipes-bytestring",
        "partial": "Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eStrict left scan over the bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Strict left scan over the bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "scan",
        "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003ePipe ByteString ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream in two, where the first byte stream is the longest\n    consecutive group of bytes that satisfy the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m r -\u003e Producer' ByteString m (Producer ByteString m r)",
        "fct-source": "src/Pipes-ByteString.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Split byte stream in two where the first byte stream is the longest consecutive group of bytes that satisfy the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "span",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a b-\u003eProducer' ByteString a(Producer ByteString a b)",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m r-\u003eProducer' ByteString m(Producer ByteString m r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream using the given \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e as the delimiter\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split byte stream using the given Word8 as the delimiter",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "split",
        "normalized": "Word-\u003eProducer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Word-\u003eProducer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e after the given number of bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "n -\u003e Producer ByteString m r -\u003e Producer' ByteString m (Producer ByteString m r)",
        "fct-source": "src/Pipes-ByteString.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Splits Producer after the given number of bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "splitAt",
        "normalized": "a-\u003eProducer ByteString b c-\u003eProducer' ByteString b(Producer ByteString b c)",
        "package": "pipes-bytestring",
        "partial": "At",
        "signature": "n-\u003eProducer ByteString m r-\u003eProducer' ByteString m(Producer ByteString m r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:splitWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream into sub-streams delimited by bytes that satisfy the\n    predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#splitWith",
        "fct-type": "function",
        "title": "splitWith"
      },
      "index": {
        "description": "Split byte stream into sub-streams delimited by bytes that satisfy the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "splitWith",
        "normalized": "(Word-\u003eBool)-\u003eProducer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
        "package": "pipes-bytestring",
        "partial": "With",
        "signature": "(Word-\u003eBool)-\u003eProducer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:stdin",
      "description": {
        "fct-descr": "\u003cp\u003eStream bytes from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer' ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#stdin",
        "fct-type": "function",
        "title": "stdin"
      },
      "index": {
        "description": "Stream bytes from stdin",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "stdin",
        "normalized": "Producer' ByteString a()",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:stdout",
      "description": {
        "fct-descr": "\u003cp\u003eStream bytes to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003etoHandle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e gracefully terminates on a broken output pipe.\n\u003c/p\u003e\u003cp\u003eNote: For best performance, use \u003ccode\u003e(for source (liftIO . putStr))\u003c/code\u003e instead of\n    \u003ccode\u003e(source \u003e-\u003e stdout)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Consumer' ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#stdout",
        "fct-type": "function",
        "title": "stdout"
      },
      "index": {
        "description": "Stream bytes to stdout Unlike toHandle stdout gracefully terminates on broken output pipe Note For best performance use for source liftIO putStr instead of source stdout",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "stdout",
        "normalized": "Consumer' ByteString a()",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Consumer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(take n)\u003c/code\u003e only allows \u003ccode\u003en\u003c/code\u003e bytes to pass\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "a -\u003e Pipe ByteString ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take only allows bytes to pass",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "take",
        "normalized": "a-\u003ePipe ByteString ByteString b()",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "a-\u003ePipe ByteString ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eTake bytes until they fail the predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m ()",
        "fct-source": "src/Pipes-ByteString.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Take bytes until they fail the predicate",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "takeWhile",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a()",
        "package": "pipes-bytestring",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:takeWhile-39-",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Pipes.ByteString.Parse.takeWhile instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eTake bytes until they fail the predicate\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, this \u003ccode\u003e\u003ca\u003eunDraw\u003c/a\u003e\u003c/code\u003es unused bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString (StateT (Producer ByteString m r) m) ()",
        "fct-source": "src/Pipes-ByteString.html#takeWhile%27",
        "fct-type": "function",
        "title": "takeWhile'"
      },
      "index": {
        "description": "Deprecated Use Pipes.ByteString.Parse.takeWhile instead Take bytes until they fail the predicate Unlike takeWhile this unDraw unused bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "takeWhile'",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString(StateT(Producer ByteString a b)a)()",
        "package": "pipes-bytestring",
        "partial": "While'",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString(StateT(Producer ByteString m r)m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:toHandle",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a byte stream into a \u003ccode\u003eHandle\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote: For best performance, use \u003ccode\u003e(for source (liftIO . hPutStr handle))\u003c/code\u003e\n    instead of \u003ccode\u003e(source \u003e-\u003e toHandle handle)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Handle -\u003e Consumer' ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#toHandle",
        "fct-type": "function",
        "title": "toHandle"
      },
      "index": {
        "description": "Convert byte stream into Handle Note For best performance use for source liftIO hPutStr handle instead of source toHandle handle",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "toHandle",
        "normalized": "Handle-\u003eConsumer' ByteString a b",
        "package": "pipes-bytestring",
        "partial": "Handle",
        "signature": "Handle-\u003eConsumer' ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:toLazy",
      "description": {
        "fct-descr": "\u003cp\u003eFold a pure \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a lazy\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString Identity () -\u003e ByteString",
        "fct-source": "src/Pipes-ByteString.html#toLazy",
        "fct-type": "function",
        "title": "toLazy"
      },
      "index": {
        "description": "Fold pure Producer of strict ByteString into lazy ByteString",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "toLazy",
        "normalized": "Producer ByteString Identity()-\u003eByteString",
        "package": "pipes-bytestring",
        "partial": "Lazy",
        "signature": "Producer ByteString Identity()-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:toLazyM",
      "description": {
        "fct-descr": "\u003cp\u003eFold an effectful \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a lazy\n    \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003etoLazyM\u003c/a\u003e\u003c/code\u003e is not an idiomatic use of \u003ccode\u003epipes\u003c/code\u003e, but I provide it for\n    simple testing purposes.  Idiomatic \u003ccode\u003epipes\u003c/code\u003e style consumes the chunks\n    immediately as they are generated instead of loading them all into memory.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m () -\u003e m ByteString",
        "fct-source": "src/Pipes-ByteString.html#toLazyM",
        "fct-type": "function",
        "title": "toLazyM"
      },
      "index": {
        "description": "Fold an effectful Producer of strict ByteString into lazy ByteString Note toLazyM is not an idiomatic use of pipes but provide it for simple testing purposes Idiomatic pipes style consumes the chunks immediately as they are generated instead of loading them all into memory",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "toLazyM",
        "normalized": "Producer ByteString a()-\u003ea ByteString",
        "package": "pipes-bytestring",
        "partial": "Lazy",
        "signature": "Producer ByteString m()-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:unDrawByte",
      "description": {
        "fct-descr": "\u003cp\u003ePush back a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e onto the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Word8 -\u003e StateT (Producer ByteString m r) m ()",
        "fct-source": "src/Pipes-ByteString-Parse.html#unDrawByte",
        "fct-type": "function",
        "title": "unDrawByte"
      },
      "index": {
        "description": "Push back Word8 onto the underlying Producer",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "unDrawByte",
        "normalized": "Word-\u003eStateT(Producer ByteString a b)a()",
        "package": "pipes-bytestring",
        "partial": "Draw Byte",
        "signature": "Word-\u003eStateT(Producer ByteString m r)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003eJoin \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited lines into a byte stream\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "FreeT (Producer ByteString m) m r -\u003e Producer ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#unlines",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "Join FreeT delimited lines into byte stream Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "unlines",
        "normalized": "FreeT(Producer ByteString a)a b-\u003eProducer ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "FreeT(Producer ByteString m)m r-\u003eProducer ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:unpack",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack the bytes\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Pipe ByteString Word8 m ()",
        "fct-source": "src/Pipes-ByteString.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "Unpack the bytes",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "unpack",
        "normalized": "Pipe ByteString Word a()",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Pipe ByteString Word m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003eJoin \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited words into a byte stream\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "FreeT (Producer ByteString m) m r -\u003e Producer ByteString m r",
        "fct-source": "src/Pipes-ByteString.html#unwords",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "Join FreeT delimited words into byte stream Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "unwords",
        "normalized": "FreeT(Producer ByteString a)a b-\u003eProducer ByteString a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "FreeT(Producer ByteString m)m r-\u003eProducer ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-bytestring/docs/Pipes-ByteString.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a byte stream into \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited words\n\u003c/p\u003e\u003cp\u003eNote: This function is purely for demonstration purposes since it assumes a\n    particular encoding.  You should prefer the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e equivalent of\n    this function from the upcoming \u003ccode\u003epipes-text\u003c/code\u003e library.\n\u003c/p\u003e",
        "fct-module": "Pipes.ByteString",
        "fct-package": "pipes-bytestring",
        "fct-signature": "Producer ByteString m r -\u003e FreeT (Producer ByteString m) m r",
        "fct-source": "src/Pipes-ByteString.html#words",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "Split byte stream into FreeT delimited words Note This function is purely for demonstration purposes since it assumes particular encoding You should prefer the Text equivalent of this function from the upcoming pipes-text library",
        "hierarchy": "Pipes ByteString",
        "module": "Pipes.ByteString",
        "name": "words",
        "normalized": "Producer ByteString a b-\u003eFreeT(Producer ByteString a)a b",
        "package": "pipes-bytestring",
        "partial": "",
        "signature": "Producer ByteString m r-\u003eFreeT(Producer ByteString m)m r"
      }
    }
  }
]