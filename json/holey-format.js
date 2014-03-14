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
        "word": "holey-format"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatting functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Format.Formatters",
          "name": "Formatters",
          "package": "holey-format",
          "source": "src/Text-Format-Formatters.html",
          "type": "module"
        },
        "index": {
          "description": "Formatting functions",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "Formatters",
          "package": "holey-format",
          "partial": "Formatters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number using scientific/engineering\n notation (e.g. 2.3e123), with the given number of decimal places.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "expt",
          "package": "holey-format",
          "signature": "Int -\u003e Format a",
          "source": "src/Text-Format-Formatters.html#expt",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number using scientific engineering notation e.g e123 with the given number of decimal places",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "expt",
          "normalized": "Int-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:expt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number using normal notation, with the\n given number of decimal places.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "fixed",
          "package": "holey-format",
          "signature": "Int -\u003e Format a",
          "source": "src/Text-Format-Formatters.html#fixed",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number using normal notation with the given number of decimal places",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "fixed",
          "normalized": "Int-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an integer using hexadecimal notation. (No leading 0x is\n added.)\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "hex",
          "package": "holey-format",
          "signature": "Format Integer",
          "source": "src/Text-Format-Formatters.html#hex",
          "type": "function"
        },
        "index": {
          "description": "Render an integer using hexadecimal notation No leading is added",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "hex",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad the left hand side of a string until it reaches k characters\n wide, if necessary filling with character c.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "left",
          "package": "holey-format",
          "signature": "Int -\u003e Char -\u003e Format a",
          "source": "src/Text-Format-Formatters.html#left",
          "type": "function"
        },
        "index": {
          "description": "Pad the left hand side of string until it reaches characters wide if necessary filling with character",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "left",
          "normalized": "Int-\u003eChar-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eChar-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number, with the given number of digits\n of precision. Uses decimal notation for values between 0.1 and\n 9,999,999, and scientific notation otherwise.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "prec",
          "package": "holey-format",
          "signature": "Int -\u003e Format a",
          "source": "src/Text-Format-Formatters.html#prec",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number with the given number of digits of precision Uses decimal notation for values between and and scientific notation otherwise",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "prec",
          "normalized": "Int-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad the right hand side of a string until it reaches k characters\n wide, if necessary filling with character c.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "right",
          "package": "holey-format",
          "signature": "Int -\u003e Char -\u003e Format a",
          "source": "src/Text-Format-Formatters.html#right",
          "type": "function"
        },
        "index": {
          "description": "Pad the right hand side of string until it reaches characters wide if necessary filling with character",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "right",
          "normalized": "Int-\u003eChar-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eChar-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number using the smallest number of\n digits that correctly represent it.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "shortest",
          "package": "holey-format",
          "signature": "Format a",
          "source": "src/Text-Format-Formatters.html#shortest",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number using the smallest number of digits that correctly represent it",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "shortest",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:shortest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a strict text.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "stext",
          "package": "holey-format",
          "signature": "Format Text",
          "source": "src/Text-Format-Formatters.html#stext",
          "type": "function"
        },
        "index": {
          "description": "Output strict text",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "stext",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:stext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a string.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "string",
          "package": "holey-format",
          "signature": "Format String",
          "source": "src/Text-Format-Formatters.html#string",
          "type": "function"
        },
        "index": {
          "description": "Output string",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "string",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a lazy text.\n\u003c/p\u003e",
          "module": "Text.Format.Formatters",
          "name": "text",
          "package": "holey-format",
          "signature": "Format Text",
          "source": "src/Text-Format-Formatters.html#text",
          "type": "function"
        },
        "index": {
          "description": "Output lazy text",
          "hierarchy": "Text Format Formatters",
          "module": "Text.Format.Formatters",
          "name": "text",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Formatters.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCopy of the holey monoids library but with constructor exported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Format.Holey",
          "name": "Holey",
          "package": "holey-format",
          "source": "src/Text-Format-Holey.html",
          "type": "module"
        },
        "index": {
          "description": "Copy of the holey monoids library but with constructor exported",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "Holey",
          "package": "holey-format",
          "partial": "Holey",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formatter.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "Format",
          "package": "holey-format",
          "source": "src/Text-Format-Holey.html#Format",
          "type": "type"
        },
        "index": {
          "description": "formatter",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "Format",
          "package": "holey-format",
          "partial": "Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a monoid with holes. The underlying monoid is\n represented by type parameter \u003ccode\u003em\u003c/code\u003e. The \u003ccode\u003er\u003c/code\u003e is the result type and\n stays polymorphic until the very last moment when \u003ccode\u003erun\u003c/code\u003e is\n called. The last argument \u003ccode\u003ea\u003c/code\u003e is always a function with zero or\n more arguments, finally resulting in \u003ccode\u003er\u003c/code\u003e. Ordering the arguments in\n this order allows holey monoids to be composed using \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, stacking\n the expected arguments. Note that the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e constraint is only\n used in the identity \u003ccode\u003e\u003ca\u003eHoley\u003c/a\u003e\u003c/code\u003e and in composing two \u003ccode\u003e\u003ca\u003eHoley\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "Holey",
          "package": "holey-format",
          "source": "src/Text-Format-Holey.html#Holey",
          "type": "newtype"
        },
        "index": {
          "description": "The type of monoid with holes The underlying monoid is represented by type parameter The is the result type and stays polymorphic until the very last moment when run is called The last argument is always function with zero or more arguments finally resulting in Ordering the arguments in this order allows holey monoids to be composed using stacking the expected arguments Note that the Monoid constraint is only used in the identity Holey and in composing two Holey",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "Holey",
          "package": "holey-format",
          "partial": "Holey",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#t:Holey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition operator. The same as category composition.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "(%)",
          "package": "holey-format",
          "signature": "Holey n b c -\u003e Holey n b1 b -\u003e Holey n b1 c",
          "source": "src/Text-Format-Holey.html#%25",
          "type": "function"
        },
        "index": {
          "description": "Composition operator The same as category composition",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "(%) %",
          "normalized": "Holey a b c-\u003eHoley a b b-\u003eHoley a b c",
          "package": "holey-format",
          "signature": "Holey n b c-\u003eHoley n b b-\u003eHoley n b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Format.Holey",
          "name": "Holey",
          "package": "holey-format",
          "signature": "Holey",
          "source": "src/Text-Format-Holey.html#Holey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "Holey",
          "package": "holey-format",
          "partial": "Holey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:Holey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic indexed bind for holey monoids.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "bind",
          "package": "holey-format",
          "signature": "Holey m b c -\u003e (m -\u003e Holey n a b) -\u003e Holey n a c",
          "source": "src/Text-Format-Holey.html#bind",
          "type": "function"
        },
        "index": {
          "description": "Monadic indexed bind for holey monoids",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "bind",
          "normalized": "Holey a b c-\u003e(a-\u003eHoley d e b)-\u003eHoley d e c",
          "package": "holey-format",
          "signature": "Holey m b c-\u003e(m-\u003eHoley n a b)-\u003eHoley n a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between underlying \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "hmap",
          "package": "holey-format",
          "signature": "(m -\u003e n) -\u003e Holey m r a -\u003e Holey n r a",
          "source": "src/Text-Format-Holey.html#hmap",
          "type": "function"
        },
        "index": {
          "description": "Convert between underlying Monoid types",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "hmap",
          "normalized": "(a-\u003eb)-\u003eHoley a c d-\u003eHoley b c d",
          "package": "holey-format",
          "signature": "(m-\u003en)-\u003eHoley m r a-\u003eHoley n r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:hmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a monoidal value that is not specified until the\n computation is \u003ccode\u003erun\u003c/code\u003e. The argument that is expected later is\n converted to the monoid type using the given conversion function.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "later",
          "package": "holey-format",
          "signature": "(a -\u003e m) -\u003e Holey m r (a -\u003e r)",
          "source": "src/Text-Format-Holey.html#later",
          "type": "function"
        },
        "index": {
          "description": "Insert monoidal value that is not specified until the computation is run The argument that is expected later is converted to the monoid type using the given conversion function",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "later",
          "normalized": "(a-\u003eb)-\u003eHoley b c(a-\u003ec)",
          "package": "holey-format",
          "signature": "(a-\u003em)-\u003eHoley m r(a-\u003er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:later"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a constant monoidal value.\n\u003c/p\u003e",
          "module": "Text.Format.Holey",
          "name": "now",
          "package": "holey-format",
          "signature": "m -\u003e Holey m r r",
          "source": "src/Text-Format-Holey.html#now",
          "type": "function"
        },
        "index": {
          "description": "Insert constant monoidal value",
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "now",
          "normalized": "a-\u003eHoley a b b",
          "package": "holey-format",
          "signature": "m-\u003eHoley m r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Format.Holey",
          "name": "runHM",
          "package": "holey-format",
          "signature": "(m -\u003e r) -\u003e a",
          "source": "src/Text-Format-Holey.html#Holey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Format Holey",
          "module": "Text.Format.Holey",
          "name": "runHM",
          "normalized": "(a-\u003eb)-\u003ec",
          "package": "holey-format",
          "partial": "HM",
          "signature": "(m-\u003er)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-Holey.html#v:runHM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle letters for short formatting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "ShortFormatters",
          "package": "holey-format",
          "source": "src/Text-Format-ShortFormatters.html",
          "type": "module"
        },
        "index": {
          "description": "Single letters for short formatting",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "ShortFormatters",
          "package": "holey-format",
          "partial": "Short Formatters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number using scientific/engineering\n notation (e.g. 2.3e123), with the given number of decimal places.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "ef",
          "package": "holey-format",
          "signature": "Int -\u003e Format a",
          "source": "src/Text-Format-ShortFormatters.html#ef",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number using scientific engineering notation e.g e123 with the given number of decimal places",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "ef",
          "normalized": "Int-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:ef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number using normal notation, with the\n given number of decimal places.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "f",
          "package": "holey-format",
          "signature": "Int -\u003e Format a",
          "source": "src/Text-Format-ShortFormatters.html#f",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number using normal notation with the given number of decimal places",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "f",
          "normalized": "Int-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad the left hand side of a string until it reaches k characters\n wide, if necessary filling with character c.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "l",
          "package": "holey-format",
          "signature": "Int -\u003e Char -\u003e Format a",
          "source": "src/Text-Format-ShortFormatters.html#l",
          "type": "function"
        },
        "index": {
          "description": "Pad the left hand side of string until it reaches characters wide if necessary filling with character",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "l",
          "normalized": "Int-\u003eChar-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eChar-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number, with the given number of digits\n of precision. Uses decimal notation for values between 0.1 and\n 9,999,999, and scientific notation otherwise.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "pf",
          "package": "holey-format",
          "signature": "Int -\u003e Format a",
          "source": "src/Text-Format-ShortFormatters.html#pf",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number with the given number of digits of precision Uses decimal notation for values between and and scientific notation otherwise",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "pf",
          "normalized": "Int-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:pf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad the right hand side of a string until it reaches k characters\n wide, if necessary filling with character c.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "r",
          "package": "holey-format",
          "signature": "Int -\u003e Char -\u003e Format a",
          "source": "src/Text-Format-ShortFormatters.html#r",
          "type": "function"
        },
        "index": {
          "description": "Pad the right hand side of string until it reaches characters wide if necessary filling with character",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "r",
          "normalized": "Int-\u003eChar-\u003eFormat a",
          "package": "holey-format",
          "signature": "Int-\u003eChar-\u003eFormat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a string.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "s",
          "package": "holey-format",
          "signature": "Format String",
          "source": "src/Text-Format-ShortFormatters.html#s",
          "type": "function"
        },
        "index": {
          "description": "Output string",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "s",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a floating point number using the smallest number of\n digits that correctly represent it.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "sf",
          "package": "holey-format",
          "signature": "Format a",
          "source": "src/Text-Format-ShortFormatters.html#sf",
          "type": "function"
        },
        "index": {
          "description": "Render floating point number using the smallest number of digits that correctly represent it",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "sf",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:sf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a strict text.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "st",
          "package": "holey-format",
          "signature": "Format Text",
          "source": "src/Text-Format-ShortFormatters.html#st",
          "type": "function"
        },
        "index": {
          "description": "Output strict text",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "st",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a lazy text.\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "t",
          "package": "holey-format",
          "signature": "Format Text",
          "source": "src/Text-Format-ShortFormatters.html#t",
          "type": "function"
        },
        "index": {
          "description": "Output lazy text",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "t",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an integer using hexadecimal notation. (No leading 0x is\n added.)\n\u003c/p\u003e",
          "module": "Text.Format.ShortFormatters",
          "name": "x",
          "package": "holey-format",
          "signature": "Format Integer",
          "source": "src/Text-Format-ShortFormatters.html#x",
          "type": "function"
        },
        "index": {
          "description": "Render an integer using hexadecimal notation No leading is added",
          "hierarchy": "Text Format ShortFormatters",
          "module": "Text.Format.ShortFormatters",
          "name": "x",
          "package": "holey-format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format-ShortFormatters.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinator-based type-safe formatting (like printf() or FORMAT) for Text.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eformat (\"Person's name is \" %text% \", age is \" %hex) \"Dave\" 54\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Format",
          "name": "Format",
          "package": "holey-format",
          "source": "src/Text-Format.html",
          "type": "module"
        },
        "index": {
          "description": "Combinator-based type-safe formatting like printf or FORMAT for Text Examples format Person name is text age is hex Dave",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "Format",
          "package": "holey-format",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the formatter and return a \u003ca\u003eText\u003c/a\u003e value.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "format",
          "package": "holey-format",
          "signature": "Holey Builder Text a -\u003e a",
          "source": "src/Text-Format.html#format",
          "type": "function"
        },
        "index": {
          "description": "Run the formatter and return Text value",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "format",
          "normalized": "Holey Builder Text a-\u003ea",
          "package": "holey-format",
          "signature": "Holey Builder Text a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the formatter and print out the text to stdout.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "fprint",
          "package": "holey-format",
          "signature": "Holey Builder (IO ()) a -\u003e a",
          "source": "src/Text-Format.html#fprint",
          "type": "function"
        },
        "index": {
          "description": "Run the formatter and print out the text to stdout",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "fprint",
          "normalized": "Holey Builder(IO())a-\u003ea",
          "package": "holey-format",
          "signature": "Holey Builder(IO())a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format.html#v:fprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the formatter and put the output onto the given \u003ca\u003eHandle\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "hprint",
          "package": "holey-format",
          "signature": "Handle -\u003e Holey Builder (IO ()) a -\u003e a",
          "source": "src/Text-Format.html#hprint",
          "type": "function"
        },
        "index": {
          "description": "Run the formatter and put the output onto the given Handle",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "hprint",
          "normalized": "Handle-\u003eHoley Builder(IO())a-\u003ea",
          "package": "holey-format",
          "signature": "Handle-\u003eHoley Builder(IO())a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holey-format/docs/Text-Format.html#v:hprint"
      }
    }
  ]
]