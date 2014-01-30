[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class that have methods \u003ccode\u003euncons\u003c/code\u003e and \u003ccode\u003etoString\u003c/code\u003e, so that we\n   can handle them as String-like objects.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.NaturalComp.Stringy",
        "fct-package": "naturalcomp",
        "fct-signature": "module",
        "fct-source": "src/Text-NaturalComp-Stringy.html",
        "fct-type": "module",
        "title": "Stringy"
      },
      "index": {
        "description": "type class that have methods uncons and toString so that we can handle them as String-like objects",
        "hierarchy": "Text NaturalComp Stringy",
        "module": "Text.NaturalComp.Stringy",
        "name": "Stringy",
        "normalized": "",
        "package": "naturalcomp",
        "partial": "Stringy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#t:Stringy",
      "description": {
        "fct-module": "Text.NaturalComp.Stringy",
        "fct-package": "naturalcomp",
        "fct-signature": "class",
        "fct-source": "src/Text-NaturalComp-Stringy.html#Stringy",
        "fct-type": "class",
        "title": "Stringy"
      },
      "index": {
        "description": "",
        "hierarchy": "Text NaturalComp Stringy",
        "module": "Text.NaturalComp.Stringy",
        "name": "Stringy",
        "normalized": "",
        "package": "naturalcomp",
        "partial": "Stringy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#v:toString",
      "description": {
        "fct-module": "Text.NaturalComp.Stringy",
        "fct-package": "naturalcomp",
        "fct-signature": "s -\u003e String",
        "fct-source": "src/Text-NaturalComp-Stringy.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text NaturalComp Stringy",
        "module": "Text.NaturalComp.Stringy",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "naturalcomp",
        "partial": "String",
        "signature": "s-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#v:uncons",
      "description": {
        "fct-module": "Text.NaturalComp.Stringy",
        "fct-package": "naturalcomp",
        "fct-signature": "s -\u003e Maybe (Char, s)",
        "fct-source": "src/Text-NaturalComp-Stringy.html#uncons",
        "fct-type": "method",
        "title": "uncons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text NaturalComp Stringy",
        "module": "Text.NaturalComp.Stringy",
        "name": "uncons",
        "normalized": "a-\u003eMaybe(Char,a)",
        "package": "naturalcomp",
        "partial": "",
        "signature": "s-\u003eMaybe(Char,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNatural order string comparison is needed when e.g. one wants to compare\n   file names or strings of software version.  It's aimed to be compatible\n   to glibc's strverscmp() function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.NaturalComp",
        "fct-package": "naturalcomp",
        "fct-signature": "module",
        "fct-source": "src/Text-NaturalComp.html",
        "fct-type": "module",
        "title": "NaturalComp"
      },
      "index": {
        "description": "Natural order string comparison is needed when e.g one wants to compare file names or strings of software version It aimed to be compatible to glibc strverscmp function",
        "hierarchy": "Text NaturalComp",
        "module": "Text.NaturalComp",
        "name": "NaturalComp",
        "normalized": "",
        "package": "naturalcomp",
        "partial": "Natural Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#v:naturalCaseComp",
      "description": {
        "fct-descr": "\u003cp\u003enatural order and case-insensitive string comparison\n\u003c/p\u003e",
        "fct-module": "Text.NaturalComp",
        "fct-package": "naturalcomp",
        "fct-signature": "s -\u003e s -\u003e Ordering",
        "fct-source": "src/Text-NaturalComp.html#naturalCaseComp",
        "fct-type": "function",
        "title": "naturalCaseComp"
      },
      "index": {
        "description": "natural order and case-insensitive string comparison",
        "hierarchy": "Text NaturalComp",
        "module": "Text.NaturalComp",
        "name": "naturalCaseComp",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "naturalcomp",
        "partial": "Case Comp",
        "signature": "s-\u003es-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#v:naturalComp",
      "description": {
        "fct-descr": "\u003cp\u003enatural order string comparison, compatible to glibc's strverscmp()\n\u003c/p\u003e",
        "fct-module": "Text.NaturalComp",
        "fct-package": "naturalcomp",
        "fct-signature": "s -\u003e s -\u003e Ordering",
        "fct-source": "src/Text-NaturalComp.html#naturalComp",
        "fct-type": "function",
        "title": "naturalComp"
      },
      "index": {
        "description": "natural order string comparison compatible to glibc strverscmp",
        "hierarchy": "Text NaturalComp",
        "module": "Text.NaturalComp",
        "name": "naturalComp",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "naturalcomp",
        "partial": "Comp",
        "signature": "s-\u003es-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#v:naturalCompBy",
      "description": {
        "fct-descr": "\u003cp\u003enatural order string comparison, with user-specified function\n\u003c/p\u003e",
        "fct-module": "Text.NaturalComp",
        "fct-package": "naturalcomp",
        "fct-signature": "(Char -\u003e Char -\u003e Ordering) -\u003e s -\u003e s -\u003e Ordering",
        "fct-source": "src/Text-NaturalComp.html#naturalCompBy",
        "fct-type": "function",
        "title": "naturalCompBy"
      },
      "index": {
        "description": "natural order string comparison with user-specified function",
        "hierarchy": "Text NaturalComp",
        "module": "Text.NaturalComp",
        "name": "naturalCompBy",
        "normalized": "(Char-\u003eChar-\u003eOrdering)-\u003ea-\u003ea-\u003eOrdering",
        "package": "naturalcomp",
        "partial": "Comp By",
        "signature": "(Char-\u003eChar-\u003eOrdering)-\u003es-\u003es-\u003eOrdering"
      }
    }
  }
]