[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to extract a field of a particular type from a\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e data structure, when the data structure contains exactly\n one field of the given type.  Only works for types with exactly one\n constructor (not variant types).\n\u003c/p\u003e\u003cp\u003eAn example of usage:\n\u003c/p\u003e\u003cpre\u003e data MyType = MyType { myString :: String             -- position 0\n                      , myInt :: Int                   -- position 1\n                      , myBool :: Bool                 -- position 2\n                      , myMaybeChar :: Maybe Char      -- position 3\n                      , myMaybeString :: Maybe String  -- position 4\n                      } deriving (Show, Generic)\n \n myType :: MyType\n myType = MyType \"my type\" 21 True Nothing (Just \"maybe string\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldVal ExtractId myType :: String\n\u003c/code\u003e\u003c/strong\u003e\"my type\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldVal ExtractId myType :: Int\n\u003c/code\u003e\u003c/strong\u003e21\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldVal ExtractMaybe myType :: Maybe Char\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldVal ExtractMaybe myType :: Maybe Int\n\u003c/code\u003e\u003c/strong\u003eJust 21\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldVal ExtractMaybe myType :: Maybe String  -- ambiguous\n\u003c/code\u003e\u003c/strong\u003e\u003cinteractive\u003e:5:1: Couldn't match type `THasMany' with `THasOne'\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldPos' ExtractId (undefined :: MyType) (undefined :: Bool)\n\u003c/code\u003e\u003c/strong\u003e2\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldPos' ExtractMaybe (undefined :: MyType) (undefined :: Maybe Bool)\n\u003c/code\u003e\u003c/strong\u003e2\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetFieldPos' ExtractMaybe myType ()  -- No field has type ()\n\u003c/code\u003e\u003c/strong\u003e\u003cinteractive\u003e:8:1: Couldn't match type `THasNone' with `THasOne'\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Data-GetField.html",
        "fct-type": "module",
        "title": "GetField"
      },
      "index": {
        "description": "Functions to extract field of particular type from Generic data structure when the data structure contains exactly one field of the given type Only works for types with exactly one constructor not variant types An example of usage data MyType MyType myString String position myInt Int position myBool Bool position myMaybeChar Maybe Char position myMaybeString Maybe String position deriving Show Generic myType MyType myType MyType my type True Nothing Just maybe string getFieldVal ExtractId myType String my type getFieldVal ExtractId myType Int getFieldVal ExtractMaybe myType Maybe Char Nothing getFieldVal ExtractMaybe myType Maybe Int Just getFieldVal ExtractMaybe myType Maybe String ambiguous interactive Couldn match type THasMany with THasOne getFieldPos ExtractId undefined MyType undefined Bool getFieldPos ExtractMaybe undefined MyType undefined Maybe Bool getFieldPos ExtractMaybe myType No field has type interactive Couldn match type THasNone with THasOne",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "GetField",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Get Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:ExtractId",
      "description": {
        "fct-descr": "\u003cp\u003eAn extractor that matches an exact field type.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Data-GetField.html#ExtractId",
        "fct-type": "data",
        "title": "ExtractId"
      },
      "index": {
        "description": "An extractor that matches an exact field type",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "ExtractId",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Extract Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:ExtractMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eAn extractor that matches either type \u003ccode\u003er\u003c/code\u003e or type \u003ccode\u003eMaybe r\u003c/code\u003e, and,\n in the former case, wraps \u003ccode\u003eJust\u003c/code\u003e around the value so as always to\n return type \u003ccode\u003eMaybe r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Data-GetField.html#ExtractMaybe",
        "fct-type": "data",
        "title": "ExtractMaybe"
      },
      "index": {
        "description": "An extractor that matches either type or type Maybe and in the former case wraps Just around the value so as always to return type Maybe",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "ExtractMaybe",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Extract Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:Extractor",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types used as tag arguments to \u003ccode\u003e\u003ca\u003egGetFieldVal\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003egGetFieldPos\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003ef\u003c/code\u003e should be a new unit type of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e,\n used to designate the type of extraction you want.  Then instances\n should be defined to transform each type \u003ccode\u003ea\u003c/code\u003e you want to extract to\n some type \u003ccode\u003er\u003c/code\u003e, with \u003ccode\u003eg\u003c/code\u003e set to \u003ccode\u003e\u003ca\u003eTHasOne\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e\u003ca\u003eExtractMaybe\u003c/a\u003e\u003c/code\u003e is a type to convert types \u003ccode\u003ea\u003c/code\u003e and\n \u003ccode\u003eMaybe a\u003c/code\u003e both to type \u003ccode\u003eMaybe a\u003c/code\u003e (i.e., type argument \u003ccode\u003er\u003c/code\u003e is \u003ccode\u003eMaybe\n a\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e data ExtractMaybe a = ExtractMaybe\n instance Extractor ExtractMaybe a (Maybe a) THasOne where\n   extract _ = THasOne . Just\n instance Extractor ExtractMaybe (Maybe a) (Maybe a) THasOne where\n   extract _ = THasOne\n\u003c/pre\u003e\u003cp\u003eNote that there is already a default general instance returning\n \u003ccode\u003e\u003ca\u003eTHasNone\u003c/a\u003e\u003c/code\u003e.  Hence, you do not need to define one.  Otherwise, you\n would have to define an overlapping instance such as:\n\u003c/p\u003e\u003cpre\u003e instance Extractor ExtractMaybe a b THasZero where  -- Incorrect\n   extract _ = THasNone\n\u003c/pre\u003e\u003cp\u003e(Except the above wouldn't quite work anyway given the rules for\n overlapping instances.)  So just assume that any instance you don't\n explicitly define for your \u003ccode\u003e\u003ca\u003eExtractor\u003c/a\u003e\u003c/code\u003e will automatically fall back\n to \u003ccode\u003e\u003ca\u003eTHasNone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Data-GetField.html#Extractor",
        "fct-type": "class",
        "title": "Extractor"
      },
      "index": {
        "description": "Class of types used as tag arguments to gGetFieldVal and gGetFieldPos should be new unit type of kind used to designate the type of extraction you want Then instances should be defined to transform each type you want to extract to some type with set to THasOne For example ExtractMaybe is type to convert types and Maybe both to type Maybe i.e type argument is Maybe data ExtractMaybe ExtractMaybe instance Extractor ExtractMaybe Maybe THasOne where extract THasOne Just instance Extractor ExtractMaybe Maybe Maybe THasOne where extract THasOne Note that there is already default general instance returning THasNone Hence you do not need to define one Otherwise you would have to define an overlapping instance such as instance Extractor ExtractMaybe THasZero where Incorrect extract THasNone Except the above wouldn quite work anyway given the rules for overlapping instances So just assume that any instance you don explicitly define for your Extractor will automatically fall back to THasNone",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "Extractor",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Extractor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:GGetField",
      "description": {
        "fct-descr": "\u003cp\u003eGenerlized extraction of a field from a \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e data structure.\n Argument \u003ccode\u003erep\u003c/code\u003e should generally be the type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e for some data\n type \u003ccode\u003et\u003c/code\u003e whose fields you want to extract.  \u003ccode\u003er\u003c/code\u003e is the result type\n you want back from the extraction.  \u003ccode\u003ef\u003c/code\u003e should be defined such that\n there is an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExtractor\u003c/a\u003e\u003c/code\u003e f a r THasOne\u003c/code\u003e for each type\n \u003ccode\u003ea\u003c/code\u003e you want to convert to \u003ccode\u003er\u003c/code\u003e and extract.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Data-GetField.html#GGetField",
        "fct-type": "class",
        "title": "GGetField"
      },
      "index": {
        "description": "Generlized extraction of field from Generic data structure Argument rep should generally be the type Rep for some data type whose fields you want to extract is the result type you want back from the extraction should be defined such that there is an instance of Extractor THasOne for each type you want to convert to and extract",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "GGetField",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GGet Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:GetField",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Data-GetField.html#GetField",
        "fct-type": "class",
        "title": "GetField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "GetField",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Get Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:THasMany",
      "description": {
        "fct-descr": "\u003cp\u003eMore than one matching field has been found.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Data-GetField.html#THasMany",
        "fct-type": "newtype",
        "title": "THasMany"
      },
      "index": {
        "description": "More than one matching field has been found",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "THasMany",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:THasNone",
      "description": {
        "fct-descr": "\u003cp\u003eZero matching fields have been found.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Data-GetField.html#THasNone",
        "fct-type": "data",
        "title": "THasNone"
      },
      "index": {
        "description": "Zero matching fields have been found",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "THasNone",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#t:THasOne",
      "description": {
        "fct-descr": "\u003cp\u003eExactly one matching field has been found.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Data-GetField.html#THasOne",
        "fct-type": "newtype",
        "title": "THasOne"
      },
      "index": {
        "description": "Exactly one matching field has been found",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "THasOne",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:ExtractId",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "ExtractId",
        "fct-source": "src/Data-GetField.html#ExtractId",
        "fct-type": "function",
        "title": "ExtractId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "ExtractId",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Extract Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:ExtractMaybe",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "ExtractMaybe",
        "fct-source": "src/Data-GetField.html#ExtractMaybe",
        "fct-type": "function",
        "title": "ExtractMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "ExtractMaybe",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Extract Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:THasMany",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "THasMany",
        "fct-source": "src/Data-GetField.html#THasMany",
        "fct-type": "function",
        "title": "THasMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "THasMany",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:THasNone",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "THasNone",
        "fct-source": "src/Data-GetField.html#THasNone",
        "fct-type": "function",
        "title": "THasNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "THasNone",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:THasOne",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "THasOne",
        "fct-source": "src/Data-GetField.html#THasOne",
        "fct-type": "function",
        "title": "THasOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "THasOne",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:extract",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f r -\u003e a -\u003e g r",
        "fct-source": "src/Data-GetField.html#extract",
        "fct-type": "method",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "extract",
        "normalized": "a b-\u003ec-\u003ed b",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "f r-\u003ea-\u003eg r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:extractCount",
      "description": {
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f r -\u003e a -\u003e (Int, [Int])",
        "fct-source": "src/Data-GetField.html#extractCount",
        "fct-type": "method",
        "title": "extractCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "extractCount",
        "normalized": "a b-\u003ec-\u003e(Int,[Int])",
        "package": "postgresql-orm",
        "partial": "Count",
        "signature": "f r-\u003ea-\u003e(Int,[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:fromTHasMany",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "[a]",
        "fct-source": "src/Data-GetField.html#THasMany",
        "fct-type": "function",
        "title": "fromTHasMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "fromTHasMany",
        "normalized": "[a]",
        "package": "postgresql-orm",
        "partial": "THas Many",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:fromTHasOne",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "a",
        "fct-source": "src/Data-GetField.html#THasOne",
        "fct-type": "function",
        "title": "fromTHasOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "fromTHasOne",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "THas One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:gGetFieldPos",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e(total, positions)\u003c/code\u003e where \u003ccode\u003etotal\u003c/code\u003e is the total number\n of fields (matching or not) in the structure and \u003ccode\u003epositions\u003c/code\u003e is a\n list of zero-based field numbers of the fields matching target\n type \u003ccode\u003ef r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f r -\u003e rep p -\u003e (Int, [Int])",
        "fct-source": "src/Data-GetField.html#gGetFieldPos",
        "fct-type": "method",
        "title": "gGetFieldPos"
      },
      "index": {
        "description": "Returns total positions where total is the total number of fields matching or not in the structure and positions is list of zero-based field numbers of the fields matching target type",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "gGetFieldPos",
        "normalized": "a b-\u003ec d-\u003e(Int,[Int])",
        "package": "postgresql-orm",
        "partial": "Get Field Pos",
        "signature": "f r-\u003erep p-\u003e(Int,[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:gGetFieldVal",
      "description": {
        "fct-descr": "\u003cp\u003eReturns zero, one, or multiple values of type \u003ccode\u003ef\u003c/code\u003e wrapped in\n \u003ccode\u003e\u003ca\u003eTHasOne\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTHasNone\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eTHasMany\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f r -\u003e rep p -\u003e g r",
        "fct-source": "src/Data-GetField.html#gGetFieldVal",
        "fct-type": "method",
        "title": "gGetFieldVal"
      },
      "index": {
        "description": "Returns zero one or multiple values of type wrapped in THasOne THasNone or THasMany respectively",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "gGetFieldVal",
        "normalized": "a b-\u003ec d-\u003ee b",
        "package": "postgresql-orm",
        "partial": "Get Field Val",
        "signature": "f r-\u003erep p-\u003eg r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:getFieldPos",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the 0-based position of the single field matching\n \u003ccode\u003e\u003ca\u003eExtractor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef r\u003c/code\u003e within \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e data structure \u003ccode\u003ea\u003c/code\u003e.\n Non-strict in both arguments.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f r -\u003e a -\u003e Int",
        "fct-source": "src/Data-GetField.html#getFieldPos",
        "fct-type": "method",
        "title": "getFieldPos"
      },
      "index": {
        "description": "Extract the based position of the single field matching Extractor within Generic data structure Non-strict in both arguments",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "getFieldPos",
        "normalized": "a b-\u003ec-\u003eInt",
        "package": "postgresql-orm",
        "partial": "Field Pos",
        "signature": "f r-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:getFieldPos-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003egetFieldPos\u003c/a\u003e\u003c/code\u003e in which the type of the field is\n supplied as a non-strict argument.  This may be easier than\n typecasting the extractor argument.  For example, to extract the\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e from a structure with a single \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e field:\n\u003c/p\u003e\u003cpre\u003e\n       getFieldPos' \u003ccode\u003e\u003ca\u003eExtractId\u003c/a\u003e\u003c/code\u003e myStruct (\u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f () -\u003e a -\u003e r -\u003e Int",
        "fct-source": "src/Data-GetField.html#getFieldPos%27",
        "fct-type": "function",
        "title": "getFieldPos'"
      },
      "index": {
        "description": "variant of getFieldPos in which the type of the field is supplied as non-strict argument This may be easier than typecasting the extractor argument For example to extract the Int from structure with single Int field getFieldPos ExtractId myStruct undefined Int",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "getFieldPos'",
        "normalized": "a()-\u003eb-\u003ec-\u003eInt",
        "package": "postgresql-orm",
        "partial": "Field Pos'",
        "signature": "f()-\u003ea-\u003er-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-GetField.html#v:getFieldVal",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the single field matching \u003ccode\u003e\u003ca\u003eExtractor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef r\u003c/code\u003e from a\n \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e data structure \u003ccode\u003ea\u003c/code\u003e with exactly one constructor.\n\u003c/p\u003e",
        "fct-module": "Data.GetField",
        "fct-package": "postgresql-orm",
        "fct-signature": "f r -\u003e a -\u003e r",
        "fct-source": "src/Data-GetField.html#getFieldVal",
        "fct-type": "method",
        "title": "getFieldVal"
      },
      "index": {
        "description": "Extract the single field matching Extractor from Generic data structure with exactly one constructor",
        "hierarchy": "Data GetField",
        "module": "Data.GetField",
        "name": "getFieldVal",
        "normalized": "a b-\u003ec-\u003eb",
        "package": "postgresql-orm",
        "partial": "Field Val",
        "signature": "f r-\u003ea-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-RequireSelector.html#",
      "description": {
        "fct-module": "Data.RequireSelector",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Data-RequireSelector.html",
        "fct-type": "module",
        "title": "RequireSelector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RequireSelector",
        "module": "Data.RequireSelector",
        "name": "RequireSelector",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Require Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Data-RequireSelector.html#t:RequireSelector",
      "description": {
        "fct-descr": "\u003cp\u003eThe point of this class is to ensure that you are using data\n types defined with record selectors (i.e., \u003ccode\u003edata Foo = Foo { unFoo\n :: Int }\u003c/code\u003e as opposed to \u003ccode\u003edata Foo = Foo Int\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUnfortunately, \u003ca\u003eGHC.Generics\u003c/a\u003e makes the \u003ccode\u003e\u003ca\u003eNoSelector\u003c/a\u003e\u003c/code\u003e type a member\n of the \u003ccode\u003e\u003ca\u003eSelector\u003c/a\u003e\u003c/code\u003e class.  Hence, if you want to ensure a type \u003ccode\u003ea\u003c/code\u003e\n is \u003cem\u003enot\u003c/em\u003e \u003ccode\u003e\u003ca\u003eNoSelector\u003c/a\u003e\u003c/code\u003e, use the context \u003ccode\u003e(RequireSelector a) =\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you see a compilation error involving \u003ccode\u003eRequireSelector\u003c/code\u003e or\n \u003ccode\u003eIntentionallyCauseError\u003c/code\u003e, it means you failed to define one of\n your datatypes using record selector syntax.\n\u003c/p\u003e",
        "fct-module": "Data.RequireSelector",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Data-RequireSelector.html#RequireSelector",
        "fct-type": "class",
        "title": "RequireSelector"
      },
      "index": {
        "description": "The point of this class is to ensure that you are using data types defined with record selectors i.e data Foo Foo unFoo Int as opposed to data Foo Foo Int Unfortunately GHC.Generics makes the NoSelector type member of the Selector class Hence if you want to ensure type is not NoSelector use the context RequireSelector If you see compilation error involving RequireSelector or IntentionallyCauseError it means you failed to define one of your datatypes using record selector syntax",
        "hierarchy": "Data RequireSelector",
        "module": "Data.RequireSelector",
        "name": "RequireSelector",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Require Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility function for describing a table in the database.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Describe.html",
        "fct-type": "module",
        "title": "Describe"
      },
      "index": {
        "description": "Utility function for describing table in the database",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "Describe",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Describe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#t:ColumnInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "data",
        "title": "ColumnInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "ColumnInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Column Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:ColumnInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "ColumnInfo",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "ColumnInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "ColumnInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Column Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the column\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colName"
      },
      "index": {
        "description": "Name of the column",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colName",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colNotNull",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the database cannot contain null.  (This\n constraint should always be accurate.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Bool",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colNotNull"
      },
      "index": {
        "description": "If True the database cannot contain null This constraint should always be accurate",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colNotNull",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Not Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colNum",
      "description": {
        "fct-descr": "\u003cp\u003eInternal column number used by PostgreSQL.  Generally these\n will be consecutive starting from 1, but this may not be the\n case if you have altered a table to delete columns.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Int16",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colNum"
      },
      "index": {
        "description": "Internal column number used by PostgreSQL Generally these will be consecutive starting from but this may not be the case if you have altered table to delete columns",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colNum",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colPrimary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this column (and only this column) constitutes the\n primary key of the table.  Always \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the primary key\n comprises multiple columns (even if this is one of those\n columns).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Bool",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colPrimary"
      },
      "index": {
        "description": "True if this column and only this column constitutes the primary key of the table Always False if the primary key comprises multiple columns even if this is one of those columns",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colPrimary",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Primary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colReferences",
      "description": {
        "fct-descr": "\u003cp\u003eIf this there is a foreign key constraint on this column (and\n the constraint does not span multiple columns), report the\n table referenced by this column.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colReferences"
      },
      "index": {
        "description": "If this there is foreign key constraint on this column and the constraint does not span multiple columns report the table referenced by this column",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colReferences",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "References",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colType",
      "description": {
        "fct-descr": "\u003cp\u003eType of the column\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "!TypeInfo",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colType"
      },
      "index": {
        "description": "Type of the column",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colType",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:colUnique",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if there is a uniqueness constraint on this column.\n Not \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this column is part of a uniqueness constraint\n involving multiple columns.  (Such multi-column uniqueness\n constraints are not reported by this interface.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Bool",
        "fct-source": "src/Database-PostgreSQL-Describe.html#ColumnInfo",
        "fct-type": "function",
        "title": "colUnique"
      },
      "index": {
        "description": "True if there is uniqueness constraint on this column Not True if this column is part of uniqueness constraint involving multiple columns Such multi-column uniqueness constraints are not reported by this interface",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "colUnique",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Describe.html#v:describeTable",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of \u003ccode\u003e\u003ca\u003eColumnInfo\u003c/a\u003e\u003c/code\u003e structures for a particular table.\n Not all information about a table is returned.  In particular,\n constraints that span columns are ignored.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Describe",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO [ColumnInfo]",
        "fct-source": "src/Database-PostgreSQL-Describe.html#describeTable",
        "fct-type": "function",
        "title": "describeTable"
      },
      "index": {
        "description": "Returns list of ColumnInfo structures for particular table Not all information about table is returned In particular constraints that span columns are ignored",
        "hierarchy": "Database PostgreSQL Describe",
        "module": "Database.PostgreSQL.Describe",
        "name": "describeTable",
        "normalized": "Connection-\u003eByteString-\u003eIO[ColumnInfo]",
        "package": "postgresql-orm",
        "partial": "Table",
        "signature": "Connection-\u003eByteString-\u003eIO[ColumnInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for initializing self-contained local postgreSQL\n database clusters (useful in development more than production).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Devel.html",
        "fct-type": "module",
        "title": "Devel"
      },
      "index": {
        "description": "Functions for initializing self-contained local postgreSQL database clusters useful in development more than production",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "Devel",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Devel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:configLocalDB",
      "description": {
        "fct-descr": "\u003cp\u003eSet configuration parameters on a database by editing the\n \u003ccode\u003epostgresql.conf\u003c/code\u003e file.  Takes the database directory and a list of\n \u003ccode\u003e(\u003c/code\u003e\u003cem\u003eparameter\u003c/em\u003e\u003ccode\u003e,\u003c/code\u003e \u003cem\u003efull-line\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e pairs.  For example, when creating\n a throw-away database cluster you later intend to discard, you\n might say:\n\u003c/p\u003e\u003cpre\u003e configLocalDB dbpath [(\"fsync\", \"fsync = off\")]\n\u003c/pre\u003e\u003cp\u003eNote that the second element of each pair is the complete\n configuration line.  It is not correct to say:\n\u003c/p\u003e\u003cpre\u003e configLocalDB dbpath [(\"fsync\", \"off\")]   -- INCORRECT\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e [(String, String)] -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Devel.html#configLocalDB",
        "fct-type": "function",
        "title": "configLocalDB"
      },
      "index": {
        "description": "Set configuration parameters on database by editing the postgresql.conf file Takes the database directory and list of parameter full-line pairs For example when creating throw-away database cluster you later intend to discard you might say configLocalDB dbpath fsync fsync off Note that the second element of each pair is the complete configuration line It is not correct to say configLocalDB dbpath fsync off INCORRECT",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "configLocalDB",
        "normalized": "FilePath-\u003e[(String,String)]-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "Local DB",
        "signature": "FilePath-\u003e[(String,String)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:createLocalDB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a directory for a local database cluster entirely\n self-contained within one directory.  This is accomplished by\n creating a new PostgreSQL database cluster in the directory and\n setting the following configuration options in \u003ccode\u003epostgresql.conf\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003elisten_address\u003c/code\u003e is set to empty (i.e., \u003ccode\u003e''\u003c/code\u003e), so that no TCP\n socket is bound, avoiding conflicts with any other running instaces\n of PostgreSQL.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003elogging_collector\u003c/code\u003e is set to \u003ccode\u003eyes\u003c/code\u003e, so that all message logs are\n   kept in the \u003ccode\u003epg_log\u003c/code\u003e subdirectory of the directory you specified.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote this function does \u003cem\u003enot\u003c/em\u003e start a postgres server after\n creating the directory.  You will seperately need to start the\n server using \u003ccode\u003e\u003ca\u003estartLocalDB\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einitLocalDB\u003c/a\u003e\u003c/code\u003e.  (And note that\n \u003ccode\u003e\u003ca\u003einitLocalDB\u003c/a\u003e\u003c/code\u003e already calls \u003ccode\u003ecreateLocalDB\u003c/code\u003e if the directory does\n not exist or is empty.  Hence the primary use of this function is\n if you want to call \u003ccode\u003e\u003ca\u003econfigLocalDB\u003c/a\u003e\u003c/code\u003e between \u003ccode\u003e\u003ca\u003ecreateLocalDB\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003estartLocalDB\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Devel.html#createLocalDB",
        "fct-type": "function",
        "title": "createLocalDB"
      },
      "index": {
        "description": "Create directory for local database cluster entirely self-contained within one directory This is accomplished by creating new PostgreSQL database cluster in the directory and setting the following configuration options in postgresql.conf listen address is set to empty i.e so that no TCP socket is bound avoiding conflicts with any other running instaces of PostgreSQL logging collector is set to yes so that all message logs are kept in the pg log subdirectory of the directory you specified Note this function does not start postgres server after creating the directory You will seperately need to start the server using startLocalDB or initLocalDB And note that initLocalDB already calls createLocalDB if the directory does not exist or is empty Hence the primary use of this function is if you want to call configLocalDB between createLocalDB and startLocalDB",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "createLocalDB",
        "normalized": "FilePath-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "Local DB",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:initLocalDB",
      "description": {
        "fct-descr": "\u003cp\u003eA combination of \u003ccode\u003e\u003ca\u003ecreateLocalDB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estartLocalDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parameter is a PostgreSQL data directory.  If the directory is\n empty or does not exist, this function creates a new database\n cluster (via \u003ccode\u003e\u003ca\u003ecreateLocalDB\u003c/a\u003e\u003c/code\u003e).  Then, if a database server is not\n already running for the directory, starts a server.  No matter\n what, returns a \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e that will connect to the server\n running on this local database.\n\u003c/p\u003e\u003cp\u003eNote that if \u003ccode\u003einitLocalDB\u003c/code\u003e starts a postgres server, the server\n process will continue running after the process that called\n \u003ccode\u003einitLocalDB\u003c/code\u003e exits.  This is normally fine.  Since multiple client\n processes may access the same PostgreSQL database, it makes sense\n for the first client to start the database and no one to stop it.\n See \u003ccode\u003e\u003ca\u003estopLocalDB\u003c/a\u003e\u003c/code\u003e if you wish to stop the server process (which you\n should always do before deleting a test cluster).  See also\n \u003ccode\u003e\u003ca\u003ewithTempDB\u003c/a\u003e\u003c/code\u003e to create a temporary cluster for the purposes of\n running a test suite.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e IO ConnectInfo",
        "fct-source": "src/Database-PostgreSQL-Devel.html#initLocalDB",
        "fct-type": "function",
        "title": "initLocalDB"
      },
      "index": {
        "description": "combination of createLocalDB and startLocalDB The parameter is PostgreSQL data directory If the directory is empty or does not exist this function creates new database cluster via createLocalDB Then if database server is not already running for the directory starts server No matter what returns ConnectInfo that will connect to the server running on this local database Note that if initLocalDB starts postgres server the server process will continue running after the process that called initLocalDB exits This is normally fine Since multiple client processes may access the same PostgreSQL database it makes sense for the first client to start the database and no one to stop it See stopLocalDB if you wish to stop the server process which you should always do before deleting test cluster See also withTempDB to create temporary cluster for the purposes of running test suite",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "initLocalDB",
        "normalized": "FilePath-\u003eIO ConnectInfo",
        "package": "postgresql-orm",
        "partial": "Local DB",
        "signature": "FilePath-\u003eIO ConnectInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:resetConnection",
      "description": {
        "fct-descr": "\u003cp\u003eReset a connection to its default state before re-cycling it for\n another thread or request.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Devel.html#resetConnection",
        "fct-type": "function",
        "title": "resetConnection"
      },
      "index": {
        "description": "Reset connection to its default state before re-cycling it for another thread or request",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "resetConnection",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "Connection",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:setLocalDB",
      "description": {
        "fct-descr": "\u003cp\u003eSet environment variables to make a local database cluster the\n default.  Also returns shell commands you can eval or cut-and-paste\n into your shell to make \u003ccode\u003epg_ctl\u003c/code\u003e and \u003ccode\u003epsql\u003c/code\u003e access a local database\n cluster.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/Database-PostgreSQL-Devel.html#setLocalDB",
        "fct-type": "function",
        "title": "setLocalDB"
      },
      "index": {
        "description": "Set environment variables to make local database cluster the default Also returns shell commands you can eval or cut-and-paste into your shell to make pg ctl and psql access local database cluster",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "setLocalDB",
        "normalized": "FilePath-\u003eIO String",
        "package": "postgresql-orm",
        "partial": "Local DB",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:startLocalDB",
      "description": {
        "fct-descr": "\u003cp\u003eStart a local database if the server is not already running.\n Otherwise, does nothing, but returns a \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e in either\n case.  The database server will continue running after the current\n process exits (but see \u003ccode\u003e\u003ca\u003estopLocalDB\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e IO ConnectInfo",
        "fct-source": "src/Database-PostgreSQL-Devel.html#startLocalDB",
        "fct-type": "function",
        "title": "startLocalDB"
      },
      "index": {
        "description": "Start local database if the server is not already running Otherwise does nothing but returns ConnectInfo in either case The database server will continue running after the current process exits but see stopLocalDB",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "startLocalDB",
        "normalized": "FilePath-\u003eIO ConnectInfo",
        "package": "postgresql-orm",
        "partial": "Local DB",
        "signature": "FilePath-\u003eIO ConnectInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:stopLocalDB",
      "description": {
        "fct-descr": "\u003cp\u003eStop the server for a local database cluster entirely\n self-contained within one directory.  You must call this before\n deleting the directory, or else stray postgres processes will\n linger forever.  If the argument is the empty string, looks for the\n database directory in the \u003ccode\u003ePGDATA\u003c/code\u003e environment variable.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Devel.html#stopLocalDB",
        "fct-type": "function",
        "title": "stopLocalDB"
      },
      "index": {
        "description": "Stop the server for local database cluster entirely self-contained within one directory You must call this before deleting the directory or else stray postgres processes will linger forever If the argument is the empty string looks for the database directory in the PGDATA environment variable",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "stopLocalDB",
        "normalized": "FilePath-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "Local DB",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Devel.html#v:withTempDB",
      "description": {
        "fct-descr": "\u003cp\u003eRun a function with a completely fresh database cluster that gets\n deleted on return.  Since the entire database is blown away when\n the function returns, \u003ccode\u003ewithTempDB\u003c/code\u003e is obviously only useful for\n test suites.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Devel",
        "fct-package": "postgresql-orm",
        "fct-signature": "(ConnectInfo -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-PostgreSQL-Devel.html#withTempDB",
        "fct-type": "function",
        "title": "withTempDB"
      },
      "index": {
        "description": "Run function with completely fresh database cluster that gets deleted on return Since the entire database is blown away when the function returns withTempDB is obviously only useful for test suites",
        "hierarchy": "Database PostgreSQL Devel",
        "module": "Database.PostgreSQL.Devel",
        "name": "withTempDB",
        "normalized": "(ConnectInfo-\u003eIO a)-\u003eIO a",
        "package": "postgresql-orm",
        "partial": "Temp DB",
        "signature": "(ConnectInfo-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module deals with escaping and sanitizing SQL templates.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Escape.html",
        "fct-type": "module",
        "title": "Escape"
      },
      "index": {
        "description": "This module deals with escaping and sanitizing SQL templates",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "Escape",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eAn identifier is a table or column name.  When rendered into a\n SQL query by \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e, it will be double-quoted, rather than\n single-quoted.  For example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmtSql \"select * from ? where name = ?\" (Id \"MyTable\", \"A Name\")\n\u003c/code\u003e\u003c/strong\u003e\"select * from \\\"MyTable\\\" where name =  E'A Name'\"\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-Escape.html#Id",
        "fct-type": "newtype",
        "title": "Id"
      },
      "index": {
        "description": "An identifier is table or column name When rendered into SQL query by fmtSql it will be double-quoted rather than single-quoted For example fmtSql select from where name Id MyTable Name select from MyTable where name Name",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "Id",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:Id",
      "description": {
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "Id ByteString",
        "fct-source": "src/Database-PostgreSQL-Escape.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "Id",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:buildAction",
      "description": {
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "Action -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Escape.html#buildAction",
        "fct-type": "function",
        "title": "buildAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "buildAction",
        "normalized": "Action-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "Action",
        "signature": "Action-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:buildByteA",
      "description": {
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Escape.html#buildByteA",
        "fct-type": "function",
        "title": "buildByteA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "buildByteA",
        "normalized": "ByteString-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "Byte",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:buildIdent",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a quoted identifier.  Generally you will want to use\n \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e, and for repeated use it will be faster to use\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this internal function is\n exposed in case it is useful.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Escape.html#buildIdent",
        "fct-type": "function",
        "title": "buildIdent"
      },
      "index": {
        "description": "Build quoted identifier Generally you will want to use quoteIdent and for repeated use it will be faster to use fromByteString quoteIdent but this internal function is exposed in case it is useful",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "buildIdent",
        "normalized": "ByteString-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "Ident",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:buildLiteral",
      "description": {
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Escape.html#buildLiteral",
        "fct-type": "function",
        "title": "buildLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "buildLiteral",
        "normalized": "ByteString-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "Literal",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:buildSql",
      "description": {
        "fct-descr": "\u003cp\u003eA builder version of \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e, possibly useful if you are about\n to concatenate various individually formatted query fragments and\n want to save the work of concatenating each individually.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e p -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Escape.html#buildSql",
        "fct-type": "function",
        "title": "buildSql"
      },
      "index": {
        "description": "builder version of fmtSql possibly useful if you are about to concatenate various individually formatted query fragments and want to save the work of concatenating each individually",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "buildSql",
        "normalized": "Query-\u003ea-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "Sql",
        "signature": "Query-\u003ep-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:buildSqlFromActions",
      "description": {
        "fct-descr": "\u003cp\u003eA lower-level function used by \u003ccode\u003e\u003ca\u003ebuildSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e.  You\n probably don't need to call it directly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e [Action] -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-Escape.html#buildSqlFromActions",
        "fct-type": "function",
        "title": "buildSqlFromActions"
      },
      "index": {
        "description": "lower-level function used by buildSql and fmtSql You probably don need to call it directly",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "buildSqlFromActions",
        "normalized": "Query-\u003e[Action]-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "Sql From Actions",
        "signature": "Query-\u003e[Action]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:fmtSql",
      "description": {
        "fct-descr": "\u003cp\u003eTake a SQL template containing '?' characters and a list of\n paremeters whose length must match the number of '?' characters,\n and format the result as an escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e that can be used\n as a query.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eformatQuery\u003c/a\u003e\u003c/code\u003e, this function is naive about the placement of\n '?' characters and will expand all of them, even ones within\n quotes.  To avoid this, you must use \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e on identifiers\n containing question marks.\n\u003c/p\u003e\u003cp\u003eAlso like \u003ccode\u003e\u003ca\u003eformatQuery\u003c/a\u003e\u003c/code\u003e, '?' characters touching other '?'\n characters or quoted strings may do the wrong thing, and end up\n doubling a quote, so avoid substrings such as \u003ccode\u003e\"??\"\u003c/code\u003e or\n \u003ccode\u003e\"?\u003ccode\u003estring\u003c/code\u003e\"\u003c/code\u003e, as these could get expanded to, e.g.,\n \u003ccode\u003e\"'param''string'\"\u003c/code\u003e, which is a single string containing an\n apostrophe, when you probably wanted two strings.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e p -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-Escape.html#fmtSql",
        "fct-type": "function",
        "title": "fmtSql"
      },
      "index": {
        "description": "Take SQL template containing characters and list of paremeters whose length must match the number of characters and format the result as an escaped ByteString that can be used as query Like formatQuery this function is naive about the placement of characters and will expand all of them even ones within quotes To avoid this you must use quoteIdent on identifiers containing question marks Also like formatQuery characters touching other characters or quoted strings may do the wrong thing and end up doubling quote so avoid substrings such as or string as these could get expanded to e.g param string which is single string containing an apostrophe when you probably wanted two strings",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "fmtSql",
        "normalized": "Query-\u003ea-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Sql",
        "signature": "Query-\u003ep-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Escape.html#v:quoteIdent",
      "description": {
        "fct-descr": "\u003cp\u003eQuote an identifier such as a table or column name using\n double-quote characters.  Note this has nothing to do with quoting\n \u003cem\u003evalues\u003c/em\u003e, which must be quoted using single quotes.  (Anyway, all\n values should be quoted by \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e.)  This function\n uses a unicode escape sequence to escape '?' characters, which\n would otherwise be expanded by \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eformatQuery\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eS8.putStrLn $ quoteIdent \"hello \\\"world\\\"!\"\n\u003c/code\u003e\u003c/strong\u003e\"hello \"\"world\"\"!\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eS8.putStrLn $ quoteIdent \"hello \\\"world\\\"?\"\n\u003c/code\u003e\u003c/strong\u003e U&\"hello \"\"world\"\"\\003f\"\n\u003c/pre\u003e\u003cp\u003eNote that this quoting function is correct only if\n \u003ccode\u003eclient_encoding\u003c/code\u003e is \u003ccode\u003eSQL_ASCII\u003c/code\u003e, \u003ccode\u003eclient_coding\u003c/code\u003e is \u003ccode\u003eUTF8\u003c/code\u003e, or the\n identifier contains no multi-byte characters.  For other coding\n schemes, this function may erroneously duplicate bytes that look\n like quote characters but are actually part of a multi-byte\n character code.  In such cases, maliciously crafted identifiers\n will, even after quoting, allow injection of arbitrary SQL commands\n to the server.\n\u003c/p\u003e\u003cp\u003eThe upshot is that it is unwise to use this function on identifiers\n provided by untrustworthy sources.  Note this is true anyway,\n regardless of \u003ccode\u003eclient_encoding\u003c/code\u003e setting, because certain \"system\n column\" names (e.g., \u003ccode\u003eoid\u003c/code\u003e, \u003ccode\u003etableoid\u003c/code\u003e, \u003ccode\u003exmin\u003c/code\u003e, \u003ccode\u003ecmin\u003c/code\u003e, \u003ccode\u003exmax\u003c/code\u003e,\n \u003ccode\u003ecmax\u003c/code\u003e, \u003ccode\u003ectid\u003c/code\u003e) are likely to produce unexpected results even when\n properly quoted.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e for a convenient way to include quoted identifiers in\n parameter lists.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Escape",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Escape.html#quoteIdent",
        "fct-type": "function",
        "title": "quoteIdent"
      },
      "index": {
        "description": "Quote an identifier such as table or column name using double-quote characters Note this has nothing to do with quoting values which must be quoted using single quotes Anyway all values should be quoted by query or fmtSql This function uses unicode escape sequence to escape characters which would otherwise be expanded by query formatQuery or fmtSql S8.putStrLn quoteIdent hello world hello world S8.putStrLn quoteIdent hello world hello world Note that this quoting function is correct only if client encoding is SQL ASCII client coding is UTF8 or the identifier contains no multi-byte characters For other coding schemes this function may erroneously duplicate bytes that look like quote characters but are actually part of multi-byte character code In such cases maliciously crafted identifiers will even after quoting allow injection of arbitrary SQL commands to the server The upshot is that it is unwise to use this function on identifiers provided by untrustworthy sources Note this is true anyway regardless of client encoding setting because certain system column names e.g oid tableoid xmin cmin xmax cmax ctid are likely to produce unexpected results even when properly quoted See Id for convenient way to include quoted identifiers in parameter lists",
        "hierarchy": "Database PostgreSQL Escape",
        "module": "Database.PostgreSQL.Escape",
        "name": "quoteIdent",
        "normalized": "ByteString-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Ident",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating and running database migrations. You should\n probably be using the \u003ccode\u003epg_migrate\u003c/code\u003e executable to run migrations, however\n these functions are exposed for developers that want to integrate migrations\n more tightly into their applications or utilities.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Migrate.html",
        "fct-type": "module",
        "title": "Migrate"
      },
      "index": {
        "description": "Functions for creating and running database migrations You should probably be using the pg migrate executable to run migrations however these functions are exposed for developers that want to integrate migrations more tightly into their applications or utilities",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "Migrate",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Migrate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#t:MigrationDetails",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#MigrationDetails",
        "fct-type": "data",
        "title": "MigrationDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "MigrationDetails",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Migration Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:MigrationDetails",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "MigrationDetails",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#MigrationDetails",
        "fct-type": "function",
        "title": "MigrationDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "MigrationDetails",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Migration Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:defaultMigrationsDir",
      "description": {
        "fct-descr": "\u003cp\u003eThe default relative path containing migrations: \u003ccode\u003e\"db/migrations\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#defaultMigrationsDir",
        "fct-type": "function",
        "title": "defaultMigrationsDir"
      },
      "index": {
        "description": "The default relative path containing migrations db migrations",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "defaultMigrationsDir",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Migrations Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:dumpDb",
      "description": {
        "fct-descr": "\u003cp\u003eDumps the database schema to the given file handle.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper around the utility \u003cem\u003epg_dump\u003c/em\u003e that comes with postgresql.\n Therefore, \u003cem\u003epg_dump\u003c/em\u003e must be installed on the system.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "Handle -\u003e IO ExitCode",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#dumpDb",
        "fct-type": "function",
        "title": "dumpDb"
      },
      "index": {
        "description": "Dumps the database schema to the given file handle This is wrapper around the utility pg dump that comes with postgresql Therefore pg dump must be installed on the system",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "dumpDb",
        "normalized": "Handle-\u003eIO ExitCode",
        "package": "postgresql-orm",
        "partial": "Db",
        "signature": "Handle-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:initializeDb",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes the database by creating a \"schema-migrations\" table.\n This table must exist before running any migrations.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#initializeDb",
        "fct-type": "function",
        "title": "initializeDb"
      },
      "index": {
        "description": "Initializes the database by creating schema-migrations table This table must exist before running any migrations",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "initializeDb",
        "normalized": "IO()",
        "package": "postgresql-orm",
        "partial": "Db",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:migrationName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#MigrationDetails",
        "fct-type": "function",
        "title": "migrationName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "migrationName",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:migrationPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#MigrationDetails",
        "fct-type": "function",
        "title": "migrationPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "migrationPath",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:migrationVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "String",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#MigrationDetails",
        "fct-type": "function",
        "title": "migrationVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "migrationVersion",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:newMigration",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#newMigration",
        "fct-type": "function",
        "title": "newMigration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "newMigration",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "Migration",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:runMigrationsForDir",
      "description": {
        "fct-descr": "\u003cp\u003eRuns all new migrations in a given directory and dumps the\n resulting schema to a file \"schema.sql\" in the migrations\n directory.\n\u003c/p\u003e\u003cp\u003eDetermining which migrations to run is done by querying the database for the\n largest version in the \u003cem\u003eschema_migrations\u003c/em\u003e table, and choosing all\n migrations in the given directory with higher versions.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "Handle-\u003e FilePath-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "runMigrationsForDir"
      },
      "index": {
        "description": "Runs all new migrations in given directory and dumps the resulting schema to file schema.sql in the migrations directory Determining which migrations to run is done by querying the database for the largest version in the schema migrations table and choosing all migrations in the given directory with higher versions",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "runMigrationsForDir",
        "normalized": "Handle-\u003eFilePath-\u003eIO ExitCode",
        "package": "postgresql-orm",
        "partial": "Migrations For Dir",
        "signature": "Handle-\u003eFilePath-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrate.html#v:runRollbackForDir",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrate",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e IO ExitCode",
        "fct-source": "src/Database-PostgreSQL-Migrate.html#runRollbackForDir",
        "fct-type": "function",
        "title": "runRollbackForDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrate",
        "module": "Database.PostgreSQL.Migrate",
        "name": "runRollbackForDir",
        "normalized": "FilePath-\u003eIO ExitCode",
        "package": "postgresql-orm",
        "partial": "Rollback For Dir",
        "signature": "FilePath-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to help with building database migrations.\n\u003c/p\u003e\u003cp\u003eMost users will want to create a database migration using \u003ccode\u003edefaultMain\u003c/code\u003e as\nfollows,\n\u003c/p\u003e\u003cpre\u003e\n import Database.PostgreSQL.Migrations\n\n main = defaultMain up down\n\n up = migrate $ do\n       create_table \"posts\"\n         [ column \"title\" \"VARCHAR(255) NOT NULL\"\n         , column \"author_id\" \"integer references authors(id)\"]\n \n down = migrate $ drop_table \"posts\"\n\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-Migrations.html",
        "fct-type": "module",
        "title": "Migrations"
      },
      "index": {
        "description": "Functions to help with building database migrations Most users will want to create database migration using defaultMain as follows import Database.PostgreSQL.Migrations main defaultMain up down up migrate do create table posts column title VARCHAR NOT NULL column author id integer references authors id down migrate drop table posts",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "Migrations",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Migrations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#t:Migration",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-Migrations.html#Migration",
        "fct-type": "type",
        "title": "Migration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "Migration",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:add_column",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a column to the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   add_column \"posts\" \"title\" \"VARCHAR(255)\"\n\u003c/pre\u003e\u003cp\u003eadds a varchar column called \"title\" to the table \"posts\".\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Migration Int64",
        "fct-type": "function",
        "title": "add_column"
      },
      "index": {
        "description": "Adds column to the given table For example add column posts title VARCHAR adds varchar column called title to the table posts",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "add_column",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:add_column_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that adds a column to the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   add_column \"posts\" \"title\" \"VARCHAR(255)\"\n\u003c/pre\u003e\u003cp\u003eReturns the query\n\u003c/p\u003e\u003cpre\u003e\n   ALTER TABLE \"posts\" add \"title\" VARCHAR(255);\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Query",
        "fct-type": "function",
        "title": "add_column_stmt"
      },
      "index": {
        "description": "Returns Query that adds column to the given table For example add column posts title VARCHAR Returns the query ALTER TABLE posts add title VARCHAR",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "add_column_stmt",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:change_column",
      "description": {
        "fct-descr": "\u003cp\u003eAlters a column in the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   change_column \"posts\" \"title\" \"DROP DEFAULT\"\n\u003c/pre\u003e\u003cp\u003edrops the default constraint for the \"title\" column in the \"posts\"\n table.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Migration Int64",
        "fct-type": "function",
        "title": "change_column"
      },
      "index": {
        "description": "Alters column in the given table For example change column posts title DROP DEFAULT drops the default constraint for the title column in the posts table",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "change_column",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:change_column_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that alters a column in the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   change_column \"posts\" \"title\" \"DROP DEFAULT\"\n\u003c/pre\u003e\u003cp\u003eReturns the query\n\u003c/p\u003e\u003cpre\u003e\n   ALTER TABLE \"posts\" ALTER \"title\" DROP DEFAULT;\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Query",
        "fct-type": "function",
        "title": "change_column_stmt"
      },
      "index": {
        "description": "Returns Query that alters column in the given table For example change column posts title DROP DEFAULT Returns the query ALTER TABLE posts ALTER title DROP DEFAULT",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "change_column_stmt",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:column",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a column defition by quoting the given name\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "Returns column defition by quoting the given name",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "column",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:connectEnv",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a PostgreSQL \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e using the \u003cem\u003eDATABASE_URL\u003c/em\u003e environment\n variable, if it exists. If it does, it should match the format:\n\u003c/p\u003e\u003cpre\u003e\n   postgresql://[[USERNAME@PASSWORD]HOSTNAME[:PORT]]/[DBNAME]\n\u003c/pre\u003e\u003cp\u003eIf it is not present, the environment variables \u003cem\u003ePG_DBNAME\u003c/em\u003e \u003cem\u003ePG_HOST\u003c/em\u003e etc,\n are used.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "IO Connection",
        "fct-source": "src/Database-PostgreSQL-Migrations.html#connectEnv",
        "fct-type": "function",
        "title": "connectEnv"
      },
      "index": {
        "description": "Creates PostgreSQL Connection using the DATABASE URL environment variable if it exists If it does it should match the format postgresql USERNAME@PASSWORD HOSTNAME PORT DBNAME If it is not present the environment variables PG DBNAME PG HOST etc are used",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "connectEnv",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:create_index",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an index for efficient lookup.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]-\u003e Migration Int64",
        "fct-type": "function",
        "title": "create_index"
      },
      "index": {
        "description": "Creates an index for efficient lookup",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "create_index",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:create_index_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that creates an index for the given columns on the given\n table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   create_index_stmt \"post_owner_index\" \"posts\" \"owner\"\n\u003c/pre\u003e\u003cp\u003eReturns the query\n\u003c/p\u003e\u003cpre\u003e\n   CREATE INDEX \"post_owner_index\" ON \"posts\" (\"owner\")\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "Bool-\u003e ByteString-\u003e ByteString-\u003e [ByteString]-\u003e Query",
        "fct-type": "function",
        "title": "create_index_stmt"
      },
      "index": {
        "description": "Returns Query that creates an index for the given columns on the given table For example create index stmt post owner index posts owner Returns the query CREATE INDEX post owner index ON posts owner",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "create_index_stmt",
        "normalized": "Bool-\u003eByteString-\u003eByteString-\u003e[ByteString]-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Bool-\u003eByteString-\u003eByteString-\u003e[ByteString]-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:create_table",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a table. See \u003ccode\u003e\u003ca\u003ecolumn\u003c/a\u003e\u003c/code\u003e for constructing the column list.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e Migration Int64",
        "fct-type": "function",
        "title": "create_table"
      },
      "index": {
        "description": "Creates table See column for constructing the column list",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "create_table",
        "normalized": "ByteString-\u003e[ByteString]-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:create_table_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that creates a table, for example:\n\u003c/p\u003e\u003cpre\u003e\n   create_table \"posts\"\n     [ column \"title\" \"VARCHAR(255) NOT NULL\"\n     , column \"body\"  \"text\"]\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e Query",
        "fct-type": "function",
        "title": "create_table_stmt"
      },
      "index": {
        "description": "Returns Query that creates table for example create table posts column title VARCHAR NOT NULL column body text",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "create_table_stmt",
        "normalized": "ByteString-\u003e[ByteString]-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:create_unique_index",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a unique index for efficient lookup.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e [ByteString]-\u003e Migration Int64",
        "fct-type": "function",
        "title": "create_unique_index"
      },
      "index": {
        "description": "Creates unique index for efficient lookup",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "create_unique_index",
        "normalized": "ByteString-\u003eByteString-\u003e[ByteString]-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003e[ByteString]-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:defaultMain",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "(Connection -\u003e IO ())-\u003e (Connection -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "defaultMain",
        "normalized": "(Connection-\u003eIO())-\u003e(Connection-\u003eIO())-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "Main",
        "signature": "(Connection-\u003eIO())-\u003e(Connection-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:drop_column",
      "description": {
        "fct-descr": "\u003cp\u003eDrops a column from the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   drop_column \"posts\" \"title\"\n\u003c/pre\u003e\u003cp\u003edrops the column \"title\" from the \"posts\" table.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Migration Int64",
        "fct-type": "function",
        "title": "drop_column"
      },
      "index": {
        "description": "Drops column from the given table For example drop column posts title drops the column title from the posts table",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "drop_column",
        "normalized": "ByteString-\u003eByteString-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:drop_column_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that drops a column from the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   drop_column \"posts\" \"title\"\n\u003c/pre\u003e\u003cp\u003eReturns the query\n\u003c/p\u003e\u003cpre\u003e\n   ALTER TABLE \"posts\" add \"title\";\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Query",
        "fct-type": "function",
        "title": "drop_column_stmt"
      },
      "index": {
        "description": "Returns Query that drops column from the given table For example drop column posts title Returns the query ALTER TABLE posts add title",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "drop_column_stmt",
        "normalized": "ByteString-\u003eByteString-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:drop_index",
      "description": {
        "fct-descr": "\u003cp\u003eDrops an index.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e Migration Int64",
        "fct-type": "function",
        "title": "drop_index"
      },
      "index": {
        "description": "Drops an index",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "drop_index",
        "normalized": "ByteString-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:drop_index_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that drops an index.\n\u003c/p\u003e\u003cpre\u003e\n   drop_index_stmt \"post_owner_index\"\n\u003c/pre\u003e\u003cp\u003eReturns the query\n\u003c/p\u003e\u003cpre\u003e\n   DROP INDEX \"post_owner_index\"\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e Query",
        "fct-type": "function",
        "title": "drop_index_stmt"
      },
      "index": {
        "description": "Returns Query that drops an index drop index stmt post owner index Returns the query DROP INDEX post owner index",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "drop_index_stmt",
        "normalized": "ByteString-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:drop_table",
      "description": {
        "fct-descr": "\u003cp\u003eDrops a table\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e Migration Int64",
        "fct-source": "src/Database-PostgreSQL-Migrations.html#drop_table",
        "fct-type": "function",
        "title": "drop_table"
      },
      "index": {
        "description": "Drops table",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "drop_table",
        "normalized": "ByteString-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:drop_table_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that drops a table\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-Migrations.html#drop_table_stmt",
        "fct-type": "function",
        "title": "drop_table_stmt"
      },
      "index": {
        "description": "Returns Query that drops table",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "drop_table_stmt",
        "normalized": "ByteString-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:migrate",
      "description": {
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "Migration a -\u003e Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-Migrations.html#migrate",
        "fct-type": "function",
        "title": "migrate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "migrate",
        "normalized": "Migration a-\u003eConnection-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Migration a-\u003eConnection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:rename_column",
      "description": {
        "fct-descr": "\u003cp\u003eRenames a column in the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   rename_column \"posts\" \"title\" \"name\"\n\u003c/pre\u003e\u003cp\u003erenames the column \"title\" in the \"posts\" table to \"name\".\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Migration Int64",
        "fct-type": "function",
        "title": "rename_column"
      },
      "index": {
        "description": "Renames column in the given table For example rename column posts title name renames the column title in the posts table to name",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "rename_column",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eMigration Int",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eMigration Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:rename_column_stmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e that renames a column in the given table. For example,\n\u003c/p\u003e\u003cpre\u003e\n   rename_column \"posts\" \"title\" \"name\"\n\u003c/pre\u003e\u003cp\u003eReturns the query\n\u003c/p\u003e\u003cpre\u003e\n   ALTER TABLE \"posts\" RENAME \"title\" TO \"name\";\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Query",
        "fct-type": "function",
        "title": "rename_column_stmt"
      },
      "index": {
        "description": "Returns Query that renames column in the given table For example rename column posts title name Returns the query ALTER TABLE posts RENAME title TO name",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "rename_column_stmt",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-Migrations.html#v:runSqlFile",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the SQL file at the given path, relative to the current working\n directory.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.Migrations",
        "fct-package": "postgresql-orm",
        "fct-signature": "FilePath -\u003e Migration ()",
        "fct-source": "src/Database-PostgreSQL-Migrations.html#runSqlFile",
        "fct-type": "function",
        "title": "runSqlFile"
      },
      "index": {
        "description": "Runs the SQL file at the given path relative to the current working directory",
        "hierarchy": "Database PostgreSQL Migrations",
        "module": "Database.PostgreSQL.Migrations",
        "name": "runSqlFile",
        "normalized": "FilePath-\u003eMigration()",
        "package": "postgresql-orm",
        "partial": "Sql File",
        "signature": "FilePath-\u003eMigration()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html",
        "fct-type": "module",
        "title": "Association"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "Association",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Association",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#t:Association",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure representing a relationship between a model \u003ccode\u003ea\u003c/code\u003e\n and a model \u003ccode\u003eb\u003c/code\u003e.  At a high level, an \u003ccode\u003eAssociation a b\u003c/code\u003e tells you\n how to find rows of type \u003ccode\u003eb\u003c/code\u003e given rows of type \u003ccode\u003ea\u003c/code\u003e.  More\n concretely, this boils down to being able to make two types of\n query.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e You want to look up a bunch of \u003ccode\u003e(a \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e b)\u003c/code\u003es, filtering using\n  predicates on both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e (e.g., get a list of recent posts\n  and their authors).  For this purpose, you can use \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e,\n  which allows you to \u003ccode\u003e\u003ca\u003eaddWhere\u003c/a\u003e\u003c/code\u003e predicates mentioning columns in\n  both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e You already have an instance of type \u003ccode\u003ea\u003c/code\u003e, and want to find all\n  the \u003ccode\u003eb\u003c/code\u003es associated with it.  For that you use either \u003ccode\u003e\u003ca\u003eassocWhere\u003c/a\u003e\u003c/code\u003e\n  or \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e (which internally access fields \u003ccode\u003e\u003ca\u003eassocSelectOnlyB\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003eassocWhereQuery\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eassocWhereParam\u003c/a\u003e\u003c/code\u003e).  This type of query is\n  strictly less general than the first one, but can be formulated in\n  a more efficient way by extracting values directly from a concrete\n  instance of \u003ccode\u003ea\u003c/code\u003e without needing to touch table \u003ccode\u003ea\u003c/code\u003e in the\n  database.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that an \u003ccode\u003eAssociation\u003c/code\u003e is asymmetric.  It tells you how to get\n \u003ccode\u003eb\u003c/code\u003es from \u003ccode\u003ea\u003c/code\u003es, but not vice versa.  In practice, there will almost\n always be an association in the other direction, too.  Functions\n such as \u003ccode\u003e\u003ca\u003edbrefAssocs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejtAssocs\u003c/a\u003e\u003c/code\u003e therefore create an\n \u003ccode\u003eAssociation\u003c/code\u003e and its inverse simultaneously, returning them as a\n pair.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "data",
        "title": "Association"
      },
      "index": {
        "description": "data structure representing relationship between model and model At high level an Association tells you how to find rows of type given rows of type More concretely this boils down to being able to make two types of query You want to look up bunch of filtering using predicates on both and e.g get list of recent posts and their authors For this purpose you can use assocSelect which allows you to addWhere predicates mentioning columns in both and You already have an instance of type and want to find all the associated with it For that you use either assocWhere or findAssoc which internally access fields assocSelectOnlyB assocWhereQuery and assocWhereParam This type of query is strictly less general than the first one but can be formulated in more efficient way by extracting values directly from concrete instance of without needing to touch table in the database Note that an Association is asymmetric It tells you how to get from but not vice versa In practice there will almost always be an association in the other direction too Functions such as dbrefAssocs and jtAssocs therefore create an Association and its inverse simultaneously returning them as pair",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "Association",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Association",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#t:DBRefInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eDBRefInfo\u003c/code\u003e is a type alias for the common case that the\n reference in a \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e (as opposed to a\n \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e).  The functions in this library do not care what\n type of reference is used.  The type is generalized to \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e\n just to make it easier to assign a selector to \u003ccode\u003e\u003ca\u003edbrefSelector\u003c/a\u003e\u003c/code\u003e when\n the selector returns a \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e.  Note, however, that\n \u003ccode\u003e\u003ca\u003edefaultDBRefInfo\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e regardless of the flavor\n of reference actually encountered.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#DBRefInfo",
        "fct-type": "type",
        "title": "DBRefInfo"
      },
      "index": {
        "description": "DBRefInfo is type alias for the common case that the reference in GDBRefInfo is DBRef as opposed to DBRefUnique The functions in this library do not care what type of reference is used The type is generalized to GDBRefInfo just to make it easier to assign selector to dbrefSelector when the selector returns DBRefUnique Note however that defaultDBRefInfo returns DBRefInfo regardless of the flavor of reference actually encountered",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "DBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#t:GDBRefInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA common type of association is when one model contains a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e pointing to another model.  In this case, the\n model containing the \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e is known as the \u003cem\u003echild\u003c/em\u003e, and the\n referenced model is known as the \u003cem\u003eparent\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eTwo pieces of information are required to describe a parent-child\n relationship:  First, the field selector that extracts the Haskell\n \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e from the haskell type \u003ccode\u003echild\u003c/code\u003e, and second the name of the\n database column that stores this \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e\u003cp\u003eFor example, consider the following:\n\u003c/p\u003e\u003cpre\u003e data Author = Author {\n     authorId :: DBKey\n   } deriving (Show, Generic)\n instance Model Author\n \n data Post = Post {\n     postId :: DBKey\n   , postAuthorId :: DBRef Author\n   } deriving (Show, Generic)\n instance Model Post\n\n post_author_refinfo :: DBRefInfo Post Author\n post_author_refinfo = DBRefInfo {\n     dbrefSelector = postAuthorId\n   , dbrefQColumn = \"\\\"post\\\".\\\"postAuthorId\\\"\"\n   }\n\u003c/pre\u003e\u003cp\u003eNote that the parent-child relationship described by a \u003ccode\u003eGDBRefInfo\u003c/code\u003e\n is asymmetric, but bidirectional.  When a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e child\n parent\u003c/code\u003e exists, the schema should generally \u003cem\u003enot\u003c/em\u003e permit the\n existence of a valid \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e parent child\u003c/code\u003e structure.\n However, the \u003ccode\u003e\u003ca\u003edbrefAssocs\u003c/a\u003e\u003c/code\u003e function generates \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003es in\n both directions from a single \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConstructing such parent-child \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003es requires knowing how\n to extract primary keys from the \u003ccode\u003eparent\u003c/code\u003e type as well as the name\n of the column storing primary keys in \u003ccode\u003eparent\u003c/code\u003e.  Fortunately, this\n information is already available from the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e class, and thus\n does not need to be in the \u003ccode\u003eGDBRefInfo\u003c/code\u003e.  (Most functions on\n \u003ccode\u003eGDBRefInfo\u003c/code\u003es require \u003ccode\u003eparent\u003c/code\u003e and \u003ccode\u003echild\u003c/code\u003e to be instances of\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eWhen your \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003es are instances of \u003ccode\u003eGeneric\u003c/code\u003e (which will usually\n be the case), a \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e structure can be computed automatically\n by \u003ccode\u003e\u003ca\u003edefaultDBRefInfo\u003c/a\u003e\u003c/code\u003e.  This is the recommended way to produce a\n \u003ccode\u003eGDBRefInfo\u003c/code\u003e.  (Alternatively, see \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebelongsTo\u003c/a\u003e\u003c/code\u003e to make\n use of an entirely implicit \u003ccode\u003eDBRefInfo\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "data",
        "title": "GDBRefInfo"
      },
      "index": {
        "description": "common type of association is when one model contains DBRef or DBRefUnique pointing to another model In this case the model containing the DBRef is known as the child and the referenced model is known as the parent Two pieces of information are required to describe parent-child relationship First the field selector that extracts the Haskell DBRef from the haskell type child and second the name of the database column that stores this DBRef field For example consider the following data Author Author authorId DBKey deriving Show Generic instance Model Author data Post Post postId DBKey postAuthorId DBRef Author deriving Show Generic instance Model Post post author refinfo DBRefInfo Post Author post author refinfo DBRefInfo dbrefSelector postAuthorId dbrefQColumn post postAuthorId Note that the parent-child relationship described by GDBRefInfo is asymmetric but bidirectional When DBRefInfo child parent exists the schema should generally not permit the existence of valid DBRefInfo parent child structure However the dbrefAssocs function generates Association in both directions from single DBRefInfo Constructing such parent-child Association requires knowing how to extract primary keys from the parent type as well as the name of the column storing primary keys in parent Fortunately this information is already available from the Model class and thus does not need to be in the GDBRefInfo Most functions on GDBRefInfo require parent and child to be instances of Model When your Model are instances of Generic which will usually be the case DBRefInfo structure can be computed automatically by defaultDBRefInfo This is the recommended way to produce GDBRefInfo Alternatively see has and belongsTo to make use of an entirely implicit DBRefInfo",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "GDBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GDBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#t:JoinTable",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure representing a dedicated join table in the\n database.  A join table differs from a model in that rows do not\n have primary keys.  Hence, model operations do not apply.\n Nonetheless a join table conveys information about a relationship\n between models.\n\u003c/p\u003e\u003cp\u003eNote that all names in a \u003ccode\u003eJoinTable\u003c/code\u003e should be unquoted.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "data",
        "title": "JoinTable"
      },
      "index": {
        "description": "data structure representing dedicated join table in the database join table differs from model in that rows do not have primary keys Hence model operations do not apply Nonetheless join table conveys information about relationship between models Note that all names in JoinTable should be unquoted",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "JoinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:Association",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "function",
        "title": "Association"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "Association",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Association",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:DBRefInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBRefInfo",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "function",
        "title": "DBRefInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "DBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:JoinTable",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "JoinTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "JoinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:assocProject",
      "description": {
        "fct-descr": "\u003cp\u003eA projection of \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e, extracting only the fields of\n model \u003ccode\u003eb\u003c/code\u003e.  Note that this query touches table \u003ccode\u003ea\u003c/code\u003e even if it does\n not return results from \u003ccode\u003ea\u003c/code\u003e.  Hence, you can use \u003ccode\u003e\u003ca\u003eaddWhere\u003c/a\u003e\u003c/code\u003e to add\n predicates on both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.  (Note the contrast to\n \u003ccode\u003e\u003ca\u003eassocSelectOnlyB\u003c/a\u003e\u003c/code\u003e, which does not touch table \u003ccode\u003ea\u003c/code\u003e at all, and\n hence in the case of an \u003ccode\u003eINNER JOIN\u003c/code\u003e might return rows of \u003ccode\u003eb\u003c/code\u003e that\n should not be part of the association.  \u003ccode\u003e\u003ca\u003eassocSelectOnlyB\u003c/a\u003e\u003c/code\u003e is\n intended for use only in conjunction with \u003ccode\u003e\u003ca\u003eassocWhereQuery\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e DBSelect b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#assocProject",
        "fct-type": "function",
        "title": "assocProject"
      },
      "index": {
        "description": "projection of assocSelect extracting only the fields of model Note that this query touches table even if it does not return results from Hence you can use addWhere to add predicates on both and Note the contrast to assocSelectOnlyB which does not touch table at all and hence in the case of an INNER JOIN might return rows of that should not be part of the association assocSelectOnlyB is intended for use only in conjunction with assocWhereQuery",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "assocProject",
        "normalized": "Association a b-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Project",
        "signature": "Association a b-\u003eDBSelect b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:assocSelect",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral select returning all instances of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e that\n match according to the association.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(DBSelect (a :. b))",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "function",
        "title": "assocSelect"
      },
      "index": {
        "description": "General select returning all instances of and that match according to the association",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "assocSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:assocSelectOnlyB",
      "description": {
        "fct-descr": "\u003cp\u003eThe right-hand side of the \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e query.  This query\n makes no mention of type \u003ccode\u003ea\u003c/code\u003e (but can be combined with the next\n two fields to form an optimized query).  You probably never\n want to use this directly, and should instead use either\n \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eassocWhere\u003c/a\u003e\u003c/code\u003e.  Also note this is not useful for\n selecting all the \u003ccode\u003eb\u003c/code\u003es in the relation; for that you should use\n \u003ccode\u003e\u003ca\u003eassocProject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(DBSelect b)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "function",
        "title": "assocSelectOnlyB"
      },
      "index": {
        "description": "The right-hand side of the assocSelect query This query makes no mention of type but can be combined with the next two fields to form an optimized query You probably never want to use this directly and should instead use either findAssoc or assocWhere Also note this is not useful for selecting all the in the relation for that you should use assocProject",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "assocSelectOnlyB",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Select Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:assocWhere",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003eb\u003c/code\u003es associated with a particular\n \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e a -\u003e DBSelect b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#assocWhere",
        "fct-type": "function",
        "title": "assocWhere"
      },
      "index": {
        "description": "Returns DBSelect for all associated with particular",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "assocWhere",
        "normalized": "Association a b-\u003ea-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": "Association a b-\u003ea-\u003eDBSelect b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:assocWhereParam",
      "description": {
        "fct-descr": "\u003cp\u003eThe query parameters for the query returned by\n \u003ccode\u003e\u003ca\u003eassocWhereQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(a -\u003e [Action])",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "function",
        "title": "assocWhereParam"
      },
      "index": {
        "description": "The query parameters for the query returned by assocWhereQuery",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "assocWhereParam",
        "normalized": "(a-\u003e[Action])",
        "package": "postgresql-orm",
        "partial": "Where Param",
        "signature": "(a-\u003e[Action])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:assocWhereQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eWHERE\u003c/code\u003e clause to find all the \u003ccode\u003eb\u003c/code\u003es associated with a\n particular \u003ccode\u003ea\u003c/code\u003e.  This can often be done more efficiently than\n through \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e.  The clause contains \u003ccode\u003e'?'\u003c/code\u003e characters\n which should be filled in by \u003ccode\u003e\u003ca\u003eassocWhereParam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "function",
        "title": "assocWhereQuery"
      },
      "index": {
        "description": "WHERE clause to find all the associated with particular This can often be done more efficiently than through assocSelect The clause contains characters which should be filled in by assocWhereParam",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "assocWhereQuery",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Where Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:belongsTo",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e.  Short for\n\u003c/p\u003e\u003cpre\u003e fst $ dbrefAssocs defaultDBRefInfo\n\u003c/pre\u003e\u003cp\u003eSee an example at \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association child parent",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#belongsTo",
        "fct-type": "function",
        "title": "belongsTo"
      },
      "index": {
        "description": "The inverse of has Short for fst dbrefAssocs defaultDBRefInfo See an example at has",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "belongsTo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:chainAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two associations into one, and project away the middle\n type.  (The middle type can still be mentioned in \u003ccode\u003eWHERE\u003c/code\u003e clauses.)\n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cpre\u003e data Author = Author {\n     authorId :: DBKey\n   } deriving (Show, Generic)\n instance Model Author where modelInfo = underscoreModelInfo \"author\"\n \n data Post = Post {\n     postId :: DBKey\n   , postAuthorId :: DBRef Author\n   } deriving (Show, Generic)\n instance Model Post where modelInfo = underscoreModelInfo \"post\"\n \n data Comment = Comment {\n     commentId :: DBKey\n   , commentPostId :: DBRef Post\n   } deriving (Show, Generic)\n instance Model Comment where modelInfo = underscoreModelInfo \"comment\"\n \n author_posts :: Association Author Post\n post_author :: Association Post Author\n (post_author, author_posts) = dbrefAssocs defaultDBRefInfo\n \n -- Could equally well use dbrefAssocs as above\n post_comments :: Association Post Comment\n post_comments = has\n\n comment_post :: Association Comment Post\n comment_post = belongsTo\n \n comment_author :: Association Comment Author\n comment_author = chainAssoc comment_post post_author\n \n author_comments :: Association Author Comment\n author_comments =  chainAssoc author_posts post_comments\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e Association b c -\u003e Association a c",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#chainAssoc",
        "fct-type": "function",
        "title": "chainAssoc"
      },
      "index": {
        "description": "Combine two associations into one and project away the middle type The middle type can still be mentioned in WHERE clauses An example data Author Author authorId DBKey deriving Show Generic instance Model Author where modelInfo underscoreModelInfo author data Post Post postId DBKey postAuthorId DBRef Author deriving Show Generic instance Model Post where modelInfo underscoreModelInfo post data Comment Comment commentId DBKey commentPostId DBRef Post deriving Show Generic instance Model Comment where modelInfo underscoreModelInfo comment author posts Association Author Post post author Association Post Author post author author posts dbrefAssocs defaultDBRefInfo Could equally well use dbrefAssocs as above post comments Association Post Comment post comments has comment post Association Comment Post comment post belongsTo comment author Association Comment Author comment author chainAssoc comment post post author author comments Association Author Comment author comments chainAssoc author posts post comments",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "chainAssoc",
        "normalized": "Association a b-\u003eAssociation b c-\u003eAssociation a c",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "Association a b-\u003eAssociation b c-\u003eAssociation a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:dbrefAssocs",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate both the child-parent and parent-child \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003es\n implied by a \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "GDBRefInfo rt child parent -\u003e (Association child parent, Association parent child)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#dbrefAssocs",
        "fct-type": "function",
        "title": "dbrefAssocs"
      },
      "index": {
        "description": "Generate both the child-parent and parent-child Association implied by GDBRefInfo",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "dbrefAssocs",
        "normalized": "GDBRefInfo a b c-\u003e(Association b c,Association c b)",
        "package": "postgresql-orm",
        "partial": "Assocs",
        "signature": "GDBRefInfo rt child parent-\u003e(Association child parent,Association parent child)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:dbrefQColumn",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral SQL for the database column storing the reference.\n This should be double-quoted and table-qualified, in case the\n column name is a reserved keyword, contains capital letters, or\n conflicts with the name of a column in the joined table.  An\n example would be:\n\u003c/p\u003e\u003cpre\u003e dbrefQColumn = \"\\\"table_name\\\".\\\"column_name\\\"\"\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "function",
        "title": "dbrefQColumn"
      },
      "index": {
        "description": "Literal SQL for the database column storing the reference This should be double-quoted and table-qualified in case the column name is reserved keyword contains capital letters or conflicts with the name of column in the joined table An example would be dbrefQColumn table name column name",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "dbrefQColumn",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "QColumn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:dbrefSelector",
      "description": {
        "fct-descr": "\u003cp\u003eField selector returning a reference.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(child -\u003e GDBRef reftype parent)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "function",
        "title": "dbrefSelector"
      },
      "index": {
        "description": "Field selector returning reference",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "dbrefSelector",
        "normalized": "(a-\u003eGDBRef b c)",
        "package": "postgresql-orm",
        "partial": "Selector",
        "signature": "(child-\u003eGDBRef reftype parent)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:defaultDBRefInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e from a model \u003ccode\u003echild\u003c/code\u003e that references\n \u003ccode\u003eparent\u003c/code\u003e.  For this to work, the \u003ccode\u003echild\u003c/code\u003e type must be an instance\n of \u003ccode\u003eGeneric\u003c/code\u003e and must contain exactly one field of the any of the\n following types:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGDBRef\u003c/a\u003e\u003c/code\u003e rt parent\u003c/code\u003e, which matches both \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e parent\u003c/code\u003e and\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e parent\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eMaybe (\u003ccode\u003e\u003ca\u003eGDBRef\u003c/a\u003e\u003c/code\u003e rt parent)\u003c/code\u003e, for cases where the reference\n   might be \u003ccode\u003eNULL\u003c/code\u003e.  Note, however, that an exception will be thrown\n   if you call \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e on a child whose reference is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eA special case arises when a Model contains a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e to itself.\n If you just wish to find parents and children given an existing\n structure (i.e., \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e), it is okay to declare an\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003e MyType MyType\u003c/code\u003e.  However, in this case attempts to\n use \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e will then fail.  To work around this problem, the\n parent must use a row alias.\n\u003c/p\u003e\u003cp\u003eNote that currently \u003cem\u003ealiasing the child will not work\u003c/em\u003e, since the\n \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e data structure will not contain a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e field, only the\n contents of the \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e data structure.  An example of doing this\n correctly (using \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebelongsTo\u003c/a\u003e\u003c/code\u003e, both of which wrap\n \u003ccode\u003edefaultDBRefInfo\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e data Bar = Bar {\n     barId :: !DBKey\n   , barName :: !String\n   , barParent :: !(Maybe (DBRef Bar))\n   } deriving (Show, Generic)\n instance Model Bar where modelInfo = underscoreModelInfo \"bar\"\n \n data ParentBar = ParentBar\n instance RowAlias ParentBar where rowAliasName _ = \"parent_bar\"\n \n toParent :: Association Bar (As ParentBar Bar)\n toParent = belongsTo\n \n toChild :: Association (As ParentBar Bar) Bar\n toChild = has\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBRefInfo child parent",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#defaultDBRefInfo",
        "fct-type": "function",
        "title": "defaultDBRefInfo"
      },
      "index": {
        "description": "Creates DBRefInfo from model child that references parent For this to work the child type must be an instance of Generic and must contain exactly one field of the any of the following types GDBRef rt parent which matches both DBRef parent and DBRefUnique parent Maybe GDBRef rt parent for cases where the reference might be NULL Note however that an exception will be thrown if you call findAssoc on child whose reference is Nothing special case arises when Model contains DBRef to itself If you just wish to find parents and children given an existing structure i.e findAssoc it is okay to declare an Association MyType MyType However in this case attempts to use assocSelect will then fail To work around this problem the parent must use row alias Note that currently aliasing the child will not work since the As data structure will not contain DBRef field only the contents of the As data structure An example of doing this correctly using has and belongsTo both of which wrap defaultDBRefInfo data Bar Bar barId DBKey barName String barParent Maybe DBRef Bar deriving Show Generic instance Model Bar where modelInfo underscoreModelInfo bar data ParentBar ParentBar instance RowAlias ParentBar where rowAliasName parent bar toParent Association Bar As ParentBar Bar toParent belongsTo toChild Association As ParentBar Bar Bar toChild has",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "defaultDBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:defaultJoinTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe default join table has the following fields:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ejtName\u003c/code\u003e is the name of the two models (in alphabetical order),\n separated by an \u003ccode\u003e'_'\u003c/code\u003e character.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ejtColumnA\u003c/a\u003e\u003c/code\u003e is the name of model \u003ccode\u003ea\u003c/code\u003e, an \u003ccode\u003e'_'\u003c/code\u003e character, and\n the name of the primary key column in table \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ejtColumnB\u003c/a\u003e\u003c/code\u003e is the name of model \u003ccode\u003eb\u003c/code\u003e, an \u003ccode\u003e'_'\u003c/code\u003e character, and\n the name of the primary key column in table \u003ccode\u003eb\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003edefaultJoinTable\u003c/a\u003e\u003c/code\u003e cannot create a default join table for\n joining a model to itself, as following these rules the two columns\n would have the same name.  If you wish to join a table to itself,\n you have two options:  First, you can define the join table and\n assign the column names manually.  This will permit you to call\n \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e, but you still will not be able to use \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e\n for more complex queries, since SQL does not permit joins between\n two tables with the same name.  The second option is to give one of\n the sides of the join table a row alias with \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e data ParentBar = ParentBar\n instance RowAlias ParentBar where rowAliasName _ = \"parent_bar\"\n \n selfJoinTable :: JoinTable Bar (As ParentBar Bar)\n selfJoinTable = defaultJoinTable\n \n selfJoin :: Association Bar (As ParentBar Bar)\n otherSelfJoin :: Association (As ParentBar Bar) Bar\n (selfJoin, otherSelfJoin) = jtAssocs selfJoinTable\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#defaultJoinTable",
        "fct-type": "function",
        "title": "defaultJoinTable"
      },
      "index": {
        "description": "The default join table has the following fields jtName is the name of the two models in alphabetical order separated by an character jtColumnA is the name of model an character and the name of the primary key column in table jtColumnB is the name of model an character and the name of the primary key column in table Note that defaultJoinTable cannot create default join table for joining model to itself as following these rules the two columns would have the same name If you wish to join table to itself you have two options First you can define the join table and assign the column names manually This will permit you to call findAssoc but you still will not be able to use assocSelect for more complex queries since SQL does not permit joins between two tables with the same name The second option is to give one of the sides of the join table row alias with As For example data ParentBar ParentBar instance RowAlias ParentBar where rowAliasName parent bar selfJoinTable JoinTable Bar As ParentBar Bar selfJoinTable defaultJoinTable selfJoin Association Bar As ParentBar Bar otherSelfJoin Association As ParentBar Bar Bar selfJoin otherSelfJoin jtAssocs selfJoinTable",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "defaultJoinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:findAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eFollow an association to return all of the \u003ccode\u003eb\u003c/code\u003es associated\n with a particular \u003ccode\u003ea\u003c/code\u003e.  The behavior is similar to:\n\u003c/p\u003e\u003cpre\u003e findAssoc' ab c a = dbSelect c $ assocWhere ab a\n\u003c/pre\u003e\u003cp\u003eBut if the first argument is a static association, this function\n may be marginally faster because it pre-renders most of the query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e Connection -\u003e a -\u003e IO [b]",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#findAssoc",
        "fct-type": "function",
        "title": "findAssoc"
      },
      "index": {
        "description": "Follow an association to return all of the associated with particular The behavior is similar to findAssoc ab dbSelect assocWhere ab But if the first argument is static association this function may be marginally faster because it pre-renders most of the query",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "findAssoc",
        "normalized": "Association a b-\u003eConnection-\u003ea-\u003eIO[b]",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "Association a b-\u003eConnection-\u003ea-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:has",
      "description": {
        "fct-descr": "\u003cp\u003eShort for\n\u003c/p\u003e\u003cpre\u003e snd $ dbrefAssocs defaultDBRefInfo\n\u003c/pre\u003e\u003cp\u003eNote the inverse \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003e is given by \u003ccode\u003e\u003ca\u003ebelongsTo\u003c/a\u003e\u003c/code\u003e.  For\n example, given the \u003ccode\u003eAuthor\u003c/code\u003e and \u003ccode\u003ePost\u003c/code\u003e models described in the\n documentation for \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e, in which each \u003ccode\u003ePost\u003c/code\u003e references an\n \u003ccode\u003eAuthor\u003c/code\u003e, you might say:\n\u003c/p\u003e\u003cpre\u003e author_post :: Association Author Post\n author_post = has\n\n post_author :: Association Post Author\n post_author = belongsTo\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association parent child",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#has",
        "fct-type": "function",
        "title": "has"
      },
      "index": {
        "description": "Short for snd dbrefAssocs defaultDBRefInfo Note the inverse Association is given by belongsTo For example given the Author and Post models described in the documentation for GDBRefInfo in which each Post references an Author you might say author post Association Author Post author post has post author Association Post Author post author belongsTo",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "has",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:joinTable",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a one-way association based on the default join table\n naming scheme described at \u003ccode\u003e\u003ca\u003edefaultJoinTable\u003c/a\u003e\u003c/code\u003e.  Defined as:\n\u003c/p\u003e\u003cpre\u003e joinTable = jtAssoc defaultJoinTable\n\u003c/pre\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e aToB :: Association A B\n aToB = joinTable\n\n bToA :: Association B A\n bToA = joinTable\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#joinTable",
        "fct-type": "function",
        "title": "joinTable"
      },
      "index": {
        "description": "Generate one-way association based on the default join table naming scheme described at defaultJoinTable Defined as joinTable jtAssoc defaultJoinTable For example aToB Association aToB joinTable bToA Association bToA joinTable",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "joinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtAdd",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an association between two models to a join table.  Returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the association was not already there.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Connection -\u003e a -\u003e b -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtAdd",
        "fct-type": "function",
        "title": "jtAdd"
      },
      "index": {
        "description": "Add an association between two models to join table Returns True if the association was not already there",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtAdd",
        "normalized": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool",
        "package": "postgresql-orm",
        "partial": "Add",
        "signature": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtAddStatement",
      "description": {
        "fct-descr": "\u003cp\u003eA SQL statement suitable for adding a pair to a join table.  Note\n that the statement takes two parameters (i.e., contains two \u003ccode\u003e'?'\u003c/code\u003e\n characters) corresponding to the primary keys of the two models\n being associated.  These parameters can be supplied by \u003ccode\u003e\u003ca\u003ejtParam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtAddStatement",
        "fct-type": "function",
        "title": "jtAddStatement"
      },
      "index": {
        "description": "SQL statement suitable for adding pair to join table Note that the statement takes two parameters i.e contains two characters corresponding to the primary keys of the two models being associated These parameters can be supplied by jtParam",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtAddStatement",
        "normalized": "JoinTable a b-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Add Statement",
        "signature": "JoinTable a b-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a one-way association from a \u003ccode\u003e\u003ca\u003eJoinTable\u003c/a\u003e\u003c/code\u003e.  Use\n \u003ccode\u003e\u003ca\u003ejtAssocs\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Association a b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtAssoc",
        "fct-type": "function",
        "title": "jtAssoc"
      },
      "index": {
        "description": "Generate one-way association from JoinTable Use jtAssocs instead",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtAssoc",
        "normalized": "JoinTable a b-\u003eAssociation a b",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "JoinTable a b-\u003eAssociation a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtAssocs",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the two associations implied by a \u003ccode\u003e\u003ca\u003eJoinTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e (Association a b, Association b a)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtAssocs",
        "fct-type": "function",
        "title": "jtAssocs"
      },
      "index": {
        "description": "Generate the two associations implied by JoinTable",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtAssocs",
        "normalized": "JoinTable a b-\u003e(Association a b,Association b a)",
        "package": "postgresql-orm",
        "partial": "Assocs",
        "signature": "JoinTable a b-\u003e(Association a b,Association b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtColumnA",
      "description": {
        "fct-descr": "\u003cp\u003eName of the column in table \u003ccode\u003e\u003ca\u003ejtTable\u003c/a\u003e\u003c/code\u003e that contains a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\n to model \u003ccode\u003ea\u003c/code\u003e.  (Not quoted or table-qualified.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "jtColumnA"
      },
      "index": {
        "description": "Name of the column in table jtTable that contains DBRef to model Not quoted or table-qualified",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtColumnA",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtColumnB",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ejtColumnA\u003c/a\u003e\u003c/code\u003e for model \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "jtColumnB"
      },
      "index": {
        "description": "Like jtColumnA for model",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtColumnB",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtFlip",
      "description": {
        "fct-descr": "\u003cp\u003eFlip a join table.  This doesn't change the name of the table\n (since the same join table is used in both directions, and the\n default join table name glues together the two model names in\n alphabetical order anyway).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e JoinTable b a",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtFlip",
        "fct-type": "function",
        "title": "jtFlip"
      },
      "index": {
        "description": "Flip join table This doesn change the name of the table since the same join table is used in both directions and the default join table name glues together the two model names in alphabetical order anyway",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtFlip",
        "normalized": "JoinTable a b-\u003eJoinTable b a",
        "package": "postgresql-orm",
        "partial": "Flip",
        "signature": "JoinTable a b-\u003eJoinTable b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtParam",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate parameters for \u003ccode\u003e\u003ca\u003ejtAddStatement\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejtRemoveStatement\u003c/a\u003e\u003c/code\u003e.\n The returned list is suitable for use as a \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e instance.  For\n example:\n\u003c/p\u003e\u003cpre\u003e execute conn (jtAddStatement my_join_table) (jtParam a b)\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e a -\u003e b -\u003e [Action]",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtParam",
        "fct-type": "function",
        "title": "jtParam"
      },
      "index": {
        "description": "Generate parameters for jtAddStatement and jtRemoveStatement The returned list is suitable for use as ToRow instance For example execute conn jtAddStatement my join table jtParam",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtParam",
        "normalized": "JoinTable a b-\u003ea-\u003eb-\u003e[Action]",
        "package": "postgresql-orm",
        "partial": "Param",
        "signature": "JoinTable a b-\u003ea-\u003eb-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtRemove",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an association from a join table.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the\n association was previously there.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Connection -\u003e a -\u003e b -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtRemove",
        "fct-type": "function",
        "title": "jtRemove"
      },
      "index": {
        "description": "Remove an association from join table Returns True if the association was previously there",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtRemove",
        "normalized": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool",
        "package": "postgresql-orm",
        "partial": "Remove",
        "signature": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtRemoveByRef",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an assocation from a join table when you don't have the\n target instances of the two models handy, but do have references.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Connection -\u003e GDBRef rt a -\u003e GDBRef rt b -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtRemoveByRef",
        "fct-type": "function",
        "title": "jtRemoveByRef"
      },
      "index": {
        "description": "Remove an assocation from join table when you don have the target instances of the two models handy but do have references",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtRemoveByRef",
        "normalized": "JoinTable a b-\u003eConnection-\u003eGDBRef c a-\u003eGDBRef c b-\u003eIO Bool",
        "package": "postgresql-orm",
        "partial": "Remove By Ref",
        "signature": "JoinTable a b-\u003eConnection-\u003eGDBRef rt a-\u003eGDBRef rt b-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtRemoveStatement",
      "description": {
        "fct-descr": "\u003cp\u003eA SQL statement for removing a pair from a join table.  Like\n \u003ccode\u003e\u003ca\u003ejtAddStatement\u003c/a\u003e\u003c/code\u003e, the query is parameterized by two primary keys.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtRemoveStatement",
        "fct-type": "function",
        "title": "jtRemoveStatement"
      },
      "index": {
        "description": "SQL statement for removing pair from join table Like jtAddStatement the query is parameterized by two primary keys",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtRemoveStatement",
        "normalized": "JoinTable a b-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Remove Statement",
        "signature": "JoinTable a b-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:jtTable",
      "description": {
        "fct-descr": "\u003cp\u003eName of the join table in the database.  (Not quoted.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "jtTable"
      },
      "index": {
        "description": "Name of the join table in the database Not quoted",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "jtTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Association.html#v:nestAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two associations into one.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Association",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e Association b c -\u003e Association a (b :. c)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#nestAssoc",
        "fct-type": "function",
        "title": "nestAssoc"
      },
      "index": {
        "description": "Combine two associations into one",
        "hierarchy": "Database PostgreSQL ORM Association",
        "module": "Database.PostgreSQL.ORM.Association",
        "name": "nestAssoc",
        "normalized": "Association a b-\u003eAssociation b c-\u003eAssociation a(b c)",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "Association a b-\u003eAssociation b c-\u003eAssociation a(b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating a table from a model.  These are mostly\n useful in development, for very rigid applications, or to compare\n what would be created against what is actually in the database.  In\n practice, production settings should create and update tables using\n migrations.\n\u003c/p\u003e\u003cp\u003eNote that often it is more interesting to see what would be created\n than to create an actual table.  For that reason, functions\n creating the statements are exposed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html",
        "fct-type": "module",
        "title": "CreateTable"
      },
      "index": {
        "description": "Functions for creating table from model These are mostly useful in development for very rigid applications or to compare what would be created against what is actually in the database In practice production settings should create and update tables using migrations Note that often it is more interesting to see what would be created than to create an actual table For that reason functions creating the statements are exposed",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "CreateTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Create Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#t:GDefTypes",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a helper class used to extract the row types.  You don't\n need to use this class.  If you are creating custom types, just\n declare an instance of \u003ccode\u003e\u003ca\u003eSqlType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html#GDefTypes",
        "fct-type": "class",
        "title": "GDefTypes"
      },
      "index": {
        "description": "This is helper class used to extract the row types You don need to use this class If you are creating custom types just declare an instance of SqlType",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "GDefTypes",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GDef Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#v:gDefTypes",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "f p -\u003e [ByteString]",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html#gDefTypes",
        "fct-type": "method",
        "title": "gDefTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "gDefTypes",
        "normalized": "a b-\u003e[ByteString]",
        "package": "postgresql-orm",
        "partial": "Def Types",
        "signature": "f p-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#v:jtCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a join table in the database.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e JoinTable a b -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html#jtCreate",
        "fct-type": "function",
        "title": "jtCreate"
      },
      "index": {
        "description": "Create join table in the database",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "jtCreate",
        "normalized": "Connection-\u003eJoinTable a b-\u003eIO Int",
        "package": "postgresql-orm",
        "partial": "Create",
        "signature": "Connection-\u003eJoinTable a b-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#v:jtCreateStatement",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the database table corresponding to a \u003ccode\u003e\u003ca\u003eJoinTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html#jtCreateStatement",
        "fct-type": "function",
        "title": "jtCreateStatement"
      },
      "index": {
        "description": "Create the database table corresponding to JoinTable",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "jtCreateStatement",
        "normalized": "JoinTable a b-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Create Statement",
        "signature": "JoinTable a b-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#v:modelCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a the database table for a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e a -\u003e IO Int64",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html#modelCreate",
        "fct-type": "function",
        "title": "modelCreate"
      },
      "index": {
        "description": "Create the database table for model",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "modelCreate",
        "normalized": "Connection-\u003ea-\u003eIO Int",
        "package": "postgresql-orm",
        "partial": "Create",
        "signature": "Connection-\u003ea-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-CreateTable.html#v:modelCreateStatement",
      "description": {
        "fct-descr": "\u003cp\u003eStatement for creating the table corresponding to a model.  Not\n strict in its argument.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.CreateTable",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-CreateTable.html#modelCreateStatement",
        "fct-type": "function",
        "title": "modelCreateStatement"
      },
      "index": {
        "description": "Statement for creating the table corresponding to model Not strict in its argument",
        "hierarchy": "Database PostgreSQL ORM CreateTable",
        "module": "Database.PostgreSQL.ORM.CreateTable",
        "name": "modelCreateStatement",
        "normalized": "a-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Create Statement",
        "signature": "a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html",
        "fct-type": "module",
        "title": "DBSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "DBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype that represents a connected cursor\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "Datatype that represents connected cursor",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "Cursor",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#t:DBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eA deconstructed SQL select statement that allows easier\n manipulation of individual terms.  Several functions are provided\n to combine the \u003ccode\u003e\u003ca\u003eselFields\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eselFrom\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eselWhere\u003c/a\u003e\u003c/code\u003e clauses of\n muliple \u003ccode\u003eDBSelect\u003c/code\u003e structures.  Other clauses may be discarded when\n combining queries with join operations.  Hence it is advisable to\n set the other clauses at the end (or, if you set these fields, to\n collapse your \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e structure into a subquery using\n \u003ccode\u003e\u003ca\u003edbProject'\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "data",
        "title": "DBSelect"
      },
      "index": {
        "description": "deconstructed SQL select statement that allows easier manipulation of individual terms Several functions are provided to combine the selFields selFrom and selWhere clauses of muliple DBSelect structures Other clauses may be discarded when combining queries with join operations Hence it is advisable to set the other clauses at the end or if you set these fields to collapse your DBSelect structure into subquery using dbProject",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "DBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#t:FromClause",
      "description": {
        "fct-descr": "\u003cp\u003eAs it's name would suggest, a \u003ccode\u003eFromClause\u003c/code\u003e is the part of a query\n between the \u003ccode\u003eFROM\u003c/code\u003e keyword and the \u003ccode\u003eWHERE\u003c/code\u003e keyword.  It can consist\n of simple table names, \u003ccode\u003eJOIN\u003c/code\u003e operations, and parenthesized\n subqueries.\n\u003c/p\u003e\u003cp\u003eFrom clauses are represented in a more structured way than the\n other fields so as to allow the possibility of collapsing join\n relations.  For instance, given a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e (A :. B)\u003c/code\u003e and a\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e (B :. C)\u003c/code\u003e, it is desirable to be able to generate a\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e (A :. B :. C)\u003c/code\u003e in which each pair of terms involving\n \u003ccode\u003eB\u003c/code\u003e in the three-way relation is constrained according to the\n original two queries.  This functionality is provided by \u003ccode\u003e\u003ca\u003edbNest\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003edbChain\u003c/a\u003e\u003c/code\u003e, but it requires the ability to locate and replace\n the instance of type \u003ccode\u003eB\u003c/code\u003e in one \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003eFromClause\u003c/code\u003e of\n the other \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efcCanonical\u003c/a\u003e\u003c/code\u003e field is a canonical name of each type, which by\n convention is the quoted and fully-qualified table name.  Comparing\n \u003ccode\u003e\u003ca\u003efcCanonical\u003c/a\u003e\u003c/code\u003e is somewhat of a hack, and happens entirely at\n runtime.  It would be nicer to do this at compile time, but doing\n so would require language extensions such as \u003ccode\u003eGADTs\u003c/code\u003e of\n \u003ccode\u003eFunctionalDependencies\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "data",
        "title": "FromClause"
      },
      "index": {
        "description": "As it name would suggest FromClause is the part of query between the FROM keyword and the WHERE keyword It can consist of simple table names JOIN operations and parenthesized subqueries From clauses are represented in more structured way than the other fields so as to allow the possibility of collapsing join relations For instance given DBSelect and DBSelect it is desirable to be able to generate DBSelect in which each pair of terms involving in the three-way relation is constrained according to the original two queries This functionality is provided by dbNest and dbChain but it requires the ability to locate and replace the instance of type in one DBSelect with the FromClause of the other DBSelect The fcCanonical field is canonical name of each type which by convention is the quoted and fully-qualified table name Comparing fcCanonical is somewhat of hack and happens entirely at runtime It would be nicer to do this at compile time but doing so would require language extensions such as GADTs of FunctionalDependencies",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "FromClause",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "From Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:Cursor",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Cursor",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#Cursor",
        "fct-type": "function",
        "title": "Cursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "Cursor",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:DBSelect",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "DBSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "DBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:FromJoin",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "FromJoin",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "FromJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "FromJoin",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "From Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:FromModel",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "FromModel",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "FromModel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "FromModel",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "From Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:addExpression",
      "description": {
        "fct-descr": "\u003cp\u003eAdd one or more comma-separated expressions to \u003ccode\u003e\u003ca\u003eselFields\u003c/a\u003e\u003c/code\u003e that\n produce column values without any corresponding relation in the\n \u003ccode\u003eFROM\u003c/code\u003e clause.  Type \u003ccode\u003er\u003c/code\u003e is the type into which the expression is\n to be parsed.  Generally this will be an instance of \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e that\n is a degenerate model (e.g., \u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e, or a tuple).\n\u003c/p\u003e\u003cp\u003eFor example, to rank results by the field \u003ccode\u003evalue\u003c/code\u003e and compute the\n fraction of overall value they contribute:\n\u003c/p\u003e\u003cpre\u003e r \u003c- dbSelect c $ addExpression\n        \"rank() OVER (ORDER BY value), value::float4/SUM(value) OVER ()\"\n        modelDBSelect\n          :: IO [Bar :. (Int, Double)]\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e DBSelect a -\u003e DBSelect (a :. r)",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#addExpression",
        "fct-type": "function",
        "title": "addExpression"
      },
      "index": {
        "description": "Add one or more comma-separated expressions to selFields that produce column values without any corresponding relation in the FROM clause Type is the type into which the expression is to be parsed Generally this will be an instance of FromRow that is degenerate model e.g Only or tuple For example to rank results by the field value and compute the fraction of overall value they contribute dbSelect addExpression rank OVER ORDER BY value value float4 SUM value OVER modelDBSelect IO Bar Int Double",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "addExpression",
        "normalized": "Query-\u003eDBSelect a-\u003eDBSelect(a b)",
        "package": "postgresql-orm",
        "partial": "Expression",
        "signature": "Query-\u003eDBSelect a-\u003eDBSelect(a r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:addWhere",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a where clause, and pre-render parameters directly into the\n clause.  The argument \u003ccode\u003ep\u003c/code\u003e must have exactly as many fields as there\n are \u003ccode\u003e'?'\u003c/code\u003e characters in the \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.  Example:\n\u003c/p\u003e\u003cpre\u003e bars \u003c- dbSelect c $ addWhere \"bar_id = ?\" (Only target_id) $\n                      (modelDBSelect :: DBSelect Bar)\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e p -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#addWhere",
        "fct-type": "function",
        "title": "addWhere"
      },
      "index": {
        "description": "Add where clause and pre-render parameters directly into the clause The argument must have exactly as many fields as there are characters in the Query Example bars dbSelect addWhere bar id Only target id modelDBSelect DBSelect Bar",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "addWhere",
        "normalized": "Query-\u003ea-\u003eDBSelect b-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": "Query-\u003ep-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:addWhere_",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a where clause verbatim to a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.  The clause must\n \u003cem\u003enot\u003c/em\u003e contain the \u003ccode\u003eWHERE\u003c/code\u003e keyword (which is added automatically by\n \u003ccode\u003eaddWhere_\u003c/code\u003e if needed).  If the \u003ccode\u003eDBSelect\u003c/code\u003e has existing \u003ccode\u003eWHERE\u003c/code\u003e\n clauses, the new clause is appended with \u003ccode\u003eAND\u003c/code\u003e.  If the query\n contains any \u003ccode\u003e'?'\u003c/code\u003e characters, they will be rendered into the\n query and matching parameters will later have to be filled in via a\n call to \u003ccode\u003e\u003ca\u003edbSelectParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#addWhere_",
        "fct-type": "function",
        "title": "addWhere_"
      },
      "index": {
        "description": "Add where clause verbatim to DBSelect The clause must not contain the WHERE keyword which is added automatically by addWhere if needed If the DBSelect has existing WHERE clauses the new clause is appended with AND If the query contains any characters they will be rendered into the query and matching parameters will later have to be filled in via call to dbSelectParams",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "addWhere_",
        "normalized": "Query-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": "Query-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:buildDBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a rendered version of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.  This\n can save one string copy if you want to embed one query inside\n another as a subquery, as done by \u003ccode\u003e\u003ca\u003edbProject'\u003c/a\u003e\u003c/code\u003e, and thus need to\n parenthesize it.  However, the function is probably not a useful\n for end users.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a -\u003e Builder",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#buildDBSelect",
        "fct-type": "function",
        "title": "buildDBSelect"
      },
      "index": {
        "description": "Create Builder for rendered version of DBSelect This can save one string copy if you want to embed one query inside another as subquery as done by dbProject and thus need to parenthesize it However the function is probably not useful for end users",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "buildDBSelect",
        "normalized": "DBSelect a-\u003eBuilder",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": "DBSelect a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:curCache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "IORef [a]",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#Cursor",
        "fct-type": "function",
        "title": "curCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "curCache",
        "normalized": "IORef[a]",
        "package": "postgresql-orm",
        "partial": "Cache",
        "signature": "IORef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:curChunkSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#Cursor",
        "fct-type": "function",
        "title": "curChunkSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "curChunkSize",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Chunk Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:curConn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Connection",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#Cursor",
        "fct-type": "function",
        "title": "curConn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "curConn",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:curName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#Cursor",
        "fct-type": "function",
        "title": "curName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "curName",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:curNext",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the next \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e for the underlying \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e. If the cache has\n prefetched values, dbNext will return the head of the cache without querying\n the database. Otherwise, it will prefetch the next 256 values, return the\n first, and store the rest in the cache.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Cursor a -\u003e IO (Maybe a)",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#curNext",
        "fct-type": "function",
        "title": "curNext"
      },
      "index": {
        "description": "Fetch the next Model for the underlying Cursor If the cache has prefetched values dbNext will return the head of the cache without querying the database Otherwise it will prefetch the next values return the first and store the rest in the cache",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "curNext",
        "normalized": "Cursor a-\u003eIO(Maybe a)",
        "package": "postgresql-orm",
        "partial": "Next",
        "signature": "Cursor a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:curSelect",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e for the given \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e DBSelect a -\u003e IO (Cursor a)",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#curSelect",
        "fct-type": "function",
        "title": "curSelect"
      },
      "index": {
        "description": "Create Cursor for the given DBSelect",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "curSelect",
        "normalized": "Connection-\u003eDBSelect a-\u003eIO(Cursor a)",
        "package": "postgresql-orm",
        "partial": "Select",
        "signature": "Connection-\u003eDBSelect a-\u003eIO(Cursor a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbChain",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edbNest\u003c/a\u003e\u003c/code\u003e, but projects away the middle type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect (a :. b) -\u003e DBSelect (b :. c) -\u003e DBSelect (a :. c)",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbChain",
        "fct-type": "function",
        "title": "dbChain"
      },
      "index": {
        "description": "Like dbNest but projects away the middle type",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbChain",
        "normalized": "DBSelect(a b)-\u003eDBSelect(b c)-\u003eDBSelect(a c)",
        "package": "postgresql-orm",
        "partial": "Chain",
        "signature": "DBSelect(a b)-\u003eDBSelect(b c)-\u003eDBSelect(a c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbFold",
      "description": {
        "fct-descr": "\u003cp\u003eStreams results of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e and consumes them using a left-fold. Uses\n default settings for \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e (batch size is 256 rows).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e (b -\u003e model -\u003e b) -\u003e b -\u003e DBSelect model -\u003e IO b",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbFold",
        "fct-type": "function",
        "title": "dbFold"
      },
      "index": {
        "description": "Streams results of DBSelect and consumes them using left-fold Uses default settings for Cursor batch size is rows",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbFold",
        "normalized": "Connection-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eDBSelect b-\u003eIO a",
        "package": "postgresql-orm",
        "partial": "Fold",
        "signature": "Connection-\u003e(b-\u003emodel-\u003eb)-\u003eb-\u003eDBSelect model-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbFoldM",
      "description": {
        "fct-descr": "\u003cp\u003eStreams results of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e and consumes them using a monadic\n left-fold. Uses default settings for \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e (batch size is 256 rows).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e (b -\u003e model -\u003e m b) -\u003e b -\u003e DBSelect model -\u003e m b",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbFoldM",
        "fct-type": "function",
        "title": "dbFoldM"
      },
      "index": {
        "description": "Streams results of DBSelect and consumes them using monadic left-fold Uses default settings for Cursor batch size is rows",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbFoldM",
        "normalized": "Connection-\u003e(a-\u003eb-\u003ec a)-\u003ea-\u003eDBSelect b-\u003ec a",
        "package": "postgresql-orm",
        "partial": "Fold",
        "signature": "Connection-\u003e(b-\u003emodel-\u003em b)-\u003eb-\u003eDBSelect model-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbFoldM_",
      "description": {
        "fct-descr": "\u003cp\u003eStreams results of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e and consumes them using a monadic\n left-fold. Uses default settings for \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e (batch size is 256 rows).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e (model -\u003e m ()) -\u003e DBSelect model -\u003e m ()",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbFoldM_",
        "fct-type": "function",
        "title": "dbFoldM_"
      },
      "index": {
        "description": "Streams results of DBSelect and consumes them using monadic left-fold Uses default settings for Cursor batch size is rows",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbFoldM_",
        "normalized": "Connection-\u003e(a-\u003eb())-\u003eDBSelect a-\u003eb()",
        "package": "postgresql-orm",
        "partial": "Fold",
        "signature": "Connection-\u003e(model-\u003em())-\u003eDBSelect model-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbJoin",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a join of the \u003ccode\u003e\u003ca\u003eselFields\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eselFrom\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eselWhere\u003c/a\u003e\u003c/code\u003e\n clauses of two \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e queries.  Other fields are simply taken\n from the second \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e, meaning fields such as \u003ccode\u003e\u003ca\u003eselWith\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eselGroupBy\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eselOrderBy\u003c/a\u003e\u003c/code\u003e in the in the first \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e are\n entirely ignored.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a-\u003e Query-\u003e DBSelect b-\u003e Query-\u003e DBSelect (a :. b)",
        "fct-type": "function",
        "title": "dbJoin"
      },
      "index": {
        "description": "Create join of the selFields selFrom and selWhere clauses of two DBSelect queries Other fields are simply taken from the second DBSelect meaning fields such as selWith selGroupBy and selOrderBy in the in the first DBSelect are entirely ignored",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbJoin",
        "normalized": "DBSelect a-\u003eQuery-\u003eDBSelect b-\u003eQuery-\u003eDBSelect(a b)",
        "package": "postgresql-orm",
        "partial": "Join",
        "signature": "DBSelect a-\u003eQuery-\u003eDBSelect b-\u003eQuery-\u003eDBSelect(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbJoinModels",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003edbJoin\u003c/a\u003e\u003c/code\u003e that uses \u003ccode\u003e\u003ca\u003emodelDBSelect\u003c/a\u003e\u003c/code\u003e for the joined\n tables.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query-\u003e Query-\u003e DBSelect (a :. b)",
        "fct-type": "function",
        "title": "dbJoinModels"
      },
      "index": {
        "description": "version of dbJoin that uses modelDBSelect for the joined tables",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbJoinModels",
        "normalized": "Query-\u003eQuery-\u003eDBSelect(a b)",
        "package": "postgresql-orm",
        "partial": "Join Models",
        "signature": "Query-\u003eQuery-\u003eDBSelect(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbNest",
      "description": {
        "fct-descr": "\u003cp\u003eNest two type-compatible \u003ccode\u003eJOIN\u003c/code\u003e queries.  As with \u003ccode\u003e\u003ca\u003edbJoin\u003c/a\u003e\u003c/code\u003e,\n fields of the first \u003ccode\u003eJOIN\u003c/code\u003e (the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e (a :. b)\u003c/code\u003e) other than\n \u003ccode\u003e\u003ca\u003eselFields\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eselFrom\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eselWhere\u003c/a\u003e\u003c/code\u003e are entirely ignored.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect (a :. b) -\u003e DBSelect (b :. c) -\u003e DBSelect (a :. (b :. c))",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbNest",
        "fct-type": "function",
        "title": "dbNest"
      },
      "index": {
        "description": "Nest two type-compatible JOIN queries As with dbJoin fields of the first JOIN the DBSelect other than selFields selFrom and selWhere are entirely ignored",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbNest",
        "normalized": "DBSelect(a b)-\u003eDBSelect(b c)-\u003eDBSelect(a(b c))",
        "package": "postgresql-orm",
        "partial": "Nest",
        "signature": "DBSelect(a b)-\u003eDBSelect(b c)-\u003eDBSelect(a(b c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbProject",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict the fields returned by a DBSelect to be those of a\n single \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e.  It only makes sense to do this if \u003ccode\u003ea\u003c/code\u003e is part\n of \u003ccode\u003esomething_containing_a\u003c/code\u003e, but no static check is performed that\n this is the case.  If you \u003ccode\u003edbProject\u003c/code\u003e a type that doesn't make\n sense, you will get a runtime error from a failed database query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect something_containing_a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbProject",
        "fct-type": "function",
        "title": "dbProject"
      },
      "index": {
        "description": "Restrict the fields returned by DBSelect to be those of single Model It only makes sense to do this if is part of something containing but no static check is performed that this is the case If you dbProject type that doesn make sense you will get runtime error from failed database query",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbProject",
        "normalized": "DBSelect a-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Project",
        "signature": "DBSelect something_containing_a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbProject-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edbProject\u003c/a\u003e\u003c/code\u003e, but renders the entire input \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e as a\n subquery.  Hence, you can no longer mention fields of models other\n than \u003ccode\u003ea\u003c/code\u003e that might be involved in joins.  The two advantages of\n this approach are 1) that you can once again join to tables that\n were part of the original query without worrying about row aliases,\n and 2) that all terms of the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e will be faithrully rendered\n into the subquery (whereas otherwise they could get dropped by join\n operations).  Generally you will still want to use \u003ccode\u003e\u003ca\u003edbProject\u003c/a\u003e\u003c/code\u003e, but\n \u003ccode\u003edbProject'\u003c/code\u003e is available when needed.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect something_containing_a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbProject%27",
        "fct-type": "function",
        "title": "dbProject'"
      },
      "index": {
        "description": "Like dbProject but renders the entire input DBSelect as subquery Hence you can no longer mention fields of models other than that might be involved in joins The two advantages of this approach are that you can once again join to tables that were part of the original query without worrying about row aliases and that all terms of the DBSelect will be faithrully rendered into the subquery whereas otherwise they could get dropped by join operations Generally you will still want to use dbProject but dbProject is available when needed",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbProject'",
        "normalized": "DBSelect a-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Project'",
        "signature": "DBSelect something_containing_a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbSelect",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e query and return the resulting models.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e DBSelect a -\u003e IO [a]",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbSelect",
        "fct-type": "function",
        "title": "dbSelect"
      },
      "index": {
        "description": "Run DBSelect query and return the resulting models",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbSelect",
        "normalized": "Connection-\u003eDBSelect a-\u003eIO[a]",
        "package": "postgresql-orm",
        "partial": "Select",
        "signature": "Connection-\u003eDBSelect a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:dbSelectParams",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e query on parameters.  The number of \u003ccode\u003e'?'\u003c/code\u003e\n characters embedeed in various fields of the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e must\n exactly match the number of fields in parameter type \u003ccode\u003ep\u003c/code\u003e.  Note the\n order of arguments is such that the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e can be pre-rendered\n and the parameters supplied later.  Hence, you should use this\n version when the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e is static.  For dynamically modified\n \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e structures, you may prefer \u003ccode\u003e\u003ca\u003edbSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a -\u003e Connection -\u003e p -\u003e IO [a]",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbSelectParams",
        "fct-type": "function",
        "title": "dbSelectParams"
      },
      "index": {
        "description": "Run DBSelect query on parameters The number of characters embedeed in various fields of the DBSelect must exactly match the number of fields in parameter type Note the order of arguments is such that the DBSelect can be pre-rendered and the parameters supplied later Hence you should use this version when the DBSelect is static For dynamically modified DBSelect structures you may prefer dbSelect",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "dbSelectParams",
        "normalized": "DBSelect a-\u003eConnection-\u003eb-\u003eIO[a]",
        "package": "postgresql-orm",
        "partial": "Select Params",
        "signature": "DBSelect a-\u003eConnection-\u003ep-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:emptyDBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e structure with keyword \u003ccode\u003e\"SELECT\"\u003c/code\u003e and everything\n else empty.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#emptyDBSelect",
        "fct-type": "function",
        "title": "emptyDBSelect"
      },
      "index": {
        "description": "DBSelect structure with keyword SELECT and everything else empty",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "emptyDBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:expressionDBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e for one or more comma-separated expressions, rather\n than for a table.  For example, to issue the query \u003ccode\u003e\"SELECT\n lastval()\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e lastval :: DBSelect (Only DBKeyType)\n lastval = expressionDBSelect \"lastval ()\"\n\n   ...\n   [just_inserted_id] \u003c- dbSelect conn lastval\n\u003c/pre\u003e\u003cp\u003eOn the other hand, for such a simple expression, you might as well\n call \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e directly.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e DBSelect r",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#expressionDBSelect",
        "fct-type": "function",
        "title": "expressionDBSelect"
      },
      "index": {
        "description": "DBSelect for one or more comma-separated expressions rather than for table For example to issue the query SELECT lastval lastval DBSelect Only DBKeyType lastval expressionDBSelect lastval just inserted id dbSelect conn lastval On the other hand for such simple expression you might as well call query directly",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "expressionDBSelect",
        "normalized": "Query-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": "Query-\u003eDBSelect r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:fcCanonical",
      "description": {
        "fct-descr": "\u003cp\u003eCanonical name of the table or join relation represented by\n this term.  For \u003ccode\u003eJOIN\u003c/code\u003e terms, this is always the \u003ccode\u003eCROSS JOIN\u003c/code\u003e\n of the canonical names of \u003ccode\u003e\u003ca\u003efcLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efcRight\u003c/a\u003e\u003c/code\u003e.  This means\n one can locate a join given only it's type (e.g., the canonical\n name for \u003ccode\u003eA :. B\u003c/code\u003e is always \u003ccode\u003e\"a CROSS JOIN b\"\u003c/code\u003e), but it does\n mean you have to be careful not accidentally to merge two\n different joins on the same types.  For this reason it may be\n safest always to have type \u003ccode\u003eb\u003c/code\u003e be a single table in \u003ccode\u003e\u003ca\u003edbNest\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003edbChain\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "fcCanonical"
      },
      "index": {
        "description": "Canonical name of the table or join relation represented by this term For JOIN terms this is always the CROSS JOIN of the canonical names of fcLeft and fcRight This means one can locate join given only it type e.g the canonical name for is always CROSS JOIN but it does mean you have to be careful not accidentally to merge two different joins on the same types For this reason it may be safest always to have type be single table in dbNest and dbChain",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "fcCanonical",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Canonical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:fcJoinOp",
      "description": {
        "fct-descr": "\u003cp\u003eUsually \u003ccode\u003e\"JOIN\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "fcJoinOp"
      },
      "index": {
        "description": "Usually JOIN",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "fcJoinOp",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:fcLeft",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!FromClause",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "fcLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "fcLeft",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:fcOnClause",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eON\u003c/code\u003e or \u003ccode\u003eUSING\u003c/code\u003e clause (or empty)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "fcOnClause"
      },
      "index": {
        "description": "ON or USING clause or empty",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "fcOnClause",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "On Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:fcRight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!FromClause",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "fcRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "fcRight",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:fcVerbatim",
      "description": {
        "fct-descr": "\u003cp\u003eVerbatim SQL for a table, table \u003ccode\u003eAS\u003c/code\u003e\n alias, or parenthesized subquery.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#FromClause",
        "fct-type": "function",
        "title": "fcVerbatim"
      },
      "index": {
        "description": "Verbatim SQL for table table AS alias or parenthesized subquery",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "fcVerbatim",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Verbatim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:modelDBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e that returns all rows of a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#modelDBSelect",
        "fct-type": "function",
        "title": "modelDBSelect"
      },
      "index": {
        "description": "DBSelect that returns all rows of model",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "modelDBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:renderDBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e suitable for the \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#renderDBSelect",
        "fct-type": "function",
        "title": "renderDBSelect"
      },
      "index": {
        "description": "Turn DBSelect into Query suitable for the query or query functions",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "renderDBSelect",
        "normalized": "DBSelect a-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": "DBSelect a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selFields",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selFrom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!FromClause",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selFrom",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selGroupBy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selGroupBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selGroupBy",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Group By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selHaving",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selHaving"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selHaving",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Having",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selLimit",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selOffset",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selOrderBy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selOrderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selOrderBy",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Order By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selSelectKeyword",
      "description": {
        "fct-descr": "\u003cp\u003eBy default \u003ccode\u003e\"SELECT\"\u003c/code\u003e, but might usefully be set to\n something else such as \u003ccode\u003e\"SELECT DISTINCT\"\u003c/code\u003e in some\n situations.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selSelectKeyword"
      },
      "index": {
        "description": "By default SELECT but might usefully be set to something else such as SELECT DISTINCT in some situations",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selSelectKeyword",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Select Keyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selWhere",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selWhere"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selWhere",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selWhereKeyword",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty by default, but set to \u003ccode\u003e\"WHERE\"\u003c/code\u003e if any \u003ccode\u003eWHERE\u003c/code\u003e\n clauses are added to the \u003ccode\u003e\u003ca\u003eselWhere\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selWhereKeyword"
      },
      "index": {
        "description": "Empty by default but set to WHERE if any WHERE clauses are added to the selWhere field",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selWhereKeyword",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Where Keyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:selWith",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "selWith",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:setLimit",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eLIMIT\u003c/code\u003e clause of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Int -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#setLimit",
        "fct-type": "function",
        "title": "setLimit"
      },
      "index": {
        "description": "Set the LIMIT clause of DBSelect",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "setLimit",
        "normalized": "Int-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Limit",
        "signature": "Int-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:setOffset",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eOFFSET\u003c/code\u003e clause of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Int -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#setOffset",
        "fct-type": "function",
        "title": "setOffset"
      },
      "index": {
        "description": "Set the OFFSET clause of DBSelect",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "setOffset",
        "normalized": "Int-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Offset",
        "signature": "Int-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-DBSelect.html#v:setOrderBy",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eORDER BY\u003c/code\u003e clause of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.  Example:\n\u003c/p\u003e\u003cpre\u003e dbSelect c $ setOrderBy \"\\\"employeeName\\\" DESC NULLS FIRST\" $\n                modelDBSelect\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.DBSelect",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#setOrderBy",
        "fct-type": "function",
        "title": "setOrderBy"
      },
      "index": {
        "description": "Set the ORDER BY clause of DBSelect Example dbSelect setOrderBy employeeName DESC NULLS FIRST modelDBSelect",
        "hierarchy": "Database PostgreSQL ORM DBSelect",
        "module": "Database.PostgreSQL.ORM.DBSelect",
        "name": "setOrderBy",
        "normalized": "Query-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Order By",
        "signature": "Query-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main database ORM interface. This module contains\n functionality for moving a Haskell data structure in and out of a\n database table.\n\u003c/p\u003e\u003cp\u003eThe most important feature is the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e class, which encodes a\n typed database interface (i.e., the ORM layer). This class has a\n default implementation for types that are members of the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\n class (using GHC's \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension), provided the\n following conditions hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The data type must have a single constructor that is defined\n      using record selector syntax.\n\u003c/li\u003e\u003cli\u003e The very first field of the data type must be a \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e to\n      represent the primary key.  Other orders will cause a\n      compilation error.\n\u003c/li\u003e\u003cli\u003e Every field of the data structure must be an instance of\n      \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf these three conditions hold and your database naming scheme\n follows the conventions of \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e--namely that the\n table name is the same as the type name with the first character\n downcased, and the field names are the same as the column\n names--then it is reasonable to have a completely empty (default)\n instance declaration:\n\u003c/p\u003e\u003cpre\u003e   data MyType = MyType { myKey :: !DBKey\n                        , myName :: !S.ByteString\n                        , myCamelCase :: !Int\n                        , ...\n                        } deriving (Show, Generic)\n   instance Model MyType\n\u003c/pre\u003e\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e method is called \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e. You\n may wish to use almost all of the defaults, but tweak a few things.\n This is easily accomplished by overriding a few fields of the\n default structure. For example, suppose your database columns use\n exactly the same name as your Haskell field names, but the name of\n your database table is not the same as the name of the Haskell data\n type. You can override the database table name (field \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e)\n as follows:\n\u003c/p\u003e\u003cpre\u003e   instance Model MyType where\n       modelInfo = defaultModelInfo { modelTable = \"my_type\" }\n\u003c/pre\u003e\u003cp\u003eFinally, if you dislike the conventions followed by\n \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e, you can simply implement an alternate pattern.\n An example of this is \u003ccode\u003e\u003ca\u003eunderscoreModelInfo\u003c/a\u003e\u003c/code\u003e, which strips a prefix\n off every field name and converts everything from camel-case to\n underscore notation:\n\u003c/p\u003e\u003cpre\u003e   instance Model MyType where\n       modelInfo = underscoreModelInfo \"my\"\n\u003c/pre\u003e\u003cp\u003eThe above code will associate \u003ccode\u003eMyType\u003c/code\u003e with a database table\n \u003ccode\u003emy_type\u003c/code\u003e having column names \u003ccode\u003ekey\u003c/code\u003e, \u003ccode\u003ename\u003c/code\u003e, \u003ccode\u003ecamel_case\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eYou can implement other patterns like \u003ccode\u003e\u003ca\u003eunderscoreModelInfo\u003c/a\u003e\u003c/code\u003e by\n calling \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e and modifying the results.\n Alternatively, you can directly call the lower-level functions from\n which \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e is built (\u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003edefaultModelColumns\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "The main database ORM interface This module contains functionality for moving Haskell data structure in and out of database table The most important feature is the Model class which encodes typed database interface i.e the ORM layer This class has default implementation for types that are members of the Generic class using GHC DeriveGeneric extension provided the following conditions hold The data type must have single constructor that is defined using record selector syntax The very first field of the data type must be DBKey to represent the primary key Other orders will cause compilation error Every field of the data structure must be an instance of FromField and ToField If these three conditions hold and your database naming scheme follows the conventions of defaultModelInfo namely that the table name is the same as the type name with the first character downcased and the field names are the same as the column names--then it is reasonable to have completely empty default instance declaration data MyType MyType myKey DBKey myName S.ByteString myCamelCase Int deriving Show Generic instance Model MyType The default modelInfo method is called defaultModelInfo You may wish to use almost all of the defaults but tweak few things This is easily accomplished by overriding few fields of the default structure For example suppose your database columns use exactly the same name as your Haskell field names but the name of your database table is not the same as the name of the Haskell data type You can override the database table name field modelTable as follows instance Model MyType where modelInfo defaultModelInfo modelTable my type Finally if you dislike the conventions followed by defaultModelInfo you can simply implement an alternate pattern An example of this is underscoreModelInfo which strips prefix off every field name and converts everything from camel-case to underscore notation instance Model MyType where modelInfo underscoreModelInfo my The above code will associate MyType with database table my type having column names key name camel case etc You can implement other patterns like underscoreModelInfo by calling defaultModelInfo and modifying the results Alternatively you can directly call the lower-level functions from which defaultModelInfo is built defaultModelTable defaultModelColumns defaultModelGetPrimaryKey",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "Model",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:As",
      "description": {
        "fct-descr": "\u003cp\u003eThe newtype \u003ccode\u003eAs\u003c/code\u003e can be wrapped around an existing type to give\n it a table name alias in a query.  This is necessary when a model\n is being joined with itself, to distinguish the two joined\n instances of the same table.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata X = X\ninstance \u003ccode\u003e\u003ca\u003eRowAlias\u003c/a\u003e\u003c/code\u003e X where rowAliasName = const \"x\"\n\n  ...\n    r \u003c- \u003ccode\u003edbSelect\u003c/code\u003e c $ addWhere_ \"bar.bar_key = x.bar_parent\" modelDBSelect\n         :: IO [Bar :. As X Bar]\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#As",
        "fct-type": "newtype",
        "title": "As"
      },
      "index": {
        "description": "The newtype As can be wrapped around an existing type to give it table name alias in query This is necessary when model is being joined with itself to distinguish the two joined instances of the same table For example LANGUAGE OverloadedStrings data instance RowAlias where rowAliasName const dbSelect addWhere bar.bar key x.bar parent modelDBSelect IO Bar As Bar",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "As",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:DBKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the Haskell data structure field containing a model's\n primary key.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e must have exactly one \u003ccode\u003eDBKey\u003c/code\u003e, and the \u003ccode\u003eDBKey\u003c/code\u003e must\n be the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's very first field in the Haskel data type\n definition.  (The ordering is enforced by\n \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e, which, through use of the\n \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension, fails to compile when the first field is\n not a \u003ccode\u003eDBKey\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e stored in the database should have a unique non-null\n primary key.  However, the key is determined at the time the\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is inserted into the database.  While you are constructing\n a new \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e to insert, you will not have its key.  Hence, you\n should use the value \u003ccode\u003eNullKey\u003c/code\u003e to let the database chose the key.\n\u003c/p\u003e\u003cp\u003eIf you wish to store a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's primary key as a reference in\n another \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e, do not copy the \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e structure.  Use \u003ccode\u003e\u003ca\u003emkDBRef\u003c/a\u003e\u003c/code\u003e\n to convert the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's primary key to a foreign key reference.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKey",
        "fct-type": "data",
        "title": "DBKey"
      },
      "index": {
        "description": "The type of the Haskell data structure field containing model primary key Every Model must have exactly one DBKey and the DBKey must be the Model very first field in the Haskel data type definition The ordering is enforced by defaultModelGetPrimaryKey which through use of the DeriveGeneric extension fails to compile when the first field is not DBKey Each Model stored in the database should have unique non-null primary key However the key is determined at the time the Model is inserted into the database While you are constructing new Model to insert you will not have its key Hence you should use the value NullKey to let the database chose the key If you wish to store Model primary key as reference in another Model do not copy the DBKey structure Use mkDBRef to convert the Model primary key to foreign key reference",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "DBKey",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:DBKeyType",
      "description": {
        "fct-descr": "\u003cp\u003eA type large enough to hold database primary keys.  Do not use\n this type directly in your data structures.  Use \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e to hold a\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's primary key and \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e to reference the primary key of\n another model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKeyType",
        "fct-type": "type",
        "title": "DBKeyType"
      },
      "index": {
        "description": "type large enough to hold database primary keys Do not use this type directly in your data structures Use DBKey to hold Model primary key and DBRef to reference the primary key of another model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "DBKeyType",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBKey Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:DBRef",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBRef T\u003c/code\u003e represents a many-to-one relationship between tables. For\n example, if type \u003ccode\u003eA\u003c/code\u003e contains a \u003ccode\u003eDBRef B\u003c/code\u003e, then each \u003ccode\u003eB\u003c/code\u003e is associated\n with many \u003ccode\u003eA\u003c/code\u003e's. By contrast, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a one-to-one\n relationship.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDBRef\u003c/code\u003e is a type alias of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e.  The type \u003ccode\u003eDBRef T\u003c/code\u003e\n references an instance of type \u003ccode\u003eT\u003c/code\u003e by the primary key of its\n database row. The type argument \u003ccode\u003eT\u003c/code\u003e should be an instance of\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBRef",
        "fct-type": "type",
        "title": "DBRef"
      },
      "index": {
        "description": "DBRef represents many-to-one relationship between tables For example if type contains DBRef then each is associated with many By contrast DBRefUnique represents one-to-one relationship DBRef is type alias of kind The type DBRef references an instance of type by the primary key of its database row The type argument should be an instance of Model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "DBRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:DBRefUnique",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBRefUnique T\u003c/code\u003e represents a one-to-one relationship between types. For\n example, if type \u003ccode\u003eA\u003c/code\u003e contains a \u003ccode\u003eDBRefUnique B\u003c/code\u003e, then each \u003ccode\u003eA\u003c/code\u003e is associated\n with one (or at most one) \u003ccode\u003eB\u003c/code\u003e, and each \u003ccode\u003eB\u003c/code\u003e has one (or at most one) \u003ccode\u003eA\u003c/code\u003e\n associated with it.\n\u003c/p\u003e\u003cp\u003eBy contrast, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a many-to-one relationship.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBRefUnique",
        "fct-type": "type",
        "title": "DBRefUnique"
      },
      "index": {
        "description": "DBRefUnique represents one-to-one relationship between types For example if type contains DBRefUnique then each is associated with one or at most one and each has one or at most one associated with it By contrast DBRef represents many-to-one relationship",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "DBRefUnique",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:GColumns",
      "description": {
        "fct-descr": "\u003cp\u003eThis class extracts the field names of a Haskell data structure. Only\n defined for types with a single constructor that uses record syntax.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GColumns",
        "fct-type": "class",
        "title": "GColumns"
      },
      "index": {
        "description": "This class extracts the field names of Haskell data structure Only defined for types with single constructor that uses record syntax",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "GColumns",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GColumns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:GDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eMany operations can take either a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e\n (both of which consist internally of a \u003ccode\u003e\u003ca\u003eDBKeyType\u003c/a\u003e\u003c/code\u003e).  Hence, these\n two types are just type aliases to a generalized reference type\n \u003ccode\u003eGDBRef\u003c/code\u003e, where \u003ccode\u003eGDBRef\u003c/code\u003e's first type argument, \u003ccode\u003ereftype\u003c/code\u003e, is a\n phantom type denoting the flavor of reference (\u003ccode\u003e\u003ca\u003eNormalRef\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eUniqueRef\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GDBRef",
        "fct-type": "newtype",
        "title": "GDBRef"
      },
      "index": {
        "description": "Many operations can take either DBRef or DBRefUnique both of which consist internally of DBKeyType Hence these two types are just type aliases to generalized reference type GDBRef where GDBRef first type argument reftype is phantom type denoting the flavor of reference NormalRef or UniqueRef",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "GDBRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GDBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:GDatatypeName",
      "description": {
        "fct-descr": "\u003cp\u003eThis class returns the name of a datatype.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GDatatypeName",
        "fct-type": "class",
        "title": "GDatatypeName"
      },
      "index": {
        "description": "This class returns the name of datatype",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "GDatatypeName",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GDatatype Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:GFromRow",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GFromRow",
        "fct-type": "class",
        "title": "GFromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "GFromRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GFrom Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:GPrimaryKey0",
      "description": {
        "fct-descr": "\u003cp\u003eThis class extracts the first field in a data structure when the\n field is of type \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e.  If you get a compilation error because\n of this class, then move the \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e first in your data structure.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GPrimaryKey0",
        "fct-type": "class",
        "title": "GPrimaryKey0"
      },
      "index": {
        "description": "This class extracts the first field in data structure when the field is of type DBKey If you get compilation error because of this class then move the DBKey first in your data structure",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "GPrimaryKey0",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GPrimary Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:GToRow",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GToRow",
        "fct-type": "class",
        "title": "GToRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "GToRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GTo Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:InsertRow",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper in the \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e class, which marshalls every\n field except the primary key.  For use with \u003ccode\u003e\u003ca\u003emodelInsertQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#InsertRow",
        "fct-type": "newtype",
        "title": "InsertRow"
      },
      "index": {
        "description": "newtype wrapper in the ToRow class which marshalls every field except the primary key For use with modelInsertQuery",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "InsertRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Insert Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:LookupRow",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper in the \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e class, permitting every model\n to be used as the result of a database query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#LookupRow",
        "fct-type": "newtype",
        "title": "LookupRow"
      },
      "index": {
        "description": "newtype wrapper in the FromRow class permitting every model to be used as the result of database query",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "LookupRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Lookup Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of data types that represent a database table.  This\n class conveys information necessary to move a Haskell data\n structure in and out of a database table.  The most important field\n is \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e, which describes the database table and column\n names.  \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e has a reasonable default implementation for\n types that are members of the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e class (using GHC's\n \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension), provided the following conditions hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The data type must have a single constructor that is defined\n      using record selector syntax.\n\u003c/li\u003e\u003cli\u003e The very first field of the data type must be a \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e to\n      represent the primary key.  Other orders will cause a\n      compilation error.\n\u003c/li\u003e\u003cli\u003e Every field of the data structure must be an instance of\n      \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf these three conditions hold and your database naming scheme\n follows the conventions of \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e--namely that the\n table name is the same as the type name with the first character\n downcased, and the field names are the same as the column\n names--then it is reasonable to have a completely empty (default)\n instance declaration:\n\u003c/p\u003e\u003cpre\u003e   data MyType = MyType { myKey :: !DBKey\n                        , myName :: !S.ByteString\n                        , myCamelCase :: !Int\n                        , ...\n                        } deriving (Show, Generic)\n   instance Model MyType\n\u003c/pre\u003e\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e method is called \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e.  You\n may wish to use almost all of the defaults, but tweak a few things.\n This is easily accomplished by overriding a few fields of the\n default structure.  For example, suppose your database columns use\n exactly the same name as your Haskell field names, but the name of\n your database table is not the same as the name of the Haskell data\n type.  You can override the database table name (field\n \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e) as follows:\n\u003c/p\u003e\u003cpre\u003e   instance Model MyType where\n       modelInfo = defaultModelInfo { modelTable = \"my_type\" }\n\u003c/pre\u003e\u003cp\u003eFinally, if you dislike the conventions followed by\n \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e, you can simply implement an alternate pattern.\n An example of this is \u003ccode\u003e\u003ca\u003eunderscoreModelInfo\u003c/a\u003e\u003c/code\u003e, which strips a prefix\n off every field name and converts everything from camel-case to\n underscore notation:\n\u003c/p\u003e\u003cpre\u003e   instance Model MyType where\n       modelInfo = underscoreModelInfo \"my\"\n\u003c/pre\u003e\u003cp\u003eThe above code will associate \u003ccode\u003eMyType\u003c/code\u003e with a database table\n \u003ccode\u003emy_type\u003c/code\u003e having column names \u003ccode\u003ekey\u003c/code\u003e, \u003ccode\u003ename\u003c/code\u003e, \u003ccode\u003ecamel_case\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eYou can implement other patterns like \u003ccode\u003e\u003ca\u003eunderscoreModelInfo\u003c/a\u003e\u003c/code\u003e by\n calling \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e and modifying the results.\n Alternatively, you can directly call the lower-level functions from\n which \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e is built (\u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003edefaultModelColumns\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#Model",
        "fct-type": "class",
        "title": "Model"
      },
      "index": {
        "description": "The class of data types that represent database table This class conveys information necessary to move Haskell data structure in and out of database table The most important field is modelInfo which describes the database table and column names modelInfo has reasonable default implementation for types that are members of the Generic class using GHC DeriveGeneric extension provided the following conditions hold The data type must have single constructor that is defined using record selector syntax The very first field of the data type must be DBKey to represent the primary key Other orders will cause compilation error Every field of the data structure must be an instance of FromField and ToField If these three conditions hold and your database naming scheme follows the conventions of defaultModelInfo namely that the table name is the same as the type name with the first character downcased and the field names are the same as the column names--then it is reasonable to have completely empty default instance declaration data MyType MyType myKey DBKey myName S.ByteString myCamelCase Int deriving Show Generic instance Model MyType The default modelInfo method is called defaultModelInfo You may wish to use almost all of the defaults but tweak few things This is easily accomplished by overriding few fields of the default structure For example suppose your database columns use exactly the same name as your Haskell field names but the name of your database table is not the same as the name of the Haskell data type You can override the database table name field modelTable as follows instance Model MyType where modelInfo defaultModelInfo modelTable my type Finally if you dislike the conventions followed by defaultModelInfo you can simply implement an alternate pattern An example of this is underscoreModelInfo which strips prefix off every field name and converts everything from camel-case to underscore notation instance Model MyType where modelInfo underscoreModelInfo my The above code will associate MyType with database table my type having column names key name camel case etc You can implement other patterns like underscoreModelInfo by calling defaultModelInfo and modifying the results Alternatively you can directly call the lower-level functions from which defaultModelInfo is built defaultModelTable defaultModelColumns defaultModelGetPrimaryKey",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "Model",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:ModelCreateInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExtra information for \u003ca\u003eDatabase.PostgreSQL.ORM.CreateTable\u003c/a\u003e.  You\n probably don't need to use this.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelCreateInfo",
        "fct-type": "data",
        "title": "ModelCreateInfo"
      },
      "index": {
        "description": "Extra information for Database.PostgreSQL.ORM.CreateTable You probably don need to use this",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelCreateInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Create Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:ModelIdentifiers",
      "description": {
        "fct-descr": "\u003cp\u003eSQL table and column identifiers that should be copied verbatim\n into queries.  For normal models, these will simply be quoted\n versions of the fields in the corresponding \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e.  However,\n for special cases, the fields of this structure can contain\n unquoted SQL including \u003ccode\u003eJOIN\u003c/code\u003e keywords.  In the case of joins,\n different elements of \u003ccode\u003e\u003ca\u003emodelQColumns\u003c/a\u003e\u003c/code\u003e may be qualified by different\n table names.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emodelQColumns\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emodelQPrimaryColumn\u003c/a\u003e\u003c/code\u003e both contain\n table-qualified names (e.g., \u003ccode\u003e\"\\\"my_type\\\".\\\"key\\\"\"\u003c/code\u003e),\n while \u003ccode\u003e\u003ca\u003emodelQWriteColumns\u003c/a\u003e\u003c/code\u003e contains only the quoted column names.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "data",
        "title": "ModelIdentifiers"
      },
      "index": {
        "description": "SQL table and column identifiers that should be copied verbatim into queries For normal models these will simply be quoted versions of the fields in the corresponding ModelInfo However for special cases the fields of this structure can contain unquoted SQL including JOIN keywords In the case of joins different elements of modelQColumns may be qualified by different table names Note that modelQColumns and modelQPrimaryColumn both contain table-qualified names e.g my type key while modelQWriteColumns contains only the quoted column names",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelIdentifiers",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Identifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:ModelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eModelInfo T\u003c/code\u003e contains the information necessary for mapping\n \u003ccode\u003eT\u003c/code\u003e to a database table.  Each \u003ccode\u003e\u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type has a single\n \u003ccode\u003eModelInfo\u003c/code\u003e associated with it, accessible through the \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e class.  Note the table and column names must\n all be unquoted in this data structure, as they will later be\n quoted using \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e by the \u003ccode\u003e\u003ca\u003emodelIdentifiers\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "data",
        "title": "ModelInfo"
      },
      "index": {
        "description": "ModelInfo contains the information necessary for mapping to database table Each Model type has single ModelInfo associated with it accessible through the modelInfo method of the Model class Note the table and column names must all be unquoted in this data structure as they will later be quoted using quoteIdent by the modelIdentifiers method",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:ModelQueries",
      "description": {
        "fct-descr": "\u003cp\u003eStandard CRUD (create/read/update/delete) queries on a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelQueries",
        "fct-type": "data",
        "title": "ModelQueries"
      },
      "index": {
        "description": "Standard CRUD create read update delete queries on model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelQueries",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Queries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:NormalRef",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type for instantiating \u003ccode\u003e\u003ca\u003eGDBRef\u003c/a\u003e\u003c/code\u003e that represents a one-to-many\n relationship between tables.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#NormalRef",
        "fct-type": "data",
        "title": "NormalRef"
      },
      "index": {
        "description": "Phantom type for instantiating GDBRef that represents one-to-many relationship between tables",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "NormalRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Normal Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:RowAlias",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types that can be used as tags in as \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e alias.\n Such types should be unit types--in other words, have exactly one\n constructor where the constructor is nullary (take no arguments).\n The reason for this class is that the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e\n requires a way to extract the name of the row alias without having\n a concrete instance of the type.  This is provided by the\n \u003ccode\u003e\u003ca\u003erowAliasName\u003c/a\u003e\u003c/code\u003e method (which must be non-strict).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#RowAlias",
        "fct-type": "class",
        "title": "RowAlias"
      },
      "index": {
        "description": "The class of types that can be used as tags in as As alias Such types should be unit types--in other words have exactly one constructor where the constructor is nullary take no arguments The reason for this class is that the Model instance for As requires way to extract the name of the row alias without having concrete instance of the type This is provided by the rowAliasName method which must be non-strict",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "RowAlias",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Row Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:UniqueRef",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type for instantiating \u003ccode\u003e\u003ca\u003eGDBRef\u003c/a\u003e\u003c/code\u003e that represents a one-to-one\n relationship between tables.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#UniqueRef",
        "fct-type": "data",
        "title": "UniqueRef"
      },
      "index": {
        "description": "Phantom type for instantiating GDBRef that represents one-to-one relationship between tables",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "UniqueRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Unique Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#t:UpdateRow",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper in the \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e class, which marshalls every\n field except the primary key, followed by the primary key.  For use\n with \u003ccode\u003e\u003ca\u003emodelUpdateQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#UpdateRow",
        "fct-type": "newtype",
        "title": "UpdateRow"
      },
      "index": {
        "description": "newtype wrapper in the ToRow class which marshalls every field except the primary key followed by the primary key For use with modelUpdateQuery",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "UpdateRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Update Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:As",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "As",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#As",
        "fct-type": "function",
        "title": "As"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "As",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:DBKey",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBKey !DBKeyType",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKey",
        "fct-type": "function",
        "title": "DBKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "DBKey",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:DBRef",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBRef DBKeyType",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#GDBRef",
        "fct-type": "function",
        "title": "DBRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "DBRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:InsertRow",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "InsertRow a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#InsertRow",
        "fct-type": "function",
        "title": "InsertRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "InsertRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Insert Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:LookupRow",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "LookupRow",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#LookupRow",
        "fct-type": "function",
        "title": "LookupRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "LookupRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Lookup Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:ModelCreateInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelCreateInfo",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelCreateInfo",
        "fct-type": "function",
        "title": "ModelCreateInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelCreateInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Create Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:ModelIdentifiers",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "ModelIdentifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelIdentifiers",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Identifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:ModelInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "ModelInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:ModelQueries",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelQueries",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelQueries",
        "fct-type": "function",
        "title": "ModelQueries"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "ModelQueries",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Queries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:NormalRef",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "NormalRef",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#NormalRef",
        "fct-type": "function",
        "title": "NormalRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "NormalRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Normal Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:NullKey",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "NullKey",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKey",
        "fct-type": "function",
        "title": "NullKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "NullKey",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Null Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:UniqueRef",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "UniqueRef",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#UniqueRef",
        "fct-type": "function",
        "title": "UniqueRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "UniqueRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Unique Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:UpdateRow",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "UpdateRow a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#UpdateRow",
        "fct-type": "function",
        "title": "UpdateRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "UpdateRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Update Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultFromRow",
      "description": {
        "fct-descr": "\u003cp\u003eThis function provides a \u003ccode\u003e\u003ca\u003efromRow\u003c/a\u003e\u003c/code\u003e function for \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e types,\n suitable as a default of the \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e class.  This module uses it\n as the default implementation of \u003ccode\u003e\u003ca\u003emodelRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultFromRow",
        "fct-type": "function",
        "title": "defaultFromRow"
      },
      "index": {
        "description": "This function provides fromRow function for Generic types suitable as default of the FromRow class This module uses it as the default implementation of modelRead",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultFromRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelColumns",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the Haskell field names in a data structure.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e [ByteString]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelColumns",
        "fct-type": "function",
        "title": "defaultModelColumns"
      },
      "index": {
        "description": "Returns the Haskell field names in data structure",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelColumns",
        "normalized": "a-\u003e[ByteString]",
        "package": "postgresql-orm",
        "partial": "Model Columns",
        "signature": "a-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelDeleteQuery",
      "description": {
        "fct-descr": "\u003cp\u003eDefault SQL delete query for a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelDeleteQuery",
        "fct-type": "function",
        "title": "defaultModelDeleteQuery"
      },
      "index": {
        "description": "Default SQL delete query for model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelDeleteQuery",
        "normalized": "ModelIdentifiers a-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Model Delete Query",
        "signature": "ModelIdentifiers a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelGetPrimaryKey",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the primary key of type \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e from a model when the\n \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e is the first element of the data structure.  Fails to\n compile if the first field is not of type \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e DBKey",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelGetPrimaryKey",
        "fct-type": "function",
        "title": "defaultModelGetPrimaryKey"
      },
      "index": {
        "description": "Extract the primary key of type DBKey from model when the DBKey is the first element of the data structure Fails to compile if the first field is not of type DBKey",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelGetPrimaryKey",
        "normalized": "a-\u003eDBKey",
        "package": "postgresql-orm",
        "partial": "Model Get Primary Key",
        "signature": "a-\u003eDBKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelIdentifiers",
      "description": {
        "fct-descr": "\u003cp\u003eThe default simply quotes the \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e\n fields of \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo a -\u003e ModelIdentifiers a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelIdentifiers",
        "fct-type": "function",
        "title": "defaultModelIdentifiers"
      },
      "index": {
        "description": "The default simply quotes the modelInfo and modelColumns fields of ModelInfo using quoteIdent",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelIdentifiers",
        "normalized": "ModelInfo a-\u003eModelIdentifiers a",
        "package": "postgresql-orm",
        "partial": "Model Identifiers",
        "signature": "ModelInfo a-\u003eModelIdentifiers a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe default definition of \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e. See the documentation at\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e for more information.  Sets \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e to the name of the\n type with the first character converted to lower-case.  Sets\n \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e to the names of the Haskell field selectors.  Sets\n \u003ccode\u003e\u003ca\u003emodelPrimaryColumn\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e0\u003c/code\u003e and extracts the first field of the\n structure for \u003ccode\u003e\u003ca\u003emodelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e.  Will fail to compile unless\n the data structure is defined with record syntax and that its first\n field is of type \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that defaults for the individual fields are available in\n separate functions (e.g., \u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e) with fewer class\n requirements in the context, in case you want to make piecemeal use\n of defaults.  The default for \u003ccode\u003e\u003ca\u003emodelPrimaryColumn\u003c/a\u003e\u003c/code\u003e is 0.  If you\n overwrite that, you will need to overwrite \u003ccode\u003e\u003ca\u003emodelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e as\n well (and likely vice versa).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelInfo",
        "fct-type": "function",
        "title": "defaultModelInfo"
      },
      "index": {
        "description": "The default definition of modelInfo See the documentation at Model for more information Sets modelTable to the name of the type with the first character converted to lower-case Sets modelColumns to the names of the Haskell field selectors Sets modelPrimaryColumn to and extracts the first field of the structure for modelGetPrimaryKey Will fail to compile unless the data structure is defined with record syntax and that its first field is of type DBKey Note that defaults for the individual fields are available in separate functions e.g defaultModelTable with fewer class requirements in the context in case you want to make piecemeal use of defaults The default for modelPrimaryColumn is If you overwrite that you will need to overwrite modelGetPrimaryKey as well and likely vice versa",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelInsertQuery",
      "description": {
        "fct-descr": "\u003cp\u003eDefault SQL insert query for a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelInsertQuery",
        "fct-type": "function",
        "title": "defaultModelInsertQuery"
      },
      "index": {
        "description": "Default SQL insert query for model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelInsertQuery",
        "normalized": "ModelIdentifiers a-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Model Insert Query",
        "signature": "ModelIdentifiers a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelLookupQuery",
      "description": {
        "fct-descr": "\u003cp\u003eDefault SQL lookup query for a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelLookupQuery",
        "fct-type": "function",
        "title": "defaultModelLookupQuery"
      },
      "index": {
        "description": "Default SQL lookup query for model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelLookupQuery",
        "normalized": "ModelIdentifiers a-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Model Lookup Query",
        "signature": "ModelIdentifiers a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelQueries",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value of \u003ccode\u003e\u003ca\u003emodelQueries\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a -\u003e ModelQueries a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelQueries",
        "fct-type": "function",
        "title": "defaultModelQueries"
      },
      "index": {
        "description": "The default value of modelQueries",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelQueries",
        "normalized": "ModelIdentifiers a-\u003eModelQueries a",
        "package": "postgresql-orm",
        "partial": "Model Queries",
        "signature": "ModelIdentifiers a-\u003eModelQueries a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe default name of the database table corresponding to a Haskell\n type.  The default is the same as the type name with the first\n letter converted to lower-case.  (The rationale is that Haskell\n requires types to start with a capital letter, but all-lower-case\n table names are easier to use in queries because PostgreSQL\n generally does not require them to be quoted.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelTable",
        "fct-type": "function",
        "title": "defaultModelTable"
      },
      "index": {
        "description": "The default name of the database table corresponding to Haskell type The default is the same as the type name with the first letter converted to lower-case The rationale is that Haskell requires types to start with capital letter but all-lower-case table names are easier to use in queries because PostgreSQL generally does not require them to be quoted",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelTable",
        "normalized": "a-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Model Table",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelUpdateQuery",
      "description": {
        "fct-descr": "\u003cp\u003eDefault SQL update query for a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a -\u003e Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelUpdateQuery",
        "fct-type": "function",
        "title": "defaultModelUpdateQuery"
      },
      "index": {
        "description": "Default SQL update query for model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelUpdateQuery",
        "normalized": "ModelIdentifiers a-\u003eQuery",
        "package": "postgresql-orm",
        "partial": "Model Update Query",
        "signature": "ModelIdentifiers a-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultModelWrite",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a series of \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es serializing each field of a data\n structure (in the order of the Haskell datatype definition),\n \u003cem\u003eexcept\u003c/em\u003e the primary key, since the primary key should never be\n written to a database.  Every field must be an instance of\n \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e [Action]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelWrite",
        "fct-type": "function",
        "title": "defaultModelWrite"
      },
      "index": {
        "description": "Returns series of Action serializing each field of data structure in the order of the Haskell datatype definition except the primary key since the primary key should never be written to database Every field must be an instance of ToField",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultModelWrite",
        "normalized": "a-\u003e[Action]",
        "package": "postgresql-orm",
        "partial": "Model Write",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:defaultToRow",
      "description": {
        "fct-descr": "\u003cp\u003eThis function provides a \u003ccode\u003e\u003ca\u003etoRow\u003c/a\u003e\u003c/code\u003e function for \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e types\n that marshalls each field of the data type in the order in which it\n appears in the type definition.  This function is \u003cem\u003enot\u003c/em\u003e a suitable\n implementation of \u003ccode\u003e\u003ca\u003emodelWrite\u003c/a\u003e\u003c/code\u003e (since it marshals the primary key,\n which is not supposed to be written).  However, it is required\n internally by \u003ccode\u003e\u003ca\u003edefaultModelWrite\u003c/a\u003e\u003c/code\u003e, and exposed in the unlikely\n event it is of use to alternate generic \u003ccode\u003e\u003ca\u003emodelWrite\u003c/a\u003e\u003c/code\u003e functions.\n You probably don't want to call this function.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e [Action]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultToRow",
        "fct-type": "function",
        "title": "defaultToRow"
      },
      "index": {
        "description": "This function provides toRow function for Generic types that marshalls each field of the data type in the order in which it appears in the type definition This function is not suitable implementation of modelWrite since it marshals the primary key which is not supposed to be written However it is required internally by defaultModelWrite and exposed in the unlikely event it is of use to alternate generic modelWrite functions You probably don want to call this function",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "defaultToRow",
        "normalized": "a-\u003e[Action]",
        "package": "postgresql-orm",
        "partial": "To Row",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the row corresponding to a particular data structure from\n the database.  This function only looks at the primary key in the\n data structure.  It is an error to call this function if the\n primary key is not set.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e a -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#destroy",
        "fct-type": "function",
        "title": "destroy"
      },
      "index": {
        "description": "Remove the row corresponding to particular data structure from the database This function only looks at the primary key in the data structure It is an error to call this function if the primary key is not set",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "destroy",
        "normalized": "Connection-\u003ea-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Connection-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:destroyByRef",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a row from the database without fetching it first.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e GDBRef rt a -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#destroyByRef",
        "fct-type": "function",
        "title": "destroyByRef"
      },
      "index": {
        "description": "Remove row from the database without fetching it first",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "destroyByRef",
        "normalized": "Connection-\u003eGDBRef a b-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "By Ref",
        "signature": "Connection-\u003eGDBRef rt a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:emptyModelCreateInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eModelCreateInfo\u003c/a\u003e\u003c/code\u003e that doesn't imply any extra constraints or\n exceptions.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelCreateInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#emptyModelCreateInfo",
        "fct-type": "function",
        "title": "emptyModelCreateInfo"
      },
      "index": {
        "description": "ModelCreateInfo that doesn imply any extra constraints or exceptions",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "emptyModelCreateInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Create Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:findAll",
      "description": {
        "fct-descr": "\u003cp\u003eDump an entire model.  Useful for development and debugging only,\n as every row will be read into memory before the function returns.\n\u003c/p\u003e\u003cp\u003eNote that unlike the other primary model operations, it is OK to\n call \u003ccode\u003e\u003ca\u003efindAll\u003c/a\u003e\u003c/code\u003e even on degenerate models such as \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#findAll",
        "fct-type": "function",
        "title": "findAll"
      },
      "index": {
        "description": "Dump an entire model Useful for development and debugging only as every row will be read into memory before the function returns Note that unlike the other primary model operations it is OK to call findAll even on degenerate models such as As and",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "findAll",
        "normalized": "Connection-\u003eIO[a]",
        "package": "postgresql-orm",
        "partial": "All",
        "signature": "Connection-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:findRow",
      "description": {
        "fct-descr": "\u003cp\u003eFollow a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e and fetch the target row from\n the database into a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e type \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e GDBRef rt r -\u003e IO (Maybe r)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#findRow",
        "fct-type": "function",
        "title": "findRow"
      },
      "index": {
        "description": "Follow DBRef or DBRefUnique and fetch the target row from the database into Model type",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "findRow",
        "normalized": "Connection-\u003eGDBRef a b-\u003eIO(Maybe b)",
        "package": "postgresql-orm",
        "partial": "Row",
        "signature": "Connection-\u003eGDBRef rt r-\u003eIO(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:fromAs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromAs\u003c/code\u003e extracts the \u003ccode\u003erow\u003c/code\u003e from an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e alias row\u003c/code\u003e, but\n constrains the type of \u003ccode\u003ealias\u003c/code\u003e to be the same as its first argument\n (which is non-strict).  This can save you from explicitly\n specifying types.  For example:\n\u003c/p\u003e\u003cpre\u003e data X = X deriving (Generic)\n instance RowAlias X where rowAliasName = const \"x\"\n\n ...\n   r \u003c- map (\\(b1 :. b2) -\u003e (b1, fromAs X b2)) \u003c$\u003e\n       dbSelect c $ addWhere \\\"bar.bar_key = x.bar_parent\\\" modelDBSelect\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "alias -\u003e As alias row -\u003e row",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#fromAs",
        "fct-type": "function",
        "title": "fromAs"
      },
      "index": {
        "description": "fromAs extracts the row from an As alias row but constrains the type of alias to be the same as its first argument which is non-strict This can save you from explicitly specifying types For example data deriving Generic instance RowAlias where rowAliasName const map b1 b2 b1 fromAs b2 dbSelect addWhere bar.bar key x.bar parent modelDBSelect",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "fromAs",
        "normalized": "a-\u003eAs a b-\u003eb",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": "alias-\u003eAs alias row-\u003erow"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:isNullKey",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNullKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBKey -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#isNullKey",
        "fct-type": "function",
        "title": "isNullKey"
      },
      "index": {
        "description": "Returns True when DBKey is NullKey",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "isNullKey",
        "normalized": "DBKey-\u003eBool",
        "package": "postgresql-orm",
        "partial": "Null Key",
        "signature": "DBKey-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:lookupRow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#LookupRow",
        "fct-type": "function",
        "title": "lookupRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "lookupRow",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:mkDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a reference to the primary key of a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e, suitable for\n storing in a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e field of a different \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e GDBRef rt a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#mkDBRef",
        "fct-type": "function",
        "title": "mkDBRef"
      },
      "index": {
        "description": "Create reference to the primary key of Model suitable for storing in DBRef or DBRefUnique field of different Model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "mkDBRef",
        "normalized": "a-\u003eGDBRef b a",
        "package": "postgresql-orm",
        "partial": "DBRef",
        "signature": "a-\u003eGDBRef rt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelColumns",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of the database columns corresponding to fields of\n this model.  The column names should appear in the order in\n which the fields are defined in the Haskell data type \u003ccode\u003ea\u003c/code\u003e\n (which should also be the order in which \u003ccode\u003e\u003ca\u003emodelRead\u003c/a\u003e\u003c/code\u003e parses\n them to an \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emodelWrite\u003c/a\u003e\u003c/code\u003e marshalls them).\n\u003c/p\u003e\u003cp\u003eNote that all queries generated by the library specify explicit\n column names.  Hence the order of columns does not need to\n match their order in the database table.  They should instead\n match the order of fields in the Haskell data structure.\n\u003c/p\u003e\u003cp\u003eThe default, given by \u003ccode\u003e\u003ca\u003edefaultModelColumns\u003c/a\u003e\u003c/code\u003e, is to use the\n Haskell field names for \u003ccode\u003ea\u003c/code\u003e.  This default will fail to compile\n if \u003ccode\u003ea\u003c/code\u003e is not defined using record syntax.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "![ByteString]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelColumns"
      },
      "index": {
        "description": "The names of the database columns corresponding to fields of this model The column names should appear in the order in which the fields are defined in the Haskell data type which should also be the order in which modelRead parses them to an and modelWrite marshalls them Note that all queries generated by the library specify explicit column names Hence the order of columns does not need to match their order in the database table They should instead match the order of fields in the Haskell data structure The default given by defaultModelColumns is to use the Haskell field names for This default will fail to compile if is not defined using record syntax",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelColumns",
        "normalized": "[ByteString]",
        "package": "postgresql-orm",
        "partial": "Columns",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelCreateColumnTypeExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eA list of (column-name, type) pairs for which you want to\n override the default.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "![(ByteString, ByteString)]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelCreateInfo",
        "fct-type": "function",
        "title": "modelCreateColumnTypeExceptions"
      },
      "index": {
        "description": "list of column-name type pairs for which you want to override the default",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelCreateColumnTypeExceptions",
        "normalized": "[(ByteString,ByteString)]",
        "package": "postgresql-orm",
        "partial": "Create Column Type Exceptions",
        "signature": "[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelCreateExtraConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eExtra constraints to stick at the end of the \u003ccode\u003eCREATE TABLE\u003c/code\u003e\n statement.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelCreateInfo",
        "fct-type": "function",
        "title": "modelCreateExtraConstraints"
      },
      "index": {
        "description": "Extra constraints to stick at the end of the CREATE TABLE statement",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelCreateExtraConstraints",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Create Extra Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelCreateInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExtra constraints, if any, to place in a \u003ccode\u003eCREATE TABLE\u003c/code\u003e\n statement.  Only used by \u003ca\u003eDatabase.PostgreSQL.ORM.CreateTable\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelCreateInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelCreateInfo",
        "fct-type": "method",
        "title": "modelCreateInfo"
      },
      "index": {
        "description": "Extra constraints if any to place in CREATE TABLE statement Only used by Database.PostgreSQL.ORM.CreateTable",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelCreateInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Create Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelDeleteQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query template for deleting a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e from the database.\n Should have a single query parameter, namely the \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e of the\n row to delete.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelQueries",
        "fct-type": "function",
        "title": "modelDeleteQuery"
      },
      "index": {
        "description": "query template for deleting Model from the database Should have single query parameter namely the DBKey of the row to delete",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelDeleteQuery",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Delete Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelGetPrimaryKey",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the primary key of a particular model instance.  If\n you customize this field, you must also customize\n \u003ccode\u003e\u003ca\u003emodelPrimaryColumn\u003c/a\u003e\u003c/code\u003e--no check is made that the two are\n consistent.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(a -\u003e DBKey)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelGetPrimaryKey"
      },
      "index": {
        "description": "Return the primary key of particular model instance If you customize this field you must also customize modelPrimaryColumn no check is made that the two are consistent",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelGetPrimaryKey",
        "normalized": "(a-\u003eDBKey)",
        "package": "postgresql-orm",
        "partial": "Get Primary Key",
        "signature": "(a-\u003eDBKey)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelIdentifiers",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodelIdentifiers\u003c/a\u003e\u003c/code\u003e contains the table and column names verbatim\n as they should be inserted into SQL queries.  For normal models,\n these are simply double-quoted (with \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e) versions of\n the names in \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e, with the column names qualified by the\n double-quoted table name.  However, for special cases such as\n join relations (with \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e)  or row aliases (with \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e),\n \u003ccode\u003e\u003ca\u003emodelIdentifiers\u003c/a\u003e\u003c/code\u003e can modify the table name with unquoted SQL\n identifiers (such as \u003ccode\u003eJOIN\u003c/code\u003e and \u003ccode\u003eAS\u003c/code\u003e) and change the qualified\n column names appropriately.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelIdentifiers",
        "fct-type": "method",
        "title": "modelIdentifiers"
      },
      "index": {
        "description": "modelIdentifiers contains the table and column names verbatim as they should be inserted into SQL queries For normal models these are simply double-quoted with quoteIdent versions of the names in modelInfo with the column names qualified by the double-quoted table name However for special cases such as join relations with or row aliases with As modelIdentifiers can modify the table name with unquoted SQL identifiers such as JOIN and AS and change the qualified column names appropriately",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelIdentifiers",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Identifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emodelInfo\u003c/code\u003e provides information about how the Haskell data\n type is stored in the database, in the form of a \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e data\n structure.  Among other things, this structure specifies the name\n of the database table, the names of the database columns\n corresponding to the Haskell data structure fields, and the\n position of the primary key in both the database columns and the\n Haskell data structure.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelInfo",
        "fct-type": "method",
        "title": "modelInfo"
      },
      "index": {
        "description": "modelInfo provides information about how the Haskell data type is stored in the database in the form of ModelInfo data structure Among other things this structure specifies the name of the database table the names of the database columns corresponding to the Haskell data structure fields and the position of the primary key in both the database columns and the Haskell data structure",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelInsertQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query template for inserting a new \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e in the database.\n The query parameters are values for all columns \u003cem\u003eexcept\u003c/em\u003e the\n primary key.  The query returns the full row as stored in the\n database (including the values of fields, such as the primary\n key, that have been chosen by the database server).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelQueries",
        "fct-type": "function",
        "title": "modelInsertQuery"
      },
      "index": {
        "description": "query template for inserting new Model in the database The query parameters are values for all columns except the primary key The query returns the full row as stored in the database including the values of fields such as the primary key that have been chosen by the database server",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelInsertQuery",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Insert Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelLookupQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query template for looking up a model by its primary key.\n Expects a single query parameter, namely the \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\n being looked up.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelQueries",
        "fct-type": "function",
        "title": "modelLookupQuery"
      },
      "index": {
        "description": "query template for looking up model by its primary key Expects single query parameter namely the DBKey or DBRef being looked up",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelLookupQuery",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Lookup Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelName",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003emodelName _ = \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelName",
        "fct-type": "function",
        "title": "modelName"
      },
      "index": {
        "description": "Lookup the modelTable of Model modelName modelTable modelInfo ModelInfo",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelName",
        "normalized": "a-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Name",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelOrigTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe original, unquoted name of the table representing the\n model in the database.  Ordinarily, this should be the same as\n \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e, but in the case of \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e aliases,\n the \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e is an alias, and \u003ccode\u003e\u003ca\u003emodelOrigTable\u003c/a\u003e\u003c/code\u003e is the\n original table.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for joins.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "modelOrigTable"
      },
      "index": {
        "description": "The original unquoted name of the table representing the model in the database Ordinarily this should be the same as modelTable in ModelInfo but in the case of As aliases the modelTable is an alias and modelOrigTable is the original table Nothing for joins",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelOrigTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Orig Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelPrimaryColumn",
      "description": {
        "fct-descr": "\u003cp\u003eThe 0-based index of the primary key column in\n \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e.  This should be 0 when your data structure's\n first field is its \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e (highly recommended, and required by\n \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e).  If you customize this field, you\n must also customize \u003ccode\u003e\u003ca\u003emodelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e--no check is made that\n the two are consistent.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Int",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelPrimaryColumn"
      },
      "index": {
        "description": "The based index of the primary key column in modelColumns This should be when your data structure first field is its DBKey highly recommended and required by defaultModelGetPrimaryKey If you customize this field you must also customize modelGetPrimaryKey no check is made that the two are consistent",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelPrimaryColumn",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Primary Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelQColumns",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral SQL for each, table-qualified column.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "![ByteString]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "modelQColumns"
      },
      "index": {
        "description": "Literal SQL for each table-qualified column",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelQColumns",
        "normalized": "[ByteString]",
        "package": "postgresql-orm",
        "partial": "QColumns",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelQPrimaryColumn",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral SQL for the model's table-qualified primary key\n column.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "modelQPrimaryColumn"
      },
      "index": {
        "description": "Literal SQL for the model table-qualified primary key column",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelQPrimaryColumn",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "QPrimary Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelQTable",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral SQL for the name of the table.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "modelQTable"
      },
      "index": {
        "description": "Literal SQL for the name of the table",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelQTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "QTable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelQWriteColumns",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral SQL for all the columns except the primary key.\n These are the columns that should be included in an \u003ccode\u003eINSERT\u003c/code\u003e or\n \u003ccode\u003eUPDATE\u003c/code\u003e.  Note that unlike the other fields, these column\n names should \u003cem\u003enot\u003c/em\u003e be table-qualified.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "modelQWriteColumns"
      },
      "index": {
        "description": "Literal SQL for all the columns except the primary key These are the columns that should be included in an INSERT or UPDATE Note that unlike the other fields these column names should not be table-qualified",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelQWriteColumns",
        "normalized": "[ByteString]",
        "package": "postgresql-orm",
        "partial": "QWrite Columns",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelQualifier",
      "description": {
        "fct-descr": "\u003cp\u003eWhen all columns in \u003ccode\u003e\u003ca\u003emodelQColumns\u003c/a\u003e\u003c/code\u003e are qualified by the same\n table name, this field contains \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the table name.\n For the \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e type (in which different columns have different\n table qualifications), this field is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor normal models, this field will be identical to\n \u003ccode\u003e\u003ca\u003emodelQTable\u003c/a\u003e\u003c/code\u003e.  However, for \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e models, \u003ccode\u003e\u003ca\u003emodelQTable\u003c/a\u003e\u003c/code\u003e will\n contain unquoted SQL such as \u003ccode\u003e\"\\\"MyType\\\" AS\n \\\"my_alias\\\"\"\u003c/code\u003e, in which case \u003ccode\u003emodelQualifier\u003c/code\u003e will\n contain \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \"\\\"my_alias\\\"\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelIdentifiers",
        "fct-type": "function",
        "title": "modelQualifier"
      },
      "index": {
        "description": "When all columns in modelQColumns are qualified by the same table name this field contains Just the table name For the type in which different columns have different table qualifications this field is Nothing For normal models this field will be identical to modelQTable However for As models modelQTable will contain unquoted SQL such as MyType AS my alias in which case modelQualifier will contain Just my alias",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelQualifier",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Qualifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelQueries",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emodelQueries\u003c/code\u003e provides pre-formatted \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e templates for\n \u003ccode\u003e\u003ca\u003efindRow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edestroy\u003c/a\u003e\u003c/code\u003e.  The default \u003ccode\u003e\u003ca\u003emodelQueries\u003c/a\u003e\u003c/code\u003e\n value is generated from \u003ccode\u003e\u003ca\u003emodelIdentifiers\u003c/a\u003e\u003c/code\u003e and should not be\n modified.  However, for degenerate tables (such as joins created\n with \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e), it is reasonable to make \u003ccode\u003e\u003ca\u003emodelQueries\u003c/a\u003e\u003c/code\u003e always throw\n an exception, thereby disallowing ordinary queries and requiring\n use of more general query functions.\n\u003c/p\u003e\u003cp\u003eThis method should either throw an exception or use the default\n implementation.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelQueries a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelQueries",
        "fct-type": "method",
        "title": "modelQueries"
      },
      "index": {
        "description": "modelQueries provides pre-formatted Query templates for findRow save and destroy The default modelQueries value is generated from modelIdentifiers and should not be modified However for degenerate tables such as joins created with it is reasonable to make modelQueries always throw an exception thereby disallowing ordinary queries and requiring use of more general query functions This method should either throw an exception or use the default implementation",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelQueries",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Queries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelRead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emodelRead\u003c/code\u003e converts from a database \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e result to the\n Haskell data type of the \u003ccode\u003eModel\u003c/code\u003e, namely \u003ccode\u003ea\u003c/code\u003e.  Note that if type\n \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e, a fine definition of \u003ccode\u003emodelRead\u003c/code\u003e\n is \u003ccode\u003emodelRead = fromRow\u003c/code\u003e.  The default is to construct a row\n parser using the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e class.  However, it is crucial that\n the columns be parsed in the same order they are listed in the\n \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e field of \u003ccode\u003ea\u003c/code\u003e's \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e structure, and this\n should generally be the same order they are defined in the\n Haskell data structure.  Hence \u003ccode\u003emodelRead\u003c/code\u003e should generally look\n like:\n\u003c/p\u003e\u003cpre\u003e\n   -- Call \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e as many times as there are fields in your type\n   modelRead = Constructor \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelRead",
        "fct-type": "method",
        "title": "modelRead"
      },
      "index": {
        "description": "modelRead converts from database query result to the Haskell data type of the Model namely Note that if type is an instance of FromRow fine definition of modelRead is modelRead fromRow The default is to construct row parser using the Generic class However it is crucial that the columns be parsed in the same order they are listed in the modelColumns field of ModelInfo structure and this should generally be the same order they are defined in the Haskell data structure Hence modelRead should generally look like Call field as many times as there are fields in your type modelRead Constructor field field field",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelRead",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelSelectFragment",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a SQL \u003ccode\u003eSELECT\u003c/code\u003e statement with no \u003ccode\u003eWHERE\u003c/code\u003e predicate.  For\n example, \u003ccode\u003e\u003ca\u003edefaultModelLookupQuery\u003c/a\u003e\u003c/code\u003e consists of\n \u003ccode\u003emodelSelectFragment\u003c/code\u003e followed by \"\u003ccode\u003eWHERE\u003c/code\u003e \u003cem\u003eprimary-key\u003c/em\u003e = ?\".\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelIdentifiers a -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelSelectFragment",
        "fct-type": "function",
        "title": "modelSelectFragment"
      },
      "index": {
        "description": "Generate SQL SELECT statement with no WHERE predicate For example defaultModelLookupQuery consists of modelSelectFragment followed by WHERE primary-key",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelSelectFragment",
        "normalized": "ModelIdentifiers a-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Select Fragment",
        "signature": "ModelIdentifiers a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the database table corresponding to this model.\n The default \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e instance uses \u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e,\n which is the name of your data type with the first letter\n downcased.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelTable"
      },
      "index": {
        "description": "The name of the database table corresponding to this model The default modelInfo instance uses defaultModelTable which is the name of your data type with the first letter downcased",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelUpdateQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query template for updating an existing \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e in the\n database.  Expects as query parameters a value for every column\n of the model \u003cem\u003eexcept\u003c/em\u003e the primary key, followed by the primary\n key.  (The primary key is not written to the database, just\n used to select the row to change.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelQueries",
        "fct-type": "function",
        "title": "modelUpdateQuery"
      },
      "index": {
        "description": "query template for updating an existing Model in the database Expects as query parameters value for every column of the model except the primary key followed by the primary key The primary key is not written to the database just used to select the row to change",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelUpdateQuery",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Update Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelValid",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a validation of the model, returning any errors if\n it is invalid.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e ValidationError",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelValid",
        "fct-type": "method",
        "title": "modelValid"
      },
      "index": {
        "description": "Perform validation of the model returning any errors if it is invalid",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelValid",
        "normalized": "a-\u003eValidationError",
        "package": "postgresql-orm",
        "partial": "Valid",
        "signature": "a-\u003eValidationError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:modelWrite",
      "description": {
        "fct-descr": "\u003cp\u003eMarshal all fields of \u003ccode\u003ea\u003c/code\u003e \u003cem\u003eexcept\u003c/em\u003e the primary key.  As with\n \u003ccode\u003e\u003ca\u003emodelRead\u003c/a\u003e\u003c/code\u003e, the fields must be marshalled in the same order the\n corresponding columns are listed in \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e, only with the\n primary key (generally column 0) deleted.\n\u003c/p\u003e\u003cp\u003eDo \u003cem\u003enot\u003c/em\u003e define this as \u003ccode\u003e\u003ca\u003etoRow\u003c/a\u003e\u003c/code\u003e, even if \u003ccode\u003ea\u003c/code\u003e is an instance of\n \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e, because \u003ccode\u003e\u003ca\u003etoRow\u003c/a\u003e\u003c/code\u003e would include the primary key.\n Similarly, do \u003cem\u003enot\u003c/em\u003e define this as \u003ccode\u003e\u003ca\u003edefaultToRow\u003c/a\u003e\u003c/code\u003e.  On the other\n hand, it is reasonable for \u003ccode\u003emodelWrite\u003c/code\u003e to return an error for\n degenerate models (such as joins) that should never be \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003ed.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e [Action]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelWrite",
        "fct-type": "method",
        "title": "modelWrite"
      },
      "index": {
        "description": "Marshal all fields of except the primary key As with modelRead the fields must be marshalled in the same order the corresponding columns are listed in modelColumns only with the primary key generally column deleted Do not define this as toRow even if is an instance of ToRow because toRow would include the primary key Similarly do not define this as defaultToRow On the other hand it is reasonable for modelWrite to return an error for degenerate models such as joins that should never be save",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "modelWrite",
        "normalized": "a-\u003e[Action]",
        "package": "postgresql-orm",
        "partial": "Write",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:primaryKey",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the primary key of a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e DBKey",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#primaryKey",
        "fct-type": "function",
        "title": "primaryKey"
      },
      "index": {
        "description": "Lookup the primary key of Model",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "primaryKey",
        "normalized": "a-\u003eDBKey",
        "package": "postgresql-orm",
        "partial": "Key",
        "signature": "a-\u003eDBKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:printq",
      "description": {
        "fct-descr": "\u003cp\u003ePrint to stdout the query statement.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#printq",
        "fct-type": "function",
        "title": "printq"
      },
      "index": {
        "description": "Print to stdout the query statement",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "printq",
        "normalized": "Query-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Query-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:quoteIdent",
      "description": {
        "fct-descr": "\u003cp\u003eQuote an identifier such as a table or column name using\n double-quote characters.  Note this has nothing to do with quoting\n \u003cem\u003evalues\u003c/em\u003e, which must be quoted using single quotes.  (Anyway, all\n values should be quoted by \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e.)  This function\n uses a unicode escape sequence to escape '?' characters, which\n would otherwise be expanded by \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eformatQuery\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efmtSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eS8.putStrLn $ quoteIdent \"hello \\\"world\\\"!\"\n\u003c/code\u003e\u003c/strong\u003e\"hello \"\"world\"\"!\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eS8.putStrLn $ quoteIdent \"hello \\\"world\\\"?\"\n\u003c/code\u003e\u003c/strong\u003e U&\"hello \"\"world\"\"\\003f\"\n\u003c/pre\u003e\u003cp\u003eNote that this quoting function is correct only if\n \u003ccode\u003eclient_encoding\u003c/code\u003e is \u003ccode\u003eSQL_ASCII\u003c/code\u003e, \u003ccode\u003eclient_coding\u003c/code\u003e is \u003ccode\u003eUTF8\u003c/code\u003e, or the\n identifier contains no multi-byte characters.  For other coding\n schemes, this function may erroneously duplicate bytes that look\n like quote characters but are actually part of a multi-byte\n character code.  In such cases, maliciously crafted identifiers\n will, even after quoting, allow injection of arbitrary SQL commands\n to the server.\n\u003c/p\u003e\u003cp\u003eThe upshot is that it is unwise to use this function on identifiers\n provided by untrustworthy sources.  Note this is true anyway,\n regardless of \u003ccode\u003eclient_encoding\u003c/code\u003e setting, because certain \"system\n column\" names (e.g., \u003ccode\u003eoid\u003c/code\u003e, \u003ccode\u003etableoid\u003c/code\u003e, \u003ccode\u003exmin\u003c/code\u003e, \u003ccode\u003ecmin\u003c/code\u003e, \u003ccode\u003exmax\u003c/code\u003e,\n \u003ccode\u003ecmax\u003c/code\u003e, \u003ccode\u003ectid\u003c/code\u003e) are likely to produce unexpected results even when\n properly quoted.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e for a convenient way to include quoted identifiers in\n parameter lists.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-Escape.html#quoteIdent",
        "fct-type": "function",
        "title": "quoteIdent"
      },
      "index": {
        "description": "Quote an identifier such as table or column name using double-quote characters Note this has nothing to do with quoting values which must be quoted using single quotes Anyway all values should be quoted by query or fmtSql This function uses unicode escape sequence to escape characters which would otherwise be expanded by query formatQuery or fmtSql S8.putStrLn quoteIdent hello world hello world S8.putStrLn quoteIdent hello world hello world Note that this quoting function is correct only if client encoding is SQL ASCII client coding is UTF8 or the identifier contains no multi-byte characters For other coding schemes this function may erroneously duplicate bytes that look like quote characters but are actually part of multi-byte character code In such cases maliciously crafted identifiers will even after quoting allow injection of arbitrary SQL commands to the server The upshot is that it is unwise to use this function on identifiers provided by untrustworthy sources Note this is true anyway regardless of client encoding setting because certain system column names e.g oid tableoid xmin cmin xmax cmax ctid are likely to produce unexpected results even when properly quoted See Id for convenient way to include quoted identifiers in parameter lists",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "quoteIdent",
        "normalized": "ByteString-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Ident",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:rowAliasName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the SQL identifier for the row alias.  This method must\n be non-strict in its argument.  Hence, it should discard the\n argument and return the name of the alias.  For example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data My_alias = My_alias\n instance RowAlias My_alias where rowAliasName _ = \"my_alias\"\n\u003c/pre\u003e\u003cp\u003eKeep in mind that PostgreSQL folds unquoted identifiers to\n lower-case.  However, this library quotes row aliases in \u003ccode\u003eSELECT\u003c/code\u003e\n statements, thereby preserving case.  Hence, if you want to call\n construct a \u003ccode\u003eWHERE\u003c/code\u003e clause without double-quoting row aliases in\n your \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e, you should avoid capital letters in alias names.\n\u003c/p\u003e\u003cp\u003eA default implementation of \u003ccode\u003erowAliasName\u003c/code\u003e exists for unit types\n (as well as empty data declarations) in the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e class.  The\n default converts the first character of the type name to\n lower-case, following the logic of \u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "g a row -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#rowAliasName",
        "fct-type": "method",
        "title": "rowAliasName"
      },
      "index": {
        "description": "Return the SQL identifier for the row alias This method must be non-strict in its argument Hence it should discard the argument and return the name of the alias For example LANGUAGE OverloadedStrings data My alias My alias instance RowAlias My alias where rowAliasName my alias Keep in mind that PostgreSQL folds unquoted identifiers to lower-case However this library quotes row aliases in SELECT statements thereby preserving case Hence if you want to call construct WHERE clause without double-quoting row aliases in your Query you should avoid capital letters in alias names default implementation of rowAliasName exists for unit types as well as empty data declarations in the Generic class The default converts the first character of the type name to lower-case following the logic of defaultModelTable",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "rowAliasName",
        "normalized": "a b c-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Alias Name",
        "signature": "g a row-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etrySave\u003c/a\u003e\u003c/code\u003e but instead of returning an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, throws a\n \u003ccode\u003e\u003ca\u003eValidationError\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is invalid.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e r -\u003e IO r",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Like trySave but instead of returning an Either throws ValidationError if the Model is invalid",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "save",
        "normalized": "Connection-\u003ea-\u003eIO a",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Connection-\u003er-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:toAs",
      "description": {
        "fct-descr": "\u003cp\u003eA type-restricted wrapper around the \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e constructor, under the\n same rationale as \u003ccode\u003e\u003ca\u003efromAs\u003c/a\u003e\u003c/code\u003e.  Not strict in its first argument.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "alias -\u003e row -\u003e As alias row",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#toAs",
        "fct-type": "function",
        "title": "toAs"
      },
      "index": {
        "description": "type-restricted wrapper around the As constructor under the same rationale as fromAs Not strict in its first argument",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "toAs",
        "normalized": "a-\u003eb-\u003eAs a b",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": "alias-\u003erow-\u003eAs alias row"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:trySave",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e to the database.  If the primary key is\n \u003ccode\u003e\u003ca\u003eNullKey\u003c/a\u003e\u003c/code\u003e, the item is written with an \u003ccode\u003eINSERT\u003c/code\u003e query, read back\n from the database, and returned with its primary key filled in.  If\n the primary key is not \u003ccode\u003e\u003ca\u003eNullKey\u003c/a\u003e\u003c/code\u003e, then the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is written with\n an \u003ccode\u003eUPDATE\u003c/code\u003e query and returned as-is.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is invalid (i.e. the return value of \u003ccode\u003e\u003ca\u003emodelValid\u003c/a\u003e\u003c/code\u003e is\n non-empty), a list of \u003ccode\u003eInvalidError\u003c/code\u003e is returned instead.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e r -\u003e IO (Either ValidationError r)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#trySave",
        "fct-type": "function",
        "title": "trySave"
      },
      "index": {
        "description": "Write Model to the database If the primary key is NullKey the item is written with an INSERT query read back from the database and returned with its primary key filled in If the primary key is not NullKey then the Model is written with an UPDATE query and returned as-is If the Model is invalid i.e the return value of modelValid is non-empty list of InvalidError is returned instead",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "trySave",
        "normalized": "Connection-\u003ea-\u003eIO(Either ValidationError a)",
        "package": "postgresql-orm",
        "partial": "Save",
        "signature": "Connection-\u003er-\u003eIO(Either ValidationError r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:unAs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "row",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#As",
        "fct-type": "function",
        "title": "unAs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "unAs",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Model.html#v:underscoreModelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternate \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e pattern in which Haskell type and field\n names are converted from camel-case to underscore notation.  The\n first argument is a prefix to be removed from field names (since\n Haskell requires field names to be unique across data types, while\n SQL allows the same column names to be used in different tables).\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e data Bar = Bar {\n     barId :: !DBKey\n   , barNameOfBar :: !String\n   , barParent :: !(Maybe (DBRef Bar))\n   } deriving (Show, Generic)\n\n instance Model Bar where modelInfo = underscoreModelInfo \"bar\"\n\u003c/pre\u003e\u003cp\u003ewould associate type \u003ccode\u003eBar\u003c/code\u003e with a database table called \u003ccode\u003ebar\u003c/code\u003e with\n fields \u003ccode\u003eid\u003c/code\u003e, \u003ccode\u003ename_of_bar\u003c/code\u003e, and \u003ccode\u003eparent\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.Model",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e ModelInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#underscoreModelInfo",
        "fct-type": "function",
        "title": "underscoreModelInfo"
      },
      "index": {
        "description": "An alternate Model pattern in which Haskell type and field names are converted from camel-case to underscore notation The first argument is prefix to be removed from field names since Haskell requires field names to be unique across data types while SQL allows the same column names to be used in different tables For example data Bar Bar barId DBKey barNameOfBar String barParent Maybe DBRef Bar deriving Show Generic instance Model Bar where modelInfo underscoreModelInfo bar would associate type Bar with database table called bar with fields id name of bar and parent",
        "hierarchy": "Database PostgreSQL ORM Model",
        "module": "Database.PostgreSQL.ORM.Model",
        "name": "underscoreModelInfo",
        "normalized": "ByteString-\u003eModelInfo a",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": "ByteString-\u003eModelInfo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-SqlType.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.SqlType",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM-SqlType.html",
        "fct-type": "module",
        "title": "SqlType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM SqlType",
        "module": "Database.PostgreSQL.ORM.SqlType",
        "name": "SqlType",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-SqlType.html#t:SqlType",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of Haskell types that can be converted to and from a\n particular SQL type.  For most instances, you only need to define\n \u003ccode\u003e\u003ca\u003esqlBaseType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.SqlType",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-SqlType.html#SqlType",
        "fct-type": "class",
        "title": "SqlType"
      },
      "index": {
        "description": "The class of Haskell types that can be converted to and from particular SQL type For most instances you only need to define sqlBaseType",
        "hierarchy": "Database PostgreSQL ORM SqlType",
        "module": "Database.PostgreSQL.ORM.SqlType",
        "name": "SqlType",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-SqlType.html#v:getTypeOid",
      "description": {
        "fct-descr": "\u003cp\u003eRetreive the \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e corresponding to a type.  You can subsequently\n use the \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e to call \u003ccode\u003egetTypeInfo\u003c/code\u003e for more information on the\n type.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.SqlType",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-ORM-SqlType.html#getTypeOid",
        "fct-type": "function",
        "title": "getTypeOid"
      },
      "index": {
        "description": "Retreive the Oid corresponding to type You can subsequently use the Oid to call getTypeInfo for more information on the type",
        "hierarchy": "Database PostgreSQL ORM SqlType",
        "module": "Database.PostgreSQL.ORM.SqlType",
        "name": "getTypeOid",
        "normalized": "Connection-\u003eByteString-\u003eIO Oid",
        "package": "postgresql-orm",
        "partial": "Type Oid",
        "signature": "Connection-\u003eByteString-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-SqlType.html#v:sqlBaseType",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the SQL type corresponding to Haskell type \u003ccode\u003ea\u003c/code\u003e,\n when a value of \u003ccode\u003ea\u003c/code\u003e can be null.  This is the SQL type to and\n from which a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e will be converted (where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n corresponds to the SQL value null).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.SqlType",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-SqlType.html#sqlBaseType",
        "fct-type": "method",
        "title": "sqlBaseType"
      },
      "index": {
        "description": "The name of the SQL type corresponding to Haskell type when value of can be null This is the SQL type to and from which Maybe will be converted where Nothing corresponds to the SQL value null",
        "hierarchy": "Database PostgreSQL ORM SqlType",
        "module": "Database.PostgreSQL.ORM.SqlType",
        "name": "sqlBaseType",
        "normalized": "a-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Base Type",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-SqlType.html#v:sqlType",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the SQL type corresponding to Haskell type \u003ccode\u003ea\u003c/code\u003e,\n when \u003ccode\u003ea\u003c/code\u003e is not wrapped in \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and hence cannot be null.  If\n \u003ccode\u003esqlType\u003c/code\u003e is unspecified, the default is to append \"\u003ccode\u003eNOT NULL\u003c/code\u003e\"\n to \u003ccode\u003e\u003ca\u003esqlBaseType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM.SqlType",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-SqlType.html#sqlType",
        "fct-type": "method",
        "title": "sqlType"
      },
      "index": {
        "description": "The name of the SQL type corresponding to Haskell type when is not wrapped in Maybe and hence cannot be null If sqlType is unspecified the default is to append NOT NULL to sqlBaseType",
        "hierarchy": "Database PostgreSQL ORM SqlType",
        "module": "Database.PostgreSQL.ORM.SqlType",
        "name": "sqlType",
        "normalized": "a-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Type",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html",
        "fct-type": "module",
        "title": "Validations"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "Validations",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Validations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#t:ValidationError",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationError",
        "fct-type": "newtype",
        "title": "ValidationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "ValidationError",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Validation Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#t:ValidationFunc",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationFunc",
        "fct-type": "type",
        "title": "ValidationFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "ValidationFunc",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Validation Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#v:ValidationError",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "ValidationError",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationError",
        "fct-type": "function",
        "title": "ValidationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "ValidationError",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Validation Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#v:validate",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "(a -\u003e Bool)-\u003e Text-\u003e Text-\u003e ValidationFunc a",
        "fct-type": "function",
        "title": "validate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "validate",
        "normalized": "(a-\u003eBool)-\u003eText-\u003eText-\u003eValidationFunc a",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eText-\u003eText-\u003eValidationFunc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#v:validateNotEmpty",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "(a -\u003e Text) -\u003e Text -\u003e Text -\u003e ValidationFunc a",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#validateNotEmpty",
        "fct-type": "function",
        "title": "validateNotEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "validateNotEmpty",
        "normalized": "(a-\u003eText)-\u003eText-\u003eText-\u003eValidationFunc a",
        "package": "postgresql-orm",
        "partial": "Not Empty",
        "signature": "(a-\u003eText)-\u003eText-\u003eText-\u003eValidationFunc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM-Validations.html#v:validationErrors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM.Validations",
        "fct-package": "postgresql-orm",
        "fct-signature": "HashMap Text [Text]",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationError",
        "fct-type": "function",
        "title": "validationErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM Validations",
        "module": "Database.PostgreSQL.ORM.Validations",
        "name": "validationErrors",
        "normalized": "HashMap Text[Text]",
        "package": "postgresql-orm",
        "partial": "Errors",
        "signature": "HashMap Text[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-ORM.html",
        "fct-type": "module",
        "title": "ORM"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "ORM",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "ORM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": ":.",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:As",
      "description": {
        "fct-descr": "\u003cp\u003eThe newtype \u003ccode\u003eAs\u003c/code\u003e can be wrapped around an existing type to give\n it a table name alias in a query.  This is necessary when a model\n is being joined with itself, to distinguish the two joined\n instances of the same table.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata X = X\ninstance \u003ccode\u003e\u003ca\u003eRowAlias\u003c/a\u003e\u003c/code\u003e X where rowAliasName = const \"x\"\n\n  ...\n    r \u003c- \u003ccode\u003edbSelect\u003c/code\u003e c $ addWhere_ \"bar.bar_key = x.bar_parent\" modelDBSelect\n         :: IO [Bar :. As X Bar]\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#As",
        "fct-type": "newtype",
        "title": "As"
      },
      "index": {
        "description": "The newtype As can be wrapped around an existing type to give it table name alias in query This is necessary when model is being joined with itself to distinguish the two joined instances of the same table For example LANGUAGE OverloadedStrings data instance RowAlias where rowAliasName const dbSelect addWhere bar.bar key x.bar parent modelDBSelect IO Bar As Bar",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "As",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:Association",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure representing a relationship between a model \u003ccode\u003ea\u003c/code\u003e\n and a model \u003ccode\u003eb\u003c/code\u003e.  At a high level, an \u003ccode\u003eAssociation a b\u003c/code\u003e tells you\n how to find rows of type \u003ccode\u003eb\u003c/code\u003e given rows of type \u003ccode\u003ea\u003c/code\u003e.  More\n concretely, this boils down to being able to make two types of\n query.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e You want to look up a bunch of \u003ccode\u003e(a \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e b)\u003c/code\u003es, filtering using\n  predicates on both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e (e.g., get a list of recent posts\n  and their authors).  For this purpose, you can use \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e,\n  which allows you to \u003ccode\u003e\u003ca\u003eaddWhere\u003c/a\u003e\u003c/code\u003e predicates mentioning columns in\n  both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e You already have an instance of type \u003ccode\u003ea\u003c/code\u003e, and want to find all\n  the \u003ccode\u003eb\u003c/code\u003es associated with it.  For that you use either \u003ccode\u003e\u003ca\u003eassocWhere\u003c/a\u003e\u003c/code\u003e\n  or \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e (which internally access fields \u003ccode\u003e\u003ca\u003eassocSelectOnlyB\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003eassocWhereQuery\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eassocWhereParam\u003c/a\u003e\u003c/code\u003e).  This type of query is\n  strictly less general than the first one, but can be formulated in\n  a more efficient way by extracting values directly from a concrete\n  instance of \u003ccode\u003ea\u003c/code\u003e without needing to touch table \u003ccode\u003ea\u003c/code\u003e in the\n  database.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that an \u003ccode\u003eAssociation\u003c/code\u003e is asymmetric.  It tells you how to get\n \u003ccode\u003eb\u003c/code\u003es from \u003ccode\u003ea\u003c/code\u003es, but not vice versa.  In practice, there will almost\n always be an association in the other direction, too.  Functions\n such as \u003ccode\u003e\u003ca\u003edbrefAssocs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejtAssocs\u003c/a\u003e\u003c/code\u003e therefore create an\n \u003ccode\u003eAssociation\u003c/code\u003e and its inverse simultaneously, returning them as a\n pair.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#Association",
        "fct-type": "data",
        "title": "Association"
      },
      "index": {
        "description": "data structure representing relationship between model and model At high level an Association tells you how to find rows of type given rows of type More concretely this boils down to being able to make two types of query You want to look up bunch of filtering using predicates on both and e.g get list of recent posts and their authors For this purpose you can use assocSelect which allows you to addWhere predicates mentioning columns in both and You already have an instance of type and want to find all the associated with it For that you use either assocWhere or findAssoc which internally access fields assocSelectOnlyB assocWhereQuery and assocWhereParam This type of query is strictly less general than the first one but can be formulated in more efficient way by extracting values directly from concrete instance of without needing to touch table in the database Note that an Association is asymmetric It tells you how to get from but not vice versa In practice there will almost always be an association in the other direction too Functions such as dbrefAssocs and jtAssocs therefore create an Association and its inverse simultaneously returning them as pair",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "Association",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Association",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:DBKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the Haskell data structure field containing a model's\n primary key.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e must have exactly one \u003ccode\u003eDBKey\u003c/code\u003e, and the \u003ccode\u003eDBKey\u003c/code\u003e must\n be the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's very first field in the Haskel data type\n definition.  (The ordering is enforced by\n \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e, which, through use of the\n \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension, fails to compile when the first field is\n not a \u003ccode\u003eDBKey\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e stored in the database should have a unique non-null\n primary key.  However, the key is determined at the time the\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is inserted into the database.  While you are constructing\n a new \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e to insert, you will not have its key.  Hence, you\n should use the value \u003ccode\u003eNullKey\u003c/code\u003e to let the database chose the key.\n\u003c/p\u003e\u003cp\u003eIf you wish to store a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's primary key as a reference in\n another \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e, do not copy the \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e structure.  Use \u003ccode\u003e\u003ca\u003emkDBRef\u003c/a\u003e\u003c/code\u003e\n to convert the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e's primary key to a foreign key reference.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKey",
        "fct-type": "data",
        "title": "DBKey"
      },
      "index": {
        "description": "The type of the Haskell data structure field containing model primary key Every Model must have exactly one DBKey and the DBKey must be the Model very first field in the Haskel data type definition The ordering is enforced by defaultModelGetPrimaryKey which through use of the DeriveGeneric extension fails to compile when the first field is not DBKey Each Model stored in the database should have unique non-null primary key However the key is determined at the time the Model is inserted into the database While you are constructing new Model to insert you will not have its key Hence you should use the value NullKey to let the database chose the key If you wish to store Model primary key as reference in another Model do not copy the DBKey structure Use mkDBRef to convert the Model primary key to foreign key reference",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBKey",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:DBRef",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBRef T\u003c/code\u003e represents a many-to-one relationship between tables. For\n example, if type \u003ccode\u003eA\u003c/code\u003e contains a \u003ccode\u003eDBRef B\u003c/code\u003e, then each \u003ccode\u003eB\u003c/code\u003e is associated\n with many \u003ccode\u003eA\u003c/code\u003e's. By contrast, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a one-to-one\n relationship.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDBRef\u003c/code\u003e is a type alias of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e.  The type \u003ccode\u003eDBRef T\u003c/code\u003e\n references an instance of type \u003ccode\u003eT\u003c/code\u003e by the primary key of its\n database row. The type argument \u003ccode\u003eT\u003c/code\u003e should be an instance of\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBRef",
        "fct-type": "type",
        "title": "DBRef"
      },
      "index": {
        "description": "DBRef represents many-to-one relationship between tables For example if type contains DBRef then each is associated with many By contrast DBRefUnique represents one-to-one relationship DBRef is type alias of kind The type DBRef references an instance of type by the primary key of its database row The type argument should be an instance of Model",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBRef",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:DBRefInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eDBRefInfo\u003c/code\u003e is a type alias for the common case that the\n reference in a \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e (as opposed to a\n \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e).  The functions in this library do not care what\n type of reference is used.  The type is generalized to \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e\n just to make it easier to assign a selector to \u003ccode\u003e\u003ca\u003edbrefSelector\u003c/a\u003e\u003c/code\u003e when\n the selector returns a \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e.  Note, however, that\n \u003ccode\u003e\u003ca\u003edefaultDBRefInfo\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e regardless of the flavor\n of reference actually encountered.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#DBRefInfo",
        "fct-type": "type",
        "title": "DBRefInfo"
      },
      "index": {
        "description": "DBRefInfo is type alias for the common case that the reference in GDBRefInfo is DBRef as opposed to DBRefUnique The functions in this library do not care what type of reference is used The type is generalized to GDBRefInfo just to make it easier to assign selector to dbrefSelector when the selector returns DBRefUnique Note however that defaultDBRefInfo returns DBRefInfo regardless of the flavor of reference actually encountered",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:DBRefUnique",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBRefUnique T\u003c/code\u003e represents a one-to-one relationship between types. For\n example, if type \u003ccode\u003eA\u003c/code\u003e contains a \u003ccode\u003eDBRefUnique B\u003c/code\u003e, then each \u003ccode\u003eA\u003c/code\u003e is associated\n with one (or at most one) \u003ccode\u003eB\u003c/code\u003e, and each \u003ccode\u003eB\u003c/code\u003e has one (or at most one) \u003ccode\u003eA\u003c/code\u003e\n associated with it.\n\u003c/p\u003e\u003cp\u003eBy contrast, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represents a many-to-one relationship.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "type",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBRefUnique",
        "fct-type": "type",
        "title": "DBRefUnique"
      },
      "index": {
        "description": "DBRefUnique represents one-to-one relationship between types For example if type contains DBRefUnique then each is associated with one or at most one and each has one or at most one associated with it By contrast DBRef represents many-to-one relationship",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBRefUnique",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:DBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eA deconstructed SQL select statement that allows easier\n manipulation of individual terms.  Several functions are provided\n to combine the \u003ccode\u003e\u003ca\u003eselFields\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eselFrom\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eselWhere\u003c/a\u003e\u003c/code\u003e clauses of\n muliple \u003ccode\u003eDBSelect\u003c/code\u003e structures.  Other clauses may be discarded when\n combining queries with join operations.  Hence it is advisable to\n set the other clauses at the end (or, if you set these fields, to\n collapse your \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e structure into a subquery using\n \u003ccode\u003e\u003ca\u003edbProject'\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "data",
        "title": "DBSelect"
      },
      "index": {
        "description": "deconstructed SQL select statement that allows easier manipulation of individual terms Several functions are provided to combine the selFields selFrom and selWhere clauses of muliple DBSelect structures Other clauses may be discarded when combining queries with join operations Hence it is advisable to set the other clauses at the end or if you set these fields to collapse your DBSelect structure into subquery using dbProject",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:GDBRefInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA common type of association is when one model contains a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e pointing to another model.  In this case, the\n model containing the \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e is known as the \u003cem\u003echild\u003c/em\u003e, and the\n referenced model is known as the \u003cem\u003eparent\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eTwo pieces of information are required to describe a parent-child\n relationship:  First, the field selector that extracts the Haskell\n \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e from the haskell type \u003ccode\u003echild\u003c/code\u003e, and second the name of the\n database column that stores this \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e\u003cp\u003eFor example, consider the following:\n\u003c/p\u003e\u003cpre\u003e data Author = Author {\n     authorId :: DBKey\n   } deriving (Show, Generic)\n instance Model Author\n \n data Post = Post {\n     postId :: DBKey\n   , postAuthorId :: DBRef Author\n   } deriving (Show, Generic)\n instance Model Post\n\n post_author_refinfo :: DBRefInfo Post Author\n post_author_refinfo = DBRefInfo {\n     dbrefSelector = postAuthorId\n   , dbrefQColumn = \"\\\"post\\\".\\\"postAuthorId\\\"\"\n   }\n\u003c/pre\u003e\u003cp\u003eNote that the parent-child relationship described by a \u003ccode\u003eGDBRefInfo\u003c/code\u003e\n is asymmetric, but bidirectional.  When a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e child\n parent\u003c/code\u003e exists, the schema should generally \u003cem\u003enot\u003c/em\u003e permit the\n existence of a valid \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e parent child\u003c/code\u003e structure.\n However, the \u003ccode\u003e\u003ca\u003edbrefAssocs\u003c/a\u003e\u003c/code\u003e function generates \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003es in\n both directions from a single \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConstructing such parent-child \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003es requires knowing how\n to extract primary keys from the \u003ccode\u003eparent\u003c/code\u003e type as well as the name\n of the column storing primary keys in \u003ccode\u003eparent\u003c/code\u003e.  Fortunately, this\n information is already available from the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e class, and thus\n does not need to be in the \u003ccode\u003eGDBRefInfo\u003c/code\u003e.  (Most functions on\n \u003ccode\u003eGDBRefInfo\u003c/code\u003es require \u003ccode\u003eparent\u003c/code\u003e and \u003ccode\u003echild\u003c/code\u003e to be instances of\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eWhen your \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003es are instances of \u003ccode\u003eGeneric\u003c/code\u003e (which will usually\n be the case), a \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e structure can be computed automatically\n by \u003ccode\u003e\u003ca\u003edefaultDBRefInfo\u003c/a\u003e\u003c/code\u003e.  This is the recommended way to produce a\n \u003ccode\u003eGDBRefInfo\u003c/code\u003e.  (Alternatively, see \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebelongsTo\u003c/a\u003e\u003c/code\u003e to make\n use of an entirely implicit \u003ccode\u003eDBRefInfo\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "data",
        "title": "GDBRefInfo"
      },
      "index": {
        "description": "common type of association is when one model contains DBRef or DBRefUnique pointing to another model In this case the model containing the DBRef is known as the child and the referenced model is known as the parent Two pieces of information are required to describe parent-child relationship First the field selector that extracts the Haskell DBRef from the haskell type child and second the name of the database column that stores this DBRef field For example consider the following data Author Author authorId DBKey deriving Show Generic instance Model Author data Post Post postId DBKey postAuthorId DBRef Author deriving Show Generic instance Model Post post author refinfo DBRefInfo Post Author post author refinfo DBRefInfo dbrefSelector postAuthorId dbrefQColumn post postAuthorId Note that the parent-child relationship described by GDBRefInfo is asymmetric but bidirectional When DBRefInfo child parent exists the schema should generally not permit the existence of valid DBRefInfo parent child structure However the dbrefAssocs function generates Association in both directions from single DBRefInfo Constructing such parent-child Association requires knowing how to extract primary keys from the parent type as well as the name of the column storing primary keys in parent Fortunately this information is already available from the Model class and thus does not need to be in the GDBRefInfo Most functions on GDBRefInfo require parent and child to be instances of Model When your Model are instances of Generic which will usually be the case DBRefInfo structure can be computed automatically by defaultDBRefInfo This is the recommended way to produce GDBRefInfo Alternatively see has and belongsTo to make use of an entirely implicit DBRefInfo",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "GDBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "GDBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:JoinTable",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure representing a dedicated join table in the\n database.  A join table differs from a model in that rows do not\n have primary keys.  Hence, model operations do not apply.\n Nonetheless a join table conveys information about a relationship\n between models.\n\u003c/p\u003e\u003cp\u003eNote that all names in a \u003ccode\u003eJoinTable\u003c/code\u003e should be unquoted.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "data",
        "title": "JoinTable"
      },
      "index": {
        "description": "data structure representing dedicated join table in the database join table differs from model in that rows do not have primary keys Hence model operations do not apply Nonetheless join table conveys information about relationship between models Note that all names in JoinTable should be unquoted",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "JoinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of data types that represent a database table.  This\n class conveys information necessary to move a Haskell data\n structure in and out of a database table.  The most important field\n is \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e, which describes the database table and column\n names.  \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e has a reasonable default implementation for\n types that are members of the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e class (using GHC's\n \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension), provided the following conditions hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The data type must have a single constructor that is defined\n      using record selector syntax.\n\u003c/li\u003e\u003cli\u003e The very first field of the data type must be a \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e to\n      represent the primary key.  Other orders will cause a\n      compilation error.\n\u003c/li\u003e\u003cli\u003e Every field of the data structure must be an instance of\n      \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf these three conditions hold and your database naming scheme\n follows the conventions of \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e--namely that the\n table name is the same as the type name with the first character\n downcased, and the field names are the same as the column\n names--then it is reasonable to have a completely empty (default)\n instance declaration:\n\u003c/p\u003e\u003cpre\u003e   data MyType = MyType { myKey :: !DBKey\n                        , myName :: !S.ByteString\n                        , myCamelCase :: !Int\n                        , ...\n                        } deriving (Show, Generic)\n   instance Model MyType\n\u003c/pre\u003e\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e method is called \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e.  You\n may wish to use almost all of the defaults, but tweak a few things.\n This is easily accomplished by overriding a few fields of the\n default structure.  For example, suppose your database columns use\n exactly the same name as your Haskell field names, but the name of\n your database table is not the same as the name of the Haskell data\n type.  You can override the database table name (field\n \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e) as follows:\n\u003c/p\u003e\u003cpre\u003e   instance Model MyType where\n       modelInfo = defaultModelInfo { modelTable = \"my_type\" }\n\u003c/pre\u003e\u003cp\u003eFinally, if you dislike the conventions followed by\n \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e, you can simply implement an alternate pattern.\n An example of this is \u003ccode\u003e\u003ca\u003eunderscoreModelInfo\u003c/a\u003e\u003c/code\u003e, which strips a prefix\n off every field name and converts everything from camel-case to\n underscore notation:\n\u003c/p\u003e\u003cpre\u003e   instance Model MyType where\n       modelInfo = underscoreModelInfo \"my\"\n\u003c/pre\u003e\u003cp\u003eThe above code will associate \u003ccode\u003eMyType\u003c/code\u003e with a database table\n \u003ccode\u003emy_type\u003c/code\u003e having column names \u003ccode\u003ekey\u003c/code\u003e, \u003ccode\u003ename\u003c/code\u003e, \u003ccode\u003ecamel_case\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eYou can implement other patterns like \u003ccode\u003e\u003ca\u003eunderscoreModelInfo\u003c/a\u003e\u003c/code\u003e by\n calling \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e and modifying the results.\n Alternatively, you can directly call the lower-level functions from\n which \u003ccode\u003e\u003ca\u003edefaultModelInfo\u003c/a\u003e\u003c/code\u003e is built (\u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003edefaultModelColumns\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#Model",
        "fct-type": "class",
        "title": "Model"
      },
      "index": {
        "description": "The class of data types that represent database table This class conveys information necessary to move Haskell data structure in and out of database table The most important field is modelInfo which describes the database table and column names modelInfo has reasonable default implementation for types that are members of the Generic class using GHC DeriveGeneric extension provided the following conditions hold The data type must have single constructor that is defined using record selector syntax The very first field of the data type must be DBKey to represent the primary key Other orders will cause compilation error Every field of the data structure must be an instance of FromField and ToField If these three conditions hold and your database naming scheme follows the conventions of defaultModelInfo namely that the table name is the same as the type name with the first character downcased and the field names are the same as the column names--then it is reasonable to have completely empty default instance declaration data MyType MyType myKey DBKey myName S.ByteString myCamelCase Int deriving Show Generic instance Model MyType The default modelInfo method is called defaultModelInfo You may wish to use almost all of the defaults but tweak few things This is easily accomplished by overriding few fields of the default structure For example suppose your database columns use exactly the same name as your Haskell field names but the name of your database table is not the same as the name of the Haskell data type You can override the database table name field modelTable as follows instance Model MyType where modelInfo defaultModelInfo modelTable my type Finally if you dislike the conventions followed by defaultModelInfo you can simply implement an alternate pattern An example of this is underscoreModelInfo which strips prefix off every field name and converts everything from camel-case to underscore notation instance Model MyType where modelInfo underscoreModelInfo my The above code will associate MyType with database table my type having column names key name camel case etc You can implement other patterns like underscoreModelInfo by calling defaultModelInfo and modifying the results Alternatively you can directly call the lower-level functions from which defaultModelInfo is built defaultModelTable defaultModelColumns defaultModelGetPrimaryKey",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "Model",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:ModelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eModelInfo T\u003c/code\u003e contains the information necessary for mapping\n \u003ccode\u003eT\u003c/code\u003e to a database table.  Each \u003ccode\u003e\u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type has a single\n \u003ccode\u003eModelInfo\u003c/code\u003e associated with it, accessible through the \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e class.  Note the table and column names must\n all be unquoted in this data structure, as they will later be\n quoted using \u003ccode\u003e\u003ca\u003equoteIdent\u003c/a\u003e\u003c/code\u003e by the \u003ccode\u003e\u003ca\u003emodelIdentifiers\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "data",
        "title": "ModelInfo"
      },
      "index": {
        "description": "ModelInfo contains the information necessary for mapping to database table Each Model type has single ModelInfo associated with it accessible through the modelInfo method of the Model class Note the table and column names must all be unquoted in this data structure as they will later be quoted using quoteIdent by the modelIdentifiers method",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "ModelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:RowAlias",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types that can be used as tags in as \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e alias.\n Such types should be unit types--in other words, have exactly one\n constructor where the constructor is nullary (take no arguments).\n The reason for this class is that the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e\n requires a way to extract the name of the row alias without having\n a concrete instance of the type.  This is provided by the\n \u003ccode\u003e\u003ca\u003erowAliasName\u003c/a\u003e\u003c/code\u003e method (which must be non-strict).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "class",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#RowAlias",
        "fct-type": "class",
        "title": "RowAlias"
      },
      "index": {
        "description": "The class of types that can be used as tags in as As alias Such types should be unit types--in other words have exactly one constructor where the constructor is nullary take no arguments The reason for this class is that the Model instance for As requires way to extract the name of the row alias without having concrete instance of the type This is provided by the rowAliasName method which must be non-strict",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "RowAlias",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Row Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#t:ValidationError",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationError",
        "fct-type": "newtype",
        "title": "ValidationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "ValidationError",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Validation Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:As",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "As",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#As",
        "fct-type": "function",
        "title": "As"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "As",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:DBKey",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBKey !DBKeyType",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKey",
        "fct-type": "function",
        "title": "DBKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBKey",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:DBRefInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBRefInfo",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "function",
        "title": "DBRefInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:DBSelect",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "DBSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "DBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:JoinTable",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "JoinTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "JoinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:ModelInfo",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "ModelInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "ModelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:NullKey",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "NullKey",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#DBKey",
        "fct-type": "function",
        "title": "NullKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "NullKey",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Null Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:ValidationError",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "ValidationError",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationError",
        "fct-type": "function",
        "title": "ValidationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "ValidationError",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Validation Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:addWhere",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a where clause, and pre-render parameters directly into the\n clause.  The argument \u003ccode\u003ep\u003c/code\u003e must have exactly as many fields as there\n are \u003ccode\u003e'?'\u003c/code\u003e characters in the \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.  Example:\n\u003c/p\u003e\u003cpre\u003e bars \u003c- dbSelect c $ addWhere \"bar_id = ?\" (Only target_id) $\n                      (modelDBSelect :: DBSelect Bar)\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e p -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#addWhere",
        "fct-type": "function",
        "title": "addWhere"
      },
      "index": {
        "description": "Add where clause and pre-render parameters directly into the clause The argument must have exactly as many fields as there are characters in the Query Example bars dbSelect addWhere bar id Only target id modelDBSelect DBSelect Bar",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "addWhere",
        "normalized": "Query-\u003ea-\u003eDBSelect b-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": "Query-\u003ep-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:addWhere_",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a where clause verbatim to a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.  The clause must\n \u003cem\u003enot\u003c/em\u003e contain the \u003ccode\u003eWHERE\u003c/code\u003e keyword (which is added automatically by\n \u003ccode\u003eaddWhere_\u003c/code\u003e if needed).  If the \u003ccode\u003eDBSelect\u003c/code\u003e has existing \u003ccode\u003eWHERE\u003c/code\u003e\n clauses, the new clause is appended with \u003ccode\u003eAND\u003c/code\u003e.  If the query\n contains any \u003ccode\u003e'?'\u003c/code\u003e characters, they will be rendered into the\n query and matching parameters will later have to be filled in via a\n call to \u003ccode\u003e\u003ca\u003edbSelectParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#addWhere_",
        "fct-type": "function",
        "title": "addWhere_"
      },
      "index": {
        "description": "Add where clause verbatim to DBSelect The clause must not contain the WHERE keyword which is added automatically by addWhere if needed If the DBSelect has existing WHERE clauses the new clause is appended with AND If the query contains any characters they will be rendered into the query and matching parameters will later have to be filled in via call to dbSelectParams",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "addWhere_",
        "normalized": "Query-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": "Query-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:assocProject",
      "description": {
        "fct-descr": "\u003cp\u003eA projection of \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e, extracting only the fields of\n model \u003ccode\u003eb\u003c/code\u003e.  Note that this query touches table \u003ccode\u003ea\u003c/code\u003e even if it does\n not return results from \u003ccode\u003ea\u003c/code\u003e.  Hence, you can use \u003ccode\u003e\u003ca\u003eaddWhere\u003c/a\u003e\u003c/code\u003e to add\n predicates on both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.  (Note the contrast to\n \u003ccode\u003e\u003ca\u003eassocSelectOnlyB\u003c/a\u003e\u003c/code\u003e, which does not touch table \u003ccode\u003ea\u003c/code\u003e at all, and\n hence in the case of an \u003ccode\u003eINNER JOIN\u003c/code\u003e might return rows of \u003ccode\u003eb\u003c/code\u003e that\n should not be part of the association.  \u003ccode\u003e\u003ca\u003eassocSelectOnlyB\u003c/a\u003e\u003c/code\u003e is\n intended for use only in conjunction with \u003ccode\u003e\u003ca\u003eassocWhereQuery\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e DBSelect b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#assocProject",
        "fct-type": "function",
        "title": "assocProject"
      },
      "index": {
        "description": "projection of assocSelect extracting only the fields of model Note that this query touches table even if it does not return results from Hence you can use addWhere to add predicates on both and Note the contrast to assocSelectOnlyB which does not touch table at all and hence in the case of an INNER JOIN might return rows of that should not be part of the association assocSelectOnlyB is intended for use only in conjunction with assocWhereQuery",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "assocProject",
        "normalized": "Association a b-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Project",
        "signature": "Association a b-\u003eDBSelect b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:assocSelect",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral select returning all instances of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e that\n match according to the association.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e DBSelect (a :. b)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#assocSelect",
        "fct-type": "function",
        "title": "assocSelect"
      },
      "index": {
        "description": "General select returning all instances of and that match according to the association",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "assocSelect",
        "normalized": "Association a b-\u003eDBSelect(a b)",
        "package": "postgresql-orm",
        "partial": "Select",
        "signature": "Association a b-\u003eDBSelect(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:assocWhere",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003eb\u003c/code\u003es associated with a particular\n \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e a -\u003e DBSelect b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#assocWhere",
        "fct-type": "function",
        "title": "assocWhere"
      },
      "index": {
        "description": "Returns DBSelect for all associated with particular",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "assocWhere",
        "normalized": "Association a b-\u003ea-\u003eDBSelect b",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": "Association a b-\u003ea-\u003eDBSelect b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:belongsTo",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e.  Short for\n\u003c/p\u003e\u003cpre\u003e fst $ dbrefAssocs defaultDBRefInfo\n\u003c/pre\u003e\u003cp\u003eSee an example at \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association child parent",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#belongsTo",
        "fct-type": "function",
        "title": "belongsTo"
      },
      "index": {
        "description": "The inverse of has Short for fst dbrefAssocs defaultDBRefInfo See an example at has",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "belongsTo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:chainAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two associations into one, and project away the middle\n type.  (The middle type can still be mentioned in \u003ccode\u003eWHERE\u003c/code\u003e clauses.)\n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cpre\u003e data Author = Author {\n     authorId :: DBKey\n   } deriving (Show, Generic)\n instance Model Author where modelInfo = underscoreModelInfo \"author\"\n \n data Post = Post {\n     postId :: DBKey\n   , postAuthorId :: DBRef Author\n   } deriving (Show, Generic)\n instance Model Post where modelInfo = underscoreModelInfo \"post\"\n \n data Comment = Comment {\n     commentId :: DBKey\n   , commentPostId :: DBRef Post\n   } deriving (Show, Generic)\n instance Model Comment where modelInfo = underscoreModelInfo \"comment\"\n \n author_posts :: Association Author Post\n post_author :: Association Post Author\n (post_author, author_posts) = dbrefAssocs defaultDBRefInfo\n \n -- Could equally well use dbrefAssocs as above\n post_comments :: Association Post Comment\n post_comments = has\n\n comment_post :: Association Comment Post\n comment_post = belongsTo\n \n comment_author :: Association Comment Author\n comment_author = chainAssoc comment_post post_author\n \n author_comments :: Association Author Comment\n author_comments =  chainAssoc author_posts post_comments\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e Association b c -\u003e Association a c",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#chainAssoc",
        "fct-type": "function",
        "title": "chainAssoc"
      },
      "index": {
        "description": "Combine two associations into one and project away the middle type The middle type can still be mentioned in WHERE clauses An example data Author Author authorId DBKey deriving Show Generic instance Model Author where modelInfo underscoreModelInfo author data Post Post postId DBKey postAuthorId DBRef Author deriving Show Generic instance Model Post where modelInfo underscoreModelInfo post data Comment Comment commentId DBKey commentPostId DBRef Post deriving Show Generic instance Model Comment where modelInfo underscoreModelInfo comment author posts Association Author Post post author Association Post Author post author author posts dbrefAssocs defaultDBRefInfo Could equally well use dbrefAssocs as above post comments Association Post Comment post comments has comment post Association Comment Post comment post belongsTo comment author Association Comment Author comment author chainAssoc comment post post author author comments Association Author Comment author comments chainAssoc author posts post comments",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "chainAssoc",
        "normalized": "Association a b-\u003eAssociation b c-\u003eAssociation a c",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "Association a b-\u003eAssociation b c-\u003eAssociation a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:dbSelect",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e query and return the resulting models.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e DBSelect a -\u003e IO [a]",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbSelect",
        "fct-type": "function",
        "title": "dbSelect"
      },
      "index": {
        "description": "Run DBSelect query and return the resulting models",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "dbSelect",
        "normalized": "Connection-\u003eDBSelect a-\u003eIO[a]",
        "package": "postgresql-orm",
        "partial": "Select",
        "signature": "Connection-\u003eDBSelect a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:dbSelectParams",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e query on parameters.  The number of \u003ccode\u003e'?'\u003c/code\u003e\n characters embedeed in various fields of the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e must\n exactly match the number of fields in parameter type \u003ccode\u003ep\u003c/code\u003e.  Note the\n order of arguments is such that the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e can be pre-rendered\n and the parameters supplied later.  Hence, you should use this\n version when the \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e is static.  For dynamically modified\n \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e structures, you may prefer \u003ccode\u003e\u003ca\u003edbSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a -\u003e Connection -\u003e p -\u003e IO [a]",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#dbSelectParams",
        "fct-type": "function",
        "title": "dbSelectParams"
      },
      "index": {
        "description": "Run DBSelect query on parameters The number of characters embedeed in various fields of the DBSelect must exactly match the number of fields in parameter type Note the order of arguments is such that the DBSelect can be pre-rendered and the parameters supplied later Hence you should use this version when the DBSelect is static For dynamically modified DBSelect structures you may prefer dbSelect",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "dbSelectParams",
        "normalized": "DBSelect a-\u003eConnection-\u003eb-\u003eIO[a]",
        "package": "postgresql-orm",
        "partial": "Select Params",
        "signature": "DBSelect a-\u003eConnection-\u003ep-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:dbrefAssocs",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate both the child-parent and parent-child \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003es\n implied by a \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "GDBRefInfo rt child parent -\u003e (Association child parent, Association parent child)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#dbrefAssocs",
        "fct-type": "function",
        "title": "dbrefAssocs"
      },
      "index": {
        "description": "Generate both the child-parent and parent-child Association implied by GDBRefInfo",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "dbrefAssocs",
        "normalized": "GDBRefInfo a b c-\u003e(Association b c,Association c b)",
        "package": "postgresql-orm",
        "partial": "Assocs",
        "signature": "GDBRefInfo rt child parent-\u003e(Association child parent,Association parent child)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:dbrefQColumn",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral SQL for the database column storing the reference.\n This should be double-quoted and table-qualified, in case the\n column name is a reserved keyword, contains capital letters, or\n conflicts with the name of a column in the joined table.  An\n example would be:\n\u003c/p\u003e\u003cpre\u003e dbrefQColumn = \"\\\"table_name\\\".\\\"column_name\\\"\"\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "function",
        "title": "dbrefQColumn"
      },
      "index": {
        "description": "Literal SQL for the database column storing the reference This should be double-quoted and table-qualified in case the column name is reserved keyword contains capital letters or conflicts with the name of column in the joined table An example would be dbrefQColumn table name column name",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "dbrefQColumn",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "QColumn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:dbrefSelector",
      "description": {
        "fct-descr": "\u003cp\u003eField selector returning a reference.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(child -\u003e GDBRef reftype parent)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#GDBRefInfo",
        "fct-type": "function",
        "title": "dbrefSelector"
      },
      "index": {
        "description": "Field selector returning reference",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "dbrefSelector",
        "normalized": "(a-\u003eGDBRef b c)",
        "package": "postgresql-orm",
        "partial": "Selector",
        "signature": "(child-\u003eGDBRef reftype parent)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:defaultDBRefInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eDBRefInfo\u003c/a\u003e\u003c/code\u003e from a model \u003ccode\u003echild\u003c/code\u003e that references\n \u003ccode\u003eparent\u003c/code\u003e.  For this to work, the \u003ccode\u003echild\u003c/code\u003e type must be an instance\n of \u003ccode\u003eGeneric\u003c/code\u003e and must contain exactly one field of the any of the\n following types:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGDBRef\u003c/a\u003e\u003c/code\u003e rt parent\u003c/code\u003e, which matches both \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e parent\u003c/code\u003e and\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e parent\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eMaybe (\u003ccode\u003e\u003ca\u003eGDBRef\u003c/a\u003e\u003c/code\u003e rt parent)\u003c/code\u003e, for cases where the reference\n   might be \u003ccode\u003eNULL\u003c/code\u003e.  Note, however, that an exception will be thrown\n   if you call \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e on a child whose reference is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eA special case arises when a Model contains a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e to itself.\n If you just wish to find parents and children given an existing\n structure (i.e., \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e), it is okay to declare an\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003e MyType MyType\u003c/code\u003e.  However, in this case attempts to\n use \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e will then fail.  To work around this problem, the\n parent must use a row alias.\n\u003c/p\u003e\u003cp\u003eNote that currently \u003cem\u003ealiasing the child will not work\u003c/em\u003e, since the\n \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e data structure will not contain a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e field, only the\n contents of the \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e data structure.  An example of doing this\n correctly (using \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebelongsTo\u003c/a\u003e\u003c/code\u003e, both of which wrap\n \u003ccode\u003edefaultDBRefInfo\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e data Bar = Bar {\n     barId :: !DBKey\n   , barName :: !String\n   , barParent :: !(Maybe (DBRef Bar))\n   } deriving (Show, Generic)\n instance Model Bar where modelInfo = underscoreModelInfo \"bar\"\n \n data ParentBar = ParentBar\n instance RowAlias ParentBar where rowAliasName _ = \"parent_bar\"\n \n toParent :: Association Bar (As ParentBar Bar)\n toParent = belongsTo\n \n toChild :: Association (As ParentBar Bar) Bar\n toChild = has\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBRefInfo child parent",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#defaultDBRefInfo",
        "fct-type": "function",
        "title": "defaultDBRefInfo"
      },
      "index": {
        "description": "Creates DBRefInfo from model child that references parent For this to work the child type must be an instance of Generic and must contain exactly one field of the any of the following types GDBRef rt parent which matches both DBRef parent and DBRefUnique parent Maybe GDBRef rt parent for cases where the reference might be NULL Note however that an exception will be thrown if you call findAssoc on child whose reference is Nothing special case arises when Model contains DBRef to itself If you just wish to find parents and children given an existing structure i.e findAssoc it is okay to declare an Association MyType MyType However in this case attempts to use assocSelect will then fail To work around this problem the parent must use row alias Note that currently aliasing the child will not work since the As data structure will not contain DBRef field only the contents of the As data structure An example of doing this correctly using has and belongsTo both of which wrap defaultDBRefInfo data Bar Bar barId DBKey barName String barParent Maybe DBRef Bar deriving Show Generic instance Model Bar where modelInfo underscoreModelInfo bar data ParentBar ParentBar instance RowAlias ParentBar where rowAliasName parent bar toParent Association Bar As ParentBar Bar toParent belongsTo toChild Association As ParentBar Bar Bar toChild has",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "defaultDBRefInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBRef Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:defaultJoinTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe default join table has the following fields:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ejtName\u003c/code\u003e is the name of the two models (in alphabetical order),\n separated by an \u003ccode\u003e'_'\u003c/code\u003e character.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ejtColumnA\u003c/a\u003e\u003c/code\u003e is the name of model \u003ccode\u003ea\u003c/code\u003e, an \u003ccode\u003e'_'\u003c/code\u003e character, and\n the name of the primary key column in table \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ejtColumnB\u003c/a\u003e\u003c/code\u003e is the name of model \u003ccode\u003eb\u003c/code\u003e, an \u003ccode\u003e'_'\u003c/code\u003e character, and\n the name of the primary key column in table \u003ccode\u003eb\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003edefaultJoinTable\u003c/a\u003e\u003c/code\u003e cannot create a default join table for\n joining a model to itself, as following these rules the two columns\n would have the same name.  If you wish to join a table to itself,\n you have two options:  First, you can define the join table and\n assign the column names manually.  This will permit you to call\n \u003ccode\u003e\u003ca\u003efindAssoc\u003c/a\u003e\u003c/code\u003e, but you still will not be able to use \u003ccode\u003e\u003ca\u003eassocSelect\u003c/a\u003e\u003c/code\u003e\n for more complex queries, since SQL does not permit joins between\n two tables with the same name.  The second option is to give one of\n the sides of the join table a row alias with \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e data ParentBar = ParentBar\n instance RowAlias ParentBar where rowAliasName _ = \"parent_bar\"\n \n selfJoinTable :: JoinTable Bar (As ParentBar Bar)\n selfJoinTable = defaultJoinTable\n \n selfJoin :: Association Bar (As ParentBar Bar)\n otherSelfJoin :: Association (As ParentBar Bar) Bar\n (selfJoin, otherSelfJoin) = jtAssocs selfJoinTable\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#defaultJoinTable",
        "fct-type": "function",
        "title": "defaultJoinTable"
      },
      "index": {
        "description": "The default join table has the following fields jtName is the name of the two models in alphabetical order separated by an character jtColumnA is the name of model an character and the name of the primary key column in table jtColumnB is the name of model an character and the name of the primary key column in table Note that defaultJoinTable cannot create default join table for joining model to itself as following these rules the two columns would have the same name If you wish to join table to itself you have two options First you can define the join table and assign the column names manually This will permit you to call findAssoc but you still will not be able to use assocSelect for more complex queries since SQL does not permit joins between two tables with the same name The second option is to give one of the sides of the join table row alias with As For example data ParentBar ParentBar instance RowAlias ParentBar where rowAliasName parent bar selfJoinTable JoinTable Bar As ParentBar Bar selfJoinTable defaultJoinTable selfJoin Association Bar As ParentBar Bar otherSelfJoin Association As ParentBar Bar Bar selfJoin otherSelfJoin jtAssocs selfJoinTable",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "defaultJoinTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Join Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:defaultModelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe default definition of \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e. See the documentation at\n \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e for more information.  Sets \u003ccode\u003e\u003ca\u003emodelTable\u003c/a\u003e\u003c/code\u003e to the name of the\n type with the first character converted to lower-case.  Sets\n \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e to the names of the Haskell field selectors.  Sets\n \u003ccode\u003e\u003ca\u003emodelPrimaryColumn\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e0\u003c/code\u003e and extracts the first field of the\n structure for \u003ccode\u003e\u003ca\u003emodelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e.  Will fail to compile unless\n the data structure is defined with record syntax and that its first\n field is of type \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that defaults for the individual fields are available in\n separate functions (e.g., \u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e) with fewer class\n requirements in the context, in case you want to make piecemeal use\n of defaults.  The default for \u003ccode\u003e\u003ca\u003emodelPrimaryColumn\u003c/a\u003e\u003c/code\u003e is 0.  If you\n overwrite that, you will need to overwrite \u003ccode\u003e\u003ca\u003emodelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e as\n well (and likely vice versa).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#defaultModelInfo",
        "fct-type": "function",
        "title": "defaultModelInfo"
      },
      "index": {
        "description": "The default definition of modelInfo See the documentation at Model for more information Sets modelTable to the name of the type with the first character converted to lower-case Sets modelColumns to the names of the Haskell field selectors Sets modelPrimaryColumn to and extracts the first field of the structure for modelGetPrimaryKey Will fail to compile unless the data structure is defined with record syntax and that its first field is of type DBKey Note that defaults for the individual fields are available in separate functions e.g defaultModelTable with fewer class requirements in the context in case you want to make piecemeal use of defaults The default for modelPrimaryColumn is If you overwrite that you will need to overwrite modelGetPrimaryKey as well and likely vice versa",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "defaultModelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the row corresponding to a particular data structure from\n the database.  This function only looks at the primary key in the\n data structure.  It is an error to call this function if the\n primary key is not set.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e a -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#destroy",
        "fct-type": "function",
        "title": "destroy"
      },
      "index": {
        "description": "Remove the row corresponding to particular data structure from the database This function only looks at the primary key in the data structure It is an error to call this function if the primary key is not set",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "destroy",
        "normalized": "Connection-\u003ea-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Connection-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:destroyByRef",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a row from the database without fetching it first.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e GDBRef rt a -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#destroyByRef",
        "fct-type": "function",
        "title": "destroyByRef"
      },
      "index": {
        "description": "Remove row from the database without fetching it first",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "destroyByRef",
        "normalized": "Connection-\u003eGDBRef a b-\u003eIO()",
        "package": "postgresql-orm",
        "partial": "By Ref",
        "signature": "Connection-\u003eGDBRef rt a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:findAll",
      "description": {
        "fct-descr": "\u003cp\u003eDump an entire model.  Useful for development and debugging only,\n as every row will be read into memory before the function returns.\n\u003c/p\u003e\u003cp\u003eNote that unlike the other primary model operations, it is OK to\n call \u003ccode\u003e\u003ca\u003efindAll\u003c/a\u003e\u003c/code\u003e even on degenerate models such as \u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e IO [r]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#findAll",
        "fct-type": "function",
        "title": "findAll"
      },
      "index": {
        "description": "Dump an entire model Useful for development and debugging only as every row will be read into memory before the function returns Note that unlike the other primary model operations it is OK to call findAll even on degenerate models such as As and",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "findAll",
        "normalized": "Connection-\u003eIO[a]",
        "package": "postgresql-orm",
        "partial": "All",
        "signature": "Connection-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:findAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eFollow an association to return all of the \u003ccode\u003eb\u003c/code\u003es associated\n with a particular \u003ccode\u003ea\u003c/code\u003e.  The behavior is similar to:\n\u003c/p\u003e\u003cpre\u003e findAssoc' ab c a = dbSelect c $ assocWhere ab a\n\u003c/pre\u003e\u003cp\u003eBut if the first argument is a static association, this function\n may be marginally faster because it pre-renders most of the query.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e Connection -\u003e a -\u003e IO [b]",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#findAssoc",
        "fct-type": "function",
        "title": "findAssoc"
      },
      "index": {
        "description": "Follow an association to return all of the associated with particular The behavior is similar to findAssoc ab dbSelect assocWhere ab But if the first argument is static association this function may be marginally faster because it pre-renders most of the query",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "findAssoc",
        "normalized": "Association a b-\u003eConnection-\u003ea-\u003eIO[b]",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "Association a b-\u003eConnection-\u003ea-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:findRow",
      "description": {
        "fct-descr": "\u003cp\u003eFollow a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e and fetch the target row from\n the database into a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e type \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e GDBRef rt r -\u003e IO (Maybe r)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#findRow",
        "fct-type": "function",
        "title": "findRow"
      },
      "index": {
        "description": "Follow DBRef or DBRefUnique and fetch the target row from the database into Model type",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "findRow",
        "normalized": "Connection-\u003eGDBRef a b-\u003eIO(Maybe b)",
        "package": "postgresql-orm",
        "partial": "Row",
        "signature": "Connection-\u003eGDBRef rt r-\u003eIO(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:fromAs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromAs\u003c/code\u003e extracts the \u003ccode\u003erow\u003c/code\u003e from an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAs\u003c/a\u003e\u003c/code\u003e alias row\u003c/code\u003e, but\n constrains the type of \u003ccode\u003ealias\u003c/code\u003e to be the same as its first argument\n (which is non-strict).  This can save you from explicitly\n specifying types.  For example:\n\u003c/p\u003e\u003cpre\u003e data X = X deriving (Generic)\n instance RowAlias X where rowAliasName = const \"x\"\n\n ...\n   r \u003c- map (\\(b1 :. b2) -\u003e (b1, fromAs X b2)) \u003c$\u003e\n       dbSelect c $ addWhere \\\"bar.bar_key = x.bar_parent\\\" modelDBSelect\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "alias -\u003e As alias row -\u003e row",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#fromAs",
        "fct-type": "function",
        "title": "fromAs"
      },
      "index": {
        "description": "fromAs extracts the row from an As alias row but constrains the type of alias to be the same as its first argument which is non-strict This can save you from explicitly specifying types For example data deriving Generic instance RowAlias where rowAliasName const map b1 b2 b1 fromAs b2 dbSelect addWhere bar.bar key x.bar parent modelDBSelect",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "fromAs",
        "normalized": "a-\u003eAs a b-\u003eb",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": "alias-\u003eAs alias row-\u003erow"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:has",
      "description": {
        "fct-descr": "\u003cp\u003eShort for\n\u003c/p\u003e\u003cpre\u003e snd $ dbrefAssocs defaultDBRefInfo\n\u003c/pre\u003e\u003cp\u003eNote the inverse \u003ccode\u003e\u003ca\u003eAssociation\u003c/a\u003e\u003c/code\u003e is given by \u003ccode\u003e\u003ca\u003ebelongsTo\u003c/a\u003e\u003c/code\u003e.  For\n example, given the \u003ccode\u003eAuthor\u003c/code\u003e and \u003ccode\u003ePost\u003c/code\u003e models described in the\n documentation for \u003ccode\u003e\u003ca\u003eGDBRefInfo\u003c/a\u003e\u003c/code\u003e, in which each \u003ccode\u003ePost\u003c/code\u003e references an\n \u003ccode\u003eAuthor\u003c/code\u003e, you might say:\n\u003c/p\u003e\u003cpre\u003e author_post :: Association Author Post\n author_post = has\n\n post_author :: Association Post Author\n post_author = belongsTo\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association parent child",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#has",
        "fct-type": "function",
        "title": "has"
      },
      "index": {
        "description": "Short for snd dbrefAssocs defaultDBRefInfo Note the inverse Association is given by belongsTo For example given the Author and Post models described in the documentation for GDBRefInfo in which each Post references an Author you might say author post Association Author Post author post has post author Association Post Author post author belongsTo",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "has",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtAdd",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an association between two models to a join table.  Returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the association was not already there.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Connection -\u003e a -\u003e b -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtAdd",
        "fct-type": "function",
        "title": "jtAdd"
      },
      "index": {
        "description": "Add an association between two models to join table Returns True if the association was not already there",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtAdd",
        "normalized": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool",
        "package": "postgresql-orm",
        "partial": "Add",
        "signature": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtAssocs",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the two associations implied by a \u003ccode\u003e\u003ca\u003eJoinTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e (Association a b, Association b a)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtAssocs",
        "fct-type": "function",
        "title": "jtAssocs"
      },
      "index": {
        "description": "Generate the two associations implied by JoinTable",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtAssocs",
        "normalized": "JoinTable a b-\u003e(Association a b,Association b a)",
        "package": "postgresql-orm",
        "partial": "Assocs",
        "signature": "JoinTable a b-\u003e(Association a b,Association b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtColumnA",
      "description": {
        "fct-descr": "\u003cp\u003eName of the column in table \u003ccode\u003e\u003ca\u003ejtTable\u003c/a\u003e\u003c/code\u003e that contains a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e\n to model \u003ccode\u003ea\u003c/code\u003e.  (Not quoted or table-qualified.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "jtColumnA"
      },
      "index": {
        "description": "Name of the column in table jtTable that contains DBRef to model Not quoted or table-qualified",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtColumnA",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtColumnB",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ejtColumnA\u003c/a\u003e\u003c/code\u003e for model \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "jtColumnB"
      },
      "index": {
        "description": "Like jtColumnA for model",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtColumnB",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtRemove",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an association from a join table.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the\n association was previously there.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Connection -\u003e a -\u003e b -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtRemove",
        "fct-type": "function",
        "title": "jtRemove"
      },
      "index": {
        "description": "Remove an association from join table Returns True if the association was previously there",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtRemove",
        "normalized": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool",
        "package": "postgresql-orm",
        "partial": "Remove",
        "signature": "JoinTable a b-\u003eConnection-\u003ea-\u003eb-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtRemoveByRef",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an assocation from a join table when you don't have the\n target instances of the two models handy, but do have references.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "JoinTable a b -\u003e Connection -\u003e GDBRef rt a -\u003e GDBRef rt b -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#jtRemoveByRef",
        "fct-type": "function",
        "title": "jtRemoveByRef"
      },
      "index": {
        "description": "Remove an assocation from join table when you don have the target instances of the two models handy but do have references",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtRemoveByRef",
        "normalized": "JoinTable a b-\u003eConnection-\u003eGDBRef c a-\u003eGDBRef c b-\u003eIO Bool",
        "package": "postgresql-orm",
        "partial": "Remove By Ref",
        "signature": "JoinTable a b-\u003eConnection-\u003eGDBRef rt a-\u003eGDBRef rt b-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:jtTable",
      "description": {
        "fct-descr": "\u003cp\u003eName of the join table in the database.  (Not quoted.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#JoinTable",
        "fct-type": "function",
        "title": "jtTable"
      },
      "index": {
        "description": "Name of the join table in the database Not quoted",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "jtTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:mkDBRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a reference to the primary key of a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e, suitable for\n storing in a \u003ccode\u003e\u003ca\u003eDBRef\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDBRefUnique\u003c/a\u003e\u003c/code\u003e field of a different \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e GDBRef rt a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#mkDBRef",
        "fct-type": "function",
        "title": "mkDBRef"
      },
      "index": {
        "description": "Create reference to the primary key of Model suitable for storing in DBRef or DBRefUnique field of different Model",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "mkDBRef",
        "normalized": "a-\u003eGDBRef b a",
        "package": "postgresql-orm",
        "partial": "DBRef",
        "signature": "a-\u003eGDBRef rt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelColumns",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of the database columns corresponding to fields of\n this model.  The column names should appear in the order in\n which the fields are defined in the Haskell data type \u003ccode\u003ea\u003c/code\u003e\n (which should also be the order in which \u003ccode\u003e\u003ca\u003emodelRead\u003c/a\u003e\u003c/code\u003e parses\n them to an \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emodelWrite\u003c/a\u003e\u003c/code\u003e marshalls them).\n\u003c/p\u003e\u003cp\u003eNote that all queries generated by the library specify explicit\n column names.  Hence the order of columns does not need to\n match their order in the database table.  They should instead\n match the order of fields in the Haskell data structure.\n\u003c/p\u003e\u003cp\u003eThe default, given by \u003ccode\u003e\u003ca\u003edefaultModelColumns\u003c/a\u003e\u003c/code\u003e, is to use the\n Haskell field names for \u003ccode\u003ea\u003c/code\u003e.  This default will fail to compile\n if \u003ccode\u003ea\u003c/code\u003e is not defined using record syntax.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "![ByteString]",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelColumns"
      },
      "index": {
        "description": "The names of the database columns corresponding to fields of this model The column names should appear in the order in which the fields are defined in the Haskell data type which should also be the order in which modelRead parses them to an and modelWrite marshalls them Note that all queries generated by the library specify explicit column names Hence the order of columns does not need to match their order in the database table They should instead match the order of fields in the Haskell data structure The default given by defaultModelColumns is to use the Haskell field names for This default will fail to compile if is not defined using record syntax",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelColumns",
        "normalized": "[ByteString]",
        "package": "postgresql-orm",
        "partial": "Columns",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelDBSelect",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e that returns all rows of a model.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#modelDBSelect",
        "fct-type": "function",
        "title": "modelDBSelect"
      },
      "index": {
        "description": "DBSelect that returns all rows of model",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelDBSelect",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "DBSelect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelGetPrimaryKey",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the primary key of a particular model instance.  If\n you customize this field, you must also customize\n \u003ccode\u003e\u003ca\u003emodelPrimaryColumn\u003c/a\u003e\u003c/code\u003e--no check is made that the two are\n consistent.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!(a -\u003e DBKey)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelGetPrimaryKey"
      },
      "index": {
        "description": "Return the primary key of particular model instance If you customize this field you must also customize modelPrimaryColumn no check is made that the two are consistent",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelGetPrimaryKey",
        "normalized": "(a-\u003eDBKey)",
        "package": "postgresql-orm",
        "partial": "Get Primary Key",
        "signature": "(a-\u003eDBKey)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emodelInfo\u003c/code\u003e provides information about how the Haskell data\n type is stored in the database, in the form of a \u003ccode\u003e\u003ca\u003eModelInfo\u003c/a\u003e\u003c/code\u003e data\n structure.  Among other things, this structure specifies the name\n of the database table, the names of the database columns\n corresponding to the Haskell data structure fields, and the\n position of the primary key in both the database columns and the\n Haskell data structure.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "ModelInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelInfo",
        "fct-type": "method",
        "title": "modelInfo"
      },
      "index": {
        "description": "modelInfo provides information about how the Haskell data type is stored in the database in the form of ModelInfo data structure Among other things this structure specifies the name of the database table the names of the database columns corresponding to the Haskell data structure fields and the position of the primary key in both the database columns and the Haskell data structure",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelInfo",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelPrimaryColumn",
      "description": {
        "fct-descr": "\u003cp\u003eThe 0-based index of the primary key column in\n \u003ccode\u003e\u003ca\u003emodelColumns\u003c/a\u003e\u003c/code\u003e.  This should be 0 when your data structure's\n first field is its \u003ccode\u003e\u003ca\u003eDBKey\u003c/a\u003e\u003c/code\u003e (highly recommended, and required by\n \u003ccode\u003e\u003ca\u003edefaultModelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e).  If you customize this field, you\n must also customize \u003ccode\u003e\u003ca\u003emodelGetPrimaryKey\u003c/a\u003e\u003c/code\u003e--no check is made that\n the two are consistent.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Int",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelPrimaryColumn"
      },
      "index": {
        "description": "The based index of the primary key column in modelColumns This should be when your data structure first field is its DBKey highly recommended and required by defaultModelGetPrimaryKey If you customize this field you must also customize modelGetPrimaryKey no check is made that the two are consistent",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelPrimaryColumn",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Primary Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the database table corresponding to this model.\n The default \u003ccode\u003e\u003ca\u003emodelInfo\u003c/a\u003e\u003c/code\u003e instance uses \u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e,\n which is the name of your data type with the first letter\n downcased.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#ModelInfo",
        "fct-type": "function",
        "title": "modelTable"
      },
      "index": {
        "description": "The name of the database table corresponding to this model The default modelInfo instance uses defaultModelTable which is the name of your data type with the first letter downcased",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelTable",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:modelValid",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a validation of the model, returning any errors if\n it is invalid.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e ValidationError",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#modelValid",
        "fct-type": "method",
        "title": "modelValid"
      },
      "index": {
        "description": "Perform validation of the model returning any errors if it is invalid",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "modelValid",
        "normalized": "a-\u003eValidationError",
        "package": "postgresql-orm",
        "partial": "Valid",
        "signature": "a-\u003eValidationError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:nestAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two associations into one.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Association a b -\u003e Association b c -\u003e Association a (b :. c)",
        "fct-source": "src/Database-PostgreSQL-ORM-Association.html#nestAssoc",
        "fct-type": "function",
        "title": "nestAssoc"
      },
      "index": {
        "description": "Combine two associations into one",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "nestAssoc",
        "normalized": "Association a b-\u003eAssociation b c-\u003eAssociation a(b c)",
        "package": "postgresql-orm",
        "partial": "Assoc",
        "signature": "Association a b-\u003eAssociation b c-\u003eAssociation a(b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:primaryKey",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the primary key of a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "a -\u003e DBKey",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#primaryKey",
        "fct-type": "function",
        "title": "primaryKey"
      },
      "index": {
        "description": "Lookup the primary key of Model",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "primaryKey",
        "normalized": "a-\u003eDBKey",
        "package": "postgresql-orm",
        "partial": "Key",
        "signature": "a-\u003eDBKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:rowAliasName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the SQL identifier for the row alias.  This method must\n be non-strict in its argument.  Hence, it should discard the\n argument and return the name of the alias.  For example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n data My_alias = My_alias\n instance RowAlias My_alias where rowAliasName _ = \"my_alias\"\n\u003c/pre\u003e\u003cp\u003eKeep in mind that PostgreSQL folds unquoted identifiers to\n lower-case.  However, this library quotes row aliases in \u003ccode\u003eSELECT\u003c/code\u003e\n statements, thereby preserving case.  Hence, if you want to call\n construct a \u003ccode\u003eWHERE\u003c/code\u003e clause without double-quoting row aliases in\n your \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e, you should avoid capital letters in alias names.\n\u003c/p\u003e\u003cp\u003eA default implementation of \u003ccode\u003erowAliasName\u003c/code\u003e exists for unit types\n (as well as empty data declarations) in the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e class.  The\n default converts the first character of the type name to\n lower-case, following the logic of \u003ccode\u003e\u003ca\u003edefaultModelTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "g a row -\u003e ByteString",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#rowAliasName",
        "fct-type": "method",
        "title": "rowAliasName"
      },
      "index": {
        "description": "Return the SQL identifier for the row alias This method must be non-strict in its argument Hence it should discard the argument and return the name of the alias For example LANGUAGE OverloadedStrings data My alias My alias instance RowAlias My alias where rowAliasName my alias Keep in mind that PostgreSQL folds unquoted identifiers to lower-case However this library quotes row aliases in SELECT statements thereby preserving case Hence if you want to call construct WHERE clause without double-quoting row aliases in your Query you should avoid capital letters in alias names default implementation of rowAliasName exists for unit types as well as empty data declarations in the Generic class The default converts the first character of the type name to lower-case following the logic of defaultModelTable",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "rowAliasName",
        "normalized": "a b c-\u003eByteString",
        "package": "postgresql-orm",
        "partial": "Alias Name",
        "signature": "g a row-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etrySave\u003c/a\u003e\u003c/code\u003e but instead of returning an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, throws a\n \u003ccode\u003e\u003ca\u003eValidationError\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is invalid.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e r -\u003e IO r",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Like trySave but instead of returning an Either throws ValidationError if the Model is invalid",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "save",
        "normalized": "Connection-\u003ea-\u003eIO a",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "Connection-\u003er-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selFields",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selFrom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!FromClause",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selFrom",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selGroupBy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selGroupBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selGroupBy",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Group By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selHaving",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selHaving"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selHaving",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Having",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selLimit",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selOffset",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selOrderBy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selOrderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selOrderBy",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Order By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selSelectKeyword",
      "description": {
        "fct-descr": "\u003cp\u003eBy default \u003ccode\u003e\"SELECT\"\u003c/code\u003e, but might usefully be set to\n something else such as \u003ccode\u003e\"SELECT DISTINCT\"\u003c/code\u003e in some\n situations.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selSelectKeyword"
      },
      "index": {
        "description": "By default SELECT but might usefully be set to something else such as SELECT DISTINCT in some situations",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selSelectKeyword",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Select Keyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selWhere",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selWhere"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selWhere",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Where",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selWhereKeyword",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty by default, but set to \u003ccode\u003e\"WHERE\"\u003c/code\u003e if any \u003ccode\u003eWHERE\u003c/code\u003e\n clauses are added to the \u003ccode\u003e\u003ca\u003eselWhere\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selWhereKeyword"
      },
      "index": {
        "description": "Empty by default but set to WHERE if any WHERE clauses are added to the selWhere field",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selWhereKeyword",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "Where Keyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:selWith",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "!Query",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#DBSelect",
        "fct-type": "function",
        "title": "selWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "selWith",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:setLimit",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eLIMIT\u003c/code\u003e clause of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Int -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#setLimit",
        "fct-type": "function",
        "title": "setLimit"
      },
      "index": {
        "description": "Set the LIMIT clause of DBSelect",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "setLimit",
        "normalized": "Int-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Limit",
        "signature": "Int-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:setOffset",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eOFFSET\u003c/code\u003e clause of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Int -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#setOffset",
        "fct-type": "function",
        "title": "setOffset"
      },
      "index": {
        "description": "Set the OFFSET clause of DBSelect",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "setOffset",
        "normalized": "Int-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Offset",
        "signature": "Int-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:setOrderBy",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003eORDER BY\u003c/code\u003e clause of a \u003ccode\u003e\u003ca\u003eDBSelect\u003c/a\u003e\u003c/code\u003e.  Example:\n\u003c/p\u003e\u003cpre\u003e dbSelect c $ setOrderBy \"\\\"employeeName\\\" DESC NULLS FIRST\" $\n                modelDBSelect\n\u003c/pre\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Query -\u003e DBSelect a -\u003e DBSelect a",
        "fct-source": "src/Database-PostgreSQL-ORM-DBSelect.html#setOrderBy",
        "fct-type": "function",
        "title": "setOrderBy"
      },
      "index": {
        "description": "Set the ORDER BY clause of DBSelect Example dbSelect setOrderBy employeeName DESC NULLS FIRST modelDBSelect",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "setOrderBy",
        "normalized": "Query-\u003eDBSelect a-\u003eDBSelect a",
        "package": "postgresql-orm",
        "partial": "Order By",
        "signature": "Query-\u003eDBSelect a-\u003eDBSelect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:trySave",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e to the database.  If the primary key is\n \u003ccode\u003e\u003ca\u003eNullKey\u003c/a\u003e\u003c/code\u003e, the item is written with an \u003ccode\u003eINSERT\u003c/code\u003e query, read back\n from the database, and returned with its primary key filled in.  If\n the primary key is not \u003ccode\u003e\u003ca\u003eNullKey\u003c/a\u003e\u003c/code\u003e, then the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is written with\n an \u003ccode\u003eUPDATE\u003c/code\u003e query and returned as-is.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e is invalid (i.e. the return value of \u003ccode\u003e\u003ca\u003emodelValid\u003c/a\u003e\u003c/code\u003e is\n non-empty), a list of \u003ccode\u003eInvalidError\u003c/code\u003e is returned instead.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "Connection -\u003e r -\u003e IO (Either ValidationError r)",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#trySave",
        "fct-type": "function",
        "title": "trySave"
      },
      "index": {
        "description": "Write Model to the database If the primary key is NullKey the item is written with an INSERT query read back from the database and returned with its primary key filled in If the primary key is not NullKey then the Model is written with an UPDATE query and returned as-is If the Model is invalid i.e the return value of modelValid is non-empty list of InvalidError is returned instead",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "trySave",
        "normalized": "Connection-\u003ea-\u003eIO(Either ValidationError a)",
        "package": "postgresql-orm",
        "partial": "Save",
        "signature": "Connection-\u003er-\u003eIO(Either ValidationError r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:unAs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "row",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#As",
        "fct-type": "function",
        "title": "unAs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "unAs",
        "normalized": "",
        "package": "postgresql-orm",
        "partial": "As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:underscoreModelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternate \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e pattern in which Haskell type and field\n names are converted from camel-case to underscore notation.  The\n first argument is a prefix to be removed from field names (since\n Haskell requires field names to be unique across data types, while\n SQL allows the same column names to be used in different tables).\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e data Bar = Bar {\n     barId :: !DBKey\n   , barNameOfBar :: !String\n   , barParent :: !(Maybe (DBRef Bar))\n   } deriving (Show, Generic)\n\n instance Model Bar where modelInfo = underscoreModelInfo \"bar\"\n\u003c/pre\u003e\u003cp\u003ewould associate type \u003ccode\u003eBar\u003c/code\u003e with a database table called \u003ccode\u003ebar\u003c/code\u003e with\n fields \u003ccode\u003eid\u003c/code\u003e, \u003ccode\u003ename_of_bar\u003c/code\u003e, and \u003ccode\u003eparent\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "ByteString -\u003e ModelInfo a",
        "fct-source": "src/Database-PostgreSQL-ORM-Model.html#underscoreModelInfo",
        "fct-type": "function",
        "title": "underscoreModelInfo"
      },
      "index": {
        "description": "An alternate Model pattern in which Haskell type and field names are converted from camel-case to underscore notation The first argument is prefix to be removed from field names since Haskell requires field names to be unique across data types while SQL allows the same column names to be used in different tables For example data Bar Bar barId DBKey barNameOfBar String barParent Maybe DBRef Bar deriving Show Generic instance Model Bar where modelInfo underscoreModelInfo bar would associate type Bar with database table called bar with fields id name of bar and parent",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "underscoreModelInfo",
        "normalized": "ByteString-\u003eModelInfo a",
        "package": "postgresql-orm",
        "partial": "Model Info",
        "signature": "ByteString-\u003eModelInfo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:validate",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "(a -\u003e Bool)-\u003e Text-\u003e Text-\u003e ValidationFunc a",
        "fct-type": "function",
        "title": "validate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "validate",
        "normalized": "(a-\u003eBool)-\u003eText-\u003eText-\u003eValidationFunc a",
        "package": "postgresql-orm",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eText-\u003eText-\u003eValidationFunc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:validateNotEmpty",
      "description": {
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "(a -\u003e Text) -\u003e Text -\u003e Text -\u003e ValidationFunc a",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#validateNotEmpty",
        "fct-type": "function",
        "title": "validateNotEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "validateNotEmpty",
        "normalized": "(a-\u003eText)-\u003eText-\u003eText-\u003eValidationFunc a",
        "package": "postgresql-orm",
        "partial": "Not Empty",
        "signature": "(a-\u003eText)-\u003eText-\u003eText-\u003eValidationFunc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-orm/docs/Database-PostgreSQL-ORM.html#v:validationErrors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PostgreSQL.ORM",
        "fct-package": "postgresql-orm",
        "fct-signature": "HashMap Text [Text]",
        "fct-source": "src/Database-PostgreSQL-ORM-Validations.html#ValidationError",
        "fct-type": "function",
        "title": "validationErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL ORM",
        "module": "Database.PostgreSQL.ORM",
        "name": "validationErrors",
        "normalized": "HashMap Text[Text]",
        "package": "postgresql-orm",
        "partial": "Errors",
        "signature": "HashMap Text[Text]"
      }
    }
  }
]