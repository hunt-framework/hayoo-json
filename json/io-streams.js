[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Attoparsec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for parsing values from \u003ccode\u003eInputStream\u003c/code\u003es using\n \u003ccode\u003eattoparsec\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Attoparsec",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Attoparsec.html",
        "fct-type": "module",
        "title": "Attoparsec"
      },
      "index": {
        "description": "This module provides support for parsing values from InputStream using attoparsec",
        "hierarchy": "System IO Streams Attoparsec",
        "module": "System.IO.Streams.Attoparsec",
        "name": "Attoparsec",
        "normalized": "",
        "package": "io-streams",
        "partial": "Attoparsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Attoparsec.html#t:ParseException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception raised when parsing fails.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Attoparsec",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal-Attoparsec.html#ParseException",
        "fct-type": "data",
        "title": "ParseException"
      },
      "index": {
        "description": "An exception raised when parsing fails",
        "hierarchy": "System IO Streams Attoparsec",
        "module": "System.IO.Streams.Attoparsec",
        "name": "ParseException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Attoparsec.html#v:ParseException",
      "description": {
        "fct-module": "System.IO.Streams.Attoparsec",
        "fct-package": "io-streams",
        "fct-signature": "ParseException String",
        "fct-source": "src/System-IO-Streams-Internal-Attoparsec.html#ParseException",
        "fct-type": "function",
        "title": "ParseException"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Attoparsec",
        "module": "System.IO.Streams.Attoparsec",
        "name": "ParseException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Attoparsec.html#v:parseFromStream",
      "description": {
        "fct-descr": "\u003cp\u003eSupplies an \u003ccode\u003eattoparsec\u003c/code\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, returning the\n final parsed value or a \u003ccode\u003e\u003ca\u003eParseException\u003c/a\u003e\u003c/code\u003e if parsing fails.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eparseFromStream\u003c/a\u003e\u003c/code\u003e consumes only as much input as necessary to satisfy the\n \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e and unconsumed input is pushed back onto the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e exhausts the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, it receives an \u003ccode\u003eEOF\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import \u003ca\u003eData.Attoparsec.ByteString.Char8\u003c/a\u003e\n ghci\u003e is \u003c- \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"12345xxx\" :: \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e]\n ghci\u003e \u003ccode\u003e\u003ca\u003eparseFromStream\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eisDigit\u003c/a\u003e\u003c/code\u003e) is\n \"12345\"\n ghci\u003e \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just \"xxx\"\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Attoparsec",
        "fct-package": "io-streams",
        "fct-signature": "Parser r -\u003e InputStream ByteString -\u003e IO r",
        "fct-source": "src/System-IO-Streams-Internal-Attoparsec.html#parseFromStream",
        "fct-type": "function",
        "title": "parseFromStream"
      },
      "index": {
        "description": "Supplies an attoparsec Parser with an InputStream returning the final parsed value or ParseException if parsing fails parseFromStream consumes only as much input as necessary to satisfy the Parser and unconsumed input is pushed back onto the InputStream If the Parser exhausts the InputStream it receives an EOF Example ghci import Data.Attoparsec.ByteString.Char8 ghci is fromList xxx ByteString ghci parseFromStream takeWhile isDigit is ghci read is Just xxx",
        "hierarchy": "System IO Streams Attoparsec",
        "module": "System.IO.Streams.Attoparsec",
        "name": "parseFromStream",
        "normalized": "Parser a-\u003eInputStream ByteString-\u003eIO a",
        "package": "io-streams",
        "partial": "From Stream",
        "signature": "Parser r-\u003eInputStream ByteString-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Attoparsec.html#v:parserToInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e yielding values of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e r\u003c/code\u003e, transforms an\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e over byte strings to an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e yielding values of type\n \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the parser yields \u003ccode\u003eJust x\u003c/code\u003e, then \u003ccode\u003ex\u003c/code\u003e will be passed along downstream, and\n if the parser yields \u003ccode\u003eNothing\u003c/code\u003e, that will be interpreted as end-of-stream.\n\u003c/p\u003e\u003cp\u003eUpon a parse error, \u003ccode\u003e\u003ca\u003eparserToInputStream\u003c/a\u003e\u003c/code\u003e will throw a \u003ccode\u003e\u003ca\u003eParseException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import \u003ca\u003eControl.Applicative\u003c/a\u003e\n ghci\u003e import \u003ca\u003eData.Attoparsec.ByteString.Char8\u003c/a\u003e\n ghci\u003e is \u003c- \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"1 2 3 4 5\" :: \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e]\n ghci\u003e let parser = (\u003ccode\u003e\u003ca\u003eendOfInput\u003c/a\u003e\u003c/code\u003e \u003e\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) \u003c|\u003e (Just \u003c$\u003e (\u003ccode\u003e\u003ca\u003eskipWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e *\u003e \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e))\n ghci\u003e \u003ccode\u003e\u003ca\u003eparserToInputStream\u003c/a\u003e\u003c/code\u003e parser is \u003e\u003e= \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [1,2,3,4,5]\n ghci\u003e is' \u003c- \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"1 2xx3 4 5\" :: \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e] \u003e\u003e= \u003ccode\u003e\u003ca\u003eparserToInputStream\u003c/a\u003e\u003c/code\u003e parser\n ghci\u003e \u003ccode\u003eread\u003c/code\u003e is'\n Just 1\n ghci\u003e \u003ccode\u003eread\u003c/code\u003e is'\n Just 2\n ghci\u003e \u003ccode\u003eread\u003c/code\u003e is'\n *** Exception: Parse exception: Failed reading: takeWhile1\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Attoparsec",
        "fct-package": "io-streams",
        "fct-signature": "Parser (Maybe r) -\u003e InputStream ByteString -\u003e IO (InputStream r)",
        "fct-source": "src/System-IO-Streams-Internal-Attoparsec.html#parserToInputStream",
        "fct-type": "function",
        "title": "parserToInputStream"
      },
      "index": {
        "description": "Given Parser yielding values of type Maybe transforms an InputStream over byte strings to an InputStream yielding values of type If the parser yields Just then will be passed along downstream and if the parser yields Nothing that will be interpreted as end-of-stream Upon parse error parserToInputStream will throw ParseException Example ghci import Control.Applicative ghci import Data.Attoparsec.ByteString.Char8 ghci is fromList ByteString ghci let parser endOfInput pure Nothing Just skipWhile isSpace decimal ghci parserToInputStream parser is toList ghci is fromList xx3 ByteString parserToInputStream parser ghci read is Just ghci read is Just ghci read is Exception Parse exception Failed reading takeWhile1",
        "hierarchy": "System IO Streams Attoparsec",
        "module": "System.IO.Streams.Attoparsec",
        "name": "parserToInputStream",
        "normalized": "Parser(Maybe a)-\u003eInputStream ByteString-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "To Input Stream",
        "signature": "Parser(Maybe r)-\u003eInputStream ByteString-\u003eIO(InputStream r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuffering for output streams based on bytestring builders.\n\u003c/p\u003e\u003cp\u003eBuffering an output stream can often improve throughput by reducing the\n number of system calls made through the file descriptor. The \u003ccode\u003eblaze-builder\u003c/code\u003e\n package provides an efficient set of primitives for serializing values\n directly to an output buffer.\n\u003c/p\u003e\u003cp\u003e(\u003cem\u003eN.B.\u003c/em\u003e: most of the \u003ccode\u003eblaze-builder\u003c/code\u003e package has been moved into\n \u003ccode\u003ebytestring\u003c/code\u003e in versions \u003e= 0.10; once two or three Haskell Platform\n editions have been released that contain \u003ccode\u003ebytestring\u003c/code\u003e 0.10 or higher, the\n dependency on \u003ccode\u003eblaze-builder\u003c/code\u003e will be dropped in favor of the native support\n for \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e contained in the \u003ccode\u003ebytestring\u003c/code\u003e package.)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUsing this module\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e taking \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e someOutputStream :: OutputStream ByteString\n\u003c/pre\u003e\u003cp\u003eYou create a new output stream wrapping the original one that accepts\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e values:\n\u003c/p\u003e\u003cpre\u003e\n do\n     newStream \u003c- Streams.\u003ccode\u003e\u003ca\u003ebuilderStream\u003c/a\u003e\u003c/code\u003e someOutputStream\n     Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e \"hello\") newStream\n     ....\n\u003c/pre\u003e\u003cp\u003eYou can flush the output buffer using \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n     ....\n     Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e) newStream\n     ....\n\u003c/pre\u003e\u003cp\u003eAs a convention, \u003ccode\u003e\u003ca\u003ebuilderStream\u003c/a\u003e\u003c/code\u003e will write the empty string to the wrapped\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e upon a builder buffer flush. Output streams which receive\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e should either ignore the empty string or interpret it as a\n signal to flush their own buffers, as the \u003ca\u003eSystem.IO.Streams.Zlib\u003c/a\u003e functions\n do.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e\n example :: IO [ByteString]\n example = do\n     let l1 = \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e \" \" [\"the\", \"quick\", \"brown\", \"fox\"]\n     let l2 = \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e \" \" [\"jumped\", \"over\", \"the\"]\n     let l  = map \u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e l1 ++ [\u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e] ++ map \u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e l2\n     is          \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e l\n     (os0, grab) \u003c- Streams.\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e\n     os          \u003c- Streams.\u003ccode\u003e\u003ca\u003ebuilderStream\u003c/a\u003e\u003c/code\u003e os0\n     Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is os \u003e\u003e grab\n\nghci\u003e example\n [\"the quick brown fox\",\"\",\"jumped over the\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Builder",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Buffering for output streams based on bytestring builders Buffering an output stream can often improve throughput by reducing the number of system calls made through the file descriptor The blaze-builder package provides an efficient set of primitives for serializing values directly to an output buffer N.B most of the blaze-builder package has been moved into bytestring in versions once two or three Haskell Platform editions have been released that contain bytestring or higher the dependency on blaze-builder will be dropped in favor of the native support for Builder contained in the bytestring package Using this module Given an OutputStream taking ByteString someOutputStream OutputStream ByteString You create new output stream wrapping the original one that accepts Builder values do newStream Streams builderStream someOutputStream Streams write Just fromByteString hello newStream You can flush the output buffer using flush Streams write Just flush newStream As convention builderStream will write the empty string to the wrapped OutputStream upon builder buffer flush Output streams which receive ByteString should either ignore the empty string or interpret it as signal to flush their own buffers as the System.IO.Streams.Zlib functions do Example example IO ByteString example do let l1 intersperse the quick brown fox let l2 intersperse jumped over the let map fromByteString l1 flush map fromByteString l2 is Streams fromList os0 grab Streams listOutputStream os Streams builderStream os0 Streams connect is os grab ghci example the quick brown fox jumped over the",
        "hierarchy": "System IO Streams Builder",
        "module": "System.IO.Streams.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "io-streams",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Builder.html#v:builderStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e sink into a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e sink.\n\u003c/p\u003e\u003cp\u003eNote that if the generated builder receives a\n \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e, by convention it will send an empty string\n to the supplied \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to indicate that any output\n buffers are to be flushed.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Builder",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString -\u003e IO (OutputStream Builder)",
        "fct-source": "src/System-IO-Streams-Builder.html#builderStream",
        "fct-type": "function",
        "title": "builderStream"
      },
      "index": {
        "description": "Converts ByteString sink into Builder sink Note that if the generated builder receives flush by convention it will send an empty string to the supplied OutputStream ByteString to indicate that any output buffers are to be flushed",
        "hierarchy": "System IO Streams Builder",
        "module": "System.IO.Streams.Builder",
        "name": "builderStream",
        "normalized": "OutputStream ByteString-\u003eIO(OutputStream Builder)",
        "package": "io-streams",
        "partial": "Stream",
        "signature": "OutputStream ByteString-\u003eIO(OutputStream Builder)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Builder.html#v:builderStreamWith",
      "description": {
        "fct-descr": "\u003cp\u003eA customized version of \u003ccode\u003e\u003ca\u003ebuilderStream\u003c/a\u003e\u003c/code\u003e, using the specified\n \u003ccode\u003e\u003ca\u003eBufferAllocStrategy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Builder",
        "fct-package": "io-streams",
        "fct-signature": "BufferAllocStrategy -\u003e OutputStream ByteString -\u003e IO (OutputStream Builder)",
        "fct-source": "src/System-IO-Streams-Builder.html#builderStreamWith",
        "fct-type": "function",
        "title": "builderStreamWith"
      },
      "index": {
        "description": "customized version of builderStream using the specified BufferAllocStrategy",
        "hierarchy": "System IO Streams Builder",
        "module": "System.IO.Streams.Builder",
        "name": "builderStreamWith",
        "normalized": "BufferAllocStrategy-\u003eOutputStream ByteString-\u003eIO(OutputStream Builder)",
        "package": "io-streams",
        "partial": "Stream With",
        "signature": "BufferAllocStrategy-\u003eOutputStream ByteString-\u003eIO(OutputStream Builder)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Builder.html#v:unsafeBuilderStream",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe variation on \u003ccode\u003e\u003ca\u003ebuilderStream\u003c/a\u003e\u003c/code\u003e that reuses an existing buffer for\n efficiency.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE\u003c/em\u003e: because the buffer is reused, subsequent \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values written\n to the wrapped \u003ccode\u003eOutputString\u003c/code\u003e will cause previous yielded strings to change.\n Do not retain references to these \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values inside the\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e you pass to this function, or you will violate referential\n transparency.\n\u003c/p\u003e\u003cp\u003eIf you \u003cem\u003emust\u003c/em\u003e retain copies of these values, then please use\n \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e to ensure that you have a fresh copy of the\n underlying string.\n\u003c/p\u003e\u003cp\u003eYou can create a Buffer with\n \u003ccode\u003e\u003ca\u003eallocBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Builder",
        "fct-package": "io-streams",
        "fct-signature": "IO Buffer -\u003e OutputStream ByteString -\u003e IO (OutputStream Builder)",
        "fct-source": "src/System-IO-Streams-Builder.html#unsafeBuilderStream",
        "fct-type": "function",
        "title": "unsafeBuilderStream"
      },
      "index": {
        "description": "Unsafe variation on builderStream that reuses an existing buffer for efficiency NOTE because the buffer is reused subsequent ByteString values written to the wrapped OutputString will cause previous yielded strings to change Do not retain references to these ByteString values inside the OutputStream you pass to this function or you will violate referential transparency If you must retain copies of these values then please use copy to ensure that you have fresh copy of the underlying string You can create Buffer with allocBuffer",
        "hierarchy": "System IO Streams Builder",
        "module": "System.IO.Streams.Builder",
        "name": "unsafeBuilderStream",
        "normalized": "IO Buffer-\u003eOutputStream ByteString-\u003eIO(OutputStream Builder)",
        "package": "io-streams",
        "partial": "Builder Stream",
        "signature": "IO Buffer-\u003eOutputStream ByteString-\u003eIO(OutputStream Builder)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream operations on \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Stream operations on ByteString",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "io-streams",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#t:MatchInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMatchInfo\u003c/a\u003e\u003c/code\u003e provides match information when performing string search.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal-Search.html#MatchInfo",
        "fct-type": "data",
        "title": "MatchInfo"
      },
      "index": {
        "description": "MatchInfo provides match information when performing string search",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "MatchInfo",
        "normalized": "",
        "package": "io-streams",
        "partial": "Match Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#t:RateTooSlowException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003ethrowIfTooSlow\u003c/a\u003e\u003c/code\u003e if input is not being produced fast enough by\n the given \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-ByteString.html#RateTooSlowException",
        "fct-type": "data",
        "title": "RateTooSlowException"
      },
      "index": {
        "description": "Thrown by throwIfTooSlow if input is not being produced fast enough by the given InputStream",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "RateTooSlowException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Rate Too Slow Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#t:ReadTooShortException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003ereadExactly\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etakeExactly\u003c/a\u003e\u003c/code\u003e when not enough bytes were\n available on the input.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-ByteString.html#ReadTooShortException",
        "fct-type": "data",
        "title": "ReadTooShortException"
      },
      "index": {
        "description": "Thrown by readExactly and takeExactly when not enough bytes were available on the input",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "ReadTooShortException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Read Too Short Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#t:TooFewBytesWrittenException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003egiveExactly\u003c/a\u003e\u003c/code\u003e when too few bytes were written to the produced\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-ByteString.html#TooFewBytesWrittenException",
        "fct-type": "data",
        "title": "TooFewBytesWrittenException"
      },
      "index": {
        "description": "Thrown by giveExactly when too few bytes were written to the produced OutputStream",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "TooFewBytesWrittenException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Too Few Bytes Written Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#t:TooManyBytesReadException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003ethrowIfProducesMoreThan\u003c/a\u003e\u003c/code\u003e when too many bytes were read from the\n original \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-ByteString.html#TooManyBytesReadException",
        "fct-type": "data",
        "title": "TooManyBytesReadException"
      },
      "index": {
        "description": "Thrown by throwIfProducesMoreThan when too many bytes were read from the original InputStream",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "TooManyBytesReadException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Too Many Bytes Read Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#t:TooManyBytesWrittenException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003ethrowIfConsumesMoreThan\u003c/a\u003e\u003c/code\u003e when too many bytes were sent to the\n produced \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-ByteString.html#TooManyBytesWrittenException",
        "fct-type": "data",
        "title": "TooManyBytesWrittenException"
      },
      "index": {
        "description": "Thrown by throwIfConsumesMoreThan when too many bytes were sent to the produced OutputStream",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "TooManyBytesWrittenException",
        "normalized": "",
        "package": "io-streams",
        "partial": "Too Many Bytes Written Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:Match",
      "description": {
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Match !ByteString",
        "fct-source": "src/System-IO-Streams-Internal-Search.html#MatchInfo",
        "fct-type": "function",
        "title": "Match"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "Match",
        "normalized": "",
        "package": "io-streams",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:NoMatch",
      "description": {
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "NoMatch !ByteString",
        "fct-source": "src/System-IO-Streams-Internal-Search.html#MatchInfo",
        "fct-type": "function",
        "title": "NoMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "NoMatch",
        "normalized": "",
        "package": "io-streams",
        "partial": "No Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:countInput",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, counting the number of bytes produced by the\n stream as a side effect. Produces a new \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e as well as an IO\n action to retrieve the count of bytes produced.\n\u003c/p\u003e\u003cp\u003eStrings pushed back to the returned \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e will be pushed back to the\n original stream, and the count of produced bytes will be subtracted\n accordingly.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"abc\", \"def\", \"ghi\"::ByteString]\n ghci\u003e (is', getCount) \u003c- Streams.\u003ccode\u003e\u003ca\u003ecountInput\u003c/a\u003e\u003c/code\u003e is\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Just \"abc\"\n ghci\u003e getCount\n 3\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e \"bc\" is'\n ghci\u003e getCount\n 1\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is\n Just \"bc\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e is'\n [\"bc\",\"def\",\"ghi\"]\n ghci\u003e getCount\n 9\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO (InputStream ByteString, IO Int64)",
        "fct-source": "src/System-IO-Streams-ByteString.html#countInput",
        "fct-type": "function",
        "title": "countInput"
      },
      "index": {
        "description": "Wraps an InputStream counting the number of bytes produced by the stream as side effect Produces new InputStream as well as an IO action to retrieve the count of bytes produced Strings pushed back to the returned InputStream will be pushed back to the original stream and the count of produced bytes will be subtracted accordingly Example ghci is Streams fromList abc def ghi ByteString ghci is getCount Streams countInput is ghci Streams read is Just abc ghci getCount ghci Streams unRead bc is ghci getCount ghci Streams peek is Just bc ghci Streams toList is bc def ghi ghci getCount",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "countInput",
        "normalized": "InputStream ByteString-\u003eIO(InputStream ByteString,IO Int)",
        "package": "io-streams",
        "partial": "Input",
        "signature": "InputStream ByteString-\u003eIO(InputStream ByteString,IO Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:countOutput",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, counting the number of bytes consumed by the\n stream as a side effect. Produces a new \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e as well as an IO\n action to retrieve the count of bytes consumed.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e (os :: OutputStream ByteString, getList) \u003c- Streams.\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e\n ghci\u003e (os', getCount) \u003c- Streams.\u003ccode\u003e\u003ca\u003ecountOutput\u003c/a\u003e\u003c/code\u003e os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"abc\", \"def\", \"ghi\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e os'\n ghci\u003e getList\n [\"abc\",\"def\",\"ghi\"]\n ghci\u003e getCount\n 9\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString -\u003e IO (OutputStream ByteString, IO Int64)",
        "fct-source": "src/System-IO-Streams-ByteString.html#countOutput",
        "fct-type": "function",
        "title": "countOutput"
      },
      "index": {
        "description": "Wraps an OutputStream counting the number of bytes consumed by the stream as side effect Produces new OutputStream as well as an IO action to retrieve the count of bytes consumed Example ghci os OutputStream ByteString getList Streams listOutputStream ghci os getCount Streams countOutput os ghci Streams fromList abc def ghi Streams connectTo os ghci getList abc def ghi ghci getCount",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "countOutput",
        "normalized": "OutputStream ByteString-\u003eIO(OutputStream ByteString,IO Int)",
        "package": "io-streams",
        "partial": "Output",
        "signature": "OutputStream ByteString-\u003eIO(OutputStream ByteString,IO Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "ByteString -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Creates an InputStream from ByteString",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "fromByteString",
        "normalized": "ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "Byte String",
        "signature": "ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:fromLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "ByteString -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#fromLazyByteString",
        "fct-type": "function",
        "title": "fromLazyByteString"
      },
      "index": {
        "description": "Creates an InputStream from lazy ByteString",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "fromLazyByteString",
        "normalized": "ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:giveBytes",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, producing a new stream that will pass along at\n most \u003ccode\u003en\u003c/code\u003e bytes to the wrapped stream, throwing any subsequent input away.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e (os :: OutputStream ByteString, getList) \u003c- Streams.\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e\n ghci\u003e os' \u003c- Streams.\u003ccode\u003e\u003ca\u003egiveBytes\u003c/a\u003e\u003c/code\u003e 6 os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"long \", \"string\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e os'\n ghci\u003e getList\n [\"long \",\"s\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e OutputStream ByteString-\u003e IO (OutputStream ByteString)",
        "fct-type": "function",
        "title": "giveBytes"
      },
      "index": {
        "description": "Wraps an OutputStream producing new stream that will pass along at most bytes to the wrapped stream throwing any subsequent input away Example ghci os OutputStream ByteString getList Streams listOutputStream ghci os Streams giveBytes os ghci Streams fromList long string Streams connectTo os ghci getList long",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "giveBytes",
        "normalized": "Int-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "Bytes",
        "signature": "Int-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:giveExactly",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, producing a new stream that will pass along\n exactly \u003ccode\u003en\u003c/code\u003e bytes to the wrapped stream. If the stream is sent more or fewer\n than the given number of bytes, the resulting stream will throw an exception\n (either \u003ccode\u003e\u003ca\u003eTooFewBytesWrittenException\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTooManyBytesWrittenException\u003c/a\u003e\u003c/code\u003e)\n during a call to \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"ok\"]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eoutputToList\u003c/a\u003e\u003c/code\u003e (Streams.\u003ccode\u003e\u003ca\u003egiveExactly\u003c/a\u003e\u003c/code\u003e 2 \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is)\n [\"ok\"]\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"ok\"]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eoutputToList\u003c/a\u003e\u003c/code\u003e (Streams.\u003ccode\u003e\u003ca\u003egiveExactly\u003c/a\u003e\u003c/code\u003e 1 \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is)\n *** Exception: Too many bytes written\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"ok\"]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eoutputToList\u003c/a\u003e\u003c/code\u003e (Streams.\u003ccode\u003e\u003ca\u003egiveExactly\u003c/a\u003e\u003c/code\u003e 3 \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is)\n *** Exception: Too few bytes written\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int64 -\u003e OutputStream ByteString -\u003e IO (OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#giveExactly",
        "fct-type": "function",
        "title": "giveExactly"
      },
      "index": {
        "description": "Wraps an OutputStream producing new stream that will pass along exactly bytes to the wrapped stream If the stream is sent more or fewer than the given number of bytes the resulting stream will throw an exception either TooFewBytesWrittenException or TooManyBytesWrittenException during call to write Example ghci is Streams fromList ok ghci Streams outputToList Streams giveExactly Streams connect is ok ghci is Streams fromList ok ghci Streams outputToList Streams giveExactly Streams connect is Exception Too many bytes written ghci is Streams fromList ok ghci Streams outputToList Streams giveExactly Streams connect is Exception Too few bytes written",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "giveExactly",
        "normalized": "Int-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "Exactly",
        "signature": "Int-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a bytestring \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e into lines. See \u003ccode\u003e\u003ca\u003esplitOn\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"Hello,\\n world!\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e\n ghci\u003e replicateM 3 (Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is)\n [Just \"Hello\", Just \", world!\", Nothing]\n\u003c/pre\u003e\u003cp\u003eNote that this may increase the chunk size if the input contains extremely\n long lines.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Splits bytestring InputStream into lines See splitOn and lines Example ghci is Streams fromList Hello world Streams lines ghci replicateM Streams read is Just Hello Just world Nothing Note that this may increase the chunk size if the input contains extremely long lines",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "lines",
        "normalized": "InputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:readExactly",
      "description": {
        "fct-descr": "\u003cp\u003eReads an \u003ccode\u003en\u003c/code\u003e-byte ByteString from an input stream. Throws a\n \u003ccode\u003e\u003ca\u003eReadTooShortException\u003c/a\u003e\u003c/code\u003e if fewer than \u003ccode\u003en\u003c/code\u003e bytes were available.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"long string\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003ereadExactly\u003c/a\u003e\u003c/code\u003e 6\n \"long s\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"short\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003ereadExactly\u003c/a\u003e\u003c/code\u003e 6\n *** Exception: Short read, expected 6 bytes\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int-\u003e InputStream ByteString-\u003e IO ByteString",
        "fct-type": "function",
        "title": "readExactly"
      },
      "index": {
        "description": "Reads an byte ByteString from an input stream Throws ReadTooShortException if fewer than bytes were available Example ghci Streams fromList long string Streams readExactly long ghci Streams fromList short Streams readExactly Exception Short read expected bytes",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "readExactly",
        "normalized": "Int-\u003eInputStream ByteString-\u003eIO ByteString",
        "package": "io-streams",
        "partial": "Exactly",
        "signature": "Int-\u003eInputStream ByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to look for (the \"needle\") and an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e,\n produces a new \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e which yields data of type \u003ccode\u003e\u003ca\u003eMatchInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"food\", \"oof\", \"oodles\", \"ok\"] \u003e\u003e=\n       \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e \"foo\" \u003e\u003e= \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [\u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e \"foo\",\u003ccode\u003e\u003ca\u003eNoMatch\u003c/a\u003e\u003c/code\u003e \"d\",\u003ccode\u003e\u003ca\u003eNoMatch\u003c/a\u003e\u003c/code\u003e \"oo\",\u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e \"foo\",\u003ccode\u003e\u003ca\u003eNoMatch\u003c/a\u003e\u003c/code\u003e \"dlesok\"]\n\u003c/pre\u003e\u003cp\u003eUses the Boyer-Moore-Horspool algorithm\n (\u003ca\u003ehttp://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "ByteString-\u003e InputStream ByteString-\u003e IO (InputStream MatchInfo)",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Given ByteString to look for the needle and an InputStream produces new InputStream which yields data of type MatchInfo Example ghci fromList food oof oodles ok search foo toList Match foo NoMatch NoMatch oo Match foo NoMatch dlesok Uses the Boyer-Moore-Horspool algorithm http en.wikipedia.org wiki Boyer E2 Moore E2 Horspool algorithm",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "search",
        "normalized": "ByteString-\u003eInputStream ByteString-\u003eIO(InputStream MatchInfo)",
        "package": "io-streams",
        "partial": "",
        "signature": "ByteString-\u003eInputStream ByteString-\u003eIO(InputStream MatchInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:splitOn",
      "description": {
        "fct-descr": "\u003cp\u003eSplits an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using a delimiter predicate.\n\u003c/p\u003e\u003cp\u003eNote that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e data pushed back with \u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e is *not* propagated upstream here.\n\u003c/li\u003e\u003cli\u003e the resulting \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e may hold an unbounded amount of the\n     bytestring in memory waiting for the function to return true, so this\n     function should not be used in unsafe contexts.\n\u003c/li\u003e\u003cli\u003e the delimiter is NOT included in the output.\n\u003c/li\u003e\u003cli\u003e consecutive delimiters are not merged.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"the quick br\", \"own  fox\"::\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e] \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003esplitOn\u003c/a\u003e\u003c/code\u003e (== ' ') \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [\"the\",\"quick\",\"brown\",\"\",\"fox\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "(Char -\u003e Bool)-\u003e InputStream ByteString-\u003e IO (InputStream ByteString)",
        "fct-type": "function",
        "title": "splitOn"
      },
      "index": {
        "description": "Splits an InputStream over ByteString using delimiter predicate Note that data pushed back with unRead is not propagated upstream here the resulting InputStream may hold an unbounded amount of the bytestring in memory waiting for the function to return true so this function should not be used in unsafe contexts the delimiter is NOT included in the output consecutive delimiters are not merged Example ghci Streams fromList the quick br own fox ByteString Streams splitOn Streams toList the quick brown fox",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "splitOn",
        "normalized": "(Char-\u003eBool)-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "On",
        "signature": "(Char-\u003eBool)-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:takeBytes",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, producing a new \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that will produce at\n most \u003ccode\u003en\u003c/code\u003e bytes, subsequently yielding end-of-stream forever.\n\u003c/p\u003e\u003cp\u003eStrings pushed back to the returned \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e will be propagated\n upstream, modifying the count of taken bytes accordingly.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"truncated\", \" string\"::ByteString]\n ghci\u003e is' \u003c- Streams.\u003ccode\u003e\u003ca\u003etakeBytes\u003c/a\u003e\u003c/code\u003e 9 is\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Just \"truncated\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Nothing\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is\n Just \" string\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e \"cated\" is'\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is\n Just \"cated\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is'\n Just \"cated\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Just \"cated\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Nothing\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just \" string\"\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e InputStream ByteString-\u003e IO (InputStream ByteString)",
        "fct-type": "function",
        "title": "takeBytes"
      },
      "index": {
        "description": "Wraps an InputStream producing new InputStream that will produce at most bytes subsequently yielding end-of-stream forever Strings pushed back to the returned InputStream will be propagated upstream modifying the count of taken bytes accordingly Example ghci is Streams fromList truncated string ByteString ghci is Streams takeBytes is ghci Streams read is Just truncated ghci Streams read is Nothing ghci Streams peek is Just string ghci Streams unRead cated is ghci Streams peek is Just cated ghci Streams peek is Just cated ghci Streams read is Just cated ghci Streams read is Nothing ghci Streams read is Just string",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "takeBytes",
        "normalized": "Int-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "Bytes",
        "signature": "Int-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:takeBytesWhile",
      "description": {
        "fct-descr": "\u003cp\u003eTakes from a stream until the given predicate is no longer satisfied.\n Returns Nothing on end-of-stream, or \u003ccode\u003eJust \"\"\u003c/code\u003e if the predicate is never\n satisfied. See \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"Hello, world!\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etakeBytesWhile\u003c/a\u003e\u003c/code\u003e (/= ',')\n Just \"Hello\"\n ghci\u003e import Data.Char\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"7 Samurai\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etakeBytesWhile\u003c/a\u003e\u003c/code\u003e isAlpha\n Just \"\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etakeBytesWhile\u003c/a\u003e\u003c/code\u003e isAlpha\n Nothing\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "(Char -\u003e Bool)-\u003e InputStream ByteString-\u003e IO (Maybe ByteString)",
        "fct-type": "function",
        "title": "takeBytesWhile"
      },
      "index": {
        "description": "Takes from stream until the given predicate is no longer satisfied Returns Nothing on end-of-stream or Just if the predicate is never satisfied See takeWhile and takeWhile Example ghci Streams fromList Hello world Streams takeBytesWhile Just Hello ghci import Data.Char ghci Streams fromList Samurai Streams takeBytesWhile isAlpha Just ghci Streams fromList Streams takeBytesWhile isAlpha Nothing",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "takeBytesWhile",
        "normalized": "(Char-\u003eBool)-\u003eInputStream ByteString-\u003eIO(Maybe ByteString)",
        "package": "io-streams",
        "partial": "Bytes While",
        "signature": "(Char-\u003eBool)-\u003eInputStream ByteString-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:takeExactly",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eStreams.\u003ccode\u003e\u003ca\u003etakeBytes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but throws \u003ccode\u003e\u003ca\u003eReadTooShortException\u003c/a\u003e\u003c/code\u003e when\n there aren't enough bytes present on the source.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e InputStream ByteString-\u003e IO (InputStream ByteString)",
        "fct-type": "function",
        "title": "takeExactly"
      },
      "index": {
        "description": "Like Streams takeBytes but throws ReadTooShortException when there aren enough bytes present on the source",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "takeExactly",
        "normalized": "Int-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "Exactly",
        "signature": "Int-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:throwIfConsumesMoreThan",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, producing a new stream that will pass along at\n most \u003ccode\u003en\u003c/code\u003e bytes to the wrapped stream. If more than \u003ccode\u003en\u003c/code\u003e bytes are sent to the\n outer stream, a \u003ccode\u003e\u003ca\u003eTooManyBytesWrittenException\u003c/a\u003e\u003c/code\u003e will be thrown.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: if more than \u003ccode\u003en\u003c/code\u003e bytes are sent to the outer stream,\n \u003ccode\u003e\u003ca\u003ethrowIfConsumesMoreThan\u003c/a\u003e\u003c/code\u003e will not necessarily send the first \u003ccode\u003en\u003c/code\u003e bytes\n through to the wrapped stream before throwing the exception.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e (os :: OutputStream ByteString, getList) \u003c- Streams.\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e\n ghci\u003e os' \u003c- Streams.\u003ccode\u003e\u003ca\u003ethrowIfConsumesMoreThan\u003c/a\u003e\u003c/code\u003e 5 os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"short\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e os'\n ghci\u003e getList\n [\"short\"]\n ghci\u003e os'' \u003c- Streams.\u003ccode\u003e\u003ca\u003ethrowIfConsumesMoreThan\u003c/a\u003e\u003c/code\u003e 5 os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"long\", \"string\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e os''\n *** Exception: Too many bytes written\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e OutputStream ByteString-\u003e IO (OutputStream ByteString)",
        "fct-type": "function",
        "title": "throwIfConsumesMoreThan"
      },
      "index": {
        "description": "Wraps an OutputStream producing new stream that will pass along at most bytes to the wrapped stream If more than bytes are sent to the outer stream TooManyBytesWrittenException will be thrown Note if more than bytes are sent to the outer stream throwIfConsumesMoreThan will not necessarily send the first bytes through to the wrapped stream before throwing the exception Example ghci os OutputStream ByteString getList Streams listOutputStream ghci os Streams throwIfConsumesMoreThan os ghci Streams fromList short Streams connectTo os ghci getList short ghci os Streams throwIfConsumesMoreThan os ghci Streams fromList long string Streams connectTo os Exception Too many bytes written",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "throwIfConsumesMoreThan",
        "normalized": "Int-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "If Consumes More Than",
        "signature": "Int-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:throwIfProducesMoreThan",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. If more than \u003ccode\u003en\u003c/code\u003e bytes are produced by this\n stream, \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e will throw a \u003ccode\u003e\u003ca\u003eTooManyBytesReadException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf a chunk yielded by the input stream would result in more than \u003ccode\u003en\u003c/code\u003e bytes\n being produced, \u003ccode\u003e\u003ca\u003ethrowIfProducesMoreThan\u003c/a\u003e\u003c/code\u003e will cut the generated string such\n that exactly \u003ccode\u003en\u003c/code\u003e bytes are yielded by the returned stream, and the\n \u003cem\u003esubsequent\u003c/em\u003e read will throw an exception. Example:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"abc\", \"def\", \"ghi\"] \u003e\u003e=\n             Streams.\u003ccode\u003e\u003ca\u003ethrowIfProducesMoreThan\u003c/a\u003e\u003c/code\u003e 5\n ghci\u003e \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e 2 (\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is)\n [Just \"abc\",Just \"de\"]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n *** Exception: Too many bytes read\n\u003c/pre\u003e\u003cp\u003eStrings pushed back to the returned \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e will be propagated\n upstream, modifying the count of taken bytes accordingly. Example:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is  \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"abc\", \"def\", \"ghi\"]\n ghci\u003e is' \u003c- Streams.\u003ccode\u003e\u003ca\u003ethrowIfProducesMoreThan\u003c/a\u003e\u003c/code\u003e 5 is\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Just \"abc\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e \"xyz\" is'\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is\n Just \"xyz\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just \"xyz\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just \"de\"\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n *** Exception: Too many bytes read\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e InputStream ByteString-\u003e IO (InputStream ByteString)",
        "fct-type": "function",
        "title": "throwIfProducesMoreThan"
      },
      "index": {
        "description": "Wraps an InputStream If more than bytes are produced by this stream read will throw TooManyBytesReadException If chunk yielded by the input stream would result in more than bytes being produced throwIfProducesMoreThan will cut the generated string such that exactly bytes are yielded by the returned stream and the subsequent read will throw an exception Example ghci is Streams fromList abc def ghi Streams throwIfProducesMoreThan ghci replicateM read is Just abc Just de ghci Streams read is Exception Too many bytes read Strings pushed back to the returned InputStream will be propagated upstream modifying the count of taken bytes accordingly Example ghci is Streams fromList abc def ghi ghci is Streams throwIfProducesMoreThan is ghci Streams read is Just abc ghci Streams unRead xyz is ghci Streams peek is Just xyz ghci Streams read is Just xyz ghci Streams read is Just de ghci Streams read is Exception Too many bytes read",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "throwIfProducesMoreThan",
        "normalized": "Int-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "If Produces More Than",
        "signature": "Int-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:throwIfTooSlow",
      "description": {
        "fct-descr": "\u003cp\u003eRate-limits an input stream. If the input stream is not read from faster\n than the given rate, reading from the wrapped stream will throw a\n \u003ccode\u003e\u003ca\u003eRateTooSlowException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eStrings pushed back to the returned \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e will be propagated up to\n the original stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "IO ()-\u003e Double-\u003e Int-\u003e InputStream ByteString-\u003e IO (InputStream ByteString)",
        "fct-type": "function",
        "title": "throwIfTooSlow"
      },
      "index": {
        "description": "Rate-limits an input stream If the input stream is not read from faster than the given rate reading from the wrapped stream will throw RateTooSlowException Strings pushed back to the returned InputStream will be propagated up to the original stream",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "throwIfTooSlow",
        "normalized": "IO()-\u003eDouble-\u003eInt-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "If Too Slow",
        "signature": "IO()-\u003eDouble-\u003eInt-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003eIntersperses string chunks sent to the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e with newlines.\n See \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e os \u003c- Streams.\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e Streams.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just \"Hello,\") os\n Hello\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e Nothing os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just \"world!\") os\n world!\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString -\u003e IO (OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#unlines",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "Intersperses string chunks sent to the given OutputStream with newlines See intersperse and unlines ghci os Streams unlines Streams stdout ghci Streams write Just Hello os Hello ghci Streams write Nothing os ghci Streams write Just world os world",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "unlines",
        "normalized": "OutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "OutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003eIntersperses string chunks sent to the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e with spaces.\n See \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e os \u003c- Streams.\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e Streams.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n ghci\u003e forM_ [Just \"Hello,\", Nothing, Just \"world!\\n\"] $ w -\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e w os\n Hello, world!\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString -\u003e IO (OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#unwords",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "Intersperses string chunks sent to the given OutputStream with spaces See intersperse and unwords ghci os Streams unwords Streams stdout ghci forM Just Hello Nothing Just world Streams write os Hello world",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "unwords",
        "normalized": "OutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "OutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a bytestring \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e into words. See \u003ccode\u003e\u003ca\u003esplitOn\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"Hello, world!\"] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e\n ghci\u003e replicateM 3 (Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is)\n [Just \"Hello,\", Just \"world!\", Nothing]\n\u003c/pre\u003e\u003cp\u003eNote that this may increase the chunk size if the input contains extremely\n long words.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-ByteString.html#words",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "Splits bytestring InputStream into words See splitOn and words Example ghci is Streams fromList Hello world Streams words ghci replicateM Streams read is Just Hello Just world Nothing Note that this may increase the chunk size if the input contains extremely long words",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "words",
        "normalized": "InputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-ByteString.html#v:writeLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewriteLazyByteString\u003c/a\u003e\u003c/code\u003e \"Test\\n\" Streams.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n Test\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.ByteString",
        "fct-package": "io-streams",
        "fct-signature": "ByteString-\u003e OutputStream ByteString-\u003e IO ()",
        "fct-type": "function",
        "title": "writeLazyByteString"
      },
      "index": {
        "description": "Writes lazy ByteString to an OutputStream Example ghci Streams writeLazyByteString Test Streams stdout Test",
        "hierarchy": "System IO Streams ByteString",
        "module": "System.IO.Streams.ByteString",
        "name": "writeLazyByteString",
        "normalized": "ByteString-\u003eOutputStream ByteString-\u003eIO()",
        "package": "io-streams",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eOutputStream ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric stream manipulations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Generic stream manipulations",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "io-streams",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eall predicate stream\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if every element in \u003ccode\u003estream\u003c/code\u003e matches\n the predicate.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e consumes as few elements as possible, ending consumption if any element\n fails the predicate.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e (\u003c 0) is    -- Consumes one element\n False\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just 2\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e odd is      -- Only 3 remains\n True\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e Bool) -\u003e InputStream a -\u003e IO Bool",
        "fct-source": "src/System-IO-Streams-Combinators.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all predicate stream returns True if every element in stream matches the predicate all consumes as few elements as possible ending consumption if any element fails the predicate ghci is Streams fromList ghci Streams all is Consumes one element False ghci Streams read is Just ghci Streams all odd is Only remains True",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eInputStream a-\u003eIO Bool",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eInputStream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eany predicate stream\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any element in \u003ccode\u003estream\u003c/code\u003e matches\n the predicate.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e consumes as few elements as possible, ending consumption if an element\n satisfies the predicate.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e (\u003e 0) is    -- Consumes one element\n True\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just 2\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e even is     -- Only 3 remains\n False\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e Bool) -\u003e InputStream a -\u003e IO Bool",
        "fct-source": "src/System-IO-Streams-Combinators.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any predicate stream returns True if any element in stream matches the predicate any consumes as few elements as possible ending consumption if an element satisfies the predicate ghci is Streams fromList ghci Streams any is Consumes one element True ghci Streams read is Just ghci Streams any even is Only remains False",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003eInputStream a-\u003eIO Bool",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eInputStream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:atEndOfInput",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, running the specified action when the stream\n yields end-of-file.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "IO b -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#atEndOfInput",
        "fct-type": "function",
        "title": "atEndOfInput"
      },
      "index": {
        "description": "Wraps an InputStream running the specified action when the stream yields end-of-file Since",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "atEndOfInput",
        "normalized": "IO a-\u003eInputStream b-\u003eIO(InputStream b)",
        "package": "io-streams",
        "partial": "End Of Input",
        "signature": "IO b-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:atEndOfOutput",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, running the specified action when the stream\n receives end-of-file.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "IO b -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#atEndOfOutput",
        "fct-type": "function",
        "title": "atEndOfOutput"
      },
      "index": {
        "description": "Wraps an OutputStream running the specified action when the stream receives end-of-file Since",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "atEndOfOutput",
        "normalized": "IO a-\u003eOutputStream b-\u003eIO(OutputStream b)",
        "package": "io-streams",
        "partial": "End Of Output",
        "signature": "IO b-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:contramap",
      "description": {
        "fct-descr": "\u003cp\u003eContravariant counterpart to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003econtramap f s\u003c/code\u003e passes all input to \u003ccode\u003es\u003c/code\u003e through the function \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSatisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e (g . f) === Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e g \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e f\n Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e b) -\u003e OutputStream b -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#contramap",
        "fct-type": "function",
        "title": "contramap"
      },
      "index": {
        "description": "Contravariant counterpart to map contramap passes all input to through the function Satisfies the following laws Streams contramap Streams contramap Streams contramap Streams contramap id return",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "contramap",
        "normalized": "(a-\u003eb)-\u003eOutputStream b-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eOutputStream b-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:contramapM",
      "description": {
        "fct-descr": "\u003cp\u003eContravariant counterpart to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003econtramapM f s\u003c/code\u003e passes all input to \u003ccode\u003es\u003c/code\u003e through the IO action \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSatisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003econtramapM\u003c/a\u003e\u003c/code\u003e (f \u003e=\u003e g) = Streams.\u003ccode\u003e\u003ca\u003econtramapM\u003c/a\u003e\u003c/code\u003e g \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003econtramapM\u003c/a\u003e\u003c/code\u003e f\n Streams.\u003ccode\u003e\u003ca\u003econtramapM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e IO b) -\u003e OutputStream b -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#contramapM",
        "fct-type": "function",
        "title": "contramapM"
      },
      "index": {
        "description": "Contravariant counterpart to mapM contramapM passes all input to through the IO action Satisfies the following laws Streams contramapM Streams contramapM Streams contramapM Streams contramapM return return",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "contramapM",
        "normalized": "(a-\u003eIO b)-\u003eOutputStream b-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eIO b)-\u003eOutputStream b-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:contramapM_",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e for output.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003econtramapM f s\u003c/code\u003e passes all input to \u003ccode\u003es\u003c/code\u003e through the side-effecting IO\n action \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e IO b) -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#contramapM_",
        "fct-type": "function",
        "title": "contramapM_"
      },
      "index": {
        "description": "Equivalent to mapM for output contramapM passes all input to through the side-effecting IO action",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "contramapM_",
        "normalized": "(a-\u003eIO b)-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eIO b)-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, producing a new \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that will drop the\n first \u003ccode\u003en\u003c/code\u003e items produced by the wrapped stream. See \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eItems pushed back to the returned \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e will be propagated upstream,\n modifying the count of dropped items accordingly.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "Int64 -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Wraps an InputStream producing new InputStream that will drop the first items produced by the wrapped stream See drop Items pushed back to the returned InputStream will be propagated upstream modifying the count of dropped items accordingly",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "drop",
        "normalized": "Int-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "Int-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eDrops chunks from an input stream if they fail to match a given filter\n predicate. See \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eItems pushed back to the returned stream are propagated back upstream.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"the\", \"quick\", \"brown\", \"fox\"] \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e (/= \"brown\") \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [\"the\",\"quick\",\"fox\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e Bool) -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Drops chunks from an input stream if they fail to match given filter predicate See filter Items pushed back to the returned stream are propagated back upstream Example ghci Streams fromList the quick brown fox Streams filter brown Streams toList the quick fox",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:filterM",
      "description": {
        "fct-descr": "\u003cp\u003eDrops chunks from an input stream if they fail to match a given filter\n predicate. See \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eItems pushed back to the returned stream are propagated back upstream.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"the\", \"quick\", \"brown\", \"fox\"] \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003efilterM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e . (/= \"brown\")) \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [\"the\",\"quick\",\"fox\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e IO Bool) -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "Drops chunks from an input stream if they fail to match given filter predicate See filter Items pushed back to the returned stream are propagated back upstream Example ghci Streams fromList the quick brown fox Streams filterM return brown Streams toList the quick fox",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "filterM",
        "normalized": "(a-\u003eIO Bool)-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eIO Bool)-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:filterOutput",
      "description": {
        "fct-descr": "\u003cp\u003eFilters output to be sent to the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e using a pure\n function. See \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import qualified \u003ca\u003eData.ByteString.Char8\u003c/a\u003e as S\n ghci\u003e os1 \u003c- Streams.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e \u003e\u003e= Streams.'System.IO.Streams.unlines\n ghci\u003e os2 \u003c- os1 \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e (S.pack . show) \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003efilterOutput\u003c/a\u003e\u003c/code\u003e even\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 3) os2\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 4) os2\n 4\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e Bool) -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#filterOutput",
        "fct-type": "function",
        "title": "filterOutput"
      },
      "index": {
        "description": "Filters output to be sent to the given OutputStream using pure function See filter Example ghci import qualified Data.ByteString.Char8 as ghci os1 Streams stdout Streams System.IO.Streams.unlines ghci os2 os1 Streams contramap S.pack show Streams filterOutput even ghci Streams write Just os2 ghci Streams write Just os2",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "filterOutput",
        "normalized": "(a-\u003eBool)-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output",
        "signature": "(a-\u003eBool)-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:filterOutputM",
      "description": {
        "fct-descr": "\u003cp\u003eFilters output to be sent to the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e using a predicate\n function in IO. See \u003ccode\u003e\u003ca\u003efilterM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e let check a = putStrLn a (\u003ca\u003eAllow \u003c/a\u003e ++ show a ++ \u003ca\u003e?\u003c/a\u003e) \u003e\u003e readLn :: IO Bool\n ghci\u003e import qualified Data.ByteString.Char8 as S\n ghci\u003e os1 \u003c- Streams.\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e Streams.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\n ghci\u003e os2 \u003c- os1 \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e (S.pack . show) \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003efilterOutputM\u003c/a\u003e\u003c/code\u003e check\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 3) os2\n Allow 3?\n False\u003cEnter\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 4) os2\n Allow 4?\n True\u003cEnter\u003e\n 4\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e IO Bool) -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#filterOutputM",
        "fct-type": "function",
        "title": "filterOutputM"
      },
      "index": {
        "description": "Filters output to be sent to the given OutputStream using predicate function in IO See filterM Example ghci let check putStrLn Allow show readLn IO Bool ghci import qualified Data.ByteString.Char8 as ghci os1 Streams unlines Streams stdout ghci os2 os1 Streams contramap S.pack show Streams filterOutputM check ghci Streams write Just os2 Allow False Enter ghci Streams write Just os2 Allow True Enter",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "filterOutputM",
        "normalized": "(a-\u003eIO Bool)-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output",
        "signature": "(a-\u003eIO Bool)-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eA left fold over an input stream. The input stream is fully consumed. See\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1..10] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e (+) 0\n 55\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(s -\u003e a -\u003e s)-\u003e s-\u003e InputStream a-\u003e IO s",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "left fold over an input stream The input stream is fully consumed See foldl Example ghci Streams fromList Streams fold",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eInputStream b-\u003eIO a",
        "package": "io-streams",
        "partial": "",
        "signature": "(s-\u003ea-\u003es)-\u003es-\u003eInputStream a-\u003eIO s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eA side-effecting left fold over an input stream. The input stream is fully\n consumed. See \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1..10] \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e (x y -\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (x + y)) 0\n 55\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(s -\u003e a -\u003e IO s)-\u003e s-\u003e InputStream a-\u003e IO s",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "side-effecting left fold over an input stream The input stream is fully consumed See foldl Example ghci Streams fromList Streams foldM return",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003eIO a)-\u003ea-\u003eInputStream b-\u003eIO a",
        "package": "io-streams",
        "partial": "",
        "signature": "(s-\u003ea-\u003eIO s)-\u003es-\u003eInputStream a-\u003eIO s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:give",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, producing a new \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that will pass at\n most \u003ccode\u003en\u003c/code\u003e items on to the wrapped stream, subsequently ignoring the rest of\n the input.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "Int64 -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#give",
        "fct-type": "function",
        "title": "give"
      },
      "index": {
        "description": "Wraps an OutputStream producing new OutputStream that will pass at most items on to the wrapped stream subsequently ignoring the rest of the input",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "give",
        "normalized": "Int-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "Int-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:ignore",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, producing a new \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that will ignore\n the first \u003ccode\u003en\u003c/code\u003e items received, subsequently passing the rest of the input on\n to the wrapped stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "Int64 -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#ignore",
        "fct-type": "function",
        "title": "ignore"
      },
      "index": {
        "description": "Wraps an OutputStream producing new OutputStream that will ignore the first items received subsequently passing the rest of the input on to the wrapped stream",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "ignore",
        "normalized": "Int-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "Int-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:ignoreEof",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, ignoring any end-of-stream \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e values\n written to the returned stream.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.1.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#ignoreEof",
        "fct-type": "function",
        "title": "ignoreEof"
      },
      "index": {
        "description": "Wraps an OutputStream ignoring any end-of-stream Nothing values written to the returned stream Since",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "ignoreEof",
        "normalized": "OutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Eof",
        "signature": "OutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:inputFoldM",
      "description": {
        "fct-descr": "\u003cp\u003eA side-effecting fold over an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, as a stream transformer.\n\u003c/p\u003e\u003cp\u003eThe IO action returned by \u003ccode\u003e\u003ca\u003einputFoldM\u003c/a\u003e\u003c/code\u003e can be used to fetch the updated seed\n value. Example:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3::Int]\n ghci\u003e (is', getSeed) \u003c- Streams.\u003ccode\u003e\u003ca\u003einputFoldM\u003c/a\u003e\u003c/code\u003e (\\x y -\u003e return (x+y)) 0 is\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e is'\n [1,2,3]\n ghci\u003e getSeed\n 6\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e b -\u003e IO a)-\u003e a-\u003e InputStream b-\u003e IO (InputStream b, IO a)",
        "fct-type": "function",
        "title": "inputFoldM"
      },
      "index": {
        "description": "side-effecting fold over an InputStream as stream transformer The IO action returned by inputFoldM can be used to fetch the updated seed value Example ghci is Streams fromList Int ghci is getSeed Streams inputFoldM return is ghci Streams toList is ghci getSeed",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "inputFoldM",
        "normalized": "(a-\u003eb-\u003eIO a)-\u003ea-\u003eInputStream b-\u003eIO(InputStream b,IO a)",
        "package": "io-streams",
        "partial": "Fold",
        "signature": "(a-\u003eb-\u003eIO a)-\u003ea-\u003eInputStream b-\u003eIO(InputStream b,IO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003eintersperse v s\u003c/code\u003e wraps the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e, creating a\n new output stream that writes its input to \u003ccode\u003es\u003c/code\u003e interspersed with the\n provided value \u003ccode\u003ev\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import Control.Monad ((\u003e=\u003e))\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"nom\", \"nom\", \"nom\"::\u003ccode\u003eByteString\u003c/code\u003e]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eoutputToList\u003c/a\u003e\u003c/code\u003e (Streams.\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e \"burp!\" \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is)\n [\"nom\",\"burp!\",\"nom\",\"burp!\",\"nom\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "a -\u003e OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "The function intersperse wraps the OutputStream creating new output stream that writes its input to interspersed with the provided value See intersperse Example ghci import Control.Monad ghci is Streams fromList nom nom nom ByteString ghci Streams outputToList Streams intersperse burp Streams connect is nom burp nom burp nom",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "intersperse",
        "normalized": "a-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "a-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a pure function over an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003emap f s\u003c/code\u003e passes all output from \u003ccode\u003es\u003c/code\u003e through the function \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSatisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (g . f) === Streams.\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e g\n Streams.\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e === Streams.\u003ccode\u003e\u003ca\u003emakeInputStream\u003c/a\u003e\u003c/code\u003e . Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e b) -\u003e InputStream a -\u003e IO (InputStream b)",
        "fct-source": "src/System-IO-Streams-Combinators.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Maps pure function over an InputStream map passes all output from through the function Satisfies the following laws Streams map Streams map Streams map Streams map id Streams makeInputStream Streams read",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eInputStream a-\u003eIO(InputStream b)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eInputStream a-\u003eIO(InputStream b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eMaps an impure function over an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003emapM f s\u003c/code\u003e passes all output from \u003ccode\u003es\u003c/code\u003e through the IO action \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSatisfies the following laws:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e (f \u003e=\u003e g) === Streams.\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f \u003e=\u003e Streams.\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e g\n Streams.\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e === Streams.\u003ccode\u003e\u003ca\u003emakeInputStream\u003c/a\u003e\u003c/code\u003e . Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e IO b) -\u003e InputStream a -\u003e IO (InputStream b)",
        "fct-source": "src/System-IO-Streams-Combinators.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Maps an impure function over an InputStream mapM passes all output from through the IO action Satisfies the following laws Streams mapM Streams mapM Streams mapM Streams mapM return Streams makeInputStream Streams read",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "mapM",
        "normalized": "(a-\u003eIO b)-\u003eInputStream a-\u003eIO(InputStream b)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eIO b)-\u003eInputStream a-\u003eIO(InputStream b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a side effect over an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003emapM_ f s\u003c/code\u003e produces a new input stream that passes all output from \u003ccode\u003es\u003c/code\u003e\n through the side-effecting IO action \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1,2,3] \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e . (*2)) \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n 2\n 4\n 6\n [1,2,3]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e IO b) -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Maps side effect over an InputStream mapM produces new input stream that passes all output from through the side-effecting IO action Example ghci Streams fromList Streams mapM putStrLn show Streams toList",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "mapM_",
        "normalized": "(a-\u003eIO b)-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "(a-\u003eIO b)-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emaximum stream\u003c/code\u003e returns the greatest element in \u003ccode\u003estream\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n the stream is empty.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e consumes the entire stream.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e is\n 3\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is     -- The stream is now empty\n Nothing\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "maximum stream returns the greatest element in stream or Nothing if the stream is empty maximum consumes the entire stream ghci is Streams fromList ghci Streams maximum is ghci Streams read is The stream is now empty Nothing",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "maximum",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eminimum stream\u003c/code\u003e returns the greatest element in \u003ccode\u003estream\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e consumes the entire stream.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e is\n 1\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is    -- The stream is now empty\n Nothing\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "minimum stream returns the greatest element in stream minimum consumes the entire stream ghci is Streams fromList ghci Streams minimum is ghci Streams read is The stream is now empty Nothing",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "minimum",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:outputFoldM",
      "description": {
        "fct-descr": "\u003cp\u003eA side-effecting fold over an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, as a stream transformer.\n\u003c/p\u003e\u003cp\u003eThe IO action returned by \u003ccode\u003e\u003ca\u003eoutputFoldM\u003c/a\u003e\u003c/code\u003e can be used to fetch the updated\n seed value. Example:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3::Int]\n ghci\u003e (os, getList) \u003c- Streams.\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e\n ghci\u003e (os', getSeed) \u003c- Streams.\u003ccode\u003e\u003ca\u003eoutputFoldM\u003c/a\u003e\u003c/code\u003e (\\x y -\u003e return (x+y)) 0 os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is os'\n ghci\u003e getList\n [1,2,3]\n ghci\u003e getSeed\n 6\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e b -\u003e IO a)-\u003e a-\u003e OutputStream b-\u003e IO (OutputStream b, IO a)",
        "fct-type": "function",
        "title": "outputFoldM"
      },
      "index": {
        "description": "side-effecting fold over an OutputStream as stream transformer The IO action returned by outputFoldM can be used to fetch the updated seed value Example ghci is Streams fromList Int ghci os getList Streams listOutputStream ghci os getSeed Streams outputFoldM return os ghci Streams connect is os ghci getList ghci getSeed",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "outputFoldM",
        "normalized": "(a-\u003eb-\u003eIO a)-\u003ea-\u003eOutputStream b-\u003eIO(OutputStream b,IO a)",
        "package": "io-streams",
        "partial": "Fold",
        "signature": "(a-\u003eb-\u003eIO a)-\u003ea-\u003eOutputStream b-\u003eIO(OutputStream b,IO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:skipToEof",
      "description": {
        "fct-descr": "\u003cp\u003eDrives an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to end-of-stream, discarding all of the yielded\n values.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Combinators.html#skipToEof",
        "fct-type": "function",
        "title": "skipToEof"
      },
      "index": {
        "description": "Drives an InputStream to end-of-stream discarding all of the yielded values",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "skipToEof",
        "normalized": "InputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To Eof",
        "signature": "InputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, producing a new \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that will produce at\n most \u003ccode\u003en\u003c/code\u003e items, subsequently yielding end-of-stream forever.\n\u003c/p\u003e\u003cp\u003eItems pushed back to the returned \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e will be propagated upstream,\n modifying the count of taken items accordingly.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003efromList\u003c/code\u003e [1..9::Int]\n ghci\u003e is' \u003c- Streams.\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e 1 is\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Just 1\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Nothing\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is\n Just 2\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e 11 is'\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is\n Just 11\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e is'\n Just 11\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Just 11\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is'\n Nothing\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is\n Just 2\n ghci\u003e Streams.\u003ccode\u003etoList\u003c/code\u003e is\n [3,4,5,6,7,8,9]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "Int64 -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Wraps an InputStream producing new InputStream that will produce at most items subsequently yielding end-of-stream forever Items pushed back to the returned InputStream will be propagated upstream modifying the count of taken items accordingly Example ghci is Streams fromList Int ghci is Streams take is ghci Streams read is Just ghci Streams read is Nothing ghci Streams peek is Just ghci Streams unRead is ghci Streams peek is Just ghci Streams peek is Just ghci Streams read is Just ghci Streams read is Nothing ghci Streams read is Just ghci Streams toList is",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "take",
        "normalized": "Int-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "",
        "signature": "Int-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:unfoldM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eunfoldM f seed\u003c/code\u003e builds an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e from successively applying \u003ccode\u003ef\u003c/code\u003e to\n the \u003ccode\u003eseed\u003c/code\u003e value, continuing if \u003ccode\u003ef\u003c/code\u003e produces \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and halting on\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003eunfoldM\u003c/a\u003e\u003c/code\u003e (n -\u003e return $ if n \u003c 3 then Just (n, n + 1) else Nothing) 0\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e is\n [0,1,2]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(b -\u003e IO (Maybe (a, b))) -\u003e b -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Combinators.html#unfoldM",
        "fct-type": "function",
        "title": "unfoldM"
      },
      "index": {
        "description": "unfoldM seed builds an InputStream from successively applying to the seed value continuing if produces Just and halting on Nothing ghci is Streams unfoldM return if then Just else Nothing ghci Streams toList is",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "unfoldM",
        "normalized": "(a-\u003eIO(Maybe(b,a)))-\u003ea-\u003eIO(InputStream b)",
        "package": "io-streams",
        "partial": "",
        "signature": "(b-\u003eIO(Maybe(a,b)))-\u003eb-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003eTakes apart a stream of pairs, producing a pair of input streams. Reading\n from either of the produced streams will cause a pair of values to be pulled\n from the original stream if necessary. Note that reading \u003ccode\u003en\u003c/code\u003e values from one\n of the returned streams will cause \u003ccode\u003en\u003c/code\u003e values to be buffered at the other\n stream.\n\u003c/p\u003e\u003cp\u003eAccess to the original stream is thread safe, i.e. guarded by a lock.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "InputStream (a, b) -\u003e IO (InputStream a, InputStream b)",
        "fct-source": "src/System-IO-Streams-Combinators.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "Takes apart stream of pairs producing pair of input streams Reading from either of the produced streams will cause pair of values to be pulled from the original stream if necessary Note that reading values from one of the returned streams will cause values to be buffered at the other stream Access to the original stream is thread safe i.e guarded by lock",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "unzip",
        "normalized": "InputStream(a,b)-\u003eIO(InputStream a,InputStream b)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream(a,b)-\u003eIO(InputStream a,InputStream b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two input streams. Continues yielding elements from both input\n streams until one of them finishes.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e InputStream b -\u003e IO (InputStream (a, b))",
        "fct-source": "src/System-IO-Streams-Combinators.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Combines two input streams Continues yielding elements from both input streams until one of them finishes",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "zip",
        "normalized": "InputStream a-\u003eInputStream b-\u003eIO(InputStream(a,b))",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eInputStream b-\u003eIO(InputStream(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two input streams using the supplied function. Continues yielding\n elements from both input streams until one of them finishes.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e InputStream a -\u003e InputStream b -\u003e IO (InputStream c)",
        "fct-source": "src/System-IO-Streams-Combinators.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Combines two input streams using the supplied function Continues yielding elements from both input streams until one of them finishes",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eInputStream a-\u003eInputStream b-\u003eIO(InputStream c)",
        "package": "io-streams",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eInputStream a-\u003eInputStream b-\u003eIO(InputStream c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Combinators.html#v:zipWithM",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two input streams using the supplied monadic function. Continues\n yielding elements from both input streams until one of them finishes.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Combinators",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e b -\u003e IO c) -\u003e InputStream a -\u003e InputStream b -\u003e IO (InputStream c)",
        "fct-source": "src/System-IO-Streams-Combinators.html#zipWithM",
        "fct-type": "function",
        "title": "zipWithM"
      },
      "index": {
        "description": "Combines two input streams using the supplied monadic function Continues yielding elements from both input streams until one of them finishes",
        "hierarchy": "System IO Streams Combinators",
        "module": "System.IO.Streams.Combinators",
        "name": "zipWithM",
        "normalized": "(a-\u003eb-\u003eIO c)-\u003eInputStream a-\u003eInputStream b-\u003eIO(InputStream c)",
        "package": "io-streams",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eIO c)-\u003eInputStream a-\u003eInputStream b-\u003eIO(InputStream c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Concurrent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream utilities for working with concurrent channels.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Concurrent",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Concurrent.html",
        "fct-type": "module",
        "title": "Concurrent"
      },
      "index": {
        "description": "Stream utilities for working with concurrent channels",
        "hierarchy": "System IO Streams Concurrent",
        "module": "System.IO.Streams.Concurrent",
        "name": "Concurrent",
        "normalized": "",
        "package": "io-streams",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Concurrent.html#v:chanToInput",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e into an input stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Concurrent",
        "fct-package": "io-streams",
        "fct-signature": "Chan (Maybe a) -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Concurrent.html#chanToInput",
        "fct-type": "function",
        "title": "chanToInput"
      },
      "index": {
        "description": "Turns Chan into an input stream",
        "hierarchy": "System IO Streams Concurrent",
        "module": "System.IO.Streams.Concurrent",
        "name": "chanToInput",
        "normalized": "Chan(Maybe a)-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "To Input",
        "signature": "Chan(Maybe a)-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Concurrent.html#v:chanToOutput",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e into an output stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Concurrent",
        "fct-package": "io-streams",
        "fct-signature": "Chan (Maybe a) -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Concurrent.html#chanToOutput",
        "fct-type": "function",
        "title": "chanToOutput"
      },
      "index": {
        "description": "Turns Chan into an output stream",
        "hierarchy": "System IO Streams Concurrent",
        "module": "System.IO.Streams.Concurrent",
        "name": "chanToOutput",
        "normalized": "Chan(Maybe a)-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "To Output",
        "signature": "Chan(Maybe a)-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Concurrent.html#v:concurrentMerge",
      "description": {
        "fct-descr": "\u003cp\u003eConcurrently merges a list of \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es, combining values in the\n order they become available.\n\u003c/p\u003e\u003cp\u003eNote: does \u003cem\u003enot\u003c/em\u003e forward individual end-of-stream notifications, the\n produced stream does not yield end-of-stream until all of the input streams\n have finished.\n\u003c/p\u003e\u003cp\u003eThis traps exceptions in each concurrent thread and re-raises them in the\n current thread.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Concurrent",
        "fct-package": "io-streams",
        "fct-signature": "[InputStream a] -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Concurrent.html#concurrentMerge",
        "fct-type": "function",
        "title": "concurrentMerge"
      },
      "index": {
        "description": "Concurrently merges list of InputStream combining values in the order they become available Note does not forward individual end-of-stream notifications the produced stream does not yield end-of-stream until all of the input streams have finished This traps exceptions in each concurrent thread and re-raises them in the current thread",
        "hierarchy": "System IO Streams Concurrent",
        "module": "System.IO.Streams.Concurrent",
        "name": "concurrentMerge",
        "normalized": "[InputStream a]-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Merge",
        "signature": "[InputStream a]-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Concurrent.html#v:inputToChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the contents of an input stream to a channel until the input stream\n yields end-of-stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Concurrent",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e Chan (Maybe a) -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Concurrent.html#inputToChan",
        "fct-type": "function",
        "title": "inputToChan"
      },
      "index": {
        "description": "Writes the contents of an input stream to channel until the input stream yields end-of-stream",
        "hierarchy": "System IO Streams Concurrent",
        "module": "System.IO.Streams.Concurrent",
        "name": "inputToChan",
        "normalized": "InputStream a-\u003eChan(Maybe a)-\u003eIO()",
        "package": "io-streams",
        "partial": "To Chan",
        "signature": "InputStream a-\u003eChan(Maybe a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Concurrent.html#v:makeChanPipe",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new pair of streams using an underlying \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e. Everything written\n to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e will appear as-is on the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince reading from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e and writing to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e are\n blocking calls, be sure to do so in different threads.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Concurrent",
        "fct-package": "io-streams",
        "fct-signature": "IO (InputStream a, OutputStream a)",
        "fct-source": "src/System-IO-Streams-Concurrent.html#makeChanPipe",
        "fct-type": "function",
        "title": "makeChanPipe"
      },
      "index": {
        "description": "Create new pair of streams using an underlying Chan Everything written to the OutputStream will appear as-is on the InputStream Since reading from the InputStream and writing to the OutputStream are blocking calls be sure to do so in different threads",
        "hierarchy": "System IO Streams Concurrent",
        "module": "System.IO.Streams.Concurrent",
        "name": "makeChanPipe",
        "normalized": "IO(InputStream a,OutputStream a)",
        "package": "io-streams",
        "partial": "Chan Pipe",
        "signature": "IO(InputStream a,OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore types and functions for the \u003ccode\u003eio-streams\u003c/code\u003e library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Core types and functions for the io-streams library",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "Core",
        "normalized": "",
        "package": "io-streams",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#t:Generator",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is a coroutine monad that can be used to define complex\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es. You can cause a value of type \u003ccode\u003eJust r\u003c/code\u003e to appear when the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is read by calling \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n g :: \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e Int ()\n g = do\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 1\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 2\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 3\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e can be turned into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e by calling\n \u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n m :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e]\n m = Streams.\u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e g \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e     -- value returned is [1,2,3]\n\u003c/pre\u003e\u003cp\u003eYou can perform IO by calling \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e, and turn a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e into an\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a general rule, you should not acquire resources that need to be freed\n from a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e, because there is no guarantee the coroutine continuation\n will ever be called, nor can you catch an exception from within a\n \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#Generator",
        "fct-type": "data",
        "title": "Generator"
      },
      "index": {
        "description": "Generator is coroutine monad that can be used to define complex InputStream You can cause value of type Just to appear when the InputStream is read by calling yield Generator Int do Streams yield Streams yield Streams yield Generator can be turned into an InputStream by calling fromGenerator IO Int Streams fromGenerator Streams toList value returned is You can perform IO by calling liftIO and turn Generator into an InputStream with fromGenerator As general rule you should not acquire resources that need to be freed from Generator because there is no guarantee the coroutine continuation will ever be called nor can you catch an exception from within Generator",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "Generator",
        "normalized": "",
        "package": "io-streams",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#t:InputStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e generates values of type \u003ccode\u003ec\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eTwo primitive operations are defined on \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e c)\u003c/code\u003e reads a value from the stream,\n where \"end of stream\" is signaled by \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e :: c -\u003e \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e \"pushes back\" a value to the\n stream.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is intended that \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es obey the following law:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e c stream \u003e\u003e \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e c)\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#InputStream",
        "fct-type": "data",
        "title": "InputStream"
      },
      "index": {
        "description": "An InputStream generates values of type in the IO monad Two primitive operations are defined on InputStream read InputStream IO Maybe reads value from the stream where end of stream is signaled by read returning Nothing unRead InputStream IO pushes back value to the stream It is intended that InputStream obey the following law unRead stream read stream return Just",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "InputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#t:OutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e consumes values of type \u003ccode\u003ec\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n The only primitive operation defined on \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eValues of type \u003ccode\u003ec\u003c/code\u003e are written in an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e by wrapping them in\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, and the end of the stream is indicated by by supplying \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you supply a value after a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the behavior is defined by the\n implementer of the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. (All \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e definitions in\n this library will simply discard the extra input.)\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#OutputStream",
        "fct-type": "data",
        "title": "OutputStream"
      },
      "index": {
        "description": "An OutputStream consumes values of type in the IO monad The only primitive operation defined on OutputStream is write Maybe OutputStream IO Values of type are written in an OutputStream by wrapping them in Just and the end of the stream is indicated by by supplying Nothing If you supply value after Nothing the behavior is defined by the implementer of the given OutputStream All OutputStream definitions in this library will simply discard the extra input",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "OutputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:atEOF",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is at end-of-stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO Bool",
        "fct-source": "src/System-IO-Streams-Internal.html#atEOF",
        "fct-type": "function",
        "title": "atEOF"
      },
      "index": {
        "description": "Checks if an InputStream is at end-of-stream",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "atEOF",
        "normalized": "InputStream a-\u003eIO Bool",
        "package": "io-streams",
        "partial": "EOF",
        "signature": "InputStream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, supplying values from the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, and propagating the end-of-stream\n message from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e through to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe connection ends when the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e yields a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connects an InputStream and OutputStream supplying values from the InputStream to the OutputStream and propagating the end-of-stream message from the InputStream through to the OutputStream The connection ends when the InputStream yields Nothing",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "connect",
        "normalized": "InputStream a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:connectTo",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e function is just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUseful for writing expressions like \u003ccode\u003efromList [1,2,3] \u003e\u003e= connectTo foo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#connectTo",
        "fct-type": "function",
        "title": "connectTo"
      },
      "index": {
        "description": "The connectTo function is just flip connect Useful for writing expressions like fromList connectTo foo",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "connectTo",
        "normalized": "OutputStream a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To",
        "signature": "OutputStream a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:fromGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "Generator r a -\u003e IO (InputStream r)",
        "fct-source": "src/System-IO-Streams-Internal.html#fromGenerator",
        "fct-type": "function",
        "title": "fromGenerator"
      },
      "index": {
        "description": "Turns Generator into an InputStream",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "fromGenerator",
        "normalized": "Generator a b-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Generator",
        "signature": "Generator r a-\u003eIO(InputStream r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:lockingInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e into a thread-safe \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, at a slight\n performance penalty.\n\u003c/p\u003e\u003cp\u003eFor performance reasons, this library provides non-thread-safe streams by\n default. Use the \u003ccode\u003elocking\u003c/code\u003e functions to convert these streams into slightly\n slower, but thread-safe, equivalents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#lockingInputStream",
        "fct-type": "function",
        "title": "lockingInputStream"
      },
      "index": {
        "description": "Converts an InputStream into thread-safe InputStream at slight performance penalty For performance reasons this library provides non-thread-safe streams by default Use the locking functions to convert these streams into slightly slower but thread-safe equivalents",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "lockingInputStream",
        "normalized": "InputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "InputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:lockingOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e into a thread-safe \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, at a slight\n performance penalty.\n\u003c/p\u003e\u003cp\u003eFor performance reasons, this library provides non-thread-safe streams by\n default. Use the \u003ccode\u003elocking\u003c/code\u003e functions to convert these streams into slightly\n slower, but thread-safe, equivalents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#lockingOutputStream",
        "fct-type": "function",
        "title": "lockingOutputStream"
      },
      "index": {
        "description": "Converts an OutputStream into thread-safe OutputStream at slight performance penalty For performance reasons this library provides non-thread-safe streams by default Use the locking functions to convert these streams into slightly slower but thread-safe equivalents",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "lockingOutputStream",
        "normalized": "OutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "OutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:makeInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e from a value-producing action.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003emakeInputStream m\u003c/code\u003e) calls the action \u003ccode\u003em\u003c/code\u003e each time you request a value\n from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. The given action is extended with the default\n pushback mechanism (see \u003ca\u003eSystem.IO.Streams.Internal\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "IO (Maybe a) -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#makeInputStream",
        "fct-type": "function",
        "title": "makeInputStream"
      },
      "index": {
        "description": "Creates an InputStream from value-producing action makeInputStream calls the action each time you request value from the InputStream The given action is extended with the default pushback mechanism see System.IO.Streams.Internal",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "makeInputStream",
        "normalized": "IO(Maybe a)-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "IO(Maybe a)-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:makeOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e from a value-consuming action.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003emakeOutputStream f\u003c/code\u003e) runs the computation \u003ccode\u003ef\u003c/code\u003e on each value fed to it.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "(Maybe a -\u003e IO ()) -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#makeOutputStream",
        "fct-type": "function",
        "title": "makeOutputStream"
      },
      "index": {
        "description": "Creates an OutputStream from value-consuming action makeOutputStream runs the computation on each value fed to it",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "makeOutputStream",
        "normalized": "(Maybe a-\u003eIO())-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "(Maybe a-\u003eIO())-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:nullInput",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e immediately.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#nullInput",
        "fct-type": "function",
        "title": "nullInput"
      },
      "index": {
        "description": "An empty InputStream that yields Nothing immediately",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "nullInput",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:nullOutput",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that discards any input fed to it.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#nullOutput",
        "fct-type": "function",
        "title": "nullOutput"
      },
      "index": {
        "description": "An empty OutputStream that discards any input fed to it",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "nullOutput",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eObserves the first value from an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e without consuming it.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is empty. \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e satisfies the\n following law:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e stream \u003e\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Observes the first value from an InputStream without consuming it Returns Nothing if the InputStream is empty peek satisfies the following law Streams peek stream Streams read stream Streams read stream",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "peek",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eReads one value from an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns either a value wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the end of the\n stream is reached.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Reads one value from an InputStream Returns either value wrapped in Just or Nothing if the end of the stream is reached",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "read",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:supply",
      "description": {
        "fct-descr": "\u003cp\u003eConnects an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e without passing the\n end-of-stream notification through to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse this to supply an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e with multiple \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es and use\n \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e for the final \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to finalize the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, like\n so:\n\u003c/p\u003e\u003cpre\u003e\n do Streams.\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e  input1 output\n    Streams.\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e  input2 output\n    Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e input3 output\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#supply",
        "fct-type": "function",
        "title": "supply"
      },
      "index": {
        "description": "Connects an InputStream to an OutputStream without passing the end-of-stream notification through to the OutputStream Use this to supply an OutputStream with multiple InputStream and use connect for the final InputStream to finalize the OutputStream like so do Streams supply input1 output Streams supply input2 output Streams connect input3 output",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "supply",
        "normalized": "InputStream a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:supplyTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e with the arguments flipped.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#supplyTo",
        "fct-type": "function",
        "title": "supplyTo"
      },
      "index": {
        "description": "supply with the arguments flipped",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "supplyTo",
        "normalized": "OutputStream a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To",
        "signature": "OutputStream a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:unRead",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a value back onto an input stream. \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e should\n satisfy the following law, with the possible exception of side effects:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e c stream \u003e\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e c)\n\u003c/pre\u003e\u003cp\u003eNote that this could be used to add values back to the stream that were not\n originally drawn from the stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#unRead",
        "fct-type": "function",
        "title": "unRead"
      },
      "index": {
        "description": "Pushes value back onto an input stream read and unRead should satisfy the following law with the possible exception of side effects Streams unRead stream Streams read stream return Just Note that this could be used to add values back to the stream that were not originally drawn from the stream",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "unRead",
        "normalized": "a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "Read",
        "signature": "a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds a value to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. Values of type \u003ccode\u003ec\u003c/code\u003e are written in an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e by wrapping them in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, and the end of the stream is\n indicated by by supplying \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "Maybe a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Feeds value to an OutputStream Values of type are written in an OutputStream by wrapping them in Just and the end of the stream is indicated by by supplying Nothing",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "write",
        "normalized": "Maybe a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "Maybe a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Core.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eCalling \u003ccode\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e causes the value \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e to appear on the input\n when this generator is converted to an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. The rest of the\n computation after the call to \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e is resumed later when the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Core",
        "fct-package": "io-streams",
        "fct-signature": "r -\u003e Generator r ()",
        "fct-source": "src/System-IO-Streams-Internal.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Calling yield causes the value Just to appear on the input when this generator is converted to an InputStream The rest of the computation after the call to yield is resumed later when the InputStream is read again",
        "hierarchy": "System IO Streams Core",
        "module": "System.IO.Streams.Core",
        "name": "yield",
        "normalized": "a-\u003eGenerator a()",
        "package": "io-streams",
        "partial": "",
        "signature": "r-\u003eGenerator r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Debug.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module for debugging streams. Provides stream transformers\n that wrap \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003es, sending a description of all\n data to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e for debugging.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Debug",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Debug.html",
        "fct-type": "module",
        "title": "Debug"
      },
      "index": {
        "description": "Convenience module for debugging streams Provides stream transformers that wrap InputStream and OutputStream sending description of all data to an OutputStream for debugging",
        "hierarchy": "System IO Streams Debug",
        "module": "System.IO.Streams.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "io-streams",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Debug.html#v:debugInput",
      "description": {
        "fct-module": "System.IO.Streams.Debug",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e ByteString)-\u003e ByteString-\u003e OutputStream ByteString-\u003e InputStream a-\u003e IO (InputStream a)",
        "fct-type": "function",
        "title": "debugInput"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Debug",
        "module": "System.IO.Streams.Debug",
        "name": "debugInput",
        "normalized": "(a-\u003eByteString)-\u003eByteString-\u003eOutputStream ByteString-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input",
        "signature": "(a-\u003eByteString)-\u003eByteString-\u003eOutputStream ByteString-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Debug.html#v:debugInputBS",
      "description": {
        "fct-module": "System.IO.Streams.Debug",
        "fct-package": "io-streams",
        "fct-signature": "ByteString-\u003e OutputStream ByteString-\u003e InputStream ByteString-\u003e IO (InputStream ByteString)",
        "fct-type": "function",
        "title": "debugInputBS"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Debug",
        "module": "System.IO.Streams.Debug",
        "name": "debugInputBS",
        "normalized": "ByteString-\u003eOutputStream ByteString-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "Input BS",
        "signature": "ByteString-\u003eOutputStream ByteString-\u003eInputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Debug.html#v:debugOutput",
      "description": {
        "fct-module": "System.IO.Streams.Debug",
        "fct-package": "io-streams",
        "fct-signature": "(a -\u003e ByteString)-\u003e ByteString-\u003e OutputStream ByteString-\u003e OutputStream a-\u003e IO (OutputStream a)",
        "fct-type": "function",
        "title": "debugOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Debug",
        "module": "System.IO.Streams.Debug",
        "name": "debugOutput",
        "normalized": "(a-\u003eByteString)-\u003eByteString-\u003eOutputStream ByteString-\u003eOutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output",
        "signature": "(a-\u003eByteString)-\u003eByteString-\u003eOutputStream ByteString-\u003eOutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Debug.html#v:debugOutputBS",
      "description": {
        "fct-module": "System.IO.Streams.Debug",
        "fct-package": "io-streams",
        "fct-signature": "ByteString-\u003e OutputStream ByteString-\u003e OutputStream ByteString-\u003e IO (OutputStream ByteString)",
        "fct-type": "function",
        "title": "debugOutputBS"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Debug",
        "module": "System.IO.Streams.Debug",
        "name": "debugOutputBS",
        "normalized": "ByteString-\u003eOutputStream ByteString-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "Output BS",
        "signature": "ByteString-\u003eOutputStream ByteString-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-File.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInput and output streams for files.\n\u003c/p\u003e\u003cp\u003eThe functions in this file use \"with*\" or \"bracket\" semantics, i.e. they\n open the supplied \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, run a user computation, and then close the\n file handle. If you need more control over the lifecycle of the underlying\n file descriptor resources, you are encouraged to use the functions from\n \u003ca\u003eSystem.IO.Streams.Handle\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.File",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-File.html",
        "fct-type": "module",
        "title": "File"
      },
      "index": {
        "description": "Input and output streams for files The functions in this file use with or bracket semantics i.e they open the supplied FilePath run user computation and then close the file handle If you need more control over the lifecycle of the underlying file descriptor resources you are encouraged to use the functions from System.IO.Streams.Handle instead",
        "hierarchy": "System IO Streams File",
        "module": "System.IO.Streams.File",
        "name": "File",
        "normalized": "",
        "package": "io-streams",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-File.html#v:unsafeWithFileAsInputStartingAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithFileAsInputStartingAt\u003c/a\u003e\u003c/code\u003e, except that the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e emitted by\n the created \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e may reuse its buffer. You may only use this\n function if you do not retain references to the generated bytestrings\n emitted.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.File",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e FilePath-\u003e (InputStream ByteString -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "unsafeWithFileAsInputStartingAt"
      },
      "index": {
        "description": "Like withFileAsInputStartingAt except that the ByteString emitted by the created InputStream may reuse its buffer You may only use this function if you do not retain references to the generated bytestrings emitted",
        "hierarchy": "System IO Streams File",
        "module": "System.IO.Streams.File",
        "name": "unsafeWithFileAsInputStartingAt",
        "normalized": "Int-\u003eFilePath-\u003e(InputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "io-streams",
        "partial": "With File As Input Starting At",
        "signature": "Int-\u003eFilePath-\u003e(InputStream ByteString-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-File.html#v:withFileAsInput",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithFileAsInput\u003c/a\u003e\u003c/code\u003e name act\u003c/code\u003e opens the specified file in \"read mode\" and\n passes the resulting \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to the computation \u003ccode\u003eact\u003c/code\u003e. The file will\n be closed on exit from \u003ccode\u003ewithFileAsInput\u003c/code\u003e, whether by normal termination or\n by raising an exception.\n\u003c/p\u003e\u003cp\u003eIf closing the file raises an exception, then \u003cem\u003ethat\u003c/em\u003e exception will be\n raised by \u003ccode\u003e\u003ca\u003ewithFileAsInput\u003c/a\u003e\u003c/code\u003e rather than any exception raised by \u003ccode\u003eact\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.File",
        "fct-package": "io-streams",
        "fct-signature": "FilePath-\u003e (InputStream ByteString -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withFileAsInput"
      },
      "index": {
        "description": "withFileAsInput name act opens the specified file in read mode and passes the resulting InputStream to the computation act The file will be closed on exit from withFileAsInput whether by normal termination or by raising an exception If closing the file raises an exception then that exception will be raised by withFileAsInput rather than any exception raised by act",
        "hierarchy": "System IO Streams File",
        "module": "System.IO.Streams.File",
        "name": "withFileAsInput",
        "normalized": "FilePath-\u003e(InputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "io-streams",
        "partial": "File As Input",
        "signature": "FilePath-\u003e(InputStream ByteString-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-File.html#v:withFileAsInputStartingAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithFileAsInput\u003c/a\u003e\u003c/code\u003e, but seeks to the specified byte offset before\n attaching the given file descriptor to the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.File",
        "fct-package": "io-streams",
        "fct-signature": "Int64-\u003e FilePath-\u003e (InputStream ByteString -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withFileAsInputStartingAt"
      },
      "index": {
        "description": "Like withFileAsInput but seeks to the specified byte offset before attaching the given file descriptor to the InputStream",
        "hierarchy": "System IO Streams File",
        "module": "System.IO.Streams.File",
        "name": "withFileAsInputStartingAt",
        "normalized": "Int-\u003eFilePath-\u003e(InputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "io-streams",
        "partial": "File As Input Starting At",
        "signature": "Int-\u003eFilePath-\u003e(InputStream ByteString-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-File.html#v:withFileAsOutput",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file for writing and  attaches an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e for you to write\n to. The file will be closed on error or completion of your action.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.File",
        "fct-package": "io-streams",
        "fct-signature": "FilePath-\u003e (OutputStream ByteString -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withFileAsOutput"
      },
      "index": {
        "description": "Open file for writing and attaches an OutputStream for you to write to The file will be closed on error or completion of your action",
        "hierarchy": "System IO Streams File",
        "module": "System.IO.Streams.File",
        "name": "withFileAsOutput",
        "normalized": "FilePath-\u003e(OutputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "io-streams",
        "partial": "File As Output",
        "signature": "FilePath-\u003e(OutputStream ByteString-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-File.html#v:withFileAsOutputExt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithFileAsOutput\u003c/a\u003e\u003c/code\u003e, but allowing you control over the output file\n mode and buffering behaviour.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.File",
        "fct-package": "io-streams",
        "fct-signature": "FilePath-\u003e IOMode-\u003e BufferMode-\u003e (OutputStream ByteString -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withFileAsOutputExt"
      },
      "index": {
        "description": "Like withFileAsOutput but allowing you control over the output file mode and buffering behaviour",
        "hierarchy": "System IO Streams File",
        "module": "System.IO.Streams.File",
        "name": "withFileAsOutputExt",
        "normalized": "FilePath-\u003eIOMode-\u003eBufferMode-\u003e(OutputStream ByteString-\u003eIO a)-\u003eIO a",
        "package": "io-streams",
        "partial": "File As Output Ext",
        "signature": "FilePath-\u003eIOMode-\u003eBufferMode-\u003e(OutputStream ByteString-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInput and output streams for file \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Handle.html",
        "fct-type": "module",
        "title": "Handle"
      },
      "index": {
        "description": "Input and output streams for file Handle",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "Handle",
        "normalized": "",
        "package": "io-streams",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:handleToInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a read-only handle into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eNote that the wrapped handle is \u003cem\u003enot\u003c/em\u003e closed when it yields end-of-stream;\n you can use \u003ccode\u003e\u003ca\u003eatEndOfInput\u003c/a\u003e\u003c/code\u003e to close the handle\n if you would like this behaviour.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "Handle -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Handle.html#handleToInputStream",
        "fct-type": "function",
        "title": "handleToInputStream"
      },
      "index": {
        "description": "Converts read-only handle into an InputStream of strict ByteString Note that the wrapped handle is not closed when it yields end-of-stream you can use atEndOfInput to close the handle if you would like this behaviour",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "handleToInputStream",
        "normalized": "Handle-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "To Input Stream",
        "signature": "Handle-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:handleToOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a writable handle into an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eNote that the wrapped handle is \u003cem\u003enot\u003c/em\u003e closed when it receives end-of-stream;\n you can use \u003ccode\u003e\u003ca\u003eatEndOfOutput\u003c/a\u003e\u003c/code\u003e to close the\n handle if you would like this behaviour.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "Handle -\u003e IO (OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Handle.html#handleToOutputStream",
        "fct-type": "function",
        "title": "handleToOutputStream"
      },
      "index": {
        "description": "Converts writable handle into an OutputStream of strict ByteString Note that the wrapped handle is not closed when it receives end-of-stream you can use atEndOfOutput to close the handle if you would like this behaviour",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "handleToOutputStream",
        "normalized": "Handle-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "To Output Stream",
        "signature": "Handle-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:inputStreamToHandle",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e over bytestrings to a read-only \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. Note\n that the generated handle is opened unbuffered in binary mode (i.e. no\n newline translation is performed).\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e passed into this function is wrapped in\n \u003ccode\u003e\u003ca\u003elockingInputStream\u003c/a\u003e\u003c/code\u003e to make it thread-safe.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO Handle",
        "fct-source": "src/System-IO-Streams-Handle.html#inputStreamToHandle",
        "fct-type": "function",
        "title": "inputStreamToHandle"
      },
      "index": {
        "description": "Converts an InputStream over bytestrings to read-only Handle Note that the generated handle is opened unbuffered in binary mode i.e no newline translation is performed Note the InputStream passed into this function is wrapped in lockingInputStream to make it thread-safe Since",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "inputStreamToHandle",
        "normalized": "InputStream ByteString-\u003eIO Handle",
        "package": "io-streams",
        "partial": "Stream To Handle",
        "signature": "InputStream ByteString-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:outputStreamToHandle",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e over bytestrings to a write-only \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. Note\n that the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e will be opened in non-buffering mode; if you buffer the\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e buffering then \u003ccode\u003eio-streams\u003c/code\u003e will copy the\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e buffer when sending \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values to the output, which might\n not be what you want. When the output buffer, if used, is flushed, an empty\n string is written to the output, as is conventional throughout the\n \u003ccode\u003eio-streams\u003c/code\u003e library for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e output buffers.\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e passed into this function is wrapped in\n \u003ccode\u003e\u003ca\u003elockingOutputStream\u003c/a\u003e\u003c/code\u003e to make it thread-safe.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString -\u003e IO Handle",
        "fct-source": "src/System-IO-Streams-Handle.html#outputStreamToHandle",
        "fct-type": "function",
        "title": "outputStreamToHandle"
      },
      "index": {
        "description": "Converts an OutputStream over bytestrings to write-only Handle Note that the Handle will be opened in non-buffering mode if you buffer the OutputStream using the Handle buffering then io-streams will copy the Handle buffer when sending ByteString values to the output which might not be what you want When the output buffer if used is flushed an empty string is written to the output as is conventional throughout the io-streams library for ByteString output buffers Note the OutputStream passed into this function is wrapped in lockingOutputStream to make it thread-safe Since",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "outputStreamToHandle",
        "normalized": "OutputStream ByteString-\u003eIO Handle",
        "package": "io-streams",
        "partial": "Stream To Handle",
        "signature": "OutputStream ByteString-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:stderr",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString",
        "fct-source": "src/System-IO-Streams-Handle.html#stderr",
        "fct-type": "function",
        "title": "stderr"
      },
      "index": {
        "description": "An OutputStream for stderr",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "stderr",
        "normalized": "",
        "package": "io-streams",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:stdin",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString",
        "fct-source": "src/System-IO-Streams-Handle.html#stdin",
        "fct-type": "function",
        "title": "stdin"
      },
      "index": {
        "description": "An InputStream for stdin",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "stdin",
        "normalized": "",
        "package": "io-streams",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:stdout",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString",
        "fct-source": "src/System-IO-Streams-Handle.html#stdout",
        "fct-type": "function",
        "title": "stdout"
      },
      "index": {
        "description": "An OutputStream for stdout",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "stdout",
        "normalized": "",
        "package": "io-streams",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Handle.html#v:streamPairToHandle",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a pair of \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e over bytestrings to a\n read-write \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: the streams passed into this function are wrapped in\n locking primitives to make them thread-safe.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Handle",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e OutputStream ByteString -\u003e IO Handle",
        "fct-source": "src/System-IO-Streams-Handle.html#streamPairToHandle",
        "fct-type": "function",
        "title": "streamPairToHandle"
      },
      "index": {
        "description": "Converts pair of InputStream and OutputStream over bytestrings to read-write Handle Note the streams passed into this function are wrapped in locking primitives to make them thread-safe Since",
        "hierarchy": "System IO Streams Handle",
        "module": "System.IO.Streams.Handle",
        "name": "streamPairToHandle",
        "normalized": "InputStream ByteString-\u003eOutputStream ByteString-\u003eIO Handle",
        "package": "io-streams",
        "partial": "Pair To Handle",
        "signature": "InputStream ByteString-\u003eOutputStream ByteString-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal implementation of the \u003ccode\u003eio-streams\u003c/code\u003e library, intended for library\n writers\n\u003c/p\u003e\u003cp\u003eLibrary users should use the interface provided by \u003ca\u003eSystem.IO.Streams\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal implementation of the io-streams library intended for library writers Library users should use the interface provided by System.IO.Streams",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "io-streams",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#t:Consumer",
      "description": {
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#Consumer",
        "fct-type": "data",
        "title": "Consumer"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "Consumer",
        "normalized": "",
        "package": "io-streams",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#t:Generator",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is a coroutine monad that can be used to define complex\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es. You can cause a value of type \u003ccode\u003eJust r\u003c/code\u003e to appear when the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is read by calling \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n g :: \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e Int ()\n g = do\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 1\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 2\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 3\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e can be turned into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e by calling\n \u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n m :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e]\n m = Streams.\u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e g \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e     -- value returned is [1,2,3]\n\u003c/pre\u003e\u003cp\u003eYou can perform IO by calling \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e, and turn a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e into an\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a general rule, you should not acquire resources that need to be freed\n from a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e, because there is no guarantee the coroutine continuation\n will ever be called, nor can you catch an exception from within a\n \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#Generator",
        "fct-type": "data",
        "title": "Generator"
      },
      "index": {
        "description": "Generator is coroutine monad that can be used to define complex InputStream You can cause value of type Just to appear when the InputStream is read by calling yield Generator Int do Streams yield Streams yield Streams yield Generator can be turned into an InputStream by calling fromGenerator IO Int Streams fromGenerator Streams toList value returned is You can perform IO by calling liftIO and turn Generator into an InputStream with fromGenerator As general rule you should not acquire resources that need to be freed from Generator because there is no guarantee the coroutine continuation will ever be called nor can you catch an exception from within Generator",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "Generator",
        "normalized": "",
        "package": "io-streams",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#t:InputStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e generates values of type \u003ccode\u003ec\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eTwo primitive operations are defined on \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e c)\u003c/code\u003e reads a value from the stream,\n where \"end of stream\" is signaled by \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e :: c -\u003e \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e \"pushes back\" a value to the\n stream.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is intended that \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es obey the following law:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e c stream \u003e\u003e \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e c)\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#InputStream",
        "fct-type": "data",
        "title": "InputStream"
      },
      "index": {
        "description": "An InputStream generates values of type in the IO monad Two primitive operations are defined on InputStream read InputStream IO Maybe reads value from the stream where end of stream is signaled by read returning Nothing unRead InputStream IO pushes back value to the stream It is intended that InputStream obey the following law unRead stream read stream return Just",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "InputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#t:OutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e consumes values of type \u003ccode\u003ec\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n The only primitive operation defined on \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eValues of type \u003ccode\u003ec\u003c/code\u003e are written in an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e by wrapping them in\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, and the end of the stream is indicated by by supplying \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you supply a value after a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the behavior is defined by the\n implementer of the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. (All \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e definitions in\n this library will simply discard the extra input.)\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#OutputStream",
        "fct-type": "data",
        "title": "OutputStream"
      },
      "index": {
        "description": "An OutputStream consumes values of type in the IO monad The only primitive operation defined on OutputStream is write Maybe OutputStream IO Values of type are written in an OutputStream by wrapping them in Just and the end of the stream is indicated by by supplying Nothing If you supply value after Nothing the behavior is defined by the implementer of the given OutputStream All OutputStream definitions in this library will simply discard the extra input",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "OutputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#t:SP",
      "description": {
        "fct-descr": "\u003cp\u003eA strict pair type.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#SP",
        "fct-type": "data",
        "title": "SP"
      },
      "index": {
        "description": "strict pair type",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "SP",
        "normalized": "",
        "package": "io-streams",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#t:StreamPair",
      "description": {
        "fct-descr": "\u003cp\u003eInternal convenience synonym for a pair of input/output streams.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "type",
        "fct-source": "src/System-IO-Streams-Internal.html#StreamPair",
        "fct-type": "type",
        "title": "StreamPair"
      },
      "index": {
        "description": "Internal convenience synonym for pair of input output streams",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "StreamPair",
        "normalized": "",
        "package": "io-streams",
        "partial": "Stream Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:InputStream",
      "description": {
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream",
        "fct-source": "src/System-IO-Streams-Internal.html#InputStream",
        "fct-type": "function",
        "title": "InputStream"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "InputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:OutputStream",
      "description": {
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream",
        "fct-source": "src/System-IO-Streams-Internal.html#OutputStream",
        "fct-type": "function",
        "title": "OutputStream"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "OutputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:SP",
      "description": {
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "SP !a !b",
        "fct-source": "src/System-IO-Streams-Internal.html#SP",
        "fct-type": "function",
        "title": "SP"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "SP",
        "normalized": "",
        "package": "io-streams",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:_read",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#InputStream",
        "fct-type": "function",
        "title": "_read"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "_read",
        "normalized": "",
        "package": "io-streams",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:_unRead",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#InputStream",
        "fct-type": "function",
        "title": "_unRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "_unRead",
        "normalized": "a-\u003eIO()",
        "package": "io-streams",
        "partial": "Read",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:_write",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "Maybe a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#OutputStream",
        "fct-type": "function",
        "title": "_write"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "_write",
        "normalized": "Maybe a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "Maybe a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:appendInputStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eappendInputStream\u003c/a\u003e\u003c/code\u003e concatenates two \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es, analogous to (\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e)\n for lists.\n\u003c/p\u003e\u003cp\u003eThe second \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e continues where the first \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e ends.\n\u003c/p\u003e\u003cp\u003eNote: values pushed back to \u003ccode\u003e\u003ca\u003eappendInputStream\u003c/a\u003e\u003c/code\u003e are not propagated to either\n wrapped \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#appendInputStream",
        "fct-type": "function",
        "title": "appendInputStream"
      },
      "index": {
        "description": "appendInputStream concatenates two InputStream analogous to for lists The second InputStream continues where the first InputStream ends Note values pushed back to appendInputStream are not propagated to either wrapped InputStream",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "appendInputStream",
        "normalized": "InputStream a-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "InputStream a-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:atEOF",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is at end-of-stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO Bool",
        "fct-source": "src/System-IO-Streams-Internal.html#atEOF",
        "fct-type": "function",
        "title": "atEOF"
      },
      "index": {
        "description": "Checks if an InputStream is at end-of-stream",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "atEOF",
        "normalized": "InputStream a-\u003eIO Bool",
        "package": "io-streams",
        "partial": "EOF",
        "signature": "InputStream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:await",
      "description": {
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "Consumer r (Maybe r)",
        "fct-source": "src/System-IO-Streams-Internal.html#await",
        "fct-type": "function",
        "title": "await"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "await",
        "normalized": "",
        "package": "io-streams",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:concatInputStreams",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatInputStreams\u003c/a\u003e\u003c/code\u003e concatenates a list of \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es, analogous to\n (\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e) for lists.\n\u003c/p\u003e\u003cp\u003eSubsequent \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es continue where the previous one \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e\n ends.\n\u003c/p\u003e\u003cp\u003eNote: values pushed back to the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e returned by\n \u003ccode\u003e\u003ca\u003econcatInputStreams\u003c/a\u003e\u003c/code\u003e are not propagated to any of the source\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "[InputStream a] -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#concatInputStreams",
        "fct-type": "function",
        "title": "concatInputStreams"
      },
      "index": {
        "description": "concatInputStreams concatenates list of InputStream analogous to for lists Subsequent InputStream continue where the previous one InputStream ends Note values pushed back to the InputStream returned by concatInputStreams are not propagated to any of the source InputStream",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "concatInputStreams",
        "normalized": "[InputStream a]-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Streams",
        "signature": "[InputStream a]-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, supplying values from the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, and propagating the end-of-stream\n message from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e through to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe connection ends when the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e yields a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connects an InputStream and OutputStream supplying values from the InputStream to the OutputStream and propagating the end-of-stream message from the InputStream through to the OutputStream The connection ends when the InputStream yields Nothing",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "connect",
        "normalized": "InputStream a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:connectTo",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e function is just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUseful for writing expressions like \u003ccode\u003efromList [1,2,3] \u003e\u003e= connectTo foo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#connectTo",
        "fct-type": "function",
        "title": "connectTo"
      },
      "index": {
        "description": "The connectTo function is just flip connect Useful for writing expressions like fromList connectTo foo",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "connectTo",
        "normalized": "OutputStream a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To",
        "signature": "OutputStream a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:fromConsumer",
      "description": {
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "Consumer r a -\u003e IO (OutputStream r)",
        "fct-source": "src/System-IO-Streams-Internal.html#fromConsumer",
        "fct-type": "function",
        "title": "fromConsumer"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "fromConsumer",
        "normalized": "Consumer a b-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Consumer",
        "signature": "Consumer r a-\u003eIO(OutputStream r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:fromGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "Generator r a -\u003e IO (InputStream r)",
        "fct-source": "src/System-IO-Streams-Internal.html#fromGenerator",
        "fct-type": "function",
        "title": "fromGenerator"
      },
      "index": {
        "description": "Turns Generator into an InputStream",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "fromGenerator",
        "normalized": "Generator a b-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Generator",
        "signature": "Generator r a-\u003eIO(InputStream r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:lockingInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e into a thread-safe \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, at a slight\n performance penalty.\n\u003c/p\u003e\u003cp\u003eFor performance reasons, this library provides non-thread-safe streams by\n default. Use the \u003ccode\u003elocking\u003c/code\u003e functions to convert these streams into slightly\n slower, but thread-safe, equivalents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#lockingInputStream",
        "fct-type": "function",
        "title": "lockingInputStream"
      },
      "index": {
        "description": "Converts an InputStream into thread-safe InputStream at slight performance penalty For performance reasons this library provides non-thread-safe streams by default Use the locking functions to convert these streams into slightly slower but thread-safe equivalents",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "lockingInputStream",
        "normalized": "InputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "InputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:lockingOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e into a thread-safe \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, at a slight\n performance penalty.\n\u003c/p\u003e\u003cp\u003eFor performance reasons, this library provides non-thread-safe streams by\n default. Use the \u003ccode\u003elocking\u003c/code\u003e functions to convert these streams into slightly\n slower, but thread-safe, equivalents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#lockingOutputStream",
        "fct-type": "function",
        "title": "lockingOutputStream"
      },
      "index": {
        "description": "Converts an OutputStream into thread-safe OutputStream at slight performance penalty For performance reasons this library provides non-thread-safe streams by default Use the locking functions to convert these streams into slightly slower but thread-safe equivalents",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "lockingOutputStream",
        "normalized": "OutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "OutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:makeInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e from a value-producing action.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003emakeInputStream m\u003c/code\u003e) calls the action \u003ccode\u003em\u003c/code\u003e each time you request a value\n from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. The given action is extended with the default\n pushback mechanism (see \u003ca\u003eSystem.IO.Streams.Internal\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "IO (Maybe a) -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#makeInputStream",
        "fct-type": "function",
        "title": "makeInputStream"
      },
      "index": {
        "description": "Creates an InputStream from value-producing action makeInputStream calls the action each time you request value from the InputStream The given action is extended with the default pushback mechanism see System.IO.Streams.Internal",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "makeInputStream",
        "normalized": "IO(Maybe a)-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "IO(Maybe a)-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:makeOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e from a value-consuming action.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003emakeOutputStream f\u003c/code\u003e) runs the computation \u003ccode\u003ef\u003c/code\u003e on each value fed to it.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "(Maybe a -\u003e IO ()) -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#makeOutputStream",
        "fct-type": "function",
        "title": "makeOutputStream"
      },
      "index": {
        "description": "Creates an OutputStream from value-consuming action makeOutputStream runs the computation on each value fed to it",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "makeOutputStream",
        "normalized": "(Maybe a-\u003eIO())-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "(Maybe a-\u003eIO())-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:nullInput",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e immediately.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#nullInput",
        "fct-type": "function",
        "title": "nullInput"
      },
      "index": {
        "description": "An empty InputStream that yields Nothing immediately",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "nullInput",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:nullOutput",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that discards any input fed to it.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#nullOutput",
        "fct-type": "function",
        "title": "nullOutput"
      },
      "index": {
        "description": "An empty OutputStream that discards any input fed to it",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "nullOutput",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eObserves the first value from an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e without consuming it.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is empty. \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e satisfies the\n following law:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e stream \u003e\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Observes the first value from an InputStream without consuming it Returns Nothing if the InputStream is empty peek satisfies the following law Streams peek stream Streams read stream Streams read stream",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "peek",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eReads one value from an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns either a value wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the end of the\n stream is reached.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Reads one value from an InputStream Returns either value wrapped in Just or Nothing if the end of the stream is reached",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "read",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:supply",
      "description": {
        "fct-descr": "\u003cp\u003eConnects an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e without passing the\n end-of-stream notification through to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse this to supply an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e with multiple \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es and use\n \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e for the final \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to finalize the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, like\n so:\n\u003c/p\u003e\u003cpre\u003e\n do Streams.\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e  input1 output\n    Streams.\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e  input2 output\n    Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e input3 output\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#supply",
        "fct-type": "function",
        "title": "supply"
      },
      "index": {
        "description": "Connects an InputStream to an OutputStream without passing the end-of-stream notification through to the OutputStream Use this to supply an OutputStream with multiple InputStream and use connect for the final InputStream to finalize the OutputStream like so do Streams supply input1 output Streams supply input2 output Streams connect input3 output",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "supply",
        "normalized": "InputStream a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:supplyTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e with the arguments flipped.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#supplyTo",
        "fct-type": "function",
        "title": "supplyTo"
      },
      "index": {
        "description": "supply with the arguments flipped",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "supplyTo",
        "normalized": "OutputStream a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To",
        "signature": "OutputStream a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:unRead",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a value back onto an input stream. \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e should\n satisfy the following law, with the possible exception of side effects:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e c stream \u003e\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e c)\n\u003c/pre\u003e\u003cp\u003eNote that this could be used to add values back to the stream that were not\n originally drawn from the stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#unRead",
        "fct-type": "function",
        "title": "unRead"
      },
      "index": {
        "description": "Pushes value back onto an input stream read and unRead should satisfy the following law with the possible exception of side effects Streams unRead stream Streams read stream return Just Note that this could be used to add values back to the stream that were not originally drawn from the stream",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "unRead",
        "normalized": "a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "Read",
        "signature": "a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds a value to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. Values of type \u003ccode\u003ec\u003c/code\u003e are written in an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e by wrapping them in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, and the end of the stream is\n indicated by by supplying \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "Maybe a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Feeds value to an OutputStream Values of type are written in an OutputStream by wrapping them in Just and the end of the stream is indicated by by supplying Nothing",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "write",
        "normalized": "Maybe a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "Maybe a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Internal.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eCalling \u003ccode\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e causes the value \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e to appear on the input\n when this generator is converted to an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. The rest of the\n computation after the call to \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e is resumed later when the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Internal",
        "fct-package": "io-streams",
        "fct-signature": "r -\u003e Generator r ()",
        "fct-source": "src/System-IO-Streams-Internal.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Calling yield causes the value Just to appear on the input when this generator is converted to an InputStream The rest of the computation after the call to yield is resumed later when the InputStream is read again",
        "hierarchy": "System IO Streams Internal",
        "module": "System.IO.Streams.Internal",
        "name": "yield",
        "normalized": "a-\u003eGenerator a()",
        "package": "io-streams",
        "partial": "",
        "signature": "r-\u003eGenerator r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eList conversions and utilities.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "List conversions and utilities",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "List",
        "normalized": "",
        "package": "io-streams",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:chunkList",
      "description": {
        "fct-descr": "\u003cp\u003eSplits an input stream into chunks of at most size \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1..14::Int] \u003e\u003e= \u003ccode\u003e\u003ca\u003echunkList\u003c/a\u003e\u003c/code\u003e 4 \u003e\u003e= \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14]]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "Int-\u003e InputStream a-\u003e IO (InputStream [a])",
        "fct-type": "function",
        "title": "chunkList"
      },
      "index": {
        "description": "Splits an input stream into chunks of at most size Example ghci fromList Int chunkList toList",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "chunkList",
        "normalized": "Int-\u003eInputStream a-\u003eIO(InputStream[a])",
        "package": "io-streams",
        "partial": "List",
        "signature": "Int-\u003eInputStream a-\u003eIO(InputStream[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:concatLists",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an input stream containing lists, produces a new input stream that\n will yield the concatenation of these lists. See \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [[1,2,3::Int], [4,5,6]] \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003econcatLists\u003c/a\u003e\u003c/code\u003e \u003e\u003e=\n       Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n [1,2,3,4,5,6]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "InputStream [a] -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-List.html#concatLists",
        "fct-type": "function",
        "title": "concatLists"
      },
      "index": {
        "description": "Given an input stream containing lists produces new input stream that will yield the concatenation of these lists See concat Example ghci Streams fromList Int Streams concatLists Streams toList",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "concatLists",
        "normalized": "InputStream[a]-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Lists",
        "signature": "InputStream[a]-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a list into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that produces no side effects.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2]\n ghci\u003e \u003ccode\u003ereplicateM\u003c/code\u003e 3 (Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is)\n [Just 1, Just 2, Nothing]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "[c] -\u003e IO (InputStream c)",
        "fct-source": "src/System-IO-Streams-List.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Transforms list into an InputStream that produces no side effects ghci is Streams fromList ghci replicateM Streams read is Just Just Nothing",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "fromList",
        "normalized": "[a]-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "List",
        "signature": "[c]-\u003eIO(InputStream c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:listOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e returns an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e which stores values fed into\n it and an action which flushes all stored values to a list.\n\u003c/p\u003e\u003cp\u003eThe flush action resets the store.\n\u003c/p\u003e\u003cp\u003eNote that this function \u003cem\u003ewill\u003c/em\u003e buffer any input sent to it on the heap.\n Please don't use this unless you're sure that the amount of input provided\n is bounded and will fit in memory without issues.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e (os, flush) \u003c- Streams.\u003ccode\u003e\u003ca\u003elistOutputStream\u003c/a\u003e\u003c/code\u003e :: IO (\u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e Int, IO [Int])\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewriteList\u003c/a\u003e\u003c/code\u003e [1, 2] os\n ghci\u003e flush\n [1, 2]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewriteList\u003c/a\u003e\u003c/code\u003e [3, 4] os\n ghci\u003e flush\n [3, 4]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "IO (OutputStream c, IO [c])",
        "fct-source": "src/System-IO-Streams-List.html#listOutputStream",
        "fct-type": "function",
        "title": "listOutputStream"
      },
      "index": {
        "description": "listOutputStream returns an OutputStream which stores values fed into it and an action which flushes all stored values to list The flush action resets the store Note that this function will buffer any input sent to it on the heap Please don use this unless you re sure that the amount of input provided is bounded and will fit in memory without issues ghci os flush Streams listOutputStream IO OutputStream Int IO Int ghci Streams writeList os ghci flush ghci Streams writeList os ghci flush",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "listOutputStream",
        "normalized": "IO(OutputStream a,IO[a])",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "IO(OutputStream c,IO[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:outputToList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an IO action that requires an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, creates one and\n captures all the output the action sends to it as a list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import \u003ca\u003eControl.Applicative\u003c/a\u003e\n ghci\u003e (\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [\"a\", \"b\", \"c\"]) \u003e\u003e= \u003ccode\u003e\u003ca\u003eoutputToList\u003c/a\u003e\u003c/code\u003e\n [\"a\",\"b\",\"c\"]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "(OutputStream a -\u003e IO b) -\u003e IO [a]",
        "fct-source": "src/System-IO-Streams-List.html#outputToList",
        "fct-type": "function",
        "title": "outputToList"
      },
      "index": {
        "description": "Given an IO action that requires an OutputStream creates one and captures all the output the action sends to it as list Example ghci import Control.Applicative ghci connect fromList outputToList",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "outputToList",
        "normalized": "(OutputStream a-\u003eIO b)-\u003eIO[a]",
        "package": "io-streams",
        "partial": "To List",
        "signature": "(OutputStream a-\u003eIO b)-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eDrains an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, converting it to a list. N.B. that this function\n reads the entire \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e strictly into memory and as such is not\n recommended for streaming applications or where the size of the input is not\n bounded or known.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e is\n [1, 2]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO [a]",
        "fct-source": "src/System-IO-Streams-List.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Drains an InputStream converting it to list N.B that this function reads the entire InputStream strictly into memory and as such is not recommended for streaming applications or where the size of the input is not bounded or known ghci is Streams fromList ghci Streams toList is",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "toList",
        "normalized": "InputStream a-\u003eIO[a]",
        "package": "io-streams",
        "partial": "List",
        "signature": "InputStream a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-List.html#v:writeList",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds a list to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. Does \u003cem\u003enot\u003c/em\u003e write an end-of-stream to\n the stream.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e os \u003c- Streams.\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e Streams.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e (S.pack . show) :: IO (\u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e Int)\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewriteList\u003c/a\u003e\u003c/code\u003e [1, 2] os\n 1\n 2\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewriteList\u003c/a\u003e\u003c/code\u003e [3, 4] os\n 3\n 4\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.List",
        "fct-package": "io-streams",
        "fct-signature": "[a] -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-List.html#writeList",
        "fct-type": "function",
        "title": "writeList"
      },
      "index": {
        "description": "Feeds list to an OutputStream Does not write an end-of-stream to the stream ghci os Streams unlines Streams stdout Streams contramap S.pack show IO OutputStream Int ghci Streams writeList os ghci Streams writeList os",
        "hierarchy": "System IO Streams List",
        "module": "System.IO.Streams.List",
        "name": "writeList",
        "normalized": "[a]-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "List",
        "signature": "[a]-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Network.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverting network \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es to streams.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Network",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Network.html",
        "fct-type": "module",
        "title": "Network"
      },
      "index": {
        "description": "Converting network Socket to streams",
        "hierarchy": "System IO Streams Network",
        "module": "System.IO.Streams.Network",
        "name": "Network",
        "normalized": "",
        "package": "io-streams",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Network.html#v:socketToStreams",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e pair. Note that,\n as is usually the case in \u003ccode\u003eio-streams\u003c/code\u003e, writing a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to the generated\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e does not cause the underlying \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e to be closed.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Network",
        "fct-package": "io-streams",
        "fct-signature": "Socket -\u003e IO (InputStream ByteString, OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Network.html#socketToStreams",
        "fct-type": "function",
        "title": "socketToStreams"
      },
      "index": {
        "description": "Converts Socket to an InputStream OutputStream pair Note that as is usually the case in io-streams writing Nothing to the generated OutputStream does not cause the underlying Socket to be closed",
        "hierarchy": "System IO Streams Network",
        "module": "System.IO.Streams.Network",
        "name": "socketToStreams",
        "normalized": "Socket-\u003eIO(InputStream ByteString,OutputStream ByteString)",
        "package": "io-streams",
        "partial": "To Streams",
        "signature": "Socket-\u003eIO(InputStream ByteString,OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Network.html#v:socketToStreamsWithBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e pair, with\n control over the size of the receive buffers. Note that, as is usually the\n case in \u003ccode\u003eio-streams\u003c/code\u003e, writing a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to the generated \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e\n does not cause the underlying \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e to be closed.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Network",
        "fct-package": "io-streams",
        "fct-signature": "Int-\u003e Socket-\u003e IO (InputStream ByteString, OutputStream ByteString)",
        "fct-type": "function",
        "title": "socketToStreamsWithBufferSize"
      },
      "index": {
        "description": "Converts Socket to an InputStream OutputStream pair with control over the size of the receive buffers Note that as is usually the case in io-streams writing Nothing to the generated OutputStream does not cause the underlying Socket to be closed",
        "hierarchy": "System IO Streams Network",
        "module": "System.IO.Streams.Network",
        "name": "socketToStreamsWithBufferSize",
        "normalized": "Int-\u003eSocket-\u003eIO(InputStream ByteString,OutputStream ByteString)",
        "package": "io-streams",
        "partial": "To Streams With Buffer Size",
        "signature": "Int-\u003eSocket-\u003eIO(InputStream ByteString,OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module adapting the functions from \u003ca\u003eSystem.Process\u003c/a\u003e to work with\n \u003ccode\u003eio-streams\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Process",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "module adapting the functions from System.Process to work with io-streams",
        "hierarchy": "System IO Streams Process",
        "module": "System.IO.Streams.Process",
        "name": "Process",
        "normalized": "",
        "package": "io-streams",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Process.html#v:runInteractiveCommand",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a command using the shell, and returns streams that may be used to\n communicate with the process via its stdin, stdout, and stderr respectively.\n\u003c/p\u003e\u003cp\u003eThe streams returned by this command are guarded by locks and are therefore\n safe to use in multithreaded code.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Process",
        "fct-package": "io-streams",
        "fct-signature": "String -\u003e IO (OutputStream ByteString, InputStream ByteString, InputStream ByteString, ProcessHandle)",
        "fct-source": "src/System-IO-Streams-Process.html#runInteractiveCommand",
        "fct-type": "function",
        "title": "runInteractiveCommand"
      },
      "index": {
        "description": "Runs command using the shell and returns streams that may be used to communicate with the process via its stdin stdout and stderr respectively The streams returned by this command are guarded by locks and are therefore safe to use in multithreaded code Since",
        "hierarchy": "System IO Streams Process",
        "module": "System.IO.Streams.Process",
        "name": "runInteractiveCommand",
        "normalized": "String-\u003eIO(OutputStream ByteString,InputStream ByteString,InputStream ByteString,ProcessHandle)",
        "package": "io-streams",
        "partial": "Interactive Command",
        "signature": "String-\u003eIO(OutputStream ByteString,InputStream ByteString,InputStream ByteString,ProcessHandle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Process.html#v:runInteractiveProcess",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a raw command, and returns streams that may be used to communicate\n with the process via its \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cp\u003eFor example, to start a process and feed a string to its stdin:\n\u003c/p\u003e\u003cpre\u003e (inp,out,err,pid) \u003c- runInteractiveProcess \"...\"\n forkIO (Streams.write (Just str) inp)\n\u003c/pre\u003e\u003cp\u003eThe streams returned by this command are guarded by locks and are therefore\n safe to use in multithreaded code.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.0.2.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Process",
        "fct-package": "io-streams",
        "fct-signature": "FilePath-\u003e [String]-\u003e Maybe FilePath-\u003e Maybe [(String, String)]-\u003e IO (OutputStream ByteString, InputStream ByteString, InputStream ByteString, ProcessHandle)",
        "fct-type": "function",
        "title": "runInteractiveProcess"
      },
      "index": {
        "description": "Runs raw command and returns streams that may be used to communicate with the process via its stdin stdout and stderr respectively For example to start process and feed string to its stdin inp out err pid runInteractiveProcess forkIO Streams.write Just str inp The streams returned by this command are guarded by locks and are therefore safe to use in multithreaded code Since",
        "hierarchy": "System IO Streams Process",
        "module": "System.IO.Streams.Process",
        "name": "runInteractiveProcess",
        "normalized": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eIO(OutputStream ByteString,InputStream ByteString,InputStream ByteString,ProcessHandle)",
        "package": "io-streams",
        "partial": "Interactive Process",
        "signature": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eIO(OutputStream ByteString,InputStream ByteString,InputStream ByteString,ProcessHandle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream primitives for decoding and encoding \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values in UTF-8 format.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Text",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Stream primitives for decoding and encoding Text values in UTF-8 format",
        "hierarchy": "System IO Streams Text",
        "module": "System.IO.Streams.Text",
        "name": "Text",
        "normalized": "",
        "package": "io-streams",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Text.html#v:decodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eDecode an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es in UTF-8 format into an\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values. If decoding fails, will throw an exception.\n See \u003ccode\u003eData.Text.Encoding.\u003ccode\u003e\u003ca\u003edecodeUtf8\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Text",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO (InputStream Text)",
        "fct-source": "src/System-IO-Streams-Text.html#decodeUtf8",
        "fct-type": "function",
        "title": "decodeUtf8"
      },
      "index": {
        "description": "Decode an InputStream of ByteString in UTF-8 format into an InputStream of Text values If decoding fails will throw an exception See Data.Text.Encoding decodeUtf8",
        "hierarchy": "System IO Streams Text",
        "module": "System.IO.Streams.Text",
        "name": "decodeUtf8",
        "normalized": "InputStream ByteString-\u003eIO(InputStream Text)",
        "package": "io-streams",
        "partial": "Utf",
        "signature": "InputStream ByteString-\u003eIO(InputStream Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Text.html#v:decodeUtf8With",
      "description": {
        "fct-descr": "\u003cp\u003eDecode an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es in UTF-8 format into an\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values. If decoding fails, invokes the given\n \u003ccode\u003e\u003ca\u003eOnDecodeError\u003c/a\u003e\u003c/code\u003e function to decide what to do. See\n \u003ccode\u003eData.Text.Encoding.\u003ccode\u003e\u003ca\u003edecodeUtf8With\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Text",
        "fct-package": "io-streams",
        "fct-signature": "OnDecodeError -\u003e InputStream ByteString -\u003e IO (InputStream Text)",
        "fct-source": "src/System-IO-Streams-Text.html#decodeUtf8With",
        "fct-type": "function",
        "title": "decodeUtf8With"
      },
      "index": {
        "description": "Decode an InputStream of ByteString in UTF-8 format into an InputStream of Text values If decoding fails invokes the given OnDecodeError function to decide what to do See Data.Text.Encoding decodeUtf8With",
        "hierarchy": "System IO Streams Text",
        "module": "System.IO.Streams.Text",
        "name": "decodeUtf8With",
        "normalized": "OnDecodeError-\u003eInputStream ByteString-\u003eIO(InputStream Text)",
        "package": "io-streams",
        "partial": "Utf With",
        "signature": "OnDecodeError-\u003eInputStream ByteString-\u003eIO(InputStream Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Text.html#v:encodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e taking \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that\n takes \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, encoding the data as UTF-8. See\n \u003ccode\u003eData.Text.Encoding.\u003ccode\u003e\u003ca\u003eencodeUtf8\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Text",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream ByteString -\u003e IO (OutputStream Text)",
        "fct-source": "src/System-IO-Streams-Text.html#encodeUtf8",
        "fct-type": "function",
        "title": "encodeUtf8"
      },
      "index": {
        "description": "Convert an OutputStream taking ByteString to an OutputStream that takes Text encoding the data as UTF-8 See Data.Text.Encoding encodeUtf8",
        "hierarchy": "System IO Streams Text",
        "module": "System.IO.Streams.Text",
        "name": "encodeUtf8",
        "normalized": "OutputStream ByteString-\u003eIO(OutputStream Text)",
        "package": "io-streams",
        "partial": "Utf",
        "signature": "OutputStream ByteString-\u003eIO(OutputStream Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Tutorial.html#",
      "description": {
        "fct-module": "System.IO.Streams.Tutorial",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Tutorial.html",
        "fct-type": "module",
        "title": "Tutorial"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Tutorial",
        "module": "System.IO.Streams.Tutorial",
        "name": "Tutorial",
        "normalized": "",
        "package": "io-streams",
        "partial": "Tutorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVector conversions and utilities.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Vector conversions and utilities",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "io-streams",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:chunkVector",
      "description": {
        "fct-descr": "\u003cp\u003eSplits an input stream into chunks of at most size \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e (\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1..14::Int] \u003e\u003e= \u003ccode\u003e\u003ca\u003echunkVector\u003c/a\u003e\u003c/code\u003e 4 \u003e\u003e= \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e)\n          :: IO [\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e Int]\n [fromList [1,2,3,4],fromList [5,6,7,8],fromList [9,10,11,12],fromList [13,14]]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int -\u003e InputStream a -\u003e IO (InputStream (v a))",
        "fct-source": "src/System-IO-Streams-Vector.html#chunkVector",
        "fct-type": "function",
        "title": "chunkVector"
      },
      "index": {
        "description": "Splits an input stream into chunks of at most size Example ghci fromList Int chunkVector toList IO Vector Int fromList fromList fromList fromList",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "chunkVector",
        "normalized": "Int-\u003eInputStream a-\u003eIO(InputStream(b a))",
        "package": "io-streams",
        "partial": "Vector",
        "signature": "Int-\u003eInputStream a-\u003eIO(InputStream(v a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:fromVector",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a vector into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that yields each of the values\n in the vector in turn.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import \u003ca\u003eControl.Monad\u003c/a\u003e\n ghci\u003e import qualified \u003ca\u003eSystem.IO.Streams\u003c/a\u003e as Streams\n ghci\u003e import qualified \u003ca\u003eData.Vector\u003c/a\u003e as V\n ghci\u003e let v = V.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2]\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromVector\u003c/a\u003e\u003c/code\u003e v\n ghci\u003e \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e 3 (Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e is)\n [\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e 1,\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e 2,\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "v a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Vector.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "Transforms vector into an InputStream that yields each of the values in the vector in turn ghci import Control.Monad ghci import qualified System.IO.Streams as Streams ghci import qualified Data.Vector as ghci let fromList ghci is Streams fromVector ghci replicateM Streams read is Just Just Nothing",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "fromVector",
        "normalized": "a b-\u003eIO(InputStream b)",
        "package": "io-streams",
        "partial": "Vector",
        "signature": "v a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:mutableVectorOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emutableVectorOutputStream\u003c/a\u003e\u003c/code\u003e returns an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e which stores values\n fed into it and an action which flushes all stored values to a vector.\n\u003c/p\u003e\u003cp\u003eThe flush action resets the store.\n\u003c/p\u003e\u003cp\u003eNote that this function \u003cem\u003ewill\u003c/em\u003e buffer any input sent to it on the heap.\n Please don't use this unless you're sure that the amount of input provided\n is bounded and will fit in memory without issues.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "IO (OutputStream c, IO (v (PrimState IO) c))",
        "fct-source": "src/System-IO-Streams-Vector.html#mutableVectorOutputStream",
        "fct-type": "function",
        "title": "mutableVectorOutputStream"
      },
      "index": {
        "description": "mutableVectorOutputStream returns an OutputStream which stores values fed into it and an action which flushes all stored values to vector The flush action resets the store Note that this function will buffer any input sent to it on the heap Please don use this unless you re sure that the amount of input provided is bounded and will fit in memory without issues",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "mutableVectorOutputStream",
        "normalized": "IO(OutputStream a,IO(b(PrimState IO)a))",
        "package": "io-streams",
        "partial": "Vector Output Stream",
        "signature": "IO(OutputStream c,IO(v(PrimState IO)c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:mutableVectorOutputStreamSized",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emutableVectorOutputStream\u003c/a\u003e\u003c/code\u003e, but allows control over how large the\n vector buffer is to start with.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int -\u003e IO (OutputStream c, IO (v (PrimState IO) c))",
        "fct-source": "src/System-IO-Streams-Vector.html#mutableVectorOutputStreamSized",
        "fct-type": "function",
        "title": "mutableVectorOutputStreamSized"
      },
      "index": {
        "description": "Like mutableVectorOutputStream but allows control over how large the vector buffer is to start with",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "mutableVectorOutputStreamSized",
        "normalized": "Int-\u003eIO(OutputStream a,IO(b(PrimState IO)a))",
        "package": "io-streams",
        "partial": "Vector Output Stream Sized",
        "signature": "Int-\u003eIO(OutputStream c,IO(v(PrimState IO)c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:outputToMutableVector",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an IO action that requires an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, creates one and\n captures all the output the action sends to it as a mutable vector.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e import \u003ca\u003eControl.Applicative\u003c/a\u003e\n ghci\u003e (\u003ccode\u003econnect\u003c/code\u003e \u003c$\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3::\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e])\n        \u003e\u003e= \u003ccode\u003e\u003ca\u003eoutputToMutableVector\u003c/a\u003e\u003c/code\u003e\n        \u003e\u003e= V.\u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e\n fromList [1,2,3]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "(OutputStream a -\u003e IO b) -\u003e IO (v (PrimState IO) a)",
        "fct-source": "src/System-IO-Streams-Vector.html#outputToMutableVector",
        "fct-type": "function",
        "title": "outputToMutableVector"
      },
      "index": {
        "description": "Given an IO action that requires an OutputStream creates one and captures all the output the action sends to it as mutable vector Example ghci import Control.Applicative ghci connect fromList Int outputToMutableVector freeze fromList",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "outputToMutableVector",
        "normalized": "(OutputStream a-\u003eIO b)-\u003eIO(c(PrimState IO)a)",
        "package": "io-streams",
        "partial": "To Mutable Vector",
        "signature": "(OutputStream a-\u003eIO b)-\u003eIO(v(PrimState IO)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:outputToMutableVectorSized",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eoutputToMutableVector\u003c/a\u003e\u003c/code\u003e, but allows control over how large the vector\n buffer is to start with.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int -\u003e (OutputStream a -\u003e IO b) -\u003e IO (v (PrimState IO) a)",
        "fct-source": "src/System-IO-Streams-Vector.html#outputToMutableVectorSized",
        "fct-type": "function",
        "title": "outputToMutableVectorSized"
      },
      "index": {
        "description": "Like outputToMutableVector but allows control over how large the vector buffer is to start with",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "outputToMutableVectorSized",
        "normalized": "Int-\u003e(OutputStream a-\u003eIO b)-\u003eIO(c(PrimState IO)a)",
        "package": "io-streams",
        "partial": "To Mutable Vector Sized",
        "signature": "Int-\u003e(OutputStream a-\u003eIO b)-\u003eIO(v(PrimState IO)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:outputToVector",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an IO action that requires an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, creates one and\n captures all the output the action sends to it as a vector.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e ((\u003ccode\u003econnect\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [1, 2, 3]) \u003e\u003e= \u003ccode\u003e\u003ca\u003eoutputToVector\u003c/a\u003e\u003c/code\u003e)\n           :: IO (\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e Int)\n fromList [1,2,3]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "(OutputStream a -\u003e IO b) -\u003e IO (v a)",
        "fct-source": "src/System-IO-Streams-Vector.html#outputToVector",
        "fct-type": "function",
        "title": "outputToVector"
      },
      "index": {
        "description": "Given an IO action that requires an OutputStream creates one and captures all the output the action sends to it as vector Example ghci connect fromList outputToVector IO Vector Int fromList",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "outputToVector",
        "normalized": "(OutputStream a-\u003eIO b)-\u003eIO(c a)",
        "package": "io-streams",
        "partial": "To Vector",
        "signature": "(OutputStream a-\u003eIO b)-\u003eIO(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:outputToVectorSized",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eoutputToVector\u003c/a\u003e\u003c/code\u003e, but allows control over how large the vector buffer\n is to start with.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int -\u003e (OutputStream a -\u003e IO b) -\u003e IO (v a)",
        "fct-source": "src/System-IO-Streams-Vector.html#outputToVectorSized",
        "fct-type": "function",
        "title": "outputToVectorSized"
      },
      "index": {
        "description": "Like outputToVector but allows control over how large the vector buffer is to start with",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "outputToVectorSized",
        "normalized": "Int-\u003e(OutputStream a-\u003eIO b)-\u003eIO(c a)",
        "package": "io-streams",
        "partial": "To Vector Sized",
        "signature": "Int-\u003e(OutputStream a-\u003eIO b)-\u003eIO(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:toMutableVector",
      "description": {
        "fct-descr": "\u003cp\u003eDrains an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, converting it to a mutable vector. Note that this\n function reads the entire \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e strictly into memory and as such is\n not recommended for streaming applications or where the size of the input is\n not bounded or known.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (v (PrimState IO) a)",
        "fct-source": "src/System-IO-Streams-Vector.html#toMutableVector",
        "fct-type": "function",
        "title": "toMutableVector"
      },
      "index": {
        "description": "Drains an InputStream converting it to mutable vector Note that this function reads the entire InputStream strictly into memory and as such is not recommended for streaming applications or where the size of the input is not bounded or known",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "toMutableVector",
        "normalized": "InputStream a-\u003eIO(b(PrimState IO)a)",
        "package": "io-streams",
        "partial": "Mutable Vector",
        "signature": "InputStream a-\u003eIO(v(PrimState IO)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:toMutableVectorSized",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etoMutableVector\u003c/a\u003e\u003c/code\u003e, but allows control over how large the vector\n buffer is to start with.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int-\u003e InputStream a-\u003e IO (v (PrimState IO) a)",
        "fct-type": "function",
        "title": "toMutableVectorSized"
      },
      "index": {
        "description": "Like toMutableVector but allows control over how large the vector buffer is to start with",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "toMutableVectorSized",
        "normalized": "Int-\u003eInputStream a-\u003eIO(b(PrimState IO)a)",
        "package": "io-streams",
        "partial": "Mutable Vector Sized",
        "signature": "Int-\u003eInputStream a-\u003eIO(v(PrimState IO)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:toVector",
      "description": {
        "fct-descr": "\u003cp\u003eDrains an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, converting it to a vector. Note that this\n function reads the entire \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e strictly into memory and as such is\n not recommended for streaming applications or where the size of the input is\n not bounded or known.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e is \u003c- Streams.\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [(1::Int)..4]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003etoVector\u003c/a\u003e\u003c/code\u003e is :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (V.\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e Int)\n fromList [1,2,3,4]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (v a)",
        "fct-source": "src/System-IO-Streams-Vector.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "Drains an InputStream converting it to vector Note that this function reads the entire InputStream strictly into memory and as such is not recommended for streaming applications or where the size of the input is not bounded or known ghci is Streams fromList Int ghci Streams toVector is IO Vector Int fromList",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "toVector",
        "normalized": "InputStream a-\u003eIO(b a)",
        "package": "io-streams",
        "partial": "Vector",
        "signature": "InputStream a-\u003eIO(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:toVectorSized",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etoVector\u003c/a\u003e\u003c/code\u003e, but allows control over how large the vector buffer is to\n start with.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int -\u003e InputStream a -\u003e IO (v a)",
        "fct-source": "src/System-IO-Streams-Vector.html#toVectorSized",
        "fct-type": "function",
        "title": "toVectorSized"
      },
      "index": {
        "description": "Like toVector but allows control over how large the vector buffer is to start with",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "toVectorSized",
        "normalized": "Int-\u003eInputStream a-\u003eIO(b a)",
        "package": "io-streams",
        "partial": "Vector Sized",
        "signature": "Int-\u003eInputStream a-\u003eIO(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:vectorOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evectorOutputStream\u003c/a\u003e\u003c/code\u003e returns an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e which stores values fed\n into it and an action which flushes all stored values to a vector.\n\u003c/p\u003e\u003cp\u003eThe flush action resets the store.\n\u003c/p\u003e\u003cp\u003eNote that this function \u003cem\u003ewill\u003c/em\u003e buffer any input sent to it on the heap.\n Please don't use this unless you're sure that the amount of input provided\n is bounded and will fit in memory without issues.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e (os, flush) \u003c- Streams.\u003ccode\u003e\u003ca\u003evectorOutputStream\u003c/a\u003e\u003c/code\u003e :: IO (\u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e Int, IO (V.\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e Int))\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 1) os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 2) os\n ghci\u003e flush\n fromList [1,2]\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 3) os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e Nothing  os\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e (Just 4) os\n ghci\u003e flush\n fromList [3]\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "IO (OutputStream c, IO (v c))",
        "fct-source": "src/System-IO-Streams-Vector.html#vectorOutputStream",
        "fct-type": "function",
        "title": "vectorOutputStream"
      },
      "index": {
        "description": "vectorOutputStream returns an OutputStream which stores values fed into it and an action which flushes all stored values to vector The flush action resets the store Note that this function will buffer any input sent to it on the heap Please don use this unless you re sure that the amount of input provided is bounded and will fit in memory without issues ghci os flush Streams vectorOutputStream IO OutputStream Int IO Vector Int ghci Streams write Just os ghci Streams write Just os ghci flush fromList ghci Streams write Just os ghci Streams write Nothing os ghci Streams write Just os ghci flush fromList",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "vectorOutputStream",
        "normalized": "IO(OutputStream a,IO(b a))",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "IO(OutputStream c,IO(v c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:vectorOutputStreamSized",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003evectorOutputStream\u003c/a\u003e\u003c/code\u003e, but allows control over how large the vector\n buffer is to start with.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "Int -\u003e IO (OutputStream c, IO (v c))",
        "fct-source": "src/System-IO-Streams-Vector.html#vectorOutputStreamSized",
        "fct-type": "function",
        "title": "vectorOutputStreamSized"
      },
      "index": {
        "description": "Like vectorOutputStream but allows control over how large the vector buffer is to start with",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "vectorOutputStreamSized",
        "normalized": "Int-\u003eIO(OutputStream a,IO(b a))",
        "package": "io-streams",
        "partial": "Output Stream Sized",
        "signature": "Int-\u003eIO(OutputStream c,IO(v c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Vector.html#v:writeVector",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds a vector to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. Does \u003cem\u003enot\u003c/em\u003e write an end-of-stream to\n the stream.\n\u003c/p\u003e\u003cpre\u003e\n ghci\u003e let v = V.\u003ccode\u003efromList\u003c/code\u003e [1..4] :: V.\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e Int\n ghci\u003e os \u003c- Streams.\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e Streams.\u003ccode\u003estdout\u003c/code\u003e \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e (S.pack . show) :: IO (\u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e Int)\n ghci\u003e Streams.\u003ccode\u003e\u003ca\u003ewriteVector\u003c/a\u003e\u003c/code\u003e v os\n 1\n 2\n 3\n 4\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams.Vector",
        "fct-package": "io-streams",
        "fct-signature": "v a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Vector.html#writeVector",
        "fct-type": "function",
        "title": "writeVector"
      },
      "index": {
        "description": "Feeds vector to an OutputStream Does not write an end-of-stream to the stream ghci let fromList Vector Int ghci os Streams unlines Streams stdout Streams contramap S.pack show IO OutputStream Int ghci Streams writeVector os",
        "hierarchy": "System IO Streams Vector",
        "module": "System.IO.Streams.Vector",
        "name": "writeVector",
        "normalized": "a b-\u003eOutputStream b-\u003eIO()",
        "package": "io-streams",
        "partial": "Vector",
        "signature": "v a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to \u003ccode\u003ezlib\u003c/code\u003e and \u003ccode\u003egzip\u003c/code\u003e compression for \u003ccode\u003eBytestring\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams-Zlib.html",
        "fct-type": "module",
        "title": "Zlib"
      },
      "index": {
        "description": "Interface to zlib and gzip compression for Bytestring and Builder",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "Zlib",
        "normalized": "",
        "package": "io-streams",
        "partial": "Zlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#t:CompressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eParameter that defines the tradeoff between speed and compression ratio\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "newtype",
        "fct-source": "src/System-IO-Streams-Zlib.html#CompressionLevel",
        "fct-type": "newtype",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "Parameter that defines the tradeoff between speed and compression ratio",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "io-streams",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:CompressionLevel",
      "description": {
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "CompressionLevel Int",
        "fct-source": "src/System-IO-Streams-Zlib.html#CompressionLevel",
        "fct-type": "function",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "io-streams",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes compressed \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes uncompressed \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003ezlib\u003c/code\u003e format\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "CompressionLevel -\u003e OutputStream ByteString -\u003e IO (OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Zlib.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Convert an OutputStream that consumes compressed ByteString into an OutputStream that consumes uncompressed ByteString in the zlib format",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "compress",
        "normalized": "CompressionLevel-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "CompressionLevel-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:compressBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes compressed \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es into an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes uncompressed \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003ezlib\u003c/code\u003e format\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "CompressionLevel -\u003e OutputStream Builder -\u003e IO (OutputStream Builder)",
        "fct-source": "src/System-IO-Streams-Zlib.html#compressBuilder",
        "fct-type": "function",
        "title": "compressBuilder"
      },
      "index": {
        "description": "Convert an OutputStream that consumes compressed Builder into an OutputStream that consumes uncompressed Builder in the zlib format",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "compressBuilder",
        "normalized": "CompressionLevel-\u003eOutputStream Builder-\u003eIO(OutputStream Builder)",
        "package": "io-streams",
        "partial": "Builder",
        "signature": "CompressionLevel-\u003eOutputStream Builder-\u003eIO(OutputStream Builder)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es from the \u003ccode\u003ezlib\u003c/code\u003e format\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Zlib.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress an InputStream of strict ByteString from the zlib format",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "decompress",
        "normalized": "InputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:defaultCompressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA compression level that balances speed with compression ratio\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/System-IO-Streams-Zlib.html#defaultCompressionLevel",
        "fct-type": "function",
        "title": "defaultCompressionLevel"
      },
      "index": {
        "description": "compression level that balances speed with compression ratio",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "defaultCompressionLevel",
        "normalized": "",
        "package": "io-streams",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:gunzip",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es from the \u003ccode\u003egzip\u003c/code\u003e format\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "InputStream ByteString -\u003e IO (InputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Zlib.html#gunzip",
        "fct-type": "function",
        "title": "gunzip"
      },
      "index": {
        "description": "Decompress an InputStream of strict ByteString from the gzip format",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "gunzip",
        "normalized": "InputStream ByteString-\u003eIO(InputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream ByteString-\u003eIO(InputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:gzip",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes compressed \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes uncompressed \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003egzip\u003c/code\u003e format\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "CompressionLevel -\u003e OutputStream ByteString -\u003e IO (OutputStream ByteString)",
        "fct-source": "src/System-IO-Streams-Zlib.html#gzip",
        "fct-type": "function",
        "title": "gzip"
      },
      "index": {
        "description": "Convert an OutputStream that consumes compressed ByteString into an OutputStream that consumes uncompressed ByteString in the gzip format",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "gzip",
        "normalized": "CompressionLevel-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)",
        "package": "io-streams",
        "partial": "",
        "signature": "CompressionLevel-\u003eOutputStream ByteString-\u003eIO(OutputStream ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams-Zlib.html#v:gzipBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes compressed \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es into an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that consumes uncompressed \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003egzip\u003c/code\u003e format\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams.Zlib",
        "fct-package": "io-streams",
        "fct-signature": "CompressionLevel -\u003e OutputStream Builder -\u003e IO (OutputStream Builder)",
        "fct-source": "src/System-IO-Streams-Zlib.html#gzipBuilder",
        "fct-type": "function",
        "title": "gzipBuilder"
      },
      "index": {
        "description": "Convert an OutputStream that consumes compressed Builder into an OutputStream that consumes uncompressed Builder in the gzip format",
        "hierarchy": "System IO Streams Zlib",
        "module": "System.IO.Streams.Zlib",
        "name": "gzipBuilder",
        "normalized": "CompressionLevel-\u003eOutputStream Builder-\u003eIO(OutputStream Builder)",
        "package": "io-streams",
        "partial": "Builder",
        "signature": "CompressionLevel-\u003eOutputStream Builder-\u003eIO(OutputStream Builder)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a top-level convenience module which re-exports most of the\n \u003ccode\u003eio-streams\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eIt is recommended to import this module qualified, as follows:\n\u003c/p\u003e\u003cpre\u003e\n import           \u003ca\u003eSystem.IO.Streams\u003c/a\u003e (\u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e)\n import qualified \u003ca\u003eSystem.IO.Streams\u003c/a\u003e as Streams\n\u003c/pre\u003e\u003cp\u003eFor an in-depth tutorial on how to use \u003ccode\u003eio-streams\u003c/code\u003e, please see the\n \u003ca\u003eSystem.IO.Streams.Tutorial\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eIs there a function missing from this library? Interested in contributing?\n Send a pull request to \u003ca\u003ehttp://github.com/snapframework/io-streams\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Streams.html",
        "fct-type": "module",
        "title": "Streams"
      },
      "index": {
        "description": "This module is top-level convenience module which re-exports most of the io-streams library It is recommended to import this module qualified as follows import System.IO.Streams Generator InputStream OutputStream import qualified System.IO.Streams as Streams For an in-depth tutorial on how to use io-streams please see the System.IO.Streams.Tutorial module Is there function missing from this library Interested in contributing Send pull request to http github.com snapframework io-streams",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "Streams",
        "normalized": "",
        "package": "io-streams",
        "partial": "Streams",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#t:Generator",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is a coroutine monad that can be used to define complex\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es. You can cause a value of type \u003ccode\u003eJust r\u003c/code\u003e to appear when the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is read by calling \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n g :: \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e Int ()\n g = do\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 1\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 2\n     Streams.\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e 3\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e can be turned into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e by calling\n \u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n m :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e]\n m = Streams.\u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e g \u003e\u003e= Streams.\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e     -- value returned is [1,2,3]\n\u003c/pre\u003e\u003cp\u003eYou can perform IO by calling \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e, and turn a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e into an\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003efromGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a general rule, you should not acquire resources that need to be freed\n from a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e, because there is no guarantee the coroutine continuation\n will ever be called, nor can you catch an exception from within a\n \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#Generator",
        "fct-type": "data",
        "title": "Generator"
      },
      "index": {
        "description": "Generator is coroutine monad that can be used to define complex InputStream You can cause value of type Just to appear when the InputStream is read by calling yield Generator Int do Streams yield Streams yield Streams yield Generator can be turned into an InputStream by calling fromGenerator IO Int Streams fromGenerator Streams toList value returned is You can perform IO by calling liftIO and turn Generator into an InputStream with fromGenerator As general rule you should not acquire resources that need to be freed from Generator because there is no guarantee the coroutine continuation will ever be called nor can you catch an exception from within Generator",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "Generator",
        "normalized": "",
        "package": "io-streams",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#t:InputStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e generates values of type \u003ccode\u003ec\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eTwo primitive operations are defined on \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e c)\u003c/code\u003e reads a value from the stream,\n where \"end of stream\" is signaled by \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e :: c -\u003e \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e \"pushes back\" a value to the\n stream.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is intended that \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es obey the following law:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e c stream \u003e\u003e \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e c)\u003c/pre\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#InputStream",
        "fct-type": "data",
        "title": "InputStream"
      },
      "index": {
        "description": "An InputStream generates values of type in the IO monad Two primitive operations are defined on InputStream read InputStream IO Maybe reads value from the stream where end of stream is signaled by read returning Nothing unRead InputStream IO pushes back value to the stream It is intended that InputStream obey the following law unRead stream read stream return Just",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "InputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#t:OutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e consumes values of type \u003ccode\u003ec\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n The only primitive operation defined on \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e c -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eValues of type \u003ccode\u003ec\u003c/code\u003e are written in an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e by wrapping them in\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, and the end of the stream is indicated by by supplying \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you supply a value after a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the behavior is defined by the\n implementer of the given \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. (All \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e definitions in\n this library will simply discard the extra input.)\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Streams-Internal.html#OutputStream",
        "fct-type": "data",
        "title": "OutputStream"
      },
      "index": {
        "description": "An OutputStream consumes values of type in the IO monad The only primitive operation defined on OutputStream is write Maybe OutputStream IO Values of type are written in an OutputStream by wrapping them in Just and the end of the stream is indicated by by supplying Nothing If you supply value after Nothing the behavior is defined by the implementer of the given OutputStream All OutputStream definitions in this library will simply discard the extra input",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "OutputStream",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:appendInputStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eappendInputStream\u003c/a\u003e\u003c/code\u003e concatenates two \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es, analogous to (\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e)\n for lists.\n\u003c/p\u003e\u003cp\u003eThe second \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e continues where the first \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e ends.\n\u003c/p\u003e\u003cp\u003eNote: values pushed back to \u003ccode\u003e\u003ca\u003eappendInputStream\u003c/a\u003e\u003c/code\u003e are not propagated to either\n wrapped \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#appendInputStream",
        "fct-type": "function",
        "title": "appendInputStream"
      },
      "index": {
        "description": "appendInputStream concatenates two InputStream analogous to for lists The second InputStream continues where the first InputStream ends Note values pushed back to appendInputStream are not propagated to either wrapped InputStream",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "appendInputStream",
        "normalized": "InputStream a-\u003eInputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "InputStream a-\u003eInputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:atEOF",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is at end-of-stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO Bool",
        "fct-source": "src/System-IO-Streams-Internal.html#atEOF",
        "fct-type": "function",
        "title": "atEOF"
      },
      "index": {
        "description": "Checks if an InputStream is at end-of-stream",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "atEOF",
        "normalized": "InputStream a-\u003eIO Bool",
        "package": "io-streams",
        "partial": "EOF",
        "signature": "InputStream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:concatInputStreams",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatInputStreams\u003c/a\u003e\u003c/code\u003e concatenates a list of \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es, analogous to\n (\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e) for lists.\n\u003c/p\u003e\u003cp\u003eSubsequent \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es continue where the previous one \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e\n ends.\n\u003c/p\u003e\u003cp\u003eNote: values pushed back to the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e returned by\n \u003ccode\u003e\u003ca\u003econcatInputStreams\u003c/a\u003e\u003c/code\u003e are not propagated to any of the source\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "[InputStream a] -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#concatInputStreams",
        "fct-type": "function",
        "title": "concatInputStreams"
      },
      "index": {
        "description": "concatInputStreams concatenates list of InputStream analogous to for lists Subsequent InputStream continue where the previous one InputStream ends Note values pushed back to the InputStream returned by concatInputStreams are not propagated to any of the source InputStream",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "concatInputStreams",
        "normalized": "[InputStream a]-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Streams",
        "signature": "[InputStream a]-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, supplying values from the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, and propagating the end-of-stream\n message from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e through to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe connection ends when the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e yields a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connects an InputStream and OutputStream supplying values from the InputStream to the OutputStream and propagating the end-of-stream message from the InputStream through to the OutputStream The connection ends when the InputStream yields Nothing",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "connect",
        "normalized": "InputStream a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:connectTo",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econnectTo\u003c/a\u003e\u003c/code\u003e function is just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUseful for writing expressions like \u003ccode\u003efromList [1,2,3] \u003e\u003e= connectTo foo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#connectTo",
        "fct-type": "function",
        "title": "connectTo"
      },
      "index": {
        "description": "The connectTo function is just flip connect Useful for writing expressions like fromList connectTo foo",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "connectTo",
        "normalized": "OutputStream a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To",
        "signature": "OutputStream a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:fromGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "Generator r a -\u003e IO (InputStream r)",
        "fct-source": "src/System-IO-Streams-Internal.html#fromGenerator",
        "fct-type": "function",
        "title": "fromGenerator"
      },
      "index": {
        "description": "Turns Generator into an InputStream",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "fromGenerator",
        "normalized": "Generator a b-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Generator",
        "signature": "Generator r a-\u003eIO(InputStream r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:lockingInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e into a thread-safe \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e, at a slight\n performance penalty.\n\u003c/p\u003e\u003cp\u003eFor performance reasons, this library provides non-thread-safe streams by\n default. Use the \u003ccode\u003elocking\u003c/code\u003e functions to convert these streams into slightly\n slower, but thread-safe, equivalents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#lockingInputStream",
        "fct-type": "function",
        "title": "lockingInputStream"
      },
      "index": {
        "description": "Converts an InputStream into thread-safe InputStream at slight performance penalty For performance reasons this library provides non-thread-safe streams by default Use the locking functions to convert these streams into slightly slower but thread-safe equivalents",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "lockingInputStream",
        "normalized": "InputStream a-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "InputStream a-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:lockingOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e into a thread-safe \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, at a slight\n performance penalty.\n\u003c/p\u003e\u003cp\u003eFor performance reasons, this library provides non-thread-safe streams by\n default. Use the \u003ccode\u003elocking\u003c/code\u003e functions to convert these streams into slightly\n slower, but thread-safe, equivalents.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#lockingOutputStream",
        "fct-type": "function",
        "title": "lockingOutputStream"
      },
      "index": {
        "description": "Converts an OutputStream into thread-safe OutputStream at slight performance penalty For performance reasons this library provides non-thread-safe streams by default Use the locking functions to convert these streams into slightly slower but thread-safe equivalents",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "lockingOutputStream",
        "normalized": "OutputStream a-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "OutputStream a-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:makeInputStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e from a value-producing action.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003emakeInputStream m\u003c/code\u003e) calls the action \u003ccode\u003em\u003c/code\u003e each time you request a value\n from the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. The given action is extended with the default\n pushback mechanism (see \u003ca\u003eSystem.IO.Streams.Internal\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "IO (Maybe a) -\u003e IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#makeInputStream",
        "fct-type": "function",
        "title": "makeInputStream"
      },
      "index": {
        "description": "Creates an InputStream from value-producing action makeInputStream calls the action each time you request value from the InputStream The given action is extended with the default pushback mechanism see System.IO.Streams.Internal",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "makeInputStream",
        "normalized": "IO(Maybe a)-\u003eIO(InputStream a)",
        "package": "io-streams",
        "partial": "Input Stream",
        "signature": "IO(Maybe a)-\u003eIO(InputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:makeOutputStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e from a value-consuming action.\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003emakeOutputStream f\u003c/code\u003e) runs the computation \u003ccode\u003ef\u003c/code\u003e on each value fed to it.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "(Maybe a -\u003e IO ()) -\u003e IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#makeOutputStream",
        "fct-type": "function",
        "title": "makeOutputStream"
      },
      "index": {
        "description": "Creates an OutputStream from value-consuming action makeOutputStream runs the computation on each value fed to it",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "makeOutputStream",
        "normalized": "(Maybe a-\u003eIO())-\u003eIO(OutputStream a)",
        "package": "io-streams",
        "partial": "Output Stream",
        "signature": "(Maybe a-\u003eIO())-\u003eIO(OutputStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:nullInput",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e that yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e immediately.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "IO (InputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#nullInput",
        "fct-type": "function",
        "title": "nullInput"
      },
      "index": {
        "description": "An empty InputStream that yields Nothing immediately",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "nullInput",
        "normalized": "",
        "package": "io-streams",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:nullOutput",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e that discards any input fed to it.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "IO (OutputStream a)",
        "fct-source": "src/System-IO-Streams-Internal.html#nullOutput",
        "fct-type": "function",
        "title": "nullOutput"
      },
      "index": {
        "description": "An empty OutputStream that discards any input fed to it",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "nullOutput",
        "normalized": "",
        "package": "io-streams",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eObserves the first value from an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e without consuming it.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is empty. \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e satisfies the\n following law:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e stream \u003e\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Observes the first value from an InputStream without consuming it Returns Nothing if the InputStream is empty peek satisfies the following law Streams peek stream Streams read stream Streams read stream",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "peek",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eReads one value from an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns either a value wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the end of the\n stream is reached.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Streams-Internal.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Reads one value from an InputStream Returns either value wrapped in Just or Nothing if the end of the stream is reached",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "read",
        "normalized": "InputStream a-\u003eIO(Maybe a)",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:supply",
      "description": {
        "fct-descr": "\u003cp\u003eConnects an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e without passing the\n end-of-stream notification through to the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse this to supply an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e with multiple \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003es and use\n \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e for the final \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e to finalize the \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e, like\n so:\n\u003c/p\u003e\u003cpre\u003e\n do Streams.\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e  input1 output\n    Streams.\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e  input2 output\n    Streams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e input3 output\n\u003c/pre\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "InputStream a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#supply",
        "fct-type": "function",
        "title": "supply"
      },
      "index": {
        "description": "Connects an InputStream to an OutputStream without passing the end-of-stream notification through to the OutputStream Use this to supply an OutputStream with multiple InputStream and use connect for the final InputStream to finalize the OutputStream like so do Streams supply input1 output Streams supply input2 output Streams connect input3 output",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "supply",
        "normalized": "InputStream a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "InputStream a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:supplyTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esupply\u003c/a\u003e\u003c/code\u003e with the arguments flipped.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "OutputStream a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#supplyTo",
        "fct-type": "function",
        "title": "supplyTo"
      },
      "index": {
        "description": "supply with the arguments flipped",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "supplyTo",
        "normalized": "OutputStream a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "To",
        "signature": "OutputStream a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:unRead",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a value back onto an input stream. \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e should\n satisfy the following law, with the possible exception of side effects:\n\u003c/p\u003e\u003cpre\u003e\n Streams.\u003ccode\u003e\u003ca\u003eunRead\u003c/a\u003e\u003c/code\u003e c stream \u003e\u003e Streams.\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e stream === \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e c)\n\u003c/pre\u003e\u003cp\u003eNote that this could be used to add values back to the stream that were not\n originally drawn from the stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "a -\u003e InputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#unRead",
        "fct-type": "function",
        "title": "unRead"
      },
      "index": {
        "description": "Pushes value back onto an input stream read and unRead should satisfy the following law with the possible exception of side effects Streams unRead stream Streams read stream return Just Note that this could be used to add values back to the stream that were not originally drawn from the stream",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "unRead",
        "normalized": "a-\u003eInputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "Read",
        "signature": "a-\u003eInputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds a value to an \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e. Values of type \u003ccode\u003ec\u003c/code\u003e are written in an\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e by wrapping them in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, and the end of the stream is\n indicated by by supplying \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "Maybe a -\u003e OutputStream a -\u003e IO ()",
        "fct-source": "src/System-IO-Streams-Internal.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Feeds value to an OutputStream Values of type are written in an OutputStream by wrapping them in Just and the end of the stream is indicated by by supplying Nothing",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "write",
        "normalized": "Maybe a-\u003eOutputStream a-\u003eIO()",
        "package": "io-streams",
        "partial": "",
        "signature": "Maybe a-\u003eOutputStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-streams/docs/System-IO-Streams.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eCalling \u003ccode\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e causes the value \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e to appear on the input\n when this generator is converted to an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e. The rest of the\n computation after the call to \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e is resumed later when the\n \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
        "fct-module": "System.IO.Streams",
        "fct-package": "io-streams",
        "fct-signature": "r -\u003e Generator r ()",
        "fct-source": "src/System-IO-Streams-Internal.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Calling yield causes the value Just to appear on the input when this generator is converted to an InputStream The rest of the computation after the call to yield is resumed later when the InputStream is read again",
        "hierarchy": "System IO Streams",
        "module": "System.IO.Streams",
        "name": "yield",
        "normalized": "a-\u003eGenerator a()",
        "package": "io-streams",
        "partial": "",
        "signature": "r-\u003eGenerator r()"
      }
    }
  }
]