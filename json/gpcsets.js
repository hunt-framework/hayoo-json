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
        "word": "gpcsets"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PcSets.Catalog",
          "name": "Catalog",
          "package": "gpcsets",
          "source": "src/Data-PcSets-Catalog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PcSets Catalog",
          "module": "Data.PcSets.Catalog",
          "name": "Catalog",
          "package": "gpcsets",
          "partial": "Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Catalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PcSets.Catalog",
          "name": "test",
          "package": "gpcsets",
          "signature": "Int",
          "source": "src/Data-PcSets-Catalog.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PcSets Catalog",
          "module": "Data.PcSets.Catalog",
          "name": "test",
          "package": "gpcsets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Catalog.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module translates Pitch Class Sets to and from \u003cem\u003eCompact Format\u003c/em\u003e.\n  In Compact Format, data such as StdSet [0,4,7,11] could be represented\n  by the string 047B, which uses a single alphanumeric character for each\n  pitch class element.\n\u003c/p\u003e\u003cp\u003eLimitations: this module is only usable for pitch class sets of modulus\n  36 or below. Beyond that, it's not really certain that a compact format\n  would be of any practical use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PcSets.Compact",
          "name": "Compact",
          "package": "gpcsets",
          "source": "src/Data-PcSets-Compact.html",
          "type": "module"
        },
        "index": {
          "description": "This module translates Pitch Class Sets to and from Compact Format In Compact Format data such as StdSet could be represented by the string which uses single alphanumeric character for each pitch class element Limitations this module is only usable for pitch class sets of modulus or below Beyond that it not really certain that compact format would be of any practical use",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "Compact",
          "package": "gpcsets",
          "partial": "Compact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates a Pitch Class Set or Tone Row to Compact Format. Values from\n  0-9 are translated as the characters 0-9; values from 10 to 35 are\n  translated as charaters A-Z. Values which are out of the representable\n  range are ignored, therefore this function is not suitable for sets of\n  modulus 37 or greater.\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "compact",
          "package": "gpcsets",
          "signature": "a -\u003e String",
          "source": "src/Data-PcSets-Compact.html#compact",
          "type": "function"
        },
        "index": {
          "description": "Translates Pitch Class Set or Tone Row to Compact Format Values from are translated as the characters values from to are translated as charaters A-Z Values which are out of the representable range are ignored therefore this function is not suitable for sets of modulus or greater",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "compact",
          "normalized": "a-\u003eString",
          "package": "gpcsets",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is identical to \u003ccode\u003e\u003ca\u003ecompact\u003c/a\u003e\u003c/code\u003e, except that Standard (modulus\n  12) sets and rows are rendered using \u003ccode\u003eT\u003c/code\u003e for 10 and \u003ccode\u003eE\u003c/code\u003e for 11.\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "compact'",
          "package": "gpcsets",
          "signature": "a -\u003e String",
          "source": "src/Data-PcSets-Compact.html#compact%27",
          "type": "function"
        },
        "index": {
          "description": "This function is identical to compact except that Standard modulus sets and rows are rendered using for and for",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "compact'",
          "normalized": "a-\u003eString",
          "package": "gpcsets",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:compact-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new General Tone Row of modulus \u003cem\u003en\u003c/em\u003e. Alphanumeric character\n  values 0-9 and A-Z represent the numbers 0 to 36. Other inputs, including\n  whitespace, are ignored. Since Tone Rows must contain all possible\n  elements, an incomplete entry list will result in a new row with the\n  missing tones added at the end.\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "toGenRow",
          "package": "gpcsets",
          "signature": "Int -\u003e String -\u003e GenRow",
          "source": "src/Data-PcSets-Compact.html#toGenRow",
          "type": "function"
        },
        "index": {
          "description": "Creates new General Tone Row of modulus Alphanumeric character values and A-Z represent the numbers to Other inputs including whitespace are ignored Since Tone Rows must contain all possible elements an incomplete entry list will result in new row with the missing tones added at the end",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "toGenRow",
          "normalized": "Int-\u003eString-\u003eGenRow",
          "package": "gpcsets",
          "partial": "Gen Row",
          "signature": "Int-\u003eString-\u003eGenRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:toGenRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new General Pitch Class Set of modulus \u003cem\u003en\u003c/em\u003e. Alphanumeric\n  character values 0-9 and A-Z represent the numbers 0 to 36. Other\n  inputs, including whitespace, are ignored.\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "toGenSet",
          "package": "gpcsets",
          "signature": "Int -\u003e String -\u003e GenSet",
          "source": "src/Data-PcSets-Compact.html#toGenSet",
          "type": "function"
        },
        "index": {
          "description": "Creates new General Pitch Class Set of modulus Alphanumeric character values and A-Z represent the numbers to Other inputs including whitespace are ignored",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "toGenSet",
          "normalized": "Int-\u003eString-\u003eGenSet",
          "package": "gpcsets",
          "partial": "Gen Set",
          "signature": "Int-\u003eString-\u003eGenSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:toGenSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new Standard (modulus 12) Tone Row. Here, input characters 0-9\n  count as their decimal equivalents; the letter \u003cem\u003eA\u003c/em\u003e stands for 10, and\n  the letter \u003cem\u003eB\u003c/em\u003e stands for 11. Other inputs, including whitespace, are\n  ignored. (Also, see notes for \u003ccode\u003e\u003ca\u003etoGenRow\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "toStdRow",
          "package": "gpcsets",
          "signature": "String -\u003e StdRow",
          "source": "src/Data-PcSets-Compact.html#toStdRow",
          "type": "function"
        },
        "index": {
          "description": "Creates new Standard modulus Tone Row Here input characters count as their decimal equivalents the letter stands for and the letter stands for Other inputs including whitespace are ignored Also see notes for toGenRow",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "toStdRow",
          "normalized": "String-\u003eStdRow",
          "package": "gpcsets",
          "partial": "Std Row",
          "signature": "String-\u003eStdRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:toStdRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new Standard (modulus 12) Tone Row, using an alternative\n  duodecimal format. Here, input characters 0-9 count as their decimal\n  equivalents; the letter \u003cem\u003eT\u003c/em\u003e stands for 10, and the letter \u003cem\u003eE\u003c/em\u003e stands for\n  11. Other inputs, including whitespace, are ignored. (Also, see notes for\n  \u003ccode\u003e\u003ca\u003etoGenRow\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "toStdRow'",
          "package": "gpcsets",
          "signature": "String -\u003e StdRow",
          "source": "src/Data-PcSets-Compact.html#toStdRow%27",
          "type": "function"
        },
        "index": {
          "description": "Creates new Standard modulus Tone Row using an alternative duodecimal format Here input characters count as their decimal equivalents the letter stands for and the letter stands for Other inputs including whitespace are ignored Also see notes for toGenRow",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "toStdRow'",
          "normalized": "String-\u003eStdRow",
          "package": "gpcsets",
          "partial": "Std Row'",
          "signature": "String-\u003eStdRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:toStdRow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new Standard (modulus 12) Pitch Class Set. Here, input\n  characters 0-9 count as their decimal equivalents; the letter \u003cem\u003eA\u003c/em\u003e\n  stands for 10, and the letter \u003cem\u003eB\u003c/em\u003e stands for 11. Other inputs,\n  including whitespace, are ignored.\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "toStdSet",
          "package": "gpcsets",
          "signature": "String -\u003e StdSet",
          "source": "src/Data-PcSets-Compact.html#toStdSet",
          "type": "function"
        },
        "index": {
          "description": "Creates new Standard modulus Pitch Class Set Here input characters count as their decimal equivalents the letter stands for and the letter stands for Other inputs including whitespace are ignored",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "toStdSet",
          "normalized": "String-\u003eStdSet",
          "package": "gpcsets",
          "partial": "Std Set",
          "signature": "String-\u003eStdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:toStdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new Standard (modulus 12) Pitch Class Set, using an alternative\n  duodecimal format. Here, input characters 0-9 count as their decimal\n  equivalents; the letter \u003cem\u003eT\u003c/em\u003e stands for 10, and the letter \u003cem\u003eE\u003c/em\u003e stands for\n  11. Other inputs, including whitespace, are ignored.\n\u003c/p\u003e",
          "module": "Data.PcSets.Compact",
          "name": "toStdSet'",
          "package": "gpcsets",
          "signature": "String -\u003e StdSet",
          "source": "src/Data-PcSets-Compact.html#toStdSet%27",
          "type": "function"
        },
        "index": {
          "description": "Creates new Standard modulus Pitch Class Set using an alternative duodecimal format Here input characters count as their decimal equivalents the letter stands for and the letter stands for Other inputs including whitespace are ignored",
          "hierarchy": "Data PcSets Compact",
          "module": "Data.PcSets.Compact",
          "name": "toStdSet'",
          "normalized": "String-\u003eStdSet",
          "package": "gpcsets",
          "partial": "Std Set'",
          "signature": "String-\u003eStdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Compact.html#v:toStdSet-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PcSets.Notes",
          "name": "Notes",
          "package": "gpcsets",
          "source": "src/Data-PcSets-Notes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PcSets Notes",
          "module": "Data.PcSets.Notes",
          "name": "Notes",
          "package": "gpcsets",
          "partial": "Notes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Notes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PcSets.Notes",
          "name": "test",
          "package": "gpcsets",
          "signature": "Int",
          "source": "src/Data-PcSets-Notes.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PcSets Notes",
          "module": "Data.PcSets.Notes",
          "name": "test",
          "package": "gpcsets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Notes.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module produces simple representations of Pitch Class Sets\n  suitable for use in Scalable Vector Graphics.  By default it\n  does not generate the files -- instead, it generates a printable\n  string, which can be captured to standard output or directed to\n  a file at your discretion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PcSets.Svg",
          "name": "Svg",
          "package": "gpcsets",
          "source": "src/Data-PcSets-Svg.html",
          "type": "module"
        },
        "index": {
          "description": "This module produces simple representations of Pitch Class Sets suitable for use in Scalable Vector Graphics By default it does not generate the files instead it generates printable string which can be captured to standard output or directed to file at your discretion",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "Svg",
          "package": "gpcsets",
          "partial": "Svg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the rendering information for the SVG file.\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "Rendering",
          "package": "gpcsets",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "data"
        },
        "index": {
          "description": "Stores the rendering information for the SVG file",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "Rendering",
          "package": "gpcsets",
          "partial": "Rendering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#t:Rendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PcSets.Svg",
          "name": "Rendering",
          "package": "gpcsets",
          "signature": "Rendering",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "Rendering",
          "package": "gpcsets",
          "partial": "Rendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:Rendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaxis color\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "axColor",
          "package": "gpcsets",
          "signature": "String",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "axis color",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "axColor",
          "package": "gpcsets",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:axColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomplementary set color\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "csColor",
          "package": "gpcsets",
          "signature": "String",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "complementary set color",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "csColor",
          "package": "gpcsets",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:csColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline color for the main structures\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "lnColor",
          "package": "gpcsets",
          "signature": "String",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "line color for the main structures",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "lnColor",
          "package": "gpcsets",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:lnColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic idea: generate SVG data for an input pitch class set.\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "pcSvg",
          "package": "gpcsets",
          "signature": "a -\u003e String",
          "source": "src/Data-PcSets-Svg.html#pcSvg",
          "type": "function"
        },
        "index": {
          "description": "The basic idea generate SVG data for an input pitch class set",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "pcSvg",
          "normalized": "a-\u003eString",
          "package": "gpcsets",
          "partial": "Svg",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:pcSvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epcSvg\u003c/a\u003e\u003c/code\u003e but allows a custom \u003ccode\u003e\u003ca\u003eRendering\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "pcSvg'",
          "package": "gpcsets",
          "signature": "Rendering -\u003e a -\u003e String",
          "source": "src/Data-PcSets-Svg.html#pcSvg%27",
          "type": "function"
        },
        "index": {
          "description": "Same as pcSvg but allows custom Rendering",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "pcSvg'",
          "normalized": "Rendering-\u003ea-\u003eString",
          "package": "gpcsets",
          "partial": "Svg'",
          "signature": "Rendering-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:pcSvg-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epcSvg\u003c/a\u003e\u003c/code\u003e, but includes an \u003cem\u003einvertXY\u003c/em\u003e style axis.\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "pcSvgAx",
          "package": "gpcsets",
          "signature": "a -\u003e (Int, Int) -\u003e String",
          "source": "src/Data-PcSets-Svg.html#pcSvgAx",
          "type": "function"
        },
        "index": {
          "description": "Same as pcSvg but includes an invertXY style axis",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "pcSvgAx",
          "normalized": "a-\u003e(Int,Int)-\u003eString",
          "package": "gpcsets",
          "partial": "Svg Ax",
          "signature": "a-\u003e(Int,Int)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:pcSvgAx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epcSvgAx\u003c/a\u003e\u003c/code\u003e, but allows a custom \u003ccode\u003e\u003ca\u003eRendering\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "pcSvgAx'",
          "package": "gpcsets",
          "signature": "Rendering -\u003e a -\u003e (Int, Int) -\u003e String",
          "source": "src/Data-PcSets-Svg.html#pcSvgAx%27",
          "type": "function"
        },
        "index": {
          "description": "Same as pcSvgAx but allows custom Rendering",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "pcSvgAx'",
          "normalized": "Rendering-\u003ea-\u003e(Int,Int)-\u003eString",
          "package": "gpcsets",
          "partial": "Svg Ax'",
          "signature": "Rendering-\u003ea-\u003e(Int,Int)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:pcSvgAx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epitch class set color\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "psColor",
          "package": "gpcsets",
          "signature": "String",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "pitch class set color",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "psColor",
          "package": "gpcsets",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:psColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esets the (square) image dimensions\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "pxSize",
          "package": "gpcsets",
          "signature": "Int",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "sets the square image dimensions",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "pxSize",
          "package": "gpcsets",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:pxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproportion of axis (if any) compared to image\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "relAxis",
          "package": "gpcsets",
          "signature": "Float",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "proportion of axis if any compared to image",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "relAxis",
          "package": "gpcsets",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:relAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproportion of elements compared to main circle\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "relElem",
          "package": "gpcsets",
          "signature": "Float",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "proportion of elements compared to main circle",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "relElem",
          "package": "gpcsets",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:relElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproportion of main circle compared to image\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "relMain",
          "package": "gpcsets",
          "signature": "Float",
          "source": "src/Data-PcSets-Svg.html#Rendering",
          "type": "function"
        },
        "index": {
          "description": "proportion of main circle compared to image",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "relMain",
          "package": "gpcsets",
          "partial": "Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:relMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Standard \u003ccode\u003e\u003ca\u003eRendering\u003c/a\u003e\u003c/code\u003e is a 500x500 image using black lines, with\n  elements of the set in red, the complement in black, and any axis in\n  blue.  The pitch class set circle is 80% of the frame, each element\n  is 10% of the main circle's size, and any axis is 95% frame size.\n\u003c/p\u003e",
          "module": "Data.PcSets.Svg",
          "name": "stdRen",
          "package": "gpcsets",
          "signature": "Rendering",
          "source": "src/Data-PcSets-Svg.html#stdRen",
          "type": "function"
        },
        "index": {
          "description": "The Standard Rendering is x500 image using black lines with elements of the set in red the complement in black and any axis in blue The pitch class set circle is of the frame each element is of the main circle size and any axis is frame size",
          "hierarchy": "Data PcSets Svg",
          "module": "Data.PcSets.Svg",
          "name": "stdRen",
          "package": "gpcsets",
          "partial": "Ren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets-Svg.html#v:stdRen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe basic module for working with Pitch Class Sets of all kinds,\n  including Tone Rows.  The broadest datatypes (\u003ccode\u003e\u003ca\u003eGenSet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGenRow\u003c/a\u003e\u003c/code\u003e)\n  can model any equal temperament system; the standard datatypes\n  (\u003ccode\u003e\u003ca\u003eStdSet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStdRow\u003c/a\u003e\u003c/code\u003e) model \u003cem\u003e12 Tone Equal Temperament\u003c/em\u003e (12-TET).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PcSets",
          "name": "PcSets",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html",
          "type": "module"
        },
        "index": {
          "description": "The basic module for working with Pitch Class Sets of all kinds including Tone Rows The broadest datatypes GenSet and GenRow can model any equal temperament system the standard datatypes StdSet and StdRow model Tone Equal Temperament TET",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "PcSets",
          "package": "gpcsets",
          "partial": "Pc Sets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral Tone Row.  A \u003cem\u003eTone Row\u003c/em\u003e is a collection of all possible\n  Pitch Class Set \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e within a given \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e.  Since it\n  contains all elements, the significant information in this type\n  of set is the ordering of the \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e.  This set always has\n  a length equal to its \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "GenRow",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#GenRow",
          "type": "data"
        },
        "index": {
          "description": "General Tone Row Tone Row is collection of all possible Pitch Class Set elements within given modulus Since it contains all elements the significant information in this type of set is the ordering of the elements This set always has length equal to its modulus",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "GenRow",
          "package": "gpcsets",
          "partial": "Gen Row",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:GenRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral Pitch Class Set.  This represents a Pitch Class Set that\n  can have a \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e of any positive integer value, representing\n  the number of equivalent pitch classes in a given system; for\n  example, 19-TET would be a modulus 19 set.  The members of a the\n  set can be as few as zero and as many as all possible values.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "GenSet",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#GenSet",
          "type": "data"
        },
        "index": {
          "description": "General Pitch Class Set This represents Pitch Class Set that can have modulus of any positive integer value representing the number of equivalent pitch classes in given system for example TET would be modulus set The members of the set can be as few as zero and as many as all possible values",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "GenSet",
          "package": "gpcsets",
          "partial": "Gen Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:GenSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclusive Pitch Class Sets, or Tone Rows, have all the possible\n  \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e permitted by their \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e. The most important\n  characteristic of a Tone Row is not its \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e, but the\n  \u003cem\u003eordering\u003c/em\u003e of its \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "Inclusive",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#Inclusive",
          "type": "class"
        },
        "index": {
          "description": "Inclusive Pitch Class Sets or Tone Rows have all the possible elements permitted by their modulus The most important characteristic of Tone Row is not its elements but the ordering of its elements",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "Inclusive",
          "package": "gpcsets",
          "partial": "Inclusive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:Inclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe broadest class of Pitch Class Set. All members of this class\n  have a \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e which restricts their \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e in some way. They\n  also have \u003ccode\u003e\u003ca\u003epMap\u003c/a\u003e\u003c/code\u003e, a method for lifting integer list functions to act\n  on set elements.  The \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e corresponds to the underlying system\n  of equivalent pitch classes, for example, 12-TET = modulus 12.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "PcSet",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#PcSet",
          "type": "class"
        },
        "index": {
          "description": "The broadest class of Pitch Class Set All members of this class have modulus which restricts their elements in some way They also have pMap method for lifting integer list functions to act on set elements The modulus corresponds to the underlying system of equivalent pitch classes for example TET modulus",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "PcSet",
          "package": "gpcsets",
          "partial": "Pc Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:PcSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelective Pitch Class Sets can have \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e in a range of values\n  permitted by their \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e. They can have as few as 0 (the empty\n  set) or as many as all. The set \u003ccode\u003e\u003ca\u003ecomplement\u003c/a\u003e\u003c/code\u003e operation only makes\n  sense for \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e sets.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "Selective",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#Selective",
          "type": "class"
        },
        "index": {
          "description": "Selective Pitch Class Sets can have elements in range of values permitted by their modulus They can have as few as the empty set or as many as all The set complement operation only makes sense for Selective sets",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "Selective",
          "package": "gpcsets",
          "partial": "Selective",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:Selective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard Tone Row.  This is the traditional Tone Row, a collection\n  of all the elements \u003ccode\u003e[0..11]\u003c/code\u003e, based on 12-TET.  As with \u003ccode\u003e\u003ca\u003eGenRow\u003c/a\u003e\u003c/code\u003e,\n  the most significant information in this type of set is the ordering\n  of the elements.  Since this is always a complete set, this set\n  always has a length of 12.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "StdRow",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#StdRow",
          "type": "data"
        },
        "index": {
          "description": "Standard Tone Row This is the traditional Tone Row collection of all the elements based on TET As with GenRow the most significant information in this type of set is the ordering of the elements Since this is always complete set this set always has length of",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "StdRow",
          "package": "gpcsets",
          "partial": "Std Row",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:StdRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard Pitch Class Set.  This represents the traditional\n  definition of a pitch class set, based on 12-TET, with the\n  pitch classes numbered C = 0, C#/Db = 1, D = 2, and so on\n  up to B = 11.  This set can have anywhere from zero to 12\n  members (the empty set vs. the chromatic scale).\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "StdSet",
          "package": "gpcsets",
          "source": "src/Data-PcSets.html#StdSet",
          "type": "data"
        },
        "index": {
          "description": "Standard Pitch Class Set This represents the traditional definition of pitch class set based on TET with the pitch classes numbered Db and so on up to This set can have anywhere from zero to members the empty set vs the chromatic scale",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "StdSet",
          "package": "gpcsets",
          "partial": "Std Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#t:StdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAscending Vector.  If the elements of a \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e are\n  taken to be in strictly ascending order, the ascending vector is\n  the interval difference between each element.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "avec",
          "package": "gpcsets",
          "signature": "a -\u003e [Int]",
          "source": "src/Data-PcSets.html#avec",
          "type": "function"
        },
        "index": {
          "description": "Ascending Vector If the elements of Selective PcSet are taken to be in strictly ascending order the ascending vector is the interval difference between each element",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "avec",
          "normalized": "a-\u003e[Int]",
          "package": "gpcsets",
          "signature": "a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:avec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary Value.  For a given \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e, this returns a\n  \u003cem\u003eunique\u003c/em\u003e number relating to the elements of the set -- a measure\n  of the \u003ca\u003eleftward packing\u003c/a\u003e of the sorted set (overall closeness\n  of each element to zero).\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "binaryValue",
          "package": "gpcsets",
          "signature": "a -\u003e Integer",
          "source": "src/Data-PcSets.html#binaryValue",
          "type": "function"
        },
        "index": {
          "description": "Binary Value For given Selective PcSet this returns unique number relating to the elements of the set measure of the leftward packing of the sorted set overall closeness of each element to zero",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "binaryValue",
          "normalized": "a-\u003eInteger",
          "package": "gpcsets",
          "partial": "Value",
          "signature": "a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:binaryValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of elements in a \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "cardinality",
          "package": "gpcsets",
          "signature": "a -\u003e Int",
          "source": "src/Data-PcSets.html#cardinality",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of elements in Selective PcSet",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "cardinality",
          "normalized": "a-\u003eInt",
          "package": "gpcsets",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:cardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new PcSet which is the complement of the original:\n   it contains all the \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e which the original does not.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "complement",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#complement",
          "type": "method"
        },
        "index": {
          "description": "Returns new PcSet which is the complement of the original it contains all the elements which the original does not",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "complement",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon Tone Vector: finds the number of common tones for each possible\n  value of \u003cem\u003en\u003c/em\u003e in the operation \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e \u003cem\u003en\u003c/em\u003e . \u003ccode\u003e\u003ca\u003einvert\u003c/a\u003e\u003c/code\u003e. Returns a list\n  where element 0 is the number of common tones with \u003cem\u003en\u003c/em\u003e=0, element 1 is\n  with \u003cem\u003en\u003c/em\u003e=1, and so on.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "cvec",
          "package": "gpcsets",
          "signature": "a -\u003e [Int]",
          "source": "src/Data-PcSets.html#cvec",
          "type": "function"
        },
        "index": {
          "description": "Common Tone Vector finds the number of common tones for each possible value of in the operation transpose invert Returns list where element is the number of common tones with element is with and so on",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "cvec",
          "normalized": "a-\u003e[Int]",
          "package": "gpcsets",
          "signature": "a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:cvec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the elements of the set as a list.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "elements",
          "package": "gpcsets",
          "signature": "a -\u003e [Int]",
          "source": "src/Data-PcSets.html#elements",
          "type": "method"
        },
        "index": {
          "description": "Returns the elements of the set as list",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "elements",
          "normalized": "a-\u003e[Int]",
          "package": "gpcsets",
          "signature": "a-\u003e[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for General Tone Rows.  This constructor accepts any \u003ccode\u003eInt\u003c/code\u003e\n  value for \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e, and any \u003ccode\u003e[Int]\u003c/code\u003e values for an input list.  Zero\n  \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e always returns an empty set; a negative \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e is always\n  taken as positive (see \u003ccode\u003e\u003ca\u003eGenSet\u003c/a\u003e\u003c/code\u003e).  If the input list of \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e is\n  incomplete, the remaining \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e are filled in at the end, in order.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "genrow",
          "package": "gpcsets",
          "signature": "Int -\u003e [Int] -\u003e GenRow",
          "source": "src/Data-PcSets.html#genrow",
          "type": "function"
        },
        "index": {
          "description": "Constructor for General Tone Rows This constructor accepts any Int value for modulus and any Int values for an input list Zero modulus always returns an empty set negative modulus is always taken as positive see GenSet If the input list of elements is incomplete the remaining elements are filled in at the end in order",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "genrow",
          "normalized": "Int-\u003e[Int]-\u003eGenRow",
          "package": "gpcsets",
          "signature": "Int-\u003e[Int]-\u003eGenRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:genrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for General Pitch Class Sets.  This constructor accepts\n  any \u003ccode\u003eInt\u003c/code\u003e value for \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e, and any \u003ccode\u003e[Int]\u003c/code\u003e values for an input\n  list.  Zero \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e always returns an empty set; a negative \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e\n  is always taken as positive (since the number represent the \u003cem\u003eabsolute\u003c/em\u003e\n  size of the equivalence class).\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "genset",
          "package": "gpcsets",
          "signature": "Int -\u003e [Int] -\u003e GenSet",
          "source": "src/Data-PcSets.html#genset",
          "type": "function"
        },
        "index": {
          "description": "Constructor for General Pitch Class Sets This constructor accepts any Int value for modulus and any Int values for an input list Zero modulus always returns an empty set negative modulus is always taken as positive since the number represent the absolute size of the equivalence class",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "genset",
          "normalized": "Int-\u003e[Int]-\u003eGenSet",
          "package": "gpcsets",
          "signature": "Int-\u003e[Int]-\u003eGenSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:genset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e which is the \u003cem\u003estandard inverse\u003c/em\u003e of the original,\n  that is, about an axis containing pitch class 0.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "invert",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#invert",
          "type": "function"
        },
        "index": {
          "description": "Returns new PcSet which is the standard inverse of the original that is about an axis containing pitch class",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "invert",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInversion around an axis specified by pitch classes \u003cem\u003ex\u003c/em\u003e and \u003cem\u003ey\u003c/em\u003e.\n  This inverts the set in such a way that \u003cem\u003ex\u003c/em\u003e becomes \u003cem\u003ey\u003c/em\u003e and \u003cem\u003ey\u003c/em\u003e\n  becomes \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "invertXY",
          "package": "gpcsets",
          "signature": "Int -\u003e Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#invertXY",
          "type": "function"
        },
        "index": {
          "description": "Inversion around an axis specified by pitch classes and This inverts the set in such way that becomes and becomes",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "invertXY",
          "normalized": "Int-\u003eInt-\u003ea-\u003ea",
          "package": "gpcsets",
          "partial": "XY",
          "signature": "Int-\u003eInt-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:invertXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval Vector.  Each element of the interval vector represents\n  the number of intervals in the set for that particular interval\n  class.  Element 0 measures the number of 1-interval leaps;\n  element 1 measures the number of 2-interval leaps, and so on,\n  up to half of the modulus \u003cem\u003em\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "ivec",
          "package": "gpcsets",
          "signature": "a -\u003e [Int]",
          "source": "src/Data-PcSets.html#ivec",
          "type": "function"
        },
        "index": {
          "description": "Interval Vector Each element of the interval vector represents the number of intervals in the set for that particular interval class Element measures the number of interval leaps element measures the number of interval leaps and so on up to half of the modulus",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "ivec",
          "normalized": "a-\u003e[Int]",
          "package": "gpcsets",
          "signature": "a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:ivec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the range of possible \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e of the set,\n   from 0 to (m-1).  If m = 0, the set can only be empty.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "modulus",
          "package": "gpcsets",
          "signature": "a -\u003e Int",
          "source": "src/Data-PcSets.html#modulus",
          "type": "method"
        },
        "index": {
          "description": "Determines the range of possible elements of the set from to m-1 If the set can only be empty",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "modulus",
          "normalized": "a-\u003eInt",
          "package": "gpcsets",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:modulus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e in which the elements of the original have\n  been put into \u003cem\u003enormal form\u003c/em\u003e.  This can be defined as an ascending order\n  in which the elements fit into the smallest overall interval. In the event\n  of a tie, the arrangement with the closest leftward packing is chosen.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "normal",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#normal",
          "type": "function"
        },
        "index": {
          "description": "Returns Selective PcSet in which the elements of the original have been put into normal form This can be defined as an ascending order in which the elements fit into the smallest overall interval In the event of tie the arrangement with the closest leftward packing is chosen",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "normal",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps an integer list function across the members of the set,\n   and returns the results in a new set of the same type.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "pMap",
          "package": "gpcsets",
          "signature": "([Int] -\u003e [Int]) -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#pMap",
          "type": "method"
        },
        "index": {
          "description": "Maps an integer list function across the members of the set and returns the results in new set of the same type",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "pMap",
          "normalized": "([Int]-\u003e[Int])-\u003ea-\u003ea",
          "package": "gpcsets",
          "partial": "Map",
          "signature": "([Int]-\u003e[Int])-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:pMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e in which the elements of the original\n  have been put into \u003cem\u003eprime form\u003c/em\u003e.  A prime form is able to generate\n  all the members of its set family through the some combination of the\n  operations \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einvert\u003c/a\u003e\u003c/code\u003e, and simple permutation.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "prime",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#prime",
          "type": "function"
        },
        "index": {
          "description": "Returns Selective PcSet in which the elements of the original have been put into prime form prime form is able to generate all the members of its set family through the some combination of the operations transpose invert and simple permutation",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "prime",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:prime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes the \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e of a Tone Row so that the first\n   element is \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "reconcile",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#reconcile",
          "type": "method"
        },
        "index": {
          "description": "Transposes the elements of Tone Row so that the first element is",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "reconcile",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:reconcile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e in which the elements of the original\n  have been put into \u003cem\u003ereduced form\u003c/em\u003e.  This can be thought of as the\n  \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e form, transposed so that the first element starts on \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "reduced",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#reduced",
          "type": "function"
        },
        "index": {
          "description": "Returns Selective PcSet in which the elements of the original have been put into reduced form This can be thought of as the normal form transposed so that the first element starts on zero",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "reduced",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:reduced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e with the elements of the original reversed.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "retrograde",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#retrograde",
          "type": "function"
        },
        "index": {
          "description": "Returns new PcSet with the elements of the original reversed",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "retrograde",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:retrograde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e with the elements shifted \u003cem\u003en\u003c/em\u003e places to the left.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "rotate",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Returns new PcSet with the elements shifted places to the left",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "rotate",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new Tone Row in which the elements have been \u003cem\u003eInverted\u003c/em\u003e\n  (see \u003ccode\u003e\u003ca\u003einvert\u003c/a\u003e\u003c/code\u003e) and transposed so that the first element is \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "rowI",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#rowI",
          "type": "function"
        },
        "index": {
          "description": "Returns new Tone Row in which the elements have been Inverted see invert and transposed so that the first element is",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "rowI",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:rowI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new Tone Row in which the elements are \u003cem\u003ePrograde\u003c/em\u003e\n  (in their original order) and transposed so that the first\n  element is \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "rowP",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#rowP",
          "type": "function"
        },
        "index": {
          "description": "Returns new Tone Row in which the elements are Prograde in their original order and transposed so that the first element is",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "rowP",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:rowP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new Tone Row in which the elements are \u003cem\u003eRetrograde\u003c/em\u003e\n  (reversed compared to their original order) and transposed so\n  that the first element is \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "rowR",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#rowR",
          "type": "function"
        },
        "index": {
          "description": "Returns new Tone Row in which the elements are Retrograde reversed compared to their original order and transposed so that the first element is",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "rowR",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:rowR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new Tone Row in which the elements are both \u003cem\u003eRetrograde\u003c/em\u003e\n  and \u003cem\u003eInverted\u003c/em\u003e, and transposed so that the first element is \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "rowRI",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#rowRI",
          "type": "function"
        },
        "index": {
          "description": "Returns new Tone Row in which the elements are both Retrograde and Inverted and transposed so that the first element is",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "rowRI",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "partial": "RI",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:rowRI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eSelective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e in which the elements of the original\n  have been sorted in ascending order. (Note this is restricted to Sets,\n  as sorting a Tone Row produces only an ascending chromatic scale.)\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "sort",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Returns Selective PcSet in which the elements of the original have been sorted in ascending order Note this is restricted to Sets as sorting Tone Row produces only an ascending chromatic scale",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "sort",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for Standard Tone Rows.  This constructor accepts any \u003ccode\u003e[Int]\u003c/code\u003e\n  values for an input list.  The \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e is always 12 (12-TET).  If the\n  input list of \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e is incomplete, the remaining \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e are filled\n  in at the end, in order.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "stdrow",
          "package": "gpcsets",
          "signature": "[Int] -\u003e StdRow",
          "source": "src/Data-PcSets.html#stdrow",
          "type": "function"
        },
        "index": {
          "description": "Constructor for Standard Tone Rows This constructor accepts any Int values for an input list The modulus is always TET If the input list of elements is incomplete the remaining elements are filled in at the end in order",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "stdrow",
          "normalized": "[Int]-\u003eStdRow",
          "package": "gpcsets",
          "signature": "[Int]-\u003eStdRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:stdrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for Standard Pitch Class Sets.  This constructor accepts\n  any \u003ccode\u003e[Int]\u003c/code\u003e values for elements.  The \u003ccode\u003e\u003ca\u003emodulus\u003c/a\u003e\u003c/code\u003e is always 12 (12-TET).\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "stdset",
          "package": "gpcsets",
          "signature": "[Int] -\u003e StdSet",
          "source": "src/Data-PcSets.html#stdset",
          "type": "function"
        },
        "index": {
          "description": "Constructor for Standard Pitch Class Sets This constructor accepts any Int values for elements The modulus is always TET",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "stdset",
          "normalized": "[Int]-\u003eStdSet",
          "package": "gpcsets",
          "signature": "[Int]-\u003eStdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:stdset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e which is the original transposed by \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "transpose",
          "package": "gpcsets",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-PcSets.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "Returns new PcSet which is the original transposed by",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "transpose",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "gpcsets",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new \u003ccode\u003e\u003ca\u003ePcSet\u003c/a\u003e\u003c/code\u003e in which the elements have been transposed\n  so that the first element is zero.\n\u003c/p\u003e",
          "module": "Data.PcSets",
          "name": "zero",
          "package": "gpcsets",
          "signature": "a -\u003e a",
          "source": "src/Data-PcSets.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Returns new PcSet in which the elements have been transposed so that the first element is zero",
          "hierarchy": "Data PcSets",
          "module": "Data.PcSets",
          "name": "zero",
          "normalized": "a-\u003ea",
          "package": "gpcsets",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gpcsets/docs/Data-PcSets.html#v:zero"
      }
    }
  ]
]