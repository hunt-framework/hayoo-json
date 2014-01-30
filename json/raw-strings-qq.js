[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raw-strings-qq/docs/Text-RawString-QQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRaw string literals, implemented using Template Haskell's quasiquotation\n feature.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RawString.QQ",
        "fct-package": "raw-strings-qq",
        "fct-signature": "module",
        "fct-source": "src/Text-RawString-QQ.html",
        "fct-type": "module",
        "title": "QQ"
      },
      "index": {
        "description": "Raw string literals implemented using Template Haskell quasiquotation feature",
        "hierarchy": "Text RawString QQ",
        "module": "Text.RawString.QQ",
        "name": "QQ",
        "normalized": "",
        "package": "raw-strings-qq",
        "partial": "QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raw-strings-qq/docs/Text-RawString-QQ.html#v:r",
      "description": {
        "fct-descr": "\u003cp\u003eA quasiquoter for raw string literals - that is, string literals that don't\nrecognise the standard escape sequences (such as \u003ccode\u003e'\\n'\u003c/code\u003e). Basically, they\nmake your code more readable by freeing you from the responsibility to escape\nbackslashes. They are useful when working with regular expressions, DOS/Windows\npaths and markup languages (such as XML).\n\u003c/p\u003e\u003cp\u003eDon't forget the \u003ccode\u003eLANGUAGE QuasiQuotes\u003c/code\u003e pragma if you're using this\nmodule in your code.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e\n    ghci\u003e :set -XQuasiQuotes\n    ghci\u003e import Text.RawString.QQ\n    ghci\u003e let s = [r|\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}|]\n    ghci\u003e s\n    \"\\\\w+@[a-zA-Z_]+?\\\\.[a-zA-Z]{2,3}\"\n    ghci\u003e [r|C:\\Windows\\SYSTEM|] ++ [r|\\user32.dll|]\n    \"C:\\\\Windows\\\\SYSTEM\\\\user32.dll\"\n\u003c/pre\u003e\u003cp\u003eMultiline raw string literals are also supported:\n\u003c/p\u003e\u003cpre\u003e\n    multiline :: String\n    multiline = [r|\u003cHTML\u003e\n    \u003cHEAD\u003e\n    \u003cTITLE\u003eAuto-generated html formated source\u003c/TITLE\u003e\n    \u003cMETA HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=windows-1252\"\u003e\n    \u003c/HEAD\u003e\n    \u003cBODY LINK=\"\u003ca name=\"0000ff\\\" VLINK=\\\"\"/\u003e800080\" BGCOLOR=\"#ffffff\"\u003e\n    \u003cP\u003e \u003c/P\u003e\n    \u003cPRE\u003e|]\n\u003c/pre\u003e\u003cp\u003eCaveat: since the \u003ccode\u003e\"|]\"\u003c/code\u003e character sequence is used to terminate the\nquasiquotation, you can't use it inside the raw string literal. Use \u003ccode\u003e\u003ca\u003erQ\u003c/a\u003e\u003c/code\u003e if you\nwant to embed that character sequence inside the raw string.\n\u003c/p\u003e\u003cp\u003eFor more on raw strings, see e.g.\n\u003ca\u003ehttp://www.open-std.org/jtc1/sc22/wg21/docs/papers/2006/n2053.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor more on quasiquotation, see\n\u003ca\u003ehttp://www.haskell.org/haskellwiki/Quasiquotation\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Text.RawString.QQ",
        "fct-package": "raw-strings-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-RawString-QQ.html#r",
        "fct-type": "function",
        "title": "r"
      },
      "index": {
        "description": "quasiquoter for raw string literals that is string literals that don recognise the standard escape sequences such as Basically they make your code more readable by freeing you from the responsibility to escape backslashes They are useful when working with regular expressions DOS Windows paths and markup languages such as XML Don forget the LANGUAGE QuasiQuotes pragma if you re using this module in your code Usage ghci set XQuasiQuotes ghci import Text.RawString.QQ ghci let a-zA-Z a-zA-Z ghci a-zA-Z a-zA-Z ghci Windows SYSTEM user32.dll Windows SYSTEM user32.dll Multiline raw string literals are also supported multiline String multiline HTML HEAD TITLE Auto-generated html formated source TITLE META HTTP-EQUIV Content-Type CONTENT text html charset windows-1252 HEAD BODY LINK BGCOLOR ffffff PRE Caveat since the character sequence is used to terminate the quasiquotation you can use it inside the raw string literal Use rQ if you want to embed that character sequence inside the raw string For more on raw strings see e.g http www.open-std.org jtc1 sc22 wg21 docs papers n2053.html For more on quasiquotation see http www.haskell.org haskellwiki Quasiquotation",
        "hierarchy": "Text RawString QQ",
        "module": "Text.RawString.QQ",
        "name": "r",
        "normalized": "",
        "package": "raw-strings-qq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raw-strings-qq/docs/Text-RawString-QQ.html#v:rQ",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003er\u003c/a\u003e\u003c/code\u003e that interprets the \u003ccode\u003e\"|~]\"\u003c/code\u003e sequence as \u003ccode\u003e\"|]\"\u003c/code\u003e,\n\u003ccode\u003e\"|~~]\"\u003c/code\u003e as \u003ccode\u003e\"|~]\"\u003c/code\u003e and, in general, \u003ccode\u003e\"|~^n]\"\u003c/code\u003e as \u003ccode\u003e\"|~^(n-1)]\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e\n    ghci\u003e [rQ||~]|~]|]\n    \"|]|]\"\n    ghci\u003e [rQ||~~]|]\n    \"|~]\"\n    ghci\u003e [rQ||~~~~]|]\n    \"|~~~]\"\n\u003c/pre\u003e",
        "fct-module": "Text.RawString.QQ",
        "fct-package": "raw-strings-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-RawString-QQ.html#rQ",
        "fct-type": "function",
        "title": "rQ"
      },
      "index": {
        "description": "variant of that interprets the sequence as as and in general as n-1 Usage ghci rQ ghci rQ ghci rQ",
        "hierarchy": "Text RawString QQ",
        "module": "Text.RawString.QQ",
        "name": "rQ",
        "normalized": "",
        "package": "raw-strings-qq",
        "partial": "",
        "signature": ""
      }
    }
  }
]