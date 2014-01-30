[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Camel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransform separated_words identifiers to camelCase in Haskell source.\n Based on Richard O'Keefe's preprocessor hspp.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Transform.Camel",
        "fct-package": "restyle",
        "fct-signature": "module",
        "fct-source": "src/Data-Transform-Camel.html",
        "fct-type": "module",
        "title": "Camel"
      },
      "index": {
        "description": "Transform separated words identifiers to camelCase in Haskell source Based on Richard Keefe preprocessor hspp",
        "hierarchy": "Data Transform Camel",
        "module": "Data.Transform.Camel",
        "name": "Camel",
        "normalized": "",
        "package": "restyle",
        "partial": "Camel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Camel.html#v:camelSource",
      "description": {
        "fct-descr": "\u003cp\u003eTransform Haskell code written in separated_words style\n   to the more common camelCase style.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecamelSource sep source\u003c/code\u003e removes all occurences of \u003ccode\u003esep\u003c/code\u003e\n   in identifiers in \u003ccode\u003esource\u003c/code\u003e between two letters of which\n   the first is in lower case after processing and\n   transforms the second to upper case.\n   Thus \u003ccode\u003ecamelSource '_' \"a_b_c\" == \"aB_c\"\u003c/code\u003e since after\n   processing the first underscore, the second is no longer\n   preceded by a lowercase letter.\n\u003c/p\u003e\u003cp\u003eComments (and \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e literals) are not transformed, so\n   haddock comments may need manual fixing.\n\u003c/p\u003e",
        "fct-module": "Data.Transform.Camel",
        "fct-package": "restyle",
        "fct-signature": "Char -\u003e String -\u003e String",
        "fct-source": "src/Data-Transform-Camel.html#camelSource",
        "fct-type": "function",
        "title": "camelSource"
      },
      "index": {
        "description": "Transform Haskell code written in separated words style to the more common camelCase style camelSource sep source removes all occurences of sep in identifiers in source between two letters of which the first is in lower case after processing and transforms the second to upper case Thus camelSource aB since after processing the first underscore the second is no longer preceded by lowercase letter Comments and String literals are not transformed so haddock comments may need manual fixing",
        "hierarchy": "Data Transform Camel",
        "module": "Data.Transform.Camel",
        "name": "camelSource",
        "normalized": "Char-\u003eString-\u003eString",
        "package": "restyle",
        "partial": "Source",
        "signature": "Char-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Separators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCharacters to visually separate words in compound identifiers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Transform.Separators",
        "fct-package": "restyle",
        "fct-signature": "module",
        "fct-source": "src/Data-Transform-Separators.html",
        "fct-type": "module",
        "title": "Separators"
      },
      "index": {
        "description": "Characters to visually separate words in compound identifiers",
        "hierarchy": "Data Transform Separators",
        "module": "Data.Transform.Separators",
        "name": "Separators",
        "normalized": "",
        "package": "restyle",
        "partial": "Separators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Separators.html#v:doubleLowLine",
      "description": {
        "fct-descr": "\u003cp\u003eDouble low line, U+2017\n\u003c/p\u003e",
        "fct-module": "Data.Transform.Separators",
        "fct-package": "restyle",
        "fct-signature": "Char",
        "fct-source": "src/Data-Transform-Separators.html#doubleLowLine",
        "fct-type": "function",
        "title": "doubleLowLine"
      },
      "index": {
        "description": "Double low line",
        "hierarchy": "Data Transform Separators",
        "module": "Data.Transform.Separators",
        "name": "doubleLowLine",
        "normalized": "",
        "package": "restyle",
        "partial": "Low Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Separators.html#v:hyphen",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode hyphen, U+2010\n\u003c/p\u003e",
        "fct-module": "Data.Transform.Separators",
        "fct-package": "restyle",
        "fct-signature": "Char",
        "fct-source": "src/Data-Transform-Separators.html#hyphen",
        "fct-type": "function",
        "title": "hyphen"
      },
      "index": {
        "description": "Unicode hyphen",
        "hierarchy": "Data Transform Separators",
        "module": "Data.Transform.Separators",
        "name": "hyphen",
        "normalized": "",
        "package": "restyle",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Separators.html#v:lowLine",
      "description": {
        "fct-descr": "\u003cp\u003eLow line or underscore, U+005F\n\u003c/p\u003e",
        "fct-module": "Data.Transform.Separators",
        "fct-package": "restyle",
        "fct-signature": "Char",
        "fct-source": "src/Data-Transform-Separators.html#lowLine",
        "fct-type": "function",
        "title": "lowLine"
      },
      "index": {
        "description": "Low line or underscore",
        "hierarchy": "Data Transform Separators",
        "module": "Data.Transform.Separators",
        "name": "lowLine",
        "normalized": "",
        "package": "restyle",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-Separators.html#v:wideLowLine",
      "description": {
        "fct-descr": "\u003cp\u003eWide low line, U+FF3F\n\u003c/p\u003e",
        "fct-module": "Data.Transform.Separators",
        "fct-package": "restyle",
        "fct-signature": "Char",
        "fct-source": "src/Data-Transform-Separators.html#wideLowLine",
        "fct-type": "function",
        "title": "wideLowLine"
      },
      "index": {
        "description": "Wide low line FF3F",
        "hierarchy": "Data Transform Separators",
        "module": "Data.Transform.Separators",
        "name": "wideLowLine",
        "normalized": "",
        "package": "restyle",
        "partial": "Low Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-UnCamel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransform camelCased identifiers to separated_words.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Transform.UnCamel",
        "fct-package": "restyle",
        "fct-signature": "module",
        "fct-source": "src/Data-Transform-UnCamel.html",
        "fct-type": "module",
        "title": "UnCamel"
      },
      "index": {
        "description": "Transform camelCased identifiers to separated words",
        "hierarchy": "Data Transform UnCamel",
        "module": "Data.Transform.UnCamel",
        "name": "UnCamel",
        "normalized": "",
        "package": "restyle",
        "partial": "Un Camel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-UnCamel.html#v:unCamelHTML",
      "description": {
        "fct-descr": "\u003cp\u003eTransform identifiers in (haddock-produced) HTML files from\n   camelCase to separated_words.\n\u003c/p\u003e\u003cp\u003eThe separation character is freely choosable, but it is\n   recommended to take one of those in \u003ca\u003eTransform.Separators\u003c/a\u003e. Since\n   underscore-separated identifiers are used in some\n   libraries, choosing \u003ccode\u003elowLine\u003c/code\u003e may lead to confusion.\n\u003c/p\u003e\u003cp\u003eThe separation character is inserted between a lowercase\n   character and an uppercase character immediately following.\n   If that uppercase character is followed by a lowercase letter,\n   it is also transformed to lower case.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e literals appearing in haddock comments are also\n   transformed. Deal with it or yell.\n\u003c/p\u003e",
        "fct-module": "Data.Transform.UnCamel",
        "fct-package": "restyle",
        "fct-signature": "Char -\u003e String -\u003e String",
        "fct-source": "src/Data-Transform-UnCamel.html#unCamelHTML",
        "fct-type": "function",
        "title": "unCamelHTML"
      },
      "index": {
        "description": "Transform identifiers in haddock-produced HTML files from camelCase to separated words The separation character is freely choosable but it is recommended to take one of those in Transform.Separators Since underscore-separated identifiers are used in some libraries choosing lowLine may lead to confusion The separation character is inserted between lowercase character and an uppercase character immediately following If that uppercase character is followed by lowercase letter it is also transformed to lower case String literals appearing in haddock comments are also transformed Deal with it or yell",
        "hierarchy": "Data Transform UnCamel",
        "module": "Data.Transform.UnCamel",
        "name": "unCamelHTML",
        "normalized": "Char-\u003eString-\u003eString",
        "package": "restyle",
        "partial": "Camel HTML",
        "signature": "Char-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restyle/docs/Data-Transform-UnCamel.html#v:unCamelSource",
      "description": {
        "fct-descr": "\u003cp\u003eTransform identifiers in (non-literate) source files from\n   camelCase to separated_words.\n\u003c/p\u003e\u003cp\u003eThe separation character is freely choosable, but it is\n   recommended to take one of those in \u003ca\u003eTransform.Separators\u003c/a\u003e. Since\n   underscore-separated identifiers are used in some\n   libraries, choosing \u003ccode\u003elowLine\u003c/code\u003e may lead to confusion.\n   On the other hand, it is the only one which has a\n   fighting chance of producing valid Haskell code.\n\u003c/p\u003e\u003cp\u003eThe separation character is inserted between a lowercase\n   character and an uppercase character immediately following.\n   If that uppercase charcter is followed by a lowercase letter,\n   it is also transformed to lower case.\n\u003c/p\u003e\u003cp\u003eOperators including two or more consecutive dashes are\n   handled correctly, i.e. \u003ccode\u003e|--\u003c/code\u003e or \u003ccode\u003e--:\u003c/code\u003e are not treated\n   as the start of a line-comment.\n\u003c/p\u003e\u003cp\u003eSingle quotes in identifiers, as in \u003ccode\u003efoldl'\u003c/code\u003e or \u003ccode\u003ef'2''d\u003c/code\u003e, are\n   not considered to begin a character literal. An unfortunate\n   consequence of that and the simple algorithm is that in an\n   expression like\n\u003c/p\u003e\u003cpre\u003e              replicate 5'\\\\'\n\u003c/pre\u003e\u003cp\u003e(with no space between number and character literal), the\n   closing quote is considered to begin a character literal.\n\u003c/p\u003e\u003cp\u003eComments are not transformed, which may lead to inconsistencies\n   between code and comments. That may change in the future.\n\u003c/p\u003e",
        "fct-module": "Data.Transform.UnCamel",
        "fct-package": "restyle",
        "fct-signature": "Char -\u003e String -\u003e String",
        "fct-source": "src/Data-Transform-UnCamel.html#unCamelSource",
        "fct-type": "function",
        "title": "unCamelSource"
      },
      "index": {
        "description": "Transform identifiers in non-literate source files from camelCase to separated words The separation character is freely choosable but it is recommended to take one of those in Transform.Separators Since underscore-separated identifiers are used in some libraries choosing lowLine may lead to confusion On the other hand it is the only one which has fighting chance of producing valid Haskell code The separation character is inserted between lowercase character and an uppercase character immediately following If that uppercase charcter is followed by lowercase letter it is also transformed to lower case Operators including two or more consecutive dashes are handled correctly i.e or are not treated as the start of line-comment Single quotes in identifiers as in foldl or are not considered to begin character literal An unfortunate consequence of that and the simple algorithm is that in an expression like replicate with no space between number and character literal the closing quote is considered to begin character literal Comments are not transformed which may lead to inconsistencies between code and comments That may change in the future",
        "hierarchy": "Data Transform UnCamel",
        "module": "Data.Transform.UnCamel",
        "name": "unCamelSource",
        "normalized": "Char-\u003eString-\u003eString",
        "package": "restyle",
        "partial": "Camel Source",
        "signature": "Char-\u003eString-\u003eString"
      }
    }
  }
]