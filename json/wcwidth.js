[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wcwidth/docs/Data-Char-WCWidth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding for the native \u003ccode\u003e\u003ca\u003ewcwidth\u003c/a\u003e\u003c/code\u003e. It's important that you \u003ccode\u003esetLocale\u003c/code\u003e\n    before using it, like this:\n\u003c/p\u003e\u003cpre\u003e  #!/usr/bin/env runhaskell\n\n  import Text.Printf\n  \n  import System.Locale.SetLocale\n  import Data.Char.WCWidth\n\n  main                     =  do\n    setLocale LC_ALL (Just \"\")\n    sequence_ [ display c | c \u003c- chars ]\n   where\n    chars                  =  [minBound..'A']\n    display c = printf \"%04x  %2d  %s\\n\" (fromEnum c) (wcwidth c) (show c)\n\u003c/pre\u003e\u003cp\u003eThe program file \u003ccode\u003eWCWidthTableaux.hs\u003c/code\u003e contains a more extensive example of\n    using \u003ccode\u003e\u003ca\u003ewcwidth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this binding to the native implementation gets certain\n    characters wrong in obvious ways as well as ways that are problematic for\n    indentation based languages. The ASCII tab should be assigned a width of\n    8, not -1; and one is likely to find -1 assigned to  numerous obscure\n    characters (for example, symbols from the Book of Changes).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Char.WCWidth",
        "fct-package": "wcwidth",
        "fct-signature": "module",
        "fct-source": "src/Data-Char-WCWidth.html",
        "fct-type": "module",
        "title": "WCWidth"
      },
      "index": {
        "description": "binding for the native wcwidth It important that you setLocale before using it like this usr bin env runhaskell import Text.Printf import System.Locale.SetLocale import Data.Char.WCWidth main do setLocale LC ALL Just sequence display chars where chars minBound display printf fromEnum wcwidth show The program file WCWidthTableaux.hs contains more extensive example of using wcwidth Note that this binding to the native implementation gets certain characters wrong in obvious ways as well as ways that are problematic for indentation based languages The ASCII tab should be assigned width of not and one is likely to find assigned to numerous obscure characters for example symbols from the Book of Changes",
        "hierarchy": "Data Char WCWidth",
        "module": "Data.Char.WCWidth",
        "name": "WCWidth",
        "normalized": "",
        "package": "wcwidth",
        "partial": "WCWidth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wcwidth/docs/Data-Char-WCWidth.html#v:ranges",
      "description": {
        "fct-descr": "\u003cp\u003eCharacters broken into contiguous ranges with the same width.\n\u003c/p\u003e",
        "fct-module": "Data.Char.WCWidth",
        "fct-package": "wcwidth",
        "fct-signature": "[((Char, Char), Int)]",
        "fct-source": "src/Data-Char-WCWidth.html#ranges",
        "fct-type": "function",
        "title": "ranges"
      },
      "index": {
        "description": "Characters broken into contiguous ranges with the same width",
        "hierarchy": "Data Char WCWidth",
        "module": "Data.Char.WCWidth",
        "name": "ranges",
        "normalized": "[((Char,Char),Int)]",
        "package": "wcwidth",
        "partial": "",
        "signature": "[((Char,Char),Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wcwidth/docs/Data-Char-WCWidth.html#v:wcwidth",
      "description": {
        "fct-descr": "\u003cp\u003eBinding to the native \u003ccode\u003e\u003ca\u003ewcwidth\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Char.WCWidth",
        "fct-package": "wcwidth",
        "fct-signature": "Char -\u003e Int",
        "fct-source": "src/Data-Char-WCWidth.html#wcwidth",
        "fct-type": "function",
        "title": "wcwidth"
      },
      "index": {
        "description": "Binding to the native wcwidth",
        "hierarchy": "Data Char WCWidth",
        "module": "Data.Char.WCWidth",
        "name": "wcwidth",
        "normalized": "Char-\u003eInt",
        "package": "wcwidth",
        "partial": "",
        "signature": "Char-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wcwidth/docs/Data-Char-WCWidth.html#v:widths",
      "description": {
        "fct-descr": "\u003cp\u003eWidths of all characters. \n\u003c/p\u003e",
        "fct-module": "Data.Char.WCWidth",
        "fct-package": "wcwidth",
        "fct-signature": "[(Char, Int)]",
        "fct-source": "src/Data-Char-WCWidth.html#widths",
        "fct-type": "function",
        "title": "widths"
      },
      "index": {
        "description": "Widths of all characters",
        "hierarchy": "Data Char WCWidth",
        "module": "Data.Char.WCWidth",
        "name": "widths",
        "normalized": "[(Char,Int)]",
        "package": "wcwidth",
        "partial": "",
        "signature": "[(Char,Int)]"
      }
    }
  }
]