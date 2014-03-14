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
        "word": "language-c-inline"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the principal API for inline Objective-C.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.C.Inline.ObjC",
          "name": "ObjC",
          "package": "language-c-inline",
          "source": "src/Language-C-Inline-ObjC.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the principal API for inline Objective-C",
          "hierarchy": "Language C Inline ObjC",
          "module": "Language.C.Inline.ObjC",
          "name": "ObjC",
          "package": "language-c-inline",
          "partial": "Obj",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-c-inline/docs/Language-C-Inline-ObjC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline Objective-C expression.\n\u003c/p\u003e\u003cp\u003eThe inline expression will be wrapped in a C function whose arguments are marshalled versions of the Haskell\n variables given in the first argument and whose return value will be marshalled to the Haskell type given by the\n second argument.\n\u003c/p\u003e",
          "module": "Language.C.Inline.ObjC",
          "name": "objc",
          "package": "language-c-inline",
          "signature": "[Name] -\u003e Name -\u003e Exp -\u003e Q Exp",
          "source": "src/Language-C-Inline-ObjC.html#objc",
          "type": "function"
        },
        "index": {
          "description": "Inline Objective-C expression The inline expression will be wrapped in function whose arguments are marshalled versions of the Haskell variables given in the first argument and whose return value will be marshalled to the Haskell type given by the second argument",
          "hierarchy": "Language C Inline ObjC",
          "module": "Language.C.Inline.ObjC",
          "name": "objc",
          "normalized": "[Name]-\u003eName-\u003eExp-\u003eQ Exp",
          "package": "language-c-inline",
          "signature": "[Name]-\u003eName-\u003eExp-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-inline/docs/Language-C-Inline-ObjC.html#v:objc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit the Objective-C file and return the foreign declarations. Needs to be the last use of an 'objc...' function.\n (Just put it at the end of the Haskell module.)\n\u003c/p\u003e",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_emit",
          "package": "language-c-inline",
          "signature": "Q [Dec]",
          "source": "src/Language-C-Inline-ObjC.html#objc_emit",
          "type": "function"
        },
        "index": {
          "description": "Emit the Objective-C file and return the foreign declarations Needs to be the last use of an objc function Just put it at the end of the Haskell module",
          "hierarchy": "Language C Inline ObjC",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_emit",
          "normalized": "Q[Dec]",
          "package": "language-c-inline",
          "signature": "Q[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-inline/docs/Language-C-Inline-ObjC.html#v:objc_emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline Objective-C top-level definitions for an implementation file ('.m').\n\u003c/p\u003e\u003cp\u003eThe top-level Haskell variables given in the first argument will be foreign exported to be accessed from the\n generated Objective-C code. In C, these Haskell variables will always be represented as functions. (In particular, if\n the Haskell variable refers to a CAF, it will be a nullary function in C &#8212; after all, a thunk may still need to be\n evaluated.)\n\u003c/p\u003e",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_implementation",
          "package": "language-c-inline",
          "signature": "[Name] -\u003e [Definition] -\u003e Q [Dec]",
          "source": "src/Language-C-Inline-ObjC.html#objc_implementation",
          "type": "function"
        },
        "index": {
          "description": "Inline Objective-C top-level definitions for an implementation file The top-level Haskell variables given in the first argument will be foreign exported to be accessed from the generated Objective-C code In these Haskell variables will always be represented as functions In particular if the Haskell variable refers to CAF it will be nullary function in after all thunk may still need to be evaluated",
          "hierarchy": "Language C Inline ObjC",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_implementation",
          "normalized": "[Name]-\u003e[Definition]-\u003eQ[Dec]",
          "package": "language-c-inline",
          "signature": "[Name]-\u003e[Definition]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-inline/docs/Language-C-Inline-ObjC.html#v:objc_implementation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify imported Objective-C files. Needs to be spliced where an import declaration can appear. (Just put it\n straight after all the import statements in the module.)\n\u003c/p\u003e\u003cp\u003eFIXME: need to use TH.addDependentFile on each of the imported ObjC files & read headers\n\u003c/p\u003e",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_import",
          "package": "language-c-inline",
          "signature": "[FilePath] -\u003e Q [Dec]",
          "source": "src/Language-C-Inline-ObjC.html#objc_import",
          "type": "function"
        },
        "index": {
          "description": "Specify imported Objective-C files Needs to be spliced where an import declaration can appear Just put it straight after all the import statements in the module FIXME need to use TH.addDependentFile on each of the imported ObjC files read headers",
          "hierarchy": "Language C Inline ObjC",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_import",
          "normalized": "[FilePath]-\u003eQ[Dec]",
          "package": "language-c-inline",
          "signature": "[FilePath]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-inline/docs/Language-C-Inline-ObjC.html#v:objc_import"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline Objective-C top-level definitions for a header file ('.h').\n\u003c/p\u003e",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_interface",
          "package": "language-c-inline",
          "signature": "[Definition] -\u003e Q [Dec]",
          "source": "src/Language-C-Inline-ObjC.html#objc_interface",
          "type": "function"
        },
        "index": {
          "description": "Inline Objective-C top-level definitions for header file",
          "hierarchy": "Language C Inline ObjC",
          "module": "Language.C.Inline.ObjC",
          "name": "objc_interface",
          "normalized": "[Definition]-\u003eQ[Dec]",
          "package": "language-c-inline",
          "signature": "[Definition]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-inline/docs/Language-C-Inline-ObjC.html#v:objc_interface"
      }
    }
  ]
]