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
        "word": "regular"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Types for structural representation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Base",
          "name": "Base",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Types for structural representation",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Base",
          "package": "regular",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type for fields of a constructor.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": ":*:",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "Structure type for fields of constructor",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": ":*:",
          "package": "regular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type for alternatives in a type.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": ":+:",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Structure type for alternatives in type",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": ":+:",
          "package": "regular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "Associativity",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html#Associativity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Associativity",
          "package": "regular",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type to store the name of a constructor.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "C",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#C",
          "type": "data"
        },
        "index": {
          "description": "Structure type to store the name of constructor",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "C",
          "package": "regular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for datatypes that represent data constructors.\n For non-symbolic constructors, only \u003ccode\u003e\u003ca\u003econName\u003c/a\u003e\u003c/code\u003e has to be defined.\n The weird argument is supposed to be instantiated with \u003ccode\u003eC\u003c/code\u003e from\n base, hence the complex kind.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "Constructor",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html#Constructor",
          "type": "class"
        },
        "index": {
          "description": "Class for datatypes that represent data constructors For non-symbolic constructors only conName has to be defined The weird argument is supposed to be instantiated with from base hence the complex kind",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Constructor",
          "package": "regular",
          "partial": "Constructor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe well-known fixed-point type.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "Fix",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#Fix",
          "type": "newtype"
        },
        "index": {
          "description": "The well-known fixed-point type",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Fix",
          "package": "regular",
          "partial": "Fix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype to represent the fixity of a constructor. An infix declaration\n directly corresponds to an application of \u003ccode\u003e\u003ca\u003eInfix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "Fixity",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "Datatype to represent the fixity of constructor An infix declaration directly corresponds to an application of Infix",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Fixity",
          "package": "regular",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type for recursive values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "I",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#I",
          "type": "newtype"
        },
        "index": {
          "description": "Structure type for recursive values",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "I",
          "package": "regular",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type for constant values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "K",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#K",
          "type": "newtype"
        },
        "index": {
          "description": "Structure type for constant values",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "K",
          "package": "regular",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type family \u003ccode\u003ePF\u003c/code\u003e represents the pattern functor of a datatype.\n\u003c/p\u003e\u003cp\u003eTo be able to use the generic functions, the user is required to provide\n an instance of this type family.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "PF",
          "package": "regular",
          "signature": "PF",
          "type": "function"
        },
        "index": {
          "description": "The type family PF represents the pattern functor of datatype To be able to use the generic functions the user is required to provide an instance of this type family",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "PF",
          "package": "regular",
          "partial": "PF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:PF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class \u003ccode\u003eRegular\u003c/code\u003e captures the structural representation of a \n type and the corresponding embedding-projection pairs.\n\u003c/p\u003e\u003cp\u003eTo be able to use the generic functions, the user is required to provide\n an instance of this type class.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "Regular",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#Regular",
          "type": "class"
        },
        "index": {
          "description": "The type class Regular captures the structural representation of type and the corresponding embedding-projection pairs To be able to use the generic functions the user is required to provide an instance of this type class",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Regular",
          "package": "regular",
          "partial": "Regular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:Regular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type to store the name of a record selector.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "S",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#S",
          "type": "data"
        },
        "index": {
          "description": "Structure type to store the name of record selector",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "S",
          "package": "regular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "Selector",
          "package": "regular",
          "source": "src/Generics-Regular-Selector.html#Selector",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Selector",
          "package": "regular",
          "partial": "Selector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure type for empty constructors.\n\u003c/p\u003e",
          "module": "Generics.Regular.Base",
          "name": "U",
          "package": "regular",
          "source": "src/Generics-Regular-Base.html#U",
          "type": "data"
        },
        "index": {
          "description": "Structure type for empty constructors",
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "U",
          "package": "regular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": ":*:",
          "package": "regular",
          "signature": "(f r) :*: (g r)",
          "source": "src/Generics-Regular-Base.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": ":*:",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "C",
          "package": "regular",
          "signature": "C",
          "source": "src/Generics-Regular-Base.html#C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "C",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "I",
          "package": "regular",
          "signature": "I",
          "source": "src/Generics-Regular-Base.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "I",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "In",
          "package": "regular",
          "signature": "In",
          "source": "src/Generics-Regular-Base.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "In",
          "package": "regular",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.Regular.Base\",\"Generics.Regular.Constructor\"]",
          "name": "Infix",
          "package": "regular",
          "signature": "Infix Associativity Int",
          "source": "src/Generics-Regular-Constructor.html#Fixity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:Infix\",\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:Infix\"]"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Infix",
          "package": "regular",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "K",
          "package": "regular",
          "signature": "K",
          "source": "src/Generics-Regular-Base.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "K",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "L",
          "package": "regular",
          "signature": "L (f r)",
          "source": "src/Generics-Regular-Base.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "L",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.Regular.Base\",\"Generics.Regular.Constructor\"]",
          "name": "LeftAssociative",
          "package": "regular",
          "signature": "LeftAssociative",
          "source": "src/Generics-Regular-Constructor.html#Associativity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:LeftAssociative\",\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:LeftAssociative\"]"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "LeftAssociative",
          "package": "regular",
          "partial": "Left Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:LeftAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.Regular.Base\",\"Generics.Regular.Constructor\"]",
          "name": "NotAssociative",
          "package": "regular",
          "signature": "NotAssociative",
          "source": "src/Generics-Regular-Constructor.html#Associativity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:NotAssociative\",\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:NotAssociative\"]"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "NotAssociative",
          "package": "regular",
          "partial": "Not Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:NotAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.Regular.Base\",\"Generics.Regular.Constructor\"]",
          "name": "Prefix",
          "package": "regular",
          "signature": "Prefix",
          "source": "src/Generics-Regular-Constructor.html#Fixity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:Prefix\",\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:Prefix\"]"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "Prefix",
          "package": "regular",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "R",
          "package": "regular",
          "signature": "R (g r)",
          "source": "src/Generics-Regular-Base.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "R",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Generics.Regular.Base\",\"Generics.Regular.Constructor\"]",
          "name": "RightAssociative",
          "package": "regular",
          "signature": "RightAssociative",
          "source": "src/Generics-Regular-Constructor.html#Associativity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:RightAssociative\",\"http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:RightAssociative\"]"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "RightAssociative",
          "package": "regular",
          "partial": "Right Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:RightAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "S",
          "package": "regular",
          "signature": "S",
          "source": "src/Generics-Regular-Base.html#S",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "S",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "U",
          "package": "regular",
          "signature": "U",
          "source": "src/Generics-Regular-Base.html#U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "U",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "conFixity",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e Fixity",
          "source": "src/Generics-Regular-Constructor.html#conFixity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "conFixity",
          "normalized": "*-\u003e*)a-\u003eFixity",
          "package": "regular",
          "partial": "Fixity",
          "signature": "*-\u003e*)r-\u003eFixity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:conFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "conIsRecord",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e Bool",
          "source": "src/Generics-Regular-Constructor.html#conIsRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "conIsRecord",
          "normalized": "*-\u003e*)a-\u003eBool",
          "package": "regular",
          "partial": "Is Record",
          "signature": "*-\u003e*)r-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:conIsRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "conName",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e String",
          "source": "src/Generics-Regular-Constructor.html#conName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "conName",
          "normalized": "*-\u003e*)a-\u003eString",
          "package": "regular",
          "partial": "Name",
          "signature": "*-\u003e*)r-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:conName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "from",
          "package": "regular",
          "signature": "a -\u003e PF a a",
          "source": "src/Generics-Regular-Base.html#from",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "from",
          "normalized": "a-\u003ePF a a",
          "package": "regular",
          "signature": "a-\u003ePF a a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "out",
          "package": "regular",
          "signature": "f (Fix f)",
          "source": "src/Generics-Regular-Base.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "out",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "selName",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e String",
          "source": "src/Generics-Regular-Selector.html#selName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "selName",
          "normalized": "*-\u003e*)a-\u003eString",
          "package": "regular",
          "partial": "Name",
          "signature": "*-\u003e*)r-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:selName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "to",
          "package": "regular",
          "signature": "PF a a -\u003e a",
          "source": "src/Generics-Regular-Base.html#to",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "to",
          "normalized": "PF a a-\u003ea",
          "package": "regular",
          "signature": "PF a a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "unC",
          "package": "regular",
          "signature": "f r",
          "source": "src/Generics-Regular-Base.html#C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "unC",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:unC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "unI",
          "package": "regular",
          "signature": "r",
          "source": "src/Generics-Regular-Base.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "unI",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:unI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "unK",
          "package": "regular",
          "signature": "a",
          "source": "src/Generics-Regular-Base.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "unK",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:unK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Base",
          "name": "unS",
          "package": "regular",
          "signature": "f r",
          "source": "src/Generics-Regular-Base.html#S",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Base",
          "module": "Generics.Regular.Base",
          "name": "unS",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Base.html#v:unS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Representation for constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Constructor",
          "name": "Constructor",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Representation for constructors",
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "Constructor",
          "package": "regular",
          "partial": "Constructor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Constructor",
          "name": "Associativity",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html#Associativity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "Associativity",
          "package": "regular",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for datatypes that represent data constructors.\n For non-symbolic constructors, only \u003ccode\u003e\u003ca\u003econName\u003c/a\u003e\u003c/code\u003e has to be defined.\n The weird argument is supposed to be instantiated with \u003ccode\u003eC\u003c/code\u003e from\n base, hence the complex kind.\n\u003c/p\u003e",
          "module": "Generics.Regular.Constructor",
          "name": "Constructor",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html#Constructor",
          "type": "class"
        },
        "index": {
          "description": "Class for datatypes that represent data constructors For non-symbolic constructors only conName has to be defined The weird argument is supposed to be instantiated with from base hence the complex kind",
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "Constructor",
          "package": "regular",
          "partial": "Constructor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype to represent the fixity of a constructor. An infix declaration\n directly corresponds to an application of \u003ccode\u003e\u003ca\u003eInfix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Constructor",
          "name": "Fixity",
          "package": "regular",
          "source": "src/Generics-Regular-Constructor.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "Datatype to represent the fixity of constructor An infix declaration directly corresponds to an application of Infix",
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "Fixity",
          "package": "regular",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Constructor",
          "name": "conFixity",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e Fixity",
          "source": "src/Generics-Regular-Constructor.html#conFixity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "conFixity",
          "normalized": "*-\u003e*)a-\u003eFixity",
          "package": "regular",
          "partial": "Fixity",
          "signature": "*-\u003e*)r-\u003eFixity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:conFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Constructor",
          "name": "conIsRecord",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e Bool",
          "source": "src/Generics-Regular-Constructor.html#conIsRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "conIsRecord",
          "normalized": "*-\u003e*)a-\u003eBool",
          "package": "regular",
          "partial": "Is Record",
          "signature": "*-\u003e*)r-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:conIsRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Constructor",
          "name": "conName",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e String",
          "source": "src/Generics-Regular-Constructor.html#conName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Constructor",
          "module": "Generics.Regular.Constructor",
          "name": "conName",
          "normalized": "*-\u003e*)a-\u003eString",
          "package": "regular",
          "partial": "Name",
          "signature": "*-\u003e*)r-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Constructor.html#v:conName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Return the name of all the constructors of a type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.ConNames",
          "name": "ConNames",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-ConNames.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Return the name of all the constructors of type",
          "hierarchy": "Generics Regular Functions ConNames",
          "module": "Generics.Regular.Functions.ConNames",
          "name": "ConNames",
          "package": "regular",
          "partial": "Con Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-ConNames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.ConNames",
          "name": "ConNames",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-ConNames.html#ConNames",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Regular Functions ConNames",
          "module": "Generics.Regular.Functions.ConNames",
          "name": "ConNames",
          "package": "regular",
          "partial": "Con Names",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-ConNames.html#t:ConNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the name of all the constructors of the type of the given term.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.ConNames",
          "name": "conNames",
          "package": "regular",
          "signature": "a -\u003e [String]",
          "source": "src/Generics-Regular-Functions-ConNames.html#conNames",
          "type": "function"
        },
        "index": {
          "description": "Return the name of all the constructors of the type of the given term",
          "hierarchy": "Generics Regular Functions ConNames",
          "module": "Generics.Regular.Functions.ConNames",
          "name": "conNames",
          "normalized": "a-\u003e[String]",
          "package": "regular",
          "partial": "Names",
          "signature": "a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-ConNames.html#v:conNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.ConNames",
          "name": "hconNames",
          "package": "regular",
          "signature": "f a -\u003e [String]",
          "source": "src/Generics-Regular-Functions-ConNames.html#hconNames",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions ConNames",
          "module": "Generics.Regular.Functions.ConNames",
          "name": "hconNames",
          "normalized": "a b-\u003e[String]",
          "package": "regular",
          "partial": "Names",
          "signature": "f a-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-ConNames.html#v:hconNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic crush.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "Crush",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Crush.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic crush",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "Crush",
          "package": "regular",
          "partial": "Crush",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociativity of the binary operator used for \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "Assoc",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Crush.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "Associativity of the binary operator used for crush",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "Assoc",
          "package": "regular",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eCrush\u003c/code\u003e class defines a right-associative crush on functorial values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "Crush",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Crush.html#Crush",
          "type": "class"
        },
        "index": {
          "description": "The Crush class defines right-associative crush on functorial values",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "Crush",
          "package": "regular",
          "partial": "Crush",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#t:Crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "AssocLeft",
          "package": "regular",
          "signature": "AssocLeft",
          "source": "src/Generics-Regular-Functions-Crush.html#Assoc",
          "type": "function"
        },
        "index": {
          "description": "Left-associative",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "AssocLeft",
          "package": "regular",
          "partial": "Assoc Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:AssocLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "AssocRight",
          "package": "regular",
          "signature": "AssocRight",
          "source": "src/Generics-Regular-Functions-Crush.html#Assoc",
          "type": "function"
        },
        "index": {
          "description": "Right-associative",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "AssocRight",
          "package": "regular",
          "partial": "Assoc Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:AssocRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Crush",
          "name": "crush",
          "package": "regular",
          "signature": "Assoc -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Generics-Regular-Functions-Crush.html#crush",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "crush",
          "normalized": "Assoc-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "regular",
          "signature": "Assoc-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Crush",
          "name": "crushl",
          "package": "regular",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Generics-Regular-Functions-Crush.html#crushl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "crushl",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "regular",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:crushl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Crush",
          "name": "crushr",
          "package": "regular",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Generics-Regular-Functions-Crush.html#crushr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "crushr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "regular",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:crushr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a structure by collecting all the elements present.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "flattenl",
          "package": "regular",
          "signature": "f a -\u003e [a]",
          "source": "src/Generics-Regular-Functions-Crush.html#flattenl",
          "type": "function"
        },
        "index": {
          "description": "Flatten structure by collecting all the elements present",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "flattenl",
          "normalized": "a b-\u003e[b]",
          "package": "regular",
          "signature": "f a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:flattenl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a structure by collecting all the elements present.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Crush",
          "name": "flattenr",
          "package": "regular",
          "signature": "f a -\u003e [a]",
          "source": "src/Generics-Regular-Functions-Crush.html#flattenr",
          "type": "function"
        },
        "index": {
          "description": "Flatten structure by collecting all the elements present",
          "hierarchy": "Generics Regular Functions Crush",
          "module": "Generics.Regular.Functions.Crush",
          "name": "flattenr",
          "normalized": "a b-\u003e[b]",
          "package": "regular",
          "signature": "f a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Crush.html#v:flattenr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic equality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Eq",
          "name": "Eq",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic equality",
          "hierarchy": "Generics Regular Functions Eq",
          "module": "Generics.Regular.Functions.Eq",
          "name": "Eq",
          "package": "regular",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Eq",
          "name": "Eq",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Eq.html#Eq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Eq",
          "module": "Generics.Regular.Functions.Eq",
          "name": "Eq",
          "package": "regular",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Eq.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Eq",
          "name": "eq",
          "package": "regular",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-Regular-Functions-Eq.html#eq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Eq",
          "module": "Generics.Regular.Functions.Eq",
          "name": "eq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "regular",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Eq.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Eq",
          "name": "eqf",
          "package": "regular",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e f a -\u003e f a -\u003e Bool",
          "source": "src/Generics-Regular-Functions-Eq.html#eqf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Eq",
          "module": "Generics.Regular.Functions.Eq",
          "name": "eqf",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb a-\u003eb a-\u003eBool",
          "package": "regular",
          "signature": "(a-\u003ea-\u003eBool)-\u003ef a-\u003ef a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Eq.html#v:eqf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic folding and unfolding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Fold",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Fold.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic folding and unfolding",
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Fold",
          "package": "regular",
          "partial": "Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "Alg",
          "package": "regular",
          "signature": "Alg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Alg",
          "package": "regular",
          "partial": "Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#t:Alg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "Algebra",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Fold.html#Algebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Algebra",
          "package": "regular",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "CoAlg",
          "package": "regular",
          "signature": "CoAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "CoAlg",
          "package": "regular",
          "partial": "Co Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#t:CoAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "CoAlgebra",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Fold.html#CoAlgebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "CoAlgebra",
          "package": "regular",
          "partial": "Co Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#t:CoAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class fold explains how to convert an algebra\n   \u003ccode\u003e\u003ca\u003eAlg\u003c/a\u003e\u003c/code\u003e into a function from functor to result.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Fold",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Fold.html#Fold",
          "type": "class"
        },
        "index": {
          "description": "The class fold explains how to convert an algebra Alg into function from functor to result",
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Fold",
          "package": "regular",
          "partial": "Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class unfold explains how to convert a coalgebra \u003ccode\u003e\u003ca\u003eCoAlg\u003c/a\u003e\u003c/code\u003e and a seed\n into a representation.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Unfold",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Fold.html#Unfold",
          "type": "class"
        },
        "index": {
          "description": "The class unfold explains how to convert coalgebra CoAlg and seed into representation",
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "Unfold",
          "package": "regular",
          "partial": "Unfold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#t:Unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor constructing algebras it is helpful to use this pairing combinator.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Fold",
          "name": "(&)",
          "package": "regular",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Generics-Regular-Functions-Fold.html#%26",
          "type": "function"
        },
        "index": {
          "description": "For constructing algebras it is helpful to use this pairing combinator",
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "(&) &",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "regular",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "alg",
          "package": "regular",
          "signature": "Alg f r -\u003e f r -\u003e r",
          "source": "src/Generics-Regular-Functions-Fold.html#alg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "alg",
          "normalized": "Alg a b-\u003ea b-\u003eb",
          "package": "regular",
          "signature": "Alg f r-\u003ef r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#v:alg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "coalg",
          "package": "regular",
          "signature": "(s -\u003e a) -\u003e CoAlg f s -\u003e f a",
          "source": "src/Generics-Regular-Functions-Fold.html#coalg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "coalg",
          "normalized": "(a-\u003eb)-\u003eCoAlg c a-\u003ec b",
          "package": "regular",
          "signature": "(s-\u003ea)-\u003eCoAlg f s-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#v:coalg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold with convenient algebras.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Fold",
          "name": "fold",
          "package": "regular",
          "signature": "Algebra a r -\u003e a -\u003e r",
          "source": "src/Generics-Regular-Functions-Fold.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold with convenient algebras",
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "fold",
          "normalized": "Algebra a b-\u003ea-\u003eb",
          "package": "regular",
          "signature": "Algebra a r-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Fold",
          "name": "unfold",
          "package": "regular",
          "signature": "CoAlgebra a s -\u003e s -\u003e a",
          "source": "src/Generics-Regular-Functions-Fold.html#unfold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Fold",
          "module": "Generics.Regular.Functions.Fold",
          "name": "unfold",
          "normalized": "CoAlgebra a b-\u003eb-\u003ea",
          "package": "regular",
          "signature": "CoAlgebra a s-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Fold.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Monadic generic map.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.GMap",
          "name": "GMap",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-GMap.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Monadic generic map",
          "hierarchy": "Generics Regular Functions GMap",
          "module": "Generics.Regular.Functions.GMap",
          "name": "GMap",
          "package": "regular",
          "partial": "GMap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-GMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.GMap",
          "name": "Functor",
          "package": "regular",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Generics Regular Functions GMap",
          "module": "Generics.Regular.Functions.GMap",
          "name": "Functor",
          "package": "regular",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-GMap.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eGMap\u003c/code\u003e class defines a monadic functorial map.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.GMap",
          "name": "GMap",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-GMap.html#GMap",
          "type": "class"
        },
        "index": {
          "description": "The GMap class defines monadic functorial map",
          "hierarchy": "Generics Regular Functions GMap",
          "module": "Generics.Regular.Functions.GMap",
          "name": "GMap",
          "package": "regular",
          "partial": "GMap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-GMap.html#t:GMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.GMap",
          "name": "fmap",
          "package": "regular",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions GMap",
          "module": "Generics.Regular.Functions.GMap",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "regular",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-GMap.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.GMap",
          "name": "fmapM",
          "package": "regular",
          "signature": "(a -\u003e m b) -\u003e f a -\u003e m (f b)",
          "source": "src/Generics-Regular-Functions-GMap.html#fmapM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions GMap",
          "module": "Generics.Regular.Functions.GMap",
          "name": "fmapM",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "regular",
          "signature": "(a-\u003em b)-\u003ef a-\u003em(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-GMap.html#v:fmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functionality for regular dataypes: mapM, flatten, zip,\n equality, show, value generation and fold.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.LR",
          "name": "LR",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-LR.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functionality for regular dataypes mapM flatten zip equality show value generation and fold",
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "LR",
          "package": "regular",
          "partial": "LR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLR\u003c/code\u003e class defines two functions, \u003ccode\u003eleftf\u003c/code\u003e and \u003ccode\u003erightf\u003c/code\u003e, which should \n produce different functorial values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.LR",
          "name": "LR",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-LR.html#LR",
          "type": "class"
        },
        "index": {
          "description": "The LR class defines two functions leftf and rightf which should produce different functorial values",
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "LR",
          "package": "regular",
          "partial": "LR",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#t:LR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLRBase\u003c/code\u003e class defines two functions, \u003ccode\u003eleftb\u003c/code\u003e and \u003ccode\u003erightb\u003c/code\u003e, which \n should produce different values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.LR",
          "name": "LRBase",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-LR.html#LRBase",
          "type": "class"
        },
        "index": {
          "description": "The LRBase class defines two functions leftb and rightb which should produce different values",
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "LRBase",
          "package": "regular",
          "partial": "LRBase",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#t:LRBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a value which should be different from the value returned by \n \u003ccode\u003eright\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.LR",
          "name": "left",
          "package": "regular",
          "signature": "a",
          "source": "src/Generics-Regular-Functions-LR.html#left",
          "type": "function"
        },
        "index": {
          "description": "Produces value which should be different from the value returned by right",
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "left",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.LR",
          "name": "leftb",
          "package": "regular",
          "signature": "a",
          "source": "src/Generics-Regular-Functions-LR.html#leftb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "leftb",
          "package": "regular",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#v:leftb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.LR",
          "name": "leftf",
          "package": "regular",
          "signature": "a -\u003e f a",
          "source": "src/Generics-Regular-Functions-LR.html#leftf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "leftf",
          "normalized": "a-\u003eb a",
          "package": "regular",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#v:leftf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a value which should be different from the value returned by \n \u003ccode\u003eleft\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.LR",
          "name": "right",
          "package": "regular",
          "signature": "a",
          "source": "src/Generics-Regular-Functions-LR.html#right",
          "type": "function"
        },
        "index": {
          "description": "Produces value which should be different from the value returned by left",
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "right",
          "package": "regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.LR",
          "name": "rightb",
          "package": "regular",
          "signature": "a",
          "source": "src/Generics-Regular-Functions-LR.html#rightb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "rightb",
          "package": "regular",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#v:rightb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.LR",
          "name": "rightf",
          "package": "regular",
          "signature": "a -\u003e f a",
          "source": "src/Generics-Regular-Functions-LR.html#rightf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions LR",
          "module": "Generics.Regular.Functions.LR",
          "name": "rightf",
          "normalized": "a-\u003eb a",
          "package": "regular",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-LR.html#v:rightf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic read. This module is not exported by \n \u003ca\u003eGenerics.Regular.Functions\u003c/a\u003e to avoid clashes with \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Read",
          "name": "Read",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Read.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic read This module is not exported by Generics.Regular.Functions to avoid clashes with Prelude",
          "hierarchy": "Generics Regular Functions Read",
          "module": "Generics.Regular.Functions.Read",
          "name": "Read",
          "package": "regular",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Read",
          "name": "Read",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Read.html#Read",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Read",
          "module": "Generics.Regular.Functions.Read",
          "name": "Read",
          "package": "regular",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Read.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Read",
          "name": "hreader",
          "package": "regular",
          "signature": "ReadPrec a -\u003e Bool -\u003e ReadPrec (f a)",
          "source": "src/Generics-Regular-Functions-Read.html#hreader",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Read",
          "module": "Generics.Regular.Functions.Read",
          "name": "hreader",
          "normalized": "ReadPrec a-\u003eBool-\u003eReadPrec(b a)",
          "package": "regular",
          "signature": "ReadPrec a-\u003eBool-\u003eReadPrec(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Read.html#v:hreader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Read",
          "name": "read",
          "package": "regular",
          "signature": "String -\u003e a",
          "source": "src/Generics-Regular-Functions-Read.html#read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Read",
          "module": "Generics.Regular.Functions.Read",
          "name": "read",
          "normalized": "String-\u003ea",
          "package": "regular",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Read.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Read",
          "name": "readPrec",
          "package": "regular",
          "signature": "ReadPrec a",
          "source": "src/Generics-Regular-Functions-Read.html#readPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Read",
          "module": "Generics.Regular.Functions.Read",
          "name": "readPrec",
          "package": "regular",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Read.html#v:readPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Read",
          "name": "readsPrec",
          "package": "regular",
          "signature": "Int -\u003e ReadS a",
          "source": "src/Generics-Regular-Functions-Read.html#readsPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Read",
          "module": "Generics.Regular.Functions.Read",
          "name": "readsPrec",
          "normalized": "Int-\u003eReadS a",
          "package": "regular",
          "partial": "Prec",
          "signature": "Int-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Read.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic show. This module is not exported by \n \u003ca\u003eGenerics.Regular.Functions\u003c/a\u003e to avoid clashes with \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Show",
          "name": "Show",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Show.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic show This module is not exported by Generics.Regular.Functions to avoid clashes with Prelude",
          "hierarchy": "Generics Regular Functions Show",
          "module": "Generics.Regular.Functions.Show",
          "name": "Show",
          "package": "regular",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eShow\u003c/code\u003e class defines a show on values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Show",
          "name": "Show",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Show.html#Show",
          "type": "class"
        },
        "index": {
          "description": "The Show class defines show on values",
          "hierarchy": "Generics Regular Functions Show",
          "module": "Generics.Regular.Functions.Show",
          "name": "Show",
          "package": "regular",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Show.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Show",
          "name": "hshowsPrec",
          "package": "regular",
          "signature": "(Int -\u003e a -\u003e ShowS) -\u003e Bool -\u003e Int -\u003e f a -\u003e ShowS",
          "source": "src/Generics-Regular-Functions-Show.html#hshowsPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Show",
          "module": "Generics.Regular.Functions.Show",
          "name": "hshowsPrec",
          "normalized": "(Int-\u003ea-\u003eShowS)-\u003eBool-\u003eInt-\u003eb a-\u003eShowS",
          "package": "regular",
          "partial": "Prec",
          "signature": "(Int-\u003ea-\u003eShowS)-\u003eBool-\u003eInt-\u003ef a-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Show.html#v:hshowsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Show",
          "name": "show",
          "package": "regular",
          "signature": "a -\u003e String",
          "source": "src/Generics-Regular-Functions-Show.html#show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Show",
          "module": "Generics.Regular.Functions.Show",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "regular",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Show.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Show",
          "name": "shows",
          "package": "regular",
          "signature": "a -\u003e ShowS",
          "source": "src/Generics-Regular-Functions-Show.html#shows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Show",
          "module": "Generics.Regular.Functions.Show",
          "name": "shows",
          "normalized": "a-\u003eShowS",
          "package": "regular",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Show.html#v:shows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic zip.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Zip",
          "name": "Zip",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Zip.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic zip",
          "hierarchy": "Generics Regular Functions Zip",
          "module": "Generics.Regular.Functions.Zip",
          "name": "Zip",
          "package": "regular",
          "partial": "Zip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Zip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eZip\u003c/code\u003e class defines a monadic zip on functorial values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Zip",
          "name": "Zip",
          "package": "regular",
          "source": "src/Generics-Regular-Functions-Zip.html#Zip",
          "type": "class"
        },
        "index": {
          "description": "The Zip class defines monadic zip on functorial values",
          "hierarchy": "Generics Regular Functions Zip",
          "module": "Generics.Regular.Functions.Zip",
          "name": "Zip",
          "package": "regular",
          "partial": "Zip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Zip.html#t:Zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctorial zip with a non-monadic function, resulting in a monadic value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Zip",
          "name": "fzip",
          "package": "regular",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e m (f c)",
          "source": "src/Generics-Regular-Functions-Zip.html#fzip",
          "type": "function"
        },
        "index": {
          "description": "Functorial zip with non-monadic function resulting in monadic value",
          "hierarchy": "Generics Regular Functions Zip",
          "module": "Generics.Regular.Functions.Zip",
          "name": "fzip",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ee(d c)",
          "package": "regular",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003em(f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Zip.html#v:fzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial functorial zip with a non-monadic function.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Zip",
          "name": "fzip'",
          "package": "regular",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Generics-Regular-Functions-Zip.html#fzip%27",
          "type": "function"
        },
        "index": {
          "description": "Partial functorial zip with non-monadic function",
          "hierarchy": "Generics Regular Functions Zip",
          "module": "Generics.Regular.Functions.Zip",
          "name": "fzip'",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "regular",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Zip.html#v:fzip-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Zip",
          "name": "fzipM",
          "package": "regular",
          "signature": "(a -\u003e b -\u003e m c) -\u003e f a -\u003e f b -\u003e m (f c)",
          "source": "src/Generics-Regular-Functions-Zip.html#fzipM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Zip",
          "module": "Generics.Regular.Functions.Zip",
          "name": "fzipM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003ee b-\u003ec(e d)",
          "package": "regular",
          "signature": "(a-\u003eb-\u003em c)-\u003ef a-\u003ef b-\u003em(f c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions-Zip.html#v:fzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: All of the generic functionality for regular dataypes: mapM, \n flatten, zip, equality, value generation, fold and unfold.\n Generic show (\u003ca\u003eGenerics.Regular.Functions.Show\u003c/a\u003e), generic read \n (\u003ca\u003eGenerics.Regular.Functions.Read\u003c/a\u003e) and generic equality \n (\u003ca\u003eGenerics.Regular.Functions.Eq\u003c/a\u003e) are not exported to prevent clashes\n with \u003ccode\u003ePrelude\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions",
          "name": "Functions",
          "package": "regular",
          "source": "src/Generics-Regular-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "Summary All of the generic functionality for regular dataypes mapM flatten zip equality value generation fold and unfold Generic show Generics.Regular.Functions.Show generic read Generics.Regular.Functions.Read and generic equality Generics.Regular.Functions.Eq are not exported to prevent clashes with Prelude",
          "hierarchy": "Generics Regular Functions",
          "module": "Generics.Regular.Functions",
          "name": "Functions",
          "package": "regular",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Representation for record selectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Selector",
          "name": "Selector",
          "package": "regular",
          "source": "src/Generics-Regular-Selector.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Representation for record selectors",
          "hierarchy": "Generics Regular Selector",
          "module": "Generics.Regular.Selector",
          "name": "Selector",
          "package": "regular",
          "partial": "Selector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Selector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Selector",
          "name": "Selector",
          "package": "regular",
          "source": "src/Generics-Regular-Selector.html#Selector",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Regular Selector",
          "module": "Generics.Regular.Selector",
          "name": "Selector",
          "package": "regular",
          "partial": "Selector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Selector.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Selector",
          "name": "selName",
          "package": "regular",
          "signature": "* -\u003e *) r -\u003e String",
          "source": "src/Generics-Regular-Selector.html#selName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Selector",
          "module": "Generics.Regular.Selector",
          "name": "selName",
          "normalized": "*-\u003e*)a-\u003eString",
          "package": "regular",
          "partial": "Name",
          "signature": "*-\u003e*)r-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-Selector.html#v:selName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Template Haskell code that can be used to\n automatically generate the boilerplate code for the regular\n library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.TH",
          "name": "TH",
          "package": "regular",
          "source": "src/Generics-Regular-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Template Haskell code that can be used to automatically generate the boilerplate code for the regular library",
          "hierarchy": "Generics Regular TH",
          "module": "Generics.Regular.TH",
          "name": "TH",
          "package": "regular",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the type and the name (as string) for the pattern functor to derive,\n generate the Constructor' instances, the Selector' instances and the\n \u003ccode\u003e\u003ca\u003eRegular\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Generics.Regular.TH",
          "name": "deriveAll",
          "package": "regular",
          "signature": "Name -\u003e String -\u003e Q [Dec]",
          "source": "src/Generics-Regular-TH.html#deriveAll",
          "type": "function"
        },
        "index": {
          "description": "Given the type and the name as string for the pattern functor to derive generate the Constructor instances the Selector instances and the Regular instance",
          "hierarchy": "Generics Regular TH",
          "module": "Generics.Regular.TH",
          "name": "deriveAll",
          "normalized": "Name-\u003eString-\u003eQ[Dec]",
          "package": "regular",
          "partial": "All",
          "signature": "Name-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-TH.html#v:deriveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a datatype name, derive datatypes and \n instances of class \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.TH",
          "name": "deriveConstructors",
          "package": "regular",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-Regular-TH.html#deriveConstructors",
          "type": "function"
        },
        "index": {
          "description": "Given datatype name derive datatypes and instances of class Constructor",
          "hierarchy": "Generics Regular TH",
          "module": "Generics.Regular.TH",
          "name": "deriveConstructors",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "regular",
          "partial": "Constructors",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-TH.html#v:deriveConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003ePF\u003c/a\u003e\u003c/code\u003e instance. Not needed if \u003ccode\u003e\u003ca\u003ederiveRegular\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.Regular.TH",
          "name": "derivePF",
          "package": "regular",
          "signature": "String -\u003e Name -\u003e Q [Dec]",
          "source": "src/Generics-Regular-TH.html#derivePF",
          "type": "function"
        },
        "index": {
          "description": "Derive only the PF instance Not needed if deriveRegular is used",
          "hierarchy": "Generics Regular TH",
          "module": "Generics.Regular.TH",
          "name": "derivePF",
          "normalized": "String-\u003eName-\u003eQ[Dec]",
          "package": "regular",
          "partial": "PF",
          "signature": "String-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-TH.html#v:derivePF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the type and the name (as string) for the\n pattern functor to derive, generate the \u003ccode\u003e\u003ca\u003eRegular\u003c/a\u003e\u003c/code\u003e\n instance.\n\u003c/p\u003e",
          "module": "Generics.Regular.TH",
          "name": "deriveRegular",
          "package": "regular",
          "signature": "Name -\u003e String -\u003e Q [Dec]",
          "source": "src/Generics-Regular-TH.html#deriveRegular",
          "type": "function"
        },
        "index": {
          "description": "Given the type and the name as string for the pattern functor to derive generate the Regular instance",
          "hierarchy": "Generics Regular TH",
          "module": "Generics.Regular.TH",
          "name": "deriveRegular",
          "normalized": "Name-\u003eString-\u003eQ[Dec]",
          "package": "regular",
          "partial": "Regular",
          "signature": "Name-\u003eString-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-TH.html#v:deriveRegular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a datatype name, derive datatypes and \n instances of class \u003ccode\u003e\u003ca\u003eSelector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.TH",
          "name": "deriveSelectors",
          "package": "regular",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-Regular-TH.html#deriveSelectors",
          "type": "function"
        },
        "index": {
          "description": "Given datatype name derive datatypes and instances of class Selector",
          "hierarchy": "Generics Regular TH",
          "module": "Generics.Regular.TH",
          "name": "deriveSelectors",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "regular",
          "partial": "Selectors",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular-TH.html#v:deriveSelectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Top-level module for this library.\n By importing this module, the user is able to use all the generic\n functionality. The user is only required to provide an instance of\n \u003ccode\u003eRegular\u003c/code\u003e for the datatype.\n\u003c/p\u003e\u003cp\u003eConsider a datatype representing logical expressions:\n\u003c/p\u003e\u003cpre\u003e  data Logic = Var String\n             | Logic :-\u003e:  Logic  -- implication\n             | Logic :\u003c-\u003e: Logic  -- equivalence\n             | Logic :&&:  Logic  -- and (conjunction)\n             | Logic :||:  Logic  -- or (disjunction)\n             | Not Logic          -- not\n             | T                  -- true\n             | F                  -- false\n\u003c/pre\u003e\u003cp\u003eFirst we import the relevant modules:\n\u003c/p\u003e\u003cpre\u003e import Generics.Regular\n import Generics.Regular.Functions\n import qualified Generics.Regular.Functions.Show as G\n import qualified Generics.Regular.Functions.Read as G\n\u003c/pre\u003e\u003cp\u003eAn instance of \u003ccode\u003eRegular\u003c/code\u003e can be derived automatically with TH by invoking:\n\u003c/p\u003e\u003cpre\u003e $(deriveAll ''Logic \"PFLogic\")\n type instance PF Logic = PFLogic\n\u003c/pre\u003e\u003cp\u003eWe define some logic expressions:\n\u003c/p\u003e\u003cpre\u003e l1, l2, l3 :: Logic\n l1 = Var \"p\"\n l2 = Not l1\n l3 = l1 :-\u003e: l2\n\u003c/pre\u003e\u003cp\u003eAnd now we can use all of the generic functions. Flattening:\n\u003c/p\u003e\u003cpre\u003e ex0 :: [Logic]\n ex0 = flattenr (from l3)\n\n \u003e [Var \"p\",Not (Var \"p\")]\n\u003c/pre\u003e\u003cp\u003eGeneric equality:\n\u003c/p\u003e\u003cpre\u003e ex1, ex2 :: Bool\n ex1 = eq l3 l3\n\n \u003e True\n\n\n ex2 = eq l3 l2\n\n \u003e False\n\u003c/pre\u003e\u003cp\u003eGeneric show:\n\u003c/p\u003e\u003cpre\u003e ex3 :: String\n ex3 = G.show l3\n\n \u003e \"((:-\u003e:) (Var \\\"p\\\") (Not (Var \\\"p\\\")))\"\n\u003c/pre\u003e\u003cp\u003eGeneric read:\n\u003c/p\u003e\u003cpre\u003e ex4 :: Logic\n ex4 = G.read ex3\n\n \u003e Var \"p\" :-\u003e: Not (Var \"p\")\n\u003c/pre\u003e\u003cp\u003eValue generation:\n\u003c/p\u003e\u003cpre\u003e ex5, ex6 :: Logic\n ex5 = left\n\n \u003e Var \"\"\n\n\n ex6 = right\n\n \u003e F\n\u003c/pre\u003e\u003cp\u003eFolding:\n\u003c/p\u003e\u003cpre\u003e ex7 :: Bool\n ex7 = fold (alg (\\_ -\u003e False)) l3 where\n   alg env = (env & impl & (==) & (&&) & (||) & not & True & False)\n   impl p q = not p || q\n\n \u003e True\n\u003c/pre\u003e\u003cp\u003eUnfolding:\n\u003c/p\u003e\u003cpre\u003e ex8 :: Logic\n ex8 = unfold alg 8 where\n   alg :: CoAlgebra Logic Int\n   alg n | odd n || n \u003c= 0 = Left \"\"\n         | even n          = Right (Left (n-1,n-2))\n\n \u003e Var \"\" :-\u003e: (Var \"\" :-\u003e: (Var \"\" :-\u003e: (Var \"\" :-\u003e: Var \"\")))\n\u003c/pre\u003e\u003cp\u003eConstructor names:\n\u003c/p\u003e\u003cpre\u003e ex9 = conNames (undefined :: Logic)\n\n \u003e [\"Var\",\":-\u003e:\",\":\u003c-\u003e:\",\":&&:\",\":||:\",\"Not\",\"T\",\"F\"]\n\u003c/pre\u003e\u003cp\u003eDeep seq:\n\u003c/p\u003e\u003cpre\u003e ex10 = gdseq (Not (T :-\u003e: (error \"deep seq works\"))) ()\n\n \u003e *** Exception: deep seq works\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.Regular",
          "name": "Regular",
          "package": "regular",
          "source": "src/Generics-Regular.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Top-level module for this library By importing this module the user is able to use all the generic functionality The user is only required to provide an instance of Regular for the datatype Consider datatype representing logical expressions data Logic Var String Logic Logic implication Logic Logic equivalence Logic Logic and conjunction Logic Logic or disjunction Not Logic not true false First we import the relevant modules import Generics.Regular import Generics.Regular.Functions import qualified Generics.Regular.Functions.Show as import qualified Generics.Regular.Functions.Read as An instance of Regular can be derived automatically with TH by invoking deriveAll Logic PFLogic type instance PF Logic PFLogic We define some logic expressions l1 l2 l3 Logic l1 Var l2 Not l1 l3 l1 l2 And now we can use all of the generic functions Flattening ex0 Logic ex0 flattenr from l3 Var Not Var Generic equality ex1 ex2 Bool ex1 eq l3 l3 True ex2 eq l3 l2 False Generic show ex3 String ex3 G.show l3 Var Not Var Generic read ex4 Logic ex4 G.read ex3 Var Not Var Value generation ex5 ex6 Logic ex5 left Var ex6 right Folding ex7 Bool ex7 fold alg False l3 where alg env env impl not True False impl not True Unfolding ex8 Logic ex8 unfold alg where alg CoAlgebra Logic Int alg odd Left even Right Left n-1 n-2 Var Var Var Var Var Constructor names ex9 conNames undefined Logic Var Not Deep seq ex10 gdseq Not error deep seq works Exception deep seq works",
          "hierarchy": "Generics Regular",
          "module": "Generics.Regular",
          "name": "Regular",
          "package": "regular",
          "partial": "Regular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular/docs/Generics-Regular.html#"
      }
    }
  ]
]