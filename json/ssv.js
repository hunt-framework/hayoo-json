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
        "word": "ssv"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides conversion routines to and from\n various \"something-separated value\" (SSV) formats.  In\n particular, it converts the infamous \"comma separated\n value\" (CSV) format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.SSV",
          "name": "SSV",
          "package": "ssv",
          "source": "src/Text-SSV.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides conversion routines to and from various something-separated value SSV formats In particular it converts the infamous comma separated value CSV format",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSV",
          "package": "ssv",
          "partial": "SSV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormatting information for a particular SSV variant.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "SSVFormat",
          "package": "ssv",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "data"
        },
        "index": {
          "description": "Formatting information for particular SSV variant",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVFormat",
          "package": "ssv",
          "partial": "SSVFormat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#t:SSVFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormatting information for quoted strings for a\n particular SSV variant.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "SSVFormatQuote",
          "package": "ssv",
          "source": "src/Text-SSV.html#SSVFormatQuote",
          "type": "data"
        },
        "index": {
          "description": "Formatting information for quoted strings for particular SSV variant",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVFormatQuote",
          "package": "ssv",
          "partial": "SSVFormat Quote",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#t:SSVFormatQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates format name, line and column and gives an error message.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "SSVReadException",
          "package": "ssv",
          "source": "src/Text-SSV.html#SSVReadException",
          "type": "data"
        },
        "index": {
          "description": "Indicates format name line and column and gives an error message",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVReadException",
          "package": "ssv",
          "partial": "SSVRead Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#t:SSVReadException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates format name and failed field and gives an\n error message.  This should probably just be an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e,\n as the calling program is really responsible for passing\n something formattable to the show routines.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "SSVShowException",
          "package": "ssv",
          "source": "src/Text-SSV.html#SSVShowException",
          "type": "data"
        },
        "index": {
          "description": "Indicates format name and failed field and gives an error message This should probably just be an error as the calling program is really responsible for passing something formattable to the show routines",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVShowException",
          "package": "ssv",
          "partial": "SSVShow Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#t:SSVShowException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "SSVEOFException",
          "package": "ssv",
          "signature": "SSVEOFException String String",
          "source": "src/Text-SSV.html#SSVReadException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVEOFException",
          "package": "ssv",
          "partial": "SSVEOFException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:SSVEOFException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote format.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "SSVFormat",
          "package": "ssv",
          "signature": "SSVFormat",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "description": "Quote format",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVFormat",
          "package": "ssv",
          "partial": "SSVFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:SSVFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "SSVFormatQuote",
          "package": "ssv",
          "signature": "SSVFormatQuote",
          "source": "src/Text-SSV.html#SSVFormatQuote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVFormatQuote",
          "package": "ssv",
          "partial": "SSVFormat Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:SSVFormatQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "SSVReadException",
          "package": "ssv",
          "signature": "SSVReadException String (Int, Int) String",
          "source": "src/Text-SSV.html#SSVReadException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVReadException",
          "normalized": "SSVReadException String(Int,Int)String",
          "package": "ssv",
          "partial": "SSVRead Exception",
          "signature": "SSVReadException String(Int,Int)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:SSVReadException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "SSVShowException",
          "package": "ssv",
          "signature": "SSVShowException String String String",
          "source": "src/Text-SSV.html#SSVShowException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "SSVShowException",
          "package": "ssv",
          "partial": "SSVShow Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:SSVShowException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSSVFormat\u003c/a\u003e\u003c/code\u003e for CSV data. Closely follows RFC 4180.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "csvFormat",
          "package": "ssv",
          "signature": "SSVFormat",
          "source": "src/Text-SSV.html#csvFormat",
          "type": "function"
        },
        "index": {
          "description": "SSVFormat for CSV data Closely follows RFC",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "csvFormat",
          "package": "ssv",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:csvFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert LF (NL) sequences on input to CR LF. Leaves\n | other CRs alone.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "fromNL",
          "package": "ssv",
          "signature": "String -\u003e String",
          "source": "src/Text-SSV.html#fromNL",
          "type": "function"
        },
        "index": {
          "description": "Convert LF NL sequences on input to CR LF Leaves other CRs alone",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "fromNL",
          "normalized": "String-\u003eString",
          "package": "ssv",
          "partial": "NL",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:fromNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform \u003ccode\u003e\u003ca\u003ehPutSSV\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecsvFormat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "hPutCSV",
          "package": "ssv",
          "signature": "Handle -\u003e [[String]] -\u003e IO ()",
          "source": "src/Text-SSV.html#hPutCSV",
          "type": "function"
        },
        "index": {
          "description": "Perform hPutSSV with csvFormat",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "hPutCSV",
          "normalized": "Handle-\u003e[[String]]-\u003eIO()",
          "package": "ssv",
          "partial": "Put CSV",
          "signature": "Handle-\u003e[[String]]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:hPutCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a representation of the given SSV input out on a\n file handle using the given \u003ccode\u003e\u003ca\u003eSSVFormat\u003c/a\u003e\u003c/code\u003e. Uses CRLF as the\n line terminator character, as recommended by RFC 4180 for\n CSV.  Otherwise, this function behaves as writing the\n output of \u003ccode\u003e\u003ca\u003eshowSSV\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e; if you want native\n line terminators, this latter method works for that.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "hPutSSV",
          "package": "ssv",
          "signature": "SSVFormat -\u003e Handle -\u003e [[String]] -\u003e IO ()",
          "source": "src/Text-SSV.html#hPutSSV",
          "type": "function"
        },
        "index": {
          "description": "Put representation of the given SSV input out on file handle using the given SSVFormat Uses CRLF as the line terminator character as recommended by RFC for CSV Otherwise this function behaves as writing the output of showSSV to the Handle if you want native line terminators this latter method works for that",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "hPutSSV",
          "normalized": "SSVFormat-\u003eHandle-\u003e[[String]]-\u003eIO()",
          "package": "ssv",
          "partial": "Put SSV",
          "signature": "SSVFormat-\u003eHandle-\u003e[[String]]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:hPutSSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSSVFormat\u003c/a\u003e\u003c/code\u003e for UNIX \"password file\" data, i.e. colon-separated\n fields with no escape convention.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "pwfFormat",
          "package": "ssv",
          "signature": "SSVFormat",
          "source": "src/Text-SSV.html#pwfFormat",
          "type": "function"
        },
        "index": {
          "description": "SSVFormat for UNIX password file data i.e colon-separated fields with no escape convention",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "pwfFormat",
          "package": "ssv",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:pwfFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representing a CSV file into a\n properly-parsed list of rows, each a list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n fields. Adheres to the spirit and (mostly) to the letter\n of RFC 4180, which defines the `text/csv` MIME type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etoNL\u003c/a\u003e\u003c/code\u003e is used on the input string to clean up the\n various line endings that might appear. Note that this\n may result in irreversible, undesired manglings of CRs\n and LFs.\n\u003c/p\u003e\u003cp\u003eFields are expected to be separated by commas. Per RFC\n 4180, fields may be double-quoted: only whitespace, which\n is discarded, may appear outside the double-quotes of a\n quoted field. For unquoted fields, whitespace to the left\n of the field is discarded, but whitespace to the right is\n retained; this is convenient for the parser, and probably\n corresponds to the typical intent of CSV authors. Whitespace\n on both sides of a quoted field is discarded. If a\n double-quoted fields contains two double-quotes in a row,\n these are treated as an escaped encoding of a single\n double-quote.\n\u003c/p\u003e\u003cp\u003eThe final line of the input may end with a line terminator,\n which will be ignored, or without one.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "readCSV",
          "package": "ssv",
          "signature": "String -\u003e [[String]]",
          "source": "src/Text-SSV.html#readCSV",
          "type": "function"
        },
        "index": {
          "description": "Convert String representing CSV file into properly-parsed list of rows each list of String fields Adheres to the spirit and mostly to the letter of RFC which defines the text csv MIME type toNL is used on the input string to clean up the various line endings that might appear Note that this may result in irreversible undesired manglings of CRs and LFs Fields are expected to be separated by commas Per RFC fields may be double-quoted only whitespace which is discarded may appear outside the double-quotes of quoted field For unquoted fields whitespace to the left of the field is discarded but whitespace to the right is retained this is convenient for the parser and probably corresponds to the typical intent of CSV authors Whitespace on both sides of quoted field is discarded If double-quoted fields contains two double-quotes in row these are treated as an escaped encoding of single double-quote The final line of the input may end with line terminator which will be ignored or without one",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "readCSV",
          "normalized": "String-\u003e[[String]]",
          "package": "ssv",
          "partial": "CSV",
          "signature": "String-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:readCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead using an arbitrary \u003ccode\u003e\u003ca\u003eSSVFormat\u003c/a\u003e\u003c/code\u003e. The input is not\n cleaned with \u003ccode\u003e\u003ca\u003etoNL\u003c/a\u003e\u003c/code\u003e; if you want this, do it yourself.\n The standard SSV formats \u003ccode\u003e\u003ca\u003ecsvFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epwfFormat\u003c/a\u003e\u003c/code\u003e are\n provided.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "readSSV",
          "package": "ssv",
          "signature": "SSVFormat -\u003e String -\u003e [[String]]",
          "source": "src/Text-SSV.html#readSSV",
          "type": "function"
        },
        "index": {
          "description": "Read using an arbitrary SSVFormat The input is not cleaned with toNL if you want this do it yourself The standard SSV formats csvFormat and pwfFormat are provided",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "readSSV",
          "normalized": "SSVFormat-\u003eString-\u003e[[String]]",
          "package": "ssv",
          "partial": "SSV",
          "signature": "SSVFormat-\u003eString-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:readSSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of rows, each a list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e fields,\n to a single \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e CSV representation. Adheres to the\n spirit and (mostly) to the letter of RFC 4180, which\n defines the `text/csv` MIME type.\n\u003c/p\u003e\u003cp\u003eNewline will be used as the end-of-line character, and no\n discardable whitespace will appear in fields. Fields that\n need to be quoted because they contain a special\n character or line terminator will be quoted; all other\n fields will be left unquoted. The final row of CSV will\n end with a newline.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "showCSV",
          "package": "ssv",
          "signature": "[[String]] -\u003e String",
          "source": "src/Text-SSV.html#showCSV",
          "type": "function"
        },
        "index": {
          "description": "Convert list of rows each list of String fields to single String CSV representation Adheres to the spirit and mostly to the letter of RFC which defines the text csv MIME type Newline will be used as the end-of-line character and no discardable whitespace will appear in fields Fields that need to be quoted because they contain special character or line terminator will be quoted all other fields will be left unquoted The final row of CSV will end with newline",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "showCSV",
          "normalized": "[[String]]-\u003eString",
          "package": "ssv",
          "partial": "CSV",
          "signature": "[[String]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:showCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow using an arbitrary \u003ccode\u003e\u003ca\u003eSSVFormat\u003c/a\u003e\u003c/code\u003e.  The standard SSV\n formats \u003ccode\u003e\u003ca\u003ecsvFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epwfFormat\u003c/a\u003e\u003c/code\u003e are provided. Some\n effort is made to \"intelligently\" quote the fields; in\n the worst case an \u003ccode\u003e\u003ca\u003eSSVShowException\u003c/a\u003e\u003c/code\u003e will be thrown to\n indicate that a field had characters that could not be\n quoted.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "showSSV",
          "package": "ssv",
          "signature": "SSVFormat -\u003e [[String]] -\u003e String",
          "source": "src/Text-SSV.html#showSSV",
          "type": "function"
        },
        "index": {
          "description": "Show using an arbitrary SSVFormat The standard SSV formats csvFormat and pwfFormat are provided Some effort is made to intelligently quote the fields in the worst case an SSVShowException will be thrown to indicate that field had characters that could not be quoted",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "showSSV",
          "normalized": "SSVFormat-\u003e[[String]]-\u003eString",
          "package": "ssv",
          "partial": "SSV",
          "signature": "SSVFormat-\u003e[[String]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:showSSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape character outside of quotes.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "ssvFormatEscape",
          "package": "ssv",
          "signature": "Maybe Char",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "description": "Escape character outside of quotes",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatEscape",
          "package": "ssv",
          "partial": "Format Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "ssvFormatName",
          "package": "ssv",
          "signature": "String",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatName",
          "package": "ssv",
          "partial": "Format Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "ssvFormatQuote",
          "package": "ssv",
          "signature": "Maybe SSVFormatQuote",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatQuote",
          "package": "ssv",
          "partial": "Format Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "ssvFormatQuoteEscape",
          "package": "ssv",
          "signature": "Maybe Char",
          "source": "src/Text-SSV.html#SSVFormatQuote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatQuoteEscape",
          "package": "ssv",
          "partial": "Format Quote Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatQuoteEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "ssvFormatQuoteLeft",
          "package": "ssv",
          "signature": "Char",
          "source": "src/Text-SSV.html#SSVFormatQuote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatQuoteLeft",
          "package": "ssv",
          "partial": "Format Quote Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatQuoteLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SSV",
          "name": "ssvFormatQuoteRight",
          "package": "ssv",
          "signature": "Char",
          "source": "src/Text-SSV.html#SSVFormatQuote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatQuoteRight",
          "package": "ssv",
          "partial": "Format Quote Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatQuoteRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField separator.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "ssvFormatSeparator",
          "package": "ssv",
          "signature": "Char",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "description": "Field separator",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatSeparator",
          "package": "ssv",
          "partial": "Format Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip \u003ca\u003eextraneous\u003c/a\u003e spaces and tabs.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "ssvFormatStripWhite",
          "package": "ssv",
          "signature": "Bool",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "description": "Strip extraneous spaces and tabs",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatStripWhite",
          "package": "ssv",
          "partial": "Format Strip White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatStripWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of row.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "ssvFormatTerminator",
          "package": "ssv",
          "signature": "Char",
          "source": "src/Text-SSV.html#SSVFormat",
          "type": "function"
        },
        "index": {
          "description": "End of row",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "ssvFormatTerminator",
          "package": "ssv",
          "partial": "Format Terminator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:ssvFormatTerminator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert CR / LF sequences on input to LF (NL). Also convert\n other CRs to LF. This is probably the right way to handle CSV\n data.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "toNL",
          "package": "ssv",
          "signature": "String -\u003e String",
          "source": "src/Text-SSV.html#toNL",
          "type": "function"
        },
        "index": {
          "description": "Convert CR LF sequences on input to LF NL Also convert other CRs to LF This is probably the right way to handle CSV data",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "toNL",
          "normalized": "String-\u003eString",
          "package": "ssv",
          "partial": "NL",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:toNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform \u003ccode\u003e\u003ca\u003ewriteSSVFile\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ecsvFormat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "writeCSVFile",
          "package": "ssv",
          "signature": "String -\u003e [[String]] -\u003e IO ()",
          "source": "src/Text-SSV.html#writeCSVFile",
          "type": "function"
        },
        "index": {
          "description": "Perform writeSSVFile with csvFormat",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "writeCSVFile",
          "normalized": "String-\u003e[[String]]-\u003eIO()",
          "package": "ssv",
          "partial": "CSVFile",
          "signature": "String-\u003e[[String]]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:writeCSVFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an SSV representation of the given input into a\n new file located at the given path, using the given\n \u003ccode\u003e\u003ca\u003eSSVFormat\u003c/a\u003e\u003c/code\u003e. As with \u003ccode\u003e\u003ca\u003ehPutCSV\u003c/a\u003e\u003c/code\u003e, CRLF will be used as the\n line terminator.\n\u003c/p\u003e",
          "module": "Text.SSV",
          "name": "writeSSVFile",
          "package": "ssv",
          "signature": "SSVFormat -\u003e String -\u003e [[String]] -\u003e IO ()",
          "source": "src/Text-SSV.html#writeSSVFile",
          "type": "function"
        },
        "index": {
          "description": "Write an SSV representation of the given input into new file located at the given path using the given SSVFormat As with hPutCSV CRLF will be used as the line terminator",
          "hierarchy": "Text SSV",
          "module": "Text.SSV",
          "name": "writeSSVFile",
          "normalized": "SSVFormat-\u003eString-\u003e[[String]]-\u003eIO()",
          "package": "ssv",
          "partial": "SSVFile",
          "signature": "SSVFormat-\u003eString-\u003e[[String]]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ssv/docs/Text-SSV.html#v:writeSSVFile"
      }
    }
  ]
]