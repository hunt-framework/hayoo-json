[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#",
      "description": {
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "module",
        "fct-source": "src/FayRef.html",
        "fct-type": "module",
        "title": "FayRef"
      },
      "index": {
        "description": "",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "FayRef",
        "normalized": "",
        "package": "fay-ref",
        "partial": "Fay Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#t:FayRef",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eFay\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "data",
        "fct-source": "src/FayRef.html#FayRef",
        "fct-type": "data",
        "title": "FayRef"
      },
      "index": {
        "description": "mutable variable in the Fay monad",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "FayRef",
        "normalized": "",
        "package": "fay-ref",
        "partial": "Fay Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:modifyFayRef",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of a \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe warned that \u003ccode\u003e\u003ca\u003emodifyFayRef\u003c/a\u003e\u003c/code\u003e does not apply the function strictly.  This\n means if the program calls \u003ccode\u003e\u003ca\u003emodifyFayRef\u003c/a\u003e\u003c/code\u003e many times, but seldomly uses the\n value, thunks will pile up in memory resulting in a space leak.\n\u003c/p\u003e",
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "FayRef a -\u003e (a -\u003e a) -\u003e Fay ()",
        "fct-source": "src/FayRef.html#modifyFayRef",
        "fct-type": "function",
        "title": "modifyFayRef"
      },
      "index": {
        "description": "Mutate the contents of FayRef Be warned that modifyFayRef does not apply the function strictly This means if the program calls modifyFayRef many times but seldomly uses the value thunks will pile up in memory resulting in space leak",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "modifyFayRef",
        "normalized": "FayRef a-\u003e(a-\u003ea)-\u003eFay()",
        "package": "fay-ref",
        "partial": "Fay Ref",
        "signature": "FayRef a-\u003e(a-\u003ea)-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:modifyFayRef-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003emodifyFayRef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "FayRef a -\u003e (a -\u003e a) -\u003e Fay ()",
        "fct-source": "src/FayRef.html#modifyFayRef%27",
        "fct-type": "function",
        "title": "modifyFayRef'"
      },
      "index": {
        "description": "Strict version of modifyFayRef",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "modifyFayRef'",
        "normalized": "FayRef a-\u003e(a-\u003ea)-\u003eFay()",
        "package": "fay-ref",
        "partial": "Fay Ref'",
        "signature": "FayRef a-\u003e(a-\u003ea)-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:newFayRef",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "a -\u003e Fay (FayRef a)",
        "fct-source": "src/FayRef.html#newFayRef",
        "fct-type": "function",
        "title": "newFayRef"
      },
      "index": {
        "description": "Build new FayRef",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "newFayRef",
        "normalized": "a-\u003eFay(FayRef a)",
        "package": "fay-ref",
        "partial": "Fay Ref",
        "signature": "a-\u003eFay(FayRef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:readFayRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "FayRef a -\u003e Fay a",
        "fct-source": "src/FayRef.html#readFayRef",
        "fct-type": "function",
        "title": "readFayRef"
      },
      "index": {
        "description": "Write new value into FayRef",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "readFayRef",
        "normalized": "FayRef a-\u003eFay a",
        "package": "fay-ref",
        "partial": "Fay Ref",
        "signature": "FayRef a-\u003eFay a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:writeFayRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FayRef",
        "fct-package": "fay-ref",
        "fct-signature": "FayRef a -\u003e a -\u003e Fay ()",
        "fct-source": "src/FayRef.html#writeFayRef",
        "fct-type": "function",
        "title": "writeFayRef"
      },
      "index": {
        "description": "Write new value into FayRef",
        "hierarchy": "FayRef",
        "module": "FayRef",
        "name": "writeFayRef",
        "normalized": "FayRef a-\u003ea-\u003eFay()",
        "package": "fay-ref",
        "partial": "Fay Ref",
        "signature": "FayRef a-\u003ea-\u003eFay()"
      }
    }
  }
]