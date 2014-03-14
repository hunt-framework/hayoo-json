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
        "word": "json"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJSON serializer and deserializer using Data.Generics.\n The functions here handle algebraic data types and primitive types.\n It uses the same representation as \u003ca\u003eText.JSON\u003c/a\u003e for \u003ca\u003ePrelude\u003c/a\u003e types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Generic",
          "name": "Generic",
          "package": "json",
          "source": "src/Text-JSON-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "JSON serializer and deserializer using Data.Generics The functions here handle algebraic data types and primitive types It uses the same representation as Text.JSON for Prelude types",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "Generic",
          "package": "json",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
          "module": "Text.JSON.Generic",
          "name": "Data",
          "package": "json",
          "type": "class"
        },
        "index": {
          "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "Data",
          "package": "json",
          "partial": "Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "Text.JSON.Generic",
          "name": "Typeable",
          "package": "json",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "Typeable",
          "package": "json",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a string as a value.\n\u003c/p\u003e",
          "module": "Text.JSON.Generic",
          "name": "decodeJSON",
          "package": "json",
          "signature": "String -\u003e a",
          "source": "src/Text-JSON-Generic.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode string as value",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "decodeJSON",
          "normalized": "String-\u003ea",
          "package": "json",
          "partial": "JSON",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value as a string.\n\u003c/p\u003e",
          "module": "Text.JSON.Generic",
          "name": "encodeJSON",
          "package": "json",
          "signature": "a -\u003e String",
          "source": "src/Text-JSON-Generic.html#encodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Encode value as string",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "encodeJSON",
          "normalized": "a-\u003eString",
          "package": "json",
          "partial": "JSON",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:encodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a JSON value to anything (fails if the types do not match).\n\u003c/p\u003e",
          "module": "Text.JSON.Generic",
          "name": "fromJSON",
          "package": "json",
          "signature": "JSValue -\u003e Result a",
          "source": "src/Text-JSON-Generic.html#fromJSON",
          "type": "function"
        },
        "index": {
          "description": "Convert JSON value to anything fails if the types do not match",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "fromJSON",
          "normalized": "JSValue-\u003eResult a",
          "package": "json",
          "partial": "JSON",
          "signature": "JSValue-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:fromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Generic",
          "name": "fromJSON_generic",
          "package": "json",
          "signature": "JSValue -\u003e Result a",
          "source": "src/Text-JSON-Generic.html#fromJSON_generic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "fromJSON_generic",
          "normalized": "JSValue-\u003eResult a",
          "package": "json",
          "partial": "JSON",
          "signature": "JSValue-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:fromJSON_generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert anything to a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.Generic",
          "name": "toJSON",
          "package": "json",
          "signature": "a -\u003e JSValue",
          "source": "src/Text-JSON-Generic.html#toJSON",
          "type": "function"
        },
        "index": {
          "description": "Convert anything to JSON value",
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "toJSON",
          "normalized": "a-\u003eJSValue",
          "package": "json",
          "partial": "JSON",
          "signature": "a-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Generic",
          "name": "toJSON_generic",
          "package": "json",
          "signature": "a -\u003e JSValue",
          "source": "src/Text-JSON-Generic.html#toJSON_generic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Generic",
          "module": "Text.JSON.Generic",
          "name": "toJSON_generic",
          "normalized": "a-\u003eJSValue",
          "package": "json",
          "partial": "JSON",
          "signature": "a-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Generic.html#v:toJSON_generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse JSON values using the Parsec combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Parsec",
          "name": "Parsec",
          "package": "json",
          "source": "src/Text-JSON-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "Parse JSON values using the Parsec combinators",
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "Parsec",
          "package": "json",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_array",
          "package": "json",
          "signature": "CharParser () [JSValue]",
          "source": "src/Text-JSON-Parsec.html#p_array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_array",
          "normalized": "CharParser()[JSValue]",
          "package": "json",
          "signature": "CharParser()[JSValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_boolean",
          "package": "json",
          "signature": "CharParser () Bool",
          "source": "src/Text-JSON-Parsec.html#p_boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_boolean",
          "normalized": "CharParser()Bool",
          "package": "json",
          "signature": "CharParser()Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_js_object",
          "package": "json",
          "signature": "CharParser () (JSObject JSValue)",
          "source": "src/Text-JSON-Parsec.html#p_js_object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_js_object",
          "normalized": "CharParser()(JSObject JSValue)",
          "package": "json",
          "signature": "CharParser()(JSObject JSValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_js_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_js_string",
          "package": "json",
          "signature": "CharParser () JSString",
          "source": "src/Text-JSON-Parsec.html#p_js_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_js_string",
          "normalized": "CharParser()JSString",
          "package": "json",
          "signature": "CharParser()JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_js_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_jvalue",
          "package": "json",
          "signature": "CharParser () JSValue",
          "source": "src/Text-JSON-Parsec.html#p_jvalue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_jvalue",
          "normalized": "CharParser()JSValue",
          "package": "json",
          "signature": "CharParser()JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_jvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_null",
          "package": "json",
          "signature": "CharParser () ()",
          "source": "src/Text-JSON-Parsec.html#p_null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_null",
          "normalized": "CharParser()()",
          "package": "json",
          "signature": "CharParser()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_number",
          "package": "json",
          "signature": "CharParser () Rational",
          "source": "src/Text-JSON-Parsec.html#p_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_number",
          "normalized": "CharParser()Rational",
          "package": "json",
          "signature": "CharParser()Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_object",
          "package": "json",
          "signature": "CharParser () [(String, JSValue)]",
          "source": "src/Text-JSON-Parsec.html#p_object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_object",
          "normalized": "CharParser()[(String,JSValue)]",
          "package": "json",
          "signature": "CharParser()[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_string",
          "package": "json",
          "signature": "CharParser () String",
          "source": "src/Text-JSON-Parsec.html#p_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_string",
          "normalized": "CharParser()String",
          "package": "json",
          "signature": "CharParser()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Parsec",
          "name": "p_value",
          "package": "json",
          "signature": "CharParser () JSValue",
          "source": "src/Text-JSON-Parsec.html#p_value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Parsec",
          "module": "Text.JSON.Parsec",
          "name": "p_value",
          "normalized": "CharParser()JSValue",
          "package": "json",
          "signature": "CharParser()JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Parsec.html#v:p_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay JSON values using pretty printing combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Pretty",
          "name": "Pretty",
          "package": "json",
          "source": "src/Text-JSON-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Display JSON values using pretty printing combinators",
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "Pretty",
          "package": "json",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_array",
          "package": "json",
          "signature": "[JSValue] -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_array",
          "normalized": "[JSValue]-\u003eDoc",
          "package": "json",
          "signature": "[JSValue]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_boolean",
          "package": "json",
          "signature": "Bool -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_boolean",
          "normalized": "Bool-\u003eDoc",
          "package": "json",
          "signature": "Bool-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_js_object",
          "package": "json",
          "signature": "JSObject JSValue -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_js_object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_js_object",
          "normalized": "JSObject JSValue-\u003eDoc",
          "package": "json",
          "signature": "JSObject JSValue-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_js_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_js_string",
          "package": "json",
          "signature": "JSString -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_js_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_js_string",
          "normalized": "JSString-\u003eDoc",
          "package": "json",
          "signature": "JSString-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_js_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_null",
          "package": "json",
          "signature": "Doc",
          "source": "src/Text-JSON-Pretty.html#pp_null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_null",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_number",
          "package": "json",
          "signature": "Bool -\u003e Rational -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_number",
          "normalized": "Bool-\u003eRational-\u003eDoc",
          "package": "json",
          "signature": "Bool-\u003eRational-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_object",
          "package": "json",
          "signature": "[(String, JSValue)] -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_object",
          "normalized": "[(String,JSValue)]-\u003eDoc",
          "package": "json",
          "signature": "[(String,JSValue)]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_string",
          "package": "json",
          "signature": "String -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_string",
          "normalized": "String-\u003eDoc",
          "package": "json",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Pretty",
          "name": "pp_value",
          "package": "json",
          "signature": "JSValue -\u003e Doc",
          "source": "src/Text-JSON-Pretty.html#pp_value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Pretty",
          "module": "Text.JSON.Pretty",
          "name": "pp_value",
          "normalized": "JSValue-\u003eDoc",
          "package": "json",
          "signature": "JSValue-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Pretty.html#v:pp_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse JSON values using the ReadP combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.ReadP",
          "name": "ReadP",
          "package": "json",
          "source": "src/Text-JSON-ReadP.html",
          "type": "module"
        },
        "index": {
          "description": "Parse JSON values using the ReadP combinators",
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "ReadP",
          "package": "json",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_array",
          "package": "json",
          "signature": "ReadP [JSValue]",
          "source": "src/Text-JSON-ReadP.html#p_array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_array",
          "normalized": "ReadP[JSValue]",
          "package": "json",
          "signature": "ReadP[JSValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_boolean",
          "package": "json",
          "signature": "ReadP Bool",
          "source": "src/Text-JSON-ReadP.html#p_boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_boolean",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_js_object",
          "package": "json",
          "signature": "ReadP (JSObject JSValue)",
          "source": "src/Text-JSON-ReadP.html#p_js_object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_js_object",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_js_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_js_string",
          "package": "json",
          "signature": "ReadP JSString",
          "source": "src/Text-JSON-ReadP.html#p_js_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_js_string",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_js_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_null",
          "package": "json",
          "signature": "ReadP ()",
          "source": "src/Text-JSON-ReadP.html#p_null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_null",
          "normalized": "ReadP()",
          "package": "json",
          "signature": "ReadP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_number",
          "package": "json",
          "signature": "ReadP Rational",
          "source": "src/Text-JSON-ReadP.html#p_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_number",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_object",
          "package": "json",
          "signature": "ReadP [(String, JSValue)]",
          "source": "src/Text-JSON-ReadP.html#p_object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_object",
          "normalized": "ReadP[(String,JSValue)]",
          "package": "json",
          "signature": "ReadP[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_string",
          "package": "json",
          "signature": "ReadP String",
          "source": "src/Text-JSON-ReadP.html#p_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_string",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.ReadP",
          "name": "p_value",
          "package": "json",
          "signature": "ReadP JSValue",
          "source": "src/Text-JSON-ReadP.html#p_value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON ReadP",
          "module": "Text.JSON.ReadP",
          "name": "p_value",
          "package": "json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-ReadP.html#v:p_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.String",
          "name": "String",
          "package": "json",
          "source": "src/Text-JSON-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "String",
          "package": "json",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing JSON\n\u003c/p\u003e\u003cp\u003eThe type of JSON parsers for String\n\u003c/p\u003e",
          "module": "Text.JSON.String",
          "name": "GetJSON",
          "package": "json",
          "source": "src/Text-JSON-String.html#GetJSON",
          "type": "data"
        },
        "index": {
          "description": "Parsing JSON The type of JSON parsers for String",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "GetJSON",
          "package": "json",
          "partial": "Get JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#t:GetJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a list in JSON format\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSArray",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSArray\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSArray\"]"
        },
        "index": {
          "description": "Read list in JSON format",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSArray",
          "package": "json",
          "partial": "JSArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the JSON Bool type\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSBool",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSBool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSBool\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSBool\"]"
        },
        "index": {
          "description": "Read the JSON Bool type",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSBool",
          "package": "json",
          "partial": "JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the JSON null type\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSNull",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSNull",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSNull\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSNull\"]"
        },
        "index": {
          "description": "Read the JSON null type",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSNull",
          "package": "json",
          "partial": "JSNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an object in JSON format\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSObject",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSObject",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSObject\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSObject\"]"
        },
        "index": {
          "description": "Read an object in JSON format",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSObject",
          "package": "json",
          "partial": "JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an Integer or Double in JSON format, returning a Rational\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSRational",
          "package": "json",
          "signature": "GetJSON Rational",
          "source": "src/Text-JSON-String.html#readJSRational",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSRational\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSRational\"]"
        },
        "index": {
          "description": "Read an Integer or Double in JSON format returning Rational",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSRational",
          "package": "json",
          "partial": "JSRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the JSON String type\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSString",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSString\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSString\"]"
        },
        "index": {
          "description": "Read the JSON String type",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSString",
          "package": "json",
          "partial": "JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop level JSON can only be Arrays or Objects\n\u003c/p\u003e",
          "module": "Text.JSON.String",
          "name": "readJSTopType",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSTopType",
          "type": "function"
        },
        "index": {
          "description": "Top level JSON can only be Arrays or Objects",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSTopType",
          "package": "json",
          "partial": "JSTop Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSTopType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one of several possible JS types\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "readJSValue",
          "package": "json",
          "signature": "GetJSON JSValue",
          "source": "src/Text-JSON-String.html#readJSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSValue\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSValue\"]"
        },
        "index": {
          "description": "Read one of several possible JS types",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "readJSValue",
          "package": "json",
          "partial": "JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:readJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a JSON reader on an input String, returning some Haskell value.\n All input will be consumed.\n\u003c/p\u003e",
          "module": "Text.JSON.String",
          "name": "runGetJSON",
          "package": "json",
          "signature": "GetJSON a -\u003e String -\u003e Either String a",
          "source": "src/Text-JSON-String.html#runGetJSON",
          "type": "function"
        },
        "index": {
          "description": "Run JSON reader on an input String returning some Haskell value All input will be consumed",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "runGetJSON",
          "normalized": "GetJSON a-\u003eString-\u003eEither String a",
          "package": "json",
          "partial": "Get JSON",
          "signature": "GetJSON a-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:runGetJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a list in JSON format\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSArray",
          "package": "json",
          "signature": "[JSValue] -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSArray\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSArray\"]"
        },
        "index": {
          "description": "Show list in JSON format",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSArray",
          "normalized": "[JSValue]-\u003eShowS",
          "package": "json",
          "partial": "JSArray",
          "signature": "[JSValue]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the JSON Bool type\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSBool",
          "package": "json",
          "signature": "Bool -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSBool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSBool\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSBool\"]"
        },
        "index": {
          "description": "Write the JSON Bool type",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSBool",
          "normalized": "Bool-\u003eShowS",
          "package": "json",
          "partial": "JSBool",
          "signature": "Bool-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the JSON null type\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSNull",
          "package": "json",
          "signature": "ShowS",
          "source": "src/Text-JSON-String.html#showJSNull",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSNull\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSNull\"]"
        },
        "index": {
          "description": "Write the JSON null type",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSNull",
          "package": "json",
          "partial": "JSNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an association list in JSON format\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSObject",
          "package": "json",
          "signature": "JSObject JSValue -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSObject",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSObject\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSObject\"]"
        },
        "index": {
          "description": "Show an association list in JSON format",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSObject",
          "normalized": "JSObject JSValue-\u003eShowS",
          "package": "json",
          "partial": "JSObject",
          "signature": "JSObject JSValue-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a Rational in JSON format\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSRational",
          "package": "json",
          "signature": "Rational -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSRational",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSRational\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSRational\"]"
        },
        "index": {
          "description": "Show Rational in JSON format",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSRational",
          "normalized": "Rational-\u003eShowS",
          "package": "json",
          "partial": "JSRational",
          "signature": "Rational-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSRational'",
          "package": "json",
          "signature": "Bool -\u003e Rational -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSRational%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSRational-39-\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSRational-39-\"]"
        },
        "index": {
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSRational'",
          "normalized": "Bool-\u003eRational-\u003eShowS",
          "package": "json",
          "partial": "JSRational'",
          "signature": "Bool-\u003eRational-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSRational-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWriting JSON\n\u003c/p\u003e\u003cp\u003eShow strict JSON top level types. Values not permitted\n at the top level are wrapped in a singleton array.\n\u003c/p\u003e",
          "module": "Text.JSON.String",
          "name": "showJSTopType",
          "package": "json",
          "signature": "JSValue -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSTopType",
          "type": "function"
        },
        "index": {
          "description": "Writing JSON Show strict JSON top level types Values not permitted at the top level are wrapped in singleton array",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSTopType",
          "normalized": "JSValue-\u003eShowS",
          "package": "json",
          "partial": "JSTop Type",
          "signature": "JSValue-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSTopType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow JSON values\n\u003c/p\u003e",
          "module": "[\"Text.JSON.String\",\"Text.JSON\"]",
          "name": "showJSValue",
          "package": "json",
          "signature": "JSValue -\u003e ShowS",
          "source": "src/Text-JSON-String.html#showJSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSValue\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSValue\"]"
        },
        "index": {
          "description": "Show JSON values",
          "hierarchy": "Text JSON String",
          "module": "Text.JSON.String",
          "name": "showJSValue",
          "normalized": "JSValue-\u003eShowS",
          "package": "json",
          "partial": "JSValue",
          "signature": "JSValue-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-String.html#v:showJSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Types",
          "name": "Types",
          "package": "json",
          "source": "src/Text-JSON-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "Types",
          "package": "json",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs can association lists\n\u003c/p\u003e",
          "module": "Text.JSON.Types",
          "name": "JSObject",
          "package": "json",
          "source": "src/Text-JSON-Types.html#JSObject",
          "type": "newtype"
        },
        "index": {
          "description": "As can association lists",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSObject",
          "package": "json",
          "partial": "JSObject",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#t:JSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrings can be represented a little more efficiently in JSON\n\u003c/p\u003e",
          "module": "Text.JSON.Types",
          "name": "JSString",
          "package": "json",
          "source": "src/Text-JSON-Types.html#JSString",
          "type": "newtype"
        },
        "index": {
          "description": "Strings can be represented little more efficiently in JSON",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSString",
          "package": "json",
          "partial": "JSString",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#t:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON values\n\u003c/p\u003e\u003cp\u003eThe type to which we encode Haskell values. There's a set\n of primitives, and a couple of heterogenous collection types.\n\u003c/p\u003e\u003cp\u003eObjects:\n\u003c/p\u003e\u003cp\u003eAn object structure is represented as a pair of curly brackets\n surrounding zero or more name/value pairs (or members).  A name is a\n string.  A single colon comes after each name, separating the name\n from the value.  A single comma separates a value from a\n following name.\n\u003c/p\u003e\u003cp\u003eArrays:\n\u003c/p\u003e\u003cp\u003eAn array structure is represented as square brackets surrounding\n zero or more values (or elements).  Elements are separated by commas.\n\u003c/p\u003e\u003cp\u003eOnly valid JSON can be constructed this way\n\u003c/p\u003e",
          "module": "Text.JSON.Types",
          "name": "JSValue",
          "package": "json",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "data"
        },
        "index": {
          "description": "JSON values The type to which we encode Haskell values There set of primitives and couple of heterogenous collection types Objects An object structure is represented as pair of curly brackets surrounding zero or more name value pairs or members name is string single colon comes after each name separating the name from the value single comma separates value from following name Arrays An array structure is represented as square brackets surrounding zero or more values or elements Elements are separated by commas Only valid JSON can be constructed this way",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSValue",
          "package": "json",
          "partial": "JSValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#t:JSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "JSArray",
          "package": "json",
          "signature": "JSArray [JSValue]",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSArray\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSArray\"]"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSArray",
          "normalized": "JSArray[JSValue]",
          "package": "json",
          "partial": "JSArray",
          "signature": "JSArray[JSValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "JSBool",
          "package": "json",
          "signature": "JSBool !Bool",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSBool\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSBool\"]"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSBool",
          "package": "json",
          "partial": "JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "JSNull",
          "package": "json",
          "signature": "JSNull",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSNull\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSNull\"]"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSNull",
          "package": "json",
          "partial": "JSNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Types",
          "name": "JSONObject",
          "package": "json",
          "signature": "JSONObject",
          "source": "src/Text-JSON-Types.html#JSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSONObject",
          "package": "json",
          "partial": "JSONObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSONObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Types",
          "name": "JSONString",
          "package": "json",
          "signature": "JSONString",
          "source": "src/Text-JSON-Types.html#JSString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSONString",
          "package": "json",
          "partial": "JSONString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSONString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "JSObject",
          "package": "json",
          "signature": "JSObject (JSObject JSValue)",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSObject\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSObject\"]"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSObject",
          "package": "json",
          "partial": "JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "JSRational",
          "package": "json",
          "signature": "JSRational Bool !Rational",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSRational\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSRational\"]"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSRational",
          "package": "json",
          "partial": "JSRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "JSString",
          "package": "json",
          "signature": "JSString JSString",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSString\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:JSString\"]"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "JSString",
          "package": "json",
          "partial": "JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Types",
          "name": "fromJSObject",
          "package": "json",
          "signature": "[(String, e)]",
          "source": "src/Text-JSON-Types.html#JSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "fromJSObject",
          "normalized": "[(String,a)]",
          "package": "json",
          "partial": "JSObject",
          "signature": "[(String,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:fromJSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Types",
          "name": "fromJSString",
          "package": "json",
          "signature": "String",
          "source": "src/Text-JSON-Types.html#JSString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "fromJSString",
          "package": "json",
          "partial": "JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:fromJSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of a field, if it exist.\n\u003c/p\u003e",
          "module": "Text.JSON.Types",
          "name": "get_field",
          "package": "json",
          "signature": "JSObject a -\u003e String -\u003e Maybe a",
          "source": "src/Text-JSON-Types.html#get_field",
          "type": "function"
        },
        "index": {
          "description": "Get the value of field if it exist",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "get_field",
          "normalized": "JSObject a-\u003eString-\u003eMaybe a",
          "package": "json",
          "signature": "JSObject a-\u003eString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:get_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of a field.  Previous values are overwritten.\n\u003c/p\u003e",
          "module": "Text.JSON.Types",
          "name": "set_field",
          "package": "json",
          "signature": "JSObject a -\u003e String -\u003e a -\u003e JSObject a",
          "source": "src/Text-JSON-Types.html#set_field",
          "type": "function"
        },
        "index": {
          "description": "Set the value of field Previous values are overwritten",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "set_field",
          "normalized": "JSObject a-\u003eString-\u003ea-\u003eJSObject a",
          "package": "json",
          "signature": "JSObject a-\u003eString-\u003ea-\u003eJSObject a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:set_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake JSON object out of an association list.\n\u003c/p\u003e",
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "toJSObject",
          "package": "json",
          "signature": "[(String, a)] -\u003e JSObject a",
          "source": "src/Text-JSON-Types.html#toJSObject",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:toJSObject\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:toJSObject\"]"
        },
        "index": {
          "description": "Make JSON object out of an association list",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "toJSObject",
          "normalized": "[(String,a)]-\u003eJSObject a",
          "package": "json",
          "partial": "JSObject",
          "signature": "[(String,a)]-\u003eJSObject a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:toJSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a Haskell string into a JSON string.\n\u003c/p\u003e",
          "module": "[\"Text.JSON.Types\",\"Text.JSON\"]",
          "name": "toJSString",
          "package": "json",
          "signature": "String -\u003e JSString",
          "source": "src/Text-JSON-Types.html#toJSString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:toJSString\",\"http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:toJSString\"]"
        },
        "index": {
          "description": "Turn Haskell string into JSON string",
          "hierarchy": "Text JSON Types",
          "module": "Text.JSON.Types",
          "name": "toJSString",
          "normalized": "String-\u003eJSString",
          "package": "json",
          "partial": "JSString",
          "signature": "String-\u003eJSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON-Types.html#v:toJSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "JSON",
          "package": "json",
          "source": "src/Text-JSON.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "JSON",
          "package": "json",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell types that can be used as keys in JSON objects.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "JSKey",
          "package": "json",
          "source": "src/Text-JSON.html#JSKey",
          "type": "class"
        },
        "index": {
          "description": "Haskell types that can be used as keys in JSON objects",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "JSKey",
          "package": "json",
          "partial": "JSKey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of types serialisable to and from JSON\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "JSON",
          "package": "json",
          "source": "src/Text-JSON.html#JSON",
          "type": "class"
        },
        "index": {
          "description": "The class of types serialisable to and from JSON",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "JSON",
          "package": "json",
          "partial": "JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs can association lists\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "JSObject",
          "package": "json",
          "source": "src/Text-JSON-Types.html#JSObject",
          "type": "data"
        },
        "index": {
          "description": "As can association lists",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "JSObject",
          "package": "json",
          "partial": "JSObject",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrings can be represented a little more efficiently in JSON\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "JSString",
          "package": "json",
          "source": "src/Text-JSON-Types.html#JSString",
          "type": "data"
        },
        "index": {
          "description": "Strings can be represented little more efficiently in JSON",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "JSString",
          "package": "json",
          "partial": "JSString",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON values\n\u003c/p\u003e\u003cp\u003eThe type to which we encode Haskell values. There's a set\n of primitives, and a couple of heterogenous collection types.\n\u003c/p\u003e\u003cp\u003eObjects:\n\u003c/p\u003e\u003cp\u003eAn object structure is represented as a pair of curly brackets\n surrounding zero or more name/value pairs (or members).  A name is a\n string.  A single colon comes after each name, separating the name\n from the value.  A single comma separates a value from a\n following name.\n\u003c/p\u003e\u003cp\u003eArrays:\n\u003c/p\u003e\u003cp\u003eAn array structure is represented as square brackets surrounding\n zero or more values (or elements).  Elements are separated by commas.\n\u003c/p\u003e\u003cp\u003eOnly valid JSON can be constructed this way\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "JSValue",
          "package": "json",
          "source": "src/Text-JSON-Types.html#JSValue",
          "type": "data"
        },
        "index": {
          "description": "JSON values The type to which we encode Haskell values There set of primitives and couple of heterogenous collection types Objects An object structure is represented as pair of curly brackets surrounding zero or more name value pairs or members name is string single colon comes after each name separating the name from the value single comma separates value from following name Arrays An array structure is represented as square brackets surrounding zero or more values or elements Elements are separated by commas Only valid JSON can be constructed this way",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "JSValue",
          "package": "json",
          "partial": "JSValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:JSValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for parser results\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "Result",
          "package": "json",
          "source": "src/Text-JSON.html#Result",
          "type": "data"
        },
        "index": {
          "description": "type for parser results",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "Result",
          "package": "json",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "Error",
          "package": "json",
          "signature": "Error String",
          "source": "src/Text-JSON.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "Error",
          "package": "json",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "Ok",
          "package": "json",
          "signature": "Ok a",
          "source": "src/Text-JSON.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "Ok",
          "package": "json",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eJSObject\u003c/a\u003e\u003c/code\u003e value into an association list.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "decJSDict",
          "package": "json",
          "signature": "String -\u003e JSValue -\u003e Result [(a, b)]",
          "source": "src/Text-JSON.html#decJSDict",
          "type": "function"
        },
        "index": {
          "description": "Decode JSObject value into an association list",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "decJSDict",
          "normalized": "String-\u003eJSValue-\u003eResult[(a,b)]",
          "package": "json",
          "partial": "JSDict",
          "signature": "String-\u003eJSValue-\u003eResult[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:decJSDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a String representing a JSON value \n (either an object, array, bool, number, null)\n\u003c/p\u003e\u003cp\u003eThis is a superset of JSON, as types other than\n Array and Object are allowed at the top level.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "decode",
          "package": "json",
          "signature": "String -\u003e Result a",
          "source": "src/Text-JSON.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode String representing JSON value either an object array bool number null This is superset of JSON as types other than Array and Object are allowed at the top level",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "decode",
          "normalized": "String-\u003eResult a",
          "package": "json",
          "signature": "String-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a String representing a strict JSON value.\n This follows the spec, and requires top level\n JSON types to be an Array or Object.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "decodeStrict",
          "package": "json",
          "signature": "String -\u003e Result a",
          "source": "src/Text-JSON.html#decodeStrict",
          "type": "function"
        },
        "index": {
          "description": "Decode String representing strict JSON value This follows the spec and requires top level JSON types to be an Array or Object",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "decodeStrict",
          "normalized": "String-\u003eResult a",
          "package": "json",
          "partial": "Strict",
          "signature": "String-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:decodeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an association list as \u003ccode\u003e\u003ca\u003eJSObject\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "encJSDict",
          "package": "json",
          "signature": "[(a, b)] -\u003e JSValue",
          "source": "src/Text-JSON.html#encJSDict",
          "type": "function"
        },
        "index": {
          "description": "Encode an association list as JSObject value",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "encJSDict",
          "normalized": "[(a,b)]-\u003eJSValue",
          "package": "json",
          "partial": "JSDict",
          "signature": "[(a,b)]-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:encJSDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a Haskell value into a string, in JSON format.\n\u003c/p\u003e\u003cp\u003eThis is a superset of JSON, as types other than\n Array and Object are allowed at the top level.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "encode",
          "package": "json",
          "signature": "a -\u003e String",
          "source": "src/Text-JSON.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode Haskell value into string in JSON format This is superset of JSON as types other than Array and Object are allowed at the top level",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "encode",
          "normalized": "a-\u003eString",
          "package": "json",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value as a String in strict JSON format.\n This follows the spec, and requires all values\n at the top level to be wrapped in either an Array or Object.\n JSON types to be an Array or Object.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "encodeStrict",
          "package": "json",
          "signature": "a -\u003e String",
          "source": "src/Text-JSON.html#encodeStrict",
          "type": "function"
        },
        "index": {
          "description": "Encode value as String in strict JSON format This follows the spec and requires all values at the top level to be wrapped in either an Array or Object JSON types to be an Array or Object",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "encodeStrict",
          "normalized": "a-\u003eString",
          "package": "json",
          "partial": "Strict",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:encodeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "fromJSKey",
          "package": "json",
          "signature": "String -\u003e Maybe a",
          "source": "src/Text-JSON.html#fromJSKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "fromJSKey",
          "normalized": "String-\u003eMaybe a",
          "package": "json",
          "partial": "JSKey",
          "signature": "String-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:fromJSKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "fromJSObject",
          "package": "json",
          "signature": "JSObject e -\u003e [(String, e)]",
          "source": "src/Text-JSON-Types.html#fromJSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "fromJSObject",
          "normalized": "JSObject a-\u003e[(String,a)]",
          "package": "json",
          "partial": "JSObject",
          "signature": "JSObject e-\u003e[(String,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:fromJSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "fromJSString",
          "package": "json",
          "signature": "JSString -\u003e String",
          "source": "src/Text-JSON-Types.html#fromJSString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "fromJSString",
          "normalized": "JSString-\u003eString",
          "package": "json",
          "partial": "JSString",
          "signature": "JSString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:fromJSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "makeObj",
          "package": "json",
          "signature": "[(String, JSValue)] -\u003e JSValue",
          "source": "src/Text-JSON.html#makeObj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "makeObj",
          "normalized": "[(String,JSValue)]-\u003eJSValue",
          "package": "json",
          "partial": "Obj",
          "signature": "[(String,JSValue)]-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:makeObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "readJSON",
          "package": "json",
          "signature": "JSValue -\u003e Result a",
          "source": "src/Text-JSON.html#readJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "readJSON",
          "normalized": "JSValue-\u003eResult a",
          "package": "json",
          "partial": "JSON",
          "signature": "JSValue-\u003eResult a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "readJSONs",
          "package": "json",
          "signature": "JSValue -\u003e Result [a]",
          "source": "src/Text-JSON.html#readJSONs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "readJSONs",
          "normalized": "JSValue-\u003eResult[a]",
          "package": "json",
          "partial": "JSONs",
          "signature": "JSValue-\u003eResult[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:readJSONs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap Results to Eithers\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "resultToEither",
          "package": "json",
          "signature": "Result a -\u003e Either String a",
          "source": "src/Text-JSON.html#resultToEither",
          "type": "function"
        },
        "index": {
          "description": "Map Results to Eithers",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "resultToEither",
          "normalized": "Result a-\u003eEither String a",
          "package": "json",
          "partial": "To Either",
          "signature": "Result a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:resultToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "showJSON",
          "package": "json",
          "signature": "a -\u003e JSValue",
          "source": "src/Text-JSON.html#showJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "showJSON",
          "normalized": "a-\u003eJSValue",
          "package": "json",
          "partial": "JSON",
          "signature": "a-\u003eJSValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "showJSONs",
          "package": "json",
          "signature": "[a] -\u003e JSValue",
          "source": "src/Text-JSON.html#showJSONs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "showJSONs",
          "normalized": "[a]-\u003eJSValue",
          "package": "json",
          "partial": "JSONs",
          "signature": "[a]-\u003eJSValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:showJSONs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON",
          "name": "toJSKey",
          "package": "json",
          "signature": "a -\u003e String",
          "source": "src/Text-JSON.html#toJSKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "toJSKey",
          "normalized": "a-\u003eString",
          "package": "json",
          "partial": "JSKey",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:toJSKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull a value out of a JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON",
          "name": "valFromObj",
          "package": "json",
          "signature": "String -\u003e JSObject JSValue -\u003e Result a",
          "source": "src/Text-JSON.html#valFromObj",
          "type": "function"
        },
        "index": {
          "description": "Pull value out of JSON object",
          "hierarchy": "Text JSON",
          "module": "Text.JSON",
          "name": "valFromObj",
          "normalized": "String-\u003eJSObject JSValue-\u003eResult a",
          "package": "json",
          "partial": "From Obj",
          "signature": "String-\u003eJSObject JSValue-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json/docs/Text-JSON.html#v:valFromObj"
      }
    }
  ]
]