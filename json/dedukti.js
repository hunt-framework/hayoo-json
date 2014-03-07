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
        "word": "dedukti"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll generated Haskell files import this module. The data type\n declarations are given here, along with the conversion relation and type\n inference function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Dedukti.Runtime",
          "name": "Runtime",
          "package": "dedukti",
          "source": "src/Dedukti-Runtime.html",
          "type": "module"
        },
        "index": {
          "description": "All generated Haskell files import this module The data type declarations are given here along with the conversion relation and type inference function",
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Runtime",
          "package": "dedukti",
          "partial": "Runtime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Code",
          "package": "dedukti",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Code",
          "package": "dedukti",
          "partial": "Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Term",
          "package": "dedukti",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Term",
          "package": "dedukti",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "App",
          "package": "dedukti",
          "signature": "App Code Code",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "App",
          "package": "dedukti",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Box",
          "package": "dedukti",
          "signature": "Box Code Code",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Box",
          "package": "dedukti",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Con",
          "package": "dedukti",
          "signature": "Con !ByteString",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Con",
          "package": "dedukti",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Kind",
          "package": "dedukti",
          "signature": "Kind",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Kind",
          "package": "dedukti",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Lam",
          "package": "dedukti",
          "signature": "Lam !(Code -\u003e Code)",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Lam",
          "normalized": "Lam(Code-\u003eCode)",
          "package": "dedukti",
          "partial": "Lam",
          "signature": "Lam(Code-\u003eCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Pi",
          "package": "dedukti",
          "signature": "Pi Code !(Code -\u003e Code)",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Pi",
          "normalized": "Pi Code(Code-\u003eCode)",
          "package": "dedukti",
          "partial": "Pi",
          "signature": "Pi Code(Code-\u003eCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "TApp",
          "package": "dedukti",
          "signature": "TApp !Term !Term",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "TApp",
          "package": "dedukti",
          "partial": "TApp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:TApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "TLam",
          "package": "dedukti",
          "signature": "TLam !Term !(Term -\u003e Term)",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "TLam",
          "normalized": "TLam Term(Term-\u003eTerm)",
          "package": "dedukti",
          "partial": "TLam",
          "signature": "TLam Term(Term-\u003eTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:TLam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "TPi",
          "package": "dedukti",
          "signature": "TPi !Term !(Term -\u003e Term)",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "TPi",
          "normalized": "TPi Term(Term-\u003eTerm)",
          "package": "dedukti",
          "partial": "TPi",
          "signature": "TPi Term(Term-\u003eTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:TPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "TType",
          "package": "dedukti",
          "signature": "TType",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "TType",
          "package": "dedukti",
          "partial": "TType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:TType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Type",
          "package": "dedukti",
          "signature": "Type",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Type",
          "package": "dedukti",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "UBox",
          "package": "dedukti",
          "signature": "UBox Term Code",
          "source": "src/Dedukti-Runtime.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "UBox",
          "package": "dedukti",
          "partial": "UBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:UBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "Var",
          "package": "dedukti",
          "signature": "Var !Int",
          "source": "src/Dedukti-Runtime.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "Var",
          "package": "dedukti",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "ap",
          "package": "dedukti",
          "signature": "Code -\u003e Code -\u003e Code",
          "source": "src/Dedukti-Runtime.html#ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "ap",
          "normalized": "Code-\u003eCode-\u003eCode",
          "package": "dedukti",
          "signature": "Code-\u003eCode-\u003eCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "bbox",
          "package": "dedukti",
          "signature": "Term -\u003e Code -\u003e Code -\u003e Term",
          "source": "src/Dedukti-Runtime.html#bbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "bbox",
          "normalized": "Term-\u003eCode-\u003eCode-\u003eTerm",
          "package": "dedukti",
          "signature": "Term-\u003eCode-\u003eCode-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:bbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "checkDeclaration",
          "package": "dedukti",
          "signature": "String -\u003e Term -\u003e IO ()",
          "source": "src/Dedukti-Runtime.html#checkDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "checkDeclaration",
          "normalized": "String-\u003eTerm-\u003eIO()",
          "package": "dedukti",
          "partial": "Declaration",
          "signature": "String-\u003eTerm-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:checkDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "checkRule",
          "package": "dedukti",
          "signature": "Term -\u003e Term -\u003e Term",
          "source": "src/Dedukti-Runtime.html#checkRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "checkRule",
          "normalized": "Term-\u003eTerm-\u003eTerm",
          "package": "dedukti",
          "partial": "Rule",
          "signature": "Term-\u003eTerm-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:checkRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "convertible",
          "package": "dedukti",
          "signature": "Int -\u003e Code -\u003e Code -\u003e Bool",
          "source": "src/Dedukti-Runtime.html#convertible",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "convertible",
          "normalized": "Int-\u003eCode-\u003eCode-\u003eBool",
          "package": "dedukti",
          "signature": "Int-\u003eCode-\u003eCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:convertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "obj",
          "package": "dedukti",
          "signature": "Term -\u003e Code",
          "source": "src/Dedukti-Runtime.html#obj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "obj",
          "normalized": "Term-\u003eCode",
          "package": "dedukti",
          "signature": "Term-\u003eCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:obj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA box in which we didn't put anything.\n\u003c/p\u003e",
          "module": "Dedukti.Runtime",
          "name": "sbox",
          "package": "dedukti",
          "signature": "Term -\u003e Code -\u003e Code -\u003e Term",
          "source": "src/Dedukti-Runtime.html#sbox",
          "type": "function"
        },
        "index": {
          "description": "box in which we didn put anything",
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "sbox",
          "normalized": "Term-\u003eCode-\u003eCode-\u003eTerm",
          "package": "dedukti",
          "signature": "Term-\u003eCode-\u003eCode-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:sbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "start",
          "package": "dedukti",
          "signature": "IO UTCTime",
          "source": "src/Dedukti-Runtime.html#start",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "start",
          "package": "dedukti",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dedukti.Runtime",
          "name": "stop",
          "package": "dedukti",
          "signature": "UTCTime -\u003e IO ()",
          "source": "src/Dedukti-Runtime.html#stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dedukti Runtime",
          "module": "Dedukti.Runtime",
          "name": "stop",
          "normalized": "UTCTime-\u003eIO()",
          "package": "dedukti",
          "signature": "UTCTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dedukti/docs/Dedukti-Runtime.html#v:stop"
      }
    }
  ]
]