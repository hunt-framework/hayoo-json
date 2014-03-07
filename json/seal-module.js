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
        "word": "seal-module"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides a Template Haskell function to convert a set of function\ndeclarations which use global constants into function declarations that take\nthese constants as parameters.\n\u003c/p\u003e\u003cp\u003eThe goal is to make it more convenient to write pure, non-monadic code that\ndeep in the call stack requires some configuration data without having to\npass these paramters around explicitly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.SealModule",
          "name": "SealModule",
          "package": "seal-module",
          "source": "src/Language-Haskell-SealModule.html",
          "type": "module"
        },
        "index": {
          "description": "This provides Template Haskell function to convert set of function declarations which use global constants into function declarations that take these constants as parameters The goal is to make it more convenient to write pure non-monadic code that deep in the call stack requires some configuration data without having to pass these paramters around explicitly",
          "hierarchy": "Language Haskell SealModule",
          "module": "Language.Haskell.SealModule",
          "name": "SealModule",
          "package": "seal-module",
          "partial": "Seal Module",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seal-module/docs/Language-Haskell-SealModule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esealModule\u003c/a\u003e\u003c/code\u003e modifies the passed top level declarations to have additional\n parameters for each declaration bound to \u003ccode\u003e\u003ca\u003esealedParam\u003c/a\u003e\u003c/code\u003e, in the order of\n their appearance. The parameter declarations and their type signature, if\n present, are removed from the list of declarations.\n\u003c/p\u003e\u003cp\u003eThe generated functions will have a type signature if and only they have a\n type signature and all parameters have type signatures.\n\u003c/p\u003e",
          "module": "Language.Haskell.SealModule",
          "name": "sealModule",
          "package": "seal-module",
          "signature": "Q [Dec] -\u003e Q [Dec]",
          "source": "src/Language-Haskell-SealModule.html#sealModule",
          "type": "function"
        },
        "index": {
          "description": "sealModule modifies the passed top level declarations to have additional parameters for each declaration bound to sealedParam in the order of their appearance The parameter declarations and their type signature if present are removed from the list of declarations The generated functions will have type signature if and only they have type signature and all parameters have type signatures",
          "hierarchy": "Language Haskell SealModule",
          "module": "Language.Haskell.SealModule",
          "name": "sealModule",
          "normalized": "Q[Dec]-\u003eQ[Dec]",
          "package": "seal-module",
          "partial": "Module",
          "signature": "Q[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seal-module/docs/Language-Haskell-SealModule.html#v:sealModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esealedParam\u003c/a\u003e\u003c/code\u003e turns a toplevel declaration into a sealed parameter. It\n must only be used inside a call to \u003ccode\u003e\u003ca\u003esealModule\u003c/a\u003e\u003c/code\u003e and there only in the form\n of a top level declaration of the form\n\u003c/p\u003e\u003cpre\u003e\n name = sealedParam\n\u003c/pre\u003e\u003cp\u003eA type signature for \u003ccode\u003ename\u003c/code\u003e may be given, and is a prerequisite for the\n generated functions having type signatures.\n\u003c/p\u003e",
          "module": "Language.Haskell.SealModule",
          "name": "sealedParam",
          "package": "seal-module",
          "signature": "a",
          "source": "src/Language-Haskell-SealModule.html#sealedParam",
          "type": "function"
        },
        "index": {
          "description": "sealedParam turns toplevel declaration into sealed parameter It must only be used inside call to sealModule and there only in the form of top level declaration of the form name sealedParam type signature for name may be given and is prerequisite for the generated functions having type signatures",
          "hierarchy": "Language Haskell SealModule",
          "module": "Language.Haskell.SealModule",
          "name": "sealedParam",
          "package": "seal-module",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seal-module/docs/Language-Haskell-SealModule.html#v:sealedParam"
      }
    }
  ]
]