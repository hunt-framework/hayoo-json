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
        "word": "ldif"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Apply",
          "name": "Apply",
          "package": "ldif",
          "source": "src/Text-LDIF-Apply.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF Apply",
          "module": "Text.LDIF.Apply",
          "name": "Apply",
          "package": "ldif",
          "partial": "Apply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Apply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply operations in second LDIF on content of first LDIF. The destination LDIF has\n to be Content LDIF.\n\u003c/p\u003e",
          "module": "Text.LDIF.Apply",
          "name": "applyLDIF",
          "package": "ldif",
          "signature": "LDIF -\u003e LDIF -\u003e LDIF",
          "source": "src/Text-LDIF-Apply.html#applyLDIF",
          "type": "function"
        },
        "index": {
          "description": "Apply operations in second LDIF on content of first LDIF The destination LDIF has to be Content LDIF",
          "hierarchy": "Text LDIF Apply",
          "module": "Text.LDIF.Apply",
          "name": "applyLDIF",
          "normalized": "LDIF-\u003eLDIF-\u003eLDIF",
          "package": "ldif",
          "partial": "LDIF",
          "signature": "LDIF-\u003eLDIF-\u003eLDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Apply.html#v:applyLDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Consts",
          "name": "Consts",
          "package": "ldif",
          "source": "src/Text-LDIF-Consts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF Consts",
          "module": "Text.LDIF.Consts",
          "name": "Consts",
          "package": "ldif",
          "partial": "Consts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Consts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChars necessary to be escaped in DN when they are part of value\n\u003c/p\u003e",
          "module": "Text.LDIF.Consts",
          "name": "escapedDNChars",
          "package": "ldif",
          "signature": "[Char]",
          "source": "src/Text-LDIF-Consts.html#escapedDNChars",
          "type": "function"
        },
        "index": {
          "description": "Chars necessary to be escaped in DN when they are part of value",
          "hierarchy": "Text LDIF Consts",
          "module": "Text.LDIF.Consts",
          "name": "escapedDNChars",
          "normalized": "[Char]",
          "package": "ldif",
          "partial": "DNChars",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Consts.html#v:escapedDNChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChars with special meaning in DN\n\u003c/p\u003e",
          "module": "Text.LDIF.Consts",
          "name": "specialDNChars",
          "package": "ldif",
          "signature": "[Char]",
          "source": "src/Text-LDIF-Consts.html#specialDNChars",
          "type": "function"
        },
        "index": {
          "description": "Chars with special meaning in DN",
          "hierarchy": "Text LDIF Consts",
          "module": "Text.LDIF.Consts",
          "name": "specialDNChars",
          "normalized": "[Char]",
          "package": "ldif",
          "partial": "DNChars",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Consts.html#v:specialDNChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Diff",
          "name": "Diff",
          "package": "ldif",
          "source": "src/Text-LDIF-Diff.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF Diff",
          "module": "Text.LDIF.Diff",
          "name": "Diff",
          "package": "ldif",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two LDIFs and provide list of the Records for each input LDIF,\n which are different or not present in the other LDIF.\n\u003c/p\u003e",
          "module": "Text.LDIF.Diff",
          "name": "compareLDIF",
          "package": "ldif",
          "signature": "LDIF -\u003e LDIF -\u003e ([LDIFRecord], [LDIFRecord])",
          "source": "src/Text-LDIF-Diff.html#compareLDIF",
          "type": "function"
        },
        "index": {
          "description": "Compare two LDIFs and provide list of the Records for each input LDIF which are different or not present in the other LDIF",
          "hierarchy": "Text LDIF Diff",
          "module": "Text.LDIF.Diff",
          "name": "compareLDIF",
          "normalized": "LDIF-\u003eLDIF-\u003e([LDIFRecord],[LDIFRecord])",
          "package": "ldif",
          "partial": "LDIF",
          "signature": "LDIF-\u003eLDIF-\u003e([LDIFRecord],[LDIFRecord])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Diff.html#v:compareLDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate Change LDIF between two LDIF contents.\n If there is not difference the empty change list is returned.\n\u003c/p\u003e",
          "module": "Text.LDIF.Diff",
          "name": "diffLDIF",
          "package": "ldif",
          "signature": "LDIF -\u003e LDIF -\u003e Either String LDIF",
          "source": "src/Text-LDIF-Diff.html#diffLDIF",
          "type": "function"
        },
        "index": {
          "description": "Calculate Change LDIF between two LDIF contents If there is not difference the empty change list is returned",
          "hierarchy": "Text LDIF Diff",
          "module": "Text.LDIF.Diff",
          "name": "diffLDIF",
          "normalized": "LDIF-\u003eLDIF-\u003eEither String LDIF",
          "package": "ldif",
          "partial": "LDIF",
          "signature": "LDIF-\u003eLDIF-\u003eEither String LDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Diff.html#v:diffLDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate difference between two LDIF Records\n\u003c/p\u003e",
          "module": "Text.LDIF.Diff",
          "name": "diffRecord",
          "package": "ldif",
          "signature": "LDIFRecord -\u003e LDIFRecord -\u003e Maybe LDIFRecord",
          "source": "src/Text-LDIF-Diff.html#diffRecord",
          "type": "function"
        },
        "index": {
          "description": "Calculate difference between two LDIF Records",
          "hierarchy": "Text LDIF Diff",
          "module": "Text.LDIF.Diff",
          "name": "diffRecord",
          "normalized": "LDIFRecord-\u003eLDIFRecord-\u003eMaybe LDIFRecord",
          "package": "ldif",
          "partial": "Record",
          "signature": "LDIFRecord-\u003eLDIFRecord-\u003eMaybe LDIFRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Diff.html#v:diffRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Parser",
          "name": "Parser",
          "package": "ldif",
          "source": "src/Text-LDIF-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "Parser",
          "package": "ldif",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDIF Parser configuration\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "LDIFParserConfig",
          "package": "ldif",
          "source": "src/Text-LDIF-Parser.html#LDIFParserConfig",
          "type": "data"
        },
        "index": {
          "description": "LDIF Parser configuration",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "LDIFParserConfig",
          "package": "ldif",
          "partial": "LDIFParser Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#t:LDIFParserConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse as Case Sensitive LDIF\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "LDIFParserConfig",
          "package": "ldif",
          "signature": "LDIFParserConfig",
          "source": "src/Text-LDIF-Parser.html#LDIFParserConfig",
          "type": "function"
        },
        "index": {
          "description": "Parse as Case Sensitive LDIF",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "LDIFParserConfig",
          "package": "ldif",
          "partial": "LDIFParser Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:LDIFParserConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for parser (Any LDIF Type, Case Sensitive)\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "defaulLDIFConf",
          "package": "ldif",
          "signature": "LDIFParserConfig",
          "source": "src/Text-LDIF-Parser.html#defaulLDIFConf",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for parser Any LDIF Type Case Sensitive",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "defaulLDIFConf",
          "package": "ldif",
          "partial": "LDIFConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:defaulLDIFConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Parser",
          "name": "lpCaseSensitive",
          "package": "ldif",
          "signature": "Bool",
          "source": "src/Text-LDIF-Parser.html#LDIFParserConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "lpCaseSensitive",
          "package": "ldif",
          "partial": "Case Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:lpCaseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of LDIF expected\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "lpExpectedType",
          "package": "ldif",
          "signature": "Maybe LDIFType",
          "source": "src/Text-LDIF-Parser.html#LDIFParserConfig",
          "type": "function"
        },
        "index": {
          "description": "Type of LDIF expected",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "lpExpectedType",
          "package": "ldif",
          "partial": "Expected Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:lpExpectedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse DN\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "parseDNStr",
          "package": "ldif",
          "signature": "LDIFParserConfig -\u003e ByteString -\u003e Either ParseError DN",
          "source": "src/Text-LDIF-Parser.html#parseDNStr",
          "type": "function"
        },
        "index": {
          "description": "Parse DN",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "parseDNStr",
          "normalized": "LDIFParserConfig-\u003eByteString-\u003eEither ParseError DN",
          "package": "ldif",
          "partial": "DNStr",
          "signature": "LDIFParserConfig-\u003eByteString-\u003eEither ParseError DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:parseDNStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse LDIF file\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "parseLDIFFile",
          "package": "ldif",
          "signature": "LDIFParserConfig -\u003e FilePath -\u003e IO (Either ParseError LDIF)",
          "source": "src/Text-LDIF-Parser.html#parseLDIFFile",
          "type": "function"
        },
        "index": {
          "description": "Parse LDIF file",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "parseLDIFFile",
          "normalized": "LDIFParserConfig-\u003eFilePath-\u003eIO(Either ParseError LDIF)",
          "package": "ldif",
          "partial": "LDIFFile",
          "signature": "LDIFParserConfig-\u003eFilePath-\u003eIO(Either ParseError LDIF)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:parseLDIFFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse LDIF content\n\u003c/p\u003e",
          "module": "Text.LDIF.Parser",
          "name": "parseLDIFStr",
          "package": "ldif",
          "signature": "LDIFParserConfig -\u003e FilePath -\u003e ByteString -\u003e Either ParseError LDIF",
          "source": "src/Text-LDIF-Parser.html#parseLDIFStr",
          "type": "function"
        },
        "index": {
          "description": "Parse LDIF content",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "parseLDIFStr",
          "normalized": "LDIFParserConfig-\u003eFilePath-\u003eByteString-\u003eEither ParseError LDIF",
          "package": "ldif",
          "partial": "LDIFStr",
          "signature": "LDIFParserConfig-\u003eFilePath-\u003eByteString-\u003eEither ParseError LDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:parseLDIFStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreprocessing of LDIF file, concat wrapped lines and remove comment lines\n\u003c/p\u003e",
          "module": "[\"Text.LDIF.Parser\",\"Text.LDIF.Preproc\"]",
          "name": "preproc",
          "package": "ldif",
          "signature": "ByteString -\u003e (ByteString, PosTable)",
          "source": "src/Text-LDIF-Preproc.html#preproc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:preproc\",\"http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Preproc.html#v:preproc\"]"
        },
        "index": {
          "description": "Preprocessing of LDIF file concat wrapped lines and remove comment lines",
          "hierarchy": "Text LDIF Parser",
          "module": "Text.LDIF.Parser",
          "name": "preproc",
          "normalized": "ByteString-\u003e(ByteString,PosTable)",
          "package": "ldif",
          "signature": "ByteString-\u003e(ByteString,PosTable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Parser.html#v:preproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Preproc",
          "name": "Preproc",
          "package": "ldif",
          "source": "src/Text-LDIF-Preproc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF Preproc",
          "module": "Text.LDIF.Preproc",
          "name": "Preproc",
          "package": "ldif",
          "partial": "Preproc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Preproc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque data necessary for relation between text after preprocessing and original\n\u003c/p\u003e",
          "module": "Text.LDIF.Preproc",
          "name": "PosTable",
          "package": "ldif",
          "source": "src/Text-LDIF-Preproc.html#PosTable",
          "type": "type"
        },
        "index": {
          "description": "Opaque data necessary for relation between text after preprocessing and original",
          "hierarchy": "Text LDIF Preproc",
          "module": "Text.LDIF.Preproc",
          "name": "PosTable",
          "package": "ldif",
          "partial": "Pos Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Preproc.html#t:PosTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert error position to original text before preprocessing\n\u003c/p\u003e",
          "module": "Text.LDIF.Preproc",
          "name": "transposePos",
          "package": "ldif",
          "signature": "PosTable -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-LDIF-Preproc.html#transposePos",
          "type": "function"
        },
        "index": {
          "description": "Convert error position to original text before preprocessing",
          "hierarchy": "Text LDIF Preproc",
          "module": "Text.LDIF.Preproc",
          "name": "transposePos",
          "normalized": "PosTable-\u003eParseError-\u003eParseError",
          "package": "ldif",
          "partial": "Pos",
          "signature": "PosTable-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Preproc.html#v:transposePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLDIF serializers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LDIF.Printer",
          "name": "Printer",
          "package": "ldif",
          "source": "src/Text-LDIF-Printer.html",
          "type": "module"
        },
        "index": {
          "description": "LDIF serializers",
          "hierarchy": "Text LDIF Printer",
          "module": "Text.LDIF.Printer",
          "name": "Printer",
          "package": "ldif",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize DN to LDIF Format\n\u003c/p\u003e",
          "module": "Text.LDIF.Printer",
          "name": "dn2str",
          "package": "ldif",
          "signature": "DN -\u003e ByteString",
          "source": "src/Text-LDIF-Printer.html#dn2str",
          "type": "function"
        },
        "index": {
          "description": "Serialize DN to LDIF Format",
          "hierarchy": "Text LDIF Printer",
          "module": "Text.LDIF.Printer",
          "name": "dn2str",
          "normalized": "DN-\u003eByteString",
          "package": "ldif",
          "signature": "DN-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Printer.html#v:dn2str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize LDIF in LDIF Format\n\u003c/p\u003e",
          "module": "Text.LDIF.Printer",
          "name": "ldif2str",
          "package": "ldif",
          "signature": "LDIF -\u003e ByteString",
          "source": "src/Text-LDIF-Printer.html#ldif2str",
          "type": "function"
        },
        "index": {
          "description": "Serialize LDIF in LDIF Format",
          "hierarchy": "Text LDIF Printer",
          "module": "Text.LDIF.Printer",
          "name": "ldif2str",
          "normalized": "LDIF-\u003eByteString",
          "package": "ldif",
          "signature": "LDIF-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Printer.html#v:ldif2str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize Content Record in LDIF Format\n\u003c/p\u003e",
          "module": "Text.LDIF.Printer",
          "name": "record2str",
          "package": "ldif",
          "signature": "LDIFRecord -\u003e ByteString",
          "source": "src/Text-LDIF-Printer.html#record2str",
          "type": "function"
        },
        "index": {
          "description": "Serialize Content Record in LDIF Format",
          "hierarchy": "Text LDIF Printer",
          "module": "Text.LDIF.Printer",
          "name": "record2str",
          "normalized": "LDIFRecord-\u003eByteString",
          "package": "ldif",
          "signature": "LDIFRecord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Printer.html#v:record2str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize version to LDIF Format Lines\n\u003c/p\u003e",
          "module": "Text.LDIF.Printer",
          "name": "ver2str",
          "package": "ldif",
          "signature": "Maybe ByteString -\u003e [ByteString]",
          "source": "src/Text-LDIF-Printer.html#ver2str",
          "type": "function"
        },
        "index": {
          "description": "Serialize version to LDIF Format Lines",
          "hierarchy": "Text LDIF Printer",
          "module": "Text.LDIF.Printer",
          "name": "ver2str",
          "normalized": "Maybe ByteString-\u003e[ByteString]",
          "package": "ldif",
          "signature": "Maybe ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Printer.html#v:ver2str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLDIF representation in Data.Tree structure\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LDIF.Tree",
          "name": "Tree",
          "package": "ldif",
          "source": "src/Text-LDIF-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "LDIF representation in Data.Tree structure",
          "hierarchy": "Text LDIF Tree",
          "module": "Text.LDIF.Tree",
          "name": "Tree",
          "package": "ldif",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten Tree of Records to LDIF\n\u003c/p\u003e",
          "module": "Text.LDIF.Tree",
          "name": "fromTree",
          "package": "ldif",
          "signature": "Tree LDIFRecord -\u003e LDIF",
          "source": "src/Text-LDIF-Tree.html#fromTree",
          "type": "function"
        },
        "index": {
          "description": "Flatten Tree of Records to LDIF",
          "hierarchy": "Text LDIF Tree",
          "module": "Text.LDIF.Tree",
          "name": "fromTree",
          "normalized": "Tree LDIFRecord-\u003eLDIF",
          "package": "ldif",
          "partial": "Tree",
          "signature": "Tree LDIFRecord-\u003eLDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Tree.html#v:fromTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort recursively children Records by DNs\n\u003c/p\u003e",
          "module": "Text.LDIF.Tree",
          "name": "sortTreeByName",
          "package": "ldif",
          "signature": "Tree LDIFRecord -\u003e Tree LDIFRecord",
          "source": "src/Text-LDIF-Tree.html#sortTreeByName",
          "type": "function"
        },
        "index": {
          "description": "Sort recursively children Records by DNs",
          "hierarchy": "Text LDIF Tree",
          "module": "Text.LDIF.Tree",
          "name": "sortTreeByName",
          "normalized": "Tree LDIFRecord-\u003eTree LDIFRecord",
          "package": "ldif",
          "partial": "Tree By Name",
          "signature": "Tree LDIFRecord-\u003eTree LDIFRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Tree.html#v:sortTreeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert LDIF to Tree of Records using their DNs. Can insert dummy parents.\n\u003c/p\u003e",
          "module": "Text.LDIF.Tree",
          "name": "toTree",
          "package": "ldif",
          "signature": "LDIF -\u003e Bool -\u003e Tree LDIFRecord",
          "source": "src/Text-LDIF-Tree.html#toTree",
          "type": "function"
        },
        "index": {
          "description": "Convert LDIF to Tree of Records using their DNs Can insert dummy parents",
          "hierarchy": "Text LDIF Tree",
          "module": "Text.LDIF.Tree",
          "name": "toTree",
          "normalized": "LDIF-\u003eBool-\u003eTree LDIFRecord",
          "package": "ldif",
          "partial": "Tree",
          "signature": "LDIF-\u003eBool-\u003eTree LDIFRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Tree.html#v:toTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLDIF related types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LDIF.Types",
          "name": "Types",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html",
          "type": "module"
        },
        "index": {
          "description": "LDIF related types",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Types",
          "package": "ldif",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePair of Atribute and Value\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "AttrValue",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#AttrValue",
          "type": "type"
        },
        "index": {
          "description": "Pair of Atribute and Value",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "AttrValue",
          "package": "ldif",
          "partial": "Attr Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:AttrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute name is case-insensitive string\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "Attribute",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#Attribute",
          "type": "data"
        },
        "index": {
          "description": "Attribute name is case-insensitive string",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Attribute",
          "package": "ldif",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents one LDAP operation within changes LDIF\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "Change",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "data"
        },
        "index": {
          "description": "Represents one LDAP operation within changes LDIF",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Change",
          "package": "ldif",
          "partial": "Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents Distinguished Name (DN)\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "DN",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#DN",
          "type": "data"
        },
        "index": {
          "description": "Represents Distinguished Name DN",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "DN",
          "package": "ldif",
          "partial": "DN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:DN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents LDIF structure, it can be either simply LDIF data dump or\n changes LDIF with LDAP operations \n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "LDIF",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#LDIF",
          "type": "data"
        },
        "index": {
          "description": "Represents LDIF structure it can be either simply LDIF data dump or changes LDIF with LDAP operations",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIF",
          "package": "ldif",
          "partial": "LDIF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:LDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "LDIFRecord",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#LDIFRecord",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIFRecord",
          "package": "ldif",
          "partial": "LDIFRecord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:LDIFRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration LDIF Types\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "LDIFType",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#LDIFType",
          "type": "data"
        },
        "index": {
          "description": "Enumeration LDIF Types",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIFType",
          "package": "ldif",
          "partial": "LDIFType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:LDIFType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents ChangeModify operations upon one entry within given DN\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "Modify",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#Modify",
          "type": "data"
        },
        "index": {
          "description": "Represents ChangeModify operations upon one entry within given DN",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Modify",
          "package": "ldif",
          "partial": "Modify",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:Modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute value is either case sensitive or insensitive string\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "Value",
          "package": "ldif",
          "source": "src/Text-LDIF-Types.html#Value",
          "type": "data"
        },
        "index": {
          "description": "Attribute value is either case sensitive or insensitive string",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Value",
          "package": "ldif",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "Attribute",
          "package": "ldif",
          "signature": "Attribute",
          "source": "src/Text-LDIF-Types.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Attribute",
          "package": "ldif",
          "partial": "Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ChangeAdd",
          "package": "ldif",
          "signature": "ChangeAdd",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ChangeAdd",
          "package": "ldif",
          "partial": "Change Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ChangeAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ChangeDelete",
          "package": "ldif",
          "signature": "ChangeDelete",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ChangeDelete",
          "package": "ldif",
          "partial": "Change Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ChangeDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ChangeModDN",
          "package": "ldif",
          "signature": "ChangeModDN",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ChangeModDN",
          "package": "ldif",
          "partial": "Change Mod DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ChangeModDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ChangeModify",
          "package": "ldif",
          "signature": "ChangeModify",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ChangeModify",
          "package": "ldif",
          "partial": "Change Modify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ChangeModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents one change record within LDIF file with DN and content\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "ChangeRecord",
          "package": "ldif",
          "signature": "ChangeRecord",
          "source": "src/Text-LDIF-Types.html#LDIFRecord",
          "type": "function"
        },
        "index": {
          "description": "Represents one change record within LDIF file with DN and content",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ChangeRecord",
          "package": "ldif",
          "partial": "Change Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ChangeRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents one data record within LDIF file with DN and content\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "ContentRecord",
          "package": "ldif",
          "signature": "ContentRecord",
          "source": "src/Text-LDIF-Types.html#LDIFRecord",
          "type": "function"
        },
        "index": {
          "description": "Represents one data record within LDIF file with DN and content",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ContentRecord",
          "package": "ldif",
          "partial": "Content Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ContentRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "DN",
          "package": "ldif",
          "signature": "DN",
          "source": "src/Text-LDIF-Types.html#DN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "DN",
          "package": "ldif",
          "partial": "DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:DN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "LDIF",
          "package": "ldif",
          "signature": "LDIF",
          "source": "src/Text-LDIF-Types.html#LDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIF",
          "package": "ldif",
          "partial": "LDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:LDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDIF with Changes Records\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "LDIFChangesType",
          "package": "ldif",
          "signature": "LDIFChangesType",
          "source": "src/Text-LDIF-Types.html#LDIFType",
          "type": "function"
        },
        "index": {
          "description": "LDIF with Changes Records",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIFChangesType",
          "package": "ldif",
          "partial": "LDIFChanges Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:LDIFChangesType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDIF with Content Records\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "LDIFContentType",
          "package": "ldif",
          "signature": "LDIFContentType",
          "source": "src/Text-LDIF-Types.html#LDIFType",
          "type": "function"
        },
        "index": {
          "description": "LDIF with Content Records",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIFContentType",
          "package": "ldif",
          "partial": "LDIFContent Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:LDIFContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDIF with both Content and Changes Records\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "LDIFMixedType",
          "package": "ldif",
          "signature": "LDIFMixedType",
          "source": "src/Text-LDIF-Types.html#LDIFType",
          "type": "function"
        },
        "index": {
          "description": "LDIF with both Content and Changes Records",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "LDIFMixedType",
          "package": "ldif",
          "partial": "LDIFMixed Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:LDIFMixedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ModAdd",
          "package": "ldif",
          "signature": "ModAdd",
          "source": "src/Text-LDIF-Types.html#Modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ModAdd",
          "package": "ldif",
          "partial": "Mod Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ModAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ModDelete",
          "package": "ldif",
          "signature": "ModDelete",
          "source": "src/Text-LDIF-Types.html#Modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ModDelete",
          "package": "ldif",
          "partial": "Mod Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ModDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ModReplace",
          "package": "ldif",
          "signature": "ModReplace",
          "source": "src/Text-LDIF-Types.html#Modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ModReplace",
          "package": "ldif",
          "partial": "Mod Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ModReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "Value",
          "package": "ldif",
          "signature": "Value",
          "source": "src/Text-LDIF-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "Value",
          "package": "ldif",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "ValueI",
          "package": "ldif",
          "signature": "ValueI",
          "source": "src/Text-LDIF-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "ValueI",
          "package": "ldif",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:ValueI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "aName",
          "package": "ldif",
          "signature": "ByteString",
          "source": "src/Text-LDIF-Types.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "aName",
          "package": "ldif",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:aName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "aVal",
          "package": "ldif",
          "signature": "ByteString",
          "source": "src/Text-LDIF-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "aVal",
          "package": "ldif",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:aVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "chAttrVals",
          "package": "ldif",
          "signature": "[AttrValue]",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "chAttrVals",
          "normalized": "[AttrValue]",
          "package": "ldif",
          "partial": "Attr Vals",
          "signature": "[AttrValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:chAttrVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "chMods",
          "package": "ldif",
          "signature": "[Modify]",
          "source": "src/Text-LDIF-Types.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "chMods",
          "normalized": "[Modify]",
          "package": "ldif",
          "partial": "Mods",
          "signature": "[Modify]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:chMods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "chOp",
          "package": "ldif",
          "signature": "Change",
          "source": "src/Text-LDIF-Types.html#LDIFRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "chOp",
          "package": "ldif",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:chOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "coAttrVals",
          "package": "ldif",
          "signature": "[AttrValue]",
          "source": "src/Text-LDIF-Types.html#LDIFRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "coAttrVals",
          "normalized": "[AttrValue]",
          "package": "ldif",
          "partial": "Attr Vals",
          "signature": "[AttrValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:coAttrVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "dnAttrVals",
          "package": "ldif",
          "signature": "[AttrValue]",
          "source": "src/Text-LDIF-Types.html#DN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "dnAttrVals",
          "normalized": "[AttrValue]",
          "package": "ldif",
          "partial": "Attr Vals",
          "signature": "[AttrValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:dnAttrVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDettect from LDIF content the Type (Content, Changes, Mixed)\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "getLDIFType",
          "package": "ldif",
          "signature": "LDIF -\u003e LDIFType",
          "source": "src/Text-LDIF-Types.html#getLDIFType",
          "type": "function"
        },
        "index": {
          "description": "Dettect from LDIF content the Type Content Changes Mixed",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "getLDIFType",
          "normalized": "LDIF-\u003eLDIFType",
          "package": "ldif",
          "partial": "LDIFType",
          "signature": "LDIF-\u003eLDIFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:getLDIFType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if LDIFRecord is Change Record\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "isChangeRecord",
          "package": "ldif",
          "signature": "LDIFRecord -\u003e Bool",
          "source": "src/Text-LDIF-Types.html#isChangeRecord",
          "type": "function"
        },
        "index": {
          "description": "Check if LDIFRecord is Change Record",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "isChangeRecord",
          "normalized": "LDIFRecord-\u003eBool",
          "package": "ldif",
          "partial": "Change Record",
          "signature": "LDIFRecord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:isChangeRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if LDIFRecord is Content Record\n\u003c/p\u003e",
          "module": "Text.LDIF.Types",
          "name": "isContentRecord",
          "package": "ldif",
          "signature": "LDIFRecord -\u003e Bool",
          "source": "src/Text-LDIF-Types.html#isContentRecord",
          "type": "function"
        },
        "index": {
          "description": "Check if LDIFRecord is Content Record",
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "isContentRecord",
          "normalized": "LDIFRecord-\u003eBool",
          "package": "ldif",
          "partial": "Content Record",
          "signature": "LDIFRecord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:isContentRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "lcEntries",
          "package": "ldif",
          "signature": "[LDIFRecord]",
          "source": "src/Text-LDIF-Types.html#LDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "lcEntries",
          "normalized": "[LDIFRecord]",
          "package": "ldif",
          "partial": "Entries",
          "signature": "[LDIFRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:lcEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "lcVersion",
          "package": "ldif",
          "signature": "Maybe ByteString",
          "source": "src/Text-LDIF-Types.html#LDIF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "lcVersion",
          "package": "ldif",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:lcVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "modAttr",
          "package": "ldif",
          "signature": "Attribute",
          "source": "src/Text-LDIF-Types.html#Modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "modAttr",
          "package": "ldif",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:modAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "modAttrVals",
          "package": "ldif",
          "signature": "[Value]",
          "source": "src/Text-LDIF-Types.html#Modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "modAttrVals",
          "normalized": "[Value]",
          "package": "ldif",
          "partial": "Attr Vals",
          "signature": "[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:modAttrVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Types",
          "name": "reDN",
          "package": "ldif",
          "signature": "DN",
          "source": "src/Text-LDIF-Types.html#LDIFRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Types",
          "module": "Text.LDIF.Types",
          "name": "reDN",
          "package": "ldif",
          "partial": "DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Types.html#v:reDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Undo",
          "name": "Undo",
          "package": "ldif",
          "source": "src/Text-LDIF-Undo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF Undo",
          "module": "Text.LDIF.Undo",
          "name": "Undo",
          "package": "ldif",
          "partial": "Undo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Undo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate undo LDIF\n\u003c/p\u003e",
          "module": "Text.LDIF.Undo",
          "name": "undoLDIF",
          "package": "ldif",
          "signature": "LDIF -\u003e (LDIF, [[Warning]])",
          "source": "src/Text-LDIF-Undo.html#undoLDIF",
          "type": "function"
        },
        "index": {
          "description": "Calculate undo LDIF",
          "hierarchy": "Text LDIF Undo",
          "module": "Text.LDIF.Undo",
          "name": "undoLDIF",
          "normalized": "LDIF-\u003e(LDIF,[[Warning]])",
          "package": "ldif",
          "partial": "LDIF",
          "signature": "LDIF-\u003e(LDIF,[[Warning]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Undo.html#v:undoLDIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLDIF related operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LDIF.Utils",
          "name": "Utils",
          "package": "ldif",
          "source": "src/Text-LDIF-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "LDIF related operations",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "Utils",
          "package": "ldif",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "LDIFCache",
          "package": "ldif",
          "source": "src/Text-LDIF-Utils.html#LDIFCache",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "LDIFCache",
          "package": "ldif",
          "partial": "LDIFCache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#t:LDIFCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "createLookupTable",
          "package": "ldif",
          "signature": "LDIF -\u003e LDIFCache",
          "source": "src/Text-LDIF-Utils.html#createLookupTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "createLookupTable",
          "normalized": "LDIF-\u003eLDIFCache",
          "package": "ldif",
          "partial": "Lookup Table",
          "signature": "LDIF-\u003eLDIFCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:createLookupTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter Attribute Value list according Attribute name\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "filterAttr",
          "package": "ldif",
          "signature": "ByteString -\u003e [AttrValue] -\u003e [AttrValue]",
          "source": "src/Text-LDIF-Utils.html#filterAttr",
          "type": "function"
        },
        "index": {
          "description": "Filter Attribute Value list according Attribute name",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "filterAttr",
          "normalized": "ByteString-\u003e[AttrValue]-\u003e[AttrValue]",
          "package": "ldif",
          "partial": "Attr",
          "signature": "ByteString-\u003e[AttrValue]-\u003e[AttrValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:filterAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind first Content with given DN\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "findRecordByDN",
          "package": "ldif",
          "signature": "LDIFCache -\u003e DN -\u003e Maybe LDIFRecord",
          "source": "src/Text-LDIF-Utils.html#findRecordByDN",
          "type": "function"
        },
        "index": {
          "description": "Find first Content with given DN",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "findRecordByDN",
          "normalized": "LDIFCache-\u003eDN-\u003eMaybe LDIFRecord",
          "package": "ldif",
          "partial": "Record By DN",
          "signature": "LDIFCache-\u003eDN-\u003eMaybe LDIFRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:findRecordByDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all Contents with given DN\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "findRecordsByDN",
          "package": "ldif",
          "signature": "LDIF -\u003e DN -\u003e [LDIFRecord]",
          "source": "src/Text-LDIF-Utils.html#findRecordsByDN",
          "type": "function"
        },
        "index": {
          "description": "Find all Contents with given DN",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "findRecordsByDN",
          "normalized": "LDIF-\u003eDN-\u003e[LDIFRecord]",
          "package": "ldif",
          "partial": "Records By DN",
          "signature": "LDIF-\u003eDN-\u003e[LDIFRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:findRecordsByDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "getDNValue",
          "package": "ldif",
          "signature": "DN -\u003e Int -\u003e AttrValue",
          "source": "src/Text-LDIF-Utils.html#getDNValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "getDNValue",
          "normalized": "DN-\u003eInt-\u003eAttrValue",
          "package": "ldif",
          "partial": "DNValue",
          "signature": "DN-\u003eInt-\u003eAttrValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:getDNValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the dn1 is prefix of dn2\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "isDNPrefixOf",
          "package": "ldif",
          "signature": "DN -\u003e DN -\u003e Bool",
          "source": "src/Text-LDIF-Utils.html#isDNPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "Check if the dn1 is prefix of dn2",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "isDNPrefixOf",
          "normalized": "DN-\u003eDN-\u003eBool",
          "package": "ldif",
          "partial": "DNPrefix Of",
          "signature": "DN-\u003eDN-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:isDNPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange record without any impact\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "isDummyRecord",
          "package": "ldif",
          "signature": "LDIFRecord -\u003e Bool",
          "source": "src/Text-LDIF-Utils.html#isDummyRecord",
          "type": "function"
        },
        "index": {
          "description": "Change record without any impact",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "isDummyRecord",
          "normalized": "LDIFRecord-\u003eBool",
          "package": "ldif",
          "partial": "Dummy Record",
          "signature": "LDIFRecord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:isDummyRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "isParentRecordOf",
          "package": "ldif",
          "signature": "LDIFRecord -\u003e LDIFRecord -\u003e Bool",
          "source": "src/Text-LDIF-Utils.html#isParentRecordOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "isParentRecordOf",
          "normalized": "LDIFRecord-\u003eLDIFRecord-\u003eBool",
          "package": "ldif",
          "partial": "Parent Record Of",
          "signature": "LDIFRecord-\u003eLDIFRecord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:isParentRecordOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake LDIF Values case-insensitive\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "ldif2ldifI",
          "package": "ldif",
          "signature": "LDIF -\u003e LDIF",
          "source": "src/Text-LDIF-Utils.html#ldif2ldifI",
          "type": "function"
        },
        "index": {
          "description": "Make LDIF Values case-insensitive",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "ldif2ldifI",
          "normalized": "LDIF-\u003eLDIF",
          "package": "ldif",
          "signature": "LDIF-\u003eLDIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:ldif2ldifI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "leafOfDN",
          "package": "ldif",
          "signature": "DN -\u003e AttrValue",
          "source": "src/Text-LDIF-Utils.html#leafOfDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "leafOfDN",
          "normalized": "DN-\u003eAttrValue",
          "package": "ldif",
          "partial": "Of DN",
          "signature": "DN-\u003eAttrValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:leafOfDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "lengthOfDN",
          "package": "ldif",
          "signature": "DN -\u003e Int",
          "source": "src/Text-LDIF-Utils.html#lengthOfDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "lengthOfDN",
          "normalized": "DN-\u003eInt",
          "package": "ldif",
          "partial": "Of DN",
          "signature": "DN-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:lengthOfDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind fist Attribute within attributes pairs list\n\u003c/p\u003e",
          "module": "Text.LDIF.Utils",
          "name": "lookupAttr",
          "package": "ldif",
          "signature": "ByteString -\u003e [AttrValue] -\u003e Maybe Value",
          "source": "src/Text-LDIF-Utils.html#lookupAttr",
          "type": "function"
        },
        "index": {
          "description": "Find fist Attribute within attributes pairs list",
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "lookupAttr",
          "normalized": "ByteString-\u003e[AttrValue]-\u003eMaybe Value",
          "package": "ldif",
          "partial": "Attr",
          "signature": "ByteString-\u003e[AttrValue]-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:lookupAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "rootOfDN",
          "package": "ldif",
          "signature": "DN -\u003e AttrValue",
          "source": "src/Text-LDIF-Utils.html#rootOfDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "rootOfDN",
          "normalized": "DN-\u003eAttrValue",
          "package": "ldif",
          "partial": "Of DN",
          "signature": "DN-\u003eAttrValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:rootOfDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF.Utils",
          "name": "takeDNPrefix",
          "package": "ldif",
          "signature": "DN -\u003e Int -\u003e DN",
          "source": "src/Text-LDIF-Utils.html#takeDNPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LDIF Utils",
          "module": "Text.LDIF.Utils",
          "name": "takeDNPrefix",
          "normalized": "DN-\u003eInt-\u003eDN",
          "package": "ldif",
          "partial": "DNPrefix",
          "signature": "DN-\u003eInt-\u003eDN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF-Utils.html#v:takeDNPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LDIF",
          "name": "LDIF",
          "package": "ldif",
          "source": "src/Text-LDIF.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text LDIF",
          "module": "Text.LDIF",
          "name": "LDIF",
          "package": "ldif",
          "partial": "LDIF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ldif/docs/Text-LDIF.html#"
      }
    }
  ]
]