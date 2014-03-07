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
        "word": "pdf-toolbox-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eError used by API\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "Error",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Error used by API",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "Error",
          "package": "pdf-toolbox-core",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAPI uses this for error handling\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "PdfE",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Error.html#PdfE",
          "type": "type"
        },
        "index": {
          "description": "API uses this for error handling",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "PdfE",
          "package": "pdf-toolbox-core",
          "partial": "Pdf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#t:PdfE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "PdfError",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Error.html#PdfError",
          "type": "data"
        },
        "index": {
          "description": "Errors",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "PdfError",
          "package": "pdf-toolbox-core",
          "partial": "Pdf Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#t:PdfError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Error",
          "name": "AnnotatedError",
          "package": "pdf-toolbox-core",
          "signature": "AnnotatedError String PdfError",
          "source": "src/Pdf-Toolbox-Core-Error.html#PdfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "AnnotatedError",
          "package": "pdf-toolbox-core",
          "partial": "Annotated Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:AnnotatedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Error",
          "name": "IOError",
          "package": "pdf-toolbox-core",
          "signature": "IOError IOError",
          "source": "src/Pdf-Toolbox-Core-Error.html#PdfError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "IOError",
          "package": "pdf-toolbox-core",
          "partial": "IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser error\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "ParseError",
          "package": "pdf-toolbox-core",
          "signature": "ParseError [String] String",
          "source": "src/Pdf-Toolbox-Core-Error.html#PdfError",
          "type": "function"
        },
        "index": {
          "description": "Parser error",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "ParseError",
          "normalized": "ParseError[String]String",
          "package": "pdf-toolbox-core",
          "partial": "Parse Error",
          "signature": "ParseError[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething unexpected\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "UnexpectedError",
          "package": "pdf-toolbox-core",
          "signature": "UnexpectedError String",
          "source": "src/Pdf-Toolbox-Core-Error.html#PdfError",
          "type": "function"
        },
        "index": {
          "description": "Something unexpected",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "UnexpectedError",
          "package": "pdf-toolbox-core",
          "partial": "Unexpected Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:UnexpectedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap any \u003ccode\u003e\u003ca\u003ePdfError\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eAnnotatedError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUsefull when you want to add high-level description to\n error, returned by low-level function\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "annotateError",
          "package": "pdf-toolbox-core",
          "signature": "String -\u003e PdfE m a -\u003e PdfE m a",
          "source": "src/Pdf-Toolbox-Core-Error.html#annotateError",
          "type": "function"
        },
        "index": {
          "description": "Wrap any PdfError into AnnotatedError Usefull when you want to add high-level description to error returned by low-level function",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "annotateError",
          "normalized": "String-\u003ePdfE a b-\u003ePdfE a b",
          "package": "pdf-toolbox-core",
          "partial": "Error",
          "signature": "String-\u003ePdfE m a-\u003ePdfE m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:annotateError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eannotateError\u003c/a\u003e\u003c/code\u003e with fliped arguments\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "annotatingError",
          "package": "pdf-toolbox-core",
          "signature": "PdfE m a -\u003e String -\u003e PdfE m a",
          "source": "src/Pdf-Toolbox-Core-Error.html#annotatingError",
          "type": "function"
        },
        "index": {
          "description": "annotateError with fliped arguments",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "annotatingError",
          "normalized": "PdfE a b-\u003eString-\u003ePdfE a b",
          "package": "pdf-toolbox-core",
          "partial": "Error",
          "signature": "PdfE m a-\u003eString-\u003ePdfE m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:annotatingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch exception if any and convert to \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "tryPdfIO",
          "package": "pdf-toolbox-core",
          "signature": "IO a -\u003e PdfE m a",
          "source": "src/Pdf-Toolbox-Core-Error.html#tryPdfIO",
          "type": "function"
        },
        "index": {
          "description": "Catch exception if any and convert to IOError",
          "hierarchy": "Pdf Toolbox Core Error",
          "module": "Pdf.Toolbox.Core.Error",
          "name": "tryPdfIO",
          "normalized": "IO a-\u003ePdfE b a",
          "package": "pdf-toolbox-core",
          "partial": "Pdf IO",
          "signature": "IO a-\u003ePdfE m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Error.html#v:tryPdfIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInput stream with random access\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html",
          "type": "module"
        },
        "index": {
          "description": "Input stream with random access",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "partial": "RIS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential input stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "IS",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#IS",
          "type": "type"
        },
        "index": {
          "description": "Sequential input stream",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "IS",
          "package": "pdf-toolbox-core",
          "partial": "IS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#t:IS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom access Input Stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS",
          "type": "newtype"
        },
        "index": {
          "description": "Random access Input Stream",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "partial": "RIS",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#t:RIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state of \u003ccode\u003e\u003ca\u003eRIS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS'",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS%27",
          "type": "data"
        },
        "index": {
          "description": "Internal state of RIS",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS'",
          "package": "pdf-toolbox-core",
          "partial": "RIS'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#t:RIS-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "signature": "RIS (IORef RIS')",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "partial": "RIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:RIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS'",
          "package": "pdf-toolbox-core",
          "signature": "RIS'",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "RIS'",
          "package": "pdf-toolbox-core",
          "partial": "RIS'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:RIS-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate RIS from \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e with default chunk size\n\u003c/p\u003e",
          "module": "[\"Pdf.Toolbox.Core.IO.RIS\",\"Pdf.Toolbox.Core.IO\"]",
          "name": "fromHandle",
          "package": "pdf-toolbox-core",
          "signature": "Handle -\u003e IO RIS",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#fromHandle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:fromHandle\",\"http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:fromHandle\"]"
        },
        "index": {
          "description": "Create RIS from Handle with default chunk size",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "fromHandle",
          "normalized": "Handle-\u003eIO RIS",
          "package": "pdf-toolbox-core",
          "partial": "Handle",
          "signature": "Handle-\u003eIO RIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:fromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate RIS from \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e with the specified chunk size\n\u003c/p\u003e",
          "module": "[\"Pdf.Toolbox.Core.IO.RIS\",\"Pdf.Toolbox.Core.IO\"]",
          "name": "fromHandle'",
          "package": "pdf-toolbox-core",
          "signature": "Handle -\u003e Int -\u003e IO RIS",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#fromHandle%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:fromHandle-39-\",\"http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:fromHandle-39-\"]"
        },
        "index": {
          "description": "Create RIS from Handle with the specified chunk size",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "fromHandle'",
          "normalized": "Handle-\u003eInt-\u003eIO RIS",
          "package": "pdf-toolbox-core",
          "partial": "Handle'",
          "signature": "Handle-\u003eInt-\u003eIO RIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:fromHandle-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet sequential input stream, that is valid until the next \u003ccode\u003e\u003ca\u003eseek\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "inputStream",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e IO IS",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#inputStream",
          "type": "function"
        },
        "index": {
          "description": "Get sequential input stream that is valid until the next seek",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "inputStream",
          "normalized": "RIS-\u003eIO IS",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "signature": "RIS-\u003eIO IS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:inputStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risInputStream",
          "package": "pdf-toolbox-core",
          "signature": "IS",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risInputStream",
          "package": "pdf-toolbox-core",
          "partial": "Input Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:risInputStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risPos",
          "package": "pdf-toolbox-core",
          "signature": "IO Int64",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risPos",
          "package": "pdf-toolbox-core",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:risPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risSeek",
          "package": "pdf-toolbox-core",
          "signature": "Int64 -\u003e IO (IO (Maybe ByteString))",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risSeek",
          "normalized": "Int-\u003eIO(IO(Maybe ByteString))",
          "package": "pdf-toolbox-core",
          "partial": "Seek",
          "signature": "Int-\u003eIO(IO(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:risSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risSize",
          "package": "pdf-toolbox-core",
          "signature": "Int64",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "risSize",
          "package": "pdf-toolbox-core",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:risSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek the stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "seek",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e Int64 -\u003e IO ()",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#seek",
          "type": "function"
        },
        "index": {
          "description": "Seek the stream",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "seek",
          "normalized": "RIS-\u003eInt-\u003eIO()",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bytes in the stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "size",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e IO Int64",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#size",
          "type": "function"
        },
        "index": {
          "description": "Number of bytes in the stream",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "size",
          "normalized": "RIS-\u003eIO Int",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent position in bytes\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "tell",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e IO Int64",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#tell",
          "type": "function"
        },
        "index": {
          "description": "Current position in bytes",
          "hierarchy": "Pdf Toolbox Core IO RIS",
          "module": "Pdf.Toolbox.Core.IO.RIS",
          "name": "tell",
          "normalized": "RIS-\u003eIO Int",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO-RIS.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic IO operations for PDF\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "IO",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Basic IO operations for PDF",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "IO",
          "package": "pdf-toolbox-core",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential input stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "IS",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#IS",
          "type": "type"
        },
        "index": {
          "description": "Sequential input stream",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "IS",
          "package": "pdf-toolbox-core",
          "partial": "IS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#t:IS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO",
          "name": "MonadIO",
          "package": "pdf-toolbox-core",
          "type": "class"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "MonadIO",
          "package": "pdf-toolbox-core",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom access Input Stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-IO-RIS.html#RIS",
          "type": "data"
        },
        "index": {
          "description": "Random access Input Stream",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "RIS",
          "package": "pdf-toolbox-core",
          "partial": "RIS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#t:RIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ereadExactly\u003c/a\u003e\u003c/code\u003e, but ignores the result\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "dropExactly",
          "package": "pdf-toolbox-core",
          "signature": "Int -\u003e IS -\u003e PdfE m ()",
          "source": "src/Pdf-Toolbox-Core-IO.html#dropExactly",
          "type": "function"
        },
        "index": {
          "description": "Same as readExactly but ignores the result",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "dropExactly",
          "normalized": "Int-\u003eIS-\u003ePdfE a()",
          "package": "pdf-toolbox-core",
          "partial": "Exactly",
          "signature": "Int-\u003eIS-\u003ePdfE m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:dropExactly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert random access stream to sequential\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "inputStream",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e PdfE m IS",
          "source": "src/Pdf-Toolbox-Core-IO.html#inputStream",
          "type": "function"
        },
        "index": {
          "description": "Convert random access stream to sequential",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "inputStream",
          "normalized": "RIS-\u003ePdfE a IS",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "signature": "RIS-\u003ePdfE m IS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:inputStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.IO",
          "name": "liftIO",
          "package": "pdf-toolbox-core",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "pdf-toolbox-core",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse from \u003ccode\u003e\u003ca\u003eIS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "parse",
          "package": "pdf-toolbox-core",
          "signature": "Parser r -\u003e IS -\u003e PdfE m r",
          "source": "src/Pdf-Toolbox-Core-IO.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse from IS",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "parse",
          "normalized": "Parser a-\u003eIS-\u003ePdfE b a",
          "package": "pdf-toolbox-core",
          "signature": "Parser r-\u003eIS-\u003ePdfE m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereadExactly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "readExactly",
          "package": "pdf-toolbox-core",
          "signature": "Int -\u003e IS -\u003e PdfE m ByteString",
          "source": "src/Pdf-Toolbox-Core-IO.html#readExactly",
          "type": "function"
        },
        "index": {
          "description": "See readExactly",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "readExactly",
          "normalized": "Int-\u003eIS-\u003ePdfE a ByteString",
          "package": "pdf-toolbox-core",
          "partial": "Exactly",
          "signature": "Int-\u003eIS-\u003ePdfE m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:readExactly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange input position in \u003ccode\u003e\u003ca\u003eRIS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "seek",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e Int64 -\u003e PdfE m ()",
          "source": "src/Pdf-Toolbox-Core-IO.html#seek",
          "type": "function"
        },
        "index": {
          "description": "Change input position in RIS",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "seek",
          "normalized": "RIS-\u003eInt-\u003ePdfE a()",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003eInt-\u003ePdfE m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of bytes in \u003ccode\u003e\u003ca\u003eRIS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "size",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e PdfE m Int64",
          "source": "src/Pdf-Toolbox-Core-IO.html#size",
          "type": "function"
        },
        "index": {
          "description": "Total number of bytes in RIS",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "size",
          "normalized": "RIS-\u003ePdfE a Int",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003ePdfE m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etakeBytes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "takeBytes",
          "package": "pdf-toolbox-core",
          "signature": "Int64 -\u003e IS -\u003e PdfE m IS",
          "source": "src/Pdf-Toolbox-Core-IO.html#takeBytes",
          "type": "function"
        },
        "index": {
          "description": "See takeBytes",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "takeBytes",
          "normalized": "Int-\u003eIS-\u003ePdfE a IS",
          "package": "pdf-toolbox-core",
          "partial": "Bytes",
          "signature": "Int-\u003eIS-\u003ePdfE m IS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:takeBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent input position\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "tell",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e PdfE m Int64",
          "source": "src/Pdf-Toolbox-Core-IO.html#tell",
          "type": "function"
        },
        "index": {
          "description": "Current input position",
          "hierarchy": "Pdf Toolbox Core IO",
          "module": "Pdf.Toolbox.Core.IO",
          "name": "tell",
          "normalized": "RIS-\u003ePdfE a Int",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003ePdfE m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-IO.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRender \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e to bytestring\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "Builder",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Render Object to bytestring",
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "Builder",
          "package": "pdf-toolbox-core",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildArray",
          "package": "pdf-toolbox-core",
          "signature": "Array -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildArray",
          "normalized": "Array-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Array",
          "signature": "Array-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildBoolean",
          "package": "pdf-toolbox-core",
          "signature": "Boolean -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildBoolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildBoolean",
          "normalized": "Boolean-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Boolean",
          "signature": "Boolean-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildDict",
          "package": "pdf-toolbox-core",
          "signature": "Dict -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildDict",
          "normalized": "Dict-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Dict",
          "signature": "Dict-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild indirect object\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildIndirectObject",
          "package": "pdf-toolbox-core",
          "signature": "Ref -\u003e Object ByteString -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildIndirectObject",
          "type": "function"
        },
        "index": {
          "description": "Build indirect object",
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildIndirectObject",
          "normalized": "Ref-\u003eObject ByteString-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Indirect Object",
          "signature": "Ref-\u003eObject ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildIndirectObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildName",
          "package": "pdf-toolbox-core",
          "signature": "Name -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildName",
          "normalized": "Name-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Name",
          "signature": "Name-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildNumber",
          "package": "pdf-toolbox-core",
          "signature": "Number -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildNumber",
          "normalized": "Number-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Number",
          "signature": "Number-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender inline object (without \"obj/endobj\").\n It is \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e to supply \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, because it could not\n be inlined, but should always be an indirect object\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildObject",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildObject",
          "type": "function"
        },
        "index": {
          "description": "Render inline object without obj endobj It is error to supply Stream because it could not be inlined but should always be an indirect object",
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildObject",
          "normalized": "Object a-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "signature": "Object a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildRef",
          "package": "pdf-toolbox-core",
          "signature": "Ref -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildRef",
          "normalized": "Ref-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Ref",
          "signature": "Ref-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildStr",
          "package": "pdf-toolbox-core",
          "signature": "Str -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildStr",
          "normalized": "Str-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Str",
          "signature": "Str-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildStream",
          "package": "pdf-toolbox-core",
          "signature": "Stream ByteString -\u003e Builder",
          "source": "src/Pdf-Toolbox-Core-Object-Builder.html#buildStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Builder",
          "module": "Pdf.Toolbox.Core.Object.Builder",
          "name": "buildStream",
          "normalized": "Stream ByteString-\u003eBuilder",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "signature": "Stream ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Builder.html#v:buildStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule contains definitions of pdf objects\n\u003c/p\u003e\u003cp\u003eSee PDF1.7:7.3\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Types",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Module contains definitions of pdf objects See PDF1.7",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Types",
          "package": "pdf-toolbox-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Array",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Array",
          "type": "newtype"
        },
        "index": {
          "description": "An array",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Array",
          "package": "pdf-toolbox-core",
          "partial": "Array",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"true\" or \"false\"\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Boolean",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Boolean",
          "type": "newtype"
        },
        "index": {
          "description": "true or false",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Boolean",
          "package": "pdf-toolbox-core",
          "partial": "Boolean",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of key/value pairs\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Dict",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Dict",
          "type": "newtype"
        },
        "index": {
          "description": "Set of key value pairs",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Dict",
          "package": "pdf-toolbox-core",
          "partial": "Dict",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames usually are used as keys in dictionaries\n\u003c/p\u003e\u003cp\u003eThey starts with '/', but we strip it out, see \u003ccode\u003e\u003ca\u003eparseName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Name",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Name",
          "type": "newtype"
        },
        "index": {
          "description": "Names usually are used as keys in dictionaries They starts with but we strip it out see parseName",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Name",
          "package": "pdf-toolbox-core",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger or real \n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Number",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Number",
          "type": "data"
        },
        "index": {
          "description": "Integer or real",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Number",
          "package": "pdf-toolbox-core",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny pdf object\n\u003c/p\u003e\u003cp\u003eIt is parameterized by \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e content\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Object",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "data"
        },
        "index": {
          "description": "Any pdf object It is parameterized by Stream content",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Object",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject reference, contains object index and generation\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Ref",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "Object reference contains object index and generation",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Ref",
          "package": "pdf-toolbox-core",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence of zero or more bytes\n\u003c/p\u003e\u003cp\u003eRepresents both the literal and hexadecimal strings\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Str",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Str",
          "type": "newtype"
        },
        "index": {
          "description": "Sequence of zero or more bytes Represents both the literal and hexadecimal strings",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Str",
          "package": "pdf-toolbox-core",
          "partial": "Str",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains stream dictionary and a payload\n\u003c/p\u003e\u003cp\u003eThe payload could be offset within pdf file, actual content,\n content stream or nothing\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Stream",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "Contains stream dictionary and payload The payload could be offset within pdf file actual content content stream or nothing",
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Stream",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Array",
          "package": "pdf-toolbox-core",
          "signature": "Array [Object ()]",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Array",
          "normalized": "Array[Object()]",
          "package": "pdf-toolbox-core",
          "partial": "Array",
          "signature": "Array[Object()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Boolean",
          "package": "pdf-toolbox-core",
          "signature": "Boolean Bool",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Boolean",
          "package": "pdf-toolbox-core",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Dict",
          "package": "pdf-toolbox-core",
          "signature": "Dict [(Name, Object ())]",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Dict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Dict",
          "normalized": "Dict[(Name,Object())]",
          "package": "pdf-toolbox-core",
          "partial": "Dict",
          "signature": "Dict[(Name,Object())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Name",
          "package": "pdf-toolbox-core",
          "signature": "Name ByteString",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Name",
          "package": "pdf-toolbox-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "NumInt",
          "package": "pdf-toolbox-core",
          "signature": "NumInt Int",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "NumInt",
          "package": "pdf-toolbox-core",
          "partial": "Num Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:NumInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "NumReal",
          "package": "pdf-toolbox-core",
          "signature": "NumReal Double",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "NumReal",
          "package": "pdf-toolbox-core",
          "partial": "Num Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:NumReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OArray",
          "package": "pdf-toolbox-core",
          "signature": "OArray Array",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OArray",
          "package": "pdf-toolbox-core",
          "partial": "OArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:OArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OBoolean",
          "package": "pdf-toolbox-core",
          "signature": "OBoolean Boolean",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OBoolean",
          "package": "pdf-toolbox-core",
          "partial": "OBoolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:OBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ODict",
          "package": "pdf-toolbox-core",
          "signature": "ODict Dict",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ODict",
          "package": "pdf-toolbox-core",
          "partial": "ODict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:ODict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OName",
          "package": "pdf-toolbox-core",
          "signature": "OName Name",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OName",
          "package": "pdf-toolbox-core",
          "partial": "OName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:OName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ONull",
          "package": "pdf-toolbox-core",
          "signature": "ONull",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ONull",
          "package": "pdf-toolbox-core",
          "partial": "ONull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:ONull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ONumber",
          "package": "pdf-toolbox-core",
          "signature": "ONumber Number",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ONumber",
          "package": "pdf-toolbox-core",
          "partial": "ONumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:ONumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ORef",
          "package": "pdf-toolbox-core",
          "signature": "ORef Ref",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "ORef",
          "package": "pdf-toolbox-core",
          "partial": "ORef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:ORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OStr",
          "package": "pdf-toolbox-core",
          "signature": "OStr Str",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OStr",
          "package": "pdf-toolbox-core",
          "partial": "OStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:OStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OStream",
          "package": "pdf-toolbox-core",
          "signature": "OStream (Stream a)",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "OStream",
          "package": "pdf-toolbox-core",
          "partial": "OStream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:OStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Ref",
          "package": "pdf-toolbox-core",
          "signature": "Ref Int Int",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Ref",
          "package": "pdf-toolbox-core",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Str",
          "package": "pdf-toolbox-core",
          "signature": "Str ByteString",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Str",
          "package": "pdf-toolbox-core",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Stream",
          "package": "pdf-toolbox-core",
          "signature": "Stream Dict a",
          "source": "src/Pdf-Toolbox-Core-Object-Types.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Types",
          "module": "Pdf.Toolbox.Core.Object.Types",
          "name": "Stream",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Types.html#v:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtils relayted to pdf objects\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "Util",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utils relayted to pdf objects",
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "Util",
          "package": "pdf-toolbox-core",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to cast \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e to specific type\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "FromObject",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#FromObject",
          "type": "class"
        },
        "index": {
          "description": "Allows you to cast Object to specific type",
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "FromObject",
          "package": "pdf-toolbox-core",
          "partial": "From Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#t:FromObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "deleteValueForKey",
          "package": "pdf-toolbox-core",
          "signature": "Name -\u003e Dict -\u003e Dict",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#deleteValueForKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "deleteValueForKey",
          "normalized": "Name-\u003eDict-\u003eDict",
          "package": "pdf-toolbox-core",
          "partial": "Value For Key",
          "signature": "Name-\u003eDict-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:deleteValueForKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "fromObject",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m c",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#fromObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "fromObject",
          "normalized": "Object a-\u003ePdfE b c",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "signature": "Object a-\u003ePdfE m c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:fromObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "intValue",
          "package": "pdf-toolbox-core",
          "signature": "Number -\u003e PdfE m Int",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#intValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "intValue",
          "normalized": "Number-\u003ePdfE a Int",
          "package": "pdf-toolbox-core",
          "partial": "Value",
          "signature": "Number-\u003ePdfE m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:intValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "lookupDict",
          "package": "pdf-toolbox-core",
          "signature": "Name -\u003e Dict -\u003e PdfE m (Object ())",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#lookupDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "lookupDict",
          "normalized": "Name-\u003eDict-\u003ePdfE a(Object())",
          "package": "pdf-toolbox-core",
          "partial": "Dict",
          "signature": "Name-\u003eDict-\u003ePdfE m(Object())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:lookupDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "lookupDict'",
          "package": "pdf-toolbox-core",
          "signature": "Name -\u003e Dict -\u003e Maybe (Object ())",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#lookupDict%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "lookupDict'",
          "normalized": "Name-\u003eDict-\u003eMaybe(Object())",
          "package": "pdf-toolbox-core",
          "partial": "Dict'",
          "signature": "Name-\u003eDict-\u003eMaybe(Object())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:lookupDict-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to all stream contents\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "mapObject",
          "package": "pdf-toolbox-core",
          "signature": "(a -\u003e b) -\u003e Object a -\u003e Object b",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#mapObject",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all stream contents",
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "mapObject",
          "normalized": "(a-\u003eb)-\u003eObject a-\u003eObject b",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "signature": "(a-\u003eb)-\u003eObject a-\u003eObject b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:mapObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "realValue",
          "package": "pdf-toolbox-core",
          "signature": "Number -\u003e PdfE m Double",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#realValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "realValue",
          "normalized": "Number-\u003ePdfE a Double",
          "package": "pdf-toolbox-core",
          "partial": "Value",
          "signature": "Number-\u003ePdfE m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:realValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "setValueForKey",
          "package": "pdf-toolbox-core",
          "signature": "Name -\u003e Object () -\u003e Dict -\u003e Dict",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#setValueForKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "setValueForKey",
          "normalized": "Name-\u003eObject()-\u003eDict-\u003eDict",
          "package": "pdf-toolbox-core",
          "partial": "Value For Key",
          "signature": "Name-\u003eObject()-\u003eDict-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:setValueForKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toArray",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Array",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toArray",
          "normalized": "Object a-\u003ePdfE b Array",
          "package": "pdf-toolbox-core",
          "partial": "Array",
          "signature": "Object a-\u003ePdfE m Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toBoolean",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Boolean",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toBoolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toBoolean",
          "normalized": "Object a-\u003ePdfE b Boolean",
          "package": "pdf-toolbox-core",
          "partial": "Boolean",
          "signature": "Object a-\u003ePdfE m Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toDict",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Dict",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toDict",
          "normalized": "Object a-\u003ePdfE b Dict",
          "package": "pdf-toolbox-core",
          "partial": "Dict",
          "signature": "Object a-\u003ePdfE m Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toName",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Name",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toName",
          "normalized": "Object a-\u003ePdfE b Name",
          "package": "pdf-toolbox-core",
          "partial": "Name",
          "signature": "Object a-\u003ePdfE m Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toNumber",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Number",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toNumber",
          "normalized": "Object a-\u003ePdfE b Number",
          "package": "pdf-toolbox-core",
          "partial": "Number",
          "signature": "Object a-\u003ePdfE m Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toRef",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Ref",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toRef",
          "normalized": "Object a-\u003ePdfE b Ref",
          "package": "pdf-toolbox-core",
          "partial": "Ref",
          "signature": "Object a-\u003ePdfE m Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toStr",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m Str",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toStr",
          "normalized": "Object a-\u003ePdfE b Str",
          "package": "pdf-toolbox-core",
          "partial": "Str",
          "signature": "Object a-\u003ePdfE m Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toStream",
          "package": "pdf-toolbox-core",
          "signature": "Object a -\u003e PdfE m (Stream a)",
          "source": "src/Pdf-Toolbox-Core-Object-Util.html#toStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Object Util",
          "module": "Pdf.Toolbox.Core.Object.Util",
          "name": "toStream",
          "normalized": "Object a-\u003ePdfE b(Stream a)",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "signature": "Object a-\u003ePdfE m(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Object-Util.html#v:toStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains parsers for pdf objects\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "Object",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains parsers for pdf objects",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "Object",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the character can appear in \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "isRegularChar",
          "package": "pdf-toolbox-core",
          "signature": "Char -\u003e Bool",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#isRegularChar",
          "type": "function"
        },
        "index": {
          "description": "Whether the character can appear in Name",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "isRegularChar",
          "normalized": "Char-\u003eBool",
          "package": "pdf-toolbox-core",
          "partial": "Regular Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:isRegularChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseArray \"[1 (string) /Name []]\"\n\u003c/code\u003e\u003c/strong\u003eRight (Array [ONumber (NumInt 1),OStr (Str \"string\"),OName (Name \"Name\"),OArray (Array [])])\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseArray",
          "package": "pdf-toolbox-core",
          "signature": "Parser Array",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseArray",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseArray string Name Right Array ONumber NumInt OStr Str string OName Name Name OArray Array",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseArray",
          "package": "pdf-toolbox-core",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseBoolean \"true\"\n\u003c/code\u003e\u003c/strong\u003eRight (Boolean True)\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseBoolean \"false\"\n\u003c/code\u003e\u003c/strong\u003eRight (Boolean False)\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseBoolean",
          "package": "pdf-toolbox-core",
          "signature": "Parser Boolean",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseBoolean",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseBoolean true Right Boolean True parseOnly parseBoolean false Right Boolean False",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseBoolean",
          "package": "pdf-toolbox-core",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseDict \"\u003c\u003c/Key1(some string)/Key2 123\u003e\u003e\"\n\u003c/code\u003e\u003c/strong\u003eRight (Dict [(Name \"Key1\",OStr (Str \"some string\")),(Name \"Key2\",ONumber (NumInt 123))])\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseDict",
          "package": "pdf-toolbox-core",
          "signature": "Parser Dict",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseDict",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseDict Key1 some string Key2 Right Dict Name Key1 OStr Str some string Name Key2 ONumber NumInt",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseDict",
          "package": "pdf-toolbox-core",
          "partial": "Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseHexStr \"\u003c68656C6C6F\u003e\"\n\u003c/code\u003e\u003c/strong\u003eRight (Str \"hello\")\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseHexStr",
          "package": "pdf-toolbox-core",
          "signature": "Parser Str",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseHexStr",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseHexStr C6C6F Right Str hello",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseHexStr",
          "package": "pdf-toolbox-core",
          "partial": "Hex Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseHexStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse object. Input position should point\n to offset defined in XRef\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseIndirectObject \"1 2 obj\\n12\"\n\u003c/code\u003e\u003c/strong\u003eRight (Ref 1 2,ONumber (NumInt 12))\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseIndirectObject",
          "package": "pdf-toolbox-core",
          "signature": "Parser (Ref, Object ())",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseIndirectObject",
          "type": "function"
        },
        "index": {
          "description": "Parse object Input position should point to offset defined in XRef parseOnly parseIndirectObject obj n12 Right Ref ONumber NumInt",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseIndirectObject",
          "normalized": "Parser(Ref,Object())",
          "package": "pdf-toolbox-core",
          "partial": "Indirect Object",
          "signature": "Parser(Ref,Object())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseIndirectObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseName \"/Name\"\n\u003c/code\u003e\u003c/strong\u003eRight (Name \"Name\")\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseName",
          "package": "pdf-toolbox-core",
          "signature": "Parser Name",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseName",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseName Name Right Name Name",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseName",
          "package": "pdf-toolbox-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseNumber \"123\"\n\u003c/code\u003e\u003c/strong\u003eRight (NumInt 123)\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseNumber \"12.3\"\n\u003c/code\u003e\u003c/strong\u003eRight (NumReal 12.3)\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseNumber \".01\"\n\u003c/code\u003e\u003c/strong\u003eRight (NumReal 1.0e-2)\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseNumber",
          "package": "pdf-toolbox-core",
          "signature": "Parser Number",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseNumber",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseNumber Right NumInt parseOnly parseNumber Right NumReal parseOnly parseNumber Right NumReal e-2",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseNumber",
          "package": "pdf-toolbox-core",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt parses any \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e\n cos for \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e we need offset of data in file\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseObject \"/Name\"\n\u003c/code\u003e\u003c/strong\u003eRight (OName (Name \"Name\"))\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseObject",
          "package": "pdf-toolbox-core",
          "signature": "Parser (Object ())",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseObject",
          "type": "function"
        },
        "index": {
          "description": "It parses any Object except Stream cos for Stream we need offset of data in file parseOnly parseObject Name Right OName Name Name",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseObject",
          "normalized": "Parser(Object())",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "signature": "Parser(Object())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseRef \"0 2 R\"\n\u003c/code\u003e\u003c/strong\u003eRight (Ref 0 2)\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseRef",
          "package": "pdf-toolbox-core",
          "signature": "Parser Ref",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseRef",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseRef Right Ref",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseRef",
          "package": "pdf-toolbox-core",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly parseStr \"(hello)\"\n\u003c/code\u003e\u003c/strong\u003eRight (Str \"hello\")\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseStr",
          "package": "pdf-toolbox-core",
          "signature": "Parser Str",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseStr",
          "type": "function"
        },
        "index": {
          "description": "parseOnly parseStr hello Right Str hello",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseStr",
          "package": "pdf-toolbox-core",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes input till stream's data\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eparseDict\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003eparseTillStreamData\u003c/a\u003e\u003c/code\u003e\n to determine whether the object is dictionary or stream.\n If \u003ccode\u003e\u003ca\u003eparseTillStreamData\u003c/a\u003e\u003c/code\u003e fails, then it is a dictionary.\n Otherwise it is stream, and current position in input data\n will point to stream's data start\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparse (parseDict \u003e\u003e= \\dict -\u003e parseTillStreamData \u003e\u003e return dict) \"\u003c\u003c/Key 123\u003e\u003e\\nstream\\n1234\\nendstream\"\n\u003c/code\u003e\u003c/strong\u003eDone \"1234\\nendstream\" Dict [(Name \"Key\",ONumber (NumInt 123))]\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseTillStreamData",
          "package": "pdf-toolbox-core",
          "signature": "Parser ()",
          "source": "src/Pdf-Toolbox-Core-Parsers-Object.html#parseTillStreamData",
          "type": "function"
        },
        "index": {
          "description": "Consumes input till stream data Use parseDict then parseTillStreamData to determine whether the object is dictionary or stream If parseTillStreamData fails then it is dictionary Otherwise it is stream and current position in input data will point to stream data start parse parseDict dict parseTillStreamData return dict Key nstream n1234 nendstream Done nendstream Dict Name Key ONumber NumInt",
          "hierarchy": "Pdf Toolbox Core Parsers Object",
          "module": "Pdf.Toolbox.Core.Parsers.Object",
          "name": "parseTillStreamData",
          "normalized": "Parser()",
          "package": "pdf-toolbox-core",
          "partial": "Till Stream Data",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Object.html#v:parseTillStreamData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtils\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Util",
          "name": "Util",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Parsers-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utils",
          "hierarchy": "Pdf Toolbox Core Parsers Util",
          "module": "Pdf.Toolbox.Core.Parsers.Util",
          "name": "Util",
          "package": "pdf-toolbox-core",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn pdf file EOL could be \"\\n\", \"\\r\" or \"\\n\\r\"\n\u003c/p\u003e\u003cp\u003eAlso space (0x20) is usually ok before EOL\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.Util",
          "name": "endOfLine",
          "package": "pdf-toolbox-core",
          "signature": "Parser ()",
          "source": "src/Pdf-Toolbox-Core-Parsers-Util.html#endOfLine",
          "type": "function"
        },
        "index": {
          "description": "In pdf file EOL could be or Also space x20 is usually ok before EOL",
          "hierarchy": "Pdf Toolbox Core Parsers Util",
          "module": "Pdf.Toolbox.Core.Parsers.Util",
          "name": "endOfLine",
          "normalized": "Parser()",
          "package": "pdf-toolbox-core",
          "partial": "Of Line",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-Util.html#v:endOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers for XRef\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "XRef",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Parsers-XRef.html",
          "type": "module"
        },
        "index": {
          "description": "Parsers for XRef",
          "hierarchy": "Pdf Toolbox Core Parsers XRef",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "XRef",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-XRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse subsection header, return (the first object index, number of object)\n\u003c/p\u003e\u003cp\u003eInput position will point to the first object\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "parseSubsectionHeader",
          "package": "pdf-toolbox-core",
          "signature": "Parser (Int, Int)",
          "source": "src/Pdf-Toolbox-Core-Parsers-XRef.html#parseSubsectionHeader",
          "type": "function"
        },
        "index": {
          "description": "Parse subsection header return the first object index number of object Input position will point to the first object",
          "hierarchy": "Pdf Toolbox Core Parsers XRef",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "parseSubsectionHeader",
          "normalized": "Parser(Int,Int)",
          "package": "pdf-toolbox-core",
          "partial": "Subsection Header",
          "signature": "Parser(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-XRef.html#v:parseSubsectionHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse XRef table entry. Returns offset, generation and whether the object is free.\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "parseTableEntry",
          "package": "pdf-toolbox-core",
          "signature": "Parser (Int64, Int, Bool)",
          "source": "src/Pdf-Toolbox-Core-Parsers-XRef.html#parseTableEntry",
          "type": "function"
        },
        "index": {
          "description": "Parse XRef table entry Returns offset generation and whether the object is free",
          "hierarchy": "Pdf Toolbox Core Parsers XRef",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "parseTableEntry",
          "normalized": "Parser(Int,Int,Bool)",
          "package": "pdf-toolbox-core",
          "partial": "Table Entry",
          "signature": "Parser(Int,Int,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-XRef.html#v:parseTableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse trailer located after XRef table\n\u003c/p\u003e\u003cp\u003eInput position should point to the \"trailer\" keyword\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "parseTrailerAfterTable",
          "package": "pdf-toolbox-core",
          "signature": "Parser Dict",
          "source": "src/Pdf-Toolbox-Core-Parsers-XRef.html#parseTrailerAfterTable",
          "type": "function"
        },
        "index": {
          "description": "Parse trailer located after XRef table Input position should point to the trailer keyword",
          "hierarchy": "Pdf Toolbox Core Parsers XRef",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "parseTrailerAfterTable",
          "package": "pdf-toolbox-core",
          "partial": "Trailer After Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-XRef.html#v:parseTrailerAfterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset of the very last xref table\n\u003c/p\u003e\u003cp\u003eBefore calling it, make sure your are currently somewhere near\n the end of pdf file. Otherwice it can eat all the memory.\n E.g. examine only the last 1KB\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly startXRef \"anything...startxref\\n222\\n%%EOF...blah\\nstartxref\\n123\\n%%EOF\"\n\u003c/code\u003e\u003c/strong\u003eRight 123\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "startXRef",
          "package": "pdf-toolbox-core",
          "signature": "Parser Int64",
          "source": "src/Pdf-Toolbox-Core-Parsers-XRef.html#startXRef",
          "type": "function"
        },
        "index": {
          "description": "Offset of the very last xref table Before calling it make sure your are currently somewhere near the end of pdf file Otherwice it can eat all the memory E.g examine only the last KB parseOnly startXRef anything...startxref n222 EOF...blah nstartxref n123 EOF Right",
          "hierarchy": "Pdf Toolbox Core Parsers XRef",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "startXRef",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-XRef.html#v:startXRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen current input position points to xref stream\n (or doesn't point to xref at all), the parser will fail.\n When it points to xref table, the parser will succeed\n and input position will point to the first xref subsection\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly tableXRef \"xref\\n\"\n\u003c/code\u003e\u003c/strong\u003eRight ()\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseOnly tableXRef \"not xref\"\n\u003c/code\u003e\u003c/strong\u003eLeft \"Failed reading: takeWith\"\n\u003c/pre\u003e",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "tableXRef",
          "package": "pdf-toolbox-core",
          "signature": "Parser ()",
          "source": "src/Pdf-Toolbox-Core-Parsers-XRef.html#tableXRef",
          "type": "function"
        },
        "index": {
          "description": "When current input position points to xref stream or doesn point to xref at all the parser will fail When it points to xref table the parser will succeed and input position will point to the first xref subsection parseOnly tableXRef xref Right parseOnly tableXRef not xref Left Failed reading takeWith",
          "hierarchy": "Pdf Toolbox Core Parsers XRef",
          "module": "Pdf.Toolbox.Core.Parsers.XRef",
          "name": "tableXRef",
          "normalized": "Parser()",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Parsers-XRef.html#v:tableXRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlate decode filter\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.FlateDecode",
          "name": "FlateDecode",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-FlateDecode.html",
          "type": "module"
        },
        "index": {
          "description": "Flate decode filter",
          "hierarchy": "Pdf Toolbox Core Stream Filter FlateDecode",
          "module": "Pdf.Toolbox.Core.Stream.Filter.FlateDecode",
          "name": "FlateDecode",
          "package": "pdf-toolbox-core",
          "partial": "Flate Decode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-FlateDecode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVary basic implementation. Only PNG-UP prediction is implemented\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.FlateDecode",
          "name": "flateDecode",
          "package": "pdf-toolbox-core",
          "signature": "StreamFilter",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-FlateDecode.html#flateDecode",
          "type": "function"
        },
        "index": {
          "description": "Vary basic implementation Only PNG-UP prediction is implemented",
          "hierarchy": "Pdf Toolbox Core Stream Filter FlateDecode",
          "module": "Pdf.Toolbox.Core.Stream.Filter.FlateDecode",
          "name": "flateDecode",
          "package": "pdf-toolbox-core",
          "partial": "Decode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-FlateDecode.html#v:flateDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream filter\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "Type",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Stream filter",
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "Type",
          "package": "pdf-toolbox-core",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException that should be thrown by the decoder in case of any error\n User code could catch it when reading from decoded stream content\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "DecodeException",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#DecodeException",
          "type": "data"
        },
        "index": {
          "description": "Exception that should be thrown by the decoder in case of any error User code could catch it when reading from decoded stream content",
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "DecodeException",
          "package": "pdf-toolbox-core",
          "partial": "Decode Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#t:DecodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream filter\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "StreamFilter",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#StreamFilter",
          "type": "data"
        },
        "index": {
          "description": "Stream filter",
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "StreamFilter",
          "package": "pdf-toolbox-core",
          "partial": "Stream Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#t:StreamFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "DecodeException",
          "package": "pdf-toolbox-core",
          "signature": "DecodeException SomeException",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#DecodeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "DecodeException",
          "package": "pdf-toolbox-core",
          "partial": "Decode Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#v:DecodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "StreamFilter",
          "package": "pdf-toolbox-core",
          "signature": "StreamFilter",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#StreamFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "StreamFilter",
          "package": "pdf-toolbox-core",
          "partial": "Stream Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#v:StreamFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode params -\u003e content -\u003e decoded content\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "filterDecode",
          "package": "pdf-toolbox-core",
          "signature": "Maybe Dict -\u003e IS -\u003e IO IS",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#StreamFilter",
          "type": "function"
        },
        "index": {
          "description": "decode params content decoded content",
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "filterDecode",
          "normalized": "Maybe Dict-\u003eIS-\u003eIO IS",
          "package": "pdf-toolbox-core",
          "partial": "Decode",
          "signature": "Maybe Dict-\u003eIS-\u003eIO IS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#v:filterDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas \"Filter\" key value in stream dictionary\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "filterName",
          "package": "pdf-toolbox-core",
          "signature": "Name",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#StreamFilter",
          "type": "function"
        },
        "index": {
          "description": "as Filter key value in stream dictionary",
          "hierarchy": "Pdf Toolbox Core Stream Filter Type",
          "module": "Pdf.Toolbox.Core.Stream.Filter.Type",
          "name": "filterName",
          "package": "pdf-toolbox-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream-Filter-Type.html#v:filterName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream related tools\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "Stream",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "Stream related tools",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "Stream",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream filter\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "StreamFilter",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Stream-Filter-Type.html#StreamFilter",
          "type": "data"
        },
        "index": {
          "description": "Stream filter",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "StreamFilter",
          "package": "pdf-toolbox-core",
          "partial": "Stream Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#t:StreamFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode stream content\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIS\u003c/a\u003e\u003c/code\u003e is valid only until the next \u003ccode\u003e\u003ca\u003eRIS\u003c/a\u003e\u003c/code\u003e operation\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "decodeStream",
          "package": "pdf-toolbox-core",
          "signature": "[StreamFilter] -\u003e (IS -\u003e IO IS) -\u003e Stream IS -\u003e PdfE m (Stream IS)",
          "source": "src/Pdf-Toolbox-Core-Stream.html#decodeStream",
          "type": "function"
        },
        "index": {
          "description": "Decode stream content The IS is valid only until the next RIS operation",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "decodeStream",
          "normalized": "[StreamFilter]-\u003e(IS-\u003eIO IS)-\u003eStream IS-\u003ePdfE a(Stream IS)",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "signature": "[StreamFilter]-\u003e(IS-\u003eIO IS)-\u003eStream IS-\u003ePdfE m(Stream IS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#v:decodeStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoded stream content\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIS\u003c/a\u003e\u003c/code\u003e is valid only until the next \u003ccode\u003e\u003ca\u003eseek\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote: \"Length\" could be an indirect object, that is why\n we cann't read it ourself\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "decodedStreamContent",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003e [StreamFilter]-\u003e (IS -\u003e IO IS)-\u003e Int-\u003e Stream Int64-\u003e PdfE m (Stream IS)",
          "type": "function"
        },
        "index": {
          "description": "Decoded stream content The IS is valid only until the next seek Note Length could be an indirect object that is why we cann read it ourself",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "decodedStreamContent",
          "normalized": "RIS-\u003e[StreamFilter]-\u003e(IS-\u003eIO IS)-\u003eInt-\u003eStream Int-\u003ePdfE a(Stream IS)",
          "package": "pdf-toolbox-core",
          "partial": "Stream Content",
          "signature": "RIS-\u003e[StreamFilter]-\u003e(IS-\u003eIO IS)-\u003eInt-\u003eStream Int-\u003ePdfE m(Stream IS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#v:decodedStreamContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll stream filters implemented by the toolbox\n\u003c/p\u003e\u003cp\u003eRight now it contains only FlateDecode filter\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "knownFilters",
          "package": "pdf-toolbox-core",
          "signature": "[StreamFilter]",
          "source": "src/Pdf-Toolbox-Core-Stream.html#knownFilters",
          "type": "function"
        },
        "index": {
          "description": "All stream filters implemented by the toolbox Right now it contains only FlateDecode filter",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "knownFilters",
          "normalized": "[StreamFilter]",
          "package": "pdf-toolbox-core",
          "partial": "Filters",
          "signature": "[StreamFilter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#v:knownFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw content of stream.\n Filters are not applyed\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIS\u003c/a\u003e\u003c/code\u003e is valid only until the next \u003ccode\u003e\u003ca\u003eseek\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote: \"Length\" could be an indirect object, but we don't want\n to read indirect objects here. So we require length to be provided\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "rawStreamContent",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003e Int-\u003e Stream Int64-\u003e PdfE m (Stream IS)",
          "type": "function"
        },
        "index": {
          "description": "Raw content of stream Filters are not applyed The IS is valid only until the next seek Note Length could be an indirect object but we don want to read indirect objects here So we require length to be provided",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "rawStreamContent",
          "normalized": "RIS-\u003eInt-\u003eStream Int-\u003ePdfE a(Stream IS)",
          "package": "pdf-toolbox-core",
          "partial": "Stream Content",
          "signature": "RIS-\u003eInt-\u003eStream Int-\u003ePdfE m(Stream IS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#v:rawStreamContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e at the current position in the \u003ccode\u003e\u003ca\u003eRIS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "readStream",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e PdfE m (Stream Int64)",
          "source": "src/Pdf-Toolbox-Core-Stream.html#readStream",
          "type": "function"
        },
        "index": {
          "description": "Read Stream at the current position in the RIS",
          "hierarchy": "Pdf Toolbox Core Stream",
          "module": "Pdf.Toolbox.Core.Stream",
          "name": "readStream",
          "normalized": "RIS-\u003ePdfE a(Stream Int)",
          "package": "pdf-toolbox-core",
          "partial": "Stream",
          "signature": "RIS-\u003ePdfE m(Stream Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Stream.html#v:readStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnclassified tools\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Util",
          "name": "Util",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Unclassified tools",
          "hierarchy": "Pdf Toolbox Core Util",
          "module": "Pdf.Toolbox.Core.Util",
          "name": "Util",
          "package": "pdf-toolbox-core",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead object from object stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Util",
          "name": "readCompressedObject",
          "package": "pdf-toolbox-core",
          "signature": "IS-\u003e Int64-\u003e Int-\u003e PdfE m (Object ())",
          "type": "function"
        },
        "index": {
          "description": "Read object from object stream",
          "hierarchy": "Pdf Toolbox Core Util",
          "module": "Pdf.Toolbox.Core.Util",
          "name": "readCompressedObject",
          "normalized": "IS-\u003eInt-\u003eInt-\u003ePdfE a(Object())",
          "package": "pdf-toolbox-core",
          "partial": "Compressed Object",
          "signature": "IS-\u003eInt-\u003eInt-\u003ePdfE m(Object())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Util.html#v:readCompressedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead indirect object at the specified offset\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Util",
          "name": "readObjectAtOffset",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003e Int64-\u003e Int-\u003e PdfE m (Object Int64)",
          "type": "function"
        },
        "index": {
          "description": "Read indirect object at the specified offset",
          "hierarchy": "Pdf Toolbox Core Util",
          "module": "Pdf.Toolbox.Core.Util",
          "name": "readObjectAtOffset",
          "normalized": "RIS-\u003eInt-\u003eInt-\u003ePdfE a(Object Int)",
          "package": "pdf-toolbox-core",
          "partial": "Object At Offset",
          "signature": "RIS-\u003eInt-\u003eInt-\u003ePdfE m(Object Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Util.html#v:readObjectAtOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrite PDF files\n\u003c/p\u003e\u003cp\u003eIt could be used to generate new PDF file\n or to incrementally update the existent one\n\u003c/p\u003e\u003cp\u003eTo generate new file, first call \u003ccode\u003e\u003ca\u003ewritePdfHeader\u003c/a\u003e\u003c/code\u003e,\n then a number of \u003ccode\u003e\u003ca\u003ewriteObject\u003c/a\u003e\u003c/code\u003e and finally \u003ccode\u003e\u003ca\u003ewriteXRefTable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTo incrementally update PDF file just ommit the\n \u003ccode\u003e\u003ca\u003ewritePdfHeader\u003c/a\u003e\u003c/code\u003e and append the result to the existent file\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "Writer",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "Write PDF files It could be used to generate new PDF file or to incrementally update the existent one To generate new file first call writePdfHeader then number of writeObject and finally writeXRefTable To incrementally update PDF file just ommit the writePdfHeader and append the result to the existent file",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "Writer",
          "package": "pdf-toolbox-core",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "PdfWriter",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-Writer.html#PdfWriter",
          "type": "data"
        },
        "index": {
          "description": "The monad",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "PdfWriter",
          "package": "pdf-toolbox-core",
          "partial": "Pdf Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#t:PdfWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete object\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "deleteObject",
          "package": "pdf-toolbox-core",
          "signature": "Ref -\u003e Int64 -\u003e PdfWriter m ()",
          "source": "src/Pdf-Toolbox-Core-Writer.html#deleteObject",
          "type": "function"
        },
        "index": {
          "description": "Delete object",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "deleteObject",
          "normalized": "Ref-\u003eInt-\u003ePdfWriter a()",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "signature": "Ref-\u003eInt-\u003ePdfWriter m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#v:deleteObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute writer action\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "runPdfWriter",
          "package": "pdf-toolbox-core",
          "signature": "OutputStream ByteString-\u003e PdfWriter m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Execute writer action",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "runPdfWriter",
          "normalized": "OutputStream ByteString-\u003ePdfWriter a b-\u003ea b",
          "package": "pdf-toolbox-core",
          "partial": "Pdf Writer",
          "signature": "OutputStream ByteString-\u003ePdfWriter m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#v:runPdfWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite object\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "writeObject",
          "package": "pdf-toolbox-core",
          "signature": "Ref -\u003e Object ByteString -\u003e PdfWriter m ()",
          "source": "src/Pdf-Toolbox-Core-Writer.html#writeObject",
          "type": "function"
        },
        "index": {
          "description": "Write object",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "writeObject",
          "normalized": "Ref-\u003eObject ByteString-\u003ePdfWriter a()",
          "package": "pdf-toolbox-core",
          "partial": "Object",
          "signature": "Ref-\u003eObject ByteString-\u003ePdfWriter m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#v:writeObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite PDF header. Used for generating new PDF files.\n Should be the first call. Not used fo incremental updates\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "writePdfHeader",
          "package": "pdf-toolbox-core",
          "signature": "PdfWriter m ()",
          "source": "src/Pdf-Toolbox-Core-Writer.html#writePdfHeader",
          "type": "function"
        },
        "index": {
          "description": "Write PDF header Used for generating new PDF files Should be the first call Not used fo incremental updates",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "writePdfHeader",
          "normalized": "PdfWriter a()",
          "package": "pdf-toolbox-core",
          "partial": "Pdf Header",
          "signature": "PdfWriter m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#v:writePdfHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite xref table. Should be the last call.\n Used for generating and incremental updates.\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "writeXRefTable",
          "package": "pdf-toolbox-core",
          "signature": "Int64-\u003e Dict-\u003e PdfWriter m ()",
          "type": "function"
        },
        "index": {
          "description": "Write xref table Should be the last call Used for generating and incremental updates",
          "hierarchy": "Pdf Toolbox Core Writer",
          "module": "Pdf.Toolbox.Core.Writer",
          "name": "writeXRefTable",
          "normalized": "Int-\u003eDict-\u003ePdfWriter a()",
          "package": "pdf-toolbox-core",
          "partial": "XRef Table",
          "signature": "Int-\u003eDict-\u003ePdfWriter m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-Writer.html#v:writeXRefTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCross reference\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRef",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-XRef.html",
          "type": "module"
        },
        "index": {
          "description": "Cross reference",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRef",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry in cross reference stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntry",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-XRef.html#StreamEntry",
          "type": "data"
        },
        "index": {
          "description": "Entry in cross reference stream",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntry",
          "package": "pdf-toolbox-core",
          "partial": "Stream Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#t:StreamEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry in cross reference table\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "TableEntry",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-XRef.html#TableEntry",
          "type": "data"
        },
        "index": {
          "description": "Entry in cross reference table",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "TableEntry",
          "package": "pdf-toolbox-core",
          "partial": "Table Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#t:TableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross reference\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRef",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-XRef.html#XRef",
          "type": "data"
        },
        "index": {
          "description": "Cross reference",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRef",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#t:XRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry in cross reference\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefEntry",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core-XRef.html#XRefEntry",
          "type": "data"
        },
        "index": {
          "description": "Entry in cross reference",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefEntry",
          "package": "pdf-toolbox-core",
          "partial": "XRef Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#t:XRefEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject number of object stream and index within the object stream\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntryCompressed",
          "package": "pdf-toolbox-core",
          "signature": "StreamEntryCompressed Int Int",
          "source": "src/Pdf-Toolbox-Core-XRef.html#StreamEntry",
          "type": "function"
        },
        "index": {
          "description": "Object number of object stream and index within the object stream",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntryCompressed",
          "package": "pdf-toolbox-core",
          "partial": "Stream Entry Compressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:StreamEntryCompressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject number and generation\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntryFree",
          "package": "pdf-toolbox-core",
          "signature": "StreamEntryFree Int Int",
          "source": "src/Pdf-Toolbox-Core-XRef.html#StreamEntry",
          "type": "function"
        },
        "index": {
          "description": "Object number and generation",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntryFree",
          "package": "pdf-toolbox-core",
          "partial": "Stream Entry Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:StreamEntryFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject offset (in bytes from the beginning of file) and generation\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntryUsed",
          "package": "pdf-toolbox-core",
          "signature": "StreamEntryUsed Int64 Int",
          "source": "src/Pdf-Toolbox-Core-XRef.html#StreamEntry",
          "type": "function"
        },
        "index": {
          "description": "Object offset in bytes from the beginning of file and generation",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "StreamEntryUsed",
          "package": "pdf-toolbox-core",
          "partial": "Stream Entry Used",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:StreamEntryUsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "TableEntry",
          "package": "pdf-toolbox-core",
          "signature": "TableEntry",
          "source": "src/Pdf-Toolbox-Core-XRef.html#TableEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "TableEntry",
          "package": "pdf-toolbox-core",
          "partial": "Table Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:TableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset and stream with content offset\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefStream",
          "package": "pdf-toolbox-core",
          "signature": "XRefStream Int64 (Stream Int64)",
          "source": "src/Pdf-Toolbox-Core-XRef.html#XRef",
          "type": "function"
        },
        "index": {
          "description": "Offset and stream with content offset",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefStream",
          "package": "pdf-toolbox-core",
          "partial": "XRef Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:XRefStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefStreamEntry",
          "package": "pdf-toolbox-core",
          "signature": "XRefStreamEntry StreamEntry",
          "source": "src/Pdf-Toolbox-Core-XRef.html#XRefEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefStreamEntry",
          "package": "pdf-toolbox-core",
          "partial": "XRef Stream Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:XRefStreamEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefTable",
          "package": "pdf-toolbox-core",
          "signature": "XRefTable Int64",
          "source": "src/Pdf-Toolbox-Core-XRef.html#XRef",
          "type": "function"
        },
        "index": {
          "description": "Offset",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefTable",
          "package": "pdf-toolbox-core",
          "partial": "XRef Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:XRefTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefTableEntry",
          "package": "pdf-toolbox-core",
          "signature": "XRefTableEntry TableEntry",
          "source": "src/Pdf-Toolbox-Core-XRef.html#XRefEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "XRefTableEntry",
          "package": "pdf-toolbox-core",
          "partial": "XRef Table Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:XRefTableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the stream starts with \"xref\" keyword.\n The keyword iyself is consumed\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "isTable",
          "package": "pdf-toolbox-core",
          "signature": "IS -\u003e PdfE m Bool",
          "source": "src/Pdf-Toolbox-Core-XRef.html#isTable",
          "type": "function"
        },
        "index": {
          "description": "Check whether the stream starts with xref keyword The keyword iyself is consumed",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "isTable",
          "normalized": "IS-\u003ePdfE a Bool",
          "package": "pdf-toolbox-core",
          "partial": "Table",
          "signature": "IS-\u003ePdfE m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:isTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the last cross reference\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "lastXRef",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e PdfE m XRef",
          "source": "src/Pdf-Toolbox-Core-XRef.html#lastXRef",
          "type": "function"
        },
        "index": {
          "description": "Find the last cross reference",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "lastXRef",
          "normalized": "RIS-\u003ePdfE a XRef",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "signature": "RIS-\u003ePdfE m XRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:lastXRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead xref entry for the indirect object from xref stream\n\u003c/p\u003e\u003cp\u003eSee pdf1.7 spec: 7.5.8 Cross-Reference Streams\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "lookupStreamEntry",
          "package": "pdf-toolbox-core",
          "signature": "Stream IS-\u003e Ref-\u003e PdfE m (Maybe StreamEntry)",
          "type": "function"
        },
        "index": {
          "description": "Read xref entry for the indirect object from xref stream See pdf1.7 spec Cross-Reference Streams",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "lookupStreamEntry",
          "normalized": "Stream IS-\u003eRef-\u003ePdfE a(Maybe StreamEntry)",
          "package": "pdf-toolbox-core",
          "partial": "Stream Entry",
          "signature": "Stream IS-\u003eRef-\u003ePdfE m(Maybe StreamEntry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:lookupStreamEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead xref entry for the indirect object from xref table\n\u003c/p\u003e\u003cp\u003eRIS position should point to the begining of the next\n line after \"xref\" keyword\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "lookupTableEntry",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003e Ref-\u003e PdfE m (Maybe TableEntry)",
          "type": "function"
        },
        "index": {
          "description": "Read xref entry for the indirect object from xref table RIS position should point to the begining of the next line after xref keyword",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "lookupTableEntry",
          "normalized": "RIS-\u003eRef-\u003ePdfE a(Maybe TableEntry)",
          "package": "pdf-toolbox-core",
          "partial": "Table Entry",
          "signature": "RIS-\u003eRef-\u003ePdfE m(Maybe TableEntry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:lookupTableEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind prev cross reference\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "prevXRef",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e XRef -\u003e PdfE m (Maybe XRef)",
          "source": "src/Pdf-Toolbox-Core-XRef.html#prevXRef",
          "type": "function"
        },
        "index": {
          "description": "Find prev cross reference",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "prevXRef",
          "normalized": "RIS-\u003eXRef-\u003ePdfE a(Maybe XRef)",
          "package": "pdf-toolbox-core",
          "partial": "XRef",
          "signature": "RIS-\u003eXRef-\u003ePdfE m(Maybe XRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:prevXRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "teGen",
          "package": "pdf-toolbox-core",
          "signature": "Int",
          "source": "src/Pdf-Toolbox-Core-XRef.html#TableEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "teGen",
          "package": "pdf-toolbox-core",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:teGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "teIsFree",
          "package": "pdf-toolbox-core",
          "signature": "Bool",
          "source": "src/Pdf-Toolbox-Core-XRef.html#TableEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "teIsFree",
          "package": "pdf-toolbox-core",
          "partial": "Is Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:teIsFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "teOffset",
          "package": "pdf-toolbox-core",
          "signature": "Int64",
          "source": "src/Pdf-Toolbox-Core-XRef.html#TableEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "teOffset",
          "package": "pdf-toolbox-core",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:teOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead trailer for the xref\n\u003c/p\u003e",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "trailer",
          "package": "pdf-toolbox-core",
          "signature": "RIS -\u003e XRef -\u003e PdfE m Dict",
          "source": "src/Pdf-Toolbox-Core-XRef.html#trailer",
          "type": "function"
        },
        "index": {
          "description": "Read trailer for the xref",
          "hierarchy": "Pdf Toolbox Core XRef",
          "module": "Pdf.Toolbox.Core.XRef",
          "name": "trailer",
          "normalized": "RIS-\u003eXRef-\u003ePdfE a Dict",
          "package": "pdf-toolbox-core",
          "signature": "RIS-\u003eXRef-\u003ePdfE m Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core-XRef.html#v:trailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level tools for processing PDF file\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pdf.Toolbox.Core",
          "name": "Core",
          "package": "pdf-toolbox-core",
          "source": "src/Pdf-Toolbox-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Low level tools for processing PDF file",
          "hierarchy": "Pdf Toolbox Core",
          "module": "Pdf.Toolbox.Core",
          "name": "Core",
          "package": "pdf-toolbox-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pdf-toolbox-core/docs/Pdf-Toolbox-Core.html#"
      }
    }
  ]
]