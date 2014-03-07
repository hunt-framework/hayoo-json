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
        "word": "StateVar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState variables are references in the IO monad, like \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es or parts of\n the OpenGL state. Note that state variables are not neccessarily writable or\n readable, they may come in read-only or write-only flavours, too. As a very\n simple example for a state variable, consider an explicitly allocated memory\n buffer. This buffer can easily be converted into a \u003ccode\u003e\u003ca\u003eStateVar\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n makeStateVarFromPtr :: Storable a =\u003e Ptr a -\u003e StateVar a\n makeStateVarFromPtr p = makeStateVar (peek p) (poke p)\n\u003c/pre\u003e\u003cp\u003eThe example below puts 11 into a state variable (i.e. into the buffer),\n increments the contents of the state variable by 22, and finally prints the\n resulting content:\n\u003c/p\u003e\u003cpre\u003e\n   do p \u003c- malloc :: IO (Ptr Int)\n      let v = makeStateVarFromPtr p\n      v $= 11\n      v $~ (+ 22)\n      x \u003c- get v\n      print x\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es are state variables, too, so an example with them looks extremely\n similiar:\n\u003c/p\u003e\u003cpre\u003e\n   do v \u003c- newIORef (0 :: Int)\n      v $= 11\n      v $~ (+ 22)\n      x \u003c- get v\n      print x\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.StateVar",
          "name": "StateVar",
          "package": "StateVar",
          "source": "src/Data-StateVar.html",
          "type": "module"
        },
        "index": {
          "description": "State variables are references in the IO monad like IORef or parts of the OpenGL state Note that state variables are not neccessarily writable or readable they may come in read-only or write-only flavours too As very simple example for state variable consider an explicitly allocated memory buffer This buffer can easily be converted into StateVar makeStateVarFromPtr Storable Ptr StateVar makeStateVarFromPtr makeStateVar peek poke The example below puts into state variable i.e into the buffer increments the contents of the state variable by and finally prints the resulting content do malloc IO Ptr Int let makeStateVarFromPtr get print IORef are state variables too so an example with them looks extremely similiar do newIORef Int get print",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "StateVar",
          "package": "StateVar",
          "partial": "State Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete implementation of a read-only state variable, carrying an IO\n action to read the value.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "GettableStateVar",
          "package": "StateVar",
          "source": "src/Data-StateVar.html#GettableStateVar",
          "type": "data"
        },
        "index": {
          "description": "concrete implementation of read-only state variable carrying an IO action to read the value",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "GettableStateVar",
          "package": "StateVar",
          "partial": "Gettable State Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#t:GettableStateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all readable state variables.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "HasGetter",
          "package": "StateVar",
          "source": "src/Data-StateVar.html#HasGetter",
          "type": "class"
        },
        "index": {
          "description": "The class of all readable state variables",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "HasGetter",
          "package": "StateVar",
          "partial": "Has Getter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#t:HasGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all writable state variables.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "HasSetter",
          "package": "StateVar",
          "source": "src/Data-StateVar.html#HasSetter",
          "type": "class"
        },
        "index": {
          "description": "The class of all writable state variables",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "HasSetter",
          "package": "StateVar",
          "partial": "Has Setter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#t:HasSetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete implementation of a write-only state variable, carrying an IO\n action to write the new value.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "SettableStateVar",
          "package": "StateVar",
          "source": "src/Data-StateVar.html#SettableStateVar",
          "type": "data"
        },
        "index": {
          "description": "concrete implementation of write-only state variable carrying an IO action to write the new value",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "SettableStateVar",
          "package": "StateVar",
          "partial": "Settable State Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#t:SettableStateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete implementation of a readable and writable state variable,\n carrying one IO action to read the value and another IO action to write the\n new value.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "StateVar",
          "package": "StateVar",
          "source": "src/Data-StateVar.html#StateVar",
          "type": "data"
        },
        "index": {
          "description": "concrete implementation of readable and writable state variable carrying one IO action to read the value and another IO action to write the new value",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "StateVar",
          "package": "StateVar",
          "partial": "State Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#t:StateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA modificator convenience function, transforming the contents of a state\n variable with a given funtion.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "($~)",
          "package": "StateVar",
          "signature": "v a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-StateVar.html#%24~",
          "type": "function"
        },
        "index": {
          "description": "modificator convenience function transforming the contents of state variable with given funtion",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "($~) $~",
          "normalized": "a b-\u003e(b-\u003eb)-\u003eIO()",
          "package": "StateVar",
          "signature": "v a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:-36--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e$~\u003c/a\u003e\u003c/code\u003e which is strict in the transformed value.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "($~!)",
          "package": "StateVar",
          "signature": "v a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-StateVar.html#%24~%21",
          "type": "function"
        },
        "index": {
          "description": "variant of which is strict in the transformed value",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "($~!) $~!",
          "normalized": "a b-\u003e(b-\u003eb)-\u003eIO()",
          "package": "StateVar",
          "signature": "v a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:-36--126--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a state variable.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "($=)",
          "package": "StateVar",
          "signature": "s a -\u003e a -\u003e IO ()",
          "source": "src/Data-StateVar.html#%24%3D",
          "type": "method"
        },
        "index": {
          "description": "Write new value into state variable",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "($=) $=",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "StateVar",
          "signature": "s a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e$=\u003c/a\u003e\u003c/code\u003e which is strict in the value to be set.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "($=!)",
          "package": "StateVar",
          "signature": "s a -\u003e a -\u003e IO ()",
          "source": "src/Data-StateVar.html#%24%3D%21",
          "type": "function"
        },
        "index": {
          "description": "variant of which is strict in the value to be set",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "($=!) $=!",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "StateVar",
          "signature": "s a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:-36--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a state variable.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "get",
          "package": "StateVar",
          "signature": "g a -\u003e IO a",
          "source": "src/Data-StateVar.html#get",
          "type": "method"
        },
        "index": {
          "description": "Read the value of state variable",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "get",
          "normalized": "a b-\u003eIO b",
          "package": "StateVar",
          "signature": "g a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eGettableStateVar\u003c/a\u003e\u003c/code\u003e from an IO action.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "makeGettableStateVar",
          "package": "StateVar",
          "signature": "IO a -\u003e GettableStateVar a",
          "source": "src/Data-StateVar.html#makeGettableStateVar",
          "type": "function"
        },
        "index": {
          "description": "Construct GettableStateVar from an IO action",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "makeGettableStateVar",
          "normalized": "IO a-\u003eGettableStateVar a",
          "package": "StateVar",
          "partial": "Gettable State Var",
          "signature": "IO a-\u003eGettableStateVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:makeGettableStateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eSettableStateVar\u003c/a\u003e\u003c/code\u003e from an IO action.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "makeSettableStateVar",
          "package": "StateVar",
          "signature": "(a -\u003e IO ()) -\u003e SettableStateVar a",
          "source": "src/Data-StateVar.html#makeSettableStateVar",
          "type": "function"
        },
        "index": {
          "description": "Construct SettableStateVar from an IO action",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "makeSettableStateVar",
          "normalized": "(a-\u003eIO())-\u003eSettableStateVar a",
          "package": "StateVar",
          "partial": "Settable State Var",
          "signature": "(a-\u003eIO())-\u003eSettableStateVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:makeSettableStateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eStateVar\u003c/a\u003e\u003c/code\u003e from two IO actions, one for reading and one for\n writing.\n\u003c/p\u003e",
          "module": "Data.StateVar",
          "name": "makeStateVar",
          "package": "StateVar",
          "signature": "IO a -\u003e (a -\u003e IO ()) -\u003e StateVar a",
          "source": "src/Data-StateVar.html#makeStateVar",
          "type": "function"
        },
        "index": {
          "description": "Construct StateVar from two IO actions one for reading and one for writing",
          "hierarchy": "Data StateVar",
          "module": "Data.StateVar",
          "name": "makeStateVar",
          "normalized": "IO a-\u003e(a-\u003eIO())-\u003eStateVar a",
          "package": "StateVar",
          "partial": "State Var",
          "signature": "IO a-\u003e(a-\u003eIO())-\u003eStateVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StateVar/docs/Data-StateVar.html#v:makeStateVar"
      }
    }
  ]
]