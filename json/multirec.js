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
        "word": "multirec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the base of the multirec library. It defines the view of a\n family of datatypes: All the datatypes of the family are represented as\n indexed functors that are built up from the structure types defined in this\n module. Furthermore, in order to use the library for a family, conversion\n functions have to be defined between the original datatypes and their\n representation. The type class that holds these conversion functions are\n also defined here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "Base",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the base of the multirec library It defines the view of family of datatypes All the datatypes of the family are represented as indexed functors that are built up from the structure types defined in this module Furthermore in order to use the library for family conversion functions have to be defined between the original datatypes and their representation The type class that holds these conversion functions are also defined here",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "Base",
          "package": "multirec",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents products (sequences of fields of a constructor).\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": ":*:",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "Represents products sequences of fields of constructor",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": ":*:",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents sums (choices between constructors).\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": ":+:",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Represents sums choices between constructors",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": ":+:",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used to indicate the type that a\n particular constructor injects to.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": ":\u003e:",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#%3A%3E%3A",
          "type": "data"
        },
        "index": {
          "description": "Is used to indicate the type that particular constructor injects to",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": ":\u003e:",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t::-62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents composition with functors\n of kind * -\u003e *.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": ":.:",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#%3A.%3A",
          "type": "data"
        },
        "index": {
          "description": "Represents composition with functors of kind",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": ":.:",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents constructors.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "C",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#C",
          "type": "data"
        },
        "index": {
          "description": "Represents constructors",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "C",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for the members of a family.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "El",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#El",
          "type": "class"
        },
        "index": {
          "description": "Class for the members of family",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "El",
          "package": "multirec",
          "partial": "El",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:El"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemi-decidable equality for types of a family.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "EqS",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#EqS",
          "type": "class"
        },
        "index": {
          "description": "Semi-decidable equality for types of family",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "EqS",
          "package": "multirec",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:EqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass that contains the shallow conversion functions for a family.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "Fam",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#Fam",
          "type": "class"
        },
        "index": {
          "description": "Class that contains the shallow conversion functions for family",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "Fam",
          "package": "multirec",
          "partial": "Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:Fam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents recursive positions. The first argument indicates\n which type to recurse on.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "I",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#I",
          "type": "data"
        },
        "index": {
          "description": "Represents recursive positions The first argument indicates which type to recurse on",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "I",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlifted version of \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "I0",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#I0",
          "type": "newtype"
        },
        "index": {
          "description": "Unlifted version of",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "I0",
          "package": "multirec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:I0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents constant types that do not belong to the family.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "K",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#K",
          "type": "data"
        },
        "index": {
          "description": "Represents constant types that do not belong to the family",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "K",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlifted version of \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "K0",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#K0",
          "type": "newtype"
        },
        "index": {
          "description": "Unlifted version of",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "K0",
          "package": "multirec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:K0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType family describing the pattern functor of a family.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "PF",
          "package": "multirec",
          "signature": "PF",
          "type": "function"
        },
        "index": {
          "description": "Type family describing the pattern functor of family",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "PF",
          "package": "multirec",
          "partial": "PF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:PF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents constructors without fields.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "U",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Base.html#U",
          "type": "data"
        },
        "index": {
          "description": "Represents constructors without fields",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "U",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": ":*:",
          "package": "multirec",
          "signature": "(f r ix) :*: (g r ix)",
          "source": "src/Generics-MultiRec-Base.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": ":*:",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "C",
          "package": "multirec",
          "signature": "f r ix -\u003e C c f r ix",
          "source": "src/Generics-MultiRec-Base.html#C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "C",
          "normalized": "a b c-\u003eC d a b c",
          "package": "multirec",
          "signature": "f r ix-\u003eC c f r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "D",
          "package": "multirec",
          "signature": "D",
          "source": "src/Generics-MultiRec-Base.html#%3A.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "D",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "I",
          "package": "multirec",
          "signature": "I",
          "source": "src/Generics-MultiRec-Base.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "I",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "I0",
          "package": "multirec",
          "signature": "I0",
          "source": "src/Generics-MultiRec-Base.html#I0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "I0",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:I0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "K",
          "package": "multirec",
          "signature": "K",
          "source": "src/Generics-MultiRec-Base.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "K",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "K0",
          "package": "multirec",
          "signature": "K0",
          "source": "src/Generics-MultiRec-Base.html#K0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "K0",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:K0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "L",
          "package": "multirec",
          "signature": "L (f r ix)",
          "source": "src/Generics-MultiRec-Base.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "L",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "R",
          "package": "multirec",
          "signature": "R (g r ix)",
          "source": "src/Generics-MultiRec-Base.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "R",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "Tag",
          "package": "multirec",
          "signature": "f r ix -\u003e (f :\u003e: ix) r ix",
          "source": "src/Generics-MultiRec-Base.html#%3A%3E%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "Tag",
          "normalized": "a b c-\u003e(a c)b c",
          "package": "multirec",
          "partial": "Tag",
          "signature": "f r ix-\u003e(f ix)r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "U",
          "package": "multirec",
          "signature": "U",
          "source": "src/Generics-MultiRec-Base.html#U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "U",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "eqS",
          "package": "multirec",
          "signature": "phi ix -\u003e phi ix' -\u003e Maybe (ix :=: ix')",
          "source": "src/Generics-MultiRec-Base.html#eqS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "eqS",
          "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
          "package": "multirec",
          "signature": "phi ix-\u003ephi ix'-\u003eMaybe(ix ix')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:eqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "from",
          "package": "multirec",
          "signature": "phi ix -\u003e ix -\u003e PF phi I0 ix",
          "source": "src/Generics-MultiRec-Base.html#from",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "from",
          "normalized": "a b-\u003eb-\u003ePF a I b",
          "package": "multirec",
          "signature": "phi ix-\u003eix-\u003ePF phi I ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards-compatibility: a synonym for \u003ccode\u003e\u003ca\u003eproof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "index",
          "package": "multirec",
          "signature": "phi ix",
          "source": "src/Generics-MultiRec-Base.html#index",
          "type": "function"
        },
        "index": {
          "description": "For backwards-compatibility synonym for proof",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "index",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "proof",
          "package": "multirec",
          "signature": "phi ix",
          "source": "src/Generics-MultiRec-Base.html#proof",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "proof",
          "package": "multirec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "to",
          "package": "multirec",
          "signature": "phi ix -\u003e PF phi I0 ix -\u003e ix",
          "source": "src/Generics-MultiRec-Base.html#to",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "to",
          "normalized": "a b-\u003ePF a I b-\u003eb",
          "package": "multirec",
          "signature": "phi ix-\u003ePF phi I ix-\u003eix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "unC",
          "package": "multirec",
          "signature": "C c f r ix -\u003e f r ix",
          "source": "src/Generics-MultiRec-Base.html#unC",
          "type": "function"
        },
        "index": {
          "description": "Destructor for",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unC",
          "normalized": "C a b c d-\u003eb c d",
          "package": "multirec",
          "signature": "C c f r ix-\u003ef r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "unD",
          "package": "multirec",
          "signature": "f (g r ix)",
          "source": "src/Generics-MultiRec-Base.html#%3A.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unD",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "unI",
          "package": "multirec",
          "signature": "r xi",
          "source": "src/Generics-MultiRec-Base.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unI",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "unI0",
          "package": "multirec",
          "signature": "a",
          "source": "src/Generics-MultiRec-Base.html#I0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unI0",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unI0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "unK",
          "package": "multirec",
          "signature": "a",
          "source": "src/Generics-MultiRec-Base.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unK",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Base",
          "name": "unK0",
          "package": "multirec",
          "signature": "a",
          "source": "src/Generics-MultiRec-Base.html#K0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unK0",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unK0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor for '(:\u003e:)'.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Base",
          "name": "unTag",
          "package": "multirec",
          "signature": "(f :\u003e: ix) r ix -\u003e f r ix",
          "source": "src/Generics-MultiRec-Base.html#unTag",
          "type": "function"
        },
        "index": {
          "description": "Destructor for",
          "hierarchy": "Generics MultiRec Base",
          "module": "Generics.MultiRec.Base",
          "name": "unTag",
          "normalized": "(a b)c b-\u003ea c b",
          "package": "multirec",
          "partial": "Tag",
          "signature": "(f ix)r ix-\u003ef r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Base.html#v:unTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe compos operator, inspired by\n\u003c/p\u003e\u003cp\u003eB. Bringert and A. Ranta\n   A pattern for almost compositional functions\n   ICFP 2006\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Compos",
          "name": "Compos",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Compos.html",
          "type": "module"
        },
        "index": {
          "description": "The compos operator inspired by Bringert and Ranta pattern for almost compositional functions ICFP",
          "hierarchy": "Generics MultiRec Compos",
          "module": "Generics.MultiRec.Compos",
          "name": "Compos",
          "package": "multirec",
          "partial": "Compos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Compos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal version.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Compos",
          "name": "compos",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e ix -\u003e ix) -\u003e phi ix -\u003e ix -\u003e ix",
          "source": "src/Generics-MultiRec-Compos.html#compos",
          "type": "function"
        },
        "index": {
          "description": "Normal version",
          "hierarchy": "Generics MultiRec Compos",
          "module": "Generics.MultiRec.Compos",
          "name": "compos",
          "normalized": "(a b c d-\u003ed-\u003ed)-\u003ec d-\u003ed-\u003ed",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003eix-\u003eix)-\u003ephi ix-\u003eix-\u003eix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Compos.html#v:compos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplicative version of \u003ccode\u003e\u003ca\u003ecompos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Compos",
          "name": "composA",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e ix -\u003e a ix) -\u003e phi ix -\u003e ix -\u003e a ix",
          "source": "src/Generics-MultiRec-Compos.html#composA",
          "type": "function"
        },
        "index": {
          "description": "Applicative version of compos",
          "hierarchy": "Generics MultiRec Compos",
          "module": "Generics.MultiRec.Compos",
          "name": "composA",
          "normalized": "(a b c d-\u003ed-\u003ee d)-\u003ec d-\u003ed-\u003ee d",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003eix-\u003ea ix)-\u003ephi ix-\u003eix-\u003ea ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Compos.html#v:composA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003ecompos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Compos",
          "name": "composM",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e ix -\u003e m ix) -\u003e phi ix -\u003e ix -\u003e m ix",
          "source": "src/Generics-MultiRec-Compos.html#composM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of compos",
          "hierarchy": "Generics MultiRec Compos",
          "module": "Generics.MultiRec.Compos",
          "name": "composM",
          "normalized": "(a b c d-\u003ed-\u003ee d)-\u003ec d-\u003ed-\u003ee d",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003eix-\u003em ix)-\u003ephi ix-\u003eix-\u003em ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Compos.html#v:composM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric function that returns the constructor names available in a family\n of datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.ConNames",
          "name": "ConNames",
          "package": "multirec",
          "source": "src/Generics-MultiRec-ConNames.html",
          "type": "module"
        },
        "index": {
          "description": "Generic function that returns the constructor names available in family of datatypes",
          "hierarchy": "Generics MultiRec ConNames",
          "module": "Generics.MultiRec.ConNames",
          "name": "ConNames",
          "package": "multirec",
          "partial": "Con Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-ConNames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.ConNames",
          "name": "ConNames",
          "package": "multirec",
          "source": "src/Generics-MultiRec-ConNames.html#ConNames",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec ConNames",
          "module": "Generics.MultiRec.ConNames",
          "name": "ConNames",
          "package": "multirec",
          "partial": "Con Names",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-ConNames.html#t:ConNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.ConNames",
          "name": "conNames",
          "package": "multirec",
          "signature": "phi ix -\u003e [String]",
          "source": "src/Generics-MultiRec-ConNames.html#conNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec ConNames",
          "module": "Generics.MultiRec.ConNames",
          "name": "conNames",
          "normalized": "a b-\u003e[String]",
          "package": "multirec",
          "partial": "Names",
          "signature": "phi ix-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-ConNames.html#v:conNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.ConNames",
          "name": "hconNames",
          "package": "multirec",
          "signature": "f r ix -\u003e [String]",
          "source": "src/Generics-MultiRec-ConNames.html#hconNames",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec ConNames",
          "module": "Generics.MultiRec.ConNames",
          "name": "hconNames",
          "normalized": "a b c-\u003e[String]",
          "package": "multirec",
          "partial": "Names",
          "signature": "f r ix-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-ConNames.html#v:hconNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a class for datatypes that represent data\n constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Constructor",
          "name": "Constructor",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Constructor.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains class for datatypes that represent data constructors",
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "Constructor",
          "package": "multirec",
          "partial": "Constructor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "Associativity",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Constructor.html#Associativity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "Associativity",
          "package": "multirec",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for datatypes that represent data constructors.\n For non-symbolic constructors, only \u003ccode\u003e\u003ca\u003econName\u003c/a\u003e\u003c/code\u003e has to be defined.\n The weird argument is supposed to be instantiated with \u003ccode\u003eC\u003c/code\u003e from\n base, hence the complex kind.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Constructor",
          "name": "Constructor",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Constructor.html#Constructor",
          "type": "class"
        },
        "index": {
          "description": "Class for datatypes that represent data constructors For non-symbolic constructors only conName has to be defined The weird argument is supposed to be instantiated with from base hence the complex kind",
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "Constructor",
          "package": "multirec",
          "partial": "Constructor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype to represent the fixity of a constructor. An infix declaration\n directly corresponds to an application of \u003ccode\u003e\u003ca\u003eInfix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Constructor",
          "name": "Fixity",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Constructor.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "Datatype to represent the fixity of constructor An infix declaration directly corresponds to an application of Infix",
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "Fixity",
          "package": "multirec",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "Infix",
          "package": "multirec",
          "signature": "Infix Associativity Int",
          "source": "src/Generics-MultiRec-Constructor.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "Infix",
          "package": "multirec",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "LeftAssociative",
          "package": "multirec",
          "signature": "LeftAssociative",
          "source": "src/Generics-MultiRec-Constructor.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "LeftAssociative",
          "package": "multirec",
          "partial": "Left Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:LeftAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "NotAssociative",
          "package": "multirec",
          "signature": "NotAssociative",
          "source": "src/Generics-MultiRec-Constructor.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "NotAssociative",
          "package": "multirec",
          "partial": "Not Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:NotAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "Prefix",
          "package": "multirec",
          "signature": "Prefix",
          "source": "src/Generics-MultiRec-Constructor.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "Prefix",
          "package": "multirec",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "RightAssociative",
          "package": "multirec",
          "signature": "RightAssociative",
          "source": "src/Generics-MultiRec-Constructor.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "RightAssociative",
          "package": "multirec",
          "partial": "Right Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:RightAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "conFixity",
          "package": "multirec",
          "signature": "* -\u003e *) ix -\u003e Fixity",
          "source": "src/Generics-MultiRec-Constructor.html#conFixity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "conFixity",
          "normalized": "*-\u003e*)a-\u003eFixity",
          "package": "multirec",
          "partial": "Fixity",
          "signature": "*-\u003e*)ix-\u003eFixity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:conFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Constructor",
          "name": "conName",
          "package": "multirec",
          "signature": "* -\u003e *) ix -\u003e String",
          "source": "src/Generics-MultiRec-Constructor.html#conName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Constructor",
          "module": "Generics.MultiRec.Constructor",
          "name": "conName",
          "normalized": "*-\u003e*)a-\u003eString",
          "package": "multirec",
          "partial": "Name",
          "signature": "*-\u003e*)ix-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Constructor.html#v:conName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric equality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Eq",
          "name": "Eq",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "Generic equality",
          "hierarchy": "Generics MultiRec Eq",
          "module": "Generics.MultiRec.Eq",
          "name": "Eq",
          "package": "multirec",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Eq",
          "name": "Eq1",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Eq.html#Eq1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Eq",
          "module": "Generics.MultiRec.Eq",
          "name": "Eq1",
          "package": "multirec",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Eq.html#t:Eq1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Eq",
          "name": "HEq",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Eq.html#HEq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Eq",
          "module": "Generics.MultiRec.Eq",
          "name": "HEq",
          "package": "multirec",
          "partial": "HEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Eq.html#t:HEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Eq",
          "name": "eq",
          "package": "multirec",
          "signature": "phi ix -\u003e ix -\u003e ix -\u003e Bool",
          "source": "src/Generics-MultiRec-Eq.html#eq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Eq",
          "module": "Generics.MultiRec.Eq",
          "name": "eq",
          "normalized": "a b-\u003eb-\u003eb-\u003eBool",
          "package": "multirec",
          "signature": "phi ix-\u003eix-\u003eix-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Eq.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Eq",
          "name": "eq1",
          "package": "multirec",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e f a -\u003e f a -\u003e Bool",
          "source": "src/Generics-MultiRec-Eq.html#eq1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Eq",
          "module": "Generics.MultiRec.Eq",
          "name": "eq1",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb a-\u003eb a-\u003eBool",
          "package": "multirec",
          "signature": "(a-\u003ea-\u003eBool)-\u003ef a-\u003ef a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Eq.html#v:eq1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Eq",
          "name": "heq",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e r ix -\u003e r ix -\u003e Bool) -\u003e phi ix -\u003e f r ix -\u003e f r ix -\u003e Bool",
          "source": "src/Generics-MultiRec-Eq.html#heq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Eq",
          "module": "Generics.MultiRec.Eq",
          "name": "heq",
          "normalized": "(a b c d-\u003ee d-\u003ee d-\u003eBool)-\u003ec d-\u003ef e d-\u003ef e d-\u003eBool",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003er ix-\u003er ix-\u003eBool)-\u003ephi ix-\u003ef r ix-\u003ef r ix-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Eq.html#v:heq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe definition of generic fold, unfold, paramorphisms. In addition,\n some combinators that facilitate the construction of algebras.\n\u003c/p\u003e\u003cp\u003eThere are several variants of fold in other modules that are probably\n easier to use:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e for folds with constant return type, look at\n     \u003ca\u003eGenerics.MultiRec.FoldAlgK\u003c/a\u003e (or \u003ca\u003eGenerics.MultiRec.FoldK\u003c/a\u003e),\n\u003c/li\u003e\u003cli\u003e for folds with convenient algebras, look at\n     \u003ca\u003eGenerics.MultiRec.FoldAlg\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Fold",
          "name": "Fold",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html",
          "type": "module"
        },
        "index": {
          "description": "The definition of generic fold unfold paramorphisms In addition some combinators that facilitate the construction of algebras There are several variants of fold in other modules that are probably easier to use for folds with constant return type look at Generics.MultiRec.FoldAlgK or Generics.MultiRec.FoldK for folds with convenient algebras look at Generics.MultiRec.FoldAlg",
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "Fold",
          "package": "multirec",
          "partial": "Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": ":-\u003e",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": ":-\u003e",
          "package": "multirec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "AlgPart",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#AlgPart",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "AlgPart",
          "package": "multirec",
          "partial": "Alg Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:AlgPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "Algebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#Algebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "Algebra",
          "package": "multirec",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "Algebra'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#Algebra%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "Algebra'",
          "package": "multirec",
          "partial": "Algebra'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:Algebra-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "AlgebraF",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#AlgebraF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "AlgebraF",
          "package": "multirec",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:AlgebraF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "AlgebraF'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#AlgebraF%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "AlgebraF'",
          "package": "multirec",
          "partial": "Algebra F'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:AlgebraF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#CoAlgebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebra",
          "package": "multirec",
          "partial": "Co Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:CoAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebra'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#CoAlgebra%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebra'",
          "package": "multirec",
          "partial": "Co Algebra'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:CoAlgebra-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebraF",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#CoAlgebraF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebraF",
          "package": "multirec",
          "partial": "Co Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:CoAlgebraF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebraF'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#CoAlgebraF%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "CoAlgebraF'",
          "package": "multirec",
          "partial": "Co Algebra F'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:CoAlgebraF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#ParaAlgebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebra",
          "package": "multirec",
          "partial": "Para Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:ParaAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebra'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#ParaAlgebra%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebra'",
          "package": "multirec",
          "partial": "Para Algebra'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:ParaAlgebra-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebraF",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#ParaAlgebraF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebraF",
          "package": "multirec",
          "partial": "Para Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:ParaAlgebraF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebraF'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Fold.html#ParaAlgebraF%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "ParaAlgebraF'",
          "package": "multirec",
          "partial": "Para Algebra F'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#t:ParaAlgebraF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "(&)",
          "package": "multirec",
          "signature": "(AlgPart a :-\u003e (AlgPart b :-\u003e AlgPart (a :+: b))) r ix",
          "source": "src/Generics-MultiRec-Fold.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "(&) &",
          "normalized": "(AlgPart a-\u003e(AlgPart b-\u003eAlgPart(a b)))c d",
          "package": "multirec",
          "signature": "(AlgPart a-\u003e(AlgPart b-\u003eAlgPart(a b)))r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "con",
          "package": "multirec",
          "signature": "AlgPart a r ix -\u003e AlgPart (C c a) r ix",
          "source": "src/Generics-MultiRec-Fold.html#con",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "con",
          "normalized": "AlgPart a b c-\u003eAlgPart(C d a)b c",
          "package": "multirec",
          "signature": "AlgPart a r ix-\u003eAlgPart(C c a)r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "fold",
          "package": "multirec",
          "signature": "Algebra phi r -\u003e phi ix -\u003e ix -\u003e r ix",
          "source": "src/Generics-MultiRec-Fold.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "fold",
          "normalized": "Algebra a b-\u003ea c-\u003ec-\u003eb c",
          "package": "multirec",
          "signature": "Algebra phi r-\u003ephi ix-\u003eix-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "foldM",
          "package": "multirec",
          "signature": "AlgebraF phi m r -\u003e phi ix -\u003e ix -\u003e m (r ix)",
          "source": "src/Generics-MultiRec-Fold.html#foldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "foldM",
          "normalized": "AlgebraF a b c-\u003ea d-\u003ed-\u003eb(c d)",
          "package": "multirec",
          "signature": "AlgebraF phi m r-\u003ephi ix-\u003eix-\u003em(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "para",
          "package": "multirec",
          "signature": "ParaAlgebra phi r -\u003e phi ix -\u003e ix -\u003e r ix",
          "source": "src/Generics-MultiRec-Fold.html#para",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "para",
          "normalized": "ParaAlgebra a b-\u003ea c-\u003ec-\u003eb c",
          "package": "multirec",
          "signature": "ParaAlgebra phi r-\u003ephi ix-\u003eix-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "paraM",
          "package": "multirec",
          "signature": "ParaAlgebraF phi m r -\u003e phi ix -\u003e ix -\u003e m (r ix)",
          "source": "src/Generics-MultiRec-Fold.html#paraM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "paraM",
          "normalized": "ParaAlgebraF a b c-\u003ea d-\u003ed-\u003eb(c d)",
          "package": "multirec",
          "signature": "ParaAlgebraF phi m r-\u003ephi ix-\u003eix-\u003em(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:paraM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "tag",
          "package": "multirec",
          "signature": "AlgPart a r ix -\u003e AlgPart (a :\u003e: ix) r ix'",
          "source": "src/Generics-MultiRec-Fold.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "tag",
          "normalized": "AlgPart a b c-\u003eAlgPart(a c)b d",
          "package": "multirec",
          "signature": "AlgPart a r ix-\u003eAlgPart(a ix)r ix'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "unfold",
          "package": "multirec",
          "signature": "CoAlgebra phi r -\u003e phi ix -\u003e r ix -\u003e ix",
          "source": "src/Generics-MultiRec-Fold.html#unfold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "unfold",
          "normalized": "CoAlgebra a b-\u003ea c-\u003eb c-\u003ec",
          "package": "multirec",
          "signature": "CoAlgebra phi r-\u003ephi ix-\u003er ix-\u003eix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Fold",
          "name": "unfoldM",
          "package": "multirec",
          "signature": "CoAlgebraF phi m r -\u003e phi ix -\u003e r ix -\u003e m ix",
          "source": "src/Generics-MultiRec-Fold.html#unfoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Fold",
          "module": "Generics.MultiRec.Fold",
          "name": "unfoldM",
          "normalized": "CoAlgebraF a b c-\u003ea d-\u003ec d-\u003eb d",
          "package": "multirec",
          "signature": "CoAlgebraF phi m r-\u003ephi ix-\u003er ix-\u003em ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Fold.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA variant of fold that allows the specification of the algebra in a\n convenient way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "FoldAlg",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldAlg.html",
          "type": "module"
        },
        "index": {
          "description": "variant of fold that allows the specification of the algebra in convenient way",
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "FoldAlg",
          "package": "multirec",
          "partial": "Fold Alg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type family we use to describe the convenient algebras.\n\u003c/p\u003e",
          "module": "[\"Generics.MultiRec.FoldAlg\",\"Generics.MultiRec.FoldAlgK\"]",
          "name": "Alg",
          "package": "multirec",
          "signature": "Alg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#t:Alg\",\"http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#t:Alg\"]"
        },
        "index": {
          "description": "The type family we use to describe the convenient algebras",
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Alg",
          "package": "multirec",
          "partial": "Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#t:Alg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebras passed to the fold have to work for all index types\n   in the family. The additional witness argument is required only\n   to make GHC's typechecker happy.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Algebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldAlg.html#Algebra",
          "type": "type"
        },
        "index": {
          "description": "The algebras passed to the fold have to work for all index types in the family The additional witness argument is required only to make GHC typechecker happy",
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Algebra",
          "package": "multirec",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Comp",
          "package": "multirec",
          "signature": "Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Comp",
          "package": "multirec",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#t:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class fold explains how to convert a convenient algebra\n   \u003ccode\u003e\u003ca\u003eAlg\u003c/a\u003e\u003c/code\u003e back into a function from functor to result, as required\n   by the standard fold function.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Fold",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldAlg.html#Fold",
          "type": "class"
        },
        "index": {
          "description": "The class fold explains how to convert convenient algebra Alg back into function from functor to result as required by the standard fold function",
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "Fold",
          "package": "multirec",
          "partial": "Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor constructing algebras that are made of nested pairs rather\n   than n-ary tuples, it is helpful to use this pairing combinator.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "(&)",
          "package": "multirec",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Generics-MultiRec-FoldAlg.html#%26",
          "type": "function"
        },
        "index": {
          "description": "For constructing algebras that are made of nested pairs rather than n-ary tuples it is helpful to use this pairing combinator",
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "(&) &",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "multirec",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldAlg",
          "name": "alg",
          "package": "multirec",
          "signature": "Alg f r ix -\u003e f r ix -\u003e r ix",
          "source": "src/Generics-MultiRec-FoldAlg.html#alg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "alg",
          "normalized": "Alg a b c-\u003ea b c-\u003eb c",
          "package": "multirec",
          "signature": "Alg f r ix-\u003ef r ix-\u003er ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#v:alg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold with convenient algebras.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "fold",
          "package": "multirec",
          "signature": "Algebra phi r -\u003e phi ix -\u003e ix -\u003e r ix",
          "source": "src/Generics-MultiRec-FoldAlg.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold with convenient algebras",
          "hierarchy": "Generics MultiRec FoldAlg",
          "module": "Generics.MultiRec.FoldAlg",
          "name": "fold",
          "normalized": "Algebra a b-\u003ea c-\u003ec-\u003eb c",
          "package": "multirec",
          "signature": "Algebra phi r-\u003ephi ix-\u003eix-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlg.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA variant of fold that allows the specification of the algebra in a\n convenient way, and that fixes the result type to a constant.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "FoldAlgK",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldAlgK.html",
          "type": "module"
        },
        "index": {
          "description": "variant of fold that allows the specification of the algebra in convenient way and that fixes the result type to constant",
          "hierarchy": "Generics MultiRec FoldAlgK",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "FoldAlgK",
          "package": "multirec",
          "partial": "Fold Alg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebras passed to the fold have to work for all index types\n   in the family. The additional witness argument is required only\n   to make GHC's typechecker happy.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "Algebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldAlgK.html#Algebra",
          "type": "type"
        },
        "index": {
          "description": "The algebras passed to the fold have to work for all index types in the family The additional witness argument is required only to make GHC typechecker happy",
          "hierarchy": "Generics MultiRec FoldAlgK",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "Algebra",
          "package": "multirec",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class fold explains how to convert a convenient algebra\n   \u003ccode\u003e\u003ca\u003eAlg\u003c/a\u003e\u003c/code\u003e back into a function from functor to result, as required\n   by the standard fold function.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "Fold",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldAlgK.html#Fold",
          "type": "class"
        },
        "index": {
          "description": "The class fold explains how to convert convenient algebra Alg back into function from functor to result as required by the standard fold function",
          "hierarchy": "Generics MultiRec FoldAlgK",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "Fold",
          "package": "multirec",
          "partial": "Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor constructing algebras that are made of nested pairs rather\n   than n-ary tuples, it is helpful to use this pairing combinator.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "(&)",
          "package": "multirec",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Generics-MultiRec-FoldAlgK.html#%26",
          "type": "function"
        },
        "index": {
          "description": "For constructing algebras that are made of nested pairs rather than n-ary tuples it is helpful to use this pairing combinator",
          "hierarchy": "Generics MultiRec FoldAlgK",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "(&) &",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "multirec",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "alg",
          "package": "multirec",
          "signature": "Alg f r -\u003e f (K0 r) ix -\u003e r",
          "source": "src/Generics-MultiRec-FoldAlgK.html#alg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldAlgK",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "alg",
          "normalized": "Alg a b-\u003ea(K b)c-\u003eb",
          "package": "multirec",
          "signature": "Alg f r-\u003ef(K r)ix-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#v:alg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold with convenient algebras.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "fold",
          "package": "multirec",
          "signature": "Algebra phi r -\u003e phi ix -\u003e ix -\u003e r",
          "source": "src/Generics-MultiRec-FoldAlgK.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold with convenient algebras",
          "hierarchy": "Generics MultiRec FoldAlgK",
          "module": "Generics.MultiRec.FoldAlgK",
          "name": "fold",
          "normalized": "Algebra a b-\u003ea c-\u003ec-\u003eb",
          "package": "multirec",
          "signature": "Algebra phi r-\u003ephi ix-\u003eix-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldAlgK.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariant of \u003ca\u003eGenerics.MultiRec.Fold\u003c/a\u003e where the result type is independent of\n the index.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.FoldK",
          "name": "FoldK",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html",
          "type": "module"
        },
        "index": {
          "description": "Variant of Generics.MultiRec.Fold where the result type is independent of the index",
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "FoldK",
          "package": "multirec",
          "partial": "Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": ":-\u003e",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": ":-\u003e",
          "package": "multirec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "AlgPart",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#AlgPart",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "AlgPart",
          "package": "multirec",
          "partial": "Alg Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:AlgPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "Algebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#Algebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "Algebra",
          "package": "multirec",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "Algebra'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#Algebra%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "Algebra'",
          "package": "multirec",
          "partial": "Algebra'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:Algebra-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "AlgebraF",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#AlgebraF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "AlgebraF",
          "package": "multirec",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:AlgebraF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "AlgebraF'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#AlgebraF%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "AlgebraF'",
          "package": "multirec",
          "partial": "Algebra F'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:AlgebraF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#CoAlgebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebra",
          "package": "multirec",
          "partial": "Co Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:CoAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebra'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#CoAlgebra%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebra'",
          "package": "multirec",
          "partial": "Co Algebra'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:CoAlgebra-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebraF",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#CoAlgebraF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebraF",
          "package": "multirec",
          "partial": "Co Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:CoAlgebraF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebraF'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#CoAlgebraF%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "CoAlgebraF'",
          "package": "multirec",
          "partial": "Co Algebra F'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:CoAlgebraF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebra",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#ParaAlgebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebra",
          "package": "multirec",
          "partial": "Para Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:ParaAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebra'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#ParaAlgebra%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebra'",
          "package": "multirec",
          "partial": "Para Algebra'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:ParaAlgebra-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebraF",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#ParaAlgebraF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebraF",
          "package": "multirec",
          "partial": "Para Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:ParaAlgebraF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebraF'",
          "package": "multirec",
          "source": "src/Generics-MultiRec-FoldK.html#ParaAlgebraF%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "ParaAlgebraF'",
          "package": "multirec",
          "partial": "Para Algebra F'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#t:ParaAlgebraF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "(&)",
          "package": "multirec",
          "signature": "(AlgPart a :-\u003e (AlgPart b :-\u003e AlgPart (a :+: b))) c ix",
          "source": "src/Generics-MultiRec-FoldK.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "(&) &",
          "normalized": "(AlgPart a-\u003e(AlgPart b-\u003eAlgPart(a b)))c d",
          "package": "multirec",
          "signature": "(AlgPart a-\u003e(AlgPart b-\u003eAlgPart(a b)))c ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "con",
          "package": "multirec",
          "signature": "AlgPart a b ix -\u003e AlgPart (C c a) b ix",
          "source": "src/Generics-MultiRec-FoldK.html#con",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "con",
          "normalized": "AlgPart a b c-\u003eAlgPart(C d a)b c",
          "package": "multirec",
          "signature": "AlgPart a b ix-\u003eAlgPart(C c a)b ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "fold",
          "package": "multirec",
          "signature": "Algebra phi r -\u003e phi ix -\u003e ix -\u003e r",
          "source": "src/Generics-MultiRec-FoldK.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "fold",
          "normalized": "Algebra a b-\u003ea c-\u003ec-\u003eb",
          "package": "multirec",
          "signature": "Algebra phi r-\u003ephi ix-\u003eix-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "foldM",
          "package": "multirec",
          "signature": "AlgebraF phi m r -\u003e phi ix -\u003e ix -\u003e m r",
          "source": "src/Generics-MultiRec-FoldK.html#foldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "foldM",
          "normalized": "AlgebraF a b c-\u003ea d-\u003ed-\u003eb c",
          "package": "multirec",
          "signature": "AlgebraF phi m r-\u003ephi ix-\u003eix-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "para",
          "package": "multirec",
          "signature": "ParaAlgebra phi r -\u003e phi ix -\u003e ix -\u003e r",
          "source": "src/Generics-MultiRec-FoldK.html#para",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "para",
          "normalized": "ParaAlgebra a b-\u003ea c-\u003ec-\u003eb",
          "package": "multirec",
          "signature": "ParaAlgebra phi r-\u003ephi ix-\u003eix-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "paraM",
          "package": "multirec",
          "signature": "ParaAlgebraF phi m r -\u003e phi ix -\u003e ix -\u003e m r",
          "source": "src/Generics-MultiRec-FoldK.html#paraM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "paraM",
          "normalized": "ParaAlgebraF a b c-\u003ea d-\u003ed-\u003eb c",
          "package": "multirec",
          "signature": "ParaAlgebraF phi m r-\u003ephi ix-\u003eix-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:paraM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "tag",
          "package": "multirec",
          "signature": "AlgPart a c ix -\u003e AlgPart (a :\u003e: ix) c ix'",
          "source": "src/Generics-MultiRec-FoldK.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "tag",
          "normalized": "AlgPart a b c-\u003eAlgPart(a c)b d",
          "package": "multirec",
          "signature": "AlgPart a c ix-\u003eAlgPart(a ix)c ix'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "unfold",
          "package": "multirec",
          "signature": "CoAlgebra phi r -\u003e phi ix -\u003e r -\u003e ix",
          "source": "src/Generics-MultiRec-FoldK.html#unfold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "unfold",
          "normalized": "CoAlgebra a b-\u003ea c-\u003eb-\u003ec",
          "package": "multirec",
          "signature": "CoAlgebra phi r-\u003ephi ix-\u003er-\u003eix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.FoldK",
          "name": "unfoldM",
          "package": "multirec",
          "signature": "CoAlgebraF phi m r -\u003e phi ix -\u003e r -\u003e m ix",
          "source": "src/Generics-MultiRec-FoldK.html#unfoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec FoldK",
          "module": "Generics.MultiRec.FoldK",
          "name": "unfoldM",
          "normalized": "CoAlgebraF a b c-\u003ea d-\u003ec-\u003eb d",
          "package": "multirec",
          "signature": "CoAlgebraF phi m r-\u003ephi ix-\u003er-\u003em ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-FoldK.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher-order fixed point operator as well as conversion functions.\n It is rarely necessary to use \u003ccode\u003e\u003ca\u003eHFix\u003c/a\u003e\u003c/code\u003e. Generic functions\n usually convert between the original datatype and the functor directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.HFix",
          "name": "HFix",
          "package": "multirec",
          "source": "src/Generics-MultiRec-HFix.html",
          "type": "module"
        },
        "index": {
          "description": "Higher-order fixed point operator as well as conversion functions It is rarely necessary to use HFix Generic functions usually convert between the original datatype and the functor directly",
          "hierarchy": "Generics MultiRec HFix",
          "module": "Generics.MultiRec.HFix",
          "name": "HFix",
          "package": "multirec",
          "partial": "HFix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFix",
          "name": "HFix",
          "package": "multirec",
          "source": "src/Generics-MultiRec-HFix.html#HFix",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFix",
          "module": "Generics.MultiRec.HFix",
          "name": "HFix",
          "package": "multirec",
          "partial": "HFix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFix.html#t:HFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFix",
          "name": "HIn",
          "package": "multirec",
          "signature": "HIn",
          "source": "src/Generics-MultiRec-HFix.html#HFix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFix",
          "module": "Generics.MultiRec.HFix",
          "name": "HIn",
          "package": "multirec",
          "partial": "HIn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFix.html#v:HIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFix",
          "name": "hfrom",
          "package": "multirec",
          "signature": "phi ix -\u003e ix -\u003e HFix (PF phi) ix",
          "source": "src/Generics-MultiRec-HFix.html#hfrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFix",
          "module": "Generics.MultiRec.HFix",
          "name": "hfrom",
          "normalized": "a b-\u003eb-\u003eHFix(PF a)b",
          "package": "multirec",
          "signature": "phi ix-\u003eix-\u003eHFix(PF phi)ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFix.html#v:hfrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFix",
          "name": "hout",
          "package": "multirec",
          "signature": "h (HFix h) ix",
          "source": "src/Generics-MultiRec-HFix.html#HFix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFix",
          "module": "Generics.MultiRec.HFix",
          "name": "hout",
          "package": "multirec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFix.html#v:hout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFix",
          "name": "hto",
          "package": "multirec",
          "signature": "phi ix -\u003e HFix (PF phi) ix -\u003e ix",
          "source": "src/Generics-MultiRec-HFix.html#hto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFix",
          "module": "Generics.MultiRec.HFix",
          "name": "hto",
          "normalized": "a b-\u003eHFix(PF a)b-\u003eb",
          "package": "multirec",
          "signature": "phi ix-\u003eHFix(PF phi)ix-\u003eix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFix.html#v:hto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe definition of functorial map.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.HFunctor",
          "name": "HFunctor",
          "package": "multirec",
          "source": "src/Generics-MultiRec-HFunctor.html",
          "type": "module"
        },
        "index": {
          "description": "The definition of functorial map",
          "hierarchy": "Generics MultiRec HFunctor",
          "module": "Generics.MultiRec.HFunctor",
          "name": "HFunctor",
          "package": "multirec",
          "partial": "HFunctor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFunctor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFunctor",
          "name": "HFunctor",
          "package": "multirec",
          "source": "src/Generics-MultiRec-HFunctor.html#HFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFunctor",
          "module": "Generics.MultiRec.HFunctor",
          "name": "HFunctor",
          "package": "multirec",
          "partial": "HFunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFunctor.html#t:HFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ehmap\u003c/a\u003e\u003c/code\u003e takes a functor \u003ccode\u003ef\u003c/code\u003e. All the recursive instances\n in that functor are wrapped by an application of \u003ccode\u003er\u003c/code\u003e. The argument to\n \u003ccode\u003e\u003ca\u003ehmap\u003c/a\u003e\u003c/code\u003e takes a function that transformes \u003ccode\u003er\u003c/code\u003e occurrences into \u003ccode\u003er'\u003c/code\u003e\n occurrences, for every \u003ccode\u003eix\u003c/code\u003e. In order to associate the index \u003ccode\u003eix\u003c/code\u003e\n with the correct family \u003ccode\u003ephi\u003c/code\u003e, the argument to \u003ccode\u003ehmap\u003c/code\u003e is additionally\n parameterized by a witness of type \u003ccode\u003ephi ix\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Generics.MultiRec.HFunctor",
          "name": "hmap",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e r ix -\u003e r' ix) -\u003e phi ix -\u003e f r ix -\u003e f r' ix",
          "source": "src/Generics-MultiRec-HFunctor.html#hmap",
          "type": "function"
        },
        "index": {
          "description": "The function hmap takes functor All the recursive instances in that functor are wrapped by an application of The argument to hmap takes function that transformes occurrences into occurrences for every ix In order to associate the index ix with the correct family phi the argument to hmap is additionally parameterized by witness of type phi ix",
          "hierarchy": "Generics MultiRec HFunctor",
          "module": "Generics.MultiRec.HFunctor",
          "name": "hmap",
          "normalized": "(a b c d-\u003ee d-\u003ef d)-\u003ec d-\u003eg e d-\u003eg f d",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003er ix-\u003er' ix)-\u003ephi ix-\u003ef r ix-\u003ef r' ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFunctor.html#v:hmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.HFunctor",
          "name": "hmapA",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e r ix -\u003e a (r' ix)) -\u003e phi ix -\u003e f r ix -\u003e a (f r' ix)",
          "source": "src/Generics-MultiRec-HFunctor.html#hmapA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec HFunctor",
          "module": "Generics.MultiRec.HFunctor",
          "name": "hmapA",
          "normalized": "(a b c d-\u003ee d-\u003ef(g d))-\u003ec d-\u003eh e d-\u003ef(h g d)",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003er ix-\u003ea(r' ix))-\u003ephi ix-\u003ef r ix-\u003ea(f r' ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFunctor.html#v:hmapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003ehmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.HFunctor",
          "name": "hmapM",
          "package": "multirec",
          "signature": "(forall ix.  phi ix -\u003e r ix -\u003e m (r' ix)) -\u003e phi ix -\u003e f r ix -\u003e m (f r' ix)",
          "source": "src/Generics-MultiRec-HFunctor.html#hmapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of hmap",
          "hierarchy": "Generics MultiRec HFunctor",
          "module": "Generics.MultiRec.HFunctor",
          "name": "hmapM",
          "normalized": "(a b c d-\u003ee d-\u003ef(g d))-\u003ec d-\u003eh e d-\u003ef(h g d)",
          "package": "multirec",
          "signature": "(forall ix. phi ix-\u003er ix-\u003em(r' ix))-\u003ephi ix-\u003ef r ix-\u003em(f r' ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-HFunctor.html#v:hmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric read.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Read",
          "name": "Read",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Read.html",
          "type": "module"
        },
        "index": {
          "description": "Generic read",
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "Read",
          "package": "multirec",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "CountAtoms",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Read.html#CountAtoms",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "CountAtoms",
          "package": "multirec",
          "partial": "Count Atoms",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#t:CountAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "HReadPrec",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Read.html#HReadPrec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "HReadPrec",
          "package": "multirec",
          "partial": "HRead Prec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#t:HReadPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "Read1",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Read.html#Read1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "Read1",
          "package": "multirec",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#t:Read1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "appPrec",
          "package": "multirec",
          "signature": "Int",
          "source": "src/Generics-MultiRec-Read.html#appPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "appPrec",
          "package": "multirec",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:appPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "countatoms",
          "package": "multirec",
          "signature": "f r ix -\u003e Int",
          "source": "src/Generics-MultiRec-Read.html#countatoms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "countatoms",
          "normalized": "a b c-\u003eInt",
          "package": "multirec",
          "signature": "f r ix-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:countatoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "hreader",
          "package": "multirec",
          "signature": "forall ix.  phi ix -\u003e (forall ix1.  phi ix1 -\u003e ReadPrec (I0 ix1)) -\u003e ReadPrec (f I0 ix)",
          "source": "src/Generics-MultiRec-Read.html#hreader",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "hreader",
          "normalized": "a b c d-\u003e(a d c d-\u003eReadPrec(I d))-\u003eReadPrec(e I d)",
          "package": "multirec",
          "signature": "forall ix. phi ix-\u003e(forall ix phi ix-\u003eReadPrec(I ix))-\u003eReadPrec(f I ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:hreader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "read",
          "package": "multirec",
          "signature": "phi ix -\u003e String -\u003e ix",
          "source": "src/Generics-MultiRec-Read.html#read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "read",
          "normalized": "a b-\u003eString-\u003eb",
          "package": "multirec",
          "signature": "phi ix-\u003eString-\u003eix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "read1",
          "package": "multirec",
          "signature": "ReadPrec (g I0 ix) -\u003e ReadPrec (f (g I0 ix))",
          "source": "src/Generics-MultiRec-Read.html#read1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "read1",
          "normalized": "ReadPrec(a I b)-\u003eReadPrec(c(a I b))",
          "package": "multirec",
          "signature": "ReadPrec(g I ix)-\u003eReadPrec(f(g I ix))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:read1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "readCons",
          "package": "multirec",
          "signature": "ReadPrec (f I0 ix) -\u003e ReadPrec (C c f I0 ix)",
          "source": "src/Generics-MultiRec-Read.html#readCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "readCons",
          "normalized": "ReadPrec(a I b)-\u003eReadPrec(C c a I b)",
          "package": "multirec",
          "partial": "Cons",
          "signature": "ReadPrec(f I ix)-\u003eReadPrec(C c f I ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:readCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "readInfixCons",
          "package": "multirec",
          "signature": "phi ix -\u003e (forall ix1.  phi ix1 -\u003e ReadPrec (I0 ix1)) -\u003e (Associativity, Int, Bool) -\u003e String -\u003e ReadPrec ((f :*: g) I0 ix)",
          "source": "src/Generics-MultiRec-Read.html#readInfixCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "readInfixCons",
          "normalized": "a b-\u003e(c b a b-\u003eReadPrec(I b))-\u003e(Associativity,Int,Bool)-\u003eString-\u003eReadPrec((d*e)I b)",
          "package": "multirec",
          "partial": "Infix Cons",
          "signature": "phi ix-\u003e(forall ix phi ix-\u003eReadPrec(I ix))-\u003e(Associativity,Int,Bool)-\u003eString-\u003eReadPrec((f*g)I ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:readInfixCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "readNoArgsCons",
          "package": "multirec",
          "signature": "String -\u003e ReadPrec (U I0 ix)",
          "source": "src/Generics-MultiRec-Read.html#readNoArgsCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "readNoArgsCons",
          "normalized": "String-\u003eReadPrec(U I a)",
          "package": "multirec",
          "partial": "No Args Cons",
          "signature": "String-\u003eReadPrec(U I ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:readNoArgsCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "readPrec",
          "package": "multirec",
          "signature": "phi ix -\u003e ReadPrec ix",
          "source": "src/Generics-MultiRec-Read.html#readPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "readPrec",
          "normalized": "a b-\u003eReadPrec b",
          "package": "multirec",
          "partial": "Prec",
          "signature": "phi ix-\u003eReadPrec ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:readPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "readPrefixCons",
          "package": "multirec",
          "signature": "ReadPrec (f I0 ix) -\u003e Bool -\u003e String -\u003e ReadPrec (f I0 ix)",
          "source": "src/Generics-MultiRec-Read.html#readPrefixCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "readPrefixCons",
          "normalized": "ReadPrec(a I b)-\u003eBool-\u003eString-\u003eReadPrec(a I b)",
          "package": "multirec",
          "partial": "Prefix Cons",
          "signature": "ReadPrec(f I ix)-\u003eBool-\u003eString-\u003eReadPrec(f I ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:readPrefixCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Read",
          "name": "readsPrec",
          "package": "multirec",
          "signature": "phi ix -\u003e Int -\u003e ReadS ix",
          "source": "src/Generics-MultiRec-Read.html#readsPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Read",
          "module": "Generics.MultiRec.Read",
          "name": "readsPrec",
          "normalized": "a b-\u003eInt-\u003eReadS b",
          "package": "multirec",
          "partial": "Prec",
          "signature": "phi ix-\u003eInt-\u003eReadS ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Read.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric show.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.Show",
          "name": "Show",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Show.html",
          "type": "module"
        },
        "index": {
          "description": "Generic show",
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "Show",
          "package": "multirec",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list in the result type allows us to get at\n the fields of a constructor individually, which in\n turn allows us to insert additional stuff in between\n if record notation is used.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.Show",
          "name": "HShow",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Show.html#HShow",
          "type": "class"
        },
        "index": {
          "description": "The list in the result type allows us to get at the fields of constructor individually which in turn allows us to insert additional stuff in between if record notation is used",
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "HShow",
          "package": "multirec",
          "partial": "HShow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#t:HShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "Show1",
          "package": "multirec",
          "source": "src/Generics-MultiRec-Show.html#Show1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "Show1",
          "package": "multirec",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#t:Show1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "commas",
          "package": "multirec",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Generics-MultiRec-Show.html#commas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "commas",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "multirec",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:commas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "hShowsPrecAlg",
          "package": "multirec",
          "signature": "Algebra' phi f [Int -\u003e ShowS]",
          "source": "src/Generics-MultiRec-Show.html#hShowsPrecAlg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "hShowsPrecAlg",
          "normalized": "Algebra' a b[Int-\u003eShowS]",
          "package": "multirec",
          "partial": "Shows Prec Alg",
          "signature": "Algebra' phi f[Int-\u003eShowS]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:hShowsPrecAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "intersperse",
          "package": "multirec",
          "signature": "String -\u003e [ShowS] -\u003e ShowS",
          "source": "src/Generics-MultiRec-Show.html#intersperse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "intersperse",
          "normalized": "String-\u003e[ShowS]-\u003eShowS",
          "package": "multirec",
          "signature": "String-\u003e[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "show",
          "package": "multirec",
          "signature": "phi ix -\u003e ix -\u003e String",
          "source": "src/Generics-MultiRec-Show.html#show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "show",
          "normalized": "a b-\u003eb-\u003eString",
          "package": "multirec",
          "signature": "phi ix-\u003eix-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "show1",
          "package": "multirec",
          "signature": "f [Int -\u003e ShowS] -\u003e Int -\u003e ShowS",
          "source": "src/Generics-MultiRec-Show.html#show1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "show1",
          "normalized": "a[Int-\u003eShowS]-\u003eInt-\u003eShowS",
          "package": "multirec",
          "signature": "f[Int-\u003eShowS]-\u003eInt-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:show1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "showsPrec",
          "package": "multirec",
          "signature": "phi ix -\u003e Int -\u003e ix -\u003e ShowS",
          "source": "src/Generics-MultiRec-Show.html#showsPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "showsPrec",
          "normalized": "a b-\u003eInt-\u003eb-\u003eShowS",
          "package": "multirec",
          "partial": "Prec",
          "signature": "phi ix-\u003eInt-\u003eix-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Show",
          "name": "spaces",
          "package": "multirec",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Generics-MultiRec-Show.html#spaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Show",
          "module": "Generics.MultiRec.Show",
          "name": "spaces",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "multirec",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-Show.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level equality. This module is currently provided by the multirec\n library, even though it is more general and does not really belong here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.TEq",
          "name": "TEq",
          "package": "multirec",
          "source": "src/Generics-MultiRec-TEq.html",
          "type": "module"
        },
        "index": {
          "description": "Type-level equality This module is currently provided by the multirec library even though it is more general and does not really belong here",
          "hierarchy": "Generics MultiRec TEq",
          "module": "Generics.MultiRec.TEq",
          "name": "TEq",
          "package": "multirec",
          "partial": "TEq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TEq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.TEq",
          "name": ":=:",
          "package": "multirec",
          "source": "src/Generics-MultiRec-TEq.html#%3A%3D%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics MultiRec TEq",
          "module": "Generics.MultiRec.TEq",
          "name": ":=:",
          "package": "multirec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TEq.html#t::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.TEq",
          "name": "Refl",
          "package": "multirec",
          "signature": "a :=: a",
          "source": "src/Generics-MultiRec-TEq.html#%3A%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec TEq",
          "module": "Generics.MultiRec.TEq",
          "name": "Refl",
          "package": "multirec",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TEq.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.TEq",
          "name": "cast",
          "package": "multirec",
          "signature": "(a :=: b) -\u003e a -\u003e b",
          "source": "src/Generics-MultiRec-TEq.html#cast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec TEq",
          "module": "Generics.MultiRec.TEq",
          "name": "cast",
          "normalized": "(a b)-\u003ea-\u003eb",
          "package": "multirec",
          "signature": "(a b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TEq.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Template Haskell code that can be used to\n automatically generate the boilerplate code for the multirec\n library. The constructor information can be generated per datatype,\n the rest per family of datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "TH",
          "package": "multirec",
          "source": "src/Generics-MultiRec-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Template Haskell code that can be used to automatically generate the boilerplate code for the multirec library The constructor information can be generated per datatype the rest per family of datatypes",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "TH",
          "package": "multirec",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the name of the family index GADT, derive everything.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveAll",
          "package": "multirec",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveAll",
          "type": "function"
        },
        "index": {
          "description": "Given the name of the family index GADT derive everything",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveAll",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "All",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of datatype names, derive datatypes and\n instances of class \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e. Not needed if \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveConstructors",
          "package": "multirec",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveConstructors",
          "type": "function"
        },
        "index": {
          "description": "Given list of datatype names derive datatypes and instances of class Constructor Not needed if deriveAll is used",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveConstructors",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "Constructors",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003eEl\u003c/a\u003e\u003c/code\u003e instances. Not needed if \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveEl",
          "package": "multirec",
          "signature": "Name -\u003e [Name] -\u003e [(Name, [Name])] -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveEl",
          "type": "function"
        },
        "index": {
          "description": "Derive only the El instances Not needed if deriveAll is used",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveEl",
          "normalized": "Name-\u003e[Name]-\u003e[(Name,[Name])]-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "El",
          "signature": "Name-\u003e[Name]-\u003e[(Name,[Name])]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveEl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003eEqS\u003c/a\u003e\u003c/code\u003e instance. Not needed if \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveEqS",
          "package": "multirec",
          "signature": "Name -\u003e [Name] -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveEqS",
          "type": "function"
        },
        "index": {
          "description": "Derive only the EqS instance Not needed if deriveAll is used",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveEqS",
          "normalized": "Name-\u003e[Name]-\u003e[Name]-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "Eq",
          "signature": "Name-\u003e[Name]-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveEqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003eFam\u003c/a\u003e\u003c/code\u003e instance. Not needed if \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveFam",
          "package": "multirec",
          "signature": "Name -\u003e [Name] -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveFam",
          "type": "function"
        },
        "index": {
          "description": "Derive only the Fam instance Not needed if deriveAll is used",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveFam",
          "normalized": "Name-\u003e[Name]-\u003e[Name]-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "Fam",
          "signature": "Name-\u003e[Name]-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deriveAll instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCompatibility. Use \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eGiven the name of the index GADT, the names of the\n types in the family, and the name (as string) for the\n pattern functor to derive, generate the \u003ccode\u003eIx\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePF\u003c/a\u003e\u003c/code\u003e\n instances. \u003cem\u003eIMPORTANT\u003c/em\u003e: It is assumed that the constructors\n of the GADT have the same names as the datatypes in the\n family.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveFamily",
          "package": "multirec",
          "signature": "Name -\u003e [Name] -\u003e String -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveFamily",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use deriveAll instead Compatibility Use deriveAll instead Given the name of the index GADT the names of the types in the family and the name as string for the pattern functor to derive generate the Ix and PF instances IMPORTANT It is assumed that the constructors of the GADT have the same names as the datatypes in the family",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveFamily",
          "normalized": "Name-\u003e[Name]-\u003eString-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "Family",
          "signature": "Name-\u003e[Name]-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003ePF\u003c/a\u003e\u003c/code\u003e instance. Not needed if \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "derivePF",
          "package": "multirec",
          "signature": "String -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#derivePF",
          "type": "function"
        },
        "index": {
          "description": "Derive only the PF instance Not needed if deriveAll is used",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "derivePF",
          "normalized": "String-\u003e[Name]-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "PF",
          "signature": "String-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:derivePF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deriveFamily instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCompatibility. Use \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Generics.MultiRec.TH",
          "name": "deriveSystem",
          "package": "multirec",
          "signature": "Name -\u003e [Name] -\u003e String -\u003e Q [Dec]",
          "source": "src/Generics-MultiRec-TH.html#deriveSystem",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use deriveFamily instead Compatibility Use deriveAll instead",
          "hierarchy": "Generics MultiRec TH",
          "module": "Generics.MultiRec.TH",
          "name": "deriveSystem",
          "normalized": "Name-\u003e[Name]-\u003eString-\u003eQ[Dec]",
          "package": "multirec",
          "partial": "System",
          "signature": "Name-\u003e[Name]-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec-TH.html#v:deriveSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emultirec --\n generic programming for families of recursive datatypes\n\u003c/p\u003e\u003cp\u003eThis top-level module re-exports most modules of the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.MultiRec",
          "name": "MultiRec",
          "package": "multirec",
          "source": "src/Generics-MultiRec.html",
          "type": "module"
        },
        "index": {
          "description": "multirec generic programming for families of recursive datatypes This top-level module re-exports most modules of the library",
          "hierarchy": "Generics MultiRec",
          "module": "Generics.MultiRec",
          "name": "MultiRec",
          "package": "multirec",
          "partial": "Multi Rec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multirec/docs/Generics-MultiRec.html#"
      }
    }
  ]
]