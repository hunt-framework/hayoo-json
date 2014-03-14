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
        "word": "ieee-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "FloatExceptions",
          "package": "ieee-utils",
          "source": "src/Numeric-IEEE-FloatExceptions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "FloatExceptions",
          "package": "ieee-utils",
          "partial": "Float Exceptions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic exceptions.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "ArithException",
          "package": "ieee-utils",
          "type": "data"
        },
        "index": {
          "description": "Arithmetic exceptions",
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "ArithException",
          "package": "ieee-utils",
          "partial": "Arith Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#t:ArithException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "Denormal",
          "package": "ieee-utils",
          "signature": "Denormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "Denormal",
          "package": "ieee-utils",
          "partial": "Denormal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:Denormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "DivideByZero",
          "package": "ieee-utils",
          "signature": "DivideByZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "DivideByZero",
          "package": "ieee-utils",
          "partial": "Divide By Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:DivideByZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "LossOfPrecision",
          "package": "ieee-utils",
          "signature": "LossOfPrecision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "LossOfPrecision",
          "package": "ieee-utils",
          "partial": "Loss Of Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:LossOfPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "Overflow",
          "package": "ieee-utils",
          "signature": "Overflow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "Overflow",
          "package": "ieee-utils",
          "partial": "Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:Overflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "Underflow",
          "package": "ieee-utils",
          "signature": "Underflow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "Underflow",
          "package": "ieee-utils",
          "partial": "Underflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:Underflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the specified exceptions from the fpu's exception register.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "clearFloatExcepts",
          "package": "ieee-utils",
          "signature": "[ArithException] -\u003e IO Bool",
          "source": "src/Numeric-IEEE-FloatExceptions.html#clearFloatExcepts",
          "type": "function"
        },
        "index": {
          "description": "Clears the specified exceptions from the fpu exception register",
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "clearFloatExcepts",
          "normalized": "[ArithException]-\u003eIO Bool",
          "package": "ieee-utils",
          "partial": "Float Excepts",
          "signature": "[ArithException]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:clearFloatExcepts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all exceptions set in the fpu's exception register.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "getFloatExcepts",
          "package": "ieee-utils",
          "signature": "IO [ArithException]",
          "source": "src/Numeric-IEEE-FloatExceptions.html#getFloatExcepts",
          "type": "function"
        },
        "index": {
          "description": "Returns all exceptions set in the fpu exception register",
          "hierarchy": "Numeric IEEE FloatExceptions",
          "module": "Numeric.IEEE.FloatExceptions",
          "name": "getFloatExcepts",
          "normalized": "IO[ArithException]",
          "package": "ieee-utils",
          "partial": "Float Excepts",
          "signature": "IO[ArithException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-FloatExceptions.html#v:getFloatExcepts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe IEEE monad provides tools for enforcing sequencing of calculations such that\n  fine grained control is provided over triggering exceptions, evaluations within\n  particular rounding modes, etc. The perturb family of functions is built using this,\n  allowing pure computations paramaterized over an arbitrary Floating type to be\n  tested for numeric stability.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "Monad",
          "package": "ieee-utils",
          "source": "src/Numeric-IEEE-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "The IEEE monad provides tools for enforcing sequencing of calculations such that fine grained control is provided over triggering exceptions evaluations within particular rounding modes etc The perturb family of functions is built using this allowing pure computations paramaterized over an arbitrary Floating type to be tested for numeric stability",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "Monad",
          "package": "ieee-utils",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "IEEE",
          "package": "ieee-utils",
          "source": "src/Numeric-IEEE-Monad.html#IEEE",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "IEEE",
          "package": "ieee-utils",
          "partial": "IEEE",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#t:IEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "IEEE",
          "package": "ieee-utils",
          "signature": "IEEE",
          "source": "src/Numeric-IEEE-Monad.html#IEEE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "IEEE",
          "package": "ieee-utils",
          "partial": "IEEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:IEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces strict evaluation of the enclosed numeric argument.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "calculate",
          "package": "ieee-utils",
          "signature": "a -\u003e IEEE a",
          "source": "src/Numeric-IEEE-Monad.html#calculate",
          "type": "function"
        },
        "index": {
          "description": "Forces strict evaluation of the enclosed numeric argument",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "calculate",
          "normalized": "a-\u003eIEEE a",
          "package": "ieee-utils",
          "signature": "a-\u003eIEEE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:calculate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate, but also returns any floating exceptions triggered.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "calculate'",
          "package": "ieee-utils",
          "signature": "a -\u003e IEEE (a, [ArithException])",
          "source": "src/Numeric-IEEE-Monad.html#calculate%27",
          "type": "function"
        },
        "index": {
          "description": "Calculate but also returns any floating exceptions triggered",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "calculate'",
          "normalized": "a-\u003eIEEE(a,[ArithException])",
          "package": "ieee-utils",
          "signature": "a-\u003eIEEE(a,[ArithException])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:calculate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "clearFloatExcepts",
          "package": "ieee-utils",
          "signature": "[ArithException] -\u003e IEEE Bool",
          "source": "src/Numeric-IEEE-Monad.html#clearFloatExcepts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "clearFloatExcepts",
          "normalized": "[ArithException]-\u003eIEEE Bool",
          "package": "ieee-utils",
          "partial": "Float Excepts",
          "signature": "[ArithException]-\u003eIEEE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:clearFloatExcepts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "getFloatExcepts",
          "package": "ieee-utils",
          "signature": "IEEE [ArithException]",
          "source": "src/Numeric-IEEE-Monad.html#getFloatExcepts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "getFloatExcepts",
          "normalized": "IEEE[ArithException]",
          "package": "ieee-utils",
          "partial": "Float Excepts",
          "signature": "IEEE[ArithException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:getFloatExcepts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "getRound",
          "package": "ieee-utils",
          "signature": "IEEE RoundMode",
          "source": "src/Numeric-IEEE-Monad.html#getRound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "getRound",
          "package": "ieee-utils",
          "partial": "Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:getRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven something that produces a Floating, returns a representation of the\n absolute difference between the results as calculated rounding upwards and downwards.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "perturb",
          "package": "ieee-utils",
          "signature": "IEEE a) -\u003e IO b",
          "source": "src/Numeric-IEEE-Monad.html#perturb",
          "type": "function"
        },
        "index": {
          "description": "Given something that produces Floating returns representation of the absolute difference between the results as calculated rounding upwards and downwards",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "perturb",
          "normalized": "IEEE a)-\u003eIO b",
          "package": "ieee-utils",
          "signature": "IEEE a)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:perturb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven something of (forall a. Floating a =\u003e IEEE a) produces a four-tuple of\n the value as calculated rounding up, down, to nearest, and towards zero.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "perturb'",
          "package": "ieee-utils",
          "signature": "IEEE a) -\u003e IO (b, b, b, b)",
          "source": "src/Numeric-IEEE-Monad.html#perturb%27",
          "type": "function"
        },
        "index": {
          "description": "Given something of forall Floating IEEE produces four-tuple of the value as calculated rounding up down to nearest and towards zero",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "perturb'",
          "normalized": "IEEE a)-\u003eIO(b,b,b,b)",
          "package": "ieee-utils",
          "signature": "IEEE a)-\u003eIO(b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:perturb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven something that produces a Floating, returns the magnitude of instability\n introduced by perturbing the equation by rounding upwards and then downwards. This is\n the absolute difference between the results as calculated rounding upwards and downwards,\n and then divided by the averaged result.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "perturbedMag",
          "package": "ieee-utils",
          "signature": "IEEE a) -\u003e IO b",
          "source": "src/Numeric-IEEE-Monad.html#perturbedMag",
          "type": "function"
        },
        "index": {
          "description": "Given something that produces Floating returns the magnitude of instability introduced by perturbing the equation by rounding upwards and then downwards This is the absolute difference between the results as calculated rounding upwards and downwards and then divided by the averaged result",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "perturbedMag",
          "normalized": "IEEE a)-\u003eIO b",
          "package": "ieee-utils",
          "partial": "Mag",
          "signature": "IEEE a)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:perturbedMag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "runIEEE",
          "package": "ieee-utils",
          "signature": "IEEE a -\u003e IO a",
          "source": "src/Numeric-IEEE-Monad.html#runIEEE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "runIEEE",
          "normalized": "IEEE a-\u003eIO a",
          "package": "ieee-utils",
          "partial": "IEEE",
          "signature": "IEEE a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:runIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "setRound",
          "package": "ieee-utils",
          "signature": "RoundMode -\u003e IEEE Bool",
          "source": "src/Numeric-IEEE-Monad.html#setRound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "setRound",
          "normalized": "RoundMode-\u003eIEEE Bool",
          "package": "ieee-utils",
          "partial": "Round",
          "signature": "RoundMode-\u003eIEEE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:setRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.Monad",
          "name": "unIEEE",
          "package": "ieee-utils",
          "signature": "IO a",
          "source": "src/Numeric-IEEE-Monad.html#IEEE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "unIEEE",
          "package": "ieee-utils",
          "partial": "IEEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:unIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll uses of the IEEE monad need to be wrapped inside a top level call to\n withIeeeDo. This ensures that access to floating point internals\n is serialized properly, even between multiple threads.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "withIeeeDo",
          "package": "ieee-utils",
          "signature": "IO a) -\u003e IO a",
          "source": "src/Numeric-IEEE-Monad.html#withIeeeDo",
          "type": "function"
        },
        "index": {
          "description": "All uses of the IEEE monad need to be wrapped inside top level call to withIeeeDo This ensures that access to floating point internals is serialized properly even between multiple threads",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "withIeeeDo",
          "normalized": "IO a)-\u003eIO a",
          "package": "ieee-utils",
          "partial": "Ieee Do",
          "signature": "IO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:withIeeeDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the specified IEEE action within a specific round mode.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.Monad",
          "name": "withRoundMode",
          "package": "ieee-utils",
          "signature": "RoundMode -\u003e IEEE a -\u003e IEEE a",
          "source": "src/Numeric-IEEE-Monad.html#withRoundMode",
          "type": "function"
        },
        "index": {
          "description": "Executes the specified IEEE action within specific round mode",
          "hierarchy": "Numeric IEEE Monad",
          "module": "Numeric.IEEE.Monad",
          "name": "withRoundMode",
          "normalized": "RoundMode-\u003eIEEE a-\u003eIEEE a",
          "package": "ieee-utils",
          "partial": "Round Mode",
          "signature": "RoundMode-\u003eIEEE a-\u003eIEEE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-Monad.html#v:withRoundMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.RoundMode",
          "name": "RoundMode",
          "package": "ieee-utils",
          "source": "src/Numeric-IEEE-RoundMode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "RoundMode",
          "package": "ieee-utils",
          "partial": "Round Mode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.RoundMode",
          "name": "RoundMode",
          "package": "ieee-utils",
          "source": "src/Numeric-IEEE-RoundMode.html#RoundMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "RoundMode",
          "package": "ieee-utils",
          "partial": "Round Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#t:RoundMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.RoundMode",
          "name": "Downward",
          "package": "ieee-utils",
          "signature": "Downward",
          "source": "src/Numeric-IEEE-RoundMode.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "Downward",
          "package": "ieee-utils",
          "partial": "Downward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#v:Downward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.RoundMode",
          "name": "ToNearest",
          "package": "ieee-utils",
          "signature": "ToNearest",
          "source": "src/Numeric-IEEE-RoundMode.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "ToNearest",
          "package": "ieee-utils",
          "partial": "To Nearest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#v:ToNearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.RoundMode",
          "name": "TowardZero",
          "package": "ieee-utils",
          "signature": "TowardZero",
          "source": "src/Numeric-IEEE-RoundMode.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "TowardZero",
          "package": "ieee-utils",
          "partial": "Toward Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#v:TowardZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.IEEE.RoundMode",
          "name": "Upward",
          "package": "ieee-utils",
          "signature": "Upward",
          "source": "src/Numeric-IEEE-RoundMode.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "Upward",
          "package": "ieee-utils",
          "partial": "Upward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#v:Upward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the fpu's current rounding mode.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.RoundMode",
          "name": "getRound",
          "package": "ieee-utils",
          "signature": "IO RoundMode",
          "source": "src/Numeric-IEEE-RoundMode.html#getRound",
          "type": "function"
        },
        "index": {
          "description": "Gets the fpu current rounding mode",
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "getRound",
          "package": "ieee-utils",
          "partial": "Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#v:getRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the fpu's rounding mode. Returns \u003ccode\u003eTrue\u003c/code\u003e if successful.\n\u003c/p\u003e",
          "module": "Numeric.IEEE.RoundMode",
          "name": "setRound",
          "package": "ieee-utils",
          "signature": "RoundMode -\u003e IO Bool",
          "source": "src/Numeric-IEEE-RoundMode.html#setRound",
          "type": "function"
        },
        "index": {
          "description": "Sets the fpu rounding mode Returns True if successful",
          "hierarchy": "Numeric IEEE RoundMode",
          "module": "Numeric.IEEE.RoundMode",
          "name": "setRound",
          "normalized": "RoundMode-\u003eIO Bool",
          "package": "ieee-utils",
          "partial": "Round",
          "signature": "RoundMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee-utils/docs/Numeric-IEEE-RoundMode.html#v:setRound"
      }
    }
  ]
]