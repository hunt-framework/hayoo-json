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
        "word": "Monocle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Core",
          "name": "Core",
          "package": "Monocle",
          "source": "src/Monocle-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Core",
          "package": "Monocle",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of the functional modifier.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "FuncT",
          "package": "Monocle",
          "source": "src/Monocle-Core.html#FuncT",
          "type": "data"
        },
        "index": {
          "description": "Types of the functional modifier",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "FuncT",
          "package": "Monocle",
          "partial": "Func",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#t:FuncT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMorphism data type\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Mor",
          "package": "Monocle",
          "source": "src/Monocle-Core.html#Mor",
          "type": "data"
        },
        "index": {
          "description": "Morphism data type",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Mor",
          "package": "Monocle",
          "partial": "Mor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#t:Mor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of morphisms.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Morphism",
          "package": "Monocle",
          "source": "src/Monocle-Core.html#Morphism",
          "type": "class"
        },
        "index": {
          "description": "Class of morphisms",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Morphism",
          "package": "Monocle",
          "partial": "Morphism",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#t:Morphism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule type\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Rule",
          "package": "Monocle",
          "source": "src/Monocle-Core.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "Rule type",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Rule",
          "package": "Monocle",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTensor product of two morphisms.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "(\\*)",
          "package": "Monocle",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Monocle-Core.html#%5C%2A",
          "type": "method"
        },
        "index": {
          "description": "Tensor product of two morphisms",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "(\\*) \\*",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Monocle",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:-92--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex \\== y\u003c/code\u003e is the same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDefEqual\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "(\\==)",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a -\u003e Rule a",
          "source": "src/Monocle-Core.html#%5C%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "is the same as DefEqual",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "(\\==) \\==",
          "normalized": "Mor a-\u003eMor a-\u003eRule a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a-\u003eRule a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:-92--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of two morphisms (should be associative).\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "(\\.)",
          "package": "Monocle",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Monocle-Core.html#%5C.",
          "type": "method"
        },
        "index": {
          "description": "Composition of two morphisms should be associative",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "(\\.) \\.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Monocle",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:-92-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomary morphism\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Arrow",
          "package": "Monocle",
          "signature": "Arrow a (ArrowData a)",
          "source": "src/Monocle-Core.html#Mor",
          "type": "function"
        },
        "index": {
          "description": "Atomary morphism",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Arrow",
          "package": "Monocle",
          "partial": "Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContravariant functor\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Cofunctor",
          "package": "Monocle",
          "signature": "Cofunctor",
          "source": "src/Monocle-Core.html#FuncT",
          "type": "function"
        },
        "index": {
          "description": "Contravariant functor",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Cofunctor",
          "package": "Monocle",
          "partial": "Cofunctor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Cofunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of morphisms\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Composition",
          "package": "Monocle",
          "signature": "Composition [Mor a]",
          "source": "src/Monocle-Core.html#Mor",
          "type": "function"
        },
        "index": {
          "description": "Composition of morphisms",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Composition",
          "normalized": "Composition[Mor a]",
          "package": "Monocle",
          "partial": "Composition",
          "signature": "Composition[Mor a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Composition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclares equality of two morphisms\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "DefEqual",
          "package": "Monocle",
          "signature": "DefEqual (Mor a) (Mor a)",
          "source": "src/Monocle-Core.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "Declares equality of two morphisms",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "DefEqual",
          "package": "Monocle",
          "partial": "Def Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:DefEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctionional modifier\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Func",
          "package": "Monocle",
          "signature": "Func String [Mor a] FuncT",
          "source": "src/Monocle-Core.html#Mor",
          "type": "function"
        },
        "index": {
          "description": "Functionional modifier",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Func",
          "normalized": "Func String[Mor a]FuncT",
          "package": "Monocle",
          "partial": "Func",
          "signature": "Func String[Mor a]FuncT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction on objects\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Function",
          "package": "Monocle",
          "signature": "Function",
          "source": "src/Monocle-Core.html#FuncT",
          "type": "function"
        },
        "index": {
          "description": "Function on objects",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Function",
          "package": "Monocle",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCovariant functor\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Functor",
          "package": "Monocle",
          "signature": "Functor",
          "source": "src/Monocle-Core.html#FuncT",
          "type": "function"
        },
        "index": {
          "description": "Covariant functor",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Functor",
          "package": "Monocle",
          "partial": "Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity morphism\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Id",
          "package": "Monocle",
          "signature": "Id a",
          "source": "src/Monocle-Core.html#Mor",
          "type": "function"
        },
        "index": {
          "description": "Identity morphism",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Id",
          "package": "Monocle",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTensor product of morphisms\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Tensor",
          "package": "Monocle",
          "signature": "Tensor [Mor a]",
          "source": "src/Monocle-Core.html#Mor",
          "type": "function"
        },
        "index": {
          "description": "Tensor product of morphisms",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Tensor",
          "normalized": "Tensor[Mor a]",
          "package": "Monocle",
          "partial": "Tensor",
          "signature": "Tensor[Mor a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Tensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNaturally transformational modifier\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "Transform",
          "package": "Monocle",
          "signature": "Transform String (Mor a) [Mor a]",
          "source": "src/Monocle-Core.html#Mor",
          "type": "function"
        },
        "index": {
          "description": "Naturally transformational modifier",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "Transform",
          "normalized": "Transform String(Mor a)[Mor a]",
          "package": "Monocle",
          "partial": "Transform",
          "signature": "Transform String(Mor a)[Mor a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e to the given morphism\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "apply",
          "package": "Monocle",
          "signature": "Rule String -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Core.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Applies the Rule to the given morphism",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "apply",
          "normalized": "Rule String-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Rule String-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e by morphism information (e.g. name), domain and codomain.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "arrow",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Core.html#arrow",
          "type": "function"
        },
        "index": {
          "description": "Creates Arrow by morphism information e.g name domain and codomain",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "arrow",
          "normalized": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether morphism is an atomary formula.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "atomary",
          "package": "Monocle",
          "signature": "Mor t -\u003e Bool",
          "source": "src/Monocle-Core.html#atomary",
          "type": "function"
        },
        "index": {
          "description": "Checks whether morphism is an atomary formula",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "atomary",
          "normalized": "Mor a-\u003eBool",
          "package": "Monocle",
          "signature": "Mor t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:atomary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns codomain of the given morphism  (actually its id).\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "cod",
          "package": "Monocle",
          "signature": "a -\u003e a",
          "source": "src/Monocle-Core.html#cod",
          "type": "method"
        },
        "index": {
          "description": "Returns codomain of the given morphism actually its id",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "cod",
          "normalized": "a-\u003ea",
          "package": "Monocle",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:cod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates generalized coelement, i.e. an arrow from the the given object to the identity object.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "coelement",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Core.html#coelement",
          "type": "function"
        },
        "index": {
          "description": "Creates generalized coelement i.e an arrow from the the given object to the identity object",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "coelement",
          "normalized": "a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:coelement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollects atomary subterms of the given arrow as keys of the map.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "collect",
          "package": "Monocle",
          "signature": "Mor a -\u003e Map (Mor a) b",
          "source": "src/Monocle-Core.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Collects atomary subterms of the given arrow as keys of the map",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "collect",
          "normalized": "Mor a-\u003eMap(Mor a)b",
          "package": "Monocle",
          "signature": "Mor a-\u003eMap(Mor a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns domain of the given morphism (actually its id).\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "dom",
          "package": "Monocle",
          "signature": "a -\u003e a",
          "source": "src/Monocle-Core.html#dom",
          "type": "method"
        },
        "index": {
          "description": "Returns domain of the given morphism actually its id",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "dom",
          "normalized": "a-\u003ea",
          "package": "Monocle",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates generalized element, i.e. an arrow from the identity object to the given object.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "element",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Core.html#element",
          "type": "function"
        },
        "index": {
          "description": "Creates generalized element i.e an arrow from the identity object to the given object",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "element",
          "normalized": "a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns recursively \u003ccode\u003e(a \\. c) \\* (b \\. d)\u003c/code\u003e to \u003ccode\u003e(a \\* b) \\. (c \\* d)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "horz",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Core.html#horz",
          "type": "function"
        },
        "index": {
          "description": "Turns recursively to",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "horz",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:horz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether morphism is id.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "isId",
          "package": "Monocle",
          "signature": "a -\u003e Bool",
          "source": "src/Monocle-Core.html#isId",
          "type": "method"
        },
        "index": {
          "description": "Checks whether morphism is id",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "isId",
          "normalized": "a-\u003eBool",
          "package": "Monocle",
          "partial": "Id",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:isId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalizes the term representing morphism, e.g. turns \u003ccode\u003e((a \\* b) \\* c)\u003c/code\u003e to \u003ccode\u003e(a \\* b \\* c)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "nrm",
          "package": "Monocle",
          "signature": "Mor t -\u003e Mor t",
          "source": "src/Monocle-Core.html#nrm",
          "type": "function"
        },
        "index": {
          "description": "Normalizes the term representing morphism e.g turns to",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "nrm",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor t-\u003eMor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:nrm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates object (actually its id). Same as \u003ccode\u003e\u003ca\u003eobjectId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "object",
          "package": "Monocle",
          "signature": "a -\u003e Mor a",
          "source": "src/Monocle-Core.html#object",
          "type": "function"
        },
        "index": {
          "description": "Creates object actually its id Same as objectId",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "object",
          "normalized": "a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates object id. Same as \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "objectId",
          "package": "Monocle",
          "signature": "a -\u003e Mor a",
          "source": "src/Monocle-Core.html#objectId",
          "type": "function"
        },
        "index": {
          "description": "Creates object id Same as object",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "objectId",
          "normalized": "a-\u003eMor a",
          "package": "Monocle",
          "partial": "Id",
          "signature": "a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:objectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity object, \u003ccode\u003etid \\* f == f\u003c/code\u003e in strict monoidal category.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "tid",
          "package": "Monocle",
          "signature": "Mor a",
          "source": "src/Monocle-Core.html#tid",
          "type": "function"
        },
        "index": {
          "description": "Identity object tid in strict monoidal category",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "tid",
          "package": "Monocle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns recursively \u003ccode\u003e(a \\* b) \\. (c \\* d)\u003c/code\u003e to \u003ccode\u003e(a \\. c) \\* (b \\. d)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Core",
          "name": "vert",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Core.html#vert",
          "type": "function"
        },
        "index": {
          "description": "Turns recursively to",
          "hierarchy": "Monocle Core",
          "module": "Monocle.Core",
          "name": "vert",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Core.html#v:vert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "Markup",
          "package": "Monocle",
          "source": "src/Monocle-Markup.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "Markup",
          "package": "Monocle",
          "partial": "Markup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabelled arrow data type.\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "Lab",
          "package": "Monocle",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "data"
        },
        "index": {
          "description": "Labelled arrow data type",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "Lab",
          "package": "Monocle",
          "partial": "Lab",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#t:Lab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "MArrow",
          "package": "Monocle",
          "signature": "MArrow (Mor a) String",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "MArrow",
          "package": "Monocle",
          "partial": "MArrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:MArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "MComposition",
          "package": "Monocle",
          "signature": "MComposition [Lab a] String",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "MComposition",
          "normalized": "MComposition[Lab a]String",
          "package": "Monocle",
          "partial": "MComposition",
          "signature": "MComposition[Lab a]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:MComposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "MFunc",
          "package": "Monocle",
          "signature": "MFunc String [Lab a] FuncT String",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "MFunc",
          "normalized": "MFunc String[Lab a]FuncT String",
          "package": "Monocle",
          "partial": "MFunc",
          "signature": "MFunc String[Lab a]FuncT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:MFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "MId",
          "package": "Monocle",
          "signature": "MId (Mor a) String",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "MId",
          "package": "Monocle",
          "partial": "MId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:MId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "MTensor",
          "package": "Monocle",
          "signature": "MTensor [Lab a] String",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "MTensor",
          "normalized": "MTensor[Lab a]String",
          "package": "Monocle",
          "partial": "MTensor",
          "signature": "MTensor[Lab a]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:MTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Markup",
          "name": "MTransform",
          "package": "Monocle",
          "signature": "MTransform String (Lab a) [Mor a] String",
          "source": "src/Monocle-Markup.html#Lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "MTransform",
          "normalized": "MTransform String(Lab a)[Mor a]String",
          "package": "Monocle",
          "partial": "MTransform",
          "signature": "MTransform String(Lab a)[Mor a]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:MTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses subterm of an associative operation (composition or tensor product).\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "choose",
          "package": "Monocle",
          "signature": "String -\u003e Int -\u003e Int -\u003e Lab a -\u003e Lab a",
          "source": "src/Monocle-Markup.html#choose",
          "type": "function"
        },
        "index": {
          "description": "Chooses subterm of an associative operation composition or tensor product",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "choose",
          "normalized": "String-\u003eInt-\u003eInt-\u003eLab a-\u003eLab a",
          "package": "Monocle",
          "signature": "String-\u003eInt-\u003eInt-\u003eLab a-\u003eLab a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the label of the given marked morphism.\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "getLabel",
          "package": "Monocle",
          "signature": "Lab a -\u003e String",
          "source": "src/Monocle-Markup.html#getLabel",
          "type": "function"
        },
        "index": {
          "description": "Returns the label of the given marked morphism",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "getLabel",
          "normalized": "Lab a-\u003eString",
          "package": "Monocle",
          "partial": "Label",
          "signature": "Lab a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the given morphism marked up.\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "markup",
          "package": "Monocle",
          "signature": "Mor a -\u003e Lab a",
          "source": "src/Monocle-Markup.html#markup",
          "type": "function"
        },
        "index": {
          "description": "Returns the given morphism marked up",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "markup",
          "normalized": "Mor a-\u003eLab a",
          "package": "Monocle",
          "signature": "Mor a-\u003eLab a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:markup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emodif s lf op == \u003ccode\u003e\u003ca\u003eunmark\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003emodif'\u003c/a\u003e\u003c/code\u003e s lf op\u003c/pre\u003e",
          "module": "Monocle.Markup",
          "name": "modif",
          "package": "Monocle",
          "signature": "String -\u003e Lab a -\u003e (Mor a -\u003e Mor a) -\u003e Mor a",
          "source": "src/Monocle-Markup.html#modif",
          "type": "function"
        },
        "index": {
          "description": "modif lf op unmark modif lf op",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "modif",
          "normalized": "String-\u003eLab a-\u003e(Mor a-\u003eMor a)-\u003eMor a",
          "package": "Monocle",
          "signature": "String-\u003eLab a-\u003e(Mor a-\u003eMor a)-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:modif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies operation to the marked subterm of the given morphism.\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "modif'",
          "package": "Monocle",
          "signature": "String -\u003e Lab a -\u003e (Mor a -\u003e Mor a) -\u003e Lab a",
          "source": "src/Monocle-Markup.html#modif%27",
          "type": "function"
        },
        "index": {
          "description": "Applies operation to the marked subterm of the given morphism",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "modif'",
          "normalized": "String-\u003eLab a-\u003e(Mor a-\u003eMor a)-\u003eLab a",
          "package": "Monocle",
          "signature": "String-\u003eLab a-\u003e(Mor a-\u003eMor a)-\u003eLab a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:modif-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies operation to the marked subterm of the given morphism.\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "modifLab",
          "package": "Monocle",
          "signature": "String -\u003e Lab a -\u003e (Lab a -\u003e Lab a) -\u003e Lab a",
          "source": "src/Monocle-Markup.html#modifLab",
          "type": "function"
        },
        "index": {
          "description": "Applies operation to the marked subterm of the given morphism",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "modifLab",
          "normalized": "String-\u003eLab a-\u003e(Lab a-\u003eLab a)-\u003eLab a",
          "package": "Monocle",
          "partial": "Lab",
          "signature": "String-\u003eLab a-\u003e(Lab a-\u003eLab a)-\u003eLab a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:modifLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves labels and returns corresponding \u003ccode\u003e\u003ca\u003eMor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Markup",
          "name": "unmark",
          "package": "Monocle",
          "signature": "Lab a -\u003e Mor a",
          "source": "src/Monocle-Markup.html#unmark",
          "type": "function"
        },
        "index": {
          "description": "Removes labels and returns corresponding Mor",
          "hierarchy": "Monocle Markup",
          "module": "Monocle.Markup",
          "name": "unmark",
          "normalized": "Lab a-\u003eMor a",
          "package": "Monocle",
          "signature": "Lab a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Markup.html#v:unmark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Rules",
          "name": "Rules",
          "package": "Monocle",
          "source": "src/Monocle-Rules.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "Rules",
          "package": "Monocle",
          "partial": "Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebraid'of\u003c/a\u003e\u003c/code\u003e \"\\\\beta\"\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#braid",
          "type": "function"
        },
        "index": {
          "description": "Same as braid of beta for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given pair of objects \u003ccode\u003e(x, y)\u003c/code\u003e and name \u003ccode\u003enm\u003c/code\u003e call \u003ccode\u003ebraid'of nm x y\u003c/code\u003e to create named\n braid arrow: \u003ca\u003ehttp://en.wikipedia.org/wiki/Braided_monoidal_category\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'of",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#braid%27of",
          "type": "function"
        },
        "index": {
          "description": "For given pair of objects and name nm call braid of nm to create named braid arrow http en.wikipedia.org wiki Braided monoidal category",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'of",
          "normalized": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebraid'of\u003c/a\u003e\u003c/code\u003e \"*\\\\beta\"\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'r",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#braid%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as braid of beta for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'r",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexagon identity for \u003ccode\u003e\u003ca\u003ebraid\u003c/a\u003e\u003c/code\u003e, strict monoidal case.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'rule'Hex'Braid",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#braid%27rule%27Hex%27Braid",
          "type": "function"
        },
        "index": {
          "description": "Hexagon identity for braid strict monoidal case",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'rule'Hex'Braid",
          "package": "Monocle",
          "partial": "Hex' Braid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-rule-39-Hex-39-Braid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexagon identity for \u003ccode\u003e\u003ca\u003eunbraid\u003c/a\u003e\u003c/code\u003e, strict monoidal case.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'rule'Hex'Unbraid",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#braid%27rule%27Hex%27Unbraid",
          "type": "function"
        },
        "index": {
          "description": "Hexagon identity for unbraid strict monoidal case",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'rule'Hex'Unbraid",
          "package": "Monocle",
          "partial": "Hex' Unbraid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-rule-39-Hex-39-Unbraid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphism rule: \u003ccode\u003e\u003ca\u003eunbraid\u003c/a\u003e\u003c/code\u003e as inverse of \u003ccode\u003e\u003ca\u003ebraid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'rule'Iso'Left",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#braid%27rule%27Iso%27Left",
          "type": "function"
        },
        "index": {
          "description": "Isomorphism rule unbraid as inverse of braid",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'rule'Iso'Left",
          "package": "Monocle",
          "partial": "Iso' Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-rule-39-Iso-39-Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphism rule: \u003ccode\u003e\u003ca\u003ebraid\u003c/a\u003e\u003c/code\u003e as inverse of \u003ccode\u003e\u003ca\u003eunbraid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'rule'Iso'Right",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#braid%27rule%27Iso%27Right",
          "type": "function"
        },
        "index": {
          "description": "Isomorphism rule braid as inverse of unbraid",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'rule'Iso'Right",
          "package": "Monocle",
          "partial": "Iso' Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-rule-39-Iso-39-Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNaturality rule on the \"left wire\".\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'rule'Nat'Left",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#braid%27rule%27Nat%27Left",
          "type": "function"
        },
        "index": {
          "description": "Naturality rule on the left wire",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'rule'Nat'Left",
          "package": "Monocle",
          "partial": "Nat' Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-rule-39-Nat-39-Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNaturality rule on the \"right wire\".\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "braid'rule'Nat'Right",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#braid%27rule%27Nat%27Right",
          "type": "function"
        },
        "index": {
          "description": "Naturality rule on the right wire",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "braid'rule'Nat'Right",
          "package": "Monocle",
          "partial": "Nat' Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:braid-39-rule-39-Nat-39-Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecounit'of\u003c/a\u003e\u003c/code\u003e \"\\\\epsilon\"\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "counit",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#counit",
          "type": "function"
        },
        "index": {
          "description": "Same as counit of epsilon for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "counit",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given dual pair of objects \u003ccode\u003e(x, y)\u003c/code\u003e and name \u003ccode\u003enm\u003c/code\u003e call \u003ccode\u003ecounit'of nm x y\u003c/code\u003e to create named\n duality counit arrow. Generates error if \u003ccode\u003e(x, y)\u003c/code\u003e is not a dual pair.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "counit'of",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#counit%27of",
          "type": "function"
        },
        "index": {
          "description": "For given dual pair of objects and name nm call counit of nm to create named duality counit arrow Generates error if is not dual pair",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "counit'of",
          "normalized": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:counit-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecounit'of\u003c/a\u003e\u003c/code\u003e \"*\\\\epsilon\"\u003c/code\u003e, except that it does not check duality. For usage in\n rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "counit'r",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#counit%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as counit of epsilon except that it does not check duality For usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "counit'r",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:counit-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule for the \"cross\" arrow: it's simply self-inverse braid.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "cross'rule",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#cross%27rule",
          "type": "function"
        },
        "index": {
          "description": "Rule for the cross arrow it simply self-inverse braid",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "cross'rule",
          "package": "Monocle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:cross-39-rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edagger'of\u003c/a\u003e\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "dagger",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#dagger",
          "type": "function"
        },
        "index": {
          "description": "Same as dagger of for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "dagger",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:dagger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edagger'of f\u003c/code\u003e creates daggered version of the arrow \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "dagger'of",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#dagger%27of",
          "type": "function"
        },
        "index": {
          "description": "dagger of creates daggered version of the arrow",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "dagger'of",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:dagger-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edagger'of\u003c/a\u003e\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "dagger'r",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#dagger%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as dagger of for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "dagger'r",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:dagger-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edagger\u003c/a\u003e\u003c/code\u003e is contravariant functor, i.e. inverts composition order.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "dagger'rule'Cofunctor",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#dagger%27rule%27Cofunctor",
          "type": "function"
        },
        "index": {
          "description": "dagger is contravariant functor i.e inverts composition order",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "dagger'rule'Cofunctor",
          "package": "Monocle",
          "partial": "Cofunctor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:dagger-39-rule-39-Cofunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs contravariant functor \u003ccode\u003e\u003ca\u003edagger\u003c/a\u003e\u003c/code\u003e maps id's to id's.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "dagger'rule'Id",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#dagger%27rule%27Id",
          "type": "function"
        },
        "index": {
          "description": "As contravariant functor dagger maps id to id",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "dagger'rule'Id",
          "package": "Monocle",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:dagger-39-rule-39-Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edagger\u003c/a\u003e\u003c/code\u003e involution rule.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "dagger'rule'Inv",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#dagger%27rule%27Inv",
          "type": "function"
        },
        "index": {
          "description": "dagger involution rule",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "dagger'rule'Inv",
          "package": "Monocle",
          "partial": "Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:dagger-39-rule-39-Inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eldual'of\u003c/a\u003e\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "ldual",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#ldual",
          "type": "function"
        },
        "index": {
          "description": "Same as ldual of for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "ldual",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:ldual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given object create it's left dual: \u003ca\u003ehttp://en.wikipedia.org/wiki/Dual_object\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "ldual'of",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#ldual%27of",
          "type": "function"
        },
        "index": {
          "description": "For given object create it left dual http en.wikipedia.org wiki Dual object",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "ldual'of",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:ldual-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eldual'of\u003c/a\u003e\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "ldual'r",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#ldual%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as ldual of for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "ldual'r",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:ldual-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erdual'of\u003c/a\u003e\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "rdual",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#rdual",
          "type": "function"
        },
        "index": {
          "description": "Same as rdual of for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "rdual",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:rdual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given object create it's right dual: \u003ca\u003ehttp://en.wikipedia.org/wiki/Dual_object\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "rdual'of",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#rdual%27of",
          "type": "function"
        },
        "index": {
          "description": "For given object create it right dual http en.wikipedia.org wiki Dual object",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "rdual'of",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:rdual-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erdual'of\u003c/a\u003e\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "rdual'r",
          "package": "Monocle",
          "signature": "Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#rdual%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as rdual of for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "rdual'r",
          "normalized": "Mor a-\u003eMor a",
          "package": "Monocle",
          "signature": "Mor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:rdual-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003etwist'of\u003c/a\u003e\u003c/code\u003e \"\\\\theta\"\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#twist",
          "type": "function"
        },
        "index": {
          "description": "Same as twist of theta for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist",
          "normalized": "Mor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given object \u003ccode\u003ex\u003c/code\u003e and name \u003ccode\u003enm\u003c/code\u003e call \u003ccode\u003etwist'of nm x\u003c/code\u003e to create named\n twist arrow.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'of",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#twist%27of",
          "type": "function"
        },
        "index": {
          "description": "For given object and name nm call twist of nm to create named twist arrow",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'of",
          "normalized": "a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003etwist'of\u003c/a\u003e\u003c/code\u003e \"*\\\\theta\"\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'r",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#twist%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as twist of theta for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'r",
          "normalized": "Mor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwist/braid interaction.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'rule'Braid",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#twist%27rule%27Braid",
          "type": "function"
        },
        "index": {
          "description": "Twist braid interaction",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'rule'Braid",
          "package": "Monocle",
          "partial": "Braid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-rule-39-Braid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwisting the identity object changes nothing.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'rule'Id",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#twist%27rule%27Id",
          "type": "function"
        },
        "index": {
          "description": "Twisting the identity object changes nothing",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'rule'Id",
          "package": "Monocle",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-rule-39-Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphism rule: \u003ccode\u003e\u003ca\u003euntwist\u003c/a\u003e\u003c/code\u003e as inverse of \u003ccode\u003e\u003ca\u003etwist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'rule'Iso'Left",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#twist%27rule%27Iso%27Left",
          "type": "function"
        },
        "index": {
          "description": "Isomorphism rule untwist as inverse of twist",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'rule'Iso'Left",
          "package": "Monocle",
          "partial": "Iso' Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-rule-39-Iso-39-Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphism rule: \u003ccode\u003e\u003ca\u003etwist\u003c/a\u003e\u003c/code\u003e as inverse of \u003ccode\u003e\u003ca\u003euntwist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'rule'Iso'Right",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#twist%27rule%27Iso%27Right",
          "type": "function"
        },
        "index": {
          "description": "Isomorphism rule twist as inverse of untwist",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'rule'Iso'Right",
          "package": "Monocle",
          "partial": "Iso' Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-rule-39-Iso-39-Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwisting naturality.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "twist'rule'Natural",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#twist%27rule%27Natural",
          "type": "function"
        },
        "index": {
          "description": "Twisting naturality",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "twist'rule'Natural",
          "package": "Monocle",
          "partial": "Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:twist-39-rule-39-Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunbraid'of\u003c/a\u003e\u003c/code\u003e \"\\\\beta^{-1}\"\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "unbraid",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#unbraid",
          "type": "function"
        },
        "index": {
          "description": "Same as unbraid of beta for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "unbraid",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:unbraid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given pair of objects \u003ccode\u003e(x, y)\u003c/code\u003e and name \u003ccode\u003enm\u003c/code\u003e call \u003ccode\u003eunbraid'of nm x y\u003c/code\u003e to create named\n unbraid arrow (inverse of braid arrow).\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "unbraid'of",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#unbraid%27of",
          "type": "function"
        },
        "index": {
          "description": "For given pair of objects and name nm call unbraid of nm to create named unbraid arrow inverse of braid arrow",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "unbraid'of",
          "normalized": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:unbraid-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunbraid'of\u003c/a\u003e\u003c/code\u003e \"*\\\\beta^{-1}\"\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "unbraid'r",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#unbraid%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as unbraid of beta for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "unbraid'r",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:unbraid-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunit'of\u003c/a\u003e\u003c/code\u003e \"\\\\eta\"\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "unit",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#unit",
          "type": "function"
        },
        "index": {
          "description": "Same as unit of eta for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "unit",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given dual pair of objects \u003ccode\u003e(x, y)\u003c/code\u003e and name \u003ccode\u003enm\u003c/code\u003e call \u003ccode\u003eunit'of nm x y\u003c/code\u003e to create named\n duality unit arrow. Generates error if \u003ccode\u003e(x, y)\u003c/code\u003e is not a dual pair.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "unit'of",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#unit%27of",
          "type": "function"
        },
        "index": {
          "description": "For given dual pair of objects and name nm call unit of nm to create named duality unit arrow Generates error if is not dual pair",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "unit'of",
          "normalized": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:unit-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunit'of\u003c/a\u003e\u003c/code\u003e \"*\\\\eta\"\u003c/code\u003e, except that it does not check duality. For usage in\n rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "unit'r",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#unit%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as unit of eta except that it does not check duality For usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "unit'r",
          "normalized": "Mor String-\u003eMor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:unit-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003euntwist'of\u003c/a\u003e\u003c/code\u003e \"\\\\theta^{-1}\"\u003c/code\u003e, for usage in calculations.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "untwist",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#untwist",
          "type": "function"
        },
        "index": {
          "description": "Same as untwist of theta for usage in calculations",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "untwist",
          "normalized": "Mor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:untwist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given object \u003ccode\u003ex\u003c/code\u003e and name \u003ccode\u003enm\u003c/code\u003e call \u003ccode\u003euntwist'of nm x\u003c/code\u003e to create named\n untwist arrow.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "untwist'of",
          "package": "Monocle",
          "signature": "a -\u003e Mor a -\u003e Mor a",
          "source": "src/Monocle-Rules.html#untwist%27of",
          "type": "function"
        },
        "index": {
          "description": "For given object and name nm call untwist of nm to create named untwist arrow",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "untwist'of",
          "normalized": "a-\u003eMor a-\u003eMor a",
          "package": "Monocle",
          "signature": "a-\u003eMor a-\u003eMor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:untwist-39-of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003euntwist'of\u003c/a\u003e\u003c/code\u003e \"*\\\\theta^{-1}\"\u003c/code\u003e, for usage in rule descriptions.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "untwist'r",
          "package": "Monocle",
          "signature": "Mor String -\u003e Mor String",
          "source": "src/Monocle-Rules.html#untwist%27r",
          "type": "function"
        },
        "index": {
          "description": "Same as untwist of theta for usage in rule descriptions",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "untwist'r",
          "normalized": "Mor String-\u003eMor String",
          "package": "Monocle",
          "signature": "Mor String-\u003eMor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:untwist-39-r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne of \"zigzag rules\" for duality.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "zigzag'rule'Left",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#zigzag%27rule%27Left",
          "type": "function"
        },
        "index": {
          "description": "One of zigzag rules for duality",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "zigzag'rule'Left",
          "package": "Monocle",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:zigzag-39-rule-39-Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne of \"zigzag rules\" for duality.\n\u003c/p\u003e",
          "module": "Monocle.Rules",
          "name": "zigzag'rule'Right",
          "package": "Monocle",
          "signature": "Rule String",
          "source": "src/Monocle-Rules.html#zigzag%27rule%27Right",
          "type": "function"
        },
        "index": {
          "description": "One of zigzag rules for duality",
          "hierarchy": "Monocle Rules",
          "module": "Monocle.Rules",
          "name": "zigzag'rule'Right",
          "package": "Monocle",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Rules.html#v:zigzag-39-rule-39-Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Tex",
          "name": "Tex",
          "package": "Monocle",
          "source": "src/Monocle-Tex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "Tex",
          "package": "Monocle",
          "partial": "Tex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass providing information in LaTeX form.\n\u003c/p\u003e",
          "module": "Monocle.Tex",
          "name": "Texified",
          "package": "Monocle",
          "source": "src/Monocle-Tex.html#Texified",
          "type": "class"
        },
        "index": {
          "description": "Class providing information in LaTeX form",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "Texified",
          "package": "Monocle",
          "partial": "Texified",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#t:Texified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns detailed description\n\u003c/p\u003e",
          "module": "Monocle.Tex",
          "name": "doc",
          "package": "Monocle",
          "signature": "a -\u003e String",
          "source": "src/Monocle-Tex.html#doc",
          "type": "method"
        },
        "index": {
          "description": "Returns detailed description",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "doc",
          "normalized": "a-\u003eString",
          "package": "Monocle",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003epdoc f = do \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003edoc\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
          "module": "Monocle.Tex",
          "name": "pdoc",
          "package": "Monocle",
          "signature": "a -\u003e IO ()",
          "source": "src/Monocle-Tex.html#pdoc",
          "type": "function"
        },
        "index": {
          "description": "pdoc do putStrLn doc",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "pdoc",
          "normalized": "a-\u003eIO()",
          "package": "Monocle",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#v:pdoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003epobj f = do \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003etexObj\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
          "module": "Monocle.Tex",
          "name": "pobj",
          "package": "Monocle",
          "signature": "Mor t -\u003e IO ()",
          "source": "src/Monocle-Tex.html#pobj",
          "type": "function"
        },
        "index": {
          "description": "pobj do putStrLn texObj",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "pobj",
          "normalized": "Mor a-\u003eIO()",
          "package": "Monocle",
          "signature": "Mor t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#v:pobj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eptex f = do \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003etex\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
          "module": "Monocle.Tex",
          "name": "ptex",
          "package": "Monocle",
          "signature": "a -\u003e IO ()",
          "source": "src/Monocle-Tex.html#ptex",
          "type": "function"
        },
        "index": {
          "description": "ptex do putStrLn tex",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "ptex",
          "normalized": "a-\u003eIO()",
          "package": "Monocle",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#v:ptex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns short description\n\u003c/p\u003e",
          "module": "Monocle.Tex",
          "name": "tex",
          "package": "Monocle",
          "signature": "a -\u003e String",
          "source": "src/Monocle-Tex.html#tex",
          "type": "method"
        },
        "index": {
          "description": "Returns short description",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "tex",
          "normalized": "a-\u003eString",
          "package": "Monocle",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#v:tex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns LaTeX description of an object of category\n\u003c/p\u003e",
          "module": "Monocle.Tex",
          "name": "texObj",
          "package": "Monocle",
          "signature": "Mor t -\u003e String",
          "source": "src/Monocle-Tex.html#texObj",
          "type": "function"
        },
        "index": {
          "description": "Returns LaTeX description of an object of category",
          "hierarchy": "Monocle Tex",
          "module": "Monocle.Tex",
          "name": "texObj",
          "normalized": "Mor a-\u003eString",
          "package": "Monocle",
          "partial": "Obj",
          "signature": "Mor t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Tex.html#v:texObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "Utils",
          "package": "Monocle",
          "source": "src/Monocle-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "Utils",
          "package": "Monocle",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "MStack",
          "package": "Monocle",
          "source": "src/Monocle-Utils.html#MStack",
          "type": "class"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "MStack",
          "package": "Monocle",
          "partial": "MStack",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#t:MStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "Printable",
          "package": "Monocle",
          "source": "src/Monocle-Utils.html#Printable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "Printable",
          "package": "Monocle",
          "partial": "Printable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#t:Printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "Wrap",
          "package": "Monocle",
          "source": "src/Monocle-Utils.html#Wrap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "Wrap",
          "package": "Monocle",
          "partial": "Wrap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#t:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "Wrap",
          "package": "Monocle",
          "signature": "Wrap a",
          "source": "src/Monocle-Utils.html#Wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "Wrap",
          "package": "Monocle",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "pop",
          "package": "Monocle",
          "signature": "stack -\u003e (stack, monoid)",
          "source": "src/Monocle-Utils.html#pop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "pop",
          "normalized": "a-\u003e(a,b)",
          "package": "Monocle",
          "signature": "stack-\u003e(stack,monoid)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "push",
          "package": "Monocle",
          "signature": "monoid -\u003e stack -\u003e stack",
          "source": "src/Monocle-Utils.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "push",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Monocle",
          "signature": "monoid-\u003estack-\u003estack",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "str",
          "package": "Monocle",
          "signature": "a -\u003e String",
          "source": "src/Monocle-Utils.html#str",
          "type": "method"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "str",
          "normalized": "a-\u003eString",
          "package": "Monocle",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "tappend",
          "package": "Monocle",
          "signature": "monoid -\u003e stack -\u003e stack",
          "source": "src/Monocle-Utils.html#tappend",
          "type": "method"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "tappend",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Monocle",
          "signature": "monoid-\u003estack-\u003estack",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#v:tappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle.Utils",
          "name": "tcombine",
          "package": "Monocle",
          "signature": "(monoid -\u003e monoid) -\u003e stack -\u003e stack",
          "source": "src/Monocle-Utils.html#tcombine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Monocle Utils",
          "module": "Monocle.Utils",
          "name": "tcombine",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "Monocle",
          "signature": "(monoid-\u003emonoid)-\u003estack-\u003estack",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle-Utils.html#v:tcombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monocle",
          "name": "Monocle",
          "package": "Monocle",
          "source": "src/Monocle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monocle",
          "module": "Monocle",
          "name": "Monocle",
          "package": "Monocle",
          "partial": "Monocle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Monocle/docs/Monocle.html#"
      }
    }
  ]
]