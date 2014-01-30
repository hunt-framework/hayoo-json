[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the basic representation types and the conversion\n functions \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e. A typical instance for a user-defined datatype\n would be:\n\u003c/p\u003e\u003cpre\u003e -- Example datatype\n data Exp = Const Int | Plus Exp Exp\n\n -- Auxiliary datatypes for constructor representations\n data Const\n data Plus\n \n instance Constructor Const where conName _ = \"Const\"\n instance Constructor Plus  where conName _ = \"Plus\"\n \n -- Representable instance\n instance Representable Exp where\n   type Rep Exp = C Const (Var Int) :+: C Plus (Rec Exp :*: Rec Exp)\n \n   from (Const n)   = L (C (Var n))\n   from (Plus e e') = R (C (Rec e :*: Rec e'))\n \n   to (L (C (Var n)))            = Const n\n   to (R (C (Rec e :*: Rec e'))) = Plus e e'\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "This module defines the basic representation types and the conversion functions to and from typical instance for user-defined datatype would be Example datatype data Exp Const Int Plus Exp Exp Auxiliary datatypes for constructor representations data Const data Plus instance Constructor Const where conName Const instance Constructor Plus where conName Plus Representable instance instance Representable Exp where type Rep Exp Const Var Int Plus Rec Exp Rec Exp from Const Var from Plus Rec Rec to Var Const to Rec Rec Plus",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Base",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t::-42-:",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#%3A%2A%3A",
        "fct-type": "data",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": ":*:",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t::-43-:",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": ":+:",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Associativity",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype to represent the associativy of a constructor.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Associativity",
        "fct-type": "data",
        "title": "Associativity"
      },
      "index": {
        "description": "Datatype to represent the associativy of constructor",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Associativity",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Associativity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:C",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "type",
        "fct-source": "src/Generics-Instant-Base.html#C",
        "fct-type": "type",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "C",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:CEq",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#CEq",
        "fct-type": "data",
        "title": "CEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "CEq",
        "normalized": "",
        "package": "instant-generics",
        "partial": "CEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Constructor",
      "description": {
        "fct-descr": "\u003cp\u003eClass for datatypes that represent data constructors.\n For non-symbolic constructors, only \u003ccode\u003e\u003ca\u003econName\u003c/a\u003e\u003c/code\u003e has to be defined.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "class",
        "fct-source": "src/Generics-Instant-Base.html#Constructor",
        "fct-type": "class",
        "title": "Constructor"
      },
      "index": {
        "description": "Class for datatypes that represent data constructors For non-symbolic constructors only conName has to be defined",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Constructor",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Fixity",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype to represent the fixity of a constructor. An infix declaration\n directly corresponds to an application of \u003ccode\u003e\u003ca\u003eInfix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Fixity",
        "fct-type": "data",
        "title": "Fixity"
      },
      "index": {
        "description": "Datatype to represent the fixity of constructor An infix declaration directly corresponds to an application of Infix",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Fixity",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Fixity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Rec",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Rec",
        "fct-type": "data",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Rec",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Representable",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "class",
        "fct-source": "src/Generics-Instant-Base.html#Representable",
        "fct-type": "class",
        "title": "Representable"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Representable",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Su",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Su",
        "fct-type": "data",
        "title": "Su"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Su",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Su",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:U",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#U",
        "fct-type": "data",
        "title": "U"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "U",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Var",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Var",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:X",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "X",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "X",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Z",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Z",
        "fct-type": "data",
        "title": "Z"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Z",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#t:Ze",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "data",
        "fct-source": "src/Generics-Instant-Base.html#Ze",
        "fct-type": "data",
        "title": "Ze"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Ze",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Ze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v::-42-:",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "a :*: b",
        "fct-source": "src/Generics-Instant-Base.html#%3A%2A%3A",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": ":*:",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:C",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e CEq c p p a",
        "fct-source": "src/Generics-Instant-Base.html#CEq",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "C",
        "normalized": "a-\u003eCEq b c c a",
        "package": "instant-generics",
        "partial": "",
        "signature": "a-\u003eCEq c p p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Infix",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "Infix Associativity Int",
        "fct-source": "src/Generics-Instant-Base.html#Fixity",
        "fct-type": "function",
        "title": "Infix"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Infix",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Infix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:L",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "L a",
        "fct-source": "src/Generics-Instant-Base.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "L",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:LeftAssociative",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "LeftAssociative",
        "fct-source": "src/Generics-Instant-Base.html#Associativity",
        "fct-type": "function",
        "title": "LeftAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "LeftAssociative",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Left Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:NotAssociative",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "NotAssociative",
        "fct-source": "src/Generics-Instant-Base.html#Associativity",
        "fct-type": "function",
        "title": "NotAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "NotAssociative",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Not Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Prefix",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "Prefix",
        "fct-source": "src/Generics-Instant-Base.html#Fixity",
        "fct-type": "function",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Prefix",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:R",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "R b",
        "fct-source": "src/Generics-Instant-Base.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "R",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Rec",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "Rec a",
        "fct-source": "src/Generics-Instant-Base.html#Rec",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Rec",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:RightAssociative",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "RightAssociative",
        "fct-source": "src/Generics-Instant-Base.html#Associativity",
        "fct-type": "function",
        "title": "RightAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "RightAssociative",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Right Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:U",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "U",
        "fct-source": "src/Generics-Instant-Base.html#U",
        "fct-type": "function",
        "title": "U"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "U",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:Var",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "Var a",
        "fct-source": "src/Generics-Instant-Base.html#Var",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "Var",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:conFixity",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "t c p q a -\u003e Fixity",
        "fct-source": "src/Generics-Instant-Base.html#conFixity",
        "fct-type": "method",
        "title": "conFixity"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "conFixity",
        "normalized": "a b c d e-\u003eFixity",
        "package": "instant-generics",
        "partial": "Fixity",
        "signature": "t c p q a-\u003eFixity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:conIsRecord",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "t c p q a -\u003e Bool",
        "fct-source": "src/Generics-Instant-Base.html#conIsRecord",
        "fct-type": "method",
        "title": "conIsRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "conIsRecord",
        "normalized": "a b c d e-\u003eBool",
        "package": "instant-generics",
        "partial": "Is Record",
        "signature": "t c p q a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:conName",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "t c p q a -\u003e String",
        "fct-source": "src/Generics-Instant-Base.html#conName",
        "fct-type": "method",
        "title": "conName"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "conName",
        "normalized": "a b c d e-\u003eString",
        "package": "instant-generics",
        "partial": "Name",
        "signature": "t c p q a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:from",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e Rep a",
        "fct-source": "src/Generics-Instant-Base.html#from",
        "fct-type": "method",
        "title": "from"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "from",
        "normalized": "a-\u003eRep a",
        "package": "instant-generics",
        "partial": "",
        "signature": "a-\u003eRep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Base.html#v:to",
      "description": {
        "fct-module": "Generics.Instant.Base",
        "fct-package": "instant-generics",
        "fct-signature": "Rep a -\u003e a",
        "fct-source": "src/Generics-Instant-Base.html#to",
        "fct-type": "method",
        "title": "to"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Base",
        "module": "Generics.Instant.Base",
        "name": "to",
        "normalized": "Rep a-\u003ea",
        "package": "instant-generics",
        "partial": "",
        "signature": "Rep a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerically produce a single finite value of a datatype.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.Functions.Empty",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-Functions-Empty.html",
        "fct-type": "module",
        "title": "Empty"
      },
      "index": {
        "description": "Generically produce single finite value of datatype",
        "hierarchy": "Generics Instant Functions Empty",
        "module": "Generics.Instant.Functions.Empty",
        "name": "Empty",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#t:Empty",
      "description": {
        "fct-module": "Generics.Instant.Functions.Empty",
        "fct-package": "instant-generics",
        "fct-signature": "class",
        "fct-source": "src/Generics-Instant-Functions-Empty.html#Empty",
        "fct-type": "class",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Empty",
        "module": "Generics.Instant.Functions.Empty",
        "name": "Empty",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#t:HasRec",
      "description": {
        "fct-descr": "\u003cp\u003eWe use \u003ccode\u003e\u003ca\u003eHasRec\u003c/a\u003e\u003c/code\u003e to check for recursion in the structure. This is used \n to avoid selecting a recursive branch in the sum case for \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.Functions.Empty",
        "fct-package": "instant-generics",
        "fct-signature": "class",
        "fct-source": "src/Generics-Instant-Functions-Empty.html#HasRec",
        "fct-type": "class",
        "title": "HasRec"
      },
      "index": {
        "description": "We use HasRec to check for recursion in the structure This is used to avoid selecting recursive branch in the sum case for Empty",
        "hierarchy": "Generics Instant Functions Empty",
        "module": "Generics.Instant.Functions.Empty",
        "name": "HasRec",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Has Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#v:empty",
      "description": {
        "fct-module": "Generics.Instant.Functions.Empty",
        "fct-package": "instant-generics",
        "fct-signature": "a",
        "fct-source": "src/Generics-Instant-Functions-Empty.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Empty",
        "module": "Generics.Instant.Functions.Empty",
        "name": "empty",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#v:empty-39-",
      "description": {
        "fct-module": "Generics.Instant.Functions.Empty",
        "fct-package": "instant-generics",
        "fct-signature": "a",
        "fct-source": "src/Generics-Instant-Functions-Empty.html#empty%27",
        "fct-type": "method",
        "title": "empty'"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Empty",
        "module": "Generics.Instant.Functions.Empty",
        "name": "empty'",
        "normalized": "",
        "package": "instant-generics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Empty.html#v:hasRec-39-",
      "description": {
        "fct-module": "Generics.Instant.Functions.Empty",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Generics-Instant-Functions-Empty.html#hasRec%27",
        "fct-type": "method",
        "title": "hasRec'"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Empty",
        "module": "Generics.Instant.Functions.Empty",
        "name": "hasRec'",
        "normalized": "a-\u003eBool",
        "package": "instant-generics",
        "partial": "Rec'",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe equality function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.Functions.Eq",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-Functions-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "The equality function",
        "hierarchy": "Generics Instant Functions Eq",
        "module": "Generics.Instant.Functions.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#t:GEq",
      "description": {
        "fct-module": "Generics.Instant.Functions.Eq",
        "fct-package": "instant-generics",
        "fct-signature": "class",
        "fct-source": "src/Generics-Instant-Functions-Eq.html#GEq",
        "fct-type": "class",
        "title": "GEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Eq",
        "module": "Generics.Instant.Functions.Eq",
        "name": "GEq",
        "normalized": "",
        "package": "instant-generics",
        "partial": "GEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#v:geq",
      "description": {
        "fct-module": "Generics.Instant.Functions.Eq",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Generics-Instant-Functions-Eq.html#geq",
        "fct-type": "method",
        "title": "geq"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Eq",
        "module": "Generics.Instant.Functions.Eq",
        "name": "geq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "instant-generics",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Eq.html#v:geqDefault",
      "description": {
        "fct-module": "Generics.Instant.Functions.Eq",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Generics-Instant-Functions-Eq.html#geqDefault",
        "fct-type": "function",
        "title": "geqDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Eq",
        "module": "Generics.Instant.Functions.Eq",
        "name": "geqDefault",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "instant-generics",
        "partial": "Default",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplified generic show function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.Functions.Show",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-Functions-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "Simplified generic show function",
        "hierarchy": "Generics Instant Functions Show",
        "module": "Generics.Instant.Functions.Show",
        "name": "Show",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#t:GShow",
      "description": {
        "fct-module": "Generics.Instant.Functions.Show",
        "fct-package": "instant-generics",
        "fct-signature": "class",
        "fct-source": "src/Generics-Instant-Functions-Show.html#GShow",
        "fct-type": "class",
        "title": "GShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Show",
        "module": "Generics.Instant.Functions.Show",
        "name": "GShow",
        "normalized": "",
        "package": "instant-generics",
        "partial": "GShow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#v:gshow",
      "description": {
        "fct-module": "Generics.Instant.Functions.Show",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Generics-Instant-Functions-Show.html#gshow",
        "fct-type": "method",
        "title": "gshow"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Show",
        "module": "Generics.Instant.Functions.Show",
        "name": "gshow",
        "normalized": "a-\u003eString",
        "package": "instant-generics",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions-Show.html#v:gshowDefault",
      "description": {
        "fct-module": "Generics.Instant.Functions.Show",
        "fct-package": "instant-generics",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Generics-Instant-Functions-Show.html#gshowDefault",
        "fct-type": "function",
        "title": "gshowDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant Functions Show",
        "module": "Generics.Instant.Functions.Show",
        "name": "gshowDefault",
        "normalized": "a-\u003eString",
        "package": "instant-generics",
        "partial": "Default",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module simply reexports all the generic functions' modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.Functions",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "This module simply reexports all the generic functions modules",
        "hierarchy": "Generics Instant Functions",
        "module": "Generics.Instant.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines instances of the \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e class for a number of\n basic Prelude types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.Instances",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "This module defines instances of the Representable class for number of basic Prelude types",
        "hierarchy": "Generics Instant Instances",
        "module": "Generics.Instant.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Template Haskell code that can be used to\n automatically generate the boilerplate code for the generic deriving\n library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This module contains Template Haskell code that can be used to automatically generate the boilerplate code for the generic deriving library",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "TH",
        "normalized": "",
        "package": "instant-generics",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveAll",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the type and the name (as string) for the type to derive,\n generate the \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e instances and the \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#deriveAll",
        "fct-type": "function",
        "title": "deriveAll"
      },
      "index": {
        "description": "Given the type and the name as string for the type to derive generate the Constructor instances and the Representable instance",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "deriveAll",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "All",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveAllL",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e, but taking a list as input.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#deriveAllL",
        "fct-type": "function",
        "title": "deriveAllL"
      },
      "index": {
        "description": "Same as deriveAll but taking list as input",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "deriveAllL",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "All",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveConstructors",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a datatype name, derive datatypes and \n instances of class \u003ccode\u003e\u003ca\u003eConstructor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#deriveConstructors",
        "fct-type": "function",
        "title": "deriveConstructors"
      },
      "index": {
        "description": "Given datatype name derive datatypes and instances of class Constructor",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "deriveConstructors",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "Constructors",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveRep",
      "description": {
        "fct-descr": "\u003cp\u003eDerive only the \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e type synonym. Not needed if \u003ccode\u003e\u003ca\u003ederiveRepresentable\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#deriveRep",
        "fct-type": "function",
        "title": "deriveRep"
      },
      "index": {
        "description": "Derive only the Rep type synonym Not needed if deriveRepresentable is used",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "deriveRep",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "Rep",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:deriveRepresentable",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the type and the name (as string) for the Representable type\n synonym to derive, generate the \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#deriveRepresentable",
        "fct-type": "function",
        "title": "deriveRepresentable"
      },
      "index": {
        "description": "Given the type and the name as string for the Representable type synonym to derive generate the Representable instance",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "deriveRepresentable",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "Representable",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:gadtInstance",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the names of a generic class, a GADT type to instantiate, a function\n in the class and the default implementation, generates the code for a basic\n generic instance. This is tricky in general because we have to analyze the\n return types of each of the GADT constructors and give instances accordingly.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Name -\u003e Name -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#gadtInstance",
        "fct-type": "function",
        "title": "gadtInstance"
      },
      "index": {
        "description": "Given the names of generic class GADT type to instantiate function in the class and the default implementation generates the code for basic generic instance This is tricky in general because we have to analyze the return types of each of the GADT constructors and give instances accordingly",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "gadtInstance",
        "normalized": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "Instance",
        "signature": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:genRepName",
      "description": {
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Name",
        "fct-source": "src/Generics-Instant-TH.html#genRepName",
        "fct-type": "function",
        "title": "genRepName"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "genRepName",
        "normalized": "Name-\u003eName",
        "package": "instant-generics",
        "partial": "Rep Name",
        "signature": "Name-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:simplInstance",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the names of a generic class, a type to instantiate, a function in\n the class and the default implementation, generates the code for a basic\n generic instance.\n\u003c/p\u003e",
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Name -\u003e Name -\u003e Name -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Generics-Instant-TH.html#simplInstance",
        "fct-type": "function",
        "title": "simplInstance"
      },
      "index": {
        "description": "Given the names of generic class type to instantiate function in the class and the default implementation generates the code for basic generic instance",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "simplInstance",
        "normalized": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]",
        "package": "instant-generics",
        "partial": "Instance",
        "signature": "Name-\u003eName-\u003eName-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:tyVarBndrToName",
      "description": {
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "TyVarBndr -\u003e Name",
        "fct-source": "src/Generics-Instant-TH.html#tyVarBndrToName",
        "fct-type": "function",
        "title": "tyVarBndrToName"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "tyVarBndrToName",
        "normalized": "TyVarBndr-\u003eName",
        "package": "instant-generics",
        "partial": "Var Bndr To Name",
        "signature": "TyVarBndr-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant-TH.html#v:typeVariables",
      "description": {
        "fct-module": "Generics.Instant.TH",
        "fct-package": "instant-generics",
        "fct-signature": "Info -\u003e [TyVarBndr]",
        "fct-source": "src/Generics-Instant-TH.html#typeVariables",
        "fct-type": "function",
        "title": "typeVariables"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Instant TH",
        "module": "Generics.Instant.TH",
        "name": "typeVariables",
        "normalized": "Info-\u003e[TyVarBndr]",
        "package": "instant-generics",
        "partial": "Variables",
        "signature": "Info-\u003e[TyVarBndr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/instant-generics/docs/Generics-Instant.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module which re-exports the basic combinators and the generic\n instances for common datatypes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Instant",
        "fct-package": "instant-generics",
        "fct-signature": "module",
        "fct-source": "src/Generics-Instant.html",
        "fct-type": "module",
        "title": "Instant"
      },
      "index": {
        "description": "Top-level module which re-exports the basic combinators and the generic instances for common datatypes",
        "hierarchy": "Generics Instant",
        "module": "Generics.Instant",
        "name": "Instant",
        "normalized": "",
        "package": "instant-generics",
        "partial": "Instant",
        "signature": ""
      }
    }
  }
]