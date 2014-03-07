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
        "word": "naturalcomp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class that have methods \u003ccode\u003euncons\u003c/code\u003e and \u003ccode\u003etoString\u003c/code\u003e, so that we\n   can handle them as String-like objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.NaturalComp.Stringy",
          "name": "Stringy",
          "package": "naturalcomp",
          "source": "src/Text-NaturalComp-Stringy.html",
          "type": "module"
        },
        "index": {
          "description": "type class that have methods uncons and toString so that we can handle them as String-like objects",
          "hierarchy": "Text NaturalComp Stringy",
          "module": "Text.NaturalComp.Stringy",
          "name": "Stringy",
          "package": "naturalcomp",
          "partial": "Stringy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NaturalComp.Stringy",
          "name": "Stringy",
          "package": "naturalcomp",
          "source": "src/Text-NaturalComp-Stringy.html#Stringy",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text NaturalComp Stringy",
          "module": "Text.NaturalComp.Stringy",
          "name": "Stringy",
          "package": "naturalcomp",
          "partial": "Stringy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#t:Stringy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NaturalComp.Stringy",
          "name": "toString",
          "package": "naturalcomp",
          "signature": "s -\u003e String",
          "source": "src/Text-NaturalComp-Stringy.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text NaturalComp Stringy",
          "module": "Text.NaturalComp.Stringy",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "naturalcomp",
          "partial": "String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NaturalComp.Stringy",
          "name": "uncons",
          "package": "naturalcomp",
          "signature": "s -\u003e Maybe (Char, s)",
          "source": "src/Text-NaturalComp-Stringy.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text NaturalComp Stringy",
          "module": "Text.NaturalComp.Stringy",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(Char,a)",
          "package": "naturalcomp",
          "signature": "s-\u003eMaybe(Char,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp-Stringy.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNatural order string comparison is needed when e.g. one wants to compare\n   file names or strings of software version.  It's aimed to be compatible\n   to glibc's strverscmp() function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.NaturalComp",
          "name": "NaturalComp",
          "package": "naturalcomp",
          "source": "src/Text-NaturalComp.html",
          "type": "module"
        },
        "index": {
          "description": "Natural order string comparison is needed when e.g one wants to compare file names or strings of software version It aimed to be compatible to glibc strverscmp function",
          "hierarchy": "Text NaturalComp",
          "module": "Text.NaturalComp",
          "name": "NaturalComp",
          "package": "naturalcomp",
          "partial": "Natural Comp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enatural order and case-insensitive string comparison\n\u003c/p\u003e",
          "module": "Text.NaturalComp",
          "name": "naturalCaseComp",
          "package": "naturalcomp",
          "signature": "s -\u003e s -\u003e Ordering",
          "source": "src/Text-NaturalComp.html#naturalCaseComp",
          "type": "function"
        },
        "index": {
          "description": "natural order and case-insensitive string comparison",
          "hierarchy": "Text NaturalComp",
          "module": "Text.NaturalComp",
          "name": "naturalCaseComp",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "naturalcomp",
          "partial": "Case Comp",
          "signature": "s-\u003es-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#v:naturalCaseComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enatural order string comparison, compatible to glibc's strverscmp()\n\u003c/p\u003e",
          "module": "Text.NaturalComp",
          "name": "naturalComp",
          "package": "naturalcomp",
          "signature": "s -\u003e s -\u003e Ordering",
          "source": "src/Text-NaturalComp.html#naturalComp",
          "type": "function"
        },
        "index": {
          "description": "natural order string comparison compatible to glibc strverscmp",
          "hierarchy": "Text NaturalComp",
          "module": "Text.NaturalComp",
          "name": "naturalComp",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "naturalcomp",
          "partial": "Comp",
          "signature": "s-\u003es-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#v:naturalComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enatural order string comparison, with user-specified function\n\u003c/p\u003e",
          "module": "Text.NaturalComp",
          "name": "naturalCompBy",
          "package": "naturalcomp",
          "signature": "(Char -\u003e Char -\u003e Ordering) -\u003e s -\u003e s -\u003e Ordering",
          "source": "src/Text-NaturalComp.html#naturalCompBy",
          "type": "function"
        },
        "index": {
          "description": "natural order string comparison with user-specified function",
          "hierarchy": "Text NaturalComp",
          "module": "Text.NaturalComp",
          "name": "naturalCompBy",
          "normalized": "(Char-\u003eChar-\u003eOrdering)-\u003ea-\u003ea-\u003eOrdering",
          "package": "naturalcomp",
          "partial": "Comp By",
          "signature": "(Char-\u003eChar-\u003eOrdering)-\u003es-\u003es-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/naturalcomp/docs/Text-NaturalComp.html#v:naturalCompBy"
      }
    }
  ]
]