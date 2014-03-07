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
        "word": "pointless-haskell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines a class of representable bifunctors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Bifctrable",
          "name": "Bifctrable",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifctrable.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines class of representable bifunctors",
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "Bifctrable",
          "package": "pointless-haskell",
          "partial": "Bifctrable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctor GADT for polytypic recursive bifunctions.\n At the moment it does not rely on a \u003ccode\u003eTypeable\u003c/code\u003e instance for constants.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Bifctrable",
          "name": "Bifctr",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "data"
        },
        "index": {
          "description": "Functor GADT for polytypic recursive bifunctions At the moment it does not rely on Typeable instance for constants",
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "Bifctr",
          "package": "pointless-haskell",
          "partial": "Bifctr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#t:Bifctr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of representable bifunctors.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Bifctrable",
          "name": "Bifctrable",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctrable",
          "type": "class"
        },
        "index": {
          "description": "Class of representable bifunctors",
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "Bifctrable",
          "package": "pointless-haskell",
          "partial": "Bifctrable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#t:Bifctrable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": ":*!|",
          "package": "pointless-haskell",
          "signature": "Bifctr f -\u003e Bifctr g -\u003e Bifctr (f :*| g)",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": ":*!|",
          "normalized": "Bifctr a-\u003eBifctr b-\u003eBifctr(a*b)",
          "package": "pointless-haskell",
          "signature": "Bifctr f-\u003eBifctr g-\u003eBifctr(f*g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v::-42--33--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": ":+!|",
          "package": "pointless-haskell",
          "signature": "Bifctr f -\u003e Bifctr g -\u003e Bifctr (f :+| g)",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": ":+!|",
          "normalized": "Bifctr a-\u003eBifctr b-\u003eBifctr(a b)",
          "package": "pointless-haskell",
          "signature": "Bifctr f-\u003eBifctr g-\u003eBifctr(f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v::-43--33--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": ":@!|",
          "package": "pointless-haskell",
          "signature": "Bifctr f -\u003e Bifctr g -\u003e Bifctr (f :@| g)",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": ":@!|",
          "normalized": "Bifctr a-\u003eBifctr b-\u003eBifctr(a b)",
          "package": "pointless-haskell",
          "signature": "Bifctr f-\u003eBifctr g-\u003eBifctr(f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v::-64--33--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": "BI",
          "package": "pointless-haskell",
          "signature": "Bifctr BId",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "BI",
          "package": "pointless-haskell",
          "partial": "BI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v:BI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": "BK",
          "package": "pointless-haskell",
          "signature": "Bifctr (BConst c)",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "BK",
          "package": "pointless-haskell",
          "partial": "BK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v:BK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": "BP",
          "package": "pointless-haskell",
          "signature": "Bifctr BPar",
          "source": "src/Generics-Pointless-Bifctrable.html#Bifctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "BP",
          "package": "pointless-haskell",
          "partial": "BP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v:BP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifctrable",
          "name": "bctr",
          "package": "pointless-haskell",
          "signature": "Bifctr f",
          "source": "src/Generics-Pointless-Bifctrable.html#bctr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "bctr",
          "package": "pointless-haskell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v:bctr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe representation of the fixpoint of a representable functor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Bifctrable",
          "name": "fctrB",
          "package": "pointless-haskell",
          "signature": "BFix f -\u003e Bifctr f",
          "source": "src/Generics-Pointless-Bifctrable.html#fctrB",
          "type": "function"
        },
        "index": {
          "description": "The representation of the fixpoint of representable functor",
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "fctrB",
          "normalized": "BFix a-\u003eBifctr a",
          "package": "pointless-haskell",
          "signature": "BFix f-\u003eBifctr f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v:fctrB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of a representable bifunctor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Bifctrable",
          "name": "fixB",
          "package": "pointless-haskell",
          "signature": "Bifctr f -\u003e BFix f",
          "source": "src/Generics-Pointless-Bifctrable.html#fixB",
          "type": "function"
        },
        "index": {
          "description": "The fixpoint of representable bifunctor",
          "hierarchy": "Generics Pointless Bifctrable",
          "module": "Generics.Pointless.Bifctrable",
          "name": "fixB",
          "normalized": "Bifctr a-\u003eBFix a",
          "package": "pointless-haskell",
          "signature": "Bifctr f-\u003eBFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifctrable.html#v:fixB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines polymorphic data types as fixed points of bifunctor.\n Pointless Haskell works on a view of data types as fixed points of functors, in the same style as the PolyP (\u003ca\u003ehttp://www.cse.chalmers.se/~patrikj/poly/polyp/\u003c/a\u003e) library.\n Instead of using an explicit fixpoint operator, a type function is used to relate the data types with their equivalent functor representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Bifunctors",
          "name": "Bifunctors",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines polymorphic data types as fixed points of bifunctor Pointless Haskell works on view of data types as fixed points of functors in the same style as the PolyP http www.cse.chalmers.se patrikj poly polyp library Instead of using an explicit fixpoint operator type function is used to relate the data types with their equivalent functor representations",
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "Bifunctors",
          "package": "pointless-haskell",
          "partial": "Bifunctors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": ":*|",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2A%7C",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": ":*|",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t::-42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": ":*!|",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2A%21%7C",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": ":*!|",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t::-42--33--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": ":+|",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2B%7C",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": ":+|",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t::-43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": ":+!|",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2B%21%7C",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": ":+!|",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t::-43--33--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": ":@|",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%40%7C",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": ":@|",
          "package": "pointless-haskell",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t::-64--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": ":@!|",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%40%21%7C",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": ":@!|",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t::-64--33--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "B",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "B",
          "package": "pointless-haskell",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BConst",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#BConst",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BConst",
          "package": "pointless-haskell",
          "partial": "BConst",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BF",
          "package": "pointless-haskell",
          "signature": "BF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BF",
          "package": "pointless-haskell",
          "partial": "BF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BFix",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#BFix",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BFix",
          "package": "pointless-haskell",
          "partial": "BFix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BI",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#BI",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BI",
          "package": "pointless-haskell",
          "partial": "BI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BId",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#BId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BId",
          "package": "pointless-haskell",
          "partial": "BId",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BK",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#BK",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BK",
          "package": "pointless-haskell",
          "partial": "BK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BPar",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#BPar",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BPar",
          "package": "pointless-haskell",
          "partial": "BPar",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BRep",
          "package": "pointless-haskell",
          "signature": "BRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BRep",
          "package": "pointless-haskell",
          "partial": "BRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:BRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe polytypic bifunctor zipping combinator.\n Just maps over the polymorphic parameter. To map over the recursive parameter we can use \u003ccode\u003efzip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Bifunctors",
          "name": "Bifunctor",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#Bifunctor",
          "type": "class"
        },
        "index": {
          "description": "The polytypic bifunctor zipping combinator Just maps over the polymorphic parameter To map over the recursive parameter we can use fzip",
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "Bifunctor",
          "package": "pointless-haskell",
          "partial": "Bifunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:Bifunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "Bimu",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Bifunctors.html#Bimu",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "Bimu",
          "package": "pointless-haskell",
          "partial": "Bimu",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#t:Bimu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BComp",
          "package": "pointless-haskell",
          "signature": "BComp",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%40%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BComp",
          "package": "pointless-haskell",
          "partial": "BComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BConst",
          "package": "pointless-haskell",
          "signature": "BConst",
          "source": "src/Generics-Pointless-Bifunctors.html#BConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BConst",
          "package": "pointless-haskell",
          "partial": "BConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BFix",
          "package": "pointless-haskell",
          "signature": "BFix",
          "source": "src/Generics-Pointless-Bifunctors.html#BFix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BFix",
          "package": "pointless-haskell",
          "partial": "BFix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BId",
          "package": "pointless-haskell",
          "signature": "BId",
          "source": "src/Generics-Pointless-Bifunctors.html#BId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BId",
          "package": "pointless-haskell",
          "partial": "BId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BInl",
          "package": "pointless-haskell",
          "signature": "BInl (g a x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2B%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BInl",
          "package": "pointless-haskell",
          "partial": "BInl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BInl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BInr",
          "package": "pointless-haskell",
          "signature": "BInr (h a x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2B%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BInr",
          "package": "pointless-haskell",
          "partial": "BInr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BInr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "BProd",
          "package": "pointless-haskell",
          "signature": "BProd (g a x) (h a x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2A%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "BProd",
          "package": "pointless-haskell",
          "partial": "BProd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:BProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBComp",
          "package": "pointless-haskell",
          "signature": "FixBComp",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%40%21%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBComp",
          "package": "pointless-haskell",
          "partial": "Fix BComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:FixBComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBConst",
          "package": "pointless-haskell",
          "signature": "FixBConst",
          "source": "src/Generics-Pointless-Bifunctors.html#BK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBConst",
          "package": "pointless-haskell",
          "partial": "Fix BConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:FixBConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBId",
          "package": "pointless-haskell",
          "signature": "FixBId",
          "source": "src/Generics-Pointless-Bifunctors.html#BI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBId",
          "package": "pointless-haskell",
          "partial": "Fix BId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:FixBId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBProd",
          "package": "pointless-haskell",
          "signature": "FixBProd",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2A%21%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBProd",
          "package": "pointless-haskell",
          "partial": "Fix BProd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:FixBProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBSum",
          "package": "pointless-haskell",
          "signature": "FixBSum",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2B%21%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "FixBSum",
          "package": "pointless-haskell",
          "partial": "Fix BSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:FixBSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "Par",
          "package": "pointless-haskell",
          "signature": "Par",
          "source": "src/Generics-Pointless-Bifunctors.html#BPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "Par",
          "package": "pointless-haskell",
          "partial": "Par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "binn",
          "package": "pointless-haskell",
          "signature": "B d a (d a) -\u003e d a",
          "source": "src/Generics-Pointless-Bifunctors.html#binn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "binn",
          "normalized": "B a b(a b)-\u003ea b",
          "package": "pointless-haskell",
          "signature": "B d a(d a)-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:binn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "bmap",
          "package": "pointless-haskell",
          "signature": "Ann (BFix f) -\u003e (a -\u003e b) -\u003e (x -\u003e y) -\u003e Rep (BRep f a) x -\u003e Rep (BRep f b) y",
          "source": "src/Generics-Pointless-Bifunctors.html#bmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "bmap",
          "normalized": "Ann(BFix a)-\u003e(b-\u003ec)-\u003e(d-\u003ee)-\u003eRep(BRep a b)d-\u003eRep(BRep a c)e",
          "package": "pointless-haskell",
          "signature": "Ann(BFix f)-\u003e(a-\u003eb)-\u003e(x-\u003ey)-\u003eRep(BRep f a)x-\u003eRep(BRep f b)y",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:bmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "bout",
          "package": "pointless-haskell",
          "signature": "d a -\u003e B d a (d a)",
          "source": "src/Generics-Pointless-Bifunctors.html#bout",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "bout",
          "normalized": "a b-\u003eB a b(a b)",
          "package": "pointless-haskell",
          "signature": "d a-\u003eB d a(d a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:bout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "bzip",
          "package": "pointless-haskell",
          "signature": "Ann x -\u003e Ann (BFix f) -\u003e (a -\u003e c) -\u003e (Rep (BRep f a) x, Rep (BRep f c) x) -\u003e Rep (BRep f (a, c)) x",
          "source": "src/Generics-Pointless-Bifunctors.html#bzip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "bzip",
          "normalized": "Ann a-\u003eAnn(BFix b)-\u003e(c-\u003ed)-\u003e(Rep(BRep b c)a,Rep(BRep b d)a)-\u003eRep(BRep b(c,d))a",
          "package": "pointless-haskell",
          "signature": "Ann x-\u003eAnn(BFix f)-\u003e(a-\u003ec)-\u003e(Rep(BRep f a)x,Rep(BRep f c)x)-\u003eRep(BRep f(a,c))x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:bzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "pbmap",
          "package": "pointless-haskell",
          "signature": "Ann (d a) -\u003e (a -\u003e b) -\u003e (x -\u003e y) -\u003e B d a x -\u003e B d b y",
          "source": "src/Generics-Pointless-Bifunctors.html#pbmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "pbmap",
          "normalized": "Ann(a b)-\u003e(b-\u003ec)-\u003e(d-\u003ee)-\u003eB a b d-\u003eB a c e",
          "package": "pointless-haskell",
          "signature": "Ann(d a)-\u003e(a-\u003eb)-\u003e(x-\u003ey)-\u003eB d a x-\u003eB d b y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:pbmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBComp",
          "package": "pointless-haskell",
          "signature": "g a (h a x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%40%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBComp",
          "package": "pointless-haskell",
          "partial": "BComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unBComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBConst",
          "package": "pointless-haskell",
          "signature": "t",
          "source": "src/Generics-Pointless-Bifunctors.html#BConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBConst",
          "package": "pointless-haskell",
          "partial": "BConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unBConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBFix",
          "package": "pointless-haskell",
          "signature": "f (BFix f) (BFix f)",
          "source": "src/Generics-Pointless-Bifunctors.html#BFix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBFix",
          "package": "pointless-haskell",
          "partial": "BFix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unBFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBId",
          "package": "pointless-haskell",
          "signature": "x",
          "source": "src/Generics-Pointless-Bifunctors.html#BId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unBId",
          "package": "pointless-haskell",
          "partial": "BId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unBId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBComp",
          "package": "pointless-haskell",
          "signature": "B (a :@!| b) x ((a :@!| b) x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%40%21%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBComp",
          "package": "pointless-haskell",
          "partial": "Fix BComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unFixBComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBConst",
          "package": "pointless-haskell",
          "signature": "a",
          "source": "src/Generics-Pointless-Bifunctors.html#BK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBConst",
          "package": "pointless-haskell",
          "partial": "Fix BConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unFixBConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBProd",
          "package": "pointless-haskell",
          "signature": "B (a :*!| b) x ((a :*!| b) x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2A%21%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBProd",
          "package": "pointless-haskell",
          "partial": "Fix BProd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unFixBProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBSum",
          "package": "pointless-haskell",
          "signature": "B (a :+!| b) x ((a :+!| b) x)",
          "source": "src/Generics-Pointless-Bifunctors.html#%3A%2B%21%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unFixBSum",
          "package": "pointless-haskell",
          "partial": "Fix BSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unFixBSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Bifunctors",
          "name": "unPar",
          "package": "pointless-haskell",
          "signature": "a",
          "source": "src/Generics-Pointless-Bifunctors.html#BPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Bifunctors",
          "module": "Generics.Pointless.Bifunctors",
          "name": "unPar",
          "package": "pointless-haskell",
          "partial": "Par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Bifunctors.html#v:unPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines many standard combinators used for point-free programming.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "Combinators",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines many standard combinators used for point-free programming",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "Combinators",
          "package": "pointless-haskell",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Combinators",
          "name": "Ann",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Combinators.html#Ann",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "Ann",
          "package": "pointless-haskell",
          "partial": "Ann",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#t:Ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe final object.\n The only possible value of type \u003ccode\u003e\u003ca\u003eOne\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003e_L\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "One",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Combinators.html#One",
          "type": "data"
        },
        "index": {
          "description": "The final object The only possible value of type One is",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "One",
          "package": "pointless-haskell",
          "partial": "One",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#t:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe infix combinator for a constant point.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "(!)",
          "package": "pointless-haskell",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Generics-Pointless-Combinators.html#%21",
          "type": "function"
        },
        "index": {
          "description": "The infix combinator for constant point",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(!) !",
          "normalized": "a-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe infix sum combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "(-|-)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e Either a c -\u003e Either b d",
          "source": "src/Generics-Pointless-Combinators.html#-%7C-",
          "type": "function"
        },
        "index": {
          "description": "The infix sum combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(-|-) -|-",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-45--124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe infix split combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "(/\\)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e a -\u003e (b, c)",
          "source": "src/Generics-Pointless-Combinators.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "The infix split combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(/\\) /\\",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003e(b,c)",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003e(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for the infix sum combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "(\u003c\u003e)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e Either a c -\u003e Either b d",
          "source": "src/Generics-Pointless-Combinators.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Alias for the infix sum combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Combinators",
          "name": "(\u003e\u003c)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e (a, c) -\u003e (b, d)",
          "source": "src/Generics-Pointless-Combinators.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix guard combinator that simulates the postfix syntax.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "(?)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Either a a",
          "source": "src/Generics-Pointless-Combinators.html#%3F",
          "type": "function"
        },
        "index": {
          "description": "Infix guard combinator that simulates the postfix syntax",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(?) ?",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eEither a a",
          "package": "pointless-haskell",
          "signature": "(a-\u003eBool)-\u003ea-\u003eEither a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Combinators",
          "name": "(??)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Either One One) -\u003e a -\u003e Either a a",
          "source": "src/Generics-Pointless-Combinators.html#%3F%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(??) ??",
          "normalized": "(a-\u003eEither One One)-\u003ea-\u003eEither a a",
          "package": "pointless-haskell",
          "signature": "(a-\u003eEither One One)-\u003ea-\u003eEither a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe infix either combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "(\\/)",
          "package": "pointless-haskell",
          "signature": "(b -\u003e a) -\u003e (c -\u003e a) -\u003e Either b c -\u003e a",
          "source": "src/Generics-Pointless-Combinators.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "The infix either combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "(\\/) \\/",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "pointless-haskell",
          "signature": "(b-\u003ea)-\u003e(c-\u003ea)-\u003eEither b c-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bottom value for any type.\n It is many times used just for type annotations.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "_L",
          "package": "pointless-haskell",
          "signature": "a",
          "source": "src/Generics-Pointless-Combinators.html#_L",
          "type": "function"
        },
        "index": {
          "description": "The bottom value for any type It is many times used just for type annotations",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "_L",
          "package": "pointless-haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary \u003ccode\u003eand\u003c/code\u003e point-free combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "and",
          "package": "pointless-haskell",
          "signature": "(Bool, Bool) -\u003e Bool",
          "source": "src/Generics-Pointless-Combinators.html#and",
          "type": "function"
        },
        "index": {
          "description": "Binary and point-free combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "and",
          "normalized": "(Bool,Bool)-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(Bool,Bool)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary \u003ccode\u003eand\u003c/code\u003e of boolean functions.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "andf",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Bool, a -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Generics-Pointless-Combinators.html#andf",
          "type": "function"
        },
        "index": {
          "description": "Binary and of boolean functions",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "andf",
          "normalized": "(a-\u003eBool,a-\u003eBool)-\u003ea-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(a-\u003eBool,a-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:andf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe application combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "app",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b, a) -\u003e b",
          "source": "src/Generics-Pointless-Combinators.html#app",
          "type": "function"
        },
        "index": {
          "description": "The application combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "app",
          "normalized": "(a-\u003eb,a)-\u003eb",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb,a)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate nested products to the left.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "assocl",
          "package": "pointless-haskell",
          "signature": "(a, (b, c)) -\u003e ((a, b), c)",
          "source": "src/Generics-Pointless-Combinators.html#assocl",
          "type": "function"
        },
        "index": {
          "description": "Associate nested products to the left",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "assocl",
          "normalized": "(a,(b,c))-\u003e((a,b),c)",
          "package": "pointless-haskell",
          "signature": "(a,(b,c))-\u003e((a,b),c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:assocl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociates nested products to the right.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "assocr",
          "package": "pointless-haskell",
          "signature": "((a, b), c) -\u003e (a, (b, c))",
          "source": "src/Generics-Pointless-Combinators.html#assocr",
          "type": "function"
        },
        "index": {
          "description": "Associates nested products to the right",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "assocr",
          "normalized": "((a,b),c)-\u003e(a,(b,c))",
          "package": "pointless-haskell",
          "signature": "((a,b),c)-\u003e(a,(b,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:assocr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a point to the terminal object.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "bang",
          "package": "pointless-haskell",
          "signature": "a -\u003e One",
          "source": "src/Generics-Pointless-Combinators.html#bang",
          "type": "function"
        },
        "index": {
          "description": "Creates point to the terminal object",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "bang",
          "normalized": "a-\u003eOne",
          "package": "pointless-haskell",
          "signature": "a-\u003eOne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:bang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociates nested sums to the left.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "coassocl",
          "package": "pointless-haskell",
          "signature": "Either a (Either b c) -\u003e Either (Either a b) c",
          "source": "src/Generics-Pointless-Combinators.html#coassocl",
          "type": "function"
        },
        "index": {
          "description": "Associates nested sums to the left",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "coassocl",
          "normalized": "Either a(Either b c)-\u003eEither(Either a b)c",
          "package": "pointless-haskell",
          "signature": "Either a(Either b c)-\u003eEither(Either a b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:coassocl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociates nested sums to the right.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "coassocr",
          "package": "pointless-haskell",
          "signature": "Either (Either a b) c -\u003e Either a (Either b c)",
          "source": "src/Generics-Pointless-Combinators.html#coassocr",
          "type": "function"
        },
        "index": {
          "description": "Associates nested sums to the right",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "coassocr",
          "normalized": "Either(Either a b)c-\u003eEither a(Either b c)",
          "package": "pointless-haskell",
          "signature": "Either(Either a b)c-\u003eEither a(Either b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:coassocr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe uncurried composition combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "comp",
          "package": "pointless-haskell",
          "signature": "(b -\u003e c, a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-Combinators.html#comp",
          "type": "function"
        },
        "index": {
          "description": "The uncurried composition combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "comp",
          "normalized": "(a-\u003eb,c-\u003ea)-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "(b-\u003ec,a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShifts an option to the left of a nested sum.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "cosubl",
          "package": "pointless-haskell",
          "signature": "Either (Either a b) c -\u003e Either (Either a c) b",
          "source": "src/Generics-Pointless-Combinators.html#cosubl",
          "type": "function"
        },
        "index": {
          "description": "Shifts an option to the left of nested sum",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "cosubl",
          "normalized": "Either(Either a b)c-\u003eEither(Either a c)b",
          "package": "pointless-haskell",
          "signature": "Either(Either a b)c-\u003eEither(Either a c)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:cosubl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShifts an option to the right of a nested sum.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "cosubr",
          "package": "pointless-haskell",
          "signature": "Either a (Either b c) -\u003e Either b (Either a c)",
          "source": "src/Generics-Pointless-Combinators.html#cosubr",
          "type": "function"
        },
        "index": {
          "description": "Shifts an option to the right of nested sum",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "cosubr",
          "normalized": "Either a(Either b c)-\u003eEither b(Either a c)",
          "package": "pointless-haskell",
          "signature": "Either a(Either b c)-\u003eEither b(Either a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:cosubr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the elements of a sum.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "coswap",
          "package": "pointless-haskell",
          "signature": "Either a b -\u003e Either b a",
          "source": "src/Generics-Pointless-Combinators.html#coswap",
          "type": "function"
        },
        "index": {
          "description": "Swap the elements of sum",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "coswap",
          "normalized": "Either a b-\u003eEither b a",
          "package": "pointless-haskell",
          "signature": "Either a b-\u003eEither b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:coswap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute products over the left of sums.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "distl",
          "package": "pointless-haskell",
          "signature": "(Either a b, c) -\u003e Either (a, c) (b, c)",
          "source": "src/Generics-Pointless-Combinators.html#distl",
          "type": "function"
        },
        "index": {
          "description": "Distribute products over the left of sums",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "distl",
          "normalized": "(Either a b,c)-\u003eEither(a,c)(b,c)",
          "package": "pointless-haskell",
          "signature": "(Either a b,c)-\u003eEither(a,c)(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:distl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe product distribution combinator\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "distp",
          "package": "pointless-haskell",
          "signature": "((c, d), (a, b)) -\u003e ((c, a), (d, b))",
          "source": "src/Generics-Pointless-Combinators.html#distp",
          "type": "function"
        },
        "index": {
          "description": "The product distribution combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "distp",
          "normalized": "((a,b),(c,d))-\u003e((a,c),(b,d))",
          "package": "pointless-haskell",
          "signature": "((c,d),(a,b))-\u003e((c,a),(d,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:distp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute products over the right of sums.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "distr",
          "package": "pointless-haskell",
          "signature": "(c, Either a b) -\u003e Either (c, a) (c, b)",
          "source": "src/Generics-Pointless-Combinators.html#distr",
          "type": "function"
        },
        "index": {
          "description": "Distribute products over the right of sums",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "distr",
          "normalized": "(a,Either b c)-\u003eEither(a,b)(a,c)",
          "package": "pointless-haskell",
          "signature": "(c,Either a b)-\u003eEither(c,a)(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:distr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum distribution combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "dists",
          "package": "pointless-haskell",
          "signature": "(Either a b, Either c d) -\u003e Either (Either (a, c) (a, d)) (Either (b, c) (b, d))",
          "source": "src/Generics-Pointless-Combinators.html#dists",
          "type": "function"
        },
        "index": {
          "description": "The sum distribution combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "dists",
          "normalized": "(Either a b,Either c d)-\u003eEither(Either(a,c)(a,d))(Either(b,c)(b,d))",
          "package": "pointless-haskell",
          "signature": "(Either a b,Either c d)-\u003eEither(Either(a,c)(a,d))(Either(b,c)(b,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:dists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe uncurried either combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "eithr",
          "package": "pointless-haskell",
          "signature": "(a -\u003e c, b -\u003e c) -\u003e Either a b -\u003e c",
          "source": "src/Generics-Pointless-Combinators.html#eithr",
          "type": "function"
        },
        "index": {
          "description": "The uncurried either combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "eithr",
          "normalized": "(a-\u003eb,c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "pointless-haskell",
          "signature": "(a-\u003ec,b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:eithr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary equality point-free combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "eq",
          "package": "pointless-haskell",
          "signature": "(a, a) -\u003e Bool",
          "source": "src/Generics-Pointless-Combinators.html#eq",
          "type": "function"
        },
        "index": {
          "description": "Binary equality point-free combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "eq",
          "normalized": "(a,a)-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard combinator that operates on Haskell booleans.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "grd",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Either a a",
          "source": "src/Generics-Pointless-Combinators.html#grd",
          "type": "function"
        },
        "index": {
          "description": "Guard combinator that operates on Haskell booleans",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "grd",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eEither a a",
          "package": "pointless-haskell",
          "signature": "(a-\u003eBool)-\u003ea-\u003eEither a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:grd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjects a value to the left of a sum.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "inl",
          "package": "pointless-haskell",
          "signature": "a -\u003e Either a b",
          "source": "src/Generics-Pointless-Combinators.html#inl",
          "type": "function"
        },
        "index": {
          "description": "Injects value to the left of sum",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "inl",
          "normalized": "a-\u003eEither a b",
          "package": "pointless-haskell",
          "signature": "a-\u003eEither a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:inl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjects a value to the right of a sum.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "inr",
          "package": "pointless-haskell",
          "signature": "b -\u003e Either a b",
          "source": "src/Generics-Pointless-Combinators.html#inr",
          "type": "function"
        },
        "index": {
          "description": "Injects value to the right of sum",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "inr",
          "normalized": "a-\u003eEither b a",
          "package": "pointless-haskell",
          "signature": "b-\u003eEither a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:inr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe left exponentiation combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "lexp",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b) -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-Combinators.html#lexp",
          "type": "function"
        },
        "index": {
          "description": "The left exponentiation combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "lexp",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:lexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary inequality point-free combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "neq",
          "package": "pointless-haskell",
          "signature": "(a, a) -\u003e Bool",
          "source": "src/Generics-Pointless-Combinators.html#neq",
          "type": "function"
        },
        "index": {
          "description": "Binary inequality point-free combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "neq",
          "normalized": "(a,a)-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:neq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary \u003ccode\u003eor\u003c/code\u003e point-free combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "or",
          "package": "pointless-haskell",
          "signature": "(Bool, Bool) -\u003e Bool",
          "source": "src/Generics-Pointless-Combinators.html#or",
          "type": "function"
        },
        "index": {
          "description": "Binary or point-free combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "or",
          "normalized": "(Bool,Bool)-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(Bool,Bool)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary \u003ccode\u003eor\u003c/code\u003e of boolean functions.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "orf",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Bool, a -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Generics-Pointless-Combinators.html#orf",
          "type": "function"
        },
        "index": {
          "description": "Binary or of boolean functions",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "orf",
          "normalized": "(a-\u003eBool,a-\u003eBool)-\u003ea-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(a-\u003eBool,a-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:orf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts elements into points.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "pnt",
          "package": "pointless-haskell",
          "signature": "a -\u003e One -\u003e a",
          "source": "src/Generics-Pointless-Combinators.html#pnt",
          "type": "function"
        },
        "index": {
          "description": "Converts elements into points",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "pnt",
          "normalized": "a-\u003eOne-\u003ea",
          "package": "pointless-haskell",
          "signature": "a-\u003eOne-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:pnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe right exponentiation combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "rexp",
          "package": "pointless-haskell",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-Combinators.html#rexp",
          "type": "function"
        },
        "index": {
          "description": "The right exponentiation combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "rexp",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:rexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe uncurried split combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "split",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b, a -\u003e c) -\u003e a -\u003e (b, c)",
          "source": "src/Generics-Pointless-Combinators.html#split",
          "type": "function"
        },
        "index": {
          "description": "The uncurried split combinator",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "split",
          "normalized": "(a-\u003eb,a-\u003ec)-\u003ea-\u003e(b,c)",
          "package": "pointless-haskell",
          "signature": "(a-\u003eb,a-\u003ec)-\u003ea-\u003e(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShifts the an element to the left of a nested pair.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "subl",
          "package": "pointless-haskell",
          "signature": "((a, b), c) -\u003e ((a, c), b)",
          "source": "src/Generics-Pointless-Combinators.html#subl",
          "type": "function"
        },
        "index": {
          "description": "Shifts the an element to the left of nested pair",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "subl",
          "normalized": "((a,b),c)-\u003e((a,c),b)",
          "package": "pointless-haskell",
          "signature": "((a,b),c)-\u003e((a,c),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:subl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShifts the an element to the right of a nested pair.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "subr",
          "package": "pointless-haskell",
          "signature": "(a, (b, c)) -\u003e (b, (a, c))",
          "source": "src/Generics-Pointless-Combinators.html#subr",
          "type": "function"
        },
        "index": {
          "description": "Shifts the an element to the right of nested pair",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "subr",
          "normalized": "(a,(b,c))-\u003e(b,(a,c))",
          "package": "pointless-haskell",
          "signature": "(a,(b,c))-\u003e(b,(a,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:subr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the elements of a product.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "swap",
          "package": "pointless-haskell",
          "signature": "(a, b) -\u003e (b, a)",
          "source": "src/Generics-Pointless-Combinators.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swap the elements of product",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "swap",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "pointless-haskell",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute sums over the left of products.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "undistl",
          "package": "pointless-haskell",
          "signature": "Either (a, c) (b, c) -\u003e (Either a b, c)",
          "source": "src/Generics-Pointless-Combinators.html#undistl",
          "type": "function"
        },
        "index": {
          "description": "Distribute sums over the left of products",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "undistl",
          "normalized": "Either(a,b)(c,b)-\u003e(Either a c,b)",
          "package": "pointless-haskell",
          "signature": "Either(a,c)(b,c)-\u003e(Either a b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:undistl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute sums over the right of products.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Combinators",
          "name": "undistr",
          "package": "pointless-haskell",
          "signature": "Either (c, a) (c, b) -\u003e (c, Either a b)",
          "source": "src/Generics-Pointless-Combinators.html#undistr",
          "type": "function"
        },
        "index": {
          "description": "Distribute sums over the right of products",
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "undistr",
          "normalized": "Either(a,b)(a,c)-\u003e(a,Either b c)",
          "package": "pointless-haskell",
          "signature": "Either(c,a)(c,b)-\u003e(c,Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:undistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Combinators",
          "name": "vnn",
          "package": "pointless-haskell",
          "signature": "a -\u003e Ann a",
          "source": "src/Generics-Pointless-Combinators.html#vnn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Combinators",
          "module": "Generics.Pointless.Combinators",
          "name": "vnn",
          "normalized": "a-\u003eAnn a",
          "package": "pointless-haskell",
          "signature": "a-\u003eAnn a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Combinators.html#v:vnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module provides examples, examples and more examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Examples",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module provides examples examples and more examples",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Examples",
          "package": "pointless-haskell",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of the functor for a binary shape tree.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "BSTree",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#BSTree",
          "type": "type"
        },
        "index": {
          "description": "The fixpoint of the functor for binary shape tree",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "BSTree",
          "package": "pointless-haskell",
          "partial": "BSTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:BSTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of the functor representing trees with maximal branching factor of two.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "BTree",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#BTree",
          "type": "type"
        },
        "index": {
          "description": "The fixpoint of the functor representing trees with maximal branching factor of two",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "BTree",
          "package": "pointless-haskell",
          "partial": "BTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:BTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of the functor that represents a virtual matrix used to accumulate and look up values for the edit distance algorithm.\n\u003c/p\u003e\u003cp\u003eSince matrixes are not inductive types, a walk-through of a matrix is used, consisting in a list of values from the matrix ordered predictability.\n\u003c/p\u003e\u003cp\u003eFor a more detailed explanation, please refer to \u003ca\u003ehttp://math.ut.ee/~eugene/kabanov-vene-mpc-06.pdf\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "EditDist",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#EditDist",
          "type": "type"
        },
        "index": {
          "description": "The fixpoint of the functor that represents virtual matrix used to accumulate and look up values for the edit distance algorithm Since matrixes are not inductive types walk-through of matrix is used consisting in list of values from the matrix ordered predictability For more detailed explanation please refer to http math.ut.ee eugene kabanov-vene-mpc-06.pdf",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "EditDist",
          "package": "pointless-haskell",
          "partial": "Edit Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:EditDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "EditDistL",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#EditDistL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "EditDistL",
          "package": "pointless-haskell",
          "partial": "Edit Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:EditDistL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of the functor that is either a constant or defined recursively.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "From",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#From",
          "type": "type"
        },
        "index": {
          "description": "The fixpoint of the functor that is either constant or defined recursively",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "From",
          "package": "pointless-haskell",
          "partial": "From",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype declaration of a leaf tree.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "LTree",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#LTree",
          "type": "data"
        },
        "index": {
          "description": "Datatype declaration of leaf tree",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "LTree",
          "package": "pointless-haskell",
          "partial": "LTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:LTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of the list functor with a specific terminal element.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "NeList",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#NeList",
          "type": "type"
        },
        "index": {
          "description": "The fixpoint of the list functor with specific terminal element",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "NeList",
          "package": "pointless-haskell",
          "partial": "Ne List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:NeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype declaration of a rose tree.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Rose",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#Rose",
          "type": "data"
        },
        "index": {
          "description": "Datatype declaration of rose tree",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Rose",
          "package": "pointless-haskell",
          "partial": "Rose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:Rose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Some",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#Some",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Some",
          "package": "pointless-haskell",
          "partial": "Some",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:Some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of the functor of streams.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Stream",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#Stream",
          "type": "type"
        },
        "index": {
          "description": "The fixpoint of the functor of streams",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Stream",
          "package": "pointless-haskell",
          "partial": "Stream",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype declaration of a binary tree.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Tree",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Examples.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Datatype declaration of binary tree",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Tree",
          "package": "pointless-haskell",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Branch",
          "package": "pointless-haskell",
          "signature": "Branch (LTree a) (LTree a)",
          "source": "src/Generics-Pointless-Examples-Examples.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Branch",
          "package": "pointless-haskell",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Empty",
          "package": "pointless-haskell",
          "signature": "Empty",
          "source": "src/Generics-Pointless-Examples-Examples.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Empty",
          "package": "pointless-haskell",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Forest",
          "package": "pointless-haskell",
          "signature": "Forest a [Rose a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#Rose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Forest",
          "normalized": "Forest a[Rose a]",
          "package": "pointless-haskell",
          "partial": "Forest",
          "signature": "Forest a[Rose a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Forest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Insert",
          "package": "pointless-haskell",
          "signature": "Insert a (Some a)",
          "source": "src/Generics-Pointless-Examples-Examples.html#Some",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Insert",
          "package": "pointless-haskell",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Leaf",
          "package": "pointless-haskell",
          "signature": "Leaf a",
          "source": "src/Generics-Pointless-Examples-Examples.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Leaf",
          "package": "pointless-haskell",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Node",
          "package": "pointless-haskell",
          "signature": "Node a (Tree a) (Tree a)",
          "source": "src/Generics-Pointless-Examples-Examples.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Node",
          "package": "pointless-haskell",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Wrap",
          "package": "pointless-haskell",
          "signature": "Wrap a",
          "source": "src/Generics-Pointless-Examples-Examples.html#Some",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "Wrap",
          "package": "pointless-haskell",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-defined algebraic addition.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "add",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#add",
          "type": "function"
        },
        "index": {
          "description": "Pre-defined algebraic addition",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "add",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of algebraic addition as an accumulation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addAccum",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#addAccum",
          "type": "function"
        },
        "index": {
          "description": "Definition of algebraic addition as an accumulation",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addAccum",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Accum",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:addAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefition of algebraic addition as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addAna",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#addAna",
          "type": "function"
        },
        "index": {
          "description": "Defition of algebraic addition as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addAna",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:addAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of algebraic addition as an anamorphism in the point-wise style.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addAnaPW",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#addAnaPW",
          "type": "function"
        },
        "index": {
          "description": "Definition of algebraic addition as an anamorphism in the point-wise style",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addAnaPW",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Ana PW",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:addAnaPW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of algebraic addition as an apomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addApo",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#addApo",
          "type": "function"
        },
        "index": {
          "description": "Definition of algebraic addition as an apomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addApo",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Apo",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:addApo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addApoPW",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#addApoPW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addApoPW",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Apo PW",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:addApoPW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of algebraic addition as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addHylo",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#addHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of algebraic addition as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "addHylo",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:addHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of the average of a set of integers.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "average",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#average",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of the average of set of integers",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "average",
          "normalized": "[Int]-\u003eInt",
          "package": "pointless-haskell",
          "signature": "[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the average of a set of integers as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "averageCata",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#averageCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of the average of set of integers as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "averageCata",
          "normalized": "[Int]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:averageCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition for the binary partitions of a number.\n\u003c/p\u003e\u003cp\u003eThe number of binary partitions for a number n is the number of unique ways to partition\n this number (ignoring the order) into powers of 2.\n | Definition of the binary partitioning of a number as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bp",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#bp",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition for the binary partitions of number The number of binary partitions for number is the number of unique ways to partition this number ignoring the order into powers of Definition of the binary partitioning of number as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bp",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:bp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the binary partitioning of a number as a dynamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bpDyna",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#bpDyna",
          "type": "function"
        },
        "index": {
          "description": "Definition of the binary partitioning of number as dynamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bpDyna",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Dyna",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:bpDyna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the binary partitioning of a number as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bpHylo",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#bpHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of the binary partitioning of number as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bpHylo",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:bpHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the bubble sort algorithm as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bsort",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#bsort",
          "type": "function"
        },
        "index": {
          "description": "Definition of the bubble sort algorithm as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bsort",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:bsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a bubble from a list. Used in the bubble sort algorithm.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bubble",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Either One (a, [a])",
          "source": "src/Generics-Pointless-Examples-Examples.html#bubble",
          "type": "function"
        },
        "index": {
          "description": "Creates bubble from list Used in the bubble sort algorithm",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "bubble",
          "normalized": "[a]-\u003eEither One(a,[a])",
          "package": "pointless-haskell",
          "signature": "[a]-\u003eEither One(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:bubble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-defined list concatenation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "cat",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#cat",
          "type": "function"
        },
        "index": {
          "description": "Pre-defined list concatenation",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "cat",
          "normalized": "([a],[a])-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "([a],[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList concatenation as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "catCata",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#catCata",
          "type": "function"
        },
        "index": {
          "description": "List concatenation as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "catCata",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:catCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList concatenation as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "catHylo",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#catHylo",
          "type": "function"
        },
        "index": {
          "description": "List concatenation as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "catHylo",
          "normalized": "([a],[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "([a],[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:catHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition of lists-of-lists concatenation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "concat",
          "package": "pointless-haskell",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition of lists-of-lists concatenation",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of lists-of-lists concatenation as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "concatCata",
          "package": "pointless-haskell",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#concatCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of lists-of-lists concatenation as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "concatCata",
          "normalized": "[[a]]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:concatCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneration of a downwards list as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "downtoAna",
          "package": "pointless-haskell",
          "signature": "Int -\u003e [Int]",
          "source": "src/Generics-Pointless-Examples-Examples.html#downtoAna",
          "type": "function"
        },
        "index": {
          "description": "Generation of downwards list as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "downtoAna",
          "normalized": "Int-\u003e[Int]",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "Int-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:downtoAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe edit distance algorithm as a dynamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "editDistDyna",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#editDistDyna",
          "type": "function"
        },
        "index": {
          "description": "The edit distance algorithm as dynamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "editDistDyna",
          "normalized": "([a],[a])-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Dist Dyna",
          "signature": "([a],[a])-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:editDistDyna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition of the edit distance algorithm.\n\u003c/p\u003e\u003cp\u003eEdit distance is a classical dynamic programming algorithm that calculates\n a measure of distance or dierence between lists with comparable elements.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "editdist",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#editdist",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition of the edit distance algorithm Edit distance is classical dynamic programming algorithm that calculates measure of distance or dierence between lists with comparable elements",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "editdist",
          "normalized": "([a],[a])-\u003eInt",
          "package": "pointless-haskell",
          "signature": "([a],[a])-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:editdist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe edit distance algorithm as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "editdistHylo",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#editdistHylo",
          "type": "function"
        },
        "index": {
          "description": "The edit distance algorithm as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "editdistHylo",
          "normalized": "([a],[a])-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "([a],[a])-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:editdistHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of parwise exchange on streams as a futumorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "exchFutu",
          "package": "pointless-haskell",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Generics-Pointless-Examples-Examples.html#exchFutu",
          "type": "function"
        },
        "index": {
          "description": "Definition of parwise exchange on streams as futumorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "exchFutu",
          "normalized": "Stream a-\u003eStream a",
          "package": "pointless-haskell",
          "partial": "Futu",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:exchFutu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition of the factorial function.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fact",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fact",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition of the factorial function",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fact",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the factorial function as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factHylo",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#factHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of the factorial function as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factHylo",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:factHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of the factorial function in the point-free style.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factPF",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#factPF",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of the factorial function in the point-free style",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factPF",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "PF",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:factPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of the factorial function in the point-free style with structural recursion.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factPF'",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#factPF%27",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of the factorial function in the point-free style with structural recursion",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factPF'",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "PF'",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:factPF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the factorial function as a paramorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factPara",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#factPara",
          "type": "function"
        },
        "index": {
          "description": "Definition of the factorial function as paramorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factPara",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Para",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:factPara"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the factorial function as a zygomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factZygo",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#factZygo",
          "type": "function"
        },
        "index": {
          "description": "Definition of the factorial function as zygomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "factZygo",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Zygo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:factZygo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition of the fibonacci function.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fib",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fib",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition of the fibonacci function",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fib",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the fibonacci function as a dynamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibDyna",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fibDyna",
          "type": "function"
        },
        "index": {
          "description": "Definition of the fibonacci function as dynamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibDyna",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Dyna",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fibDyna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the fibonacci function as an histomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibHisto",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fibHisto",
          "type": "function"
        },
        "index": {
          "description": "Definition of the fibonacci function as an histomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibHisto",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Histo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fibHisto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the fibonacci function as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibHylo",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fibHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of the fibonacci function as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibHylo",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fibHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of the fibonacci function in the point-free style.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibPF",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fibPF",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of the fibonacci function in the point-free style",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibPF",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "PF",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fibPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of the fibonacci function in the point-free style with structural recursion.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibPF'",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#fibPF%27",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of the fibonacci function in the point-free style with structural recursion",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fibPF'",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "PF'",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fibPF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition of list filtering.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "filter",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition of list filtering",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of list filtering as an catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "filterCata",
          "package": "pointless-haskell",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#filterCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of list filtering as an catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "filterCata",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:filterCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementation the elements of a list by a specified value as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fisum",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e Int -\u003e [Int]",
          "source": "src/Generics-Pointless-Examples-Examples.html#fisum",
          "type": "function"
        },
        "index": {
          "description": "Incrementation the elements of list by specified value as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "fisum",
          "normalized": "[Int]-\u003eInt-\u003e[Int]",
          "package": "pointless-haskell",
          "signature": "[Int]-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:fisum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneration of a leaft tree of a specified height as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "genLTree",
          "package": "pointless-haskell",
          "signature": "Int -\u003e LTree Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#genLTree",
          "type": "function"
        },
        "index": {
          "description": "Generation of leaft tree of specified height as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "genLTree",
          "normalized": "Int-\u003eLTree Int",
          "package": "pointless-haskell",
          "partial": "LTree",
          "signature": "Int-\u003eLTree Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:genLTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneration of a rose tree of a specified height as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "genRose",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Rose Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#genRose",
          "type": "function"
        },
        "index": {
          "description": "Generation of rose tree of specified height as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "genRose",
          "normalized": "Int-\u003eRose Int",
          "package": "pointless-haskell",
          "partial": "Rose",
          "signature": "Int-\u003eRose Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:genRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneration of a binary tree with a specified height as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "genTree",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Tree Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#genTree",
          "type": "function"
        },
        "index": {
          "description": "Generation of binary tree with specified height as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "genTree",
          "normalized": "Int-\u003eTree Int",
          "package": "pointless-haskell",
          "partial": "Tree",
          "signature": "Int-\u003eTree Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:genTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a stream sequence generator as an anamorphism. \n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "generate",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Stream Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#generate",
          "type": "function"
        },
        "index": {
          "description": "Definition of stream sequence generator as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "generate",
          "normalized": "Int-\u003eStream Int",
          "package": "pointless-haskell",
          "signature": "Int-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-defined 'greater than' comparison.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "gt",
          "package": "pointless-haskell",
          "signature": "(a, a) -\u003e Bool",
          "source": "src/Generics-Pointless-Examples-Examples.html#gt",
          "type": "function"
        },
        "index": {
          "description": "Pre-defined greater than comparison",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "gt",
          "normalized": "(a,a)-\u003eBool",
          "package": "pointless-haskell",
          "signature": "(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of 'greater than' as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "gtHylo",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Bool",
          "source": "src/Generics-Pointless-Examples-Examples.html#gtHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of greater than as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "gtHylo",
          "normalized": "(Int,Int)-\u003eBool",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "(Int,Int)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:gtHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream head.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "headS",
          "package": "pointless-haskell",
          "signature": "Stream a -\u003e a",
          "source": "src/Generics-Pointless-Examples-Examples.html#headS",
          "type": "function"
        },
        "index": {
          "description": "Stream head",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "headS",
          "normalized": "Stream a-\u003ea",
          "package": "pointless-haskell",
          "signature": "Stream a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:headS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the height of a leaf tree as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "height",
          "package": "pointless-haskell",
          "signature": "LTree a -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#height",
          "type": "function"
        },
        "index": {
          "description": "Calculate the height of leaf tree as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "height",
          "normalized": "LTree a-\u003eInt",
          "package": "pointless-haskell",
          "signature": "LTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the heap sort algorithm as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "hsort",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#hsort",
          "type": "function"
        },
        "index": {
          "description": "Definition of the heap sort algorithm as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "hsort",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:hsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "hsplit",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e (a, ([a], [a]))",
          "source": "src/Generics-Pointless-Examples-Examples.html#hsplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "hsplit",
          "normalized": "[a]-\u003e(a,([a],[a]))",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e(a,([a],[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:hsplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity o streams as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "idStream",
          "package": "pointless-haskell",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Generics-Pointless-Examples-Examples.html#idStream",
          "type": "function"
        },
        "index": {
          "description": "Identity streams as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "idStream",
          "normalized": "Stream a-\u003eStream a",
          "package": "pointless-haskell",
          "partial": "Stream",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:idStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromotes streams elements to streams of singleton elements.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "inits",
          "package": "pointless-haskell",
          "signature": "Stream a -\u003e Stream [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#inits",
          "type": "function"
        },
        "index": {
          "description": "Promotes streams elements to streams of singleton elements",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "inits",
          "normalized": "Stream a-\u003eStream[a]",
          "package": "pointless-haskell",
          "signature": "Stream a-\u003eStream[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list insertion as an apomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "insertApo",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#insertApo",
          "type": "function"
        },
        "index": {
          "description": "Ordered list insertion as an apomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "insertApo",
          "normalized": "(a,[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Apo",
          "signature": "(a,[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:insertApo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list insertion as a paramorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "insertPara",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#insertPara",
          "type": "function"
        },
        "index": {
          "description": "Ordered list insertion as paramorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "insertPara",
          "normalized": "(a,[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Para",
          "signature": "(a,[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:insertPara"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the insertion sort algorithm as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isort",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#isort",
          "type": "function"
        },
        "index": {
          "description": "Definition of the insertion sort algorithm as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isort",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:isort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncremental summation as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isum",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e [Int]",
          "source": "src/Generics-Pointless-Examples-Examples.html#isum",
          "type": "function"
        },
        "index": {
          "description": "Incremental summation as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isum",
          "normalized": "[Int]-\u003e[Int]",
          "package": "pointless-haskell",
          "signature": "[Int]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:isum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementation the elements of a list by a specified value as an accumulation.\n The result is always a non-empty list\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isumsAccum",
          "package": "pointless-haskell",
          "signature": "([Int], Int) -\u003e Some Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#isumsAccum",
          "type": "function"
        },
        "index": {
          "description": "Incrementation the elements of list by specified value as an accumulation The result is always non-empty list",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isumsAccum",
          "normalized": "([Int],Int)-\u003eSome Int",
          "package": "pointless-haskell",
          "partial": "Accum",
          "signature": "([Int],Int)-\u003eSome Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:isumsAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isumsAna",
          "package": "pointless-haskell",
          "signature": "([Int], Int) -\u003e Some Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#isumsAna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "isumsAna",
          "normalized": "([Int],Int)-\u003eSome Int",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "([Int],Int)-\u003eSome Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:isumsAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the leaves of a leaf tree as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "leaves",
          "package": "pointless-haskell",
          "signature": "LTree a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#leaves",
          "type": "function"
        },
        "index": {
          "description": "Extract the leaves of leaf tree as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "leaves",
          "normalized": "LTree a-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "LTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:leaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursion definition of list length.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "length",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#length",
          "type": "function"
        },
        "index": {
          "description": "Native recursion definition of list length",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "length",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of list length as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthAna",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#lengthAna",
          "type": "function"
        },
        "index": {
          "description": "Definition of list length as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthAna",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:lengthAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of list length as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthCata",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#lengthCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of list length as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthCata",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:lengthCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of list length as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthHylo",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#lengthHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of list length as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthHylo",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:lengthHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of list length in the point-free style.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthPF",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#lengthPF",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of list length in the point-free style",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthPF",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "PF",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:lengthPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of list length in the point-free style with structural recursion.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthPF'",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#lengthPF%27",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of list length in the point-free style with structural recursion",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "lengthPF'",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "PF'",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:lengthPF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMalcolm downwards accumulations on lists.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolm",
          "package": "pointless-haskell",
          "signature": "((b, a) -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#malcolm",
          "type": "function"
        },
        "index": {
          "description": "Malcolm downwards accumulations on lists",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolm",
          "normalized": "((a,b)-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "pointless-haskell",
          "signature": "((b,a)-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:malcolm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMalcom downwards accumulations on lists as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmAna",
          "package": "pointless-haskell",
          "signature": "((b, a) -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#malcolmAna",
          "type": "function"
        },
        "index": {
          "description": "Malcom downwards accumulations on lists as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmAna",
          "normalized": "((a,b)-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "((b,a)-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:malcolmAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncurried version of Malcom downwards accumulations on lists as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmAna'",
          "package": "pointless-haskell",
          "signature": "((b, a) -\u003e a) -\u003e ([b], a) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#malcolmAna%27",
          "type": "function"
        },
        "index": {
          "description": "Uncurried version of Malcom downwards accumulations on lists as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmAna'",
          "normalized": "((a,b)-\u003eb)-\u003e([a],b)-\u003e[b]",
          "package": "pointless-haskell",
          "partial": "Ana'",
          "signature": "((b,a)-\u003ea)-\u003e([b],a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:malcolmAna-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMalcolm downwards accumulations on streams.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmS",
          "package": "pointless-haskell",
          "signature": "((b, a) -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Generics-Pointless-Examples-Examples.html#malcolmS",
          "type": "function"
        },
        "index": {
          "description": "Malcolm downwards accumulations on streams",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmS",
          "normalized": "((a,b)-\u003eb)-\u003eb-\u003eStream a-\u003eStream b",
          "package": "pointless-haskell",
          "signature": "((b,a)-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:malcolmS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMalcom downwards accumulations on streams as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmSAna",
          "package": "pointless-haskell",
          "signature": "((b, a) -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Generics-Pointless-Examples-Examples.html#malcolmSAna",
          "type": "function"
        },
        "index": {
          "description": "Malcom downwards accumulations on streams as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmSAna",
          "normalized": "((a,b)-\u003eb)-\u003eb-\u003eStream a-\u003eStream b",
          "package": "pointless-haskell",
          "partial": "SAna",
          "signature": "((b,a)-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:malcolmSAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncurried version of Malcom downwards accumulations on streams as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmSAna'",
          "package": "pointless-haskell",
          "signature": "((b, a) -\u003e a) -\u003e (Stream b, a) -\u003e Stream a",
          "source": "src/Generics-Pointless-Examples-Examples.html#malcolmSAna%27",
          "type": "function"
        },
        "index": {
          "description": "Uncurried version of Malcom downwards accumulations on streams as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "malcolmSAna'",
          "normalized": "((a,b)-\u003eb)-\u003e(Stream a,b)-\u003eStream b",
          "package": "pointless-haskell",
          "partial": "SAna'",
          "signature": "((b,a)-\u003ea)-\u003e(Stream b,a)-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:malcolmSAna-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of list mapping as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "mapCata",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e (a -\u003e b) -\u003e [b]",
          "source": "src/Generics-Pointless-Examples-Examples.html#mapCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of list mapping as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "mapCata",
          "normalized": "[a]-\u003e(a-\u003eb)-\u003e[b]",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[a]-\u003e(a-\u003eb)-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:mapCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping over streams as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "mapStream",
          "package": "pointless-haskell",
          "signature": "(a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Generics-Pointless-Examples-Examples.html#mapStream",
          "type": "function"
        },
        "index": {
          "description": "Mapping over streams as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "mapStream",
          "normalized": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "pointless-haskell",
          "partial": "Stream",
          "signature": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:mapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorted concatenation of two lists as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "merge",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Sorted concatenation of two lists as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "merge",
          "normalized": "([a],[a])-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "([a],[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "msort",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#msort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "msort",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:msort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "msplit",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e ([a], [a])",
          "source": "src/Generics-Pointless-Examples-Examples.html#msplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "msplit",
          "normalized": "[a]-\u003e([a],[a])",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:msplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition of integer multiplication.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "mult",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#mult",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition of integer multiplication",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "mult",
          "normalized": "[Int]-\u003eInt",
          "package": "pointless-haskell",
          "signature": "[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of integer multiplication as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "multCata",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#multCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of integer multiplication as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "multCata",
          "normalized": "[Int]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:multCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounting the number of leaves in a binary tree as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "nleaves",
          "package": "pointless-haskell",
          "signature": "Tree a -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#nleaves",
          "type": "function"
        },
        "index": {
          "description": "Counting the number of leaves in binary tree as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "nleaves",
          "normalized": "Tree a-\u003eInt",
          "package": "pointless-haskell",
          "signature": "Tree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:nleaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounting the number of nodes in a binary tree as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "nnodes",
          "package": "pointless-haskell",
          "signature": "Tree a -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#nnodes",
          "type": "function"
        },
        "index": {
          "description": "Counting the number of nodes in binary tree as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "nnodes",
          "normalized": "Tree a-\u003eInt",
          "package": "pointless-haskell",
          "signature": "Tree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:nnodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative recursive definition for partitioning a list at a specified element.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "partition",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e ([a], [a])",
          "source": "src/Generics-Pointless-Examples-Examples.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Native recursive definition for partitioning list at specified element",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "partition",
          "normalized": "(a,[a])-\u003e([a],[a])",
          "package": "pointless-haskell",
          "signature": "(a,[a])-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition for partitioning a list at a specified element as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "partitionHylo",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e ([a], [a])",
          "source": "src/Generics-Pointless-Examples-Examples.html#partitionHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition for partitioning list at specified element as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "partitionHylo",
          "normalized": "(a,[a])-\u003e([a],[a])",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "(a,[a])-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:partitionHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe postorder traversal on rose trees as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "postRose",
          "package": "pointless-haskell",
          "signature": "Rose a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#postRose",
          "type": "function"
        },
        "index": {
          "description": "The postorder traversal on rose trees as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "postRose",
          "normalized": "Rose a-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Rose",
          "signature": "Rose a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:postRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe postorder traversal on binary trees as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "postTree",
          "package": "pointless-haskell",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#postTree",
          "type": "function"
        },
        "index": {
          "description": "The postorder traversal on binary trees as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "postTree",
          "normalized": "Tree a-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Tree",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:postTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "preRose",
          "package": "pointless-haskell",
          "signature": "Rose a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#preRose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "preRose",
          "normalized": "Rose a-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Rose",
          "signature": "Rose a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:preRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preorder traversal on binary trees as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "preTree",
          "package": "pointless-haskell",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#preTree",
          "type": "function"
        },
        "index": {
          "description": "The preorder traversal on binary trees as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "preTree",
          "normalized": "Tree a-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Tree",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:preTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-defined algebraic product.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "prod",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#prod",
          "type": "function"
        },
        "index": {
          "description": "Pre-defined algebraic product",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "prod",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of algebraic product as an hylomorphism\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "prodHylo",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#prodHylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of algebraic product as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "prodHylo",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:prodHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the quicksort algorithm as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "qsort",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#qsort",
          "type": "function"
        },
        "index": {
          "description": "Definition of the quicksort algorithm as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "qsort",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:qsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneration of infinite lists as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "repeatAna",
          "package": "pointless-haskell",
          "signature": "a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#repeatAna",
          "type": "function"
        },
        "index": {
          "description": "Generation of infinite lists as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "repeatAna",
          "normalized": "a-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:repeatAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite replication of an element as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "replicateAna",
          "package": "pointless-haskell",
          "signature": "(Int, a) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#replicateAna",
          "type": "function"
        },
        "index": {
          "description": "Finite replication of an element as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "replicateAna",
          "normalized": "(Int,a)-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "(Int,a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:replicateAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear version of reverse using accumulations\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "reverseAccum'",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#reverseAccum%27",
          "type": "function"
        },
        "index": {
          "description": "Linear version of reverse using accumulations",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "reverseAccum'",
          "normalized": "([a],[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Accum'",
          "signature": "([a],[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:reverseAccum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of list reversion as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "reverseCata",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#reverseCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of list reversion as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "reverseCata",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:reverseCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "reverseHylo",
          "package": "pointless-haskell",
          "signature": "([a], [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#reverseHylo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "reverseHylo",
          "normalized": "([a],[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "([a],[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:reverseHylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend an element to the end of a list as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "snoc",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append an element to the end of list as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "snoc",
          "normalized": "(a,[a])-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "(a,[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend an element to the end of a list as an apomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "snocApo",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#snocApo",
          "type": "function"
        },
        "index": {
          "description": "Append an element to the end of list as an apomorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "snocApo",
          "normalized": "(a,[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Apo",
          "signature": "(a,[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:snocApo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Examples.Examples",
          "name": "sorted",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Bool",
          "source": "src/Generics-Pointless-Examples-Examples.html#sorted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "sorted",
          "normalized": "[a]-\u003eBool",
          "package": "pointless-haskell",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:sorted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the subsequences of a list as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "subsequences",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Generics-Pointless-Examples-Examples.html#subsequences",
          "type": "function"
        },
        "index": {
          "description": "Definition of the subsequences of list as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "subsequences",
          "normalized": "[a]-\u003e[[a]]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:subsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of inter addition as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "sumCata",
          "package": "pointless-haskell",
          "signature": "[Int] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Examples.html#sumCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of inter addition as catamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "sumCata",
          "normalized": "[Int]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:sumCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the tail of a list as a total function.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tail",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Definition of the tail of list as total function",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the tail of a list as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailCata",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#tailCata",
          "type": "function"
        },
        "index": {
          "description": "Definition of the tail of list as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailCata",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:tailCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the tail of a list in the point-free style.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailPF",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#tailPF",
          "type": "function"
        },
        "index": {
          "description": "Definition of the tail of list in the point-free style",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailPF",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "PF",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:tailPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the tail of a list as a paramorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailPara",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#tailPara",
          "type": "function"
        },
        "index": {
          "description": "Definition of the tail of list as paramorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailPara",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Para",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:tailPara"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream tail.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailS",
          "package": "pointless-haskell",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Generics-Pointless-Examples-Examples.html#tailS",
          "type": "function"
        },
        "index": {
          "description": "Stream tail",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "tailS",
          "normalized": "Stream a-\u003eStream a",
          "package": "pointless-haskell",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:tailS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtraction of a number of elements from a list as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "takeAna",
          "package": "pointless-haskell",
          "signature": "(Int, [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#takeAna",
          "type": "function"
        },
        "index": {
          "description": "Extraction of number of elements from list as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "takeAna",
          "normalized": "(Int,[a])-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "(Int,[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:takeAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-defined wrapping of an element into a list.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "wrap",
          "package": "pointless-haskell",
          "signature": "a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Pre-defined wrapping of an element into list",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "wrap",
          "normalized": "a-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of wrapping in the point-free style.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "wrapPF",
          "package": "pointless-haskell",
          "signature": "a -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Examples.html#wrapPF",
          "type": "function"
        },
        "index": {
          "description": "Definition of wrapping in the point-free style",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "wrapPF",
          "normalized": "a-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "PF",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:wrapPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the zip for lists of pairs as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "zipAna",
          "package": "pointless-haskell",
          "signature": "([a], [b]) -\u003e [(a, b)]",
          "source": "src/Generics-Pointless-Examples-Examples.html#zipAna",
          "type": "function"
        },
        "index": {
          "description": "Definition of the zip for lists of pairs as an anamorphism",
          "hierarchy": "Generics Pointless Examples Examples",
          "module": "Generics.Pointless.Examples.Examples",
          "name": "zipAna",
          "normalized": "([a],[b])-\u003e[(a,b)]",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "([a],[b])-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Examples.html#v:zipAna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module provides the same examples, but with support for GHood observations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "Observe",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Examples-Observe.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module provides the same examples but with support for GHood observations",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "Observe",
          "package": "pointless-haskell",
          "partial": "Observe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable add function as an accumulation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "addAccumO",
          "package": "pointless-haskell",
          "signature": "(Int, Int) -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#addAccumO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable add function as an accumulation",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "addAccumO",
          "normalized": "(Int,Int)-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Accum",
          "signature": "(Int,Int)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:addAccumO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable factorial function as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "factHyloO",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#factHyloO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable factorial function as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "factHyloO",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:factHyloO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable factorial function as a paramorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "factParaO",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#factParaO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable factorial function as paramorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "factParaO",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Para",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:factParaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable factorial function as a zygomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "factZygoO",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#factZygoO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable factorial function as zygomorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "factZygoO",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Zygo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:factZygoO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable fibonacci function as a dynamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "fibDynaO",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#fibDynaO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable fibonacci function as dynamorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "fibDynaO",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Dyna",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:fibDynaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable fibonacci function as an histomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "fibHistoO",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#fibHistoO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable fibonacci function as an histomorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "fibHistoO",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Histo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:fibHistoO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable fibonacci function as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "fibHyloO",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#fibHyloO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable fibonacci function as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "fibHyloO",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:fibHyloO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable length function as an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "lengthAnaO",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#lengthAnaO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable length function as an anamorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "lengthAnaO",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Ana",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:lengthAnaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable length function as a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "lengthCataO",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#lengthCataO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable length function as catamorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "lengthCataO",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Cata",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:lengthCataO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable length function as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "lengthHyloO",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e Int",
          "source": "src/Generics-Pointless-Examples-Observe.html#lengthHyloO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable length function as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "lengthHyloO",
          "normalized": "[a]-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:lengthHyloO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable quicksort function as an hylomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "qsortHyloO",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Observe.html#qsortHyloO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable quicksort function as an hylomorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "qsortHyloO",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Hylo",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:qsortHyloO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of the observable tail function as a paramorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "tailParaO",
          "package": "pointless-haskell",
          "signature": "[a] -\u003e [a]",
          "source": "src/Generics-Pointless-Examples-Observe.html#tailParaO",
          "type": "function"
        },
        "index": {
          "description": "Definition of the observable tail function as paramorphism",
          "hierarchy": "Generics Pointless Examples Observe",
          "module": "Generics.Pointless.Examples.Observe",
          "name": "tailParaO",
          "normalized": "[a]-\u003e[a]",
          "package": "pointless-haskell",
          "partial": "Para",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Examples-Observe.html#v:tailParaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines a class of representable functors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Fctrable",
          "name": "Fctrable",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Fctrable.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines class of representable functors",
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "Fctrable",
          "package": "pointless-haskell",
          "partial": "Fctrable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctor GADT for polytypic recursive functions.\n At the moment it does not rely on a \u003ccode\u003eTypeable\u003c/code\u003e instance for constants.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Fctrable",
          "name": "Fctr",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "data"
        },
        "index": {
          "description": "Functor GADT for polytypic recursive functions At the moment it does not rely on Typeable instance for constants",
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "Fctr",
          "package": "pointless-haskell",
          "partial": "Fctr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#t:Fctr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of representable functors.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Fctrable",
          "name": "Fctrable",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Fctrable.html#Fctrable",
          "type": "class"
        },
        "index": {
          "description": "Class of representable functors",
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "Fctrable",
          "package": "pointless-haskell",
          "partial": "Fctrable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#t:Fctrable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": ":*!:",
          "package": "pointless-haskell",
          "signature": "Fctr f -\u003e Fctr g -\u003e Fctr (f :*: g)",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": ":*!:",
          "normalized": "Fctr a-\u003eFctr b-\u003eFctr(a*b)",
          "package": "pointless-haskell",
          "signature": "Fctr f-\u003eFctr g-\u003eFctr(f*g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v::-42--33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": ":+!:",
          "package": "pointless-haskell",
          "signature": "Fctr f -\u003e Fctr g -\u003e Fctr (f :+: g)",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": ":+!:",
          "normalized": "Fctr a-\u003eFctr b-\u003eFctr(a b)",
          "package": "pointless-haskell",
          "signature": "Fctr f-\u003eFctr g-\u003eFctr(f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v::-43--33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": ":@!:",
          "package": "pointless-haskell",
          "signature": "Fctr f -\u003e Fctr g -\u003e Fctr (f :@: g)",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": ":@!:",
          "normalized": "Fctr a-\u003eFctr b-\u003eFctr(a b)",
          "package": "pointless-haskell",
          "signature": "Fctr f-\u003eFctr g-\u003eFctr(f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v::-64--33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": "I",
          "package": "pointless-haskell",
          "signature": "Fctr Id",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "I",
          "package": "pointless-haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": "K",
          "package": "pointless-haskell",
          "signature": "Fctr (Const c)",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "K",
          "package": "pointless-haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": "L",
          "package": "pointless-haskell",
          "signature": "Fctr []",
          "source": "src/Generics-Pointless-Fctrable.html#Fctr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "L",
          "normalized": "Fctr[]",
          "package": "pointless-haskell",
          "signature": "Fctr[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Fctrable",
          "name": "fctr",
          "package": "pointless-haskell",
          "signature": "Fctr f",
          "source": "src/Generics-Pointless-Fctrable.html#fctr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "fctr",
          "package": "pointless-haskell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v:fctr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe representation of the fixpoint of a representable functor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Fctrable",
          "name": "fctrF",
          "package": "pointless-haskell",
          "signature": "Fix f -\u003e Fctr f",
          "source": "src/Generics-Pointless-Fctrable.html#fctrF",
          "type": "function"
        },
        "index": {
          "description": "The representation of the fixpoint of representable functor",
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "fctrF",
          "normalized": "Fix a-\u003eFctr a",
          "package": "pointless-haskell",
          "signature": "Fix f-\u003eFctr f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v:fctrF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of a representable functor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Fctrable",
          "name": "fixF",
          "package": "pointless-haskell",
          "signature": "Fctr f -\u003e Fix f",
          "source": "src/Generics-Pointless-Fctrable.html#fixF",
          "type": "function"
        },
        "index": {
          "description": "The fixpoint of representable functor",
          "hierarchy": "Generics Pointless Fctrable",
          "module": "Generics.Pointless.Fctrable",
          "name": "fixF",
          "normalized": "Fctr a-\u003eFix a",
          "package": "pointless-haskell",
          "signature": "Fctr f-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Fctrable.html#v:fixF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines data types as fixed points of functor.\n Pointless Haskell works on a view of data types as fixed points of functors, in the same style as the PolyP (\u003ca\u003ehttp://www.cse.chalmers.se/~patrikj/poly/polyp/\u003c/a\u003e) library.\n Instead of using an explicit fixpoint operator, a type function is used to relate the data types with their equivalent functor representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Functors",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines data types as fixed points of functor Pointless Haskell works on view of data types as fixed points of functors in the same style as the PolyP http www.cse.chalmers.se patrikj poly polyp library Instead of using an explicit fixpoint operator type function is used to relate the data types with their equivalent functor representations",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Functors",
          "package": "pointless-haskell",
          "partial": "Functors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantically, we can say that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e f :*!: \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e g = \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e (f :*: g)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": ":*!:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#%3A%2A%21%3A",
          "type": "data"
        },
        "index": {
          "description": "Semantically we can say that Fix Fix Fix",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": ":*!:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t::-42--33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct of functors.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": ":*:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "Product of functors",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": ":*:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantically, we can say that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e f :+!: \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e g = \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e (f :+: g)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": ":+!:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#%3A%2B%21%3A",
          "type": "data"
        },
        "index": {
          "description": "Semantically we can say that Fix Fix Fix",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": ":+!:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t::-43--33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of functors.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": ":+:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Sum of functors",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": ":+:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantically, we can say that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e f :@!: \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e g = \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e (f ':@: g)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": ":@!:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#%3A%40%21%3A",
          "type": "data"
        },
        "index": {
          "description": "Semantically we can say that Fix Fix Fix",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": ":@!:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t::-64--33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of functors.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": ":@:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#%3A%40%3A",
          "type": "data"
        },
        "index": {
          "description": "Composition of functors",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": ":@:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t::-64-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant functor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Const",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#Const",
          "type": "data"
        },
        "index": {
          "description": "Constant functor",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Const",
          "package": "pointless-haskell",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort alias to express the structurally equivalent sum of products for some data type\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "F",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#F",
          "type": "type"
        },
        "index": {
          "description": "Short alias to express the structurally equivalent sum of products for some data type",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "F",
          "package": "pointless-haskell",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicit fixpoint operator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Fix",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#Fix",
          "type": "newtype"
        },
        "index": {
          "description": "Explicit fixpoint operator",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Fix",
          "package": "pointless-haskell",
          "partial": "Fix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolytypic \u003ccode\u003ePrelude.Functor\u003c/code\u003e class for functor representations\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Functor",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#Functor",
          "type": "class"
        },
        "index": {
          "description": "Polytypic Prelude.Functor class for functor representations",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Functor",
          "package": "pointless-haskell",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to simplify type-level composition of functors, we can create fixpoint combinators that implicitely assume fixpoint application.\n\u003c/p\u003e\u003cp\u003eSemantically, we can say that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "I",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#I",
          "type": "data"
        },
        "index": {
          "description": "In order to simplify type-level composition of functors we can create fixpoint combinators that implicitely assume fixpoint application Semantically we can say that Fix Id",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "I",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity functor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Id",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#Id",
          "type": "data"
        },
        "index": {
          "description": "Identity functor",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Id",
          "package": "pointless-haskell",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantically, we can say that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eConst\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "K",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#K",
          "type": "data"
        },
        "index": {
          "description": "Semantically we can say that Fix Const",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "K",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e class provides the value-level translation between data types and their sum of products representations\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Mu",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#Mu",
          "type": "class"
        },
        "index": {
          "description": "The Mu class provides the value-level translation between data types and their sum of products representations",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Mu",
          "package": "pointless-haskell",
          "partial": "Mu",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Mu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "Nat",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#Nat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Nat",
          "package": "pointless-haskell",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFamily of patterns functors of data types.\n\u003c/p\u003e\u003cp\u003eThe type function is not necessarily injective, this is, different data types can have the same base functor.\n\u003c/p\u003e\u003cp\u003eSemantically, we can say that \u003ccode\u003ea = \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "PF",
          "package": "pointless-haskell",
          "signature": "PF",
          "type": "function"
        },
        "index": {
          "description": "Family of patterns functors of data types The type function is not necessarily injective this is different data types can have the same base functor Semantically we can say that Fix",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "PF",
          "package": "pointless-haskell",
          "partial": "PF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:PF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFamily of functor representations.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e family implements the implicit coercion between the application of a functor and the structurally equivalent sum of products.\n\u003c/p\u003e\u003cp\u003eFunctors applied to types can be represented as sums of products.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "Rep",
          "package": "pointless-haskell",
          "signature": "Rep",
          "type": "function"
        },
        "index": {
          "description": "Family of functor representations The Rep family implements the implicit coercion between the application of functor and the structurally equivalent sum of products Functors applied to types can be represented as sums of products",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Rep",
          "package": "pointless-haskell",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific \u003ccode\u003eShow\u003c/code\u003e class for functor representations that receives a show function for recursive instances.\n This avoids infinite loops in the type inference of fixpoints.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "ShowRep",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#ShowRep",
          "type": "class"
        },
        "index": {
          "description": "specific Show class for functor representations that receives show function for recursive instances This avoids infinite loops in the type inference of fixpoints",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "ShowRep",
          "package": "pointless-haskell",
          "partial": "Show Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:ShowRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "ToRep",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Functors.html#ToRep",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "ToRep",
          "package": "pointless-haskell",
          "partial": "To Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#t:ToRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "CompF",
          "package": "pointless-haskell",
          "signature": "CompF",
          "source": "src/Generics-Pointless-Functors.html#%3A%40%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "CompF",
          "package": "pointless-haskell",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:CompF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "ConsF",
          "package": "pointless-haskell",
          "signature": "ConsF",
          "source": "src/Generics-Pointless-Functors.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "ConsF",
          "package": "pointless-haskell",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:ConsF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "FixComp",
          "package": "pointless-haskell",
          "signature": "FixComp",
          "source": "src/Generics-Pointless-Functors.html#%3A%40%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "FixComp",
          "package": "pointless-haskell",
          "partial": "Fix Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:FixComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "FixConst",
          "package": "pointless-haskell",
          "signature": "FixConst",
          "source": "src/Generics-Pointless-Functors.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "FixConst",
          "package": "pointless-haskell",
          "partial": "Fix Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:FixConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "FixId",
          "package": "pointless-haskell",
          "signature": "FixId",
          "source": "src/Generics-Pointless-Functors.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "FixId",
          "package": "pointless-haskell",
          "partial": "Fix Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:FixId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "FixProd",
          "package": "pointless-haskell",
          "signature": "FixProd",
          "source": "src/Generics-Pointless-Functors.html#%3A%2A%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "FixProd",
          "package": "pointless-haskell",
          "partial": "Fix Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:FixProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "FixSum",
          "package": "pointless-haskell",
          "signature": "FixSum",
          "source": "src/Generics-Pointless-Functors.html#%3A%2B%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "FixSum",
          "package": "pointless-haskell",
          "partial": "Fix Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:FixSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "IdF",
          "package": "pointless-haskell",
          "signature": "IdF",
          "source": "src/Generics-Pointless-Functors.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "IdF",
          "package": "pointless-haskell",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:IdF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "InlF",
          "package": "pointless-haskell",
          "signature": "InlF (g x)",
          "source": "src/Generics-Pointless-Functors.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "InlF",
          "package": "pointless-haskell",
          "partial": "Inl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:InlF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "Inn",
          "package": "pointless-haskell",
          "signature": "Inn",
          "source": "src/Generics-Pointless-Functors.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Inn",
          "package": "pointless-haskell",
          "partial": "Inn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:Inn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "InrF",
          "package": "pointless-haskell",
          "signature": "InrF (h x)",
          "source": "src/Generics-Pointless-Functors.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "InrF",
          "package": "pointless-haskell",
          "partial": "Inr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:InrF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "Nat",
          "package": "pointless-haskell",
          "signature": "Nat Int",
          "source": "src/Generics-Pointless-Functors.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "Nat",
          "package": "pointless-haskell",
          "partial": "Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "ProdF",
          "package": "pointless-haskell",
          "signature": "ProdF (g x) (h x)",
          "source": "src/Generics-Pointless-Functors.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "ProdF",
          "package": "pointless-haskell",
          "partial": "Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:ProdF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "cons",
          "package": "pointless-haskell",
          "signature": "(a, [a]) -\u003e [a]",
          "source": "src/Generics-Pointless-Functors.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "cons",
          "normalized": "(a,[a])-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "(a,[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "false",
          "package": "pointless-haskell",
          "signature": "One -\u003e Bool",
          "source": "src/Generics-Pointless-Functors.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "false",
          "normalized": "One-\u003eBool",
          "package": "pointless-haskell",
          "signature": "One-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "fmap",
          "package": "pointless-haskell",
          "signature": "fmap",
          "source": "src/Generics-Pointless-Functors.html#fmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "fmap",
          "package": "pointless-haskell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "fun",
          "package": "pointless-haskell",
          "signature": "f x -\u003e Ann (Fix f)",
          "source": "src/Generics-Pointless-Functors.html#fun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "fun",
          "normalized": "a b-\u003eAnn(Fix a)",
          "package": "pointless-haskell",
          "signature": "f x-\u003eAnn(Fix f)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "fzip",
          "package": "pointless-haskell",
          "signature": "fzip",
          "source": "src/Generics-Pointless-Functors.html#fzip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "fzip",
          "package": "pointless-haskell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:fzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePacks a sum of products into one equivalent data type\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "inn",
          "package": "pointless-haskell",
          "signature": "F a a -\u003e a",
          "source": "src/Generics-Pointless-Functors.html#inn",
          "type": "method"
        },
        "index": {
          "description": "Packs sum of products into one equivalent data type",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "inn",
          "normalized": "F a a-\u003ea",
          "package": "pointless-haskell",
          "signature": "F a a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:inn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "inn'",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e F a a -\u003e a",
          "source": "src/Generics-Pointless-Functors.html#inn%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "inn'",
          "normalized": "Ann a-\u003eF a a-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003eF a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:inn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "intNat",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Nat",
          "source": "src/Generics-Pointless-Functors.html#intNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "intNat",
          "normalized": "Int-\u003eNat",
          "package": "pointless-haskell",
          "partial": "Nat",
          "signature": "Int-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:intNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "lzip",
          "package": "pointless-haskell",
          "signature": "(a -\u003e c) -\u003e ([a], [c]) -\u003e [(a, c)]",
          "source": "src/Generics-Pointless-Functors.html#lzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "lzip",
          "normalized": "(a-\u003eb)-\u003e([a],[b])-\u003e[(a,b)]",
          "package": "pointless-haskell",
          "signature": "(a-\u003ec)-\u003e([a],[c])-\u003e[(a,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:lzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "maybe2bool",
          "package": "pointless-haskell",
          "signature": "Maybe a -\u003e Bool",
          "source": "src/Generics-Pointless-Functors.html#maybe2bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "maybe2bool",
          "normalized": "Maybe a-\u003eBool",
          "package": "pointless-haskell",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:maybe2bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "natInt",
          "package": "pointless-haskell",
          "signature": "Nat -\u003e Int",
          "source": "src/Generics-Pointless-Functors.html#natInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "natInt",
          "normalized": "Nat-\u003eInt",
          "package": "pointless-haskell",
          "partial": "Int",
          "signature": "Nat-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:natInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "nil",
          "package": "pointless-haskell",
          "signature": "One -\u003e [a]",
          "source": "src/Generics-Pointless-Functors.html#nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "nil",
          "normalized": "One-\u003e[a]",
          "package": "pointless-haskell",
          "signature": "One-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unfolding of the fixpoint of a functor is the functor applied to its fixpoint.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunFix\u003c/code\u003e is specialized with the application of \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e in order to subsume functor application\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "ouT",
          "package": "pointless-haskell",
          "signature": "Rep f (Fix f)",
          "source": "src/Generics-Pointless-Functors.html#Fix",
          "type": "function"
        },
        "index": {
          "description": "The unfolding of the fixpoint of functor is the functor applied to its fixpoint unFix is specialized with the application of Rep in order to subsume functor application",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "ouT",
          "package": "pointless-haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:ouT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunpacks a data type into the equivalent sum of products\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "out",
          "package": "pointless-haskell",
          "signature": "a -\u003e F a a",
          "source": "src/Generics-Pointless-Functors.html#out",
          "type": "method"
        },
        "index": {
          "description": "unpacks data type into the equivalent sum of products",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "out",
          "normalized": "a-\u003eF a a",
          "package": "pointless-haskell",
          "signature": "a-\u003eF a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "out'",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e a -\u003e F a a",
          "source": "src/Generics-Pointless-Functors.html#out%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "out'",
          "normalized": "Ann a-\u003ea-\u003eF a a",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003ea-\u003eF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:out-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolytypic map function\n\u003c/p\u003e",
          "module": "Generics.Pointless.Functors",
          "name": "pmap",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e (x -\u003e y)-\u003e F a x-\u003e F a y",
          "type": "function"
        },
        "index": {
          "description": "Polytypic map function",
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "pmap",
          "normalized": "Ann a-\u003e(b-\u003ec)-\u003eF a b-\u003eF a c",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(x-\u003ey)-\u003eF a x-\u003eF a y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:pmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "rep",
          "package": "pointless-haskell",
          "signature": "f x -\u003e Rep f x",
          "source": "src/Generics-Pointless-Functors.html#rep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "rep",
          "normalized": "a b-\u003eRep a b",
          "package": "pointless-haskell",
          "signature": "f x-\u003eRep f x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "showrep",
          "package": "pointless-haskell",
          "signature": "Ann (Fix f) -\u003e (x -\u003e String) -\u003e Rep f x -\u003e String",
          "source": "src/Generics-Pointless-Functors.html#showrep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "showrep",
          "normalized": "Ann(Fix a)-\u003e(b-\u003eString)-\u003eRep a b-\u003eString",
          "package": "pointless-haskell",
          "signature": "Ann(Fix f)-\u003e(x-\u003eString)-\u003eRep f x-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:showrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "suck",
          "package": "pointless-haskell",
          "signature": "Int -\u003e Int",
          "source": "src/Generics-Pointless-Functors.html#suck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "suck",
          "normalized": "Int-\u003eInt",
          "package": "pointless-haskell",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:suck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "true",
          "package": "pointless-haskell",
          "signature": "One -\u003e Bool",
          "source": "src/Generics-Pointless-Functors.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "true",
          "normalized": "One-\u003eBool",
          "package": "pointless-haskell",
          "signature": "One-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unCompF",
          "package": "pointless-haskell",
          "signature": "g (h x)",
          "source": "src/Generics-Pointless-Functors.html#%3A%40%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unCompF",
          "package": "pointless-haskell",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unCompF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unConsF",
          "package": "pointless-haskell",
          "signature": "t",
          "source": "src/Generics-Pointless-Functors.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unConsF",
          "package": "pointless-haskell",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unConsF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unFixComp",
          "package": "pointless-haskell",
          "signature": "F (a :@!: b) (a :@!: b)",
          "source": "src/Generics-Pointless-Functors.html#%3A%40%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unFixComp",
          "package": "pointless-haskell",
          "partial": "Fix Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unFixComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unFixConst",
          "package": "pointless-haskell",
          "signature": "a",
          "source": "src/Generics-Pointless-Functors.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unFixConst",
          "package": "pointless-haskell",
          "partial": "Fix Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unFixConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unFixProd",
          "package": "pointless-haskell",
          "signature": "F (a :*!: b) (a :*!: b)",
          "source": "src/Generics-Pointless-Functors.html#%3A%2A%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unFixProd",
          "package": "pointless-haskell",
          "partial": "Fix Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unFixProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unFixSum",
          "package": "pointless-haskell",
          "signature": "F (a :+!: b) (a :+!: b)",
          "source": "src/Generics-Pointless-Functors.html#%3A%2B%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unFixSum",
          "package": "pointless-haskell",
          "partial": "Fix Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unFixSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unIdF",
          "package": "pointless-haskell",
          "signature": "x",
          "source": "src/Generics-Pointless-Functors.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unIdF",
          "package": "pointless-haskell",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unIdF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "unrep",
          "package": "pointless-haskell",
          "signature": "Ann (Fix f) -\u003e Ann x -\u003e Rep f x -\u003e f x",
          "source": "src/Generics-Pointless-Functors.html#unrep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "unrep",
          "normalized": "Ann(Fix a)-\u003eAnn b-\u003eRep a b-\u003ea b",
          "package": "pointless-haskell",
          "signature": "Ann(Fix f)-\u003eAnn x-\u003eRep f x-\u003ef x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:unrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "val",
          "package": "pointless-haskell",
          "signature": "f x -\u003e Ann x",
          "source": "src/Generics-Pointless-Functors.html#val",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "val",
          "normalized": "a b-\u003eAnn b",
          "package": "pointless-haskell",
          "signature": "f x-\u003eAnn x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.Functors",
          "name": "zero",
          "package": "pointless-haskell",
          "signature": "One -\u003e Int",
          "source": "src/Generics-Pointless-Functors.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless Functors",
          "module": "Generics.Pointless.Functors",
          "name": "zero",
          "normalized": "One-\u003eInt",
          "package": "pointless-haskell",
          "signature": "One-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Functors.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines polymorphic data types as fixed points of higher-order functor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFunctors",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines polymorphic data types as fixed points of higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFunctors",
          "package": "pointless-haskell",
          "partial": "HFunctors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of natural transformations\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": ":~\u003e",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "The type of natural transformations",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": ":~\u003e",
          "package": "pointless-haskell",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct higher-order functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": ":*~:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%2A~%3A",
          "type": "data"
        },
        "index": {
          "description": "Product higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": ":*~:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t::-42--126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum higher-order functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": ":+~:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%2B~%3A",
          "type": "data"
        },
        "index": {
          "description": "Sum higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": ":+~:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t::-43--126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of a regular functor with an higher-order functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": ":@~:",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%40~%3A",
          "type": "data"
        },
        "index": {
          "description": "Composition of regular functor with an higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": ":@~:",
          "package": "pointless-haskell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t::-64--126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotations of higher-order functors, only to provide type-level information to the compiler\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "AnnH",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#AnnH",
          "type": "data"
        },
        "index": {
          "description": "Annotations of higher-order functors only to provide type-level information to the compiler",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "AnnH",
          "package": "pointless-haskell",
          "partial": "Ann",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:AnnH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "App",
          "package": "pointless-haskell",
          "signature": "App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "App",
          "package": "pointless-haskell",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic monoid class\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "FMonoid",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#FMonoid",
          "type": "class"
        },
        "index": {
          "description": "Polymorphic monoid class",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "FMonoid",
          "package": "pointless-haskell",
          "partial": "FMonoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:FMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "H",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#H",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "H",
          "package": "pointless-haskell",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant higher-order functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "HConst",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#HConst",
          "type": "newtype"
        },
        "index": {
          "description": "Constant higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HConst",
          "package": "pointless-haskell",
          "partial": "HConst",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HF",
          "package": "pointless-haskell",
          "signature": "HF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HF",
          "package": "pointless-haskell",
          "partial": "HF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fixpoint of an higher-order functor is a regular functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFix",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#HFix",
          "type": "newtype"
        },
        "index": {
          "description": "The fixpoint of an higher-order functor is regular functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFix",
          "package": "pointless-haskell",
          "partial": "HFix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HFoldable",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#HFoldable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFoldable",
          "package": "pointless-haskell",
          "partial": "HFoldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HFun",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#HFun",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFun",
          "package": "pointless-haskell",
          "partial": "HFun",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity higher-order functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "HId",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#HId",
          "type": "newtype"
        },
        "index": {
          "description": "Identity higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HId",
          "package": "pointless-haskell",
          "partial": "HId",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter higher-order functor\n\u003c/p\u003e",
          "module": "Generics.Pointless.HFunctors",
          "name": "HParam",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#HParam",
          "type": "newtype"
        },
        "index": {
          "description": "Parameter higher-order functor",
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HParam",
          "package": "pointless-haskell",
          "partial": "HParam",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HRep",
          "package": "pointless-haskell",
          "signature": "HRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HRep",
          "package": "pointless-haskell",
          "partial": "HRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:HRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "Hu",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-HFunctors.html#Hu",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "Hu",
          "package": "pointless-haskell",
          "partial": "Hu",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#t:Hu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "CompH",
          "package": "pointless-haskell",
          "signature": "CompH",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%40~%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "CompH",
          "package": "pointless-haskell",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:CompH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "ConsH",
          "package": "pointless-haskell",
          "signature": "ConsH",
          "source": "src/Generics-Pointless-HFunctors.html#HConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "ConsH",
          "package": "pointless-haskell",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:ConsH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HFun",
          "package": "pointless-haskell",
          "signature": "HFun",
          "source": "src/Generics-Pointless-HFunctors.html#HFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HFun",
          "package": "pointless-haskell",
          "partial": "HFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:HFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HInn",
          "package": "pointless-haskell",
          "signature": "HInn",
          "source": "src/Generics-Pointless-HFunctors.html#HFix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HInn",
          "package": "pointless-haskell",
          "partial": "HInn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:HInn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "HPar",
          "package": "pointless-haskell",
          "signature": "HPar",
          "source": "src/Generics-Pointless-HFunctors.html#HParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "HPar",
          "package": "pointless-haskell",
          "partial": "HPar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:HPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "IdH",
          "package": "pointless-haskell",
          "signature": "IdH",
          "source": "src/Generics-Pointless-HFunctors.html#HId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "IdH",
          "package": "pointless-haskell",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:IdH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "InlH",
          "package": "pointless-haskell",
          "signature": "InlH (g f a)",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%2B~%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "InlH",
          "package": "pointless-haskell",
          "partial": "Inl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:InlH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "InrH",
          "package": "pointless-haskell",
          "signature": "InrH (h f a)",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%2B~%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "InrH",
          "package": "pointless-haskell",
          "partial": "Inr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:InrH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "ProdH",
          "package": "pointless-haskell",
          "signature": "ProdH (g f a) (h f a)",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%2A~%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "ProdH",
          "package": "pointless-haskell",
          "partial": "Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:ProdH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "fplus",
          "package": "pointless-haskell",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Generics-Pointless-HFunctors.html#fplus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "fplus",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "pointless-haskell",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:fplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "fzero",
          "package": "pointless-haskell",
          "signature": "f a",
          "source": "src/Generics-Pointless-HFunctors.html#fzero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "fzero",
          "package": "pointless-haskell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:fzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "hOut",
          "package": "pointless-haskell",
          "signature": "HRep f (HFix f) a",
          "source": "src/Generics-Pointless-HFunctors.html#HFix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "hOut",
          "package": "pointless-haskell",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:hOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "hinn",
          "package": "pointless-haskell",
          "signature": "H t t a -\u003e t a",
          "source": "src/Generics-Pointless-HFunctors.html#hinn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "hinn",
          "normalized": "H a a b-\u003ea b",
          "package": "pointless-haskell",
          "signature": "H t t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:hinn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "hout",
          "package": "pointless-haskell",
          "signature": "t a -\u003e H t t a",
          "source": "src/Generics-Pointless-HFunctors.html#hout",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "hout",
          "normalized": "a b-\u003eH a a b",
          "package": "pointless-haskell",
          "signature": "t a-\u003eH t t a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:hout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "reduce",
          "package": "pointless-haskell",
          "signature": "AnnH f -\u003e HRep f g :~\u003e g",
          "source": "src/Generics-Pointless-HFunctors.html#reduce",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "reduce",
          "normalized": "AnnH a-\u003eHRep a b b",
          "package": "pointless-haskell",
          "signature": "AnnH f-\u003eHRep f g g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "reduce'",
          "package": "pointless-haskell",
          "signature": "AnnH f -\u003e Ann (Fix g) -\u003e HRep f g :~\u003e g",
          "source": "src/Generics-Pointless-HFunctors.html#reduce%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "reduce'",
          "normalized": "AnnH a-\u003eAnn(Fix b)-\u003eHRep a b b",
          "package": "pointless-haskell",
          "signature": "AnnH f-\u003eAnn(Fix g)-\u003eHRep f g g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:reduce-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "unCompH",
          "package": "pointless-haskell",
          "signature": "g (h f a)",
          "source": "src/Generics-Pointless-HFunctors.html#%3A%40~%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "unCompH",
          "package": "pointless-haskell",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:unCompH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "unConsH",
          "package": "pointless-haskell",
          "signature": "c",
          "source": "src/Generics-Pointless-HFunctors.html#HConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "unConsH",
          "package": "pointless-haskell",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:unConsH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "unFunH",
          "package": "pointless-haskell",
          "signature": "g a",
          "source": "src/Generics-Pointless-HFunctors.html#HFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "unFunH",
          "package": "pointless-haskell",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:unFunH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "unIdH",
          "package": "pointless-haskell",
          "signature": "f a",
          "source": "src/Generics-Pointless-HFunctors.html#HId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "unIdH",
          "package": "pointless-haskell",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:unIdH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Pointless.HFunctors",
          "name": "unParH",
          "package": "pointless-haskell",
          "signature": "a",
          "source": "src/Generics-Pointless-HFunctors.html#HParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Pointless HFunctors",
          "module": "Generics.Pointless.HFunctors",
          "name": "unParH",
          "package": "pointless-haskell",
          "partial": "Par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-HFunctors.html#v:unParH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module lifts many standard combinators used for point-free programming to combinators over monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "MonadCombinators",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-MonadCombinators.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module lifts many standard combinators used for point-free programming to combinators over monads",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "MonadCombinators",
          "package": "pointless-haskell",
          "partial": "Monad Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic sum combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(-||-)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e m b) -\u003e (c -\u003e m d) -\u003e Either a c -\u003e m (Either b d)",
          "source": "src/Generics-Pointless-MonadCombinators.html#-%7C%7C-",
          "type": "function"
        },
        "index": {
          "description": "The monadic sum combinator",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(-||-) -||-",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eEither a d-\u003eb(Either c e)",
          "package": "pointless-haskell",
          "signature": "(a-\u003em b)-\u003e(c-\u003em d)-\u003eEither a c-\u003em(Either b d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:-45--124--124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic split combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(/|\\)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e a -\u003e m (b, c)",
          "source": "src/Generics-Pointless-MonadCombinators.html#%2F%7C%5C",
          "type": "function"
        },
        "index": {
          "description": "The monadic split combinator",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(/|\\) /|\\",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003ea-\u003eb(c,d)",
          "package": "pointless-haskell",
          "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003ea-\u003em(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:-47--124--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe left-to-right monadic binding combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(\u003c\u003c=)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Generics-Pointless-MonadCombinators.html#%3C%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "The left-to-right monadic binding combinator",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(\u003c\u003c=) \u003c\u003c=",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "pointless-haskell",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:-60--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic product combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(\u003e|\u003c)",
          "package": "pointless-haskell",
          "signature": "(a -\u003e m c) -\u003e (b -\u003e m d) -\u003e (a, b) -\u003e m (c, d)",
          "source": "src/Generics-Pointless-MonadCombinators.html#%3E%7C%3C",
          "type": "function"
        },
        "index": {
          "description": "The monadic product combinator",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "(\u003e|\u003c) \u003e|\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(a,d)-\u003eb(c,e)",
          "package": "pointless-haskell",
          "signature": "(a-\u003em c)-\u003e(b-\u003em d)-\u003e(a,b)-\u003em(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:-62--124--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigher-order monadic binding.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "bind",
          "package": "pointless-haskell",
          "signature": "(a -\u003e m b, m a) -\u003e m b",
          "source": "src/Generics-Pointless-MonadCombinators.html#bind",
          "type": "function"
        },
        "index": {
          "description": "Higher-order monadic binding",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "bind",
          "normalized": "(a-\u003eb c,b a)-\u003eb c",
          "package": "pointless-haskell",
          "signature": "(a-\u003em b,m a)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic fusion combinator.\n Performs left-to-right distribution of a strong monad over a product.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mfuse",
          "package": "pointless-haskell",
          "signature": "(m a, m b) -\u003e m (a, b)",
          "source": "src/Generics-Pointless-MonadCombinators.html#mfuse",
          "type": "function"
        },
        "index": {
          "description": "The monadic fusion combinator Performs left-to-right distribution of strong monad over product",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mfuse",
          "normalized": "(a b,a c)-\u003ea(b,c)",
          "package": "pointless-haskell",
          "signature": "(m a,m b)-\u003em(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:mfuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic left exponentiation combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mlexp",
          "package": "pointless-haskell",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "source": "src/Generics-Pointless-MonadCombinators.html#mlexp",
          "type": "function"
        },
        "index": {
          "description": "The monadic left exponentiation combinator",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mlexp",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "pointless-haskell",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:mlexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic right exponentiation combinator.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mrexp",
          "package": "pointless-haskell",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "source": "src/Generics-Pointless-MonadCombinators.html#mrexp",
          "type": "function"
        },
        "index": {
          "description": "The monadic right exponentiation combinator",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mrexp",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "pointless-haskell",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:mrexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strength combinator for strong monads.\n In Haskell, every monad is a strong monad: \u003ca\u003ehttp://comonad.com/reader/2008/deriving-strength-from-laziness/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mstrength",
          "package": "pointless-haskell",
          "signature": "(b, m a) -\u003e m (b, a)",
          "source": "src/Generics-Pointless-MonadCombinators.html#mstrength",
          "type": "function"
        },
        "index": {
          "description": "The strength combinator for strong monads In Haskell every monad is strong monad http comonad.com reader deriving-strength-from-laziness",
          "hierarchy": "Generics Pointless MonadCombinators",
          "module": "Generics.Pointless.MonadCombinators",
          "name": "mstrength",
          "normalized": "(a,b c)-\u003eb(a,c)",
          "package": "pointless-haskell",
          "signature": "(b,m a)-\u003em(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-MonadCombinators.html#v:mstrength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines generic GHood observations for user-defined data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "Functors",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Observe-Functors.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines generic GHood observations for user-defined data types",
          "hierarchy": "Generics Pointless Observe Functors",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "Functors",
          "package": "pointless-haskell",
          "partial": "Functors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-Functors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for mapping observations over functor representations.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "FunctorO",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Observe-Functors.html#FunctorO",
          "type": "class"
        },
        "index": {
          "description": "Class for mapping observations over functor representations",
          "hierarchy": "Generics Pointless Observe Functors",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "FunctorO",
          "package": "pointless-haskell",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-Functors.html#t:FunctorO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps an observation over a functor representation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "fmapO",
          "package": "pointless-haskell",
          "signature": "Ann (Fix f) -\u003e (x -\u003e ObserverM y) -\u003e Rep f x -\u003e ObserverM (Rep f y)",
          "source": "src/Generics-Pointless-Observe-Functors.html#fmapO",
          "type": "method"
        },
        "index": {
          "description": "Maps an observation over functor representation",
          "hierarchy": "Generics Pointless Observe Functors",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "fmapO",
          "normalized": "Ann(Fix a)-\u003e(b-\u003eObserverM c)-\u003eRep a b-\u003eObserverM(Rep a c)",
          "package": "pointless-haskell",
          "signature": "Ann(Fix f)-\u003e(x-\u003eObserverM y)-\u003eRep f x-\u003eObserverM(Rep f y)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-Functors.html#v:fmapO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a type representation for a functor. This is used for showing the functor for reursion trees.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "functorOf",
          "package": "pointless-haskell",
          "signature": "Ann (Fix f) -\u003e String",
          "source": "src/Generics-Pointless-Observe-Functors.html#functorOf",
          "type": "method"
        },
        "index": {
          "description": "Derives type representation for functor This is used for showing the functor for reursion trees",
          "hierarchy": "Generics Pointless Observe Functors",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "functorOf",
          "normalized": "Ann(Fix a)-\u003eString",
          "package": "pointless-haskell",
          "partial": "Of",
          "signature": "Ann(Fix f)-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-Functors.html#v:functorOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolytypic mapping of observations.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "omap",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (x -\u003e ObserverM y) -\u003e F a x -\u003e ObserverM (F a y)",
          "source": "src/Generics-Pointless-Observe-Functors.html#omap",
          "type": "function"
        },
        "index": {
          "description": "Polytypic mapping of observations",
          "hierarchy": "Generics Pointless Observe Functors",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "omap",
          "normalized": "Ann a-\u003e(b-\u003eObserverM c)-\u003eF a b-\u003eObserverM(F a c)",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(x-\u003eObserverM y)-\u003eF a x-\u003eObserverM(F a y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-Functors.html#v:omap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch values of a functor. Since the fixpoint of a functor recurses over himself, we cannot use the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for functor values applied to their fixpoint.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "watch",
          "package": "pointless-haskell",
          "signature": "Ann (Fix f) -\u003e Ann x -\u003e Rep f x -\u003e String",
          "source": "src/Generics-Pointless-Observe-Functors.html#watch",
          "type": "method"
        },
        "index": {
          "description": "Watch values of functor Since the fixpoint of functor recurses over himself we cannot use the Show instance for functor values applied to their fixpoint",
          "hierarchy": "Generics Pointless Observe Functors",
          "module": "Generics.Pointless.Observe.Functors",
          "name": "watch",
          "normalized": "Ann(Fix a)-\u003eAnn b-\u003eRep a b-\u003eString",
          "package": "pointless-haskell",
          "signature": "Ann(Fix f)-\u003eAnn x-\u003eRep f x-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-Functors.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module redefines recursion patterns with support for GHood observation of intermediate data structures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "RecursionPatterns",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module redefines recursion patterns with support for GHood observation of intermediate data structures",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "RecursionPatterns",
          "package": "pointless-haskell",
          "partial": "Recursion Patterns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of accumulations as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "accumO",
          "package": "pointless-haskell",
          "signature": "Ann d -\u003e ((F a a, b) -\u003e F d (a, b)) -\u003e (F (Accum d b) c -\u003e c) -\u003e (a, b) -\u003e c",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#accumO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of accumulations as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "accumO",
          "normalized": "Ann a-\u003e((F b b,c)-\u003eF a(b,c))-\u003e(F(Accum a c)d-\u003ed)-\u003e(b,c)-\u003ed",
          "package": "pointless-haskell",
          "signature": "Ann d-\u003e((F a a,b)-\u003eF d(a,b))-\u003e(F(Accum d b)c-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:accumO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of anamorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "anaO",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b a) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#anaO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of anamorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "anaO",
          "normalized": "Ann a-\u003e(b-\u003eF a b)-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(a-\u003eF b a)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:anaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of apomorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "apoO",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b (Either a b)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#apoO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of apomorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "apoO",
          "normalized": "Ann a-\u003e(b-\u003eF a(Either b a))-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(a-\u003eF b(Either a b))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:apoO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of catamorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "cataO",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a b -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#cataO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of catamorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "cataO",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a b-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:cataO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of chronomorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "chronoO",
          "package": "pointless-haskell",
          "signature": "Ann c -\u003e (F c (Histo c b) -\u003e b) -\u003e (a -\u003e F c (Futu c a)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#chronoO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of chronomorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "chronoO",
          "normalized": "Ann a-\u003e(F a(Histo a b)-\u003eb)-\u003e(c-\u003eF a(Futu a c))-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann c-\u003e(F c(Histo c b)-\u003eb)-\u003e(a-\u003eF c(Futu c a))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:chronoO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of dynamorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "dynaO",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (F b (Histo b c) -\u003e c) -\u003e (a -\u003e F b a) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#dynaO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of dynamorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "dynaO",
          "normalized": "Ann a-\u003e(F a(Histo a b)-\u003eb)-\u003e(c-\u003eF a c)-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(F b(Histo b c)-\u003ec)-\u003e(a-\u003eF b a)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:dynaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of futumorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "futuO",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b (Futu b a)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#futuO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of futumorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "futuO",
          "normalized": "Ann a-\u003e(b-\u003eF a(Futu a b))-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(a-\u003eF b(Futu b a))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:futuO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of histomorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "histoO",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a (Histo a c) -\u003e c) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#histoO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of histomorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "histoO",
          "normalized": "Ann a-\u003e(F a(Histo a b)-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a(Histo a c)-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:histoO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of hylomorphisms with observation of the intermediate data type.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "hyloO",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (F b c -\u003e c) -\u003e (a -\u003e F b a) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#hyloO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of hylomorphisms with observation of the intermediate data type",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "hyloO",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003e(c-\u003eF a c)-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(F b c-\u003ec)-\u003e(a-\u003eF b a)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:hyloO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of paramorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "paraO",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a (b, a) -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#paraO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of paramorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "paraO",
          "normalized": "Ann a-\u003e(F a(b,a)-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a(b,a)-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:paraO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of zygomorphisms as observable hylomorphisms.\n\u003c/p\u003e",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "zygoO",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a b -\u003e b) -\u003e (F (Zygo a b) b -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-Observe-RecursionPatterns.html#zygoO",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of zygomorphisms as observable hylomorphisms",
          "hierarchy": "Generics Pointless Observe RecursionPatterns",
          "module": "Generics.Pointless.Observe.RecursionPatterns",
          "name": "zygoO",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003e(F(Zygo a b)b-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a b-\u003eb)-\u003e(F(Zygo a b)b-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-Observe-RecursionPatterns.html#v:zygoO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless Haskell:\n point-free programming with recursion patterns as hylomorphisms\n\u003c/p\u003e\u003cp\u003eThis module defines recursion patterns as hylomorphisms.\n\u003c/p\u003e\u003cp\u003eRecursion patterns can be seen as high-order functions that encapsulate typical forms of recursion.\n The hylomorphism recursion pattern was first defined in \u003ca\u003ehttp://research.microsoft.com/~emeijer/Papers/CWIReport.pdf\u003c/a\u003e,\n along with its relation with derived more specific recursion patterns such as catamorphisms, anamorphisms and paramorphisms.\n\u003c/p\u003e\u003cp\u003eThe seminal paper that introduced point-free programming and defined many of the laws for catamorphisms and anamorphisms\n can be found in \u003ca\u003ehttp://eprints.eemcs.utwente.nl/7281/01/db-utwente-40501F46.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMore complex and exotic recursion patterns have been discovered later, such as accumulations, apomorphisms, zygomorphisms,\n histomorphisms, futumorphisms, dynamorphisms or chronomorphisms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "RecursionPatterns",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless Haskell point-free programming with recursion patterns as hylomorphisms This module defines recursion patterns as hylomorphisms Recursion patterns can be seen as high-order functions that encapsulate typical forms of recursion The hylomorphism recursion pattern was first defined in http research.microsoft.com emeijer Papers CWIReport.pdf along with its relation with derived more specific recursion patterns such as catamorphisms anamorphisms and paramorphisms The seminal paper that introduced point-free programming and defined many of the laws for catamorphisms and anamorphisms can be found in http eprints.eemcs.utwente.nl db-utwente-40501F46.pdf More complex and exotic recursion patterns have been discovered later such as accumulations apomorphisms zygomorphisms histomorphisms futumorphisms dynamorphisms or chronomorphisms",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "RecursionPatterns",
          "package": "pointless-haskell",
          "partial": "Recursion Patterns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn accumulations we add an extra annotation \u003ccode\u003eb\u003c/code\u003e to the base functor of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Accum",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html#Accum",
          "type": "type"
        },
        "index": {
          "description": "In accumulations we add an extra annotation to the base functor of type",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Accum",
          "package": "pointless-haskell",
          "partial": "Accum",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#t:Accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functor of the intermediate type of an apomorphism is the functor of the generated type \u003ccode\u003eb\u003c/code\u003e\n with an alternative annotation to itself in recursive definitions.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Apo",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html#Apo",
          "type": "type"
        },
        "index": {
          "description": "The functor of the intermediate type of an apomorphism is the functor of the generated type with an alternative annotation to itself in recursive definitions",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Apo",
          "package": "pointless-haskell",
          "partial": "Apo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#t:Apo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn futumorphisms we add an alternative annotation \u003ccode\u003ec\u003c/code\u003e to the base functor of type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Futu",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html#Futu",
          "type": "type"
        },
        "index": {
          "description": "In futumorphisms we add an alternative annotation to the base functor of type",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Futu",
          "package": "pointless-haskell",
          "partial": "Futu",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#t:Futu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn histomorphisms we add an extra annotation \u003ccode\u003ec\u003c/code\u003e to the base functor of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Histo",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html#Histo",
          "type": "type"
        },
        "index": {
          "description": "In histomorphisms we add an extra annotation to the base functor of type",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Histo",
          "package": "pointless-haskell",
          "partial": "Histo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#t:Histo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functor of the intermediate type of a paramorphism is the functor of the consumed type \u003ccode\u003ea\u003c/code\u003e\n extended with an extra annotation to itself in recursive definitions.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Para",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html#Para",
          "type": "type"
        },
        "index": {
          "description": "The functor of the intermediate type of paramorphism is the functor of the consumed type extended with an extra annotation to itself in recursive definitions",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Para",
          "package": "pointless-haskell",
          "partial": "Para",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#t:Para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn zygomorphisms we extend the recursive occurences in the base functor functor of type \u003ccode\u003ea\u003c/code\u003e with an extra annotation \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Zygo",
          "package": "pointless-haskell",
          "source": "src/Generics-Pointless-RecursionPatterns.html#Zygo",
          "type": "type"
        },
        "index": {
          "description": "In zygomorphisms we extend the recursive occurences in the base functor functor of type with an extra annotation",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "Zygo",
          "package": "pointless-haskell",
          "partial": "Zygo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#t:Zygo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of an accumulation as an hylomorphism.\n\u003c/p\u003e\u003cp\u003eAccumulations \u003ca\u003ehttp://www.fing.edu.uy/~pardo/papers/wcgp02.ps.gz\u003c/a\u003e are binary functions that use the second parameter to store intermediate results.\n\u003c/p\u003e\u003cp\u003eThe so called \u003ca\u003eaccumulation technique\u003c/a\u003e is tipically used in functional programming to derive efficient implementations of some recursive functions.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "accum",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F (Accum a b) c -\u003e c) -\u003e ((F a a, b) -\u003e F a (a, b)) -\u003e (a, b) -\u003e c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#accum",
          "type": "function"
        },
        "index": {
          "description": "Definition of an accumulation as an hylomorphism Accumulations http www.fing.edu.uy pardo papers wcgp02.ps.gz are binary functions that use the second parameter to store intermediate results The so called accumulation technique is tipically used in functional programming to derive efficient implementations of some recursive functions",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "accum",
          "normalized": "Ann a-\u003e(F(Accum a b)c-\u003ec)-\u003e((F a a,b)-\u003eF a(a,b))-\u003e(a,b)-\u003ec",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F(Accum a b)c-\u003ec)-\u003e((F a a,b)-\u003eF a(a,b))-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of an anamorphism as an hylomorphism.\n\u003c/p\u003e\u003cp\u003eAnamorphisms resembles the dual of iteration and, hence, dene the inverse of catamorphisms.\n Instead of consuming recursive types, they produce values of those types.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "ana",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b a) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#ana",
          "type": "function"
        },
        "index": {
          "description": "Definition of an anamorphism as an hylomorphism Anamorphisms resembles the dual of iteration and hence dene the inverse of catamorphisms Instead of consuming recursive types they produce values of those types",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "ana",
          "normalized": "Ann a-\u003e(b-\u003eF a b)-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(a-\u003eF b a)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:ana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "anaRec",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b a) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#anaRec",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of an anamorphism",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "anaRec",
          "normalized": "Ann a-\u003e(b-\u003eF a b)-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "partial": "Rec",
          "signature": "Ann b-\u003e(a-\u003eF b a)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:anaRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of an apomorphism as an hylomorphism.\n\u003c/p\u003e\u003cp\u003eApomorphisms are the dual recursion patterns of paramorphisms, and therefore they can express functions defined by primitive corecursion.\n\u003c/p\u003e\u003cp\u003eThey were introduced independently in \u003ca\u003ehttp://www.cs.ut.ee/~varmo/papers/nwpt97.ps.gz\u003c/a\u003e and \u003cem\u003eProgram Construction and Generation Based on Recursive Types, MSc thesis\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "apo",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b (Either a b)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#apo",
          "type": "function"
        },
        "index": {
          "description": "Definition of an apomorphism as an hylomorphism Apomorphisms are the dual recursion patterns of paramorphisms and therefore they can express functions defined by primitive corecursion They were introduced independently in http www.cs.ut.ee varmo papers nwpt97.ps.gz and Program Construction and Generation Based on Recursive Types MSc thesis",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "apo",
          "normalized": "Ann a-\u003e(b-\u003eF a(Either b a))-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(a-\u003eF b(Either a b))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:apo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of an apomorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "apoRec",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b (Either a b)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#apoRec",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of an apomorphism",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "apoRec",
          "normalized": "Ann a-\u003e(b-\u003eF a(Either b a))-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "partial": "Rec",
          "signature": "Ann b-\u003e(a-\u003eF b(Either a b))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:apoRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a catamorphism as an hylomorphism.\n\u003c/p\u003e\u003cp\u003eCatamorphisms model the fundamental pattern of iteration, where constructors for recursive datatypes are repeatedly consumed by arbitrary functions.\n They are usually called folds.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "cata",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a b -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#cata",
          "type": "function"
        },
        "index": {
          "description": "Definition of catamorphism as an hylomorphism Catamorphisms model the fundamental pattern of iteration where constructors for recursive datatypes are repeatedly consumed by arbitrary functions They are usually called folds",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "cata",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a b-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:cata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of a catamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "cataRec",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a b -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#cataRec",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of catamorphism",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "cataRec",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "partial": "Rec",
          "signature": "Ann a-\u003e(F a b-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:cataRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a chronomorphism as an hylomorphism.\n\u003c/p\u003e\u003cp\u003eThis recursion pattern subsumes histomorphisms, futumorphisms and dynamorphisms\n and can be seen as the natural hylomorphism generalization from composing an histomorphism after a futumorphism.\n Therefore, chronomorphisms can 'look back' when consuming a type and 'jump forward' when generating one, via it's fold/unfold operations, respectively.\n\u003c/p\u003e\u003cp\u003eThe notion of chronomorphism is a recent recursion pattern (at least known as such).\n The first and single reference available is \u003ca\u003ehttp://comonad.com/reader/2008/time-for-chronomorphisms/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "chrono",
          "package": "pointless-haskell",
          "signature": "Ann c -\u003e (F c (Histo c b) -\u003e b) -\u003e (a -\u003e F c (Futu c a)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#chrono",
          "type": "function"
        },
        "index": {
          "description": "Definition of chronomorphism as an hylomorphism This recursion pattern subsumes histomorphisms futumorphisms and dynamorphisms and can be seen as the natural hylomorphism generalization from composing an histomorphism after futumorphism Therefore chronomorphisms can look back when consuming type and jump forward when generating one via it fold unfold operations respectively The notion of chronomorphism is recent recursion pattern at least known as such The first and single reference available is http comonad.com reader time-for-chronomorphisms",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "chrono",
          "normalized": "Ann a-\u003e(F a(Histo a b)-\u003eb)-\u003e(c-\u003eF a(Futu a c))-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann c-\u003e(F c(Histo c b)-\u003eb)-\u003e(a-\u003eF c(Futu c a))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:chrono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a dynamorphism as an hylomorphisms.\n\u003c/p\u003e\u003cp\u003eDynamorphisms (\u003ca\u003ehttp://math.ut.ee/~eugene/kabanov-vene-mpc-06.pdf\u003c/a\u003e) are a more general form of histomorphisms for capturing dynaming programming constructions.\n\u003c/p\u003e\u003cp\u003eInstead of following the recursion pattern of the input via structural recursion (as in histomorphisms),\n dynamorphisms allow us to reuse the annotated structure in a bottom-up approach and avoiding rebuilding\n it every time an annotation is needed, what provides a more efficient dynamic algorithm.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "dyna",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (F b (Histo b c) -\u003e c) -\u003e (a -\u003e F b a) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#dyna",
          "type": "function"
        },
        "index": {
          "description": "Definition of dynamorphism as an hylomorphisms Dynamorphisms http math.ut.ee eugene kabanov-vene-mpc-06.pdf are more general form of histomorphisms for capturing dynaming programming constructions Instead of following the recursion pattern of the input via structural recursion as in histomorphisms dynamorphisms allow us to reuse the annotated structure in bottom-up approach and avoiding rebuilding it every time an annotation is needed what provides more efficient dynamic algorithm",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "dyna",
          "normalized": "Ann a-\u003e(F a(Histo a b)-\u003eb)-\u003e(c-\u003eF a c)-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(F b(Histo b c)-\u003ec)-\u003e(a-\u003eF b a)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:dyna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Fixpoint combinator as an hylomorphism.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e is a fixpoint combinator if \u003ccode\u003e\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAfter expanding the denitions of \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e we see that this corresponds to the expected pointwise equation \u003ccode\u003e\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e f = f (\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e f)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "fix",
          "package": "pointless-haskell",
          "signature": "(a -\u003e a) -\u003e a",
          "source": "src/Generics-Pointless-RecursionPatterns.html#fix",
          "type": "function"
        },
        "index": {
          "description": "The Fixpoint combinator as an hylomorphism fix is fixpoint combinator if fix app id fix After expanding the denitions of and app we see that this corresponds to the expected pointwise equation fix fix",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "fix",
          "normalized": "(a-\u003ea)-\u003ea",
          "package": "pointless-haskell",
          "signature": "(a-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a futumorphism as an hylomorphism (as long as the anamorphism is defined as an hylomorphism).\n\u003c/p\u003e\u003cp\u003eFutumorphisms are the dual of histomorphisms and are proposed as 'cocourse-of-argument' coiterators by their creators (\u003ca\u003ehttp://cs.ioc.ee/~tarmo/papers/inf.ps.gz\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eIn the same fashion as histomorphisms, it allows to seed the gene with multiple levels of depth instead of having to do 'all at once' with an anamorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "futu",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (a -\u003e F b (Futu b a)) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#futu",
          "type": "function"
        },
        "index": {
          "description": "Definition of futumorphism as an hylomorphism as long as the anamorphism is defined as an hylomorphism Futumorphisms are the dual of histomorphisms and are proposed as cocourse-of-argument coiterators by their creators http cs.ioc.ee tarmo papers inf.ps.gz In the same fashion as histomorphisms it allows to seed the gene with multiple levels of depth instead of having to do all at once with an anamorphism",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "futu",
          "normalized": "Ann a-\u003e(b-\u003eF a(Futu a b))-\u003eb-\u003ea",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(a-\u003eF b(Futu b a))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:futu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of an histomorphism as an hylomorphism (as long as the catamorphism is defined as an hylomorphism).\n\u003c/p\u003e\u003cp\u003eHistomorphisms (\u003ca\u003ehttp://cs.ioc.ee/~tarmo/papers/inf.ps.gz\u003c/a\u003e) capture the powerfull schemes of course-of-value iteration, and differ from catamorphisms for being able to apply the gene function at a deeper depth of recursion.\n In other words, they allow to reuse sub-sub constructor results.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "histo",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a (Histo a c) -\u003e c) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#histo",
          "type": "function"
        },
        "index": {
          "description": "Definition of an histomorphism as an hylomorphism as long as the catamorphism is defined as an hylomorphism Histomorphisms http cs.ioc.ee tarmo papers inf.ps.gz capture the powerfull schemes of course-of-value iteration and differ from catamorphisms for being able to apply the gene function at deeper depth of recursion In other words they allow to reuse sub-sub constructor results",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "histo",
          "normalized": "Ann a-\u003e(F a(Histo a b)-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a(Histo a c)-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:histo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of an hylomorphism\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "hylo",
          "package": "pointless-haskell",
          "signature": "Ann b -\u003e (F b c -\u003e c) -\u003e (a -\u003e F b a) -\u003e a -\u003e c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#hylo",
          "type": "function"
        },
        "index": {
          "description": "Definition of an hylomorphism",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "hylo",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003e(c-\u003eF a c)-\u003ec-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann b-\u003e(F b c-\u003ec)-\u003e(a-\u003eF b a)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:hylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003einnl\u003c/a\u003e\u003c/code\u003e packs the functor of a futumorphism from the base functor.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "innl",
          "package": "pointless-haskell",
          "signature": "c -\u003e Futu b c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#innl",
          "type": "function"
        },
        "index": {
          "description": "The combinator innl packs the functor of futumorphism from the base functor",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "innl",
          "normalized": "a-\u003eFutu b a",
          "package": "pointless-haskell",
          "signature": "c-\u003eFutu b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:innl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003einnr\u003c/a\u003e\u003c/code\u003e packs the functor of an futumorphism from an annotation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "innr",
          "package": "pointless-haskell",
          "signature": "F b (Futu b c) -\u003e Futu b c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#innr",
          "type": "function"
        },
        "index": {
          "description": "The combinator innr packs the functor of an futumorphism from an annotation",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "innr",
          "normalized": "F a(Futu a b)-\u003eFutu a b",
          "package": "pointless-haskell",
          "signature": "F b(Futu b c)-\u003eFutu b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:innr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003eoutl\u003c/a\u003e\u003c/code\u003e unpacks the functor of an histomorphism and selects the annotation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "outl",
          "package": "pointless-haskell",
          "signature": "Histo a c -\u003e c",
          "source": "src/Generics-Pointless-RecursionPatterns.html#outl",
          "type": "function"
        },
        "index": {
          "description": "The combinator outl unpacks the functor of an histomorphism and selects the annotation",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "outl",
          "normalized": "Histo a b-\u003eb",
          "package": "pointless-haskell",
          "signature": "Histo a c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:outl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003eoutr\u003c/a\u003e\u003c/code\u003e unpacks the functor of an histomorphism and discards the annotation.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "outr",
          "package": "pointless-haskell",
          "signature": "Histo a c -\u003e F a (Histo a c)",
          "source": "src/Generics-Pointless-RecursionPatterns.html#outr",
          "type": "function"
        },
        "index": {
          "description": "The combinator outr unpacks the functor of an histomorphism and discards the annotation",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "outr",
          "normalized": "Histo a b-\u003eF a(Histo a b)",
          "package": "pointless-haskell",
          "signature": "Histo a c-\u003eF a(Histo a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:outr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a paramorphism.\n\u003c/p\u003e\u003cp\u003eParamorphisms supply the gene of a catamorphism with a recursively computed copy of the input.\n\u003c/p\u003e\u003cp\u003eThe first introduction to paramorphisms is reported in \u003ca\u003ehttp://www.cs.uu.nl/research/techreps/repo/CS-1990/1990-04.pdf\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "para",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a (b, a) -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#para",
          "type": "function"
        },
        "index": {
          "description": "Definition of paramorphism Paramorphisms supply the gene of catamorphism with recursively computed copy of the input The first introduction to paramorphisms is reported in http www.cs.uu.nl research techreps repo CS-1990 pdf",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "para",
          "normalized": "Ann a-\u003e(F a(b,a)-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a(b,a)-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive definition of a paramorphism.\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "paraRec",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a (b, a) -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#paraRec",
          "type": "function"
        },
        "index": {
          "description": "Recursive definition of paramorphism",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "paraRec",
          "normalized": "Ann a-\u003e(F a(b,a)-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "partial": "Rec",
          "signature": "Ann a-\u003e(F a(b,a)-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:paraRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a zygomorphism as an hylomorphism.\n\u003c/p\u003e\u003cp\u003eZygomorphisms were introduced in \u003ca\u003ehttp://dissertations.ub.rug.nl/faculties/science/1990/g.r.malcolm/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThey can be seen as the asymmetric form of mutual iteration, where both a data consumer and an auxiliary function are defined (\u003ca\u003ehttp://www.fing.edu.uy/~pardo/papers/njc01.ps.gz\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "zygo",
          "package": "pointless-haskell",
          "signature": "Ann a -\u003e (F a b -\u003e b) -\u003e (F (Zygo a b) b -\u003e b) -\u003e a -\u003e b",
          "source": "src/Generics-Pointless-RecursionPatterns.html#zygo",
          "type": "function"
        },
        "index": {
          "description": "Definition of zygomorphism as an hylomorphism Zygomorphisms were introduced in http dissertations.ub.rug.nl faculties science g.r.malcolm They can be seen as the asymmetric form of mutual iteration where both data consumer and an auxiliary function are defined http www.fing.edu.uy pardo papers njc01.ps.gz",
          "hierarchy": "Generics Pointless RecursionPatterns",
          "module": "Generics.Pointless.RecursionPatterns",
          "name": "zygo",
          "normalized": "Ann a-\u003e(F a b-\u003eb)-\u003e(F(Zygo a b)b-\u003eb)-\u003ea-\u003eb",
          "package": "pointless-haskell",
          "signature": "Ann a-\u003e(F a b-\u003eb)-\u003e(F(Zygo a b)b-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-haskell/docs/Generics-Pointless-RecursionPatterns.html#v:zygo"
      }
    }
  ]
]