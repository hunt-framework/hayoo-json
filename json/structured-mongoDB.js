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
        "word": "structured-mongoDB"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003ccode\u003eStructued\u003c/code\u003e type class which can be used to\n convert from Haskel \"record types\" to \u003ccode\u003eBSON\u003c/code\u003e objects and vice versa.\n We use Templace Haskell to provide a function \u003ccode\u003e\u003ca\u003ederiveStructured\u003c/a\u003e\u003c/code\u003e\n which can be used to automatically generate an instance of such\n types for the \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e and BSON's \u003ccode\u003eVal\u003c/code\u003e classes.\n\u003c/p\u003e\u003cp\u003eFor instance:\n\u003c/p\u003e\u003cpre\u003e data User = User { userId :: Int\n                  , userFirstName :: String\n                  , userLastName :: String\n                  }\n             deriving(Show, Read, Eq, Ord, Typeable)\n $(deriveStructured ''User)\n \n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ederiveStrctured\u003c/code\u003e used used to create the following instance of \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance Structured User where\n   toBSON x = [ (u \"_id\")           := val (userId x)\n              , (u \"userFirstName\") := val (userFirstName x)\n              , (u \"userLastName\")  := val (userLastName x)\n              ]\n   \n   fromBSON doc = lookup (u \"_id\")             doc \u003e\u003e= \\val_1 -\u003e\n                  lookup (u \"userFirstName\")   doc \u003e\u003e= \\val_2 -\u003e\n                  lookup (u \"userLastName\")    doc \u003e\u003e= \\val_3 -\u003e\n                  return User { userId        = val_1\n                              , userFirstName = val_2\n                              , userLastname  = val_3\n                              }\n\u003c/pre\u003e\u003cp\u003eTo allow for structured and well-typed queies, it also generates\n types corresponding to each field (which are made an instance of\n \u003ccode\u003e\u003ca\u003eSelectable\u003c/a\u003e\u003c/code\u003e). Specifically, for the above data type, it creates:\n\u003c/p\u003e\u003cpre\u003e  data UserId = UserId deriving (Show, Eq)\n  instance Selectable User UserId SObjId where s _ _ = \"_id\"\n  \n  data FirstName = FirstName deriving (Show, Eq)\n  instance Selectable User FirstName String where s _ _ = \"firstName\"\n  \n  data LastName = LastName deriving (Show, Eq)\n  instance Selectable User LastName String where s _ _ = \"lastName\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.MongoDB.Structured.Deriving.TH",
          "name": "TH",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Deriving-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports Structued type class which can be used to convert from Haskel record types to BSON objects and vice versa We use Templace Haskell to provide function deriveStructured which can be used to automatically generate an instance of such types for the Structured and BSON Val classes For instance data User User userId Int userFirstName String userLastName String deriving Show Read Eq Ord Typeable deriveStructured User deriveStrctured used used to create the following instance of Structured instance Structured User where toBSON id val userId userFirstName val userFirstName userLastName val userLastName fromBSON doc lookup id doc val lookup userFirstName doc val lookup userLastName doc val return User userId val userFirstName val userLastname val To allow for structured and well-typed queies it also generates types corresponding to each field which are made an instance of Selectable Specifically for the above data type it creates data UserId UserId deriving Show Eq instance Selectable User UserId SObjId where id data FirstName FirstName deriving Show Eq instance Selectable User FirstName String where firstName data LastName LastName deriving Show Eq instance Selectable User LastName String where lastName",
          "hierarchy": "Database MongoDB Structured Deriving TH",
          "module": "Database.MongoDB.Structured.Deriving.TH",
          "name": "TH",
          "package": "structured-mongoDB",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Deriving-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generates \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eVal\u003c/code\u003e instances for\n record types.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Deriving.TH",
          "name": "deriveStructured",
          "package": "structured-mongoDB",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-MongoDB-Structured-Deriving-TH.html#deriveStructured",
          "type": "function"
        },
        "index": {
          "description": "This function generates Structured and Val instances for record types",
          "hierarchy": "Database MongoDB Structured Deriving TH",
          "module": "Database.MongoDB.Structured.Deriving.TH",
          "name": "deriveStructured",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "structured-mongoDB",
          "partial": "Structured",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Deriving-TH.html#v:deriveStructured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports several classes and combinators that operated on\n  \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e types. Specifically, we provide the structured versions\n  of \u003ccode\u003emongoDB\u003c/code\u003e''s combinators, including structured query creation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "Query",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports several classes and combinators that operated on Structured types Specifically we provide the structured versions of mongoDB combinators including structured query creation",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "Query",
          "package": "structured-mongoDB",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query expression.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "QueryExp",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html#QueryExp",
          "type": "data"
        },
        "index": {
          "description": "query expression",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "QueryExp",
          "package": "structured-mongoDB",
          "partial": "Query Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:QueryExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass defining a selectable type. Type \u003ccode\u003ea\u003c/code\u003e corresponds to the\n record type, \u003ccode\u003ef\u003c/code\u003e corresponds to the field or facet, and \u003ccode\u003et\u003c/code\u003e\n corresponds to the field/facet type.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "Selectable",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html#Selectable",
          "type": "class"
        },
        "index": {
          "description": "Class defining selectable type Type corresponds to the record type corresponds to the field or facet and corresponds to the field facet type",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "Selectable",
          "package": "structured-mongoDB",
          "partial": "Selectable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:Selectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eCursor\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredCursor",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html#StructuredCursor",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for mongoDB Cursor",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredCursor",
          "package": "structured-mongoDB",
          "partial": "Structured Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eQuery\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredQuery",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html#StructuredQuery",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for mongoDB Query type",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredQuery",
          "package": "structured-mongoDB",
          "partial": "Structured Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalog to \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eSelect\u003c/code\u003e class\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredSelect",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html#StructuredSelect",
          "type": "class"
        },
        "index": {
          "description": "Analog to mongoDB Select class",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredSelect",
          "package": "structured-mongoDB",
          "partial": "Structured Select",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003emongoDB\u003c/code\u003e's \u003ccode\u003eSelection\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredSelection",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Query.html#StructuredSelection",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for mongoDB Selection type",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "StructuredSelection",
          "package": "structured-mongoDB",
          "partial": "Structured Selection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:StructuredSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA BSON value is one of the following types of values\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "Value",
          "package": "structured-mongoDB",
          "type": "data"
        },
        "index": {
          "description": "BSON value is one of the following types of values",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "Value",
          "package": "structured-mongoDB",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e$or\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.||)",
          "package": "structured-mongoDB",
          "signature": "QueryExp a -\u003e QueryExp a -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Combinator for or",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.||) .||",
          "normalized": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a",
          "package": "structured-mongoDB",
          "signature": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombining two field names to create a \u003ccode\u003eNested\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.!)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e f' -\u003e Nested f f'",
          "source": "src/Database-MongoDB-Structured-Query.html#.%21",
          "type": "function"
        },
        "index": {
          "description": "Combining two field names to create Nested type",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.!) .!",
          "normalized": "a-\u003eb-\u003eNested a b",
          "package": "structured-mongoDB",
          "signature": "f-\u003ef'-\u003eNested f f'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e$and\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.&&)",
          "package": "structured-mongoDB",
          "signature": "QueryExp a -\u003e QueryExp a -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%26%26",
          "type": "function"
        },
        "index": {
          "description": "Combinator for and",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.&&) .&&",
          "normalized": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a",
          "package": "structured-mongoDB",
          "signature": "QueryExp a-\u003eQueryExp a-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e==\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.*)",
          "package": "structured-mongoDB",
          "signature": "QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%2A",
          "type": "function"
        },
        "index": {
          "description": "Combinator for",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.*) .*",
          "package": "structured-mongoDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e$ne\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(./=)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%2F%3D",
          "type": "function"
        },
        "index": {
          "description": "Combinator for ne",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(./=) ./=",
          "normalized": "a-\u003eb-\u003eQueryExp c",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e\u003c\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003c)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%3C",
          "type": "function"
        },
        "index": {
          "description": "Combinator for",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003c) .\u003c",
          "normalized": "a-\u003eb-\u003eQueryExp c",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e\u003c=\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003c=)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "Combinator for",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003c=) .\u003c=",
          "normalized": "a-\u003eb-\u003eQueryExp c",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e==\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.==)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Combinator for",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.==) .==",
          "normalized": "a-\u003eb-\u003eQueryExp c",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003e)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%3E",
          "type": "function"
        },
        "index": {
          "description": "Combinator for",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003e) .\u003e",
          "normalized": "a-\u003eb-\u003eQueryExp c",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e\u003e=\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003e=)",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#.%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Combinator for",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "(.\u003e=) .\u003e=",
          "normalized": "a-\u003eb-\u003eQueryExp c",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:.-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort by field, ascending\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "asc",
          "package": "structured-mongoDB",
          "signature": "f -\u003e OrderExp",
          "source": "src/Database-MongoDB-Structured-Query.html#asc",
          "type": "function"
        },
        "index": {
          "description": "Sort by field ascending",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "asc",
          "normalized": "a-\u003eOrderExp",
          "package": "structured-mongoDB",
          "signature": "f-\u003eOrderExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the cursor.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "closeCursor",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#closeCursor",
          "type": "function"
        },
        "index": {
          "description": "Close the cursor",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "closeCursor",
          "normalized": "StructuredCursor-\u003eAction a()",
          "package": "structured-mongoDB",
          "partial": "Cursor",
          "signature": "StructuredCursor-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:closeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount number of documents satisfying query.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "count",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e Action m Int",
          "source": "src/Database-MongoDB-Structured-Query.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count number of documents satisfying query",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "count",
          "normalized": "StructuredQuery-\u003eAction a Int",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery-\u003eAction m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all documents that match the selection/query.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "delete",
          "package": "structured-mongoDB",
          "signature": "StructuredSelection -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete all documents that match the selection query",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "delete",
          "normalized": "StructuredSelection-\u003eAction a()",
          "package": "structured-mongoDB",
          "signature": "StructuredSelection-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the first documents that match the selection/query.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "deleteOne",
          "package": "structured-mongoDB",
          "signature": "StructuredSelection -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#deleteOne",
          "type": "function"
        },
        "index": {
          "description": "Delete the first documents that match the selection query",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "deleteOne",
          "normalized": "StructuredSelection-\u003eAction a()",
          "package": "structured-mongoDB",
          "partial": "One",
          "signature": "StructuredSelection-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:deleteOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort by field, descending\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "desc",
          "package": "structured-mongoDB",
          "signature": "f -\u003e OrderExp",
          "source": "src/Database-MongoDB-Structured-Query.html#desc",
          "type": "function"
        },
        "index": {
          "description": "Sort by field descending",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "desc",
          "normalized": "a-\u003eOrderExp",
          "package": "structured-mongoDB",
          "signature": "f-\u003eOrderExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindOne\u003c/a\u003e\u003c/code\u003e but throws \u003ccode\u003e\u003ca\u003eDocNotFound\u003c/a\u003e\u003c/code\u003e if none match. Error\n is thrown if the document cannot e transformed.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "fetch",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e Action m a",
          "source": "src/Database-MongoDB-Structured-Query.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "Same as findOne but throws DocNotFound if none match Error is thrown if the document cannot transformed",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "fetch",
          "normalized": "StructuredQuery-\u003eAction a b",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery-\u003eAction m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind documents satisfying query\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "find",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e Action m StructuredCursor",
          "source": "src/Database-MongoDB-Structured-Query.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find documents satisfying query",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "find",
          "normalized": "StructuredQuery-\u003eAction a StructuredCursor",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery-\u003eAction m StructuredCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind documents satisfying query\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "findOne",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e Action m (Maybe a)",
          "source": "src/Database-MongoDB-Structured-Query.html#findOne",
          "type": "function"
        },
        "index": {
          "description": "Find documents satisfying query",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "findOne",
          "normalized": "StructuredQuery-\u003eAction a(Maybe b)",
          "package": "structured-mongoDB",
          "partial": "One",
          "signature": "StructuredQuery-\u003eAction m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:findOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts document to its corresponding collection and return\n the \"_id\" value.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insert",
          "package": "structured-mongoDB",
          "signature": "a -\u003e Action m Value",
          "source": "src/Database-MongoDB-Structured-Query.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts document to its corresponding collection and return the id value",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insert",
          "normalized": "a-\u003eAction b Value",
          "package": "structured-mongoDB",
          "signature": "a-\u003eAction m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts documents to their corresponding collection and return\n their \"_id\" values. Unlike \u003ccode\u003e\u003ca\u003einsertMany\u003c/a\u003e\u003c/code\u003e, this function keeps\n inserting remaining documents even if an error occurs.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertAll",
          "package": "structured-mongoDB",
          "signature": "[a] -\u003e Action m [Value]",
          "source": "src/Database-MongoDB-Structured-Query.html#insertAll",
          "type": "function"
        },
        "index": {
          "description": "Inserts documents to their corresponding collection and return their id values Unlike insertMany this function keeps inserting remaining documents even if an error occurs",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertAll",
          "normalized": "[a]-\u003eAction b[Value]",
          "package": "structured-mongoDB",
          "partial": "All",
          "signature": "[a]-\u003eAction m[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e but discarding result.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertAll_",
          "package": "structured-mongoDB",
          "signature": "[a] -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#insertAll_",
          "type": "function"
        },
        "index": {
          "description": "Same as insertAll but discarding result",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertAll_",
          "normalized": "[a]-\u003eAction b()",
          "package": "structured-mongoDB",
          "partial": "All",
          "signature": "[a]-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertAll_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts documents to their corresponding collection and return\n their \"_id\" values.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertMany",
          "package": "structured-mongoDB",
          "signature": "[a] -\u003e Action m [Value]",
          "source": "src/Database-MongoDB-Structured-Query.html#insertMany",
          "type": "function"
        },
        "index": {
          "description": "Inserts documents to their corresponding collection and return their id values",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertMany",
          "normalized": "[a]-\u003eAction b[Value]",
          "package": "structured-mongoDB",
          "partial": "Many",
          "signature": "[a]-\u003eAction m[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertMany\u003c/a\u003e\u003c/code\u003e but discarding result.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertMany_",
          "package": "structured-mongoDB",
          "signature": "[a] -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#insertMany_",
          "type": "function"
        },
        "index": {
          "description": "Same as insertMany but discarding result",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insertMany_",
          "normalized": "[a]-\u003eAction b()",
          "package": "structured-mongoDB",
          "partial": "Many",
          "signature": "[a]-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insertMany_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e but discarding result.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insert_",
          "package": "structured-mongoDB",
          "signature": "a -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#insert_",
          "type": "function"
        },
        "index": {
          "description": "Same as insert but discarding result",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "insert_",
          "normalized": "a-\u003eAction b()",
          "package": "structured-mongoDB",
          "signature": "a-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:insert_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the cursor is closed.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "isCursorClosed",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor -\u003e Action m Bool",
          "source": "src/Database-MongoDB-Structured-Query.html#isCursorClosed",
          "type": "function"
        },
        "index": {
          "description": "Check if the cursor is closed",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "isCursorClosed",
          "normalized": "StructuredCursor-\u003eAction a Bool",
          "package": "structured-mongoDB",
          "partial": "Cursor Closed",
          "signature": "StructuredCursor-\u003eAction m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:isCursorClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of objects to return\n (default: 0, no limit).\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "limit",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e Word32",
          "source": "src/Database-MongoDB-Structured-Query.html#limit",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of objects to return default no limit",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "limit",
          "normalized": "StructuredQuery-\u003eWord",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn next structured document. If failed return \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e,\n otherwise \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e of the deserialized result.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "next",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor -\u003e Action m (Either () (Maybe a))",
          "source": "src/Database-MongoDB-Structured-Query.html#next",
          "type": "function"
        },
        "index": {
          "description": "Return next structured document If failed return Left otherwise Right of the deserialized result",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "next",
          "normalized": "StructuredCursor-\u003eAction a(Either()(Maybe b))",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor-\u003eAction m(Either()(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn next batch of structured documents.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "nextBatch",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor -\u003e Action m [Maybe a]",
          "source": "src/Database-MongoDB-Structured-Query.html#nextBatch",
          "type": "function"
        },
        "index": {
          "description": "Return next batch of structured documents",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "nextBatch",
          "normalized": "StructuredCursor-\u003eAction a[Maybe b]",
          "package": "structured-mongoDB",
          "partial": "Batch",
          "signature": "StructuredCursor-\u003eAction m[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:nextBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn up to next \u003ccode\u003eN\u003c/code\u003e documents.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "nextN",
          "package": "structured-mongoDB",
          "signature": "Int -\u003e StructuredCursor -\u003e Action m [Maybe a]",
          "source": "src/Database-MongoDB-Structured-Query.html#nextN",
          "type": "function"
        },
        "index": {
          "description": "Return up to next documents",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "nextN",
          "normalized": "Int-\u003eStructuredCursor-\u003eAction a[Maybe b]",
          "package": "structured-mongoDB",
          "signature": "Int-\u003eStructuredCursor-\u003eAction m[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:nextN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003e$not\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "not_",
          "package": "structured-mongoDB",
          "signature": "QueryExp a -\u003e QueryExp a",
          "source": "src/Database-MongoDB-Structured-Query.html#not_",
          "type": "function"
        },
        "index": {
          "description": "Combinator for not",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "not_",
          "normalized": "QueryExp a-\u003eQueryExp a",
          "package": "structured-mongoDB",
          "signature": "QueryExp a-\u003eQueryExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:not_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the remaining documents in query result.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "rest",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor -\u003e Action m [Maybe a]",
          "source": "src/Database-MongoDB-Structured-Query.html#rest",
          "type": "function"
        },
        "index": {
          "description": "Return the remaining documents in query result",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "rest",
          "normalized": "StructuredCursor-\u003eAction a[Maybe b]",
          "package": "structured-mongoDB",
          "signature": "StructuredCursor-\u003eAction m[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven facet, return the BSON field name\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "s",
          "package": "structured-mongoDB",
          "signature": "f -\u003e t -\u003e Label",
          "source": "src/Database-MongoDB-Structured-Query.html#s",
          "type": "method"
        },
        "index": {
          "description": "Given facet return the BSON field name",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "s",
          "normalized": "a-\u003eb-\u003eLabel",
          "package": "structured-mongoDB",
          "signature": "f-\u003et-\u003eLabel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave document to collection. If the \u003ccode\u003e\u003ca\u003eSObjId\u003c/a\u003e\u003c/code\u003e field is set then\n the document is updated, otherwise we perform an insert.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "save",
          "package": "structured-mongoDB",
          "signature": "a -\u003e Action m ()",
          "source": "src/Database-MongoDB-Structured-Query.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save document to collection If the SObjId field is set then the document is updated otherwise we perform an insert",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "save",
          "normalized": "a-\u003eAction b()",
          "package": "structured-mongoDB",
          "signature": "a-\u003eAction m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a selection or query from an expression\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "select",
          "package": "structured-mongoDB",
          "signature": "QueryExp a -\u003e aQorS",
          "source": "src/Database-MongoDB-Structured-Query.html#select",
          "type": "method"
        },
        "index": {
          "description": "Create selection or query from an expression",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "select",
          "normalized": "QueryExp a-\u003eb",
          "package": "structured-mongoDB",
          "signature": "QueryExp a-\u003eaQorS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of matching objects to skip\n (default: 0).\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "skip",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e Word32",
          "source": "src/Database-MongoDB-Structured-Query.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Number of matching objects to skip default",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "skip",
          "normalized": "StructuredQuery-\u003eWord",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSortresult by this order.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Query",
          "name": "sort",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery -\u003e [OrderExp]",
          "source": "src/Database-MongoDB-Structured-Query.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sortresult by this order",
          "hierarchy": "Database MongoDB Structured Query",
          "module": "Database.MongoDB.Structured.Query",
          "name": "sort",
          "normalized": "StructuredQuery-\u003e[OrderExp]",
          "package": "structured-mongoDB",
          "signature": "StructuredQuery-\u003e[OrderExp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Query.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003ccode\u003eStructued\u003c/code\u003e type class which can be used to\n convert Haskel \"record types\" to \u003ccode\u003eBSON\u003c/code\u003e objects and vice versa.\n As a Mongo document has an \"_id\" field, we impose the requirement\n a record type have a field whose type is \u003ccode\u003e\u003ca\u003eSObjId\u003c/a\u003e\u003c/code\u003e (corresponding to\n \"_id\").\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "Types",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports Structued type class which can be used to convert Haskel record types to BSON objects and vice versa As Mongo document has an id field we impose the requirement record type have field whose type is SObjId corresponding to id",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "Types",
          "package": "structured-mongoDB",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType corresponding to the \"_id\" field of a document in a\n structured object.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "SObjId",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Types.html#SObjId",
          "type": "newtype"
        },
        "index": {
          "description": "Type corresponding to the id field of document in structured object",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "SObjId",
          "package": "structured-mongoDB",
          "partial": "SObj Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#t:SObjId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured class used to convert between a Haskell record type\n and BSON document.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "Structured",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured-Types.html#Structured",
          "type": "class"
        },
        "index": {
          "description": "Structured class used to convert between Haskell record type and BSON document",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "Structured",
          "package": "structured-mongoDB",
          "partial": "Structured",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#t:Structured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Structured.Types",
          "name": "SObjId",
          "package": "structured-mongoDB",
          "signature": "SObjId (Maybe ObjectId)",
          "source": "src/Database-MongoDB-Structured-Types.html#SObjId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "SObjId",
          "package": "structured-mongoDB",
          "partial": "SObj Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:SObjId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Structured.Types",
          "name": "collection",
          "package": "structured-mongoDB",
          "signature": "collection",
          "source": "src/Database-MongoDB-Structured-Types.html#collection",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "collection",
          "package": "structured-mongoDB",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Structured.Types",
          "name": "fromBSON",
          "package": "structured-mongoDB",
          "signature": "fromBSON",
          "source": "src/Database-MongoDB-Structured-Types.html#fromBSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "fromBSON",
          "package": "structured-mongoDB",
          "partial": "BSON",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:fromBSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the \"_id\" field is unset.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "isNoSObjId",
          "package": "structured-mongoDB",
          "signature": "SObjId -\u003e Bool",
          "source": "src/Database-MongoDB-Structured-Types.html#isNoSObjId",
          "type": "function"
        },
        "index": {
          "description": "Check if the id field is unset",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "isNoSObjId",
          "normalized": "SObjId-\u003eBool",
          "package": "structured-mongoDB",
          "partial": "No SObj Id",
          "signature": "SObjId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:isNoSObjId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"_id\" field is unset.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "noSObjId",
          "package": "structured-mongoDB",
          "signature": "SObjId",
          "source": "src/Database-MongoDB-Structured-Types.html#noSObjId",
          "type": "function"
        },
        "index": {
          "description": "The id field is unset",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "noSObjId",
          "package": "structured-mongoDB",
          "partial": "SObj Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:noSObjId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MongoDB.Structured.Types",
          "name": "toBSON",
          "package": "structured-mongoDB",
          "signature": "toBSON",
          "source": "src/Database-MongoDB-Structured-Types.html#toBSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "toBSON",
          "package": "structured-mongoDB",
          "partial": "BSON",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:toBSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \"_id\" field.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "toSObjId",
          "package": "structured-mongoDB",
          "signature": "ObjectId -\u003e SObjId",
          "source": "src/Database-MongoDB-Structured-Types.html#toSObjId",
          "type": "function"
        },
        "index": {
          "description": "Set the id field",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "toSObjId",
          "normalized": "ObjectId-\u003eSObjId",
          "package": "structured-mongoDB",
          "partial": "SObj Id",
          "signature": "ObjectId-\u003eSObjId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:toSObjId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \"_id\" field (assumes that it is set0.\n\u003c/p\u003e",
          "module": "Database.MongoDB.Structured.Types",
          "name": "unSObjId",
          "package": "structured-mongoDB",
          "signature": "SObjId -\u003e ObjectId",
          "source": "src/Database-MongoDB-Structured-Types.html#unSObjId",
          "type": "function"
        },
        "index": {
          "description": "Get the id field assumes that it is set0",
          "hierarchy": "Database MongoDB Structured Types",
          "module": "Database.MongoDB.Structured.Types",
          "name": "unSObjId",
          "normalized": "SObjId-\u003eObjectId",
          "package": "structured-mongoDB",
          "partial": "SObj Id",
          "signature": "SObjId-\u003eObjectId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured-Types.html#v:unSObjId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003cem\u003estructued\u003c/em\u003e interface to MongoDB.\n Specifically, Haskell record types are used (in place of BSON)\n to represent documents which can be inserted and retrieved from\n a MongoDB. Data types corresponding to fields of a document\n are used in forming well-typed queries, as opposed to strings.\n This module re-exports the \u003ca\u003eDatabase.MongoDB.Structured.Types\u003c/a\u003e\n module, which exports a \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e type class --- this class is\n used to convert Haskell record types to and from BSON documents.\n The module \u003ca\u003eDatabase.MongoDB.Structured.Query\u003c/a\u003e exports an\n interface similar to \u003ccode\u003eDatabase.MongoDB.Query\u003c/code\u003e which can be used to\n insert, query, update, delete, etc. record types from a Mongo DB.\n\u003c/p\u003e\u003cp\u003eThough users may provide their own instances for \u003ccode\u003e\u003ca\u003eStructured\u003c/a\u003e\u003c/code\u003e\n (and \u003ccode\u003e\u003ca\u003eSelectable\u003c/a\u003e\u003c/code\u003e, used in composing well-typed queries), we\n provide a Template Haskell function (\u003ccode\u003ederiveStructured\u003c/code\u003e)\n that can be used to automatically do this. See\n \u003ca\u003eDatabase.MongoDB.Structured.Deriving.TH\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe example below shows how to use the structued MongoDB interface:\n\u003c/p\u003e\u003cpre\u003e    {-# LANGUAGE TemplateHaskell #-}\n    {-# LANGUAGE TypeSynonymInstances #-}\n    {-# LANGUAGE MultiParamTypeClasses #-}\n    {-# LANGUAGE FlexibleInstances #-}\n    {-# LANGUAGE OverloadedStrings #-}\n    {-# LANGUAGE DeriveDataTypeable #-}\n    import Database.MongoDB.Structured\n    import Database.MongoDB.Structured.Deriving.TH\n    import Control.Monad.Trans (liftIO)\n    import Data.Typeable\n    import Control.Monad (mapM_)\n    import Control.Monad.IO.Class\n    import Data.Bson (Value)\n    import Data.Maybe (isJust, fromJust)\n\n    data Address = Address { addrId :: SObjId\n                           , city   :: String\n                           , state  :: String\n                           } deriving (Show, Eq, Typeable)\n    $(deriveStructured ''Address)\n\n    data Team = Team { teamId :: SObjId\n                     , name   :: String\n                     , home   :: Address\n                     , league :: String\n                     } deriving (Show, Eq, Typeable)\n    $(deriveStructured ''Team)\n\n    main = do\n       pipe \u003c- runIOE $ connect (host \"127.0.0.1\")\n       e \u003c- access pipe master \"baseball\" run\n       close pipe\n       print e\n\n    run = do\n       clearTeams\n       insertTeams\n       allTeams \u003e\u003e= printDocs \"All Teams\"\n       nationalLeagueTeams \u003e\u003e= printDocs \"National League Teams\"\n       newYorkTeams \u003e\u003e= printDocs \"New York Teams\"\n\n    -- Delete all teams:\n    clearTeams :: Action IO ()\n    clearTeams = delete (select ( (.*) :: QueryExp Team))\n\n    insertTeams :: Action IO [Value]\n    insertTeams = insertMany [\n       Team { teamId = noSObjId\n            , name   = \"Yankees\"\n            , home   = Address { addrId = noSObjId\n                               , city  = \"New York\"\n                               , state = \"NY\"\n                               }\n            , league = \"American\"}\n      , Team { teamId = noSObjId\n             , name   = \"Mets\"\n             , home   = Address { addrId = noSObjId\n                                , city  = \"New York\"\n                                , state = \"NY\"\n                                }\n             , league = \"National\"}\n      , Team { teamId = noSObjId\n             , name   = \"Phillies\"\n             , home   = Address { addrId = noSObjId\n                                , city  = \"Philadelphia\"\n                                , state = \"PA\"\n                                }\n             , league = \"National\"}\n      , Team { teamId = noSObjId\n             , name   = \"Red Sox\"\n             , home   = Address { addrId = noSObjId\n                                , city  = \"Boston\"\n                                , state = \"MA\"\n                                }\n             , league = \"National\"}\n      ]\n\n    allTeams :: Action IO [Maybe Team]\n    allTeams = let query = (select ((.*) :: QueryExp Team))\n                                { sort = [asc (Home .! City)]}\n               in find query \u003e\u003e= rest\n               \n    nationalLeagueTeams :: Action IO [Maybe Team]\n    nationalLeagueTeams = rest =\u003c\u003c find (select (League .== \"National\"))\n\n    newYorkTeams :: Action IO [Maybe Team]\n    newYorkTeams = rest =\u003c\u003c find (select (Home .! State .== \"NY\"))\n\n    printDocs :: MonadIO m =\u003e String -\u003e [Maybe Team] -\u003e m ()\n    printDocs title teams' = liftIO $ do\n      let teams = (map fromJust) . filter (isJust) $ teams'\n      putStrLn title \n      mapM_ (putStrLn . show) teams\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.MongoDB.Structured",
          "name": "Structured",
          "package": "structured-mongoDB",
          "source": "src/Database-MongoDB-Structured.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports structued interface to MongoDB Specifically Haskell record types are used in place of BSON to represent documents which can be inserted and retrieved from MongoDB Data types corresponding to fields of document are used in forming well-typed queries as opposed to strings This module re-exports the Database.MongoDB.Structured.Types module which exports Structured type class this class is used to convert Haskell record types to and from BSON documents The module Database.MongoDB.Structured.Query exports an interface similar to Database.MongoDB.Query which can be used to insert query update delete etc record types from Mongo DB Though users may provide their own instances for Structured and Selectable used in composing well-typed queries we provide Template Haskell function deriveStructured that can be used to automatically do this See Database.MongoDB.Structured.Deriving.TH The example below shows how to use the structued MongoDB interface LANGUAGE TemplateHaskell LANGUAGE TypeSynonymInstances LANGUAGE MultiParamTypeClasses LANGUAGE FlexibleInstances LANGUAGE OverloadedStrings LANGUAGE DeriveDataTypeable import Database.MongoDB.Structured import Database.MongoDB.Structured.Deriving.TH import Control.Monad.Trans liftIO import Data.Typeable import Control.Monad mapM import Control.Monad.IO.Class import Data.Bson Value import Data.Maybe isJust fromJust data Address Address addrId SObjId city String state String deriving Show Eq Typeable deriveStructured Address data Team Team teamId SObjId name String home Address league String deriving Show Eq Typeable deriveStructured Team main do pipe runIOE connect host access pipe master baseball run close pipe print run do clearTeams insertTeams allTeams printDocs All Teams nationalLeagueTeams printDocs National League Teams newYorkTeams printDocs New York Teams Delete all teams clearTeams Action IO clearTeams delete select QueryExp Team insertTeams Action IO Value insertTeams insertMany Team teamId noSObjId name Yankees home Address addrId noSObjId city New York state NY league American Team teamId noSObjId name Mets home Address addrId noSObjId city New York state NY league National Team teamId noSObjId name Phillies home Address addrId noSObjId city Philadelphia state PA league National Team teamId noSObjId name Red Sox home Address addrId noSObjId city Boston state MA league National allTeams Action IO Maybe Team allTeams let query select QueryExp Team sort asc Home City in find query rest nationalLeagueTeams Action IO Maybe Team nationalLeagueTeams rest find select League National newYorkTeams Action IO Maybe Team newYorkTeams rest find select Home State NY printDocs MonadIO String Maybe Team printDocs title teams liftIO do let teams map fromJust filter isJust teams putStrLn title mapM putStrLn show teams",
          "hierarchy": "Database MongoDB Structured",
          "module": "Database.MongoDB.Structured",
          "name": "Structured",
          "package": "structured-mongoDB",
          "partial": "Structured",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/structured-mongoDB/docs/Database-MongoDB-Structured.html#"
      }
    }
  ]
]