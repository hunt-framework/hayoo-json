[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA checked value is a value, potentially wrapped in a warning, i.e. a non-fatal exception.\n\u003c/p\u003e\u003cp\u003eWhere the checked value looks like (Right value), the value is within limits\nWhere the checked value looks like (Left (warning, cause, value)), the value is out of limits\n\u003c/p\u003e\u003cp\u003eWarning is (\"warning message\", severity), and cause is also a (Left (warning, cause value)) which allows a \"linked list\" of warnings to be set up\n\u003c/p\u003e\u003cp\u003eRun your code within a \u003ccode\u003e\u003ca\u003eChecked\u003c/a\u003e\u003c/code\u003e monad to benefit from real time checking\n\u003c/p\u003e\u003cp\u003eTo retrofit checking to an existing function myFunc :: MyType1 -\u003e MyType2 -\u003e MyType3:\n\u003c/p\u003e\u003cp\u003e(a) define a type which is a tuple of the parameters to myFunc\n\u003c/p\u003e\u003cpre\u003e\n    type  MyFuncParams = (MyType1, MyType2)\n\u003c/pre\u003e\u003cp\u003e(b) define the test for validity of the parameters expected by myFunc:\n\u003c/p\u003e\u003cpre\u003e\n     instance Checkable MyFuncParams where\n       check params = .. Checked (Right params) -- if OK\n                      .. Checked (Left (pack \"Invalid params to myFunc\", 20), Nothing, params) -- if params are out of whack\n\u003c/pre\u003e\u003cp\u003e(c) define the test for validity of the output type, or any type in your code:\n\u003c/p\u003e\u003cpre\u003e\n     instance \u003ccode\u003e\u003ca\u003eCheckable\u003c/a\u003e\u003c/code\u003e MyType3 where\n       check v = .. Checked (Right v) -- if OK\n                 .. Checked (Left (pack \"Type MyType3 is out of range\", 20), Nothing, v) -- if the value is out of whack for this type\n\u003c/pre\u003e\u003cp\u003e(d) define a wrapper function for myFunction for myFunc which accepts a parameter of type MyFuncParams:\n\u003c/p\u003e\u003cpre\u003e\n     myFunc' :: MyFuncParams -\u003e MyType3\n     myFunc' (a, b) = myFunc a b\n * Looking to automate this step, perhaps with TH *\n\u003c/pre\u003e\u003cp\u003e(e) run your function within the \u003ccode\u003e\u003ca\u003eChecked\u003c/a\u003e\u003c/code\u003e monad, using \u003ccode\u003e\u003ca\u003eapplyWithParamsCheck\u003c/a\u003e\u003c/code\u003e as the function calls, and \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e to check the output values\n\u003c/p\u003e\u003cpre\u003e\n code :: MyType1 -\u003e MyType2 -\u003e Checked MyType4\n code a b = do\n     f \u003c- applyWithCheckedParams myFunc' (a, b)\n     g \u003c- check y\n     h \u003c- applyWithCheckedParams myFunc1' g\n     check h\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "module",
        "fct-source": "src/Data-Checked.html",
        "fct-type": "module",
        "title": "Checked"
      },
      "index": {
        "description": "checked value is value potentially wrapped in warning i.e non-fatal exception Where the checked value looks like Right value the value is within limits Where the checked value looks like Left warning cause value the value is out of limits Warning is warning message severity and cause is also Left warning cause value which allows linked list of warnings to be set up Run your code within Checked monad to benefit from real time checking To retrofit checking to an existing function myFunc MyType1 MyType2 MyType3 define type which is tuple of the parameters to myFunc type MyFuncParams MyType1 MyType2 define the test for validity of the parameters expected by myFunc instance Checkable MyFuncParams where check params Checked Right params if OK Checked Left pack Invalid params to myFunc Nothing params if params are out of whack define the test for validity of the output type or any type in your code instance Checkable MyType3 where check Checked Right if OK Checked Left pack Type MyType3 is out of range Nothing if the value is out of whack for this type define wrapper function for myFunction for myFunc which accepts parameter of type MyFuncParams myFunc MyFuncParams MyType3 myFunc myFunc Looking to automate this step perhaps with TH run your function within the Checked monad using applyWithParamsCheck as the function calls and check to check the output values code MyType1 MyType2 Checked MyType4 code do applyWithCheckedParams myFunc check applyWithCheckedParams myFunc1 check",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "Checked",
        "normalized": "",
        "package": "Checked",
        "partial": "Checked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:Checkable",
      "description": {
        "fct-descr": "\u003cp\u003eThis is implemented for types whose values will be checked\n\u003c/p\u003e",
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "class",
        "fct-source": "src/Data-Checked.html#Checkable",
        "fct-type": "class",
        "title": "Checkable"
      },
      "index": {
        "description": "This is implemented for types whose values will be checked",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "Checkable",
        "normalized": "",
        "package": "Checked",
        "partial": "Checkable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:Checked",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper type indicating that the value is or is not within limits\n\u003c/p\u003e",
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "data",
        "fct-source": "src/Data-Checked.html#Checked",
        "fct-type": "data",
        "title": "Checked"
      },
      "index": {
        "description": "wrapper type indicating that the value is or is not within limits",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "Checked",
        "normalized": "",
        "package": "Checked",
        "partial": "Checked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:SumTestFuncParams",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "type",
        "fct-source": "src/Data-Checked.html#SumTestFuncParams",
        "fct-type": "type",
        "title": "SumTestFuncParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "SumTestFuncParams",
        "normalized": "",
        "package": "Checked",
        "partial": "Sum Test Func Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:UnderOneHundred",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "data",
        "fct-source": "src/Data-Checked.html#UnderOneHundred",
        "fct-type": "data",
        "title": "UnderOneHundred"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "UnderOneHundred",
        "normalized": "",
        "package": "Checked",
        "partial": "Under One Hundred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:Warning",
      "description": {
        "fct-descr": "\u003cp\u003eA warning that the value is not within limits, with a measurable indication of severity\n\u003c/p\u003e",
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "type",
        "fct-source": "src/Data-Checked.html#Warning",
        "fct-type": "type",
        "title": "Warning"
      },
      "index": {
        "description": "warning that the value is not within limits with measurable indication of severity",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "Warning",
        "normalized": "",
        "package": "Checked",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:Checked",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "forall b . Checked (Either (Warning, Maybe (Checked b), a) a)",
        "fct-source": "src/Data-Checked.html#Checked",
        "fct-type": "function",
        "title": "Checked"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "Checked",
        "normalized": "a b Checked(Either(Warning,Maybe(Checked b),c)c)",
        "package": "Checked",
        "partial": "Checked",
        "signature": "forall b Checked(Either(Warning,Maybe(Checked b),a)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:UnderOneHundred",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "UnderOneHundred a",
        "fct-source": "src/Data-Checked.html#UnderOneHundred",
        "fct-type": "function",
        "title": "UnderOneHundred"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "UnderOneHundred",
        "normalized": "",
        "package": "Checked",
        "partial": "Under One Hundred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:applyWithParamsCheck",
      "description": {
        "fct-descr": "\u003cp\u003eThis is needed because we need to select the correct check function for the parameters to this function\n We do this by capturing the parameters as a single type, for which we have defined a checkable instance\n\u003c/p\u003e",
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e Checked b",
        "fct-source": "src/Data-Checked.html#applyWithParamsCheck",
        "fct-type": "function",
        "title": "applyWithParamsCheck"
      },
      "index": {
        "description": "This is needed because we need to select the correct check function for the parameters to this function We do this by capturing the parameters as single type for which we have defined checkable instance",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "applyWithParamsCheck",
        "normalized": "(a-\u003eb)-\u003ea-\u003eChecked b",
        "package": "Checked",
        "partial": "With Params Check",
        "signature": "(a-\u003eb)-\u003ea-\u003eChecked b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:check",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "a -\u003e Checked a",
        "fct-source": "src/Data-Checked.html#check",
        "fct-type": "method",
        "title": "check"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "check",
        "normalized": "a-\u003eChecked a",
        "package": "Checked",
        "partial": "",
        "signature": "a-\u003eChecked a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:getCheckedValue",
      "description": {
        "fct-descr": "\u003cp\u003eUseful function\n\u003c/p\u003e",
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "Checked a -\u003e a",
        "fct-source": "src/Data-Checked.html#getCheckedValue",
        "fct-type": "function",
        "title": "getCheckedValue"
      },
      "index": {
        "description": "Useful function",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "getCheckedValue",
        "normalized": "Checked a-\u003ea",
        "package": "Checked",
        "partial": "Checked Value",
        "signature": "Checked a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:sumTest",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "UnderOneHundred Integer -\u003e UnderOneHundred Integer -\u003e UnderOneHundred Integer",
        "fct-source": "src/Data-Checked.html#sumTest",
        "fct-type": "function",
        "title": "sumTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "sumTest",
        "normalized": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eUnderOneHundred Integer",
        "package": "Checked",
        "partial": "Test",
        "signature": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eUnderOneHundred Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:sumTest-39-",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "SumTestFuncParams -\u003e UnderOneHundred Integer",
        "fct-source": "src/Data-Checked.html#sumTest%27",
        "fct-type": "function",
        "title": "sumTest'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "sumTest'",
        "normalized": "SumTestFuncParams-\u003eUnderOneHundred Integer",
        "package": "Checked",
        "partial": "Test'",
        "signature": "SumTestFuncParams-\u003eUnderOneHundred Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:test",
      "description": {
        "fct-module": "Data.Checked",
        "fct-package": "Checked",
        "fct-signature": "UnderOneHundred Integer -\u003e UnderOneHundred Integer -\u003e Checked (UnderOneHundred Integer)",
        "fct-source": "src/Data-Checked.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Checked",
        "module": "Data.Checked",
        "name": "test",
        "normalized": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eChecked(UnderOneHundred Integer)",
        "package": "Checked",
        "partial": "",
        "signature": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eChecked(UnderOneHundred Integer)"
      }
    }
  }
]