[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an unsafe way to create a case insensitive string-like value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CaseInsensitive.Unsafe",
        "fct-package": "case-insensitive",
        "fct-signature": "module",
        "fct-source": "src/Data-CaseInsensitive-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Provides an unsafe way to create case insensitive string-like value",
        "hierarchy": "Data CaseInsensitive Unsafe",
        "module": "Data.CaseInsensitive.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "case-insensitive",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive-Unsafe.html#v:unsafeMk",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eCI\u003c/a\u003e\u003c/code\u003e from an already case folded string-like\n value. The given string is used both as the \u003ccode\u003e\u003ca\u003eoriginal\u003c/a\u003e\u003c/code\u003e as well as\n the \u003ccode\u003e\u003ca\u003efoldedCase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is unsafe since the compiler can't guarantee that the\n provided string is case folded.\n\u003c/p\u003e",
        "fct-module": "Data.CaseInsensitive.Unsafe",
        "fct-package": "case-insensitive",
        "fct-signature": "s -\u003e CI s",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#unsafeMk",
        "fct-type": "function",
        "title": "unsafeMk"
      },
      "index": {
        "description": "Constructs CI from an already case folded string-like value The given string is used both as the original as well as the foldedCase This function is unsafe since the compiler can guarantee that the provided string is case folded",
        "hierarchy": "Data CaseInsensitive Unsafe",
        "module": "Data.CaseInsensitive.Unsafe",
        "name": "unsafeMk",
        "normalized": "a-\u003eCI a",
        "package": "case-insensitive",
        "partial": "Mk",
        "signature": "s-\u003eCI s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is intended to be imported qualified. May I suggest:\n\u003c/p\u003e\u003cpre\u003e\n import           Data.CaseInsensitive  ( CI )\n import qualified Data.CaseInsensitive as CI\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote that the FoldCase instance for ByteStrings is only\u003c/em\u003e\n \u003cem\u003eguaranteed to be correct for ISO-8859-1 encoded strings!\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "module",
        "fct-source": "src/Data-CaseInsensitive.html",
        "fct-type": "module",
        "title": "CaseInsensitive"
      },
      "index": {
        "description": "This module is intended to be imported qualified May suggest import Data.CaseInsensitive CI import qualified Data.CaseInsensitive as CI Note that the FoldCase instance for ByteStrings is only guaranteed to be correct for ISO-8859-1 encoded strings",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "CaseInsensitive",
        "normalized": "",
        "package": "case-insensitive",
        "partial": "Case Insensitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#t:CI",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eCI s\u003c/code\u003e provides \u003cem\u003eC\u003c/em\u003ease \u003cem\u003eI\u003c/em\u003ensensitive comparison for the string-like type\n\u003ccode\u003es\u003c/code\u003e (for example: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, etc.).\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eCI s\u003c/code\u003e has an instance for \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e which together with the\n\u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension allows you to write case insensitive\nstring literals as in:\n\u003c/p\u003e\u003cpre\u003e\n\u003e (\"Content-Type\" :: \u003ccode\u003e\u003ca\u003eCI\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e) == (\"CONTENT-TYPE\" :: \u003ccode\u003e\u003ca\u003eCI\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e)\nTrue\n\u003c/pre\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "data",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#CI",
        "fct-type": "data",
        "title": "CI"
      },
      "index": {
        "description": "CI provides ase nsensitive comparison for the string-like type for example String Text ByteString etc Note that CI has an instance for IsString which together with the OverloadedStrings language extension allows you to write case insensitive string literals as in Content-Type CI Text CONTENT-TYPE CI Text True",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "CI",
        "normalized": "",
        "package": "case-insensitive",
        "partial": "CI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#t:FoldCase",
      "description": {
        "fct-descr": "\u003cp\u003eClass of string-like types that support folding cases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: In some languages, case conversion is a locale- and context-dependent\n operation. The \u003ccode\u003efoldCase\u003c/code\u003e method is \u003cem\u003enot\u003c/em\u003e intended to be locale sensitive.\n Programs that require locale sensitivity should use appropriate versions of\n the case mapping functions from the \u003ccode\u003etext-icu\u003c/code\u003e package:\n \u003ca\u003ehttp://hackage.haskell.org/package/text-icu\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "class",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#FoldCase",
        "fct-type": "class",
        "title": "FoldCase"
      },
      "index": {
        "description": "Class of string-like types that support folding cases Note In some languages case conversion is locale and context-dependent operation The foldCase method is not intended to be locale sensitive Programs that require locale sensitivity should use appropriate versions of the case mapping functions from the text-icu package http hackage.haskell.org package text-icu",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "FoldCase",
        "normalized": "",
        "package": "case-insensitive",
        "partial": "Fold Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#v:foldCase",
      "description": {
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#foldCase",
        "fct-type": "method",
        "title": "foldCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "foldCase",
        "normalized": "a-\u003ea",
        "package": "case-insensitive",
        "partial": "Case",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#v:foldedCase",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the case folded string-like value.\n   (Also see \u003ccode\u003e\u003ca\u003efoldCase\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "CI s -\u003e s",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#foldedCase",
        "fct-type": "function",
        "title": "foldedCase"
      },
      "index": {
        "description": "Retrieve the case folded string-like value Also see foldCase",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "foldedCase",
        "normalized": "CI a-\u003ea",
        "package": "case-insensitive",
        "partial": "Case",
        "signature": "CI s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the original string-like value but keep it case insensitive.\n\u003c/p\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "(s1 -\u003e s2) -\u003e CI s1 -\u003e CI s2",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Transform the original string-like value but keep it case insensitive",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "map",
        "normalized": "(a-\u003ea)-\u003eCI a-\u003eCI a",
        "package": "case-insensitive",
        "partial": "",
        "signature": "(s-\u003es)-\u003eCI s-\u003eCI s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#v:mk",
      "description": {
        "fct-descr": "\u003cp\u003eMake the given string-like value case insensitive.\n\u003c/p\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "s -\u003e CI s",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#mk",
        "fct-type": "function",
        "title": "mk"
      },
      "index": {
        "description": "Make the given string-like value case insensitive",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "mk",
        "normalized": "a-\u003eCI a",
        "package": "case-insensitive",
        "partial": "",
        "signature": "s-\u003eCI s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/case-insensitive/docs/Data-CaseInsensitive.html#v:original",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the original string-like value.\n\u003c/p\u003e",
        "fct-module": "Data.CaseInsensitive",
        "fct-package": "case-insensitive",
        "fct-signature": "CI s -\u003e s",
        "fct-source": "src/Data-CaseInsensitive-Internal.html#original",
        "fct-type": "function",
        "title": "original"
      },
      "index": {
        "description": "Retrieve the original string-like value",
        "hierarchy": "Data CaseInsensitive",
        "module": "Data.CaseInsensitive",
        "name": "original",
        "normalized": "CI a-\u003ea",
        "package": "case-insensitive",
        "partial": "",
        "signature": "CI s-\u003es"
      }
    }
  }
]