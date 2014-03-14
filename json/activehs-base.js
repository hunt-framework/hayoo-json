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
        "word": "activehs-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "Base",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "Base",
          "package": "activehs-base",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
          "module": "ActiveHs.Base",
          "name": "Data",
          "package": "activehs-base",
          "type": "class"
        },
        "index": {
          "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "Data",
          "package": "activehs-base",
          "partial": "Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e is an object encapsulated together with its type.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e may only represent a monomorphic value; an attempt to\n  create a value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e from a polymorphically-typed\n  expression will result in an ambiguity error (see \u003ccode\u003e\u003ca\u003etoDyn\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003eing a value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e returns a pretty-printed representation\n  of the object's type; useful for debugging.\n\u003c/p\u003e",
          "module": "ActiveHs.Base",
          "name": "Dynamic",
          "package": "activehs-base",
          "type": "data"
        },
        "index": {
          "description": "value of type Dynamic is an object encapsulated together with its type Dynamic may only represent monomorphic value an attempt to create value of type Dynamic from polymorphically-typed expression will result in an ambiguity error see toDyn Show ing value of type Dynamic returns pretty-printed representation of the object type useful for debugging",
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "Dynamic",
          "package": "activehs-base",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "QCBool",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html#QCBool",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "QCBool",
          "package": "activehs-base",
          "partial": "QCBool",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:QCBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "QCInt",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html#QCInt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "QCInt",
          "package": "activehs-base",
          "partial": "QCInt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:QCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "QCNat",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html#QCNat",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "QCNat",
          "package": "activehs-base",
          "partial": "QCNat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:QCNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "TestCase",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html#TestCase",
          "type": "data"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "TestCase",
          "package": "activehs-base",
          "partial": "Test Case",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "WrapData",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html#WrapData",
          "type": "data"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "WrapData",
          "package": "activehs-base",
          "partial": "Wrap Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:WrapData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "WrapData2",
          "package": "activehs-base",
          "source": "src/ActiveHs-Base.html#WrapData2",
          "type": "data"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "WrapData2",
          "package": "activehs-base",
          "partial": "Wrap Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#t:WrapData2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "QCBool",
          "package": "activehs-base",
          "signature": "QCBool Bool",
          "source": "src/ActiveHs-Base.html#QCBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "QCBool",
          "package": "activehs-base",
          "partial": "QCBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:QCBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "QCInt",
          "package": "activehs-base",
          "signature": "QCInt Int",
          "source": "src/ActiveHs-Base.html#QCInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "QCInt",
          "package": "activehs-base",
          "partial": "QCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:QCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "QCNat",
          "package": "activehs-base",
          "signature": "QCNat Int",
          "source": "src/ActiveHs-Base.html#QCNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "QCNat",
          "package": "activehs-base",
          "partial": "QCNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:QCNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "TestCase",
          "package": "activehs-base",
          "signature": "TestCase (((String, a, a) -\u003e Property) -\u003e prop)",
          "source": "src/ActiveHs-Base.html#TestCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "TestCase",
          "normalized": "TestCase(((String,a,a)-\u003eProperty)-\u003eb)",
          "package": "activehs-base",
          "partial": "Test Case",
          "signature": "TestCase(((String,a,a)-\u003eProperty)-\u003eprop)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "WrapData",
          "package": "activehs-base",
          "signature": "WrapData a",
          "source": "src/ActiveHs-Base.html#WrapData",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "WrapData",
          "package": "activehs-base",
          "partial": "Wrap Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:WrapData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "WrapData2",
          "package": "activehs-base",
          "signature": "WrapData2 a a",
          "source": "src/ActiveHs-Base.html#WrapData2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "WrapData2",
          "package": "activehs-base",
          "partial": "Wrap Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:WrapData2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an arbitrary value into an object of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThe type of the object must be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, which\n ensures that only monomorphically-typed objects may be converted to\n \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.  To convert a polymorphic object into \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e, give it\n a monomorphic type signature.  For example:\n\u003c/p\u003e\u003cpre\u003e    toDyn (id :: Int -\u003e Int)\n\u003c/pre\u003e",
          "module": "ActiveHs.Base",
          "name": "toDyn",
          "package": "activehs-base",
          "signature": "a -\u003e Dynamic",
          "type": "function"
        },
        "index": {
          "description": "Converts an arbitrary value into an object of type Dynamic The type of the object must be an instance of Typeable which ensures that only monomorphically-typed objects may be converted to Dynamic To convert polymorphic object into Dynamic give it monomorphic type signature For example toDyn id Int Int",
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "toDyn",
          "normalized": "a-\u003eDynamic",
          "package": "activehs-base",
          "partial": "Dyn",
          "signature": "a-\u003eDynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:toDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ActiveHs.Base",
          "name": "wrapData",
          "package": "activehs-base",
          "signature": "a -\u003e WrapData",
          "source": "src/ActiveHs-Base.html#wrapData",
          "type": "function"
        },
        "index": {
          "hierarchy": "ActiveHs Base",
          "module": "ActiveHs.Base",
          "name": "wrapData",
          "normalized": "a-\u003eWrapData",
          "package": "activehs-base",
          "partial": "Data",
          "signature": "a-\u003eWrapData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/activehs-base/docs/ActiveHs-Base.html#v:wrapData"
      }
    }
  ]
]