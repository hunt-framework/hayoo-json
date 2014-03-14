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
        "word": "Ordinals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding of ordinals up to epsilon_0 as an iterated multiset:\ndefinition in Basic Proof Theory by Troelstra and Schwichenberg.\nNote, this is not the most efficient way to calculate ordinals.\nThis library is better than having none.\nI think CNF representation would be more efficent,\nplanning to add in the next version of this library.\n\u003c/p\u003e\u003cp\u003eFor further analysis on efficiency of implementations on ordinals see\n\u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.91.8089\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFYI, an ordinal calculator that covers wider range beyond epsion_0\ncan be found at \u003ca\u003ehttp://www.mtnmath.com/ord/\u003c/a\u003e which is written C++.\nHowever, I found a serious error in this calculator (ver 0.2):\nthe property a^b * a^c == a^(b+c) does not hold.  For example,\n\u003c/p\u003e\u003cpre\u003e\n  ordCalc\u003e 3 ^(w^w + w + 1) * 3^(w^w) == 3 ^ (w^w + w + 1 + w^w)\n  FALSE\n\u003c/pre\u003e\u003cp\u003eThis calculator didn't seem to run QuickCeck style automatic\ntesting, although it does have hundreds (or maybe more than a thousand)\ntests cases but some of them even causes segmentation faults\ndepending on the machine I built this ordCalc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Ordinals.MultiSet",
          "name": "MultiSet",
          "package": "Ordinals",
          "source": "src/Math-Ordinals-MultiSet.html",
          "type": "module"
        },
        "index": {
          "description": "Encoding of ordinals up to epsilon as an iterated multiset definition in Basic Proof Theory by Troelstra and Schwichenberg Note this is not the most efficient way to calculate ordinals This library is better than having none think CNF representation would be more efficent planning to add in the next version of this library For further analysis on efficiency of implementations on ordinals see http citeseerx.ist.psu.edu viewdoc summary doi FYI an ordinal calculator that covers wider range beyond epsion can be found at http www.mtnmath.com ord which is written However found serious error in this calculator ver the property does not hold For example ordCalc FALSE This calculator didn seem to run QuickCeck style automatic testing although it does have hundreds or maybe more than thousand tests cases but some of them even causes segmentation faults depending on the machine built this ordCalc",
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "MultiSet",
          "package": "Ordinals",
          "partial": "Multi Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Ordinals.MultiSet",
          "name": "Ordinal",
          "package": "Ordinals",
          "source": "src/Math-Ordinals-MultiSet.html#Ordinal",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "Ordinal",
          "package": "Ordinals",
          "partial": "Ordinal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#t:Ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Ordinals.MultiSet",
          "name": "(++.)",
          "package": "Ordinals",
          "signature": "[Ordinal] -\u003e Ordinal -\u003e Ordinal",
          "source": "src/Math-Ordinals-MultiSet.html#%2B%2B.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "(++.) ++.",
          "normalized": "[Ordinal]-\u003eOrdinal-\u003eOrdinal",
          "package": "Ordinals",
          "signature": "[Ordinal]-\u003eOrdinal-\u003eOrdinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:-43--43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponentiation.\n Defined a new operator since neither \u003ccode\u003e\u003ca\u003e^\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003e^^\u003c/a\u003e\u003c/code\u003e will work.\n Note, \u003ccode\u003e(w o)\u003c/code\u003e is same as \u003ccode\u003e(w 1 :^ o)\u003c/code\u003e for any oridnal \u003ccode\u003eo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Ordinals.MultiSet",
          "name": "(^:)",
          "package": "Ordinals",
          "signature": "Ordinal -\u003e Ordinal -\u003e Ordinal",
          "source": "src/Math-Ordinals-MultiSet.html#%5E%3A",
          "type": "function"
        },
        "index": {
          "description": "Exponentiation Defined new operator since neither nor will work Note is same as for any oridnal",
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "(^:) ^:",
          "normalized": "Ordinal-\u003eOrdinal-\u003eOrdinal",
          "package": "Ordinals",
          "signature": "Ordinal-\u003eOrdinal-\u003eOrdinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:-94-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Ordinals.MultiSet",
          "name": "(.++.)",
          "package": "Ordinals",
          "signature": "Ordinal -\u003e Ordinal -\u003e Ordinal",
          "source": "src/Math-Ordinals-MultiSet.html#.%2B%2B.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "(.++.) .++.",
          "normalized": "Ordinal-\u003eOrdinal-\u003eOrdinal",
          "package": "Ordinals",
          "signature": "Ordinal-\u003eOrdinal-\u003eOrdinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:.-43--43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Ordinals.MultiSet",
          "name": "(.:)",
          "package": "Ordinals",
          "signature": "Ordinal -\u003e Ordinal -\u003e Ordinal",
          "source": "src/Math-Ordinals-MultiSet.html#.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "(.:) .:",
          "normalized": "Ordinal-\u003eOrdinal-\u003eOrdinal",
          "package": "Ordinals",
          "signature": "Ordinal-\u003eOrdinal-\u003eOrdinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Ordinals.MultiSet",
          "name": "O",
          "package": "Ordinals",
          "signature": "O [Ordinal]",
          "source": "src/Math-Ordinals-MultiSet.html#Ordinal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "O",
          "normalized": "O[Ordinal]",
          "package": "Ordinals",
          "signature": "O[Ordinal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenience function that takes an argument as the power of omega\n (the first limit ordinal).\n\u003c/p\u003e",
          "module": "Math.Ordinals.MultiSet",
          "name": "w",
          "package": "Ordinals",
          "signature": "Ordinal -\u003e Ordinal",
          "source": "src/Math-Ordinals-MultiSet.html#w",
          "type": "function"
        },
        "index": {
          "description": "convenience function that takes an argument as the power of omega the first limit ordinal",
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "w",
          "normalized": "Ordinal-\u003eOrdinal",
          "package": "Ordinals",
          "signature": "Ordinal-\u003eOrdinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewell formedness of ordinals\n\u003c/p\u003e",
          "module": "Math.Ordinals.MultiSet",
          "name": "wf",
          "package": "Ordinals",
          "signature": "Ordinal -\u003e Bool",
          "source": "src/Math-Ordinals-MultiSet.html#wf",
          "type": "function"
        },
        "index": {
          "description": "well formedness of ordinals",
          "hierarchy": "Math Ordinals MultiSet",
          "module": "Math.Ordinals.MultiSet",
          "name": "wf",
          "normalized": "Ordinal-\u003eBool",
          "package": "Ordinals",
          "signature": "Ordinal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ordinals/docs/Math-Ordinals-MultiSet.html#v:wf"
      }
    }
  ]
]