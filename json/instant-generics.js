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
        "word": "instant-generics"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the basic representation types and the conversion\n functions \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e. A typical instance for a user-defined datatype\n would be:\n\u003c/p\u003e\u003cpre\u003e -- Example datatype\n data Exp = Const Int | Plus Exp Exp\n\n -- Auxiliary datatypes for constructor representations\n data Const\n data Plus\n \n instance Constructor Const where conName _ = \"Const\"\n instance Constructor Plus  where conName _ = \"Plus\"\n \n -- Representable instance\n instance Representable Exp where\n   type Rep Exp = C Const (Var Int) :+: C Plus (Rec Exp :*: Rec Exp)\n \n   from (Const n)   = L (C (Var n))\n   from (Plus e e') = R (C (Rec e :*: Rec e'))\n \n   to (L (C (Var n)))            = Const n\n   to (R (C (Rec e :*: Rec e'))) = Plus e e'\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.Instant.Base",
          "name": "Base",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the basic representation types and the conversion functions to and from typical instance for user-defined datatype would be Example datatype data Exp Const Int Plus Exp Exp Auxiliary datatypes for constructor representations data Const data Plus instance Constructor Const where conName Const instance Constructor Plus where conName Plus Representable instance instance Representable Exp where type Rep Exp Const Var Int Plus Rec Exp Rec Exp from Const Var from Plus Rec Rec to Var Const to Rec Rec Plus",
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Base",
          "package": "instant-generics",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": ":*:",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": ":*:",
          "package": "instant-generics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": ":+:",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": ":+:",
          "package": "instant-generics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype to represent the associativy of a constructor.\n\u003c/p\u003e",
          "module": "Generics.Instant.Base",
          "name": "Associativity",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Associativity",
          "type": "data"
        },
        "index": {
          "description": "Datatype to represent the associativy of constructor",
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Associativity",
          "package": "instant-generics",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "C",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#C",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "C",
          "package": "instant-generics",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "CEq",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#CEq",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "CEq",
          "package": "instant-generics",
          "partial": "CEq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:CEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for datatypes that represent data constructors.\n For non-symbolic constructors, only \u003ccode\u003e\u003ca\u003econName\u003c/a\u003e\u003c/code\u003e has to be defined.\n\u003c/p\u003e",
          "module": "Generics.Instant.Base",
          "name": "Constructor",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Constructor",
          "type": "class"
        },
        "index": {
          "description": "Class for datatypes that represent data constructors For non-symbolic constructors only conName has to be defined",
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Constructor",
          "package": "instant-generics",
          "partial": "Constructor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype to represent the fixity of a constructor. An infix declaration\n directly corresponds to an application of \u003ccode\u003e\u003ca\u003eInfix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Instant.Base",
          "name": "Fixity",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "Datatype to represent the fixity of constructor An infix declaration directly corresponds to an application of Infix",
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Fixity",
          "package": "instant-generics",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Rec",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Rec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Rec",
          "package": "instant-generics",
          "partial": "Rec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Representable",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Representable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Representable",
          "package": "instant-generics",
          "partial": "Representable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Su",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Su",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Su",
          "package": "instant-generics",
          "partial": "Su",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Su"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "U",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#U",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "U",
          "package": "instant-generics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Var",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Var",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Var",
          "package": "instant-generics",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "X",
          "package": "instant-generics",
          "signature": "X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "X",
          "package": "instant-generics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Z",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Z",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Z",
          "package": "instant-generics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Ze",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Base.html#Ze",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Ze",
          "package": "instant-generics",
          "partial": "Ze",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Ze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": ":*:",
          "package": "instant-generics",
          "signature": "a :*: b",
          "source": "src/Generics-Instant-Base.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": ":*:",
          "package": "instant-generics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "C",
          "package": "instant-generics",
          "signature": "a -\u003e CEq c p p a",
          "source": "src/Generics-Instant-Base.html#CEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "C",
          "normalized": "a-\u003eCEq b c c a",
          "package": "instant-generics",
          "signature": "a-\u003eCEq c p p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Infix",
          "package": "instant-generics",
          "signature": "Infix Associativity Int",
          "source": "src/Generics-Instant-Base.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Infix",
          "package": "instant-generics",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "L",
          "package": "instant-generics",
          "signature": "L a",
          "source": "src/Generics-Instant-Base.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "L",
          "package": "instant-generics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "LeftAssociative",
          "package": "instant-generics",
          "signature": "LeftAssociative",
          "source": "src/Generics-Instant-Base.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "LeftAssociative",
          "package": "instant-generics",
          "partial": "Left Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:LeftAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "NotAssociative",
          "package": "instant-generics",
          "signature": "NotAssociative",
          "source": "src/Generics-Instant-Base.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "NotAssociative",
          "package": "instant-generics",
          "partial": "Not Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:NotAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Prefix",
          "package": "instant-generics",
          "signature": "Prefix",
          "source": "src/Generics-Instant-Base.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Prefix",
          "package": "instant-generics",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "R",
          "package": "instant-generics",
          "signature": "R b",
          "source": "src/Generics-Instant-Base.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "R",
          "package": "instant-generics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Rec",
          "package": "instant-generics",
          "signature": "Rec a",
          "source": "src/Generics-Instant-Base.html#Rec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Rec",
          "package": "instant-generics",
          "partial": "Rec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "RightAssociative",
          "package": "instant-generics",
          "signature": "RightAssociative",
          "source": "src/Generics-Instant-Base.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "RightAssociative",
          "package": "instant-generics",
          "partial": "Right Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:RightAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "U",
          "package": "instant-generics",
          "signature": "U",
          "source": "src/Generics-Instant-Base.html#U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "U",
          "package": "instant-generics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "Var",
          "package": "instant-generics",
          "signature": "Var a",
          "source": "src/Generics-Instant-Base.html#Var",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "Var",
          "package": "instant-generics",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "conFixity",
          "package": "instant-generics",
          "signature": "t c p q a -\u003e Fixity",
          "source": "src/Generics-Instant-Base.html#conFixity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "conFixity",
          "normalized": "a b c d e-\u003eFixity",
          "package": "instant-generics",
          "partial": "Fixity",
          "signature": "t c p q a-\u003eFixity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:conFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "conIsRecord",
          "package": "instant-generics",
          "signature": "t c p q a -\u003e Bool",
          "source": "src/Generics-Instant-Base.html#conIsRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "conIsRecord",
          "normalized": "a b c d e-\u003eBool",
          "package": "instant-generics",
          "partial": "Is Record",
          "signature": "t c p q a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:conIsRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "conName",
          "package": "instant-generics",
          "signature": "t c p q a -\u003e String",
          "source": "src/Generics-Instant-Base.html#conName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "conName",
          "normalized": "a b c d e-\u003eString",
          "package": "instant-generics",
          "partial": "Name",
          "signature": "t c p q a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:conName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "from",
          "package": "instant-generics",
          "signature": "a -\u003e Rep a",
          "source": "src/Generics-Instant-Base.html#from",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "from",
          "normalized": "a-\u003eRep a",
          "package": "instant-generics",
          "signature": "a-\u003eRep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Base",
          "name": "to",
          "package": "instant-generics",
          "signature": "Rep a -\u003e a",
          "source": "src/Generics-Instant-Base.html#to",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Base",
          "module": "Generics.Instant.Base",
          "name": "to",
          "normalized": "Rep a-\u003ea",
          "package": "instant-generics",
          "signature": "Rep a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerically produce a single finite value of a datatype.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant.Functions.Empty",
          "name": "Empty",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Empty.html",
          "type": "module"
        },
        "index": {
          "description": "Generically produce single finite value of datatype",
          "hierarchy": "Generics Instant Functions Empty",
          "module": "Generics.Instant.Functions.Empty",
          "name": "Empty",
          "package": "instant-generics",
          "partial": "Empty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Empty",
          "name": "Empty",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Empty.html#Empty",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Empty",
          "module": "Generics.Instant.Functions.Empty",
          "name": "Empty",
          "package": "instant-generics",
          "partial": "Empty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#t:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe use \u003ccode\u003e\u003ca\u003eHasRec\u003c/a\u003e\u003c/code\u003e to check for recursion in the structure. This is used \n to avoid selecting a recursive branch in the sum case for \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Instant.Functions.Empty",
          "name": "HasRec",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Empty.html#HasRec",
          "type": "class"
        },
        "index": {
          "description": "We use HasRec to check for recursion in the structure This is used to avoid selecting recursive branch in the sum case for Empty",
          "hierarchy": "Generics Instant Functions Empty",
          "module": "Generics.Instant.Functions.Empty",
          "name": "HasRec",
          "package": "instant-generics",
          "partial": "Has Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#t:HasRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Empty",
          "name": "empty",
          "package": "instant-generics",
          "signature": "a",
          "source": "src/Generics-Instant-Functions-Empty.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Empty",
          "module": "Generics.Instant.Functions.Empty",
          "name": "empty",
          "package": "instant-generics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Empty",
          "name": "empty'",
          "package": "instant-generics",
          "signature": "a",
          "source": "src/Generics-Instant-Functions-Empty.html#empty%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Empty",
          "module": "Generics.Instant.Functions.Empty",
          "name": "empty'",
          "package": "instant-generics",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#v:empty-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Empty",
          "name": "hasRec'",
          "package": "instant-generics",
          "signature": "a -\u003e Bool",
          "source": "src/Generics-Instant-Functions-Empty.html#hasRec%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Empty",
          "module": "Generics.Instant.Functions.Empty",
          "name": "hasRec'",
          "normalized": "a-\u003eBool",
          "package": "instant-generics",
          "partial": "Rec'",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#v:hasRec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe equality function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant.Functions.Eq",
          "name": "Eq",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "The equality function",
          "hierarchy": "Generics Instant Functions Eq",
          "module": "Generics.Instant.Functions.Eq",
          "name": "Eq",
          "package": "instant-generics",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Eq",
          "name": "GEq",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Eq.html#GEq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Eq",
          "module": "Generics.Instant.Functions.Eq",
          "name": "GEq",
          "package": "instant-generics",
          "partial": "GEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#t:GEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Eq",
          "name": "geq",
          "package": "instant-generics",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-Instant-Functions-Eq.html#geq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Eq",
          "module": "Generics.Instant.Functions.Eq",
          "name": "geq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "instant-generics",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#v:geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Eq",
          "name": "geqDefault",
          "package": "instant-generics",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Generics-Instant-Functions-Eq.html#geqDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Eq",
          "module": "Generics.Instant.Functions.Eq",
          "name": "geqDefault",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "instant-generics",
          "partial": "Default",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#v:geqDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplified generic show function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant.Functions.Show",
          "name": "Show",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Show.html",
          "type": "module"
        },
        "index": {
          "description": "Simplified generic show function",
          "hierarchy": "Generics Instant Functions Show",
          "module": "Generics.Instant.Functions.Show",
          "name": "Show",
          "package": "instant-generics",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Show",
          "name": "GShow",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions-Show.html#GShow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Show",
          "module": "Generics.Instant.Functions.Show",
          "name": "GShow",
          "package": "instant-generics",
          "partial": "GShow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#t:GShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Show",
          "name": "gshow",
          "package": "instant-generics",
          "signature": "a -\u003e String",
          "source": "src/Generics-Instant-Functions-Show.html#gshow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Show",
          "module": "Generics.Instant.Functions.Show",
          "name": "gshow",
          "normalized": "a-\u003eString",
          "package": "instant-generics",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#v:gshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.Functions.Show",
          "name": "gshowDefault",
          "package": "instant-generics",
          "signature": "a -\u003e String",
          "source": "src/Generics-Instant-Functions-Show.html#gshowDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant Functions Show",
          "module": "Generics.Instant.Functions.Show",
          "name": "gshowDefault",
          "normalized": "a-\u003eString",
          "package": "instant-generics",
          "partial": "Default",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#v:gshowDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module simply reexports all the generic functions' modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant.Functions",
          "name": "Functions",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "This module simply reexports all the generic functions modules",
          "hierarchy": "Generics Instant Functions",
          "module": "Generics.Instant.Functions",
          "name": "Functions",
          "package": "instant-generics",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines instances of the \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e class for a number of\n basic Prelude types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant.Instances",
          "name": "Instances",
          "package": "instant-generics",
          "source": "src/Generics-Instant-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines instances of the Representable class for number of basic Prelude types",
          "hierarchy": "Generics Instant Instances",
          "module": "Generics.Instant.Instances",
          "name": "Instances",
          "package": "instant-generics",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Template Haskell code that can be used to\n automatically generate the boilerplate code for the generic deriving\n library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant.TH",
          "name": "TH",
          "package": "instant-generics",
          "source": "src/Generics-Instant-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Template Haskell code that can be used to automatically generate the boilerplate code for the generic deriving library",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "TH",
          "package": "instant-generics",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the type and the name (as string) for the type to derive,\n generate the \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e instances and the \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "deriveAll",
          "package": "instant-generics",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#deriveAll",
          "type": "function"
        },
        "index": {
          "description": "Given the type and the name as string for the type to derive generate the Constructor instances and the Representable instance",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "deriveAll",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "All",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e, but taking a list as input.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "deriveAllL",
          "package": "instant-generics",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#deriveAllL",
          "type": "function"
        },
        "index": {
          "description": "Same as deriveAll but taking list as input",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "deriveAllL",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "All",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveAllL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a datatype name, derive datatypes and \n instances of class \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "deriveConstructors",
          "package": "instant-generics",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#deriveConstructors",
          "type": "function"
        },
        "index": {
          "description": "Given datatype name derive datatypes and instances of class Constructor",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "deriveConstructors",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "Constructors",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e type synonym. Not needed if \u003ccode\u003e\u003ca\u003ederiveRepresentable\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "deriveRep",
          "package": "instant-generics",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#deriveRep",
          "type": "function"
        },
        "index": {
          "description": "Derive only the Rep type synonym Not needed if deriveRepresentable is used",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "deriveRep",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "Rep",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the type and the name (as string) for the Representable type\n synonym to derive, generate the \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "deriveRepresentable",
          "package": "instant-generics",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#deriveRepresentable",
          "type": "function"
        },
        "index": {
          "description": "Given the type and the name as string for the Representable type synonym to derive generate the Representable instance",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "deriveRepresentable",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "Representable",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveRepresentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the names of a generic class, a GADT type to instantiate, a function\n in the class and the default implementation, generates the code for a basic\n generic instance. This is tricky in general because we have to analyze the\n return types of each of the GADT constructors and give instances accordingly.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "gadtInstance",
          "package": "instant-generics",
          "signature": "Name -\u003e Name -\u003e Name -\u003e Name -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#gadtInstance",
          "type": "function"
        },
        "index": {
          "description": "Given the names of generic class GADT type to instantiate function in the class and the default implementation generates the code for basic generic instance This is tricky in general because we have to analyze the return types of each of the GADT constructors and give instances accordingly",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "gadtInstance",
          "normalized": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "Instance",
          "signature": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:gadtInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.TH",
          "name": "genRepName",
          "package": "instant-generics",
          "signature": "Name -\u003e Name",
          "source": "src/Generics-Instant-TH.html#genRepName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "genRepName",
          "normalized": "Name-\u003eName",
          "package": "instant-generics",
          "partial": "Rep Name",
          "signature": "Name-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:genRepName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the names of a generic class, a type to instantiate, a function in\n the class and the default implementation, generates the code for a basic\n generic instance.\n\u003c/p\u003e",
          "module": "Generics.Instant.TH",
          "name": "simplInstance",
          "package": "instant-generics",
          "signature": "Name -\u003e Name -\u003e Name -\u003e Name -\u003e Q [Dec]",
          "source": "src/Generics-Instant-TH.html#simplInstance",
          "type": "function"
        },
        "index": {
          "description": "Given the names of generic class type to instantiate function in the class and the default implementation generates the code for basic generic instance",
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "simplInstance",
          "normalized": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]",
          "package": "instant-generics",
          "partial": "Instance",
          "signature": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:simplInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.TH",
          "name": "tyVarBndrToName",
          "package": "instant-generics",
          "signature": "TyVarBndr -\u003e Name",
          "source": "src/Generics-Instant-TH.html#tyVarBndrToName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "tyVarBndrToName",
          "normalized": "TyVarBndr-\u003eName",
          "package": "instant-generics",
          "partial": "Var Bndr To Name",
          "signature": "TyVarBndr-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:tyVarBndrToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Instant.TH",
          "name": "typeVariables",
          "package": "instant-generics",
          "signature": "Info -\u003e [TyVarBndr]",
          "source": "src/Generics-Instant-TH.html#typeVariables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Instant TH",
          "module": "Generics.Instant.TH",
          "name": "typeVariables",
          "normalized": "Info-\u003e[TyVarBndr]",
          "package": "instant-generics",
          "partial": "Variables",
          "signature": "Info-\u003e[TyVarBndr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:typeVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module which re-exports the basic combinators and the generic\n instances for common datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Instant",
          "name": "Instant",
          "package": "instant-generics",
          "source": "src/Generics-Instant.html",
          "type": "module"
        },
        "index": {
          "description": "Top-level module which re-exports the basic combinators and the generic instances for common datatypes",
          "hierarchy": "Generics Instant",
          "module": "Generics.Instant",
          "name": "Instant",
          "package": "instant-generics",
          "partial": "Instant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant.html#"
      }
    }
  ]
]