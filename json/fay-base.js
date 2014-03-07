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
        "word": "fay-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data",
          "name": "Data",
          "package": "fay-base",
          "source": "src/Data-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Data",
          "module": "Data.Data",
          "name": "Data",
          "package": "fay-base",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
          "module": "Data.Data",
          "name": "Data",
          "package": "fay-base",
          "type": "class"
        },
        "index": {
          "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
          "hierarchy": "Data Data",
          "module": "Data.Data",
          "name": "Data",
          "package": "fay-base",
          "partial": "Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Data.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "Data.Data",
          "name": "Typeable",
          "package": "fay-base",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "Data Data",
          "module": "Data.Data",
          "name": "Typeable",
          "package": "fay-base",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Data.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "fay-base",
          "source": "src/Data-Ratio.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "fay-base",
          "partial": "Ratio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "Rational",
          "package": "fay-base",
          "source": "src/Data-Ratio.html#Rational",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "Rational",
          "package": "fay-base",
          "partial": "Rational",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "(%)",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Rational",
          "source": "src/Data-Ratio.html#%25",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "(%) %",
          "normalized": "Int-\u003eInt-\u003eRational",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "fay-base",
          "signature": "Ratio Int Int",
          "source": "src/Data-Ratio.html#Rational",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "Ratio",
          "package": "fay-base",
          "partial": "Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "denominator",
          "package": "fay-base",
          "signature": "Rational -\u003e Int",
          "source": "src/Data-Ratio.html#denominator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "denominator",
          "normalized": "Rational-\u003eInt",
          "package": "fay-base",
          "signature": "Rational-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:denominator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ratio",
          "name": "numerator",
          "package": "fay-base",
          "signature": "Rational -\u003e Int",
          "source": "src/Data-Ratio.html#numerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ratio",
          "module": "Data.Ratio",
          "name": "numerator",
          "normalized": "Rational-\u003eInt",
          "package": "fay-base",
          "signature": "Rational-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Data-Ratio.html#v:numerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Trace",
          "name": "Trace",
          "package": "fay-base",
          "source": "src/Debug-Trace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debug Trace",
          "module": "Debug.Trace",
          "name": "Trace",
          "package": "fay-base",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Debug-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Trace",
          "name": "trace",
          "package": "fay-base",
          "signature": "String -\u003e Ptr a -\u003e Ptr a",
          "source": "src/Debug-Trace.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Trace",
          "module": "Debug.Trace",
          "name": "trace",
          "normalized": "String-\u003ePtr a-\u003ePtr a",
          "package": "fay-base",
          "signature": "String-\u003ePtr a-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Debug-Trace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Trace",
          "name": "traceShow",
          "package": "fay-base",
          "signature": "Automatic a -\u003e Ptr b -\u003e Ptr b",
          "source": "src/Debug-Trace.html#traceShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Trace",
          "module": "Debug.Trace",
          "name": "traceShow",
          "normalized": "Automatic a-\u003ePtr b-\u003ePtr b",
          "package": "fay-base",
          "partial": "Show",
          "signature": "Automatic a-\u003ePtr b-\u003ePtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Debug-Trace.html#v:traceShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FFI",
          "name": "FFI",
          "package": "fay-base",
          "source": "src/FFI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FFI",
          "module": "FFI",
          "name": "FFI",
          "package": "fay-base",
          "partial": "FFI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/FFI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Prelude",
          "package": "fay-base",
          "source": "src/Prelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Prelude",
          "package": "fay-base",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Bool",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Bool",
          "package": "fay-base",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Char",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Char",
          "package": "fay-base",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Double",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Double",
          "package": "fay-base",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Either",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Either",
          "package": "fay-base",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Eq",
          "package": "fay-base",
          "type": "class"
        },
        "index": {
          "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Eq",
          "package": "fay-base",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JavaScript FFI interfacing monad.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Fay",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "The JavaScript FFI interfacing monad",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Fay",
          "package": "fay-base",
          "partial": "Fay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Fay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Int",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Int",
          "package": "fay-base",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Integer",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary-precision integers",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Integer",
          "package": "fay-base",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "Maybe",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Maybe",
          "package": "fay-base",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Ord",
          "package": "fay-base",
          "source": "src/Prelude.html#Ord",
          "type": "class"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Ord",
          "package": "fay-base",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Ordering",
          "package": "fay-base",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Ordering",
          "package": "fay-base",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Prelude",
          "name": "Read",
          "package": "fay-base",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Read",
          "package": "fay-base",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude",
          "name": "Show",
          "package": "fay-base",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Show",
          "package": "fay-base",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "String",
          "package": "fay-base",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "String",
          "package": "fay-base",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(||)",
          "package": "fay-base",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "fay-base",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(!!)",
          "package": "fay-base",
          "signature": "[a] -\u003e Int -\u003e a",
          "source": "src/Prelude.html#%21%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(!!) !!",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "($)",
          "package": "fay-base",
          "signature": "(t1 -\u003e t) -\u003e t1 -\u003e t",
          "source": "src/Prelude.html#%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "($) $",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "(t-\u003et)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "($!)",
          "package": "fay-base",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Prelude.html#%24%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "($!) $!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "fay-base",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(&&)",
          "package": "fay-base",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "fay-base",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(*)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.pow.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(**)",
          "package": "fay-base",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Prelude.html#%2A%2A",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.pow",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(**) **",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(+)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(++)",
          "package": "fay-base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(++) ++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(-)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(/)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(/=)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(/=) /=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Prelude.html#%3C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c=)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Prelude.html#%3C%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c=) \u003c=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003c=\u003c)",
          "package": "fay-base",
          "signature": "(b -\u003e Fay c) -\u003e (a -\u003e Fay b) -\u003e a -\u003e Fay c",
          "source": "src/Prelude.html#%3C%3D%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003c=\u003c) \u003c=\u003c",
          "normalized": "(a-\u003eFay b)-\u003e(c-\u003eFay a)-\u003ec-\u003eFay b",
          "package": "fay-base",
          "signature": "(b-\u003eFay c)-\u003e(a-\u003eFay b)-\u003ea-\u003eFay c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-60--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(=\u003c\u003c)",
          "package": "fay-base",
          "signature": "(a -\u003e Fay b) -\u003e Fay a -\u003e Fay b",
          "source": "src/Prelude.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eFay b)-\u003eFay a-\u003eFay b",
          "package": "fay-base",
          "signature": "(a-\u003eFay b)-\u003eFay a-\u003eFay b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(==)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(==) ==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Prelude.html#%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e=)",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Prelude.html#%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e=) \u003e=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(\u003e=\u003e)",
          "package": "fay-base",
          "signature": "(a -\u003e Fay b) -\u003e (b -\u003e Fay c) -\u003e a -\u003e Fay c",
          "source": "src/Prelude.html#%3E%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eFay b)-\u003e(b-\u003eFay c)-\u003ea-\u003eFay c",
          "package": "fay-base",
          "signature": "(a-\u003eFay b)-\u003e(b-\u003eFay c)-\u003ea-\u003eFay c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonomorphic then for Fay.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(\u003e\u003e)",
          "package": "fay-base",
          "signature": "Ptr (Fay a) -\u003e Ptr (Fay b) -\u003e Ptr (Fay b)",
          "source": "src/Prelude.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Monomorphic then for Fay",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "Ptr(Fay a)-\u003ePtr(Fay b)-\u003ePtr(Fay b)",
          "package": "fay-base",
          "signature": "Ptr(Fay a)-\u003ePtr(Fay b)-\u003ePtr(Fay b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonomorphic bind for Fay.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(\u003e\u003e=)",
          "package": "fay-base",
          "signature": "Ptr (Fay a) -\u003e Ptr (a -\u003e Fay b) -\u003e Ptr (Fay b)",
          "source": "src/Prelude.html#%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Monomorphic bind for Fay",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "Ptr(Fay a)-\u003ePtr(a-\u003eFay b)-\u003ePtr(Fay b)",
          "package": "fay-base",
          "signature": "Ptr(Fay a)-\u003ePtr(a-\u003eFay b)-\u003ePtr(Fay b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, it's not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(^)",
          "package": "fay-base",
          "signature": "a -\u003e Int -\u003e a",
          "source": "src/Prelude.html#%5E",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay it not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(^) ^",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.pow.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "(^^)",
          "package": "fay-base",
          "signature": "Double -\u003e Int -\u003e Double",
          "source": "src/Prelude.html#%5E%5E",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.pow",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(^^) ^^",
          "normalized": "Double-\u003eInt-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:-94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "(.)",
          "package": "fay-base",
          "signature": "(t1 -\u003e t) -\u003e (t2 -\u003e t1) -\u003e t2 -\u003e t",
          "source": "src/Prelude.html#.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "(.) .",
          "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "(t-\u003et)-\u003e(t-\u003et)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "EQ",
          "package": "fay-base",
          "signature": "EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "EQ",
          "package": "fay-base",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "False",
          "package": "fay-base",
          "signature": "False",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "False",
          "package": "fay-base",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "GT",
          "package": "fay-base",
          "signature": "GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "GT",
          "package": "fay-base",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Just",
          "package": "fay-base",
          "signature": "Just a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Just",
          "package": "fay-base",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "LT",
          "package": "fay-base",
          "signature": "LT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "LT",
          "package": "fay-base",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Left",
          "package": "fay-base",
          "signature": "Left a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Left",
          "package": "fay-base",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Nothing",
          "package": "fay-base",
          "signature": "Nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Nothing",
          "package": "fay-base",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "Right",
          "package": "fay-base",
          "signature": "Right b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "Right",
          "package": "fay-base",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "True",
          "package": "fay-base",
          "signature": "True",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "True",
          "package": "fay-base",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "abs",
          "package": "fay-base",
          "signature": "a -\u003e a",
          "source": "src/Prelude.html#abs",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "abs",
          "normalized": "a-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.acos.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "acos",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#acos",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.acos",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "acos",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "acosh",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#acosh",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "acosh",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "all",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Prelude.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "and",
          "package": "fay-base",
          "signature": "[Bool] -\u003e Bool",
          "source": "src/Prelude.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "and",
          "normalized": "[Bool]-\u003eBool",
          "package": "fay-base",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "any",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Prelude.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.asin.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "asin",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#asin",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.asin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "asin",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "asinh",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#asinh",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "asinh",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.atan.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "atan",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#atan",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.atan",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "atan",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "atanh",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#atanh",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "atanh",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "break",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Prelude.html#break",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.ceil.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ceiling",
          "package": "fay-base",
          "signature": "Double -\u003e Int",
          "source": "src/Prelude.html#ceiling",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.ceil",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ceiling",
          "normalized": "Double-\u003eInt",
          "package": "fay-base",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "compare",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e Ordering",
          "source": "src/Prelude.html#compare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two lists.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "conc",
          "package": "fay-base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#conc",
          "type": "function"
        },
        "index": {
          "description": "Append two lists",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "conc",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:conc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "concat",
          "package": "fay-base",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Prelude.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "fay-base",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "concatMap",
          "package": "fay-base",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "source": "src/Prelude.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "fay-base",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "const",
          "package": "fay-base",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Prelude.html#const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "const",
          "normalized": "a-\u003eb-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.cos.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "cos",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#cos",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.cos",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "cos",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "cosh",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#cosh",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "cosh",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "curry",
          "package": "fay-base",
          "signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Prelude.html#curry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "curry",
          "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "fay-base",
          "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "cycle",
          "package": "fay-base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Prelude.html#cycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "cycle",
          "normalized": "[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "div",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "div",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "divMod",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e (Int, Int)",
          "source": "src/Prelude.html#divMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "divMod",
          "normalized": "Int-\u003eInt-\u003e(Int,Int)",
          "package": "fay-base",
          "partial": "Mod",
          "signature": "Int-\u003eInt-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:divMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "drop",
          "package": "fay-base",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "drop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "dropWhile",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "either",
          "package": "fay-base",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
          "source": "src/Prelude.html#either",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "fay-base",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "elem",
          "package": "fay-base",
          "signature": "a -\u003e [a] -\u003e Bool",
          "source": "src/Prelude.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "elem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "fay-base",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "enumFrom",
          "package": "fay-base",
          "signature": "a -\u003e [a]",
          "source": "src/Prelude.html#enumFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "fay-base",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "enumFromBy",
          "package": "fay-base",
          "signature": "t -\u003e t -\u003e [t]",
          "source": "src/Prelude.html#enumFromBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromBy",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "fay-base",
          "partial": "From By",
          "signature": "t-\u003et-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "enumFromByTo",
          "package": "fay-base",
          "signature": "t -\u003e t -\u003e t -\u003e [t]",
          "source": "src/Prelude.html#enumFromByTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromByTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "fay-base",
          "partial": "From By To",
          "signature": "t-\u003et-\u003et-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromByTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "enumFromThen",
          "package": "fay-base",
          "signature": "t -\u003e t -\u003e [t]",
          "source": "src/Prelude.html#enumFromThen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "fay-base",
          "partial": "From Then",
          "signature": "t-\u003et-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "enumFromThenTo",
          "package": "fay-base",
          "signature": "t -\u003e t -\u003e t -\u003e [t]",
          "source": "src/Prelude.html#enumFromThenTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "fay-base",
          "partial": "From Then To",
          "signature": "t-\u003et-\u003et-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "enumFromTo",
          "package": "fay-base",
          "signature": "t -\u003e t -\u003e [t]",
          "source": "src/Prelude.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "fay-base",
          "partial": "From To",
          "signature": "t-\u003et-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrows a JavaScript error.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "error",
          "package": "fay-base",
          "signature": "String -\u003e a",
          "source": "src/Prelude.html#error",
          "type": "function"
        },
        "index": {
          "description": "Throws JavaScript error",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "error",
          "normalized": "String-\u003ea",
          "package": "fay-base",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "even",
          "package": "fay-base",
          "signature": "Int -\u003e Bool",
          "source": "src/Prelude.html#even",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "even",
          "normalized": "Int-\u003eBool",
          "package": "fay-base",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.exp.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "exp",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#exp",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.exp",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "exp",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fail",
          "package": "fay-base",
          "signature": "String -\u003e Fay a",
          "source": "src/Prelude.html#fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fail",
          "normalized": "String-\u003eFay a",
          "package": "fay-base",
          "signature": "String-\u003eFay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "filter",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "find",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
          "source": "src/Prelude.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "flip",
          "package": "fay-base",
          "signature": "(t1 -\u003e t2 -\u003e t) -\u003e t2 -\u003e t1 -\u003e t",
          "source": "src/Prelude.html#flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "flip",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "(t-\u003et-\u003et)-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.floor.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "floor",
          "package": "fay-base",
          "signature": "Double -\u003e Int",
          "source": "src/Prelude.html#floor",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.floor",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "floor",
          "normalized": "Double-\u003eInt",
          "package": "fay-base",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "foldl",
          "package": "fay-base",
          "signature": "(t1 -\u003e t -\u003e t1) -\u003e t1 -\u003e [t] -\u003e t1",
          "source": "src/Prelude.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldl",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "fay-base",
          "signature": "(t-\u003et-\u003et)-\u003et-\u003e[t]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "foldl1",
          "package": "fay-base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Prelude.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "fay-base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "foldr",
          "package": "fay-base",
          "signature": "(t -\u003e t1 -\u003e t1) -\u003e t1 -\u003e [t] -\u003e t1",
          "source": "src/Prelude.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldr",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "fay-base",
          "signature": "(t-\u003et-\u003et)-\u003et-\u003e[t]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "foldr1",
          "package": "fay-base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Prelude.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "fay-base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "forM",
          "package": "fay-base",
          "signature": "[a] -\u003e (a -\u003e Fay b) -\u003e Fay [b]",
          "source": "src/Prelude.html#forM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eFay b)-\u003eFay[b]",
          "package": "fay-base",
          "signature": "[a]-\u003e(a-\u003eFay b)-\u003eFay[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "forM_",
          "package": "fay-base",
          "signature": "[a] -\u003e (a -\u003e Fay b) -\u003e Fay ()",
          "source": "src/Prelude.html#forM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "forM_",
          "normalized": "[a]-\u003e(a-\u003eFay b)-\u003eFay()",
          "package": "fay-base",
          "signature": "[a]-\u003e(a-\u003eFay b)-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fromInteger",
          "package": "fay-base",
          "signature": "Ptr Integer -\u003e Ptr a",
          "source": "src/Prelude.html#fromInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromInteger",
          "normalized": "Ptr Integer-\u003ePtr a",
          "package": "fay-base",
          "partial": "Integer",
          "signature": "Ptr Integer-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fromIntegral",
          "package": "fay-base",
          "signature": "Ptr a -\u003e Ptr b",
          "source": "src/Prelude.html#fromIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fromIntegral",
          "normalized": "Ptr a-\u003ePtr b",
          "package": "fay-base",
          "partial": "Integral",
          "signature": "Ptr a-\u003ePtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "fst",
          "package": "fay-base",
          "signature": "(t, t1) -\u003e t",
          "source": "src/Prelude.html#fst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "fst",
          "normalized": "(a,a)-\u003ea",
          "package": "fay-base",
          "signature": "(t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "gcd",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#gcd",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "gcd",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:gcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "head",
          "package": "fay-base",
          "signature": "[a] -\u003e a",
          "source": "src/Prelude.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "head",
          "normalized": "[a]-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "id",
          "package": "fay-base",
          "signature": "a -\u003e a",
          "source": "src/Prelude.html#id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault definition for using RebindableSyntax.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "ifThenElse",
          "package": "fay-base",
          "signature": "Bool -\u003e t -\u003e t -\u003e t",
          "source": "src/Prelude.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "description": "Default definition for using RebindableSyntax",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "fay-base",
          "partial": "Then Else",
          "signature": "Bool-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "init",
          "package": "fay-base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Prelude.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "init",
          "normalized": "[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "insertBy",
          "package": "fay-base",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "intercalate",
          "package": "fay-base",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Prelude.html#intercalate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "intercalate",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "intersperse",
          "package": "fay-base",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#intersperse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "intersperse",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "iterate",
          "package": "fay-base",
          "signature": "(a -\u003e a) -\u003e a -\u003e [a]",
          "source": "src/Prelude.html#iterate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
          "package": "fay-base",
          "signature": "(a-\u003ea)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "last",
          "package": "fay-base",
          "signature": "[a] -\u003e a",
          "source": "src/Prelude.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "last",
          "normalized": "[a]-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "lcm",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#lcm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lcm",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:lcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "length",
          "package": "fay-base",
          "signature": "[a] -\u003e Int",
          "source": "src/Prelude.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "length",
          "normalized": "[a]-\u003eInt",
          "package": "fay-base",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "length'",
          "package": "fay-base",
          "signature": "Int -\u003e [a] -\u003e Int",
          "source": "src/Prelude.html#length%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "length'",
          "normalized": "Int-\u003e[a]-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003e[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:length-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "lines",
          "package": "fay-base",
          "signature": "String -\u003e [String]",
          "source": "src/Prelude.html#lines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "fay-base",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.log.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "log",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#log",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.log",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "log",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "logBase",
          "package": "fay-base",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Prelude.html#logBase",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "logBase",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "fay-base",
          "partial": "Base",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "lookup",
          "package": "fay-base",
          "signature": "a1 -\u003e [(a1, a)] -\u003e Maybe a",
          "source": "src/Prelude.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "lookup",
          "normalized": "a-\u003e[(a,a)]-\u003eMaybe a",
          "package": "fay-base",
          "signature": "a-\u003e[(a,a)]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "map",
          "package": "fay-base",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/Prelude.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "fay-base",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "mapM",
          "package": "fay-base",
          "signature": "(a -\u003e Fay b) -\u003e [a] -\u003e Fay [b]",
          "source": "src/Prelude.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mapM",
          "normalized": "(a-\u003eFay b)-\u003e[a]-\u003eFay[b]",
          "package": "fay-base",
          "signature": "(a-\u003eFay b)-\u003e[a]-\u003eFay[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "mapM_",
          "package": "fay-base",
          "signature": "(a -\u003e Fay b) -\u003e [a] -\u003e Fay ()",
          "source": "src/Prelude.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mapM_",
          "normalized": "(a-\u003eFay b)-\u003e[a]-\u003eFay()",
          "package": "fay-base",
          "signature": "(a-\u003eFay b)-\u003e[a]-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "max",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "max",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "maximum",
          "package": "fay-base",
          "signature": "[a] -\u003e a",
          "source": "src/Prelude.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "maximum",
          "normalized": "[a]-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe type.\n\u003c/p\u003e\u003cp\u003eEither type.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "maybe",
          "package": "fay-base",
          "signature": "t -\u003e (t1 -\u003e t) -\u003e Maybe t1 -\u003e t",
          "source": "src/Prelude.html#maybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe type Either type",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "maybe",
          "normalized": "a-\u003e(a-\u003ea)-\u003eMaybe a-\u003ea",
          "package": "fay-base",
          "signature": "t-\u003e(t-\u003et)-\u003eMaybe t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "min",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "min",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "minimum",
          "package": "fay-base",
          "signature": "[a] -\u003e a",
          "source": "src/Prelude.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "minimum",
          "normalized": "[a]-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "mod",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "mod",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "negate",
          "package": "fay-base",
          "signature": "a -\u003e a",
          "source": "src/Prelude.html#negate",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "not",
          "package": "fay-base",
          "signature": "Bool -\u003e Bool",
          "source": "src/Prelude.html#not",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "fay-base",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "notElem",
          "package": "fay-base",
          "signature": "a -\u003e [a] -\u003e Bool",
          "source": "src/Prelude.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "notElem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "fay-base",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "nub",
          "package": "fay-base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Prelude.html#nub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "nub'",
          "package": "fay-base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#nub%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "nub'",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:nub-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "null",
          "package": "fay-base",
          "signature": "[t] -\u003e Bool",
          "source": "src/Prelude.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "fay-base",
          "signature": "[t]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot (even x)\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "odd",
          "package": "fay-base",
          "signature": "Int -\u003e Bool",
          "source": "src/Prelude.html#odd",
          "type": "function"
        },
        "index": {
          "description": "not even",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "odd",
          "normalized": "Int-\u003eBool",
          "package": "fay-base",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "or",
          "package": "fay-base",
          "signature": "[Bool] -\u003e Bool",
          "source": "src/Prelude.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "or",
          "normalized": "[Bool]-\u003eBool",
          "package": "fay-base",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "otherwise",
          "package": "fay-base",
          "signature": "Bool",
          "source": "src/Prelude.html#otherwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "otherwise",
          "package": "fay-base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.PI.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "pi",
          "package": "fay-base",
          "signature": "Double",
          "source": "src/Prelude.html#pi",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.PI",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "pi",
          "package": "fay-base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "pred",
          "package": "fay-base",
          "signature": "a -\u003e a",
          "source": "src/Prelude.html#pred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "prependToAll",
          "package": "fay-base",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#prependToAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "prependToAll",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "partial": "To All",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:prependToAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "print",
          "package": "fay-base",
          "signature": "Automatic a -\u003e Fay ()",
          "source": "src/Prelude.html#print",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "print",
          "normalized": "Automatic a-\u003eFay()",
          "package": "fay-base",
          "signature": "Automatic a-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "product",
          "package": "fay-base",
          "signature": "[a] -\u003e a",
          "source": "src/Prelude.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "product",
          "normalized": "[a]-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "properFraction",
          "package": "fay-base",
          "signature": "Double -\u003e (Int, Double)",
          "source": "src/Prelude.html#properFraction",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "properFraction",
          "normalized": "Double-\u003e(Int,Double)",
          "package": "fay-base",
          "partial": "Fraction",
          "signature": "Double-\u003e(Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:properFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "putStrLn",
          "package": "fay-base",
          "signature": "String -\u003e Fay ()",
          "source": "src/Prelude.html#putStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "putStrLn",
          "normalized": "String-\u003eFay()",
          "package": "fay-base",
          "partial": "Str Ln",
          "signature": "String-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses quot'.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "quot",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#quot",
          "type": "function"
        },
        "index": {
          "description": "Uses quot",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quot",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses ~~(a/b).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "quot'",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#quot%27",
          "type": "function"
        },
        "index": {
          "description": "Uses",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quot'",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:quot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(quot x y, rem x y)\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "quotRem",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e (Int, Int)",
          "source": "src/Prelude.html#quotRem",
          "type": "function"
        },
        "index": {
          "description": "quot rem",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "quotRem",
          "normalized": "Int-\u003eInt-\u003e(Int,Int)",
          "package": "fay-base",
          "partial": "Rem",
          "signature": "Int-\u003eInt-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:quotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "recip",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#recip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "recip",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses rem'.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "rem",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#rem",
          "type": "function"
        },
        "index": {
          "description": "Uses rem",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "rem",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses %%.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "rem'",
          "package": "fay-base",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Prelude.html#rem%27",
          "type": "function"
        },
        "index": {
          "description": "Uses",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "rem'",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "fay-base",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:rem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "repeat",
          "package": "fay-base",
          "signature": "a -\u003e [a]",
          "source": "src/Prelude.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "fay-base",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "replicate",
          "package": "fay-base",
          "signature": "Int -\u003e a -\u003e [a]",
          "source": "src/Prelude.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "fay-base",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonomorphic return for Fay.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "return",
          "package": "fay-base",
          "signature": "a -\u003e Fay a",
          "source": "src/Prelude.html#return",
          "type": "function"
        },
        "index": {
          "description": "Monomorphic return for Fay",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "return",
          "normalized": "a-\u003eFay a",
          "package": "fay-base",
          "signature": "a-\u003eFay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "reverse",
          "package": "fay-base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Prelude.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.round.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "round",
          "package": "fay-base",
          "signature": "Double -\u003e Int",
          "source": "src/Prelude.html#round",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.round",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "round",
          "normalized": "Double-\u003eInt",
          "package": "fay-base",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "scanl",
          "package": "fay-base",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "source": "src/Prelude.html#scanl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "fay-base",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "scanl1",
          "package": "fay-base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#scanl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "scanr",
          "package": "fay-base",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "source": "src/Prelude.html#scanr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "fay-base",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "scanr1",
          "package": "fay-base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#scanr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Prelude",
          "name": "seq",
          "package": "fay-base",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "fay-base",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "sequence",
          "package": "fay-base",
          "signature": "[Fay a] -\u003e Fay [a]",
          "source": "src/Prelude.html#sequence",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sequence",
          "normalized": "[Fay a]-\u003eFay[a]",
          "package": "fay-base",
          "signature": "[Fay a]-\u003eFay[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sequence_",
          "package": "fay-base",
          "signature": "[Fay a] -\u003e Fay ()",
          "source": "src/Prelude.html#sequence_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sequence_",
          "normalized": "[Fay a]-\u003eFay()",
          "package": "fay-base",
          "signature": "[Fay a]-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses JSON.stringify.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "show",
          "package": "fay-base",
          "signature": "Automatic a -\u003e String",
          "source": "src/Prelude.html#show",
          "type": "function"
        },
        "index": {
          "description": "Uses JSON.stringify",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "show",
          "normalized": "Automatic a-\u003eString",
          "package": "fay-base",
          "signature": "Automatic a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "signum",
          "package": "fay-base",
          "signature": "a -\u003e a",
          "source": "src/Prelude.html#signum",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "signum",
          "normalized": "a-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.sin.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "sin",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#sin",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.sin",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sin",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "sinh",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#sinh",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sinh",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "snd",
          "package": "fay-base",
          "signature": "(t, t1) -\u003e t1",
          "source": "src/Prelude.html#snd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "snd",
          "normalized": "(a,a)-\u003ea",
          "package": "fay-base",
          "signature": "(t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sort",
          "package": "fay-base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Prelude.html#sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sortBy",
          "package": "fay-base",
          "signature": "(t -\u003e t -\u003e Ordering) -\u003e [t] -\u003e [t]",
          "source": "src/Prelude.html#sortBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "partial": "By",
          "signature": "(t-\u003et-\u003eOrdering)-\u003e[t]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "span",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Prelude.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "splitAt",
          "package": "fay-base",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Prelude.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "fay-base",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.sqrt.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "sqrt",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#sqrt",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.sqrt",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sqrt",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip (-).\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "subtract",
          "package": "fay-base",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Prelude.html#subtract",
          "type": "function"
        },
        "index": {
          "description": "Flip",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "succ",
          "package": "fay-base",
          "signature": "a -\u003e a",
          "source": "src/Prelude.html#succ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "fay-base",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "sum",
          "package": "fay-base",
          "signature": "[a] -\u003e a",
          "source": "src/Prelude.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "sum",
          "normalized": "[a]-\u003ea",
          "package": "fay-base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "tail",
          "package": "fay-base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Prelude.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "take",
          "package": "fay-base",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "take",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "takeWhile",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Prelude.html#takeWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "fay-base",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.tan.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "tan",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#tan",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.tan",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "tan",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "tanh",
          "package": "fay-base",
          "signature": "Double -\u003e Double",
          "source": "src/Prelude.html#tanh",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "tanh",
          "normalized": "Double-\u003eDouble",
          "package": "fay-base",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented in Fay, not fast.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "truncate",
          "package": "fay-base",
          "signature": "Double -\u003e Int",
          "source": "src/Prelude.html#truncate",
          "type": "function"
        },
        "index": {
          "description": "Implemented in Fay not fast",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "truncate",
          "normalized": "Double-\u003eInt",
          "package": "fay-base",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "uncurry",
          "package": "fay-base",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "source": "src/Prelude.html#uncurry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "fay-base",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrows \u003ca\u003eundefined\u003c/a\u003e via \u003ca\u003eerror\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "undefined",
          "package": "fay-base",
          "signature": "a",
          "source": "src/Prelude.html#undefined",
          "type": "function"
        },
        "index": {
          "description": "Throws undefined via error",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "undefined",
          "package": "fay-base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "unless",
          "package": "fay-base",
          "signature": "Bool -\u003e Fay a -\u003e Fay ()",
          "source": "src/Prelude.html#unless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unless",
          "normalized": "Bool-\u003eFay a-\u003eFay()",
          "package": "fay-base",
          "signature": "Bool-\u003eFay a-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "unlines",
          "package": "fay-base",
          "signature": "[String] -\u003e String",
          "source": "src/Prelude.html#unlines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "fay-base",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Math.pow.\n\u003c/p\u003e",
          "module": "Prelude",
          "name": "unsafePow",
          "package": "fay-base",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Prelude.html#unsafePow",
          "type": "function"
        },
        "index": {
          "description": "Uses Math.pow",
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unsafePow",
          "normalized": "a-\u003eb-\u003ea",
          "package": "fay-base",
          "partial": "Pow",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unsafePow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "until",
          "package": "fay-base",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Prelude.html#until",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "fay-base",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "unwords",
          "package": "fay-base",
          "signature": "[String] -\u003e String",
          "source": "src/Prelude.html#unwords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "fay-base",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "unzip",
          "package": "fay-base",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "source": "src/Prelude.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "fay-base",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "unzip3",
          "package": "fay-base",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "source": "src/Prelude.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "fay-base",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "void",
          "package": "fay-base",
          "signature": "Fay a -\u003e Fay ()",
          "source": "src/Prelude.html#void",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "void",
          "normalized": "Fay a-\u003eFay()",
          "package": "fay-base",
          "signature": "Fay a-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "when",
          "package": "fay-base",
          "signature": "Bool -\u003e Fay a -\u003e Fay ()",
          "source": "src/Prelude.html#when",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "when",
          "normalized": "Bool-\u003eFay a-\u003eFay()",
          "package": "fay-base",
          "signature": "Bool-\u003eFay a-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "words",
          "package": "fay-base",
          "signature": "String -\u003e [String]",
          "source": "src/Prelude.html#words",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "fay-base",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "zip",
          "package": "fay-base",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Prelude.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "fay-base",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "zip3",
          "package": "fay-base",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "source": "src/Prelude.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "fay-base",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "zipWith",
          "package": "fay-base",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Prelude.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "fay-base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude",
          "name": "zipWith3",
          "package": "fay-base",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "source": "src/Prelude.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude",
          "module": "Prelude",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "fay-base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-base/docs/Prelude.html#v:zipWith3"
      }
    }
  ]
]