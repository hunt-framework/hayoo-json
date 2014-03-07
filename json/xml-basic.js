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
        "word": "xml-basic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "Character",
          "package": "xml-basic",
          "source": "src/Text-HTML-Basic-Character.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "Character",
          "package": "xml-basic",
          "partial": "Character",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Character.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "T",
          "package": "xml-basic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "CharRef",
          "package": "xml-basic",
          "signature": "CharRef Int",
          "source": "src/Text-XML-Basic-Character.html#T",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:CharRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:CharRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "CharRef",
          "package": "xml-basic",
          "partial": "Char Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:CharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "EntityRef",
          "package": "xml-basic",
          "signature": "EntityRef String",
          "source": "src/Text-XML-Basic-Character.html#T",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:EntityRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:EntityRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "EntityRef",
          "package": "xml-basic",
          "partial": "Entity Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:EntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "Unicode",
          "package": "xml-basic",
          "signature": "Unicode Char",
          "source": "src/Text-XML-Basic-Character.html#T",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:Unicode\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:Unicode\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "Unicode",
          "package": "xml-basic",
          "partial": "Unicode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:Unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert unicode character to XML Char.\nIf there is a named reference, use this.\nIf it is ASCII, represent it as Char.\nOtherwise use a numeric reference.\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.Character",
          "name": "asciiFromUnicode",
          "package": "xml-basic",
          "signature": "Char -\u003e T",
          "source": "src/Text-HTML-Basic-Character.html#asciiFromUnicode",
          "type": "function"
        },
        "index": {
          "description": "Convert unicode character to XML Char If there is named reference use this If it is ASCII represent it as Char Otherwise use numeric reference",
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "asciiFromUnicode",
          "normalized": "Char-\u003eT",
          "package": "xml-basic",
          "partial": "From Unicode",
          "signature": "Char-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:asciiFromUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "asciiFromUnicodeInternetExploder",
          "package": "xml-basic",
          "signature": "Char -\u003e T",
          "source": "src/Text-HTML-Basic-Character.html#asciiFromUnicodeInternetExploder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "asciiFromUnicodeInternetExploder",
          "normalized": "Char-\u003eT",
          "package": "xml-basic",
          "partial": "From Unicode Internet Exploder",
          "signature": "Char-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:asciiFromUnicodeInternetExploder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "fromCharRef",
          "package": "xml-basic",
          "signature": "Int -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#fromCharRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:fromCharRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:fromCharRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "fromCharRef",
          "normalized": "Int-\u003eT",
          "package": "xml-basic",
          "partial": "Char Ref",
          "signature": "Int-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:fromCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "fromEntityRef",
          "package": "xml-basic",
          "signature": "String -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#fromEntityRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:fromEntityRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:fromEntityRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "fromEntityRef",
          "normalized": "String-\u003eT",
          "package": "xml-basic",
          "partial": "Entity Ref",
          "signature": "String-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:fromEntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "fromUnicode",
          "package": "xml-basic",
          "signature": "Char -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#fromUnicode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:fromUnicode\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:fromUnicode\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "fromUnicode",
          "normalized": "Char-\u003eT",
          "package": "xml-basic",
          "partial": "Unicode",
          "signature": "Char-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:fromUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "isCharRef",
          "package": "xml-basic",
          "signature": "T -\u003e Bool",
          "source": "src/Text-XML-Basic-Character.html#isCharRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isCharRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:isCharRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "isCharRef",
          "normalized": "T-\u003eBool",
          "package": "xml-basic",
          "partial": "Char Ref",
          "signature": "T-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "isEntityRef",
          "package": "xml-basic",
          "signature": "T -\u003e Bool",
          "source": "src/Text-XML-Basic-Character.html#isEntityRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isEntityRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:isEntityRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "isEntityRef",
          "normalized": "T-\u003eBool",
          "package": "xml-basic",
          "partial": "Entity Ref",
          "signature": "T-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isEntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "isLower",
          "package": "xml-basic",
          "signature": "T -\u003e Bool",
          "source": "src/Text-HTML-Basic-Character.html#isLower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "isLower",
          "normalized": "T-\u003eBool",
          "package": "xml-basic",
          "partial": "Lower",
          "signature": "T-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "isRef",
          "package": "xml-basic",
          "signature": "T -\u003e Bool",
          "source": "src/Text-XML-Basic-Character.html#isRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:isRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "isRef",
          "normalized": "T-\u003eBool",
          "package": "xml-basic",
          "partial": "Ref",
          "signature": "T-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "isUnicode",
          "package": "xml-basic",
          "signature": "T -\u003e Bool",
          "source": "src/Text-XML-Basic-Character.html#isUnicode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isUnicode\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:isUnicode\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "isUnicode",
          "normalized": "T-\u003eBool",
          "package": "xml-basic",
          "partial": "Unicode",
          "signature": "T-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "isUpper",
          "package": "xml-basic",
          "signature": "T -\u003e Bool",
          "source": "src/Text-HTML-Basic-Character.html#isUpper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "isUpper",
          "normalized": "T-\u003eBool",
          "package": "xml-basic",
          "partial": "Upper",
          "signature": "T-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:isUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "maybeCharRef",
          "package": "xml-basic",
          "signature": "T -\u003e Maybe Int",
          "source": "src/Text-XML-Basic-Character.html#maybeCharRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:maybeCharRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:maybeCharRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "maybeCharRef",
          "normalized": "T-\u003eMaybe Int",
          "package": "xml-basic",
          "partial": "Char Ref",
          "signature": "T-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:maybeCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "maybeEntityRef",
          "package": "xml-basic",
          "signature": "T -\u003e Maybe String",
          "source": "src/Text-XML-Basic-Character.html#maybeEntityRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:maybeEntityRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:maybeEntityRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "maybeEntityRef",
          "normalized": "T-\u003eMaybe String",
          "package": "xml-basic",
          "partial": "Entity Ref",
          "signature": "T-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:maybeEntityRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "maybeUnicode",
          "package": "xml-basic",
          "signature": "T -\u003e Maybe Char",
          "source": "src/Text-XML-Basic-Character.html#maybeUnicode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:maybeUnicode\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:maybeUnicode\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "maybeUnicode",
          "normalized": "T-\u003eMaybe Char",
          "package": "xml-basic",
          "partial": "Unicode",
          "signature": "T-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:maybeUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate XML character from Unicode character\nwith minimal use of references.\nThe only references used are the XML entity references\n\u003ccode\u003e&apos;\u003c/code\u003e, \u003ccode\u003e&quot;\u003c/code\u003e, \u003ccode\u003e&amp;\u003c/code\u003e, \u003ccode\u003e&lt;\u003c/code\u003e, \u003ccode\u003e&gt;\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "minimalRefFromUnicode",
          "package": "xml-basic",
          "signature": "Char -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#minimalRefFromUnicode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:minimalRefFromUnicode\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:minimalRefFromUnicode\"]"
        },
        "index": {
          "description": "Generate XML character from Unicode character with minimal use of references The only references used are the XML entity references apos quot amp lt gt",
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "minimalRefFromUnicode",
          "normalized": "Char-\u003eT",
          "package": "xml-basic",
          "partial": "Ref From Unicode",
          "signature": "Char-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:minimalRefFromUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "reduceRef",
          "package": "xml-basic",
          "signature": "T -\u003e T",
          "source": "src/Text-HTML-Basic-Character.html#reduceRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "reduceRef",
          "normalized": "T-\u003eT",
          "package": "xml-basic",
          "partial": "Ref",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:reduceRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "refC",
          "package": "xml-basic",
          "signature": "Int -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#refC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:refC\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:refC\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "refC",
          "normalized": "Int-\u003eT",
          "package": "xml-basic",
          "signature": "Int-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:refC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "refE",
          "package": "xml-basic",
          "signature": "String -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#refE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:refE\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:refE\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "refE",
          "normalized": "String-\u003eT",
          "package": "xml-basic",
          "signature": "String-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:refE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "switchUnicodeRuns",
          "package": "xml-basic",
          "signature": "(String -\u003e a) -\u003e (Int -\u003e a) -\u003e (String -\u003e a) -\u003e [T] -\u003e [a]",
          "source": "src/Text-XML-Basic-Character.html#switchUnicodeRuns",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:switchUnicodeRuns\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:switchUnicodeRuns\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "switchUnicodeRuns",
          "normalized": "(String-\u003ea)-\u003e(Int-\u003ea)-\u003e(String-\u003ea)-\u003e[T]-\u003e[a]",
          "package": "xml-basic",
          "partial": "Unicode Runs",
          "signature": "(String-\u003ea)-\u003e(Int-\u003ea)-\u003e(String-\u003ea)-\u003e[T]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:switchUnicodeRuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "toLower",
          "package": "xml-basic",
          "signature": "T -\u003e T",
          "source": "src/Text-HTML-Basic-Character.html#toLower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "toLower",
          "normalized": "T-\u003eT",
          "package": "xml-basic",
          "partial": "Lower",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "toUnicode",
          "package": "xml-basic",
          "signature": "T -\u003e Exceptional String Char",
          "source": "src/Text-HTML-Basic-Character.html#toUnicode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "toUnicode",
          "normalized": "T-\u003eExceptional String Char",
          "package": "xml-basic",
          "partial": "Unicode",
          "signature": "T-\u003eExceptional String Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:toUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "toUnicodeOrFormat",
          "package": "xml-basic",
          "signature": "T -\u003e ShowS",
          "source": "src/Text-HTML-Basic-Character.html#toUnicodeOrFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "toUnicodeOrFormat",
          "normalized": "T-\u003eShowS",
          "package": "xml-basic",
          "partial": "Unicode Or Format",
          "signature": "T-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:toUnicodeOrFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Character",
          "name": "toUpper",
          "package": "xml-basic",
          "signature": "T -\u003e T",
          "source": "src/Text-HTML-Basic-Character.html#toUpper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "toUpper",
          "normalized": "T-\u003eT",
          "package": "xml-basic",
          "partial": "Upper",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "unicode",
          "package": "xml-basic",
          "signature": "Char -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#unicode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:unicode\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:unicode\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "unicode",
          "normalized": "Char-\u003eT",
          "package": "xml-basic",
          "signature": "Char-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Character\",\"Text.XML.Basic.Character\"]",
          "name": "validCharRef",
          "package": "xml-basic",
          "signature": "Int -\u003e Bool",
          "source": "src/Text-XML-Basic-Character.html#validCharRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:validCharRef\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:validCharRef\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Character",
          "module": "Text.HTML.Basic.Character",
          "name": "validCharRef",
          "normalized": "Int-\u003eBool",
          "package": "xml-basic",
          "partial": "Char Ref",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Character.html#v:validCharRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "Entity",
          "package": "xml-basic",
          "source": "src/Text-HTML-Basic-Entity.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "Entity",
          "package": "xml-basic",
          "partial": "Entity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "Name",
          "package": "xml-basic",
          "source": "src/Text-HTML-Basic-Entity.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table mapping HTML entity names to code points.\nAlthough entity references can in principle represent more than one character,\nthe standard entities only contain one character.\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.Entity",
          "name": "list",
          "package": "xml-basic",
          "signature": "[(Name, Char)]",
          "source": "src/Text-HTML-Basic-Entity.html#list",
          "type": "function"
        },
        "index": {
          "description": "table mapping HTML entity names to code points Although entity references can in principle represent more than one character the standard entities only contain one character",
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "list",
          "normalized": "[(Name,Char)]",
          "package": "xml-basic",
          "signature": "[(Name,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "listInternetExploder",
          "package": "xml-basic",
          "signature": "[(Name, Char)]",
          "source": "src/Text-HTML-Basic-Entity.html#listInternetExploder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "listInternetExploder",
          "normalized": "[(Name,Char)]",
          "package": "xml-basic",
          "partial": "Internet Exploder",
          "signature": "[(Name,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:listInternetExploder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "mapCharToName",
          "package": "xml-basic",
          "signature": "Map Char Name",
          "source": "src/Text-HTML-Basic-Entity.html#mapCharToName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "mapCharToName",
          "package": "xml-basic",
          "partial": "Char To Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:mapCharToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "mapCharToNameInternetExploder",
          "package": "xml-basic",
          "signature": "Map Char Name",
          "source": "src/Text-HTML-Basic-Entity.html#mapCharToNameInternetExploder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "mapCharToNameInternetExploder",
          "package": "xml-basic",
          "partial": "Char To Name Internet Exploder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:mapCharToNameInternetExploder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "mapNameToChar",
          "package": "xml-basic",
          "signature": "Map Name Char",
          "source": "src/Text-HTML-Basic-Entity.html#mapNameToChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "mapNameToChar",
          "package": "xml-basic",
          "partial": "Name To Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:mapNameToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "mapNameToLower",
          "package": "xml-basic",
          "signature": "Map String String",
          "source": "src/Text-HTML-Basic-Entity.html#mapNameToLower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "mapNameToLower",
          "package": "xml-basic",
          "partial": "Name To Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:mapNameToLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Entity",
          "name": "mapNameToUpper",
          "package": "xml-basic",
          "signature": "Map String String",
          "source": "src/Text-HTML-Basic-Entity.html#mapNameToUpper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "mapNameToUpper",
          "package": "xml-basic",
          "partial": "Name To Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:mapNameToUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a numeric entity, the leading \u003ccode\u003e'#'\u003c/code\u003e must have already been removed.\n\u003c/p\u003e\u003cpre\u003e numberToChar \"65\" == Success 'A'\n numberToChar \"x41\" == Success 'A'\n numberToChar \"x4E\" === Success 'N'\n numberToChar \"x4e\" === Success 'N'\n numberToChar \"Haskell\" == Exception \"...\"\n numberToChar \"\" == Exception \"...\"\n numberToChar \"89439085908539082\" == Exception \"...\"\n\u003c/pre\u003e\u003cp\u003eIt's safe to use that for arbitrary big number strings,\nsince we abort parsing as soon as possible.\n\u003c/p\u003e\u003cpre\u003e numberToChar (repeat '1') == Exception \"...\"\n\u003c/pre\u003e",
          "module": "[\"Text.HTML.Basic.Entity\",\"Text.XML.Basic.Entity\"]",
          "name": "numberToChar",
          "package": "xml-basic",
          "signature": "String -\u003e Exceptional String Char",
          "source": "src/Text-XML-Basic-Entity.html#numberToChar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:numberToChar\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#v:numberToChar\"]"
        },
        "index": {
          "description": "Lookup numeric entity the leading must have already been removed numberToChar Success numberToChar x41 Success numberToChar x4E Success numberToChar x4e Success numberToChar Haskell Exception numberToChar Exception numberToChar Exception It safe to use that for arbitrary big number strings since we abort parsing as soon as possible numberToChar repeat Exception",
          "hierarchy": "Text HTML Basic Entity",
          "module": "Text.HTML.Basic.Entity",
          "name": "numberToChar",
          "normalized": "String-\u003eExceptional String Char",
          "package": "xml-basic",
          "partial": "To Char",
          "signature": "String-\u003eExceptional String Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Entity.html#v:numberToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.String",
          "name": "String",
          "package": "xml-basic",
          "source": "src/Text-HTML-Basic-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Basic String",
          "module": "Text.HTML.Basic.String",
          "name": "String",
          "package": "xml-basic",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould be [Word8]\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.String",
          "name": "Encoded",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-String.html#Encoded",
          "type": "type"
        },
        "index": {
          "description": "should be Word8",
          "hierarchy": "Text HTML Basic String",
          "module": "Text.HTML.Basic.String",
          "name": "Encoded",
          "package": "xml-basic",
          "partial": "Encoded",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-String.html#t:Encoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid references are silently skipped.\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.String",
          "name": "decode",
          "package": "xml-basic",
          "signature": "(Encoded -\u003e String) -\u003e [T] -\u003e String",
          "source": "src/Text-HTML-Basic-String.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Invalid references are silently skipped",
          "hierarchy": "Text HTML Basic String",
          "module": "Text.HTML.Basic.String",
          "name": "decode",
          "normalized": "(Encoded-\u003eString)-\u003e[T]-\u003eString",
          "package": "xml-basic",
          "signature": "(Encoded-\u003eString)-\u003e[T]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-String.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe do not define a tag data type here,\nsince this is too much bound to the particular use\n(e.g. list or tree structure).\nHowever we define a tag name and several\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.Basic.Tag",
          "name": "Tag",
          "package": "xml-basic",
          "source": "src/Text-HTML-Basic-Tag.html",
          "type": "module"
        },
        "index": {
          "description": "We do not define tag data type here since this is too much bound to the particular use e.g list or tree structure However we define tag name and several",
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "Tag",
          "package": "xml-basic",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Tag",
          "name": "Name",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Tag.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "Name",
          "package": "xml-basic",
          "signature": "Name",
          "source": "src/Text-XML-Basic-Tag.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:Name\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:Name\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use cdataName instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "cdata",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Tag.html#cdata",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:cdata\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:cdata\"]"
        },
        "index": {
          "description": "Deprecated use cdataName instead",
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "cdata",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:cdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "cdataName",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Tag.html#cdataName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:cdataName\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:cdataName\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "cdataName",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:cdataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "cdataString",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Tag.html#cdataString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:cdataString\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:cdataString\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "cdataString",
          "package": "xml-basic",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:cdataString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Tag",
          "name": "closes",
          "package": "xml-basic",
          "signature": "Name name -\u003e Name name -\u003e Bool",
          "source": "src/Text-HTML-Basic-Tag.html#closes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "closes",
          "normalized": "Name a-\u003eName a-\u003eBool",
          "package": "xml-basic",
          "signature": "Name name-\u003eName name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:closes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use doctypeName instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "doctype",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Tag.html#doctype",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:doctype\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:doctype\"]"
        },
        "index": {
          "description": "Deprecated use doctypeName instead",
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "doctype",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:doctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "doctypeName",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Tag.html#doctypeName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:doctypeName\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:doctypeName\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "doctypeName",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:doctypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "doctypeString",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Tag.html#doctypeString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:doctypeString\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:doctypeString\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "doctypeString",
          "package": "xml-basic",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:doctypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a HTML tag is empty.\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.Tag",
          "name": "isEmpty",
          "package": "xml-basic",
          "signature": "Name name -\u003e Bool",
          "source": "src/Text-HTML-Basic-Tag.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Check whether HTML tag is empty",
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "isEmpty",
          "normalized": "Name a-\u003eBool",
          "package": "xml-basic",
          "partial": "Empty",
          "signature": "Name name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Tag",
          "name": "isInnerOf",
          "package": "xml-basic",
          "signature": "Name name -\u003e Name name -\u003e Bool",
          "source": "src/Text-HTML-Basic-Tag.html#isInnerOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "isInnerOf",
          "normalized": "Name a-\u003eName a-\u003eBool",
          "package": "xml-basic",
          "partial": "Inner Of",
          "signature": "Name name-\u003eName name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:isInnerOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome tags, namely those for text styles like FONT, B, I,\nare used quite sloppily.\nThat is, they are not terminated or not terminated in the right order.\nWe close them implicitly, if another tag closes\nand ignore non-matching closing tags.\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.Tag",
          "name": "isSloppy",
          "package": "xml-basic",
          "signature": "Name name -\u003e Bool",
          "source": "src/Text-HTML-Basic-Tag.html#isSloppy",
          "type": "function"
        },
        "index": {
          "description": "Some tags namely those for text styles like FONT are used quite sloppily That is they are not terminated or not terminated in the right order We close them implicitly if another tag closes and ignore non-matching closing tags",
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "isSloppy",
          "normalized": "Name a-\u003eBool",
          "package": "xml-basic",
          "partial": "Sloppy",
          "signature": "Name name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:isSloppy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple routine that does not check for valid syntax\nof the Content-Type specification.\n\u003c/p\u003e\u003cp\u003eIn future we might use a distinct \u003ccode\u003eEncoding\u003c/code\u003e type instead of plain String.\n\u003c/p\u003e",
          "module": "Text.HTML.Basic.Tag",
          "name": "maybeMetaEncoding",
          "package": "xml-basic",
          "signature": "Name name -\u003e [T name String] -\u003e Maybe String",
          "source": "src/Text-HTML-Basic-Tag.html#maybeMetaEncoding",
          "type": "function"
        },
        "index": {
          "description": "simple routine that does not check for valid syntax of the Content-Type specification In future we might use distinct Encoding type instead of plain String",
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "maybeMetaEncoding",
          "normalized": "Name a-\u003e[T a String]-\u003eMaybe String",
          "package": "xml-basic",
          "partial": "Meta Encoding",
          "signature": "Name name-\u003e[T name String]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:maybeMetaEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Basic.Tag",
          "name": "maybeMetaHTTPHeader",
          "package": "xml-basic",
          "signature": "Name name -\u003e [T name string] -\u003e Maybe (string, string)",
          "source": "src/Text-HTML-Basic-Tag.html#maybeMetaHTTPHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "maybeMetaHTTPHeader",
          "normalized": "Name a-\u003e[T a b]-\u003eMaybe(b,b)",
          "package": "xml-basic",
          "partial": "Meta HTTPHeader",
          "signature": "Name name-\u003e[T name string]-\u003eMaybe(string,string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:maybeMetaHTTPHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HTML.Basic.Tag\",\"Text.XML.Basic.Tag\"]",
          "name": "unname",
          "package": "xml-basic",
          "signature": "ident",
          "source": "src/Text-XML-Basic-Tag.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:unname\",\"http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:unname\"]"
        },
        "index": {
          "hierarchy": "Text HTML Basic Tag",
          "module": "Text.HTML.Basic.Tag",
          "name": "unname",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-HTML-Basic-Tag.html#v:unname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "Attribute",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Attribute.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "Attribute",
          "package": "xml-basic",
          "partial": "Attribute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "Name",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Attribute.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTML attribute \u003ccode\u003eid=\"name\"\u003c/code\u003e generates \u003ccode\u003e(\"id\",\"name\")\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Text.XML.Basic.Attribute",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Attribute.html#T",
          "type": "data"
        },
        "index": {
          "description": "An HTML attribute id name generates id name",
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "T",
          "package": "xml-basic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "Cons",
          "package": "xml-basic",
          "signature": "Cons",
          "source": "src/Text-XML-Basic-Attribute.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "Cons",
          "package": "xml-basic",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "Name",
          "package": "xml-basic",
          "signature": "Name",
          "source": "src/Text-XML-Basic-Attribute.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess specific attributes of an attribute list.\nThe function name is inspired by Data.Map.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Attribute",
          "name": "adjustOn",
          "package": "xml-basic",
          "signature": "(Name name -\u003e Bool) -\u003e (string -\u003e string) -\u003e [T name string] -\u003e [T name string]",
          "source": "src/Text-XML-Basic-Attribute.html#adjustOn",
          "type": "function"
        },
        "index": {
          "description": "Process specific attributes of an attribute list The function name is inspired by Data.Map",
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "adjustOn",
          "normalized": "(Name a-\u003eBool)-\u003e(b-\u003eb)-\u003e[T a b]-\u003e[T a b]",
          "package": "xml-basic",
          "partial": "On",
          "signature": "(Name name-\u003eBool)-\u003e(string-\u003estring)-\u003e[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:adjustOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "adjustOnA",
          "package": "xml-basic",
          "signature": "(Name name -\u003e Bool) -\u003e (string -\u003e f string) -\u003e [T name string] -\u003e f [T name string]",
          "source": "src/Text-XML-Basic-Attribute.html#adjustOnA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "adjustOnA",
          "normalized": "(Name a-\u003eBool)-\u003e(b-\u003ec b)-\u003e[T a b]-\u003ec[T a b]",
          "package": "xml-basic",
          "partial": "On",
          "signature": "(Name name-\u003eBool)-\u003e(string-\u003ef string)-\u003e[T name string]-\u003ef[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:adjustOnA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "any",
          "package": "xml-basic",
          "signature": "(T name string -\u003e Bool) -\u003e [T name string] -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "any",
          "normalized": "(T a b-\u003eBool)-\u003e[T a b]-\u003eBool",
          "package": "xml-basic",
          "signature": "(T name string-\u003eBool)-\u003e[T name string]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "anyLit",
          "package": "xml-basic",
          "signature": "String -\u003e string -\u003e [T name string] -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#anyLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "anyLit",
          "normalized": "String-\u003ea-\u003e[T b a]-\u003eBool",
          "package": "xml-basic",
          "partial": "Lit",
          "signature": "String-\u003estring-\u003e[T name string]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:anyLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "anyName",
          "package": "xml-basic",
          "signature": "(Name name -\u003e Bool) -\u003e [T name string] -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#anyName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "anyName",
          "normalized": "(Name a-\u003eBool)-\u003e[T a b]-\u003eBool",
          "package": "xml-basic",
          "partial": "Name",
          "signature": "(Name name-\u003eBool)-\u003e[T name string]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:anyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "anyNameLit",
          "package": "xml-basic",
          "signature": "String -\u003e [T name string] -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#anyNameLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "anyNameLit",
          "normalized": "String-\u003e[T a b]-\u003eBool",
          "package": "xml-basic",
          "partial": "Name Lit",
          "signature": "String-\u003e[T name string]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:anyNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "anyValue",
          "package": "xml-basic",
          "signature": "(string -\u003e Bool) -\u003e [T name string] -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#anyValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "anyValue",
          "normalized": "(a-\u003eBool)-\u003e[T b a]-\u003eBool",
          "package": "xml-basic",
          "partial": "Value",
          "signature": "(string-\u003eBool)-\u003e[T name string]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:anyValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "anyValueLit",
          "package": "xml-basic",
          "signature": "string -\u003e [T name string] -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#anyValueLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "anyValueLit",
          "normalized": "a-\u003e[T b a]-\u003eBool",
          "package": "xml-basic",
          "partial": "Value Lit",
          "signature": "string-\u003e[T name string]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:anyValueLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "cons",
          "package": "xml-basic",
          "signature": "Name name -\u003e string -\u003e T name string",
          "source": "src/Text-XML-Basic-Attribute.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "cons",
          "normalized": "Name a-\u003eb-\u003eT a b",
          "package": "xml-basic",
          "signature": "Name name-\u003estring-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "encodingName",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Attribute.html#encodingName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "encodingName",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:encodingName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "encodingString",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Attribute.html#encodingString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "encodingString",
          "package": "xml-basic",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:encodingString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach attribute is preceded by a space,\nthat is there is a space between adjacent attributes\nand one leading space.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Attribute",
          "name": "formatListBlankHead",
          "package": "xml-basic",
          "signature": "[T name string] -\u003e ShowS",
          "source": "src/Text-XML-Basic-Attribute.html#formatListBlankHead",
          "type": "function"
        },
        "index": {
          "description": "Each attribute is preceded by space that is there is space between adjacent attributes and one leading space",
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "formatListBlankHead",
          "normalized": "[T a b]-\u003eShowS",
          "package": "xml-basic",
          "partial": "List Blank Head",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:formatListBlankHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "fromPair",
          "package": "xml-basic",
          "signature": "(String, string) -\u003e T name string",
          "source": "src/Text-XML-Basic-Attribute.html#fromPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "fromPair",
          "normalized": "(String,a)-\u003eT b a",
          "package": "xml-basic",
          "partial": "Pair",
          "signature": "(String,string)-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:fromPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "insert",
          "package": "xml-basic",
          "signature": "Name name -\u003e string -\u003e [T name string] -\u003e [T name string]",
          "source": "src/Text-XML-Basic-Attribute.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "insert",
          "normalized": "Name a-\u003eb-\u003e[T a b]-\u003e[T a b]",
          "package": "xml-basic",
          "signature": "Name name-\u003estring-\u003e[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an attribute into an attribute list.\nIf an attribute with the same name is already present,\nthen the value of this attribute is changed to \u003ccode\u003ef newValue oldValue\u003c/code\u003e.\nThe function name is analogous to Data.Map.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Attribute",
          "name": "insertWith",
          "package": "xml-basic",
          "signature": "(string -\u003e string -\u003e string) -\u003e Name name -\u003e string -\u003e [T name string] -\u003e [T name string]",
          "source": "src/Text-XML-Basic-Attribute.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "Insert an attribute into an attribute list If an attribute with the same name is already present then the value of this attribute is changed to newValue oldValue The function name is analogous to Data.Map",
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eName b-\u003ea-\u003e[T b a]-\u003e[T b a]",
          "package": "xml-basic",
          "partial": "With",
          "signature": "(string-\u003estring-\u003estring)-\u003eName name-\u003estring-\u003e[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "lift",
          "package": "xml-basic",
          "signature": "(Name name -\u003e string -\u003e (Name name, string)) -\u003e T name string -\u003e T name string",
          "source": "src/Text-XML-Basic-Attribute.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "lift",
          "normalized": "(Name a-\u003eb-\u003e(Name a,b))-\u003eT a b-\u003eT a b",
          "package": "xml-basic",
          "signature": "(Name name-\u003estring-\u003e(Name name,string))-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "lookup",
          "package": "xml-basic",
          "signature": "Name name -\u003e [T name string] -\u003e Maybe string",
          "source": "src/Text-XML-Basic-Attribute.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "lookup",
          "normalized": "Name a-\u003e[T a b]-\u003eMaybe b",
          "package": "xml-basic",
          "signature": "Name name-\u003e[T name string]-\u003eMaybe string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "lookupLit",
          "package": "xml-basic",
          "signature": "String -\u003e [T name string] -\u003e Maybe string",
          "source": "src/Text-XML-Basic-Attribute.html#lookupLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "lookupLit",
          "normalized": "String-\u003e[T a b]-\u003eMaybe b",
          "package": "xml-basic",
          "partial": "Lit",
          "signature": "String-\u003e[T name string]-\u003eMaybe string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:lookupLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "mapName",
          "package": "xml-basic",
          "signature": "(Name name0 -\u003e Name name1) -\u003e T name0 string -\u003e T name1 string",
          "source": "src/Text-XML-Basic-Attribute.html#mapName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "mapName",
          "normalized": "(Name a-\u003eName a)-\u003eT a b-\u003eT a b",
          "package": "xml-basic",
          "partial": "Name",
          "signature": "(Name name-\u003eName name)-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:mapName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "mapValues",
          "package": "xml-basic",
          "signature": "(str0 -\u003e str1) -\u003e [T name str0] -\u003e [T name str1]",
          "source": "src/Text-XML-Basic-Attribute.html#mapValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "mapValues",
          "normalized": "(a-\u003ea)-\u003e[T b a]-\u003e[T b a]",
          "package": "xml-basic",
          "partial": "Values",
          "signature": "(str-\u003estr)-\u003e[T name str]-\u003e[T name str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:mapValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "mapValuesA",
          "package": "xml-basic",
          "signature": "(str0 -\u003e f str1) -\u003e [T name str0] -\u003e f [T name str1]",
          "source": "src/Text-XML-Basic-Attribute.html#mapValuesA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "mapValuesA",
          "normalized": "(a-\u003eb a)-\u003e[T c a]-\u003eb[T c a]",
          "package": "xml-basic",
          "partial": "Values",
          "signature": "(str-\u003ef str)-\u003e[T name str]-\u003ef[T name str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:mapValuesA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "match",
          "package": "xml-basic",
          "signature": "String -\u003e string -\u003e T name string -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "match",
          "normalized": "String-\u003ea-\u003eT b a-\u003eBool",
          "package": "xml-basic",
          "signature": "String-\u003estring-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ematchManyValues name [value0, value1] attrs\u003c/code\u003e\nchecks whether \u003ccode\u003e(name, value0)\u003c/code\u003e or \u003ccode\u003e(name, value1)\u003c/code\u003e\nis contained in \u003ccode\u003eattrs\u003c/code\u003e.\nThe values are handled case-sensitive.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Attribute",
          "name": "matchAnyValue",
          "package": "xml-basic",
          "signature": "String -\u003e [string] -\u003e T name string -\u003e Bool",
          "source": "src/Text-XML-Basic-Attribute.html#matchAnyValue",
          "type": "function"
        },
        "index": {
          "description": "matchManyValues name value0 value1 attrs checks whether name value0 or name value1 is contained in attrs The values are handled case-sensitive",
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "matchAnyValue",
          "normalized": "String-\u003e[a]-\u003eT b a-\u003eBool",
          "package": "xml-basic",
          "partial": "Any Value",
          "signature": "String-\u003e[string]-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:matchAnyValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "name",
          "package": "xml-basic",
          "signature": "T (T name string) (Name name)",
          "source": "src/Text-XML-Basic-Attribute.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "name",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "name_",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Attribute.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "name_",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:name_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "new",
          "package": "xml-basic",
          "signature": "String -\u003e string -\u003e T name string",
          "source": "src/Text-XML-Basic-Attribute.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "new",
          "normalized": "String-\u003ea-\u003eT b a",
          "package": "xml-basic",
          "signature": "String-\u003estring-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "toPair",
          "package": "xml-basic",
          "signature": "T name string -\u003e (String, string)",
          "source": "src/Text-XML-Basic-Attribute.html#toPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "toPair",
          "normalized": "T a b-\u003e(String,b)",
          "package": "xml-basic",
          "partial": "Pair",
          "signature": "T name string-\u003e(String,string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:toPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "unname",
          "package": "xml-basic",
          "signature": "ident",
          "source": "src/Text-XML-Basic-Attribute.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "unname",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:unname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "value",
          "package": "xml-basic",
          "signature": "T (T name string) string",
          "source": "src/Text-XML-Basic-Attribute.html#value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "value",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "value_",
          "package": "xml-basic",
          "signature": "string",
          "source": "src/Text-XML-Basic-Attribute.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "value_",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:value_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "versionName",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Attribute.html#versionName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "versionName",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:versionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Attribute",
          "name": "versionString",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Attribute.html#versionString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Attribute",
          "module": "Text.XML.Basic.Attribute",
          "name": "versionString",
          "package": "xml-basic",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Attribute.html#v:versionString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll kinds of representations of a character in XML combined in one type.\nNote that an entity can in principle represent a large text,\nthus an \"XML character\" might actually be a text.\nHowever the standard entities consist of one character.\nIn contrast to our representation,\nHaXml uses Unicode substrings instead of Unicode characters,\nwhich is certainly more efficient for common XML texts\nthat contain mainly Unicode text and only few references.\nHowever our representation is unique,\nwhereas HaXmls may represent a text as \u003ccode\u003e\u003ca\u003eabc\u003c/a\u003e,\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eabcdef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Character",
          "name": "Character",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Character.html",
          "type": "module"
        },
        "index": {
          "description": "All kinds of representations of character in XML combined in one type Note that an entity can in principle represent large text thus an XML character might actually be text However the standard entities consist of one character In contrast to our representation HaXml uses Unicode substrings instead of Unicode characters which is certainly more efficient for common XML texts that contain mainly Unicode text and only few references However our representation is unique whereas HaXmls may represent text as abc def or abcdef",
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "Character",
          "package": "xml-basic",
          "partial": "Character",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Character",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Character.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "T",
          "package": "xml-basic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert unicode character to XML Char,\nwhere Unicode constructor is only used for ASCII characters.\nThis is achieved by the following decision:\nIf there is a entity reference, use this.\nIf it is ASCII, represent it as Char.\nOtherwise use a character reference.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Character",
          "name": "asciiFromUnicode",
          "package": "xml-basic",
          "signature": "Char -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#asciiFromUnicode",
          "type": "function"
        },
        "index": {
          "description": "Convert unicode character to XML Char where Unicode constructor is only used for ASCII characters This is achieved by the following decision If there is entity reference use this If it is ASCII represent it as Char Otherwise use character reference",
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "asciiFromUnicode",
          "normalized": "Char-\u003eT",
          "package": "xml-basic",
          "partial": "From Unicode",
          "signature": "Char-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:asciiFromUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Character",
          "name": "asciiFromUnicodeGen",
          "package": "xml-basic",
          "signature": "Map Char String -\u003e Char -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#asciiFromUnicodeGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "asciiFromUnicodeGen",
          "normalized": "Map Char String-\u003eChar-\u003eT",
          "package": "xml-basic",
          "partial": "From Unicode Gen",
          "signature": "Map Char String-\u003eChar-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:asciiFromUnicodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the use of references.\nRepresent as much as possible characters as Unicode characters,\nthat is, using the Unicode constructor.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Character",
          "name": "reduceRef",
          "package": "xml-basic",
          "signature": "T -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#reduceRef",
          "type": "function"
        },
        "index": {
          "description": "Reduce the use of references Represent as much as possible characters as Unicode characters that is using the Unicode constructor",
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "reduceRef",
          "normalized": "T-\u003eT",
          "package": "xml-basic",
          "partial": "Ref",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:reduceRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to convert a References to equivalent Unicode characters \n\u003c/p\u003e",
          "module": "Text.XML.Basic.Character",
          "name": "reduceRefGen",
          "package": "xml-basic",
          "signature": "Map String Char -\u003e T -\u003e T",
          "source": "src/Text-XML-Basic-Character.html#reduceRefGen",
          "type": "function"
        },
        "index": {
          "description": "try to convert References to equivalent Unicode characters",
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "reduceRefGen",
          "normalized": "Map String Char-\u003eT-\u003eT",
          "package": "xml-basic",
          "partial": "Ref Gen",
          "signature": "Map String Char-\u003eT-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:reduceRefGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a reference cannot be resolved\nthen an \u003ccode\u003eException\u003c/code\u003e constructor with an error message is returned.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Character",
          "name": "toUnicode",
          "package": "xml-basic",
          "signature": "T -\u003e Exceptional String Char",
          "source": "src/Text-XML-Basic-Character.html#toUnicode",
          "type": "function"
        },
        "index": {
          "description": "If reference cannot be resolved then an Exception constructor with an error message is returned",
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "toUnicode",
          "normalized": "T-\u003eExceptional String Char",
          "package": "xml-basic",
          "partial": "Unicode",
          "signature": "T-\u003eExceptional String Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:toUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Character",
          "name": "toUnicodeGen",
          "package": "xml-basic",
          "signature": "Map String Char -\u003e T -\u003e Exceptional String Char",
          "source": "src/Text-XML-Basic-Character.html#toUnicodeGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "toUnicodeGen",
          "normalized": "Map String Char-\u003eT-\u003eExceptional String Char",
          "package": "xml-basic",
          "partial": "Unicode Gen",
          "signature": "Map String Char-\u003eT-\u003eExceptional String Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:toUnicodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a reference cannot be resolved\nthen a reference string is returned.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Character",
          "name": "toUnicodeOrFormat",
          "package": "xml-basic",
          "signature": "T -\u003e ShowS",
          "source": "src/Text-XML-Basic-Character.html#toUnicodeOrFormat",
          "type": "function"
        },
        "index": {
          "description": "If reference cannot be resolved then reference string is returned",
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "toUnicodeOrFormat",
          "normalized": "T-\u003eShowS",
          "package": "xml-basic",
          "partial": "Unicode Or Format",
          "signature": "T-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:toUnicodeOrFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Character",
          "name": "toUnicodeOrFormatGen",
          "package": "xml-basic",
          "signature": "Map String Char -\u003e T -\u003e ShowS",
          "source": "src/Text-XML-Basic-Character.html#toUnicodeOrFormatGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Character",
          "module": "Text.XML.Basic.Character",
          "name": "toUnicodeOrFormatGen",
          "normalized": "Map String Char-\u003eT-\u003eShowS",
          "package": "xml-basic",
          "partial": "Unicode Or Format Gen",
          "signature": "Map String Char-\u003eT-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Character.html#v:toUnicodeOrFormatGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Entity",
          "name": "Entity",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Entity.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Basic Entity",
          "module": "Text.XML.Basic.Entity",
          "name": "Entity",
          "package": "xml-basic",
          "partial": "Entity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Entity",
          "name": "Name",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Entity.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Basic Entity",
          "module": "Text.XML.Basic.Entity",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table mapping XML entity names to code points.\nAlthough entity references can in principle represent more than one character,\nthe standard entities only contain one character.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Entity",
          "name": "list",
          "package": "xml-basic",
          "signature": "[(Name, Char)]",
          "source": "src/Text-XML-Basic-Entity.html#list",
          "type": "function"
        },
        "index": {
          "description": "table mapping XML entity names to code points Although entity references can in principle represent more than one character the standard entities only contain one character",
          "hierarchy": "Text XML Basic Entity",
          "module": "Text.XML.Basic.Entity",
          "name": "list",
          "normalized": "[(Name,Char)]",
          "package": "xml-basic",
          "signature": "[(Name,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis list excludes \u003ccode\u003eapos\u003c/code\u003e as Internet Explorer does not know about it.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Entity",
          "name": "listInternetExploder",
          "package": "xml-basic",
          "signature": "[(Name, Char)]",
          "source": "src/Text-XML-Basic-Entity.html#listInternetExploder",
          "type": "function"
        },
        "index": {
          "description": "This list excludes apos as Internet Explorer does not know about it",
          "hierarchy": "Text XML Basic Entity",
          "module": "Text.XML.Basic.Entity",
          "name": "listInternetExploder",
          "normalized": "[(Name,Char)]",
          "package": "xml-basic",
          "partial": "Internet Exploder",
          "signature": "[(Name,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#v:listInternetExploder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Entity",
          "name": "mapCharToName",
          "package": "xml-basic",
          "signature": "Map Char Name",
          "source": "src/Text-XML-Basic-Entity.html#mapCharToName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Entity",
          "module": "Text.XML.Basic.Entity",
          "name": "mapCharToName",
          "package": "xml-basic",
          "partial": "Char To Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#v:mapCharToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Entity",
          "name": "mapNameToChar",
          "package": "xml-basic",
          "signature": "Map Name Char",
          "source": "src/Text-XML-Basic-Entity.html#mapNameToChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Entity",
          "module": "Text.XML.Basic.Entity",
          "name": "mapNameToChar",
          "package": "xml-basic",
          "partial": "Name To Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Entity.html#v:mapNameToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "Format",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Format.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "Format",
          "package": "xml-basic",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "C",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Format.html#C",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "C",
          "package": "xml-basic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "amp",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#amp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "amp",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "angle",
          "package": "xml-basic",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Text-XML-Basic-Format.html#angle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "angle",
          "normalized": "ShowS-\u003eShowS",
          "package": "xml-basic",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "apos",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#apos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "apos",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:apos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "blank",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#blank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "blank",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "colon",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "colon",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "eq",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#eq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "eq",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "exclam",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#exclam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "exclam",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:exclam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "gt",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#gt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "gt",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "lpar",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#lpar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "lpar",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:lpar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "lt",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#lt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "lt",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "many",
          "package": "xml-basic",
          "signature": "(a -\u003e ShowS) -\u003e [a] -\u003e ShowS",
          "source": "src/Text-XML-Basic-Format.html#many",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "many",
          "normalized": "(a-\u003eShowS)-\u003e[a]-\u003eShowS",
          "package": "xml-basic",
          "signature": "(a-\u003eShowS)-\u003e[a]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "name",
          "package": "xml-basic",
          "signature": "name -\u003e ShowS",
          "source": "src/Text-XML-Basic-Format.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "name",
          "normalized": "a-\u003eShowS",
          "package": "xml-basic",
          "signature": "name-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "nl",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#nl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "nl",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "quest",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#quest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "quest",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:quest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "quot",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#quot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "quot",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "rpar",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#rpar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "rpar",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:rpar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "run",
          "package": "xml-basic",
          "signature": "object -\u003e ShowS",
          "source": "src/Text-XML-Basic-Format.html#run",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "run",
          "normalized": "a-\u003eShowS",
          "package": "xml-basic",
          "signature": "object-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "semicolon",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#semicolon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "semicolon",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:semicolon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "sharp",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#sharp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "sharp",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:sharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Format",
          "name": "slash",
          "package": "xml-basic",
          "signature": "ShowS",
          "source": "src/Text-XML-Basic-Format.html#slash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "slash",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternet Explorer does not recognize &apos;\nand thus we have to format it literally.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Format",
          "name": "stringQuoted",
          "package": "xml-basic",
          "signature": "String -\u003e ShowS",
          "source": "src/Text-XML-Basic-Format.html#stringQuoted",
          "type": "function"
        },
        "index": {
          "description": "Internet Explorer does not recognize apos and thus we have to format it literally",
          "hierarchy": "Text XML Basic Format",
          "module": "Text.XML.Basic.Format",
          "name": "stringQuoted",
          "normalized": "String-\u003eShowS",
          "package": "xml-basic",
          "partial": "Quoted",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Format.html#v:stringQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis name uses only lowercase characters as canonical representation,\nexcept for \u003ccode\u003eDOCTYPE\u003c/code\u003e and \u003ccode\u003eCDATA\u003c/code\u003e.\nThis is optimal for processing HTML which is case-insensitiv.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Name.LowerCase",
          "name": "LowerCase",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name-LowerCase.html",
          "type": "module"
        },
        "index": {
          "description": "This name uses only lowercase characters as canonical representation except for DOCTYPE and CDATA This is optimal for processing HTML which is case-insensitiv",
          "hierarchy": "Text XML Basic Name LowerCase",
          "module": "Text.XML.Basic.Name.LowerCase",
          "name": "LowerCase",
          "package": "xml-basic",
          "partial": "Lower Case",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-LowerCase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.LowerCase",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name-LowerCase.html#T",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML Basic Name LowerCase",
          "module": "Text.XML.Basic.Name.LowerCase",
          "name": "T",
          "package": "xml-basic",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-LowerCase.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.LowerCase",
          "name": "Cons",
          "package": "xml-basic",
          "signature": "Cons String",
          "source": "src/Text-XML-Basic-Name-LowerCase.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name LowerCase",
          "module": "Text.XML.Basic.Name.LowerCase",
          "name": "Cons",
          "package": "xml-basic",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-LowerCase.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis name type preserves the characters case of its input.\nThis is the right choice for case-sensitive names (XML)\nor if you like to preserve case of HTML tags.\nIn the latter case it is however more difficult to match tag names.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Name.MixedCase",
          "name": "MixedCase",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name-MixedCase.html",
          "type": "module"
        },
        "index": {
          "description": "This name type preserves the characters case of its input This is the right choice for case-sensitive names XML or if you like to preserve case of HTML tags In the latter case it is however more difficult to match tag names",
          "hierarchy": "Text XML Basic Name MixedCase",
          "module": "Text.XML.Basic.Name.MixedCase",
          "name": "MixedCase",
          "package": "xml-basic",
          "partial": "Mixed Case",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-MixedCase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.MixedCase",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name-MixedCase.html#T",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML Basic Name MixedCase",
          "module": "Text.XML.Basic.Name.MixedCase",
          "name": "T",
          "package": "xml-basic",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-MixedCase.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.MixedCase",
          "name": "Cons",
          "package": "xml-basic",
          "signature": "Cons String",
          "source": "src/Text-XML-Basic-Name-MixedCase.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name MixedCase",
          "module": "Text.XML.Basic.Name.MixedCase",
          "name": "Cons",
          "package": "xml-basic",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-MixedCase.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis name type preserves the characters case of its input\nand divides the names into namespace and local identifier.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "Qualified",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name-Qualified.html",
          "type": "module"
        },
        "index": {
          "description": "This name type preserves the characters case of its input and divides the names into namespace and local identifier",
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "Qualified",
          "package": "xml-basic",
          "partial": "Qualified",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name-Qualified.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "T",
          "package": "xml-basic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "Cons",
          "package": "xml-basic",
          "signature": "Cons",
          "source": "src/Text-XML-Basic-Name-Qualified.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "Cons",
          "package": "xml-basic",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "fromString",
          "package": "xml-basic",
          "signature": "String -\u003e T",
          "source": "src/Text-XML-Basic-Name-Qualified.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "fromString",
          "normalized": "String-\u003eT",
          "package": "xml-basic",
          "partial": "String",
          "signature": "String-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "local",
          "package": "xml-basic",
          "signature": "T T String",
          "source": "src/Text-XML-Basic-Name-Qualified.html#local",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "local",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "local_",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Name-Qualified.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "local_",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:local_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "namespace",
          "package": "xml-basic",
          "signature": "T T String",
          "source": "src/Text-XML-Basic-Name-Qualified.html#namespace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "namespace",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "namespace_",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Name-Qualified.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "namespace_",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:namespace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "toString",
          "package": "xml-basic",
          "signature": "T -\u003e String",
          "source": "src/Text-XML-Basic-Name-Qualified.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name Qualified",
          "module": "Text.XML.Basic.Name.Qualified",
          "name": "toString",
          "normalized": "T-\u003eString",
          "package": "xml-basic",
          "partial": "String",
          "signature": "T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name-Qualified.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe provide a type class for tag and attribute names.\nInstances can be names that preserve case,\nnames with lowercase letters as canonical representation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Name",
          "name": "Name",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name.html",
          "type": "module"
        },
        "index": {
          "description": "We provide type class for tag and attribute names Instances can be names that preserve case names with lowercase letters as canonical representation",
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "Attribute",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name.html#Attribute",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "Attribute",
          "package": "xml-basic",
          "partial": "Attribute",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "C",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name.html#C",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "C",
          "package": "xml-basic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need to distinguish between tag names and attribute names,\nbecause DOCTYPE as tag name must be written upper case,\nwhereas as attribute name it may be written either way.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Name",
          "name": "Tag",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Name.html#Tag",
          "type": "class"
        },
        "index": {
          "description": "We need to distinguish between tag names and attribute names because DOCTYPE as tag name must be written upper case whereas as attribute name it may be written either way",
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "Tag",
          "package": "xml-basic",
          "partial": "Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "attributeFromString",
          "package": "xml-basic",
          "signature": "String -\u003e ident",
          "source": "src/Text-XML-Basic-Name.html#attributeFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "attributeFromString",
          "normalized": "String-\u003ea",
          "package": "xml-basic",
          "partial": "From String",
          "signature": "String-\u003eident",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:attributeFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "attributeToString",
          "package": "xml-basic",
          "signature": "ident -\u003e String",
          "source": "src/Text-XML-Basic-Name.html#attributeToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "attributeToString",
          "normalized": "a-\u003eString",
          "package": "xml-basic",
          "partial": "To String",
          "signature": "ident-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:attributeToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "fromString",
          "package": "xml-basic",
          "signature": "String -\u003e name",
          "source": "src/Text-XML-Basic-Name.html#fromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "xml-basic",
          "partial": "String",
          "signature": "String-\u003ename",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "match",
          "package": "xml-basic",
          "signature": "String -\u003e name -\u003e Bool",
          "source": "src/Text-XML-Basic-Name.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "match",
          "normalized": "String-\u003ea-\u003eBool",
          "package": "xml-basic",
          "signature": "String-\u003ename-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "matchAny",
          "package": "xml-basic",
          "signature": "[String] -\u003e name -\u003e Bool",
          "source": "src/Text-XML-Basic-Name.html#matchAny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "matchAny",
          "normalized": "[String]-\u003ea-\u003eBool",
          "package": "xml-basic",
          "partial": "Any",
          "signature": "[String]-\u003ename-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "tagFromString",
          "package": "xml-basic",
          "signature": "String -\u003e ident",
          "source": "src/Text-XML-Basic-Name.html#tagFromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "tagFromString",
          "normalized": "String-\u003ea",
          "package": "xml-basic",
          "partial": "From String",
          "signature": "String-\u003eident",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:tagFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "tagToString",
          "package": "xml-basic",
          "signature": "ident -\u003e String",
          "source": "src/Text-XML-Basic-Name.html#tagToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "tagToString",
          "normalized": "a-\u003eString",
          "package": "xml-basic",
          "partial": "To String",
          "signature": "ident-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:tagToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Name",
          "name": "toString",
          "package": "xml-basic",
          "signature": "name -\u003e String",
          "source": "src/Text-XML-Basic-Name.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Basic Name",
          "module": "Text.XML.Basic.Name",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "xml-basic",
          "partial": "String",
          "signature": "name-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Name.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePosition in a file.\n\u003c/p\u003e\u003cp\u003eCf. to Text.ParserCombinators.Parsec.Pos\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Position",
          "name": "Position",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Position.html",
          "type": "module"
        },
        "index": {
          "description": "Position in file Cf to Text.ParserCombinators.Parsec.Pos",
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "Position",
          "package": "xml-basic",
          "partial": "Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "Column",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Position.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "Column",
          "package": "xml-basic",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "FileName",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Position.html#FileName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "FileName",
          "package": "xml-basic",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "Row",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Position.html#Row",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "Row",
          "package": "xml-basic",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in a file consisting of file name, row and column coordinates.\nUpper left is (0,0), but show routines can display this with different offsets.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Position",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Position.html#T",
          "type": "data"
        },
        "index": {
          "description": "Position in file consisting of file name row and column coordinates Upper left is but show routines can display this with different offsets",
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "T",
          "package": "xml-basic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "column",
          "package": "xml-basic",
          "signature": "T T Column",
          "source": "src/Text-XML-Basic-Position.html#column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "column",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "fileName",
          "package": "xml-basic",
          "signature": "T T FileName",
          "source": "src/Text-XML-Basic-Position.html#fileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "fileName",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "initialize",
          "package": "xml-basic",
          "signature": "FileName -\u003e T",
          "source": "src/Text-XML-Basic-Position.html#initialize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "initialize",
          "normalized": "FileName-\u003eT",
          "package": "xml-basic",
          "signature": "FileName-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "new",
          "package": "xml-basic",
          "signature": "FileName -\u003e Row -\u003e Column -\u003e T",
          "source": "src/Text-XML-Basic-Position.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "new",
          "normalized": "FileName-\u003eRow-\u003eColumn-\u003eT",
          "package": "xml-basic",
          "signature": "FileName-\u003eRow-\u003eColumn-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "row",
          "package": "xml-basic",
          "signature": "T T Row",
          "source": "src/Text-XML-Basic-Position.html#row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "row",
          "package": "xml-basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the file position to a format\nthat development environments can understand.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Position",
          "name": "toReportText",
          "package": "xml-basic",
          "signature": "T -\u003e String",
          "source": "src/Text-XML-Basic-Position.html#toReportText",
          "type": "function"
        },
        "index": {
          "description": "Convert the file position to format that development environments can understand",
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "toReportText",
          "normalized": "T-\u003eString",
          "package": "xml-basic",
          "partial": "Report Text",
          "signature": "T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:toReportText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "updateOnChar",
          "package": "xml-basic",
          "signature": "Char -\u003e T -\u003e T",
          "source": "src/Text-XML-Basic-Position.html#updateOnChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "updateOnChar",
          "normalized": "Char-\u003eT-\u003eT",
          "package": "xml-basic",
          "partial": "On Char",
          "signature": "Char-\u003eT-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:updateOnChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Position",
          "name": "updateOnString",
          "package": "xml-basic",
          "signature": "T -\u003e String -\u003e T",
          "source": "src/Text-XML-Basic-Position.html#updateOnString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Position",
          "module": "Text.XML.Basic.Position",
          "name": "updateOnString",
          "normalized": "T-\u003eString-\u003eT",
          "package": "xml-basic",
          "partial": "On String",
          "signature": "T-\u003eString-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Position.html#v:updateOnString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "ProcessingInstruction",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "ProcessingInstruction",
          "package": "xml-basic",
          "partial": "Processing Instruction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "T",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "T",
          "package": "xml-basic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "Known",
          "package": "xml-basic",
          "signature": "Known [T name string]",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "Known",
          "normalized": "Known[T a b]",
          "package": "xml-basic",
          "partial": "Known",
          "signature": "Known[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#v:Known"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "Unknown",
          "package": "xml-basic",
          "signature": "Unknown String",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "Unknown",
          "package": "xml-basic",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "mapAttributes",
          "package": "xml-basic",
          "signature": "([T name0 string0] -\u003e [T name1 string1]) -\u003e T name0 string0 -\u003e T name1 string1",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html#mapAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "mapAttributes",
          "normalized": "([T a b]-\u003e[T a b])-\u003eT a b-\u003eT a b",
          "package": "xml-basic",
          "partial": "Attributes",
          "signature": "([T name string]-\u003e[T name string])-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#v:mapAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "mapAttributesA",
          "package": "xml-basic",
          "signature": "([T name0 string0] -\u003e f [T name1 string1]) -\u003e T name0 string0 -\u003e f (T name1 string1)",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html#mapAttributesA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "mapAttributesA",
          "normalized": "([T a b]-\u003ec[T a b])-\u003eT a b-\u003ec(T a b)",
          "package": "xml-basic",
          "partial": "Attributes",
          "signature": "([T name string]-\u003ef[T name string])-\u003eT name string-\u003ef(T name string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#v:mapAttributesA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "mapName",
          "package": "xml-basic",
          "signature": "(Name name0 -\u003e Name name1) -\u003e T name0 string -\u003e T name1 string",
          "source": "src/Text-XML-Basic-ProcessingInstruction.html#mapName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic ProcessingInstruction",
          "module": "Text.XML.Basic.ProcessingInstruction",
          "name": "mapName",
          "normalized": "(Name a-\u003eName a)-\u003eT a b-\u003eT a b",
          "package": "xml-basic",
          "partial": "Name",
          "signature": "(Name name-\u003eName name)-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-ProcessingInstruction.html#v:mapName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.String",
          "name": "String",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Basic String",
          "module": "Text.XML.Basic.String",
          "name": "String",
          "package": "xml-basic",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould be [Word8]\n\u003c/p\u003e",
          "module": "Text.XML.Basic.String",
          "name": "Encoded",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-String.html#Encoded",
          "type": "type"
        },
        "index": {
          "description": "should be Word8",
          "hierarchy": "Text XML Basic String",
          "module": "Text.XML.Basic.String",
          "name": "Encoded",
          "package": "xml-basic",
          "partial": "Encoded",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-String.html#t:Encoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode encoded characters and XML references.\nInvalid references are silently skipped.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.String",
          "name": "decode",
          "package": "xml-basic",
          "signature": "(Encoded -\u003e String) -\u003e [T] -\u003e String",
          "source": "src/Text-XML-Basic-String.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode encoded characters and XML references Invalid references are silently skipped",
          "hierarchy": "Text XML Basic String",
          "module": "Text.XML.Basic.String",
          "name": "decode",
          "normalized": "(Encoded-\u003eString)-\u003e[T]-\u003eString",
          "package": "xml-basic",
          "signature": "(Encoded-\u003eString)-\u003e[T]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-String.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.String",
          "name": "decodeGen",
          "package": "xml-basic",
          "signature": "Map Name Char -\u003e (Encoded -\u003e String) -\u003e [T] -\u003e String",
          "source": "src/Text-XML-Basic-String.html#decodeGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic String",
          "module": "Text.XML.Basic.String",
          "name": "decodeGen",
          "normalized": "Map Name Char-\u003e(Encoded-\u003eString)-\u003e[T]-\u003eString",
          "package": "xml-basic",
          "partial": "Gen",
          "signature": "Map Name Char-\u003e(Encoded-\u003eString)-\u003e[T]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-String.html#v:decodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe do not define a tag data type here,\nsince this is too much bound to the particular use\n(e.g. list or tree structure).\nHowever we define a tag name and some special names.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Basic.Tag",
          "name": "Tag",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Tag.html",
          "type": "module"
        },
        "index": {
          "description": "We do not define tag data type here since this is too much bound to the particular use e.g list or tree structure However we define tag name and some special names",
          "hierarchy": "Text XML Basic Tag",
          "module": "Text.XML.Basic.Tag",
          "name": "Tag",
          "package": "xml-basic",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Tag",
          "name": "Name",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Tag.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text XML Basic Tag",
          "module": "Text.XML.Basic.Tag",
          "name": "Name",
          "package": "xml-basic",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Tag",
          "name": "maybeXMLEncoding",
          "package": "xml-basic",
          "signature": "Name name -\u003e T name string -\u003e Maybe string",
          "source": "src/Text-XML-Basic-Tag.html#maybeXMLEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Tag",
          "module": "Text.XML.Basic.Tag",
          "name": "maybeXMLEncoding",
          "normalized": "Name a-\u003eT a b-\u003eMaybe b",
          "package": "xml-basic",
          "partial": "XMLEncoding",
          "signature": "Name name-\u003eT name string-\u003eMaybe string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:maybeXMLEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Tag",
          "name": "xmlName",
          "package": "xml-basic",
          "signature": "Name name",
          "source": "src/Text-XML-Basic-Tag.html#xmlName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Tag",
          "module": "Text.XML.Basic.Tag",
          "name": "xmlName",
          "package": "xml-basic",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:xmlName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Tag",
          "name": "xmlString",
          "package": "xml-basic",
          "signature": "String",
          "source": "src/Text-XML-Basic-Tag.html#xmlString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Basic Tag",
          "module": "Text.XML.Basic.Tag",
          "name": "xmlString",
          "package": "xml-basic",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Tag.html#v:xmlString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Basic.Utility",
          "name": "Utility",
          "package": "xml-basic",
          "source": "src/Text-XML-Basic-Utility.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Basic Utility",
          "module": "Text.XML.Basic.Utility",
          "name": "Utility",
          "package": "xml-basic",
          "partial": "Utility",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Utility.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeeds \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e from utility-ht in order to be as lazy as \u003ccode\u003e\u003ca\u003eupdateAppend'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Utility",
          "name": "updateAppend",
          "package": "xml-basic",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e (a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Text-XML-Basic-Utility.html#updateAppend",
          "type": "function"
        },
        "index": {
          "description": "Needs break from utility-ht in order to be as lazy as updateAppend",
          "hierarchy": "Text XML Basic Utility",
          "module": "Text.XML.Basic.Utility",
          "name": "updateAppend",
          "normalized": "(a-\u003eBool)-\u003ea-\u003e(a-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "xml-basic",
          "partial": "Append",
          "signature": "(a-\u003eBool)-\u003ea-\u003e(a-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Utility.html#v:updateAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003ccode\u003ef\u003c/code\u003e to the first element, where \u003ccode\u003ep\u003c/code\u003e holds.\nIf no such element exists, append the default value \u003ccode\u003edeflt\u003c/code\u003e to the list.\n\u003c/p\u003e",
          "module": "Text.XML.Basic.Utility",
          "name": "updateAppend'",
          "package": "xml-basic",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e (a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Text-XML-Basic-Utility.html#updateAppend%27",
          "type": "function"
        },
        "index": {
          "description": "Apply to the first element where holds If no such element exists append the default value deflt to the list",
          "hierarchy": "Text XML Basic Utility",
          "module": "Text.XML.Basic.Utility",
          "name": "updateAppend'",
          "normalized": "(a-\u003eBool)-\u003ea-\u003e(a-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "xml-basic",
          "partial": "Append'",
          "signature": "(a-\u003eBool)-\u003ea-\u003e(a-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-basic/docs/Text-XML-Basic-Utility.html#v:updateAppend-39-"
      }
    }
  ]
]