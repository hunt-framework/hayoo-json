[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJSON serializer and deserializer using Data.Generics.\n The functions here handle algebraic data types and primitive types.\n It uses the same representation as \u003ca\u003eText.JSON\u003c/a\u003e for \u003ca\u003ePrelude\u003c/a\u003e types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "JSON serializer and deserializer using Data.Generics The functions here handle algebraic data types and primitive types It uses the same representation as Text.JSON for Prelude types",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "json",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#t:Data",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Data"
      },
      "index": {
        "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "Data",
        "normalized": "",
        "package": "json",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "Typeable",
        "normalized": "",
        "package": "json",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:decodeJSON",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a string as a value.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Text-JSON-Generic.html#decodeJSON",
        "fct-type": "function",
        "title": "decodeJSON"
      },
      "index": {
        "description": "Decode string as value",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "decodeJSON",
        "normalized": "String-\u003ea",
        "package": "json",
        "partial": "JSON",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:encodeJSON",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value as a string.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-JSON-Generic.html#encodeJSON",
        "fct-type": "function",
        "title": "encodeJSON"
      },
      "index": {
        "description": "Encode value as string",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "encodeJSON",
        "normalized": "a-\u003eString",
        "package": "json",
        "partial": "JSON",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:fromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a JSON value to anything (fails if the types do not match).\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e Result a",
        "fct-source": "src/Text-JSON-Generic.html#fromJSON",
        "fct-type": "function",
        "title": "fromJSON"
      },
      "index": {
        "description": "Convert JSON value to anything fails if the types do not match",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "fromJSON",
        "normalized": "JSValue-\u003eResult a",
        "package": "json",
        "partial": "JSON",
        "signature": "JSValue-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:fromJSON_generic",
      "description": {
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e Result a",
        "fct-source": "src/Text-JSON-Generic.html#fromJSON_generic",
        "fct-type": "function",
        "title": "fromJSON_generic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "fromJSON_generic",
        "normalized": "JSValue-\u003eResult a",
        "package": "json",
        "partial": "JSON",
        "signature": "JSValue-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:toJSON",
      "description": {
        "fct-descr": "\u003cp\u003eConvert anything to a JSON value.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "a -\u003e JSValue",
        "fct-source": "src/Text-JSON-Generic.html#toJSON",
        "fct-type": "function",
        "title": "toJSON"
      },
      "index": {
        "description": "Convert anything to JSON value",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "toJSON",
        "normalized": "a-\u003eJSValue",
        "package": "json",
        "partial": "JSON",
        "signature": "a-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:toJSON_generic",
      "description": {
        "fct-module": "Text.JSON.Generic",
        "fct-package": "json",
        "fct-signature": "a -\u003e JSValue",
        "fct-source": "src/Text-JSON-Generic.html#toJSON_generic",
        "fct-type": "function",
        "title": "toJSON_generic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Generic",
        "module": "Text.JSON.Generic",
        "name": "toJSON_generic",
        "normalized": "a-\u003eJSValue",
        "package": "json",
        "partial": "JSON",
        "signature": "a-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse JSON values using the Parsec combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-Parsec.html",
        "fct-type": "module",
        "title": "Parsec"
      },
      "index": {
        "description": "Parse JSON values using the Parsec combinators",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "Parsec",
        "normalized": "",
        "package": "json",
        "partial": "Parsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_array",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () [JSValue]",
        "fct-source": "src/Text-JSON-Parsec.html#p_array",
        "fct-type": "function",
        "title": "p_array"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_array",
        "normalized": "CharParser()[JSValue]",
        "package": "json",
        "partial": "",
        "signature": "CharParser()[JSValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_boolean",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () Bool",
        "fct-source": "src/Text-JSON-Parsec.html#p_boolean",
        "fct-type": "function",
        "title": "p_boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_boolean",
        "normalized": "CharParser()Bool",
        "package": "json",
        "partial": "",
        "signature": "CharParser()Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_js_object",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () (JSObject JSValue)",
        "fct-source": "src/Text-JSON-Parsec.html#p_js_object",
        "fct-type": "function",
        "title": "p_js_object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_js_object",
        "normalized": "CharParser()(JSObject JSValue)",
        "package": "json",
        "partial": "",
        "signature": "CharParser()(JSObject JSValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_js_string",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () JSString",
        "fct-source": "src/Text-JSON-Parsec.html#p_js_string",
        "fct-type": "function",
        "title": "p_js_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_js_string",
        "normalized": "CharParser()JSString",
        "package": "json",
        "partial": "",
        "signature": "CharParser()JSString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_jvalue",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () JSValue",
        "fct-source": "src/Text-JSON-Parsec.html#p_jvalue",
        "fct-type": "function",
        "title": "p_jvalue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_jvalue",
        "normalized": "CharParser()JSValue",
        "package": "json",
        "partial": "",
        "signature": "CharParser()JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_null",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () ()",
        "fct-source": "src/Text-JSON-Parsec.html#p_null",
        "fct-type": "function",
        "title": "p_null"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_null",
        "normalized": "CharParser()()",
        "package": "json",
        "partial": "",
        "signature": "CharParser()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_number",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () Rational",
        "fct-source": "src/Text-JSON-Parsec.html#p_number",
        "fct-type": "function",
        "title": "p_number"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_number",
        "normalized": "CharParser()Rational",
        "package": "json",
        "partial": "",
        "signature": "CharParser()Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_object",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () [(String, JSValue)]",
        "fct-source": "src/Text-JSON-Parsec.html#p_object",
        "fct-type": "function",
        "title": "p_object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_object",
        "normalized": "CharParser()[(String,JSValue)]",
        "package": "json",
        "partial": "",
        "signature": "CharParser()[(String,JSValue)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_string",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () String",
        "fct-source": "src/Text-JSON-Parsec.html#p_string",
        "fct-type": "function",
        "title": "p_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_string",
        "normalized": "CharParser()String",
        "package": "json",
        "partial": "",
        "signature": "CharParser()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_value",
      "description": {
        "fct-module": "Text.JSON.Parsec",
        "fct-package": "json",
        "fct-signature": "CharParser () JSValue",
        "fct-source": "src/Text-JSON-Parsec.html#p_value",
        "fct-type": "function",
        "title": "p_value"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Parsec",
        "module": "Text.JSON.Parsec",
        "name": "p_value",
        "normalized": "CharParser()JSValue",
        "package": "json",
        "partial": "",
        "signature": "CharParser()JSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay JSON values using pretty printing combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Display JSON values using pretty printing combinators",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "json",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_array",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "[JSValue] -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_array",
        "fct-type": "function",
        "title": "pp_array"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_array",
        "normalized": "[JSValue]-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "[JSValue]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_boolean",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "Bool -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_boolean",
        "fct-type": "function",
        "title": "pp_boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_boolean",
        "normalized": "Bool-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "Bool-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_js_object",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "JSObject JSValue -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_js_object",
        "fct-type": "function",
        "title": "pp_js_object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_js_object",
        "normalized": "JSObject JSValue-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "JSObject JSValue-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_js_string",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "JSString -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_js_string",
        "fct-type": "function",
        "title": "pp_js_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_js_string",
        "normalized": "JSString-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "JSString-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_null",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_null",
        "fct-type": "function",
        "title": "pp_null"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_null",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_number",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "Bool -\u003e Rational -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_number",
        "fct-type": "function",
        "title": "pp_number"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_number",
        "normalized": "Bool-\u003eRational-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "Bool-\u003eRational-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_object",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "[(String, JSValue)] -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_object",
        "fct-type": "function",
        "title": "pp_object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_object",
        "normalized": "[(String,JSValue)]-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "[(String,JSValue)]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_string",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_string",
        "fct-type": "function",
        "title": "pp_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_string",
        "normalized": "String-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_value",
      "description": {
        "fct-module": "Text.JSON.Pretty",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e Doc",
        "fct-source": "src/Text-JSON-Pretty.html#pp_value",
        "fct-type": "function",
        "title": "pp_value"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Pretty",
        "module": "Text.JSON.Pretty",
        "name": "pp_value",
        "normalized": "JSValue-\u003eDoc",
        "package": "json",
        "partial": "",
        "signature": "JSValue-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse JSON values using the ReadP combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-ReadP.html",
        "fct-type": "module",
        "title": "ReadP"
      },
      "index": {
        "description": "Parse JSON values using the ReadP combinators",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "ReadP",
        "normalized": "",
        "package": "json",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_array",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP [JSValue]",
        "fct-source": "src/Text-JSON-ReadP.html#p_array",
        "fct-type": "function",
        "title": "p_array"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_array",
        "normalized": "ReadP[JSValue]",
        "package": "json",
        "partial": "",
        "signature": "ReadP[JSValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_boolean",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP Bool",
        "fct-source": "src/Text-JSON-ReadP.html#p_boolean",
        "fct-type": "function",
        "title": "p_boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_boolean",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_js_object",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP (JSObject JSValue)",
        "fct-source": "src/Text-JSON-ReadP.html#p_js_object",
        "fct-type": "function",
        "title": "p_js_object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_js_object",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_js_string",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP JSString",
        "fct-source": "src/Text-JSON-ReadP.html#p_js_string",
        "fct-type": "function",
        "title": "p_js_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_js_string",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_null",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP ()",
        "fct-source": "src/Text-JSON-ReadP.html#p_null",
        "fct-type": "function",
        "title": "p_null"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_null",
        "normalized": "ReadP()",
        "package": "json",
        "partial": "",
        "signature": "ReadP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_number",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP Rational",
        "fct-source": "src/Text-JSON-ReadP.html#p_number",
        "fct-type": "function",
        "title": "p_number"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_number",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_object",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP [(String, JSValue)]",
        "fct-source": "src/Text-JSON-ReadP.html#p_object",
        "fct-type": "function",
        "title": "p_object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_object",
        "normalized": "ReadP[(String,JSValue)]",
        "package": "json",
        "partial": "",
        "signature": "ReadP[(String,JSValue)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_string",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP String",
        "fct-source": "src/Text-JSON-ReadP.html#p_string",
        "fct-type": "function",
        "title": "p_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_string",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_value",
      "description": {
        "fct-module": "Text.JSON.ReadP",
        "fct-package": "json",
        "fct-signature": "ReadP JSValue",
        "fct-source": "src/Text-JSON-ReadP.html#p_value",
        "fct-type": "function",
        "title": "p_value"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON ReadP",
        "module": "Text.JSON.ReadP",
        "name": "p_value",
        "normalized": "",
        "package": "json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#",
      "description": {
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "String",
        "normalized": "",
        "package": "json",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#t:GetJSON",
      "description": {
        "fct-descr": "\u003cp\u003eParsing JSON\n\u003c/p\u003e\u003cp\u003eThe type of JSON parsers for String\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON-String.html#GetJSON",
        "fct-type": "data",
        "title": "GetJSON"
      },
      "index": {
        "description": "Parsing JSON The type of JSON parsers for String",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "GetJSON",
        "normalized": "",
        "package": "json",
        "partial": "Get JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead a list in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSArray",
        "fct-type": "function",
        "title": "readJSArray"
      },
      "index": {
        "description": "Read list in JSON format",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSArray",
        "normalized": "",
        "package": "json",
        "partial": "JSArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSBool",
      "description": {
        "fct-descr": "\u003cp\u003eRead the JSON Bool type\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSBool",
        "fct-type": "function",
        "title": "readJSBool"
      },
      "index": {
        "description": "Read the JSON Bool type",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSBool",
        "normalized": "",
        "package": "json",
        "partial": "JSBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSNull",
      "description": {
        "fct-descr": "\u003cp\u003eRead the JSON null type\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSNull",
        "fct-type": "function",
        "title": "readJSNull"
      },
      "index": {
        "description": "Read the JSON null type",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSNull",
        "normalized": "",
        "package": "json",
        "partial": "JSNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSObject",
      "description": {
        "fct-descr": "\u003cp\u003eRead an object in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSObject",
        "fct-type": "function",
        "title": "readJSObject"
      },
      "index": {
        "description": "Read an object in JSON format",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSObject",
        "normalized": "",
        "package": "json",
        "partial": "JSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSRational",
      "description": {
        "fct-descr": "\u003cp\u003eRead an Integer or Double in JSON format, returning a Rational\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON Rational",
        "fct-source": "src/Text-JSON-String.html#readJSRational",
        "fct-type": "function",
        "title": "readJSRational"
      },
      "index": {
        "description": "Read an Integer or Double in JSON format returning Rational",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSRational",
        "normalized": "",
        "package": "json",
        "partial": "JSRational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSString",
      "description": {
        "fct-descr": "\u003cp\u003eRead the JSON String type\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSString",
        "fct-type": "function",
        "title": "readJSString"
      },
      "index": {
        "description": "Read the JSON String type",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSTopType",
      "description": {
        "fct-descr": "\u003cp\u003eTop level JSON can only be Arrays or Objects\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSTopType",
        "fct-type": "function",
        "title": "readJSTopType"
      },
      "index": {
        "description": "Top level JSON can only be Arrays or Objects",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSTopType",
        "normalized": "",
        "package": "json",
        "partial": "JSTop Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eRead one of several possible JS types\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSValue",
        "fct-type": "function",
        "title": "readJSValue"
      },
      "index": {
        "description": "Read one of several possible JS types",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "readJSValue",
        "normalized": "",
        "package": "json",
        "partial": "JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:runGetJSON",
      "description": {
        "fct-descr": "\u003cp\u003eRun a JSON reader on an input String, returning some Haskell value.\n All input will be consumed.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "GetJSON a -\u003e String -\u003e Either String a",
        "fct-source": "src/Text-JSON-String.html#runGetJSON",
        "fct-type": "function",
        "title": "runGetJSON"
      },
      "index": {
        "description": "Run JSON reader on an input String returning some Haskell value All input will be consumed",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "runGetJSON",
        "normalized": "GetJSON a-\u003eString-\u003eEither String a",
        "package": "json",
        "partial": "Get JSON",
        "signature": "GetJSON a-\u003eString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSArray",
      "description": {
        "fct-descr": "\u003cp\u003eShow a list in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "[JSValue] -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSArray",
        "fct-type": "function",
        "title": "showJSArray"
      },
      "index": {
        "description": "Show list in JSON format",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSArray",
        "normalized": "[JSValue]-\u003eShowS",
        "package": "json",
        "partial": "JSArray",
        "signature": "[JSValue]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSBool",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the JSON Bool type\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "Bool -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSBool",
        "fct-type": "function",
        "title": "showJSBool"
      },
      "index": {
        "description": "Write the JSON Bool type",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSBool",
        "normalized": "Bool-\u003eShowS",
        "package": "json",
        "partial": "JSBool",
        "signature": "Bool-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSNull",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the JSON null type\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSNull",
        "fct-type": "function",
        "title": "showJSNull"
      },
      "index": {
        "description": "Write the JSON null type",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSNull",
        "normalized": "",
        "package": "json",
        "partial": "JSNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSObject",
      "description": {
        "fct-descr": "\u003cp\u003eShow an association list in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "JSObject JSValue -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSObject",
        "fct-type": "function",
        "title": "showJSObject"
      },
      "index": {
        "description": "Show an association list in JSON format",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSObject",
        "normalized": "JSObject JSValue-\u003eShowS",
        "package": "json",
        "partial": "JSObject",
        "signature": "JSObject JSValue-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSRational",
      "description": {
        "fct-descr": "\u003cp\u003eShow a Rational in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "Rational -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSRational",
        "fct-type": "function",
        "title": "showJSRational"
      },
      "index": {
        "description": "Show Rational in JSON format",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSRational",
        "normalized": "Rational-\u003eShowS",
        "package": "json",
        "partial": "JSRational",
        "signature": "Rational-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSRational-39-",
      "description": {
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "Bool -\u003e Rational -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSRational%27",
        "fct-type": "function",
        "title": "showJSRational'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSRational'",
        "normalized": "Bool-\u003eRational-\u003eShowS",
        "package": "json",
        "partial": "JSRational'",
        "signature": "Bool-\u003eRational-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSTopType",
      "description": {
        "fct-descr": "\u003cp\u003eWriting JSON\n\u003c/p\u003e\u003cp\u003eShow strict JSON top level types. Values not permitted\n at the top level are wrapped in a singleton array.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSTopType",
        "fct-type": "function",
        "title": "showJSTopType"
      },
      "index": {
        "description": "Writing JSON Show strict JSON top level types Values not permitted at the top level are wrapped in singleton array",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSTopType",
        "normalized": "JSValue-\u003eShowS",
        "package": "json",
        "partial": "JSTop Type",
        "signature": "JSValue-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eShow JSON values\n\u003c/p\u003e",
        "fct-module": "Text.JSON.String",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSValue",
        "fct-type": "function",
        "title": "showJSValue"
      },
      "index": {
        "description": "Show JSON values",
        "hierarchy": "Text JSON String",
        "module": "Text.JSON.String",
        "name": "showJSValue",
        "normalized": "JSValue-\u003eShowS",
        "package": "json",
        "partial": "JSValue",
        "signature": "JSValue-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "Types",
        "normalized": "",
        "package": "json",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#t:JSObject",
      "description": {
        "fct-descr": "\u003cp\u003eAs can association lists\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "newtype",
        "fct-source": "src/Text-JSON-Types.html#JSObject",
        "fct-type": "newtype",
        "title": "JSObject"
      },
      "index": {
        "description": "As can association lists",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSObject",
        "normalized": "",
        "package": "json",
        "partial": "JSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#t:JSString",
      "description": {
        "fct-descr": "\u003cp\u003eStrings can be represented a little more efficiently in JSON\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "newtype",
        "fct-source": "src/Text-JSON-Types.html#JSString",
        "fct-type": "newtype",
        "title": "JSString"
      },
      "index": {
        "description": "Strings can be represented little more efficiently in JSON",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#t:JSValue",
      "description": {
        "fct-descr": "\u003cp\u003eJSON values\n\u003c/p\u003e\u003cp\u003eThe type to which we encode Haskell values. There's a set\n of primitives, and a couple of heterogenous collection types.\n\u003c/p\u003e\u003cp\u003eObjects:\n\u003c/p\u003e\u003cp\u003eAn object structure is represented as a pair of curly brackets\n surrounding zero or more name/value pairs (or members).  A name is a\n string.  A single colon comes after each name, separating the name\n from the value.  A single comma separates a value from a\n following name.\n\u003c/p\u003e\u003cp\u003eArrays:\n\u003c/p\u003e\u003cp\u003eAn array structure is represented as square brackets surrounding\n zero or more values (or elements).  Elements are separated by commas.\n\u003c/p\u003e\u003cp\u003eOnly valid JSON can be constructed this way\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "data",
        "title": "JSValue"
      },
      "index": {
        "description": "JSON values The type to which we encode Haskell values There set of primitives and couple of heterogenous collection types Objects An object structure is represented as pair of curly brackets surrounding zero or more name value pairs or members name is string single colon comes after each name separating the name from the value single comma separates value from following name Arrays An array structure is represented as square brackets surrounding zero or more values or elements Elements are separated by commas Only valid JSON can be constructed this way",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSValue",
        "normalized": "",
        "package": "json",
        "partial": "JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSArray",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSArray [JSValue]",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSArray",
        "normalized": "JSArray[JSValue]",
        "package": "json",
        "partial": "JSArray",
        "signature": "JSArray[JSValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSBool",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSBool !Bool",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSBool",
        "normalized": "",
        "package": "json",
        "partial": "JSBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSNull",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSNull",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSNull",
        "normalized": "",
        "package": "json",
        "partial": "JSNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSONObject",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSONObject",
        "fct-source": "src/Text-JSON-Types.html#JSObject",
        "fct-type": "function",
        "title": "JSONObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSONObject",
        "normalized": "",
        "package": "json",
        "partial": "JSONObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSONString",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSONString",
        "fct-source": "src/Text-JSON-Types.html#JSString",
        "fct-type": "function",
        "title": "JSONString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSONString",
        "normalized": "",
        "package": "json",
        "partial": "JSONString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSObject",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSObject (JSObject JSValue)",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSObject",
        "normalized": "",
        "package": "json",
        "partial": "JSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSRational",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSRational Bool !Rational",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSRational"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSRational",
        "normalized": "",
        "package": "json",
        "partial": "JSRational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSString",
      "description": {
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSString JSString",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "JSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:fromJSObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "[(String, e)]",
        "fct-source": "src/Text-JSON-Types.html#JSObject",
        "fct-type": "function",
        "title": "fromJSObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "fromJSObject",
        "normalized": "[(String,a)]",
        "package": "json",
        "partial": "JSObject",
        "signature": "[(String,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:fromJSString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "String",
        "fct-source": "src/Text-JSON-Types.html#JSString",
        "fct-type": "function",
        "title": "fromJSString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "fromJSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:get_field",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a field, if it exist.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSObject a -\u003e String -\u003e Maybe a",
        "fct-source": "src/Text-JSON-Types.html#get_field",
        "fct-type": "function",
        "title": "get_field"
      },
      "index": {
        "description": "Get the value of field if it exist",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "get_field",
        "normalized": "JSObject a-\u003eString-\u003eMaybe a",
        "package": "json",
        "partial": "",
        "signature": "JSObject a-\u003eString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:set_field",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of a field.  Previous values are overwritten.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "JSObject a -\u003e String -\u003e a -\u003e JSObject a",
        "fct-source": "src/Text-JSON-Types.html#set_field",
        "fct-type": "function",
        "title": "set_field"
      },
      "index": {
        "description": "Set the value of field Previous values are overwritten",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "set_field",
        "normalized": "JSObject a-\u003eString-\u003ea-\u003eJSObject a",
        "package": "json",
        "partial": "",
        "signature": "JSObject a-\u003eString-\u003ea-\u003eJSObject a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:toJSObject",
      "description": {
        "fct-descr": "\u003cp\u003eMake JSON object out of an association list.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "[(String, a)] -\u003e JSObject a",
        "fct-source": "src/Text-JSON-Types.html#toJSObject",
        "fct-type": "function",
        "title": "toJSObject"
      },
      "index": {
        "description": "Make JSON object out of an association list",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "toJSObject",
        "normalized": "[(String,a)]-\u003eJSObject a",
        "package": "json",
        "partial": "JSObject",
        "signature": "[(String,a)]-\u003eJSObject a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:toJSString",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a Haskell string into a JSON string.\n\u003c/p\u003e",
        "fct-module": "Text.JSON.Types",
        "fct-package": "json",
        "fct-signature": "String -\u003e JSString",
        "fct-source": "src/Text-JSON-Types.html#toJSString",
        "fct-type": "function",
        "title": "toJSString"
      },
      "index": {
        "description": "Turn Haskell string into JSON string",
        "hierarchy": "Text JSON Types",
        "module": "Text.JSON.Types",
        "name": "toJSString",
        "normalized": "String-\u003eJSString",
        "package": "json",
        "partial": "JSString",
        "signature": "String-\u003eJSString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "module",
        "fct-source": "src/Text-JSON.html",
        "fct-type": "module",
        "title": "JSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSON",
        "normalized": "",
        "package": "json",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSKey",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell types that can be used as keys in JSON objects.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON.html#JSKey",
        "fct-type": "class",
        "title": "JSKey"
      },
      "index": {
        "description": "Haskell types that can be used as keys in JSON objects",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSKey",
        "normalized": "",
        "package": "json",
        "partial": "JSKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSON",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types serialisable to and from JSON\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "class",
        "fct-source": "src/Text-JSON.html#JSON",
        "fct-type": "class",
        "title": "JSON"
      },
      "index": {
        "description": "The class of types serialisable to and from JSON",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSON",
        "normalized": "",
        "package": "json",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSObject",
      "description": {
        "fct-descr": "\u003cp\u003eAs can association lists\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON-Types.html#JSObject",
        "fct-type": "data",
        "title": "JSObject"
      },
      "index": {
        "description": "As can association lists",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSObject",
        "normalized": "",
        "package": "json",
        "partial": "JSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSString",
      "description": {
        "fct-descr": "\u003cp\u003eStrings can be represented a little more efficiently in JSON\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON-Types.html#JSString",
        "fct-type": "data",
        "title": "JSString"
      },
      "index": {
        "description": "Strings can be represented little more efficiently in JSON",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSValue",
      "description": {
        "fct-descr": "\u003cp\u003eJSON values\n\u003c/p\u003e\u003cp\u003eThe type to which we encode Haskell values. There's a set\n of primitives, and a couple of heterogenous collection types.\n\u003c/p\u003e\u003cp\u003eObjects:\n\u003c/p\u003e\u003cp\u003eAn object structure is represented as a pair of curly brackets\n surrounding zero or more name/value pairs (or members).  A name is a\n string.  A single colon comes after each name, separating the name\n from the value.  A single comma separates a value from a\n following name.\n\u003c/p\u003e\u003cp\u003eArrays:\n\u003c/p\u003e\u003cp\u003eAn array structure is represented as square brackets surrounding\n zero or more values (or elements).  Elements are separated by commas.\n\u003c/p\u003e\u003cp\u003eOnly valid JSON can be constructed this way\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "data",
        "title": "JSValue"
      },
      "index": {
        "description": "JSON values The type to which we encode Haskell values There set of primitives and couple of heterogenous collection types Objects An object structure is represented as pair of curly brackets surrounding zero or more name value pairs or members name is string single colon comes after each name separating the name from the value single comma separates value from following name Arrays An array structure is represented as square brackets surrounding zero or more values or elements Elements are separated by commas Only valid JSON can be constructed this way",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSValue",
        "normalized": "",
        "package": "json",
        "partial": "JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eA type for parser results\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "data",
        "fct-source": "src/Text-JSON.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "type for parser results",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "Result",
        "normalized": "",
        "package": "json",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:Error",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "Error String",
        "fct-source": "src/Text-JSON.html#Result",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "Error",
        "normalized": "",
        "package": "json",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSArray",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSArray [JSValue]",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSArray",
        "normalized": "JSArray[JSValue]",
        "package": "json",
        "partial": "JSArray",
        "signature": "JSArray[JSValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSBool",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSBool !Bool",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSBool",
        "normalized": "",
        "package": "json",
        "partial": "JSBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSNull",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSNull",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSNull",
        "normalized": "",
        "package": "json",
        "partial": "JSNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSObject",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSObject (JSObject JSValue)",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSObject",
        "normalized": "",
        "package": "json",
        "partial": "JSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSRational",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSRational Bool !Rational",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSRational"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSRational",
        "normalized": "",
        "package": "json",
        "partial": "JSRational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSString",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSString JSString",
        "fct-source": "src/Text-JSON-Types.html#JSValue",
        "fct-type": "function",
        "title": "JSString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "JSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:Ok",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "Ok a",
        "fct-source": "src/Text-JSON.html#Result",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "Ok",
        "normalized": "",
        "package": "json",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:decJSDict",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eJSObject\u003c/a\u003e\u003c/code\u003e value into an association list.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "String -\u003e JSValue -\u003e Result [(a, b)]",
        "fct-source": "src/Text-JSON.html#decJSDict",
        "fct-type": "function",
        "title": "decJSDict"
      },
      "index": {
        "description": "Decode JSObject value into an association list",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "decJSDict",
        "normalized": "String-\u003eJSValue-\u003eResult[(a,b)]",
        "package": "json",
        "partial": "JSDict",
        "signature": "String-\u003eJSValue-\u003eResult[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a String representing a JSON value \n (either an object, array, bool, number, null)\n\u003c/p\u003e\u003cp\u003eThis is a superset of JSON, as types other than\n Array and Object are allowed at the top level.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "String -\u003e Result a",
        "fct-source": "src/Text-JSON.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode String representing JSON value either an object array bool number null This is superset of JSON as types other than Array and Object are allowed at the top level",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "decode",
        "normalized": "String-\u003eResult a",
        "package": "json",
        "partial": "",
        "signature": "String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:decodeStrict",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a String representing a strict JSON value.\n This follows the spec, and requires top level\n JSON types to be an Array or Object.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "String -\u003e Result a",
        "fct-source": "src/Text-JSON.html#decodeStrict",
        "fct-type": "function",
        "title": "decodeStrict"
      },
      "index": {
        "description": "Decode String representing strict JSON value This follows the spec and requires top level JSON types to be an Array or Object",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "decodeStrict",
        "normalized": "String-\u003eResult a",
        "package": "json",
        "partial": "Strict",
        "signature": "String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:encJSDict",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an association list as \u003ccode\u003e\u003ca\u003eJSObject\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "[(a, b)] -\u003e JSValue",
        "fct-source": "src/Text-JSON.html#encJSDict",
        "fct-type": "function",
        "title": "encJSDict"
      },
      "index": {
        "description": "Encode an association list as JSObject value",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "encJSDict",
        "normalized": "[(a,b)]-\u003eJSValue",
        "package": "json",
        "partial": "JSDict",
        "signature": "[(a,b)]-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a Haskell value into a string, in JSON format.\n\u003c/p\u003e\u003cp\u003eThis is a superset of JSON, as types other than\n Array and Object are allowed at the top level.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-JSON.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode Haskell value into string in JSON format This is superset of JSON as types other than Array and Object are allowed at the top level",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "encode",
        "normalized": "a-\u003eString",
        "package": "json",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:encodeStrict",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value as a String in strict JSON format.\n This follows the spec, and requires all values\n at the top level to be wrapped in either an Array or Object.\n JSON types to be an Array or Object.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-JSON.html#encodeStrict",
        "fct-type": "function",
        "title": "encodeStrict"
      },
      "index": {
        "description": "Encode value as String in strict JSON format This follows the spec and requires all values at the top level to be wrapped in either an Array or Object JSON types to be an Array or Object",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "encodeStrict",
        "normalized": "a-\u003eString",
        "package": "json",
        "partial": "Strict",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:fromJSKey",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Text-JSON.html#fromJSKey",
        "fct-type": "method",
        "title": "fromJSKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "fromJSKey",
        "normalized": "String-\u003eMaybe a",
        "package": "json",
        "partial": "JSKey",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:fromJSObject",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSObject e -\u003e [(String, e)]",
        "fct-source": "src/Text-JSON-Types.html#fromJSObject",
        "fct-type": "function",
        "title": "fromJSObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "fromJSObject",
        "normalized": "JSObject a-\u003e[(String,a)]",
        "package": "json",
        "partial": "JSObject",
        "signature": "JSObject e-\u003e[(String,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:fromJSString",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSString -\u003e String",
        "fct-source": "src/Text-JSON-Types.html#fromJSString",
        "fct-type": "function",
        "title": "fromJSString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "fromJSString",
        "normalized": "JSString-\u003eString",
        "package": "json",
        "partial": "JSString",
        "signature": "JSString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:makeObj",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "[(String, JSValue)] -\u003e JSValue",
        "fct-source": "src/Text-JSON.html#makeObj",
        "fct-type": "function",
        "title": "makeObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "makeObj",
        "normalized": "[(String,JSValue)]-\u003eJSValue",
        "package": "json",
        "partial": "Obj",
        "signature": "[(String,JSValue)]-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSArray",
      "description": {
        "fct-descr": "\u003cp\u003eRead a list in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSArray",
        "fct-type": "function",
        "title": "readJSArray"
      },
      "index": {
        "description": "Read list in JSON format",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSArray",
        "normalized": "",
        "package": "json",
        "partial": "JSArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSBool",
      "description": {
        "fct-descr": "\u003cp\u003eRead the JSON Bool type\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSBool",
        "fct-type": "function",
        "title": "readJSBool"
      },
      "index": {
        "description": "Read the JSON Bool type",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSBool",
        "normalized": "",
        "package": "json",
        "partial": "JSBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSNull",
      "description": {
        "fct-descr": "\u003cp\u003eRead the JSON null type\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSNull",
        "fct-type": "function",
        "title": "readJSNull"
      },
      "index": {
        "description": "Read the JSON null type",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSNull",
        "normalized": "",
        "package": "json",
        "partial": "JSNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSON",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e Result a",
        "fct-source": "src/Text-JSON.html#readJSON",
        "fct-type": "method",
        "title": "readJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSON",
        "normalized": "JSValue-\u003eResult a",
        "package": "json",
        "partial": "JSON",
        "signature": "JSValue-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSONs",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e Result [a]",
        "fct-source": "src/Text-JSON.html#readJSONs",
        "fct-type": "method",
        "title": "readJSONs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSONs",
        "normalized": "JSValue-\u003eResult[a]",
        "package": "json",
        "partial": "JSONs",
        "signature": "JSValue-\u003eResult[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSObject",
      "description": {
        "fct-descr": "\u003cp\u003eRead an object in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSObject",
        "fct-type": "function",
        "title": "readJSObject"
      },
      "index": {
        "description": "Read an object in JSON format",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSObject",
        "normalized": "",
        "package": "json",
        "partial": "JSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSRational",
      "description": {
        "fct-descr": "\u003cp\u003eRead an Integer or Double in JSON format, returning a Rational\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON Rational",
        "fct-source": "src/Text-JSON-String.html#readJSRational",
        "fct-type": "function",
        "title": "readJSRational"
      },
      "index": {
        "description": "Read an Integer or Double in JSON format returning Rational",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSRational",
        "normalized": "",
        "package": "json",
        "partial": "JSRational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSString",
      "description": {
        "fct-descr": "\u003cp\u003eRead the JSON String type\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSString",
        "fct-type": "function",
        "title": "readJSString"
      },
      "index": {
        "description": "Read the JSON String type",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSString",
        "normalized": "",
        "package": "json",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eRead one of several possible JS types\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "GetJSON JSValue",
        "fct-source": "src/Text-JSON-String.html#readJSValue",
        "fct-type": "function",
        "title": "readJSValue"
      },
      "index": {
        "description": "Read one of several possible JS types",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "readJSValue",
        "normalized": "",
        "package": "json",
        "partial": "JSValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:resultToEither",
      "description": {
        "fct-descr": "\u003cp\u003eMap Results to Eithers\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "Result a -\u003e Either String a",
        "fct-source": "src/Text-JSON.html#resultToEither",
        "fct-type": "function",
        "title": "resultToEither"
      },
      "index": {
        "description": "Map Results to Eithers",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "resultToEither",
        "normalized": "Result a-\u003eEither String a",
        "package": "json",
        "partial": "To Either",
        "signature": "Result a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSArray",
      "description": {
        "fct-descr": "\u003cp\u003eShow a list in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "[JSValue] -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSArray",
        "fct-type": "function",
        "title": "showJSArray"
      },
      "index": {
        "description": "Show list in JSON format",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSArray",
        "normalized": "[JSValue]-\u003eShowS",
        "package": "json",
        "partial": "JSArray",
        "signature": "[JSValue]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSBool",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the JSON Bool type\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "Bool -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSBool",
        "fct-type": "function",
        "title": "showJSBool"
      },
      "index": {
        "description": "Write the JSON Bool type",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSBool",
        "normalized": "Bool-\u003eShowS",
        "package": "json",
        "partial": "JSBool",
        "signature": "Bool-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSNull",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the JSON null type\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSNull",
        "fct-type": "function",
        "title": "showJSNull"
      },
      "index": {
        "description": "Write the JSON null type",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSNull",
        "normalized": "",
        "package": "json",
        "partial": "JSNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSON",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "a -\u003e JSValue",
        "fct-source": "src/Text-JSON.html#showJSON",
        "fct-type": "method",
        "title": "showJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSON",
        "normalized": "a-\u003eJSValue",
        "package": "json",
        "partial": "JSON",
        "signature": "a-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSONs",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "[a] -\u003e JSValue",
        "fct-source": "src/Text-JSON.html#showJSONs",
        "fct-type": "method",
        "title": "showJSONs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSONs",
        "normalized": "[a]-\u003eJSValue",
        "package": "json",
        "partial": "JSONs",
        "signature": "[a]-\u003eJSValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSObject",
      "description": {
        "fct-descr": "\u003cp\u003eShow an association list in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSObject JSValue -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSObject",
        "fct-type": "function",
        "title": "showJSObject"
      },
      "index": {
        "description": "Show an association list in JSON format",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSObject",
        "normalized": "JSObject JSValue-\u003eShowS",
        "package": "json",
        "partial": "JSObject",
        "signature": "JSObject JSValue-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSRational",
      "description": {
        "fct-descr": "\u003cp\u003eShow a Rational in JSON format\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "Rational -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSRational",
        "fct-type": "function",
        "title": "showJSRational"
      },
      "index": {
        "description": "Show Rational in JSON format",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSRational",
        "normalized": "Rational-\u003eShowS",
        "package": "json",
        "partial": "JSRational",
        "signature": "Rational-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSRational-39-",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "Bool -\u003e Rational -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSRational%27",
        "fct-type": "function",
        "title": "showJSRational'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSRational'",
        "normalized": "Bool-\u003eRational-\u003eShowS",
        "package": "json",
        "partial": "JSRational'",
        "signature": "Bool-\u003eRational-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSValue",
      "description": {
        "fct-descr": "\u003cp\u003eShow JSON values\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "JSValue -\u003e ShowS",
        "fct-source": "src/Text-JSON-String.html#showJSValue",
        "fct-type": "function",
        "title": "showJSValue"
      },
      "index": {
        "description": "Show JSON values",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "showJSValue",
        "normalized": "JSValue-\u003eShowS",
        "package": "json",
        "partial": "JSValue",
        "signature": "JSValue-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:toJSKey",
      "description": {
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-JSON.html#toJSKey",
        "fct-type": "method",
        "title": "toJSKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "toJSKey",
        "normalized": "a-\u003eString",
        "package": "json",
        "partial": "JSKey",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:toJSObject",
      "description": {
        "fct-descr": "\u003cp\u003eMake JSON object out of an association list.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "[(String, a)] -\u003e JSObject a",
        "fct-source": "src/Text-JSON-Types.html#toJSObject",
        "fct-type": "function",
        "title": "toJSObject"
      },
      "index": {
        "description": "Make JSON object out of an association list",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "toJSObject",
        "normalized": "[(String,a)]-\u003eJSObject a",
        "package": "json",
        "partial": "JSObject",
        "signature": "[(String,a)]-\u003eJSObject a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:toJSString",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a Haskell string into a JSON string.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "String -\u003e JSString",
        "fct-source": "src/Text-JSON-Types.html#toJSString",
        "fct-type": "function",
        "title": "toJSString"
      },
      "index": {
        "description": "Turn Haskell string into JSON string",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "toJSString",
        "normalized": "String-\u003eJSString",
        "package": "json",
        "partial": "JSString",
        "signature": "String-\u003eJSString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:valFromObj",
      "description": {
        "fct-descr": "\u003cp\u003ePull a value out of a JSON object.\n\u003c/p\u003e",
        "fct-module": "Text.JSON",
        "fct-package": "json",
        "fct-signature": "String -\u003e JSObject JSValue -\u003e Result a",
        "fct-source": "src/Text-JSON.html#valFromObj",
        "fct-type": "function",
        "title": "valFromObj"
      },
      "index": {
        "description": "Pull value out of JSON object",
        "hierarchy": "Text JSON",
        "module": "Text.JSON",
        "name": "valFromObj",
        "normalized": "String-\u003eJSObject JSValue-\u003eResult a",
        "package": "json",
        "partial": "From Obj",
        "signature": "String-\u003eJSObject JSValue-\u003eResult a"
      }
    }
  }
]