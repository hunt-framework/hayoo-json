[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Data.html#",
      "description": {
        "fct-module": "Data.Data",
        "fct-package": "fay-base",
        "fct-signature": "module",
        "fct-source": "src/Data-Data.html",
        "fct-type": "module",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Data",
        "module": "Data.Data",
        "name": "Data",
        "normalized": "",
        "package": "fay-base",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Data.html#t:Data",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
        "fct-module": "Data.Data",
        "fct-package": "fay-base",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Data"
      },
      "index": {
        "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
        "hierarchy": "Data Data",
        "module": "Data.Data",
        "name": "Data",
        "normalized": "",
        "package": "fay-base",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Data.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "Data.Data",
        "fct-package": "fay-base",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "Data Data",
        "module": "Data.Data",
        "name": "Typeable",
        "normalized": "",
        "package": "fay-base",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#",
      "description": {
        "fct-module": "Data.Ratio",
        "fct-package": "fay-base",
        "fct-signature": "module",
        "fct-source": "src/Data-Ratio.html",
        "fct-type": "module",
        "title": "Ratio"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ratio",
        "module": "Data.Ratio",
        "name": "Ratio",
        "normalized": "",
        "package": "fay-base",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#t:Rational",
      "description": {
        "fct-module": "Data.Ratio",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-source": "src/Data-Ratio.html#Rational",
        "fct-type": "data",
        "title": "Rational"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ratio",
        "module": "Data.Ratio",
        "name": "Rational",
        "normalized": "",
        "package": "fay-base",
        "partial": "Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:-37-",
      "description": {
        "fct-module": "Data.Ratio",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Rational",
        "fct-source": "src/Data-Ratio.html#%25",
        "fct-type": "function",
        "title": "(%)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ratio",
        "module": "Data.Ratio",
        "name": "(%) %",
        "normalized": "Int-\u003eInt-\u003eRational",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:Ratio",
      "description": {
        "fct-module": "Data.Ratio",
        "fct-package": "fay-base",
        "fct-signature": "Ratio Int Int",
        "fct-source": "src/Data-Ratio.html#Rational",
        "fct-type": "function",
        "title": "Ratio"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ratio",
        "module": "Data.Ratio",
        "name": "Ratio",
        "normalized": "",
        "package": "fay-base",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:denominator",
      "description": {
        "fct-module": "Data.Ratio",
        "fct-package": "fay-base",
        "fct-signature": "Rational -\u003e Int",
        "fct-source": "src/Data-Ratio.html#denominator",
        "fct-type": "function",
        "title": "denominator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ratio",
        "module": "Data.Ratio",
        "name": "denominator",
        "normalized": "Rational-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Rational-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:numerator",
      "description": {
        "fct-module": "Data.Ratio",
        "fct-package": "fay-base",
        "fct-signature": "Rational -\u003e Int",
        "fct-source": "src/Data-Ratio.html#numerator",
        "fct-type": "function",
        "title": "numerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ratio",
        "module": "Data.Ratio",
        "name": "numerator",
        "normalized": "Rational-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Rational-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Debug-Trace.html#",
      "description": {
        "fct-module": "Debug.Trace",
        "fct-package": "fay-base",
        "fct-signature": "module",
        "fct-source": "src/Debug-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Trace",
        "module": "Debug.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "fay-base",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Debug-Trace.html#v:trace",
      "description": {
        "fct-module": "Debug.Trace",
        "fct-package": "fay-base",
        "fct-signature": "String -\u003e Ptr a -\u003e Ptr a",
        "fct-source": "src/Debug-Trace.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Trace",
        "module": "Debug.Trace",
        "name": "trace",
        "normalized": "String-\u003ePtr a-\u003ePtr a",
        "package": "fay-base",
        "partial": "",
        "signature": "String-\u003ePtr a-\u003ePtr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Debug-Trace.html#v:traceShow",
      "description": {
        "fct-module": "Debug.Trace",
        "fct-package": "fay-base",
        "fct-signature": "Automatic a -\u003e Ptr b -\u003e Ptr b",
        "fct-source": "src/Debug-Trace.html#traceShow",
        "fct-type": "function",
        "title": "traceShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Debug Trace",
        "module": "Debug.Trace",
        "name": "traceShow",
        "normalized": "Automatic a-\u003ePtr b-\u003ePtr b",
        "package": "fay-base",
        "partial": "Show",
        "signature": "Automatic a-\u003ePtr b-\u003ePtr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/FFI.html#",
      "description": {
        "fct-module": "FFI",
        "fct-package": "fay-base",
        "fct-signature": "module",
        "fct-source": "src/FFI.html",
        "fct-type": "module",
        "title": "FFI"
      },
      "index": {
        "description": "",
        "hierarchy": "FFI",
        "module": "FFI",
        "name": "FFI",
        "normalized": "",
        "package": "fay-base",
        "partial": "FFI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "module",
        "fct-source": "src/Prelude.html",
        "fct-type": "module",
        "title": "Prelude"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Prelude",
        "normalized": "",
        "package": "fay-base",
        "partial": "Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Bool",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Bool",
        "normalized": "",
        "package": "fay-base",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Char",
      "description": {
        "fct-descr": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Char"
      },
      "index": {
        "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Char",
        "normalized": "",
        "package": "fay-base",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Double",
        "normalized": "",
        "package": "fay-base",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Either",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Either"
      },
      "index": {
        "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Either",
        "normalized": "",
        "package": "fay-base",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Eq",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Eq"
      },
      "index": {
        "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Eq",
        "normalized": "",
        "package": "fay-base",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Fay",
      "description": {
        "fct-descr": "\u003cp\u003eThe JavaScript FFI interfacing monad.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Fay"
      },
      "index": {
        "description": "The JavaScript FFI interfacing monad",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Fay",
        "normalized": "",
        "package": "fay-base",
        "partial": "Fay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Int",
        "normalized": "",
        "package": "fay-base",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Integer",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Integer"
      },
      "index": {
        "description": "Arbitrary-precision integers",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Integer",
        "normalized": "",
        "package": "fay-base",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Maybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Maybe"
      },
      "index": {
        "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Maybe",
        "normalized": "",
        "package": "fay-base",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Ord",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "class",
        "fct-source": "src/Prelude.html#Ord",
        "fct-type": "class",
        "title": "Ord"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Ord",
        "normalized": "",
        "package": "fay-base",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Ordering",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Ordering"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Ordering",
        "normalized": "",
        "package": "fay-base",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Read",
      "description": {
        "fct-descr": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Read"
      },
      "index": {
        "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Read",
        "normalized": "",
        "package": "fay-base",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Show",
      "description": {
        "fct-descr": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Show"
      },
      "index": {
        "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Show",
        "normalized": "",
        "package": "fay-base",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:String",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "String"
      },
      "index": {
        "description": "String is list of characters String constants in Haskell are values of type String",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "String",
        "normalized": "",
        "package": "fay-base",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Boolean or",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(||) ||",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-33--33-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e Int -\u003e a",
        "fct-source": "src/Prelude.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(!!) !!",
        "normalized": "[a]-\u003eInt-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-36-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t1 -\u003e t) -\u003e t1 -\u003e t",
        "fct-source": "src/Prelude.html#%24",
        "fct-type": "function",
        "title": "($)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "($) $",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t-\u003et)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-36--33-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Prelude.html#%24%21",
        "fct-type": "function",
        "title": "($!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "($!) $!",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Boolean and",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(&&) &&",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-42-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(*) *",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-42--42-",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.pow.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Prelude.html#%2A%2A",
        "fct-type": "function",
        "title": "(**)"
      },
      "index": {
        "description": "Uses Math.pow",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(**) **",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-43-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(+) +",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-43--43-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(++) ++",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-45-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(-) -",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-47-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#%2F",
        "fct-type": "function",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(/) /",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-47--61-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(/=) /=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-60-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude.html#%3C",
        "fct-type": "method",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003c) \u003c",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-60--61-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude.html#%3C%3D",
        "fct-type": "method",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003c=) \u003c=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-60--61--60-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(b -\u003e Fay c) -\u003e (a -\u003e Fay b) -\u003e a -\u003e Fay c",
        "fct-source": "src/Prelude.html#%3C%3D%3C",
        "fct-type": "function",
        "title": "(\u003c=\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003c=\u003c) \u003c=\u003c",
        "normalized": "(a-\u003eFay b)-\u003e(c-\u003eFay a)-\u003ec-\u003eFay b",
        "package": "fay-base",
        "partial": "",
        "signature": "(b-\u003eFay c)-\u003e(a-\u003eFay b)-\u003ea-\u003eFay c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-61--60--60-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Fay b) -\u003e Fay a -\u003e Fay b",
        "fct-source": "src/Prelude.html#%3D%3C%3C",
        "fct-type": "function",
        "title": "(=\u003c\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(=\u003c\u003c) =\u003c\u003c",
        "normalized": "(a-\u003eFay b)-\u003eFay a-\u003eFay b",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eFay b)-\u003eFay a-\u003eFay b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-61--61-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(==) ==",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude.html#%3E",
        "fct-type": "method",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003e) \u003e",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--61-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude.html#%3E%3D",
        "fct-type": "method",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003e=) \u003e=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--61--62-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Fay b) -\u003e (b -\u003e Fay c) -\u003e a -\u003e Fay c",
        "fct-source": "src/Prelude.html#%3E%3D%3E",
        "fct-type": "function",
        "title": "(\u003e=\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003e=\u003e) \u003e=\u003e",
        "normalized": "(a-\u003eFay b)-\u003e(b-\u003eFay c)-\u003ea-\u003eFay c",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eFay b)-\u003e(b-\u003eFay c)-\u003ea-\u003eFay c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eMonomorphic then for Fay.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Ptr (Fay a) -\u003e Ptr (Fay b) -\u003e Ptr (Fay b)",
        "fct-source": "src/Prelude.html#%3E%3E",
        "fct-type": "function",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "Monomorphic then for Fay",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "Ptr(Fay a)-\u003ePtr(Fay b)-\u003ePtr(Fay b)",
        "package": "fay-base",
        "partial": "",
        "signature": "Ptr(Fay a)-\u003ePtr(Fay b)-\u003ePtr(Fay b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eMonomorphic bind for Fay.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Ptr (Fay a) -\u003e Ptr (a -\u003e Fay b) -\u003e Ptr (Fay b)",
        "fct-source": "src/Prelude.html#%3E%3E%3D",
        "fct-type": "function",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "Monomorphic bind for Fay",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "Ptr(Fay a)-\u003ePtr(a-\u003eFay b)-\u003ePtr(Fay b)",
        "package": "fay-base",
        "partial": "",
        "signature": "Ptr(Fay a)-\u003ePtr(a-\u003eFay b)-\u003ePtr(Fay b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-94-",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, it's not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e Int -\u003e a",
        "fct-source": "src/Prelude.html#%5E",
        "fct-type": "function",
        "title": "(^)"
      },
      "index": {
        "description": "Implemented in Fay it not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(^) ^",
        "normalized": "a-\u003eInt-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-94--94-",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.pow.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Int -\u003e Double",
        "fct-source": "src/Prelude.html#%5E%5E",
        "fct-type": "function",
        "title": "(^^)"
      },
      "index": {
        "description": "Uses Math.pow",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(^^) ^^",
        "normalized": "Double-\u003eInt-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eInt-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:.",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t1 -\u003e t) -\u003e (t2 -\u003e t1) -\u003e t2 -\u003e t",
        "fct-source": "src/Prelude.html#.",
        "fct-type": "function",
        "title": "(.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "(.) .",
        "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t-\u003et)-\u003e(t-\u003et)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:EQ",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "EQ",
        "fct-type": "function",
        "title": "EQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "EQ",
        "normalized": "",
        "package": "fay-base",
        "partial": "EQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:False",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "False",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "False",
        "normalized": "",
        "package": "fay-base",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:GT",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "GT",
        "fct-type": "function",
        "title": "GT"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "GT",
        "normalized": "",
        "package": "fay-base",
        "partial": "GT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Just",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Just a",
        "fct-type": "function",
        "title": "Just"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Just",
        "normalized": "",
        "package": "fay-base",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:LT",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "LT",
        "fct-type": "function",
        "title": "LT"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "LT",
        "normalized": "",
        "package": "fay-base",
        "partial": "LT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Left",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Left a",
        "fct-type": "function",
        "title": "Left"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Left",
        "normalized": "",
        "package": "fay-base",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Nothing",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Nothing",
        "fct-type": "function",
        "title": "Nothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Nothing",
        "normalized": "",
        "package": "fay-base",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Right",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Right b",
        "fct-type": "function",
        "title": "Right"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "Right",
        "normalized": "",
        "package": "fay-base",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:True",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "True",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "True",
        "normalized": "",
        "package": "fay-base",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:abs",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "Implemented in Fay",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "abs",
        "normalized": "a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:acos",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.acos.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#acos",
        "fct-type": "function",
        "title": "acos"
      },
      "index": {
        "description": "Uses Math.acos",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "acos",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:acosh",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#acosh",
        "fct-type": "function",
        "title": "acosh"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "acosh",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:all",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/Prelude.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:and",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[Bool] -\u003e Bool",
        "fct-source": "src/Prelude.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "and",
        "normalized": "[Bool]-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "[Bool]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:any",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
        "fct-source": "src/Prelude.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:asin",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.asin.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#asin",
        "fct-type": "function",
        "title": "asin"
      },
      "index": {
        "description": "Uses Math.asin",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "asin",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:asinh",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#asinh",
        "fct-type": "function",
        "title": "asinh"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "asinh",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:atan",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.atan.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#atan",
        "fct-type": "function",
        "title": "atan"
      },
      "index": {
        "description": "Uses Math.atan",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "atan",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:atanh",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#atanh",
        "fct-type": "function",
        "title": "atanh"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "atanh",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:break",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Prelude.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:ceiling",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.ceil.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Prelude.html#ceiling",
        "fct-type": "function",
        "title": "ceiling"
      },
      "index": {
        "description": "Uses Math.ceil",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "ceiling",
        "normalized": "Double-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:compare",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e Ordering",
        "fct-source": "src/Prelude.html#compare",
        "fct-type": "function",
        "title": "compare"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "compare",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:conc",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two lists.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#conc",
        "fct-type": "function",
        "title": "conc"
      },
      "index": {
        "description": "Append two lists",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "conc",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:concat",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Prelude.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "concat",
        "normalized": "[[a]]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:concatMap",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Prelude.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "concatMap",
        "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
        "package": "fay-base",
        "partial": "Map",
        "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:const",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/Prelude.html#const",
        "fct-type": "function",
        "title": "const"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "const",
        "normalized": "a-\u003eb-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:cos",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.cos.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#cos",
        "fct-type": "function",
        "title": "cos"
      },
      "index": {
        "description": "Uses Math.cos",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "cos",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:cosh",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#cosh",
        "fct-type": "function",
        "title": "cosh"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "cosh",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:curry",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Prelude.html#curry",
        "fct-type": "function",
        "title": "curry"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "curry",
        "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "fay-base",
        "partial": "",
        "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:cycle",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Prelude.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "cycle",
        "normalized": "[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:div",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#div",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "div",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:divMod",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e (Int, Int)",
        "fct-source": "src/Prelude.html#divMod",
        "fct-type": "function",
        "title": "divMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "divMod",
        "normalized": "Int-\u003eInt-\u003e(Int,Int)",
        "package": "fay-base",
        "partial": "Mod",
        "signature": "Int-\u003eInt-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:drop",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "drop",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:dropWhile",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:either",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
        "fct-source": "src/Prelude.html#either",
        "fct-type": "function",
        "title": "either"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "either",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:elem",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Prelude.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "elem",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFrom",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Prelude.html#enumFrom",
        "fct-type": "function",
        "title": "enumFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "enumFrom",
        "normalized": "a-\u003e[a]",
        "package": "fay-base",
        "partial": "From",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromBy",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "t -\u003e t -\u003e [t]",
        "fct-source": "src/Prelude.html#enumFromBy",
        "fct-type": "function",
        "title": "enumFromBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "enumFromBy",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "From By",
        "signature": "t-\u003et-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromByTo",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "t -\u003e t -\u003e t -\u003e [t]",
        "fct-source": "src/Prelude.html#enumFromByTo",
        "fct-type": "function",
        "title": "enumFromByTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "enumFromByTo",
        "normalized": "a-\u003ea-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "From By To",
        "signature": "t-\u003et-\u003et-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromThen",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "t -\u003e t -\u003e [t]",
        "fct-source": "src/Prelude.html#enumFromThen",
        "fct-type": "function",
        "title": "enumFromThen"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "enumFromThen",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "From Then",
        "signature": "t-\u003et-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromThenTo",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "t -\u003e t -\u003e t -\u003e [t]",
        "fct-source": "src/Prelude.html#enumFromThenTo",
        "fct-type": "function",
        "title": "enumFromThenTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "enumFromThenTo",
        "normalized": "a-\u003ea-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "From Then To",
        "signature": "t-\u003et-\u003et-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromTo",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "t -\u003e t -\u003e [t]",
        "fct-source": "src/Prelude.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "From To",
        "signature": "t-\u003et-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:error",
      "description": {
        "fct-descr": "\u003cp\u003eThrows a JavaScript error.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Prelude.html#error",
        "fct-type": "function",
        "title": "error"
      },
      "index": {
        "description": "Throws JavaScript error",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "error",
        "normalized": "String-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:even",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Bool",
        "fct-source": "src/Prelude.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "even",
        "normalized": "Int-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:exp",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.exp.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#exp",
        "fct-type": "function",
        "title": "exp"
      },
      "index": {
        "description": "Uses Math.exp",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "exp",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fail",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "String -\u003e Fay a",
        "fct-source": "src/Prelude.html#fail",
        "fct-type": "function",
        "title": "fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "fail",
        "normalized": "String-\u003eFay a",
        "package": "fay-base",
        "partial": "",
        "signature": "String-\u003eFay a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:filter",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:find",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/Prelude.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "find",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:flip",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t1 -\u003e t2 -\u003e t) -\u003e t2 -\u003e t1 -\u003e t",
        "fct-source": "src/Prelude.html#flip",
        "fct-type": "function",
        "title": "flip"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "flip",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t-\u003et-\u003et)-\u003et-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:floor",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.floor.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Prelude.html#floor",
        "fct-type": "function",
        "title": "floor"
      },
      "index": {
        "description": "Uses Math.floor",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "floor",
        "normalized": "Double-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldl",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t1 -\u003e t -\u003e t1) -\u003e t1 -\u003e [t] -\u003e t1",
        "fct-source": "src/Prelude.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "foldl",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t-\u003et-\u003et)-\u003et-\u003e[t]-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldl1",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Prelude.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldr",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t -\u003e t1 -\u003e t1) -\u003e t1 -\u003e [t] -\u003e t1",
        "fct-source": "src/Prelude.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "foldr",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t-\u003et-\u003et)-\u003et-\u003e[t]-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldr1",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Prelude.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:forM",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e (a -\u003e Fay b) -\u003e Fay [b]",
        "fct-source": "src/Prelude.html#forM",
        "fct-type": "function",
        "title": "forM"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "forM",
        "normalized": "[a]-\u003e(a-\u003eFay b)-\u003eFay[b]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003eFay b)-\u003eFay[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:forM_",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e (a -\u003e Fay b) -\u003e Fay ()",
        "fct-source": "src/Prelude.html#forM_",
        "fct-type": "function",
        "title": "forM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "forM_",
        "normalized": "[a]-\u003e(a-\u003eFay b)-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003eFay b)-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fromInteger",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Ptr Integer -\u003e Ptr a",
        "fct-source": "src/Prelude.html#fromInteger",
        "fct-type": "function",
        "title": "fromInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "fromInteger",
        "normalized": "Ptr Integer-\u003ePtr a",
        "package": "fay-base",
        "partial": "Integer",
        "signature": "Ptr Integer-\u003ePtr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fromIntegral",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Ptr a -\u003e Ptr b",
        "fct-source": "src/Prelude.html#fromIntegral",
        "fct-type": "function",
        "title": "fromIntegral"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "fromIntegral",
        "normalized": "Ptr a-\u003ePtr b",
        "package": "fay-base",
        "partial": "Integral",
        "signature": "Ptr a-\u003ePtr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fst",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t, t1) -\u003e t",
        "fct-source": "src/Prelude.html#fst",
        "fct-type": "function",
        "title": "fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "fst",
        "normalized": "(a,a)-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t,t)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:gcd",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#gcd",
        "fct-type": "function",
        "title": "gcd"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "gcd",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:head",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Prelude.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "head",
        "normalized": "[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:id",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude.html#id",
        "fct-type": "function",
        "title": "id"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "id",
        "normalized": "a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:ifThenElse",
      "description": {
        "fct-descr": "\u003cp\u003eDefault definition for using RebindableSyntax.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool -\u003e t -\u003e t -\u003e t",
        "fct-source": "src/Prelude.html#ifThenElse",
        "fct-type": "function",
        "title": "ifThenElse"
      },
      "index": {
        "description": "Default definition for using RebindableSyntax",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "ifThenElse",
        "normalized": "Bool-\u003ea-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "Then Else",
        "signature": "Bool-\u003et-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:init",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Prelude.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "init",
        "normalized": "[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:insertBy",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "insertBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:intercalate",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/Prelude.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "intercalate",
        "normalized": "[a]-\u003e[[a]]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:intersperse",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "intersperse",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:iterate",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e [a]",
        "fct-source": "src/Prelude.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:last",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Prelude.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "last",
        "normalized": "[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:lcm",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#lcm",
        "fct-type": "function",
        "title": "lcm"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "lcm",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:length",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Prelude.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "length",
        "normalized": "[a]-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:length-39-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e [a] -\u003e Int",
        "fct-source": "src/Prelude.html#length%27",
        "fct-type": "function",
        "title": "length'"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "length'",
        "normalized": "Int-\u003e[a]-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:lines",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Prelude.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "lines",
        "normalized": "String-\u003e[String]",
        "package": "fay-base",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:log",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.log.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#log",
        "fct-type": "function",
        "title": "log"
      },
      "index": {
        "description": "Uses Math.log",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "log",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:logBase",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Prelude.html#logBase",
        "fct-type": "function",
        "title": "logBase"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "logBase",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "fay-base",
        "partial": "Base",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:lookup",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a1 -\u003e [(a1, a)] -\u003e Maybe a",
        "fct-source": "src/Prelude.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "lookup",
        "normalized": "a-\u003e[(a,a)]-\u003eMaybe a",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003e[(a,a)]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:map",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Prelude.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:mapM",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Fay b) -\u003e [a] -\u003e Fay [b]",
        "fct-source": "src/Prelude.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "mapM",
        "normalized": "(a-\u003eFay b)-\u003e[a]-\u003eFay[b]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eFay b)-\u003e[a]-\u003eFay[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:mapM_",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Fay b) -\u003e [a] -\u003e Fay ()",
        "fct-source": "src/Prelude.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "mapM_",
        "normalized": "(a-\u003eFay b)-\u003e[a]-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eFay b)-\u003e[a]-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:max",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "max",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:maximum",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Prelude.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "maximum",
        "normalized": "[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:maybe",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe type.\n\u003c/p\u003e\u003cp\u003eEither type.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "t -\u003e (t1 -\u003e t) -\u003e Maybe t1 -\u003e t",
        "fct-source": "src/Prelude.html#maybe",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "Maybe type Either type",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "maybe",
        "normalized": "a-\u003e(a-\u003ea)-\u003eMaybe a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "t-\u003e(t-\u003et)-\u003eMaybe t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:min",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "min",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:minimum",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Prelude.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "minimum",
        "normalized": "[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:mod",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#mod",
        "fct-type": "function",
        "title": "mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "mod",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:negate",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "Implemented in Fay",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "negate",
        "normalized": "a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:not",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool -\u003e Bool",
        "fct-source": "src/Prelude.html#not",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "not",
        "normalized": "Bool-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:notElem",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Prelude.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "notElem",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "fay-base",
        "partial": "Elem",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:nub",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Prelude.html#nub",
        "fct-type": "function",
        "title": "nub"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "nub",
        "normalized": "[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:nub-39-",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#nub%27",
        "fct-type": "function",
        "title": "nub'"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "nub'",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:null",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[t] -\u003e Bool",
        "fct-source": "src/Prelude.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "null",
        "normalized": "[a]-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "[t]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:odd",
      "description": {
        "fct-descr": "\u003cp\u003enot (even x)\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Bool",
        "fct-source": "src/Prelude.html#odd",
        "fct-type": "function",
        "title": "odd"
      },
      "index": {
        "description": "not even",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "odd",
        "normalized": "Int-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:or",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[Bool] -\u003e Bool",
        "fct-source": "src/Prelude.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "or",
        "normalized": "[Bool]-\u003eBool",
        "package": "fay-base",
        "partial": "",
        "signature": "[Bool]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:otherwise",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool",
        "fct-source": "src/Prelude.html#otherwise",
        "fct-type": "function",
        "title": "otherwise"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "otherwise",
        "normalized": "",
        "package": "fay-base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:pi",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.PI.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double",
        "fct-source": "src/Prelude.html#pi",
        "fct-type": "function",
        "title": "pi"
      },
      "index": {
        "description": "Uses Math.PI",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "pi",
        "normalized": "",
        "package": "fay-base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:pred",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude.html#pred",
        "fct-type": "function",
        "title": "pred"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "pred",
        "normalized": "a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:prependToAll",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#prependToAll",
        "fct-type": "function",
        "title": "prependToAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "prependToAll",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "To All",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:print",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Automatic a -\u003e Fay ()",
        "fct-source": "src/Prelude.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "print",
        "normalized": "Automatic a-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "Automatic a-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:product",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Prelude.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "product",
        "normalized": "[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:properFraction",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e (Int, Double)",
        "fct-source": "src/Prelude.html#properFraction",
        "fct-type": "function",
        "title": "properFraction"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "properFraction",
        "normalized": "Double-\u003e(Int,Double)",
        "package": "fay-base",
        "partial": "Fraction",
        "signature": "Double-\u003e(Int,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:putStrLn",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "String -\u003e Fay ()",
        "fct-source": "src/Prelude.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "putStrLn",
        "normalized": "String-\u003eFay()",
        "package": "fay-base",
        "partial": "Str Ln",
        "signature": "String-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:quot",
      "description": {
        "fct-descr": "\u003cp\u003eUses quot'.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#quot",
        "fct-type": "function",
        "title": "quot"
      },
      "index": {
        "description": "Uses quot",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "quot",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:quot-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUses ~~(a/b).\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#quot%27",
        "fct-type": "function",
        "title": "quot'"
      },
      "index": {
        "description": "Uses",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "quot'",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:quotRem",
      "description": {
        "fct-descr": "\u003cp\u003e(quot x y, rem x y)\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e (Int, Int)",
        "fct-source": "src/Prelude.html#quotRem",
        "fct-type": "function",
        "title": "quotRem"
      },
      "index": {
        "description": "quot rem",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "quotRem",
        "normalized": "Int-\u003eInt-\u003e(Int,Int)",
        "package": "fay-base",
        "partial": "Rem",
        "signature": "Int-\u003eInt-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:recip",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#recip",
        "fct-type": "function",
        "title": "recip"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "recip",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:rem",
      "description": {
        "fct-descr": "\u003cp\u003eUses rem'.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#rem",
        "fct-type": "function",
        "title": "rem"
      },
      "index": {
        "description": "Uses rem",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "rem",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:rem-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUses %%.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Prelude.html#rem%27",
        "fct-type": "function",
        "title": "rem'"
      },
      "index": {
        "description": "Uses",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "rem'",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:repeat",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Prelude.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "repeat",
        "normalized": "a-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:replicate",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e a -\u003e [a]",
        "fct-source": "src/Prelude.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:return",
      "description": {
        "fct-descr": "\u003cp\u003eMonomorphic return for Fay.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e Fay a",
        "fct-source": "src/Prelude.html#return",
        "fct-type": "function",
        "title": "return"
      },
      "index": {
        "description": "Monomorphic return for Fay",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "return",
        "normalized": "a-\u003eFay a",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003eFay a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:reverse",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Prelude.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "reverse",
        "normalized": "[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:round",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.round.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Prelude.html#round",
        "fct-type": "function",
        "title": "round"
      },
      "index": {
        "description": "Uses Math.round",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "round",
        "normalized": "Double-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanl",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
        "fct-source": "src/Prelude.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "scanl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanl1",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "scanl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanr",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Prelude.html#scanr",
        "fct-type": "function",
        "title": "scanr"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "scanr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanr1",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#scanr1",
        "fct-type": "function",
        "title": "scanr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "scanr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:seq",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-type": "function",
        "title": "seq"
      },
      "index": {
        "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "seq",
        "normalized": "a-\u003eb-\u003eb",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[Fay a] -\u003e Fay [a]",
        "fct-source": "src/Prelude.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Evaluate each action in the sequence from left to right and collect the results",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sequence",
        "normalized": "[Fay a]-\u003eFay[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[Fay a]-\u003eFay[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sequence_",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[Fay a] -\u003e Fay ()",
        "fct-source": "src/Prelude.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sequence_",
        "normalized": "[Fay a]-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "[Fay a]-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:show",
      "description": {
        "fct-descr": "\u003cp\u003eUses JSON.stringify.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Automatic a -\u003e String",
        "fct-source": "src/Prelude.html#show",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "Uses JSON.stringify",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "show",
        "normalized": "Automatic a-\u003eString",
        "package": "fay-base",
        "partial": "",
        "signature": "Automatic a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:signum",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude.html#signum",
        "fct-type": "function",
        "title": "signum"
      },
      "index": {
        "description": "Implemented in Fay",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "signum",
        "normalized": "a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sin",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.sin.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#sin",
        "fct-type": "function",
        "title": "sin"
      },
      "index": {
        "description": "Uses Math.sin",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sin",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sinh",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#sinh",
        "fct-type": "function",
        "title": "sinh"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sinh",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:snd",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t, t1) -\u003e t1",
        "fct-source": "src/Prelude.html#snd",
        "fct-type": "function",
        "title": "snd"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "snd",
        "normalized": "(a,a)-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(t,t)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sort",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Prelude.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sort",
        "normalized": "[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sortBy",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(t -\u003e t -\u003e Ordering) -\u003e [t] -\u003e [t]",
        "fct-source": "src/Prelude.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sortBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "By",
        "signature": "(t-\u003et-\u003eOrdering)-\u003e[t]-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:span",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Prelude.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:splitAt",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Prelude.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "splitAt",
        "normalized": "Int-\u003e[a]-\u003e([a],[a])",
        "package": "fay-base",
        "partial": "At",
        "signature": "Int-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sqrt",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.sqrt.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "Uses Math.sqrt",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sqrt",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:subtract",
      "description": {
        "fct-descr": "\u003cp\u003eFlip (-).\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#subtract",
        "fct-type": "function",
        "title": "subtract"
      },
      "index": {
        "description": "Flip",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "subtract",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:succ",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Prelude.html#succ",
        "fct-type": "function",
        "title": "succ"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "succ",
        "normalized": "a-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sum",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Prelude.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "sum",
        "normalized": "[a]-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:tail",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Prelude.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "tail",
        "normalized": "[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:take",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "take",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:takeWhile",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Prelude.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "fay-base",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:tan",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.tan.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#tan",
        "fct-type": "function",
        "title": "tan"
      },
      "index": {
        "description": "Uses Math.tan",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "tan",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:tanh",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Prelude.html#tanh",
        "fct-type": "function",
        "title": "tanh"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "tanh",
        "normalized": "Double-\u003eDouble",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:truncate",
      "description": {
        "fct-descr": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Prelude.html#truncate",
        "fct-type": "function",
        "title": "truncate"
      },
      "index": {
        "description": "Implemented in Fay not fast",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "truncate",
        "normalized": "Double-\u003eInt",
        "package": "fay-base",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:uncurry",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
        "fct-source": "src/Prelude.html#uncurry",
        "fct-type": "function",
        "title": "uncurry"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "uncurry",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:undefined",
      "description": {
        "fct-descr": "\u003cp\u003eThrows \u003ca\u003eundefined\u003c/a\u003e via \u003ca\u003eerror\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a",
        "fct-source": "src/Prelude.html#undefined",
        "fct-type": "function",
        "title": "undefined"
      },
      "index": {
        "description": "Throws undefined via error",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "undefined",
        "normalized": "",
        "package": "fay-base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unless",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool -\u003e Fay a -\u003e Fay ()",
        "fct-source": "src/Prelude.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "unless",
        "normalized": "Bool-\u003eFay a-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "Bool-\u003eFay a-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unlines",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Prelude.html#unlines",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "unlines",
        "normalized": "[String]-\u003eString",
        "package": "fay-base",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unsafePow",
      "description": {
        "fct-descr": "\u003cp\u003eUses Math.pow.\n\u003c/p\u003e",
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/Prelude.html#unsafePow",
        "fct-type": "function",
        "title": "unsafePow"
      },
      "index": {
        "description": "Uses Math.pow",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "unsafePow",
        "normalized": "a-\u003eb-\u003ea",
        "package": "fay-base",
        "partial": "Pow",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:until",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Prelude.html#until",
        "fct-type": "function",
        "title": "until"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "until",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "fay-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unwords",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Prelude.html#unwords",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "unwords",
        "normalized": "[String]-\u003eString",
        "package": "fay-base",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unzip",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[(a, b)] -\u003e ([a], [b])",
        "fct-source": "src/Prelude.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "unzip",
        "normalized": "[(a,b)]-\u003e([a],[b])",
        "package": "fay-base",
        "partial": "",
        "signature": "[(a,b)]-\u003e([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unzip3",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
        "fct-source": "src/Prelude.html#unzip3",
        "fct-type": "function",
        "title": "unzip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "unzip3",
        "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
        "package": "fay-base",
        "partial": "",
        "signature": "[(a,b,c)]-\u003e([a],[b],[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:void",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Fay a -\u003e Fay ()",
        "fct-source": "src/Prelude.html#void",
        "fct-type": "function",
        "title": "void"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "void",
        "normalized": "Fay a-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "Fay a-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:when",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "Bool -\u003e Fay a -\u003e Fay ()",
        "fct-source": "src/Prelude.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "when",
        "normalized": "Bool-\u003eFay a-\u003eFay()",
        "package": "fay-base",
        "partial": "",
        "signature": "Bool-\u003eFay a-\u003eFay()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:words",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Prelude.html#words",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "words",
        "normalized": "String-\u003e[String]",
        "package": "fay-base",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zip",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [b] -\u003e [(a, b)]",
        "fct-source": "src/Prelude.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "zip",
        "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zip3",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
        "fct-source": "src/Prelude.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "zip3",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
        "package": "fay-base",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zipWith",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/Prelude.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "fay-base",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zipWith3",
      "description": {
        "fct-module": "Prelude",
        "fct-package": "fay-base",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
        "fct-source": "src/Prelude.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "",
        "hierarchy": "Prelude",
        "module": "Prelude",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
        "package": "fay-base",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]"
      }
    }
  }
]