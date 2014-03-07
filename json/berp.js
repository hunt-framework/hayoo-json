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
        "word": "berp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHashing functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Berp.Base.Hash",
          "name": "Hash",
          "package": "berp",
          "source": "src/Berp-Base-Hash.html",
          "type": "module"
        },
        "index": {
          "description": "Hashing functions",
          "hierarchy": "Berp Base Hash",
          "module": "Berp.Base.Hash",
          "name": "Hash",
          "package": "berp",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base.Hash",
          "name": "Hash",
          "package": "berp",
          "source": "src/Berp-Base-Hash.html#Hash",
          "type": "class"
        },
        "index": {
          "hierarchy": "Berp Base Hash",
          "module": "Berp.Base.Hash",
          "name": "Hash",
          "package": "berp",
          "partial": "Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Hash.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base.Hash",
          "name": "Hashed",
          "package": "berp",
          "source": "src/Berp-Base-Hash.html#Hashed",
          "type": "type"
        },
        "index": {
          "hierarchy": "Berp Base Hash",
          "module": "Berp.Base.Hash",
          "name": "Hashed",
          "package": "berp",
          "partial": "Hashed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Hash.html#t:Hashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base.Hash",
          "name": "hash",
          "package": "berp",
          "signature": "a -\u003e Int",
          "source": "src/Berp-Base-Hash.html#hash",
          "type": "method"
        },
        "index": {
          "hierarchy": "Berp Base Hash",
          "module": "Berp.Base.Hash",
          "name": "hash",
          "normalized": "a-\u003eInt",
          "package": "berp",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Hash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base.Hash",
          "name": "hashedStr",
          "package": "berp",
          "signature": "String -\u003e Q Exp",
          "source": "src/Berp-Base-Hash.html#hashedStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base Hash",
          "module": "Berp.Base.Hash",
          "name": "hashedStr",
          "normalized": "String-\u003eQ Exp",
          "package": "berp",
          "partial": "Str",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Hash.html#v:hashedStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eName mangling. \n\u003c/p\u003e\u003cp\u003eWe need to mangle Python's identifier names when we compiled them to \n Haskell names because:\n    1) Python allows some identifiers which are illegal in Haskell,\n       such as leading upper case letters.\n    2) We introduce our own \u003ca\u003etemporary\u003c/a\u003e variables into a compiled program.\n       Name mangling helps to avoid accidental name clash.\n    3) We import many Haskell primitives into the compiled program. \n       Name mangling helps to avoid accidental name clash.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Berp.Base.Mangle",
          "name": "Mangle",
          "package": "berp",
          "source": "src/Berp-Base-Mangle.html",
          "type": "module"
        },
        "index": {
          "description": "Name mangling We need to mangle Python identifier names when we compiled them to Haskell names because Python allows some identifiers which are illegal in Haskell such as leading upper case letters We introduce our own temporary variables into compiled program Name mangling helps to avoid accidental name clash We import many Haskell primitives into the compiled program Name mangling helps to avoid accidental name clash",
          "hierarchy": "Berp Base Mangle",
          "module": "Berp.Base.Mangle",
          "name": "Mangle",
          "package": "berp",
          "partial": "Mangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Mangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base.Mangle",
          "name": "deMangle",
          "package": "berp",
          "signature": "String -\u003e String",
          "source": "src/Berp-Base-Mangle.html#deMangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base Mangle",
          "module": "Berp.Base.Mangle",
          "name": "deMangle",
          "normalized": "String-\u003eString",
          "package": "berp",
          "partial": "Mangle",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Mangle.html#v:deMangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base.Mangle",
          "name": "mangle",
          "package": "berp",
          "signature": "String -\u003e String",
          "source": "src/Berp-Base-Mangle.html#mangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base Mangle",
          "module": "Berp.Base.Mangle",
          "name": "mangle",
          "normalized": "String-\u003eString",
          "package": "berp",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base-Mangle.html#v:mangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports all the primitive functions which are needed by\n the compiled programs. Avoid putting extraneous exports in this file\n because it is imported by all compiled programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Berp.Base",
          "name": "Base",
          "package": "berp",
          "source": "src/Berp-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports all the primitive functions which are needed by the compiled programs Avoid putting extraneous exports in this file because it is imported by all compiled programs",
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "Base",
          "package": "berp",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(%)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%25",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(%) %",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(*)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(*) *",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(+)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(+) +",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(-)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(-) -",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(/)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(/) /",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(\u003c)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(\u003c) \u003c",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(\u003c=)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(\u003c=) \u003c=",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(==)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(==) ==",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(=:)",
          "package": "berp",
          "signature": "ObjectRef -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(=:) =:",
          "normalized": "ObjectRef-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "ObjectRef-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(\u003e)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(\u003e) \u003e",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(\u003e=)",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(\u003e=) \u003e=",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(@@)",
          "package": "berp",
          "signature": "Object -\u003e [Object] -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#%40%40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(@@) @@",
          "normalized": "Object-\u003e[Object]-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003e[Object]-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:-64--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "(.)",
          "package": "berp",
          "signature": "Object -\u003e Hashed String -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "(.) .",
          "normalized": "Object-\u003eHashed String-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eHashed String-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "and",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "and",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "break",
          "package": "berp",
          "signature": "Eval Object",
          "source": "src/Berp-Base-Prims.html#break",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "break",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "continue",
          "package": "berp",
          "signature": "Eval Object",
          "source": "src/Berp-Base-Prims.html#continue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "continue",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "def",
          "package": "berp",
          "signature": "ObjectRef -\u003e Arity -\u003e Object -\u003e ([ObjectRef] -\u003e Eval Object) -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#def",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "def",
          "normalized": "ObjectRef-\u003eArity-\u003eObject-\u003e([ObjectRef]-\u003eEval Object)-\u003eEval Object",
          "package": "berp",
          "signature": "ObjectRef-\u003eArity-\u003eObject-\u003e([ObjectRef]-\u003eEval Object)-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "dictionary",
          "package": "berp",
          "signature": "[(Object, Object)] -\u003e Eval Object",
          "source": "src/Berp-Base-StdTypes-Dictionary.html#dictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "dictionary",
          "normalized": "[(Object,Object)]-\u003eEval Object",
          "package": "berp",
          "signature": "[(Object,Object)]-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:dictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "except",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#except",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "except",
          "normalized": "Object-\u003eObject-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "exceptDefault",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#exceptDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "exceptDefault",
          "normalized": "Eval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Default",
          "signature": "Eval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:exceptDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "false",
          "package": "berp",
          "signature": "Object",
          "source": "src/Berp-Base-StdTypes-Bool.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "false",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "for",
          "package": "berp",
          "signature": "ObjectRef -\u003e Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#for",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "for",
          "normalized": "ObjectRef-\u003eObject-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "signature": "ObjectRef-\u003eObject-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "forElse",
          "package": "berp",
          "signature": "ObjectRef -\u003e Object -\u003e Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#forElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "forElse",
          "normalized": "ObjectRef-\u003eObject-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Else",
          "signature": "ObjectRef-\u003eObject-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:forElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "ifThen",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#ifThen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "ifThen",
          "normalized": "Eval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Then",
          "signature": "Eval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:ifThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "ifThenElse",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "ifThenElse",
          "normalized": "Eval Object-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Then Else",
          "signature": "Eval Object-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "int",
          "package": "berp",
          "signature": "Integer -\u003e Object",
          "source": "src/Berp-Base-StdTypes-Integer.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "int",
          "normalized": "Integer-\u003eObject",
          "package": "berp",
          "signature": "Integer-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "interpretStmt",
          "package": "berp",
          "signature": "Eval Object -\u003e IO ()",
          "source": "src/Berp-Base-Monad.html#interpretStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "interpretStmt",
          "normalized": "Eval Object-\u003eIO()",
          "package": "berp",
          "partial": "Stmt",
          "signature": "Eval Object-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:interpretStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "invert",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#invert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "invert",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "klass",
          "package": "berp",
          "signature": "Ident -\u003e ObjectRef -\u003e [Object] -\u003e Eval [(Hashed String, ObjectRef)] -\u003e Eval Object",
          "source": "src/Berp-Base-Class.html#klass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "klass",
          "normalized": "Ident-\u003eObjectRef-\u003e[Object]-\u003eEval[(Hashed String,ObjectRef)]-\u003eEval Object",
          "package": "berp",
          "signature": "Ident-\u003eObjectRef-\u003e[Object]-\u003eEval[(Hashed String,ObjectRef)]-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:klass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "lambda",
          "package": "berp",
          "signature": "Arity -\u003e ([ObjectRef] -\u003e Eval Object) -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#lambda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "lambda",
          "normalized": "Arity-\u003e([ObjectRef]-\u003eEval Object)-\u003eEval Object",
          "package": "berp",
          "signature": "Arity-\u003e([ObjectRef]-\u003eEval Object)-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "list",
          "package": "berp",
          "signature": "[Object] -\u003e Eval Object",
          "source": "src/Berp-Base-StdTypes-List.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "list",
          "normalized": "[Object]-\u003eEval Object",
          "package": "berp",
          "signature": "[Object]-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "mkGenerator",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#mkGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "mkGenerator",
          "normalized": "Eval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Generator",
          "signature": "Eval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:mkGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "none",
          "package": "berp",
          "signature": "Object",
          "source": "src/Berp-Base-StdTypes-None.html#none",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "none",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "or",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "or",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "pass",
          "package": "berp",
          "signature": "Eval Object",
          "source": "src/Berp-Base-Prims.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "pass",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a value.\n\u003c/p\u003e",
          "module": "Berp.Base",
          "name": "pure",
          "package": "berp",
          "signature": "forall a.  a -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "Lift value",
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "pure",
          "normalized": "a b c-\u003ed c",
          "package": "berp",
          "signature": "forall a. a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "pureObject",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#pureObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "pureObject",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "partial": "Object",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:pureObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "raise",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#raise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "raise",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "raiseFrom",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#raiseFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "raiseFrom",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "partial": "From",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:raiseFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "reRaise",
          "package": "berp",
          "signature": "Eval Object",
          "source": "src/Berp-Base-Prims.html#reRaise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "reRaise",
          "package": "berp",
          "partial": "Raise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:reRaise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "read",
          "package": "berp",
          "signature": "ObjectRef -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "read",
          "normalized": "ObjectRef-\u003eEval Object",
          "package": "berp",
          "signature": "ObjectRef-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "ret",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#ret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "ret",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "runExpr",
          "package": "berp",
          "signature": "Eval Object -\u003e IO Object",
          "source": "src/Berp-Base-Monad.html#runExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "runExpr",
          "normalized": "Eval Object-\u003eIO Object",
          "package": "berp",
          "partial": "Expr",
          "signature": "Eval Object-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:runExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "runStmt",
          "package": "berp",
          "signature": "Eval Object -\u003e IO Object",
          "source": "src/Berp-Base-Monad.html#runStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "runStmt",
          "normalized": "Eval Object-\u003eIO Object",
          "package": "berp",
          "partial": "Stmt",
          "signature": "Eval Object-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:runStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "setattr",
          "package": "berp",
          "signature": "Object -\u003e Hashed String -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#setattr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "setattr",
          "normalized": "Object-\u003eHashed String-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eHashed String-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:setattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "stmt",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "stmt",
          "normalized": "Eval Object-\u003eEval Object",
          "package": "berp",
          "signature": "Eval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "string",
          "package": "berp",
          "signature": "String -\u003e Object",
          "source": "src/Berp-Base-StdTypes-String.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "string",
          "normalized": "String-\u003eObject",
          "package": "berp",
          "signature": "String-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "subs",
          "package": "berp",
          "signature": "Object -\u003e Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#subs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "subs",
          "normalized": "Object-\u003eObject-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eObject-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:subs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "tailCall",
          "package": "berp",
          "signature": "Object -\u003e [Object] -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#tailCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "tailCall",
          "normalized": "Object-\u003e[Object]-\u003eEval Object",
          "package": "berp",
          "partial": "Call",
          "signature": "Object-\u003e[Object]-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:tailCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "topVar",
          "package": "berp",
          "signature": "Ident -\u003e IO ObjectRef",
          "source": "src/Berp-Base-Prims.html#topVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "topVar",
          "normalized": "Ident-\u003eIO ObjectRef",
          "package": "berp",
          "partial": "Var",
          "signature": "Ident-\u003eIO ObjectRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:topVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "true",
          "package": "berp",
          "signature": "Object",
          "source": "src/Berp-Base-StdTypes-Bool.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "true",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "try",
          "package": "berp",
          "signature": "Eval Object -\u003e (Object -\u003e Eval Object) -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#try",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "try",
          "normalized": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object",
          "package": "berp",
          "signature": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "tryElse",
          "package": "berp",
          "signature": "Eval Object -\u003e (Object -\u003e Eval Object) -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#tryElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "tryElse",
          "normalized": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Else",
          "signature": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:tryElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "tryElseFinally",
          "package": "berp",
          "signature": "Eval Object -\u003e (Object -\u003e Eval Object) -\u003e Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#tryElseFinally",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "tryElseFinally",
          "normalized": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Else Finally",
          "signature": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:tryElseFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "tryFinally",
          "package": "berp",
          "signature": "Eval Object -\u003e (Object -\u003e Eval Object) -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#tryFinally",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "tryFinally",
          "normalized": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Finally",
          "signature": "Eval Object-\u003e(Object-\u003eEval Object)-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:tryFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "tuple",
          "package": "berp",
          "signature": "[Object] -\u003e Object",
          "source": "src/Berp-Base-StdTypes-Tuple.html#tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "tuple",
          "normalized": "[Object]-\u003eObject",
          "package": "berp",
          "signature": "[Object]-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "unaryMinus",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#unaryMinus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "unaryMinus",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "partial": "Minus",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:unaryMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "unaryPlus",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Operators.html#unaryPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "unaryPlus",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "partial": "Plus",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:unaryPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "var",
          "package": "berp",
          "signature": "Ident -\u003e Eval ObjectRef",
          "source": "src/Berp-Base-Prims.html#var",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "var",
          "normalized": "Ident-\u003eEval ObjectRef",
          "package": "berp",
          "signature": "Ident-\u003eEval ObjectRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "while",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#while",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "while",
          "normalized": "Eval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "signature": "Eval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:while"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "whileElse",
          "package": "berp",
          "signature": "Eval Object -\u003e Eval Object -\u003e Eval Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#whileElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "whileElse",
          "normalized": "Eval Object-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "package": "berp",
          "partial": "Else",
          "signature": "Eval Object-\u003eEval Object-\u003eEval Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:whileElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Base",
          "name": "yield",
          "package": "berp",
          "signature": "Object -\u003e Eval Object",
          "source": "src/Berp-Base-Prims.html#yield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Base",
          "module": "Berp.Base",
          "name": "yield",
          "normalized": "Object-\u003eEval Object",
          "package": "berp",
          "signature": "Object-\u003eEval Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Base.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe current version of berp, exported as a Haskell string.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Berp.Version",
          "name": "Version",
          "package": "berp",
          "source": "src/Berp-Version.html",
          "type": "module"
        },
        "index": {
          "description": "The current version of berp exported as Haskell string",
          "hierarchy": "Berp Version",
          "module": "Berp.Version",
          "name": "Version",
          "package": "berp",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Version.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Berp.Version",
          "name": "version",
          "package": "berp",
          "signature": "String",
          "source": "src/Berp-Version.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Berp Version",
          "module": "Berp.Version",
          "name": "version",
          "package": "berp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/berp/docs/Berp-Version.html#v:version"
      }
    }
  ]
]