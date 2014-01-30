[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Deriving-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003ccode\u003eStructued\u003c/code\u003e type class which can be used to\n convert from Haskel \"record types\" to \u003ccode\u003eBSON\u003c/code\u003e objects and vice versa.\n We use Templace Haskell to provide a function \u003ccode\u003e\u003ca\u003ederiveStructured\u003c/a\u003e\u003c/code\u003e\n which can be used to automatically generate an instance of such\n types for the \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e and BSON's \u003ccode\u003eVal\u003c/code\u003e classes.\n\u003c/p\u003e\u003cp\u003eFor instance:\n\u003c/p\u003e\u003cpre\u003e data User = User { userId :: Int\n                  , userFirstName :: String\n                  , userLastName :: String\n                  }\n             deriving(Show, Read, Eq, Ord, Typeable)\n $(deriveStructured ''User)\n \n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ederiveStrctured\u003c/code\u003e used used to create the following instance of \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance Structured User where\n   toBSON x = [ (u \"_id\")           := val (userId x)\n              , (u \"userFirstName\") := val (userFirstName x)\n              , (u \"userLastName\")  := val (userLastName x)\n              ]\n   \n   fromBSON doc = lookup (u \"_id\")             doc \u003e\u003e= \\val_1 -\u003e\n                  lookup (u \"userFirstName\")   doc \u003e\u003e= \\val_2 -\u003e\n                  lookup (u \"userLastName\")    doc \u003e\u003e= \\val_3 -\u003e\n                  return User { userId        = val_1\n                              , userFirstName = val_2\n                              , userLastname  = val_3\n                              }\n\u003c/pre\u003e\u003cp\u003eTo allow for structured and well-typed queies, it also generates\n types corresponding to each field (which are made an instance of\n \u003ccode\u003e\u003ca\u003eSelectable\u003c/a\u003e\u003c/code\u003e). Specifically, for the above data type, it creates:\n\u003c/p\u003e\u003cpre\u003e  data UserId = UserId deriving (Show, Eq)\n  instance Selectable User UserId SObjId where s _ _ = \"_id\"\n  \n  data FirstName = FirstName deriving (Show, Eq)\n  instance Selectable User FirstName String where s _ _ = \"firstName\"\n  \n  data LastName = LastName deriving (Show, Eq)\n  instance Selectable User LastName String where s _ _ = \"lastName\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Database.MongoDB.Structured.Deriving.TH",
        "fct-package": "structured-mongoDB",
        "fct-signature": "module",
        "fct-source": "src/Database-MongoDB-Structured-Deriving-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This module exports Structued type class which can be used to convert from Haskel record types to BSON objects and vice versa We use Templace Haskell to provide function deriveStructured which can be used to automatically generate an instance of such types for the Structured and BSON Val classes For instance data User User userId Int userFirstName String userLastName String deriving Show Read Eq Ord Typeable deriveStructured User deriveStrctured used used to create the following instance of Structured instance Structured User where toBSON id val userId userFirstName val userFirstName userLastName val userLastName fromBSON doc lookup id doc val lookup userFirstName doc val lookup userLastName doc val return User userId val userFirstName val userLastname val To allow for structured and well-typed queies it also generates types corresponding to each field which are made an instance of Selectable Specifically for the above data type it creates data UserId UserId deriving Show Eq instance Selectable User UserId SObjId where id data FirstName FirstName deriving Show Eq instance Selectable User FirstName String where firstName data LastName LastName deriving Show Eq instance Selectable User LastName String where lastName",
        "hierarchy": "Database MongoDB Structured Deriving TH",
        "module": "Database.MongoDB.Structured.Deriving.TH",
        "name": "TH",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Deriving-TH.html#v:deriveStructured",
      "description": {
        "fct-descr": "\u003cp\u003eThis function generates \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eVal\u003c/code\u003e instances for\n record types.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Deriving.TH",
        "fct-package": "structured-mongoDB",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-MongoDB-Structured-Deriving-TH.html#deriveStructured",
        "fct-type": "function",
        "title": "deriveStructured"
      },
      "index": {
        "description": "This function generates Structured and Val instances for record types",
        "hierarchy": "Database MongoDB Structured Deriving TH",
        "module": "Database.MongoDB.Structured.Deriving.TH",
        "name": "deriveStructured",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "structured-mongoDB",
        "partial": "Structured",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports several classes and combinators that operated on\n  \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e types. Specifically, we provide the structured versions\n  of \u003ccode\u003emongoDB\u003c/code\u003e''s combinators, including structured query creation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "module",
        "fct-source": "src/Database-MongoDB-Structured-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "This module exports several classes and combinators that operated on Structured types Specifically we provide the structured versions of mongoDB combinators including structured query creation",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "Query",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:QueryExp",
      "description": {
        "fct-descr": "\u003cp\u003eA query expression.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "data",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#QueryExp",
        "fct-type": "data",
        "title": "QueryExp"
      },
      "index": {
        "description": "query expression",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "QueryExp",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Query Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:Selectable",
      "description": {
        "fct-descr": "\u003cp\u003eClass defining a selectable type. Type \u003ccode\u003ea\u003c/code\u003e corresponds to the\n record type, \u003ccode\u003ef\u003c/code\u003e corresponds to the field or facet, and \u003ccode\u003et\u003c/code\u003e\n corresponds to the field/facet type.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "class",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#Selectable",
        "fct-type": "class",
        "title": "Selectable"
      },
      "index": {
        "description": "Class defining selectable type Type corresponds to the record type corresponds to the field or facet and corresponds to the field facet type",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "Selectable",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Selectable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredCursor",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eCursor\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "data",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#StructuredCursor",
        "fct-type": "data",
        "title": "StructuredCursor"
      },
      "index": {
        "description": "Wrapper for mongoDB Cursor",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "StructuredCursor",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Structured Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredQuery",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eQuery\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "data",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#StructuredQuery",
        "fct-type": "data",
        "title": "StructuredQuery"
      },
      "index": {
        "description": "Wrapper for mongoDB Query type",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "StructuredQuery",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Structured Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredSelect",
      "description": {
        "fct-descr": "\u003cp\u003eAnalog to \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eSelect\u003c/code\u003e class\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "class",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#StructuredSelect",
        "fct-type": "class",
        "title": "StructuredSelect"
      },
      "index": {
        "description": "Analog to mongoDB Select class",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "StructuredSelect",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Structured Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredSelection",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eSelection\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "data",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#StructuredSelection",
        "fct-type": "data",
        "title": "StructuredSelection"
      },
      "index": {
        "description": "Wrapper for mongoDB Selection type",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "StructuredSelection",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Structured Selection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA BSON value is one of the following types of values\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "BSON value is one of the following types of values",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "Value",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e$or\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "QueryExp a -\u003e QueryExp a -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%7C%7C",
        "fct-type": "function",
        "title": "(.||)"
      },
      "index": {
        "description": "Combinator for or",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.||) .||",
        "normalized": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-33-",
      "description": {
        "fct-descr": "\u003cp\u003eCombining two field names to create a \u003ccode\u003eNested\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e f' -\u003e Nested f f'",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%21",
        "fct-type": "function",
        "title": "(.!)"
      },
      "index": {
        "description": "Combining two field names to create Nested type",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.!) .!",
        "normalized": "a-\u003eb-\u003eNested a b",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003ef'-\u003eNested f f'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e$and\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "QueryExp a -\u003e QueryExp a -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%26%26",
        "fct-type": "function",
        "title": "(.&&)"
      },
      "index": {
        "description": "Combinator for and",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.&&) .&&",
        "normalized": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-42-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e==\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%2A",
        "fct-type": "function",
        "title": "(.*)"
      },
      "index": {
        "description": "Combinator for",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.*) .*",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-47--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e$ne\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%2F%3D",
        "fct-type": "function",
        "title": "(./=)"
      },
      "index": {
        "description": "Combinator for ne",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(./=) ./=",
        "normalized": "a-\u003eb-\u003eQueryExp c",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-60-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e\u003c\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%3C",
        "fct-type": "function",
        "title": "(.\u003c)"
      },
      "index": {
        "description": "Combinator for",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.\u003c) .\u003c",
        "normalized": "a-\u003eb-\u003eQueryExp c",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-60--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e\u003c=\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%3C%3D",
        "fct-type": "function",
        "title": "(.\u003c=)"
      },
      "index": {
        "description": "Combinator for",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.\u003c=) .\u003c=",
        "normalized": "a-\u003eb-\u003eQueryExp c",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e==\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%3D%3D",
        "fct-type": "function",
        "title": "(.==)"
      },
      "index": {
        "description": "Combinator for",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.==) .==",
        "normalized": "a-\u003eb-\u003eQueryExp c",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%3E",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "Combinator for",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.\u003e) .\u003e",
        "normalized": "a-\u003eb-\u003eQueryExp c",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e\u003e=\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#.%3E%3D",
        "fct-type": "function",
        "title": "(.\u003e=)"
      },
      "index": {
        "description": "Combinator for",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "(.\u003e=) .\u003e=",
        "normalized": "a-\u003eb-\u003eQueryExp c",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:asc",
      "description": {
        "fct-descr": "\u003cp\u003eSort by field, ascending\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e OrderExp",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#asc",
        "fct-type": "function",
        "title": "asc"
      },
      "index": {
        "description": "Sort by field ascending",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "asc",
        "normalized": "a-\u003eOrderExp",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003eOrderExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:closeCursor",
      "description": {
        "fct-descr": "\u003cp\u003eClose the cursor.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredCursor -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#closeCursor",
        "fct-type": "function",
        "title": "closeCursor"
      },
      "index": {
        "description": "Close the cursor",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "closeCursor",
        "normalized": "StructuredCursor-\u003eAction a()",
        "package": "structured-mongoDB",
        "partial": "Cursor",
        "signature": "StructuredCursor-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCount number of documents satisfying query.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e Action m Int",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Count number of documents satisfying query",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "count",
        "normalized": "StructuredQuery-\u003eAction a Int",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredQuery-\u003eAction m Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all documents that match the selection/query.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredSelection -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete all documents that match the selection query",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "delete",
        "normalized": "StructuredSelection-\u003eAction a()",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredSelection-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:deleteOne",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the first documents that match the selection/query.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredSelection -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#deleteOne",
        "fct-type": "function",
        "title": "deleteOne"
      },
      "index": {
        "description": "Delete the first documents that match the selection query",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "deleteOne",
        "normalized": "StructuredSelection-\u003eAction a()",
        "package": "structured-mongoDB",
        "partial": "One",
        "signature": "StructuredSelection-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:desc",
      "description": {
        "fct-descr": "\u003cp\u003eSort by field, descending\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e OrderExp",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#desc",
        "fct-type": "function",
        "title": "desc"
      },
      "index": {
        "description": "Sort by field descending",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "desc",
        "normalized": "a-\u003eOrderExp",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003eOrderExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:fetch",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindOne\u003c/a\u003e\u003c/code\u003e but throws \u003ccode\u003e\u003ca\u003eDocNotFound\u003c/a\u003e\u003c/code\u003e if none match. Error\n is thrown if the document cannot e transformed.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e Action m a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#fetch",
        "fct-type": "function",
        "title": "fetch"
      },
      "index": {
        "description": "Same as findOne but throws DocNotFound if none match Error is thrown if the document cannot transformed",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "fetch",
        "normalized": "StructuredQuery-\u003eAction a b",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredQuery-\u003eAction m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFind documents satisfying query\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e Action m StructuredCursor",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Find documents satisfying query",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "find",
        "normalized": "StructuredQuery-\u003eAction a StructuredCursor",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredQuery-\u003eAction m StructuredCursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:findOne",
      "description": {
        "fct-descr": "\u003cp\u003eFind documents satisfying query\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e Action m (Maybe a)",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#findOne",
        "fct-type": "function",
        "title": "findOne"
      },
      "index": {
        "description": "Find documents satisfying query",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "findOne",
        "normalized": "StructuredQuery-\u003eAction a(Maybe b)",
        "package": "structured-mongoDB",
        "partial": "One",
        "signature": "StructuredQuery-\u003eAction m(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts document to its corresponding collection and return\n the \"_id\" value.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "a -\u003e Action m Value",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts document to its corresponding collection and return the id value",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "insert",
        "normalized": "a-\u003eAction b Value",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "a-\u003eAction m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertAll",
      "description": {
        "fct-descr": "\u003cp\u003eInserts documents to their corresponding collection and return\n their \"_id\" values. Unlike \u003ccode\u003e\u003ca\u003einsertMany\u003c/a\u003e\u003c/code\u003e, this function keeps\n inserting remaining documents even if an error occurs.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "[a] -\u003e Action m [Value]",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#insertAll",
        "fct-type": "function",
        "title": "insertAll"
      },
      "index": {
        "description": "Inserts documents to their corresponding collection and return their id values Unlike insertMany this function keeps inserting remaining documents even if an error occurs",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "insertAll",
        "normalized": "[a]-\u003eAction b[Value]",
        "package": "structured-mongoDB",
        "partial": "All",
        "signature": "[a]-\u003eAction m[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertAll_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e but discarding result.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "[a] -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#insertAll_",
        "fct-type": "function",
        "title": "insertAll_"
      },
      "index": {
        "description": "Same as insertAll but discarding result",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "insertAll_",
        "normalized": "[a]-\u003eAction b()",
        "package": "structured-mongoDB",
        "partial": "All",
        "signature": "[a]-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertMany",
      "description": {
        "fct-descr": "\u003cp\u003eInserts documents to their corresponding collection and return\n their \"_id\" values.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "[a] -\u003e Action m [Value]",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#insertMany",
        "fct-type": "function",
        "title": "insertMany"
      },
      "index": {
        "description": "Inserts documents to their corresponding collection and return their id values",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "insertMany",
        "normalized": "[a]-\u003eAction b[Value]",
        "package": "structured-mongoDB",
        "partial": "Many",
        "signature": "[a]-\u003eAction m[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertMany_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertMany\u003c/a\u003e\u003c/code\u003e but discarding result.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "[a] -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#insertMany_",
        "fct-type": "function",
        "title": "insertMany_"
      },
      "index": {
        "description": "Same as insertMany but discarding result",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "insertMany_",
        "normalized": "[a]-\u003eAction b()",
        "package": "structured-mongoDB",
        "partial": "Many",
        "signature": "[a]-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insert_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e but discarding result.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "a -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#insert_",
        "fct-type": "function",
        "title": "insert_"
      },
      "index": {
        "description": "Same as insert but discarding result",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "insert_",
        "normalized": "a-\u003eAction b()",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "a-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:isCursorClosed",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the cursor is closed.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredCursor -\u003e Action m Bool",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#isCursorClosed",
        "fct-type": "function",
        "title": "isCursorClosed"
      },
      "index": {
        "description": "Check if the cursor is closed",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "isCursorClosed",
        "normalized": "StructuredCursor-\u003eAction a Bool",
        "package": "structured-mongoDB",
        "partial": "Cursor Closed",
        "signature": "StructuredCursor-\u003eAction m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:limit",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of objects to return\n (default: 0, no limit).\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e Word32",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#limit",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "Maximum number of objects to return default no limit",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "limit",
        "normalized": "StructuredQuery-\u003eWord",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredQuery-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eReturn next structured document. If failed return \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e,\n otherwise \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e of the deserialized result.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredCursor -\u003e Action m (Either () (Maybe a))",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Return next structured document If failed return Left otherwise Right of the deserialized result",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "next",
        "normalized": "StructuredCursor-\u003eAction a(Either()(Maybe b))",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredCursor-\u003eAction m(Either()(Maybe a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:nextBatch",
      "description": {
        "fct-descr": "\u003cp\u003eReturn next batch of structured documents.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredCursor -\u003e Action m [Maybe a]",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#nextBatch",
        "fct-type": "function",
        "title": "nextBatch"
      },
      "index": {
        "description": "Return next batch of structured documents",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "nextBatch",
        "normalized": "StructuredCursor-\u003eAction a[Maybe b]",
        "package": "structured-mongoDB",
        "partial": "Batch",
        "signature": "StructuredCursor-\u003eAction m[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:nextN",
      "description": {
        "fct-descr": "\u003cp\u003eReturn up to next \u003ccode\u003eN\u003c/code\u003e documents.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "Int -\u003e StructuredCursor -\u003e Action m [Maybe a]",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#nextN",
        "fct-type": "function",
        "title": "nextN"
      },
      "index": {
        "description": "Return up to next documents",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "nextN",
        "normalized": "Int-\u003eStructuredCursor-\u003eAction a[Maybe b]",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "Int-\u003eStructuredCursor-\u003eAction m[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:not_",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for \u003ccode\u003e$not\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "QueryExp a -\u003e QueryExp a",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#not_",
        "fct-type": "function",
        "title": "not_"
      },
      "index": {
        "description": "Combinator for not",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "not_",
        "normalized": "QueryExp a-\u003eQueryExp a",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "QueryExp a-\u003eQueryExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:rest",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the remaining documents in query result.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredCursor -\u003e Action m [Maybe a]",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#rest",
        "fct-type": "function",
        "title": "rest"
      },
      "index": {
        "description": "Return the remaining documents in query result",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "rest",
        "normalized": "StructuredCursor-\u003eAction a[Maybe b]",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredCursor-\u003eAction m[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:s",
      "description": {
        "fct-descr": "\u003cp\u003eGiven facet, return the BSON field name\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "f -\u003e t -\u003e Label",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#s",
        "fct-type": "method",
        "title": "s"
      },
      "index": {
        "description": "Given facet return the BSON field name",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "s",
        "normalized": "a-\u003eb-\u003eLabel",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "f-\u003et-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eSave document to collection. If the \u003ccode\u003e\u003ca\u003eSObjId\u003c/a\u003e\u003c/code\u003e field is set then\n the document is updated, otherwise we perform an insert.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "a -\u003e Action m ()",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Save document to collection If the SObjId field is set then the document is updated otherwise we perform an insert",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "save",
        "normalized": "a-\u003eAction b()",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "a-\u003eAction m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a selection or query from an expression\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "QueryExp a -\u003e aQorS",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Create selection or query from an expression",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "select",
        "normalized": "QueryExp a-\u003eb",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "QueryExp a-\u003eaQorS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of matching objects to skip\n (default: 0).\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e Word32",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Number of matching objects to skip default",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "skip",
        "normalized": "StructuredQuery-\u003eWord",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredQuery-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSortresult by this order.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Query",
        "fct-package": "structured-mongoDB",
        "fct-signature": "StructuredQuery -\u003e [OrderExp]",
        "fct-source": "src/Database-MongoDB-Structured-Query.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sortresult by this order",
        "hierarchy": "Database MongoDB Structured Query",
        "module": "Database.MongoDB.Structured.Query",
        "name": "sort",
        "normalized": "StructuredQuery-\u003e[OrderExp]",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": "StructuredQuery-\u003e[OrderExp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003ccode\u003eStructued\u003c/code\u003e type class which can be used to\n convert Haskel \"record types\" to \u003ccode\u003eBSON\u003c/code\u003e objects and vice versa.\n As a Mongo document has an \"_id\" field, we impose the requirement\n a record type have a field whose type is \u003ccode\u003e\u003ca\u003eSObjId\u003c/a\u003e\u003c/code\u003e (corresponding to\n \"_id\").\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "module",
        "fct-source": "src/Database-MongoDB-Structured-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module exports Structued type class which can be used to convert Haskel record types to BSON objects and vice versa As Mongo document has an id field we impose the requirement record type have field whose type is SObjId corresponding to id",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "Types",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#t:SObjId",
      "description": {
        "fct-descr": "\u003cp\u003eType corresponding to the \"_id\" field of a document in a\n structured object.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#SObjId",
        "fct-type": "newtype",
        "title": "SObjId"
      },
      "index": {
        "description": "Type corresponding to the id field of document in structured object",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "SObjId",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "SObj Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#t:Structured",
      "description": {
        "fct-descr": "\u003cp\u003eStructured class used to convert between a Haskell record type\n and BSON document.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "class",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#Structured",
        "fct-type": "class",
        "title": "Structured"
      },
      "index": {
        "description": "Structured class used to convert between Haskell record type and BSON document",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "Structured",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Structured",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:SObjId",
      "description": {
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "SObjId (Maybe ObjectId)",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#SObjId",
        "fct-type": "function",
        "title": "SObjId"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "SObjId",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "SObj Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:collection",
      "description": {
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "collection",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#collection",
        "fct-type": "method",
        "title": "collection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "collection",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:fromBSON",
      "description": {
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "fromBSON",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#fromBSON",
        "fct-type": "method",
        "title": "fromBSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "fromBSON",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "BSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:isNoSObjId",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the \"_id\" field is unset.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "SObjId -\u003e Bool",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#isNoSObjId",
        "fct-type": "function",
        "title": "isNoSObjId"
      },
      "index": {
        "description": "Check if the id field is unset",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "isNoSObjId",
        "normalized": "SObjId-\u003eBool",
        "package": "structured-mongoDB",
        "partial": "No SObj Id",
        "signature": "SObjId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:noSObjId",
      "description": {
        "fct-descr": "\u003cp\u003eThe \"_id\" field is unset.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "SObjId",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#noSObjId",
        "fct-type": "function",
        "title": "noSObjId"
      },
      "index": {
        "description": "The id field is unset",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "noSObjId",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "SObj Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:toBSON",
      "description": {
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "toBSON",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#toBSON",
        "fct-type": "method",
        "title": "toBSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "toBSON",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "BSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:toSObjId",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \"_id\" field.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "ObjectId -\u003e SObjId",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#toSObjId",
        "fct-type": "function",
        "title": "toSObjId"
      },
      "index": {
        "description": "Set the id field",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "toSObjId",
        "normalized": "ObjectId-\u003eSObjId",
        "package": "structured-mongoDB",
        "partial": "SObj Id",
        "signature": "ObjectId-\u003eSObjId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:unSObjId",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \"_id\" field (assumes that it is set0.\n\u003c/p\u003e",
        "fct-module": "Database.MongoDB.Structured.Types",
        "fct-package": "structured-mongoDB",
        "fct-signature": "SObjId -\u003e ObjectId",
        "fct-source": "src/Database-MongoDB-Structured-Types.html#unSObjId",
        "fct-type": "function",
        "title": "unSObjId"
      },
      "index": {
        "description": "Get the id field assumes that it is set0",
        "hierarchy": "Database MongoDB Structured Types",
        "module": "Database.MongoDB.Structured.Types",
        "name": "unSObjId",
        "normalized": "SObjId-\u003eObjectId",
        "package": "structured-mongoDB",
        "partial": "SObj Id",
        "signature": "SObjId-\u003eObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003cem\u003estructued\u003c/em\u003e interface to MongoDB.\n Specifically, Haskell record types are used (in place of BSON)\n to represent documents which can be inserted and retrieved from\n a MongoDB. Data types corresponding to fields of a document\n are used in forming well-typed queries, as opposed to strings.\n This module re-exports the \u003ca\u003eDatabase.MongoDB.Structured.Types\u003c/a\u003e\n module, which exports a \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e type class --- this class is\n used to convert Haskell record types to and from BSON documents.\n The module \u003ca\u003eDatabase.MongoDB.Structured.Query\u003c/a\u003e exports an\n interface similar to \u003ccode\u003eDatabase.MongoDB.Query\u003c/code\u003e which can be used to\n insert, query, update, delete, etc. record types from a Mongo DB.\n\u003c/p\u003e\u003cp\u003eThough users may provide their own instances for \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e\n (and \u003ccode\u003e\u003ca\u003eSelectable\u003c/a\u003e\u003c/code\u003e, used in composing well-typed queries), we\n provide a Template Haskell function (\u003ccode\u003ederiveStructured\u003c/code\u003e)\n that can be used to automatically do this. See\n \u003ca\u003eDatabase.MongoDB.Structured.Deriving.TH\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe example below shows how to use the structued MongoDB interface:\n\u003c/p\u003e\u003cpre\u003e    {-# LANGUAGE TemplateHaskell #-}\n    {-# LANGUAGE TypeSynonymInstances #-}\n    {-# LANGUAGE MultiParamTypeClasses #-}\n    {-# LANGUAGE FlexibleInstances #-}\n    {-# LANGUAGE OverloadedStrings #-}\n    {-# LANGUAGE DeriveDataTypeable #-}\n    import Database.MongoDB.Structured\n    import Database.MongoDB.Structured.Deriving.TH\n    import Control.Monad.Trans (liftIO)\n    import Data.Typeable\n    import Control.Monad (mapM_)\n    import Control.Monad.IO.Class\n    import Data.Bson (Value)\n    import Data.Maybe (isJust, fromJust)\n\n    data Address = Address { addrId :: SObjId\n                           , city   :: String\n                           , state  :: String\n                           } deriving (Show, Eq, Typeable)\n    $(deriveStructured ''Address)\n\n    data Team = Team { teamId :: SObjId\n                     , name   :: String\n                     , home   :: Address\n                     , league :: String\n                     } deriving (Show, Eq, Typeable)\n    $(deriveStructured ''Team)\n\n    main = do\n       pipe \u003c- runIOE $ connect (host \"127.0.0.1\")\n       e \u003c- access pipe master \"baseball\" run\n       close pipe\n       print e\n\n    run = do\n       clearTeams\n       insertTeams\n       allTeams \u003e\u003e= printDocs \"All Teams\"\n       nationalLeagueTeams \u003e\u003e= printDocs \"National League Teams\"\n       newYorkTeams \u003e\u003e= printDocs \"New York Teams\"\n\n    -- Delete all teams:\n    clearTeams :: Action IO ()\n    clearTeams = delete (select ( (.*) :: QueryExp Team))\n\n    insertTeams :: Action IO [Value]\n    insertTeams = insertMany [\n       Team { teamId = noSObjId\n            , name   = \"Yankees\"\n            , home   = Address { addrId = noSObjId\n                               , city  = \"New York\"\n                               , state = \"NY\"\n                               }\n            , league = \"American\"}\n      , Team { teamId = noSObjId\n             , name   = \"Mets\"\n             , home   = Address { addrId = noSObjId\n                                , city  = \"New York\"\n                                , state = \"NY\"\n                                }\n             , league = \"National\"}\n      , Team { teamId = noSObjId\n             , name   = \"Phillies\"\n             , home   = Address { addrId = noSObjId\n                                , city  = \"Philadelphia\"\n                                , state = \"PA\"\n                                }\n             , league = \"National\"}\n      , Team { teamId = noSObjId\n             , name   = \"Red Sox\"\n             , home   = Address { addrId = noSObjId\n                                , city  = \"Boston\"\n                                , state = \"MA\"\n                                }\n             , league = \"National\"}\n      ]\n\n    allTeams :: Action IO [Maybe Team]\n    allTeams = let query = (select ((.*) :: QueryExp Team))\n                                { sort = [asc (Home .! City)]}\n               in find query \u003e\u003e= rest\n               \n    nationalLeagueTeams :: Action IO [Maybe Team]\n    nationalLeagueTeams = rest =\u003c\u003c find (select (League .== \"National\"))\n\n    newYorkTeams :: Action IO [Maybe Team]\n    newYorkTeams = rest =\u003c\u003c find (select (Home .! State .== \"NY\"))\n\n    printDocs :: MonadIO m =\u003e String -\u003e [Maybe Team] -\u003e m ()\n    printDocs title teams' = liftIO $ do\n      let teams = (map fromJust) . filter (isJust) $ teams'\n      putStrLn title \n      mapM_ (putStrLn . show) teams\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Database.MongoDB.Structured",
        "fct-package": "structured-mongoDB",
        "fct-signature": "module",
        "fct-source": "src/Database-MongoDB-Structured.html",
        "fct-type": "module",
        "title": "Structured"
      },
      "index": {
        "description": "This module exports structued interface to MongoDB Specifically Haskell record types are used in place of BSON to represent documents which can be inserted and retrieved from MongoDB Data types corresponding to fields of document are used in forming well-typed queries as opposed to strings This module re-exports the Database.MongoDB.Structured.Types module which exports Structured type class this class is used to convert Haskell record types to and from BSON documents The module Database.MongoDB.Structured.Query exports an interface similar to Database.MongoDB.Query which can be used to insert query update delete etc record types from Mongo DB Though users may provide their own instances for Structured and Selectable used in composing well-typed queries we provide Template Haskell function deriveStructured that can be used to automatically do this See Database.MongoDB.Structured.Deriving.TH The example below shows how to use the structued MongoDB interface LANGUAGE TemplateHaskell LANGUAGE TypeSynonymInstances LANGUAGE MultiParamTypeClasses LANGUAGE FlexibleInstances LANGUAGE OverloadedStrings LANGUAGE DeriveDataTypeable import Database.MongoDB.Structured import Database.MongoDB.Structured.Deriving.TH import Control.Monad.Trans liftIO import Data.Typeable import Control.Monad mapM import Control.Monad.IO.Class import Data.Bson Value import Data.Maybe isJust fromJust data Address Address addrId SObjId city String state String deriving Show Eq Typeable deriveStructured Address data Team Team teamId SObjId name String home Address league String deriving Show Eq Typeable deriveStructured Team main do pipe runIOE connect host access pipe master baseball run close pipe print run do clearTeams insertTeams allTeams printDocs All Teams nationalLeagueTeams printDocs National League Teams newYorkTeams printDocs New York Teams Delete all teams clearTeams Action IO clearTeams delete select QueryExp Team insertTeams Action IO Value insertTeams insertMany Team teamId noSObjId name Yankees home Address addrId noSObjId city New York state NY league American Team teamId noSObjId name Mets home Address addrId noSObjId city New York state NY league National Team teamId noSObjId name Phillies home Address addrId noSObjId city Philadelphia state PA league National Team teamId noSObjId name Red Sox home Address addrId noSObjId city Boston state MA league National allTeams Action IO Maybe Team allTeams let query select QueryExp Team sort asc Home City in find query rest nationalLeagueTeams Action IO Maybe Team nationalLeagueTeams rest find select League National newYorkTeams Action IO Maybe Team newYorkTeams rest find select Home State NY printDocs MonadIO String Maybe Team printDocs title teams liftIO do let teams map fromJust filter isJust teams putStrLn title mapM putStrLn show teams",
        "hierarchy": "Database MongoDB Structured",
        "module": "Database.MongoDB.Structured",
        "name": "Structured",
        "normalized": "",
        "package": "structured-mongoDB",
        "partial": "Structured",
        "signature": ""
      }
    }
  }
]