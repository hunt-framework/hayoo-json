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
        "word": "monad-statevar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloaded \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e for state variables (\u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e, etc.)\n to make reading and writing more concise.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.StateVar",
          "name": "StateVar",
          "package": "monad-statevar",
          "source": "src/Control-Monad-StateVar.html",
          "type": "module"
        },
        "index": {
          "description": "Overloaded get and put for state variables IORef TVar etc to make reading and writing more concise",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "StateVar",
          "package": "monad-statevar",
          "partial": "State Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateVar",
          "name": "HasGet",
          "package": "monad-statevar",
          "source": "src/Control-Monad-StateVar.html#HasGet",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "HasGet",
          "package": "monad-statevar",
          "partial": "Has Get",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#t:HasGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateVar",
          "name": "HasPut",
          "package": "monad-statevar",
          "source": "src/Control-Monad-StateVar.html#HasPut",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "HasPut",
          "package": "monad-statevar",
          "partial": "Has Put",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#t:HasPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix alias for \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "($~)",
          "package": "monad-statevar",
          "signature": "v a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#%24~",
          "type": "function"
        },
        "index": {
          "description": "Infix alias for modify",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "($~) $~",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:-36--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix alias for \u003ccode\u003e\u003ca\u003emodify'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "($~!)",
          "package": "monad-statevar",
          "signature": "v a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#%24~%21",
          "type": "function"
        },
        "index": {
          "description": "Infix alias for modify",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "($~!) $~!",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:-36--126--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix alias for \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "($=)",
          "package": "monad-statevar",
          "signature": "v a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#%24%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix alias for put",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "($=) $=",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix alias for \u003ccode\u003e\u003ca\u003eput'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "($=!)",
          "package": "monad-statevar",
          "signature": "v a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#%24%3D%21",
          "type": "function"
        },
        "index": {
          "description": "Infix alias for put",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "($=!) $=!",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:-36--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value from the variable.\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "get",
          "package": "monad-statevar",
          "signature": "v a -\u003e m a",
          "source": "src/Control-Monad-StateVar.html#get",
          "type": "method"
        },
        "index": {
          "description": "Read the value from the variable",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "get",
          "normalized": "a b-\u003ec b",
          "package": "monad-statevar",
          "signature": "v a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the value inside the variable with the given function.\n\u003c/p\u003e\u003cpre\u003elist \u003c- newIORef [1,2,3]\nmodify list (0:)  -- prepend 0 to the list\n\u003c/pre\u003e",
          "module": "Control.Monad.StateVar",
          "name": "modify",
          "package": "monad-statevar",
          "signature": "v a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modify the value inside the variable with the given function list newIORef modify list prepend to the list",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "modify",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e that forces the result of the function.\n\u003c/p\u003e\u003cpre\u003etally \u003c- newIORef (0 :: Int)\nmodify tally (+ 10)  -- add 10 to the tally\n\u003c/pre\u003e",
          "module": "Control.Monad.StateVar",
          "name": "modify'",
          "package": "monad-statevar",
          "signature": "v a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#modify%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of modify that forces the result of the function tally newIORef Int modify tally add to the tally",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "modify'",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:modify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value to the variable.\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "put",
          "package": "monad-statevar",
          "signature": "v a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#put",
          "type": "method"
        },
        "index": {
          "description": "Write new value to the variable",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "put",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e that forces the value before writing it.\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "put'",
          "package": "monad-statevar",
          "signature": "v a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-StateVar.html#put%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of put that forces the value before writing it",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "put'",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "monad-statevar",
          "signature": "v a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:put-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value and return the old value.\n\u003c/p\u003e",
          "module": "Control.Monad.StateVar",
          "name": "swap",
          "package": "monad-statevar",
          "signature": "v a -\u003e a -\u003e m a",
          "source": "src/Control-Monad-StateVar.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Write new value and return the old value",
          "hierarchy": "Control Monad StateVar",
          "module": "Control.Monad.StateVar",
          "name": "swap",
          "normalized": "a b-\u003eb-\u003ec b",
          "package": "monad-statevar",
          "signature": "v a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-statevar/docs/Control-Monad-StateVar.html#v:swap"
      }
    }
  ]
]