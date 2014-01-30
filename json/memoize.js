[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA function memoization library.\n\u003c/p\u003e\u003cp\u003eThis includes a class for memoizable argument types and a Template\n  Haskell expander for deriving instances of the class.\n\u003c/p\u003e\u003cp\u003eNote that most memoization in this style relies on assumptions about\n  the implementation of non-strictness (as laziness) that are not\n  guaranteed by the semantics. However, it appears to work.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "module",
        "fct-source": "src/Data-Function-Memoize.html",
        "fct-type": "module",
        "title": "Memoize"
      },
      "index": {
        "description": "function memoization library This includes class for memoizable argument types and Template Haskell expander for deriving instances of the class Note that most memoization in this style relies on assumptions about the implementation of non-strictness as laziness that are not guaranteed by the semantics However it appears to work",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "Memoize",
        "normalized": "",
        "package": "memoize",
        "partial": "Memoize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#t:Memoizable",
      "description": {
        "fct-descr": "\u003cp\u003eA memoization class.  An instance \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e T\u003c/code\u003e for some\n   type \u003ccode\u003eT\u003c/code\u003e means that that \u003ccode\u003e\u003ca\u003ememoize\u003c/a\u003e\u003c/code\u003e method can memoize for\n   parameters of type \u003ccode\u003eT\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "class",
        "fct-source": "src/Data-Function-Memoize-Class.html#Memoizable",
        "fct-type": "class",
        "title": "Memoizable"
      },
      "index": {
        "description": "memoization class An instance Memoizable for some type means that that memoize method can memoize for parameters of type",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "Memoizable",
        "normalized": "",
        "package": "memoize",
        "partial": "Memoizable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:deriveMemoizable",
      "description": {
        "fct-descr": "\u003cp\u003eTo derive \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e instances for the given data types.\n In the simplest usage, to derive \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e for an algebraic\n datatype named \u003ccode\u003eT\u003c/code\u003e, write:\n\u003c/p\u003e\u003cpre\u003e\n   deriveMemoizable ''T\n\u003c/pre\u003e\u003cp\u003eThis assumes that all the type parameters of \u003ccode\u003eT\u003c/code\u003e that are not\n annotated with a kind other than \u003ccode\u003e*\u003c/code\u003e should be listed as requiring\n \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e instances in the instance context.  For example, given\n a data type declared as\n\u003c/p\u003e\u003cpre\u003e\n   data T a (b :: * -\u003e *) c = ...\n\u003c/pre\u003e\u003cp\u003ethe generated instance will look like\n\u003c/p\u003e\u003cpre\u003e\n   instance (\u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e c) =\u003e\n            \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e (T a b c) where ...\n\u003c/pre\u003e\u003cp\u003eFor more precise control over the context, use\n \u003ccode\u003e\u003ca\u003ederiveMemoizableParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eN.B.: The \u003ccode\u003eTemplateHaskell\u003c/code\u003e language extension must be enabled to use\n this function.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Function-Memoize-TH.html#deriveMemoizable",
        "fct-type": "function",
        "title": "deriveMemoizable"
      },
      "index": {
        "description": "To derive Memoizable instances for the given data types In the simplest usage to derive Memoizable for an algebraic datatype named write deriveMemoizable This assumes that all the type parameters of that are not annotated with kind other than should be listed as requiring Memoizable instances in the instance context For example given data type declared as data the generated instance will look like instance Memoizable Memoizable Memoizable where For more precise control over the context use deriveMemoizableParams N.B The TemplateHaskell language extension must be enabled to use this function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "deriveMemoizable",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "memoize",
        "partial": "Memoizable",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:deriveMemoizableParams",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ederiveMemoizable\u003c/a\u003e\u003c/code\u003e but takes a second argument, which is a list\n of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es to specify which type parameters of the type should be\n mentioned in the context.  For example, given the same definition for\n \u003ccode\u003eT\u003c/code\u003e as above, we can write\n\u003c/p\u003e\u003cpre\u003e\n    deriveMemoizableParams ''T [3]\n\u003c/pre\u003e\u003cp\u003eto leave the first parameter of \u003ccode\u003eT\u003c/code\u003e out of the context and show\n only the third, yielding the instance\n\u003c/p\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e c =\u003e \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e (T a b c) where ...\n\u003c/pre\u003e\u003cp\u003eN.B.: The \u003ccode\u003eTemplateHaskell\u003c/code\u003e language extension must be enabled to use\n this function.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "Name -\u003e [Int] -\u003e Q [Dec]",
        "fct-source": "src/Data-Function-Memoize-TH.html#deriveMemoizableParams",
        "fct-type": "function",
        "title": "deriveMemoizableParams"
      },
      "index": {
        "description": "Like deriveMemoizable but takes second argument which is list of Int to specify which type parameters of the type should be mentioned in the context For example given the same definition for as above we can write deriveMemoizableParams to leave the first parameter of out of the context and show only the third yielding the instance instance Memoizable Memoizable where N.B The TemplateHaskell language extension must be enabled to use this function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "deriveMemoizableParams",
        "normalized": "Name-\u003e[Int]-\u003eQ[Dec]",
        "package": "memoize",
        "partial": "Memoizable Params",
        "signature": "Name-\u003e[Int]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:deriveMemoize",
      "description": {
        "fct-descr": "\u003cp\u003eIn cases where neither \u003ccode\u003e\u003ca\u003ederiveMemoizable\u003c/a\u003e\u003c/code\u003e nor\n \u003ccode\u003e\u003ca\u003ederiveMemoizableParams\u003c/a\u003e\u003c/code\u003e can figure out the right context for an\n instance declaration, one can declare the instance manually and use\n this function to derive the method body for \u003ccode\u003e\u003ca\u003ememoize\u003c/a\u003e\u003c/code\u003e. For example,\n suppose that a data type \u003ccode\u003eT\u003c/code\u003e is defined as:\n\u003c/p\u003e\u003cpre\u003e\n   data T a b = T (a -\u003e Bool) b\n\u003c/pre\u003e\u003cp\u003eFor \u003ccode\u003eT a b\u003c/code\u003e to be memoizable, \u003ccode\u003ea -\u003e Bool\u003c/code\u003e must be, and based on the\n instance for '(-\u003e)', this means that \u003ccode\u003ea\u003c/code\u003e must satisfy\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e, so \u003ccode\u003e\u003ca\u003ederiveMemoizable\u003c/a\u003e\u003c/code\u003e cannot build the right\n context for the \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e instance.  Instead, one can write:\n\u003c/p\u003e\u003cpre\u003e\n   instance (\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e b) =\u003e\n            \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e (T a b) where\n     memoize = $(deriveMemoize ''T)\n\u003c/pre\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "Name -\u003e ExpQ",
        "fct-source": "src/Data-Function-Memoize-TH.html#deriveMemoize",
        "fct-type": "function",
        "title": "deriveMemoize"
      },
      "index": {
        "description": "In cases where neither deriveMemoizable nor deriveMemoizableParams can figure out the right context for an instance declaration one can declare the instance manually and use this function to derive the method body for memoize For example suppose that data type is defined as data Bool For to be memoizable Bool must be and based on the instance for this means that must satisfy Bounded and Enum so deriveMemoizable cannot build the right context for the Memoizable instance Instead one can write instance Enum Bounded Memoizable Memoizable where memoize deriveMemoize",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "deriveMemoize",
        "normalized": "Name-\u003eExpQ",
        "package": "memoize",
        "partial": "Memoize",
        "signature": "Name-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix",
      "description": {
        "fct-descr": "\u003cp\u003eMemoizes the least fixed point of a function. This is like\n \u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e, but it passes the fixed function a memoized\n version of itself, so this memoizes using all recursive calls as well.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e v) -\u003e a -\u003e v) -\u003e a -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix",
        "fct-type": "function",
        "title": "memoFix"
      },
      "index": {
        "description": "Memoizes the least fixed point of function This is like fix but it passes the fixed function memoized version of itself so this memoizes using all recursive calls as well",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix",
        "normalized": "((a-\u003eb)-\u003ea-\u003eb)-\u003ea-\u003eb",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003ev)-\u003ea-\u003ev)-\u003ea-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix2",
      "description": {
        "fct-descr": "\u003cp\u003eTwo argument version of \u003ccode\u003e\u003ca\u003ememoFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e b -\u003e v) -\u003e a -\u003e b -\u003e v) -\u003e a -\u003e b -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix2",
        "fct-type": "function",
        "title": "memoFix2"
      },
      "index": {
        "description": "Two argument version of memoFix",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix2",
        "normalized": "((a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003eb-\u003ev)-\u003ea-\u003eb-\u003ev)-\u003ea-\u003eb-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix3",
      "description": {
        "fct-descr": "\u003cp\u003eThree argument version of \u003ccode\u003e\u003ca\u003ememoFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e b -\u003e c -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix3",
        "fct-type": "function",
        "title": "memoFix3"
      },
      "index": {
        "description": "Three argument version of memoFix",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix3",
        "normalized": "((a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003eb-\u003ec-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix4",
      "description": {
        "fct-descr": "\u003cp\u003eFour argument version of \u003ccode\u003e\u003ca\u003ememoFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e b -\u003e c -\u003e d -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix4",
        "fct-type": "function",
        "title": "memoFix4"
      },
      "index": {
        "description": "Four argument version of memoFix",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix4",
        "normalized": "((a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003eb-\u003ec-\u003ed-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix5",
      "description": {
        "fct-descr": "\u003cp\u003eFive argument version of \u003ccode\u003e\u003ca\u003ememoFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix5",
        "fct-type": "function",
        "title": "memoFix5"
      },
      "index": {
        "description": "Five argument version of memoFix",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix5",
        "normalized": "((a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix6",
      "description": {
        "fct-descr": "\u003cp\u003eSix argument version of \u003ccode\u003e\u003ca\u003ememoFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix6",
        "fct-type": "function",
        "title": "memoFix6"
      },
      "index": {
        "description": "Six argument version of memoFix",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix6",
        "normalized": "((a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoFix7",
      "description": {
        "fct-descr": "\u003cp\u003eSeven argument version of \u003ccode\u003e\u003ca\u003ememoFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "((a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoFix7",
        "fct-type": "function",
        "title": "memoFix7"
      },
      "index": {
        "description": "Seven argument version of memoFix",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoFix7",
        "normalized": "((a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh",
        "package": "memoize",
        "partial": "Fix",
        "signature": "((a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize",
      "description": {
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e v) -\u003e a -\u003e v",
        "fct-source": "src/Data-Function-Memoize-Class.html#memoize",
        "fct-type": "method",
        "title": "memoize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003ev)-\u003ea-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize2",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a two argument function\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b -\u003e v) -\u003e a -\u003e b -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoize2",
        "fct-type": "function",
        "title": "memoize2"
      },
      "index": {
        "description": "Memoize two argument function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003eb-\u003ev)-\u003ea-\u003eb-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize3",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a three argument function\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoize3",
        "fct-type": "function",
        "title": "memoize3"
      },
      "index": {
        "description": "Memoize three argument function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize4",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a four argument function\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoize4",
        "fct-type": "function",
        "title": "memoize4"
      },
      "index": {
        "description": "Memoize four argument function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize5",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a five argument function\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoize5",
        "fct-type": "function",
        "title": "memoize5"
      },
      "index": {
        "description": "Memoize five argument function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize6",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a six argument function\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoize6",
        "fct-type": "function",
        "title": "memoize6"
      },
      "index": {
        "description": "Memoize six argument function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoize7",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a seven argument function\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e v) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoize7",
        "fct-type": "function",
        "title": "memoize7"
      },
      "index": {
        "description": "Memoize seven argument function",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoize7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh",
        "package": "memoize",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003ev)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:memoizeFinite",
      "description": {
        "fct-descr": "\u003cp\u003eCan be used to memoize over any \u003ca\u003efinite\u003c/a\u003e type satisfying\n \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.  This builds a binary search tree, treating\n the memoized type as isomorphic to a range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, so it will be\n only as efficient as \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used to make instances for finite types. For example, the\n instances for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e are declared as:\n\u003c/p\u003e\u003cpre\u003e\n   instance Memoizable Int where memoize = memoizeFinite\n   instance Memoizable Char where memoize = memoizeFinite\n\u003c/pre\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e v) -\u003e a -\u003e v",
        "fct-source": "src/Data-Function-Memoize.html#memoizeFinite",
        "fct-type": "function",
        "title": "memoizeFinite"
      },
      "index": {
        "description": "Can be used to memoize over any finite type satisfying Enum and Bounded This builds binary search tree treating the memoized type as isomorphic to range of Int so it will be only as efficient as toEnum fromEnum succ and pred This can be used to make instances for finite types For example the instances for Int and Char are declared as instance Memoizable Int where memoize memoizeFinite instance Memoizable Char where memoize memoizeFinite",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "memoizeFinite",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "memoize",
        "partial": "Finite",
        "signature": "(a-\u003ev)-\u003ea-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/memoize/docs/Data-Function-Memoize.html#v:traceMemoize",
      "description": {
        "fct-descr": "\u003cp\u003eGive a one-argument function whose argument satisfies \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e,\n   this memoizes the function such that the argument is shown (using\n   \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e) only when the function has to be applied, as\n   opposed to when the answer is available in the memo cache.\n\u003c/p\u003e",
        "fct-module": "Data.Function.Memoize",
        "fct-package": "memoize",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Function-Memoize.html#traceMemoize",
        "fct-type": "function",
        "title": "traceMemoize"
      },
      "index": {
        "description": "Give one-argument function whose argument satisfies Show this memoizes the function such that the argument is shown using trace only when the function has to be applied as opposed to when the answer is available in the memo cache",
        "hierarchy": "Data Function Memoize",
        "module": "Data.Function.Memoize",
        "name": "traceMemoize",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "memoize",
        "partial": "Memoize",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  }
]