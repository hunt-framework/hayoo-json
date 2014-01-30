[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-lens-template/docs/Data-Lens-Template.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an automatic Template Haskell\nroutine to scour data type definitions and generate\naccessor objects for them automatically.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Lens.Template",
        "fct-package": "data-lens-template",
        "fct-signature": "module",
        "fct-source": "src/Data-Lens-Template.html",
        "fct-type": "module",
        "title": "Template"
      },
      "index": {
        "description": "This module provides an automatic Template Haskell routine to scour data type definitions and generate accessor objects for them automatically",
        "hierarchy": "Data Lens Template",
        "module": "Data.Lens.Template",
        "name": "Template",
        "normalized": "",
        "package": "data-lens-template",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-lens-template/docs/Data-Lens-Template.html#v:decMakeLens",
      "description": {
        "fct-module": "Data.Lens.Template",
        "fct-package": "data-lens-template",
        "fct-signature": "Name -\u003e Dec -\u003e (String -\u003e Maybe String) -\u003e Q [Dec]",
        "fct-source": "src/Data-Lens-Template.html#decMakeLens",
        "fct-type": "function",
        "title": "decMakeLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Lens Template",
        "module": "Data.Lens.Template",
        "name": "decMakeLens",
        "normalized": "Name-\u003eDec-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]",
        "package": "data-lens-template",
        "partial": "Make Lens",
        "signature": "Name-\u003eDec-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-lens-template/docs/Data-Lens-Template.html#v:makeLens",
      "description": {
        "fct-descr": "\u003cpre\u003e makeLens a = makeLenses [a]\n\u003c/pre\u003e\u003cpre\u003e $( makeLens ''TypeName )\n\u003c/pre\u003e",
        "fct-module": "Data.Lens.Template",
        "fct-package": "data-lens-template",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Lens-Template.html#makeLens",
        "fct-type": "function",
        "title": "makeLens"
      },
      "index": {
        "description": "makeLens makeLenses makeLens TypeName",
        "hierarchy": "Data Lens Template",
        "module": "Data.Lens.Template",
        "name": "makeLens",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "data-lens-template",
        "partial": "Lens",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-lens-template/docs/Data-Lens-Template.html#v:makeLenses",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emakeLenses n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the name of a data type\n declared with \u003ccode\u003edata\u003c/code\u003e looks through all the declared fields\n of the data type, and for each field beginning with an underscore\n generates an accessor of the same name without the underscore.\n\u003c/p\u003e\u003cp\u003eIt is \u003ca\u003enameMakeLens\u003c/a\u003e n f where \u003ccode\u003ef\u003c/code\u003e satisfies\n\u003c/p\u003e\u003cpre\u003e f ('_' : s) = Just s\n f x = Nothing -- otherwise\n\u003c/pre\u003e\u003cp\u003eFor example, given the data type:\n\u003c/p\u003e\u003cpre\u003e data Score = Score { \n   _p1Score :: Int\n , _p2Score :: Int\n , rounds :: Int\n }\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003emakeLenses\u003c/code\u003e will generate the following objects:\n\u003c/p\u003e\u003cpre\u003e p1Score :: Lens Score Int\n p1Score = lens _p1Score (\\x s -\u003e s { _p1Score = x })\n p2Score :: Lens Score Int\n p2Score = lens _p2Score (\\x s -\u003e s { _p2Score = x })\n\u003c/pre\u003e\u003cp\u003eIt is used with Template Haskell syntax like:\n\u003c/p\u003e\u003cpre\u003e $( makeLenses [''TypeName] )\n\u003c/pre\u003e\u003cp\u003eAnd will generate accessors when TypeName was declared\n using \u003ccode\u003edata\u003c/code\u003e or \u003ccode\u003enewtype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lens.Template",
        "fct-package": "data-lens-template",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-Lens-Template.html#makeLenses",
        "fct-type": "function",
        "title": "makeLenses"
      },
      "index": {
        "description": "makeLenses where is the name of data type declared with data looks through all the declared fields of the data type and for each field beginning with an underscore generates an accessor of the same name without the underscore It is nameMakeLens where satisfies Just Nothing otherwise For example given the data type data Score Score p1Score Int p2Score Int rounds Int makeLenses will generate the following objects p1Score Lens Score Int p1Score lens p1Score p1Score p2Score Lens Score Int p2Score lens p2Score p2Score It is used with Template Haskell syntax like makeLenses TypeName And will generate accessors when TypeName was declared using data or newtype",
        "hierarchy": "Data Lens Template",
        "module": "Data.Lens.Template",
        "name": "makeLenses",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "data-lens-template",
        "partial": "Lenses",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-lens-template/docs/Data-Lens-Template.html#v:nameMakeLens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enameMakeLens n f\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the name of a data type\n declared with \u003ccode\u003edata\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a function from names of fields\n in that data type to the name of the corresponding accessor. If\n \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003eNothing\u003c/code\u003e, then no accessor is generated for that\n field.\n\u003c/p\u003e",
        "fct-module": "Data.Lens.Template",
        "fct-package": "data-lens-template",
        "fct-signature": "Name -\u003e (String -\u003e Maybe String) -\u003e Q [Dec]",
        "fct-source": "src/Data-Lens-Template.html#nameMakeLens",
        "fct-type": "function",
        "title": "nameMakeLens"
      },
      "index": {
        "description": "nameMakeLens where is the name of data type declared with data and is function from names of fields in that data type to the name of the corresponding accessor If returns Nothing then no accessor is generated for that field",
        "hierarchy": "Data Lens Template",
        "module": "Data.Lens.Template",
        "name": "nameMakeLens",
        "normalized": "Name-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]",
        "package": "data-lens-template",
        "partial": "Make Lens",
        "signature": "Name-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]"
      }
    }
  }
]