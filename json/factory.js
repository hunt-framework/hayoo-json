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
        "word": "factory"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a simple numeric type, designed to contain an \u003cem\u003eexponential\u003c/em\u003e number.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Exponentiation\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.Exponential",
          "name": "Exponential",
          "package": "factory",
          "source": "src/Factory-Data-Exponential.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes simple numeric type designed to contain an exponential number http en.wikipedia.org wiki Exponentiation",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "Exponential",
          "package": "factory",
          "partial": "Exponential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes an \u003cem\u003eexponential\u003c/em\u003e, in terms of its \u003cem\u003ebase\u003c/em\u003e and \u003cem\u003eexponent\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "Exponential",
          "package": "factory",
          "source": "src/Factory-Data-Exponential.html#Exponential",
          "type": "type"
        },
        "index": {
          "description": "Describes an exponential in terms of its base and exponent",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "Exponential",
          "package": "factory",
          "partial": "Exponential",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#t:Exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise the specified \u003ccode\u003e\u003ca\u003eExponential\u003c/a\u003e\u003c/code\u003e to a power.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "(\u003c^)",
          "package": "factory",
          "signature": "Exponential base exponent-\u003e exponent-\u003e Exponential base exponent",
          "type": "function"
        },
        "index": {
          "description": "Raise the specified Exponential to power",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "(\u003c^) \u003c^",
          "normalized": "Exponential a b-\u003eb-\u003eExponential a b",
          "package": "factory",
          "signature": "Exponential base exponent-\u003eexponent-\u003eExponential base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:-60--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003cem\u003ebases\u003c/em\u003e are equal.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "(=~)",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e Exponential base exponent -\u003e Bool",
          "source": "src/Factory-Data-Exponential.html#%3D~",
          "type": "function"
        },
        "index": {
          "description": "True if the bases are equal",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "(=~) =~",
          "normalized": "Exponential a b-\u003eExponential a b-\u003eBool",
          "package": "factory",
          "signature": "Exponential base exponent-\u003eExponential base exponent-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the specified \u003ccode\u003e\u003ca\u003eExponential\u003c/a\u003e\u003c/code\u003e, returning the resulting number.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "evaluate",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e base",
          "source": "src/Factory-Data-Exponential.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the specified Exponential returning the resulting number",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "evaluate",
          "normalized": "Exponential a b-\u003ea",
          "package": "factory",
          "signature": "Exponential base exponent-\u003ebase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "getBase",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e base",
          "source": "src/Factory-Data-Exponential.html#getBase",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "getBase",
          "normalized": "Exponential a b-\u003ea",
          "package": "factory",
          "partial": "Base",
          "signature": "Exponential base exponent-\u003ebase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:getBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "getExponent",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e exponent",
          "source": "src/Factory-Data-Exponential.html#getExponent",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "getExponent",
          "normalized": "Exponential a b-\u003eb",
          "package": "factory",
          "partial": "Exponent",
          "signature": "Exponential base exponent-\u003eexponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:getExponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the value, by negating the exponent.\n\u003c/p\u003e",
          "module": "Factory.Data.Exponential",
          "name": "invert",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e Exponential base exponent",
          "source": "src/Factory-Data-Exponential.html#invert",
          "type": "function"
        },
        "index": {
          "description": "Invert the value by negating the exponent",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "invert",
          "normalized": "Exponential a b-\u003eExponential a b",
          "package": "factory",
          "signature": "Exponential base exponent-\u003eExponential base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct an \u003ccode\u003e\u003ca\u003eExponential\u003c/a\u003e\u003c/code\u003e merely raised to the 1st power.\n\u003c/li\u003e\u003cli\u003e The value of the resulting exponential is the same as specified \u003ccode\u003ebase\u003c/code\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Identity_element\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Exponential",
          "name": "rightIdentity",
          "package": "factory",
          "signature": "base -\u003e Exponential base exponent",
          "source": "src/Factory-Data-Exponential.html#rightIdentity",
          "type": "function"
        },
        "index": {
          "description": "Construct an Exponential merely raised to the st power The value of the resulting exponential is the same as specified base http en.wikipedia.org wiki Identity element",
          "hierarchy": "Factory Data Exponential",
          "module": "Factory.Data.Exponential",
          "name": "rightIdentity",
          "normalized": "a-\u003eExponential a b",
          "package": "factory",
          "partial": "Identity",
          "signature": "base-\u003eExponential base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Exponential.html#v:rightIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a bounded set of, typically integral, quantities.\n\u003c/li\u003e\u003cli\u003e Operations have been defined, on the list of \u003cem\u003econsecutive\u003c/em\u003e quantities delimited by these endpoints.\n\u003c/li\u003e\u003cli\u003e The point is that if the list is composed from \u003cem\u003econsecutive\u003c/em\u003e quantities, the intermediate values can be inferred, rather than physically represented.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCAVEATS\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e The API was driven top-down by its caller's requirements, rather than a bottom-up attempt to provide a complete interface.\n\tconsequently there may be omissions from the view point of future callers.\n\u003c/li\u003e\u003cli\u003e Thought similar to the mathematical concept of an \u003cem\u003einterval\u003c/em\u003e, the latter technically relates to \u003cem\u003ereal\u003c/em\u003e numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Interval_%28mathematics%29\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e No account has been made for \u003cem\u003esemi-closed\u003c/em\u003e or \u003cem\u003eopen\u003c/em\u003e intervals.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.Interval",
          "name": "Interval",
          "package": "factory",
          "source": "src/Factory-Data-Interval.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes bounded set of typically integral quantities Operations have been defined on the list of consecutive quantities delimited by these endpoints The point is that if the list is composed from consecutive quantities the intermediate values can be inferred rather than physically represented CAVEATS The API was driven top-down by its caller requirements rather than bottom-up attempt to provide complete interface consequently there may be omissions from the view point of future callers Thought similar to the mathematical concept of an interval the latter technically relates to real numbers http en.wikipedia.org wiki Interval mathematics No account has been made for semi-closed or open intervals",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "Interval",
          "package": "factory",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a closed (inclusive) interval of consecutive values.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "Interval",
          "package": "factory",
          "source": "src/Factory-Data-Interval.html#Interval",
          "type": "type"
        },
        "index": {
          "description": "Defines closed inclusive interval of consecutive values",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "Interval",
          "package": "factory",
          "partial": "Interval",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the \u003cem\u003eunsigned closed unit-interval\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Unit_interval\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "closedUnitInterval",
          "package": "factory",
          "signature": "Interval n",
          "source": "src/Factory-Data-Interval.html#closedUnitInterval",
          "type": "function"
        },
        "index": {
          "description": "Construct the unsigned closed unit-interval http en.wikipedia.org wiki Unit interval",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "closedUnitInterval",
          "package": "factory",
          "partial": "Unit Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:closedUnitInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the specified value is within the inclusive bounds of the \u003cem\u003einterval\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "elem'",
          "package": "factory",
          "signature": "endPoint -\u003e Interval endPoint -\u003e Bool",
          "source": "src/Factory-Data-Interval.html#elem%27",
          "type": "function"
        },
        "index": {
          "description": "True if the specified value is within the inclusive bounds of the interval",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "elem'",
          "normalized": "a-\u003eInterval a-\u003eBool",
          "package": "factory",
          "signature": "endPoint-\u003eInterval endPoint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:elem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "getMaxBound",
          "package": "factory",
          "signature": "Interval endPoint -\u003e endPoint",
          "source": "src/Factory-Data-Interval.html#getMaxBound",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "getMaxBound",
          "normalized": "Interval a-\u003ea",
          "package": "factory",
          "partial": "Max Bound",
          "signature": "Interval endPoint-\u003eendPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:getMaxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "getMinBound",
          "package": "factory",
          "signature": "Interval endPoint -\u003e endPoint",
          "source": "src/Factory-Data-Interval.html#getMinBound",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "getMinBound",
          "normalized": "Interval a-\u003ea",
          "package": "factory",
          "partial": "Min Bound",
          "signature": "Interval endPoint-\u003eendPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:getMinBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if \u003ccode\u003e\u003ca\u003egetMinBound\u003c/a\u003e\u003c/code\u003e exceeds \u003ccode\u003e\u003ca\u003egetMaxBound\u003c/a\u003e\u003c/code\u003e extent.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "isReversed",
          "package": "factory",
          "signature": "Interval endPoint -\u003e Bool",
          "source": "src/Factory-Data-Interval.html#isReversed",
          "type": "function"
        },
        "index": {
          "description": "True if getMinBound exceeds getMaxBound extent",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "isReversed",
          "normalized": "Interval a-\u003eBool",
          "package": "factory",
          "partial": "Reversed",
          "signature": "Interval endPoint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:isReversed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003cem\u003einterval\u003c/em\u003e from a bounded type.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "mkBounded",
          "package": "factory",
          "signature": "Interval endPoint",
          "source": "src/Factory-Data-Interval.html#mkBounded",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval from bounded type",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "mkBounded",
          "package": "factory",
          "partial": "Bounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:mkBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the \u003cem\u003eend-points\u003c/em\u003e where they were originally reversed, but otherwise do nothing.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "normalise",
          "package": "factory",
          "signature": "Interval endPoint -\u003e Interval endPoint",
          "source": "src/Factory-Data-Interval.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Swap the end-points where they were originally reversed but otherwise do nothing",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "normalise",
          "normalized": "Interval a-\u003eInterval a",
          "package": "factory",
          "signature": "Interval endPoint-\u003eInterval endPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003cem\u003einterval\u003c/em\u003e from a single value.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "precisely",
          "package": "factory",
          "signature": "endPoint -\u003e Interval endPoint",
          "source": "src/Factory-Data-Interval.html#precisely",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval from single value",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "precisely",
          "normalized": "a-\u003eInterval a",
          "package": "factory",
          "signature": "endPoint-\u003eInterval endPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:precisely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Multiplies the consecutive sequence of integers within \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Since the result can be large, \u003ccode\u003edivideAndConquer\u003c/code\u003e is used to form operands of a similar order of magnitude,\n\tthus improving the efficiency of the big-number multiplication.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Interval",
          "name": "product'",
          "package": "factory",
          "signature": "Ratio i-\u003e i-\u003e Interval i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "Multiplies the consecutive sequence of integers within Interval Since the result can be large divideAndConquer is used to form operands of similar order of magnitude thus improving the efficiency of the big-number multiplication",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "product'",
          "normalized": "Ratio a-\u003ea-\u003eInterval a-\u003ea",
          "package": "factory",
          "signature": "Ratio i-\u003ei-\u003eInterval i-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:product-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift of both \u003cem\u003eend-points\u003c/em\u003e of the \u003cem\u003einterval\u003c/em\u003e by the specified amount.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "shift",
          "package": "factory",
          "signature": "endPoint-\u003e Interval endPoint-\u003e Interval endPoint",
          "type": "function"
        },
        "index": {
          "description": "Shift of both end-points of the interval by the specified amount",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "shift",
          "normalized": "a-\u003eInterval a-\u003eInterval a",
          "package": "factory",
          "signature": "endPoint-\u003eInterval endPoint-\u003eInterval endPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBisect the \u003cem\u003einterval\u003c/em\u003e at the specified \u003cem\u003eend-point\u003c/em\u003e; which should be between the two existing \u003cem\u003eend-points\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Interval",
          "name": "splitAt'",
          "package": "factory",
          "signature": "endPoint -\u003e Interval endPoint -\u003e (Interval endPoint, Interval endPoint)",
          "source": "src/Factory-Data-Interval.html#splitAt%27",
          "type": "function"
        },
        "index": {
          "description": "Bisect the interval at the specified end-point which should be between the two existing end-points",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "splitAt'",
          "normalized": "a-\u003eInterval a-\u003e(Interval a,Interval a)",
          "package": "factory",
          "partial": "At'",
          "signature": "endPoint-\u003eInterval endPoint-\u003e(Interval endPoint,Interval endPoint)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:splitAt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Converts \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e to a list by enumerating the values.\n\u003c/li\u003e\u003cli\u003e CAVEAT: produces rather odd results for \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e types, but no stranger than considering such types \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003eerable.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Interval",
          "name": "toList",
          "package": "factory",
          "signature": "Interval endPoint -\u003e [endPoint]",
          "source": "src/Factory-Data-Interval.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts Interval to list by enumerating the values CAVEAT produces rather odd results for Fractional types but no stranger than considering such types Enum erable",
          "hierarchy": "Factory Data Interval",
          "module": "Factory.Data.Interval",
          "name": "toList",
          "normalized": "Interval a-\u003e[a]",
          "package": "factory",
          "partial": "List",
          "signature": "Interval endPoint-\u003e[endPoint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Interval.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a \u003cem\u003emonic polynomial; \u003chttp:\u003c/em\u003e\u003cem\u003een.wikipedia.org\u003c/em\u003ewiki/Monic_polynomial#Classifications\u003e;\n\tie. in which the \u003cem\u003ecoefficient\u003c/em\u003e of the \u003cem\u003eleading term\u003c/em\u003e is one.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.MonicPolynomial",
          "name": "MonicPolynomial",
          "package": "factory",
          "source": "src/Factory-Data-MonicPolynomial.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes monic polynomial http en.wikipedia.org wiki Monic polynomial Classifications ie in which the coefficient of the leading term is one",
          "hierarchy": "Factory Data MonicPolynomial",
          "module": "Factory.Data.MonicPolynomial",
          "name": "MonicPolynomial",
          "package": "factory",
          "partial": "Monic Polynomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-MonicPolynomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of \u003ccode\u003e\u003ca\u003ePolynomial\u003c/a\u003e\u003c/code\u003e, in which the \u003cem\u003eleading term\u003c/em\u003e is required to have a \u003cem\u003ecoefficient\u003c/em\u003e of one.\n\u003c/p\u003e",
          "module": "Factory.Data.MonicPolynomial",
          "name": "MonicPolynomial",
          "package": "factory",
          "source": "src/Factory-Data-MonicPolynomial.html#MonicPolynomial",
          "type": "data"
        },
        "index": {
          "description": "type of Polynomial in which the leading term is required to have coefficient of one",
          "hierarchy": "Factory Data MonicPolynomial",
          "module": "Factory.Data.MonicPolynomial",
          "name": "MonicPolynomial",
          "package": "factory",
          "partial": "Monic Polynomial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-MonicPolynomial.html#t:MonicPolynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor. Constructs an arbitrary \u003cem\u003emonic polynomial\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.MonicPolynomial",
          "name": "mkMonicPolynomial",
          "package": "factory",
          "signature": "Polynomial c e -\u003e MonicPolynomial c e",
          "source": "src/Factory-Data-MonicPolynomial.html#mkMonicPolynomial",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor Constructs an arbitrary monic polynomial",
          "hierarchy": "Factory Data MonicPolynomial",
          "module": "Factory.Data.MonicPolynomial",
          "name": "mkMonicPolynomial",
          "normalized": "Polynomial a b-\u003eMonicPolynomial a b",
          "package": "factory",
          "partial": "Monic Polynomial",
          "signature": "Polynomial c e-\u003eMonicPolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-MonicPolynomial.html#v:mkMonicPolynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a \u003ca\u003ehttp://en.wikipedia.org/wiki/Monomial\u003c/a\u003e and operations on it.\n\u003c/li\u003e\u003cli\u003e A \u003cem\u003emonomial\u003c/em\u003e is merely a \u003cem\u003epolynomial\u003c/em\u003e with a single non-zero term; cf. \u003cem\u003eBinomial\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.Monomial",
          "name": "Monomial",
          "package": "factory",
          "source": "src/Factory-Data-Monomial.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes http en.wikipedia.org wiki Monomial and operations on it monomial is merely polynomial with single non-zero term cf Binomial",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "Monomial",
          "package": "factory",
          "partial": "Monomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The type of an arbitrary monomial.\n\u003c/li\u003e\u003cli\u003e CAVEAT: though a \u003cem\u003emonomial\u003c/em\u003e has an integral power, this contraint is only imposed at the function-level.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Monomial",
          "name": "Monomial",
          "package": "factory",
          "source": "src/Factory-Data-Monomial.html#Monomial",
          "type": "type"
        },
        "index": {
          "description": "The type of an arbitrary monomial CAVEAT though monomial has an integral power this contraint is only imposed at the function-level",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "Monomial",
          "package": "factory",
          "partial": "Monomial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#t:Monomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply the two specified \u003ccode\u003e\u003ca\u003eMonomial\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "(\u003c*\u003e)",
          "package": "factory",
          "signature": "Monomial c e -\u003e Monomial c e -\u003e Monomial c e",
          "source": "src/Factory-Data-Monomial.html#%3C%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Multiply the two specified Monomial",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "Monomial a b-\u003eMonomial a b-\u003eMonomial a b",
          "package": "factory",
          "signature": "Monomial c e-\u003eMonomial c e-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide the two specified \u003ccode\u003e\u003ca\u003eMonomial\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "(\u003c/\u003e)",
          "package": "factory",
          "signature": "Monomial c e-\u003e Monomial c e-\u003e Monomial c e",
          "type": "function"
        },
        "index": {
          "description": "Divide the two specified Monomial",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Monomial a b-\u003eMonomial a b-\u003eMonomial a b",
          "package": "factory",
          "signature": "Monomial c e-\u003eMonomial c e-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares the \u003cem\u003eexponents\u003c/em\u003e of the specified \u003ccode\u003e\u003ca\u003eMonomial\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "(\u003c=\u003e)",
          "package": "factory",
          "signature": "Monomial c e -\u003e Monomial c e -\u003e Ordering",
          "source": "src/Factory-Data-Monomial.html#%3C%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Compares the exponents of the specified Monomial",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "(\u003c=\u003e) \u003c=\u003e",
          "normalized": "Monomial a b-\u003eMonomial a b-\u003eOrdering",
          "package": "factory",
          "signature": "Monomial c e-\u003eMonomial c e-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:-60--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003cem\u003eexponents\u003c/em\u003e are equal.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "(=~)",
          "package": "factory",
          "signature": "Monomial c e -\u003e Monomial c e -\u003e Bool",
          "source": "src/Factory-Data-Monomial.html#%3D~",
          "type": "function"
        },
        "index": {
          "description": "True if the exponents are equal",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "(=~) =~",
          "normalized": "Monomial a b-\u003eMonomial a b-\u003eBool",
          "package": "factory",
          "signature": "Monomial c e-\u003eMonomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble the specified \u003ccode\u003e\u003ca\u003eMonomial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "double",
          "package": "factory",
          "signature": "Monomial c e -\u003e Monomial c e",
          "source": "src/Factory-Data-Monomial.html#double",
          "type": "function"
        },
        "index": {
          "description": "Double the specified Monomial",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "double",
          "normalized": "Monomial a b-\u003eMonomial a b",
          "package": "factory",
          "signature": "Monomial c e-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "getCoefficient",
          "package": "factory",
          "signature": "Monomial c e -\u003e c",
          "source": "src/Factory-Data-Monomial.html#getCoefficient",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "getCoefficient",
          "normalized": "Monomial a b-\u003ea",
          "package": "factory",
          "partial": "Coefficient",
          "signature": "Monomial c e-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:getCoefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "getExponent",
          "package": "factory",
          "signature": "Monomial c e -\u003e e",
          "source": "src/Factory-Data-Monomial.html#getExponent",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "getExponent",
          "normalized": "Monomial a b-\u003eb",
          "package": "factory",
          "partial": "Exponent",
          "signature": "Monomial c e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:getExponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003cem\u003eexponent\u003c/em\u003e is both integral and non-\u003cem\u003enegative\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: one can't even call this function unless the \u003cem\u003eexponent\u003c/em\u003e is integral.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Monomial",
          "name": "isMonomial",
          "package": "factory",
          "signature": "Monomial c e -\u003e Bool",
          "source": "src/Factory-Data-Monomial.html#isMonomial",
          "type": "function"
        },
        "index": {
          "description": "True if the exponent is both integral and non negative CAVEAT one can even call this function unless the exponent is integral",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "isMonomial",
          "normalized": "Monomial a b-\u003eBool",
          "package": "factory",
          "partial": "Monomial",
          "signature": "Monomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:isMonomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the coefficient using \u003cem\u003emodular\u003c/em\u003e arithmetic.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "mod'",
          "package": "factory",
          "signature": "Monomial c e-\u003e c-\u003e Monomial c e",
          "type": "function"
        },
        "index": {
          "description": "Reduce the coefficient using modular arithmetic",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "mod'",
          "normalized": "Monomial a b-\u003ea-\u003eMonomial a b",
          "package": "factory",
          "signature": "Monomial c e-\u003ec-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:mod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate the coefficient.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "negateCoefficient",
          "package": "factory",
          "signature": "Monomial c e -\u003e Monomial c e",
          "source": "src/Factory-Data-Monomial.html#negateCoefficient",
          "type": "function"
        },
        "index": {
          "description": "Negate the coefficient",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "negateCoefficient",
          "normalized": "Monomial a b-\u003eMonomial a b",
          "package": "factory",
          "partial": "Coefficient",
          "signature": "Monomial c e-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:negateCoefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the type of the \u003cem\u003ecoefficient\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "realCoefficientToFrac",
          "package": "factory",
          "signature": "Monomial r e -\u003e Monomial f e",
          "source": "src/Factory-Data-Monomial.html#realCoefficientToFrac",
          "type": "function"
        },
        "index": {
          "description": "Convert the type of the coefficient",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "realCoefficientToFrac",
          "normalized": "Monomial a b-\u003eMonomial c b",
          "package": "factory",
          "partial": "Coefficient To Frac",
          "signature": "Monomial r e-\u003eMonomial f e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:realCoefficientToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the \u003cem\u003ecoefficient\u003c/em\u003e, by the specified amount.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "shiftCoefficient",
          "package": "factory",
          "signature": "Monomial c e-\u003e c-\u003e Monomial c e",
          "type": "function"
        },
        "index": {
          "description": "Shift the coefficient by the specified amount",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "shiftCoefficient",
          "normalized": "Monomial a b-\u003ea-\u003eMonomial a b",
          "package": "factory",
          "partial": "Coefficient",
          "signature": "Monomial c e-\u003ec-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:shiftCoefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the \u003cem\u003eexponent\u003c/em\u003e, by the specified amount.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "shiftExponent",
          "package": "factory",
          "signature": "Monomial c e-\u003e e-\u003e Monomial c e",
          "type": "function"
        },
        "index": {
          "description": "Shift the exponent by the specified amount",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "shiftExponent",
          "normalized": "Monomial a b-\u003eb-\u003eMonomial a b",
          "package": "factory",
          "partial": "Exponent",
          "signature": "Monomial c e-\u003ee-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:shiftExponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSquare the specified \u003ccode\u003e\u003ca\u003eMonomial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Monomial",
          "name": "square",
          "package": "factory",
          "signature": "Monomial c e -\u003e Monomial c e",
          "source": "src/Factory-Data-Monomial.html#square",
          "type": "function"
        },
        "index": {
          "description": "Square the specified Monomial",
          "hierarchy": "Factory Data Monomial",
          "module": "Factory.Data.Monomial",
          "name": "square",
          "normalized": "Monomial a b-\u003eMonomial a b",
          "package": "factory",
          "signature": "Monomial c e-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Monomial.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a \u003ca\u003ehttp://en.wikipedia.org/wiki/Univariate\u003c/a\u003e polynomial and operations on it.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Polynomial\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/Polynomial.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "Polynomial",
          "package": "factory",
          "source": "src/Factory-Data-Polynomial.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes http en.wikipedia.org wiki Univariate polynomial and operations on it http en.wikipedia.org wiki Polynomial http mathworld.wolfram.com Polynomial.html",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "Polynomial",
          "package": "factory",
          "partial": "Polynomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The type of an arbitrary \u003cem\u003eunivariate\u003c/em\u003e polynomial;\n\tactually it's more general, since it permits negative powers (\u003ca\u003ehttp://en.wikipedia.org/wiki/Laurent_polynomial\u003c/a\u003es).\n\tIt can't describe \u003cem\u003emultivariate\u003c/em\u003e polynomials, which would require a list of \u003cem\u003eexponents\u003c/em\u003e.\n\tRather than requiring the \u003cem\u003eexponent\u003c/em\u003e to implement the \u003cem\u003etype-class\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e, this is implemented at the function-level, as required.\n\u003c/li\u003e\u003cli\u003e The structure permits gaps between \u003cem\u003eexponents\u003c/em\u003e,\n\tin which \u003cem\u003ecoefficients\u003c/em\u003e are inferred to be zero, thus enabling efficient representation of sparse polynomials.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the \u003ccode\u003eMonomialList\u003c/code\u003e is required to;\n\tbe ordered by \u003cem\u003edescending\u003c/em\u003e exponent (ie. reverse \u003ca\u003ehttp://en.wikipedia.org/wiki/Monomial_order\u003c/a\u003e);\n\thave had zero coefficients removed;\n\tand to have had \u003cem\u003elike\u003c/em\u003e terms merged;\n\tso the raw data-constructor isn't exported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "Polynomial",
          "package": "factory",
          "source": "src/Factory-Data-Polynomial.html#Polynomial",
          "type": "data"
        },
        "index": {
          "description": "The type of an arbitrary univariate polynomial actually it more general since it permits negative powers http en.wikipedia.org wiki Laurent polynomial It can describe multivariate polynomials which would require list of exponents Rather than requiring the exponent to implement the type-class Integral this is implemented at the function-level as required The structure permits gaps between exponents in which coefficients are inferred to be zero thus enabling efficient representation of sparse polynomials CAVEAT the MonomialList is required to be ordered by descending exponent ie reverse http en.wikipedia.org wiki Monomial order have had zero coefficients removed and to have had like terms merged so the raw data-constructor isn exported",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "Polynomial",
          "package": "factory",
          "partial": "Polynomial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#t:Polynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Scale-up the specified \u003cem\u003epolynomial\u003c/em\u003e by a constant \u003cem\u003emonomial\u003c/em\u003e factor.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Scalar_multiplication\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "(*=)",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Monomial c e -\u003e Polynomial c e",
          "source": "src/Factory-Data-Polynomial.html#%2A%3D",
          "type": "function"
        },
        "index": {
          "description": "Scale-up the specified polynomial by constant monomial factor http en.wikipedia.org wiki Scalar multiplication",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "(*=) *=",
          "normalized": "Polynomial a b-\u003eMonomial a b-\u003ePolynomial a b",
          "package": "factory",
          "signature": "Polynomial c e-\u003eMonomial c e-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:-42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the two specified \u003cem\u003epolynomials\u003c/em\u003e are \u003cem\u003econgruent\u003c/em\u003e in \u003cem\u003emodulo\u003c/em\u003e-arithmetic.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://planetmath.org/encyclopedia/PolynomialCongruence.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "areCongruentModulo",
          "package": "factory",
          "signature": "Polynomial c e-\u003e Polynomial c e-\u003e c-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True if the two specified polynomials are congruent in modulo arithmetic http planetmath.org encyclopedia PolynomialCongruence.html",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "areCongruentModulo",
          "normalized": "Polynomial a b-\u003ePolynomial a b-\u003ea-\u003eBool",
          "package": "factory",
          "partial": "Congruent Modulo",
          "signature": "Polynomial c e-\u003ePolynomial c e-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:areCongruentModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Evaluate the \u003cem\u003epolynomial\u003c/em\u003e at a specific \u003cem\u003eindeterminate\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: requires positive exponents; but it wouldn't really be a \u003cem\u003epolynomial\u003c/em\u003e otherwise.\n\u003c/li\u003e\u003cli\u003e If the \u003cem\u003epolynomial\u003c/em\u003e is very sparse, this may be inefficient,\n\tsince it \u003cem\u003ememoizes\u003c/em\u003e the complete sequence of powers up to the polynomial's \u003cem\u003edegree\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "evaluate",
          "package": "factory",
          "signature": "n-\u003e Polynomial n e-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the polynomial at specific indeterminate CAVEAT requires positive exponents but it wouldn really be polynomial otherwise If the polynomial is very sparse this may be inefficient since it memoizes the complete sequence of powers up to the polynomial degree",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "evaluate",
          "normalized": "a-\u003ePolynomial a b-\u003ea",
          "package": "factory",
          "signature": "n-\u003ePolynomial n e-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Return the \u003cem\u003edegree\u003c/em\u003e (AKA \u003cem\u003eorder\u003c/em\u003e) of the \u003cem\u003epolynomial\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Degree_of_a_polynomial\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/PolynomialDegree.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "getDegree",
          "package": "factory",
          "signature": "Polynomial c e -\u003e e",
          "source": "src/Factory-Data-Polynomial.html#getDegree",
          "type": "function"
        },
        "index": {
          "description": "Return the degree AKA order of the polynomial http en.wikipedia.org wiki Degree of polynomial http mathworld.wolfram.com PolynomialDegree.html",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "getDegree",
          "normalized": "Polynomial a b-\u003eb",
          "package": "factory",
          "partial": "Degree",
          "signature": "Polynomial c e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:getDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the highest-degree monomial.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "getLeadingTerm",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Monomial c e",
          "source": "src/Factory-Data-Polynomial.html#getLeadingTerm",
          "type": "function"
        },
        "index": {
          "description": "Return the highest-degree monomial",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "getLeadingTerm",
          "normalized": "Polynomial a b-\u003eMonomial a b",
          "package": "factory",
          "partial": "Leading Term",
          "signature": "Polynomial c e-\u003eMonomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:getLeadingTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003cem\u003eexponents\u003c/em\u003e of successive terms are in \u003cem\u003eascending\u003c/em\u003e order.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "inAscendingOrder",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#inAscendingOrder",
          "type": "function"
        },
        "index": {
          "description": "True if the exponents of successive terms are in ascending order",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "inAscendingOrder",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Ascending Order",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:inAscendingOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003cem\u003eexponents\u003c/em\u003e of successive terms are in \u003cem\u003edescending\u003c/em\u003e order.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "inDescendingOrder",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#inDescendingOrder",
          "type": "function"
        },
        "index": {
          "description": "True if the exponents of successive terms are in descending order",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "inDescendingOrder",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Descending Order",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:inDescendingOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003cem\u003eleading coefficient\u003c/em\u003e is one.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Monic_polynomial#Classifications\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "isMonic",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#isMonic",
          "type": "function"
        },
        "index": {
          "description": "True if the leading coefficient is one http en.wikipedia.org wiki Monic polynomial Classifications",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "isMonic",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Monic",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:isMonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if there's exactly one term.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "isMonomial",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#isMonomial",
          "type": "function"
        },
        "index": {
          "description": "True if there exactly one term",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "isMonomial",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Monomial",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:isMonomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if no term has a \u003cem\u003ecoefficient\u003c/em\u003e of zero and the \u003cem\u003eexponents\u003c/em\u003e of successive terms are in \u003cem\u003edescending\u003c/em\u003e order.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "isNormalised",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#isNormalised",
          "type": "function"
        },
        "index": {
          "description": "True if no term has coefficient of zero and the exponents of successive terms are in descending order",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "isNormalised",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Normalised",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:isNormalised"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if all \u003cem\u003eexponents\u003c/em\u003e are \u003cem\u003epositive\u003c/em\u003e integers as required.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "isPolynomial",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#isPolynomial",
          "type": "function"
        },
        "index": {
          "description": "True if all exponents are positive integers as required",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "isPolynomial",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Polynomial",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:isPolynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if there are zero terms.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "isZero",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Bool",
          "source": "src/Factory-Data-Polynomial.html#isZero",
          "type": "function"
        },
        "index": {
          "description": "True if there are zero terms",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "isZero",
          "normalized": "Polynomial a b-\u003eBool",
          "package": "factory",
          "partial": "Zero",
          "signature": "Polynomial c e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:isZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Transforms the data behind the constructor.\n\u003c/li\u003e\u003cli\u003e CAVEAT: similar to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003ePolynomial\u003c/a\u003e\u003c/code\u003e isn't an instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e since we may want to operate on both \u003cem\u003etype-parameters\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the caller is required to re-\u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e the resulting polynomial depending on the nature of the transformation of the data.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "lift",
          "package": "factory",
          "signature": "(MonomialList c1 e1 -\u003e MonomialList c2 e2) -\u003e Polynomial c1 e1 -\u003e Polynomial c2 e2",
          "source": "src/Factory-Data-Polynomial.html#lift",
          "type": "function"
        },
        "index": {
          "description": "Transforms the data behind the constructor CAVEAT similar to fmap but Polynomial isn an instance of Functor since we may want to operate on both type-parameters CAVEAT the caller is required to re normalise the resulting polynomial depending on the nature of the transformation of the data",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "lift",
          "normalized": "(MonomialList a b-\u003eMonomialList a b)-\u003ePolynomial a b-\u003ePolynomial a b",
          "package": "factory",
          "signature": "(MonomialList c e-\u003eMonomialList c e)-\u003ePolynomial c e-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an arbitrary \u003cem\u003ezeroeth-degree polynomial\u003c/em\u003e, ie. independent of the \u003cem\u003eindeterminate\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "mkConstant",
          "package": "factory",
          "signature": "c -\u003e Polynomial c e",
          "source": "src/Factory-Data-Polynomial.html#mkConstant",
          "type": "function"
        },
        "index": {
          "description": "Constructs an arbitrary zeroeth-degree polynomial ie independent of the indeterminate",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "mkConstant",
          "normalized": "a-\u003ePolynomial a b",
          "package": "factory",
          "partial": "Constant",
          "signature": "c-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:mkConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an arbitrary \u003cem\u003efirst-degree polynomial\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "mkLinear",
          "package": "factory",
          "signature": "c-\u003e c-\u003e Polynomial c e",
          "type": "function"
        },
        "index": {
          "description": "Constructs an arbitrary first-degree polynomial",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "mkLinear",
          "normalized": "a-\u003ea-\u003ePolynomial a b",
          "package": "factory",
          "partial": "Linear",
          "signature": "c-\u003ec-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:mkLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor. Constructs an arbitrary \u003cem\u003epolynomial\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "mkPolynomial",
          "package": "factory",
          "signature": "MonomialList c e -\u003e Polynomial c e",
          "source": "src/Factory-Data-Polynomial.html#mkPolynomial",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor Constructs an arbitrary polynomial",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "mkPolynomial",
          "normalized": "MonomialList a b-\u003ePolynomial a b",
          "package": "factory",
          "partial": "Polynomial",
          "signature": "MonomialList c e-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:mkPolynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces all the coefficients using \u003cem\u003emodular\u003c/em\u003e arithmetic.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "mod'",
          "package": "factory",
          "signature": "Polynomial c e-\u003e c-\u003e Polynomial c e",
          "type": "function"
        },
        "index": {
          "description": "Reduces all the coefficients using modular arithmetic",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "mod'",
          "normalized": "Polynomial a b-\u003ea-\u003ePolynomial a b",
          "package": "factory",
          "signature": "Polynomial c e-\u003ec-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:mod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts into \u003cem\u003edescending order\u003c/em\u003e of exponents, groups \u003cem\u003elike\u003c/em\u003e exponents, and calls \u003ccode\u003epruneCoefficients\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "normalise",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Polynomial c e",
          "source": "src/Factory-Data-Polynomial.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Sorts into descending order of exponents groups like exponents and calls pruneCoefficients",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "normalise",
          "normalized": "Polynomial a b-\u003ePolynomial a b",
          "package": "factory",
          "signature": "Polynomial c e-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a constant \u003cem\u003emonomial\u003c/em\u003e, independent of the \u003cem\u003eindeterminate\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "one",
          "package": "factory",
          "signature": "Polynomial c e",
          "source": "src/Factory-Data-Polynomial.html#one",
          "type": "function"
        },
        "index": {
          "description": "Constructs constant monomial independent of the indeterminate",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "one",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Raise a \u003cem\u003epolynomial\u003c/em\u003e to the specified positive integral power, but using \u003cem\u003emodulo\u003c/em\u003e-arithmetic.\n\u003c/li\u003e\u003cli\u003e Whilst one could naively implement this as \u003ccode\u003e(x Data.Ring.=^ n) \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e, this will result in arithmetic operatons on unnecessarily big integers.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "raiseModulo",
          "package": "factory",
          "signature": "Polynomial c e-\u003e power-\u003e c-\u003e Polynomial c e",
          "type": "function"
        },
        "index": {
          "description": "Raise polynomial to the specified positive integral power but using modulo arithmetic Whilst one could naively implement this as Data.Ring mod this will result in arithmetic operatons on unnecessarily big integers",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "raiseModulo",
          "normalized": "Polynomial a b-\u003ec-\u003ea-\u003ePolynomial a b",
          "package": "factory",
          "partial": "Modulo",
          "signature": "Polynomial c e-\u003epower-\u003ec-\u003ePolynomial c e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:raiseModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the type of the \u003cem\u003ecoefficient\u003c/em\u003es.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "realCoefficientsToFrac",
          "package": "factory",
          "signature": "Polynomial r e -\u003e Polynomial f e",
          "source": "src/Factory-Data-Polynomial.html#realCoefficientsToFrac",
          "type": "function"
        },
        "index": {
          "description": "Convert the type of the coefficient",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "realCoefficientsToFrac",
          "normalized": "Polynomial a b-\u003ePolynomial c b",
          "package": "factory",
          "partial": "Coefficients To Frac",
          "signature": "Polynomial r e-\u003ePolynomial f e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:realCoefficientsToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of non-zero terms in the polynomial.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "terms",
          "package": "factory",
          "signature": "Polynomial c e -\u003e Int",
          "source": "src/Factory-Data-Polynomial.html#terms",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of non-zero terms in the polynomial",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "terms",
          "normalized": "Polynomial a b-\u003eInt",
          "package": "factory",
          "signature": "Polynomial c e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:terms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003cem\u003epolynomial\u003c/em\u003e with zero terms.\n\u003c/p\u003e",
          "module": "Factory.Data.Polynomial",
          "name": "zero",
          "package": "factory",
          "signature": "Polynomial c e",
          "source": "src/Factory-Data-Polynomial.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Constructs polynomial with zero terms",
          "hierarchy": "Factory Data Polynomial",
          "module": "Factory.Data.Polynomial",
          "name": "zero",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Polynomial.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a list of \u003cem\u003eprime factors\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e The product of this list of prime-factors represents the \u003cem\u003ecomposite\u003c/em\u003e integer from which they were originally extracted.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "PrimeFactors",
          "package": "factory",
          "source": "src/Factory-Data-PrimeFactors.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes list of prime factors The product of this list of prime-factors represents the composite integer from which they were originally extracted",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "PrimeFactors",
          "package": "factory",
          "partial": "Prime Factors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Each element of this list represents one \u003cem\u003eprime-factor\u003c/em\u003e, expressed as an \u003cem\u003eexponential\u003c/em\u003e with a \u003cem\u003eprime\u003c/em\u003e base, of the original integer.\n\u003c/li\u003e\u003cli\u003e Whilst it only makes sense for both the \u003cem\u003ebase\u003c/em\u003e and \u003cem\u003eexponent\u003c/em\u003e to be integral, these constrains are applied at the function-level as required.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "Factors",
          "package": "factory",
          "source": "src/Factory-Data-PrimeFactors.html#Factors",
          "type": "type"
        },
        "index": {
          "description": "Each element of this list represents one prime-factor expressed as an exponential with prime base of the original integer Whilst it only makes sense for both the base and exponent to be integral these constrains are applied at the function-level as required",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "Factors",
          "package": "factory",
          "partial": "Factors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#t:Factors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Multiplies two lists each representing a product of \u003cem\u003eprime factors\u003c/em\u003e, and sorted by increasing \u003cem\u003ebase\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Preserves the sort-order.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "(\u003e*\u003c)",
          "package": "factory",
          "signature": "Factors base exponent -\u003e Factors base exponent -\u003e Factors base exponent",
          "source": "src/Factory-Data-PrimeFactors.html#%3E%2A%3C",
          "type": "function"
        },
        "index": {
          "description": "Multiplies two lists each representing product of prime factors and sorted by increasing base Preserves the sort-order",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "(\u003e*\u003c) \u003e*\u003c",
          "normalized": "Factors a b-\u003eFactors a b-\u003eFactors a b",
          "package": "factory",
          "signature": "Factors base exponent-\u003eFactors base exponent-\u003eFactors base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#v:-62--42--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Divides two lists, each representing a product of \u003cem\u003eprime factors\u003c/em\u003e, and sorted by increasing \u003cem\u003ebase\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Preserves the sort-order.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "(\u003e/\u003c)",
          "package": "factory",
          "signature": "Factors base exponent-\u003e Factors base exponent-\u003e (Factors base exponent, Factors base exponent)",
          "type": "function"
        },
        "index": {
          "description": "Divides two lists each representing product of prime factors and sorted by increasing base Preserves the sort-order",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "(\u003e/\u003c) \u003e/\u003c",
          "normalized": "Factors a b-\u003eFactors a b-\u003e(Factors a b,Factors a b)",
          "package": "factory",
          "signature": "Factors base exponent-\u003eFactors base exponent-\u003e(Factors base exponent,Factors base exponent)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#v:-62--47--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Raise the product of a list \u003cem\u003eprime factors\u003c/em\u003e to the specified power.\n\u003c/li\u003e\u003cli\u003e CAVEAT: this merely involves raising each element to the specified power; cf. raising a \u003cem\u003epolynomial\u003c/em\u003e to a power.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "(\u003e^)",
          "package": "factory",
          "signature": "Factors base exponent -\u003e exponent -\u003e Factors base exponent",
          "source": "src/Factory-Data-PrimeFactors.html#%3E%5E",
          "type": "function"
        },
        "index": {
          "description": "Raise the product of list prime factors to the specified power CAVEAT this merely involves raising each element to the specified power cf raising polynomial to power",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "(\u003e^) \u003e^",
          "normalized": "Factors a b-\u003eb-\u003eFactors a b",
          "package": "factory",
          "signature": "Factors base exponent-\u003eexponent-\u003eFactors base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#v:-62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Insert a \u003ccode\u003e\u003ca\u003eExponential\u003c/a\u003e\u003c/code\u003e, into a list representing a product of \u003cem\u003eprime factors\u003c/em\u003e, multiplying with any incumbent of like \u003cem\u003ebase\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e The list should be sorted by increasing \u003cem\u003ebase\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Preserves the sort-order.\n\u003c/li\u003e\u003cli\u003e CAVEAT: this is tolerably efficient for sporadic insertion; to insert a list, use \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "insert'",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e Factors base exponent -\u003e Factors base exponent",
          "source": "src/Factory-Data-PrimeFactors.html#insert%27",
          "type": "function"
        },
        "index": {
          "description": "Insert Exponential into list representing product of prime factors multiplying with any incumbent of like base The list should be sorted by increasing base Preserves the sort-order CAVEAT this is tolerably efficient for sporadic insertion to insert list use",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "insert'",
          "normalized": "Exponential a b-\u003eFactors a b-\u003eFactors a b",
          "package": "factory",
          "signature": "Exponential base exponent-\u003eFactors base exponent-\u003eFactors base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a list of \u003cem\u003eprime factors\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "product'",
          "package": "factory",
          "signature": "BisectionRatio-\u003e MinLength-\u003e Factors base exponent-\u003e base",
          "type": "function"
        },
        "index": {
          "description": "Multiply list of prime factors",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "product'",
          "normalized": "BisectionRatio-\u003eMinLength-\u003eFactors a b-\u003ea",
          "package": "factory",
          "signature": "BisectionRatio-\u003eMinLength-\u003eFactors base exponent-\u003ebase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#v:product-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Sorts a list representing a product of \u003cem\u003eprime factors\u003c/em\u003e by increasing \u003cem\u003ebase\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Multiplies \u003ccode\u003e\u003ca\u003eExponential\u003c/a\u003e\u003c/code\u003es of similar \u003cem\u003ebase\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeFactors",
          "name": "reduce",
          "package": "factory",
          "signature": "Factors base exponent -\u003e Factors base exponent",
          "source": "src/Factory-Data-PrimeFactors.html#reduce",
          "type": "function"
        },
        "index": {
          "description": "Sorts list representing product of prime factors by increasing base Multiplies Exponential of similar base",
          "hierarchy": "Factory Data PrimeFactors",
          "module": "Factory.Data.PrimeFactors",
          "name": "reduce",
          "normalized": "Factors a b-\u003eFactors a b",
          "package": "factory",
          "signature": "Factors base exponent-\u003eFactors base exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeFactors.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines a \u003cem\u003eprime-wheel\u003c/em\u003e, for use in prime-number generation; \u003ca\u003ehttp://en.wikipedia.org/wiki/Wheel_factorization\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "PrimeWheel",
          "package": "factory",
          "source": "src/Factory-Data-PrimeWheel.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines prime-wheel for use in prime-number generation http en.wikipedia.org wiki Wheel factorization",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "PrimeWheel",
          "package": "factory",
          "partial": "Prime Wheel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouples a candidate prime with a \u003cem\u003erolling wheel\u003c/em\u003e, to define the distance rolled.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "Distance",
          "package": "factory",
          "source": "src/Factory-Data-PrimeWheel.html#Distance",
          "type": "type"
        },
        "index": {
          "description": "Couples candidate prime with rolling wheel to define the distance rolled",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "Distance",
          "package": "factory",
          "partial": "Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the \u003cem\u003ewheel\u003c/em\u003e, measured by the number of primes from which it is composed.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "NPrimes",
          "package": "factory",
          "source": "src/Factory-Data-PrimeWheel.html#NPrimes",
          "type": "type"
        },
        "index": {
          "description": "The size of the wheel measured by the number of primes from which it is composed",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "NPrimes",
          "package": "factory",
          "partial": "NPrimes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#t:NPrimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite increasing sequence, of the multiples of a specific prime.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "PrimeMultiples",
          "package": "factory",
          "source": "src/Factory-Data-PrimeWheel.html#PrimeMultiples",
          "type": "type"
        },
        "index": {
          "description": "An infinite increasing sequence of the multiples of specific prime",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "PrimeMultiples",
          "package": "factory",
          "partial": "Prime Multiples",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#t:PrimeMultiples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A conceptual \u003cem\u003ewheel\u003c/em\u003e, with irregularly spaced spokes; \u003ca\u003ehttp://www.haskell.org/haskellwiki/Prime_numbers_miscellaneous#Prime_Wheels\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e On being rolled, the trace of the spokes, identifies candidates which are \u003cem\u003ecoprime\u003c/em\u003e to those primes from which the \u003cem\u003ewheel\u003c/em\u003e was composed.\n\u003c/li\u003e\u003cli\u003e One can alternatively view this as a set of vertical nested rings, each with a \u003cem\u003eprime circumference\u003c/em\u003e, and touching at its lowest point.\n\tEach has a single mark on its \u003cem\u003ecircumference\u003c/em\u003e, which when rolled identifies multiples of that \u003cem\u003ecircumference\u003c/em\u003e.\n\tWhen the complete set is rolled, from the state where all marks are coincident, all multiples of the set of primes, are traced.\n\u003c/li\u003e\u003cli\u003e CAVEAT: The distance required to return to this state (the wheel's \u003cem\u003ecircumference\u003c/em\u003e), grows rapidly with the number of primes:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\tzip [0 ..] . scanl (*) 1 $ [2,3,5,7,11,13,17,19,23,29,31]\n\t[(0,1),(1,2),(2,6),(3,30),(4,210),(5,2310),(6,30030),(7,510510),(8,9699690),(9,223092870),(10,6469693230),(11,200560490130)]\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e The number of spokes also grows rapidly with the number of primes:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\tzip [0 ..] . scanl (*) 1 . map pred $ [2,3,5,7,11,13,17,19,23,29,31]\n\t[(0,1),(1,1),(2,2),(3,8),(4,48),(5,480),(6,5760),(7,92160),(8,1658880),(9,36495360),(10,1021870080),(11,30656102400)]\n\u003c/pre\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "PrimeWheel",
          "package": "factory",
          "source": "src/Factory-Data-PrimeWheel.html#PrimeWheel",
          "type": "data"
        },
        "index": {
          "description": "conceptual wheel with irregularly spaced spokes http www.haskell.org haskellwiki Prime numbers miscellaneous Prime Wheels On being rolled the trace of the spokes identifies candidates which are coprime to those primes from which the wheel was composed One can alternatively view this as set of vertical nested rings each with prime circumference and touching at its lowest point Each has single mark on its circumference which when rolled identifies multiples of that circumference When the complete set is rolled from the state where all marks are coincident all multiples of the set of primes are traced CAVEAT The distance required to return to this state the wheel circumference grows rapidly with the number of primes zip scanl The number of spokes also grows rapidly with the number of primes zip scanl map pred",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "PrimeWheel",
          "package": "factory",
          "partial": "Prime Wheel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#t:PrimeWheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The optimal number of low primes from which to build the \u003cem\u003ewheel\u003c/em\u003e, grows with the number of primes required;\n\tthe \u003cem\u003ecircumference\u003c/em\u003e should be approximately the \u003cem\u003esquare-root\u003c/em\u003e of the number of integers it will be required to sieve.\n\u003c/li\u003e\u003cli\u003e CAVEAT: one greater than this is returned, which empirically seems better.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "estimateOptimalSize",
          "package": "factory",
          "signature": "i -\u003e NPrimes",
          "source": "src/Factory-Data-PrimeWheel.html#estimateOptimalSize",
          "type": "function"
        },
        "index": {
          "description": "The optimal number of low primes from which to build the wheel grows with the number of primes required the circumference should be approximately the square-root of the number of integers it will be required to sieve CAVEAT one greater than this is returned which empirically seems better",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "estimateOptimalSize",
          "normalized": "a-\u003eNPrimes",
          "package": "factory",
          "partial": "Optimal Size",
          "signature": "i-\u003eNPrimes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:estimateOptimalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Generates multiples of the specified prime, starting from its \u003cem\u003esquare\u003c/em\u003e,\n\tskipping those multiples of the low primes from which the specified \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e was composed,\n\tand which therefore, the \u003cem\u003ewheel\u003c/em\u003e won't generate as candidates. Eg:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\tPrime\tRotating PrimeWheel 3\tOutput\n\t=====\t=====================\t======\n\t7\t[4,2,4,2,4,6,2,6]\t[49,77,91,119,133,161,203,217,259 ..]\n\t11\t[2,4,2,4,6,2,6,4]\t[121,143,187,209,253,319,341,407 ..]\n\t13\t[4,2,4,6,2,6,4,2]\t[169,221,247,299,377,403,481,533,559 ..]\n\u003c/pre\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "generateMultiples",
          "package": "factory",
          "signature": "i-\u003e [i]-\u003e [i]",
          "type": "function"
        },
        "index": {
          "description": "Generates multiples of the specified prime starting from its square skipping those multiples of the low primes from which the specified PrimeWheel was composed and which therefore the wheel won generate as candidates Eg Prime Rotating PrimeWheel Output",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "generateMultiples",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "factory",
          "partial": "Multiples",
          "signature": "i-\u003e[i]-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:generateMultiples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ecircumference\u003c/em\u003e of the specified \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "getCircumference",
          "package": "factory",
          "signature": "PrimeWheel i -\u003e i",
          "source": "src/Factory-Data-PrimeWheel.html#getCircumference",
          "type": "function"
        },
        "index": {
          "description": "The circumference of the specified PrimeWheel",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "getCircumference",
          "normalized": "PrimeWheel a-\u003ea",
          "package": "factory",
          "partial": "Circumference",
          "signature": "PrimeWheel i-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:getCircumference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of spokes in the specified \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "getSpokeCount",
          "package": "factory",
          "signature": "PrimeWheel i -\u003e i",
          "source": "src/Factory-Data-PrimeWheel.html#getSpokeCount",
          "type": "function"
        },
        "index": {
          "description": "The number of spokes in the specified PrimeWheel",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "getSpokeCount",
          "normalized": "PrimeWheel a-\u003ea",
          "package": "factory",
          "partial": "Spoke Count",
          "signature": "PrimeWheel i-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:getSpokeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for a \u003cem\u003ewheel\u003c/em\u003e from the specified number of low primes.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The optimal number of low primes from which to build the \u003cem\u003ewheel\u003c/em\u003e, grows with the number of primes required;\n\tthe \u003cem\u003ecircumference\u003c/em\u003e should be approximately the \u003cem\u003esquare-root\u003c/em\u003e of the number of integers it will be required to sieve.\n\u003c/li\u003e\u003cli\u003e The sequence of gaps between spokes on the \u003cem\u003ewheel\u003c/em\u003e is \u003cem\u003esymmetrical under reflection\u003c/em\u003e;\n\tthough two values lie \u003cem\u003eon\u003c/em\u003e the axis, that aren't part of this symmetry. Eg:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\tnPrimes\tGaps\n\t======\t====\n\t0\t[1]\n\t1\t[2]\t--The terminal gap for all subsequent wheels is '2'; [(succ circumference `mod` circumference) - (pred circumference `mod` circumference)].\n\t2\t[4,2]\t--Both points are on the axis, so the symmetry isn't yet clear.\n\t3\t[6,4,2,4,2,4,6,2]\n\t4\t[10,2,4,2,4,6,2,6,4,2,4,6,6,2,6,4,2,6,4,6,8,4,2,4,2,4,8,6,4,6,2,4,6,2,6,6,4,2,4,6,2,6,4,2,4,2,10,2]\n\u003c/pre\u003e\u003cp\u003eExploitation of this property has proved counter-productive, probably because it requires \u003cem\u003estrict evaluation\u003c/em\u003e,\n\texposing the user to the full cost of inadvertently choosing a \u003cem\u003ewheel\u003c/em\u003e, which in practice, is rotated less than once.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "mkPrimeWheel",
          "package": "factory",
          "signature": "NPrimes -\u003e PrimeWheel i",
          "source": "src/Factory-Data-PrimeWheel.html#mkPrimeWheel",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for wheel from the specified number of low primes The optimal number of low primes from which to build the wheel grows with the number of primes required the circumference should be approximately the square-root of the number of integers it will be required to sieve The sequence of gaps between spokes on the wheel is symmetrical under reflection though two values lie on the axis that aren part of this symmetry Eg nPrimes Gaps The terminal gap for all subsequent wheels is succ circumference mod circumference pred circumference mod circumference Both points are on the axis so the symmetry isn yet clear Exploitation of this property has proved counter-productive probably because it requires strict evaluation exposing the user to the full cost of inadvertently choosing wheel which in practice is rotated less than once",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "mkPrimeWheel",
          "normalized": "NPrimes-\u003ePrimeWheel a",
          "package": "factory",
          "partial": "Prime Wheel",
          "signature": "NPrimes-\u003ePrimeWheel i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:mkPrimeWheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an infinite, increasing sequence of candidate primes, from the specified \u003cem\u003ewheel\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "roll",
          "package": "factory",
          "signature": "PrimeWheel i -\u003e [Distance i]",
          "source": "src/Factory-Data-PrimeWheel.html#roll",
          "type": "function"
        },
        "index": {
          "description": "Generate an infinite increasing sequence of candidate primes from the specified wheel",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "roll",
          "normalized": "PrimeWheel a-\u003e[Distance a]",
          "package": "factory",
          "signature": "PrimeWheel i-\u003e[Distance i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new candidate prime, from a \u003cem\u003erolling wheel\u003c/em\u003e, and the current candidate.\n\u003c/p\u003e",
          "module": "Factory.Data.PrimeWheel",
          "name": "rotate",
          "package": "factory",
          "signature": "Distance i -\u003e Distance i",
          "source": "src/Factory-Data-PrimeWheel.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Generates new candidate prime from rolling wheel and the current candidate",
          "hierarchy": "Factory Data PrimeWheel",
          "module": "Factory.Data.PrimeWheel",
          "name": "rotate",
          "normalized": "Distance a-\u003eDistance a",
          "package": "factory",
          "signature": "Distance i-\u003eDistance i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-PrimeWheel.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a \u003cem\u003eQuotient Ring\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Quotient_ring\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e This is a \u003cem\u003ering\u003c/em\u003e composed from a residue-class resulting from \u003cem\u003emodular\u003c/em\u003e division.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.QuotientRing",
          "name": "QuotientRing",
          "package": "factory",
          "source": "src/Factory-Data-QuotientRing.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes Quotient Ring http en.wikipedia.org wiki Quotient ring This is ring composed from residue-class resulting from modular division",
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "QuotientRing",
          "package": "factory",
          "partial": "Quotient Ring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a sub-class of \u003ccode\u003e\u003ca\u003eRing\u003c/a\u003e\u003c/code\u003e, in which division is implemented.\n\u003c/p\u003e",
          "module": "Factory.Data.QuotientRing",
          "name": "QuotientRing",
          "package": "factory",
          "source": "src/Factory-Data-QuotientRing.html#QuotientRing",
          "type": "class"
        },
        "index": {
          "description": "Defines sub-class of Ring in which division is implemented",
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "QuotientRing",
          "package": "factory",
          "partial": "Quotient Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#t:QuotientRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the two specified \u003ccode\u003e\u003ca\u003eQuotientRing\u003c/a\u003e\u003c/code\u003es are \u003cem\u003econgruent\u003c/em\u003e in \u003cem\u003emodulo\u003c/em\u003e-arithmetic, where the \u003cem\u003emodulus\u003c/em\u003e is a third \u003ccode\u003e\u003ca\u003eQuotientRing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.usna.edu/Users/math/wdj/book/node74.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.QuotientRing",
          "name": "areCongruentModulo",
          "package": "factory",
          "signature": "q-\u003e q-\u003e q-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True if the two specified QuotientRing are congruent in modulo arithmetic where the modulus is third QuotientRing http www.usna.edu Users math wdj book node74.html",
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "areCongruentModulo",
          "normalized": "a-\u003ea-\u003ea-\u003eBool",
          "package": "factory",
          "partial": "Congruent Modulo",
          "signature": "q-\u003eq-\u003eq-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#v:areCongruentModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the second operand \u003cem\u003edivides\u003c/em\u003e the first.\n\u003c/p\u003e",
          "module": "Factory.Data.QuotientRing",
          "name": "isDivisibleBy",
          "package": "factory",
          "signature": "q-\u003e q-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True if the second operand divides the first",
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "isDivisibleBy",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "factory",
          "partial": "Divisible By",
          "signature": "q-\u003eq-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#v:isDivisibleBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003equotient\u003c/em\u003e, after division of the two specified \u003ccode\u003e\u003ca\u003eQuotientRing\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Factory.Data.QuotientRing",
          "name": "quot'",
          "package": "factory",
          "signature": "q-\u003e q-\u003e q",
          "type": "function"
        },
        "index": {
          "description": "Returns the quotient after division of the two specified QuotientRing",
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "quot'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "factory",
          "signature": "q-\u003eq-\u003eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#v:quot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.QuotientRing",
          "name": "quotRem'",
          "package": "factory",
          "signature": "quotRem'",
          "source": "src/Factory-Data-QuotientRing.html#quotRem%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "quotRem'",
          "package": "factory",
          "partial": "Rem'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#v:quotRem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003eremainder\u003c/em\u003e, after division of the two specified \u003ccode\u003e\u003ca\u003eQuotientRing\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Factory.Data.QuotientRing",
          "name": "rem'",
          "package": "factory",
          "signature": "q-\u003e q-\u003e q",
          "type": "function"
        },
        "index": {
          "description": "Returns the remainder after division of the two specified QuotientRing",
          "hierarchy": "Factory Data QuotientRing",
          "module": "Factory.Data.QuotientRing",
          "name": "rem'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "factory",
          "signature": "q-\u003eq-\u003eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-QuotientRing.html#v:rem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes a \u003cem\u003ering\u003c/em\u003e and operations on its members.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Ring_%28mathematics%29\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.numericana.com/answer/rings.htm\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Data.Ring",
          "name": "Ring",
          "package": "factory",
          "source": "src/Factory-Data-Ring.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes ring and operations on its members http en.wikipedia.org wiki Ring mathematics http www.numericana.com answer rings.htm",
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "Ring",
          "package": "factory",
          "partial": "Ring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Define both the operations applicable to all members of the \u003cem\u003ering\u003c/em\u003e, and its mandatory members.\n\u003c/li\u003e\u003cli\u003e Minimal definition; \u003ccode\u003e\u003ca\u003e=+=\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e=*=\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eadditiveInverse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emultiplicativeIdentity\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eadditiveIdentity\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Ring",
          "name": "Ring",
          "package": "factory",
          "source": "src/Factory-Data-Ring.html#Ring",
          "type": "class"
        },
        "index": {
          "description": "Define both the operations applicable to all members of the ring and its mandatory members Minimal definition additiveInverse multiplicativeIdentity additiveIdentity",
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "Ring",
          "package": "factory",
          "partial": "Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#t:Ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "(=*=)",
          "package": "factory",
          "signature": "(=*=)",
          "source": "src/Factory-Data-Ring.html#%3D%2A%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "(=*=) =*=",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:-61--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "(=+=)",
          "package": "factory",
          "signature": "(=+=)",
          "source": "src/Factory-Data-Ring.html#%3D%2B%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "(=+=) =+=",
          "normalized": "()",
          "package": "factory",
          "signature": "()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:-61--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "(=-=)",
          "package": "factory",
          "signature": "(=-=)",
          "source": "src/Factory-Data-Ring.html#%3D-%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "(=-=) =-=",
          "normalized": "()",
          "package": "factory",
          "signature": "()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:-61--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Raise a \u003cem\u003ering\u003c/em\u003e-member to the specified positive integral power.\n\u003c/li\u003e\u003cli\u003e Exponentiation is implemented as a sequence of either squares of, or multiplications by, the \u003cem\u003ering\u003c/em\u003e-member;\n\t\u003ca\u003ehttp://en.wikipedia.org/wiki/Exponentiation_by_squaring\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Data.Ring",
          "name": "(=^)",
          "package": "factory",
          "signature": "r -\u003e power -\u003e r",
          "source": "src/Factory-Data-Ring.html#%3D%5E",
          "type": "function"
        },
        "index": {
          "description": "Raise ring member to the specified positive integral power Exponentiation is implemented as sequence of either squares of or multiplications by the ring member http en.wikipedia.org wiki Exponentiation by squaring",
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "(=^) =^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "factory",
          "signature": "r-\u003epower-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:-61--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "additiveIdentity",
          "package": "factory",
          "signature": "additiveIdentity",
          "source": "src/Factory-Data-Ring.html#additiveIdentity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "additiveIdentity",
          "package": "factory",
          "partial": "Identity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:additiveIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "additiveInverse",
          "package": "factory",
          "signature": "additiveInverse",
          "source": "src/Factory-Data-Ring.html#additiveInverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "additiveInverse",
          "package": "factory",
          "partial": "Inverse",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:additiveInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "multiplicativeIdentity",
          "package": "factory",
          "signature": "multiplicativeIdentity",
          "source": "src/Factory-Data-Ring.html#multiplicativeIdentity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "multiplicativeIdentity",
          "package": "factory",
          "partial": "Identity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:multiplicativeIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003eproduct\u003c/em\u003e of the list of \u003cem\u003ering\u003c/em\u003e-members.\n\u003c/p\u003e",
          "module": "Factory.Data.Ring",
          "name": "product'",
          "package": "factory",
          "signature": "BisectionRatio -\u003e MinLength -\u003e [r] -\u003e r",
          "source": "src/Factory-Data-Ring.html#product%27",
          "type": "function"
        },
        "index": {
          "description": "Returns the product of the list of ring members",
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "product'",
          "normalized": "BisectionRatio-\u003eMinLength-\u003e[a]-\u003ea",
          "package": "factory",
          "signature": "BisectionRatio-\u003eMinLength-\u003e[r]-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:product-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Data.Ring",
          "name": "square",
          "package": "factory",
          "signature": "square",
          "source": "src/Factory-Data-Ring.html#square",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "square",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003esum\u003c/em\u003e of the list of \u003cem\u003ering\u003c/em\u003e-members.\n\u003c/p\u003e",
          "module": "Factory.Data.Ring",
          "name": "sum'",
          "package": "factory",
          "signature": "BisectionRatio -\u003e MinLength -\u003e [r] -\u003e r",
          "source": "src/Factory-Data-Ring.html#sum%27",
          "type": "function"
        },
        "index": {
          "description": "Returns the sum of the list of ring members",
          "hierarchy": "Factory Data Ring",
          "module": "Factory.Data.Ring",
          "name": "sum'",
          "normalized": "BisectionRatio-\u003eMinLength-\u003e[a]-\u003ea",
          "package": "factory",
          "signature": "BisectionRatio-\u003eMinLength-\u003e[r]-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Data-Ring.html#v:sum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDetermines the \u003cem\u003eArithmetic-geometric mean\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Arithmetic-geometric_mean\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "ArithmeticGeometricMean",
          "package": "factory",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Determines the Arithmetic-geometric mean http en.wikipedia.org wiki Arithmetic-geometric mean",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "ArithmeticGeometricMean",
          "package": "factory",
          "partial": "Arithmetic Geometric Mean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates both \u003cem\u003earithmetic\u003c/em\u003e and \u003cem\u003egeometric\u003c/em\u003e means.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "AGM",
          "package": "factory",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#AGM",
          "type": "type"
        },
        "index": {
          "description": "Encapsulates both arithmetic and geometric means",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "AGM",
          "package": "factory",
          "partial": "AGM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#t:AGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the \u003cem\u003earithmetic mean\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Arithmetic_mean\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "ArithmeticMean",
          "package": "factory",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#ArithmeticMean",
          "type": "type"
        },
        "index": {
          "description": "The type of the arithmetic mean http en.wikipedia.org wiki Arithmetic mean",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "ArithmeticMean",
          "package": "factory",
          "partial": "Arithmetic Mean",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#t:ArithmeticMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the \u003cem\u003egeometric mean\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Geometric_mean\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "GeometricMean",
          "package": "factory",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#GeometricMean",
          "type": "type"
        },
        "index": {
          "description": "The type of the geometric mean http en.wikipedia.org wiki Geometric mean",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "GeometricMean",
          "package": "factory",
          "partial": "Geometric Mean",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#t:GeometricMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an infinite list which converges on the \u003cem\u003eArithmetic-geometric mean\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "convergeToAGM",
          "package": "factory",
          "signature": "squareRootAlgorithm -\u003e DecimalDigits -\u003e AGM -\u003e [AGM]",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#convergeToAGM",
          "type": "function"
        },
        "index": {
          "description": "Returns an infinite list which converges on the Arithmetic-geometric mean",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "convergeToAGM",
          "normalized": "a-\u003eDecimalDigits-\u003eAGM-\u003e[AGM]",
          "package": "factory",
          "partial": "To AGM",
          "signature": "squareRootAlgorithm-\u003eDecimalDigits-\u003eAGM-\u003e[AGM]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#v:convergeToAGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "getArithmeticMean",
          "package": "factory",
          "signature": "AGM -\u003e ArithmeticMean",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#getArithmeticMean",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "getArithmeticMean",
          "normalized": "AGM-\u003eArithmeticMean",
          "package": "factory",
          "partial": "Arithmetic Mean",
          "signature": "AGM-\u003eArithmeticMean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#v:getArithmeticMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "getGeometricMean",
          "package": "factory",
          "signature": "AGM -\u003e GeometricMean",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#getGeometricMean",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "getGeometricMean",
          "normalized": "AGM-\u003eGeometricMean",
          "package": "factory",
          "partial": "Geometric Mean",
          "signature": "AGM-\u003eGeometricMean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#v:getGeometricMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that both \u003cem\u003emeans\u003c/em\u003e are positive, as required for the \u003cem\u003egeometric mean\u003c/em\u003e to be consistently \u003cem\u003ereal\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "isValid",
          "package": "factory",
          "signature": "AGM -\u003e Bool",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Checks that both means are positive as required for the geometric mean to be consistently real",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "isValid",
          "normalized": "AGM-\u003eBool",
          "package": "factory",
          "partial": "Valid",
          "signature": "AGM-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bounds within which the \u003ccode\u003e\u003ca\u003eAGM\u003c/a\u003e\u003c/code\u003e has been constrained.\n\u003c/p\u003e",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "spread",
          "package": "factory",
          "signature": "AGM -\u003e Rational",
          "source": "src/Factory-Math-ArithmeticGeometricMean.html#spread",
          "type": "function"
        },
        "index": {
          "description": "Returns the bounds within which the AGM has been constrained",
          "hierarchy": "Factory Math ArithmeticGeometricMean",
          "module": "Factory.Math.ArithmeticGeometricMean",
          "name": "spread",
          "normalized": "AGM-\u003eRational",
          "package": "factory",
          "signature": "AGM-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-ArithmeticGeometricMean.html#v:spread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Provides a polymorphic algorithm, to \u003cem\u003eunfold\u003c/em\u003e a list into a tree, to which an \u003cem\u003eassociative binary operator\u003c/em\u003e is then applied to re-\u003cem\u003efold\u003c/em\u003e the tree to a \u003cem\u003escalar\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Implementations of this strategy have been provided for \u003cem\u003eaddition\u003c/em\u003e and \u003cem\u003emultiplication\u003c/em\u003e,\n\tthough other associative binary operators, like \u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e could also be used.\n\u003c/li\u003e\u003cli\u003e Where the contents of the list are consecutive, a more efficient implementation is available in \u003cem\u003eFactory.Data.Interval\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.DivideAndConquer",
          "name": "DivideAndConquer",
          "package": "factory",
          "source": "src/Factory-Math-DivideAndConquer.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Provides polymorphic algorithm to unfold list into tree to which an associative binary operator is then applied to re fold the tree to scalar Implementations of this strategy have been provided for addition and multiplication though other associative binary operators like gcd or lcm could also be used Where the contents of the list are consecutive more efficient implementation is available in Factory.Data.Interval",
          "hierarchy": "Factory Math DivideAndConquer",
          "module": "Factory.Math.DivideAndConquer",
          "name": "DivideAndConquer",
          "package": "factory",
          "partial": "Divide And Conquer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-DivideAndConquer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The ratio of the original list-length at which to bisect.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the value can overflow.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.DivideAndConquer",
          "name": "BisectionRatio",
          "package": "factory",
          "source": "src/Factory-Math-DivideAndConquer.html#BisectionRatio",
          "type": "type"
        },
        "index": {
          "description": "The ratio of the original list-length at which to bisect CAVEAT the value can overflow",
          "hierarchy": "Factory Math DivideAndConquer",
          "module": "Factory.Math.DivideAndConquer",
          "name": "BisectionRatio",
          "package": "factory",
          "partial": "Bisection Ratio",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-DivideAndConquer.html#t:BisectionRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list-length beneath which to terminate bisection.\n\u003c/p\u003e",
          "module": "Factory.Math.DivideAndConquer",
          "name": "MinLength",
          "package": "factory",
          "source": "src/Factory-Math-DivideAndConquer.html#MinLength",
          "type": "type"
        },
        "index": {
          "description": "The list-length beneath which to terminate bisection",
          "hierarchy": "Factory Math DivideAndConquer",
          "module": "Factory.Math.DivideAndConquer",
          "name": "MinLength",
          "package": "factory",
          "partial": "Min Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-DivideAndConquer.html#t:MinLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Reduces a list to a single scalar encapsulated in a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e,\n\tusing a \u003cem\u003edivide-and-conquer\u003c/em\u003e strategy,\n\tbisecting the list and recursively evaluating each part; \u003ca\u003ehttp://en.wikipedia.org/wiki/Divide_and_conquer_algorithm\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e By choosing a \u003ccode\u003ebisectionRatio\u003c/code\u003e other than \u003ccode\u003e(1 % 2)\u003c/code\u003e, the bisection can be made asymmetrical.\n\tThe specified ratio represents the length of the left-hand portion, over the original list-length;\n\teg. \u003ccode\u003e(1 % 3)\u003c/code\u003e results in the first part, half the length of the second.\n\u003c/li\u003e\u003cli\u003e This process of recursive bisection, is terminated beneath the specified minimum list-length,\n\tafter which the \u003cem\u003emonoid\u003c/em\u003e's binary operator is directly \u003cem\u003efolded\u003c/em\u003e over the list.\n\u003c/li\u003e\u003cli\u003e One can view this as a \u003ca\u003ehttp://en.wikipedia.org/wiki/Hylomorphism_%28computer_science%29\u003c/a\u003e,\n\tin which the list is exploded into a binary tree-structure\n\t(each leaf of which contains a list of up to \u003ccode\u003eminLength\u003c/code\u003e integers, and each node of which contains an associative binary operator),\n\tand then collapsed to a scalar, by application of the operators.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.DivideAndConquer",
          "name": "divideAndConquer",
          "package": "factory",
          "signature": "BisectionRatio-\u003e MinLength-\u003e [monoid]-\u003e monoid",
          "type": "function"
        },
        "index": {
          "description": "Reduces list to single scalar encapsulated in Monoid using divide-and-conquer strategy bisecting the list and recursively evaluating each part http en.wikipedia.org wiki Divide and conquer algorithm By choosing bisectionRatio other than the bisection can be made asymmetrical The specified ratio represents the length of the left-hand portion over the original list-length eg results in the first part half the length of the second This process of recursive bisection is terminated beneath the specified minimum list-length after which the monoid binary operator is directly folded over the list One can view this as http en.wikipedia.org wiki Hylomorphism computer science in which the list is exploded into binary tree-structure each leaf of which contains list of up to minLength integers and each node of which contains an associative binary operator and then collapsed to scalar by application of the operators",
          "hierarchy": "Factory Math DivideAndConquer",
          "module": "Factory.Math.DivideAndConquer",
          "name": "divideAndConquer",
          "normalized": "BisectionRatio-\u003eMinLength-\u003e[a]-\u003ea",
          "package": "factory",
          "partial": "And Conquer",
          "signature": "BisectionRatio-\u003eMinLength-\u003e[monoid]-\u003emonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-DivideAndConquer.html#v:divideAndConquer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Multiplies the specified list of numbers.\n\u003c/li\u003e\u003cli\u003e Since the result can be large, \u003ccode\u003e\u003ca\u003edivideAndConquer\u003c/a\u003e\u003c/code\u003e is used in an attempt to form operands of a similar order of magnitude,\n\twhich creates scope for the use of more efficient multiplication-algorithms.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.DivideAndConquer",
          "name": "product'",
          "package": "factory",
          "signature": "BisectionRatio-\u003e MinLength-\u003e [n]-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Multiplies the specified list of numbers Since the result can be large divideAndConquer is used in an attempt to form operands of similar order of magnitude which creates scope for the use of more efficient multiplication-algorithms",
          "hierarchy": "Factory Math DivideAndConquer",
          "module": "Factory.Math.DivideAndConquer",
          "name": "product'",
          "normalized": "BisectionRatio-\u003eMinLength-\u003e[a]-\u003ea",
          "package": "factory",
          "signature": "BisectionRatio-\u003eMinLength-\u003e[n]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-DivideAndConquer.html#v:product-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Sums the specified list of numbers.\n\u003c/li\u003e\u003cli\u003e Since the result can be large, \u003ccode\u003e\u003ca\u003edivideAndConquer\u003c/a\u003e\u003c/code\u003e is used in an attempt to form operands of a similar order of magnitude,\n\twhich creates scope for the use of more efficient multiplication-algorithms.\n\t\u003cem\u003eMultiplication\u003c/em\u003e is required for the \u003cem\u003eaddition\u003c/em\u003e of \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e numbers by cross-multiplication;\n\tthis function is unlikely to be useful for other numbers.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.DivideAndConquer",
          "name": "sum'",
          "package": "factory",
          "signature": "BisectionRatio-\u003e MinLength-\u003e [n]-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Sums the specified list of numbers Since the result can be large divideAndConquer is used in an attempt to form operands of similar order of magnitude which creates scope for the use of more efficient multiplication-algorithms Multiplication is required for the addition of Rational numbers by cross-multiplication this function is unlikely to be useful for other numbers",
          "hierarchy": "Factory Math DivideAndConquer",
          "module": "Factory.Math.DivideAndConquer",
          "name": "sum'",
          "normalized": "BisectionRatio-\u003eMinLength-\u003e[a]-\u003ea",
          "package": "factory",
          "signature": "BisectionRatio-\u003eMinLength-\u003e[n]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-DivideAndConquer.html#v:sum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Whilst this particular function is the subject of many introductory examples to Haskell,\n\tthe simple algorithms appropriate for that forum, leave a large margin for performance-improvement.\n\tThis module provides the interface for alternative algorithms.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/Factorial.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Factorial",
          "name": "Factorial",
          "package": "factory",
          "source": "src/Factory-Math-Factorial.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Whilst this particular function is the subject of many introductory examples to Haskell the simple algorithms appropriate for that forum leave large margin for performance-improvement This module provides the interface for alternative algorithms http mathworld.wolfram.com Factorial.html",
          "hierarchy": "Factory Math Factorial",
          "module": "Factory.Math.Factorial",
          "name": "Factorial",
          "package": "factory",
          "partial": "Factorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Factorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the methods expected of a \u003cem\u003efactorial\u003c/em\u003e-algorithm.\n\u003c/p\u003e",
          "module": "Factory.Math.Factorial",
          "name": "Algorithmic",
          "package": "factory",
          "source": "src/Factory-Math-Factorial.html#Algorithmic",
          "type": "class"
        },
        "index": {
          "description": "Defines the methods expected of factorial algorithm",
          "hierarchy": "Factory Math Factorial",
          "module": "Factory.Math.Factorial",
          "name": "Algorithmic",
          "package": "factory",
          "partial": "Algorithmic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Factorial.html#t:Algorithmic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Factorial",
          "name": "factorial",
          "package": "factory",
          "signature": "algorithm -\u003e i -\u003e i",
          "source": "src/Factory-Math-Factorial.html#factorial",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Factorial",
          "module": "Factory.Math.Factorial",
          "name": "factorial",
          "normalized": "a-\u003eb-\u003eb",
          "package": "factory",
          "signature": "algorithm-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Factorial.html#v:factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\t\u003ca\u003ehttp://en.wikipedia.org/wiki/Fibonacci_number\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Fibonacci",
          "name": "Fibonacci",
          "package": "factory",
          "source": "src/Factory-Math-Fibonacci.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION http en.wikipedia.org wiki Fibonacci number",
          "hierarchy": "Factory Math Fibonacci",
          "module": "Factory.Math.Fibonacci",
          "name": "Fibonacci",
          "package": "factory",
          "partial": "Fibonacci",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Fibonacci.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constant ordered list of the \u003cem\u003eFibonacci\u003c/em\u003e-numbers.\n\u003c/p\u003e",
          "module": "Factory.Math.Fibonacci",
          "name": "fibonacci",
          "package": "factory",
          "signature": "[i]",
          "source": "src/Factory-Math-Fibonacci.html#fibonacci",
          "type": "function"
        },
        "index": {
          "description": "constant ordered list of the Fibonacci numbers",
          "hierarchy": "Factory Math Fibonacci",
          "module": "Factory.Math.Fibonacci",
          "name": "fibonacci",
          "normalized": "[a]",
          "package": "factory",
          "signature": "[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Fibonacci.html#v:fibonacci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The subset of \u003ccode\u003e\u003ca\u003efibonacci\u003c/a\u003e\u003c/code\u003e, \u003cem\u003eindexed\u003c/em\u003e by a \u003cem\u003eprime\u003c/em\u003e-number.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://primes.utm.edu/glossary/page.php?sort=FibonacciPrime\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Fibonacci",
          "name": "primeIndexedFibonacci",
          "package": "factory",
          "signature": "[i]",
          "source": "src/Factory-Math-Fibonacci.html#primeIndexedFibonacci",
          "type": "function"
        },
        "index": {
          "description": "The subset of fibonacci indexed by prime number http primes.utm.edu glossary page.php sort FibonacciPrime",
          "hierarchy": "Factory Math Fibonacci",
          "module": "Factory.Math.Fibonacci",
          "name": "primeIndexedFibonacci",
          "normalized": "[a]",
          "package": "factory",
          "partial": "Indexed Fibonacci",
          "signature": "[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Fibonacci.html#v:primeIndexedFibonacci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tProvides various \u003cem\u003ehyperoperations\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Hyperoperation\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "Hyperoperation",
          "package": "factory",
          "source": "src/Factory-Math-Hyperoperation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Provides various hyperoperations http en.wikipedia.org wiki Hyperoperation",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "Hyperoperation",
          "package": "factory",
          "partial": "Hyperoperation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Merely to enhance self-documentation.\n\u003c/li\u003e\u003cli\u003e CAVEAT: whilst it may appear that \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e could be non-\u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e, the recursive definition for \u003cem\u003ehyper-exponents\u003c/em\u003e above \u003ccode\u003e\u003ca\u003etetration\u003c/a\u003e\u003c/code\u003e, prevents this.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "Base",
          "package": "factory",
          "source": "src/Factory-Math-Hyperoperation.html#Base",
          "type": "type"
        },
        "index": {
          "description": "Merely to enhance self-documentation CAVEAT whilst it may appear that Base could be non Integral the recursive definition for hyper-exponents above tetration prevents this",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "Base",
          "package": "factory",
          "partial": "Base",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#t:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Merely to enhance self-documentation.\n\u003c/li\u003e\u003cli\u003e CAVEAT: whilst \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHyperExponent\u003c/a\u003e\u003c/code\u003e can be independent types for both \u003ccode\u003e\u003ca\u003eexponentiation\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etetration\u003c/a\u003e\u003c/code\u003e, they interact for other \u003cem\u003ehyper-exponents\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "HyperExponent",
          "package": "factory",
          "source": "src/Factory-Math-Hyperoperation.html#HyperExponent",
          "type": "type"
        },
        "index": {
          "description": "Merely to enhance self-documentation CAVEAT whilst Base and HyperExponent can be independent types for both exponentiation and tetration they interact for other hyper-exponents",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "HyperExponent",
          "package": "factory",
          "partial": "Hyper Exponent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#t:HyperExponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eAckermann-Peter\u003c/em\u003e-function; \u003ca\u003ehttp://en.wikipedia.org/wiki/Ackermann_function#Ackermann_numbers\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "ackermannPeter",
          "package": "factory",
          "signature": "rank -\u003e HyperExponent -\u003e Base",
          "source": "src/Factory-Math-Hyperoperation.html#ackermannPeter",
          "type": "function"
        },
        "index": {
          "description": "The Ackermann-Peter function http en.wikipedia.org wiki Ackermann function Ackermann numbers",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "ackermannPeter",
          "normalized": "a-\u003eHyperExponent-\u003eBase",
          "package": "factory",
          "partial": "Peter",
          "signature": "rank-\u003eHyperExponent-\u003eBase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:ackermannPeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "addition",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#addition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "addition",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:addition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if \u003ccode\u003ehyperoperation base hyperExponent\u003c/code\u003e has the same value for each specified \u003ccode\u003erank\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "areCoincidental",
          "package": "factory",
          "signature": "Base -\u003e HyperExponent -\u003e [rank] -\u003e Bool",
          "source": "src/Factory-Math-Hyperoperation.html#areCoincidental",
          "type": "function"
        },
        "index": {
          "description": "True if hyperoperation base hyperExponent has the same value for each specified rank",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "areCoincidental",
          "normalized": "Base-\u003eHyperExponent-\u003e[a]-\u003eBool",
          "package": "factory",
          "partial": "Coincidental",
          "signature": "Base-\u003eHyperExponent-\u003e[rank]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:areCoincidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "exponentiation",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#exponentiation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "exponentiation",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:exponentiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "hexation",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#hexation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "hexation",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:hexation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ehyperoperation\u003c/em\u003e-sequence; \u003ca\u003ehttp://en.wikipedia.org/wiki/Hyperoperation\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "hyperoperation",
          "package": "factory",
          "signature": "rank -\u003e Base -\u003e HyperExponent -\u003e Base",
          "source": "src/Factory-Math-Hyperoperation.html#hyperoperation",
          "type": "function"
        },
        "index": {
          "description": "The hyperoperation sequence http en.wikipedia.org wiki Hyperoperation",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "hyperoperation",
          "normalized": "a-\u003eBase-\u003eHyperExponent-\u003eBase",
          "package": "factory",
          "signature": "rank-\u003eBase-\u003eHyperExponent-\u003eBase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:hyperoperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "multiplication",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#multiplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "multiplication",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:multiplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "pentation",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#pentation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "pentation",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:pentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns the \u003cem\u003epower-tower\u003c/em\u003e of the specified \u003cem\u003ebase\u003c/em\u003e; \u003ca\u003ehttp://mathworld.wolfram.com/PowerTower.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e A synonym for \u003cem\u003etetration\u003c/em\u003e;\n\t\t\u003ca\u003ehttp://en.wikipedia.org/wiki/Tetration\u003c/a\u003e,\n\t\t\u003ca\u003ehttp://www.tetration.org/Fractals/Atlas/index.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Hyperoperation",
          "name": "powerTower",
          "package": "factory",
          "signature": "base -\u003e hyperExponent -\u003e base",
          "source": "src/Factory-Math-Hyperoperation.html#powerTower",
          "type": "function"
        },
        "index": {
          "description": "Returns the power-tower of the specified base http mathworld.wolfram.com PowerTower.html synonym for tetration http en.wikipedia.org wiki Tetration http www.tetration.org Fractals Atlas index.html",
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "powerTower",
          "normalized": "a-\u003eb-\u003ea",
          "package": "factory",
          "partial": "Tower",
          "signature": "base-\u003ehyperExponent-\u003ebase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:powerTower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "succession",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#succession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "succession",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:succession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Hyperoperation",
          "name": "tetration",
          "package": "factory",
          "signature": "Int",
          "source": "src/Factory-Math-Hyperoperation.html#tetration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Hyperoperation",
          "module": "Factory.Math.Hyperoperation",
          "name": "tetration",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Hyperoperation.html#v:tetration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Provides implementations of the class \u003ccode\u003e\u003ca\u003eAlgorithmic\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Provides additional functions related to \u003cem\u003efactorials\u003c/em\u003e, but which depends on a specific implementation,\n\tand which therefore can't be accessed throught the class-interface.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Factorial\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/Factorial.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.luschny.de/math/factorial/FastFactorialFunctions.htm\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "Factorial",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Factorial.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Provides implementations of the class Algorithmic Provides additional functions related to factorials but which depends on specific implementation and which therefore can be accessed throught the class-interface http en.wikipedia.org wiki Factorial http mathworld.wolfram.com Factorial.html http www.luschny.de math factorial FastFactorialFunctions.htm",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "Factorial",
          "package": "factory",
          "partial": "Factorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algorithms by which \u003cem\u003efactorial\u003c/em\u003e has been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Factorial.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "The algorithms by which factorial has been implemented",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns the ratio of two factorials.\n\u003c/li\u003e\u003cli\u003e It is more efficient than evaluating both factorials, and then dividing.\n\u003c/li\u003e\u003cli\u003e For more complex combinations of factorials, such as in the \u003cem\u003eBinomial coefficient\u003c/em\u003e,\n\textract the \u003cem\u003eprime factors\u003c/em\u003e using \u003ccode\u003e\u003ca\u003eprimeFactors\u003c/a\u003e\u003c/code\u003e\n\tthen manipulate them using the module \u003ca\u003eData.PrimeFactors\u003c/a\u003e,\n\tand evaluate it using by \u003cem\u003eData.PrimeFactors.product'\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "(!/!)",
          "package": "factory",
          "signature": "i-\u003e i-\u003e f",
          "type": "function"
        },
        "index": {
          "description": "Returns the ratio of two factorials It is more efficient than evaluating both factorials and then dividing For more complex combinations of factorials such as in the Binomial coefficient extract the prime factors using primeFactors then manipulate them using the module Data.PrimeFactors and evaluate it using by Data.PrimeFactors.product",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "(!/!) !/!",
          "normalized": "a-\u003ea-\u003eb",
          "package": "factory",
          "signature": "i-\u003ei-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#v:-33--47--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe integers from which the \u003cem\u003efactorial\u003c/em\u003e is composed, are multiplied using \u003ccode\u003eData.Interval.product'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "Bisection",
          "package": "factory",
          "signature": "Bisection",
          "source": "src/Factory-Math-Implementations-Factorial.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "The integers from which the factorial is composed are multiplied using Data.Interval.product",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "Bisection",
          "package": "factory",
          "partial": "Bisection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#v:Bisection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eprime factors\u003c/em\u003e of the \u003cem\u003efactorial\u003c/em\u003e are extracted, then raised to the appropriate power, before multiplication.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "PrimeFactorisation",
          "package": "factory",
          "signature": "PrimeFactorisation",
          "source": "src/Factory-Math-Implementations-Factorial.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "The prime factors of the factorial are extracted then raised to the appropriate power before multiplication",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "PrimeFactorisation",
          "package": "factory",
          "partial": "Prime Factorisation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#v:PrimeFactorisation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003efalling factorial\u003c/em\u003e; \u003ca\u003ehttp://mathworld.wolfram.com/FallingFactorial.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "fallingFactorial",
          "package": "factory",
          "signature": "i-\u003e i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "Returns the falling factorial http mathworld.wolfram.com FallingFactorial.html",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "fallingFactorial",
          "normalized": "a-\u003ea-\u003ea",
          "package": "factory",
          "partial": "Factorial",
          "signature": "i-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#v:fallingFactorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns the \u003cem\u003eprime factors\u003c/em\u003e, of the \u003cem\u003efactorial\u003c/em\u003e of the specifed integer.\n\u003c/li\u003e\u003cli\u003e Precisely all the primes less than or equal to the specified integer \u003cem\u003en\u003c/em\u003e, are included in \u003cem\u003en!\u003c/em\u003e;\n\tonly the multiplicity of each of these known prime components need be determined.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Factorial#Number_theory\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: currently a hotspot.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "primeFactors",
          "package": "factory",
          "signature": "base-\u003e Factors base base",
          "type": "function"
        },
        "index": {
          "description": "Returns the prime factors of the factorial of the specifed integer Precisely all the primes less than or equal to the specified integer are included in only the multiplicity of each of these known prime components need be determined http en.wikipedia.org wiki Factorial Number theory CAVEAT currently hotspot",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "primeFactors",
          "normalized": "a-\u003eFactors a a",
          "package": "factory",
          "partial": "Factors",
          "signature": "base-\u003eFactors base base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#v:primeFactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003erising factorial\u003c/em\u003e; \u003ca\u003ehttp://mathworld.wolfram.com/RisingFactorial.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "risingFactorial",
          "package": "factory",
          "signature": "i-\u003e i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "Returns the rising factorial http mathworld.wolfram.com RisingFactorial.html",
          "hierarchy": "Factory Math Implementations Factorial",
          "module": "Factory.Math.Implementations.Factorial",
          "name": "risingFactorial",
          "normalized": "a-\u003ea-\u003ea",
          "package": "factory",
          "partial": "Factorial",
          "signature": "i-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Factorial.html#v:risingFactorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the set of \u003cem\u003eArithmetic-geometric Mean\u003c/em\u003e-type \u003cem\u003ePi\u003c/em\u003e-algorithms which have been implemented; currently just one.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.AGM.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-AGM-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the set of Arithmetic-geometric Mean type Pi algorithms which have been implemented currently just one",
          "hierarchy": "Factory Math Implementations Pi AGM Algorithm",
          "module": "Factory.Math.Implementations.Pi.AGM.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-AGM-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the available algorithms.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.AGM.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-AGM-Algorithm.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Defines the available algorithms",
          "hierarchy": "Factory Math Implementations Pi AGM Algorithm",
          "module": "Factory.Math.Implementations.Pi.AGM.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-AGM-Algorithm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.AGM.Algorithm",
          "name": "BrentSalamin",
          "package": "factory",
          "signature": "BrentSalamin squareRootAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-AGM-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi AGM Algorithm",
          "module": "Factory.Math.Implementations.Pi.AGM.Algorithm",
          "name": "BrentSalamin",
          "package": "factory",
          "partial": "Brent Salamin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-AGM-Algorithm.html#v:BrentSalamin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Implements the \u003cem\u003eBrent-Salamin\u003c/em\u003e (AKA \u003cem\u003eGauss-Legendre\u003c/em\u003e) algorithm;\n\t\t\u003ca\u003ehttp://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre_algorithm\u003c/a\u003e,\n\t\t\u003ca\u003ehttp://mathworld.wolfram.com/Brent-SalaminFormula.html\u003c/a\u003e,\n\t\t\u003ca\u003ehttp://www.pi314.net/eng/salamin.php\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e The precision of the result approximately doubles for each iteration.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tAssumptions on the convergence-rate result in rounding-errors, when only a small number of digits are requested.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.AGM.BrentSalamin",
          "name": "BrentSalamin",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-AGM-BrentSalamin.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements the Brent-Salamin AKA Gauss-Legendre algorithm http en.wikipedia.org wiki Gauss E2 Legendre algorithm http mathworld.wolfram.com Brent-SalaminFormula.html http www.pi314.net eng salamin.php The precision of the result approximately doubles for each iteration CAVEAT Assumptions on the convergence-rate result in rounding-errors when only small number of digits are requested",
          "hierarchy": "Factory Math Implementations Pi AGM BrentSalamin",
          "module": "Factory.Math.Implementations.Pi.AGM.BrentSalamin",
          "name": "BrentSalamin",
          "package": "factory",
          "partial": "Brent Salamin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-AGM-BrentSalamin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns \u003cem\u003ePi\u003c/em\u003e, accurate to the specified number of decimal digits.\n\u003c/li\u003e\u003cli\u003e This algorithm is based on the \u003cem\u003earithmetic-geometric\u003c/em\u003e mean of \u003ccode\u003e1\u003c/code\u003e and \u003ccode\u003e(1 / sqrt 2)\u003c/code\u003e,\n\tbut there are many confusingly similar formulations.\n\tThe algorithm I've used here, where \u003ccode\u003ea\u003c/code\u003e is the \u003cem\u003earithmetic mean\u003c/em\u003e and \u003ccode\u003eg\u003c/code\u003e is the \u003cem\u003egeometric mean\u003c/em\u003e, is equivalent to other common formulations:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\t\tpi = (a[N-1] + g[N-1])^2 / (1 - sum [2^n * (a[n] - g[n])^2])\t\t\twhere n = [0 .. N-1]\n\t\t=\u003e 4*a[N]^2 / (1 - sum [2^n * (a[n]^2 - 2*a[n]*g[n] + g[n]^2)])\n\t\t=\u003e 4*a[N]^2 / (1 - sum [2^n * (a[n]^2 + 2*a[n]*g[n] + g[n]^2 - 4*a[n]*g[n])])\n\t\t=\u003e 4*a[N]^2 / (1 - sum [2^n * ((a[n] + g[n])^2 - 4*a[n]*g[n])])\n\t\t=\u003e 4*a[N]^2 / (1 - sum [2^(n-1) * 4 * (a[n-1]^2 - g[n-1]^2)])\t\t\twhere n = [1 .. N]\n\t\t=\u003e 4*a[N]^2 / (1 - sum [2^(n+1) * (a[n-1]^2 - g[n-1]^2)])\n\u003c/pre\u003e",
          "module": "Factory.Math.Implementations.Pi.AGM.BrentSalamin",
          "name": "openR",
          "package": "factory",
          "signature": "squareRootAlgorithm -\u003e DecimalDigits -\u003e Rational",
          "source": "src/Factory-Math-Implementations-Pi-AGM-BrentSalamin.html#openR",
          "type": "function"
        },
        "index": {
          "description": "Returns Pi accurate to the specified number of decimal digits This algorithm is based on the arithmetic-geometric mean of and sqrt but there are many confusingly similar formulations The algorithm ve used here where is the arithmetic mean and is the geometric mean is equivalent to other common formulations pi N-1 N-1 sum where N-1 sum sum sum sum n-1 n-1 n-1 where sum n-1 n-1",
          "hierarchy": "Factory Math Implementations Pi AGM BrentSalamin",
          "module": "Factory.Math.Implementations.Pi.AGM.BrentSalamin",
          "name": "openR",
          "normalized": "a-\u003eDecimalDigits-\u003eRational",
          "package": "factory",
          "signature": "squareRootAlgorithm-\u003eDecimalDigits-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-AGM-BrentSalamin.html#v:openR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the set of \u003cem\u003eBailey-Borwein-Plouffe\u003c/em\u003e-type formulae which have been implemented.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the set of Bailey-Borwein-Plouffe type formulae which have been implemented",
          "hierarchy": "Factory Math Implementations Pi BBP Algorithm",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines those \u003cem\u003eBBP\u003c/em\u003e-type series which have been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Algorithm.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Defines those BBP type series which have been implemented",
          "hierarchy": "Factory Math Implementations Pi BBP Algorithm",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Algorithm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003ebase\u003c/em\u003e-\u003ccode\u003e2^16\u003c/code\u003e version of the formula.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Base65536",
          "package": "factory",
          "signature": "Base65536",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "base version of the formula",
          "hierarchy": "Factory Math Implementations Pi BBP Algorithm",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Base65536",
          "package": "factory",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Algorithm.html#v:Base65536"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enega-base\u003c/em\u003e \u003ccode\u003e2^10\u003c/code\u003e version of the formula.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Bellard",
          "package": "factory",
          "signature": "Bellard",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "nega-base version of the formula",
          "hierarchy": "Factory Math Implementations Pi BBP Algorithm",
          "module": "Factory.Math.Implementations.Pi.BBP.Algorithm",
          "name": "Bellard",
          "package": "factory",
          "partial": "Bellard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Algorithm.html#v:Bellard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines a specific base-\u003ccode\u003e2^16\u003c/code\u003e \u003cem\u003eBBP\u003c/em\u003e-formula; \u003ca\u003ehttp://mathworld.wolfram.com/PiFormulas.html\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Base65536",
          "name": "Base65536",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Base65536.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines specific base BBP formula http mathworld.wolfram.com PiFormulas.html",
          "hierarchy": "Factory Math Implementations Pi BBP Base65536",
          "module": "Factory.Math.Implementations.Pi.BBP.Base65536",
          "name": "Base65536",
          "package": "factory",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Base65536.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the parameters of this specific series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Base65536",
          "name": "series",
          "package": "factory",
          "signature": "Series",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Base65536.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines the parameters of this specific series",
          "hierarchy": "Factory Math Implementations Pi BBP Base65536",
          "module": "Factory.Math.Implementations.Pi.BBP.Base65536",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Base65536.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines \u003cem\u003eBellard\u003c/em\u003e's nega-base-\u003ccode\u003e2^10\u003c/code\u003e \u003cem\u003eBBP\u003c/em\u003e-formula; \u003ca\u003ehttp://en.wikipedia.org/wiki/Bellard%27s_formula\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Bellard",
          "name": "Bellard",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Bellard.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines Bellard nega-base BBP formula http en.wikipedia.org wiki Bellard formula",
          "hierarchy": "Factory Math Implementations Pi BBP Bellard",
          "module": "Factory.Math.Implementations.Pi.BBP.Bellard",
          "name": "Bellard",
          "package": "factory",
          "partial": "Bellard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Bellard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the parameters of this specific series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Bellard",
          "name": "series",
          "package": "factory",
          "signature": "Series",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Bellard.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines the parameters of this specific series",
          "hierarchy": "Factory Math Implementations Pi BBP Bellard",
          "module": "Factory.Math.Implementations.Pi.BBP.Bellard",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Bellard.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Implements a \u003cem\u003eBailey-Borwein-Plouffe\u003c/em\u003e formula; \u003ca\u003ehttp://mathworld.wolfram.com/PiFormulas.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Surprisingly, because of the huge size of the \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e quantities,\n\tit is a \u003cem\u003esingle\u003c/em\u003e call to \u003ccode\u003eFactory.Math.Summation.sum'\u003c/code\u003e, rather than the calculation of the many terms in the series, which is the performance-bottleneck.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Implementation",
          "name": "Implementation",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Implementation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Bailey-Borwein-Plouffe formula http mathworld.wolfram.com PiFormulas.html Surprisingly because of the huge size of the Rational quantities it is single call to Factory.Math.Summation.sum rather than the calculation of the many terms in the series which is the performance-bottleneck",
          "hierarchy": "Factory Math Implementations Pi BBP Implementation",
          "module": "Factory.Math.Implementations.Pi.BBP.Implementation",
          "name": "Implementation",
          "package": "factory",
          "partial": "Implementation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Implementation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003cem\u003ePi\u003c/em\u003e, accurate to the specified number of decimal digits.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Implementation",
          "name": "openR",
          "package": "factory",
          "signature": "Series-\u003e DecimalDigits-\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "Returns Pi accurate to the specified number of decimal digits",
          "hierarchy": "Factory Math Implementations Pi BBP Implementation",
          "module": "Factory.Math.Implementations.Pi.BBP.Implementation",
          "name": "openR",
          "normalized": "Series-\u003eDecimalDigits-\u003eRational",
          "package": "factory",
          "signature": "Series-\u003eDecimalDigits-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Implementation.html#v:openR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines a \u003cem\u003eBailey-Borwein-Plouffe\u003c/em\u003e formula; \u003ca\u003ehttp://mathworld.wolfram.com/PiFormulas.html\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines Bailey-Borwein-Plouffe formula http mathworld.wolfram.com PiFormulas.html",
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a series corresponding to a specific \u003cem\u003eBBP\u003c/em\u003e-formula.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html#Series",
          "type": "data"
        },
        "index": {
          "description": "Defines series corresponding to specific BBP formula",
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "MkSeries",
          "package": "factory",
          "signature": "MkSeries",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "MkSeries",
          "package": "factory",
          "partial": "Mk Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#v:MkSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe geometric ratio, by which successive terms are scaled.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "base",
          "package": "factory",
          "signature": "Integer",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The geometric ratio by which successive terms are scaled",
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "base",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the term-dependent denominators from which each term in the series is composed.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "getDenominators",
          "package": "factory",
          "signature": "Int -\u003e [Integer]",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "Generates the term-dependent denominators from which each term in the series is composed",
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "getDenominators",
          "normalized": "Int-\u003e[Integer]",
          "package": "factory",
          "partial": "Denominators",
          "signature": "Int-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#v:getDenominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant numerators from which each term in the series is composed.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "numerators",
          "package": "factory",
          "signature": "[Integer]",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The constant numerators from which each term in the series is composed",
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "numerators",
          "normalized": "[Integer]",
          "package": "factory",
          "signature": "[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#v:numerators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ratio by which the sum to infinity of the series, must be scaled to result in \u003cem\u003ePi\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "seriesScalingFactor",
          "package": "factory",
          "signature": "Rational",
          "source": "src/Factory-Math-Implementations-Pi-BBP-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The ratio by which the sum to infinity of the series must be scaled to result in Pi",
          "hierarchy": "Factory Math Implementations Pi BBP Series",
          "module": "Factory.Math.Implementations.Pi.BBP.Series",
          "name": "seriesScalingFactor",
          "package": "factory",
          "partial": "Scaling Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-BBP-Series.html#v:seriesScalingFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the set of \u003cem\u003eBorwein\u003c/em\u003e-type algorithms (currently only one) which have been implemented; \u003ca\u003ehttp://www.pi314.net/eng/borwein.php\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the set of Borwein type algorithms currently only one which have been implemented http www.pi314.net eng borwein.php",
          "hierarchy": "Factory Math Implementations Pi Borwein Algorithm",
          "module": "Factory.Math.Implementations.Pi.Borwein.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Define those \u003cem\u003eBorwein\u003c/em\u003e-series which have been implemented.\n\u003c/li\u003e\u003cli\u003e Though currently there's only one, provision has been made for the addition of more.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Algorithm.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Define those Borwein series which have been implemented Though currently there only one provision has been made for the addition of more",
          "hierarchy": "Factory Math Implementations Pi Borwein Algorithm",
          "module": "Factory.Math.Implementations.Pi.Borwein.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Algorithm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Borwein%27s_algorithm\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Algorithm",
          "name": "Borwein1993",
          "package": "factory",
          "signature": "Borwein1993 squareRootAlgorithm factorialAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Borwein algorithm",
          "hierarchy": "Factory Math Implementations Pi Borwein Algorithm",
          "module": "Factory.Math.Implementations.Pi.Borwein.Algorithm",
          "name": "Borwein1993",
          "package": "factory",
          "partial": "Borwein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Algorithm.html#v:Borwein1993"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the \u003cem\u003eBorwein\u003c/em\u003e series for \u003cem\u003ePi\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Borwein%27s_algorithm#Jonathan_Borwein_and_Peter_Borwein.27s_Version_.281993.29\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Borwein1993",
          "name": "Borwein1993",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Borwein1993.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the Borwein series for Pi http en.wikipedia.org wiki Borwein algorithm Jonathan Borwein and Peter Borwein.27s Version",
          "hierarchy": "Factory Math Implementations Pi Borwein Borwein1993",
          "module": "Factory.Math.Implementations.Pi.Borwein.Borwein1993",
          "name": "Borwein1993",
          "package": "factory",
          "partial": "Borwein",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Borwein1993.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the parameters of the \u003cem\u003eBorwein\u003c/em\u003e series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Borwein1993",
          "name": "series",
          "package": "factory",
          "signature": "Series squareRootAlgorithm factorialAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Borwein1993.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines the parameters of the Borwein series",
          "hierarchy": "Factory Math Implementations Pi Borwein Borwein1993",
          "module": "Factory.Math.Implementations.Pi.Borwein.Borwein1993",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Borwein1993.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines \u003cem\u003eBorwein\u003c/em\u003e series for \u003cem\u003ePi\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Borwein%27s_algorithm\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Implementation",
          "name": "Implementation",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Implementation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines Borwein series for Pi http en.wikipedia.org wiki Borwein algorithm",
          "hierarchy": "Factory Math Implementations Pi Borwein Implementation",
          "module": "Factory.Math.Implementations.Pi.Borwein.Implementation",
          "name": "Implementation",
          "package": "factory",
          "partial": "Implementation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Implementation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003cem\u003ePi\u003c/em\u003e, accurate to the specified number of decimal digits.\n\u003c/p\u003e",
          "module": "[\"Factory.Math.Implementations.Pi.Borwein.Implementation\",\"Factory.Math.Implementations.Pi.Ramanujan.Implementation\"]",
          "name": "openR",
          "package": "factory",
          "signature": "Series squareRootAlgorithm factorialAlgorithm-\u003e squareRootAlgorithm-\u003e factorialAlgorithm-\u003e DecimalDigits-\u003e Rational",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Implementation.html#v:openR\",\"http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Implementation.html#v:openR\"]"
        },
        "index": {
          "description": "Returns Pi accurate to the specified number of decimal digits",
          "hierarchy": "Factory Math Implementations Pi Borwein Implementation",
          "module": "Factory.Math.Implementations.Pi.Borwein.Implementation",
          "name": "openR",
          "normalized": "Series a b-\u003ea-\u003eb-\u003eDecimalDigits-\u003eRational",
          "package": "factory",
          "signature": "Series squareRootAlgorithm factorialAlgorithm-\u003esquareRootAlgorithm-\u003efactorialAlgorithm-\u003eDecimalDigits-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Implementation.html#v:openR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines a \u003ca\u003ehttp://en.wikipedia.org/wiki/Srinivasa_Borwein\u003c/a\u003e-type series for \u003cem\u003ePi\u003c/em\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Series.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines http en.wikipedia.org wiki Srinivasa Borwein type series for Pi",
          "hierarchy": "Factory Math Implementations Pi Borwein Series",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a series corresponding to a specific \u003cem\u003eBorwein\u003c/em\u003e-formula.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Series.html#Series",
          "type": "data"
        },
        "index": {
          "description": "Defines series corresponding to specific Borwein formula",
          "hierarchy": "Factory Math Implementations Pi Borwein Series",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Series.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "MkSeries",
          "package": "factory",
          "signature": "MkSeries",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Borwein Series",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "MkSeries",
          "package": "factory",
          "partial": "Mk Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Series.html#v:MkSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expected number of digits of \u003cem\u003ePi\u003c/em\u003e, per term in the series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "convergenceRate",
          "package": "factory",
          "signature": "ConvergenceRate",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The expected number of digits of Pi per term in the series",
          "hierarchy": "Factory Math Implementations Pi Borwein Series",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "convergenceRate",
          "package": "factory",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Series.html#v:convergenceRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "terms",
          "package": "factory",
          "signature": "squareRootAlgorithm -\u003e factorialAlgorithm -\u003e DecimalDigits -\u003e (Rational, [Rational])",
          "source": "src/Factory-Math-Implementations-Pi-Borwein-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Borwein Series",
          "module": "Factory.Math.Implementations.Pi.Borwein.Series",
          "name": "terms",
          "normalized": "a-\u003eb-\u003eDecimalDigits-\u003e(Rational,[Rational])",
          "package": "factory",
          "signature": "squareRootAlgorithm-\u003efactorialAlgorithm-\u003eDecimalDigits-\u003e(Rational,[Rational])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Borwein-Series.html#v:terms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the set of \u003cem\u003eRamanujan\u003c/em\u003e-type algorithms which have been implemented; \u003ca\u003ehttp://en.wikipedia.org/wiki/Pi\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the set of Ramanujan type algorithms which have been implemented http en.wikipedia.org wiki Pi",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Algorithm",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine those \u003cem\u003eRamanujan\u003c/em\u003e-series which have been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Define those Ramanujan series which have been implemented",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Algorithm",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant found by the \u003cem\u003eChudnovsky brothers\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Chudnovsky",
          "package": "factory",
          "signature": "Chudnovsky squareRootAlgorithm factorialAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "variant found by the Chudnovsky brothers",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Algorithm",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Chudnovsky",
          "package": "factory",
          "partial": "Chudnovsky",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#v:Chudnovsky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe original version.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Classic",
          "package": "factory",
          "signature": "Classic squareRootAlgorithm factorialAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "The original version",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Algorithm",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Algorithm",
          "name": "Classic",
          "package": "factory",
          "partial": "Classic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Algorithm.html#v:Classic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the \u003cem\u003eChudnovsky\u003c/em\u003e series for \u003cem\u003ePi\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Pi\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Chudnovsky",
          "name": "Chudnovsky",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Chudnovsky.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the Chudnovsky series for Pi http en.wikipedia.org wiki Pi",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Chudnovsky",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Chudnovsky",
          "name": "Chudnovsky",
          "package": "factory",
          "partial": "Chudnovsky",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Chudnovsky.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the parameters of the \u003cem\u003eChudnovsky\u003c/em\u003e series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Chudnovsky",
          "name": "series",
          "package": "factory",
          "signature": "Series squareRootAlgorithm factorialAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Chudnovsky.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines the parameters of the Chudnovsky series",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Chudnovsky",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Chudnovsky",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Chudnovsky.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the \u003cem\u003eRamanujan\u003c/em\u003e series for \u003cem\u003ePi\u003c/em\u003e; \u003ca\u003ehttp://planetmath.org/encyclopedia/RamanujansFormulaForPi.html\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Classic",
          "name": "Classic",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Classic.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the Ramanujan series for Pi http planetmath.org encyclopedia RamanujansFormulaForPi.html",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Classic",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Classic",
          "name": "Classic",
          "package": "factory",
          "partial": "Classic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Classic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the parameters of the \u003cem\u003eRamanujan\u003c/em\u003e series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Classic",
          "name": "series",
          "package": "factory",
          "signature": "Series squareRootAlgorithm factorialAlgorithm",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Classic.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines the parameters of the Ramanujan series",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Classic",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Classic",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Classic.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImplements a \u003cem\u003eRamanujan\u003c/em\u003e-type series for \u003cem\u003ePi\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Srinivasa_Ramanujan\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Implementation",
          "name": "Implementation",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Implementation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Ramanujan type series for Pi http en.wikipedia.org wiki Srinivasa Ramanujan",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Implementation",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Implementation",
          "name": "Implementation",
          "package": "factory",
          "partial": "Implementation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Implementation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines a \u003ca\u003ehttp://en.wikipedia.org/wiki/Srinivasa_Ramanujan\u003c/a\u003e-type series for \u003cem\u003ePi\u003c/em\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Series.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines http en.wikipedia.org wiki Srinivasa Ramanujan type series for Pi",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Series",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a series corresponding to a specific \u003cem\u003eRamanujan\u003c/em\u003e-formula.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Series.html#Series",
          "type": "data"
        },
        "index": {
          "description": "Defines series corresponding to specific Ramanujan formula",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Series",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Series.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "MkSeries",
          "package": "factory",
          "signature": "MkSeries",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Ramanujan Series",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "MkSeries",
          "package": "factory",
          "partial": "Mk Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Series.html#v:MkSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expected number of digits of \u003cem\u003ePi\u003c/em\u003e, per term in the series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "convergenceRate",
          "package": "factory",
          "signature": "ConvergenceRate",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The expected number of digits of Pi per term in the series",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Series",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "convergenceRate",
          "package": "factory",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Series.html#v:convergenceRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ratio by which the sum to infinity of the sequence, must be scaled to result in \u003cem\u003ePi\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "getSeriesScalingFactor",
          "package": "factory",
          "signature": "squareRootAlgorithm -\u003e DecimalDigits -\u003e Rational",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The ratio by which the sum to infinity of the sequence must be scaled to result in Pi",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Series",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "getSeriesScalingFactor",
          "normalized": "a-\u003eDecimalDigits-\u003eRational",
          "package": "factory",
          "partial": "Series Scaling Factor",
          "signature": "squareRootAlgorithm-\u003eDecimalDigits-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Series.html#v:getSeriesScalingFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence of terms, the sum to infinity of which defines the series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "terms",
          "package": "factory",
          "signature": "factorialAlgorithm -\u003e [Rational]",
          "source": "src/Factory-Math-Implementations-Pi-Ramanujan-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The sequence of terms the sum to infinity of which defines the series",
          "hierarchy": "Factory Math Implementations Pi Ramanujan Series",
          "module": "Factory.Math.Implementations.Pi.Ramanujan.Series",
          "name": "terms",
          "normalized": "a-\u003e[Rational]",
          "package": "factory",
          "signature": "factorialAlgorithm-\u003e[Rational]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Ramanujan-Series.html#v:terms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the set of \u003cem\u003eSpigot\u003c/em\u003e-algorithms which have been implemented.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the set of Spigot algorithms which have been implemented",
          "hierarchy": "Factory Math Implementations Pi Spigot Algorithm",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine those \u003cem\u003eSpigot\u003c/em\u003e-algorithms which have been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "Define those Spigot algorithms which have been implemented",
          "hierarchy": "Factory Math Implementations Pi Spigot Algorithm",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003econtinued fraction\u003c/em\u003e discovered by \u003cem\u003eGosper\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "Gosper",
          "package": "factory",
          "signature": "Gosper",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "continued fraction discovered by Gosper",
          "hierarchy": "Factory Math Implementations Pi Spigot Algorithm",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "Gosper",
          "package": "factory",
          "partial": "Gosper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#v:Gosper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003econtinued fraction\u003c/em\u003e discovered by \u003cem\u003eRabinowitz\u003c/em\u003e and \u003cem\u003eWagon\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "RabinowitzWagon",
          "package": "factory",
          "signature": "RabinowitzWagon",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "continued fraction discovered by Rabinowitz and Wagon",
          "hierarchy": "Factory Math Implementations Pi Spigot Algorithm",
          "module": "Factory.Math.Implementations.Pi.Spigot.Algorithm",
          "name": "RabinowitzWagon",
          "package": "factory",
          "partial": "Rabinowitz Wagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Algorithm.html#v:RabinowitzWagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the \u003cem\u003eGosper\u003c/em\u003e series; \u003ca\u003ehttp://www.pi314.net/eng/goutte.php\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Gosper",
          "name": "Gosper",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Gosper.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the Gosper series http www.pi314.net eng goutte.php",
          "hierarchy": "Factory Math Implementations Pi Spigot Gosper",
          "module": "Factory.Math.Implementations.Pi.Spigot.Gosper",
          "name": "Gosper",
          "package": "factory",
          "partial": "Gosper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Gosper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a series which converges to \u003cem\u003ePi\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Gosper",
          "name": "series",
          "package": "factory",
          "signature": "Series i",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Gosper.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines series which converges to Pi",
          "hierarchy": "Factory Math Implementations Pi Spigot Gosper",
          "module": "Factory.Math.Implementations.Pi.Spigot.Gosper",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Gosper.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the \u003cem\u003eRabinowitz-Wagon\u003c/em\u003e series;\n\t\u003ca\u003ehttp://web.comlab.ox.ac.uk/oucl/work/jeremy.gibbons/publications/spigot.pdf\u003c/a\u003e\n\t\u003ca\u003ehttp://www.mathpropress.com/stan/bibliography/spigot.pdf\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.RabinowitzWagon",
          "name": "RabinowitzWagon",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-RabinowitzWagon.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the Rabinowitz-Wagon series http web.comlab.ox.ac.uk oucl work jeremy.gibbons publications spigot.pdf http www.mathpropress.com stan bibliography spigot.pdf",
          "hierarchy": "Factory Math Implementations Pi Spigot RabinowitzWagon",
          "module": "Factory.Math.Implementations.Pi.Spigot.RabinowitzWagon",
          "name": "RabinowitzWagon",
          "package": "factory",
          "partial": "Rabinowitz Wagon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-RabinowitzWagon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a series which converges to \u003cem\u003ePi\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.RabinowitzWagon",
          "name": "series",
          "package": "factory",
          "signature": "Series i",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-RabinowitzWagon.html#series",
          "type": "function"
        },
        "index": {
          "description": "Defines series which converges to Pi",
          "hierarchy": "Factory Math Implementations Pi Spigot RabinowitzWagon",
          "module": "Factory.Math.Implementations.Pi.Spigot.RabinowitzWagon",
          "name": "series",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-RabinowitzWagon.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the parameters of a series used in a \u003cem\u003eSpigot\u003c/em\u003e-table to generate \u003cem\u003ePi\u003c/em\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the parameters of series used in Spigot table to generate Pi",
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Defines a series composed from a sum of terms, each one of which is the product of a coefficient and a base.\n\u003c/li\u003e\u003cli\u003e The coefficents and bases of the series are described in \u003cem\u003eHorner form\u003c/em\u003e; \u003ccode\u003ePi = c1 + (b1 * (c2 + b2 * (c3 + b3 * (...))))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "Series",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#Series",
          "type": "data"
        },
        "index": {
          "description": "Defines series composed from sum of terms each one of which is the product of coefficient and base The coefficents and bases of the series are described in Horner form Pi c1 b1 c2 b2 c3 b3",
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "Series",
          "package": "factory",
          "partial": "Series",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "MkSeries",
          "package": "factory",
          "signature": "MkSeries",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "MkSeries",
          "package": "factory",
          "partial": "Mk Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#v:MkSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "baseDenominators",
          "package": "factory",
          "signature": "[i]",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "baseDenominators",
          "normalized": "[a]",
          "package": "factory",
          "partial": "Denominators",
          "signature": "[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#v:baseDenominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "baseNumerators",
          "package": "factory",
          "signature": "[i]",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "baseNumerators",
          "normalized": "[a]",
          "package": "factory",
          "partial": "Numerators",
          "signature": "[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#v:baseNumerators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines \u003ccode\u003e\u003ca\u003ebaseNumerators\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebaseDenominators\u003c/a\u003e\u003c/code\u003e, and as a side-effect, expresses the ratio in lowest terms.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "bases",
          "package": "factory",
          "signature": "Series i -\u003e [Ratio i]",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#bases",
          "type": "function"
        },
        "index": {
          "description": "Combines baseNumerators and baseDenominators and as side-effect expresses the ratio in lowest terms",
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "bases",
          "normalized": "Series a-\u003e[Ratio a]",
          "package": "factory",
          "signature": "Series i-\u003e[Ratio i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#v:bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "coefficients",
          "package": "factory",
          "signature": "[i]",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#Series",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "coefficients",
          "normalized": "[a]",
          "package": "factory",
          "signature": "[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#v:coefficients"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe width of the spigot-table, required to accurately generate the requested number of digits.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "nTerms",
          "package": "factory",
          "signature": "DecimalDigits -\u003e Int",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Series.html#Series",
          "type": "function"
        },
        "index": {
          "description": "The width of the spigot-table required to accurately generate the requested number of digits",
          "hierarchy": "Factory Math Implementations Pi Spigot Series",
          "module": "Factory.Math.Implementations.Pi.Spigot.Series",
          "name": "nTerms",
          "normalized": "DecimalDigits-\u003eInt",
          "package": "factory",
          "partial": "Terms",
          "signature": "DecimalDigits-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Series.html#v:nTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Implements a \u003cem\u003espigot\u003c/em\u003e-algorithm; \u003ca\u003ehttp://en.wikipedia.org/wiki/Spigot_algorithm\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Uses the traditional algorithm, rather than the \u003cem\u003eunbounded\u003c/em\u003e algorithm described by \u003ca\u003ehttp://www.comlab.ox.ac.uk/jeremy.gibbons/publications/spigot.pdf\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Spigot",
          "name": "Spigot",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Spigot.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements spigot algorithm http en.wikipedia.org wiki Spigot algorithm Uses the traditional algorithm rather than the unbounded algorithm described by http www.comlab.ox.ac.uk jeremy.gibbons publications spigot.pdf",
          "hierarchy": "Factory Math Implementations Pi Spigot Spigot",
          "module": "Factory.Math.Implementations.Pi.Spigot.Spigot",
          "name": "Spigot",
          "package": "factory",
          "partial": "Spigot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Spigot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant base in which we want the resulting value of \u003cem\u003ePi\u003c/em\u003e to be expressed.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Spigot",
          "name": "decimal",
          "package": "factory",
          "signature": "I",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Spigot.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "The constant base in which we want the resulting value of Pi to be expressed",
          "hierarchy": "Factory Math Implementations Pi Spigot Spigot",
          "module": "Factory.Math.Implementations.Pi.Spigot.Spigot",
          "name": "decimal",
          "package": "factory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Spigot.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Initialises a \u003cem\u003espigot\u003c/em\u003e-table with the row of \u003ccode\u003e\u003ca\u003ecoefficients\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensures that the row has suffient terms to accurately generate the required number of digits.\n\u003c/li\u003e\u003cli\u003e Extracts only those digits which are guaranteed to be accurate.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the result is returned as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, i.e. without any decimal point.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Pi.Spigot.Spigot",
          "name": "openI",
          "package": "factory",
          "signature": "Series I -\u003e DecimalDigits -\u003e Integer",
          "source": "src/Factory-Math-Implementations-Pi-Spigot-Spigot.html#openI",
          "type": "function"
        },
        "index": {
          "description": "Initialises spigot table with the row of coefficients Ensures that the row has suffient terms to accurately generate the required number of digits Extracts only those digits which are guaranteed to be accurate CAVEAT the result is returned as an Integer i.e without any decimal point",
          "hierarchy": "Factory Math Implementations Pi Spigot Spigot",
          "module": "Factory.Math.Implementations.Pi.Spigot.Spigot",
          "name": "openI",
          "normalized": "Series I-\u003eDecimalDigits-\u003eInteger",
          "package": "factory",
          "signature": "Series I-\u003eDecimalDigits-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Pi-Spigot-Spigot.html#v:openI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Determines whether an integer is prime.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Primality_test\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://primes.utm.edu/index.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e CAVEAT: it doesn't determine the prime-factors of composite numbers, just that they exist.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Primality",
          "name": "Primality",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primality.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Determines whether an integer is prime http en.wikipedia.org wiki Primality test http primes.utm.edu index.html CAVEAT it doesn determine the prime-factors of composite numbers just that they exist",
          "hierarchy": "Factory Math Implementations Primality",
          "module": "Factory.Math.Implementations.Primality",
          "name": "Primality",
          "package": "factory",
          "partial": "Primality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algorithms by which \u003cem\u003eprimality\u003c/em\u003e-testing has been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primality",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primality.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "The algorithms by which primality testing has been implemented",
          "hierarchy": "Factory Math Implementations Primality",
          "module": "Factory.Math.Implementations.Primality",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primality.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/AKS_primality_test\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primality",
          "name": "AKS",
          "package": "factory",
          "signature": "AKS factorisationAlgorithm",
          "source": "src/Factory-Math-Implementations-Primality.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki AKS primality test",
          "hierarchy": "Factory Math Implementations Primality",
          "module": "Factory.Math.Implementations.Primality",
          "name": "AKS",
          "package": "factory",
          "partial": "AKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primality.html#v:AKS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primality",
          "name": "MillerRabin",
          "package": "factory",
          "signature": "MillerRabin",
          "source": "src/Factory-Math-Implementations-Primality.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Miller E2 Rabin primality test",
          "hierarchy": "Factory Math Implementations Primality",
          "module": "Factory.Math.Implementations.Primality",
          "name": "MillerRabin",
          "package": "factory",
          "partial": "Miller Rabin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primality.html#v:MillerRabin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Implements several different prime-factorisation algorithms.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.tug.org/texinfohtml/coreutils.html#factor-invocation\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "PrimeFactorisation",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-PrimeFactorisation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements several different prime-factorisation algorithms http www.tug.org texinfohtml coreutils.html factor-invocation",
          "hierarchy": "Factory Math Implementations PrimeFactorisation",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "PrimeFactorisation",
          "package": "factory",
          "partial": "Prime Factorisation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-PrimeFactorisation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algorithms by which prime-factorisation has been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-PrimeFactorisation.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "The algorithms by which prime-factorisation has been implemented",
          "hierarchy": "Factory Math Implementations PrimeFactorisation",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-PrimeFactorisation.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Fermat%27s_factorization_method\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "FermatsMethod",
          "package": "factory",
          "signature": "FermatsMethod",
          "source": "src/Factory-Math-Implementations-PrimeFactorisation.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Fermat factorization method",
          "hierarchy": "Factory Math Implementations PrimeFactorisation",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "FermatsMethod",
          "package": "factory",
          "partial": "Fermats Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-PrimeFactorisation.html#v:FermatsMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Trial_division\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "TrialDivision",
          "package": "factory",
          "signature": "TrialDivision",
          "source": "src/Factory-Math-Implementations-PrimeFactorisation.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Trial division",
          "hierarchy": "Factory Math Implementations PrimeFactorisation",
          "module": "Factory.Math.Implementations.PrimeFactorisation",
          "name": "TrialDivision",
          "package": "factory",
          "partial": "Trial Division",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-PrimeFactorisation.html#v:TrialDivision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Generates the constant list of \u003cem\u003eprime-numbers\u003c/em\u003e, by a variety of different algorithms.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.haskell.org/haskellwiki/Prime_numbers\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.31.3936&rep=rep1&type=pdf\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://larc.unt.edu/ian/pubs/sieve.pdf\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Generates the constant list of prime-numbers by variety of different algorithms http www.haskell.org haskellwiki Prime numbers http citeseerx.ist.psu.edu viewdoc download doi rep rep1 type pdf http larc.unt.edu ian pubs sieve.pdf",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe implemented methods by which the primes may be generated.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "The implemented methods by which the primes may be generated",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eSieve of Atkin\u003c/em\u003e, optimised using a \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e of optimal size, for primes up to the specified maximum bound; \u003ca\u003ehttp://en.wikipedia.org/wiki/Sieve_of_Atkin\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "SieveOfAtkin",
          "package": "factory",
          "signature": "SieveOfAtkin Integer",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "The Sieve of Atkin optimised using PrimeWheel of optimal size for primes up to the specified maximum bound http en.wikipedia.org wiki Sieve of Atkin",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "SieveOfAtkin",
          "package": "factory",
          "partial": "Sieve Of Atkin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#v:SieveOfAtkin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eSieve of Eratosthenes\u003c/em\u003e (\u003ca\u003ehttp://en.wikipedia.org/wiki/Sieve_of_Eratosthenes\u003c/a\u003e), optimised using a \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "SieveOfEratosthenes",
          "package": "factory",
          "signature": "SieveOfEratosthenes NPrimes",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "The Sieve of Eratosthenes http en.wikipedia.org wiki Sieve of Eratosthenes optimised using PrimeWheel",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "SieveOfEratosthenes",
          "package": "factory",
          "partial": "Sieve Of Eratosthenes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#v:SieveOfEratosthenes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each candidate, confirm indivisibility, by all \u003cem\u003eprimes\u003c/em\u003e smaller than its \u003cem\u003esquare-root\u003c/em\u003e, optimised using a \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "TrialDivision",
          "package": "factory",
          "signature": "TrialDivision NPrimes",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "For each candidate confirm indivisibility by all primes smaller than its square-root optimised using PrimeWheel",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "TrialDivision",
          "package": "factory",
          "partial": "Trial Division",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#v:TrialDivision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each \u003cem\u003eprime\u003c/em\u003e, the infinite list of candidates greater than its \u003cem\u003esquare\u003c/em\u003e, is filtered for indivisibility; \u003ca\u003ehttp://www.haskell.org/haskellwiki/Prime_numbers#Turner.27s_sieve_-_Trial_division\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "TurnersSieve",
          "package": "factory",
          "signature": "TurnersSieve",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "For each prime the infinite list of candidates greater than its square is filtered for indivisibility http www.haskell.org haskellwiki Prime numbers Turner.27s sieve Trial division",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "TurnersSieve",
          "package": "factory",
          "partial": "Turners Sieve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#v:TurnersSieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewheelSieve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "WheelSieve",
          "package": "factory",
          "signature": "WheelSieve Int",
          "source": "src/Factory-Math-Implementations-Primes-Algorithm.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "wheelSieve",
          "hierarchy": "Factory Math Implementations Primes Algorithm",
          "module": "Factory.Math.Implementations.Primes.Algorithm",
          "name": "WheelSieve",
          "package": "factory",
          "partial": "Wheel Sieve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-Algorithm.html#v:WheelSieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Generates the constant \u003cem\u003ebounded\u003c/em\u003e list of \u003cem\u003eprime-numbers\u003c/em\u003e, using the \u003cem\u003eSieve of Atkin\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Sieve_of_Atkin\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ecr.yp.to/papers/primesieves-19990826.pdf\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e The implementation;\n\t\thas been optimised using a \u003cem\u003ewheel\u003c/em\u003e of static, but parameterised, size;\n\t\thas been parallelized;\n\t\tis polymorphic, but with a specialisation for type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e-specialisation is implemented by a \u003cem\u003erewrite-rule\u003c/em\u003e, which is \u003cem\u003every\u003c/em\u003e fragile.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Primes.SieveOfAtkin",
          "name": "SieveOfAtkin",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primes-SieveOfAtkin.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Generates the constant bounded list of prime-numbers using the Sieve of Atkin http en.wikipedia.org wiki Sieve of Atkin cr.yp.to papers primesieves-19990826.pdf The implementation has been optimised using wheel of static but parameterised size has been parallelized is polymorphic but with specialisation for type Int CAVEAT The Int specialisation is implemented by rewrite-rule which is very fragile",
          "hierarchy": "Factory Math Implementations Primes SieveOfAtkin",
          "module": "Factory.Math.Implementations.Primes.SieveOfAtkin",
          "name": "SieveOfAtkin",
          "package": "factory",
          "partial": "Sieve Of Atkin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-SieveOfAtkin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Generates the constant \u003cem\u003ebounded\u003c/em\u003e list of \u003cem\u003eprime-numbers\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://cr.yp.to/papers/primesieves-19990826.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Primes.SieveOfAtkin",
          "name": "sieveOfAtkin",
          "package": "factory",
          "signature": "NPrimes-\u003e i-\u003e [i]",
          "type": "function"
        },
        "index": {
          "description": "Generates the constant bounded list of prime-numbers http cr.yp.to papers primesieves-19990826.pdf",
          "hierarchy": "Factory Math Implementations Primes SieveOfAtkin",
          "module": "Factory.Math.Implementations.Primes.SieveOfAtkin",
          "name": "sieveOfAtkin",
          "normalized": "NPrimes-\u003ea-\u003e[a]",
          "package": "factory",
          "partial": "Of Atkin",
          "signature": "NPrimes-\u003ei-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-SieveOfAtkin.html#v:sieveOfAtkin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Generates the constant, conceptually infinite, list of \u003cem\u003eprime-numbers\u003c/em\u003e, using the \u003cem\u003eSieve of Eratosthenes\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Sieve_of_Eratosthenes\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Based on \u003ca\u003ehttp://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e The implementation;\n\t\thas been optimised using a \u003cem\u003ewheel\u003c/em\u003e of static, but parameterised, size;\n\t\tis polymorphic, but with a specialisation for type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e-specialisation is implemented by a \u003cem\u003erewrite-rule\u003c/em\u003e, which is \u003cem\u003every\u003c/em\u003e fragile.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Primes.SieveOfEratosthenes",
          "name": "SieveOfEratosthenes",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primes-SieveOfEratosthenes.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Generates the constant conceptually infinite list of prime-numbers using the Sieve of Eratosthenes http en.wikipedia.org wiki Sieve of Eratosthenes Based on http www.cs.hmc.edu oneill papers Sieve-JFP.pdf The implementation has been optimised using wheel of static but parameterised size is polymorphic but with specialisation for type Int CAVEAT The Int specialisation is implemented by rewrite-rule which is very fragile",
          "hierarchy": "Factory Math Implementations Primes SieveOfEratosthenes",
          "module": "Factory.Math.Implementations.Primes.SieveOfEratosthenes",
          "name": "SieveOfEratosthenes",
          "package": "factory",
          "partial": "Sieve Of Eratosthenes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-SieveOfEratosthenes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A refinement of the \u003cem\u003eSieve Of Eratosthenes\u003c/em\u003e, which pre-sieves candidates, selecting only those \u003cem\u003ecoprime\u003c/em\u003e to the specified short sequence of low prime-numbers.\n\u003c/li\u003e\u003cli\u003e The short sequence of initial primes are represented by a \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e,\n\tof parameterised, but static, size; \u003ca\u003ehttp://en.wikipedia.org/wiki/Wheel_factorization\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e The algorithm requires one to record multiples of previously discovered primes, allowing \u003cem\u003ecomposite\u003c/em\u003e candidates to be eliminated by comparison.\n\u003c/li\u003e\u003cli\u003e Because each \u003cem\u003elist\u003c/em\u003e of multiples, starts with the \u003cem\u003esquare\u003c/em\u003e of the prime from which it was generated,\n\tthe vast majority will be larger than the maximum prime ultimately demanded, and the effort of constructing and storing this list, is consequently wasted.\n\tMany implementations solve this, by requiring specification of the maximum prime required,\n\tthus allowing the construction of redundant lists of multiples to be avoided.\n\u003c/li\u003e\u003cli\u003e This implementation doesn't impose that constraint, leaving a requirement for \u003cem\u003erapid\u003c/em\u003e storage,\n\twhich is supported by \u003cem\u003eappending\u003c/em\u003e the \u003cem\u003elist\u003c/em\u003e of prime-multiples, to a \u003cem\u003equeue\u003c/em\u003e.\n\tIf a large enough candidate is ever generated, to match the \u003cem\u003ehead\u003c/em\u003e of the \u003cem\u003elist\u003c/em\u003e of prime-multiples,\n\tat the \u003cem\u003ehead\u003c/em\u003e of this \u003cem\u003equeue\u003c/em\u003e, then the whole \u003cem\u003elist\u003c/em\u003e of prime-multiples is dropped from the \u003cem\u003equeue\u003c/em\u003e,\n\tbut the \u003cem\u003etail\u003c/em\u003e of this \u003cem\u003elist\u003c/em\u003e of prime-multiples, for which there is now a high likelyhood of a subsequent match, must now be re-recorded.\n\tA \u003cem\u003equeue\u003c/em\u003e doesn't support efficient random \u003cem\u003einsertion\u003c/em\u003e, so a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e is used for these subsequent multiples.\n\tThis solution is faster than just using a \u003ca\u003eData.PQueue.Min\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: has linear \u003cem\u003eO(n)\u003c/em\u003e space-complexity.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Primes.SieveOfEratosthenes",
          "name": "sieveOfEratosthenes",
          "package": "factory",
          "signature": "NPrimes -\u003e [i]",
          "source": "src/Factory-Math-Implementations-Primes-SieveOfEratosthenes.html#sieveOfEratosthenes",
          "type": "function"
        },
        "index": {
          "description": "refinement of the Sieve Of Eratosthenes which pre-sieves candidates selecting only those coprime to the specified short sequence of low prime-numbers The short sequence of initial primes are represented by PrimeWheel of parameterised but static size http en.wikipedia.org wiki Wheel factorization The algorithm requires one to record multiples of previously discovered primes allowing composite candidates to be eliminated by comparison Because each list of multiples starts with the square of the prime from which it was generated the vast majority will be larger than the maximum prime ultimately demanded and the effort of constructing and storing this list is consequently wasted Many implementations solve this by requiring specification of the maximum prime required thus allowing the construction of redundant lists of multiples to be avoided This implementation doesn impose that constraint leaving requirement for rapid storage which is supported by appending the list of prime-multiples to queue If large enough candidate is ever generated to match the head of the list of prime-multiples at the head of this queue then the whole list of prime-multiples is dropped from the queue but the tail of this list of prime-multiples for which there is now high likelyhood of subsequent match must now be re-recorded queue doesn support efficient random insertion so Map is used for these subsequent multiples This solution is faster than just using Data.PQueue.Min CAVEAT has linear space-complexity",
          "hierarchy": "Factory Math Implementations Primes SieveOfEratosthenes",
          "module": "Factory.Math.Implementations.Primes.SieveOfEratosthenes",
          "name": "sieveOfEratosthenes",
          "normalized": "NPrimes-\u003e[a]",
          "package": "factory",
          "partial": "Of Eratosthenes",
          "signature": "NPrimes-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-SieveOfEratosthenes.html#v:sieveOfEratosthenes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tGenerates the constant, conceptually infinite, list of \u003cem\u003eprime-numbers\u003c/em\u003e, using \u003cem\u003eTrial Division\u003c/em\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Primes.TrialDivision",
          "name": "TrialDivision",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primes-TrialDivision.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Generates the constant conceptually infinite list of prime-numbers using Trial Division",
          "hierarchy": "Factory Math Implementations Primes TrialDivision",
          "module": "Factory.Math.Implementations.Primes.TrialDivision",
          "name": "TrialDivision",
          "package": "factory",
          "partial": "Trial Division",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-TrialDivision.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e For each candidate, confirm indivisibility, by all \u003cem\u003eprimes\u003c/em\u003e smaller than its \u003cem\u003esquare-root\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e The candidates to sieve, are generated by a \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e,\n\tof parameterised, but static, size; \u003ca\u003ehttp://en.wikipedia.org/wiki/Wheel_factorization\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Primes.TrialDivision",
          "name": "trialDivision",
          "package": "factory",
          "signature": "NPrimes -\u003e [prime]",
          "source": "src/Factory-Math-Implementations-Primes-TrialDivision.html#trialDivision",
          "type": "function"
        },
        "index": {
          "description": "For each candidate confirm indivisibility by all primes smaller than its square-root The candidates to sieve are generated by PrimeWheel of parameterised but static size http en.wikipedia.org wiki Wheel factorization",
          "hierarchy": "Factory Math Implementations Primes TrialDivision",
          "module": "Factory.Math.Implementations.Primes.TrialDivision",
          "name": "trialDivision",
          "normalized": "NPrimes-\u003e[a]",
          "package": "factory",
          "partial": "Division",
          "signature": "NPrimes-\u003e[prime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-TrialDivision.html#v:trialDivision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Generates the constant, conceptally infinite, list of \u003cem\u003eprime-numbers\u003c/em\u003e, using \u003cem\u003eTurner's Sieve\u003c/em\u003e; \u003ca\u003ehttp://www.haskell.org/haskellwiki/Prime_numbers#Turner.27s_sieve_-_Trial_division\u003c/a\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.Primes.TurnersSieve",
          "name": "TurnersSieve",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-Primes-TurnersSieve.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Generates the constant conceptally infinite list of prime-numbers using Turner Sieve http www.haskell.org haskellwiki Prime numbers Turner.27s sieve Trial division",
          "hierarchy": "Factory Math Implementations Primes TurnersSieve",
          "module": "Factory.Math.Implementations.Primes.TurnersSieve",
          "name": "TurnersSieve",
          "package": "factory",
          "partial": "Turners Sieve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-TurnersSieve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e For each \u003cem\u003eprime\u003c/em\u003e, the infinite list of candidates greater than its \u003cem\u003esquare\u003c/em\u003e,\n\tis filtered for indivisibility; \u003ca\u003ehttp://www.haskell.org/haskellwiki/Prime_numbers#Turner.27s_sieve_-_Trial_division\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: though one can easily add a \u003ccode\u003e\u003ca\u003ePrimeWheel\u003c/a\u003e\u003c/code\u003e, it proved counterproductive.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Implementations.Primes.TurnersSieve",
          "name": "turnersSieve",
          "package": "factory",
          "signature": "[prime]",
          "source": "src/Factory-Math-Implementations-Primes-TurnersSieve.html#turnersSieve",
          "type": "function"
        },
        "index": {
          "description": "For each prime the infinite list of candidates greater than its square is filtered for indivisibility http www.haskell.org haskellwiki Prime numbers Turner.27s sieve Trial division CAVEAT though one can easily add PrimeWheel it proved counterproductive",
          "hierarchy": "Factory Math Implementations Primes TurnersSieve",
          "module": "Factory.Math.Implementations.Primes.TurnersSieve",
          "name": "turnersSieve",
          "normalized": "[a]",
          "package": "factory",
          "partial": "Sieve",
          "signature": "[prime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-Primes-TurnersSieve.html#v:turnersSieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImplements \u003ccode\u003e\u003ca\u003eAlgorithmic\u003c/a\u003e\u003c/code\u003e by a variety of methods.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eCaller may benefit from application of \u003ccode\u003e\u003ca\u003esimplify\u003c/a\u003e\u003c/code\u003e before operating on the result;\n\twhich though of the required accuracy, may not be the most concise rational number satisfying that criterion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "SquareRoot",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-SquareRoot.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Algorithmic by variety of methods CAVEAT Caller may benefit from application of simplify before operating on the result which though of the required accuracy may not be the most concise rational number satisfying that criterion",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "SquareRoot",
          "package": "factory",
          "partial": "Square Root",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algorithms by which the \u003cem\u003esquare-root\u003c/em\u003e has been implemented.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "Algorithm",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Algorithm",
          "type": "data"
        },
        "index": {
          "description": "The algorithms by which the square-root has been implemented",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "Algorithm",
          "package": "factory",
          "partial": "Algorithm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of terms in a series.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "Terms",
          "package": "factory",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Terms",
          "type": "type"
        },
        "index": {
          "description": "The number of terms in series",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "Terms",
          "package": "factory",
          "partial": "Terms",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#t:Terms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Bakhshali_approximation\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "BakhshaliApproximation",
          "package": "factory",
          "signature": "BakhshaliApproximation",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Methods of computing square roots Bakhshali approximation",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "BakhshaliApproximation",
          "package": "factory",
          "partial": "Bakhshali Approximation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#v:BakhshaliApproximation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Continued_fraction_expansion\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "ContinuedFraction",
          "package": "factory",
          "signature": "ContinuedFraction",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Methods of computing square roots Continued fraction expansion",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "ContinuedFraction",
          "package": "factory",
          "partial": "Continued Fraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#v:ContinuedFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Halley%27s_method\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "HalleysMethod",
          "package": "factory",
          "signature": "HalleysMethod",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Halley method",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "HalleysMethod",
          "package": "factory",
          "partial": "Halleys Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#v:HalleysMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Newton%27s_method\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "NewtonRaphsonIteration",
          "package": "factory",
          "signature": "NewtonRaphsonIteration",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Newton method",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "NewtonRaphsonIteration",
          "package": "factory",
          "partial": "Newton Raphson Iteration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#v:NewtonRaphsonIteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Taylor_series\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "TaylorSeries",
          "package": "factory",
          "signature": "TaylorSeries Terms",
          "source": "src/Factory-Math-Implementations-SquareRoot.html#Algorithm",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Methods of computing square roots Taylor series",
          "hierarchy": "Factory Math Implementations SquareRoot",
          "module": "Factory.Math.Implementations.SquareRoot",
          "name": "TaylorSeries",
          "package": "factory",
          "partial": "Taylor Series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Implementations-SquareRoot.html#v:TaylorSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tExports the \u003cem\u003eMultiplicative Order\u003c/em\u003e of an integer, in a specific \u003cem\u003emodular\u003c/em\u003e arithmetic.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.MultiplicativeOrder",
          "name": "MultiplicativeOrder",
          "package": "factory",
          "source": "src/Factory-Math-MultiplicativeOrder.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Exports the Multiplicative Order of an integer in specific modular arithmetic",
          "hierarchy": "Factory Math MultiplicativeOrder",
          "module": "Factory.Math.MultiplicativeOrder",
          "name": "MultiplicativeOrder",
          "package": "factory",
          "partial": "Multiplicative Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-MultiplicativeOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The smallest positive integral power to which the specified integral base must be raised,\n\tto be congruent with one, in the specified \u003cem\u003emodular\u003c/em\u003e arithmetic.\n\u003c/li\u003e\u003cli\u003e Based on \u003ca\u003ehttp://rosettacode.org/wiki/Multiplicative_order#Haskell\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Multiplicative_order\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/MultiplicativeOrder.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.MultiplicativeOrder",
          "name": "multiplicativeOrder",
          "package": "factory",
          "signature": "primeFactorisationAlgorithm-\u003e i-\u003e i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The smallest positive integral power to which the specified integral base must be raised to be congruent with one in the specified modular arithmetic Based on http rosettacode.org wiki Multiplicative order Haskell http en.wikipedia.org wiki Multiplicative order http mathworld.wolfram.com MultiplicativeOrder.html",
          "hierarchy": "Factory Math MultiplicativeOrder",
          "module": "Factory.Math.MultiplicativeOrder",
          "name": "multiplicativeOrder",
          "normalized": "a-\u003eb-\u003eb-\u003eb",
          "package": "factory",
          "partial": "Order",
          "signature": "primeFactorisationAlgorithm-\u003ei-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-MultiplicativeOrder.html#v:multiplicativeOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tExports functions related to \u003cem\u003eperfect powers\u003c/em\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.PerfectPower",
          "name": "PerfectPower",
          "package": "factory",
          "source": "src/Factory-Math-PerfectPower.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Exports functions related to perfect powers",
          "hierarchy": "Factory Math PerfectPower",
          "module": "Factory.Math.PerfectPower",
          "name": "PerfectPower",
          "package": "factory",
          "partial": "Perfect Power",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PerfectPower.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e An integer \u003ccode\u003e(\u003e 1)\u003c/code\u003e which can be expressed as an integral power \u003ccode\u003e(\u003e 1)\u003c/code\u003e of a smaller \u003cem\u003enatural\u003c/em\u003e number.\n\u003c/li\u003e\u003cli\u003e CAVEAT: \u003cem\u003ezero\u003c/em\u003e and \u003cem\u003eone\u003c/em\u003e are normally excluded from this set.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Perfect_power\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/PerfectPower.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e A generalisation of the concept of \u003cem\u003eperfect squares\u003c/em\u003e, in which only the exponent '2' is significant.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PerfectPower",
          "name": "isPerfectPower",
          "package": "factory",
          "signature": "i -\u003e Bool",
          "source": "src/Factory-Math-PerfectPower.html#isPerfectPower",
          "type": "function"
        },
        "index": {
          "description": "An integer which can be expressed as an integral power of smaller natural number CAVEAT zero and one are normally excluded from this set http en.wikipedia.org wiki Perfect power http mathworld.wolfram.com PerfectPower.html generalisation of the concept of perfect squares in which only the exponent is significant",
          "hierarchy": "Factory Math PerfectPower",
          "module": "Factory.Math.PerfectPower",
          "name": "isPerfectPower",
          "normalized": "a-\u003eBool",
          "package": "factory",
          "partial": "Perfect Power",
          "signature": "i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PerfectPower.html#v:isPerfectPower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns \u003ccode\u003e(Just . sqrt)\u003c/code\u003e if the specified integer is a \u003cem\u003esquare number\u003c/em\u003e (AKA \u003cem\u003eperfect square\u003c/em\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Square_number\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/SquareNumber.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e(Math.Power.square . sqrt)\u003c/code\u003e is expensive, so the modulus of the operand is tested first, in an attempt to prove it isn't a \u003cem\u003eperfect square\u003c/em\u003e.\n\tThe set of tests, and the valid moduli within each test, are ordered to maximize the rate of failure-detection.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PerfectPower",
          "name": "maybeSquareNumber",
          "package": "factory",
          "signature": "i -\u003e Maybe i",
          "source": "src/Factory-Math-PerfectPower.html#maybeSquareNumber",
          "type": "function"
        },
        "index": {
          "description": "Returns Just sqrt if the specified integer is square number AKA perfect square http en.wikipedia.org wiki Square number http mathworld.wolfram.com SquareNumber.html Math.Power.square sqrt is expensive so the modulus of the operand is tested first in an attempt to prove it isn perfect square The set of tests and the valid moduli within each test are ordered to maximize the rate of failure-detection",
          "hierarchy": "Factory Math PerfectPower",
          "module": "Factory.Math.PerfectPower",
          "name": "maybeSquareNumber",
          "normalized": "a-\u003eMaybe a",
          "package": "factory",
          "partial": "Square Number",
          "signature": "i-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PerfectPower.html#v:maybeSquareNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the classes of \u003cem\u003ePi\u003c/em\u003e-algorithm which have been implemented.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Pi",
          "name": "Pi",
          "package": "factory",
          "source": "src/Factory-Math-Pi.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the classes of Pi algorithm which have been implemented",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "Pi",
          "package": "factory",
          "partial": "Pi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Defines the methods expected of a \u003cem\u003ePi\u003c/em\u003e-algorithm.\n\u003c/li\u003e\u003cli\u003e Most of the implementations naturally return a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, but the spigot-algorithms naturally produce a \u003ccode\u003e[Int]\u003c/code\u003e;\n\tthough representing \u003cem\u003ePi\u003c/em\u003e as a big integer with the decimal point removed is clearly incorrect.\n\u003c/li\u003e\u003cli\u003e Since representing \u003cem\u003ePi\u003c/em\u003e as either a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e or promoted to an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, is inconvenient, an alternative decimal \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-representation is provided.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Pi",
          "name": "Algorithmic",
          "package": "factory",
          "source": "src/Factory-Math-Pi.html#Algorithmic",
          "type": "class"
        },
        "index": {
          "description": "Defines the methods expected of Pi algorithm Most of the implementations naturally return Rational but the spigot-algorithms naturally produce Int though representing Pi as big integer with the decimal point removed is clearly incorrect Since representing Pi as either Rational or promoted to an Integer is inconvenient an alternative decimal String representation is provided",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "Algorithmic",
          "package": "factory",
          "partial": "Algorithmic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#t:Algorithmic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategorises the various algorithms.\n\u003c/p\u003e",
          "module": "Factory.Math.Pi",
          "name": "Category",
          "package": "factory",
          "source": "src/Factory-Math-Pi.html#Category",
          "type": "data"
        },
        "index": {
          "description": "Categorises the various algorithms",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "Category",
          "package": "factory",
          "partial": "Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgorithms based on the \u003cem\u003eArithmetic-geometric Mean\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Pi",
          "name": "AGM",
          "package": "factory",
          "signature": "AGM agm",
          "source": "src/Factory-Math-Pi.html#Category",
          "type": "function"
        },
        "index": {
          "description": "Algorithms based on the Arithmetic-geometric Mean",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "AGM",
          "package": "factory",
          "partial": "AGM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:AGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Pi",
          "name": "BBP",
          "package": "factory",
          "signature": "BBP bbp",
          "source": "src/Factory-Math-Pi.html#Category",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Bailey E2 Borwein E2 Plouffe formula",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "BBP",
          "package": "factory",
          "partial": "BBP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:BBP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Borwein%27s_algorithm\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Pi",
          "name": "Borwein",
          "package": "factory",
          "signature": "Borwein borwein",
          "source": "src/Factory-Math-Pi.html#Category",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Borwein algorithm",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "Borwein",
          "package": "factory",
          "partial": "Borwein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:Borwein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.pi314.net/eng/ramanujan.php\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Pi",
          "name": "Ramanujan",
          "package": "factory",
          "signature": "Ramanujan ramanujan",
          "source": "src/Factory-Math-Pi.html#Category",
          "type": "function"
        },
        "index": {
          "description": "http www.pi314.net eng ramanujan.php",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "Ramanujan",
          "package": "factory",
          "partial": "Ramanujan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:Ramanujan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgorithms from which the digits of \u003cem\u003ePi\u003c/em\u003e slowly drip, one by one.\n\u003c/p\u003e",
          "module": "Factory.Math.Pi",
          "name": "Spigot",
          "package": "factory",
          "signature": "Spigot spigot",
          "source": "src/Factory-Math-Pi.html#Category",
          "type": "function"
        },
        "index": {
          "description": "Algorithms from which the digits of Pi slowly drip one by one",
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "Spigot",
          "package": "factory",
          "partial": "Spigot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:Spigot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Pi",
          "name": "openI",
          "package": "factory",
          "signature": "openI",
          "source": "src/Factory-Math-Pi.html#openI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "openI",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:openI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Pi",
          "name": "openR",
          "package": "factory",
          "signature": "openR",
          "source": "src/Factory-Math-Pi.html#openR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "openR",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:openR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Pi",
          "name": "openS",
          "package": "factory",
          "signature": "openS",
          "source": "src/Factory-Math-Pi.html#openS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Pi",
          "module": "Factory.Math.Pi",
          "name": "openS",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Pi.html#v:openS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tExports functions involving integral powers.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Power",
          "name": "Power",
          "package": "factory",
          "source": "src/Factory-Math-Power.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Exports functions involving integral powers",
          "hierarchy": "Factory Math Power",
          "module": "Factory.Math.Power",
          "name": "Power",
          "package": "factory",
          "partial": "Power",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Power.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust for convenience.\n\u003c/p\u003e",
          "module": "Factory.Math.Power",
          "name": "cube",
          "package": "factory",
          "signature": "n -\u003e n",
          "source": "src/Factory-Math-Power.html#cube",
          "type": "function"
        },
        "index": {
          "description": "Just for convenience",
          "hierarchy": "Factory Math Power",
          "module": "Factory.Math.Power",
          "name": "cube",
          "normalized": "a-\u003ea",
          "package": "factory",
          "signature": "n-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Power.html#v:cube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust for convenience.\n\u003c/p\u003e",
          "module": "Factory.Math.Power",
          "name": "cubeRoot",
          "package": "factory",
          "signature": "Double -\u003e Double",
          "source": "src/Factory-Math-Power.html#cubeRoot",
          "type": "function"
        },
        "index": {
          "description": "Just for convenience",
          "hierarchy": "Factory Math Power",
          "module": "Factory.Math.Power",
          "name": "cubeRoot",
          "normalized": "Double-\u003eDouble",
          "package": "factory",
          "partial": "Root",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Power.html#v:cubeRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Raise an arbitrary number to the specified positive integral power, using \u003cem\u003emodular\u003c/em\u003e arithmetic.\n\u003c/li\u003e\u003cli\u003e Implements exponentiation as a sequence of either \u003cem\u003esquares\u003c/em\u003e or multiplications by the base;\n\t\u003ca\u003ehttp://en.wikipedia.org/wiki/Exponentiation_by_squaring\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Modular_exponentiation\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Power",
          "name": "raiseModulo",
          "package": "factory",
          "signature": "i-\u003e power-\u003e i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "Raise an arbitrary number to the specified positive integral power using modular arithmetic Implements exponentiation as sequence of either squares or multiplications by the base http en.wikipedia.org wiki Exponentiation by squaring http en.wikipedia.org wiki Modular exponentiation",
          "hierarchy": "Factory Math Power",
          "module": "Factory.Math.Power",
          "name": "raiseModulo",
          "normalized": "a-\u003eb-\u003ea-\u003ea",
          "package": "factory",
          "partial": "Modulo",
          "signature": "i-\u003epower-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Power.html#v:raiseModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly for convenience.\n\u003c/p\u003e",
          "module": "Factory.Math.Power",
          "name": "square",
          "package": "factory",
          "signature": "n -\u003e n",
          "source": "src/Factory-Math-Power.html#square",
          "type": "function"
        },
        "index": {
          "description": "Mainly for convenience",
          "hierarchy": "Factory Math Power",
          "module": "Factory.Math.Power",
          "name": "square",
          "normalized": "a-\u003ea",
          "package": "factory",
          "signature": "n-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Power.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Iteratively generate sequential \u003cem\u003esquares\u003c/em\u003e, from the specified initial value,\n\tbased on the fact that \u003ccode\u003e(x + 1)^2 = x^2 + 2 * x + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The initial value doesn't need to be either positive or integral.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Power",
          "name": "squaresFrom",
          "package": "factory",
          "signature": "n-\u003e [(n, n)]",
          "type": "function"
        },
        "index": {
          "description": "Iteratively generate sequential squares from the specified initial value based on the fact that The initial value doesn need to be either positive or integral",
          "hierarchy": "Factory Math Power",
          "module": "Factory.Math.Power",
          "name": "squaresFrom",
          "normalized": "a-\u003e[(a,a)]",
          "package": "factory",
          "partial": "From",
          "signature": "n-\u003e[(n,n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Power.html#v:squaresFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines the unit with which precision is measured, and operations on it.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Precision",
          "name": "Precision",
          "package": "factory",
          "source": "src/Factory-Math-Precision.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines the unit with which precision is measured and operations on it",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "Precision",
          "package": "factory",
          "partial": "Precision",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eorder of convergence\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Rate_of_convergence\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "ConvergenceOrder",
          "package": "factory",
          "source": "src/Factory-Math-Precision.html#ConvergenceOrder",
          "type": "type"
        },
        "index": {
          "description": "The order of convergence http en.wikipedia.org wiki Rate of convergence",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "ConvergenceOrder",
          "package": "factory",
          "partial": "Convergence Order",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#t:ConvergenceOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003erate of convergence\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Rate_of_convergence\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "ConvergenceRate",
          "package": "factory",
          "source": "src/Factory-Math-Precision.html#ConvergenceRate",
          "type": "type"
        },
        "index": {
          "description": "The rate of convergence http en.wikipedia.org wiki Rate of convergence",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "ConvergenceRate",
          "package": "factory",
          "partial": "Convergence Rate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#t:ConvergenceRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number of decimal digits; presumably positive.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "DecimalDigits",
          "package": "factory",
          "source": "src/Factory-Math-Precision.html#DecimalDigits",
          "type": "type"
        },
        "index": {
          "description": "number of decimal digits presumably positive",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "DecimalDigits",
          "package": "factory",
          "partial": "Decimal Digits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#t:DecimalDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eCubic\u003c/em\u003e convergence-rate.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "cubicConvergence",
          "package": "factory",
          "signature": "ConvergenceOrder",
          "source": "src/Factory-Math-Precision.html#cubicConvergence",
          "type": "function"
        },
        "index": {
          "description": "Cubic convergence-rate",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "cubicConvergence",
          "package": "factory",
          "partial": "Convergence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:cubicConvergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predicted number of iterations, required to achieve a specific accuracy, at a given \u003cem\u003eorder of convergence\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "getIterationsRequired",
          "package": "factory",
          "signature": "ConvergenceOrder-\u003e DecimalDigits-\u003e DecimalDigits-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The predicted number of iterations required to achieve specific accuracy at given order of convergence",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "getIterationsRequired",
          "normalized": "ConvergenceOrder-\u003eDecimalDigits-\u003eDecimalDigits-\u003ea",
          "package": "factory",
          "partial": "Iterations Required",
          "signature": "ConvergenceOrder-\u003eDecimalDigits-\u003eDecimalDigits-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:getIterationsRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The predicted number of terms which must be extracted from a series,\n\tif it is to converge to the required accuracy,\n\tat the specified linear \u003cem\u003econvergence-rate\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003cem\u003econvergence-rate\u003c/em\u003e of a series, is the error in the series after summation of \u003ccode\u003e(n+1)th\u003c/code\u003e terms,\n\tdivided by the error after only \u003ccode\u003en\u003c/code\u003e terms, as the latter tends to infinity.\n\tAs such, for a \u003cem\u003econvergent\u003c/em\u003e series (in which the error get smaller with successive terms), it's value lies in the range \u003ccode\u003e0 .. 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Rate_of_convergence\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Precision",
          "name": "getTermsRequired",
          "package": "factory",
          "signature": "ConvergenceRate-\u003e DecimalDigits-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The predicted number of terms which must be extracted from series if it is to converge to the required accuracy at the specified linear convergence-rate The convergence-rate of series is the error in the series after summation of th terms divided by the error after only terms as the latter tends to infinity As such for convergent series in which the error get smaller with successive terms it value lies in the range http en.wikipedia.org wiki Rate of convergence",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "getTermsRequired",
          "normalized": "ConvergenceRate-\u003eDecimalDigits-\u003ea",
          "package": "factory",
          "partial": "Terms Required",
          "signature": "ConvergenceRate-\u003eDecimalDigits-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:getTermsRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eLinear\u003c/em\u003e convergence-rate; which may be qualified by the \u003cem\u003erate of convergence\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "linearConvergence",
          "package": "factory",
          "signature": "ConvergenceOrder",
          "source": "src/Factory-Math-Precision.html#linearConvergence",
          "type": "function"
        },
        "index": {
          "description": "Linear convergence-rate which may be qualified by the rate of convergence",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "linearConvergence",
          "package": "factory",
          "partial": "Convergence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:linearConvergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromotes the specified number, by a positive number of \u003ccode\u003e\u003ca\u003eDecimalDigits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "promote",
          "package": "factory",
          "signature": "n -\u003e DecimalDigits -\u003e n",
          "source": "src/Factory-Math-Precision.html#promote",
          "type": "function"
        },
        "index": {
          "description": "Promotes the specified number by positive number of DecimalDigits",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "promote",
          "normalized": "a-\u003eDecimalDigits-\u003ea",
          "package": "factory",
          "signature": "n-\u003eDecimalDigits-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:promote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eQuadratic\u003c/em\u003e convergence-rate.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "quadraticConvergence",
          "package": "factory",
          "signature": "ConvergenceOrder",
          "source": "src/Factory-Math-Precision.html#quadraticConvergence",
          "type": "function"
        },
        "index": {
          "description": "Quadratic convergence-rate",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "quadraticConvergence",
          "package": "factory",
          "partial": "Convergence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:quadraticConvergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eQuartic\u003c/em\u003e convergence-rate.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "quarticConvergence",
          "package": "factory",
          "signature": "ConvergenceOrder",
          "source": "src/Factory-Math-Precision.html#quarticConvergence",
          "type": "function"
        },
        "index": {
          "description": "Quartic convergence-rate",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "quarticConvergence",
          "package": "factory",
          "partial": "Convergence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:quarticConvergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRounds the specified number, to a positive number of \u003ccode\u003e\u003ca\u003eDecimalDigits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Precision",
          "name": "roundTo",
          "package": "factory",
          "signature": "DecimalDigits -\u003e a -\u003e f",
          "source": "src/Factory-Math-Precision.html#roundTo",
          "type": "function"
        },
        "index": {
          "description": "Rounds the specified number to positive number of DecimalDigits",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "roundTo",
          "normalized": "DecimalDigits-\u003ea-\u003eb",
          "package": "factory",
          "partial": "To",
          "signature": "DecimalDigits-\u003ea-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:roundTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Reduces a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e to the minimal form required for the specified number of \u003cem\u003efractional\u003c/em\u003e decimal places;\n\tirrespective of the number of integral decimal places.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e approximation to an irrational number, may be very long, and provide an unknown excess precision.\n\tWhilst this doesn't sound harmful, it costs in performance and memory-requirement, and being unpredictable isn't actually useful.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Precision",
          "name": "simplify",
          "package": "factory",
          "signature": "DecimalDigits-\u003e operand-\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "Reduces Rational to the minimal form required for the specified number of fractional decimal places irrespective of the number of integral decimal places Rational approximation to an irrational number may be very long and provide an unknown excess precision Whilst this doesn sound harmful it costs in performance and memory-requirement and being unpredictable isn actually useful",
          "hierarchy": "Factory Math Precision",
          "module": "Factory.Math.Precision",
          "name": "simplify",
          "normalized": "DecimalDigits-\u003ea-\u003eRational",
          "package": "factory",
          "signature": "DecimalDigits-\u003eoperand-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Precision.html#v:simplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Exports a common interface for primality-implementations.\n\u003c/li\u003e\u003cli\u003e Provides utilities for these implementations.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.Primality",
          "name": "Primality",
          "package": "factory",
          "source": "src/Factory-Math-Primality.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Exports common interface for primality-implementations Provides utilities for these implementations",
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "Primality",
          "package": "factory",
          "partial": "Primality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the methods expected of a primality-testing algorithm.\n\u003c/p\u003e",
          "module": "Factory.Math.Primality",
          "name": "Algorithmic",
          "package": "factory",
          "source": "src/Factory-Math-Primality.html#Algorithmic",
          "type": "class"
        },
        "index": {
          "description": "Defines the methods expected of primality-testing algorithm",
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "Algorithmic",
          "package": "factory",
          "partial": "Algorithmic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#t:Algorithmic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the two specified integers are \u003cem\u003erelatively prime\u003c/em\u003e,\n\ti.e. if they share no common positive factors except one.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e1\u003c/code\u003e and \u003ccode\u003e-1\u003c/code\u003e are the only numbers which are \u003cem\u003ecoprime\u003c/em\u003e to themself.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Coprime\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/RelativelyPrime.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Primality",
          "name": "areCoprime",
          "package": "factory",
          "signature": "i -\u003e i -\u003e Bool",
          "source": "src/Factory-Math-Primality.html#areCoprime",
          "type": "function"
        },
        "index": {
          "description": "True if the two specified integers are relatively prime i.e if they share no common positive factors except one and are the only numbers which are coprime to themself http en.wikipedia.org wiki Coprime http mathworld.wolfram.com RelativelyPrime.html",
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "areCoprime",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "factory",
          "partial": "Coprime",
          "signature": "i-\u003ei-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#v:areCoprime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ordered list of the \u003cem\u003eCarmichael\u003c/em\u003e numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Carmichael_number\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Primality",
          "name": "carmichaelNumbers",
          "package": "factory",
          "signature": "algorithm -\u003e [i]",
          "source": "src/Factory-Math-Primality.html#carmichaelNumbers",
          "type": "function"
        },
        "index": {
          "description": "An ordered list of the Carmichael numbers http en.wikipedia.org wiki Carmichael number",
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "carmichaelNumbers",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "partial": "Numbers",
          "signature": "algorithm-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#v:carmichaelNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A \u003cem\u003eCarmichael number\u003c/em\u003e is an \u003cem\u003eodd\u003c/em\u003e \u003cem\u003ecomposite\u003c/em\u003e number which satisfies \u003cem\u003eFermat's little theorem\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Carmichael_number\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/CarmichaelNumber.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Primality",
          "name": "isCarmichaelNumber",
          "package": "factory",
          "signature": "algorithm -\u003e i -\u003e Bool",
          "source": "src/Factory-Math-Primality.html#isCarmichaelNumber",
          "type": "function"
        },
        "index": {
          "description": "Carmichael number is an odd composite number which satisfies Fermat little theorem http en.wikipedia.org wiki Carmichael number http mathworld.wolfram.com CarmichaelNumber.html",
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "isCarmichaelNumber",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "factory",
          "partial": "Carmichael Number",
          "signature": "algorithm-\u003ei-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#v:isCarmichaelNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Tests \u003cem\u003eFermat's Little Theorem\u003c/em\u003e for all applicable values, as a probabilistic primality-test.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Fermat%27s_little_theorem\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Fermat_primality_test\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Fermat_pseudoprime\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: this primality-test fails for the \u003cem\u003eCarmichael numbers\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e TODO: confirm that all values must be tested.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Primality",
          "name": "isFermatWitness",
          "package": "factory",
          "signature": "i -\u003e Bool",
          "source": "src/Factory-Math-Primality.html#isFermatWitness",
          "type": "function"
        },
        "index": {
          "description": "Tests Fermat Little Theorem for all applicable values as probabilistic primality-test http en.wikipedia.org wiki Fermat little theorem http en.wikipedia.org wiki Fermat primality test http en.wikipedia.org wiki Fermat pseudoprime CAVEAT this primality-test fails for the Carmichael numbers TODO confirm that all values must be tested",
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "isFermatWitness",
          "normalized": "a-\u003eBool",
          "package": "factory",
          "partial": "Fermat Witness",
          "signature": "i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#v:isFermatWitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Primality",
          "name": "isPrime",
          "package": "factory",
          "signature": "algorithm -\u003e i -\u003e Bool",
          "source": "src/Factory-Math-Primality.html#isPrime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Primality",
          "module": "Factory.Math.Primality",
          "name": "isPrime",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "factory",
          "partial": "Prime",
          "signature": "algorithm-\u003ei-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primality.html#v:isPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Integer_factorization\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Exports a common interface to permit decomposition of positive integers,\n\tinto the unique combination of \u003cem\u003eprime\u003c/em\u003e-factors known to exist according to the \u003cem\u003eFundamental Theorem of Arithmetic\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Leveraging this abstract capability, it derives the \u003cem\u003esmoothness\u003c/em\u003e, \u003cem\u003epower-smoothness\u003c/em\u003e, \u003cem\u003eomega\u003c/em\u003e-numbers and \u003cem\u003esquare-free\u003c/em\u003e integers.\n\u003c/li\u003e\u003cli\u003e Filters the list of \u003cem\u003eregular-numbers\u003c/em\u003e from the list of \u003cem\u003esmoothness\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: to avoid wasting time, it may be advantageous to check \u003cem\u003eFactory.Math.Primality.isPrime\u003c/em\u003e first.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "PrimeFactorisation",
          "package": "factory",
          "source": "src/Factory-Math-PrimeFactorisation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION http en.wikipedia.org wiki Integer factorization Exports common interface to permit decomposition of positive integers into the unique combination of prime factors known to exist according to the Fundamental Theorem of Arithmetic http en.wikipedia.org wiki Fundamental theorem of arithmetic Leveraging this abstract capability it derives the smoothness power-smoothness omega numbers and square-free integers Filters the list of regular-numbers from the list of smoothness CAVEAT to avoid wasting time it may be advantageous to check Factory.Math.Primality.isPrime first",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "PrimeFactorisation",
          "package": "factory",
          "partial": "Prime Factorisation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the methods expected of a \u003cem\u003efactorisation\u003c/em\u003e-algorithm.\n\u003c/p\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "Algorithmic",
          "package": "factory",
          "source": "src/Factory-Math-PrimeFactorisation.html#Algorithmic",
          "type": "class"
        },
        "index": {
          "description": "Defines the methods expected of factorisation algorithm",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "Algorithmic",
          "package": "factory",
          "partial": "Algorithmic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#t:Algorithmic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The number of \u003cem\u003ecoprimes\u003c/em\u003e less than or equal to the specified positive integer.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Euler%27s_totient_function\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/TotientFunction.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e AKA \u003cem\u003eEulerPhi\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "eulersTotient",
          "package": "factory",
          "signature": "algorithm -\u003e i -\u003e i",
          "source": "src/Factory-Math-PrimeFactorisation.html#eulersTotient",
          "type": "function"
        },
        "index": {
          "description": "The number of coprimes less than or equal to the specified positive integer http en.wikipedia.org wiki Euler totient function http mathworld.wolfram.com TotientFunction.html AKA EulerPhi",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "eulersTotient",
          "normalized": "a-\u003eb-\u003eb",
          "package": "factory",
          "partial": "Totient",
          "signature": "algorithm-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:eulersTotient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The upper limit for a prime to be considered as a candidate factor of the specified number.\n\u003c/li\u003e\u003cli\u003e One might naively think that this limit is \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 2)\u003c/code\u003e for an even number,\n\tbut though a prime-factor \u003cem\u003egreater\u003c/em\u003e than the \u003cem\u003esquare-root\u003c/em\u003e of the number can exist,\n\tits smaller \u003cem\u003ecofactor\u003c/em\u003e decomposes to a prime which must be less than the \u003cem\u003esquare-root\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e NB: rather then using \u003ccode\u003e(primeFactor \u003c= sqrt numerator)\u003c/code\u003e to filter the candidate prime-factors of a given numerator,\n\tone can alternatively use \u003ccode\u003e(numerator \u003e= primeFactor ^ 2)\u003c/code\u003e to filter what can potentially be factored by a given prime-factor.\n\u003c/li\u003e\u003cli\u003e CAVEAT: suffers from rounding-errors, though no consequence has been witnessed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "maxBoundPrimeFactor",
          "package": "factory",
          "signature": "i -\u003e i",
          "source": "src/Factory-Math-PrimeFactorisation.html#maxBoundPrimeFactor",
          "type": "function"
        },
        "index": {
          "description": "The upper limit for prime to be considered as candidate factor of the specified number One might naively think that this limit is div for an even number but though prime-factor greater than the square-root of the number can exist its smaller cofactor decomposes to prime which must be less than the square-root NB rather then using primeFactor sqrt numerator to filter the candidate prime-factors of given numerator one can alternatively use numerator primeFactor to filter what can potentially be factored by given prime-factor CAVEAT suffers from rounding-errors though no consequence has been witnessed",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "maxBoundPrimeFactor",
          "normalized": "a-\u003ea",
          "package": "factory",
          "partial": "Bound Prime Factor",
          "signature": "i-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:maxBoundPrimeFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A constant, zero-indexed, conceptually infinite, list of the \u003cem\u003esmall omega\u003c/em\u003e numbers (i.e. the number of \u003cem\u003edistinct\u003c/em\u003e prime factors); cf. \u003cem\u003ebig omega\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://oeis.org/wiki/Omega%28n%29,_number_of_distinct_primes_dividing_n\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/DistinctPrimeFactors.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://planetmath.org/encyclopedia/NumberOfDistinctPrimeFactorsFunction.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "omega",
          "package": "factory",
          "signature": "algorithm -\u003e [i]",
          "source": "src/Factory-Math-PrimeFactorisation.html#omega",
          "type": "function"
        },
        "index": {
          "description": "constant zero-indexed conceptually infinite list of the small omega numbers i.e the number of distinct prime factors cf big omega http oeis.org wiki Omega number of distinct primes dividing http mathworld.wolfram.com DistinctPrimeFactors.html http planetmath.org encyclopedia NumberOfDistinctPrimeFactorsFunction.html",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "omega",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "signature": "algorithm-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:omega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A constant, zero-indexed, conceptually infinite, list of the \u003cem\u003epower-smooth\u003c/em\u003eness of all positive integers.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Smooth_number#Powersmooth_numbers\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "powerSmoothness",
          "package": "factory",
          "signature": "algorithm -\u003e [base]",
          "source": "src/Factory-Math-PrimeFactorisation.html#powerSmoothness",
          "type": "function"
        },
        "index": {
          "description": "constant zero-indexed conceptually infinite list of the power-smooth ness of all positive integers http en.wikipedia.org wiki Smooth number Powersmooth numbers",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "powerSmoothness",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "partial": "Smoothness",
          "signature": "algorithm-\u003e[base]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:powerSmoothness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.PrimeFactorisation",
          "name": "primeFactors",
          "package": "factory",
          "signature": "primeFactors",
          "source": "src/Factory-Math-PrimeFactorisation.html#primeFactors",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "primeFactors",
          "package": "factory",
          "partial": "Factors",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:primeFactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003cem\u003eEuler's Totient\u003c/em\u003e for a \u003cem\u003epower\u003c/em\u003e of a \u003cem\u003eprime\u003c/em\u003e-number.\n\u003c/li\u003e\u003cli\u003e By \u003cem\u003eOlofsson\u003c/em\u003e; \u003ccode\u003e(phi(n^k) = n^(k - 1) * phi(n))\u003c/code\u003e\n\tand since \u003ccode\u003e(phi(prime) = prime - 1)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e CAVEAT: checks neither the primality nor the bounds of the specified value; therefore for internal use only.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "primePowerTotient",
          "package": "factory",
          "signature": "Exponential base exponent -\u003e base",
          "source": "src/Factory-Math-PrimeFactorisation.html#primePowerTotient",
          "type": "function"
        },
        "index": {
          "description": "Euler Totient for power of prime number By Olofsson phi phi and since phi prime prime CAVEAT checks neither the primality nor the bounds of the specified value therefore for internal use only",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "primePowerTotient",
          "normalized": "Exponential a b-\u003ea",
          "package": "factory",
          "partial": "Power Totient",
          "signature": "Exponential base exponent-\u003ebase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:primePowerTotient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Filters \u003ccode\u003e\u003ca\u003esmoothness\u003c/a\u003e\u003c/code\u003e, to derive the constant list of \u003cem\u003eHamming-numbers\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Regular_number\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "regularNumbers",
          "package": "factory",
          "signature": "algorithm -\u003e [base]",
          "source": "src/Factory-Math-PrimeFactorisation.html#regularNumbers",
          "type": "function"
        },
        "index": {
          "description": "Filters smoothness to derive the constant list of Hamming-numbers http en.wikipedia.org wiki Regular number",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "regularNumbers",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "partial": "Numbers",
          "signature": "algorithm-\u003e[base]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:regularNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A constant, zero-indexed, conceptually infinite, list, of the \u003cem\u003esmooth\u003c/em\u003eness of all positive integers.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Smooth_number\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/SmoothNumber.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "smoothness",
          "package": "factory",
          "signature": "algorithm -\u003e [base]",
          "source": "src/Factory-Math-PrimeFactorisation.html#smoothness",
          "type": "function"
        },
        "index": {
          "description": "constant zero-indexed conceptually infinite list of the smooth ness of all positive integers http en.wikipedia.org wiki Smooth number http mathworld.wolfram.com SmoothNumber.html",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "smoothness",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "signature": "algorithm-\u003e[base]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:smoothness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A constant, conceptually infinite, list of the \u003cem\u003esquare-free\u003c/em\u003e numbers, i.e. those which aren't divisible by any \u003cem\u003eperfect square\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Square-free_integer\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "squareFree",
          "package": "factory",
          "signature": "algorithm -\u003e [i]",
          "source": "src/Factory-Math-PrimeFactorisation.html#squareFree",
          "type": "function"
        },
        "index": {
          "description": "constant conceptually infinite list of the square-free numbers i.e those which aren divisible by any perfect square http en.wikipedia.org wiki Square-free integer",
          "hierarchy": "Factory Math PrimeFactorisation",
          "module": "Factory.Math.PrimeFactorisation",
          "name": "squareFree",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "partial": "Free",
          "signature": "algorithm-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-PrimeFactorisation.html#v:squareFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tExports a common interface for implementations of \u003cem\u003eprime-number\u003c/em\u003e generators.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Primes",
          "name": "Primes",
          "package": "factory",
          "source": "src/Factory-Math-Primes.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Exports common interface for implementations of prime-number generators",
          "hierarchy": "Factory Math Primes",
          "module": "Factory.Math.Primes",
          "name": "Primes",
          "package": "factory",
          "partial": "Primes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the methods expected of a \u003cem\u003eprime-number\u003c/em\u003e generator.\n\u003c/p\u003e",
          "module": "Factory.Math.Primes",
          "name": "Algorithmic",
          "package": "factory",
          "source": "src/Factory-Math-Primes.html#Algorithmic",
          "type": "class"
        },
        "index": {
          "description": "Defines the methods expected of prime-number generator",
          "hierarchy": "Factory Math Primes",
          "module": "Factory.Math.Primes",
          "name": "Algorithmic",
          "package": "factory",
          "partial": "Algorithmic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primes.html#t:Algorithmic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns the constant ordered infinite list of \u003cem\u003eMersenne numbers\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Only the subset composed from a prime exponent is returned; which is a strict superset of the \u003cem\u003eMersenne Primes\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Mersenne_prime\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/MersenneNumber.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Primes",
          "name": "mersenneNumbers",
          "package": "factory",
          "signature": "algorithm -\u003e [i]",
          "source": "src/Factory-Math-Primes.html#mersenneNumbers",
          "type": "function"
        },
        "index": {
          "description": "Returns the constant ordered infinite list of Mersenne numbers Only the subset composed from prime exponent is returned which is strict superset of the Mersenne Primes http en.wikipedia.org wiki Mersenne prime http mathworld.wolfram.com MersenneNumber.html",
          "hierarchy": "Factory Math Primes",
          "module": "Factory.Math.Primes",
          "name": "mersenneNumbers",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "partial": "Numbers",
          "signature": "algorithm-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primes.html#v:mersenneNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Primes",
          "name": "primes",
          "package": "factory",
          "signature": "primes",
          "source": "src/Factory-Math-Primes.html#primes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Primes",
          "module": "Factory.Math.Primes",
          "name": "primes",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primes.html#v:primes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns the constant list, defining the \u003cem\u003ePrimorial\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Primorial\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/Primorial.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Primes",
          "name": "primorial",
          "package": "factory",
          "signature": "algorithm -\u003e [i]",
          "source": "src/Factory-Math-Primes.html#primorial",
          "type": "function"
        },
        "index": {
          "description": "Returns the constant list defining the Primorial http en.wikipedia.org wiki Primorial http mathworld.wolfram.com Primorial.html",
          "hierarchy": "Factory Math Primes",
          "module": "Factory.Math.Primes",
          "name": "primorial",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "signature": "algorithm-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Primes.html#v:primorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tFunctions for probability-distributions.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tBecause data-constructors are exposed, \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e need not be called.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Probability",
          "name": "Probability",
          "package": "factory",
          "source": "src/Factory-Math-Probability.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Functions for probability-distributions CAVEAT Because data-constructors are exposed isValid need not be called",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "Probability",
          "package": "factory",
          "partial": "Probability",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes \u003cem\u003econtinuous probability-distributions\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/List_of_probability_distributions#Continuous_distributions\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "ContinuousDistribution",
          "package": "factory",
          "source": "src/Factory-Math-Probability.html#ContinuousDistribution",
          "type": "data"
        },
        "index": {
          "description": "Describes continuous probability-distributions http en.wikipedia.org wiki List of probability distributions Continuous distributions",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "ContinuousDistribution",
          "package": "factory",
          "partial": "Continuous Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#t:ContinuousDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes \u003cem\u003ediscrete probability-distributions\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/List_of_probability_distributions#Discrete_distributions\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "DiscreteDistribution",
          "package": "factory",
          "source": "src/Factory-Math-Probability.html#DiscreteDistribution",
          "type": "data"
        },
        "index": {
          "description": "Describes discrete probability-distributions http en.wikipedia.org wiki List of probability distributions Discrete distributions",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "DiscreteDistribution",
          "package": "factory",
          "partial": "Discrete Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#t:DiscreteDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a common interface for probability-distributions.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "Distribution",
          "package": "factory",
          "source": "src/Factory-Math-Probability.html#Distribution",
          "type": "class"
        },
        "index": {
          "description": "Defines common interface for probability-distributions",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "Distribution",
          "package": "factory",
          "partial": "Distribution",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines an \u003cem\u003eExponential\u003c/em\u003e-distribution with a particular \u003cem\u003elambda\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Exponential_distribution\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "ExponentialDistribution",
          "package": "factory",
          "signature": "ExponentialDistribution parameter",
          "source": "src/Factory-Math-Probability.html#ContinuousDistribution",
          "type": "function"
        },
        "index": {
          "description": "Defines an Exponential distribution with particular lambda http en.wikipedia.org wiki Exponential distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "ExponentialDistribution",
          "package": "factory",
          "partial": "Exponential Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:ExponentialDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a distribution whose logarithm is normally distributed with a particular \u003cem\u003emean\u003c/em\u003e & \u003cem\u003evariance\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Lognormal\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "LogNormalDistribution",
          "package": "factory",
          "signature": "LogNormalDistribution parameter parameter",
          "source": "src/Factory-Math-Probability.html#ContinuousDistribution",
          "type": "function"
        },
        "index": {
          "description": "Defines distribution whose logarithm is normally distributed with particular mean variance http en.wikipedia.org wiki Lognormal",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "LogNormalDistribution",
          "package": "factory",
          "partial": "Log Normal Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:LogNormalDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a \u003cem\u003eNormal\u003c/em\u003e-distribution with a particular \u003cem\u003emean\u003c/em\u003e & \u003cem\u003evariance\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Normal_distribution\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "NormalDistribution",
          "package": "factory",
          "signature": "NormalDistribution parameter parameter",
          "source": "src/Factory-Math-Probability.html#ContinuousDistribution",
          "type": "function"
        },
        "index": {
          "description": "Defines Normal distribution with particular mean variance http en.wikipedia.org wiki Normal distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "NormalDistribution",
          "package": "factory",
          "partial": "Normal Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:NormalDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines an \u003cem\u003ePoisson\u003c/em\u003e-distribution with a particular \u003cem\u003elambda\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Poisson_distribution\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "PoissonDistribution",
          "package": "factory",
          "signature": "PoissonDistribution parameter",
          "source": "src/Factory-Math-Probability.html#DiscreteDistribution",
          "type": "function"
        },
        "index": {
          "description": "Defines an Poisson distribution with particular lambda http en.wikipedia.org wiki Poisson distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "PoissonDistribution",
          "package": "factory",
          "partial": "Poisson Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:PoissonDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines an \u003cem\u003eGeometric\u003c/em\u003e-distribution with a particular probability of success; \u003ca\u003ehttp://en.wikipedia.org/wiki/Geometric_distribution\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "ShiftedGeometricDistribution",
          "package": "factory",
          "signature": "ShiftedGeometricDistribution parameter",
          "source": "src/Factory-Math-Probability.html#DiscreteDistribution",
          "type": "function"
        },
        "index": {
          "description": "Defines an Geometric distribution with particular probability of success http en.wikipedia.org wiki Geometric distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "ShiftedGeometricDistribution",
          "package": "factory",
          "partial": "Shifted Geometric Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:ShiftedGeometricDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a \u003cem\u003eUniform\u003c/em\u003e-distribution within a \u003cem\u003eclosed interval\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Uniform_distribution\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "UniformDistribution",
          "package": "factory",
          "signature": "UniformDistribution (Interval parameter)",
          "source": "src/Factory-Math-Probability.html#ContinuousDistribution",
          "type": "function"
        },
        "index": {
          "description": "Defines Uniform distribution within closed interval http en.wikipedia.org wiki Uniform distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "UniformDistribution",
          "package": "factory",
          "partial": "Uniform Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:UniformDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Converts a pair of independent \u003cem\u003euniformly distributed\u003c/em\u003e random numbers, within the \u003cem\u003esemi-closed unit interval\u003c/em\u003e \u003cem\u003e(0,1]\u003c/em\u003e,\n\tto a pair of independent \u003cem\u003enormally distributed\u003c/em\u003e random numbers, of standardized \u003cem\u003emean\u003c/em\u003e=0, and \u003cem\u003evariance\u003c/em\u003e=1.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Probability",
          "name": "boxMullerTransform",
          "package": "factory",
          "signature": "(f, f)-\u003e (f, f)",
          "type": "function"
        },
        "index": {
          "description": "Converts pair of independent uniformly distributed random numbers within the semi-closed unit interval to pair of independent normally distributed random numbers of standardized mean and variance http en.wikipedia.org wiki Box E2 Muller transform",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "boxMullerTransform",
          "normalized": "(a,a)-\u003e(a,a)",
          "package": "factory",
          "partial": "Muller Transform",
          "signature": "(f,f)-\u003e(f,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:boxMullerTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the supplied random-number generator, to generate a conceptually infinite population, with the specified continuous probability-distribution.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "generateContinuousPopulation",
          "package": "factory",
          "signature": "ContinuousDistribution f-\u003e randomGen-\u003e [f]",
          "type": "function"
        },
        "index": {
          "description": "Uses the supplied random-number generator to generate conceptually infinite population with the specified continuous probability-distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "generateContinuousPopulation",
          "normalized": "ContinuousDistribution a-\u003eb-\u003e[a]",
          "package": "factory",
          "partial": "Continuous Population",
          "signature": "ContinuousDistribution f-\u003erandomGen-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:generateContinuousPopulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the supplied random-number generator, to generate a conceptually infinite population, with the specified discrete probability-distribution.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "generateDiscretePopulation",
          "package": "factory",
          "signature": "DiscreteDistribution parameter-\u003e randomGen-\u003e [sample]",
          "type": "function"
        },
        "index": {
          "description": "Uses the supplied random-number generator to generate conceptually infinite population with the specified discrete probability-distribution",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "generateDiscretePopulation",
          "normalized": "DiscreteDistribution a-\u003eb-\u003e[c]",
          "package": "factory",
          "partial": "Discrete Population",
          "signature": "DiscreteDistribution parameter-\u003erandomGen-\u003e[sample]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:generateDiscretePopulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Probability",
          "name": "generatePopulation",
          "package": "factory",
          "signature": "generatePopulation",
          "source": "src/Factory-Math-Probability.html#generatePopulation",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "generatePopulation",
          "package": "factory",
          "partial": "Population",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:generatePopulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Uses the supplied random-number generator,\n\tto generate a conceptually infinite list, of \u003cem\u003enormally distributed\u003c/em\u003e random numbers, with standardized \u003cem\u003emean\u003c/em\u003e=0, and \u003cem\u003evariance\u003c/em\u003e=1.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Normal_distribution\u003c/a\u003e, \u003ca\u003ehttp://mathworld.wolfram.com/NormalDistribution.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Probability",
          "name": "generateStandardizedNormalDistribution",
          "package": "factory",
          "signature": "randomGen -\u003e [f]",
          "source": "src/Factory-Math-Probability.html#generateStandardizedNormalDistribution",
          "type": "function"
        },
        "index": {
          "description": "Uses the supplied random-number generator to generate conceptually infinite list of normally distributed random numbers with standardized mean and variance http en.wikipedia.org wiki Normal distribution http mathworld.wolfram.com NormalDistribution.html",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "generateStandardizedNormalDistribution",
          "normalized": "a-\u003e[b]",
          "package": "factory",
          "partial": "Standardized Normal Distribution",
          "signature": "randomGen-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:generateStandardizedNormalDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Probability",
          "name": "getMean",
          "package": "factory",
          "signature": "getMean",
          "source": "src/Factory-Math-Probability.html#getMean",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "getMean",
          "package": "factory",
          "partial": "Mean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:getMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Probability",
          "name": "getStandardDeviation",
          "package": "factory",
          "signature": "getStandardDeviation",
          "source": "src/Factory-Math-Probability.html#getStandardDeviation",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "getStandardDeviation",
          "package": "factory",
          "partial": "Standard Deviation",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:getStandardDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.Probability",
          "name": "getVariance",
          "package": "factory",
          "signature": "getVariance",
          "source": "src/Factory-Math-Probability.html#getVariance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "getVariance",
          "package": "factory",
          "partial": "Variance",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:getVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum integer which can be accurately represented as a Double.\n\u003c/p\u003e",
          "module": "Factory.Math.Probability",
          "name": "maxPreciseInteger",
          "package": "factory",
          "signature": "a -\u003e Integer",
          "source": "src/Factory-Math-Probability.html#maxPreciseInteger",
          "type": "function"
        },
        "index": {
          "description": "The maximum integer which can be accurately represented as Double",
          "hierarchy": "Factory Math Probability",
          "module": "Factory.Math.Probability",
          "name": "maxPreciseInteger",
          "normalized": "a-\u003eInteger",
          "package": "factory",
          "partial": "Precise Integer",
          "signature": "a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Probability.html#v:maxPreciseInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tFacilitates representation of \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e values in alternative \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e bases.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Radix",
          "name": "Radix",
          "package": "factory",
          "source": "src/Factory-Math-Radix.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Facilitates representation of Integral values in alternative Integral bases",
          "hierarchy": "Factory Math Radix",
          "module": "Factory.Math.Radix",
          "name": "Radix",
          "package": "factory",
          "partial": "Radix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Radix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://mathworld.wolfram.com/DigitSum.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Digit_sum\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Radix",
          "name": "digitSum",
          "package": "factory",
          "signature": "base -\u003e decimal -\u003e decimal",
          "source": "src/Factory-Math-Radix.html#digitSum",
          "type": "function"
        },
        "index": {
          "description": "http mathworld.wolfram.com DigitSum.html http en.wikipedia.org wiki Digit sum",
          "hierarchy": "Factory Math Radix",
          "module": "Factory.Math.Radix",
          "name": "digitSum",
          "normalized": "a-\u003eb-\u003eb",
          "package": "factory",
          "partial": "Sum",
          "signature": "base-\u003edecimal-\u003edecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Radix.html#v:digitSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Digital_root\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Radix",
          "name": "digitalRoot",
          "package": "factory",
          "signature": "decimal -\u003e decimal",
          "source": "src/Factory-Math-Radix.html#digitalRoot",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Digital root",
          "hierarchy": "Factory Math Radix",
          "module": "Factory.Math.Radix",
          "name": "digitalRoot",
          "normalized": "a-\u003ea",
          "package": "factory",
          "partial": "Root",
          "signature": "decimal-\u003edecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Radix.html#v:digitalRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Convert the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-representation of a number in the specified base, to a decimal integer.\n\u003c/li\u003e\u003cli\u003e Both negative numbers and negative bases are permissible.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Radix",
          "name": "fromBase",
          "package": "factory",
          "signature": "base -\u003e String -\u003e decimal",
          "source": "src/Factory-Math-Radix.html#fromBase",
          "type": "function"
        },
        "index": {
          "description": "Convert the String representation of number in the specified base to decimal integer Both negative numbers and negative bases are permissible",
          "hierarchy": "Factory Math Radix",
          "module": "Factory.Math.Radix",
          "name": "fromBase",
          "normalized": "a-\u003eString-\u003eb",
          "package": "factory",
          "partial": "Base",
          "signature": "base-\u003eString-\u003edecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Radix.html#v:fromBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Convert the specified integral decimal quantity, to an alternative base, and represent the result as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Both negative decimals and negative bases are permissible.\n\u003c/li\u003e\u003cli\u003e The conversion to \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e can only succeed where printable and intelligible characters exist to represent all digits in the chosen base;\n\twhich in practice means \u003ccode\u003e(-36 \u003c= base \u003c= 36)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Radix",
          "name": "toBase",
          "package": "factory",
          "signature": "base -\u003e decimal -\u003e String",
          "source": "src/Factory-Math-Radix.html#toBase",
          "type": "function"
        },
        "index": {
          "description": "Convert the specified integral decimal quantity to an alternative base and represent the result as String Both negative decimals and negative bases are permissible The conversion to Char can only succeed where printable and intelligible characters exist to represent all digits in the chosen base which in practice means base",
          "hierarchy": "Factory Math Radix",
          "module": "Factory.Math.Radix",
          "name": "toBase",
          "normalized": "a-\u003eb-\u003eString",
          "package": "factory",
          "partial": "Base",
          "signature": "base-\u003edecimal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Radix.html#v:toBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Exports a common interface for \u003cem\u003esquare-root\u003c/em\u003e implementations.\n\u003c/li\u003e\u003cli\u003e Provides utilities for these implementations.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "SquareRoot",
          "package": "factory",
          "source": "src/Factory-Math-SquareRoot.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Exports common interface for square-root implementations Provides utilities for these implementations",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "SquareRoot",
          "package": "factory",
          "partial": "Square Root",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the methods expected of a \u003cem\u003esquare-root\u003c/em\u003e algorithm.\n\u003c/p\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "Algorithmic",
          "package": "factory",
          "source": "src/Factory-Math-SquareRoot.html#Algorithmic",
          "type": "class"
        },
        "index": {
          "description": "Defines the methods expected of square-root algorithm",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "Algorithmic",
          "package": "factory",
          "partial": "Algorithmic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#t:Algorithmic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains an estimate for the \u003cem\u003esquare-root\u003c/em\u003e of a value, and its accuracy.\n\u003c/p\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "Estimate",
          "package": "factory",
          "source": "src/Factory-Math-SquareRoot.html#Estimate",
          "type": "type"
        },
        "index": {
          "description": "Contains an estimate for the square-root of value and its accuracy",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "Estimate",
          "package": "factory",
          "partial": "Estimate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#t:Estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface required to iterate, from an estimate of the required value, to the next approximation.\n\u003c/p\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "Iterator",
          "package": "factory",
          "source": "src/Factory-Math-SquareRoot.html#Iterator",
          "type": "class"
        },
        "index": {
          "description": "The interface required to iterate from an estimate of the required value to the next approximation",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "Iterator",
          "package": "factory",
          "partial": "Iterator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#t:Iterator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result-type; actually, only the concrete return-type of \u003ccode\u003e\u003ca\u003esimplify\u003c/a\u003e\u003c/code\u003e, stops it being a polymorphic instance of \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "Result",
          "package": "factory",
          "source": "src/Factory-Math-SquareRoot.html#Result",
          "type": "type"
        },
        "index": {
          "description": "The result-type actually only the concrete return-type of simplify stops it being polymorphic instance of Fractional",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "Result",
          "package": "factory",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.SquareRoot",
          "name": "convergenceOrder",
          "package": "factory",
          "signature": "convergenceOrder",
          "source": "src/Factory-Math-SquareRoot.html#convergenceOrder",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "convergenceOrder",
          "package": "factory",
          "partial": "Order",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:convergenceOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e For a given value and an estimate of its \u003cem\u003esquare-root\u003c/em\u003e,\n\treturns the number of decimals digits to which the \u003cem\u003esquare-root\u003c/em\u003e is accurate; including the integral digits.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the result returned for an exact match has been bodged.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "getAccuracy",
          "package": "factory",
          "signature": "operand -\u003e Result -\u003e DecimalDigits",
          "source": "src/Factory-Math-SquareRoot.html#getAccuracy",
          "type": "function"
        },
        "index": {
          "description": "For given value and an estimate of its square-root returns the number of decimals digits to which the square-root is accurate including the integral digits CAVEAT the result returned for an exact match has been bodged",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "getAccuracy",
          "normalized": "a-\u003eResult-\u003eDecimalDigits",
          "package": "factory",
          "partial": "Accuracy",
          "signature": "operand-\u003eResult-\u003eDecimalDigits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:getAccuracy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The signed difference between the \u003cem\u003esquare\u003c/em\u003e of an estimate for the \u003cem\u003esquare-root\u003c/em\u003e of a value, and that value.\n\u003c/li\u003e\u003cli\u003e Positive when the estimate is too low.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the magnitude is twice the error in the \u003cem\u003esquare-root\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "getDiscrepancy",
          "package": "factory",
          "signature": "operand -\u003e Result -\u003e Result",
          "source": "src/Factory-Math-SquareRoot.html#getDiscrepancy",
          "type": "function"
        },
        "index": {
          "description": "The signed difference between the square of an estimate for the square-root of value and that value Positive when the estimate is too low CAVEAT the magnitude is twice the error in the square-root",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "getDiscrepancy",
          "normalized": "a-\u003eResult-\u003eResult",
          "package": "factory",
          "partial": "Discrepancy",
          "signature": "operand-\u003eResult-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:getDiscrepancy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e-precision floating-point arithmetic, to obtain an initial estimate for the \u003cem\u003esquare-root\u003c/em\u003e, and its accuracy.\n\u003c/p\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "getEstimate",
          "package": "factory",
          "signature": "operand -\u003e Estimate",
          "source": "src/Factory-Math-SquareRoot.html#getEstimate",
          "type": "function"
        },
        "index": {
          "description": "Uses Double precision floating-point arithmetic to obtain an initial estimate for the square-root and its accuracy",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "getEstimate",
          "normalized": "a-\u003eEstimate",
          "package": "factory",
          "partial": "Estimate",
          "signature": "operand-\u003eEstimate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:getEstimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the specified estimate for the \u003cem\u003esquare-root\u003c/em\u003e, is precise.\n\u003c/p\u003e",
          "module": "Factory.Math.SquareRoot",
          "name": "isPrecise",
          "package": "factory",
          "signature": "operand -\u003e Result -\u003e Bool",
          "source": "src/Factory-Math-SquareRoot.html#isPrecise",
          "type": "function"
        },
        "index": {
          "description": "True if the specified estimate for the square-root is precise",
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "isPrecise",
          "normalized": "a-\u003eResult-\u003eBool",
          "package": "factory",
          "partial": "Precise",
          "signature": "operand-\u003eResult-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:isPrecise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.SquareRoot",
          "name": "squareRoot",
          "package": "factory",
          "signature": "squareRoot",
          "source": "src/Factory-Math-SquareRoot.html#squareRoot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "squareRoot",
          "package": "factory",
          "partial": "Root",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:squareRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.SquareRoot",
          "name": "squareRootFrom",
          "package": "factory",
          "signature": "squareRootFrom",
          "source": "src/Factory-Math-SquareRoot.html#squareRootFrom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "squareRootFrom",
          "package": "factory",
          "partial": "Root From",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:squareRootFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factory.Math.SquareRoot",
          "name": "step",
          "package": "factory",
          "signature": "step",
          "source": "src/Factory-Math-SquareRoot.html#step",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factory Math SquareRoot",
          "module": "Factory.Math.SquareRoot",
          "name": "step",
          "package": "factory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-SquareRoot.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tMiscellaneous statistics functions.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Statistics",
          "name": "Statistics",
          "package": "factory",
          "source": "src/Factory-Math-Statistics.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Miscellaneous statistics functions",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "Statistics",
          "package": "factory",
          "partial": "Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Determines the \u003cem\u003eaverage absolute deviation\u003c/em\u003e of the specified numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Absolute_deviation#Average_absolute_deviation\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Should the caller define the result-type as \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, then it will be free from rounding-errors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Statistics",
          "name": "getAverageAbsoluteDeviation",
          "package": "factory",
          "signature": "f r -\u003e result",
          "source": "src/Factory-Math-Statistics.html#getAverageAbsoluteDeviation",
          "type": "function"
        },
        "index": {
          "description": "Determines the average absolute deviation of the specified numbers http en.wikipedia.org wiki Absolute deviation Average absolute deviation Should the caller define the result-type as Rational then it will be free from rounding-errors",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "getAverageAbsoluteDeviation",
          "normalized": "a b-\u003ec",
          "package": "factory",
          "partial": "Average Absolute Deviation",
          "signature": "f r-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:getAverageAbsoluteDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the \u003cem\u003ecoefficient-of-variance\u003c/em\u003e of the specified numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Coefficient_of_variation\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Statistics",
          "name": "getCoefficientOfVariance",
          "package": "factory",
          "signature": "f r -\u003e result",
          "source": "src/Factory-Math-Statistics.html#getCoefficientOfVariance",
          "type": "function"
        },
        "index": {
          "description": "Determines the coefficient-of-variance of the specified numbers http en.wikipedia.org wiki Coefficient of variation",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "getCoefficientOfVariance",
          "normalized": "a b-\u003ec",
          "package": "factory",
          "partial": "Coefficient Of Variance",
          "signature": "f r-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:getCoefficientOfVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Determines the \u003cem\u003emean\u003c/em\u003e of the specified numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Mean\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Should the caller define the result-type as \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, then it will be free from rounding-errors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Statistics",
          "name": "getMean",
          "package": "factory",
          "signature": "f r -\u003e result",
          "source": "src/Factory-Math-Statistics.html#getMean",
          "type": "function"
        },
        "index": {
          "description": "Determines the mean of the specified numbers http en.wikipedia.org wiki Mean Should the caller define the result-type as Rational then it will be free from rounding-errors",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "getMean",
          "normalized": "a b-\u003ec",
          "package": "factory",
          "partial": "Mean",
          "signature": "f r-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:getMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the \u003cem\u003estandard-deviation\u003c/em\u003e of the specified numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Standard_deviation\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Statistics",
          "name": "getStandardDeviation",
          "package": "factory",
          "signature": "f r -\u003e result",
          "source": "src/Factory-Math-Statistics.html#getStandardDeviation",
          "type": "function"
        },
        "index": {
          "description": "Determines the standard-deviation of the specified numbers http en.wikipedia.org wiki Standard deviation",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "getStandardDeviation",
          "normalized": "a b-\u003ec",
          "package": "factory",
          "partial": "Standard Deviation",
          "signature": "f r-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:getStandardDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Determines the exact \u003cem\u003evariance\u003c/em\u003e of the specified numbers; \u003ca\u003ehttp://en.wikipedia.org/wiki/Variance\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Should the caller define the result-type as \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, then it will be free from rounding-errors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Statistics",
          "name": "getVariance",
          "package": "factory",
          "signature": "f r -\u003e variance",
          "source": "src/Factory-Math-Statistics.html#getVariance",
          "type": "function"
        },
        "index": {
          "description": "Determines the exact variance of the specified numbers http en.wikipedia.org wiki Variance Should the caller define the result-type as Rational then it will be free from rounding-errors",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "getVariance",
          "normalized": "a b-\u003ec",
          "package": "factory",
          "partial": "Variance",
          "signature": "f r-\u003evariance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:getVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of unordered \u003cem\u003ecombinations\u003c/em\u003e of \u003cem\u003er\u003c/em\u003e objects taken from \u003cem\u003en\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Combination\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Statistics",
          "name": "nCr",
          "package": "factory",
          "signature": "factorialAlgorithm-\u003e i-\u003e i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The number of unordered combinations of objects taken from http en.wikipedia.org wiki Combination",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "nCr",
          "normalized": "a-\u003eb-\u003eb-\u003eb",
          "package": "factory",
          "partial": "Cr",
          "signature": "factorialAlgorithm-\u003ei-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:nCr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003epermutations\u003c/em\u003e of \u003cem\u003er\u003c/em\u003e objects taken from \u003cem\u003en\u003c/em\u003e; \u003ca\u003ehttp://en.wikipedia.org/wiki/Permutations\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Factory.Math.Statistics",
          "name": "nPr",
          "package": "factory",
          "signature": "i-\u003e i-\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The number of permutations of objects taken from http en.wikipedia.org wiki Permutations",
          "hierarchy": "Factory Math Statistics",
          "module": "Factory.Math.Statistics",
          "name": "nPr",
          "normalized": "a-\u003ea-\u003ea",
          "package": "factory",
          "partial": "Pr",
          "signature": "i-\u003ei-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Statistics.html#v:nPr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tProvides an alternative algorithm for the summation of \u003cem\u003erational\u003c/em\u003e numbers.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Factory.Math.Summation",
          "name": "Summation",
          "package": "factory",
          "source": "src/Factory-Math-Summation.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Provides an alternative algorithm for the summation of rational numbers",
          "hierarchy": "Factory Math Summation",
          "module": "Factory.Math.Summation",
          "name": "Summation",
          "package": "factory",
          "partial": "Summation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Summation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Sums a list of numbers of arbitrary type.\n\u003c/li\u003e\u003cli\u003e Sparks the summation of \u003ccode\u003e(list-length / chunk-size)\u003c/code\u003e chunks from the list, each of the specified size (thought the last chunk may be smaller),\n\tthen recursively sums the list of results from each spark.\n\u003c/li\u003e\u003cli\u003e CAVEAT: unless the numbers are large, \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e (requiring \u003cem\u003ecross-multiplication\u003c/em\u003e), or the list long,\n\t\u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e is too light-weight for sparking to be productive,\n\ttherefore it is more likely to be the parallelised deep \u003cem\u003eevaluation\u003c/em\u003e of list-elements which saves time.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Summation",
          "name": "sum'",
          "package": "factory",
          "signature": "ChunkLength -\u003e [n] -\u003e n",
          "source": "src/Factory-Math-Summation.html#sum%27",
          "type": "function"
        },
        "index": {
          "description": "Sums list of numbers of arbitrary type Sparks the summation of list-length chunk-size chunks from the list each of the specified size thought the last chunk may be smaller then recursively sums the list of results from each spark CAVEAT unless the numbers are large Rational requiring cross-multiplication or the list long sum is too light-weight for sparking to be productive therefore it is more likely to be the parallelised deep evaluation of list-elements which saves time",
          "hierarchy": "Factory Math Summation",
          "module": "Factory.Math.Summation",
          "name": "sum'",
          "normalized": "ChunkLength-\u003e[a]-\u003ea",
          "package": "factory",
          "signature": "ChunkLength-\u003e[n]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Summation.html#v:sum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Sums a list of \u003cem\u003erational\u003c/em\u003e numbers.\n\u003c/li\u003e\u003cli\u003e Sparks the summation of \u003ccode\u003e(list-length / chunk-length)\u003c/code\u003e chunks from the list, each of the specified size (thought the last chunk may be smaller),\n\tthen recursively sums the list of results from each spark.\n\u003c/li\u003e\u003cli\u003e CAVEAT: memory-use is proportional to chunk-size.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Summation",
          "name": "sumR",
          "package": "factory",
          "signature": "ChunkLength -\u003e [Ratio i] -\u003e Ratio i",
          "source": "src/Factory-Math-Summation.html#sumR",
          "type": "function"
        },
        "index": {
          "description": "Sums list of rational numbers Sparks the summation of list-length chunk-length chunks from the list each of the specified size thought the last chunk may be smaller then recursively sums the list of results from each spark CAVEAT memory-use is proportional to chunk-size",
          "hierarchy": "Factory Math Summation",
          "module": "Factory.Math.Summation",
          "name": "sumR",
          "normalized": "ChunkLength-\u003e[Ratio a]-\u003eRatio a",
          "package": "factory",
          "signature": "ChunkLength-\u003e[Ratio i]-\u003eRatio i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Summation.html#v:sumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Sums a list of \u003cem\u003erational\u003c/em\u003e type numbers.\n\u003c/li\u003e\u003cli\u003e CAVEAT: though faster than \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e, this algorithm has poor space-complexity, making it unsuitable for unrestricted use.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Factory.Math.Summation",
          "name": "sumR'",
          "package": "factory",
          "signature": "[Ratio i] -\u003e Ratio i",
          "source": "src/Factory-Math-Summation.html#sumR%27",
          "type": "function"
        },
        "index": {
          "description": "Sums list of rational type numbers CAVEAT though faster than sum this algorithm has poor space-complexity making it unsuitable for unrestricted use",
          "hierarchy": "Factory Math Summation",
          "module": "Factory.Math.Summation",
          "name": "sumR'",
          "normalized": "[Ratio a]-\u003eRatio a",
          "package": "factory",
          "partial": "R'",
          "signature": "[Ratio i]-\u003eRatio i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factory/docs/Factory-Math-Summation.html#v:sumR-39-"
      }
    }
  ]
]