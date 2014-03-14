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
        "word": "tup-functor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "Class",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "Class",
          "package": "tup-functor",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "Tup",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Class.html#Tup",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "Tup",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#t:Tup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation\n\u003c/p\u003e",
          "module": "Data.Tup.Tup.Class",
          "name": "maybeTupConcat",
          "package": "tup-functor",
          "signature": "f a -\u003e g a -\u003e Maybe (h a)",
          "source": "src/Data-Tup-Tup-Class.html#maybeTupConcat",
          "type": "function"
        },
        "index": {
          "description": "Concatenation",
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "maybeTupConcat",
          "normalized": "a b-\u003ec b-\u003eMaybe(d b)",
          "package": "tup-functor",
          "partial": "Tup Concat",
          "signature": "f a-\u003eg a-\u003eMaybe(h a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:maybeTupConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe version of \u003ccode\u003e\u003ca\u003etupFromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tup.Tup.Class",
          "name": "maybeTupFromList",
          "package": "tup-functor",
          "signature": "[a] -\u003e Maybe (f a)",
          "source": "src/Data-Tup-Tup-Class.html#maybeTupFromList",
          "type": "function"
        },
        "index": {
          "description": "Safe version of tupFromList",
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "maybeTupFromList",
          "normalized": "[a]-\u003eMaybe(b a)",
          "package": "tup-functor",
          "partial": "Tup From List",
          "signature": "[a]-\u003eMaybe(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:maybeTupFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a Tup of Tups.\n\u003c/p\u003e",
          "module": "Data.Tup.Tup.Class",
          "name": "transposeTup",
          "package": "tup-functor",
          "signature": "f (g a) -\u003e g (f a)",
          "source": "src/Data-Tup-Tup-Class.html#transposeTup",
          "type": "function"
        },
        "index": {
          "description": "Transpose Tup of Tups",
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "transposeTup",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f(g a)-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:transposeTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "tupFromList",
          "package": "tup-functor",
          "signature": "[a] -\u003e f a",
          "source": "src/Data-Tup-Tup-Class.html#tupFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "tupFromList",
          "normalized": "[a]-\u003eb a",
          "package": "tup-functor",
          "partial": "From List",
          "signature": "[a]-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:tupFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "tupSize",
          "package": "tup-functor",
          "signature": "f a -\u003e Int",
          "source": "src/Data-Tup-Tup-Class.html#tupSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "tupSize",
          "normalized": "a b-\u003eInt",
          "package": "tup-functor",
          "partial": "Size",
          "signature": "f a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:tupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "tupToList",
          "package": "tup-functor",
          "signature": "f a -\u003e [a]",
          "source": "src/Data-Tup-Tup-Class.html#tupToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "tupToList",
          "normalized": "a b-\u003e[b]",
          "package": "tup-functor",
          "partial": "To List",
          "signature": "f a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:tupToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "tupUndef",
          "package": "tup-functor",
          "signature": "f a -\u003e a",
          "source": "src/Data-Tup-Tup-Class.html#tupUndef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "tupUndef",
          "normalized": "a b-\u003eb",
          "package": "tup-functor",
          "partial": "Undef",
          "signature": "f a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:tupUndef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "unsafeTupConcat",
          "package": "tup-functor",
          "signature": "f a -\u003e g a -\u003e h a",
          "source": "src/Data-Tup-Tup-Class.html#unsafeTupConcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "unsafeTupConcat",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "tup-functor",
          "partial": "Tup Concat",
          "signature": "f a-\u003eg a-\u003eh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:unsafeTupConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "zipTup",
          "package": "tup-functor",
          "signature": "f a -\u003e f b -\u003e f (a, b)",
          "source": "src/Data-Tup-Tup-Class.html#zipTup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "zipTup",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef b-\u003ef(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:zipTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "zipTup3",
          "package": "tup-functor",
          "signature": "f a -\u003e f b -\u003e f c -\u003e f (a, b, c)",
          "source": "src/Data-Tup-Tup-Class.html#zipTup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "zipTup3",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea(b,c,d)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef b-\u003ef c-\u003ef(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:zipTup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "zipTup4",
          "package": "tup-functor",
          "signature": "f a -\u003e f b -\u003e f c -\u003e f d -\u003e f (a, b, c, d)",
          "source": "src/Data-Tup-Tup-Class.html#zipTup4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "zipTup4",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea e-\u003ea(b,c,d,e)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef b-\u003ef c-\u003ef d-\u003ef(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:zipTup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "zipTupWith",
          "package": "tup-functor",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Tup-Tup-Class.html#zipTupWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "zipTupWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "tup-functor",
          "partial": "Tup With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:zipTupWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "zipTupWith3",
          "package": "tup-functor",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Data-Tup-Tup-Class.html#zipTupWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "zipTupWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "tup-functor",
          "partial": "Tup With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:zipTupWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Class",
          "name": "zipTupWith4",
          "package": "tup-functor",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e",
          "source": "src/Data-Tup-Tup-Class.html#zipTupWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Class",
          "module": "Data.Tup.Tup.Class",
          "name": "zipTupWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "package": "tup-functor",
          "partial": "Tup With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Class.html#v:zipTupWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcatenation of tuples. Requires MPTCs and FunDeps. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tup.Tup.Concat",
          "name": "Concat",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Concat.html",
          "type": "module"
        },
        "index": {
          "description": "Concatenation of tuples Requires MPTCs and FunDeps",
          "hierarchy": "Data Tup Tup Concat",
          "module": "Data.Tup.Tup.Concat",
          "name": "Concat",
          "package": "tup-functor",
          "partial": "Concat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Concat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Concat",
          "name": "TupConcat",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Concat.html#TupConcat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Tup Tup Concat",
          "module": "Data.Tup.Tup.Concat",
          "name": "TupConcat",
          "package": "tup-functor",
          "partial": "Tup Concat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Concat.html#t:TupConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Concat",
          "name": "tupConcat",
          "package": "tup-functor",
          "signature": "f a -\u003e g a -\u003e h a",
          "source": "src/Data-Tup-Tup-Concat.html#tupConcat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Tup Concat",
          "module": "Data.Tup.Tup.Concat",
          "name": "tupConcat",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "tup-functor",
          "partial": "Concat",
          "signature": "f a-\u003eg a-\u003eh a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Concat.html#v:tupConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Lazy",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Lazy",
          "package": "tup-functor",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup0",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup0",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup0",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup1",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup1",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup2",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup2",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup3",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup3",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup4",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup4",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup5",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup5",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup5",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup6",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup6",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup6",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup7",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup7",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup7",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup8",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup8",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup8",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup9",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup9",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup9",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#t:Tup9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup0",
          "package": "tup-functor",
          "signature": "Tup0",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup0",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup1",
          "package": "tup-functor",
          "signature": "Tup1 a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup1",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup2",
          "package": "tup-functor",
          "signature": "Tup2 a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup2",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup3",
          "package": "tup-functor",
          "signature": "Tup3 a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup3",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup4",
          "package": "tup-functor",
          "signature": "Tup4 a a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup4",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup5",
          "package": "tup-functor",
          "signature": "Tup5 a a a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup5",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup6",
          "package": "tup-functor",
          "signature": "Tup6 a a a a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup6",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup7",
          "package": "tup-functor",
          "signature": "Tup7 a a a a a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup7",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup8",
          "package": "tup-functor",
          "signature": "Tup8 a a a a a a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup8",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup9",
          "package": "tup-functor",
          "signature": "Tup9 a a a a a a a a a",
          "source": "src/Data-Tup-Tup-Lazy.html#Tup9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "Tup9",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:Tup9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f (Tup2 a)",
          "source": "src/Data-Tup-Tup-Lazy.html#tupTup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup",
          "normalized": "a b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:tupTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup3",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f (Tup3 a)",
          "source": "src/Data-Tup-Tup-Lazy.html#tupTup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup3",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:tupTup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup4",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f a -\u003e f (Tup4 a)",
          "source": "src/Data-Tup-Tup-Lazy.html#tupTup4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup4",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:tupTup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup5",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f a -\u003e f a -\u003e f (Tup5 a)",
          "source": "src/Data-Tup-Tup-Lazy.html#tupTup5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Lazy",
          "module": "Data.Tup.Tup.Lazy",
          "name": "tupTup5",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Lazy.html#v:tupTup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Strict",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Strict",
          "package": "tup-functor",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup0",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup0",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup0",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup1",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup1",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup2",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup2",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup3",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup3",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup4",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup4",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup5",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup5",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup5",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup6",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup6",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup6",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup7",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup7",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup7",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup8",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup8",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup8",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup9",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup-Strict.html#Tup9",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup9",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#t:Tup9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup0",
          "package": "tup-functor",
          "signature": "Tup0",
          "source": "src/Data-Tup-Tup-Strict.html#Tup0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup0",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup1",
          "package": "tup-functor",
          "signature": "Tup1 !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup1",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup2",
          "package": "tup-functor",
          "signature": "Tup2 !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup2",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup3",
          "package": "tup-functor",
          "signature": "Tup3 !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup3",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup4",
          "package": "tup-functor",
          "signature": "Tup4 !a !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup4",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup5",
          "package": "tup-functor",
          "signature": "Tup5 !a !a !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup5",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup6",
          "package": "tup-functor",
          "signature": "Tup6 !a !a !a !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup6",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup7",
          "package": "tup-functor",
          "signature": "Tup7 !a !a !a !a !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup7",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup8",
          "package": "tup-functor",
          "signature": "Tup8 !a !a !a !a !a !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup8",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup9",
          "package": "tup-functor",
          "signature": "Tup9 !a !a !a !a !a !a !a !a !a",
          "source": "src/Data-Tup-Tup-Strict.html#Tup9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "Tup9",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:Tup9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f (Tup2 a)",
          "source": "src/Data-Tup-Tup-Strict.html#tupTup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup",
          "normalized": "a b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:tupTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup3",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f (Tup3 a)",
          "source": "src/Data-Tup-Tup-Strict.html#tupTup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup3",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:tupTup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup4",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f a -\u003e f (Tup4 a)",
          "source": "src/Data-Tup-Tup-Strict.html#tupTup4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup4",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:tupTup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup5",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f a -\u003e f a -\u003e f (Tup5 a)",
          "source": "src/Data-Tup-Tup-Strict.html#tupTup5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Tup Strict",
          "module": "Data.Tup.Tup.Strict",
          "name": "tupTup5",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea b-\u003ea b-\u003ea(Tup b)",
          "package": "tup-functor",
          "partial": "Tup",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef a-\u003ef a-\u003ef(Tup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup-Strict.html#v:tupTup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis small library defines data types \u003ccode\u003e\u003ca\u003eTup1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTup2\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003eTup9\u003c/a\u003e\u003c/code\u003e for homogeneous tuples of small size (both strict and lazy), \n and various instances for them, most notably \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e. We also have a \u003ccode\u003e\u003ca\u003eTup\u003c/a\u003e\u003c/code\u003e type class:\n\u003c/p\u003e\u003cpre\u003e class Tup f where\n   tupSize     :: f a -\u003e Int\n   tupToList   :: f a -\u003e [a]\n   tupFromList :: [a] -\u003e f a \n   tupUndef    :: f a -\u003e a\n\u003c/pre\u003e\u003cp\u003eAlso included is a very simple preprocesszor \u003ccode\u003etuplepp\u003c/code\u003e which translates\n the syntax \u003ccode\u003e{{a,b,c}}\u003c/code\u003e into \u003ccode\u003e(Tup3 a b c)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tup.Tup",
          "name": "Tup",
          "package": "tup-functor",
          "source": "src/Data-Tup-Tup.html",
          "type": "module"
        },
        "index": {
          "description": "This small library defines data types Tup1 Tup2 Tup9 for homogeneous tuples of small size both strict and lazy and various instances for them most notably Functor and Applicative We also have Tup type class class Tup where tupSize Int tupToList tupFromList tupUndef Also included is very simple preprocesszor tuplepp which translates the syntax into Tup3",
          "hierarchy": "Data Tup Tup",
          "module": "Data.Tup.Tup",
          "name": "Tup",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Tup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHomogeneous lists with the length encoded in the type.\n\u003c/p\u003e\u003cp\u003eThis can be considered as a different implementation of \u003ca\u003eData.Tup.Tup\u003c/a\u003e \n (one which also scales for vectors/tuples longer than 9 elements)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tup.Vec",
          "name": "Vec",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html",
          "type": "module"
        },
        "index": {
          "description": "Homogeneous lists with the length encoded in the type This can be considered as different implementation of Data.Tup.Tup one which also scales for vectors tuples longer than elements",
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Cons",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Cons",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Cons",
          "package": "tup-functor",
          "partial": "Cons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Empty",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Empty",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Empty",
          "package": "tup-functor",
          "partial": "Empty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec0",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec0",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec0",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec1",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec1",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec2",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec2",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec3",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec3",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec4",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec4",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec5",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec5",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec6",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec6",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec7",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec7",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec8",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec8",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Vec9",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#Vec9",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Vec9",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:Vec9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econcatenation with type class\n\u003c/p\u003e",
          "module": "Data.Tup.Vec",
          "name": "VecConcat",
          "package": "tup-functor",
          "source": "src/Data-Tup-Vec.html#VecConcat",
          "type": "class"
        },
        "index": {
          "description": "concatenation with type class",
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "VecConcat",
          "package": "tup-functor",
          "partial": "Vec Concat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#t:VecConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Cons",
          "package": "tup-functor",
          "signature": "Cons a (v a)",
          "source": "src/Data-Tup-Vec.html#Cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Cons",
          "package": "tup-functor",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "Empty",
          "package": "tup-functor",
          "signature": "Empty",
          "source": "src/Data-Tup-Vec.html#Empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "Empty",
          "package": "tup-functor",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "consUndefTail",
          "package": "tup-functor",
          "signature": "Cons v a -\u003e v a",
          "source": "src/Data-Tup-Vec.html#consUndefTail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "consUndefTail",
          "normalized": "Cons a b-\u003ea b",
          "package": "tup-functor",
          "partial": "Undef Tail",
          "signature": "Cons v a-\u003ev a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:consUndefTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esafe concatenation\n\u003c/p\u003e",
          "module": "Data.Tup.Vec",
          "name": "maybeVecConcat",
          "package": "tup-functor",
          "signature": "f a -\u003e g a -\u003e Maybe (h a)",
          "source": "src/Data-Tup-Vec.html#maybeVecConcat",
          "type": "function"
        },
        "index": {
          "description": "safe concatenation",
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "maybeVecConcat",
          "normalized": "a b-\u003ec b-\u003eMaybe(d b)",
          "package": "tup-functor",
          "partial": "Vec Concat",
          "signature": "f a-\u003eg a-\u003eMaybe(h a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:maybeVecConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe version of \u003ccode\u003e\u003ca\u003evecFromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tup.Vec",
          "name": "maybeVecFromList",
          "package": "tup-functor",
          "signature": "[a] -\u003e Maybe (f a)",
          "source": "src/Data-Tup-Vec.html#maybeVecFromList",
          "type": "function"
        },
        "index": {
          "description": "Safe version of vecFromList",
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "maybeVecFromList",
          "normalized": "[a]-\u003eMaybe(b a)",
          "package": "tup-functor",
          "partial": "Vec From List",
          "signature": "[a]-\u003eMaybe(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:maybeVecFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a Vec of Vecs.\n\u003c/p\u003e",
          "module": "Data.Tup.Vec",
          "name": "transposeVec",
          "package": "tup-functor",
          "signature": "f (g a) -\u003e g (f a)",
          "source": "src/Data-Tup-Vec.html#transposeVec",
          "type": "function"
        },
        "index": {
          "description": "Transpose Vec of Vecs",
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "transposeVec",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f(g a)-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:transposeVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "undefinedVec",
          "package": "tup-functor",
          "signature": "v a",
          "source": "src/Data-Tup-Vec.html#undefinedVec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "undefinedVec",
          "package": "tup-functor",
          "partial": "Vec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:undefinedVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsafe concatenation\n\u003c/p\u003e",
          "module": "Data.Tup.Vec",
          "name": "unsafeVecConcat",
          "package": "tup-functor",
          "signature": "f a -\u003e g a -\u003e h a",
          "source": "src/Data-Tup-Vec.html#unsafeVecConcat",
          "type": "function"
        },
        "index": {
          "description": "unsafe concatenation",
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "unsafeVecConcat",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "tup-functor",
          "partial": "Vec Concat",
          "signature": "f a-\u003eg a-\u003eh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:unsafeVecConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec0",
          "package": "tup-functor",
          "signature": "Vec0 a",
          "source": "src/Data-Tup-Vec.html#vec0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec0",
          "package": "tup-functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec1",
          "package": "tup-functor",
          "signature": "a -\u003e Vec1 a",
          "source": "src/Data-Tup-Vec.html#vec1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec1",
          "normalized": "a-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec2",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e Vec2 a",
          "source": "src/Data-Tup-Vec.html#vec2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec2",
          "normalized": "a-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec3",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e Vec3 a",
          "source": "src/Data-Tup-Vec.html#vec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec3",
          "normalized": "a-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec4",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e Vec4 a",
          "source": "src/Data-Tup-Vec.html#vec4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec4",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec5",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec5 a",
          "source": "src/Data-Tup-Vec.html#vec5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec5",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec6",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec6 a",
          "source": "src/Data-Tup-Vec.html#vec6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec6",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec7",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec7 a",
          "source": "src/Data-Tup-Vec.html#vec7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec7",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec8",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec8 a",
          "source": "src/Data-Tup-Vec.html#vec8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec8",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vec9",
          "package": "tup-functor",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Vec9 a",
          "source": "src/Data-Tup-Vec.html#vec9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vec9",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "package": "tup-functor",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vec9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecConcat",
          "package": "tup-functor",
          "signature": "u a -\u003e v a -\u003e w a",
          "source": "src/Data-Tup-Vec.html#vecConcat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecConcat",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "tup-functor",
          "partial": "Concat",
          "signature": "u a-\u003ev a-\u003ew a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecFromList",
          "package": "tup-functor",
          "signature": "[a] -\u003e v a",
          "source": "src/Data-Tup-Vec.html#vecFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecFromList",
          "normalized": "[a]-\u003eb a",
          "package": "tup-functor",
          "partial": "From List",
          "signature": "[a]-\u003ev a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecSize",
          "package": "tup-functor",
          "signature": "v a -\u003e Int",
          "source": "src/Data-Tup-Vec.html#vecSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecSize",
          "normalized": "a b-\u003eInt",
          "package": "tup-functor",
          "partial": "Size",
          "signature": "v a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecToList",
          "package": "tup-functor",
          "signature": "v a -\u003e [a]",
          "source": "src/Data-Tup-Vec.html#vecToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecToList",
          "normalized": "a b-\u003e[b]",
          "package": "tup-functor",
          "partial": "To List",
          "signature": "v a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecUndef",
          "package": "tup-functor",
          "signature": "v a -\u003e a",
          "source": "src/Data-Tup-Vec.html#vecUndef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecUndef",
          "normalized": "a b-\u003eb",
          "package": "tup-functor",
          "partial": "Undef",
          "signature": "v a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecUndef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecVec",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f (Vec2 a)",
          "source": "src/Data-Tup-Vec.html#vecVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecVec",
          "normalized": "a b-\u003ea b-\u003ea(Vec b)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef a-\u003ef(Vec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecVec3",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f (Vec3 a)",
          "source": "src/Data-Tup-Vec.html#vecVec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecVec3",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea(Vec b)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef(Vec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecVec4",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f a -\u003e f (Vec4 a)",
          "source": "src/Data-Tup-Vec.html#vecVec4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecVec4",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea b-\u003ea(Vec b)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef a-\u003ef(Vec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecVec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "vecVec5",
          "package": "tup-functor",
          "signature": "f a -\u003e f a -\u003e f a -\u003e f a -\u003e f a -\u003e f (Vec5 a)",
          "source": "src/Data-Tup-Vec.html#vecVec5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "vecVec5",
          "normalized": "a b-\u003ea b-\u003ea b-\u003ea b-\u003ea b-\u003ea(Vec b)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef a-\u003ef a-\u003ef a-\u003ef a-\u003ef(Vec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:vecVec5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "zipVec",
          "package": "tup-functor",
          "signature": "f a -\u003e f b -\u003e f (a, b)",
          "source": "src/Data-Tup-Vec.html#zipVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "zipVec",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef b-\u003ef(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:zipVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "zipVec3",
          "package": "tup-functor",
          "signature": "f a -\u003e f b -\u003e f c -\u003e f (a, b, c)",
          "source": "src/Data-Tup-Vec.html#zipVec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "zipVec3",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea(b,c,d)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef b-\u003ef c-\u003ef(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:zipVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "zipVec4",
          "package": "tup-functor",
          "signature": "f a -\u003e f b -\u003e f c -\u003e f d -\u003e f (a, b, c, d)",
          "source": "src/Data-Tup-Vec.html#zipVec4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "zipVec4",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea e-\u003ea(b,c,d,e)",
          "package": "tup-functor",
          "partial": "Vec",
          "signature": "f a-\u003ef b-\u003ef c-\u003ef d-\u003ef(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:zipVec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "zipVecWith",
          "package": "tup-functor",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Tup-Vec.html#zipVecWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "zipVecWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "tup-functor",
          "partial": "Vec With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:zipVecWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "zipVecWith3",
          "package": "tup-functor",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Data-Tup-Vec.html#zipVecWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "zipVecWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "tup-functor",
          "partial": "Vec With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:zipVecWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tup.Vec",
          "name": "zipVecWith4",
          "package": "tup-functor",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e",
          "source": "src/Data-Tup-Vec.html#zipVecWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tup Vec",
          "module": "Data.Tup.Vec",
          "name": "zipVecWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "package": "tup-functor",
          "partial": "Vec With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup-Vec.html#v:zipVecWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis small library defines data types \u003ccode\u003e\u003ca\u003eTup1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTup2\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003eTup9\u003c/a\u003e\u003c/code\u003e for homogeneous tuples of small size (both strict and lazy), \n and various instances for them, most notably \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e. We also have a \u003ccode\u003e\u003ca\u003eTup\u003c/a\u003e\u003c/code\u003e type class:\n\u003c/p\u003e\u003cpre\u003e class Tup f where\n   tupSize     :: f a -\u003e Int\n   tupToList   :: f a -\u003e [a]\n   tupFromList :: [a] -\u003e f a \n   tupUndef    :: f a -\u003e a\n\u003c/pre\u003e\u003cp\u003eAlso included is a very simple preprocesszor \u003ccode\u003etuplepp\u003c/code\u003e which translates\n the syntax \u003ccode\u003e{{a,b,c}}\u003c/code\u003e into \u003ccode\u003e(Tup3 a b c)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA different implementation is also given in the module \u003ca\u003eData.Tup.Vec\u003c/a\u003e; this basically implements\n lists which encode their length in their types. For this, just replace \u003ccode\u003e\u003ca\u003eTup\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003eVec\u003c/code\u003e everywhere.\n The same instances and functions are provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tup",
          "name": "Tup",
          "package": "tup-functor",
          "source": "src/Data-Tup.html",
          "type": "module"
        },
        "index": {
          "description": "This small library defines data types Tup1 Tup2 Tup9 for homogeneous tuples of small size both strict and lazy and various instances for them most notably Functor and Applicative We also have Tup type class class Tup where tupSize Int tupToList tupFromList tupUndef Also included is very simple preprocesszor tuplepp which translates the syntax into Tup3 different implementation is also given in the module Data.Tup.Vec this basically implements lists which encode their length in their types For this just replace Tup by Vec everywhere The same instances and functions are provided",
          "hierarchy": "Data Tup",
          "module": "Data.Tup",
          "name": "Tup",
          "package": "tup-functor",
          "partial": "Tup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tup-functor/docs/Data-Tup.html#"
      }
    }
  ]
]