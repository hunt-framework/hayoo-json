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
        "word": "sousit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.File",
          "name": "File",
          "package": "sousit",
          "source": "src/Data-SouSiT-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "File",
          "package": "sousit",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a sink that writes the ByteStrings into the file.\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSinkByteString",
          "package": "sousit",
          "signature": "FilePath -\u003e Sink ByteString m ()",
          "source": "src/Data-SouSiT-File.html#fileSinkByteString",
          "type": "function"
        },
        "index": {
          "description": "Creates sink that writes the ByteStrings into the file",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSinkByteString",
          "normalized": "FilePath-\u003eSink ByteString a()",
          "package": "sousit",
          "partial": "Sink Byte String",
          "signature": "FilePath-\u003eSink ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSinkByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a sink that writes the Chars into the specified file.\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSinkChar",
          "package": "sousit",
          "signature": "FilePath -\u003e Sink Char m ()",
          "source": "src/Data-SouSiT-File.html#fileSinkChar",
          "type": "function"
        },
        "index": {
          "description": "Creates sink that writes the Chars into the specified file",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSinkChar",
          "normalized": "FilePath-\u003eSink Char a()",
          "package": "sousit",
          "partial": "Sink Char",
          "signature": "FilePath-\u003eSink Char m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSinkChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a sink that writes each input as a line into the file.\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSinkLine",
          "package": "sousit",
          "signature": "FilePath -\u003e Sink String m ()",
          "source": "src/Data-SouSiT-File.html#fileSinkLine",
          "type": "function"
        },
        "index": {
          "description": "Creates sink that writes each input as line into the file",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSinkLine",
          "normalized": "FilePath-\u003eSink String a()",
          "package": "sousit",
          "partial": "Sink Line",
          "signature": "FilePath-\u003eSink String m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSinkLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a sink that writes the input into the file (without adding newlines).\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSinkString",
          "package": "sousit",
          "signature": "FilePath -\u003e Sink String m ()",
          "source": "src/Data-SouSiT-File.html#fileSinkString",
          "type": "function"
        },
        "index": {
          "description": "Creates sink that writes the input into the file without adding newlines",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSinkString",
          "normalized": "FilePath-\u003eSink String a()",
          "package": "sousit",
          "partial": "Sink String",
          "signature": "FilePath-\u003eSink String m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSinkString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a sink for writing bytes into a file. The first parameter is the size of the buffer.\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSinkWord8",
          "package": "sousit",
          "signature": "Int -\u003e FilePath -\u003e Sink Word8 m ()",
          "source": "src/Data-SouSiT-File.html#fileSinkWord8",
          "type": "function"
        },
        "index": {
          "description": "Creates sink for writing bytes into file The first parameter is the size of the buffer",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSinkWord8",
          "normalized": "Int-\u003eFilePath-\u003eSink Word a()",
          "package": "sousit",
          "partial": "Sink Word",
          "signature": "Int-\u003eFilePath-\u003eSink Word m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSinkWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an unbuffered sink for writing bytes into a file.\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSinkWord8Unbuffered",
          "package": "sousit",
          "signature": "FilePath -\u003e Sink Word8 m ()",
          "source": "src/Data-SouSiT-File.html#fileSinkWord8Unbuffered",
          "type": "function"
        },
        "index": {
          "description": "Creates an unbuffered sink for writing bytes into file",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSinkWord8Unbuffered",
          "normalized": "FilePath-\u003eSink Word a()",
          "package": "sousit",
          "partial": "Sink Word Unbuffered",
          "signature": "FilePath-\u003eSink Word m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSinkWord8Unbuffered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Source2 for file read as ByteStrings (hGetSome).\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSourceByteString",
          "package": "sousit",
          "signature": "Int -\u003e FilePath -\u003e FeedSource m ByteString",
          "source": "src/Data-SouSiT-File.html#fileSourceByteString",
          "type": "function"
        },
        "index": {
          "description": "Creates Source2 for file read as ByteStrings hGetSome",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSourceByteString",
          "normalized": "Int-\u003eFilePath-\u003eFeedSource a ByteString",
          "package": "sousit",
          "partial": "Source Byte String",
          "signature": "Int-\u003eFilePath-\u003eFeedSource m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSourceByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Source2 for the file read as characters.\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSourceChar",
          "package": "sousit",
          "signature": "FilePath -\u003e FeedSource m Char",
          "source": "src/Data-SouSiT-File.html#fileSourceChar",
          "type": "function"
        },
        "index": {
          "description": "Creates Source2 for the file read as characters",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSourceChar",
          "normalized": "FilePath-\u003eFeedSource a Char",
          "package": "sousit",
          "partial": "Source Char",
          "signature": "FilePath-\u003eFeedSource m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSourceChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Source2 for the file read linewise as string\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSourceLine",
          "package": "sousit",
          "signature": "FilePath -\u003e FeedSource m String",
          "source": "src/Data-SouSiT-File.html#fileSourceLine",
          "type": "function"
        },
        "index": {
          "description": "Creates Source2 for the file read linewise as string",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSourceLine",
          "normalized": "FilePath-\u003eFeedSource a String",
          "package": "sousit",
          "partial": "Source Line",
          "signature": "FilePath-\u003eFeedSource m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Source2 for file read as single bytes (buffered).\n\u003c/p\u003e",
          "module": "Data.SouSiT.File",
          "name": "fileSourceWord8",
          "package": "sousit",
          "signature": "FilePath -\u003e SimpleSource m Word8",
          "source": "src/Data-SouSiT-File.html#fileSourceWord8",
          "type": "function"
        },
        "index": {
          "description": "Creates Source2 for file read as single bytes buffered",
          "hierarchy": "Data SouSiT File",
          "module": "Data.SouSiT.File",
          "name": "fileSourceWord8",
          "normalized": "FilePath-\u003eSimpleSource a Word",
          "package": "sousit",
          "partial": "Source Word",
          "signature": "FilePath-\u003eSimpleSource m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-File.html#v:fileSourceWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Handle",
          "name": "Handle",
          "package": "sousit",
          "source": "src/Data-SouSiT-Handle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "Handle",
          "package": "sousit",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink backed by a handle. The data will be written by the provided function.\n   The sink will never change to the SinkDone state (if the device is full then\n   the operation will simply fail).\n   The handle is not closed and exceptions are not catched.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSink",
          "package": "sousit",
          "signature": "(Handle -\u003e a -\u003e m ()) -\u003e Handle -\u003e Sink a m ()",
          "source": "src/Data-SouSiT-Handle.html#hSink",
          "type": "function"
        },
        "index": {
          "description": "Sink backed by handle The data will be written by the provided function The sink will never change to the SinkDone state if the device is full then the operation will simply fail The handle is not closed and exceptions are not catched",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSink",
          "normalized": "(Handle-\u003ea-\u003eb())-\u003eHandle-\u003eSink a b()",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(Handle-\u003ea-\u003em())-\u003eHandle-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as hSink, but does opens the handle when the first item is written.\n   The handle will be closed when the sink is closed.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSinkRes",
          "package": "sousit",
          "signature": "(Handle -\u003e a -\u003e m ()) -\u003e IO Handle -\u003e Sink a m ()",
          "source": "src/Data-SouSiT-Handle.html#hSinkRes",
          "type": "function"
        },
        "index": {
          "description": "Same as hSink but does opens the handle when the first item is written The handle will be closed when the sink is closed",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSinkRes",
          "normalized": "(Handle-\u003ea-\u003eb())-\u003eIO Handle-\u003eSink a b()",
          "package": "sousit",
          "partial": "Sink Res",
          "signature": "(Handle-\u003ea-\u003em())-\u003eIO Handle-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSinkRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource from a handle. The handle will not be closed and is read till hIsEOF.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSource",
          "package": "sousit",
          "signature": "(Handle -\u003e m a) -\u003e Handle -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-Handle.html#hSource",
          "type": "function"
        },
        "index": {
          "description": "Source from handle The handle will not be closed and is read till hIsEOF",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSource",
          "normalized": "(Handle-\u003ea b)-\u003eHandle-\u003eFeedSource a b",
          "package": "sousit",
          "partial": "Source",
          "signature": "(Handle-\u003em a)-\u003eHandle-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as hSource, but opens the handle when transfer is called and closes it when\n   transfer/feedToSink completes.\n   Uses \u003ccode\u003ebracket\u003c/code\u003e to ensure safe release of the allocated resources.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSource'",
          "package": "sousit",
          "signature": "(Handle -\u003e IO a) -\u003e IO Handle -\u003e FeedSource IO a",
          "source": "src/Data-SouSiT-Handle.html#hSource%27",
          "type": "function"
        },
        "index": {
          "description": "Same as hSource but opens the handle when transfer is called and closes it when transfer feedToSink completes Uses bracket to ensure safe release of the allocated resources",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSource'",
          "normalized": "(Handle-\u003eIO a)-\u003eIO Handle-\u003eFeedSource IO a",
          "package": "sousit",
          "partial": "Source'",
          "signature": "(Handle-\u003eIO a)-\u003eIO Handle-\u003eFeedSource IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSource-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as hSource, but does not check for hIsEOF and therefore never terminates.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceNoEOF",
          "package": "sousit",
          "signature": "(Handle -\u003e m a) -\u003e Handle -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-Handle.html#hSourceNoEOF",
          "type": "function"
        },
        "index": {
          "description": "Same as hSource but does not check for hIsEOF and therefore never terminates",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceNoEOF",
          "normalized": "(Handle-\u003ea b)-\u003eHandle-\u003eFeedSource a b",
          "package": "sousit",
          "partial": "Source No EOF",
          "signature": "(Handle-\u003em a)-\u003eHandle-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSourceNoEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as hSource', but does not check for hIsEOF and therefore never terminates.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceNoEOF'",
          "package": "sousit",
          "signature": "(Handle -\u003e IO a) -\u003e IO Handle -\u003e FeedSource IO a",
          "source": "src/Data-SouSiT-Handle.html#hSourceNoEOF%27",
          "type": "function"
        },
        "index": {
          "description": "Same as hSource but does not check for hIsEOF and therefore never terminates",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceNoEOF'",
          "normalized": "(Handle-\u003eIO a)-\u003eIO Handle-\u003eFeedSource IO a",
          "package": "sousit",
          "partial": "Source No EOF'",
          "signature": "(Handle-\u003eIO a)-\u003eIO Handle-\u003eFeedSource IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSourceNoEOF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as hSource, but opens the handle when transfer is called and closes it when\n   transfer/feedToSink completes.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceRes",
          "package": "sousit",
          "signature": "(Handle -\u003e m a) -\u003e IO Handle -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-Handle.html#hSourceRes",
          "type": "function"
        },
        "index": {
          "description": "Same as hSource but opens the handle when transfer is called and closes it when transfer feedToSink completes",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceRes",
          "normalized": "(Handle-\u003ea b)-\u003eIO Handle-\u003eFeedSource a b",
          "package": "sousit",
          "partial": "Source Res",
          "signature": "(Handle-\u003em a)-\u003eIO Handle-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSourceRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as hSourceRes', but does not check for hIsEOF and therefore never terminates.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceResNoEOF",
          "package": "sousit",
          "signature": "(Handle -\u003e m a) -\u003e IO Handle -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-Handle.html#hSourceResNoEOF",
          "type": "function"
        },
        "index": {
          "description": "Same as hSourceRes but does not check for hIsEOF and therefore never terminates",
          "hierarchy": "Data SouSiT Handle",
          "module": "Data.SouSiT.Handle",
          "name": "hSourceResNoEOF",
          "normalized": "(Handle-\u003ea b)-\u003eIO Handle-\u003eFeedSource a b",
          "package": "sousit",
          "partial": "Source Res No EOF",
          "signature": "(Handle-\u003em a)-\u003eIO Handle-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Handle.html#v:hSourceResNoEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.List",
          "name": "List",
          "package": "sousit",
          "source": "src/Data-SouSiT-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT List",
          "module": "Data.SouSiT.List",
          "name": "List",
          "package": "sousit",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sink that collects all input into a list. Does never say SinkDone.\n\u003c/p\u003e",
          "module": "Data.SouSiT.List",
          "name": "listSink",
          "package": "sousit",
          "signature": "Sink a m [a]",
          "source": "src/Data-SouSiT-List.html#listSink",
          "type": "function"
        },
        "index": {
          "description": "sink that collects all input into list Does never say SinkDone",
          "hierarchy": "Data SouSiT List",
          "module": "Data.SouSiT.List",
          "name": "listSink",
          "normalized": "Sink a b[a]",
          "package": "sousit",
          "partial": "Sink",
          "signature": "Sink a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-List.html#v:listSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source containing the elements of the list\n\u003c/p\u003e",
          "module": "Data.SouSiT.List",
          "name": "listSource",
          "package": "sousit",
          "signature": "[a] -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-List.html#listSource",
          "type": "function"
        },
        "index": {
          "description": "source containing the elements of the list",
          "hierarchy": "Data SouSiT List",
          "module": "Data.SouSiT.List",
          "name": "listSource",
          "normalized": "[a]-\u003eFeedSource b a",
          "package": "sousit",
          "partial": "Source",
          "signature": "[a]-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-List.html#v:listSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.STM",
          "name": "STM",
          "package": "sousit",
          "source": "src/Data-SouSiT-STM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "STM",
          "package": "sousit",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sink that executes (atomically) a STM action for every input received.\n   The sink continues as long as the action returns Nothing. When the action\n   returns Just, then that value is the result of the sink.\n\u003c/p\u003e",
          "module": "Data.SouSiT.STM",
          "name": "stmSink",
          "package": "sousit",
          "signature": "(a -\u003e STM (Maybe r)) -\u003e Sink a m (Maybe r)",
          "source": "src/Data-SouSiT-STM.html#stmSink",
          "type": "function"
        },
        "index": {
          "description": "sink that executes atomically STM action for every input received The sink continues as long as the action returns Nothing When the action returns Just then that value is the result of the sink",
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "stmSink",
          "normalized": "(a-\u003eSTM(Maybe b))-\u003eSink a c(Maybe b)",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(a-\u003eSTM(Maybe r))-\u003eSink a m(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#v:stmSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sink that executes (atomically) a STM action for every input received.\n   The sink never terminates.\n\u003c/p\u003e",
          "module": "Data.SouSiT.STM",
          "name": "stmSink'",
          "package": "sousit",
          "signature": "(a -\u003e STM ()) -\u003e Sink a m ()",
          "source": "src/Data-SouSiT-STM.html#stmSink%27",
          "type": "function"
        },
        "index": {
          "description": "sink that executes atomically STM action for every input received The sink never terminates",
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "stmSink'",
          "normalized": "(a-\u003eSTM())-\u003eSink a b()",
          "package": "sousit",
          "partial": "Sink'",
          "signature": "(a-\u003eSTM())-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#v:stmSink-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource that executes a STM action to get a new item. When the action returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n   then the source is depleted.\n\u003c/p\u003e",
          "module": "Data.SouSiT.STM",
          "name": "stmSource",
          "package": "sousit",
          "signature": "STM (Maybe a) -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-STM.html#stmSource",
          "type": "function"
        },
        "index": {
          "description": "Source that executes STM action to get new item When the action returns Nothing then the source is depleted",
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "stmSource",
          "normalized": "STM(Maybe a)-\u003eFeedSource b a",
          "package": "sousit",
          "partial": "Source",
          "signature": "STM(Maybe a)-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#v:stmSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource that executes a STM action to get a new item. Does never run out of items.\n\u003c/p\u003e",
          "module": "Data.SouSiT.STM",
          "name": "stmSource'",
          "package": "sousit",
          "signature": "STM a -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-STM.html#stmSource%27",
          "type": "function"
        },
        "index": {
          "description": "Source that executes STM action to get new item Does never run out of items",
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "stmSource'",
          "normalized": "STM a-\u003eFeedSource b a",
          "package": "sousit",
          "partial": "Source'",
          "signature": "STM a-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#v:stmSource-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink that writes all items into a TChan.\n\u003c/p\u003e",
          "module": "Data.SouSiT.STM",
          "name": "tchanSink",
          "package": "sousit",
          "signature": "TChan a -\u003e Sink a m ()",
          "source": "src/Data-SouSiT-STM.html#tchanSink",
          "type": "function"
        },
        "index": {
          "description": "Sink that writes all items into TChan",
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "tchanSink",
          "normalized": "TChan a-\u003eSink a b()",
          "package": "sousit",
          "partial": "Sink",
          "signature": "TChan a-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#v:tchanSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource that reads from a TChan. Does never run out of items (just waits for new ones\n   written to the TChan).\n\u003c/p\u003e",
          "module": "Data.SouSiT.STM",
          "name": "tchanSource",
          "package": "sousit",
          "signature": "TChan a -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-STM.html#tchanSource",
          "type": "function"
        },
        "index": {
          "description": "Source that reads from TChan Does never run out of items just waits for new ones written to the TChan",
          "hierarchy": "Data SouSiT STM",
          "module": "Data.SouSiT.STM",
          "name": "tchanSource",
          "normalized": "TChan a-\u003eFeedSource b a",
          "package": "sousit",
          "partial": "Source",
          "signature": "TChan a-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-STM.html#v:tchanSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "Sink",
          "package": "sousit",
          "source": "src/Data-SouSiT-Sink.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "Sink",
          "package": "sousit",
          "partial": "Sink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "Sink",
          "package": "sousit",
          "source": "src/Data-SouSiT-Sink.html#Sink",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "Sink",
          "package": "sousit",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "SinkStatus",
          "package": "sousit",
          "source": "src/Data-SouSiT-Sink.html#SinkStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "SinkStatus",
          "package": "sousit",
          "partial": "Sink Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#t:SinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two sinks that produce a monoid.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "(=||=)",
          "package": "sousit",
          "signature": "Sink a m r -\u003e Sink a m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Sink.html#%3D%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "description": "Concatenates two sinks that produce monoid",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "(=||=) =||=",
          "normalized": "Sink a b c-\u003eSink a b c-\u003eSink a b c",
          "package": "sousit",
          "signature": "Sink a m r-\u003eSink a m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:-61--124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "Cont",
          "package": "sousit",
          "signature": "Cont (i -\u003e m (Sink i m r)) (m r)",
          "source": "src/Data-SouSiT-Sink.html#SinkStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "Cont",
          "normalized": "Cont(a-\u003eb(Sink a b c))(b c)",
          "package": "sousit",
          "partial": "Cont",
          "signature": "Cont(i-\u003em(Sink i m r))(m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "Done",
          "package": "sousit",
          "signature": "Done (m r)",
          "source": "src/Data-SouSiT-Sink.html#SinkStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "Done",
          "package": "sousit",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "Sink",
          "package": "sousit",
          "signature": "Sink",
          "source": "src/Data-SouSiT-Sink.html#Sink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "Sink",
          "package": "sousit",
          "partial": "Sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink that executes a monadic action per input received. Does not terminate.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "actionSink",
          "package": "sousit",
          "signature": "(i -\u003e m ()) -\u003e Sink i m ()",
          "source": "src/Data-SouSiT-Sink.html#actionSink",
          "type": "function"
        },
        "index": {
          "description": "Sink that executes monadic action per input received Does not terminate",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "actionSink",
          "normalized": "(a-\u003eb())-\u003eSink a b()",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(i-\u003em())-\u003eSink i m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:actionSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two sinks that produce a monoid.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "appendSink",
          "package": "sousit",
          "signature": "Sink a m r -\u003e Sink a m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Sink.html#appendSink",
          "type": "function"
        },
        "index": {
          "description": "Concatenates two sinks that produce monoid",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "appendSink",
          "normalized": "Sink a b c-\u003eSink a b c-\u003eSink a b c",
          "package": "sousit",
          "partial": "Sink",
          "signature": "Sink a m r-\u003eSink a m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:appendSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the sink and returns its result.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "closeSink",
          "package": "sousit",
          "signature": "Sink i m r -\u003e m r",
          "source": "src/Data-SouSiT-Sink.html#closeSink",
          "type": "function"
        },
        "index": {
          "description": "Closes the sink and returns its result",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "closeSink",
          "normalized": "Sink a b c-\u003eb c",
          "package": "sousit",
          "partial": "Sink",
          "signature": "Sink i m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:closeSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "contSink",
          "package": "sousit",
          "signature": "(i -\u003e m (Sink i m r)) -\u003e m r -\u003e Sink i m r",
          "source": "src/Data-SouSiT-Sink.html#contSink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "contSink",
          "normalized": "(a-\u003eb(Sink a b c))-\u003eb c-\u003eSink a b c",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(i-\u003em(Sink i m r))-\u003em r-\u003eSink i m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:contSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "contSink'",
          "package": "sousit",
          "signature": "(i -\u003e Sink i m r) -\u003e m r -\u003e Sink i m r",
          "source": "src/Data-SouSiT-Sink.html#contSink%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "contSink'",
          "normalized": "(a-\u003eSink a b c)-\u003eb c-\u003eSink a b c",
          "package": "sousit",
          "partial": "Sink'",
          "signature": "(i-\u003eSink i m r)-\u003em r-\u003eSink i m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:contSink-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "doneSink",
          "package": "sousit",
          "signature": "m r -\u003e Sink i m r",
          "source": "src/Data-SouSiT-Sink.html#doneSink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "doneSink",
          "normalized": "a b-\u003eSink c a b",
          "package": "sousit",
          "partial": "Sink",
          "signature": "m r-\u003eSink i m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:doneSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "doneSink'",
          "package": "sousit",
          "signature": "r -\u003e Sink i m r",
          "source": "src/Data-SouSiT-Sink.html#doneSink%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "doneSink'",
          "normalized": "a-\u003eSink b c a",
          "package": "sousit",
          "partial": "Sink'",
          "signature": "r-\u003eSink i m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:doneSink-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a list of inputs to a sink.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "feedList",
          "package": "sousit",
          "signature": "[i] -\u003e Sink i m r -\u003e m (Sink i m r)",
          "source": "src/Data-SouSiT-Sink.html#feedList",
          "type": "function"
        },
        "index": {
          "description": "Feed list of inputs to sink",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "feedList",
          "normalized": "[a]-\u003eSink a b c-\u003eb(Sink a b c)",
          "package": "sousit",
          "partial": "List",
          "signature": "[i]-\u003eSink i m r-\u003em(Sink i m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:feedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the next element.\n   The sink returns a fail if it is closed before the input is received.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Sink\",\"Data.SouSiT\"]",
          "name": "input",
          "package": "sousit",
          "signature": "Sink a m a",
          "source": "src/Data-SouSiT-Sink.html#input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:input\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:input\"]"
        },
        "index": {
          "description": "Reads the next element The sink returns fail if it is closed before the input is received",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "input",
          "package": "sousit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the next element. Returns (Just a) for the element or Nothing if the sink is closed\n   before the input was available.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Sink\",\"Data.SouSiT\"]",
          "name": "inputMap",
          "package": "sousit",
          "signature": "(a -\u003e m b) -\u003e m b -\u003e Sink a m b",
          "source": "src/Data-SouSiT-Sink.html#inputMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:inputMap\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:inputMap\"]"
        },
        "index": {
          "description": "Reads the next element Returns Just for the element or Nothing if the sink is closed before the input was available",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "inputMap",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eSink a b c",
          "package": "sousit",
          "partial": "Map",
          "signature": "(a-\u003em b)-\u003em b-\u003eSink a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:inputMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the next element. Returns (Just a) for the element or Nothing if the sink is closed\n   before the input was available.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Sink\",\"Data.SouSiT\"]",
          "name": "inputMaybe",
          "package": "sousit",
          "signature": "Sink a m (Maybe a)",
          "source": "src/Data-SouSiT-Sink.html#inputMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:inputMaybe\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:inputMaybe\"]"
        },
        "index": {
          "description": "Reads the next element Returns Just for the element or Nothing if the sink is closed before the input was available",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "inputMaybe",
          "package": "sousit",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:inputMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the next element.\n   If the sink is closed while waiting for the input, then the parameter is returned\n   as the sinks result.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Sink\",\"Data.SouSiT\"]",
          "name": "inputOr",
          "package": "sousit",
          "signature": "m a -\u003e Sink a m a",
          "source": "src/Data-SouSiT-Sink.html#inputOr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:inputOr\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:inputOr\"]"
        },
        "index": {
          "description": "Reads the next element If the sink is closed while waiting for the input then the parameter is returned as the sinks result",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "inputOr",
          "normalized": "a b-\u003eSink b a b",
          "package": "sousit",
          "partial": "Or",
          "signature": "m a-\u003eSink a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:inputOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the monad of a sink based upon a conversion function that maps the original monad\n   to the new one.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Sink\",\"Data.SouSiT\"]",
          "name": "liftSink",
          "package": "sousit",
          "signature": "(forall x.  m x -\u003e m' x) -\u003e Sink i m r -\u003e Sink i m' r",
          "source": "src/Data-SouSiT-Sink.html#liftSink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:liftSink\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:liftSink\"]"
        },
        "index": {
          "description": "Changes the monad of sink based upon conversion function that maps the original monad to the new one",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "liftSink",
          "normalized": "(a b c d-\u003ee d)-\u003eSink f c g-\u003eSink f e g",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(forall x. m x-\u003em' x)-\u003eSink i m r-\u003eSink i m' r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:liftSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink that executes f for every input.\n   The sink continues as long as the action returns Nothing, when the action returns\n   Just, then that value is the result of the sink (and the sink is \u003ccode\u003efull\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "maybeSink",
          "package": "sousit",
          "signature": "(i -\u003e m (Maybe r)) -\u003e Sink i m (Maybe r)",
          "source": "src/Data-SouSiT-Sink.html#maybeSink",
          "type": "function"
        },
        "index": {
          "description": "Sink that executes for every input The sink continues as long as the action returns Nothing when the action returns Just then that value is the result of the sink and the sink is full",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "maybeSink",
          "normalized": "(a-\u003eb(Maybe c))-\u003eSink a b(Maybe c)",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(i-\u003em(Maybe r))-\u003eSink i m(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:maybeSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst calls open, then processes every input with process and when the sink is closed\n   close is called. Does not terminate.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Sink",
          "name": "openCloseActionSink",
          "package": "sousit",
          "signature": "m a -\u003e (a -\u003e m ()) -\u003e (a -\u003e i -\u003e m ()) -\u003e Sink i m ()",
          "source": "src/Data-SouSiT-Sink.html#openCloseActionSink",
          "type": "function"
        },
        "index": {
          "description": "First calls open then processes every input with process and when the sink is closed close is called Does not terminate",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "openCloseActionSink",
          "normalized": "a b-\u003e(b-\u003ea())-\u003e(b-\u003ec-\u003ea())-\u003eSink c a()",
          "package": "sousit",
          "partial": "Close Action Sink",
          "signature": "m a-\u003e(a-\u003em())-\u003e(a-\u003ei-\u003em())-\u003eSink i m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:openCloseActionSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Sink",
          "name": "sinkStatus",
          "package": "sousit",
          "signature": "m (SinkStatus i m r)",
          "source": "src/Data-SouSiT-Sink.html#Sink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "sinkStatus",
          "package": "sousit",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:sinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips n input elements. If the sink is closed before then the result will also be ().\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Sink\",\"Data.SouSiT\"]",
          "name": "skip",
          "package": "sousit",
          "signature": "n -\u003e Sink a m ()",
          "source": "src/Data-SouSiT-Sink.html#skip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:skip\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:skip\"]"
        },
        "index": {
          "description": "Skips input elements If the sink is closed before then the result will also be",
          "hierarchy": "Data SouSiT Sink",
          "module": "Data.SouSiT.Sink",
          "name": "skip",
          "normalized": "a-\u003eSink b c()",
          "package": "sousit",
          "signature": "n-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Sink.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Source",
          "name": "Source",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "Source",
          "package": "sousit",
          "partial": "Source",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic instance of FeedSource (and Source)\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "FeedSource",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html#FeedSource",
          "type": "data"
        },
        "index": {
          "description": "basic instance of FeedSource and Source",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "FeedSource",
          "package": "sousit",
          "partial": "Feed Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#t:FeedSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic instance of Source\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "SimpleSource",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html#SimpleSource",
          "type": "data"
        },
        "index": {
          "description": "basic instance of Source",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "SimpleSource",
          "package": "sousit",
          "partial": "Simple Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#t:SimpleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething that produces data to be processed by a sink\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "Source",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html#Source",
          "type": "class"
        },
        "index": {
          "description": "Something that produces data to be processed by sink",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "Source",
          "package": "sousit",
          "partial": "Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer the data from the source into the sink\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Source\",\"Data.SouSiT\"]",
          "name": "($$)",
          "package": "sousit",
          "signature": "src m a -\u003e Sink a m r -\u003e m r",
          "source": "src/Data-SouSiT-Source.html#%24%24",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:-36--36-\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:-36--36-\"]"
        },
        "index": {
          "description": "Transfer the data from the source into the sink",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "($$) $$",
          "normalized": "a b c-\u003eSink c b d-\u003eb d",
          "package": "sousit",
          "signature": "src m a-\u003eSink a m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two sources.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Source\",\"Data.SouSiT\"]",
          "name": "(=+|=)",
          "package": "sousit",
          "signature": "FeedSource m a -\u003e src2 m a -\u003e SimpleSource m a",
          "source": "src/Data-SouSiT-Source.html#%3D%2B%7C%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:-61--43--124--61-\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:-61--43--124--61-\"]"
        },
        "index": {
          "description": "Concatenates two sources",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "(=+|=) =+|=",
          "normalized": "FeedSource a b-\u003ec a b-\u003eSimpleSource a b",
          "package": "sousit",
          "signature": "FeedSource m a-\u003esrc m a-\u003eSimpleSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:-61--43--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two sources.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Source\",\"Data.SouSiT\"]",
          "name": "(=+=)",
          "package": "sousit",
          "signature": "FeedSource m a -\u003e FeedSource m a -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-Source.html#%3D%2B%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:-61--43--61-\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:-61--43--61-\"]"
        },
        "index": {
          "description": "Concatenates two sources",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "(=+=) =+=",
          "normalized": "FeedSource a b-\u003eFeedSource a b-\u003eFeedSource a b",
          "package": "sousit",
          "signature": "FeedSource m a-\u003eFeedSource m a-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:-61--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Source",
          "name": "FeedSource",
          "package": "sousit",
          "signature": "FeedSource",
          "source": "src/Data-SouSiT-Source.html#FeedSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "FeedSource",
          "package": "sousit",
          "partial": "Feed Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:FeedSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SouSiT.Source\",\"Data.SouSiT\"]",
          "name": "SimpleSource",
          "package": "sousit",
          "signature": "SimpleSource (forall r.  Sink a m r -\u003e m r)",
          "source": "src/Data-SouSiT-Source.html#SimpleSource",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:SimpleSource\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:SimpleSource\"]"
        },
        "index": {
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "SimpleSource",
          "normalized": "SimpleSource(a b Sink c d e-\u003ed e)",
          "package": "sousit",
          "partial": "Simple Source",
          "signature": "SimpleSource(forall r. Sink a m r-\u003em r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:SimpleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource that executes a monadic action to get its inputs. Terminates when the sink terminates\n   or the action returns Nothing.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "actionSource",
          "package": "sousit",
          "signature": "m (Maybe i) -\u003e FeedSource m i",
          "source": "src/Data-SouSiT-Source.html#actionSource",
          "type": "function"
        },
        "index": {
          "description": "Source that executes monadic action to get its inputs Terminates when the sink terminates or the action returns Nothing",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "actionSource",
          "normalized": "a(Maybe b)-\u003eFeedSource a b",
          "package": "sousit",
          "partial": "Source",
          "signature": "m(Maybe i)-\u003eFeedSource m i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:actionSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource that first opens a resource, then transfers itself to the sink and the closes the\n   resource again (in a bracket).\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "bracketActionSource",
          "package": "sousit",
          "signature": "IO a -\u003e (a -\u003e IO ()) -\u003e (a -\u003e IO (Maybe i)) -\u003e FeedSource IO i",
          "source": "src/Data-SouSiT-Source.html#bracketActionSource",
          "type": "function"
        },
        "index": {
          "description": "Source that first opens resource then transfers itself to the sink and the closes the resource again in bracket",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "bracketActionSource",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eIO(Maybe b))-\u003eFeedSource IO b",
          "package": "sousit",
          "partial": "Action Source",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eIO(Maybe i))-\u003eFeedSource IO i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:bracketActionSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two sources.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "concatSources",
          "package": "sousit",
          "signature": "FeedSource m a -\u003e src2 m a -\u003e SimpleSource m a",
          "source": "src/Data-SouSiT-Source.html#concatSources",
          "type": "function"
        },
        "index": {
          "description": "Concatenates two sources",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "concatSources",
          "normalized": "FeedSource a b-\u003ec a b-\u003eSimpleSource a b",
          "package": "sousit",
          "partial": "Sources",
          "signature": "FeedSource m a-\u003esrc m a-\u003eSimpleSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:concatSources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two sources yielding a FeedSource.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Source",
          "name": "concatSources'",
          "package": "sousit",
          "signature": "FeedSource m a -\u003e FeedSource m a -\u003e FeedSource m a",
          "source": "src/Data-SouSiT-Source.html#concatSources%27",
          "type": "function"
        },
        "index": {
          "description": "Concatenates two sources yielding FeedSource",
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "concatSources'",
          "normalized": "FeedSource a b-\u003eFeedSource a b-\u003eFeedSource a b",
          "package": "sousit",
          "partial": "Sources'",
          "signature": "FeedSource m a-\u003eFeedSource m a-\u003eFeedSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:concatSources-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Source",
          "name": "feedToSink",
          "package": "sousit",
          "signature": "forall r.  Sink a m r -\u003e m (Sink a m r)",
          "source": "src/Data-SouSiT-Source.html#FeedSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "feedToSink",
          "normalized": "a b Sink c d e-\u003ed(Sink c d e)",
          "package": "sousit",
          "partial": "To Sink",
          "signature": "forall r. Sink a m r-\u003em(Sink a m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:feedToSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Source",
          "name": "transfer",
          "package": "sousit",
          "signature": "src m a -\u003e Sink a m r -\u003e m r",
          "source": "src/Data-SouSiT-Source.html#transfer",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SouSiT Source",
          "module": "Data.SouSiT.Source",
          "name": "transfer",
          "normalized": "a b c-\u003eSink c b d-\u003eb d",
          "package": "sousit",
          "signature": "src m a-\u003eSink a m r-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Source.html#v:transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "Trans",
          "package": "sousit",
          "source": "src/Data-SouSiT-Trans.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "Trans",
          "package": "sousit",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "TransFun",
          "package": "sousit",
          "source": "src/Data-SouSiT-Trans.html#TransFun",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "TransFun",
          "package": "sousit",
          "partial": "Trans Fun",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#t:TransFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulates all elements with the accumulator function.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "accumulate",
          "package": "sousit",
          "signature": "b -\u003e (b -\u003e a -\u003e b) -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#accumulate",
          "type": "function"
        },
        "index": {
          "description": "Accumulates all elements with the accumulator function",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "accumulate",
          "normalized": "a-\u003e(a-\u003eb-\u003ea)-\u003eTransform b a",
          "package": "sousit",
          "signature": "b-\u003e(b-\u003ea-\u003eb)-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:accumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes with t1 and when t1 ends, then the next input is fed to through t2.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "andThen",
          "package": "sousit",
          "signature": "Transform a b -\u003e Transform a b -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#andThen",
          "type": "function"
        },
        "index": {
          "description": "Executes with t1 and when t1 ends then the next input is fed to through t2",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "andThen",
          "normalized": "Transform a b-\u003eTransform a b-\u003eTransform a b",
          "package": "sousit",
          "partial": "Then",
          "signature": "Transform a b-\u003eTransform a b-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:andThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "applyMapping",
          "package": "sousit",
          "signature": "(Sink a m r -\u003e Sink b m r) -\u003e (b -\u003e a) -\u003e SinkStatus a m r -\u003e SinkStatus b m r",
          "source": "src/Data-SouSiT-Trans.html#applyMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "applyMapping",
          "normalized": "(Sink a b c-\u003eSink d b c)-\u003e(d-\u003ea)-\u003eSinkStatus a b c-\u003eSinkStatus d b c",
          "package": "sousit",
          "partial": "Mapping",
          "signature": "(Sink a m r-\u003eSink b m r)-\u003e(b-\u003ea)-\u003eSinkStatus a m r-\u003eSinkStatus b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:applyMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "applyTransFun",
          "package": "sousit",
          "signature": "TransFun a b m r -\u003e SinkStatus a m r -\u003e SinkStatus b m r",
          "source": "src/Data-SouSiT-Trans.html#applyTransFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "applyTransFun",
          "normalized": "TransFun a b c d-\u003eSinkStatus a c d-\u003eSinkStatus b c d",
          "package": "sousit",
          "partial": "Trans Fun",
          "signature": "TransFun a b m r-\u003eSinkStatus a m r-\u003eSinkStatus b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:applyTransFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulates up to n elements with the accumulator function and then releases it.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "buffer",
          "package": "sousit",
          "signature": "Int -\u003e b -\u003e (b -\u003e a -\u003e b) -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#buffer",
          "type": "function"
        },
        "index": {
          "description": "Accumulates up to elements with the accumulator function and then releases it",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "buffer",
          "normalized": "Int-\u003ea-\u003e(a-\u003eb-\u003ea)-\u003eTransform b a",
          "package": "sousit",
          "signature": "Int-\u003eb-\u003e(b-\u003ea-\u003eb)-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the received elements.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "count",
          "package": "sousit",
          "signature": "Transform a n",
          "source": "src/Data-SouSiT-Trans.html#count",
          "type": "function"
        },
        "index": {
          "description": "Counts the received elements",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "count",
          "package": "sousit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs every element received to the System-out (using putStrLn).\n   Format: \u003ca\u003elabel\u003c/a\u003e: \u003ca\u003eelement\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "debug",
          "package": "sousit",
          "signature": "String -\u003e Sink a m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Trans.html#debug",
          "type": "function"
        },
        "index": {
          "description": "Outputs every element received to the System-out using putStrLn Format label element",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "debug",
          "normalized": "String-\u003eSink a b c-\u003eSink a b c",
          "package": "sousit",
          "signature": "String-\u003eSink a m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserializes ByteString elements. The ByteStrings may be chunked, but the beginnings\n   of values must be aligned to the chunks. If this is not the case then consider splitting\n   the ByteStrings by the appropriate start delimiter (if available) or split them up into\n   singletons.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "deserialize",
          "package": "sousit",
          "signature": "Transform ByteString b",
          "source": "src/Data-SouSiT-Trans.html#deserialize",
          "type": "function"
        },
        "index": {
          "description": "Deserializes ByteString elements The ByteStrings may be chunked but the beginnings of values must be aligned to the chunks If this is not the case then consider splitting the ByteStrings by the appropriate start delimiter if available or split them up into singletons",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "deserialize",
          "package": "sousit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield all elements of the array as seperate outputs.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "disperse",
          "package": "sousit",
          "signature": "Transform [a] a",
          "source": "src/Data-SouSiT-Trans.html#disperse",
          "type": "function"
        },
        "index": {
          "description": "Yield all elements of the array as seperate outputs",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "disperse",
          "normalized": "Transform[a]a",
          "package": "sousit",
          "signature": "Transform[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:disperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the first n inputs then passes through all inputs unchanged\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "drop",
          "package": "sousit",
          "signature": "n -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Drops the first inputs then passes through all inputs unchanged",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "drop",
          "normalized": "a-\u003eTransform b b",
          "package": "sousit",
          "signature": "n-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops inputs until the predicate is matched. The matching input and all subsequent inputs\n are passed on unchanged.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "dropUntil",
          "package": "sousit",
          "signature": "(a -\u003e Bool) -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#dropUntil",
          "type": "function"
        },
        "index": {
          "description": "Drops inputs until the predicate is matched The matching input and all subsequent inputs are passed on unchanged",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "dropUntil",
          "normalized": "(a-\u003eBool)-\u003eTransform a a",
          "package": "sousit",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:dropUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops inputs as long as they match the predicate. The first non-matching input and all\n following inputs are passed on unchanged.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "dropWhile",
          "package": "sousit",
          "signature": "(a -\u003e Bool) -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Drops inputs as long as they match the predicate The first non-matching input and all following inputs are passed on unchanged",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eTransform a a",
          "package": "sousit",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly lets the \u003ccode\u003elefts\u003c/code\u003e of Either pass.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "eitherLeft",
          "package": "sousit",
          "signature": "Transform (Either a b) a",
          "source": "src/Data-SouSiT-Trans.html#eitherLeft",
          "type": "function"
        },
        "index": {
          "description": "Only lets the lefts of Either pass",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "eitherLeft",
          "package": "sousit",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:eitherLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly lets the \u003ccode\u003erights\u003c/code\u003e of Either pass.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "eitherRight",
          "package": "sousit",
          "signature": "Transform (Either a b) b",
          "source": "src/Data-SouSiT-Trans.html#eitherRight",
          "type": "function"
        },
        "index": {
          "description": "Only lets the rights of Either pass",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "eitherRight",
          "package": "sousit",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:eitherRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly retains elements that match the filter function\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "filter",
          "package": "sousit",
          "signature": "(a -\u003e Bool) -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Only retains elements that match the filter function",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eTransform a a",
          "package": "sousit",
          "signature": "(a-\u003eBool)-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap that allows to filter out elements.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "filterMap",
          "package": "sousit",
          "signature": "(a -\u003e Maybe b) -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#filterMap",
          "type": "function"
        },
        "index": {
          "description": "Map that allows to filter out elements",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "filterMap",
          "normalized": "(a-\u003eMaybe b)-\u003eTransform a b",
          "package": "sousit",
          "partial": "Map",
          "signature": "(a-\u003eMaybe b)-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:filterMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to each element and passes on every element of the result list seperatly.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "flatMap",
          "package": "sousit",
          "signature": "(a -\u003e [b]) -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#flatMap",
          "type": "function"
        },
        "index": {
          "description": "Applies function to each element and passes on every element of the result list seperatly",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "flatMap",
          "normalized": "(a-\u003e[b])-\u003eTransform a b",
          "package": "sousit",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:flatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoops the given transform forever.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "loop",
          "package": "sousit",
          "signature": "Transform a b -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#loop",
          "type": "function"
        },
        "index": {
          "description": "Loops the given transform forever",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "loop",
          "normalized": "Transform a b-\u003eTransform a b",
          "package": "sousit",
          "signature": "Transform a b-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoops the given transform n times\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "loopN",
          "package": "sousit",
          "signature": "Int -\u003e Transform a b -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#loopN",
          "type": "function"
        },
        "index": {
          "description": "Loops the given transform times",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "loopN",
          "normalized": "Int-\u003eTransform a b-\u003eTransform a b",
          "package": "sousit",
          "signature": "Int-\u003eTransform a b-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:loopN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms each input individually by applying the function.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "map",
          "package": "sousit",
          "signature": "(a -\u003e b) -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#map",
          "type": "function"
        },
        "index": {
          "description": "Transforms each input individually by applying the function",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eTransform a b",
          "package": "sousit",
          "signature": "(a-\u003eb)-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms each input individually by applying the monadic function.\n   Warning: This is not really a Transform, since it isn't pure.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "mapM",
          "package": "sousit",
          "signature": "(b -\u003e m a) -\u003e Sink a m r -\u003e Sink b m r",
          "source": "src/Data-SouSiT-Trans.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "Transforms each input individually by applying the monadic function Warning This is not really Transform since it isn pure",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eSink c b d-\u003eSink a b d",
          "package": "sousit",
          "signature": "(b-\u003em a)-\u003eSink a m r-\u003eSink b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "mapSinkMapping",
          "package": "sousit",
          "signature": "(Sink a m r -\u003e Sink b m r) -\u003e (b -\u003e a) -\u003e Sink a m r -\u003e Sink b m r",
          "source": "src/Data-SouSiT-Trans.html#mapSinkMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "mapSinkMapping",
          "normalized": "(Sink a b c-\u003eSink d b c)-\u003e(d-\u003ea)-\u003eSink a b c-\u003eSink d b c",
          "package": "sousit",
          "partial": "Sink Mapping",
          "signature": "(Sink a m r-\u003eSink b m r)-\u003e(b-\u003ea)-\u003eSink a m r-\u003eSink b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:mapSinkMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "mapSinkStatus",
          "package": "sousit",
          "signature": "(SinkStatus a m r -\u003e SinkStatus b m r) -\u003e Sink a m r -\u003e Sink b m r",
          "source": "src/Data-SouSiT-Trans.html#mapSinkStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "mapSinkStatus",
          "normalized": "(SinkStatus a b c-\u003eSinkStatus d b c)-\u003eSink a b c-\u003eSink d b c",
          "package": "sousit",
          "partial": "Sink Status",
          "signature": "(SinkStatus a m r-\u003eSinkStatus b m r)-\u003eSink a m r-\u003eSink b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:mapSinkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "mapSinkTransFun",
          "package": "sousit",
          "signature": "TransFun a b m r -\u003e Sink a m r -\u003e Sink b m r",
          "source": "src/Data-SouSiT-Trans.html#mapSinkTransFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "mapSinkTransFun",
          "normalized": "TransFun a b c d-\u003eSink a c d-\u003eSink b c d",
          "package": "sousit",
          "partial": "Sink Trans Fun",
          "signature": "TransFun a b m r-\u003eSink a m r-\u003eSink b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:mapSinkTransFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms each input and carry a state between the inputs.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "mapWithState",
          "package": "sousit",
          "signature": "(s -\u003e a -\u003e (b, s)) -\u003e s -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#mapWithState",
          "type": "function"
        },
        "index": {
          "description": "Transforms each input and carry state between the inputs",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "mapWithState",
          "normalized": "(a-\u003eb-\u003e(c,a))-\u003ea-\u003eTransform b c",
          "package": "sousit",
          "partial": "With State",
          "signature": "(s-\u003ea-\u003e(b,s))-\u003es-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:mapWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the given transforms in a sequence, as soon as one ends the next input is\n   passed to the next transform.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "sequence",
          "package": "sousit",
          "signature": "[Transform a b] -\u003e Transform a b",
          "source": "src/Data-SouSiT-Trans.html#sequence",
          "type": "function"
        },
        "index": {
          "description": "Executes the given transforms in sequence as soon as one ends the next input is passed to the next transform",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "sequence",
          "normalized": "[Transform a b]-\u003eTransform a b",
          "package": "sousit",
          "signature": "[Transform a b]-\u003eTransform a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize the elements into ByteString using cereal. For every input there is exactly one\n   output.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "serialize",
          "package": "sousit",
          "signature": "Transform a ByteString",
          "source": "src/Data-SouSiT-Trans.html#serialize",
          "type": "function"
        },
        "index": {
          "description": "Serialize the elements into ByteString using cereal For every input there is exactly one output",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "serialize",
          "package": "sousit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes only the first n inputs, then returns done.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "take",
          "package": "sousit",
          "signature": "n -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#take",
          "type": "function"
        },
        "index": {
          "description": "Takes only the first inputs then returns done",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "take",
          "normalized": "a-\u003eTransform b b",
          "package": "sousit",
          "signature": "n-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes inputs until the input fullfils the predicate. The matching input is not passed on.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "takeUntil",
          "package": "sousit",
          "signature": "(a -\u003e Bool) -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#takeUntil",
          "type": "function"
        },
        "index": {
          "description": "Takes inputs until the input fullfils the predicate The matching input is not passed on",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "takeUntil",
          "normalized": "(a-\u003eBool)-\u003eTransform a a",
          "package": "sousit",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:takeUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes inputs until the input matches the argument. The matching input is not passed on.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "takeUntilEq",
          "package": "sousit",
          "signature": "a -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#takeUntilEq",
          "type": "function"
        },
        "index": {
          "description": "Takes inputs until the input matches the argument The matching input is not passed on",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "takeUntilEq",
          "normalized": "a-\u003eTransform a a",
          "package": "sousit",
          "partial": "Until Eq",
          "signature": "a-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:takeUntilEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake inputs while the input fullfils the predicate. As soon as the first non-matching input\n is encountered no more inputs will be passed on.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "takeWhile",
          "package": "sousit",
          "signature": "(a -\u003e Bool) -\u003e Transform a a",
          "source": "src/Data-SouSiT-Trans.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Take inputs while the input fullfils the predicate As soon as the first non-matching input is encountered no more inputs will be passed on",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eTransform a a",
          "package": "sousit",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eTransform a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Trans",
          "name": "toDoneTrans",
          "package": "sousit",
          "signature": "Sink a m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Trans.html#toDoneTrans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "toDoneTrans",
          "normalized": "Sink a b c-\u003eSink a b c",
          "package": "sousit",
          "partial": "Done Trans",
          "signature": "Sink a m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:toDoneTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms each input to a tuple (input, index of input).\n I.e. for \u003ca\u003eMario\u003c/a\u003e: (M, 0), (a, 1), (r, 2), (i, 3), (o, 4)\n\u003c/p\u003e",
          "module": "Data.SouSiT.Trans",
          "name": "zipWithIndex",
          "package": "sousit",
          "signature": "Transform a (a, Int)",
          "source": "src/Data-SouSiT-Trans.html#zipWithIndex",
          "type": "function"
        },
        "index": {
          "description": "Transforms each input to tuple input index of input I.e for Mario",
          "hierarchy": "Data SouSiT Trans",
          "module": "Data.SouSiT.Trans",
          "name": "zipWithIndex",
          "normalized": "Transform a(a,Int)",
          "package": "sousit",
          "partial": "With Index",
          "signature": "Transform a(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Trans.html#v:zipWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Transform",
          "name": "Transform",
          "package": "sousit",
          "source": "src/Data-SouSiT-Transform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "Transform",
          "package": "sousit",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT.Transform",
          "name": "Transform",
          "package": "sousit",
          "source": "src/Data-SouSiT-Transform.html#Transform",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "Transform",
          "package": "sousit",
          "partial": "Transform",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transform to a source.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Transform\",\"Data.SouSiT\"]",
          "name": "($=)",
          "package": "sousit",
          "signature": "src m a -\u003e (forall r.  Sink b m r -\u003e Sink a m r) -\u003e SimpleSource m b",
          "source": "src/Data-SouSiT-Transform.html#%24%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:-36--61-\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:-36--61-\"]"
        },
        "index": {
          "description": "Apply transform to source",
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "($=) $=",
          "normalized": "a b c-\u003e(d e Sink f b g-\u003eSink c b g)-\u003eSimpleSource b f",
          "package": "sousit",
          "signature": "src m a-\u003e(forall r. Sink b m r-\u003eSink a m r)-\u003eSimpleSource m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transform to a sink.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Transform\",\"Data.SouSiT\"]",
          "name": "(=$)",
          "package": "sousit",
          "signature": "(Sink b m r -\u003e Sink a m r) -\u003e Sink b m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Transform.html#%3D%24",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:-61--36-\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:-61--36-\"]"
        },
        "index": {
          "description": "Apply transform to sink",
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "(=$) =$",
          "normalized": "(Sink a b c-\u003eSink d b c)-\u003eSink a b c-\u003eSink d b c",
          "package": "sousit",
          "signature": "(Sink b m r-\u003eSink a m r)-\u003eSink b m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:-61--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two transforms into one.\n\u003c/p\u003e",
          "module": "[\"Data.SouSiT.Transform\",\"Data.SouSiT\"]",
          "name": "(=$=)",
          "package": "sousit",
          "signature": "(Sink b m r -\u003e Sink a m r) -\u003e (Sink c m r -\u003e Sink b m r) -\u003e Sink c m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Transform.html#%3D%24%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:-61--36--61-\",\"http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:-61--36--61-\"]"
        },
        "index": {
          "description": "Merges two transforms into one",
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "(=$=) =$=",
          "normalized": "(Sink a b c-\u003eSink d b c)-\u003e(Sink e b c-\u003eSink a b c)-\u003eSink e b c-\u003eSink d b c",
          "package": "sousit",
          "signature": "(Sink b m r-\u003eSink a m r)-\u003e(Sink c m r-\u003eSink b m r)-\u003eSink c m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:-61--36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two transforms into one.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Transform",
          "name": "mergeTransform",
          "package": "sousit",
          "signature": "(Sink b m r -\u003e Sink a m r) -\u003e (Sink c m r -\u003e Sink b m r) -\u003e Sink c m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Transform.html#mergeTransform",
          "type": "function"
        },
        "index": {
          "description": "Merges two transforms into one",
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "mergeTransform",
          "normalized": "(Sink a b c-\u003eSink d b c)-\u003e(Sink e b c-\u003eSink a b c)-\u003eSink e b c-\u003eSink d b c",
          "package": "sousit",
          "partial": "Transform",
          "signature": "(Sink b m r-\u003eSink a m r)-\u003e(Sink c m r-\u003eSink b m r)-\u003eSink c m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:mergeTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transform to a sink.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Transform",
          "name": "transformSink",
          "package": "sousit",
          "signature": "(Sink b m r -\u003e Sink a m r) -\u003e Sink b m r -\u003e Sink a m r",
          "source": "src/Data-SouSiT-Transform.html#transformSink",
          "type": "function"
        },
        "index": {
          "description": "Apply transform to sink",
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "transformSink",
          "normalized": "(Sink a b c-\u003eSink d b c)-\u003eSink a b c-\u003eSink d b c",
          "package": "sousit",
          "partial": "Sink",
          "signature": "(Sink b m r-\u003eSink a m r)-\u003eSink b m r-\u003eSink a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:transformSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transform to a Source.\n\u003c/p\u003e",
          "module": "Data.SouSiT.Transform",
          "name": "transformSource",
          "package": "sousit",
          "signature": "(forall r.  Sink b m r -\u003e Sink a m r) -\u003e src m a -\u003e SimpleSource m b",
          "source": "src/Data-SouSiT-Transform.html#transformSource",
          "type": "function"
        },
        "index": {
          "description": "Apply transform to Source",
          "hierarchy": "Data SouSiT Transform",
          "module": "Data.SouSiT.Transform",
          "name": "transformSource",
          "normalized": "(a b Sink c d e-\u003eSink f d e)-\u003eg d f-\u003eSimpleSource d c",
          "package": "sousit",
          "partial": "Source",
          "signature": "(forall r. Sink b m r-\u003eSink a m r)-\u003esrc m a-\u003eSimpleSource m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT-Transform.html#v:transformSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT",
          "name": "SouSiT",
          "package": "sousit",
          "source": "src/Data-SouSiT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "SouSiT",
          "package": "sousit",
          "partial": "Sou Si",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic instance of FeedSource (and Source)\n\u003c/p\u003e",
          "module": "Data.SouSiT",
          "name": "FeedSource",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html#FeedSource",
          "type": "data"
        },
        "index": {
          "description": "basic instance of FeedSource and Source",
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "FeedSource",
          "package": "sousit",
          "partial": "Feed Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#t:FeedSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT",
          "name": "Fetch",
          "package": "sousit",
          "source": "src/Data-SouSiT.html#Fetch",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "Fetch",
          "package": "sousit",
          "partial": "Fetch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#t:Fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic instance of Source\n\u003c/p\u003e",
          "module": "Data.SouSiT",
          "name": "SimpleSource",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html#SimpleSource",
          "type": "data"
        },
        "index": {
          "description": "basic instance of Source",
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "SimpleSource",
          "package": "sousit",
          "partial": "Simple Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#t:SimpleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT",
          "name": "Sink",
          "package": "sousit",
          "source": "src/Data-SouSiT-Sink.html#Sink",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "Sink",
          "package": "sousit",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething that produces data to be processed by a sink\n\u003c/p\u003e",
          "module": "Data.SouSiT",
          "name": "Source",
          "package": "sousit",
          "source": "src/Data-SouSiT-Source.html#Source",
          "type": "class"
        },
        "index": {
          "description": "Something that produces data to be processed by sink",
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "Source",
          "package": "sousit",
          "partial": "Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT",
          "name": "Transform",
          "package": "sousit",
          "source": "src/Data-SouSiT-Transform.html#Transform",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "Transform",
          "package": "sousit",
          "partial": "Transform",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT",
          "name": "feedToSink",
          "package": "sousit",
          "signature": "FeedSource m a -\u003e forall r.  Sink a m r -\u003e m (Sink a m r)",
          "source": "src/Data-SouSiT-Source.html#feedToSink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "feedToSink",
          "normalized": "FeedSource a b-\u003ec d Sink b a e-\u003ea(Sink b a e)",
          "package": "sousit",
          "partial": "To Sink",
          "signature": "FeedSource m a-\u003eforall r. Sink a m r-\u003em(Sink a m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:feedToSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the (pure) fetch sink into any monad.\n\u003c/p\u003e",
          "module": "Data.SouSiT",
          "name": "liftFetch",
          "package": "sousit",
          "signature": "Fetch i a -\u003e Sink i m a",
          "source": "src/Data-SouSiT.html#liftFetch",
          "type": "function"
        },
        "index": {
          "description": "Lift the pure fetch sink into any monad",
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "liftFetch",
          "normalized": "Fetch a b-\u003eSink a c b",
          "package": "sousit",
          "partial": "Fetch",
          "signature": "Fetch i a-\u003eSink i m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:liftFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SouSiT",
          "name": "transfer",
          "package": "sousit",
          "signature": "src m a -\u003e Sink a m r -\u003e m r",
          "source": "src/Data-SouSiT-Source.html#transfer",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SouSiT",
          "module": "Data.SouSiT",
          "name": "transfer",
          "normalized": "a b c-\u003eSink c b d-\u003eb d",
          "package": "sousit",
          "signature": "src m a-\u003eSink a m r-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sousit/docs/Data-SouSiT.html#v:transfer"
      }
    }
  ]
]