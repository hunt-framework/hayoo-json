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
        "word": "prototype"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "Prototype",
          "package": "prototype",
          "source": "src/Control-Prototype.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "Prototype",
          "package": "prototype",
          "partial": "Prototype",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "Member",
          "package": "prototype",
          "source": "src/Control-Prototype.html#Member",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "Member",
          "package": "prototype",
          "partial": "Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#t:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "Method",
          "package": "prototype",
          "source": "src/Control-Prototype.html#Method",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "Method",
          "package": "prototype",
          "partial": "Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "Object",
          "package": "prototype",
          "source": "src/Control-Prototype.html#Object",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "Object",
          "package": "prototype",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "Prot",
          "package": "prototype",
          "source": "src/Control-Prototype.html#Prot",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "Prot",
          "package": "prototype",
          "partial": "Prot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#t:Prot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "ProtEnv",
          "package": "prototype",
          "source": "src/Control-Prototype.html#ProtEnv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "ProtEnv",
          "package": "prototype",
          "partial": "Prot Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#t:ProtEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "clone",
          "package": "prototype",
          "signature": "Object -\u003e Prot m Object",
          "source": "src/Control-Prototype.html#clone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "clone",
          "normalized": "Object-\u003eProt a Object",
          "package": "prototype",
          "signature": "Object-\u003eProt m Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "evalProt",
          "package": "prototype",
          "signature": "Prot m a -\u003e ProtEnv m -\u003e m a",
          "source": "src/Control-Prototype.html#evalProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "evalProt",
          "normalized": "Prot a b-\u003eProtEnv a-\u003ea b",
          "package": "prototype",
          "partial": "Prot",
          "signature": "Prot m a-\u003eProtEnv m-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:evalProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "execProt",
          "package": "prototype",
          "signature": "Prot m a -\u003e ProtEnv m -\u003e m (ProtEnv m)",
          "source": "src/Control-Prototype.html#execProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "execProt",
          "normalized": "Prot a b-\u003eProtEnv a-\u003ea(ProtEnv a)",
          "package": "prototype",
          "partial": "Prot",
          "signature": "Prot m a-\u003eProtEnv m-\u003em(ProtEnv m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:execProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "fromPrimBool",
          "package": "prototype",
          "signature": "Object -\u003e Bool",
          "source": "src/Control-Prototype.html#fromPrimBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "fromPrimBool",
          "normalized": "Object-\u003eBool",
          "package": "prototype",
          "partial": "Prim Bool",
          "signature": "Object-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:fromPrimBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "fromPrimInt",
          "package": "prototype",
          "signature": "Object -\u003e Int",
          "source": "src/Control-Prototype.html#fromPrimInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "fromPrimInt",
          "normalized": "Object-\u003eInt",
          "package": "prototype",
          "partial": "Prim Int",
          "signature": "Object-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:fromPrimInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "fromPrimStr",
          "package": "prototype",
          "signature": "Object -\u003e String",
          "source": "src/Control-Prototype.html#fromPrimStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "fromPrimStr",
          "normalized": "Object-\u003eString",
          "package": "prototype",
          "partial": "Prim Str",
          "signature": "Object-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:fromPrimStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "initProtEnv",
          "package": "prototype",
          "signature": "ProtEnv m",
          "source": "src/Control-Prototype.html#initProtEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "initProtEnv",
          "package": "prototype",
          "partial": "Prot Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:initProtEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "liftProt",
          "package": "prototype",
          "signature": "m a -\u003e Prot m a",
          "source": "src/Control-Prototype.html#liftProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "liftProt",
          "normalized": "a b-\u003eProt a b",
          "package": "prototype",
          "partial": "Prot",
          "signature": "m a-\u003eProt m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:liftProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "makeMember",
          "package": "prototype",
          "signature": "String -\u003e Prot m Member",
          "source": "src/Control-Prototype.html#makeMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "makeMember",
          "normalized": "String-\u003eProt a Member",
          "package": "prototype",
          "partial": "Member",
          "signature": "String-\u003eProt m Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:makeMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "makeMethod",
          "package": "prototype",
          "signature": "Method m -\u003e Prot m Object",
          "source": "src/Control-Prototype.html#makeMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "makeMethod",
          "normalized": "Method a-\u003eProt a Object",
          "package": "prototype",
          "partial": "Method",
          "signature": "Method m-\u003eProt m Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:makeMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "member",
          "package": "prototype",
          "signature": "Object -\u003e Member -\u003e Prot m Object",
          "source": "src/Control-Prototype.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "member",
          "normalized": "Object-\u003eMember-\u003eProt a Object",
          "package": "prototype",
          "signature": "Object-\u003eMember-\u003eProt m Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "method",
          "package": "prototype",
          "signature": "Object -\u003e Member -\u003e [Object] -\u003e Prot m [Object]",
          "source": "src/Control-Prototype.html#method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "method",
          "normalized": "Object-\u003eMember-\u003e[Object]-\u003eProt a[Object]",
          "package": "prototype",
          "signature": "Object-\u003eMember-\u003e[Object]-\u003eProt m[Object]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "object",
          "package": "prototype",
          "signature": "Object",
          "source": "src/Control-Prototype.html#object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "object",
          "package": "prototype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "package",
          "package": "prototype",
          "signature": "String -\u003e Prot m a -\u003e Prot m a",
          "source": "src/Control-Prototype.html#package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "package",
          "normalized": "String-\u003eProt a b-\u003eProt a b",
          "package": "prototype",
          "signature": "String-\u003eProt m a-\u003eProt m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "primBool",
          "package": "prototype",
          "signature": "Bool -\u003e Object",
          "source": "src/Control-Prototype.html#primBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "primBool",
          "normalized": "Bool-\u003eObject",
          "package": "prototype",
          "partial": "Bool",
          "signature": "Bool-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:primBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "primInt",
          "package": "prototype",
          "signature": "Int -\u003e Object",
          "source": "src/Control-Prototype.html#primInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "primInt",
          "normalized": "Int-\u003eObject",
          "package": "prototype",
          "partial": "Int",
          "signature": "Int-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:primInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "primStr",
          "package": "prototype",
          "signature": "String -\u003e Object",
          "source": "src/Control-Prototype.html#primStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "primStr",
          "normalized": "String-\u003eObject",
          "package": "prototype",
          "partial": "Str",
          "signature": "String-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:primStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "printMember",
          "package": "prototype",
          "signature": "Member -\u003e m ()",
          "source": "src/Control-Prototype.html#printMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "printMember",
          "normalized": "Member-\u003ea()",
          "package": "prototype",
          "partial": "Member",
          "signature": "Member-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:printMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "runProt",
          "package": "prototype",
          "signature": "Prot m a -\u003e ProtEnv m -\u003e m (a, ProtEnv m)",
          "source": "src/Control-Prototype.html#runProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "runProt",
          "normalized": "Prot a b-\u003eProtEnv a-\u003ea(b,ProtEnv a)",
          "package": "prototype",
          "partial": "Prot",
          "signature": "Prot m a-\u003eProtEnv m-\u003em(a,ProtEnv m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:runProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "setMember",
          "package": "prototype",
          "signature": "Object -\u003e Member -\u003e Object -\u003e Prot m ()",
          "source": "src/Control-Prototype.html#setMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "setMember",
          "normalized": "Object-\u003eMember-\u003eObject-\u003eProt a()",
          "package": "prototype",
          "partial": "Member",
          "signature": "Object-\u003eMember-\u003eObject-\u003eProt m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:setMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Prototype",
          "name": "setMethod",
          "package": "prototype",
          "signature": "Object -\u003e Member -\u003e Method m -\u003e Prot m ()",
          "source": "src/Control-Prototype.html#setMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Prototype",
          "module": "Control.Prototype",
          "name": "setMethod",
          "normalized": "Object-\u003eMember-\u003eMethod a-\u003eProt a()",
          "package": "prototype",
          "partial": "Method",
          "signature": "Object-\u003eMember-\u003eMethod m-\u003eProt m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prototype/docs/Control-Prototype.html#v:setMethod"
      }
    }
  ]
]