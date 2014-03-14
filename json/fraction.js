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
        "word": "fraction"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is about fractions.\n\u003c/p\u003e\u003cp\u003eA fraction can be seen as a real number from the closed interval [0,1]. It can also be seen as a\n    percentage. A typical example of a fraction is the extend of a progress bar.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Fraction",
          "name": "Fraction",
          "package": "fraction",
          "source": "src/Data-Fraction.html",
          "type": "module"
        },
        "index": {
          "description": "This module is about fractions fraction can be seen as real number from the closed interval It can also be seen as percentage typical example of fraction is the extend of progress bar",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "Fraction",
          "package": "fraction",
          "partial": "Fraction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fraction.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "Fraction",
          "package": "fraction",
          "source": "src/Data-Fraction.html#Fraction",
          "type": "data"
        },
        "index": {
          "description": "fraction",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "Fraction",
          "package": "fraction",
          "partial": "Fraction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#t:Fraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a factor into its corresponding fraction.\n\u003c/p\u003e\u003cp\u003eIf the factor is not from the interval [0,1], a runtime error occurs.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "fromFactor",
          "package": "fraction",
          "signature": "real -\u003e Fraction",
          "source": "src/Data-Fraction.html#fromFactor",
          "type": "function"
        },
        "index": {
          "description": "Converts factor into its corresponding fraction If the factor is not from the interval runtime error occurs",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "fromFactor",
          "normalized": "a-\u003eFraction",
          "package": "fraction",
          "partial": "Factor",
          "signature": "real-\u003eFraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#v:fromFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a number into its corresponding fraction regarding a certain interval.\n\u003c/p\u003e\u003cp\u003eIf the lower bound of the interval is equal to or greater than the upper bound or the value\n        is not from the interval, a runtime error occurs.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "fromNumber",
          "package": "fraction",
          "signature": "(real, real) -\u003e real -\u003e Fraction",
          "source": "src/Data-Fraction.html#fromNumber",
          "type": "function"
        },
        "index": {
          "description": "Converts number into its corresponding fraction regarding certain interval If the lower bound of the interval is equal to or greater than the upper bound or the value is not from the interval runtime error occurs",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "fromNumber",
          "normalized": "(a,a)-\u003ea-\u003eFraction",
          "package": "fraction",
          "partial": "Number",
          "signature": "(real,real)-\u003ereal-\u003eFraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#v:fromNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a percentage into its corresponding fraction.\n\u003c/p\u003e\u003cp\u003eIf the percentage is not from the interval [0,100], a runtime error occurs.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "fromPercentage",
          "package": "fraction",
          "signature": "real -\u003e Fraction",
          "source": "src/Data-Fraction.html#fromPercentage",
          "type": "function"
        },
        "index": {
          "description": "Converts percentage into its corresponding fraction If the percentage is not from the interval runtime error occurs",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "fromPercentage",
          "normalized": "a-\u003eFraction",
          "package": "fraction",
          "partial": "Percentage",
          "signature": "real-\u003eFraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#v:fromPercentage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a fraction into its corresponding factor.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "toFactor",
          "package": "fraction",
          "signature": "Fraction -\u003e Double",
          "source": "src/Data-Fraction.html#toFactor",
          "type": "function"
        },
        "index": {
          "description": "Converts fraction into its corresponding factor",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "toFactor",
          "normalized": "Fraction-\u003eDouble",
          "package": "fraction",
          "partial": "Factor",
          "signature": "Fraction-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#v:toFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a fraction into its corresponding number regarding a certain interval.\n\u003c/p\u003e\u003cp\u003eIf the lower bound of the interval is equal to or greater than the upper bound, a runtime\n        error occurs.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "toNumber",
          "package": "fraction",
          "signature": "(Double, Double) -\u003e Fraction -\u003e Double",
          "source": "src/Data-Fraction.html#toNumber",
          "type": "function"
        },
        "index": {
          "description": "Converts fraction into its corresponding number regarding certain interval If the lower bound of the interval is equal to or greater than the upper bound runtime error occurs",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "toNumber",
          "normalized": "(Double,Double)-\u003eFraction-\u003eDouble",
          "package": "fraction",
          "partial": "Number",
          "signature": "(Double,Double)-\u003eFraction-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#v:toNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a fraction into its corresponding percentage.\n\u003c/p\u003e",
          "module": "Data.Fraction",
          "name": "toPercentage",
          "package": "fraction",
          "signature": "Fraction -\u003e Double",
          "source": "src/Data-Fraction.html#toPercentage",
          "type": "function"
        },
        "index": {
          "description": "Converts fraction into its corresponding percentage",
          "hierarchy": "Data Fraction",
          "module": "Data.Fraction",
          "name": "toPercentage",
          "normalized": "Fraction-\u003eDouble",
          "package": "fraction",
          "partial": "Percentage",
          "signature": "Fraction-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fraction/docs/Data-Fraction.html#v:toPercentage"
      }
    }
  ]
]