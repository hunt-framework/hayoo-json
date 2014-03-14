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
        "word": "Checked"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA checked value is a value, potentially wrapped in a warning, i.e. a non-fatal exception.\n\u003c/p\u003e\u003cp\u003eWhere the checked value looks like (Right value), the value is within limits\nWhere the checked value looks like (Left (warning, cause, value)), the value is out of limits\n\u003c/p\u003e\u003cp\u003eWarning is (\"warning message\", severity), and cause is also a (Left (warning, cause value)) which allows a \"linked list\" of warnings to be set up\n\u003c/p\u003e\u003cp\u003eRun your code within a \u003ccode\u003e\u003ca\u003eChecked\u003c/a\u003e\u003c/code\u003e monad to benefit from real time checking\n\u003c/p\u003e\u003cp\u003eTo retrofit checking to an existing function myFunc :: MyType1 -\u003e MyType2 -\u003e MyType3:\n\u003c/p\u003e\u003cp\u003e(a) define a type which is a tuple of the parameters to myFunc\n\u003c/p\u003e\u003cpre\u003e\n    type  MyFuncParams = (MyType1, MyType2)\n\u003c/pre\u003e\u003cp\u003e(b) define the test for validity of the parameters expected by myFunc:\n\u003c/p\u003e\u003cpre\u003e\n     instance Checkable MyFuncParams where\n       check params = .. Checked (Right params) -- if OK\n                      .. Checked (Left (pack \"Invalid params to myFunc\", 20), Nothing, params) -- if params are out of whack\n\u003c/pre\u003e\u003cp\u003e(c) define the test for validity of the output type, or any type in your code:\n\u003c/p\u003e\u003cpre\u003e\n     instance \u003ccode\u003e\u003ca\u003eCheckable\u003c/a\u003e\u003c/code\u003e MyType3 where\n       check v = .. Checked (Right v) -- if OK\n                 .. Checked (Left (pack \"Type MyType3 is out of range\", 20), Nothing, v) -- if the value is out of whack for this type\n\u003c/pre\u003e\u003cp\u003e(d) define a wrapper function for myFunction for myFunc which accepts a parameter of type MyFuncParams:\n\u003c/p\u003e\u003cpre\u003e\n     myFunc' :: MyFuncParams -\u003e MyType3\n     myFunc' (a, b) = myFunc a b\n * Looking to automate this step, perhaps with TH *\n\u003c/pre\u003e\u003cp\u003e(e) run your function within the \u003ccode\u003e\u003ca\u003eChecked\u003c/a\u003e\u003c/code\u003e monad, using \u003ccode\u003e\u003ca\u003eapplyWithParamsCheck\u003c/a\u003e\u003c/code\u003e as the function calls, and \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e to check the output values\n\u003c/p\u003e\u003cpre\u003e\n code :: MyType1 -\u003e MyType2 -\u003e Checked MyType4\n code a b = do\n     f \u003c- applyWithCheckedParams myFunc' (a, b)\n     g \u003c- check y\n     h \u003c- applyWithCheckedParams myFunc1' g\n     check h\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "Checked",
          "source": "src/Data-Checked.html",
          "type": "module"
        },
        "index": {
          "description": "checked value is value potentially wrapped in warning i.e non-fatal exception Where the checked value looks like Right value the value is within limits Where the checked value looks like Left warning cause value the value is out of limits Warning is warning message severity and cause is also Left warning cause value which allows linked list of warnings to be set up Run your code within Checked monad to benefit from real time checking To retrofit checking to an existing function myFunc MyType1 MyType2 MyType3 define type which is tuple of the parameters to myFunc type MyFuncParams MyType1 MyType2 define the test for validity of the parameters expected by myFunc instance Checkable MyFuncParams where check params Checked Right params if OK Checked Left pack Invalid params to myFunc Nothing params if params are out of whack define the test for validity of the output type or any type in your code instance Checkable MyType3 where check Checked Right if OK Checked Left pack Type MyType3 is out of range Nothing if the value is out of whack for this type define wrapper function for myFunction for myFunc which accepts parameter of type MyFuncParams myFunc MyFuncParams MyType3 myFunc myFunc Looking to automate this step perhaps with TH run your function within the Checked monad using applyWithParamsCheck as the function calls and check to check the output values code MyType1 MyType2 Checked MyType4 code do applyWithCheckedParams myFunc check applyWithCheckedParams myFunc1 check",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "Checked",
          "partial": "Checked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is implemented for types whose values will be checked\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "Checkable",
          "package": "Checked",
          "source": "src/Data-Checked.html#Checkable",
          "type": "class"
        },
        "index": {
          "description": "This is implemented for types whose values will be checked",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Checkable",
          "package": "Checked",
          "partial": "Checkable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:Checkable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper type indicating that the value is or is not within limits\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "Checked",
          "source": "src/Data-Checked.html#Checked",
          "type": "data"
        },
        "index": {
          "description": "wrapper type indicating that the value is or is not within limits",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "Checked",
          "partial": "Checked",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:Checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "SumTestFuncParams",
          "package": "Checked",
          "source": "src/Data-Checked.html#SumTestFuncParams",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "SumTestFuncParams",
          "package": "Checked",
          "partial": "Sum Test Func Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:SumTestFuncParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "UnderOneHundred",
          "package": "Checked",
          "source": "src/Data-Checked.html#UnderOneHundred",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "UnderOneHundred",
          "package": "Checked",
          "partial": "Under One Hundred",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:UnderOneHundred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA warning that the value is not within limits, with a measurable indication of severity\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "Warning",
          "package": "Checked",
          "source": "src/Data-Checked.html#Warning",
          "type": "type"
        },
        "index": {
          "description": "warning that the value is not within limits with measurable indication of severity",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Warning",
          "package": "Checked",
          "partial": "Warning",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#t:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "Checked",
          "package": "Checked",
          "signature": "forall b . Checked (Either (Warning, Maybe (Checked b), a) a)",
          "source": "src/Data-Checked.html#Checked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Checked",
          "normalized": "a b Checked(Either(Warning,Maybe(Checked b),c)c)",
          "package": "Checked",
          "partial": "Checked",
          "signature": "forall b Checked(Either(Warning,Maybe(Checked b),a)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:Checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "UnderOneHundred",
          "package": "Checked",
          "signature": "UnderOneHundred a",
          "source": "src/Data-Checked.html#UnderOneHundred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "UnderOneHundred",
          "package": "Checked",
          "partial": "Under One Hundred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:UnderOneHundred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is needed because we need to select the correct check function for the parameters to this function\n We do this by capturing the parameters as a single type, for which we have defined a checkable instance\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "applyWithParamsCheck",
          "package": "Checked",
          "signature": "(a -\u003e b) -\u003e a -\u003e Checked b",
          "source": "src/Data-Checked.html#applyWithParamsCheck",
          "type": "function"
        },
        "index": {
          "description": "This is needed because we need to select the correct check function for the parameters to this function We do this by capturing the parameters as single type for which we have defined checkable instance",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "applyWithParamsCheck",
          "normalized": "(a-\u003eb)-\u003ea-\u003eChecked b",
          "package": "Checked",
          "partial": "With Params Check",
          "signature": "(a-\u003eb)-\u003ea-\u003eChecked b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:applyWithParamsCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "check",
          "package": "Checked",
          "signature": "a -\u003e Checked a",
          "source": "src/Data-Checked.html#check",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "check",
          "normalized": "a-\u003eChecked a",
          "package": "Checked",
          "signature": "a-\u003eChecked a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful function\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "getCheckedValue",
          "package": "Checked",
          "signature": "Checked a -\u003e a",
          "source": "src/Data-Checked.html#getCheckedValue",
          "type": "function"
        },
        "index": {
          "description": "Useful function",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "getCheckedValue",
          "normalized": "Checked a-\u003ea",
          "package": "Checked",
          "partial": "Checked Value",
          "signature": "Checked a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:getCheckedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "sumTest",
          "package": "Checked",
          "signature": "UnderOneHundred Integer -\u003e UnderOneHundred Integer -\u003e UnderOneHundred Integer",
          "source": "src/Data-Checked.html#sumTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "sumTest",
          "normalized": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eUnderOneHundred Integer",
          "package": "Checked",
          "partial": "Test",
          "signature": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eUnderOneHundred Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:sumTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "sumTest'",
          "package": "Checked",
          "signature": "SumTestFuncParams -\u003e UnderOneHundred Integer",
          "source": "src/Data-Checked.html#sumTest%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "sumTest'",
          "normalized": "SumTestFuncParams-\u003eUnderOneHundred Integer",
          "package": "Checked",
          "partial": "Test'",
          "signature": "SumTestFuncParams-\u003eUnderOneHundred Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:sumTest-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "test",
          "package": "Checked",
          "signature": "UnderOneHundred Integer -\u003e UnderOneHundred Integer -\u003e Checked (UnderOneHundred Integer)",
          "source": "src/Data-Checked.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "test",
          "normalized": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eChecked(UnderOneHundred Integer)",
          "package": "Checked",
          "signature": "UnderOneHundred Integer-\u003eUnderOneHundred Integer-\u003eChecked(UnderOneHundred Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Checked/docs/Data-Checked.html#v:test"
      }
    }
  ]
]