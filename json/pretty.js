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
        "word": "pretty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJohn Hughes's and Simon Peyton Jones's Pretty Printer Combinators\n\u003c/p\u003e\u003cp\u003eBased on \u003cem\u003eThe Design of a Pretty-printing Library\u003c/em\u003e\n in Advanced Functional Programming,\n Johan Jeuring and Erik Meijer (eds), LNCS 925\n \u003ca\u003ehttp://www.cs.chalmers.se/~rjmh/Papers/pretty.ps\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "HughesPJ",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html",
          "type": "module"
        },
        "index": {
          "description": "John Hughes and Simon Peyton Jones Pretty Printer Combinators Based on The Design of Pretty-printing Library in Advanced Functional Programming Johan Jeuring and Erik Meijer eds LNCS http www.cs.chalmers.se rjmh Papers pretty.ps",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "HughesPJ",
          "package": "pretty",
          "partial": "Hughes PJ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract type of documents.\n A Doc represents a *set* of layouts. A Doc with\n no occurrences of Union or NoDoc represents just one layout.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Doc",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract type of documents Doc represents set of layouts Doc with no occurrences of Union or NoDoc represents just one layout",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Doc",
          "package": "pretty",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Mode",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Rendering mode",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Mode",
          "package": "pretty",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Style",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Style",
          "type": "data"
        },
        "index": {
          "description": "rendering style",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Style",
          "package": "pretty",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TextDetails data type\n\u003c/p\u003e\u003cp\u003eA TextDetails represents a fragment of text that will be\n output at some point.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "TextDetails",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
          "type": "data"
        },
        "index": {
          "description": "The TextDetails data type TextDetails represents fragment of text that will be output at some point",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "TextDetails",
          "package": "pretty",
          "partial": "Text Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#t:TextDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    text \"hi\" $$ nest 5 (text \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "($$)",
          "package": "pretty",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#%24%24",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-36--36-\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-36--36-\"]"
        },
        "index": {
          "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example text hi nest text there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "($$) $$",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "($+$)",
          "package": "pretty",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#%24%2B%24",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-36--43--36-\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-36--43--36-\"]"
        },
        "index": {
          "description": "Above with no overlapping is associative with identity empty",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "($+$) $+$",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-36--43--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "(\u003c+\u003e)",
          "package": "pretty",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#%3C%2B%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-60--43--62-\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-60--43--62-\"]"
        },
        "index": {
          "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "(\u003c\u003e)",
          "package": "pretty",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#%3C%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-60--62-\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:-60--62-\"]"
        },
        "index": {
          "description": "Beside is associative with identity empty",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single Char fragment\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "Chr",
          "package": "pretty",
          "signature": "Chr !Char",
          "source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Chr\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:Chr\"]"
        },
        "index": {
          "description": "single Char fragment",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Chr",
          "package": "pretty",
          "partial": "Chr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "LeftMode",
          "package": "pretty",
          "signature": "LeftMode",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:LeftMode\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:LeftMode\"]"
        },
        "index": {
          "description": "No indentation infinitely long lines",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "LeftMode",
          "package": "pretty",
          "partial": "Left Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:LeftMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "OneLineMode",
          "package": "pretty",
          "signature": "OneLineMode",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:OneLineMode\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:OneLineMode\"]"
        },
        "index": {
          "description": "All on one line",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "OneLineMode",
          "package": "pretty",
          "partial": "One Line Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:OneLineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to represent a Fast String fragment\n   but now deprecated and identical to the\n   Str constructor.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "PStr",
          "package": "pretty",
          "signature": "PStr String",
          "source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:PStr\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:PStr\"]"
        },
        "index": {
          "description": "Used to represent Fast String fragment but now deprecated and identical to the Str constructor",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "PStr",
          "package": "pretty",
          "partial": "PStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:PStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "PageMode",
          "package": "pretty",
          "signature": "PageMode",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:PageMode\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:PageMode\"]"
        },
        "index": {
          "description": "Normal",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "PageMode",
          "package": "pretty",
          "partial": "Page Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:PageMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA whole String fragment\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "Str",
          "package": "pretty",
          "signature": "Str String",
          "source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Str\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:Str\"]"
        },
        "index": {
          "description": "whole String fragment",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Str",
          "package": "pretty",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "Style",
          "package": "pretty",
          "signature": "Style",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Style",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Style\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:Style\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "Style",
          "package": "pretty",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "ZigZagMode",
          "package": "pretty",
          "signature": "ZigZagMode",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ZigZagMode\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:ZigZagMode\"]"
        },
        "index": {
          "description": "With zig-zag cuts",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "ZigZagMode",
          "package": "pretty",
          "partial": "Zig Zag Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ZigZagMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "braces",
          "package": "pretty",
          "signature": "Doc-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:braces\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:braces\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "braces",
          "normalized": "Doc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "brackets",
          "package": "pretty",
          "signature": "Doc-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:brackets\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:brackets\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "brackets",
          "normalized": "Doc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "cat",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#cat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:cat\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:cat\"]"
        },
        "index": {
          "description": "Either hcat or vcat",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "cat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document of height and width 1, containing a literal character.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "char",
          "package": "pretty",
          "signature": "Char -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:char\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:char\"]"
        },
        "index": {
          "description": "document of height and width containing literal character",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "char",
          "normalized": "Char-\u003eDoc",
          "package": "pretty",
          "signature": "Char-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "colon",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:colon\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:colon\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "colon",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "comma",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:comma\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:comma\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "comma",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "double",
          "package": "pretty",
          "signature": "Double-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:double\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:double\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "double",
          "normalized": "Double-\u003eDoc",
          "package": "pretty",
          "signature": "Double-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "doubleQuotes",
          "package": "pretty",
          "signature": "Doc-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:doubleQuotes\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:doubleQuotes\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "doubleQuotes",
          "normalized": "Doc-\u003eDoc",
          "package": "pretty",
          "partial": "Quotes",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:doubleQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty document, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "empty",
          "package": "pretty",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:empty\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:empty\"]"
        },
        "index": {
          "description": "The empty document with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "empty",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "equals",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:equals\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:equals\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "equals",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "fcat",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#fcat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fcat\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:fcat\"]"
        },
        "index": {
          "description": "Paragraph fill version of cat",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "fcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efirst\u003c/code\u003e returns its first argument if it is non-empty, otherwise its second.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "first",
          "package": "pretty",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#first",
          "type": "function"
        },
        "index": {
          "description": "first returns its first argument if it is non-empty otherwise its second",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "first",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "float",
          "package": "pretty",
          "signature": "Float-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:float\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:float\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "float",
          "normalized": "Float-\u003eDoc",
          "package": "pretty",
          "signature": "Float-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "fsep",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#fsep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fsep\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:fsep\"]"
        },
        "index": {
          "description": "Paragraph fill version of sep",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "fsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe general rendering interface.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "fullRender",
          "package": "pretty",
          "signature": "Mode-\u003e Int-\u003e Float-\u003e (TextDetails -\u003e a -\u003e a)-\u003e a-\u003e Doc-\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fullRender\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:fullRender\"]"
        },
        "index": {
          "description": "The general rendering interface",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "fullRender",
          "normalized": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
          "package": "pretty",
          "partial": "Render",
          "signature": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:fullRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "hang",
          "package": "pretty",
          "signature": "Doc -\u003e Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#hang",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hang\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:hang\"]"
        },
        "index": {
          "description": "hang d1 d2 sep d1 nest d2",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "hang",
          "normalized": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "hcat",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#hcat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hcat\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:hcat\"]"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "hcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "hsep",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#hsep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hsep\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:hsep\"]"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "hsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "int",
          "package": "pretty",
          "signature": "Int-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:int\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:int\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "int",
          "normalized": "Int-\u003eDoc",
          "package": "pretty",
          "signature": "Int-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "integer",
          "package": "pretty",
          "signature": "Integer-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:integer\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:integer\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "integer",
          "normalized": "Integer-\u003eDoc",
          "package": "pretty",
          "signature": "Integer-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the document is empty\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "isEmpty",
          "package": "pretty",
          "signature": "Doc -\u003e Bool",
          "source": "src/Text-PrettyPrint-HughesPJ.html#isEmpty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:isEmpty\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:isEmpty\"]"
        },
        "index": {
          "description": "Returns True if the document is empty",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "isEmpty",
          "normalized": "Doc-\u003eBool",
          "package": "pretty",
          "partial": "Empty",
          "signature": "Doc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "lbrace",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lbrace\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lbrace\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "lbrace",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "lbrack",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lbrack\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lbrack\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "lbrack",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "lineLength",
          "package": "pretty",
          "signature": "Int",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Style",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lineLength\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lineLength\"]"
        },
        "index": {
          "description": "Length of line in chars",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "lineLength",
          "package": "pretty",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "lparen",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lparen\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:lparen\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "lparen",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rendering mode\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "mode",
          "package": "pretty",
          "signature": "Mode",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Style",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:mode\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:mode\"]"
        },
        "index": {
          "description": "The rendering mode",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "mode",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNest (or indent) a document by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "nest",
          "package": "pretty",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#nest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:nest\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:nest\"]"
        },
        "index": {
          "description": "Nest or indent document by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "nest",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "pretty",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "parens",
          "package": "pretty",
          "signature": "Doc-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:parens\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:parens\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "parens",
          "normalized": "Doc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003etext\u003c/code\u003e. Used to be used for Bytestrings.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "ptext",
          "package": "pretty",
          "signature": "String -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#ptext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ptext\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:ptext\"]"
        },
        "index": {
          "description": "Same as text Used to be used for Bytestrings",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "ptext",
          "normalized": "String-\u003eDoc",
          "package": "pretty",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ptext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003epunctuate p [d1, ... dn] = [d1 \u003c\u003e p, d2 \u003c\u003e p, ... dn-1 \u003c\u003e p, dn]\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "punctuate",
          "package": "pretty",
          "signature": "Doc -\u003e [Doc] -\u003e [Doc]",
          "source": "src/Text-PrettyPrint-HughesPJ.html#punctuate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:punctuate\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:punctuate\"]"
        },
        "index": {
          "description": "punctuate d1 dn d1 d2 dn-1 dn",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "punctuate",
          "normalized": "Doc-\u003e[Doc]-\u003e[Doc]",
          "package": "pretty",
          "signature": "Doc-\u003e[Doc]-\u003e[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "quotes",
          "package": "pretty",
          "signature": "Doc-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:quotes\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:quotes\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "quotes",
          "normalized": "Doc-\u003eDoc",
          "package": "pretty",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:quotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "rational",
          "package": "pretty",
          "signature": "Rational-\u003e Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rational\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rational\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "rational",
          "normalized": "Rational-\u003eDoc",
          "package": "pretty",
          "signature": "Rational-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "rbrace",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rbrace\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rbrace\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "rbrace",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "rbrack",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rbrack\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rbrack\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "rbrack",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform some simplification of a built up \u003ccode\u003eGDoc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "reduceDoc",
          "package": "pretty",
          "signature": "Doc -\u003e RDoc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#reduceDoc",
          "type": "function"
        },
        "index": {
          "description": "Perform some simplification of built up GDoc",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "reduceDoc",
          "normalized": "Doc-\u003eRDoc",
          "package": "pretty",
          "partial": "Doc",
          "signature": "Doc-\u003eRDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:reduceDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the default \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "render",
          "package": "pretty",
          "signature": "Doc -\u003e String",
          "source": "src/Text-PrettyPrint-HughesPJ.html#render",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:render\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:render\"]"
        },
        "index": {
          "description": "Render the Doc to String using the default Style",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "render",
          "normalized": "Doc-\u003eString",
          "package": "pretty",
          "signature": "Doc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the given \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "renderStyle",
          "package": "pretty",
          "signature": "Style -\u003e Doc -\u003e String",
          "source": "src/Text-PrettyPrint-HughesPJ.html#renderStyle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:renderStyle\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:renderStyle\"]"
        },
        "index": {
          "description": "Render the Doc to String using the given Style",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "renderStyle",
          "normalized": "Style-\u003eDoc-\u003eString",
          "package": "pretty",
          "partial": "Style",
          "signature": "Style-\u003eDoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:renderStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "ribbonsPerLine",
          "package": "pretty",
          "signature": "Float",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Style",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ribbonsPerLine\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:ribbonsPerLine\"]"
        },
        "index": {
          "description": "Ratio of ribbon length to line length",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "ribbonsPerLine",
          "package": "pretty",
          "partial": "Per Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:ribbonsPerLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "rparen",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rparen\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:rparen\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "rparen",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "semi",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:semi\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:semi\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "semi",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "sep",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#sep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:sep\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:sep\"]"
        },
        "index": {
          "description": "Either hsep or vcat",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "sep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome text with any width. (\u003ccode\u003etext s = sizedText (length s) s\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "sizedText",
          "package": "pretty",
          "signature": "Int -\u003e String -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#sizedText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:sizedText\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:sizedText\"]"
        },
        "index": {
          "description": "Some text with any width text sizedText length",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "sizedText",
          "normalized": "Int-\u003eString-\u003eDoc",
          "package": "pretty",
          "partial": "Text",
          "signature": "Int-\u003eString-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:sizedText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "space",
          "package": "pretty",
          "signature": "Doc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:space\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:space\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "space",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "style",
          "package": "pretty",
          "signature": "Style",
          "source": "src/Text-PrettyPrint-HughesPJ.html#style",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:style\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:style\"]"
        },
        "index": {
          "description": "The default style mode PageMode lineLength ribbonsPerLine",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "style",
          "package": "pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "text",
          "package": "pretty",
          "signature": "String -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#text",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:text\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:text\"]"
        },
        "index": {
          "description": "document of height containing literal string text satisfies the following laws text text text text if non-empty The side condition on the last law is necessary because text has height while empty has no height",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "text",
          "normalized": "String-\u003eDoc",
          "package": "pretty",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "vcat",
          "package": "pretty",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#vcat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:vcat\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:vcat\"]"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "vcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "pretty",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome text, but without any width. Use for non-printing text\n such as a HTML or Latex tags\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.HughesPJ\",\"Text.PrettyPrint\"]",
          "name": "zeroWidthText",
          "package": "pretty",
          "signature": "String -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJ.html#zeroWidthText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:zeroWidthText\",\"http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#v:zeroWidthText\"]"
        },
        "index": {
          "description": "Some text but without any width Use for non-printing text such as HTML or Latex tags",
          "hierarchy": "Text PrettyPrint HughesPJ",
          "module": "Text.PrettyPrint.HughesPJ",
          "name": "zeroWidthText",
          "normalized": "String-\u003eDoc",
          "package": "pretty",
          "partial": "Width Text",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint-HughesPJ.html#v:zeroWidthText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe default interface to the pretty-printing library. Provides a collection\n of pretty printer combinators.\n\u003c/p\u003e\u003cp\u003eThis module should be used as opposed to the \u003ca\u003eText.PrettyPrint.HughesPJ\u003c/a\u003e\n module. Both are equivalent though as this module simply re-exports the\n other.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint",
          "name": "PrettyPrint",
          "package": "pretty",
          "source": "src/Text-PrettyPrint.html",
          "type": "module"
        },
        "index": {
          "description": "The default interface to the pretty-printing library Provides collection of pretty printer combinators This module should be used as opposed to the Text.PrettyPrint.HughesPJ module Both are equivalent though as this module simply re-exports the other",
          "hierarchy": "Text PrettyPrint",
          "module": "Text.PrettyPrint",
          "name": "PrettyPrint",
          "package": "pretty",
          "partial": "Pretty Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract type of documents.\n A Doc represents a *set* of layouts. A Doc with\n no occurrences of Union or NoDoc represents just one layout.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint",
          "name": "Doc",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract type of documents Doc represents set of layouts Doc with no occurrences of Union or NoDoc represents just one layout",
          "hierarchy": "Text PrettyPrint",
          "module": "Text.PrettyPrint",
          "name": "Doc",
          "package": "pretty",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint",
          "name": "Mode",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Rendering mode",
          "hierarchy": "Text PrettyPrint",
          "module": "Text.PrettyPrint",
          "name": "Mode",
          "package": "pretty",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint",
          "name": "Style",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#Style",
          "type": "data"
        },
        "index": {
          "description": "rendering style",
          "hierarchy": "Text PrettyPrint",
          "module": "Text.PrettyPrint",
          "name": "Style",
          "package": "pretty",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TextDetails data type\n\u003c/p\u003e\u003cp\u003eA TextDetails represents a fragment of text that will be\n output at some point.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint",
          "name": "TextDetails",
          "package": "pretty",
          "source": "src/Text-PrettyPrint-HughesPJ.html#TextDetails",
          "type": "data"
        },
        "index": {
          "description": "The TextDetails data type TextDetails represents fragment of text that will be output at some point",
          "hierarchy": "Text PrettyPrint",
          "module": "Text.PrettyPrint",
          "name": "TextDetails",
          "package": "pretty",
          "partial": "Text Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty/docs/Text-PrettyPrint.html#t:TextDetails"
      }
    }
  ]
]