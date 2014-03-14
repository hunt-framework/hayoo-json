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
        "word": "sloth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main module that defines the main function strictCheck for\n   testing whether a function is minimally strict.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Sloth",
          "name": "Sloth",
          "package": "sloth",
          "source": "src/Test-Sloth.html",
          "type": "module"
        },
        "index": {
          "description": "The main module that defines the main function strictCheck for testing whether function is minimally strict",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "Sloth",
          "package": "sloth",
          "partial": "Sloth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type used to check polymorphic functions. For example, to\n check the function zip we annotate the type [A] -\u003e [A] -\u003e [(A, A)].\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "A",
          "package": "sloth",
          "source": "src/Test-Sloth-Poly.html#A",
          "type": "data"
        },
        "index": {
          "description": "Data type used to check polymorphic functions For example to check the function zip we annotate the type",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "A",
          "package": "sloth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#t:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "Config",
          "package": "sloth",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "Config",
          "package": "sloth",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "Data",
          "package": "sloth",
          "type": "class"
        },
        "index": {
          "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "Data",
          "package": "sloth",
          "partial": "Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "Typeable",
          "package": "sloth",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "Typeable",
          "package": "sloth",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "Config",
          "package": "sloth",
          "signature": "Config",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "Config",
          "package": "sloth",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a function for partial values up to a specific size where\n the provided configuration determines which test cases are presented.\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "check",
          "package": "sloth",
          "signature": "Config -\u003e fun -\u003e Int -\u003e IO ()",
          "source": "src/Test-Sloth.html#check",
          "type": "function"
        },
        "index": {
          "description": "Test function for partial values up to specific size where the provided configuration determines which test cases are presented",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "check",
          "normalized": "Config-\u003ea-\u003eInt-\u003eIO()",
          "package": "sloth",
          "signature": "Config-\u003efun-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "colored",
          "package": "sloth",
          "signature": "Bool",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "colored",
          "package": "sloth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:colored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "defaultConfig",
          "package": "sloth",
          "signature": "Config",
          "source": "src/Test-Sloth-Config.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default configuration",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "defaultConfig",
          "package": "sloth",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "detailed",
          "package": "sloth",
          "signature": "Bool",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "detailed",
          "package": "sloth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:detailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteractively test a function for partial values up to a specific\n size.\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "interactCheck",
          "package": "sloth",
          "signature": "fun -\u003e Int -\u003e IO ()",
          "source": "src/Test-Sloth.html#interactCheck",
          "type": "function"
        },
        "index": {
          "description": "Interactively test function for partial values up to specific size",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "interactCheck",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "sloth",
          "partial": "Check",
          "signature": "fun-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:interactCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "interactive",
          "package": "sloth",
          "signature": "Bool",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "interactive",
          "package": "sloth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:interactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePresent counter-examples in interactive mode and give a detailed\n explanation\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "interactiveConfig",
          "package": "sloth",
          "signature": "Config",
          "source": "src/Test-Sloth-Config.html#interactiveConfig",
          "type": "function"
        },
        "index": {
          "description": "Present counter-examples in interactive mode and give detailed explanation",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "interactiveConfig",
          "package": "sloth",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:interactiveConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "minInfSize",
          "package": "sloth",
          "signature": "Int",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "minInfSize",
          "package": "sloth",
          "partial": "Inf Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:minInfSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "noBottomPos",
          "package": "sloth",
          "signature": "Bool",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "noBottomPos",
          "package": "sloth",
          "partial": "Bottom Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:noBottomPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "simpleApprox",
          "package": "sloth",
          "signature": "Bool",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "simpleApprox",
          "package": "sloth",
          "partial": "Approx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:simpleApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a function for partial values up to a specific size and do\n not present successful test cases.\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "strictCheck",
          "package": "sloth",
          "signature": "fun -\u003e Int -\u003e IO ()",
          "source": "src/Test-Sloth.html#strictCheck",
          "type": "function"
        },
        "index": {
          "description": "Test function for partial values up to specific size and do not present successful test cases",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "strictCheck",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "sloth",
          "partial": "Check",
          "signature": "fun-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:strictCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Sloth",
          "name": "successes",
          "package": "sloth",
          "signature": "Bool",
          "source": "src/Test-Sloth-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "successes",
          "package": "sloth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:successes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow test cases that are no counter-examples but no test case\n with total results\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "successesConfig",
          "package": "sloth",
          "signature": "Config",
          "source": "src/Test-Sloth-Config.html#successesConfig",
          "type": "function"
        },
        "index": {
          "description": "Show test cases that are no counter-examples but no test case with total results",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "successesConfig",
          "package": "sloth",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:successesConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not use colors for output\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "uncoloredConfig",
          "package": "sloth",
          "signature": "Config",
          "source": "src/Test-Sloth-Config.html#uncoloredConfig",
          "type": "function"
        },
        "index": {
          "description": "Do not use colors for output",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "uncoloredConfig",
          "package": "sloth",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:uncoloredConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a function for partial values up to a specific size and even\n present successful test cases.\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "verboseCheck",
          "package": "sloth",
          "signature": "fun -\u003e Int -\u003e IO ()",
          "source": "src/Test-Sloth.html#verboseCheck",
          "type": "function"
        },
        "index": {
          "description": "Test function for partial values up to specific size and even present successful test cases",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "verboseCheck",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "sloth",
          "partial": "Check",
          "signature": "fun-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:verboseCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow test cases that are no counter-examples\n\u003c/p\u003e",
          "module": "Test.Sloth",
          "name": "verboseConfig",
          "package": "sloth",
          "signature": "Config",
          "source": "src/Test-Sloth-Config.html#verboseConfig",
          "type": "function"
        },
        "index": {
          "description": "Show test cases that are no counter-examples",
          "hierarchy": "Test Sloth",
          "module": "Test.Sloth",
          "name": "verboseConfig",
          "package": "sloth",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sloth/docs/Test-Sloth.html#v:verboseConfig"
      }
    }
  ]
]