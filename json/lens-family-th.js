[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDerive lenses for \u003ca\u003eLens.Family\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n \n import Lens.Family\n import Lens.Family.TH\n \n data Foo a = Foo { _bar :: Int, _baz :: a }\n            deriving (Show, Read, Eq, Ord)\n $(mkLenses ''Foo)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Derive lenses for Lens.Family Example usage LANGUAGE TemplateHaskell import Lens.Family import Lens.Family.TH data Foo Foo bar Int baz deriving Show Read Eq Ord mkLenses Foo",
        "hierarchy": "Lens Family TH",
        "module": "Lens.Family.TH",
        "name": "TH",
        "normalized": "",
        "package": "lens-family-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-TH.html#v:mkLenses",
      "description": {
        "fct-descr": "\u003cp\u003eDerive lenses for the record selectors in \n a single-constructor data declaration,\n or for the record selector in a newtype declaration.\n Lenses will only be generated for record fields which\n are prefixed with an underscore.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cp\u003e$(mkLenses ''Foo)\n\u003c/p\u003e",
        "fct-module": "Lens.Family.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Lens-Family-TH.html#mkLenses",
        "fct-type": "function",
        "title": "mkLenses"
      },
      "index": {
        "description": "Derive lenses for the record selectors in single-constructor data declaration or for the record selector in newtype declaration Lenses will only be generated for record fields which are prefixed with an underscore Example usage mkLenses Foo",
        "hierarchy": "Lens Family TH",
        "module": "Lens.Family.TH",
        "name": "mkLenses",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-TH.html#v:mkLensesBy",
      "description": {
        "fct-descr": "\u003cp\u003eDerive lenses with the provided name transformation\n and filtering function. Produce \u003ccode\u003eJust lensName\u003c/code\u003e to generate a lens\n of the resultant name, or \u003ccode\u003eNothing\u003c/code\u003e to not generate a lens\n for the input record name.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e $(mkLensesBy (\\n -\u003e Just (n ++ \"L\")) ''Foo)\n\u003c/pre\u003e",
        "fct-module": "Lens.Family.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "(String -\u003e Maybe String) -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Lens-Family-TH.html#mkLensesBy",
        "fct-type": "function",
        "title": "mkLensesBy"
      },
      "index": {
        "description": "Derive lenses with the provided name transformation and filtering function Produce Just lensName to generate lens of the resultant name or Nothing to not generate lens for the input record name Example usage mkLensesBy Just Foo",
        "hierarchy": "Lens Family TH",
        "module": "Lens.Family.TH",
        "name": "mkLensesBy",
        "normalized": "(String-\u003eMaybe String)-\u003eName-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses By",
        "signature": "(String-\u003eMaybe String)-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-TH.html#v:mkLensesFor",
      "description": {
        "fct-descr": "\u003cp\u003eDerive lenses, specifying explicit pairings of \u003ccode\u003e(fieldName, lensName)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e $(mkLensesFor [(\"_foo\", \"fooLens\"), (\"bar\", \"lbar\")] ''Foo)\n\u003c/pre\u003e",
        "fct-module": "Lens.Family.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "[(String, String)] -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Lens-Family-TH.html#mkLensesFor",
        "fct-type": "function",
        "title": "mkLensesFor"
      },
      "index": {
        "description": "Derive lenses specifying explicit pairings of fieldName lensName Example usage mkLensesFor foo fooLens bar lbar Foo",
        "hierarchy": "Lens Family TH",
        "module": "Lens.Family.TH",
        "name": "mkLensesFor",
        "normalized": "[(String,String)]-\u003eName-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses For",
        "signature": "[(String,String)]-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-THCore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe shared functionality behind Lens.Family.TH and Lens.Family2.TH.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family.THCore",
        "fct-package": "lens-family-th",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family-THCore.html",
        "fct-type": "module",
        "title": "THCore"
      },
      "index": {
        "description": "The shared functionality behind Lens.Family.TH and Lens.Family2.TH",
        "hierarchy": "Lens Family THCore",
        "module": "Lens.Family.THCore",
        "name": "THCore",
        "normalized": "",
        "package": "lens-family-th",
        "partial": "THCore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-THCore.html#t:ConstructorFieldInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the smaller type the lens will operate on.\n\u003c/p\u003e",
        "fct-module": "Lens.Family.THCore",
        "fct-package": "lens-family-th",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family-THCore.html#ConstructorFieldInfo",
        "fct-type": "type",
        "title": "ConstructorFieldInfo"
      },
      "index": {
        "description": "Information about the smaller type the lens will operate on",
        "hierarchy": "Lens Family THCore",
        "module": "Lens.Family.THCore",
        "name": "ConstructorFieldInfo",
        "normalized": "",
        "package": "lens-family-th",
        "partial": "Constructor Field Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-THCore.html#t:LensTypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the larger type the lens will operate on.\n\u003c/p\u003e",
        "fct-module": "Lens.Family.THCore",
        "fct-package": "lens-family-th",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family-THCore.html#LensTypeInfo",
        "fct-type": "type",
        "title": "LensTypeInfo"
      },
      "index": {
        "description": "Information about the larger type the lens will operate on",
        "hierarchy": "Lens Family THCore",
        "module": "Lens.Family.THCore",
        "name": "LensTypeInfo",
        "normalized": "",
        "package": "lens-family-th",
        "partial": "Lens Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-THCore.html#v:defaultNameTransform",
      "description": {
        "fct-descr": "\u003cp\u003eBy default, if the field name begins with an underscore,\n then the underscore will simply be removed (and the new first character\n lowercased if necessary).\n\u003c/p\u003e",
        "fct-module": "Lens.Family.THCore",
        "fct-package": "lens-family-th",
        "fct-signature": "String -\u003e Maybe String",
        "fct-source": "src/Lens-Family-THCore.html#defaultNameTransform",
        "fct-type": "function",
        "title": "defaultNameTransform"
      },
      "index": {
        "description": "By default if the field name begins with an underscore then the underscore will simply be removed and the new first character lowercased if necessary",
        "hierarchy": "Lens Family THCore",
        "module": "Lens.Family.THCore",
        "name": "defaultNameTransform",
        "normalized": "String-\u003eMaybe String",
        "package": "lens-family-th",
        "partial": "Name Transform",
        "signature": "String-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family-THCore.html#v:deriveLenses",
      "description": {
        "fct-descr": "\u003cp\u003eThe true workhorse of lens derivation. This macro is parameterized\n by a macro that derives signatures, as well as a function that\n filters and transforms names. Producing Nothing means that\n a lens should not be generated for the provided name.\n\u003c/p\u003e",
        "fct-module": "Lens.Family.THCore",
        "fct-package": "lens-family-th",
        "fct-signature": "(Name -\u003e LensTypeInfo -\u003e ConstructorFieldInfo -\u003e Q [Dec])-\u003e (String -\u003e Maybe String)-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveLenses"
      },
      "index": {
        "description": "The true workhorse of lens derivation This macro is parameterized by macro that derives signatures as well as function that filters and transforms names Producing Nothing means that lens should not be generated for the provided name",
        "hierarchy": "Lens Family THCore",
        "module": "Lens.Family.THCore",
        "name": "deriveLenses",
        "normalized": "(Name-\u003eLensTypeInfo-\u003eConstructorFieldInfo-\u003eQ[Dec])-\u003e(String-\u003eMaybe String)-\u003eName-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses",
        "signature": "(Name-\u003eLensTypeInfo-\u003eConstructorFieldInfo-\u003eQ[Dec])-\u003e(String-\u003eMaybe String)-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family2-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDerive lenses for \u003ca\u003eLens.Family2\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, Rank2Types #-}\n \n import Lens.Family2\n import Lens.Family2.TH\n \n data Foo a = Foo { _bar :: Int, _baz :: a }\n            deriving (Show, Read, Eq, Ord)\n $(mkLenses ''Foo)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family2.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Derive lenses for Lens.Family2 Example usage LANGUAGE TemplateHaskell Rank2Types import Lens.Family2 import Lens.Family2.TH data Foo Foo bar Int baz deriving Show Read Eq Ord mkLenses Foo",
        "hierarchy": "Lens Family2 TH",
        "module": "Lens.Family2.TH",
        "name": "TH",
        "normalized": "",
        "package": "lens-family-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family2-TH.html#v:mkLenses",
      "description": {
        "fct-descr": "\u003cp\u003eDerive lenses for the record selectors in \n a single-constructor data declaration,\n or for the record selector in a newtype declaration.\n Lenses will only be generated for record fields which\n are prefixed with an underscore.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cp\u003e$(mkLenses ''Foo)\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Lens-Family2-TH.html#mkLenses",
        "fct-type": "function",
        "title": "mkLenses"
      },
      "index": {
        "description": "Derive lenses for the record selectors in single-constructor data declaration or for the record selector in newtype declaration Lenses will only be generated for record fields which are prefixed with an underscore Example usage mkLenses Foo",
        "hierarchy": "Lens Family2 TH",
        "module": "Lens.Family2.TH",
        "name": "mkLenses",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family2-TH.html#v:mkLensesBy",
      "description": {
        "fct-descr": "\u003cp\u003eDerive lenses with the provided name transformation\n and filtering function. Produce \u003ccode\u003eJust lensName\u003c/code\u003e to generate a lens\n of the resultant name, or \u003ccode\u003eNothing\u003c/code\u003e to not generate a lens\n for the input record name.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e $(mkLensesBy (\\n -\u003e Just (n ++ \"L\")) ''Foo)\n\u003c/pre\u003e",
        "fct-module": "Lens.Family2.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "(String -\u003e Maybe String) -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Lens-Family2-TH.html#mkLensesBy",
        "fct-type": "function",
        "title": "mkLensesBy"
      },
      "index": {
        "description": "Derive lenses with the provided name transformation and filtering function Produce Just lensName to generate lens of the resultant name or Nothing to not generate lens for the input record name Example usage mkLensesBy Just Foo",
        "hierarchy": "Lens Family2 TH",
        "module": "Lens.Family2.TH",
        "name": "mkLensesBy",
        "normalized": "(String-\u003eMaybe String)-\u003eName-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses By",
        "signature": "(String-\u003eMaybe String)-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family-th/docs/Lens-Family2-TH.html#v:mkLensesFor",
      "description": {
        "fct-descr": "\u003cp\u003eDerive lenses, specifying explicit pairings of \u003ccode\u003e(fieldName, lensName)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e $(mkLensesFor [(\"_foo\", \"fooLens\"), (\"bar\", \"lbar\")] ''Foo)\n\u003c/pre\u003e",
        "fct-module": "Lens.Family2.TH",
        "fct-package": "lens-family-th",
        "fct-signature": "[(String, String)] -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Lens-Family2-TH.html#mkLensesFor",
        "fct-type": "function",
        "title": "mkLensesFor"
      },
      "index": {
        "description": "Derive lenses specifying explicit pairings of fieldName lensName Example usage mkLensesFor foo fooLens bar lbar Foo",
        "hierarchy": "Lens Family2 TH",
        "module": "Lens.Family2.TH",
        "name": "mkLensesFor",
        "normalized": "[(String,String)]-\u003eName-\u003eQ[Dec]",
        "package": "lens-family-th",
        "partial": "Lenses For",
        "signature": "[(String,String)]-\u003eName-\u003eQ[Dec]"
      }
    }
  }
]