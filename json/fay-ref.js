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
        "word": "fay-ref"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FayRef",
          "name": "FayRef",
          "package": "fay-ref",
          "source": "src/FayRef.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "FayRef",
          "package": "fay-ref",
          "partial": "Fay Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eFay\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "FayRef",
          "name": "FayRef",
          "package": "fay-ref",
          "source": "src/FayRef.html#FayRef",
          "type": "data"
        },
        "index": {
          "description": "mutable variable in the Fay monad",
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "FayRef",
          "package": "fay-ref",
          "partial": "Fay Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#t:FayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe warned that \u003ccode\u003e\u003ca\u003emodifyFayRef\u003c/a\u003e\u003c/code\u003e does not apply the function strictly.  This\n means if the program calls \u003ccode\u003e\u003ca\u003emodifyFayRef\u003c/a\u003e\u003c/code\u003e many times, but seldomly uses the\n value, thunks will pile up in memory resulting in a space leak.\n\u003c/p\u003e",
          "module": "FayRef",
          "name": "modifyFayRef",
          "package": "fay-ref",
          "signature": "FayRef a -\u003e (a -\u003e a) -\u003e Fay ()",
          "source": "src/FayRef.html#modifyFayRef",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of FayRef Be warned that modifyFayRef does not apply the function strictly This means if the program calls modifyFayRef many times but seldomly uses the value thunks will pile up in memory resulting in space leak",
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "modifyFayRef",
          "normalized": "FayRef a-\u003e(a-\u003ea)-\u003eFay()",
          "package": "fay-ref",
          "partial": "Fay Ref",
          "signature": "FayRef a-\u003e(a-\u003ea)-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:modifyFayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003emodifyFayRef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FayRef",
          "name": "modifyFayRef'",
          "package": "fay-ref",
          "signature": "FayRef a -\u003e (a -\u003e a) -\u003e Fay ()",
          "source": "src/FayRef.html#modifyFayRef%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of modifyFayRef",
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "modifyFayRef'",
          "normalized": "FayRef a-\u003e(a-\u003ea)-\u003eFay()",
          "package": "fay-ref",
          "partial": "Fay Ref'",
          "signature": "FayRef a-\u003e(a-\u003ea)-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:modifyFayRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FayRef",
          "name": "newFayRef",
          "package": "fay-ref",
          "signature": "a -\u003e Fay (FayRef a)",
          "source": "src/FayRef.html#newFayRef",
          "type": "function"
        },
        "index": {
          "description": "Build new FayRef",
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "newFayRef",
          "normalized": "a-\u003eFay(FayRef a)",
          "package": "fay-ref",
          "partial": "Fay Ref",
          "signature": "a-\u003eFay(FayRef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:newFayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FayRef",
          "name": "readFayRef",
          "package": "fay-ref",
          "signature": "FayRef a -\u003e Fay a",
          "source": "src/FayRef.html#readFayRef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into FayRef",
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "readFayRef",
          "normalized": "FayRef a-\u003eFay a",
          "package": "fay-ref",
          "partial": "Fay Ref",
          "signature": "FayRef a-\u003eFay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:readFayRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a \u003ccode\u003e\u003ca\u003eFayRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FayRef",
          "name": "writeFayRef",
          "package": "fay-ref",
          "signature": "FayRef a -\u003e a -\u003e Fay ()",
          "source": "src/FayRef.html#writeFayRef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into FayRef",
          "hierarchy": "FayRef",
          "module": "FayRef",
          "name": "writeFayRef",
          "normalized": "FayRef a-\u003ea-\u003eFay()",
          "package": "fay-ref",
          "partial": "Fay Ref",
          "signature": "FayRef a-\u003ea-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-ref/docs/FayRef.html#v:writeFayRef"
      }
    }
  ]
]