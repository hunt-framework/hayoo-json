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
        "word": "happstack-data"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e instance for all types. \u003ccode\u003e\u003ca\u003edefaultDefaultValue\u003c/a\u003e\u003c/code\u003e is\n used for \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Data.Default.Generic",
          "name": "Generic",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Default-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Provides Default instance for all types defaultDefaultValue is used for defaultValue",
          "hierarchy": "Happstack Data Default Generic",
          "module": "Happstack.Data.Default.Generic",
          "name": "Generic",
          "package": "happstack-data",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides default values for Haskell datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Data.Default",
          "name": "Default",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Default.html",
          "type": "module"
        },
        "index": {
          "description": "Provides default values for Haskell datatypes",
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "Default",
          "package": "happstack-data",
          "partial": "Default",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e class provides a \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e value, which\n is the default value for that type.\n\u003c/p\u003e\u003cp\u003eThere is no instance for arbitrary types by default, but if you\n declare an instance without providing the value then one will be\n built using the first constructor. \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e is used to provide\n values for any arguments of the constructor.\n\u003c/p\u003e\u003cp\u003eIf you want an instance for all types then import\n \u003ca\u003eHappstack.Data.Default.Generic\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.Default",
          "name": "Default",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Default.html#Default",
          "type": "class"
        },
        "index": {
          "description": "The Default class provides defaultValue value which is the default value for that type There is no instance for arbitrary types by default but if you declare an instance without providing the value then one will be built using the first constructor defaultValue is used to provide values for any arguments of the constructor If you want an instance for all types then import Happstack.Data.Default.Generic",
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "Default",
          "package": "happstack-data",
          "partial": "Default",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#t:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen writing your own generic functions for \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e you may\n need to access the class method through this datatype rather than\n directly.\n\u003c/p\u003e",
          "module": "Happstack.Data.Default",
          "name": "DefaultD",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Default.html#DefaultD",
          "type": "data"
        },
        "index": {
          "description": "When writing your own generic functions for Default you may need to access the class method through this datatype rather than directly",
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "DefaultD",
          "package": "happstack-data",
          "partial": "Default",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#t:DefaultD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Default",
          "name": "DefaultD",
          "package": "happstack-data",
          "signature": "DefaultD",
          "source": "src/Happstack-Data-Default.html#DefaultD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "DefaultD",
          "package": "happstack-data",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#v:DefaultD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e that is used in an instance if you don't\n specify one. It may be a useful building block when writing your own\n instances.\n\u003c/p\u003e",
          "module": "Happstack.Data.Default",
          "name": "defaultDefaultValue",
          "package": "happstack-data",
          "signature": "a",
          "source": "src/Happstack-Data-Default.html#defaultDefaultValue",
          "type": "function"
        },
        "index": {
          "description": "This is the defaultValue that is used in an instance if you don specify one It may be useful building block when writing your own instances",
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "defaultDefaultValue",
          "package": "happstack-data",
          "partial": "Default Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#v:defaultDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen writing your own generic functions for \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e you may\n need this, the proxy value.\n\u003c/p\u003e",
          "module": "Happstack.Data.Default",
          "name": "defaultProxy",
          "package": "happstack-data",
          "signature": "Proxy DefaultD",
          "source": "src/Happstack-Data-Default.html#defaultProxy",
          "type": "function"
        },
        "index": {
          "description": "When writing your own generic functions for Default you may need this the proxy value",
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "defaultProxy",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#v:defaultProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Default",
          "name": "defaultValue",
          "package": "happstack-data",
          "signature": "a",
          "source": "src/Happstack-Data-Default.html#defaultValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "defaultValue",
          "package": "happstack-data",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#v:defaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Default",
          "name": "defaultValueD",
          "package": "happstack-data",
          "signature": "a",
          "source": "src/Happstack-Data-Default.html#DefaultD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Default",
          "module": "Happstack.Data.Default",
          "name": "defaultValueD",
          "package": "happstack-data",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Default.html#v:defaultValueD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcisely specify which classes to derive for your datatypes.\n As well as the standard derivable classes, it can also\n derive syb-with-class's \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class and Happstack.Data.Default's\n \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Data.DeriveAll",
          "name": "DeriveAll",
          "package": "happstack-data",
          "source": "src/Happstack-Data-DeriveAll.html",
          "type": "module"
        },
        "index": {
          "description": "Concisely specify which classes to derive for your datatypes As well as the standard derivable classes it can also derive syb-with-class Data class and Happstack.Data.Default Default class",
          "hierarchy": "Happstack Data DeriveAll",
          "module": "Happstack.Data.DeriveAll",
          "name": "DeriveAll",
          "package": "happstack-data",
          "partial": "Derive All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-DeriveAll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ederiveAll\u003c/a\u003e\u003c/code\u003e function takes a list of classes to derive and\n a block of declarations. It will additionally derive instances for\n Typeable, Old.Data and New.Data.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e $( deriveAll [''Show, ''Eq, ''Default] [d|\n        data Foo a = Foo a\n        data Bar = Baz | Quux\n  |] )\n\u003c/pre\u003e",
          "module": "Happstack.Data.DeriveAll",
          "name": "deriveAll",
          "package": "happstack-data",
          "signature": "[Name] -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-DeriveAll.html#deriveAll",
          "type": "function"
        },
        "index": {
          "description": "The deriveAll function takes list of classes to derive and block of declarations It will additionally derive instances for Typeable Old.Data and New.Data Example deriveAll Show Eq Default data Foo Foo data Bar Baz Quux",
          "hierarchy": "Happstack Data DeriveAll",
          "module": "Happstack.Data.DeriveAll",
          "name": "deriveAll",
          "normalized": "[Name]-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "All",
          "signature": "[Name]-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-DeriveAll.html#v:deriveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives instances for syb-with-class's Data class and \n   Happstack.Data.Default's Default class.\n   The list of names should be of the form [''Foo,''Bar,..]\n\u003c/p\u003e",
          "module": "Happstack.Data.DeriveAll",
          "name": "deriveNewData",
          "package": "happstack-data",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-DeriveAll.html#deriveNewData",
          "type": "function"
        },
        "index": {
          "description": "Derives instances for syb-with-class Data class and Happstack.Data.Default Default class The list of names should be of the form Foo Bar",
          "hierarchy": "Happstack Data DeriveAll",
          "module": "Happstack.Data.DeriveAll",
          "name": "deriveNewData",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "New Data",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-DeriveAll.html#v:deriveNewData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives instances for syb-with-class's Data class only.\n   The list of names should be of the form [''Foo,''Bar,..]\n\u003c/p\u003e",
          "module": "Happstack.Data.DeriveAll",
          "name": "deriveNewDataNoDefault",
          "package": "happstack-data",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-DeriveAll.html#deriveNewDataNoDefault",
          "type": "function"
        },
        "index": {
          "description": "Derives instances for syb-with-class Data class only The list of names should be of the form Foo Bar",
          "hierarchy": "Happstack Data DeriveAll",
          "module": "Happstack.Data.DeriveAll",
          "name": "deriveNewDataNoDefault",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "New Data No Default",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-DeriveAll.html#v:deriveNewDataNoDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.GOps",
          "name": "GOps",
          "package": "happstack-data",
          "source": "src/Happstack-Data-GOps.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "GOps",
          "package": "happstack-data",
          "partial": "GOps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized ask that will traverse the\n stored type of the MonadReader in an attempt to find\n an \u003ccode\u003ea\u003c/code\u003e and will then apply the provided function if\n found.\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gAsk",
          "package": "happstack-data",
          "signature": "(a -\u003e n b) -\u003e m (n b)",
          "source": "src/Happstack-Data-GOps.html#gAsk",
          "type": "function"
        },
        "index": {
          "description": "generalized ask that will traverse the stored type of the MonadReader in an attempt to find an and will then apply the provided function if found",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gAsk",
          "normalized": "(a-\u003eb c)-\u003ed(b c)",
          "package": "happstack-data",
          "partial": "Ask",
          "signature": "(a-\u003en b)-\u003em(n b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gAsk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egFind a\u003c/code\u003e will extract any elements of type \u003ccode\u003eb\u003c/code\u003e from\n \u003ccode\u003ea\u003c/code\u003e's structure in accordance with the MonadPlus\n instance, e.g. Maybe Foo will return the first Foo\n found while [Foo] will return the list of Foos found.\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gFind",
          "package": "happstack-data",
          "signature": "a -\u003e m b",
          "source": "src/Happstack-Data-GOps.html#gFind",
          "type": "function"
        },
        "index": {
          "description": "gFind will extract any elements of type from structure in accordance with the MonadPlus instance e.g Maybe Foo will return the first Foo found while Foo will return the list of Foos found",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gFind",
          "normalized": "a-\u003eb c",
          "package": "happstack-data",
          "partial": "Find",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as gFind but will throw an exception if\n nothing is found.\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gFind'",
          "package": "happstack-data",
          "signature": "a -\u003e b",
          "source": "src/Happstack-Data-GOps.html#gFind%27",
          "type": "function"
        },
        "index": {
          "description": "Acts as gFind but will throw an exception if nothing is found",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gFind'",
          "normalized": "a-\u003eb",
          "package": "happstack-data",
          "partial": "Find'",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gFind-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ca\u003egAsk\u003c/a\u003e\u003c/code\u003e for MonadState\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gGet",
          "package": "happstack-data",
          "signature": "(a -\u003e n b) -\u003e c -\u003e m (n b)",
          "source": "src/Happstack-Data-GOps.html#gGet",
          "type": "function"
        },
        "index": {
          "description": "The equivalent of gAsk for MonadState",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gGet",
          "normalized": "(a-\u003eb c)-\u003ed-\u003ee(b c)",
          "package": "happstack-data",
          "partial": "Get",
          "signature": "(a-\u003en b)-\u003ec-\u003em(n b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized modify that will apply the modification\n function to the structure of the state.\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gModify",
          "package": "happstack-data",
          "signature": "(a -\u003e a) -\u003e m ()",
          "source": "src/Happstack-Data-GOps.html#gModify",
          "type": "function"
        },
        "index": {
          "description": "generalized modify that will apply the modification function to the structure of the state",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gModify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "happstack-data",
          "partial": "Modify",
          "signature": "(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egReplace f b\u003c/code\u003e will traverse \u003ccode\u003ex\u003c/code\u003e and will act on\n any instance of the type \u003ccode\u003ea\u003c/code\u003e in its structure with\n the function \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gReplace",
          "package": "happstack-data",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Happstack-Data-GOps.html#gReplace",
          "type": "function"
        },
        "index": {
          "description": "gReplace will traverse and will act on any instance of the type in its structure with the function",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gReplace",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "happstack-data",
          "partial": "Replace",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egSet x y\u003c/code\u003e will traveral \u003ccode\u003ex\u003c/code\u003e and replace \n any instances of the type \u003ccode\u003ea\u003c/code\u003e in its structure \n with \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.GOps",
          "name": "gSet",
          "package": "happstack-data",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Happstack-Data-GOps.html#gSet",
          "type": "function"
        },
        "index": {
          "description": "gSet will traveral and replace any instances of the type in its structure with",
          "hierarchy": "Happstack Data GOps",
          "module": "Happstack.Data.GOps",
          "name": "gSet",
          "normalized": "a-\u003eb-\u003eb",
          "package": "happstack-data",
          "partial": "Set",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-GOps.html#v:gSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Migrate",
          "name": "Migrate",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Migrate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data Migrate",
          "module": "Happstack.Data.Migrate",
          "name": "Migrate",
          "package": "happstack-data",
          "partial": "Migrate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Migrate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMigrate instances are needed to allow upgrades of MACID state.  It should be declared as instance Migrate Old New where migrate = transition_function\n\u003c/p\u003e",
          "module": "Happstack.Data.Migrate",
          "name": "Migrate",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Migrate.html#Migrate",
          "type": "class"
        },
        "index": {
          "description": "Migrate instances are needed to allow upgrades of MACID state It should be declared as instance Migrate Old New where migrate transition function",
          "hierarchy": "Happstack Data Migrate",
          "module": "Happstack.Data.Migrate",
          "name": "Migrate",
          "package": "happstack-data",
          "partial": "Migrate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Migrate.html#t:Migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Migrate",
          "name": "migrate",
          "package": "happstack-data",
          "signature": "a -\u003e b",
          "source": "src/Happstack-Data-Migrate.html#migrate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Migrate",
          "module": "Happstack.Data.Migrate",
          "name": "migrate",
          "normalized": "a-\u003eb",
          "package": "happstack-data",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Migrate.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNormalizing Haskell values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Data.Normalize",
          "name": "Normalize",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Normalize.html",
          "type": "module"
        },
        "index": {
          "description": "Normalizing Haskell values",
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "Normalize",
          "package": "happstack-data",
          "partial": "Normalize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNormalize\u003c/a\u003e\u003c/code\u003e class provides a \u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e function, which\n is intended to normalize values only at the top-level constructor,\n and a \u003ccode\u003e\u003ca\u003enormalizeRecursively\u003c/a\u003e\u003c/code\u003e function, which is intended to\n normalize all the subvalues and then normalize the top-level\n constructor.\n\u003c/p\u003e\u003cp\u003eThere is a default instance that matches all types, where \u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e\n is \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enormalizeRecursively\u003c/a\u003e\u003c/code\u003e applies \u003ccode\u003e\u003ca\u003enormalizeRecursively\u003c/a\u003e\u003c/code\u003e to\n all of its children and then \u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e to the result.\n\u003c/p\u003e\u003cp\u003eIf you want to actually do some normalization for a certain type,\n then just define an instance for that type; this will take precedence\n over the default instance.\n\u003c/p\u003e",
          "module": "Happstack.Data.Normalize",
          "name": "Normalize",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Normalize.html#Normalize",
          "type": "class"
        },
        "index": {
          "description": "The Normalize class provides normalize function which is intended to normalize values only at the top-level constructor and normalizeRecursively function which is intended to normalize all the subvalues and then normalize the top-level constructor There is default instance that matches all types where normalize is id and normalizeRecursively applies normalizeRecursively to all of its children and then normalize to the result If you want to actually do some normalization for certain type then just define an instance for that type this will take precedence over the default instance",
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "Normalize",
          "package": "happstack-data",
          "partial": "Normalize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#t:Normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen writing your own generic functions for \u003ccode\u003e\u003ca\u003eNormalize\u003c/a\u003e\u003c/code\u003e you may\n need to access the class methods through this datatype rather than\n directly.\n\u003c/p\u003e",
          "module": "Happstack.Data.Normalize",
          "name": "NormalizeD",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Normalize.html#NormalizeD",
          "type": "data"
        },
        "index": {
          "description": "When writing your own generic functions for Normalize you may need to access the class methods through this datatype rather than directly",
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "NormalizeD",
          "package": "happstack-data",
          "partial": "Normalize",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#t:NormalizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Normalize",
          "name": "NormalizeD",
          "package": "happstack-data",
          "signature": "NormalizeD",
          "source": "src/Happstack-Data-Normalize.html#NormalizeD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "NormalizeD",
          "package": "happstack-data",
          "partial": "Normalize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:NormalizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e function in the default \u003ccode\u003e\u003ca\u003eNormalize\u003c/a\u003e\u003c/code\u003e\n instance. It may be a useful building block when writing your own\n instances.\n\u003c/p\u003e",
          "module": "Happstack.Data.Normalize",
          "name": "defaultNormalize",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Normalize.html#defaultNormalize",
          "type": "function"
        },
        "index": {
          "description": "This is the normalize function in the default Normalize instance It may be useful building block when writing your own instances",
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "defaultNormalize",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "partial": "Normalize",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:defaultNormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003e\u003ca\u003enormalizeRecursively\u003c/a\u003e\u003c/code\u003e function in the default\n \u003ccode\u003e\u003ca\u003eNormalize\u003c/a\u003e\u003c/code\u003e instance. It may be a useful building block when writing\n your own instances.\n\u003c/p\u003e",
          "module": "Happstack.Data.Normalize",
          "name": "defaultNormalizeRecursively",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Normalize.html#defaultNormalizeRecursively",
          "type": "function"
        },
        "index": {
          "description": "This is the normalizeRecursively function in the default Normalize instance It may be useful building block when writing your own instances",
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "defaultNormalizeRecursively",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "partial": "Normalize Recursively",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:defaultNormalizeRecursively"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Normalize",
          "name": "normalize",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Normalize.html#normalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "normalize",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Normalize",
          "name": "normalizeD",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Normalize.html#NormalizeD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "normalizeD",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:normalizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen writing your own generic functions for \u003ccode\u003e\u003ca\u003eNormalize\u003c/a\u003e\u003c/code\u003e you may\n need this, the proxy value.\n\u003c/p\u003e",
          "module": "Happstack.Data.Normalize",
          "name": "normalizeProxy",
          "package": "happstack-data",
          "signature": "Proxy NormalizeD",
          "source": "src/Happstack-Data-Normalize.html#normalizeProxy",
          "type": "function"
        },
        "index": {
          "description": "When writing your own generic functions for Normalize you may need this the proxy value",
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "normalizeProxy",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:normalizeProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Normalize",
          "name": "normalizeRecursively",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Normalize.html#normalizeRecursively",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "normalizeRecursively",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "partial": "Recursively",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:normalizeRecursively"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Normalize",
          "name": "normalizeRecursivelyD",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Normalize.html#NormalizeD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Normalize",
          "module": "Happstack.Data.Normalize",
          "name": "normalizeRecursivelyD",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "partial": "Recursively",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Normalize.html#v:normalizeRecursivelyD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Pairs",
          "name": "Pairs",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Pairs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "Pairs",
          "package": "happstack-data",
          "partial": "Pairs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Pairs",
          "name": "AsPairs",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Pairs.html#AsPairs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "AsPairs",
          "package": "happstack-data",
          "partial": "As Pairs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#t:AsPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Pairs",
          "name": "Pairs",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Pairs.html#Pairs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "Pairs",
          "package": "happstack-data",
          "partial": "Pairs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#t:Pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Pairs",
          "name": "fromPairs",
          "package": "happstack-data",
          "signature": "Pairs -\u003e Maybe x",
          "source": "src/Happstack-Data-Pairs.html#fromPairs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "fromPairs",
          "normalized": "Pairs-\u003eMaybe a",
          "package": "happstack-data",
          "partial": "Pairs",
          "signature": "Pairs-\u003eMaybe x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:fromPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the Xml structure corresponding to the specification of an HTML\n form.  The provided pairs should be the spec of the inputs to the form.\n\u003c/p\u003e",
          "module": "Happstack.Data.Pairs",
          "name": "pairsToHTMLForm",
          "package": "happstack-data",
          "signature": "String -\u003e String -\u003e String -\u003e Pairs -\u003e [Element]",
          "source": "src/Happstack-Data-Pairs.html#pairsToHTMLForm",
          "type": "function"
        },
        "index": {
          "description": "Creates the Xml structure corresponding to the specification of an HTML form The provided pairs should be the spec of the inputs to the form",
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "pairsToHTMLForm",
          "normalized": "String-\u003eString-\u003eString-\u003ePairs-\u003e[Element]",
          "package": "happstack-data",
          "partial": "To HTMLForm",
          "signature": "String-\u003eString-\u003eString-\u003ePairs-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:pairsToHTMLForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts lists of string pairs into a list of Elements.\n The basic structure is \n pairsToXml [(\u003ca\u003efoo\u003c/a\u003e,\u003ca\u003ebar\u003c/a\u003e)] = [Elem \u003ca\u003efoo\u003c/a\u003e [CData \u003ca\u003ebar\u003c/a\u003e]]\n pairsToXml [(\u003ca\u003efoo/bar\u003c/a\u003e,\u003ca\u003ebaz\u003c/a\u003e)] = [Elem \u003ca\u003efoo\u003c/a\u003e [Elem \u003ca\u003ebar\u003c/a\u003e [CData \u003ca\u003ebaz\u003c/a\u003e]]] \n\u003c/p\u003e",
          "module": "Happstack.Data.Pairs",
          "name": "pairsToXml",
          "package": "happstack-data",
          "signature": "Pairs -\u003e [Element]",
          "source": "src/Happstack-Data-Pairs.html#pairsToXml",
          "type": "function"
        },
        "index": {
          "description": "Converts lists of string pairs into list of Elements The basic structure is pairsToXml foo bar Elem foo CData bar pairsToXml foo bar baz Elem foo Elem bar CData baz",
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "pairsToXml",
          "normalized": "Pairs-\u003e[Element]",
          "package": "happstack-data",
          "partial": "To Xml",
          "signature": "Pairs-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:pairsToXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to pairsToHTMLForm but first converts the Xml instance to list of pairs.  An alias for xmlToHTMLForm currently.\n\u003c/p\u003e",
          "module": "Happstack.Data.Pairs",
          "name": "toHTMLForm",
          "package": "happstack-data",
          "signature": "String -\u003e String -\u003e String -\u003e a -\u003e [Element]",
          "source": "src/Happstack-Data-Pairs.html#toHTMLForm",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to pairsToHTMLForm but first converts the Xml instance to list of pairs An alias for xmlToHTMLForm currently",
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "toHTMLForm",
          "normalized": "String-\u003eString-\u003eString-\u003ea-\u003e[Element]",
          "package": "happstack-data",
          "partial": "HTMLForm",
          "signature": "String-\u003eString-\u003eString-\u003ea-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:toHTMLForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Pairs",
          "name": "toPairs",
          "package": "happstack-data",
          "signature": "x -\u003e Pairs",
          "source": "src/Happstack-Data-Pairs.html#toPairs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "toPairs",
          "normalized": "a-\u003ePairs",
          "package": "happstack-data",
          "partial": "Pairs",
          "signature": "x-\u003ePairs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:toPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Pairs",
          "name": "toPairsX",
          "package": "happstack-data",
          "signature": "a -\u003e Pairs",
          "source": "src/Happstack-Data-Pairs.html#toPairsX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "toPairsX",
          "normalized": "a-\u003ePairs",
          "package": "happstack-data",
          "partial": "Pairs",
          "signature": "a-\u003ePairs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:toPairsX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to pairsToHTMLForm but first converts the Xml instance to list of pairs.\n\u003c/p\u003e",
          "module": "Happstack.Data.Pairs",
          "name": "xmlToHTMLForm",
          "package": "happstack-data",
          "signature": "String -\u003e String -\u003e String -\u003e a -\u003e [Element]",
          "source": "src/Happstack-Data-Pairs.html#xmlToHTMLForm",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to pairsToHTMLForm but first converts the Xml instance to list of pairs",
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "xmlToHTMLForm",
          "normalized": "String-\u003eString-\u003eString-\u003ea-\u003e[Element]",
          "package": "happstack-data",
          "partial": "To HTMLForm",
          "signature": "String-\u003eString-\u003eString-\u003ea-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:xmlToHTMLForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of Elements to a list of String pairs.\n xmlToPairs [CData _] = error\n xmlToPairs [Elem \u003ca\u003efoo\u003c/a\u003e [CData \u003ca\u003ebar\u003c/a\u003e]] = [(\u003ca\u003efoo\u003c/a\u003e,\u003ca\u003ebar\u003c/a\u003e)]\n xmlToPairs [Elem \u003ca\u003efoo\u003c/a\u003e [Elem \u003ca\u003ebar\u003c/a\u003e [CData \u003ca\u003ebaz\u003c/a\u003e]]] = [(\u003ca\u003efoo/bar\u003c/a\u003e,\u003ca\u003ebaz\u003c/a\u003e)]\n xmlToPairs . pairsToXml = id\n\u003c/p\u003e",
          "module": "Happstack.Data.Pairs",
          "name": "xmlToPairs",
          "package": "happstack-data",
          "signature": "[Element] -\u003e Pairs",
          "source": "src/Happstack-Data-Pairs.html#xmlToPairs",
          "type": "function"
        },
        "index": {
          "description": "Converts list of Elements to list of String pairs xmlToPairs CData error xmlToPairs Elem foo CData bar foo bar xmlToPairs Elem foo Elem bar CData baz foo bar baz xmlToPairs pairsToXml id",
          "hierarchy": "Happstack Data Pairs",
          "module": "Happstack.Data.Pairs",
          "name": "xmlToPairs",
          "normalized": "[Element]-\u003ePairs",
          "package": "happstack-data",
          "partial": "To Pairs",
          "signature": "[Element]-\u003ePairs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Pairs.html#v:xmlToPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Proxy",
          "name": "Proxy",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Proxy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "Proxy",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProxy is empty and is used as a transport of a phantom type\n\u003c/p\u003e",
          "module": "Happstack.Data.Proxy",
          "name": "Proxy",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Proxy.html#Proxy",
          "type": "data"
        },
        "index": {
          "description": "Proxy is empty and is used as transport of phantom type",
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "Proxy",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Proxy",
          "name": "Proxy",
          "package": "happstack-data",
          "signature": "Proxy",
          "source": "src/Happstack-Data-Proxy.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "Proxy",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#v:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs as id except for providing type restrictions\n\u003c/p\u003e",
          "module": "Happstack.Data.Proxy",
          "name": "asProxyType",
          "package": "happstack-data",
          "signature": "t -\u003e Proxy t -\u003e t",
          "source": "src/Happstack-Data-Proxy.html#asProxyType",
          "type": "function"
        },
        "index": {
          "description": "Acts as id except for providing type restrictions",
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "asProxyType",
          "normalized": "a-\u003eProxy a-\u003ea",
          "package": "happstack-data",
          "partial": "Proxy Type",
          "signature": "t-\u003eProxy t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#v:asProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Proxy",
          "name": "constr_sybwc_Proxy_1627498015",
          "package": "happstack-data",
          "signature": "Constr",
          "source": "src/Happstack-Data-Proxy.html#constr_sybwc_Proxy_1627498015",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "constr_sybwc_Proxy_1627498015",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#v:constr_sybwc_Proxy_1627498015"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Proxy",
          "name": "dataType_sybwc_Proxy_1627498014",
          "package": "happstack-data",
          "signature": "DataType",
          "source": "src/Happstack-Data-Proxy.html#dataType_sybwc_Proxy_1627498014",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "dataType_sybwc_Proxy_1627498014",
          "package": "happstack-data",
          "partial": "Type Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#v:dataType_sybwc_Proxy_1627498014"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the Proxy with a type matching the argument\n\u003c/p\u003e",
          "module": "Happstack.Data.Proxy",
          "name": "proxy",
          "package": "happstack-data",
          "signature": "t -\u003e Proxy t",
          "source": "src/Happstack-Data-Proxy.html#proxy",
          "type": "function"
        },
        "index": {
          "description": "Creates the Proxy with type matching the argument",
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "proxy",
          "normalized": "a-\u003eProxy a",
          "package": "happstack-data",
          "signature": "t-\u003eProxy t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns bottom\n\u003c/p\u003e",
          "module": "Happstack.Data.Proxy",
          "name": "unProxy",
          "package": "happstack-data",
          "signature": "Proxy t -\u003e t",
          "source": "src/Happstack-Data-Proxy.html#unProxy",
          "type": "function"
        },
        "index": {
          "description": "Returns bottom",
          "hierarchy": "Happstack Data Proxy",
          "module": "Happstack.Data.Proxy",
          "name": "unProxy",
          "normalized": "Proxy a-\u003ea",
          "package": "happstack-data",
          "partial": "Proxy",
          "signature": "Proxy t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Proxy.html#v:unProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "Serialize",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Serialize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Serialize",
          "package": "happstack-data",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "Contained",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Serialize.html#Contained",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Contained",
          "package": "happstack-data",
          "partial": "Contained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#t:Contained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMigrate instances are needed to allow upgrades of MACID state.  It should be declared as instance Migrate Old New where migrate = transition_function\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "Migrate",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Migrate.html#Migrate",
          "type": "class"
        },
        "index": {
          "description": "Migrate instances are needed to allow upgrades of MACID state It should be declared as instance Migrate Old New where migrate transition function",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Migrate",
          "package": "happstack-data",
          "partial": "Migrate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#t:Migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "Mode",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Serialize.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Mode",
          "package": "happstack-data",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform container for any serialized data.  It contains a string rep of the type\n and the actual data serialized to a byte string.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "Object",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Serialize.html#Object",
          "type": "data"
        },
        "index": {
          "description": "Uniform container for any serialized data It contains string rep of the type and the actual data serialized to byte string",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Object",
          "package": "happstack-data",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "Serialize",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Serialize.html#Serialize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Serialize",
          "package": "happstack-data",
          "partial": "Serialize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#t:Serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Version type class is used to describe whether a type is fundamental\n or if it is meant to extend another type.  For a user defined type that\n does not extend any others, one can use the default instance of Version, e.g.\n \u003ccode\u003einstance Version MyType\u003c/code\u003e to define it has having a version id of 0 and previous\n type.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "Version",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Serialize.html#Version",
          "type": "class"
        },
        "index": {
          "description": "The Version type class is used to describe whether type is fundamental or if it is meant to extend another type For user defined type that does not extend any others one can use the default instance of Version e.g instance Version MyType to define it has having version id of and previous type",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Version",
          "package": "happstack-data",
          "partial": "Version",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData layout won't change. Used for types like Int and Char.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "Primitive",
          "package": "happstack-data",
          "signature": "Primitive",
          "source": "src/Happstack-Data-Serialize.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Data layout won change Used for types like Int and Char",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Primitive",
          "package": "happstack-data",
          "partial": "Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:Primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "Versioned",
          "package": "happstack-data",
          "signature": "Versioned (VersionId a) (Maybe (Previous a))",
          "source": "src/Happstack-Data-Serialize.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "Versioned",
          "package": "happstack-data",
          "partial": "Versioned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:Versioned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion lookups\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "collectVersions",
          "package": "happstack-data",
          "signature": "Proxy a -\u003e [ByteString]",
          "source": "src/Happstack-Data-Serialize.html#collectVersions",
          "type": "function"
        },
        "index": {
          "description": "Version lookups",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "collectVersions",
          "normalized": "Proxy a-\u003e[ByteString]",
          "package": "happstack-data",
          "partial": "Versions",
          "signature": "Proxy a-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:collectVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts the provided value into Contained\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "contain",
          "package": "happstack-data",
          "signature": "a -\u003e Contained a",
          "source": "src/Happstack-Data-Serialize.html#contain",
          "type": "function"
        },
        "index": {
          "description": "Lifts the provided value into Contained",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "contain",
          "normalized": "a-\u003eContained a",
          "package": "happstack-data",
          "signature": "a-\u003eContained a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:contain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure version of \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e.  Parses a ByteString into the expected type\n and a remainder.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "deserialize",
          "package": "happstack-data",
          "signature": "ByteString -\u003e (a, ByteString)",
          "source": "src/Happstack-Data-Serialize.html#deserialize",
          "type": "function"
        },
        "index": {
          "description": "Pure version of safeGet Parses ByteString into the expected type and remainder",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "deserialize",
          "normalized": "ByteString-\u003e(a,ByteString)",
          "package": "happstack-data",
          "signature": "ByteString-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edeserialize\u003c/a\u003e\u003c/code\u003e specialized to Objects \n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "deserializeObject",
          "package": "happstack-data",
          "signature": "ByteString -\u003e (Object, ByteString)",
          "source": "src/Happstack-Data-Serialize.html#deserializeObject",
          "type": "function"
        },
        "index": {
          "description": "deserialize specialized to Objects",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "deserializeObject",
          "normalized": "ByteString-\u003e(Object,ByteString)",
          "package": "happstack-data",
          "partial": "Object",
          "signature": "ByteString-\u003e(Object,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:deserializeObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Mode that is a new version of the type carried by the provided proxy\n and with the provided version number.  Note that since VersionId is an instance of\n Num that you may use int literals when calling extension, e.g. \n \u003ccode\u003eextension 1 (Proxy :: Proxy OldState)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "extension",
          "package": "happstack-data",
          "signature": "VersionId a -\u003e Proxy b -\u003e Mode a",
          "source": "src/Happstack-Data-Serialize.html#extension",
          "type": "function"
        },
        "index": {
          "description": "Creates Mode that is new version of the type carried by the provided proxy and with the provided version number Note that since VersionId is an instance of Num that you may use int literals when calling extension e.g extension Proxy Proxy OldState",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "extension",
          "normalized": "VersionId a-\u003eProxy b-\u003eMode a",
          "package": "happstack-data",
          "signature": "VersionId a-\u003eProxy b-\u003eMode a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "getCopy",
          "package": "happstack-data",
          "signature": "Contained (Get a)",
          "source": "src/Happstack-Data-Serialize.html#getCopy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "getCopy",
          "package": "happstack-data",
          "partial": "Copy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:getCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "getSafeGet",
          "package": "happstack-data",
          "signature": "Get (Get a)",
          "source": "src/Happstack-Data-Serialize.html#getSafeGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "getSafeGet",
          "package": "happstack-data",
          "partial": "Safe Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:getSafeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "getSafePut",
          "package": "happstack-data",
          "signature": "PutM (a -\u003e Put)",
          "source": "src/Happstack-Data-Serialize.html#getSafePut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "getSafePut",
          "normalized": "PutM(a-\u003ePut)",
          "package": "happstack-data",
          "partial": "Safe Put",
          "signature": "PutM(a-\u003ePut)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:getSafePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "migrate",
          "package": "happstack-data",
          "signature": "a -\u003e b",
          "source": "src/Happstack-Data-Migrate.html#migrate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "migrate",
          "normalized": "a-\u003eb",
          "package": "happstack-data",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerializes data and stores it along with its type name in an Object\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "mkObject",
          "package": "happstack-data",
          "signature": "a -\u003e Object",
          "source": "src/Happstack-Data-Serialize.html#mkObject",
          "type": "function"
        },
        "index": {
          "description": "Serializes data and stores it along with its type name in an Object",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "mkObject",
          "normalized": "a-\u003eObject",
          "package": "happstack-data",
          "partial": "Object",
          "signature": "a-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:mkObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "mode",
          "package": "happstack-data",
          "signature": "Mode a",
          "source": "src/Happstack-Data-Serialize.html#mode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "mode",
          "package": "happstack-data",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to convert an Object back into its base type.\n If the conversion fails \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e will be called.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "parseObject",
          "package": "happstack-data",
          "signature": "Object -\u003e a",
          "source": "src/Happstack-Data-Serialize.html#parseObject",
          "type": "function"
        },
        "index": {
          "description": "Attempts to convert an Object back into its base type If the conversion fails error will be called",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "parseObject",
          "normalized": "Object-\u003ea",
          "package": "happstack-data",
          "partial": "Object",
          "signature": "Object-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:parseObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "putCopy",
          "package": "happstack-data",
          "signature": "a -\u003e Contained Put",
          "source": "src/Happstack-Data-Serialize.html#putCopy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "putCopy",
          "normalized": "a-\u003eContained Put",
          "package": "happstack-data",
          "partial": "Copy",
          "signature": "a-\u003eContained Put",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:putCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent of Data.Binary.get for instances of Serialize\n Takes into account versioning of types.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "safeGet",
          "package": "happstack-data",
          "signature": "Get a",
          "source": "src/Happstack-Data-Serialize.html#safeGet",
          "type": "function"
        },
        "index": {
          "description": "Equivalent of Data.Binary.get for instances of Serialize Takes into account versioning of types",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "safeGet",
          "package": "happstack-data",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:safeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent of Data.Binary.put for instances of Serialize.  \n Takes into account versioning of types.\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "safePut",
          "package": "happstack-data",
          "signature": "a -\u003e Put",
          "source": "src/Happstack-Data-Serialize.html#safePut",
          "type": "function"
        },
        "index": {
          "description": "Equivalent of Data.Binary.put for instances of Serialize Takes into account versioning of types",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "safePut",
          "normalized": "a-\u003ePut",
          "package": "happstack-data",
          "partial": "Put",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:safePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure version of \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e.  Serializes to a ByteString\n\u003c/p\u003e",
          "module": "Happstack.Data.Serialize",
          "name": "serialize",
          "package": "happstack-data",
          "signature": "a -\u003e ByteString",
          "source": "src/Happstack-Data-Serialize.html#serialize",
          "type": "function"
        },
        "index": {
          "description": "Pure version of safePut Serializes to ByteString",
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "serialize",
          "normalized": "a-\u003eByteString",
          "package": "happstack-data",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Serialize",
          "name": "showQualifiedTypeRep",
          "package": "happstack-data",
          "signature": "TypeRep -\u003e String",
          "source": "src/Happstack-Data-Serialize.html#showQualifiedTypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Serialize",
          "module": "Happstack.Data.Serialize",
          "name": "showQualifiedTypeRep",
          "normalized": "TypeRep-\u003eString",
          "package": "happstack-data",
          "partial": "Qualified Type Rep",
          "signature": "TypeRep-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Serialize.html#v:showQualifiedTypeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.SerializeTH",
          "name": "SerializeTH",
          "package": "happstack-data",
          "source": "src/Happstack-Data-SerializeTH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data SerializeTH",
          "module": "Happstack.Data.SerializeTH",
          "name": "SerializeTH",
          "package": "happstack-data",
          "partial": "Serialize TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-SerializeTH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives an instance of Serialize for the provided type\n Should work in most cases if the type is already and instance\n of Version.  \n Ex: \u003ccode\u003e$(deriveSerialize ''Foo)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Data.SerializeTH",
          "name": "deriveSerialize",
          "package": "happstack-data",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Happstack-Data-SerializeTH.html#deriveSerialize",
          "type": "function"
        },
        "index": {
          "description": "Derives an instance of Serialize for the provided type Should work in most cases if the type is already and instance of Version Ex deriveSerialize Foo",
          "hierarchy": "Happstack Data SerializeTH",
          "module": "Happstack.Data.SerializeTH",
          "name": "deriveSerialize",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "Serialize",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-SerializeTH.html#v:deriveSerialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives Serialize for a list of types\n\u003c/p\u003e",
          "module": "Happstack.Data.SerializeTH",
          "name": "deriveSerializeFor",
          "package": "happstack-data",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-SerializeTH.html#deriveSerializeFor",
          "type": "function"
        },
        "index": {
          "description": "Derives Serialize for list of types",
          "hierarchy": "Happstack Data SerializeTH",
          "module": "Happstack.Data.SerializeTH",
          "name": "deriveSerializeFor",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "Serialize For",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-SerializeTH.html#v:deriveSerializeFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Xml",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Xml.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Xml",
          "package": "happstack-data",
          "partial": "Xml",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement recursively represents XML data.  \n    Elem n elems -\u003e XML element with name n and described by elems.  Note that elems contains sub-elements as well as the attributes or literal data of the element.\n    CData d -\u003e Literal string data\n    Attr key val -\u003e Key/Value pair of the element attribute.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "Element",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Xml-Base.html#Element",
          "type": "data"
        },
        "index": {
          "description": "Element recursively represents XML data Elem elems XML element with name and described by elems Note that elems contains sub-elements as well as the attributes or literal data of the element CData Literal string data Attr key val Key Value pair of the element attribute",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Element",
          "package": "happstack-data",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Other",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Xml-Base.html#Other",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Other",
          "package": "happstack-data",
          "partial": "Other",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#t:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRigidity is used to designate the result of a failed Xml parsing.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "Rigidity",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Xml-Base.html#Rigidity",
          "type": "data"
        },
        "index": {
          "description": "Rigidity is used to designate the result of failed Xml parsing",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Rigidity",
          "package": "happstack-data",
          "partial": "Rigidity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#t:Rigidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Xml",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Xml-Base.html#Xml",
          "type": "class"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Xml",
          "package": "happstack-data",
          "partial": "Xml",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#t:Xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "XmlD",
          "package": "happstack-data",
          "source": "src/Happstack-Data-Xml-Base.html#XmlD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "XmlD",
          "package": "happstack-data",
          "partial": "Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#t:XmlD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Attr",
          "package": "happstack-data",
          "signature": "Attr String String",
          "source": "src/Happstack-Data-Xml-Base.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Attr",
          "package": "happstack-data",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "CData",
          "package": "happstack-data",
          "signature": "CData String",
          "source": "src/Happstack-Data-Xml-Base.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "CData",
          "package": "happstack-data",
          "partial": "CData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:CData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Elem",
          "package": "happstack-data",
          "signature": "Elem String [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Elem",
          "normalized": "Elem String[Element]",
          "package": "happstack-data",
          "partial": "Elem",
          "signature": "Elem String[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Flexible",
          "package": "happstack-data",
          "signature": "Rigidity Identity",
          "source": "src/Happstack-Data-Xml-Base.html#Rigidity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Flexible",
          "package": "happstack-data",
          "partial": "Flexible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:Flexible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "NoOther",
          "package": "happstack-data",
          "signature": "NoOther",
          "source": "src/Happstack-Data-Xml-Base.html#Other",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "NoOther",
          "package": "happstack-data",
          "partial": "No Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:NoOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Other",
          "package": "happstack-data",
          "signature": "Other a",
          "source": "src/Happstack-Data-Xml-Base.html#Other",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Other",
          "package": "happstack-data",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "Rigid",
          "package": "happstack-data",
          "signature": "Rigidity Maybe",
          "source": "src/Happstack-Data-Xml-Base.html#Rigidity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "Rigid",
          "package": "happstack-data",
          "partial": "Rigid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:Rigid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "XmlD",
          "package": "happstack-data",
          "signature": "XmlD",
          "source": "src/Happstack-Data-Xml-Base.html#XmlD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "XmlD",
          "package": "happstack-data",
          "partial": "Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:XmlD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaConstrFromElements will return the results of the first constructor\n that parses correctly.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "aConstrFromElements",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Constr] -\u003e [Element] -\u003e Maybe ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#aConstrFromElements",
          "type": "function"
        },
        "index": {
          "description": "aConstrFromElements will return the results of the first constructor that parses correctly",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "aConstrFromElements",
          "normalized": "Rigidity a-\u003e[Constr]-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Constr From Elements",
          "signature": "Rigidity m-\u003e[Constr]-\u003e[Element]-\u003eMaybe([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:aConstrFromElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to parse the given elements to build the particular type\n     given by the constructor argument.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "constrFromElements",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e Constr -\u003e [Element] -\u003e m ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#constrFromElements",
          "type": "function"
        },
        "index": {
          "description": "Attempts to parse the given elements to build the particular type given by the constructor argument",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "constrFromElements",
          "normalized": "Rigidity a-\u003eConstr-\u003e[Element]-\u003ea([Element],b)",
          "package": "happstack-data",
          "partial": "From Elements",
          "signature": "Rigidity m-\u003eConstr-\u003e[Element]-\u003em([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:constrFromElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike constrFromElements but does not allow defaulting in case of\n a parse error.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "constrFromElementsNoRootDefault",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e Constr -\u003e [Element] -\u003e Maybe ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#constrFromElementsNoRootDefault",
          "type": "function"
        },
        "index": {
          "description": "Like constrFromElements but does not allow defaulting in case of parse error",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "constrFromElementsNoRootDefault",
          "normalized": "Rigidity a-\u003eConstr-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "From Elements No Root Default",
          "signature": "Rigidity m-\u003eConstr-\u003e[Element]-\u003eMaybe([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:constrFromElementsNoRootDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "defaultReadXml",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Element] -\u003e Maybe ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#defaultReadXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "defaultReadXml",
          "normalized": "Rigidity a-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Read Xml",
          "signature": "Rigidity m-\u003e[Element]-\u003eMaybe([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:defaultReadXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "defaultReadXml'",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Element] -\u003e Maybe ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#defaultReadXml%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "defaultReadXml'",
          "normalized": "Rigidity a-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Read Xml'",
          "signature": "Rigidity m-\u003e[Element]-\u003eMaybe([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:defaultReadXml-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the argument to an Xml element with the constructor \n   name as the root of the Elem and the additional attributes corresponding \n   to haskellType and haskellTypeVersion added\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "defaultToXml",
          "package": "happstack-data",
          "signature": "t -\u003e [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#defaultToXml",
          "type": "function"
        },
        "index": {
          "description": "Converts the argument to an Xml element with the constructor name as the root of the Elem and the additional attributes corresponding to haskellType and haskellTypeVersion added",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "defaultToXml",
          "normalized": "a-\u003e[Element]",
          "package": "happstack-data",
          "partial": "To Xml",
          "signature": "t-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:defaultToXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around the Xml class method readXml.\n The Rigidity will determine the behavior in the case of a failed parsing:  Rigid will return Nothing and Flexible will return Identity (defaultValue)\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "fromXml",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Element] -\u003e m a",
          "source": "src/Happstack-Data-Xml-Base.html#fromXml",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around the Xml class method readXml The Rigidity will determine the behavior in the case of failed parsing Rigid will return Nothing and Flexible will return Identity defaultValue",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "fromXml",
          "normalized": "Rigidity a-\u003e[Element]-\u003ea b",
          "package": "happstack-data",
          "partial": "Xml",
          "signature": "Rigidity m-\u003e[Element]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:fromXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the value of the given attribute if present, if not present will return Nothing\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "getAttr",
          "package": "happstack-data",
          "signature": "String -\u003e [Element] -\u003e Maybe (String, [Element])",
          "source": "src/Happstack-Data-Xml-Base.html#getAttr",
          "type": "function"
        },
        "index": {
          "description": "Fetch the value of the given attribute if present if not present will return Nothing",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "getAttr",
          "normalized": "String-\u003e[Element]-\u003eMaybe(String,[Element])",
          "package": "happstack-data",
          "partial": "Attr",
          "signature": "String-\u003e[Element]-\u003eMaybe(String,[Element])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:getAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the elements currently in the state\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "getXmls",
          "package": "happstack-data",
          "signature": "ReadM m [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#getXmls",
          "type": "function"
        },
        "index": {
          "description": "Returns the elements currently in the state",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "getXmls",
          "normalized": "ReadM a[Element]",
          "package": "happstack-data",
          "partial": "Xmls",
          "signature": "ReadM m[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:getXmls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsEl a b will convert a to xml and insert it into the\n xml of b if b results in an Elem constructor.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "insEl",
          "package": "happstack-data",
          "signature": "a -\u003e b -\u003e Element",
          "source": "src/Happstack-Data-Xml-Base.html#insEl",
          "type": "function"
        },
        "index": {
          "description": "insEl will convert to xml and insert it into the xml of if results in an Elem constructor",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "insEl",
          "normalized": "a-\u003eb-\u003eElement",
          "package": "happstack-data",
          "partial": "El",
          "signature": "a-\u003eb-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:insEl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches the provided string to the key of an attribute.  Returns False if any other Element constructor is given.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "isTheAttr",
          "package": "happstack-data",
          "signature": "String -\u003e Element -\u003e Bool",
          "source": "src/Happstack-Data-Xml-Base.html#isTheAttr",
          "type": "function"
        },
        "index": {
          "description": "Matches the provided string to the key of an attribute Returns False if any other Element constructor is given",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "isTheAttr",
          "normalized": "String-\u003eElement-\u003eBool",
          "package": "happstack-data",
          "partial": "The Attr",
          "signature": "String-\u003eElement-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:isTheAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces commas in the string with single spaces\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "noCommas",
          "package": "happstack-data",
          "signature": "String -\u003e String",
          "source": "src/Happstack-Data-Xml-Base.html#noCommas",
          "type": "function"
        },
        "index": {
          "description": "Replaces commas in the string with single spaces",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "noCommas",
          "normalized": "String-\u003eString",
          "package": "happstack-data",
          "partial": "Commas",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:noCommas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "normalizeXml",
          "package": "happstack-data",
          "signature": "a -\u003e [Element] -\u003e [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#normalizeXml",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "normalizeXml",
          "normalized": "a-\u003e[Element]-\u003e[Element]",
          "package": "happstack-data",
          "partial": "Xml",
          "signature": "a-\u003e[Element]-\u003e[Element]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:normalizeXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "otherVersion",
          "package": "happstack-data",
          "signature": "a -\u003e Other a",
          "source": "src/Happstack-Data-Xml-Base.html#otherVersion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "otherVersion",
          "normalized": "a-\u003eOther a",
          "package": "happstack-data",
          "partial": "Version",
          "signature": "a-\u003eOther a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:otherVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the state of the xml parsing to the given value\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "putXmls",
          "package": "happstack-data",
          "signature": "[Element] -\u003e ReadM m ()",
          "source": "src/Happstack-Data-Xml-Base.html#putXmls",
          "type": "function"
        },
        "index": {
          "description": "Sets the state of the xml parsing to the given value",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "putXmls",
          "normalized": "[Element]-\u003eReadM a()",
          "package": "happstack-data",
          "partial": "Xmls",
          "signature": "[Element]-\u003eReadM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:putXmls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readElement",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e Element -\u003e Maybe t",
          "source": "src/Happstack-Data-Xml-Base.html#readElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readElement",
          "normalized": "Rigidity a-\u003eElement-\u003eMaybe b",
          "package": "happstack-data",
          "partial": "Element",
          "signature": "Rigidity m-\u003eElement-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to parse the current set of elements.  If it fails the behavior\nis dependent on the Rigidity.  If it is Rigid, then it will return Nothing\nbut if it is Flexible it will return the defaultValue.\nIf the parsing succeeds, it will return the value and store the remaining\nXML elements in the parser state.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "readMXml",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e ReadM m a",
          "source": "src/Happstack-Data-Xml-Base.html#readMXml",
          "type": "function"
        },
        "index": {
          "description": "Attempts to parse the current set of elements If it fails the behavior is dependent on the Rigidity If it is Rigid then it will return Nothing but if it is Flexible it will return the defaultValue If the parsing succeeds it will return the value and store the remaining XML elements in the parser state",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readMXml",
          "normalized": "Rigidity a-\u003eReadM a b",
          "package": "happstack-data",
          "partial": "MXml",
          "signature": "Rigidity m-\u003eReadM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readMXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readMXmlD",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e ReadM m a",
          "source": "src/Happstack-Data-Xml-Base.html#XmlD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readMXmlD",
          "normalized": "Rigidity a-\u003eReadM a b",
          "package": "happstack-data",
          "partial": "MXml",
          "signature": "Rigidity m-\u003eReadM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readMXmlD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to readMXml except that in the case of a failed parsing it will not use defaultValue.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "readMXmlNoRootDefault",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e ReadM Maybe a",
          "source": "src/Happstack-Data-Xml-Base.html#readMXmlNoRootDefault",
          "type": "function"
        },
        "index": {
          "description": "Identical to readMXml except that in the case of failed parsing it will not use defaultValue",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readMXmlNoRootDefault",
          "normalized": "Rigidity a-\u003eReadM Maybe b",
          "package": "happstack-data",
          "partial": "MXml No Root Default",
          "signature": "Rigidity m-\u003eReadM Maybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readMXmlNoRootDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readMXmlNoRootDefaultD",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e ReadM Maybe a",
          "source": "src/Happstack-Data-Xml-Base.html#XmlD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readMXmlNoRootDefaultD",
          "normalized": "Rigidity a-\u003eReadM Maybe b",
          "package": "happstack-data",
          "partial": "MXml No Root Default",
          "signature": "Rigidity m-\u003eReadM Maybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readMXmlNoRootDefaultD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readVersionedElement",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e Element -\u003e Maybe t",
          "source": "src/Happstack-Data-Xml-Base.html#readVersionedElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readVersionedElement",
          "normalized": "Rigidity a-\u003eElement-\u003eMaybe b",
          "package": "happstack-data",
          "partial": "Versioned Element",
          "signature": "Rigidity m-\u003eElement-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readVersionedElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readXml",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Element] -\u003e Maybe ([Element], a)",
          "source": "src/Happstack-Data-Xml-Base.html#readXml",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readXml",
          "normalized": "Rigidity a-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Xml",
          "signature": "Rigidity m-\u003e[Element]-\u003eMaybe([Element],a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readXml'",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Element] -\u003e Maybe ([Element], a)",
          "source": "src/Happstack-Data-Xml-Base.html#readXml%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readXml'",
          "normalized": "Rigidity a-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Xml'",
          "signature": "Rigidity m-\u003e[Element]-\u003eMaybe([Element],a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readXml-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "readXmlWith",
          "package": "happstack-data",
          "signature": "(Rigidity m -\u003e Element -\u003e Maybe t) -\u003e Rigidity m -\u003e [Element] -\u003e Maybe ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#readXmlWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "readXmlWith",
          "normalized": "(Rigidity a-\u003eElement-\u003eMaybe b)-\u003eRigidity a-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Xml With",
          "signature": "(Rigidity m-\u003eElement-\u003eMaybe t)-\u003eRigidity m-\u003e[Element]-\u003eMaybe([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:readXmlWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to toXml from Xml class except that it will remove attributes named haskellType or haskellTypeVersion\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "toPublicXml",
          "package": "happstack-data",
          "signature": "a -\u003e [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#toPublicXml",
          "type": "function"
        },
        "index": {
          "description": "Identical to toXml from Xml class except that it will remove attributes named haskellType or haskellTypeVersion",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "toPublicXml",
          "normalized": "a-\u003e[Element]",
          "package": "happstack-data",
          "partial": "Public Xml",
          "signature": "a-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:toPublicXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "toXml",
          "package": "happstack-data",
          "signature": "a -\u003e [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#toXml",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "toXml",
          "normalized": "a-\u003e[Element]",
          "package": "happstack-data",
          "partial": "Xml",
          "signature": "a-\u003e[Element]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:toXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "toXmlD",
          "package": "happstack-data",
          "signature": "a -\u003e [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#XmlD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "toXmlD",
          "normalized": "a-\u003e[Element]",
          "package": "happstack-data",
          "partial": "Xml",
          "signature": "a-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:toXmlD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to parse the set of elements and return the first constructor it\n can successfully parse of the inferred type.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "transparentReadXml",
          "package": "happstack-data",
          "signature": "Rigidity m -\u003e [Element] -\u003e Maybe ([Element], t)",
          "source": "src/Happstack-Data-Xml-Base.html#transparentReadXml",
          "type": "function"
        },
        "index": {
          "description": "Attempts to parse the set of elements and return the first constructor it can successfully parse of the inferred type",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "transparentReadXml",
          "normalized": "Rigidity a-\u003e[Element]-\u003eMaybe([Element],b)",
          "package": "happstack-data",
          "partial": "Read Xml",
          "signature": "Rigidity m-\u003e[Element]-\u003eMaybe([Element],t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:transparentReadXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically traverses an instance of Xml and converts it into a list of elements \n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "transparentToXml",
          "package": "happstack-data",
          "signature": "t -\u003e [Element]",
          "source": "src/Happstack-Data-Xml-Base.html#transparentToXml",
          "type": "function"
        },
        "index": {
          "description": "Generically traverses an instance of Xml and converts it into list of elements",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "transparentToXml",
          "normalized": "a-\u003e[Element]",
          "package": "happstack-data",
          "partial": "To Xml",
          "signature": "t-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:transparentToXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Xml instance using transparentToXml and transparentReadXml\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "transparentXml",
          "package": "happstack-data",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Happstack-Data-Xml-Base.html#transparentXml",
          "type": "function"
        },
        "index": {
          "description": "Create an Xml instance using transparentToXml and transparentReadXml",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "transparentXml",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "Xml",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:transparentXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "typ",
          "package": "happstack-data",
          "signature": "a -\u003e String",
          "source": "src/Happstack-Data-Xml-Base.html#typ",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "typ",
          "normalized": "a-\u003eString",
          "package": "happstack-data",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:typ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute used for recording the actual Haskell type in the xml serialization \n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "typeAttr",
          "package": "happstack-data",
          "signature": "String",
          "source": "src/Happstack-Data-Xml-Base.html#typeAttr",
          "type": "function"
        },
        "index": {
          "description": "Attribute used for recording the actual Haskell type in the xml serialization",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "typeAttr",
          "package": "happstack-data",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:typeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrows an error when called\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "typeNotValue",
          "package": "happstack-data",
          "signature": "a -\u003e a",
          "source": "src/Happstack-Data-Xml-Base.html#typeNotValue",
          "type": "function"
        },
        "index": {
          "description": "Throws an error when called",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "typeNotValue",
          "normalized": "a-\u003ea",
          "package": "happstack-data",
          "partial": "Not Value",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:typeNotValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "version",
          "package": "happstack-data",
          "signature": "a -\u003e Maybe String",
          "source": "src/Happstack-Data-Xml-Base.html#version",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "version",
          "normalized": "a-\u003eMaybe String",
          "package": "happstack-data",
          "signature": "a-\u003eMaybe String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute used for Xml class version information\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "versionAttr",
          "package": "happstack-data",
          "signature": "String",
          "source": "src/Happstack-Data-Xml-Base.html#versionAttr",
          "type": "function"
        },
        "index": {
          "description": "Attribute used for Xml class version information",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "versionAttr",
          "package": "happstack-data",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:versionAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.Xml",
          "name": "xmlAttr",
          "package": "happstack-data",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Happstack-Data-Xml-Base.html#xmlAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "xmlAttr",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "Attr",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:xmlAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an instance similar to xmlShowCData except for lists of the\nprovided type \n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "xmlCDataList",
          "package": "happstack-data",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Happstack-Data-Xml-Base.html#xmlCDataList",
          "type": "function"
        },
        "index": {
          "description": "Creates an instance similar to xmlShowCData except for lists of the provided type",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "xmlCDataList",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "CData List",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:xmlCDataList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exmlCDataLists lifted to act on lists\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "xmlCDataLists",
          "package": "happstack-data",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-Xml-Base.html#xmlCDataLists",
          "type": "function"
        },
        "index": {
          "description": "xmlCDataLists lifted to act on lists",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "xmlCDataLists",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "CData Lists",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:xmlCDataLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed as a type witness for usage with syb-with-class Data class.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "xmlProxy",
          "package": "happstack-data",
          "signature": "Proxy XmlD",
          "source": "src/Happstack-Data-Xml-Base.html#xmlProxy",
          "type": "function"
        },
        "index": {
          "description": "Used as type witness for usage with syb-with-class Data class",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "xmlProxy",
          "package": "happstack-data",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:xmlProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eautomatically creates an Xml definition for a type that is an instance\nof Show and Read.  This will result in an instance that converts the type to and from CData.\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "xmlShowCData",
          "package": "happstack-data",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Happstack-Data-Xml-Base.html#xmlShowCData",
          "type": "function"
        },
        "index": {
          "description": "automatically creates an Xml definition for type that is an instance of Show and Read This will result in an instance that converts the type to and from CData",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "xmlShowCData",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "Show CData",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:xmlShowCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exmlShowCData lifted to act on lists\n\u003c/p\u003e",
          "module": "Happstack.Data.Xml",
          "name": "xmlShowCDatas",
          "package": "happstack-data",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-Xml-Base.html#xmlShowCDatas",
          "type": "function"
        },
        "index": {
          "description": "xmlShowCData lifted to act on lists",
          "hierarchy": "Happstack Data Xml",
          "module": "Happstack.Data.Xml",
          "name": "xmlShowCDatas",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "happstack-data",
          "partial": "Show CDatas",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data-Xml.html#v:xmlShowCDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data",
          "name": "Data",
          "package": "happstack-data",
          "source": "src/Happstack-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Data",
          "module": "Happstack.Data",
          "name": "Data",
          "package": "happstack-data",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-data/docs/Happstack-Data.html#"
      }
    }
  ]
]