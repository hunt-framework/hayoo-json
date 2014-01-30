[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJohn Hughes's and Simon Peyton Jones's Pretty Printer Combinators\n\u003c/p\u003e\u003cp\u003eBased on \u003cem\u003eThe Design of a Pretty-printing Library\u003c/em\u003e\n in Advanced Functional Programming,\n Johan Jeuring and Erik Meijer (eds), LNCS 925\n \u003ca\u003ehttp://www.cs.chalmers.se/~rjmh/Papers/pretty.ps\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "module",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html",
        "fct-type": "module",
        "title": "HughesPJ"
      },
      "index": {
        "description": "John Hughes and Simon Peyton Jones Pretty Printer Combinators Based on The Design of Pretty-printing Library in Advanced Functional Programming Johan Jeuring and Erik Meijer eds LNCS http www.cs.chalmers.se rjmh Papers pretty.ps",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "HughesPJ",
        "normalized": "",
        "package": "pretty",
        "partial": "Hughes PJ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of documents.\n A Doc represents a *set* of layouts. A Doc with\n no occurrences of Union or NoDoc represents just one layout.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "The abstract type of documents Doc represents set of layouts Doc with no occurrences of Union or NoDoc represents just one layout",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "Doc",
        "normalized": "",
        "package": "pretty",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Rendering mode",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "Mode",
        "normalized": "",
        "package": "pretty",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "rendering style",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "Style",
        "normalized": "",
        "package": "pretty",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:TextDetails",
      "description": {
        "fct-descr": "\u003cp\u003eThe TextDetails data type\n\u003c/p\u003e\u003cp\u003eA TextDetails represents a fragment of text that will be\n output at some point.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "data",
        "title": "TextDetails"
      },
      "index": {
        "description": "The TextDetails data type TextDetails represents fragment of text that will be output at some point",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "TextDetails",
        "normalized": "",
        "package": "pretty",
        "partial": "Text Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    text \"hi\" $$ nest 5 (text \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example text hi nest text there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "($$) $$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-36--43--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%24%2B%24",
        "fct-type": "function",
        "title": "($+$)"
      },
      "index": {
        "description": "Above with no overlapping is associative with identity empty",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "($+$) $+$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Beside is associative with identity empty",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Chr",
      "description": {
        "fct-descr": "\u003cp\u003eA single Char fragment\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Chr !Char",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "Chr"
      },
      "index": {
        "description": "single Char fragment",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "Chr",
        "normalized": "",
        "package": "pretty",
        "partial": "Chr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:LeftMode",
      "description": {
        "fct-descr": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "LeftMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "LeftMode"
      },
      "index": {
        "description": "No indentation infinitely long lines",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "LeftMode",
        "normalized": "",
        "package": "pretty",
        "partial": "Left Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:OneLineMode",
      "description": {
        "fct-descr": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "OneLineMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "OneLineMode"
      },
      "index": {
        "description": "All on one line",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "OneLineMode",
        "normalized": "",
        "package": "pretty",
        "partial": "One Line Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:PStr",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to represent a Fast String fragment\n   but now deprecated and identical to the\n   Str constructor.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "PStr String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "PStr"
      },
      "index": {
        "description": "Used to represent Fast String fragment but now deprecated and identical to the Str constructor",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "PStr",
        "normalized": "",
        "package": "pretty",
        "partial": "PStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:PageMode",
      "description": {
        "fct-descr": "\u003cp\u003eNormal\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "PageMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "PageMode"
      },
      "index": {
        "description": "Normal",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "PageMode",
        "normalized": "",
        "package": "pretty",
        "partial": "Page Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Str",
      "description": {
        "fct-descr": "\u003cp\u003eA whole String fragment\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Str String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "whole String fragment",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "Str",
        "normalized": "",
        "package": "pretty",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Style",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Style",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "Style",
        "normalized": "",
        "package": "pretty",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ZigZagMode",
      "description": {
        "fct-descr": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "ZigZagMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "ZigZagMode"
      },
      "index": {
        "description": "With zig-zag cuts",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "ZigZagMode",
        "normalized": "",
        "package": "pretty",
        "partial": "Zig Zag Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:braces",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "braces",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:brackets",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "brackets",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Either hcat or vcat",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "cat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height and width 1, containing a literal character.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Char -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "document of height and width containing literal character",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "char",
        "normalized": "Char-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Char-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:colon",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "colon",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:comma",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "comma",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:double",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Double-\u003e Doc",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "double",
        "normalized": "Double-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Double-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:doubleQuotes",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "doubleQuotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "doubleQuotes",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "Quotes",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty document, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty document with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "empty",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:equals",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "equals",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fcat",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#fcat",
        "fct-type": "function",
        "title": "fcat"
      },
      "index": {
        "description": "Paragraph fill version of cat",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "fcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efirst\u003c/code\u003e returns its first argument if it is non-empty, otherwise its second.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "first returns its first argument if it is non-empty otherwise its second",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "first",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:float",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Float-\u003e Doc",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "float",
        "normalized": "Float-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Float-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fsep",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#fsep",
        "fct-type": "function",
        "title": "fsep"
      },
      "index": {
        "description": "Paragraph fill version of sep",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "fsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fullRender",
      "description": {
        "fct-descr": "\u003cp\u003eThe general rendering interface.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Mode-\u003e Int-\u003e Float-\u003e (TextDetails -\u003e a -\u003e a)-\u003e a-\u003e Doc-\u003e a",
        "fct-type": "function",
        "title": "fullRender"
      },
      "index": {
        "description": "The general rendering interface",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "fullRender",
        "normalized": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
        "package": "pretty",
        "partial": "Render",
        "signature": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hang",
      "description": {
        "fct-descr": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "hang d1 d2 sep d1 nest d2",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "hang",
        "normalized": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eInt-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "hcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "hsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:int",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Int-\u003e Doc",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "int",
        "normalized": "Int-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Int-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:integer",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Integer-\u003e Doc",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "integer",
        "normalized": "Integer-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Integer-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the document is empty\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Bool",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True if the document is empty",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "isEmpty",
        "normalized": "Doc-\u003eBool",
        "package": "pretty",
        "partial": "Empty",
        "signature": "Doc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lbrace",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "lbrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "lbrace",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lbrack",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "lbrack"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "lbrack",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lineLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Int",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "lineLength"
      },
      "index": {
        "description": "Length of line in chars",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "lineLength",
        "normalized": "",
        "package": "pretty",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lparen",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "lparen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "lparen",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe rendering mode\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Mode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "The rendering mode",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "mode",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eNest (or indent) a document by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "Nest or indent document by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "nest",
        "normalized": "Int-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Int-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:parens",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "parens",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ptext",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003etext\u003c/code\u003e. Used to be used for Bytestrings.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#ptext",
        "fct-type": "function",
        "title": "ptext"
      },
      "index": {
        "description": "Same as text Used to be used for Bytestrings",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "ptext",
        "normalized": "String-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:punctuate",
      "description": {
        "fct-descr": "\u003cpre\u003epunctuate p [d1, ... dn] = [d1 \u003c\u003e p, d2 \u003c\u003e p, ... dn-1 \u003c\u003e p, dn]\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e [Doc] -\u003e [Doc]",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#punctuate",
        "fct-type": "function",
        "title": "punctuate"
      },
      "index": {
        "description": "punctuate d1 dn d1 d2 dn-1 dn",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "punctuate",
        "normalized": "Doc-\u003e[Doc]-\u003e[Doc]",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003e[Doc]-\u003e[Doc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:quotes",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "quotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "quotes",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rational",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Rational-\u003e Doc",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "rational",
        "normalized": "Rational-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Rational-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rbrace",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "rbrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "rbrace",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rbrack",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "rbrack"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "rbrack",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:reduceDoc",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some simplification of a built up \u003ccode\u003eGDoc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e RDoc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#reduceDoc",
        "fct-type": "function",
        "title": "reduceDoc"
      },
      "index": {
        "description": "Perform some simplification of built up GDoc",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "reduceDoc",
        "normalized": "Doc-\u003eRDoc",
        "package": "pretty",
        "partial": "Doc",
        "signature": "Doc-\u003eRDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the default \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Render the Doc to String using the default Style",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "render",
        "normalized": "Doc-\u003eString",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:renderStyle",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the given \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Style -\u003e Doc -\u003e String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#renderStyle",
        "fct-type": "function",
        "title": "renderStyle"
      },
      "index": {
        "description": "Render the Doc to String using the given Style",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "renderStyle",
        "normalized": "Style-\u003eDoc-\u003eString",
        "package": "pretty",
        "partial": "Style",
        "signature": "Style-\u003eDoc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ribbonsPerLine",
      "description": {
        "fct-descr": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Float",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "ribbonsPerLine"
      },
      "index": {
        "description": "Ratio of ribbon length to line length",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "ribbonsPerLine",
        "normalized": "",
        "package": "pretty",
        "partial": "Per Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rparen",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "rparen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "rparen",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:semi",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "semi",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "Either hsep or vcat",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "sep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:sizedText",
      "description": {
        "fct-descr": "\u003cp\u003eSome text with any width. (\u003ccode\u003etext s = sizedText (length s) s\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Int -\u003e String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#sizedText",
        "fct-type": "function",
        "title": "sizedText"
      },
      "index": {
        "description": "Some text with any width text sizedText length",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "sizedText",
        "normalized": "Int-\u003eString-\u003eDoc",
        "package": "pretty",
        "partial": "Text",
        "signature": "Int-\u003eString-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:space",
      "description": {
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "space",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:style",
      "description": {
        "fct-descr": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "Style",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#style",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "The default style mode PageMode lineLength ribbonsPerLine",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "style",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "document of height containing literal string text satisfies the following laws text text text text if non-empty The side condition on the last law is necessary because text has height while empty has no height",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "text",
        "normalized": "String-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "vcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:zeroWidthText",
      "description": {
        "fct-descr": "\u003cp\u003eSome text, but without any width. Use for non-printing text\n such as a HTML or Latex tags\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.HughesPJ",
        "fct-package": "pretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#zeroWidthText",
        "fct-type": "function",
        "title": "zeroWidthText"
      },
      "index": {
        "description": "Some text but without any width Use for non-printing text such as HTML or Latex tags",
        "hierarchy": "Text PrettyPrint HughesPJ",
        "module": "Text.PrettyPrint.HughesPJ",
        "name": "zeroWidthText",
        "normalized": "String-\u003eDoc",
        "package": "pretty",
        "partial": "Width Text",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe default interface to the pretty-printing library. Provides a collection\n of pretty printer combinators.\n\u003c/p\u003e\u003cp\u003eThis module should be used as opposed to the \u003ca\u003eText.PrettyPrint.HughesPJ\u003c/a\u003e\n module. Both are equivalent though as this module simply re-exports the\n other.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "module",
        "fct-source": "src/Text-PrettyPrint.html",
        "fct-type": "module",
        "title": "PrettyPrint"
      },
      "index": {
        "description": "The default interface to the pretty-printing library Provides collection of pretty printer combinators This module should be used as opposed to the Text.PrettyPrint.HughesPJ module Both are equivalent though as this module simply re-exports the other",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "PrettyPrint",
        "normalized": "",
        "package": "pretty",
        "partial": "Pretty Print",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of documents.\n A Doc represents a *set* of layouts. A Doc with\n no occurrences of Union or NoDoc represents just one layout.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "The abstract type of documents Doc represents set of layouts Doc with no occurrences of Union or NoDoc represents just one layout",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "Doc",
        "normalized": "",
        "package": "pretty",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Rendering mode",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "Mode",
        "normalized": "",
        "package": "pretty",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "rendering style",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "Style",
        "normalized": "",
        "package": "pretty",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:TextDetails",
      "description": {
        "fct-descr": "\u003cp\u003eThe TextDetails data type\n\u003c/p\u003e\u003cp\u003eA TextDetails represents a fragment of text that will be\n output at some point.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "data",
        "title": "TextDetails"
      },
      "index": {
        "description": "The TextDetails data type TextDetails represents fragment of text that will be output at some point",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "TextDetails",
        "normalized": "",
        "package": "pretty",
        "partial": "Text Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    text \"hi\" $$ nest 5 (text \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example text hi nest text there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "($$) $$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-36--43--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%24%2B%24",
        "fct-type": "function",
        "title": "($+$)"
      },
      "index": {
        "description": "Above with no overlapping is associative with identity empty",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "($+$) $+$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Beside is associative with identity empty",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:Chr",
      "description": {
        "fct-descr": "\u003cp\u003eA single Char fragment\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Chr !Char",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "Chr"
      },
      "index": {
        "description": "single Char fragment",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "Chr",
        "normalized": "",
        "package": "pretty",
        "partial": "Chr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:LeftMode",
      "description": {
        "fct-descr": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "LeftMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "LeftMode"
      },
      "index": {
        "description": "No indentation infinitely long lines",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "LeftMode",
        "normalized": "",
        "package": "pretty",
        "partial": "Left Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:OneLineMode",
      "description": {
        "fct-descr": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "OneLineMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "OneLineMode"
      },
      "index": {
        "description": "All on one line",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "OneLineMode",
        "normalized": "",
        "package": "pretty",
        "partial": "One Line Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:PStr",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to represent a Fast String fragment\n   but now deprecated and identical to the\n   Str constructor.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "PStr String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "PStr"
      },
      "index": {
        "description": "Used to represent Fast String fragment but now deprecated and identical to the Str constructor",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "PStr",
        "normalized": "",
        "package": "pretty",
        "partial": "PStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:PageMode",
      "description": {
        "fct-descr": "\u003cp\u003eNormal\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "PageMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "PageMode"
      },
      "index": {
        "description": "Normal",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "PageMode",
        "normalized": "",
        "package": "pretty",
        "partial": "Page Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:Str",
      "description": {
        "fct-descr": "\u003cp\u003eA whole String fragment\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Str String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "whole String fragment",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "Str",
        "normalized": "",
        "package": "pretty",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:Style",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Style",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "Style",
        "normalized": "",
        "package": "pretty",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:ZigZagMode",
      "description": {
        "fct-descr": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "ZigZagMode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "ZigZagMode"
      },
      "index": {
        "description": "With zig-zag cuts",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "ZigZagMode",
        "normalized": "",
        "package": "pretty",
        "partial": "Zig Zag Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:braces",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "braces",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:brackets",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "brackets",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Either hcat or vcat",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "cat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height and width 1, containing a literal character.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Char -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "document of height and width containing literal character",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "char",
        "normalized": "Char-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Char-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:colon",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "colon",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:comma",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "comma",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:double",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Double-\u003e Doc",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "double",
        "normalized": "Double-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Double-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:doubleQuotes",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "doubleQuotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "doubleQuotes",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "Quotes",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty document, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty document with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "empty",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:equals",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "equals",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:fcat",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#fcat",
        "fct-type": "function",
        "title": "fcat"
      },
      "index": {
        "description": "Paragraph fill version of cat",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "fcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:float",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Float-\u003e Doc",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "float",
        "normalized": "Float-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Float-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:fsep",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#fsep",
        "fct-type": "function",
        "title": "fsep"
      },
      "index": {
        "description": "Paragraph fill version of sep",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "fsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:fullRender",
      "description": {
        "fct-descr": "\u003cp\u003eThe general rendering interface.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Mode-\u003e Int-\u003e Float-\u003e (TextDetails -\u003e a -\u003e a)-\u003e a-\u003e Doc-\u003e a",
        "fct-type": "function",
        "title": "fullRender"
      },
      "index": {
        "description": "The general rendering interface",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "fullRender",
        "normalized": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
        "package": "pretty",
        "partial": "Render",
        "signature": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:hang",
      "description": {
        "fct-descr": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "hang d1 d2 sep d1 nest d2",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "hang",
        "normalized": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eInt-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "hcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "hsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:int",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Int-\u003e Doc",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "int",
        "normalized": "Int-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Int-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:integer",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Integer-\u003e Doc",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "integer",
        "normalized": "Integer-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Integer-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the document is empty\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e Bool",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True if the document is empty",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "isEmpty",
        "normalized": "Doc-\u003eBool",
        "package": "pretty",
        "partial": "Empty",
        "signature": "Doc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lbrace",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "lbrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "lbrace",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lbrack",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "lbrack"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "lbrack",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lineLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Int",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "lineLength"
      },
      "index": {
        "description": "Length of line in chars",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "lineLength",
        "normalized": "",
        "package": "pretty",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lparen",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "lparen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "lparen",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe rendering mode\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Mode",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "The rendering mode",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "mode",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eNest (or indent) a document by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "Nest or indent document by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "nest",
        "normalized": "Int-\u003eDoc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Int-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:parens",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "parens",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:ptext",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003etext\u003c/code\u003e. Used to be used for Bytestrings.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#ptext",
        "fct-type": "function",
        "title": "ptext"
      },
      "index": {
        "description": "Same as text Used to be used for Bytestrings",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "ptext",
        "normalized": "String-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:punctuate",
      "description": {
        "fct-descr": "\u003cpre\u003epunctuate p [d1, ... dn] = [d1 \u003c\u003e p, d2 \u003c\u003e p, ... dn-1 \u003c\u003e p, dn]\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e [Doc] -\u003e [Doc]",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#punctuate",
        "fct-type": "function",
        "title": "punctuate"
      },
      "index": {
        "description": "punctuate d1 dn d1 d2 dn-1 dn",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "punctuate",
        "normalized": "Doc-\u003e[Doc]-\u003e[Doc]",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003e[Doc]-\u003e[Doc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:quotes",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc-\u003e Doc",
        "fct-type": "function",
        "title": "quotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "quotes",
        "normalized": "Doc-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rational",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Rational-\u003e Doc",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "rational",
        "normalized": "Rational-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "Rational-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rbrace",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "rbrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "rbrace",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rbrack",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "rbrack"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "rbrack",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the default \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc -\u003e String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Render the Doc to String using the default Style",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "render",
        "normalized": "Doc-\u003eString",
        "package": "pretty",
        "partial": "",
        "signature": "Doc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:renderStyle",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the given \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Style -\u003e Doc -\u003e String",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#renderStyle",
        "fct-type": "function",
        "title": "renderStyle"
      },
      "index": {
        "description": "Render the Doc to String using the given Style",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "renderStyle",
        "normalized": "Style-\u003eDoc-\u003eString",
        "package": "pretty",
        "partial": "Style",
        "signature": "Style-\u003eDoc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:ribbonsPerLine",
      "description": {
        "fct-descr": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Float",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "ribbonsPerLine"
      },
      "index": {
        "description": "Ratio of ribbon length to line length",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "ribbonsPerLine",
        "normalized": "",
        "package": "pretty",
        "partial": "Per Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rparen",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "rparen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "rparen",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:semi",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "semi",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "Either hsep or vcat",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "sep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:sizedText",
      "description": {
        "fct-descr": "\u003cp\u003eSome text with any width. (\u003ccode\u003etext s = sizedText (length s) s\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Int -\u003e String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#sizedText",
        "fct-type": "function",
        "title": "sizedText"
      },
      "index": {
        "description": "Some text with any width text sizedText length",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "sizedText",
        "normalized": "Int-\u003eString-\u003eDoc",
        "package": "pretty",
        "partial": "Text",
        "signature": "Int-\u003eString-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:space",
      "description": {
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Doc",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "space",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:style",
      "description": {
        "fct-descr": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "Style",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#style",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "The default style mode PageMode lineLength ribbonsPerLine",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "style",
        "normalized": "",
        "package": "pretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "document of height containing literal string text satisfies the following laws text text text text if non-empty The side condition on the last law is necessary because text has height while empty has no height",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "text",
        "normalized": "String-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "vcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "pretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:zeroWidthText",
      "description": {
        "fct-descr": "\u003cp\u003eSome text, but without any width. Use for non-printing text\n such as a HTML or Latex tags\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint",
        "fct-package": "pretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-HughesPJ.html#zeroWidthText",
        "fct-type": "function",
        "title": "zeroWidthText"
      },
      "index": {
        "description": "Some text but without any width Use for non-printing text such as HTML or Latex tags",
        "hierarchy": "Text PrettyPrint",
        "module": "Text.PrettyPrint",
        "name": "zeroWidthText",
        "normalized": "String-\u003eDoc",
        "package": "pretty",
        "partial": "Width Text",
        "signature": "String-\u003eDoc"
      }
    }
  }
]