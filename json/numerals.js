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
        "word": "numerals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "BigNum",
          "package": "numerals",
          "source": "src/Text-Numeral-BigNum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "BigNum",
          "package": "numerals",
          "partial": "Big Num",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that renders the postfix part of a large number name. Or\n more simply put, this calculates the \"illion\" part of\n \"million\", \"billion\", etc.\n\u003c/p\u003e",
          "module": "Text.Numeral.BigNum",
          "name": "PostfixRepr",
          "package": "numerals",
          "source": "src/Text-Numeral-BigNum.html#PostfixRepr",
          "type": "type"
        },
        "index": {
          "description": "Function that renders the postfix part of large number name Or more simply put this calculates the illion part of million billion etc",
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "PostfixRepr",
          "package": "numerals",
          "partial": "Postfix Repr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#t:PostfixRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "cardinal",
          "package": "numerals",
          "signature": "inf -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-BigNum.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "inf-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "cardinalRepr",
          "package": "numerals",
          "signature": "Repr inf",
          "source": "src/Text-Numeral-BigNum.html#cardinalRepr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "cardinalRepr",
          "package": "numerals",
          "partial": "Repr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:cardinalRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "forms",
          "package": "numerals",
          "signature": "Text -\u003e Text -\u003e Text -\u003e Text -\u003e Text -\u003e Ctx (Exp i) -\u003e Text",
          "source": "src/Text-Numeral-BigNum.html#forms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "forms",
          "normalized": "Text-\u003eText-\u003eText-\u003eText-\u003eText-\u003eCtx(Exp a)-\u003eText",
          "package": "numerals",
          "signature": "Text-\u003eText-\u003eText-\u003eText-\u003eText-\u003eCtx(Exp i)-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:forms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "ordQuantityName",
          "package": "numerals",
          "signature": "Text -\u003e Text -\u003e Text -\u003e Text -\u003e PostfixRepr i",
          "source": "src/Text-Numeral-BigNum.html#ordQuantityName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "ordQuantityName",
          "normalized": "Text-\u003eText-\u003eText-\u003eText-\u003ePostfixRepr a",
          "package": "numerals",
          "partial": "Quantity Name",
          "signature": "Text-\u003eText-\u003eText-\u003eText-\u003ePostfixRepr i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:ordQuantityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "pelletierRepr",
          "package": "numerals",
          "signature": "PostfixRepr i-\u003e PostfixRepr i-\u003e [(ℤ, Ctx (Exp i) -\u003e Text)]-\u003e ScaleRepr i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "pelletierRepr",
          "normalized": "PostfixRepr a-\u003ePostfixRepr a-\u003e[(ℤ,Ctx(Exp a)-\u003eText)]-\u003eScaleRepr a",
          "package": "numerals",
          "partial": "Repr",
          "signature": "PostfixRepr i-\u003ePostfixRepr i-\u003e[(ℤ,Ctx(Exp i)-\u003eText)]-\u003eScaleRepr i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:pelletierRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "quantityName",
          "package": "numerals",
          "signature": "Text -\u003e Text -\u003e PostfixRepr i",
          "source": "src/Text-Numeral-BigNum.html#quantityName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "quantityName",
          "normalized": "Text-\u003eText-\u003ePostfixRepr a",
          "package": "numerals",
          "partial": "Name",
          "signature": "Text-\u003eText-\u003ePostfixRepr i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:quantityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "rule",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-BigNum.html#rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "rule",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "scaleRepr",
          "package": "numerals",
          "signature": "PostfixRepr i-\u003e [(ℤ, Ctx (Exp i) -\u003e Text)]-\u003e ScaleRepr i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "scaleRepr",
          "normalized": "PostfixRepr a-\u003e[(ℤ,Ctx(Exp a)-\u003eText)]-\u003eScaleRepr a",
          "package": "numerals",
          "partial": "Repr",
          "signature": "PostfixRepr i-\u003e[(ℤ,Ctx(Exp i)-\u003eText)]-\u003eScaleRepr i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:scaleRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.BigNum",
          "name": "symMap",
          "package": "numerals",
          "signature": "Map α (Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-BigNum.html#symMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral BigNum",
          "module": "Text.Numeral.BigNum",
          "name": "symMap",
          "normalized": "Map a(Ctx(Exp b)-\u003eText)",
          "package": "numerals",
          "partial": "Map",
          "signature": "Map α(Ctx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-BigNum.html#v:symMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "Entry",
          "package": "numerals",
          "source": "src/Text-Numeral-Entry.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "Entry",
          "package": "numerals",
          "partial": "Entry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "Conversion",
          "package": "numerals",
          "source": "src/Text-Numeral-Entry.html#Conversion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "Conversion",
          "package": "numerals",
          "partial": "Conversion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#t:Conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "Entry",
          "package": "numerals",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "Entry",
          "package": "numerals",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "Conversion",
          "package": "numerals",
          "signature": "Conversion",
          "source": "src/Text-Numeral-Entry.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "Conversion",
          "package": "numerals",
          "partial": "Conversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:Conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "Entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "Entry",
          "package": "numerals",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "emptyEntry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Entry.html#emptyEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "emptyEntry",
          "package": "numerals",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:emptyEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entCardinal",
          "package": "numerals",
          "signature": "Maybe (Conversion ℤ)",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entCardinal",
          "package": "numerals",
          "partial": "Cardinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entCardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entEnglishName",
          "package": "numerals",
          "signature": "Maybe Text",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entEnglishName",
          "package": "numerals",
          "partial": "English Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entEnglishName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entIso639_1",
          "package": "numerals",
          "signature": "Maybe Text",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entIso639_1",
          "package": "numerals",
          "partial": "Iso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entIso639_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entIso639_2",
          "package": "numerals",
          "signature": "[Text]",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entIso639_2",
          "normalized": "[Text]",
          "package": "numerals",
          "partial": "Iso",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entIso639_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entIso639_3",
          "package": "numerals",
          "signature": "Maybe Text",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entIso639_3",
          "package": "numerals",
          "partial": "Iso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entIso639_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entMultiplicative",
          "package": "numerals",
          "signature": "Maybe (Conversion ℤ)",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entMultiplicative",
          "package": "numerals",
          "partial": "Multiplicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entMultiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entNativeNames",
          "package": "numerals",
          "signature": "[Text]",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entNativeNames",
          "normalized": "[Text]",
          "package": "numerals",
          "partial": "Native Names",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entNativeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entOrdinal",
          "package": "numerals",
          "signature": "Maybe (Conversion ℤ)",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entOrdinal",
          "package": "numerals",
          "partial": "Ordinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entOrdinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entPartitive",
          "package": "numerals",
          "signature": "Maybe (Conversion (ℤ, ℤ))",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entPartitive",
          "normalized": "Maybe(Conversion(ℤ,ℤ))",
          "package": "numerals",
          "partial": "Partitive",
          "signature": "Maybe(Conversion(ℤ,ℤ))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entPartitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "entVariant",
          "package": "numerals",
          "signature": "Maybe Text",
          "source": "src/Text-Numeral-Entry.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "entVariant",
          "package": "numerals",
          "partial": "Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:entVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "toNumeral",
          "package": "numerals",
          "signature": "Inflection -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Entry.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "toNumeral",
          "normalized": "Inflection-\u003ea-\u003eMaybe Text",
          "package": "numerals",
          "partial": "Numeral",
          "signature": "Inflection-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:toNumeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Entry",
          "name": "toStructure",
          "package": "numerals",
          "signature": "α -\u003e Exp Inflection",
          "source": "src/Text-Numeral-Entry.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Entry",
          "module": "Text.Numeral.Entry",
          "name": "toStructure",
          "normalized": "a-\u003eExp Inflection",
          "package": "numerals",
          "partial": "Structure",
          "signature": "α-\u003eExp Inflection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Entry.html#v:toStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp.Reified",
          "name": "Reified",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp-Reified.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Reified",
          "package": "numerals",
          "partial": "Reified",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression that represents the structure of a numeral.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Exp",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "data"
        },
        "index": {
          "description": "An expression that represents the structure of numeral",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Exp",
          "package": "numerals",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA side or direction, either \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003eeft or \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003eight.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Side",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp-Reified.html#Side",
          "type": "data"
        },
        "index": {
          "description": "side or direction either eft or ight",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Side",
          "package": "numerals",
          "partial": "Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#t:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition of two expressions.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Add",
          "package": "numerals",
          "signature": "Add (Exp i) (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "Addition of two expressions",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Add",
          "package": "numerals",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dual form of an expression.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Dual",
          "package": "numerals",
          "signature": "Dual (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "dual form of an expression",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Dual",
          "package": "numerals",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fraction.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Frac",
          "package": "numerals",
          "signature": "Frac (Exp i) (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "fraction",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Frac",
          "package": "numerals",
          "partial": "Frac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Frac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA change of inflection.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Inflection",
          "package": "numerals",
          "signature": "Inflection (i -\u003e i) (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "change of inflection",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Inflection",
          "normalized": "Inflection(a-\u003ea)(Exp a)",
          "package": "numerals",
          "partial": "Inflection",
          "signature": "Inflection(i-\u003ei)(Exp i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "L",
          "package": "numerals",
          "signature": "L",
          "source": "src/Text-Numeral-Exp-Reified.html#Side",
          "type": "function"
        },
        "index": {
          "description": "Left",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "L",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal value.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Lit",
          "package": "numerals",
          "signature": "Lit ℤ",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "literal value",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Lit",
          "package": "numerals",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication of two expressions.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Mul",
          "package": "numerals",
          "signature": "Mul (Exp i) (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "Multiplication of two expressions",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Mul",
          "package": "numerals",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation of an expression.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Neg",
          "package": "numerals",
          "signature": "Neg (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "Negation of an expression",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Neg",
          "package": "numerals",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plural form of an expression.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Plural",
          "package": "numerals",
          "signature": "Plural (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "plural form of an expression",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Plural",
          "package": "numerals",
          "partial": "Plural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "R",
          "package": "numerals",
          "signature": "R",
          "source": "src/Text-Numeral-Exp-Reified.html#Side",
          "type": "function"
        },
        "index": {
          "description": "Right",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "R",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step in a scale of large values.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Scale",
          "package": "numerals",
          "signature": "Scale ℤ ℤ (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "step in scale of large values",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Scale",
          "package": "numerals",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne expression subtracted from another expression.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Sub",
          "package": "numerals",
          "signature": "Sub (Exp i) (Exp i)",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "One expression subtracted from another expression",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Sub",
          "package": "numerals",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unknown value.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Unknown",
          "package": "numerals",
          "signature": "Unknown",
          "source": "src/Text-Numeral-Exp-Reified.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "An unknown value",
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "Unknown",
          "package": "numerals",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp.Reified",
          "name": "showExp",
          "package": "numerals",
          "signature": "Exp i -\u003e String",
          "source": "src/Text-Numeral-Exp-Reified.html#showExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Exp Reified",
          "module": "Text.Numeral.Exp.Reified",
          "name": "showExp",
          "normalized": "Exp a-\u003eString",
          "package": "numerals",
          "partial": "Exp",
          "signature": "Exp i-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp-Reified.html#v:showExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "Exp",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Exp",
          "package": "numerals",
          "partial": "Exp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition of two values.\n\u003c/p\u003e\u003cp\u003eExample in English:\n\u003c/p\u003e\u003cpre\u003e \"fifteen\" = lit 5 `add` lit 10\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Add",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Add",
          "type": "class"
        },
        "index": {
          "description": "Addition of two values Example in English fifteen lit add lit",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Add",
          "package": "numerals",
          "partial": "Add",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dual of a value.\n\u003c/p\u003e\u003cp\u003eThis is used in some languages that express some values as the dual\n of a smaller value. For instance, in Hebrew the number 20 is\n expressed as the dual of 10.\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Dual",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Dual",
          "type": "class"
        },
        "index": {
          "description": "dual of value This is used in some languages that express some values as the dual of smaller value For instance in Hebrew the number is expressed as the dual of",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Dual",
          "package": "numerals",
          "partial": "Dual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fraction.\n\u003c/p\u003e\u003cp\u003eExample in English:\n\u003c/p\u003e\u003cpre\u003e \"two thirds\" = `frac` (lit 2) (lit 3)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Frac",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Frac",
          "type": "class"
        },
        "index": {
          "description": "fraction Example in English two thirds frac lit lit",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Frac",
          "package": "numerals",
          "partial": "Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Frac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA change of inflection.\n\u003c/p\u003e\u003cp\u003eThis is used in a language like Spanish where the inflection of a\n number word is not always constant. Specifically, in Spanish, large\n number names always have the masculine gender. So 'mill&#243;n',\n 'bill&#243;n' and the like are all masculine. This can result in the\n following number word: 10000001 = \u003ca\u003eun (masculine) mill&#243;n una\n (feminine)\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Inflection",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Inflection",
          "type": "class"
        },
        "index": {
          "description": "change of inflection This is used in language like Spanish where the inflection of number word is not always constant Specifically in Spanish large number names always have the masculine gender So mill bill and the like are all masculine This can result in the following number word un masculine mill una feminine",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Inflection",
          "package": "numerals",
          "partial": "Inflection",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal value.\n\u003c/p\u003e\u003cp\u003eExample in English:\n\u003c/p\u003e\u003cpre\u003e \"three\" = lit 3\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Lit",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Lit",
          "type": "class"
        },
        "index": {
          "description": "literal value Example in English three lit",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Lit",
          "package": "numerals",
          "partial": "Lit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication of two values.\n\u003c/p\u003e\u003cp\u003eExample in English:\n\u003c/p\u003e\u003cpre\u003e \"thirty\" = lit 3 `mul` lit 10\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Mul",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Mul",
          "type": "class"
        },
        "index": {
          "description": "Multiplication of two values Example in English thirty lit mul lit",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Mul",
          "package": "numerals",
          "partial": "Mul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation of a value.\n\u003c/p\u003e\u003cp\u003eExample in English:\n\u003c/p\u003e\u003cpre\u003e \"minus two\" = neg (lit 2)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Neg",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Neg",
          "type": "class"
        },
        "index": {
          "description": "Negation of value Example in English minus two neg lit",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Neg",
          "package": "numerals",
          "partial": "Neg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plural of a value.\n\u003c/p\u003e\u003cp\u003eThis is used in some languages that express some values as the\n plural of a smaller value. For instance, in Hebrew the numbers\n [30,40..90] are expressed as the plurals of [3..9].\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Plural",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Plural",
          "type": "class"
        },
        "index": {
          "description": "plural of value This is used in some languages that express some values as the plural of smaller value For instance in Hebrew the numbers are expressed as the plurals of",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Plural",
          "package": "numerals",
          "partial": "Plural",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step in a scale of large values.\n\u003c/p\u003e\u003cp\u003eShould be interpreted as \u003ccode\u003e10 ^ (rank * base + offset)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample in English:\n\u003c/p\u003e\u003cpre\u003e \"quadrillion\" = scale 3 3 4\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Scale",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Scale",
          "type": "class"
        },
        "index": {
          "description": "step in scale of large values Should be interpreted as rank base offset Example in English quadrillion scale",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Scale",
          "package": "numerals",
          "partial": "Scale",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne value subtracted from another value.\n\u003c/p\u003e\u003cp\u003eExample in Latin:\n\u003c/p\u003e\u003cpre\u003e \"duod&#275;v&#299;gint&#299;\" = lit 2 `sub` (lit 2 `mul` lit 10)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Sub",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Sub",
          "type": "class"
        },
        "index": {
          "description": "One value subtracted from another value Example in Latin duod gint lit sub lit mul lit",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Sub",
          "package": "numerals",
          "partial": "Sub",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unknown value. This is used to signal that a value can not be\n represented in the expression language.\n\u003c/p\u003e\u003cp\u003eLaw: isUnknown unknown == True\n\u003c/p\u003e",
          "module": "Text.Numeral.Exp",
          "name": "Unknown",
          "package": "numerals",
          "source": "src/Text-Numeral-Exp.html#Unknown",
          "type": "class"
        },
        "index": {
          "description": "An unknown value This is used to signal that value can not be represented in the expression language Law isUnknown unknown True",
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "Unknown",
          "package": "numerals",
          "partial": "Unknown",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#t:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "add",
          "package": "numerals",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "add",
          "normalized": "a-\u003ea-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "dual",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#dual",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "dual",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "frac",
          "package": "numerals",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#frac",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "frac",
          "normalized": "a-\u003ea-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:frac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "inflection",
          "package": "numerals",
          "signature": "(Inf α -\u003e Inf α) -\u003e α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#inflection",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "inflection",
          "normalized": "(Inf a-\u003eInf a)-\u003ea-\u003ea",
          "package": "numerals",
          "signature": "(Inf α-\u003eInf α)-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "isUnknown",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Exp.html#isUnknown",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "isUnknown",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Unknown",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:isUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "lit",
          "package": "numerals",
          "signature": "ℤ -\u003e α",
          "source": "src/Text-Numeral-Exp.html#lit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "lit",
          "normalized": "ℤ-\u003ea",
          "package": "numerals",
          "signature": "ℤ-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "mul",
          "package": "numerals",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#mul",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "mul",
          "normalized": "a-\u003ea-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "neg",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#neg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "neg",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "plural",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#plural",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "plural",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "scale",
          "package": "numerals",
          "signature": "scale",
          "source": "src/Text-Numeral-Exp.html#scale",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "scale",
          "package": "numerals",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "sub",
          "package": "numerals",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Text-Numeral-Exp.html#sub",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "sub",
          "normalized": "a-\u003ea-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Exp",
          "name": "unknown",
          "package": "numerals",
          "signature": "α",
          "source": "src/Text-Numeral-Exp.html#unknown",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Exp",
          "module": "Text.Numeral.Exp",
          "name": "unknown",
          "package": "numerals",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Exp.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Reified",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar-Reified.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Reified",
          "package": "numerals",
          "partial": "Reified",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Case",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Case",
          "package": "numerals",
          "partial": "Case",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#t:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Gender",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar-Reified.html#Gender",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Gender",
          "package": "numerals",
          "partial": "Gender",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#t:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Inflection",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar-Reified.html#Inflection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Inflection",
          "package": "numerals",
          "partial": "Inflection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#t:Inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Number",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar-Reified.html#Number",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Number",
          "package": "numerals",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Abessive",
          "package": "numerals",
          "signature": "Abessive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Abessive",
          "package": "numerals",
          "partial": "Abessive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Abessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Ablative",
          "package": "numerals",
          "signature": "Ablative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Ablative",
          "package": "numerals",
          "partial": "Ablative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Ablative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Accusative",
          "package": "numerals",
          "signature": "Accusative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Accusative",
          "package": "numerals",
          "partial": "Accusative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Accusative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Comitative",
          "package": "numerals",
          "signature": "Comitative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Comitative",
          "package": "numerals",
          "partial": "Comitative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Comitative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Common",
          "package": "numerals",
          "signature": "Common",
          "source": "src/Text-Numeral-Grammar-Reified.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Common",
          "package": "numerals",
          "partial": "Common",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Common"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Dative",
          "package": "numerals",
          "signature": "Dative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Dative",
          "package": "numerals",
          "partial": "Dative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Dative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Delative",
          "package": "numerals",
          "signature": "Delative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Delative",
          "package": "numerals",
          "partial": "Delative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Delative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Distributive",
          "package": "numerals",
          "signature": "Distributive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Distributive",
          "package": "numerals",
          "partial": "Distributive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Distributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "DistributiveTemporal",
          "package": "numerals",
          "signature": "DistributiveTemporal",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "DistributiveTemporal",
          "package": "numerals",
          "partial": "Distributive Temporal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:DistributiveTemporal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Dual",
          "package": "numerals",
          "signature": "Dual",
          "source": "src/Text-Numeral-Grammar-Reified.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Dual",
          "package": "numerals",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Essive",
          "package": "numerals",
          "signature": "Essive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Essive",
          "package": "numerals",
          "partial": "Essive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Essive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Feminine",
          "package": "numerals",
          "signature": "Feminine",
          "source": "src/Text-Numeral-Grammar-Reified.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Feminine",
          "package": "numerals",
          "partial": "Feminine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Feminine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Genitive",
          "package": "numerals",
          "signature": "Genitive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Genitive",
          "package": "numerals",
          "partial": "Genitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Genitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Inflection",
          "package": "numerals",
          "signature": "Inflection",
          "source": "src/Text-Numeral-Grammar-Reified.html#Inflection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Inflection",
          "package": "numerals",
          "partial": "Inflection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Instructive",
          "package": "numerals",
          "signature": "Instructive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Instructive",
          "package": "numerals",
          "partial": "Instructive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Instructive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Instrumental",
          "package": "numerals",
          "signature": "Instrumental",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Instrumental",
          "package": "numerals",
          "partial": "Instrumental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Instrumental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Lative",
          "package": "numerals",
          "signature": "Lative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Lative",
          "package": "numerals",
          "partial": "Lative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Lative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Locative",
          "package": "numerals",
          "signature": "Locative (Maybe Locative)",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Locative",
          "package": "numerals",
          "partial": "Locative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Locative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Masculine",
          "package": "numerals",
          "signature": "Masculine",
          "source": "src/Text-Numeral-Grammar-Reified.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Masculine",
          "package": "numerals",
          "partial": "Masculine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Masculine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Multiplicative",
          "package": "numerals",
          "signature": "Multiplicative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Multiplicative",
          "package": "numerals",
          "partial": "Multiplicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Neuter",
          "package": "numerals",
          "signature": "Neuter",
          "source": "src/Text-Numeral-Grammar-Reified.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Neuter",
          "package": "numerals",
          "partial": "Neuter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Neuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Nominative",
          "package": "numerals",
          "signature": "Nominative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Nominative",
          "package": "numerals",
          "partial": "Nominative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Nominative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Partitive",
          "package": "numerals",
          "signature": "Partitive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Partitive",
          "package": "numerals",
          "partial": "Partitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Partitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Paucal",
          "package": "numerals",
          "signature": "Paucal",
          "source": "src/Text-Numeral-Grammar-Reified.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Paucal",
          "package": "numerals",
          "partial": "Paucal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Paucal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Plural",
          "package": "numerals",
          "signature": "Plural",
          "source": "src/Text-Numeral-Grammar-Reified.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Plural",
          "package": "numerals",
          "partial": "Plural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Singular",
          "package": "numerals",
          "signature": "Singular",
          "source": "src/Text-Numeral-Grammar-Reified.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Singular",
          "package": "numerals",
          "partial": "Singular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Singular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Sublative",
          "package": "numerals",
          "signature": "Sublative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Sublative",
          "package": "numerals",
          "partial": "Sublative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Sublative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "SuperEssive",
          "package": "numerals",
          "signature": "SuperEssive",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "SuperEssive",
          "package": "numerals",
          "partial": "Super Essive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:SuperEssive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Translative",
          "package": "numerals",
          "signature": "Translative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Translative",
          "package": "numerals",
          "partial": "Translative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Translative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Trial",
          "package": "numerals",
          "signature": "Trial",
          "source": "src/Text-Numeral-Grammar-Reified.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Trial",
          "package": "numerals",
          "partial": "Trial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Trial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Vocative",
          "package": "numerals",
          "signature": "Vocative",
          "source": "src/Text-Numeral-Grammar-Reified.html#Case",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "Vocative",
          "package": "numerals",
          "partial": "Vocative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:Vocative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "defaultInflection",
          "package": "numerals",
          "signature": "Inflection",
          "source": "src/Text-Numeral-Grammar-Reified.html#defaultInflection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "defaultInflection",
          "package": "numerals",
          "partial": "Inflection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:defaultInflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "iCase",
          "package": "numerals",
          "signature": "Maybe Case",
          "source": "src/Text-Numeral-Grammar-Reified.html#Inflection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "iCase",
          "package": "numerals",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:iCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "iGender",
          "package": "numerals",
          "signature": "Maybe Gender",
          "source": "src/Text-Numeral-Grammar-Reified.html#Inflection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "iGender",
          "package": "numerals",
          "partial": "Gender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:iGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar.Reified",
          "name": "iNumber",
          "package": "numerals",
          "signature": "Maybe Number",
          "source": "src/Text-Numeral-Grammar-Reified.html#Inflection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar Reified",
          "module": "Text.Numeral.Grammar.Reified",
          "name": "iNumber",
          "package": "numerals",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar-Reified.html#v:iNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Grammar",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Grammar",
          "package": "numerals",
          "partial": "Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn linguistics, abessive (abbreviated abe or abess), caritive and privative\n (abbreviated priv) are names for a grammatical case expressing the lack or\n absence of the marked noun.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Abessive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Abessive",
          "type": "class"
        },
        "index": {
          "description": "In linguistics abessive abbreviated abe or abess caritive and privative abbreviated priv are names for grammatical case expressing the lack or absence of the marked noun",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Abessive",
          "package": "numerals",
          "partial": "Abessive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Abessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ablative case (abbreviated abl) indicates movement from\n something, or cause.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Ablative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Ablative",
          "type": "class"
        },
        "index": {
          "description": "The ablative case abbreviated abl indicates movement from something or cause",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Ablative",
          "package": "numerals",
          "partial": "Ablative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Ablative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe accusative case (abbreviated acc) indicates the direct object\n of a verb.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Accusative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Accusative",
          "type": "class"
        },
        "index": {
          "description": "The accusative case abbreviated acc indicates the direct object of verb",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Accusative",
          "package": "numerals",
          "partial": "Accusative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Accusative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe comitative case (abbreviated com), also known as the associative case\n (abbreviated ass), is a grammatical case that denotes companionship, and is\n used where English would typically use preposition \u003ca\u003ewith\u003c/a\u003e in the sense of \u003ca\u003ein\n company with\u003c/a\u003e or \u003ca\u003etogether with\u003c/a\u003e (other uses of \u003ca\u003ewith,\u003c/a\u003e e.g. with the meaning\n of \u003ca\u003eusing,\u003c/a\u003e \u003ca\u003eby means of\u003c/a\u003e (I cut bread with a knife) would correspond to the\n instrumental case or related cases).\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Comitative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Comitative",
          "type": "class"
        },
        "index": {
          "description": "The comitative case abbreviated com also known as the associative case abbreviated ass is grammatical case that denotes companionship and is used where English would typically use preposition with in the sense of in company with or together with other uses of with e.g with the meaning of using by means of cut bread with knife would correspond to the instrumental case or related cases",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Comitative",
          "package": "numerals",
          "partial": "Comitative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Comitative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Common",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Common",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Common",
          "package": "numerals",
          "partial": "Common",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Common"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dative case (abbreviated dat, or sometimes d when it is a\n core argument) indicates the indirect object of a verb.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Dative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Dative",
          "type": "class"
        },
        "index": {
          "description": "The dative case abbreviated dat or sometimes when it is core argument indicates the indirect object of verb",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Dative",
          "package": "numerals",
          "partial": "Dative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Dative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe delative case (abbreviated del; from Latin deferre \u003ca\u003eto bear or bring\n away or down\u003c/a\u003e) in the Hungarian language can originally express the movement\n from the surface of something (e.g. \u003ca\u003eoff the table\u003c/a\u003e), but it is used in\n several other meanings (e.g. \u003ca\u003eabout people\u003c/a\u003e), some of them related to the\n original (e.g. \u003ca\u003efrom the post office\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Delative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Delative",
          "type": "class"
        },
        "index": {
          "description": "The delative case abbreviated del from Latin deferre to bear or bring away or down in the Hungarian language can originally express the movement from the surface of something e.g off the table but it is used in several other meanings e.g about people some of them related to the original e.g from the post office",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Delative",
          "package": "numerals",
          "partial": "Delative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Delative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distributive case (abbreviated distr) is used on nouns for the meanings\n of per or each.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Distributive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Distributive",
          "type": "class"
        },
        "index": {
          "description": "The distributive case abbreviated distr is used on nouns for the meanings of per or each",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Distributive",
          "package": "numerals",
          "partial": "Distributive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Distributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distributive-temporal case specifies when something is done.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "DistributiveTemporal",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#DistributiveTemporal",
          "type": "class"
        },
        "index": {
          "description": "The distributive-temporal case specifies when something is done",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "DistributiveTemporal",
          "package": "numerals",
          "partial": "Distributive Temporal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:DistributiveTemporal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Dual",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Dual",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Dual",
          "package": "numerals",
          "partial": "Dual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe essive or similaris case (abbreviated ess) carries the meaning of a\n temporary location or state of being, often equivalent to the English \u003ca\u003eas a\n (child)\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Essive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Essive",
          "type": "class"
        },
        "index": {
          "description": "The essive or similaris case abbreviated ess carries the meaning of temporary location or state of being often equivalent to the English as child",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Essive",
          "package": "numerals",
          "partial": "Essive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Essive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Feminine",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Feminine",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Feminine",
          "package": "numerals",
          "partial": "Feminine",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Feminine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe genitive case (abbreviated gen; also called the possessive\n case or second case), which roughly corresponds to English's\n possessive case and preposition of, indicates the possessor of\n another noun.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Genitive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Genitive",
          "type": "class"
        },
        "index": {
          "description": "The genitive case abbreviated gen also called the possessive case or second case which roughly corresponds to English possessive case and preposition of indicates the possessor of another noun",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Genitive",
          "package": "numerals",
          "partial": "Genitive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Genitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase class for various kinds of inflections.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Inflection",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Inflection",
          "type": "class"
        },
        "index": {
          "description": "Base class for various kinds of inflections",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Inflection",
          "package": "numerals",
          "partial": "Inflection",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the Finnish language and Estonian language, the instructive case has the\n basic meaning of \u003ca\u003eby means of\u003c/a\u003e. It is a comparatively rarely used case,\n though it is found in some commonly used expressions, such as omin silmin &#8594; \u003ca\u003ewith one's own eyes\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Instructive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Instructive",
          "type": "class"
        },
        "index": {
          "description": "In the Finnish language and Estonian language the instructive case has the basic meaning of by means of It is comparatively rarely used case though it is found in some commonly used expressions such as omin silmin with one own eyes",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Instructive",
          "package": "numerals",
          "partial": "Instructive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Instructive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe instrumental case (abbreviated ins or instr; also called the\n eighth case) indicates an object used in performing an action.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Instrumental",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Instrumental",
          "type": "class"
        },
        "index": {
          "description": "The instrumental case abbreviated ins or instr also called the eighth case indicates an object used in performing an action",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Instrumental",
          "package": "numerals",
          "partial": "Instrumental",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Instrumental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLative (abbreviated lat) is a case which indicates motion to a location. It\n corresponds to the English prepositions \u003ca\u003eto\u003c/a\u003e and \u003ca\u003einto\u003c/a\u003e. The lative case\n belongs to the group of the general local cases together with the locative\n and separative case. The term derives from the Latin lat-, the participle\n stem of ferre, \u003ca\u003eto bring\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Lative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Lative",
          "type": "class"
        },
        "index": {
          "description": "Lative abbreviated lat is case which indicates motion to location It corresponds to the English prepositions to and into The lative case belongs to the group of the general local cases together with the locative and separative case The term derives from the Latin lat the participle stem of ferre to bring",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Lative",
          "package": "numerals",
          "partial": "Lative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Lative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe locative case (abbreviated loc) indicates a location.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Locative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Locative",
          "type": "class"
        },
        "index": {
          "description": "The locative case abbreviated loc indicates location",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Locative",
          "package": "numerals",
          "partial": "Locative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Locative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn linguistics, ablative case (abbreviated abl) is a name given to cases in\n various languages whose common characteristic is that they mark motion away\n from something, though the details in each language may differ. The name\n \u003ca\u003eablative\u003c/a\u003e derives from the Latin ablatus, the (irregular) perfect passive\n participle of auferre \u003ca\u003eto carry away\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeAblative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#LocativeAblative",
          "type": "class"
        },
        "index": {
          "description": "In linguistics ablative case abbreviated abl is name given to cases in various languages whose common characteristic is that they mark motion away from something though the details in each language may differ The name ablative derives from the Latin ablatus the irregular perfect passive participle of auferre to carry away",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeAblative",
          "package": "numerals",
          "partial": "Locative Ablative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:LocativeAblative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn Uralic languages, such as Finnish, Estonian and Hungarian, the adessive\n case (abbreviated ade; from Latin adesse \u003ca\u003eto be present\u003c/a\u003e) is the fourth of\n the locative cases with the basic meaning of \u003ca\u003eon\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeAdessive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#LocativeAdessive",
          "type": "class"
        },
        "index": {
          "description": "In Uralic languages such as Finnish Estonian and Hungarian the adessive case abbreviated ade from Latin adesse to be present is the fourth of the locative cases with the basic meaning of on",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeAdessive",
          "package": "numerals",
          "partial": "Locative Adessive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:LocativeAdessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllative case (abbreviated all; from Latin all&#257;t-, afferre \u003ca\u003eto bring to\u003c/a\u003e)\n is a type of the locative cases used in several languages. The term allative\n is generally used for the lative case in the majority of languages which do\n not make finer distinctions.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeAllative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#LocativeAllative",
          "type": "class"
        },
        "index": {
          "description": "Allative case abbreviated all from Latin all afferre to bring to is type of the locative cases used in several languages The term allative is generally used for the lative case in the majority of languages which do not make finer distinctions",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeAllative",
          "package": "numerals",
          "partial": "Locative Allative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:LocativeAllative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElative (abbreviated ela; from Latin efferre \u003ca\u003eto bring or carry out\u003c/a\u003e) is a\n locative case with the basic meaning \u003ca\u003eout of\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeElative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#LocativeElative",
          "type": "class"
        },
        "index": {
          "description": "Elative abbreviated ela from Latin efferre to bring or carry out is locative case with the basic meaning out of",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeElative",
          "package": "numerals",
          "partial": "Locative Elative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:LocativeElative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIllative (abbreviated ill; from Latin illatus \u003ca\u003ebrought in\u003c/a\u003e) is, in the\n Finnish language, Estonian language and the Hungarian language, the third of\n the locative cases with the basic meaning of \u003ca\u003einto (the inside of)\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeIllative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#LocativeIllative",
          "type": "class"
        },
        "index": {
          "description": "Illative abbreviated ill from Latin illatus brought in is in the Finnish language Estonian language and the Hungarian language the third of the locative cases with the basic meaning of into the inside of",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeIllative",
          "package": "numerals",
          "partial": "Locative Illative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:LocativeIllative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInessive case (abbreviated ine; from Latin inesse \u003ca\u003eto be in or at\u003c/a\u003e) is a\n locative grammatical case. This case carries the basic meaning of \u003ca\u003ein\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeInessive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#LocativeInessive",
          "type": "class"
        },
        "index": {
          "description": "Inessive case abbreviated ine from Latin inesse to be in or at is locative grammatical case This case carries the basic meaning of in",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "LocativeInessive",
          "package": "numerals",
          "partial": "Locative Inessive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:LocativeInessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Masculine",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Masculine",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Masculine",
          "package": "numerals",
          "partial": "Masculine",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Masculine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe multiplicative case is a grammatical case used for marking a number of\n something (\u003ca\u003ethree times\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Multiplicative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Multiplicative",
          "type": "class"
        },
        "index": {
          "description": "The multiplicative case is grammatical case used for marking number of something three times",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Multiplicative",
          "package": "numerals",
          "partial": "Multiplicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Neuter",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Neuter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Neuter",
          "package": "numerals",
          "partial": "Neuter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Neuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "NoCase",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#NoCase",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "NoCase",
          "package": "numerals",
          "partial": "No Case",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:NoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "NoGender",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#NoGender",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "NoGender",
          "package": "numerals",
          "partial": "No Gender",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:NoGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "NoNumber",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#NoNumber",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "NoNumber",
          "package": "numerals",
          "partial": "No Number",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:NoNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nominative case (abbreviated nom) indicates the subject of a\n finite verb.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Nominative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Nominative",
          "type": "class"
        },
        "index": {
          "description": "The nominative case abbreviated nom indicates the subject of finite verb",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Nominative",
          "package": "numerals",
          "partial": "Nominative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Nominative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe partitive case (abbreviated ptv or more ambiguously part)\n denotes \u003ca\u003epartialness\u003c/a\u003e, \u003ca\u003ewithout result\u003c/a\u003e, or \u003ca\u003ewithout specific\n identity\u003c/a\u003e. It is also used in contexts where a subgroup is selected\n from a larger group, or with numbers.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Partitive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Partitive",
          "type": "class"
        },
        "index": {
          "description": "The partitive case abbreviated ptv or more ambiguously part denotes partialness without result or without specific identity It is also used in contexts where subgroup is selected from larger group or with numbers",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Partitive",
          "package": "numerals",
          "partial": "Partitive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Partitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Paucal",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Paucal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Paucal",
          "package": "numerals",
          "partial": "Paucal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Paucal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Plural",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Plural",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Plural",
          "package": "numerals",
          "partial": "Plural",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Singular",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Singular",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Singular",
          "package": "numerals",
          "partial": "Singular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Singular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe term sublative case (abbreviated subl) is used to refer to grammatical\n cases expressing different situations: In Hungarian, it expresses the\n destination of the movement, originally to the surface of something (e.g. sit\n down on the ground, climb the tree), but in other figurative meanings as well\n (e.g. to university, for two nights), while in Tsez and other Northeast\n Caucasian languages it denotes a movement towards the bottomsides or the area\n under an object. The sublative case is used in the Finnish, Tsez and\n Hungarian languages.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Sublative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Sublative",
          "type": "class"
        },
        "index": {
          "description": "The term sublative case abbreviated subl is used to refer to grammatical cases expressing different situations In Hungarian it expresses the destination of the movement originally to the surface of something e.g sit down on the ground climb the tree but in other figurative meanings as well e.g to university for two nights while in Tsez and other Northeast Caucasian languages it denotes movement towards the bottomsides or the area under an object The sublative case is used in the Finnish Tsez and Hungarian languages",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Sublative",
          "package": "numerals",
          "partial": "Sublative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Sublative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Superessive case (abbreviated supe) is a grammatical declension\n indicating location on top of, or on the surface of something. Its name comes\n from Latin supersum, superesse: to be over and above.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "SuperEssive",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#SuperEssive",
          "type": "class"
        },
        "index": {
          "description": "The Superessive case abbreviated supe is grammatical declension indicating location on top of or on the surface of something Its name comes from Latin supersum superesse to be over and above",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "SuperEssive",
          "package": "numerals",
          "partial": "Super Essive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:SuperEssive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe translative case (abbreviated transl) is a grammatical case that\n indicates a change in state of a noun, with the general sense of \u003ca\u003ebecoming X\u003c/a\u003e\n or \u003ca\u003echange to X\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Translative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Translative",
          "type": "class"
        },
        "index": {
          "description": "The translative case abbreviated transl is grammatical case that indicates change in state of noun with the general sense of becoming or change to",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Translative",
          "package": "numerals",
          "partial": "Translative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Translative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "Trial",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Trial",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Trial",
          "package": "numerals",
          "partial": "Trial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Trial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vocative case indicates an addressee.\n\u003c/p\u003e",
          "module": "Text.Numeral.Grammar",
          "name": "Vocative",
          "package": "numerals",
          "source": "src/Text-Numeral-Grammar.html#Vocative",
          "type": "class"
        },
        "index": {
          "description": "The vocative case indicates an addressee",
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "Vocative",
          "package": "numerals",
          "partial": "Vocative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#t:Vocative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "abessive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#abessive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "abessive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:abessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "ablative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#ablative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "ablative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:ablative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "accusative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#accusative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "accusative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:accusative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "comitative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#comitative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "comitative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:comitative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "common",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#common",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "common",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:common"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "dative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#dative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "dative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:dative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "delative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#delative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "delative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:delative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "distributive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#distributive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "distributive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:distributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "distributiveTemporal",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#distributiveTemporal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "distributiveTemporal",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Temporal",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:distributiveTemporal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "dual",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#dual",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "dual",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "essive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#essive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "essive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:essive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "feminine",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#feminine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "feminine",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:feminine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "genitive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#genitive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "genitive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:genitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "hasNoCase",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#hasNoCase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "hasNoCase",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "No Case",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:hasNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "hasNoGender",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#hasNoGender",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "hasNoGender",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "No Gender",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:hasNoGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "hasNoNumber",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#hasNoNumber",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "hasNoNumber",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "No Number",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:hasNoNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "instructive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#instructive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "instructive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:instructive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "instrumental",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#instrumental",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "instrumental",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:instrumental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isAbessive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isAbessive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isAbessive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Abessive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isAbessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isAblative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isAblative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isAblative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Ablative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isAblative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isAccusative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isAccusative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isAccusative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Accusative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isAccusative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isComitative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isComitative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isComitative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Comitative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isComitative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isCommon",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isCommon",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isCommon",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Common",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isCommon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isDative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isDative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isDative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Dative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isDative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isDelative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isDelative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isDelative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Delative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isDelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isDistributive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isDistributive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isDistributive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Distributive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isDistributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isDistributiveTemporal",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isDistributiveTemporal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isDistributiveTemporal",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Distributive Temporal",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isDistributiveTemporal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isDual",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isDual",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isDual",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Dual",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isEssive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isEssive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isEssive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Essive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isEssive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isFeminine",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isFeminine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isFeminine",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Feminine",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isFeminine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isGenitive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isGenitive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isGenitive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Genitive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isGenitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isInstructive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isInstructive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isInstructive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Instructive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isInstructive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isInstrumental",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isInstrumental",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isInstrumental",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Instrumental",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isInstrumental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Lative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeAblative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocativeAblative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeAblative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative Ablative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocativeAblative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeAdessive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocativeAdessive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeAdessive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative Adessive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocativeAdessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeAllative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocativeAllative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeAllative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative Allative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocativeAllative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeElative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocativeElative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeElative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative Elative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocativeElative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeIllative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocativeIllative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeIllative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative Illative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocativeIllative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeInessive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isLocativeInessive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isLocativeInessive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Locative Inessive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isLocativeInessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isMasculine",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isMasculine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isMasculine",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Masculine",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isMasculine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isMultiplicative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isMultiplicative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isMultiplicative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Multiplicative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isMultiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isNeuter",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isNeuter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isNeuter",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Neuter",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isNeuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isNominative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isNominative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isNominative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Nominative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isNominative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isPartitive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isPartitive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isPartitive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Partitive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isPartitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isPaucal",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isPaucal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isPaucal",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Paucal",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isPaucal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isPlural",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isPlural",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isPlural",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Plural",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isPlural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isSingular",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isSingular",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isSingular",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Singular",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isSingular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isSublative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isSublative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isSublative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Sublative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isSublative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isSuperEssive",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isSuperEssive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isSuperEssive",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Super Essive",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isSuperEssive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isTranslative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isTranslative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isTranslative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Translative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isTranslative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isTrial",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isTrial",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isTrial",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Trial",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isTrial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "isVocative",
          "package": "numerals",
          "signature": "α -\u003e Bool",
          "source": "src/Text-Numeral-Grammar.html#isVocative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "isVocative",
          "normalized": "a-\u003eBool",
          "package": "numerals",
          "partial": "Vocative",
          "signature": "α-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:isVocative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "lative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#lative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "lative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:lative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locativeAblative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locativeAblative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locativeAblative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Ablative",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locativeAblative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locativeAdessive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locativeAdessive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locativeAdessive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Adessive",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locativeAdessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locativeAllative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locativeAllative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locativeAllative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Allative",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locativeAllative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locativeElative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locativeElative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locativeElative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Elative",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locativeElative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locativeIllative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locativeIllative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locativeIllative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Illative",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locativeIllative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "locativeInessive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#locativeInessive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "locativeInessive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Inessive",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:locativeInessive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "masculine",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#masculine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "masculine",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:masculine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "multiplicative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#multiplicative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "multiplicative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "neuter",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#neuter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "neuter",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:neuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "noCase",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#noCase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "noCase",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Case",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:noCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "noGender",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#noGender",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "noGender",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Gender",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:noGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "noNumber",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#noNumber",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "noNumber",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Number",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:noNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "nominative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#nominative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "nominative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:nominative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "partitive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#partitive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "partitive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:partitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "paucal",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#paucal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "paucal",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:paucal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "plural",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#plural",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "plural",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "singular",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#singular",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "singular",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:singular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "sublative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#sublative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "sublative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:sublative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "superEssive",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#superEssive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "superEssive",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Essive",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:superEssive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "translative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#translative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "translative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:translative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "trial",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#trial",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "trial",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:trial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Grammar",
          "name": "vocative",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Grammar.html#vocative",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Grammar",
          "module": "Text.Numeral.Grammar",
          "name": "vocative",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Grammar.html#v:vocative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        af\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        afr\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        afr\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Afrikaans\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Afrikaans\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.AF",
          "name": "AF",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-AF.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 af ISO639-2 afr ISO639-3 afr Native name Afrikaans English name Afrikaans",
          "hierarchy": "Text Numeral Language AF",
          "module": "Text.Numeral.Language.AF",
          "name": "AF",
          "package": "numerals",
          "partial": "AF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AF",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-AF.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AF",
          "module": "Text.Numeral.Language.AF",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AF.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AF",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-AF.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AF",
          "module": "Text.Numeral.Language.AF",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AF.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AF",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-AF.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AF",
          "module": "Text.Numeral.Language.AF",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AF.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AF",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-AF.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AF",
          "module": "Text.Numeral.Language.AF",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AF.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AF",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-AF.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AF",
          "module": "Text.Numeral.Language.AF",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AF.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        amp\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Alamblak\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.AMP",
          "name": "AMP",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-AMP.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 ISO639-3 amp Native name English name Alamblak",
          "hierarchy": "Text Numeral Language AMP",
          "module": "Text.Numeral.Language.AMP",
          "name": "AMP",
          "package": "numerals",
          "partial": "AMP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AMP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AMP",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-AMP.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AMP",
          "module": "Text.Numeral.Language.AMP",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AMP.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AMP",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-AMP.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AMP",
          "module": "Text.Numeral.Language.AMP",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AMP.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AMP",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-AMP.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AMP",
          "module": "Text.Numeral.Language.AMP",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AMP.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.AMP",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-AMP.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language AMP",
          "module": "Text.Numeral.Language.AMP",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-AMP.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.BG",
          "name": "BG",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-BG.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Language BG",
          "module": "Text.Numeral.Language.BG",
          "name": "BG",
          "package": "numerals",
          "partial": "BG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-BG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.BG",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-BG.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language BG",
          "module": "Text.Numeral.Language.BG",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-BG.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.BG",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-BG.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language BG",
          "module": "Text.Numeral.Language.BG",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-BG.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.BG",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-BG.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language BG",
          "module": "Text.Numeral.Language.BG",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-BG.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.BG",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-BG.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language BG",
          "module": "Text.Numeral.Language.BG",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-BG.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       chn\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        chn\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     chinuk wawa\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Chinook Jargon\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.CHN",
          "name": "CHN",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-CHN.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2B chn ISO639-3 chn Native name chinuk wawa English name Chinook Jargon",
          "hierarchy": "Text Numeral Language CHN",
          "module": "Text.Numeral.Language.CHN",
          "name": "CHN",
          "package": "numerals",
          "partial": "CHN",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHN.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHN",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-CHN.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHN",
          "module": "Text.Numeral.Language.CHN",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHN.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHN",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-CHN.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHN",
          "module": "Text.Numeral.Language.CHN",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHN.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHN",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-CHN.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHN",
          "module": "Text.Numeral.Language.CHN",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHN.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHN",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-CHN.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHN",
          "module": "Text.Numeral.Language.CHN",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHN.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        chr\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        chr\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#5091;&#5043;&#5033; &#5030;&#5100;&#5058;&#5039;&#5069;&#5079; (Tsalagi Gawonihis\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Cherokee\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.CHR",
          "name": "CHR",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-CHR.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 chr ISO639-3 chr Native name Tsalagi Gawonihis English name Cherokee",
          "hierarchy": "Text Numeral Language CHR",
          "module": "Text.Numeral.Language.CHR",
          "name": "CHR",
          "package": "numerals",
          "partial": "CHR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHR",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-CHR.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHR",
          "module": "Text.Numeral.Language.CHR",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHR.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHR",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-CHR.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHR",
          "module": "Text.Numeral.Language.CHR",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHR.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHR",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-CHR.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHR",
          "module": "Text.Numeral.Language.CHR",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHR.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CHR",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-CHR.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CHR",
          "module": "Text.Numeral.Language.CHR",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHR.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransliterates a string written in the Cherokee syllabary to the\n latin alphabet.\n\u003c/p\u003e",
          "module": "Text.Numeral.Language.CHR",
          "name": "transliterate",
          "package": "numerals",
          "signature": "Text -\u003e Text",
          "source": "src/Text-Numeral-Language-CHR.html#transliterate",
          "type": "function"
        },
        "index": {
          "description": "Transliterates string written in the Cherokee syllabary to the latin alphabet",
          "hierarchy": "Text Numeral Language CHR",
          "module": "Text.Numeral.Language.CHR",
          "name": "transliterate",
          "normalized": "Text-\u003eText",
          "package": "numerals",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CHR.html#v:transliterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        clm\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     n&#601;x&#695;s&#411;&#789;ay&#789;&#601;m&#250;c&#601;\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Klallam\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.CLM",
          "name": "CLM",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-CLM.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2B ISO639-3 clm Native name ay English name Klallam",
          "hierarchy": "Text Numeral Language CLM",
          "module": "Text.Numeral.Language.CLM",
          "name": "CLM",
          "package": "numerals",
          "partial": "CLM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CLM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CLM",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-CLM.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CLM",
          "module": "Text.Numeral.Language.CLM",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CLM.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CLM",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-CLM.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CLM",
          "module": "Text.Numeral.Language.CLM",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CLM.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CLM",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-CLM.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CLM",
          "module": "Text.Numeral.Language.CLM",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CLM.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CLM",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-CLM.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CLM",
          "module": "Text.Numeral.Language.CLM",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CLM.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        cs\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       cze\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2T\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       ces\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        ces\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#268;e&#353;tina\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Czech\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.CS",
          "name": "CS",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-CS.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 cs ISO639-2B cze ISO639-2T ces ISO639-3 ces Native name tina English name Czech",
          "hierarchy": "Text Numeral Language CS",
          "module": "Text.Numeral.Language.CS",
          "name": "CS",
          "package": "numerals",
          "partial": "CS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CS",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-CS.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CS",
          "module": "Text.Numeral.Language.CS",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CS.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CS",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-CS.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CS",
          "module": "Text.Numeral.Language.CS",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CS.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.CS",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-CS.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language CS",
          "module": "Text.Numeral.Language.CS",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CS.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Numeral.Language.CS\",\"Text.Numeral.Language.PL\"]",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-PL.html#struct",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CS.html#v:struct\",\"http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PL.html#v:struct\"]"
        },
        "index": {
          "hierarchy": "Text Numeral Language CS",
          "module": "Text.Numeral.Language.CS",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-CS.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        de\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       ger\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2T\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       deu\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        deu\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Deutsch\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    German\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.DE",
          "name": "DE",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-DE.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 de ISO639-2B ger ISO639-2T deu ISO639-3 deu Native name Deutsch English name German",
          "hierarchy": "Text Numeral Language DE",
          "module": "Text.Numeral.Language.DE",
          "name": "DE",
          "package": "numerals",
          "partial": "DE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.DE",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-DE.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language DE",
          "module": "Text.Numeral.Language.DE",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.DE",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-DE.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language DE",
          "module": "Text.Numeral.Language.DE",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.DE",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-DE.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language DE",
          "module": "Text.Numeral.Language.DE",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.DE",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-DE.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language DE",
          "module": "Text.Numeral.Language.DE",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Numeral.Language.DE\",\"Text.Numeral.Language.GSW\"]",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-DE.html#struct",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#v:struct\",\"http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GSW.html#v:struct\"]"
        },
        "index": {
          "hierarchy": "Text Numeral Language DE",
          "module": "Text.Numeral.Language.DE",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-DE.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        en\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       eng\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        eng\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     English\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    English\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.EN",
          "name": "EN",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-EN.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 en ISO639-2B eng ISO639-3 eng Native name English English name English",
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "EN",
          "package": "numerals",
          "partial": "EN",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-EN.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "gbPelletier_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-EN.html#gbPelletier_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "gbPelletier_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "partial": "Pelletier",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:gbPelletier_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "gb_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-EN.html#gb_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "gb_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:gb_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "gb_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-EN.html#gb_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "gb_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:gb_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "gb_ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-EN.html#gb_ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "gb_ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:gb_ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "pelletierScaleStruct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-EN.html#pelletierScaleStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "pelletierScaleStruct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "partial": "Scale Struct",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:pelletierScaleStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "shortScaleStruct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-EN.html#shortScaleStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "shortScaleStruct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "partial": "Scale Struct",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:shortScaleStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "us_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-EN.html#us_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "us_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:us_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "us_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-EN.html#us_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "us_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:us_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EN",
          "name": "us_ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-EN.html#us_ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EN",
          "module": "Text.Numeral.Language.EN",
          "name": "us_ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EN.html#v:us_ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        eo\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       epo\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        epo\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Esperanto\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Esperanto\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.EO",
          "name": "EO",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-EO.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 eo ISO639-2B epo ISO639-3 epo Native name Esperanto English name Esperanto",
          "hierarchy": "Text Numeral Language EO",
          "module": "Text.Numeral.Language.EO",
          "name": "EO",
          "package": "numerals",
          "partial": "EO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EO",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-EO.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EO",
          "module": "Text.Numeral.Language.EO",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EO.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EO",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-EO.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EO",
          "module": "Text.Numeral.Language.EO",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EO.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EO",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-EO.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EO",
          "module": "Text.Numeral.Language.EO",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EO.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.EO",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-EO.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language EO",
          "module": "Text.Numeral.Language.EO",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-EO.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        es\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       spa\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        spa\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Espa&#241;ol\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Spanish\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.ES",
          "name": "ES",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-ES.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 es ISO639-2B spa ISO639-3 spa Native name Espa ol English name Spanish",
          "hierarchy": "Text Numeral Language ES",
          "module": "Text.Numeral.Language.ES",
          "name": "ES",
          "package": "numerals",
          "partial": "ES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ES",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-ES.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ES",
          "module": "Text.Numeral.Language.ES",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ES.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ES",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-ES.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ES",
          "module": "Text.Numeral.Language.ES",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ES.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ES",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-ES.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ES",
          "module": "Text.Numeral.Language.ES",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ES.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ES",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-ES.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ES",
          "module": "Text.Numeral.Language.ES",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ES.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.Entries",
          "name": "Entries",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-Entries.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Language Entries",
          "module": "Text.Numeral.Language.Entries",
          "name": "Entries",
          "package": "numerals",
          "partial": "Entries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-Entries.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.Entries",
          "name": "entries",
          "package": "numerals",
          "signature": "[Entry]",
          "source": "src/Text-Numeral-Language-Entries.html#entries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language Entries",
          "module": "Text.Numeral.Language.Entries",
          "name": "entries",
          "normalized": "[Entry]",
          "package": "numerals",
          "signature": "[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-Entries.html#v:entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        fi\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       fin\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        fin\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     suomi\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Finnish\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.FI",
          "name": "FI",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-FI.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 fi ISO639-2B fin ISO639-3 fin Native name suomi English name Finnish",
          "hierarchy": "Text Numeral Language FI",
          "module": "Text.Numeral.Language.FI",
          "name": "FI",
          "package": "numerals",
          "partial": "FI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FI",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-FI.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FI",
          "module": "Text.Numeral.Language.FI",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FI.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FI",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-FI.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FI",
          "module": "Text.Numeral.Language.FI",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FI.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FI",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-FI.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FI",
          "module": "Text.Numeral.Language.FI",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FI.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FI",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-FI.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FI",
          "module": "Text.Numeral.Language.FI",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FI.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FI",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-FI.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FI",
          "module": "Text.Numeral.Language.FI",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FI.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        fr\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       fre\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        fra\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Fran&#231;ais\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    French\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.FR",
          "name": "FR",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-FR.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 fr ISO639-2B fre ISO639-3 fra Native name Fran ais English name French",
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "FR",
          "package": "numerals",
          "partial": "FR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FR",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-FR.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FR",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-FR.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FR",
          "name": "cardinalStruct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-FR.html#cardinalStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "cardinalStruct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "partial": "Struct",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#v:cardinalStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FR",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-FR.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FR",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-FR.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FR",
          "name": "ordinalStruct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-FR.html#ordinalStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FR",
          "module": "Text.Numeral.Language.FR",
          "name": "ordinalStruct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "partial": "Struct",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FR.html#v:ordinalStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        fur\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        fur\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Furlan\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Friulan\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.FUR",
          "name": "FUR",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-FUR.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 fur ISO639-3 fur Native name Furlan English name Friulan",
          "hierarchy": "Text Numeral Language FUR",
          "module": "Text.Numeral.Language.FUR",
          "name": "FUR",
          "package": "numerals",
          "partial": "FUR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FUR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FUR",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-FUR.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FUR",
          "module": "Text.Numeral.Language.FUR",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FUR.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FUR",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-FUR.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FUR",
          "module": "Text.Numeral.Language.FUR",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FUR.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.FUR",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-FUR.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language FUR",
          "module": "Text.Numeral.Language.FUR",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FUR.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Numeral.Language.FUR\",\"Text.Numeral.Language.LLD\"]",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-FUR.html#struct",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FUR.html#v:struct\",\"http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LLD.html#v:struct\"]"
        },
        "index": {
          "hierarchy": "Text Numeral Language FUR",
          "module": "Text.Numeral.Language.FUR",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-FUR.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        gse\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        gse\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Schwyzerd&#252;tsch\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Swiss German\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.GSW",
          "name": "GSW",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-GSW.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 gse ISO639-3 gse Native name Schwyzerd tsch English name Swiss German",
          "hierarchy": "Text Numeral Language GSW",
          "module": "Text.Numeral.Language.GSW",
          "name": "GSW",
          "package": "numerals",
          "partial": "GSW",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GSW.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GSW",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-GSW.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GSW",
          "module": "Text.Numeral.Language.GSW",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GSW.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GSW",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-GSW.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GSW",
          "module": "Text.Numeral.Language.GSW",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GSW.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GSW",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-GSW.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GSW",
          "module": "Text.Numeral.Language.GSW",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GSW.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        gv\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        glv\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        glv\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Gaelg\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Manx\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.GV",
          "name": "GV",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-GV.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 gv ISO639-2 glv ISO639-3 glv Native name Gaelg English name Manx",
          "hierarchy": "Text Numeral Language GV",
          "module": "Text.Numeral.Language.GV",
          "name": "GV",
          "package": "numerals",
          "partial": "GV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GV",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-GV.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GV",
          "module": "Text.Numeral.Language.GV",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GV.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GV",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-GV.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GV",
          "module": "Text.Numeral.Language.GV",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GV.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GV",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-GV.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GV",
          "module": "Text.Numeral.Language.GV",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GV.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.GV",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-GV.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language GV",
          "module": "Text.Numeral.Language.GV",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-GV.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        he\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        heb\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        heb\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#1506;&#1460;&#1489;&#1456;&#1512;&#1460;\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Modern Hebrew\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.HE",
          "name": "HE",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-HE.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 he ISO639-2 heb ISO639-3 heb Native name English name Modern Hebrew",
          "hierarchy": "Text Numeral Language HE",
          "module": "Text.Numeral.Language.HE",
          "name": "HE",
          "package": "numerals",
          "partial": "HE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HE",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-HE.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HE",
          "module": "Text.Numeral.Language.HE",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HE.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HE",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-HE.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HE",
          "module": "Text.Numeral.Language.HE",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HE.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HE",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-HE.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HE",
          "module": "Text.Numeral.Language.HE",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HE.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HE",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-HE.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HE",
          "module": "Text.Numeral.Language.HE",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HE.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        hop\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Hopil&#224;vayi\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Hopi\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.HOP",
          "name": "HOP",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-HOP.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 ISO639-3 hop Native name Hopil vayi English name Hopi",
          "hierarchy": "Text Numeral Language HOP",
          "module": "Text.Numeral.Language.HOP",
          "name": "HOP",
          "package": "numerals",
          "partial": "HOP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HOP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HOP",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-HOP.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HOP",
          "module": "Text.Numeral.Language.HOP",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HOP.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HOP",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-HOP.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HOP",
          "module": "Text.Numeral.Language.HOP",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HOP.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HOP",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-HOP.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HOP",
          "module": "Text.Numeral.Language.HOP",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HOP.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.HOP",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-HOP.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language HOP",
          "module": "Text.Numeral.Language.HOP",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-HOP.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        it\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       ita\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        ita\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Italiano\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Italian\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.IT",
          "name": "IT",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-IT.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 it ISO639-2B ita ISO639-3 ita Native name Italiano English name Italian",
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "IT",
          "package": "numerals",
          "partial": "IT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.IT",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-IT.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.IT",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-IT.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.IT",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-IT.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.IT",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-IT.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.IT",
          "name": "rule",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Language-IT.html#rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "rule",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.IT",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-IT.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language IT",
          "module": "Text.Numeral.Language.IT",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-IT.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        ja\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       jpn\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        jpn\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#26085;&#26412;&#35486;\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Japanese\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.JA",
          "name": "JA",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-JA.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ja ISO639-2B jpn ISO639-3 jpn Native name English name Japanese",
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "JA",
          "package": "numerals",
          "partial": "JA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-JA.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "daiji_bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-JA.html#daiji_bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "daiji_bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:daiji_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "daiji_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-JA.html#daiji_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "daiji_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:daiji_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "daiji_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-JA.html#daiji_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "daiji_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:daiji_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "kanji_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-JA.html#kanji_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "kanji_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:kanji_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "kanji_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-JA.html#kanji_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "kanji_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:kanji_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "on'yomi_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-JA.html#on%27yomi_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "on'yomi_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:on-39-yomi_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "on'yomi_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-JA.html#on%27yomi_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "on'yomi_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:on-39-yomi_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "preferred_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-JA.html#preferred_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "preferred_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:preferred_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "preferred_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-JA.html#preferred_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "preferred_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:preferred_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.JA",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-JA.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language JA",
          "module": "Text.Numeral.Language.JA",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-JA.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        la\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       lat\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        lat\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Latine\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Latin\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.LA",
          "name": "LA",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-LA.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 la ISO639-2B lat ISO639-3 lat Native name Latine English name Latin",
          "hierarchy": "Text Numeral Language LA",
          "module": "Text.Numeral.Language.LA",
          "name": "LA",
          "package": "numerals",
          "partial": "LA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LA",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-LA.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LA",
          "module": "Text.Numeral.Language.LA",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LA.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LA",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-LA.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LA",
          "module": "Text.Numeral.Language.LA",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LA.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LA",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-LA.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LA",
          "module": "Text.Numeral.Language.LA",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LA.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LA",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-LA.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LA",
          "module": "Text.Numeral.Language.LA",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LA.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        lld\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Ladin\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Ladin\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.LLD",
          "name": "LLD",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-LLD.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 ISO639-3 lld Native name Ladin English name Ladin",
          "hierarchy": "Text Numeral Language LLD",
          "module": "Text.Numeral.Language.LLD",
          "name": "LLD",
          "package": "numerals",
          "partial": "LLD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LLD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LLD",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-LLD.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LLD",
          "module": "Text.Numeral.Language.LLD",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LLD.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LLD",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-LLD.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LLD",
          "module": "Text.Numeral.Language.LLD",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LLD.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.LLD",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-LLD.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language LLD",
          "module": "Text.Numeral.Language.LLD",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-LLD.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        mg\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        mlg\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        mlg\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Malagasy\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.MG",
          "name": "MG",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-MG.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 mg ISO639-2 mlg ISO639-3 mlg Native name English name Malagasy",
          "hierarchy": "Text Numeral Language MG",
          "module": "Text.Numeral.Language.MG",
          "name": "MG",
          "package": "numerals",
          "partial": "MG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-MG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.MG",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-MG.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language MG",
          "module": "Text.Numeral.Language.MG",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-MG.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.MG",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-MG.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language MG",
          "module": "Text.Numeral.Language.MG",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-MG.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.MG",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-MG.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language MG",
          "module": "Text.Numeral.Language.MG",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-MG.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.MG",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-MG.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language MG",
          "module": "Text.Numeral.Language.MG",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-MG.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        nl\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       dut\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        nld\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Nederlands\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Dutch\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.NL",
          "name": "NL",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-NL.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 nl ISO639-2B dut ISO639-3 nld Native name Nederlands English name Dutch",
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "NL",
          "package": "numerals",
          "partial": "NL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-NL.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-NL.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-NL.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "multiplicative",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-NL.html#multiplicative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "multiplicative",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-NL.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "partitive",
          "package": "numerals",
          "signature": "i -\u003e (α, α) -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-NL.html#partitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "partitive",
          "normalized": "a-\u003e(b,b)-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003e(α,α)-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:partitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NL",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-NL.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NL",
          "module": "Text.Numeral.Language.NL",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NL.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        nb\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       nob\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        nob\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Bokm&#229;l\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Norwegian Bokm&#229;l\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.NO",
          "name": "NO",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-NO.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 nb ISO639-2B nob ISO639-3 nob Native name Bokm English name Norwegian Bokm",
          "hierarchy": "Text Numeral Language NO",
          "module": "Text.Numeral.Language.NO",
          "name": "NO",
          "package": "numerals",
          "partial": "NO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NO",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-NO.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NO",
          "module": "Text.Numeral.Language.NO",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NO.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NO",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-NO.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NO",
          "module": "Text.Numeral.Language.NO",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NO.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NO",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-NO.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NO",
          "module": "Text.Numeral.Language.NO",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NO.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NO",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-NO.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NO",
          "module": "Text.Numeral.Language.NO",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NO.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        nqm\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Ndom\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.NQM",
          "name": "NQM",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-NQM.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2B ISO639-3 nqm Native name English name Ndom",
          "hierarchy": "Text Numeral Language NQM",
          "module": "Text.Numeral.Language.NQM",
          "name": "NQM",
          "package": "numerals",
          "partial": "NQM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NQM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NQM",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-NQM.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NQM",
          "module": "Text.Numeral.Language.NQM",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NQM.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NQM",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-NQM.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NQM",
          "module": "Text.Numeral.Language.NQM",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NQM.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NQM",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-NQM.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NQM",
          "module": "Text.Numeral.Language.NQM",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NQM.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.NQM",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-NQM.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language NQM",
          "module": "Text.Numeral.Language.NQM",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-NQM.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        oj\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        oji\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        oji\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#5130;&#5314;&#5393;&#5320;&#5167;&#5287;&#5134;&#5328; (Anishinaabemowin)\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Ojibwe\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.OJ",
          "name": "OJ",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-OJ.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 oj ISO639-2 oji ISO639-3 oji Native name Anishinaabemowin English name Ojibwe",
          "hierarchy": "Text Numeral Language OJ",
          "module": "Text.Numeral.Language.OJ",
          "name": "OJ",
          "package": "numerals",
          "partial": "OJ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-OJ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.OJ",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-OJ.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language OJ",
          "module": "Text.Numeral.Language.OJ",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-OJ.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.OJ",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-OJ.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language OJ",
          "module": "Text.Numeral.Language.OJ",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-OJ.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.OJ",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-OJ.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language OJ",
          "module": "Text.Numeral.Language.OJ",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-OJ.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.OJ",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-OJ.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language OJ",
          "module": "Text.Numeral.Language.OJ",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-OJ.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        pdc\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Pennsilfaanisch Deitsch\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Pennsylvania German\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.PDC",
          "name": "PDC",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-PDC.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 ISO639-3 pdc Native name Pennsilfaanisch Deitsch English name Pennsylvania German",
          "hierarchy": "Text Numeral Language PDC",
          "module": "Text.Numeral.Language.PDC",
          "name": "PDC",
          "package": "numerals",
          "partial": "PDC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PDC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PDC",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-PDC.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PDC",
          "module": "Text.Numeral.Language.PDC",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PDC.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PDC",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-PDC.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PDC",
          "module": "Text.Numeral.Language.PDC",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PDC.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PDC",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-PDC.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PDC",
          "module": "Text.Numeral.Language.PDC",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PDC.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PDC",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-PDC.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PDC",
          "module": "Text.Numeral.Language.PDC",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PDC.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        pl\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        pol\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        pol\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     j&#281;zyk polski\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Polish\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.PL",
          "name": "PL",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-PL.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 pl ISO639-2 pol ISO639-3 pol Native name zyk polski English name Polish",
          "hierarchy": "Text Numeral Language PL",
          "module": "Text.Numeral.Language.PL",
          "name": "PL",
          "package": "numerals",
          "partial": "PL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PL",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-PL.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PL",
          "module": "Text.Numeral.Language.PL",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PL.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eliczebniki g&#322;&#243;wne\n\u003c/p\u003e",
          "module": "Text.Numeral.Language.PL",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-PL.html#cardinal",
          "type": "function"
        },
        "index": {
          "description": "liczebniki wne",
          "hierarchy": "Text Numeral Language PL",
          "module": "Text.Numeral.Language.PL",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PL.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PL",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-PL.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PL",
          "module": "Text.Numeral.Language.PL",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PL.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        pt\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        por\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        por\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Portugu&#234;s\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Portuguese\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.PT",
          "name": "PT",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-PT.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 pt ISO639-2 por ISO639-3 por Native name Portugu English name Portuguese",
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "PT",
          "package": "numerals",
          "partial": "PT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PT",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-PT.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PT",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-PT.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PT",
          "name": "cardinal_struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-PT.html#cardinal_struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "cardinal_struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#v:cardinal_struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PT",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-PT.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PT",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-PT.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.PT",
          "name": "ordinal_struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-PT.html#ordinal_struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language PT",
          "module": "Text.Numeral.Language.PT",
          "name": "ordinal_struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-PT.html#v:ordinal_struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        ru\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        rus\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        rus\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081; &#1103;&#1079;&#1099;&#1082;\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Russian\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.RU",
          "name": "RU",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-RU.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ru ISO639-2 rus ISO639-3 rus Native name English name Russian",
          "hierarchy": "Text Numeral Language RU",
          "module": "Text.Numeral.Language.RU",
          "name": "RU",
          "package": "numerals",
          "partial": "RU",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-RU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.RU",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-RU.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language RU",
          "module": "Text.Numeral.Language.RU",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-RU.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.RU",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-RU.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language RU",
          "module": "Text.Numeral.Language.RU",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-RU.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.RU",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-RU.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language RU",
          "module": "Text.Numeral.Language.RU",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-RU.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.RU",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-RU.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language RU",
          "module": "Text.Numeral.Language.RU",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-RU.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        -\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        sco\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        sco\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Scots\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Scots\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.SCO",
          "name": "SCO",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-SCO.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 ISO639-2 sco ISO639-3 sco Native name Scots English name Scots",
          "hierarchy": "Text Numeral Language SCO",
          "module": "Text.Numeral.Language.SCO",
          "name": "SCO",
          "package": "numerals",
          "partial": "SCO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SCO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SCO",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-SCO.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SCO",
          "module": "Text.Numeral.Language.SCO",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SCO.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SCO",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-SCO.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SCO",
          "module": "Text.Numeral.Language.SCO",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SCO.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SCO",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-SCO.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SCO",
          "module": "Text.Numeral.Language.SCO",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SCO.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SCO",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-SCO.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SCO",
          "module": "Text.Numeral.Language.SCO",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SCO.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        sv\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       swe\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        swe\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     svenska\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Swedish\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.SV",
          "name": "SV",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-SV.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 sv ISO639-2B swe ISO639-3 swe Native name svenska English name Swedish",
          "hierarchy": "Text Numeral Language SV",
          "module": "Text.Numeral.Language.SV",
          "name": "SV",
          "package": "numerals",
          "partial": "SV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SV",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-SV.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SV",
          "module": "Text.Numeral.Language.SV",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SV.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SV",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-SV.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SV",
          "module": "Text.Numeral.Language.SV",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SV.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SV",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-SV.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SV",
          "module": "Text.Numeral.Language.SV",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SV.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SV",
          "name": "ordinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-SV.html#ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SV",
          "module": "Text.Numeral.Language.SV",
          "name": "ordinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SV.html#v:ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.SV",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-SV.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language SV",
          "module": "Text.Numeral.Language.SV",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-SV.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        tr\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        tur\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        tur\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     T&#252;rk&#231;e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Turkish\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.TR",
          "name": "TR",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-TR.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 tr ISO639-2 tur ISO639-3 tur Native name rk English name Turkish",
          "hierarchy": "Text Numeral Language TR",
          "module": "Text.Numeral.Language.TR",
          "name": "TR",
          "package": "numerals",
          "partial": "TR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-TR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.TR",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-TR.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language TR",
          "module": "Text.Numeral.Language.TR",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-TR.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.TR",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-TR.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language TR",
          "module": "Text.Numeral.Language.TR",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-TR.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.TR",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-TR.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language TR",
          "module": "Text.Numeral.Language.TR",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-TR.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.TR",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-TR.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language TR",
          "module": "Text.Numeral.Language.TR",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-TR.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        wo\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        wo1\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        wo1\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     Wolof\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Wolof\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.WO",
          "name": "WO",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-WO.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 wo ISO639-2 wo1 ISO639-3 wo1 Native name Wolof English name Wolof",
          "hierarchy": "Text Numeral Language WO",
          "module": "Text.Numeral.Language.WO",
          "name": "WO",
          "package": "numerals",
          "partial": "WO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-WO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.WO",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-WO.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language WO",
          "module": "Text.Numeral.Language.WO",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-WO.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.WO",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-WO.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language WO",
          "module": "Text.Numeral.Language.WO",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-WO.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.WO",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-WO.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language WO",
          "module": "Text.Numeral.Language.WO",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-WO.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.WO",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-WO.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language WO",
          "module": "Text.Numeral.Language.WO",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-WO.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        yo\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        yor\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        yor\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#232;d&#232; Yor&#249;b&#225;\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Yoruba\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.YOR",
          "name": "YOR",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-YOR.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 yo ISO639-2 yor ISO639-3 yor Native name Yor English name Yoruba",
          "hierarchy": "Text Numeral Language YOR",
          "module": "Text.Numeral.Language.YOR",
          "name": "YOR",
          "package": "numerals",
          "partial": "YOR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-YOR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.YOR",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-YOR.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language YOR",
          "module": "Text.Numeral.Language.YOR",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-YOR.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.YOR",
          "name": "cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-YOR.html#cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language YOR",
          "module": "Text.Numeral.Language.YOR",
          "name": "cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-YOR.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.YOR",
          "name": "entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-YOR.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language YOR",
          "module": "Text.Numeral.Language.YOR",
          "name": "entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-YOR.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.YOR",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-YOR.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language YOR",
          "module": "Text.Numeral.Language.YOR",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-YOR.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eISO639-1\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        zh\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       chi\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-2T\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e       zho\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eISO639-3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e        cmn\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNative name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e     &#23448;&#35441;\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEnglish name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Chinese\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Language.ZH",
          "name": "ZH",
          "package": "numerals",
          "source": "src/Text-Numeral-Language-ZH.html",
          "type": "module"
        },
        "index": {
          "description": "ISO639-1 zh ISO639-2B chi ISO639-2T zho ISO639-3 cmn Native name English name Chinese",
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "ZH",
          "package": "numerals",
          "partial": "ZH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "bounds",
          "package": "numerals",
          "signature": "(α, α)",
          "source": "src/Text-Numeral-Language-ZH.html#bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "numerals",
          "signature": "(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_simpl_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-ZH.html#finance_simpl_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_simpl_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:finance_simpl_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_simpl_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-ZH.html#finance_simpl_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_simpl_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:finance_simpl_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_trad_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-ZH.html#finance_trad_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_trad_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:finance_trad_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_trad_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-ZH.html#finance_trad_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "finance_trad_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:finance_trad_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "pinyin_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-ZH.html#pinyin_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "pinyin_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:pinyin_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "pinyin_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-ZH.html#pinyin_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "pinyin_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:pinyin_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "simpl_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-ZH.html#simpl_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "simpl_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:simpl_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "simpl_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-ZH.html#simpl_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "simpl_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:simpl_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "struct",
          "package": "numerals",
          "signature": "α -\u003e β",
          "source": "src/Text-Numeral-Language-ZH.html#struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "struct",
          "normalized": "a-\u003eb",
          "package": "numerals",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "trad_cardinal",
          "package": "numerals",
          "signature": "i -\u003e α -\u003e Maybe Text",
          "source": "src/Text-Numeral-Language-ZH.html#trad_cardinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "trad_cardinal",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "numerals",
          "signature": "i-\u003eα-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:trad_cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Language.ZH",
          "name": "trad_entry",
          "package": "numerals",
          "signature": "Entry",
          "source": "src/Text-Numeral-Language-ZH.html#trad_entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Language ZH",
          "module": "Text.Numeral.Language.ZH",
          "name": "trad_entry",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Language-ZH.html#v:trad_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Misc",
          "name": "Misc",
          "package": "numerals",
          "source": "src/Text-Numeral-Misc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Misc",
          "module": "Text.Numeral.Misc",
          "name": "Misc",
          "package": "numerals",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (base 10) logarithm of an integral value. Note that the\n result must be able to fit in an ordinary Int value. This means the\n maximum input value is 10 ^ (maxBound &#8759; Int).\n\u003c/p\u003e\u003cp\u003eRaise 10 to some power.\n\u003c/p\u003e",
          "module": "Text.Numeral.Misc",
          "name": "dec",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Misc.html#dec",
          "type": "function"
        },
        "index": {
          "description": "The base logarithm of an integral value Note that the result must be able to fit in an ordinary Int value This means the maximum input value is maxBound Int Raise to some power",
          "hierarchy": "Text Numeral Misc",
          "module": "Text.Numeral.Misc",
          "name": "dec",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "signature": "α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Misc.html#v:dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Misc",
          "name": "intLog",
          "package": "numerals",
          "signature": "α -\u003e α",
          "source": "src/Text-Numeral-Misc.html#intLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Misc",
          "module": "Text.Numeral.Misc",
          "name": "intLog",
          "normalized": "a-\u003ea",
          "package": "numerals",
          "partial": "Log",
          "signature": "α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Misc.html#v:intLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Render",
          "name": "Render",
          "package": "numerals",
          "source": "src/Text-Numeral-Render.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "Render",
          "package": "numerals",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context in which an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003eression appears.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "Ctx",
          "package": "numerals",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "data"
        },
        "index": {
          "description": "context in which an Exp ression appears",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "Ctx",
          "package": "numerals",
          "partial": "Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation for numerals.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRepr\u003c/a\u003e\u003c/code\u003e contains all the information on how to render an\n \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003eression to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "Repr",
          "package": "numerals",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "data"
        },
        "index": {
          "description": "representation for numerals Repr contains all the information on how to render an Exp ression to Text value",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "Repr",
          "package": "numerals",
          "partial": "Repr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#t:Repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that renders the representation of a step in a scale of\n large values. The value represented by the step is 10 ^ (rank *\n base + offset).\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "ScaleRepr",
          "package": "numerals",
          "source": "src/Text-Numeral-Render.html#ScaleRepr",
          "type": "type"
        },
        "index": {
          "description": "Function that renders the representation of step in scale of large values The value represented by the step is rank base offset",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "ScaleRepr",
          "package": "numerals",
          "partial": "Scale Repr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#t:ScaleRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxAdd",
          "package": "numerals",
          "signature": "CtxAdd Side α (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Addition context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxAdd",
          "package": "numerals",
          "partial": "Ctx Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxDual",
          "package": "numerals",
          "signature": "CtxDual (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Dual context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxDual",
          "package": "numerals",
          "partial": "Ctx Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty context. Used for top level expressions.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxEmpty",
          "package": "numerals",
          "signature": "CtxEmpty",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "The empty context Used for top level expressions",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxEmpty",
          "package": "numerals",
          "partial": "Ctx Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFraction context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxFrac",
          "package": "numerals",
          "signature": "CtxFrac Side α (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Fraction context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxFrac",
          "package": "numerals",
          "partial": "Ctx Frac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxMul",
          "package": "numerals",
          "signature": "CtxMul Side α (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Multiplication context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxMul",
          "package": "numerals",
          "partial": "Ctx Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxNeg",
          "package": "numerals",
          "signature": "CtxNeg (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Negation context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxNeg",
          "package": "numerals",
          "partial": "Ctx Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxPlural",
          "package": "numerals",
          "signature": "CtxPlural (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Plural context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxPlural",
          "package": "numerals",
          "partial": "Ctx Plural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxPlural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxScale",
          "package": "numerals",
          "signature": "CtxScale (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Scale context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxScale",
          "package": "numerals",
          "partial": "Ctx Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction context.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "CtxSub",
          "package": "numerals",
          "signature": "CtxSub Side α (Ctx α)",
          "source": "src/Text-Numeral-Render.html#Ctx",
          "type": "function"
        },
        "index": {
          "description": "Subtraction context",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "CtxSub",
          "package": "numerals",
          "partial": "Ctx Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:CtxSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Render",
          "name": "Repr",
          "package": "numerals",
          "signature": "Repr",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "Repr",
          "package": "numerals",
          "partial": "Repr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:Repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default representation.\n\u003c/p\u003e\u003cp\u003eOnly the combining functions are defined. The rest are either\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or always produce \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "defaultRepr",
          "package": "numerals",
          "signature": "Repr inf",
          "source": "src/Text-Numeral-Render.html#defaultRepr",
          "type": "function"
        },
        "index": {
          "description": "The default representation Only the combining functions are defined The rest are either Nothing or always produce Nothing",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "defaultRepr",
          "package": "numerals",
          "partial": "Repr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:defaultRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether a context is completely on the outside of an\n expression, either left or right.\n\u003c/p\u003e\u003cp\u003eGiven the following expression:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eAdd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 1000) (\u003ccode\u003e\u003ca\u003eAdd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMul\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 2) (\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 100)) (\u003ccode\u003e\u003ca\u003eAdd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 4) (\u003ccode\u003e\u003ca\u003eMul\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 3) (\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 10))))\n\u003c/pre\u003e\u003cp\u003eOn the left we have \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 1000\u003c/code\u003e and on the right \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e 10\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "isOutside",
          "package": "numerals",
          "signature": "Side -\u003e Ctx α -\u003e Bool",
          "source": "src/Text-Numeral-Render.html#isOutside",
          "type": "function"
        },
        "index": {
          "description": "Checks whether context is completely on the outside of an expression either left or right Given the following expression Add Lit Add Mul Lit Lit Add Lit Mul Lit Lit On the left we have Lit and on the right Lit",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "isOutside",
          "normalized": "Side-\u003eCtx a-\u003eBool",
          "package": "numerals",
          "partial": "Outside",
          "signature": "Side-\u003eCtx α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:isOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Render",
          "name": "posIndex",
          "package": "numerals",
          "signature": "Ctx α -\u003e ℤ",
          "source": "src/Text-Numeral-Render.html#posIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "posIndex",
          "normalized": "Ctx a-\u003eℤ",
          "package": "numerals",
          "partial": "Index",
          "signature": "Ctx α-\u003eℤ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:posIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders an expression to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value according to a certain\n representation and inflection.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "render",
          "package": "numerals",
          "signature": "Repr i-\u003e i-\u003e Exp i-\u003e Maybe Text",
          "type": "function"
        },
        "index": {
          "description": "Renders an expression to Text value according to certain representation and inflection",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "render",
          "normalized": "Repr a-\u003ea-\u003eExp a-\u003eMaybe Text",
          "package": "numerals",
          "signature": "Repr i-\u003ei-\u003eExp i-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders an addition. This concerns the addition itself, not\n the things being added. For example: In \"one hundred and\n eighty\" this function would be responsible for rendering the\n \"and\".\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprAdd",
          "package": "numerals",
          "signature": "Maybe (Exp i -\u003e Exp i -\u003e Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders an addition This concerns the addition itself not the things being added For example In one hundred and eighty this function would be responsible for rendering the and",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprAdd",
          "normalized": "Maybe(Exp a-\u003eExp a-\u003eCtx(Exp a)-\u003eText)",
          "package": "numerals",
          "partial": "Add",
          "signature": "Maybe(Exp i-\u003eExp i-\u003eCtx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines an addition and the things being added.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprAddCombine",
          "package": "numerals",
          "signature": "Maybe (Text -\u003e Text -\u003e Exp i -\u003e Text -\u003e Exp i -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Combines an addition and the things being added",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprAddCombine",
          "normalized": "Maybe(Text-\u003eText-\u003eExp a-\u003eText-\u003eExp a-\u003eText)",
          "package": "numerals",
          "partial": "Add Combine",
          "signature": "Maybe(Text-\u003eText-\u003eExp i-\u003eText-\u003eExp i-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprAddCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a fraction. This concerns the fraction itself, not\n the numerator or the denominator.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprFrac",
          "package": "numerals",
          "signature": "Maybe (Exp i -\u003e Exp i -\u003e Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders fraction This concerns the fraction itself not the numerator or the denominator",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprFrac",
          "normalized": "Maybe(Exp a-\u003eExp a-\u003eCtx(Exp a)-\u003eText)",
          "package": "numerals",
          "partial": "Frac",
          "signature": "Maybe(Exp i-\u003eExp i-\u003eCtx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a fraction and the numerator and denominator.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprFracCombine",
          "package": "numerals",
          "signature": "Maybe (Text -\u003e Text -\u003e Exp i -\u003e Text -\u003e Exp i -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Combines fraction and the numerator and denominator",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprFracCombine",
          "normalized": "Maybe(Text-\u003eText-\u003eExp a-\u003eText-\u003eExp a-\u003eText)",
          "package": "numerals",
          "partial": "Frac Combine",
          "signature": "Maybe(Text-\u003eText-\u003eExp i-\u003eText-\u003eExp i-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprFracCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a multiplication. This concerns the multiplication\n itself, not the things being multiplied.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprMul",
          "package": "numerals",
          "signature": "Maybe (Exp i -\u003e Exp i -\u003e Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders multiplication This concerns the multiplication itself not the things being multiplied",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprMul",
          "normalized": "Maybe(Exp a-\u003eExp a-\u003eCtx(Exp a)-\u003eText)",
          "package": "numerals",
          "partial": "Mul",
          "signature": "Maybe(Exp i-\u003eExp i-\u003eCtx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a multiplication and the things being multiplied.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprMulCombine",
          "package": "numerals",
          "signature": "Maybe (Text -\u003e Text -\u003e Exp i -\u003e Text -\u003e Exp i -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Combines multiplication and the things being multiplied",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprMulCombine",
          "normalized": "Maybe(Text-\u003eText-\u003eExp a-\u003eText-\u003eExp a-\u003eText)",
          "package": "numerals",
          "partial": "Mul Combine",
          "signature": "Maybe(Text-\u003eText-\u003eExp i-\u003eText-\u003eExp i-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprMulCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a negation. This concerns the negation itself, not\n the thing being negated.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprNeg",
          "package": "numerals",
          "signature": "Maybe (Exp i -\u003e Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders negation This concerns the negation itself not the thing being negated",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprNeg",
          "normalized": "Maybe(Exp a-\u003eCtx(Exp a)-\u003eText)",
          "package": "numerals",
          "partial": "Neg",
          "signature": "Maybe(Exp i-\u003eCtx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a negation and the thing being negated. For\n example: this would combine \"minus\" and \"three\" into\n \"minus three\".\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprNegCombine",
          "package": "numerals",
          "signature": "Maybe (Text -\u003e Text -\u003e Exp i -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Combines negation and the thing being negated For example this would combine minus and three into minus three",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprNegCombine",
          "normalized": "Maybe(Text-\u003eText-\u003eExp a-\u003eText)",
          "package": "numerals",
          "partial": "Neg Combine",
          "signature": "Maybe(Text-\u003eText-\u003eExp i-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprNegCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a step in a scale of large values.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprScale",
          "package": "numerals",
          "signature": "ScaleRepr i",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders step in scale of large values",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprScale",
          "package": "numerals",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a subtraction. This concerns the subtraction\n itself, not the things being subtracted.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprSub",
          "package": "numerals",
          "signature": "Maybe (Exp i -\u003e Exp i -\u003e Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders subtraction This concerns the subtraction itself not the things being subtracted",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprSub",
          "normalized": "Maybe(Exp a-\u003eExp a-\u003eCtx(Exp a)-\u003eText)",
          "package": "numerals",
          "partial": "Sub",
          "signature": "Maybe(Exp i-\u003eExp i-\u003eCtx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a subtraction and the things being subtracted.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprSubCombine",
          "package": "numerals",
          "signature": "Maybe (Text -\u003e Text -\u003e Exp i -\u003e Text -\u003e Exp i -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Combines subtraction and the things being subtracted",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprSubCombine",
          "normalized": "Maybe(Text-\u003eText-\u003eExp a-\u003eText-\u003eExp a-\u003eText)",
          "package": "numerals",
          "partial": "Sub Combine",
          "signature": "Maybe(Text-\u003eText-\u003eExp i-\u003eText-\u003eExp i-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprSubCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for unknown values.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprUnknown",
          "package": "numerals",
          "signature": "Maybe Text",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Representation for unknown values",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprUnknown",
          "package": "numerals",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a literal value. Not necessarily defined for every\n value.\n\u003c/p\u003e",
          "module": "Text.Numeral.Render",
          "name": "reprValue",
          "package": "numerals",
          "signature": "i -\u003e ℤ -\u003e Maybe (Ctx (Exp i) -\u003e Text)",
          "source": "src/Text-Numeral-Render.html#Repr",
          "type": "function"
        },
        "index": {
          "description": "Renders literal value Not necessarily defined for every value",
          "hierarchy": "Text Numeral Render",
          "module": "Text.Numeral.Render",
          "name": "reprValue",
          "normalized": "a-\u003eℤ-\u003eMaybe(Ctx(Exp a)-\u003eText)",
          "package": "numerals",
          "partial": "Value",
          "signature": "i-\u003eℤ-\u003eMaybe(Ctx(Exp i)-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Render.html#v:reprValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRules to convert numbers to an expression language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Rules",
          "name": "Rules",
          "package": "numerals",
          "source": "src/Text-Numeral-Rules.html",
          "type": "module"
        },
        "index": {
          "description": "Rules to convert numbers to an expression language",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "Rules",
          "package": "numerals",
          "partial": "Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule on how to convert a number into an expression\n language. Notice how this type is equal to the type of the \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e\n operator.\n\u003c/p\u003e",
          "module": "Text.Numeral.Rules",
          "name": "Rule",
          "package": "numerals",
          "source": "src/Text-Numeral-Rules.html#Rule",
          "type": "type"
        },
        "index": {
          "description": "rule on how to convert number into an expression language Notice how this type is equal to the type of the operator",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "Rule",
          "package": "numerals",
          "partial": "Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(add 10 L $ lit $ fix unknown) (13 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eAdd (Lit 3) (Lit 10)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "add",
          "package": "numerals",
          "signature": "α -\u003e Side -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#add",
          "type": "function"
        },
        "index": {
          "description": "add lit fix unknown Integer Exp Add Lit Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "add",
          "normalized": "a-\u003eSide-\u003eRule a b",
          "package": "numerals",
          "signature": "α-\u003eSide-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(checkPos $ lit $ fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eLit 3\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(checkPos $ lit $ fix unknown) (-3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eUnknown\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "checkPos",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#checkPos",
          "type": "function"
        },
        "index": {
          "description": "checkPos lit fix unknown Integer Exp Lit checkPos lit fix unknown Integer Exp Unknown",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "checkPos",
          "package": "numerals",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:checkPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to apply the first rule, if that produces an \u003ccode\u003e\u003ca\u003eunknown\u003c/a\u003e\u003c/code\u003e\n value it applies the second rule.\n\u003c/p\u003e",
          "module": "Text.Numeral.Rules",
          "name": "combine",
          "package": "numerals",
          "signature": "Rule α β -\u003e Rule α β -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Tries to apply the first rule if that produces an unknown value it applies the second rule",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "combine",
          "normalized": "Rule a b-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "signature": "Rule α β-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'if-then-else' concept for rules. Applies the first rule if\n the predicate holds on the input value, otherwise applies the\n second rule.\n\u003c/p\u003e",
          "module": "Text.Numeral.Rules",
          "name": "conditional",
          "package": "numerals",
          "signature": "(α -\u003e Bool)-\u003e Rule α β-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "description": "The if-then-else concept for rules Applies the first rule if the predicate holds on the input value otherwise applies the second rule",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "conditional",
          "normalized": "(a-\u003eBool)-\u003eRule a b-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "signature": "(α-\u003eBool)-\u003eRule α β-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:conditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(dual $ lit $ fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eDual (Lit 3)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "dual",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#dual",
          "type": "function"
        },
        "index": {
          "description": "dual lit fix unknown Integer Exp Dual Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "dual",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses which rule to apply to an input value based on a interval\n list of rules.\n\u003c/p\u003e",
          "module": "Text.Numeral.Rules",
          "name": "findRule",
          "package": "numerals",
          "signature": "(α, Rule α β)-\u003e [(α, Rule α β)]-\u003e α-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "description": "Chooses which rule to apply to an input value based on interval list of rules",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "findRule",
          "normalized": "(a,Rule a b)-\u003e[(a,Rule a b)]-\u003ea-\u003eRule a b",
          "package": "numerals",
          "partial": "Rule",
          "signature": "(α,Rule α β)-\u003e[(α,Rule α β)]-\u003eα-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:findRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the inflection of a subexpression.\n\u003c/p\u003e",
          "module": "Text.Numeral.Rules",
          "name": "inflection",
          "package": "numerals",
          "signature": "(Inf β -\u003e Inf β) -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#inflection",
          "type": "function"
        },
        "index": {
          "description": "Changes the inflection of subexpression",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "inflection",
          "normalized": "(Inf a-\u003eInf a)-\u003eRule b a",
          "package": "numerals",
          "signature": "(Inf β-\u003eInf β)-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:inflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe literal rule. Converts its argument into a \u003ccode\u003e\u003ca\u003elit\u003c/a\u003e\u003c/code\u003eeral\n expression.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elit (fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eLit 3\n\u003c/pre\u003e\u003cp\u003eIn this example lit is applied to the nonsense rule \"\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eunknown\u003c/a\u003e\u003c/code\u003e\". Lit ignores that function, which is why we can pass it\n anything we want, including itself.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elit (fix undefined) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eLit 3\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(fix lit) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eLit 3\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "lit",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#lit",
          "type": "function"
        },
        "index": {
          "description": "The literal rule Converts its argument into lit eral expression lit fix unknown Integer Exp Lit In this example lit is applied to the nonsense rule fix unknown Lit ignores that function which is why we can pass it anything we want including itself lit fix undefined Integer Exp Lit fix lit Integer Exp Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "lit",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant on the \u003ccode\u003e\u003ca\u003elit\u003c/a\u003e\u003c/code\u003e rule which always multiplies its argument\n with 1. Useful for languages which have numerals of the form \"one\n hundred and three\" as opposed to \"hundred and three\".\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elit1 (fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eMul (Lit 1) (Lit 3)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "lit1",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#lit1",
          "type": "function"
        },
        "index": {
          "description": "variant on the lit rule which always multiplies its argument with Useful for languages which have numerals of the form one hundred and three as opposed to hundred and three lit1 fix unknown Integer Exp Mul Lit Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "lit1",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:lit1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "longScale",
          "package": "numerals",
          "signature": "Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "longScale",
          "normalized": "Side-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "Side-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:longScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "longScale1",
          "package": "numerals",
          "signature": "Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "longScale1",
          "normalized": "Side-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "Side-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:longScale1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a value before it is given to a rule.\n\u003c/p\u003e",
          "module": "Text.Numeral.Rules",
          "name": "mapRule",
          "package": "numerals",
          "signature": "(α -\u003e α) -\u003e Rule α β -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#mapRule",
          "type": "function"
        },
        "index": {
          "description": "Transform value before it is given to rule",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mapRule",
          "normalized": "(a-\u003ea)-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Rule",
          "signature": "(α-\u003eα)-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mapRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "mkStep",
          "package": "numerals",
          "signature": "Rule α β-\u003e (α -\u003e Side -\u003e Rule α β)-\u003e (α -\u003e Side -\u003e Side -\u003e Rule α β)-\u003e α-\u003e α-\u003e Side-\u003e Side-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mkStep",
          "normalized": "Rule a b-\u003e(a-\u003eSide-\u003eRule a b)-\u003e(a-\u003eSide-\u003eSide-\u003eRule a b)-\u003ea-\u003ea-\u003eSide-\u003eSide-\u003eRule a b",
          "package": "numerals",
          "partial": "Step",
          "signature": "Rule α β-\u003e(α-\u003eSide-\u003eRule α β)-\u003e(α-\u003eSide-\u003eSide-\u003eRule α β)-\u003eα-\u003eα-\u003eSide-\u003eSide-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mkStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(mul 10 R L $ lit $ fix unknown) (42 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eAdd (Mul (Lit 4) (Lit 10)) (Lit 2)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "mul",
          "package": "numerals",
          "signature": "α -\u003e Side -\u003e Side -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#mul",
          "type": "function"
        },
        "index": {
          "description": "mul lit fix unknown Integer Exp Add Mul Lit Lit Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mul",
          "normalized": "a-\u003eSide-\u003eSide-\u003eRule a b",
          "package": "numerals",
          "signature": "α-\u003eSide-\u003eSide-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "mul1",
          "package": "numerals",
          "signature": "α -\u003e Side -\u003e Side -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#mul1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mul1",
          "normalized": "a-\u003eSide-\u003eSide-\u003eRule a b",
          "package": "numerals",
          "signature": "α-\u003eSide-\u003eSide-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mul1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "mulScale",
          "package": "numerals",
          "signature": "α-\u003e α-\u003e Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mulScale",
          "normalized": "a-\u003ea-\u003eSide-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "α-\u003eα-\u003eSide-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mulScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "mulScale1",
          "package": "numerals",
          "signature": "α-\u003e α-\u003e Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mulScale1",
          "normalized": "a-\u003ea-\u003eSide-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "α-\u003eα-\u003eSide-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mulScale1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "mulScale_",
          "package": "numerals",
          "signature": "((α -\u003e β) -\u003e α -\u003e β -\u003e Side -\u003e β)-\u003e α-\u003e α-\u003e Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "mulScale_",
          "normalized": "((a-\u003eb)-\u003ea-\u003eb-\u003eSide-\u003eb)-\u003ea-\u003ea-\u003eSide-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "((α-\u003eβ)-\u003eα-\u003eβ-\u003eSide-\u003eβ)-\u003eα-\u003eα-\u003eSide-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:mulScale_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "pelletierScale",
          "package": "numerals",
          "signature": "Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "pelletierScale",
          "normalized": "Side-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "Side-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:pelletierScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "pelletierScale1",
          "package": "numerals",
          "signature": "Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "pelletierScale1",
          "normalized": "Side-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "Side-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:pelletierScale1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(plural $ lit $ fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003ePlural (Lit 3)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "plural",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#plural",
          "type": "function"
        },
        "index": {
          "description": "plural lit fix unknown Integer Exp Plural Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "plural",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(pos $ lit $ fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eLit 3\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(pos $ lit $ fix unknown) (-3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eNeg (Lit 3)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "pos",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#pos",
          "type": "function"
        },
        "index": {
          "description": "pos lit fix unknown Integer Exp Lit pos lit fix unknown Integer Exp Neg Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "pos",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "shortScale",
          "package": "numerals",
          "signature": "Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "shortScale",
          "normalized": "Side-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "Side-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:shortScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "shortScale1",
          "package": "numerals",
          "signature": "Side-\u003e Side-\u003e Rule α β-\u003e Rule α β",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "shortScale1",
          "normalized": "Side-\u003eSide-\u003eRule a b-\u003eRule a b",
          "package": "numerals",
          "partial": "Scale",
          "signature": "Side-\u003eSide-\u003eRule α β-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:shortScale1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "step",
          "package": "numerals",
          "signature": "α -\u003e α -\u003e Side -\u003e Side -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "step",
          "normalized": "a-\u003ea-\u003eSide-\u003eSide-\u003eRule a b",
          "package": "numerals",
          "signature": "α-\u003eα-\u003eSide-\u003eSide-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Rules",
          "name": "step1",
          "package": "numerals",
          "signature": "α -\u003e α -\u003e Side -\u003e Side -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#step1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "step1",
          "normalized": "a-\u003ea-\u003eSide-\u003eSide-\u003eRule a b",
          "package": "numerals",
          "signature": "α-\u003eα-\u003eSide-\u003eSide-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:step1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(sub 20 $ lit $ fix unknown) (18 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eSub (Lit 2) (Lit 20)\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "sub",
          "package": "numerals",
          "signature": "α -\u003e Rule α β",
          "source": "src/Text-Numeral-Rules.html#sub",
          "type": "function"
        },
        "index": {
          "description": "sub lit fix unknown Integer Exp Sub Lit Lit",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "sub",
          "normalized": "a-\u003eRule a b",
          "package": "numerals",
          "signature": "α-\u003eRule α β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule that always fails to convert a value. It constantly\n produces the \u003ccode\u003e\u003ca\u003eunknown\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(fix unknown) (3 :: Integer) :: Exp\n\u003c/code\u003e\u003c/strong\u003eUnknown\n\u003c/pre\u003e",
          "module": "Text.Numeral.Rules",
          "name": "unknown",
          "package": "numerals",
          "signature": "Rule α β",
          "source": "src/Text-Numeral-Rules.html#unknown",
          "type": "function"
        },
        "index": {
          "description": "rule that always fails to convert value It constantly produces the unknown value fix unknown Integer Exp Unknown",
          "hierarchy": "Text Numeral Rules",
          "module": "Text.Numeral.Rules",
          "name": "unknown",
          "package": "numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral-Rules.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral",
          "name": "Numeral",
          "package": "numerals",
          "source": "src/Text-Numeral.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Numeral",
          "module": "Text.Numeral",
          "name": "Numeral",
          "package": "numerals",
          "partial": "Numeral",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numerals/docs/Text-Numeral.html#"
      }
    }
  ]
]