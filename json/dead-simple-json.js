[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "module",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html",
        "fct-type": "module",
        "title": "Convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Convert",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Convert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#t:Convert",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "class",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#Convert",
        "fct-type": "class",
        "title": "Convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Convert",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Convert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON value.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "data",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "JSON value",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Value",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Array, represented as \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of Values.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "Array (Vector Value)",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "JSON Array represented as Vector of Values",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Array",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:False",
      "description": {
        "fct-descr": "\u003cp\u003eFalse.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "False",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "False",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "False",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:Null",
      "description": {
        "fct-descr": "\u003cp\u003eNull (void, unit, \u003ccode\u003e()\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "Null",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "Null void unit",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Null",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:Number",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Number, represented by two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es in\n exponontial form. \u003ccode\u003eNumber n e\u003c/code\u003e is the same as \u003ccode\u003e{n}e{exp}\u003c/code\u003e,\n that is \u003ccode\u003en * 10 ^ e\u003c/code\u003e. This allows for arbitrary precision\n fixed point rationals. See \u003ccode\u003eConvert\u003c/code\u003e for easy conversions.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "Number !Integer !Integer",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "JSON Number represented by two Integer in exponontial form Number is the same as exp that is This allows for arbitrary precision fixed point rationals See Convert for easy conversions",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Number",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Object, represented as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "Object (Map String Value)",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "JSON Object represented as Map",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "Object",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:String",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON String, represented as ordinary Haskell String.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "String String",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "JSON String represented as ordinary Haskell String",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "String",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:True",
      "description": {
        "fct-descr": "\u003cp\u003eTrue.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "True",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "True",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "True",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:convert",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "Value -\u003e a",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#convert",
        "fct-type": "method",
        "title": "convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "convert",
        "normalized": "Value-\u003ea",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Value-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:convert-39-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "Value -\u003e Maybe a",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#convert%27",
        "fct-type": "method",
        "title": "convert'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "convert'",
        "normalized": "Value-\u003eMaybe a",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Value-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Convert.html#v:toJSON",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Convert",
        "fct-package": "dead-simple-json",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#toJSON",
        "fct-type": "method",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Convert",
        "module": "Text.DeadSimpleJSON.Convert",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "dead-simple-json",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "module",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "Query",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#t:Query",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "data",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "Query",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:-63-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "JSON -\u003e String -\u003e a",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "(?) ?",
        "normalized": "JSON-\u003eString-\u003ea",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "JSON-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:Field",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Field String Query",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#Query",
        "fct-type": "function",
        "title": "Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "Field",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:Index",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Index Int Query",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#Query",
        "fct-type": "function",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "Index",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:Read",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Read",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#Query",
        "fct-type": "function",
        "title": "Read"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "Read",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:mkQuery",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "String -\u003e Query",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#mkQuery",
        "fct-type": "function",
        "title": "mkQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "mkQuery",
        "normalized": "String-\u003eQuery",
        "package": "dead-simple-json",
        "partial": "Query",
        "signature": "String-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:mkQuery-39-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "String -\u003e Either ParseError Query",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#mkQuery%27",
        "fct-type": "function",
        "title": "mkQuery'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "mkQuery'",
        "normalized": "String-\u003eEither ParseError Query",
        "package": "dead-simple-json",
        "partial": "Query'",
        "signature": "String-\u003eEither ParseError Query"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:query",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Query -\u003e JSON -\u003e a",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "query",
        "normalized": "Query-\u003eJSON-\u003ea",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Query-\u003eJSON-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:query-39-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Query -\u003e JSON -\u003e Maybe a",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#query%27",
        "fct-type": "function",
        "title": "query'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "query'",
        "normalized": "Query-\u003eJSON-\u003eMaybe a",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Query-\u003eJSON-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:queryV",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Query -\u003e Value -\u003e a",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#queryV",
        "fct-type": "function",
        "title": "queryV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "queryV",
        "normalized": "Query-\u003eValue-\u003ea",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Query-\u003eValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Query.html#v:queryV-39-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Query",
        "fct-package": "dead-simple-json",
        "fct-signature": "Query -\u003e Value -\u003e Maybe a",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#queryV%27",
        "fct-type": "function",
        "title": "queryV'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Query",
        "module": "Text.DeadSimpleJSON.Query",
        "name": "queryV'",
        "normalized": "Query-\u003eValue-\u003eMaybe a",
        "package": "dead-simple-json",
        "partial": "V'",
        "signature": "Query-\u003eValue-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell syntax sugar for working with \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e\u003cp\u003eFor using this module, you need to declare a LANGUAGE\n pragma like the following:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE Haskell2010, TemplateHaskell, QuasiQuotes #-}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.DeadSimpleJSON.TH",
        "fct-package": "dead-simple-json",
        "fct-signature": "module",
        "fct-source": "src/Text-DeadSimpleJSON-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Template Haskell syntax sugar for working with JSON data For using this module you need to declare LANGUAGE pragma like the following LANGUAGE Haskell2010 TemplateHaskell QuasiQuotes",
        "hierarchy": "Text DeadSimpleJSON TH",
        "module": "Text.DeadSimpleJSON.TH",
        "name": "TH",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-TH.html#v:json",
      "description": {
        "fct-descr": "\u003cp\u003eA QuasiQuoter which includes JSON data.\n\u003c/p\u003e\u003cp\u003eThe type of the expression is \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.TH",
        "fct-package": "dead-simple-json",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-DeadSimpleJSON-TH.html#json",
        "fct-type": "function",
        "title": "json"
      },
      "index": {
        "description": "QuasiQuoter which includes JSON data The type of the expression is JSON",
        "hierarchy": "Text DeadSimpleJSON TH",
        "module": "Text.DeadSimpleJSON.TH",
        "name": "json",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-TH.html#v:jsonF",
      "description": {
        "fct-descr": "\u003cp\u003eA QuasiQuoter which includes JSON data from files.\n\u003c/p\u003e\u003cp\u003eThe following example will include the contents of \u003ccode\u003edata.json\u003c/code\u003e\n as \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let str = [jsonF|data.json|]\n\u003c/pre\u003e\u003cp\u003eNote that every character inside the brackets is treated\n as part of the file name, that is \u003ccode\u003e[jsonF| data.json |]\u003c/code\u003e is not\n the same as the above example (it will try to find a file which\n name includes space characters).\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.TH",
        "fct-package": "dead-simple-json",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-DeadSimpleJSON-TH.html#jsonF",
        "fct-type": "function",
        "title": "jsonF"
      },
      "index": {
        "description": "QuasiQuoter which includes JSON data from files The following example will include the contents of data.json as JSON let str jsonF data.json Note that every character inside the brackets is treated as part of the file name that is jsonF data.json is not the same as the above example it will try to find file which name includes space characters",
        "hierarchy": "Text DeadSimpleJSON TH",
        "module": "Text.DeadSimpleJSON.TH",
        "name": "jsonF",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-TH.html#v:jsq",
      "description": {
        "fct-descr": "\u003cp\u003eA QuasiQuoter which queries a json object using JavaScript notation.\n\u003c/p\u003e\u003cp\u003eSuppose obj contains a json object of type JSON:\n\u003c/p\u003e\u003cpre\u003e [jsq| obj.prop.list[3] |]\n\u003c/pre\u003e\u003cp\u003eThe above will query the object in obj as if it was JavaScript.\n\u003c/p\u003e\u003cp\u003eThe type of the expression is polymorphic: \u003ccode\u003eConvert a =\u003e a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou will need to specify the type of the query, like so:\n\u003c/p\u003e\u003cpre\u003e [jsq| obj.prop.list |] :: [Integer]\n\u003c/pre\u003e\u003cp\u003eFor possible conversions, see the instances for \u003ccode\u003e\u003ca\u003eConvert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.TH",
        "fct-package": "dead-simple-json",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-DeadSimpleJSON-TH.html#jsq",
        "fct-type": "function",
        "title": "jsq"
      },
      "index": {
        "description": "QuasiQuoter which queries json object using JavaScript notation Suppose obj contains json object of type JSON jsq obj.prop.list The above will query the object in obj as if it was JavaScript The type of the expression is polymorphic Convert You will need to specify the type of the query like so jsq obj.prop.list Integer For possible conversions see the instances for Convert",
        "hierarchy": "Text DeadSimpleJSON TH",
        "module": "Text.DeadSimpleJSON.TH",
        "name": "jsq",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-TH.html#v:s",
      "description": {
        "fct-descr": "\u003cp\u003eA QuasiQuoter on raw strings.\n\u003c/p\u003e\u003cp\u003eThe definition is basically:\n\u003c/p\u003e\u003cpre\u003e s = QuasiQuoter {\n   quoteExp  = return . LitE . StringL\n }\n\u003c/pre\u003e",
        "fct-module": "Text.DeadSimpleJSON.TH",
        "fct-package": "dead-simple-json",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-DeadSimpleJSON-TH.html#s",
        "fct-type": "function",
        "title": "s"
      },
      "index": {
        "description": "QuasiQuoter on raw strings The definition is basically QuasiQuoter quoteExp return LitE StringL",
        "hierarchy": "Text DeadSimpleJSON TH",
        "module": "Text.DeadSimpleJSON.TH",
        "name": "s",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-TH.html#v:sF",
      "description": {
        "fct-descr": "\u003cp\u003eA QuasiQuoter which includes raw strings from files.\n\u003c/p\u003e\u003cp\u003eThe following example will include the contents of \u003ccode\u003efile.txt\u003c/code\u003e\n as a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let str = [sF|file.txt|]\n\u003c/pre\u003e\u003cp\u003eNote that every character inside the brackets is treated\n as part of the file name, that is \u003ccode\u003e[sF| file.txt |]\u003c/code\u003e is not\n the same as the above example (it will try to find a file which\n name includes space characters).\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.TH",
        "fct-package": "dead-simple-json",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-DeadSimpleJSON-TH.html#sF",
        "fct-type": "function",
        "title": "sF"
      },
      "index": {
        "description": "QuasiQuoter which includes raw strings from files The following example will include the contents of file.txt as String let str sF file.txt Note that every character inside the brackets is treated as part of the file name that is sF file.txt is not the same as the above example it will try to find file which name includes space characters",
        "hierarchy": "Text DeadSimpleJSON TH",
        "module": "Text.DeadSimpleJSON.TH",
        "name": "sF",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe basic JSON data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "module",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "The basic JSON data types",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "Types",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#t:JSON",
      "description": {
        "fct-descr": "\u003cp\u003eA top-level JSON object.\n\u003c/p\u003e\u003cp\u003eMerely a wrapper that ensures that no other \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es\n but \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e reside at the top-level.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "newtype",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#JSON",
        "fct-type": "newtype",
        "title": "JSON"
      },
      "index": {
        "description": "top-level JSON object Merely wrapper that ensures that no other Value but Array and Object reside at the top-level",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "JSON",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON value.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "data",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "JSON value",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "Value",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Array, represented as \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of Values.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "Array (Vector Value)",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "JSON Array represented as Vector of Values",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "Array",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:False",
      "description": {
        "fct-descr": "\u003cp\u003eFalse.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "False",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "False",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "False",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:JSON",
      "description": {
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "JSON Value",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#JSON",
        "fct-type": "function",
        "title": "JSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "JSON",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:Null",
      "description": {
        "fct-descr": "\u003cp\u003eNull (void, unit, \u003ccode\u003e()\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "Null",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "Null void unit",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "Null",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:Number",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Number, represented by two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es in\n exponontial form. \u003ccode\u003eNumber n e\u003c/code\u003e is the same as \u003ccode\u003e{n}e{exp}\u003c/code\u003e,\n that is \u003ccode\u003en * 10 ^ e\u003c/code\u003e. This allows for arbitrary precision\n fixed point rationals. See \u003ccode\u003eConvert\u003c/code\u003e for easy conversions.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "Number !Integer !Integer",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "JSON Number represented by two Integer in exponontial form Number is the same as exp that is This allows for arbitrary precision fixed point rationals See Convert for easy conversions",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "Number",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Object, represented as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "Object (Map String Value)",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "JSON Object represented as Map",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "Object",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:String",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON String, represented as ordinary Haskell String.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "String String",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "JSON String represented as ordinary Haskell String",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "String",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON-Types.html#v:True",
      "description": {
        "fct-descr": "\u003cp\u003eTrue.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON.Types",
        "fct-package": "dead-simple-json",
        "fct-signature": "True",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "True",
        "hierarchy": "Text DeadSimpleJSON Types",
        "module": "Text.DeadSimpleJSON.Types",
        "name": "True",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple approach for parsing JSON.\n\u003c/p\u003e\u003cp\u003eTo read JSON data use \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e. To print JSON data use \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e let jsonData = read \"[1,2,4,8,16]\" :: JSON\n putStrLn $ show jsonData\n\u003c/pre\u003e\u003cp\u003eYou can query json data using \u003ccode\u003e\u003ca\u003e?\u003c/a\u003e\u003c/code\u003e. Querying implies conversion,\ntherefor you may need to specify the result type:\n\u003c/p\u003e\u003cpre\u003e let jsonData = read \"{\\\"seven\\\": 7, \\\"nine\\\": [1,2,4,8,16]}\"\n print $ (jsonData ? \"nine[3]\" :: Int)\n\u003c/pre\u003e\u003cp\u003eFor tighter control use \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. A more convenient way for\ncreating JSON objects in source code or querying JSON data,\nis using Template Haskell. See \u003ccode\u003eText.SimpleJSON.TH\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe recommended way for importing this module is importing\nit qualified, like so:\n\u003c/p\u003e\u003cpre\u003e import qualified Text.SimpleJSON as JSON\n import Text.SimpleJSON (JSON)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "module",
        "fct-source": "src/Text-DeadSimpleJSON.html",
        "fct-type": "module",
        "title": "DeadSimpleJSON"
      },
      "index": {
        "description": "simple approach for parsing JSON To read JSON data use read To print JSON data use show let jsonData read JSON putStrLn show jsonData You can query json data using Querying implies conversion therefor you may need to specify the result type let jsonData read seven nine print jsonData nine Int For tighter control use parse more convenient way for creating JSON objects in source code or querying JSON data is using Template Haskell See Text.SimpleJSON.TH The recommended way for importing this module is importing it qualified like so import qualified Text.SimpleJSON as JSON import Text.SimpleJSON JSON",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "DeadSimpleJSON",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Dead Simple JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#t:Convert",
      "description": {
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "class",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#Convert",
        "fct-type": "class",
        "title": "Convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "Convert",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Convert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#t:JSON",
      "description": {
        "fct-descr": "\u003cp\u003eA top-level JSON object.\n\u003c/p\u003e\u003cp\u003eMerely a wrapper that ensures that no other \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es\n but \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e reside at the top-level.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "data",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#JSON",
        "fct-type": "data",
        "title": "JSON"
      },
      "index": {
        "description": "top-level JSON object Merely wrapper that ensures that no other Value but Array and Object reside at the top-level",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "JSON",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON value.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "data",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "JSON value",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "Value",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:-63-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "JSON -\u003e String -\u003e a",
        "fct-source": "src/Text-DeadSimpleJSON-Query.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "(?) ?",
        "normalized": "JSON-\u003eString-\u003ea",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "JSON-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Array, represented as \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of Values.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "Array (Vector Value)",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "JSON Array represented as Vector of Values",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "Array",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:False",
      "description": {
        "fct-descr": "\u003cp\u003eFalse.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "False",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "False",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "False",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:Null",
      "description": {
        "fct-descr": "\u003cp\u003eNull (void, unit, \u003ccode\u003e()\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "Null",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "Null void unit",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "Null",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:Number",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Number, represented by two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es in\n exponontial form. \u003ccode\u003eNumber n e\u003c/code\u003e is the same as \u003ccode\u003e{n}e{exp}\u003c/code\u003e,\n that is \u003ccode\u003en * 10 ^ e\u003c/code\u003e. This allows for arbitrary precision\n fixed point rationals. See \u003ccode\u003eConvert\u003c/code\u003e for easy conversions.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "Number !Integer !Integer",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "JSON Number represented by two Integer in exponontial form Number is the same as exp that is This allows for arbitrary precision fixed point rationals See Convert for easy conversions",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "Number",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON Object, represented as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "Object (Map String Value)",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "JSON Object represented as Map",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "Object",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:String",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON String, represented as ordinary Haskell String.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "String String",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "JSON String represented as ordinary Haskell String",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "String",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:True",
      "description": {
        "fct-descr": "\u003cp\u003eTrue.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "True",
        "fct-source": "src/Text-DeadSimpleJSON-Types.html#Value",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "True",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "True",
        "normalized": "",
        "package": "dead-simple-json",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:convert",
      "description": {
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "Value -\u003e a",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#convert",
        "fct-type": "method",
        "title": "convert"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "convert",
        "normalized": "Value-\u003ea",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Value-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:convert-39-",
      "description": {
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "Value -\u003e Maybe a",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#convert%27",
        "fct-type": "method",
        "title": "convert'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "convert'",
        "normalized": "Value-\u003eMaybe a",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "Value-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse a String for JSON data or return a ParseError.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "String -\u003e Either ParseError JSON",
        "fct-source": "src/Text-DeadSimpleJSON.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Parse String for JSON data or return ParseError",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "parse",
        "normalized": "String-\u003eEither ParseError JSON",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "String-\u003eEither ParseError JSON"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:parse-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParses a top-level JSON object, returning Just a Value or Nothing.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "String -\u003e Maybe Value",
        "fct-source": "src/Text-DeadSimpleJSON.html#parse%27",
        "fct-type": "function",
        "title": "parse'"
      },
      "index": {
        "description": "Parses top-level JSON object returning Just Value or Nothing",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "parse'",
        "normalized": "String-\u003eMaybe Value",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "String-\u003eMaybe Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:parseM",
      "description": {
        "fct-descr": "\u003cp\u003ePurely Monadic version of \u003ccode\u003e\u003ca\u003eparse'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "String -\u003e m Value",
        "fct-source": "src/Text-DeadSimpleJSON.html#parseM",
        "fct-type": "function",
        "title": "parseM"
      },
      "index": {
        "description": "Purely Monadic version of parse",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "parseM",
        "normalized": "String-\u003ea Value",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "String-\u003em Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:toJSON",
      "description": {
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Text-DeadSimpleJSON-Convert.html#toJSON",
        "fct-type": "method",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "dead-simple-json",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dead-simple-json/docs/Text-DeadSimpleJSON.html#v:top",
      "description": {
        "fct-descr": "\u003cp\u003eUnwraps a top-level JSON object to a Value.\n\u003c/p\u003e",
        "fct-module": "Text.DeadSimpleJSON",
        "fct-package": "dead-simple-json",
        "fct-signature": "JSON -\u003e Value",
        "fct-source": "src/Text-DeadSimpleJSON.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "Unwraps top-level JSON object to Value",
        "hierarchy": "Text DeadSimpleJSON",
        "module": "Text.DeadSimpleJSON",
        "name": "top",
        "normalized": "JSON-\u003eValue",
        "package": "dead-simple-json",
        "partial": "",
        "signature": "JSON-\u003eValue"
      }
    }
  }
]