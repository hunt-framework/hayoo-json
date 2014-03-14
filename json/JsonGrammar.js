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
        "word": "JsonGrammar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstructor-destructor isomorphisms for some common datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iso.Common",
          "name": "Common",
          "package": "JsonGrammar",
          "source": "src/Data-Iso-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Constructor-destructor isomorphisms for some common datatypes",
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "Common",
          "package": "JsonGrammar",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "bool",
          "package": "JsonGrammar",
          "signature": "Iso t (Bool :- t)",
          "source": "src/Data-Iso-Common.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "bool",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "cons",
          "package": "JsonGrammar",
          "signature": "Iso (a :- ([a] :- t)) ([a] :- t)",
          "source": "src/Data-Iso-Common.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "cons",
          "normalized": "Iso(a([a]b))([a]b)",
          "package": "JsonGrammar",
          "signature": "Iso(a([a]t))([a]t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "either",
          "package": "JsonGrammar",
          "signature": "Iso t1 (a :- t2) -\u003e Iso t1 (b :- t2) -\u003e Iso t1 (Either a b :- t2)",
          "source": "src/Data-Iso-Common.html#either",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "either",
          "normalized": "Iso a(b a)-\u003eIso a(c a)-\u003eIso a(Either b c a)",
          "package": "JsonGrammar",
          "signature": "Iso t(a t)-\u003eIso t(b t)-\u003eIso t(Either a b t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "false",
          "package": "JsonGrammar",
          "signature": "Iso t (Bool :- t)",
          "source": "src/Data-Iso-Common.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "false",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "just",
          "package": "JsonGrammar",
          "signature": "Iso (a :- t) (Maybe a :- t)",
          "source": "src/Data-Iso-Common.html#just",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "just",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "left",
          "package": "JsonGrammar",
          "signature": "Iso (a :- t) (Either a b :- t)",
          "source": "src/Data-Iso-Common.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "left",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "maybe",
          "package": "JsonGrammar",
          "signature": "Iso t (a :- t) -\u003e Iso t (Maybe a :- t)",
          "source": "src/Data-Iso-Common.html#maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "maybe",
          "normalized": "Iso a(b a)-\u003eIso a(Maybe b a)",
          "package": "JsonGrammar",
          "signature": "Iso t(a t)-\u003eIso t(Maybe a t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "nil",
          "package": "JsonGrammar",
          "signature": "Iso t ([a] :- t)",
          "source": "src/Data-Iso-Common.html#nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "nil",
          "normalized": "Iso a([b]a)",
          "package": "JsonGrammar",
          "signature": "Iso t([a]t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "nothing",
          "package": "JsonGrammar",
          "signature": "Iso t (Maybe a :- t)",
          "source": "src/Data-Iso-Common.html#nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "nothing",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "right",
          "package": "JsonGrammar",
          "signature": "Iso (b :- t) (Either a b :- t)",
          "source": "src/Data-Iso-Common.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "right",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "true",
          "package": "JsonGrammar",
          "signature": "Iso t (Bool :- t)",
          "source": "src/Data-Iso-Common.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "true",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "tup",
          "package": "JsonGrammar",
          "signature": "Iso (a :- (b :- t)) ((a, b) :- t)",
          "source": "src/Data-Iso-Common.html#tup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "tup",
          "normalized": "Iso(a(b c))((a,b)c)",
          "package": "JsonGrammar",
          "signature": "Iso(a(b t))((a,b)t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:tup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "tup3",
          "package": "JsonGrammar",
          "signature": "Iso (a :- (b :- (c :- t))) ((a, b, c) :- t)",
          "source": "src/Data-Iso-Common.html#tup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "tup3",
          "normalized": "Iso(a(b(c d)))((a,b,c)d)",
          "package": "JsonGrammar",
          "signature": "Iso(a(b(c t)))((a,b,c)t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:tup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Common",
          "name": "unit",
          "package": "JsonGrammar",
          "signature": "Iso t (() :- t)",
          "source": "src/Data-Iso-Common.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Common",
          "module": "Data.Iso.Common",
          "name": "unit",
          "normalized": "Iso a(()a)",
          "package": "JsonGrammar",
          "signature": "Iso t(()t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Common.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Core",
          "name": "Core",
          "package": "JsonGrammar",
          "source": "src/Data-Iso-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "Core",
          "package": "JsonGrammar",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeterogenous stack with a head and a tail.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": ":-",
          "package": "JsonGrammar",
          "source": "src/Data-Iso-Core.html#%3A-",
          "type": "data"
        },
        "index": {
          "description": "Heterogenous stack with head and tail",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": ":-",
          "package": "JsonGrammar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#t::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBidirectional partial isomorphism.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "Iso",
          "package": "JsonGrammar",
          "source": "src/Data-Iso-Core.html#Iso",
          "type": "data"
        },
        "index": {
          "description": "Bidirectional partial isomorphism",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "Iso",
          "package": "JsonGrammar",
          "partial": "Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Core",
          "name": ":-",
          "package": "JsonGrammar",
          "signature": "h :- t",
          "source": "src/Data-Iso-Core.html#%3A-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": ":-",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.Core",
          "name": "Iso",
          "package": "JsonGrammar",
          "signature": "Iso (a -\u003e Maybe b) (b -\u003e Maybe a)",
          "source": "src/Data-Iso-Core.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "Iso",
          "normalized": "Iso(a-\u003eMaybe b)(b-\u003eMaybe a)",
          "package": "JsonGrammar",
          "partial": "Iso",
          "signature": "Iso(a-\u003eMaybe b)(b-\u003eMaybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an isomorphism in one direction.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "convert",
          "package": "JsonGrammar",
          "signature": "Iso a b -\u003e a -\u003e Maybe b",
          "source": "src/Data-Iso-Core.html#convert",
          "type": "function"
        },
        "index": {
          "description": "Apply an isomorphism in one direction",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "convert",
          "normalized": "Iso a b-\u003ea-\u003eMaybe b",
          "package": "JsonGrammar",
          "signature": "Iso a b-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce a head value that is passed unmodified.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "duck",
          "package": "JsonGrammar",
          "signature": "Iso t1 t2 -\u003e Iso (h :- t1) (h :- t2)",
          "source": "src/Data-Iso-Core.html#duck",
          "type": "function"
        },
        "index": {
          "description": "Introduce head value that is passed unmodified",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "duck",
          "normalized": "Iso a a-\u003eIso(b a)(b a)",
          "package": "JsonGrammar",
          "signature": "Iso t t-\u003eIso(h t)(h t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:duck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen converting from left to right, push the default value on top of the stack. When converting from right to left, pop the value and discard it.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "ignoreWithDefault",
          "package": "JsonGrammar",
          "signature": "a -\u003e Iso t (a :- t)",
          "source": "src/Data-Iso-Core.html#ignoreWithDefault",
          "type": "function"
        },
        "index": {
          "description": "When converting from left to right push the default value on top of the stack When converting from right to left pop the value and discard it",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "ignoreWithDefault",
          "normalized": "a-\u003eIso b(a b)",
          "package": "JsonGrammar",
          "partial": "With Default",
          "signature": "a-\u003eIso t(a t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:ignoreWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of an isomorphism.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "inverse",
          "package": "JsonGrammar",
          "signature": "Iso a b -\u003e Iso b a",
          "source": "src/Data-Iso-Core.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Inverse of an isomorphism",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "inverse",
          "normalized": "Iso a b-\u003eIso b a",
          "package": "JsonGrammar",
          "signature": "Iso a b-\u003eIso b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003elit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "inverseLit",
          "package": "JsonGrammar",
          "signature": "a -\u003e Iso (a :- t) t",
          "source": "src/Data-Iso-Core.html#inverseLit",
          "type": "function"
        },
        "index": {
          "description": "Inverse of lit",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "inverseLit",
          "normalized": "a-\u003eIso(a b)b",
          "package": "JsonGrammar",
          "partial": "Lit",
          "signature": "a-\u003eIso(a t)t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:inverseLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush or pop a specific value.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "lit",
          "package": "JsonGrammar",
          "signature": "a -\u003e Iso t (a :- t)",
          "source": "src/Data-Iso-Core.html#lit",
          "type": "function"
        },
        "index": {
          "description": "Push or pop specific value",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "lit",
          "normalized": "a-\u003eIso b(a b)",
          "package": "JsonGrammar",
          "signature": "a-\u003eIso t(a t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an isomorphism as many times as possible, greedily.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "many",
          "package": "JsonGrammar",
          "signature": "Iso a a -\u003e Iso a a",
          "source": "src/Data-Iso-Core.html#many",
          "type": "function"
        },
        "index": {
          "description": "Apply an isomorphism as many times as possible greedily",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "many",
          "normalized": "Iso a a-\u003eIso a a",
          "package": "JsonGrammar",
          "signature": "Iso a a-\u003eIso a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen converting from left to right, push the default value on top of the\n stack. When converting from right to left, pop the value, make sure it\n matches the predicate and then discard it.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "matchWithDefault",
          "package": "JsonGrammar",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Iso t (a :- t)",
          "source": "src/Data-Iso-Core.html#matchWithDefault",
          "type": "function"
        },
        "index": {
          "description": "When converting from left to right push the default value on top of the stack When converting from right to left pop the value make sure it matches the predicate and then discard it",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "matchWithDefault",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eIso b(a b)",
          "package": "JsonGrammar",
          "partial": "With Default",
          "signature": "(a-\u003eBool)-\u003ea-\u003eIso t(a t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:matchWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a stack isomorphism.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "stack",
          "package": "JsonGrammar",
          "signature": "Iso a b -\u003e Iso (a :- t) (b :- t)",
          "source": "src/Data-Iso-Core.html#stack",
          "type": "function"
        },
        "index": {
          "description": "Convert to stack isomorphism",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "stack",
          "normalized": "Iso a b-\u003eIso(a c)(b c)",
          "package": "JsonGrammar",
          "signature": "Iso a b-\u003eIso(a t)(b t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the top two arguments.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "swap",
          "package": "JsonGrammar",
          "signature": "Iso (a :- (b :- t)) (b :- (a :- t))",
          "source": "src/Data-Iso-Core.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swap the top two arguments",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "swap",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a stack isomorphism.\n\u003c/p\u003e",
          "module": "Data.Iso.Core",
          "name": "unstack",
          "package": "JsonGrammar",
          "signature": "Iso (a :- ()) (b :- ()) -\u003e Iso a b",
          "source": "src/Data-Iso-Core.html#unstack",
          "type": "function"
        },
        "index": {
          "description": "Convert from stack isomorphism",
          "hierarchy": "Data Iso Core",
          "module": "Data.Iso.Core",
          "name": "unstack",
          "normalized": "Iso(a())(b())-\u003eIso a b",
          "package": "JsonGrammar",
          "signature": "Iso(a())(b())-\u003eIso a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-Core.html#v:unstack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iso.TH",
          "name": "TH",
          "package": "JsonGrammar",
          "source": "src/Data-Iso-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iso TH",
          "module": "Data.Iso.TH",
          "name": "TH",
          "package": "JsonGrammar",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive partial isomorphisms for a given datatype. The resulting\n expression is a tuple with one isomorphism element for each constructor in\n the datatype.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nothing :: Iso t (Maybe a :- t)\n just    :: Iso (a :- t) (Maybe a :- t)\n (nothing, just) = $(deriveIsos ''Maybe)\n\u003c/pre\u003e\u003cp\u003eDeriving isomorphisms this way requires \u003ccode\u003e-XNoMonoPatBinds\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iso.TH",
          "name": "deriveIsos",
          "package": "JsonGrammar",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Iso-TH.html#deriveIsos",
          "type": "function"
        },
        "index": {
          "description": "Derive partial isomorphisms for given datatype The resulting expression is tuple with one isomorphism element for each constructor in the datatype For example nothing Iso Maybe just Iso Maybe nothing just deriveIsos Maybe Deriving isomorphisms this way requires XNoMonoPatBinds",
          "hierarchy": "Data Iso TH",
          "module": "Data.Iso.TH",
          "name": "deriveIsos",
          "normalized": "Name-\u003eQ Exp",
          "package": "JsonGrammar",
          "partial": "Isos",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso-TH.html#v:deriveIsos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module that re-exports the available submodules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iso",
          "name": "Iso",
          "package": "JsonGrammar",
          "source": "src/Data-Iso.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience module that re-exports the available submodules",
          "hierarchy": "Data Iso",
          "module": "Data.Iso",
          "name": "Iso",
          "package": "JsonGrammar",
          "partial": "Iso",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Data-Iso.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JsonGrammar",
          "name": "JsonGrammar",
          "package": "JsonGrammar",
          "source": "src/Language-JsonGrammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "JsonGrammar",
          "package": "JsonGrammar",
          "partial": "Json Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert values of a type to and from JSON.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "Json",
          "package": "JsonGrammar",
          "source": "src/Language-JsonGrammar.html#Json",
          "type": "class"
        },
        "index": {
          "description": "Convert values of type to and from JSON",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "Json",
          "package": "JsonGrammar",
          "partial": "Json",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#t:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a bunch of elements in a JSON array. For example, to match an array of exactly length two:\n\u003c/p\u003e\u003cpre\u003e array (element . element)\n\u003c/pre\u003e\u003cp\u003eOr to match an empty array:\n\u003c/p\u003e\u003cpre\u003e array id\n\u003c/pre\u003e",
          "module": "Language.JsonGrammar",
          "name": "array",
          "package": "JsonGrammar",
          "signature": "Iso ([Value] :- t1) ([Value] :- t2) -\u003e Iso (Value :- t1) t2",
          "source": "src/Language-JsonGrammar.html#array",
          "type": "function"
        },
        "index": {
          "description": "Wrap bunch of elements in JSON array For example to match an array of exactly length two array element element Or to match an empty array array id",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "array",
          "normalized": "Iso([Value]a)([Value]a)-\u003eIso(Value a)a",
          "package": "JsonGrammar",
          "signature": "Iso([Value]t)([Value]t)-\u003eIso(Value t)t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a single array element whose grammar is given by a \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e\n instance.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "element",
          "package": "JsonGrammar",
          "signature": "Iso ([Value] :- t) ([Value] :- (a :- t))",
          "source": "src/Language-JsonGrammar.html#element",
          "type": "function"
        },
        "index": {
          "description": "Describe single array element whose grammar is given by Json instance",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "element",
          "normalized": "Iso([Value]a)([Value](b a))",
          "package": "JsonGrammar",
          "signature": "Iso([Value]t)([Value](a t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a single array element with the given grammar.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "elementBy",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t1) t2 -\u003e Iso ([Value] :- t1) ([Value] :- t2)",
          "source": "src/Language-JsonGrammar.html#elementBy",
          "type": "function"
        },
        "index": {
          "description": "Describe single array element with the given grammar",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "elementBy",
          "normalized": "Iso(Value a)a-\u003eIso([Value]a)([Value]a)",
          "package": "JsonGrammar",
          "partial": "By",
          "signature": "Iso(Value t)t-\u003eIso([Value]t)([Value]t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:elementBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpect a specific key/value pair.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "fixedProp",
          "package": "JsonGrammar",
          "signature": "String -\u003e a -\u003e Iso (Object :- t) (Object :- t)",
          "source": "src/Language-JsonGrammar.html#fixedProp",
          "type": "function"
        },
        "index": {
          "description": "Expect specific key value pair",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "fixedProp",
          "normalized": "String-\u003ea-\u003eIso(Object b)(Object b)",
          "package": "JsonGrammar",
          "partial": "Prop",
          "signature": "String-\u003ea-\u003eIso(Object t)(Object t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:fixedProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from JSON.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "fromJson",
          "package": "JsonGrammar",
          "signature": "Value -\u003e Maybe a",
          "source": "src/Language-JsonGrammar.html#fromJson",
          "type": "function"
        },
        "index": {
          "description": "Convert from JSON",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "fromJson",
          "normalized": "Value-\u003eMaybe a",
          "package": "JsonGrammar",
          "partial": "Json",
          "signature": "Value-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:fromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JsonGrammar",
          "name": "grammar",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t) (a :- t)",
          "source": "src/Language-JsonGrammar.html#grammar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "grammar",
          "package": "JsonGrammar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:grammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e as possible (greedy) value. Always converts \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e and vice versa, even if the argument grammar knows how to handle\n these values.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "greedyOption",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t) (a :- t) -\u003e Iso (Value :- t) (Maybe a :- t)",
          "source": "src/Language-JsonGrammar.html#greedyOption",
          "type": "function"
        },
        "index": {
          "description": "Introduce Null as possible greedy value Always converts Nothing to Null and vice versa even if the argument grammar knows how to handle these values",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "greedyOption",
          "normalized": "Iso(Value a)(b a)-\u003eIso(Value a)(Maybe b a)",
          "package": "JsonGrammar",
          "partial": "Option",
          "signature": "Iso(Value t)(a t)-\u003eIso(Value t)(Maybe a t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:greedyOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and discard all properties left in the object. When converting back to JSON, produces no properties.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "ignoreRest",
          "package": "JsonGrammar",
          "signature": "Iso (Object :- t) (Object :- t)",
          "source": "src/Language-JsonGrammar.html#ignoreRest",
          "type": "function"
        },
        "index": {
          "description": "Match and discard all properties left in the object When converting back to JSON produces no properties",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "ignoreRest",
          "package": "JsonGrammar",
          "partial": "Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:ignoreRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert any Aeson-enabled type to a grammar.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "liftAeson",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t) (a :- t)",
          "source": "src/Language-JsonGrammar.html#liftAeson",
          "type": "function"
        },
        "index": {
          "description": "Convert any Aeson-enabled type to grammar",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "liftAeson",
          "package": "JsonGrammar",
          "partial": "Aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:liftAeson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between a JSON array and Haskell list of arbitrary lengts. The\n elements are converted using the argument grammar.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "list",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t) (a :- t) -\u003e Iso (Value :- t) ([a] :- t)",
          "source": "src/Language-JsonGrammar.html#list",
          "type": "function"
        },
        "index": {
          "description": "Convert between JSON array and Haskell list of arbitrary lengts The elements are converted using the argument grammar",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "list",
          "normalized": "Iso(Value a)(b a)-\u003eIso(Value a)([b]a)",
          "package": "JsonGrammar",
          "signature": "Iso(Value t)(a t)-\u003eIso(Value t)([a]t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpect/produce a specific JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "litJson",
          "package": "JsonGrammar",
          "signature": "a -\u003e Iso (Value :- t) t",
          "source": "src/Language-JsonGrammar.html#litJson",
          "type": "function"
        },
        "index": {
          "description": "Expect produce specific JSON Value",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "litJson",
          "normalized": "a-\u003eIso(Value b)b",
          "package": "JsonGrammar",
          "partial": "Json",
          "signature": "a-\u003eIso(Value t)t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:litJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an exhaustive bunch of properties in an object. Typical usage:\n\u003c/p\u003e\u003cpre\u003e object (prop \"key1\" . prop \"key2\")\n\u003c/pre\u003e",
          "module": "Language.JsonGrammar",
          "name": "object",
          "package": "JsonGrammar",
          "signature": "Iso (Object :- t1) (Object :- t2) -\u003e Iso (Value :- t1) t2",
          "source": "src/Language-JsonGrammar.html#object",
          "type": "function"
        },
        "index": {
          "description": "Wrap an exhaustive bunch of properties in an object Typical usage object prop key1 prop key2",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "object",
          "normalized": "Iso(Object a)(Object a)-\u003eIso(Value a)a",
          "package": "JsonGrammar",
          "signature": "Iso(Object t)(Object t)-\u003eIso(Value t)t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e as possible value. First gives the argument grammar a\n chance, only yielding \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the argument grammar fails to\n handle the input.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "option",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t) (a :- t) -\u003e Iso (Value :- t) (Maybe a :- t)",
          "source": "src/Language-JsonGrammar.html#option",
          "type": "function"
        },
        "index": {
          "description": "Introduce Null as possible value First gives the argument grammar chance only yielding Null or Nothing if the argument grammar fails to handle the input",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "option",
          "normalized": "Iso(Value a)(b a)-\u003eIso(Value a)(Maybe b a)",
          "package": "JsonGrammar",
          "signature": "Iso(Value t)(a t)-\u003eIso(Value t)(Maybe a t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a property whose value grammar is described by a \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "prop",
          "package": "JsonGrammar",
          "signature": "String -\u003e Iso (Object :- t) (Object :- (a :- t))",
          "source": "src/Language-JsonGrammar.html#prop",
          "type": "function"
        },
        "index": {
          "description": "Describe property whose value grammar is described by Json instance",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "prop",
          "normalized": "String-\u003eIso(Object a)(Object(b a))",
          "package": "JsonGrammar",
          "signature": "String-\u003eIso(Object t)(Object(a t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a property with the given name and value grammar.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "propBy",
          "package": "JsonGrammar",
          "signature": "Iso (Value :- t) (a :- t) -\u003e String -\u003e Iso (Object :- t) (Object :- (a :- t))",
          "source": "src/Language-JsonGrammar.html#propBy",
          "type": "function"
        },
        "index": {
          "description": "Describe property with the given name and value grammar",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "propBy",
          "normalized": "Iso(Value a)(b a)-\u003eString-\u003eIso(Object a)(Object(b a))",
          "package": "JsonGrammar",
          "partial": "By",
          "signature": "Iso(Value t)(a t)-\u003eString-\u003eIso(Object t)(Object(a t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:propBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpect a specific key/value pair.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "rawFixedProp",
          "package": "JsonGrammar",
          "signature": "String -\u003e Value -\u003e Iso (Object :- t) (Object :- t)",
          "source": "src/Language-JsonGrammar.html#rawFixedProp",
          "type": "function"
        },
        "index": {
          "description": "Expect specific key value pair",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "rawFixedProp",
          "normalized": "String-\u003eValue-\u003eIso(Object a)(Object a)",
          "package": "JsonGrammar",
          "partial": "Fixed Prop",
          "signature": "String-\u003eValue-\u003eIso(Object t)(Object t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:rawFixedProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect all properties left in an object.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "rest",
          "package": "JsonGrammar",
          "signature": "Iso (Object :- t) (Object :- (HashMap Text Value :- t))",
          "source": "src/Language-JsonGrammar.html#rest",
          "type": "function"
        },
        "index": {
          "description": "Collect all properties left in an object",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "rest",
          "package": "JsonGrammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to JSON.\n\u003c/p\u003e",
          "module": "Language.JsonGrammar",
          "name": "toJson",
          "package": "JsonGrammar",
          "signature": "a -\u003e Maybe Value",
          "source": "src/Language-JsonGrammar.html#toJson",
          "type": "function"
        },
        "index": {
          "description": "Convert to JSON",
          "hierarchy": "Language JsonGrammar",
          "module": "Language.JsonGrammar",
          "name": "toJson",
          "normalized": "a-\u003eMaybe Value",
          "package": "JsonGrammar",
          "partial": "Json",
          "signature": "a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JsonGrammar/docs/Language-JsonGrammar.html#v:toJson"
      }
    }
  ]
]