[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for writing generic functions on algebraic data types \n of kind \u003ccode\u003e*\u003c/code\u003e. These data types must be an instance of the \u003ccode\u003e\u003ca\u003eADT\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eHere's an example how to write such an instance for this data type:\n\u003c/p\u003e\u003cpre\u003e\n data T a = A Int a | B a (T a)\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eADT\u003c/a\u003e\u003c/code\u003e (T a) where\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e A{} = 0\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e B{} = 1\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 0 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"A\"\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 1 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"B\"\n   type \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e (T a) c = (c Int, c a, c (T a))\n   \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e sub rec = \n     [ A \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(A i _) -\u003e i)) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(A _ a) -\u003e a))\n     , B \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(B a _) -\u003e a)) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e rec (\u003ccode\u003e\u003ca\u003eFieldInfo\u003c/a\u003e\u003c/code\u003e (\\(B _ t) -\u003e t))\n     ]\n\u003c/pre\u003e\u003cp\u003eAnd this is how you would write generic equality, using the \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e monoid:\n\u003c/p\u003e\u003cpre\u003e\n eqADT :: (\u003ccode\u003e\u003ca\u003eADT\u003c/a\u003e\u003c/code\u003e t, \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e t \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e) =\u003e t -\u003e t -\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n eqADT s t = \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e s == \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e t \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e \n   \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003embuilds\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e) (\\fld -\u003e \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e $ s \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e fld \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e t \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e fld) `\u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e` s)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "module",
        "fct-source": "src/Generics-OneLiner-ADT.html",
        "fct-type": "module",
        "title": "ADT"
      },
      "index": {
        "description": "This module is for writing generic functions on algebraic data types of kind These data types must be an instance of the ADT type class Here an example how to write such an instance for this data type data Int instance ADT where ctorIndex ctorIndex ctorInfo ctor ctorInfo ctor type Constraints Int buildsRecA For sub rec sub FieldInfo sub FieldInfo sub FieldInfo rec FieldInfo And this is how you would write generic equality using the All monoid eqADT ADT Constraints Eq Bool eqADT ctorIndex ctorIndex getAll mbuilds For For Eq fld All fld fld at",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "ADT",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:ADT",
      "description": {
        "fct-descr": "\u003cp\u003eType class for algebraic data types of kind \u003ccode\u003e*\u003c/code\u003e. Minimal implementation: \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e and either \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e\n if the type \u003ccode\u003et\u003c/code\u003e is not recursive, or \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e if the type \u003ccode\u003et\u003c/code\u003e is recursive.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "class",
        "fct-source": "src/Generics-OneLiner-ADT.html#ADT",
        "fct-type": "class",
        "title": "ADT"
      },
      "index": {
        "description": "Type class for algebraic data types of kind Minimal implementation ctorIndex and either buildsA if the type is not recursive or buildsRecA if the type is recursive",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "ADT",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:ADTRecord",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an instance for this class if the data type has exactly one constructor.\n\u003c/p\u003e\u003cp\u003eThis class has no methods.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "class",
        "fct-source": "src/Generics-OneLiner-ADT.html#ADTRecord",
        "fct-type": "class",
        "title": "ADTRecord"
      },
      "index": {
        "description": "Add an instance for this class if the data type has exactly one constructor This class has no methods",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "ADTRecord",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADTRecord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:Constraint",
      "description": {
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Constraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "Constraint",
        "normalized": "",
        "package": "one-liner",
        "partial": "Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#t:For",
      "description": {
        "fct-descr": "\u003cp\u003eTell the compiler which class we want to use in the traversal. Should be used like this:\n\u003c/p\u003e\u003cpre\u003e (For :: For Show)\n\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003eShow\u003c/code\u003e can be any class.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-source": "src/Generics-OneLiner-ADT.html#For",
        "fct-type": "data",
        "title": "For"
      },
      "index": {
        "description": "Tell the compiler which class we want to use in the traversal Should be used like this For For Show Where Show can be any class",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "For",
        "normalized": "",
        "package": "one-liner",
        "partial": "For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eGet the subcomponent by using the projector from the field information.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "t -\u003e FieldInfo (t -\u003e s) -\u003e s",
        "fct-source": "src/Generics-OneLiner-ADT.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Get the subcomponent by using the projector from the field information",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "(!) !",
        "normalized": "a-\u003eFieldInfo(a-\u003eb)-\u003eb",
        "package": "one-liner",
        "partial": "",
        "signature": "t-\u003eFieldInfo(t-\u003es)-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:For",
      "description": {
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "For",
        "fct-source": "src/Generics-OneLiner-ADT.html#For",
        "fct-type": "function",
        "title": "For"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "For",
        "normalized": "",
        "package": "one-liner",
        "partial": "For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value from the result of one of the \u003ccode\u003ebuilds\u003c/code\u003e functions that matches the constructor of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "[a] -\u003e t -\u003e a",
        "fct-source": "src/Generics-OneLiner-ADT.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "Get the value from the result of one of the builds functions that matches the constructor of",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "at",
        "normalized": "[a]-\u003eb-\u003ea",
        "package": "one-liner",
        "partial": "",
        "signature": "[a]-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuilds\u003c/a\u003e\u003c/code\u003e for data types with exactly one constructor\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo (t -\u003e s) -\u003e s) -\u003e t",
        "fct-source": "src/Generics-OneLiner-ADT.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "builds for data types with exactly one constructor",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "build",
        "normalized": "FieldInfo(a-\u003eb)-\u003eb)-\u003ea",
        "package": "one-liner",
        "partial": "",
        "signature": "FieldInfo(t-\u003es)-\u003es)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:builds",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e applicative functor.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo (t -\u003e s) -\u003e s) -\u003e [t]",
        "fct-source": "src/Generics-OneLiner-ADT.html#builds",
        "fct-type": "function",
        "title": "builds"
      },
      "index": {
        "description": "buildsA specialized to the Identity applicative functor",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "builds",
        "normalized": "FieldInfo(a-\u003eb)-\u003eb)-\u003e[a]",
        "package": "one-liner",
        "partial": "",
        "signature": "FieldInfo(t-\u003es)-\u003es)-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:buildsA",
      "description": {
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "buildsA",
        "fct-source": "src/Generics-OneLiner-ADT.html#buildsA",
        "fct-type": "method",
        "title": "buildsA"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "buildsA",
        "normalized": "",
        "package": "one-liner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:buildsRecA",
      "description": {
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "buildsRecA",
        "fct-source": "src/Generics-OneLiner-ADT.html#buildsRecA",
        "fct-type": "method",
        "title": "buildsRecA"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "buildsRecA",
        "normalized": "",
        "package": "one-liner",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:ctorIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGives the index of the constructor of the given value in the list returned by \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "t -\u003e Int",
        "fct-source": "src/Generics-OneLiner-ADT.html#ctorIndex",
        "fct-type": "method",
        "title": "ctorIndex"
      },
      "index": {
        "description": "Gives the index of the constructor of the given value in the list returned by buildsA and buildsRecA",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "ctorIndex",
        "normalized": "a-\u003eInt",
        "package": "one-liner",
        "partial": "Index",
        "signature": "t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:ctorInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ectorInfo n\u003c/code\u003e gives constructor information, f.e. its name, for the \u003ccode\u003en\u003c/code\u003eth constructor.\n   The first argument is a dummy argument and can be \u003ccode\u003e(undefined :: t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "t -\u003e Int -\u003e CtorInfo",
        "fct-source": "src/Generics-OneLiner-ADT.html#ctorInfo",
        "fct-type": "method",
        "title": "ctorInfo"
      },
      "index": {
        "description": "ctorInfo gives constructor information f.e its name for the th constructor The first argument is dummy argument and can be undefined",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "ctorInfo",
        "normalized": "a-\u003eInt-\u003eCtorInfo",
        "package": "one-liner",
        "partial": "Info",
        "signature": "t-\u003eInt-\u003eCtorInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:gfoldMap",
      "description": {
        "fct-descr": "\u003cp\u003eFold a value, by mapping each subcomponent to a monoid value and collecting those. \n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "s -\u003e m) -\u003e t -\u003e m",
        "fct-source": "src/Generics-OneLiner-ADT.html#gfoldMap",
        "fct-type": "function",
        "title": "gfoldMap"
      },
      "index": {
        "description": "Fold value by mapping each subcomponent to monoid value and collecting those",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "gfoldMap",
        "normalized": "a-\u003eb)-\u003ec-\u003eb",
        "package": "one-liner",
        "partial": "Map",
        "signature": "s-\u003em)-\u003et-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:gmap",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a value by transforming each subcomponent.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "s -\u003e s) -\u003e t -\u003e t",
        "fct-source": "src/Generics-OneLiner-ADT.html#gmap",
        "fct-type": "function",
        "title": "gmap"
      },
      "index": {
        "description": "Transform value by transforming each subcomponent",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "gmap",
        "normalized": "a-\u003ea)-\u003eb-\u003eb",
        "package": "one-liner",
        "partial": "",
        "signature": "s-\u003es)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:gtraverse",
      "description": {
        "fct-descr": "\u003cp\u003eApplicative traversal given a way to traverse each subcomponent.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "s -\u003e f s) -\u003e t -\u003e f t",
        "fct-source": "src/Generics-OneLiner-ADT.html#gtraverse",
        "fct-type": "function",
        "title": "gtraverse"
      },
      "index": {
        "description": "Applicative traversal given way to traverse each subcomponent",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "gtraverse",
        "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
        "package": "one-liner",
        "partial": "",
        "signature": "s-\u003ef s)-\u003et-\u003ef t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:mbuilds",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e applicative functor, which collects monoid values \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo (t -\u003e s) -\u003e m) -\u003e [m]",
        "fct-source": "src/Generics-OneLiner-ADT.html#mbuilds",
        "fct-type": "function",
        "title": "mbuilds"
      },
      "index": {
        "description": "buildsA specialized to the Constant applicative functor which collects monoid values",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "mbuilds",
        "normalized": "FieldInfo(a-\u003eb)-\u003ec)-\u003e[c]",
        "package": "one-liner",
        "partial": "",
        "signature": "FieldInfo(t-\u003es)-\u003em)-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:op0",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a 0-ary operation by applying the operation to every subcomponent.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "s) -\u003e t",
        "fct-source": "src/Generics-OneLiner-ADT.html#op0",
        "fct-type": "function",
        "title": "op0"
      },
      "index": {
        "description": "Derive ary operation by applying the operation to every subcomponent",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "op0",
        "normalized": "a)-\u003eb",
        "package": "one-liner",
        "partial": "",
        "signature": "s)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:op1",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a unary operation by applying the operation to every subcomponent.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "s -\u003e s) -\u003e t -\u003e t",
        "fct-source": "src/Generics-OneLiner-ADT.html#op1",
        "fct-type": "function",
        "title": "op1"
      },
      "index": {
        "description": "Derive unary operation by applying the operation to every subcomponent",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "op1",
        "normalized": "a-\u003ea)-\u003eb-\u003eb",
        "package": "one-liner",
        "partial": "",
        "signature": "s-\u003es)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT.html#v:op2",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a binary operation by applying the operation to every subcomponent.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT",
        "fct-package": "one-liner",
        "fct-signature": "s -\u003e s -\u003e s) -\u003e t -\u003e t -\u003e t",
        "fct-source": "src/Generics-OneLiner-ADT.html#op2",
        "fct-type": "function",
        "title": "op2"
      },
      "index": {
        "description": "Derive binary operation by applying the operation to every subcomponent",
        "hierarchy": "Generics OneLiner ADT",
        "module": "Generics.OneLiner.ADT",
        "name": "op2",
        "normalized": "a-\u003ea-\u003ea)-\u003eb-\u003eb-\u003eb",
        "package": "one-liner",
        "partial": "",
        "signature": "s-\u003es-\u003es)-\u003et-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for writing generic functions on algebraic data types \n of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e. \n These data types must be an instance of the \u003ccode\u003e\u003ca\u003eADT1\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eHere's an example how to write such an instance for this data type:\n\u003c/p\u003e\u003cpre\u003e\n data T a = A [a] | B a (T a)\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eADT1\u003c/a\u003e\u003c/code\u003e T where\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e A{} = 0\n   \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e B{} = 1\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 0 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"A\"\n   \u003ccode\u003e\u003ca\u003ectorInfo\u003c/a\u003e\u003c/code\u003e _ 1 = \u003ccode\u003e\u003ca\u003ector\u003c/a\u003e\u003c/code\u003e \"B\"\n   type \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e T c = (c [], c T)\n   \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFor\u003c/a\u003e\u003c/code\u003e par sub rec = \n     [ A \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e sub (\u003ccode\u003e\u003ca\u003ecomponent\u003c/a\u003e\u003c/code\u003e (\\(A l) -\u003e l)\n     , B \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e par (\u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e (\\(B a _) -\u003e a)) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e rec (\u003ccode\u003e\u003ca\u003ecomponent\u003c/a\u003e\u003c/code\u003e (\\(B _ t) -\u003e t))\n     ]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "module",
        "fct-source": "src/Generics-OneLiner-ADT1.html",
        "fct-type": "module",
        "title": "ADT1"
      },
      "index": {
        "description": "This module is for writing generic functions on algebraic data types of kind These data types must be an instance of the ADT1 type class Here an example how to write such an instance for this data type data instance ADT1 where ctorIndex ctorIndex ctorInfo ctor ctorInfo ctor type Constraints buildsRecA For par sub rec sub component par param rec component",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "ADT1",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t::-126--62-",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "newtype",
        "fct-source": "src/Generics-OneLiner-ADT1.html#%3A~%3E",
        "fct-type": "newtype",
        "title": ":~\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": ":~\u003e",
        "normalized": "",
        "package": "one-liner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:ADT1",
      "description": {
        "fct-descr": "\u003cp\u003eType class for algebraic data types of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e. Minimal implementation: \u003ccode\u003e\u003ca\u003ectorIndex\u003c/a\u003e\u003c/code\u003e and either \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e\n if the type \u003ccode\u003et\u003c/code\u003e is not recursive, or \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e if the type \u003ccode\u003et\u003c/code\u003e is recursive.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "class",
        "fct-source": "src/Generics-OneLiner-ADT1.html#ADT1",
        "fct-type": "class",
        "title": "ADT1"
      },
      "index": {
        "description": "Type class for algebraic data types of kind Minimal implementation ctorIndex and either buildsA if the type is not recursive or buildsRecA if the type is recursive",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "ADT1",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:ADT1Record",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an instance for this class if the data type has exactly one constructor.\n\u003c/p\u003e\u003cp\u003eThis class has no methods.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "class",
        "fct-source": "src/Generics-OneLiner-ADT1.html#ADT1Record",
        "fct-type": "class",
        "title": "ADT1Record"
      },
      "index": {
        "description": "Add an instance for this class if the data type has exactly one constructor This class has no methods",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "ADT1Record",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADT Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:Constraint",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Constraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "Constraint",
        "normalized": "",
        "package": "one-liner",
        "partial": "Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:Extract",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "newtype",
        "fct-source": "src/Generics-OneLiner-ADT1.html#Extract",
        "fct-type": "newtype",
        "title": "Extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "Extract",
        "normalized": "",
        "package": "one-liner",
        "partial": "Extract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#t:For",
      "description": {
        "fct-descr": "\u003cp\u003eTell the compiler which class we want to use in the traversal. Should be used like this:\n\u003c/p\u003e\u003cpre\u003e (For :: For Show)\n\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003eShow\u003c/code\u003e can be any class.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-source": "src/Generics-OneLiner-ADT1.html#For",
        "fct-type": "data",
        "title": "For"
      },
      "index": {
        "description": "Tell the compiler which class we want to use in the traversal Should be used like this For For Show Where Show can be any class",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "For",
        "normalized": "",
        "package": "one-liner",
        "partial": "For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:-33-",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "t a -\u003e FieldInfo (Extract t) -\u003e a",
        "fct-source": "src/Generics-OneLiner-ADT1.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "(!) !",
        "normalized": "a b-\u003eFieldInfo(Extract a)-\u003eb",
        "package": "one-liner",
        "partial": "",
        "signature": "t a-\u003eFieldInfo(Extract t)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:-33--126-",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "t a -\u003e FieldInfo (t :~\u003e s) -\u003e s a",
        "fct-source": "src/Generics-OneLiner-ADT1.html#%21~",
        "fct-type": "function",
        "title": "(!~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "(!~) !~",
        "normalized": "a b-\u003eFieldInfo(a c)-\u003ec b",
        "package": "one-liner",
        "partial": "",
        "signature": "t a-\u003eFieldInfo(t s)-\u003es a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:Extract",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "Extract",
        "fct-source": "src/Generics-OneLiner-ADT1.html#Extract",
        "fct-type": "function",
        "title": "Extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "Extract",
        "normalized": "",
        "package": "one-liner",
        "partial": "Extract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:For",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "For",
        "fct-source": "src/Generics-OneLiner-ADT1.html#For",
        "fct-type": "function",
        "title": "For"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "For",
        "normalized": "",
        "package": "one-liner",
        "partial": "For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:Nat",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "Nat",
        "fct-source": "src/Generics-OneLiner-ADT1.html#%3A~%3E",
        "fct-type": "function",
        "title": "Nat"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "Nat",
        "normalized": "",
        "package": "one-liner",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value from the result of one of the \u003ccode\u003ebuilds\u003c/code\u003e functions that matches the constructor of \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "[a] -\u003e t b -\u003e a",
        "fct-source": "src/Generics-OneLiner-ADT1.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "Get the value from the result of one of the builds functions that matches the constructor of",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "at",
        "normalized": "[a]-\u003eb c-\u003ea",
        "package": "one-liner",
        "partial": "",
        "signature": "[a]-\u003et b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuilds\u003c/a\u003e\u003c/code\u003e for data types with exactly one constructor\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo (t :~\u003e s) -\u003e s b) -\u003e t b",
        "fct-source": "src/Generics-OneLiner-ADT1.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "builds for data types with exactly one constructor",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "build",
        "normalized": "FieldInfo(a b)-\u003eb c)-\u003ea c",
        "package": "one-liner",
        "partial": "",
        "signature": "FieldInfo(t s)-\u003es b)-\u003et b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:builds",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e applicative functor.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo (t :~\u003e s) -\u003e s b) -\u003e [t b]",
        "fct-source": "src/Generics-OneLiner-ADT1.html#builds",
        "fct-type": "function",
        "title": "builds"
      },
      "index": {
        "description": "buildsA specialized to the Identity applicative functor",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "builds",
        "normalized": "FieldInfo(a b)-\u003eb c)-\u003e[a c]",
        "package": "one-liner",
        "partial": "",
        "signature": "FieldInfo(t s)-\u003es b)-\u003e[t b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:buildsA",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "buildsA",
        "fct-source": "src/Generics-OneLiner-ADT1.html#buildsA",
        "fct-type": "method",
        "title": "buildsA"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "buildsA",
        "normalized": "",
        "package": "one-liner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:buildsRecA",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "buildsRecA",
        "fct-source": "src/Generics-OneLiner-ADT1.html#buildsRecA",
        "fct-type": "method",
        "title": "buildsRecA"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "buildsRecA",
        "normalized": "",
        "package": "one-liner",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:component",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "(forall a.  t a -\u003e s a) -\u003e FieldInfo (t :~\u003e s)",
        "fct-source": "src/Generics-OneLiner-ADT1.html#component",
        "fct-type": "function",
        "title": "component"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "component",
        "normalized": "(a b c d-\u003ee d)-\u003eFieldInfo(c e)",
        "package": "one-liner",
        "partial": "",
        "signature": "(forall a. t a-\u003es a)-\u003eFieldInfo(t s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:ctorIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGives the index of the constructor of the given value in the list returned by \u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuildsRecA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "t a -\u003e Int",
        "fct-source": "src/Generics-OneLiner-ADT1.html#ctorIndex",
        "fct-type": "method",
        "title": "ctorIndex"
      },
      "index": {
        "description": "Gives the index of the constructor of the given value in the list returned by buildsA and buildsRecA",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "ctorIndex",
        "normalized": "a b-\u003eInt",
        "package": "one-liner",
        "partial": "Index",
        "signature": "t a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:ctorInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ectorInfo n\u003c/code\u003e gives constructor information, f.e. its name, for the \u003ccode\u003en\u003c/code\u003eth constructor.\n   The first argument is a dummy argument and can be \u003ccode\u003e(undefined :: t a)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "t a -\u003e Int -\u003e CtorInfo",
        "fct-source": "src/Generics-OneLiner-ADT1.html#ctorInfo",
        "fct-type": "method",
        "title": "ctorInfo"
      },
      "index": {
        "description": "ctorInfo gives constructor information f.e its name for the th constructor The first argument is dummy argument and can be undefined",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "ctorInfo",
        "normalized": "a b-\u003eInt-\u003eCtorInfo",
        "package": "one-liner",
        "partial": "Info",
        "signature": "t a-\u003eInt-\u003eCtorInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:getExtract",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "forall x.  f x -\u003e x",
        "fct-source": "src/Generics-OneLiner-ADT1.html#Extract",
        "fct-type": "function",
        "title": "getExtract"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "getExtract",
        "normalized": "a b c d-\u003ed",
        "package": "one-liner",
        "partial": "Extract",
        "signature": "forall x. f x-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:getNat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "forall x.  f x -\u003e g x",
        "fct-source": "src/Generics-OneLiner-ADT1.html#%3A~%3E",
        "fct-type": "function",
        "title": "getNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "getNat",
        "normalized": "a b c d-\u003ee d",
        "package": "one-liner",
        "partial": "Nat",
        "signature": "forall x. f x-\u003eg x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:mbuilds",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildsA\u003c/a\u003e\u003c/code\u003e specialized to the \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e applicative functor, which collects monoid values \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo (t :~\u003e s) -\u003e m) -\u003e [m]",
        "fct-source": "src/Generics-OneLiner-ADT1.html#mbuilds",
        "fct-type": "function",
        "title": "mbuilds"
      },
      "index": {
        "description": "buildsA specialized to the Constant applicative functor which collects monoid values",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "mbuilds",
        "normalized": "FieldInfo(a b)-\u003ec)-\u003e[c]",
        "package": "one-liner",
        "partial": "",
        "signature": "FieldInfo(t s)-\u003em)-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-ADT1.html#v:param",
      "description": {
        "fct-module": "Generics.OneLiner.ADT1",
        "fct-package": "one-liner",
        "fct-signature": "(forall a.  t a -\u003e a) -\u003e FieldInfo (Extract t)",
        "fct-source": "src/Generics-OneLiner-ADT1.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner ADT1",
        "module": "Generics.OneLiner.ADT1",
        "name": "param",
        "normalized": "(a b c d-\u003ed)-\u003eFieldInfo(Extract c)",
        "package": "one-liner",
        "partial": "",
        "signature": "(forall a. t a-\u003ea)-\u003eFieldInfo(Extract t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "module",
        "fct-source": "src/Generics-OneLiner-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "one-liner",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:compareADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "t -\u003e t -\u003e Ordering",
        "fct-source": "src/Generics-OneLiner-Functions.html#compareADT",
        "fct-type": "function",
        "title": "compareADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "compareADT",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "t-\u003et-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:eqADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "t -\u003e t -\u003e Bool",
        "fct-source": "src/Generics-OneLiner-Functions.html#eqADT",
        "fct-type": "function",
        "title": "eqADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "eqADT",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "t-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:fromIntegerADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "Integer -\u003e t",
        "fct-source": "src/Generics-OneLiner-Functions.html#fromIntegerADT",
        "fct-type": "function",
        "title": "fromIntegerADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "fromIntegerADT",
        "normalized": "Integer-\u003ea",
        "package": "one-liner",
        "partial": "Integer ADT",
        "signature": "Integer-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:mappendADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "t -\u003e t -\u003e t",
        "fct-source": "src/Generics-OneLiner-Functions.html#mappendADT",
        "fct-type": "function",
        "title": "mappendADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "mappendADT",
        "normalized": "a-\u003ea-\u003ea",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "t-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:maxBoundADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "t",
        "fct-source": "src/Generics-OneLiner-Functions.html#maxBoundADT",
        "fct-type": "function",
        "title": "maxBoundADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "maxBoundADT",
        "normalized": "",
        "package": "one-liner",
        "partial": "Bound ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:memptyADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "t",
        "fct-source": "src/Generics-OneLiner-Functions.html#memptyADT",
        "fct-type": "function",
        "title": "memptyADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "memptyADT",
        "normalized": "",
        "package": "one-liner",
        "partial": "ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:minBoundADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "t",
        "fct-source": "src/Generics-OneLiner-Functions.html#minBoundADT",
        "fct-type": "function",
        "title": "minBoundADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "minBoundADT",
        "normalized": "",
        "package": "one-liner",
        "partial": "Bound ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:readPrecADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "ReadPrec t",
        "fct-source": "src/Generics-OneLiner-Functions.html#readPrecADT",
        "fct-type": "function",
        "title": "readPrecADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "readPrecADT",
        "normalized": "",
        "package": "one-liner",
        "partial": "Prec ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions.html#v:showsPrecADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions",
        "fct-package": "one-liner",
        "fct-signature": "Int -\u003e t -\u003e ShowS",
        "fct-source": "src/Generics-OneLiner-Functions.html#showsPrecADT",
        "fct-type": "function",
        "title": "showsPrecADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions",
        "module": "Generics.OneLiner.Functions",
        "name": "showsPrecADT",
        "normalized": "Int-\u003ea-\u003eShowS",
        "package": "one-liner",
        "partial": "Prec ADT",
        "signature": "Int-\u003et-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "module",
        "fct-source": "src/Generics-OneLiner-Functions1.html",
        "fct-type": "module",
        "title": "Functions1"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "Functions1",
        "normalized": "",
        "package": "one-liner",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:apADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "t (a -\u003e b) -\u003e t a -\u003e t b",
        "fct-source": "src/Generics-OneLiner-Functions1.html#apADT",
        "fct-type": "function",
        "title": "apADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "apADT",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "t(a-\u003eb)-\u003et a-\u003et b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:bindADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "t a -\u003e (a -\u003e t b) -\u003e t b",
        "fct-source": "src/Generics-OneLiner-Functions1.html#bindADT",
        "fct-type": "function",
        "title": "bindADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "bindADT",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "t a-\u003e(a-\u003et b)-\u003et b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:fmapADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "(a -\u003e b) -\u003e t a -\u003e t b",
        "fct-source": "src/Generics-OneLiner-Functions1.html#fmapADT",
        "fct-type": "function",
        "title": "fmapADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "fmapADT",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "(a-\u003eb)-\u003et a-\u003et b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:foldMapADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "(a -\u003e m) -\u003e t a -\u003e m",
        "fct-source": "src/Generics-OneLiner-Functions1.html#foldMapADT",
        "fct-type": "function",
        "title": "foldMapADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "foldMapADT",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "one-liner",
        "partial": "Map ADT",
        "signature": "(a-\u003em)-\u003et a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:mfixADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "(a -\u003e t a) -\u003e t a",
        "fct-source": "src/Generics-OneLiner-Functions1.html#mfixADT",
        "fct-type": "function",
        "title": "mfixADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "mfixADT",
        "normalized": "(a-\u003eb a)-\u003eb a",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "(a-\u003et a)-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:pureADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "a -\u003e t a",
        "fct-source": "src/Generics-OneLiner-Functions1.html#pureADT",
        "fct-type": "function",
        "title": "pureADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "pureADT",
        "normalized": "a-\u003eb a",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Functions1.html#v:traverseADT",
      "description": {
        "fct-module": "Generics.OneLiner.Functions1",
        "fct-package": "one-liner",
        "fct-signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-source": "src/Generics-OneLiner-Functions1.html#traverseADT",
        "fct-type": "function",
        "title": "traverseADT"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Functions1",
        "module": "Generics.OneLiner.Functions1",
        "name": "traverseADT",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "one-liner",
        "partial": "ADT",
        "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "module",
        "fct-source": "src/Generics-OneLiner-Info.html",
        "fct-type": "module",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "Info",
        "normalized": "",
        "package": "one-liner",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:Associativity",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-source": "src/Generics-OneLiner-Info.html#Associativity",
        "fct-type": "data",
        "title": "Associativity"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "Associativity",
        "normalized": "",
        "package": "one-liner",
        "partial": "Associativity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:CtorInfo",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-source": "src/Generics-OneLiner-Info.html#CtorInfo",
        "fct-type": "data",
        "title": "CtorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "CtorInfo",
        "normalized": "",
        "package": "one-liner",
        "partial": "Ctor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:FieldInfo",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-source": "src/Generics-OneLiner-Info.html#FieldInfo",
        "fct-type": "data",
        "title": "FieldInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "FieldInfo",
        "normalized": "",
        "package": "one-liner",
        "partial": "Field Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#t:Fixity",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "data",
        "fct-source": "src/Generics-OneLiner-Info.html#Fixity",
        "fct-type": "data",
        "title": "Fixity"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "Fixity",
        "normalized": "",
        "package": "one-liner",
        "partial": "Fixity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:CtorInfo",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "CtorInfo",
        "fct-source": "src/Generics-OneLiner-Info.html#CtorInfo",
        "fct-type": "function",
        "title": "CtorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "CtorInfo",
        "normalized": "",
        "package": "one-liner",
        "partial": "Ctor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:FieldInfo",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "FieldInfo",
        "fct-source": "src/Generics-OneLiner-Info.html#FieldInfo",
        "fct-type": "function",
        "title": "FieldInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "FieldInfo",
        "normalized": "",
        "package": "one-liner",
        "partial": "Field Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:Infix",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "Infix Associativity Int",
        "fct-source": "src/Generics-OneLiner-Info.html#Fixity",
        "fct-type": "function",
        "title": "Infix"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "Infix",
        "normalized": "",
        "package": "one-liner",
        "partial": "Infix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:LeftAssociative",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "LeftAssociative",
        "fct-source": "src/Generics-OneLiner-Info.html#Associativity",
        "fct-type": "function",
        "title": "LeftAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "LeftAssociative",
        "normalized": "",
        "package": "one-liner",
        "partial": "Left Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:NotAssociative",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "NotAssociative",
        "fct-source": "src/Generics-OneLiner-Info.html#Associativity",
        "fct-type": "function",
        "title": "NotAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "NotAssociative",
        "normalized": "",
        "package": "one-liner",
        "partial": "Not Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:Prefix",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "Prefix",
        "fct-source": "src/Generics-OneLiner-Info.html#Fixity",
        "fct-type": "function",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "Prefix",
        "normalized": "",
        "package": "one-liner",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:RightAssociative",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "RightAssociative",
        "fct-source": "src/Generics-OneLiner-Info.html#Associativity",
        "fct-type": "function",
        "title": "RightAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "RightAssociative",
        "normalized": "",
        "package": "one-liner",
        "partial": "Right Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:SelectorInfo",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "SelectorInfo",
        "fct-source": "src/Generics-OneLiner-Info.html#FieldInfo",
        "fct-type": "function",
        "title": "SelectorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "SelectorInfo",
        "normalized": "",
        "package": "one-liner",
        "partial": "Selector Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:ctor",
      "description": {
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "String -\u003e CtorInfo",
        "fct-source": "src/Generics-OneLiner-Info.html#ctor",
        "fct-type": "function",
        "title": "ctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "ctor",
        "normalized": "String-\u003eCtorInfo",
        "package": "one-liner",
        "partial": "",
        "signature": "String-\u003eCtorInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:ctorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "String",
        "fct-source": "src/Generics-OneLiner-Info.html#CtorInfo",
        "fct-type": "function",
        "title": "ctorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "ctorName",
        "normalized": "",
        "package": "one-liner",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:fixity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "Fixity",
        "fct-source": "src/Generics-OneLiner-Info.html#CtorInfo",
        "fct-type": "function",
        "title": "fixity"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "fixity",
        "normalized": "",
        "package": "one-liner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:isRecord",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "Bool",
        "fct-source": "src/Generics-OneLiner-Info.html#CtorInfo",
        "fct-type": "function",
        "title": "isRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "isRecord",
        "normalized": "",
        "package": "one-liner",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:project",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "p",
        "fct-source": "src/Generics-OneLiner-Info.html#FieldInfo",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "project",
        "normalized": "",
        "package": "one-liner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/one-liner/docs/Generics-OneLiner-Info.html#v:selectorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Generics.OneLiner.Info",
        "fct-package": "one-liner",
        "fct-signature": "String",
        "fct-source": "src/Generics-OneLiner-Info.html#FieldInfo",
        "fct-type": "function",
        "title": "selectorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics OneLiner Info",
        "module": "Generics.OneLiner.Info",
        "name": "selectorName",
        "normalized": "",
        "package": "one-liner",
        "partial": "Name",
        "signature": ""
      }
    }
  }
]