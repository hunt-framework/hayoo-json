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
        "word": "pipes-attoparsec-streaming"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the single function parse, which can be used to\n run an Attoparsec parser in a streaming fashion, which means that\n the parser is not only run incrementally across the input (which\n can be done with plain Attoparsec or packages like\n pipes-attoparsec), but that the parse results are delivered\n incrementally.  This package can be seen as a kind of dual to\n pipes-attoparsec: the latter runs parser incrementally over their\n input, whereas the former incrementally delivers output.\n\u003c/p\u003e\u003cp\u003eThe following example (to be found with comments in\n examples/MimeParser.hs in the source tarball) shows an example for\n parsing e-mail messages incrementally.\n\u003c/p\u003e\u003cpre\u003e import Control.Pipe.Attoparsec.Stream\n \n import Data.Word\n import Control.Pipe\n import Control.Pipe.Combinators as Combinators\n import Data.Attoparsec(Parser)\n import qualified Data.Attoparsec as A\n import qualified Data.Attoparsec.Char8 as A8\n import Data.ByteString(ByteString)\n import qualified Data.ByteString as B\n import Control.Applicative\n import Control.Monad.Trans.Class(lift)\n\n isToken :: Word8 -\u003e Bool\n isToken w = w \u003c= 127 && A.notInClass \"\\0-\\31()\u003c\u003e@,;:\\\\\\\"/[]?={} \\t\" w\n \n takeSpaces :: Parser ByteString\n takeSpaces = B.cons \u003c$\u003e A.satisfy A8.isHorizontalSpace \u003c*\u003e A.takeWhile A8.isHorizontalSpace\n \n endOfLine :: Parser ByteString\n endOfLine = (A.word8 10 \u003e\u003e return \"\\n\") \u003c|\u003e A.string \"\\r\\n\"\n \n takeAtMost :: Int -\u003e Parser ByteString\n takeAtMost n = A.scan n (\\ n' c -\u003e if n' == 0 then Nothing else (Just (n' - 1)))\n \n data Event\n   = Header ByteString ByteString [(ByteString, ByteString, ByteString)]\n   | EndOfHeader ByteString\n   | BodyChunk ByteString\n   | EndOfInput\n   deriving (Show)\n \n messageHeader :: Parser (PartialResult Event)\n messageHeader = do\n   header \u003c- B.cons \u003c$\u003e A.satisfy isToken \u003c*\u003e A.takeWhile isToken\n   delim \u003c- B.snoc \u003c$\u003e A.takeWhile A8.isHorizontalSpace \u003c*\u003e A8.char8 ':'\n   body \u003c-  (,,) \u003c$\u003e A.takeWhile A8.isHorizontalSpace \u003c*\u003e\n                     A.takeTill A8.isEndOfLine \u003c*\u003e endOfLine\n   bodies \u003c- many $ (,,) \u003c$\u003e takeSpaces \u003c*\u003e A.takeTill A8.isEndOfLine \u003c*\u003e endOfLine\n   return (PartialResult (Just (Header header delim (body:bodies))) (Just messageHeader))\n  \u003c|\u003e\n   return (PartialResult Nothing (Just headerEnd))\n \n headerEnd :: Parser (PartialResult Event)\n headerEnd = do\n   s \u003c- endOfLine\n   return $! PartialResult (Just (EndOfHeader s)) (Just bodyChunk)\n \n bodyChunk :: Parser (PartialResult Event)\n bodyChunk = do\n   s \u003c- takeAtMost 10\n   if B.null s\n     then return $ PartialResult (Just EndOfInput) Nothing\n     else return $ PartialResult (Just (BodyChunk s)) (Just bodyChunk)\n \n msg :: ByteString\n msg =\n   \"Received  : foo\\r\\n  cont'd\\r\\nDate: now\\r\\n\\r\\nblabla\\r\\nsecond line - longer\"\n \n dump :: Pipe Event Void IO ()\n dump = go\n  where\n    go = do\n      e \u003c- await\n      lift $ print e\n      go\n \n main :: IO ()\n main = do\n   runPipe $ fromList [msg] \u003e+\u003e parse messageHeader \u003e+\u003e dump\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "Stream",
          "package": "pipes-attoparsec-streaming",
          "source": "src/Control-Pipe-Attoparsec-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the single function parse which can be used to run an Attoparsec parser in streaming fashion which means that the parser is not only run incrementally across the input which can be done with plain Attoparsec or packages like pipes-attoparsec but that the parse results are delivered incrementally This package can be seen as kind of dual to pipes-attoparsec the latter runs parser incrementally over their input whereas the former incrementally delivers output The following example to be found with comments in examples MimeParser.hs in the source tarball shows an example for parsing e-mail messages incrementally import Control.Pipe.Attoparsec.Stream import Data.Word import Control.Pipe import Control.Pipe.Combinators as Combinators import Data.Attoparsec Parser import qualified Data.Attoparsec as import qualified Data.Attoparsec.Char8 as A8 import Data.ByteString ByteString import qualified Data.ByteString as import Control.Applicative import Control.Monad.Trans.Class lift isToken Word8 Bool isToken A.notInClass takeSpaces Parser ByteString takeSpaces B.cons A.satisfy A8.isHorizontalSpace A.takeWhile A8.isHorizontalSpace endOfLine Parser ByteString endOfLine A.word8 return A.string takeAtMost Int Parser ByteString takeAtMost A.scan if then Nothing else Just data Event Header ByteString ByteString ByteString ByteString ByteString EndOfHeader ByteString BodyChunk ByteString EndOfInput deriving Show messageHeader Parser PartialResult Event messageHeader do header B.cons A.satisfy isToken A.takeWhile isToken delim B.snoc A.takeWhile A8.isHorizontalSpace A8.char8 body A.takeWhile A8.isHorizontalSpace A.takeTill A8.isEndOfLine endOfLine bodies many takeSpaces A.takeTill A8.isEndOfLine endOfLine return PartialResult Just Header header delim body bodies Just messageHeader return PartialResult Nothing Just headerEnd headerEnd Parser PartialResult Event headerEnd do endOfLine return PartialResult Just EndOfHeader Just bodyChunk bodyChunk Parser PartialResult Event bodyChunk do takeAtMost if B.null then return PartialResult Just EndOfInput Nothing else return PartialResult Just BodyChunk Just bodyChunk msg ByteString msg Received foo cont nDate now nblabla nsecond line longer dump Pipe Event Void IO dump go where go do await lift print go main IO main do runPipe fromList msg parse messageHeader dump",
          "hierarchy": "Control Pipe Attoparsec Stream",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "Stream",
          "package": "pipes-attoparsec-streaming",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec-streaming/docs/Control-Pipe-Attoparsec-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsers which are to be used with the streaming parser Pipe must\n return values of the following type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first parameter of type \u003ccode\u003eMaybe a\u003c/code\u003e is the parser result. When\n it is a \u003ccode\u003eJust\u003c/code\u003e value, the carried value is delivered to the next\n Pipe in the Pipeline.  When it is \u003ccode\u003eNothing\u003c/code\u003e, no value is yield.\n\u003c/li\u003e\u003cli\u003e When the second parameter is a \u003ccode\u003eJust p\u003c/code\u003e, the parser \u003ccode\u003ep\u003c/code\u003e is used\n to continue the parsing process. When it is \u003ccode\u003eNothing\u003c/code\u003e, the parsing\n process ends and the Pipeline terminates.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "PartialResult",
          "package": "pipes-attoparsec-streaming",
          "source": "src/Control-Pipe-Attoparsec-Stream.html#PartialResult",
          "type": "data"
        },
        "index": {
          "description": "Parsers which are to be used with the streaming parser Pipe must return values of the following type The first parameter of type Maybe is the parser result When it is Just value the carried value is delivered to the next Pipe in the Pipeline When it is Nothing no value is yield When the second parameter is Just the parser is used to continue the parsing process When it is Nothing the parsing process ends and the Pipeline terminates",
          "hierarchy": "Control Pipe Attoparsec Stream",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "PartialResult",
          "package": "pipes-attoparsec-streaming",
          "partial": "Partial Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec-streaming/docs/Control-Pipe-Attoparsec-Stream.html#t:PartialResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the type of exceptions that may be thrown by the\n streaming parser.\n\u003c/p\u003e\u003cp\u003eCurrently, only one exception i defined: it reports Attoparsec\n parse errors.  The values carried by the exceptions are the parse\n context and the error message, just as in the \u003ccode\u003eFail\u003c/code\u003e case of\n Attoparsec's \u003ccode\u003eResult\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "StreamException",
          "package": "pipes-attoparsec-streaming",
          "source": "src/Control-Pipe-Attoparsec-Stream.html#StreamException",
          "type": "data"
        },
        "index": {
          "description": "This is the type of exceptions that may be thrown by the streaming parser Currently only one exception defined it reports Attoparsec parse errors The values carried by the exceptions are the parse context and the error message just as in the Fail case of Attoparsec Result type",
          "hierarchy": "Control Pipe Attoparsec Stream",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "StreamException",
          "package": "pipes-attoparsec-streaming",
          "partial": "Stream Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec-streaming/docs/Control-Pipe-Attoparsec-Stream.html#t:StreamException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing failed.\n\u003c/p\u003e",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "ParseException",
          "package": "pipes-attoparsec-streaming",
          "signature": "ParseException [String] String",
          "source": "src/Control-Pipe-Attoparsec-Stream.html#StreamException",
          "type": "function"
        },
        "index": {
          "description": "Parsing failed",
          "hierarchy": "Control Pipe Attoparsec Stream",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "ParseException",
          "normalized": "ParseException[String]String",
          "package": "pipes-attoparsec-streaming",
          "partial": "Parse Exception",
          "signature": "ParseException[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec-streaming/docs/Control-Pipe-Attoparsec-Stream.html#v:ParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "PartialResult",
          "package": "pipes-attoparsec-streaming",
          "signature": "PartialResult (Maybe a) (Maybe (Parser (PartialResult a)))",
          "source": "src/Control-Pipe-Attoparsec-Stream.html#PartialResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Attoparsec Stream",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "PartialResult",
          "package": "pipes-attoparsec-streaming",
          "partial": "Partial Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec-streaming/docs/Control-Pipe-Attoparsec-Stream.html#v:PartialResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function converts an Attoparsec parser over bytestrings\n which returns a \u003ccode\u003ePartialResult a\u003c/code\u003e into a Pipe that consumes a\n stream of bytestrings and delivers a stream of \u003ccode\u003ea\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "parse",
          "package": "pipes-attoparsec-streaming",
          "signature": "Parser (PartialResult a) -\u003e Pipe ByteString a m ()",
          "source": "src/Control-Pipe-Attoparsec-Stream.html#parse",
          "type": "function"
        },
        "index": {
          "description": "This function converts an Attoparsec parser over bytestrings which returns PartialResult into Pipe that consumes stream of bytestrings and delivers stream of values",
          "hierarchy": "Control Pipe Attoparsec Stream",
          "module": "Control.Pipe.Attoparsec.Stream",
          "name": "parse",
          "normalized": "Parser(PartialResult a)-\u003ePipe ByteString a b()",
          "package": "pipes-attoparsec-streaming",
          "signature": "Parser(PartialResult a)-\u003ePipe ByteString a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec-streaming/docs/Control-Pipe-Attoparsec-Stream.html#v:parse"
      }
    }
  ]
]