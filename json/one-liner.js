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
        "word": "one-liner"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for writing generic functions on algebraic data types \n of kind \u003ccode\u003e*\u003c/code\u003e. These data types must be an instance of the \u003ccode\u003e\u003ca\u003eADT\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eHere's an example how to write such an instance for this data type:\n\u003c/p\u003e\u003cpre\u003e\n data T a = A Int a | B a (T a)\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eADT\u003c/a\u003e\u003c/code\u003e (T a) where\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e A{} = 0\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e B{} = 1\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 0 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"A\"\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 1 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"B\"\n   type \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e (T a) c = (c Int, c a, c (T a))\n   \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e sub rec = \n     [ A \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(A i _) -\u003e i)) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(A _ a) -\u003e a))\n     , B \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(B a _) -\u003e a)) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e rec (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(B _ t) -\u003e t))\n     ]\n\u003c/pre\u003e\u003cp\u003eAnd this is how you would write generic equality, using the \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e monoid:\n\u003c/p\u003e\u003cpre\u003e\n eqADT :: (\u003ccode\u003e\u003ca\u003eADT\u003c/a\u003e\u003c/code\u003e t, \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e t \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e) =\u003e t -\u003e t -\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n eqADT s t = \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e s == \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e t \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e \n   \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003embuilds\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e) (\\fld -\u003e \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e $ s \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e fld \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e t \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e fld) `\u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e` s)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "ADT",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for writing generic functions on algebraic data types of kind These data types must be an instance of the ADT type class Here an example how to write such an instance for this data type data Int instance ADT where ctorIndex ctorIndex ctorInfo ctor ctorInfo ctor type Constraints Int buildsRecA For sub rec sub FieldInfo sub FieldInfo sub FieldInfo rec FieldInfo And this is how you would write generic equality using the All monoid eqADT ADT Constraints Eq Bool eqADT ctorIndex ctorIndex getAll mbuilds For For Eq fld All fld fld at",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "ADT",
          "package": "one-liner",
          "partial": "ADT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for algebraic data types of kind \u003ccode\u003e*\u003c/code\u003e. Minimal implementation: \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e and either \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e\n if the type \u003ccode\u003et\u003c/code\u003e is not recursive, or \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e if the type \u003ccode\u003et\u003c/code\u003e is recursive.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "ADT",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT.html#ADT",
          "type": "class"
        },
        "index": {
          "description": "Type class for algebraic data types of kind Minimal implementation ctorIndex and either buildsA if the type is not recursive or buildsRecA if the type is recursive",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "ADT",
          "package": "one-liner",
          "partial": "ADT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:ADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an instance for this class if the data type has exactly one constructor.\n\u003c/p\u003e\u003cp\u003eThis class has no methods.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "ADTRecord",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT.html#ADTRecord",
          "type": "class"
        },
        "index": {
          "description": "Add an instance for this class if the data type has exactly one constructor This class has no methods",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "ADTRecord",
          "package": "one-liner",
          "partial": "ADTRecord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:ADTRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT",
          "name": "Constraint",
          "package": "one-liner",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "Constraint",
          "package": "one-liner",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell the compiler which class we want to use in the traversal. Should be used like this:\n\u003c/p\u003e\u003cpre\u003e (For :: For Show)\n\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003eShow\u003c/code\u003e can be any class.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "For",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT.html#For",
          "type": "data"
        },
        "index": {
          "description": "Tell the compiler which class we want to use in the traversal Should be used like this For For Show Where Show can be any class",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "For",
          "package": "one-liner",
          "partial": "For",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the subcomponent by using the projector from the field information.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "(!)",
          "package": "one-liner",
          "signature": "t -\u003e FieldInfo (t -\u003e s) -\u003e s",
          "source": "src/Generics-OneLiner-ADT.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Get the subcomponent by using the projector from the field information",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "(!) !",
          "normalized": "a-\u003eFieldInfo(a-\u003eb)-\u003eb",
          "package": "one-liner",
          "signature": "t-\u003eFieldInfo(t-\u003es)-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT",
          "name": "For",
          "package": "one-liner",
          "signature": "For",
          "source": "src/Generics-OneLiner-ADT.html#For",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "For",
          "package": "one-liner",
          "partial": "For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value from the result of one of the \u003ccode\u003ebuilds\u003c/code\u003e functions that matches the constructor of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "at",
          "package": "one-liner",
          "signature": "[a] -\u003e t -\u003e a",
          "source": "src/Generics-OneLiner-ADT.html#at",
          "type": "function"
        },
        "index": {
          "description": "Get the value from the result of one of the builds functions that matches the constructor of",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "at",
          "normalized": "[a]-\u003eb-\u003ea",
          "package": "one-liner",
          "signature": "[a]-\u003et-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuilds\u003c/a\u003e\u003c/code\u003e for data types with exactly one constructor\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "build",
          "package": "one-liner",
          "signature": "FieldInfo (t -\u003e s) -\u003e s) -\u003e t",
          "source": "src/Generics-OneLiner-ADT.html#build",
          "type": "function"
        },
        "index": {
          "description": "builds for data types with exactly one constructor",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "build",
          "normalized": "FieldInfo(a-\u003eb)-\u003eb)-\u003ea",
          "package": "one-liner",
          "signature": "FieldInfo(t-\u003es)-\u003es)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e applicative functor.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "builds",
          "package": "one-liner",
          "signature": "FieldInfo (t -\u003e s) -\u003e s) -\u003e [t]",
          "source": "src/Generics-OneLiner-ADT.html#builds",
          "type": "function"
        },
        "index": {
          "description": "buildsA specialized to the Identity applicative functor",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "builds",
          "normalized": "FieldInfo(a-\u003eb)-\u003eb)-\u003e[a]",
          "package": "one-liner",
          "signature": "FieldInfo(t-\u003es)-\u003es)-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:builds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT",
          "name": "buildsA",
          "package": "one-liner",
          "signature": "buildsA",
          "source": "src/Generics-OneLiner-ADT.html#buildsA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "buildsA",
          "package": "one-liner",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:buildsA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT",
          "name": "buildsRecA",
          "package": "one-liner",
          "signature": "buildsRecA",
          "source": "src/Generics-OneLiner-ADT.html#buildsRecA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "buildsRecA",
          "package": "one-liner",
          "partial": "Rec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:buildsRecA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the index of the constructor of the given value in the list returned by \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "ctorIndex",
          "package": "one-liner",
          "signature": "t -\u003e Int",
          "source": "src/Generics-OneLiner-ADT.html#ctorIndex",
          "type": "method"
        },
        "index": {
          "description": "Gives the index of the constructor of the given value in the list returned by buildsA and buildsRecA",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "ctorIndex",
          "normalized": "a-\u003eInt",
          "package": "one-liner",
          "partial": "Index",
          "signature": "t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:ctorIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ectorInfo n\u003c/code\u003e gives constructor information, f.e. its name, for the \u003ccode\u003en\u003c/code\u003eth constructor.\n   The first argument is a dummy argument and can be \u003ccode\u003e(undefined :: t)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "ctorInfo",
          "package": "one-liner",
          "signature": "t -\u003e Int -\u003e CtorInfo",
          "source": "src/Generics-OneLiner-ADT.html#ctorInfo",
          "type": "method"
        },
        "index": {
          "description": "ctorInfo gives constructor information f.e its name for the th constructor The first argument is dummy argument and can be undefined",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "ctorInfo",
          "normalized": "a-\u003eInt-\u003eCtorInfo",
          "package": "one-liner",
          "partial": "Info",
          "signature": "t-\u003eInt-\u003eCtorInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:ctorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a value, by mapping each subcomponent to a monoid value and collecting those. \n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "gfoldMap",
          "package": "one-liner",
          "signature": "s -\u003e m) -\u003e t -\u003e m",
          "source": "src/Generics-OneLiner-ADT.html#gfoldMap",
          "type": "function"
        },
        "index": {
          "description": "Fold value by mapping each subcomponent to monoid value and collecting those",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "gfoldMap",
          "normalized": "a-\u003eb)-\u003ec-\u003eb",
          "package": "one-liner",
          "partial": "Map",
          "signature": "s-\u003em)-\u003et-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:gfoldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a value by transforming each subcomponent.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "gmap",
          "package": "one-liner",
          "signature": "s -\u003e s) -\u003e t -\u003e t",
          "source": "src/Generics-OneLiner-ADT.html#gmap",
          "type": "function"
        },
        "index": {
          "description": "Transform value by transforming each subcomponent",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "gmap",
          "normalized": "a-\u003ea)-\u003eb-\u003eb",
          "package": "one-liner",
          "signature": "s-\u003es)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:gmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplicative traversal given a way to traverse each subcomponent.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "gtraverse",
          "package": "one-liner",
          "signature": "s -\u003e f s) -\u003e t -\u003e f t",
          "source": "src/Generics-OneLiner-ADT.html#gtraverse",
          "type": "function"
        },
        "index": {
          "description": "Applicative traversal given way to traverse each subcomponent",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "gtraverse",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "one-liner",
          "signature": "s-\u003ef s)-\u003et-\u003ef t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:gtraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e applicative functor, which collects monoid values \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "mbuilds",
          "package": "one-liner",
          "signature": "FieldInfo (t -\u003e s) -\u003e m) -\u003e [m]",
          "source": "src/Generics-OneLiner-ADT.html#mbuilds",
          "type": "function"
        },
        "index": {
          "description": "buildsA specialized to the Constant applicative functor which collects monoid values",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "mbuilds",
          "normalized": "FieldInfo(a-\u003eb)-\u003ec)-\u003e[c]",
          "package": "one-liner",
          "signature": "FieldInfo(t-\u003es)-\u003em)-\u003e[m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:mbuilds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a 0-ary operation by applying the operation to every subcomponent.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "op0",
          "package": "one-liner",
          "signature": "s) -\u003e t",
          "source": "src/Generics-OneLiner-ADT.html#op0",
          "type": "function"
        },
        "index": {
          "description": "Derive ary operation by applying the operation to every subcomponent",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "op0",
          "normalized": "a)-\u003eb",
          "package": "one-liner",
          "signature": "s)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:op0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a unary operation by applying the operation to every subcomponent.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "op1",
          "package": "one-liner",
          "signature": "s -\u003e s) -\u003e t -\u003e t",
          "source": "src/Generics-OneLiner-ADT.html#op1",
          "type": "function"
        },
        "index": {
          "description": "Derive unary operation by applying the operation to every subcomponent",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "op1",
          "normalized": "a-\u003ea)-\u003eb-\u003eb",
          "package": "one-liner",
          "signature": "s-\u003es)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:op1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a binary operation by applying the operation to every subcomponent.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT",
          "name": "op2",
          "package": "one-liner",
          "signature": "s -\u003e s -\u003e s) -\u003e t -\u003e t -\u003e t",
          "source": "src/Generics-OneLiner-ADT.html#op2",
          "type": "function"
        },
        "index": {
          "description": "Derive binary operation by applying the operation to every subcomponent",
          "hierarchy": "Generics OneLiner ADT",
          "module": "Generics.OneLiner.ADT",
          "name": "op2",
          "normalized": "a-\u003ea-\u003ea)-\u003eb-\u003eb-\u003eb",
          "package": "one-liner",
          "signature": "s-\u003es-\u003es)-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:op2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for writing generic functions on algebraic data types \n of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e. \n These data types must be an instance of the \u003ccode\u003e\u003ca\u003eADT1\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eHere's an example how to write such an instance for this data type:\n\u003c/p\u003e\u003cpre\u003e\n data T a = A [a] | B a (T a)\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eADT1\u003c/a\u003e\u003c/code\u003e T where\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e A{} = 0\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e B{} = 1\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 0 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"A\"\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 1 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"B\"\n   type \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e T c = (c [], c T)\n   \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e par sub rec = \n     [ A \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003ecomponent\u003c/a\u003e\u003c/code\u003e (\\(A l) -\u003e l)\n     , B \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e par (\u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e (\\(B a _) -\u003e a)) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e rec (\u003ccode\u003e\u003ca\u003ecomponent\u003c/a\u003e\u003c/code\u003e (\\(B _ t) -\u003e t))\n     ]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "ADT1",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT1.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for writing generic functions on algebraic data types of kind These data types must be an instance of the ADT1 type class Here an example how to write such an instance for this data type data instance ADT1 where ctorIndex ctorIndex ctorInfo ctor ctorInfo ctor type Constraints buildsRecA For par sub rec sub component par param rec component",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "ADT1",
          "package": "one-liner",
          "partial": "ADT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": ":~\u003e",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT1.html#%3A~%3E",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": ":~\u003e",
          "package": "one-liner",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for algebraic data types of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e. Minimal implementation: \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e and either \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e\n if the type \u003ccode\u003et\u003c/code\u003e is not recursive, or \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e if the type \u003ccode\u003et\u003c/code\u003e is recursive.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "ADT1",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT1.html#ADT1",
          "type": "class"
        },
        "index": {
          "description": "Type class for algebraic data types of kind Minimal implementation ctorIndex and either buildsA if the type is not recursive or buildsRecA if the type is recursive",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "ADT1",
          "package": "one-liner",
          "partial": "ADT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:ADT1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an instance for this class if the data type has exactly one constructor.\n\u003c/p\u003e\u003cp\u003eThis class has no methods.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "ADT1Record",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT1.html#ADT1Record",
          "type": "class"
        },
        "index": {
          "description": "Add an instance for this class if the data type has exactly one constructor This class has no methods",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "ADT1Record",
          "package": "one-liner",
          "partial": "ADT Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:ADT1Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "Constraint",
          "package": "one-liner",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "Constraint",
          "package": "one-liner",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "Extract",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT1.html#Extract",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "Extract",
          "package": "one-liner",
          "partial": "Extract",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:Extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell the compiler which class we want to use in the traversal. Should be used like this:\n\u003c/p\u003e\u003cpre\u003e (For :: For Show)\n\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003eShow\u003c/code\u003e can be any class.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "For",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-ADT1.html#For",
          "type": "data"
        },
        "index": {
          "description": "Tell the compiler which class we want to use in the traversal Should be used like this For For Show Where Show can be any class",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "For",
          "package": "one-liner",
          "partial": "For",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "(!)",
          "package": "one-liner",
          "signature": "t a -\u003e FieldInfo (Extract t) -\u003e a",
          "source": "src/Generics-OneLiner-ADT1.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "(!) !",
          "normalized": "a b-\u003eFieldInfo(Extract a)-\u003eb",
          "package": "one-liner",
          "signature": "t a-\u003eFieldInfo(Extract t)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "(!~)",
          "package": "one-liner",
          "signature": "t a -\u003e FieldInfo (t :~\u003e s) -\u003e s a",
          "source": "src/Generics-OneLiner-ADT1.html#%21~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "(!~) !~",
          "normalized": "a b-\u003eFieldInfo(a c)-\u003ec b",
          "package": "one-liner",
          "signature": "t a-\u003eFieldInfo(t s)-\u003es a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:-33--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "Extract",
          "package": "one-liner",
          "signature": "Extract",
          "source": "src/Generics-OneLiner-ADT1.html#Extract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "Extract",
          "package": "one-liner",
          "partial": "Extract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:Extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "For",
          "package": "one-liner",
          "signature": "For",
          "source": "src/Generics-OneLiner-ADT1.html#For",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "For",
          "package": "one-liner",
          "partial": "For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "Nat",
          "package": "one-liner",
          "signature": "Nat",
          "source": "src/Generics-OneLiner-ADT1.html#%3A~%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "Nat",
          "package": "one-liner",
          "partial": "Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value from the result of one of the \u003ccode\u003ebuilds\u003c/code\u003e functions that matches the constructor of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "at",
          "package": "one-liner",
          "signature": "[a] -\u003e t b -\u003e a",
          "source": "src/Generics-OneLiner-ADT1.html#at",
          "type": "function"
        },
        "index": {
          "description": "Get the value from the result of one of the builds functions that matches the constructor of",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "at",
          "normalized": "[a]-\u003eb c-\u003ea",
          "package": "one-liner",
          "signature": "[a]-\u003et b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuilds\u003c/a\u003e\u003c/code\u003e for data types with exactly one constructor\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "build",
          "package": "one-liner",
          "signature": "FieldInfo (t :~\u003e s) -\u003e s b) -\u003e t b",
          "source": "src/Generics-OneLiner-ADT1.html#build",
          "type": "function"
        },
        "index": {
          "description": "builds for data types with exactly one constructor",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "build",
          "normalized": "FieldInfo(a b)-\u003eb c)-\u003ea c",
          "package": "one-liner",
          "signature": "FieldInfo(t s)-\u003es b)-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e applicative functor.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "builds",
          "package": "one-liner",
          "signature": "FieldInfo (t :~\u003e s) -\u003e s b) -\u003e [t b]",
          "source": "src/Generics-OneLiner-ADT1.html#builds",
          "type": "function"
        },
        "index": {
          "description": "buildsA specialized to the Identity applicative functor",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "builds",
          "normalized": "FieldInfo(a b)-\u003eb c)-\u003e[a c]",
          "package": "one-liner",
          "signature": "FieldInfo(t s)-\u003es b)-\u003e[t b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:builds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "buildsA",
          "package": "one-liner",
          "signature": "buildsA",
          "source": "src/Generics-OneLiner-ADT1.html#buildsA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "buildsA",
          "package": "one-liner",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:buildsA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "buildsRecA",
          "package": "one-liner",
          "signature": "buildsRecA",
          "source": "src/Generics-OneLiner-ADT1.html#buildsRecA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "buildsRecA",
          "package": "one-liner",
          "partial": "Rec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:buildsRecA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "component",
          "package": "one-liner",
          "signature": "(forall a.  t a -\u003e s a) -\u003e FieldInfo (t :~\u003e s)",
          "source": "src/Generics-OneLiner-ADT1.html#component",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "component",
          "normalized": "(a b c d-\u003ee d)-\u003eFieldInfo(c e)",
          "package": "one-liner",
          "signature": "(forall a. t a-\u003es a)-\u003eFieldInfo(t s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the index of the constructor of the given value in the list returned by \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "ctorIndex",
          "package": "one-liner",
          "signature": "t a -\u003e Int",
          "source": "src/Generics-OneLiner-ADT1.html#ctorIndex",
          "type": "method"
        },
        "index": {
          "description": "Gives the index of the constructor of the given value in the list returned by buildsA and buildsRecA",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "ctorIndex",
          "normalized": "a b-\u003eInt",
          "package": "one-liner",
          "partial": "Index",
          "signature": "t a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:ctorIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ectorInfo n\u003c/code\u003e gives constructor information, f.e. its name, for the \u003ccode\u003en\u003c/code\u003eth constructor.\n   The first argument is a dummy argument and can be \u003ccode\u003e(undefined :: t a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "ctorInfo",
          "package": "one-liner",
          "signature": "t a -\u003e Int -\u003e CtorInfo",
          "source": "src/Generics-OneLiner-ADT1.html#ctorInfo",
          "type": "method"
        },
        "index": {
          "description": "ctorInfo gives constructor information f.e its name for the th constructor The first argument is dummy argument and can be undefined",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "ctorInfo",
          "normalized": "a b-\u003eInt-\u003eCtorInfo",
          "package": "one-liner",
          "partial": "Info",
          "signature": "t a-\u003eInt-\u003eCtorInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:ctorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "getExtract",
          "package": "one-liner",
          "signature": "forall x.  f x -\u003e x",
          "source": "src/Generics-OneLiner-ADT1.html#Extract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "getExtract",
          "normalized": "a b c d-\u003ed",
          "package": "one-liner",
          "partial": "Extract",
          "signature": "forall x. f x-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:getExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "getNat",
          "package": "one-liner",
          "signature": "forall x.  f x -\u003e g x",
          "source": "src/Generics-OneLiner-ADT1.html#%3A~%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "getNat",
          "normalized": "a b c d-\u003ee d",
          "package": "one-liner",
          "partial": "Nat",
          "signature": "forall x. f x-\u003eg x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:getNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e applicative functor, which collects monoid values \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.OneLiner.ADT1",
          "name": "mbuilds",
          "package": "one-liner",
          "signature": "FieldInfo (t :~\u003e s) -\u003e m) -\u003e [m]",
          "source": "src/Generics-OneLiner-ADT1.html#mbuilds",
          "type": "function"
        },
        "index": {
          "description": "buildsA specialized to the Constant applicative functor which collects monoid values",
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "mbuilds",
          "normalized": "FieldInfo(a b)-\u003ec)-\u003e[c]",
          "package": "one-liner",
          "signature": "FieldInfo(t s)-\u003em)-\u003e[m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:mbuilds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.ADT1",
          "name": "param",
          "package": "one-liner",
          "signature": "(forall a.  t a -\u003e a) -\u003e FieldInfo (Extract t)",
          "source": "src/Generics-OneLiner-ADT1.html#param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner ADT1",
          "module": "Generics.OneLiner.ADT1",
          "name": "param",
          "normalized": "(a b c d-\u003ed)-\u003eFieldInfo(Extract c)",
          "package": "one-liner",
          "signature": "(forall a. t a-\u003ea)-\u003eFieldInfo(Extract t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "Functions",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Functions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "Functions",
          "package": "one-liner",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "compareADT",
          "package": "one-liner",
          "signature": "t -\u003e t -\u003e Ordering",
          "source": "src/Generics-OneLiner-Functions.html#compareADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "compareADT",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "t-\u003et-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:compareADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "eqADT",
          "package": "one-liner",
          "signature": "t -\u003e t -\u003e Bool",
          "source": "src/Generics-OneLiner-Functions.html#eqADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "eqADT",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "t-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:eqADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "fromIntegerADT",
          "package": "one-liner",
          "signature": "Integer -\u003e t",
          "source": "src/Generics-OneLiner-Functions.html#fromIntegerADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "fromIntegerADT",
          "normalized": "Integer-\u003ea",
          "package": "one-liner",
          "partial": "Integer ADT",
          "signature": "Integer-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:fromIntegerADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "mappendADT",
          "package": "one-liner",
          "signature": "t -\u003e t -\u003e t",
          "source": "src/Generics-OneLiner-Functions.html#mappendADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "mappendADT",
          "normalized": "a-\u003ea-\u003ea",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:mappendADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "maxBoundADT",
          "package": "one-liner",
          "signature": "t",
          "source": "src/Generics-OneLiner-Functions.html#maxBoundADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "maxBoundADT",
          "package": "one-liner",
          "partial": "Bound ADT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:maxBoundADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "memptyADT",
          "package": "one-liner",
          "signature": "t",
          "source": "src/Generics-OneLiner-Functions.html#memptyADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "memptyADT",
          "package": "one-liner",
          "partial": "ADT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:memptyADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "minBoundADT",
          "package": "one-liner",
          "signature": "t",
          "source": "src/Generics-OneLiner-Functions.html#minBoundADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "minBoundADT",
          "package": "one-liner",
          "partial": "Bound ADT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:minBoundADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "readPrecADT",
          "package": "one-liner",
          "signature": "ReadPrec t",
          "source": "src/Generics-OneLiner-Functions.html#readPrecADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "readPrecADT",
          "package": "one-liner",
          "partial": "Prec ADT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:readPrecADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions",
          "name": "showsPrecADT",
          "package": "one-liner",
          "signature": "Int -\u003e t -\u003e ShowS",
          "source": "src/Generics-OneLiner-Functions.html#showsPrecADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions",
          "module": "Generics.OneLiner.Functions",
          "name": "showsPrecADT",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "one-liner",
          "partial": "Prec ADT",
          "signature": "Int-\u003et-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:showsPrecADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "Functions1",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Functions1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "Functions1",
          "package": "one-liner",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "apADT",
          "package": "one-liner",
          "signature": "t (a -\u003e b) -\u003e t a -\u003e t b",
          "source": "src/Generics-OneLiner-Functions1.html#apADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "apADT",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "t(a-\u003eb)-\u003et a-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:apADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "bindADT",
          "package": "one-liner",
          "signature": "t a -\u003e (a -\u003e t b) -\u003e t b",
          "source": "src/Generics-OneLiner-Functions1.html#bindADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "bindADT",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "t a-\u003e(a-\u003et b)-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:bindADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "fmapADT",
          "package": "one-liner",
          "signature": "(a -\u003e b) -\u003e t a -\u003e t b",
          "source": "src/Generics-OneLiner-Functions1.html#fmapADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "fmapADT",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "(a-\u003eb)-\u003et a-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:fmapADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "foldMapADT",
          "package": "one-liner",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "source": "src/Generics-OneLiner-Functions1.html#foldMapADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "foldMapADT",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "one-liner",
          "partial": "Map ADT",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:foldMapADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "mfixADT",
          "package": "one-liner",
          "signature": "(a -\u003e t a) -\u003e t a",
          "source": "src/Generics-OneLiner-Functions1.html#mfixADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "mfixADT",
          "normalized": "(a-\u003eb a)-\u003eb a",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "(a-\u003et a)-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:mfixADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "pureADT",
          "package": "one-liner",
          "signature": "a -\u003e t a",
          "source": "src/Generics-OneLiner-Functions1.html#pureADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "pureADT",
          "normalized": "a-\u003eb a",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "a-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:pureADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Functions1",
          "name": "traverseADT",
          "package": "one-liner",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Generics-OneLiner-Functions1.html#traverseADT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Functions1",
          "module": "Generics.OneLiner.Functions1",
          "name": "traverseADT",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "one-liner",
          "partial": "ADT",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:traverseADT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "Info",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Info.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "Info",
          "package": "one-liner",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "Associativity",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Info.html#Associativity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "Associativity",
          "package": "one-liner",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "CtorInfo",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Info.html#CtorInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "CtorInfo",
          "package": "one-liner",
          "partial": "Ctor Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:CtorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "FieldInfo",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Info.html#FieldInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "FieldInfo",
          "package": "one-liner",
          "partial": "Field Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:FieldInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "Fixity",
          "package": "one-liner",
          "source": "src/Generics-OneLiner-Info.html#Fixity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "Fixity",
          "package": "one-liner",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "CtorInfo",
          "package": "one-liner",
          "signature": "CtorInfo",
          "source": "src/Generics-OneLiner-Info.html#CtorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "CtorInfo",
          "package": "one-liner",
          "partial": "Ctor Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:CtorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "FieldInfo",
          "package": "one-liner",
          "signature": "FieldInfo",
          "source": "src/Generics-OneLiner-Info.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "FieldInfo",
          "package": "one-liner",
          "partial": "Field Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:FieldInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "Infix",
          "package": "one-liner",
          "signature": "Infix Associativity Int",
          "source": "src/Generics-OneLiner-Info.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "Infix",
          "package": "one-liner",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "LeftAssociative",
          "package": "one-liner",
          "signature": "LeftAssociative",
          "source": "src/Generics-OneLiner-Info.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "LeftAssociative",
          "package": "one-liner",
          "partial": "Left Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:LeftAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "NotAssociative",
          "package": "one-liner",
          "signature": "NotAssociative",
          "source": "src/Generics-OneLiner-Info.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "NotAssociative",
          "package": "one-liner",
          "partial": "Not Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:NotAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "Prefix",
          "package": "one-liner",
          "signature": "Prefix",
          "source": "src/Generics-OneLiner-Info.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "Prefix",
          "package": "one-liner",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "RightAssociative",
          "package": "one-liner",
          "signature": "RightAssociative",
          "source": "src/Generics-OneLiner-Info.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "RightAssociative",
          "package": "one-liner",
          "partial": "Right Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:RightAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "SelectorInfo",
          "package": "one-liner",
          "signature": "SelectorInfo",
          "source": "src/Generics-OneLiner-Info.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "SelectorInfo",
          "package": "one-liner",
          "partial": "Selector Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:SelectorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "ctor",
          "package": "one-liner",
          "signature": "String -\u003e CtorInfo",
          "source": "src/Generics-OneLiner-Info.html#ctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "ctor",
          "normalized": "String-\u003eCtorInfo",
          "package": "one-liner",
          "signature": "String-\u003eCtorInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:ctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "ctorName",
          "package": "one-liner",
          "signature": "String",
          "source": "src/Generics-OneLiner-Info.html#CtorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "ctorName",
          "package": "one-liner",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:ctorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "fixity",
          "package": "one-liner",
          "signature": "Fixity",
          "source": "src/Generics-OneLiner-Info.html#CtorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "fixity",
          "package": "one-liner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "isRecord",
          "package": "one-liner",
          "signature": "Bool",
          "source": "src/Generics-OneLiner-Info.html#CtorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "isRecord",
          "package": "one-liner",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:isRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "project",
          "package": "one-liner",
          "signature": "p",
          "source": "src/Generics-OneLiner-Info.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "project",
          "package": "one-liner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.OneLiner.Info",
          "name": "selectorName",
          "package": "one-liner",
          "signature": "String",
          "source": "src/Generics-OneLiner-Info.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics OneLiner Info",
          "module": "Generics.OneLiner.Info",
          "name": "selectorName",
          "package": "one-liner",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:selectorName"
      }
    }
  ]
]