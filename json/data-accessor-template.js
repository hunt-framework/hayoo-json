[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-template/docs/Data-Accessor-Template.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an automatic Template Haskell\nroutine to scour data type definitions and generate\naccessor objects for them automatically.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Template",
        "fct-package": "data-accessor-template",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Template.html",
        "fct-type": "module",
        "title": "Template"
      },
      "index": {
        "description": "This module provides an automatic Template Haskell routine to scour data type definitions and generate accessor objects for them automatically",
        "hierarchy": "Data Accessor Template",
        "module": "Data.Accessor.Template",
        "name": "Template",
        "normalized": "",
        "package": "data-accessor-template",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-template/docs/Data-Accessor-Template.html#v:deriveAccessors",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ederiveAccessors n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the name of a data type\n declared with \u003ccode\u003edata\u003c/code\u003e looks through all the declared fields\n of the data type, and for each field ending in an underscore\n generates an accessor of the same name without the underscore.\n\u003c/p\u003e\u003cp\u003eIt is \u003ca\u003enameDeriveAccessors\u003c/a\u003e n f where \u003ccode\u003ef\u003c/code\u003e satisfies\n\u003c/p\u003e\u003cpre\u003e f (s ++ \"_\") = Just s\n f x = Nothing -- otherwise\n\u003c/pre\u003e\u003cp\u003eFor example, given the data type:\n\u003c/p\u003e\u003cpre\u003e data Score = Score { p1Score_ :: Int\n , p2Score_ :: Int\n , rounds :: Int\n }\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ederiveAccessors\u003c/code\u003e will generate the following objects:\n\u003c/p\u003e\u003cpre\u003e p1Score :: Accessor Score Int\n p1Score = Accessor p1Score_ (\\x s -\u003e s { p1Score_ = x })\n p2Score :: Accessor Score Int\n p2Score = Accessor p2Score_ (\\x s -\u003e s { p2Score_ = x })\n\u003c/pre\u003e\u003cp\u003eIt is used with Template Haskell syntax like:\n\u003c/p\u003e\u003cpre\u003e $( deriveAccessors ''TypeName )\n\u003c/pre\u003e\u003cp\u003eAnd will generate accessors when TypeName was declared\n using \u003ccode\u003edata\u003c/code\u003e or \u003ccode\u003enewtype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Template",
        "fct-package": "data-accessor-template",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Accessor-Template.html#deriveAccessors",
        "fct-type": "function",
        "title": "deriveAccessors"
      },
      "index": {
        "description": "deriveAccessors where is the name of data type declared with data looks through all the declared fields of the data type and for each field ending in an underscore generates an accessor of the same name without the underscore It is nameDeriveAccessors where satisfies Just Nothing otherwise For example given the data type data Score Score p1Score Int p2Score Int rounds Int deriveAccessors will generate the following objects p1Score Accessor Score Int p1Score Accessor p1Score p1Score p2Score Accessor Score Int p2Score Accessor p2Score p2Score It is used with Template Haskell syntax like deriveAccessors TypeName And will generate accessors when TypeName was declared using data or newtype",
        "hierarchy": "Data Accessor Template",
        "module": "Data.Accessor.Template",
        "name": "deriveAccessors",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "data-accessor-template",
        "partial": "Accessors",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-template/docs/Data-Accessor-Template.html#v:nameDeriveAccessors",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enameDeriveAccessors n f\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the name of a data type\n declared with \u003ccode\u003edata\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a function from names of fields\n in that data type to the name of the corresponding accessor. If\n \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003eNothing\u003c/code\u003e, then no accessor is generated for that\n field.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Template",
        "fct-package": "data-accessor-template",
        "fct-signature": "Name -\u003e (String -\u003e Maybe String) -\u003e Q [Dec]",
        "fct-source": "src/Data-Accessor-Template.html#nameDeriveAccessors",
        "fct-type": "function",
        "title": "nameDeriveAccessors"
      },
      "index": {
        "description": "nameDeriveAccessors where is the name of data type declared with data and is function from names of fields in that data type to the name of the corresponding accessor If returns Nothing then no accessor is generated for that field",
        "hierarchy": "Data Accessor Template",
        "module": "Data.Accessor.Template",
        "name": "nameDeriveAccessors",
        "normalized": "Name-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]",
        "package": "data-accessor-template",
        "partial": "Derive Accessors",
        "signature": "Name-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]"
      }
    }
  }
]