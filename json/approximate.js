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
        "word": "approximate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Mass",
          "name": "Mass",
          "package": "approximate",
          "source": "src/Data-Approximate-Mass.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Approximate Mass",
          "module": "Data.Approximate.Mass",
          "name": "Mass",
          "package": "approximate",
          "partial": "Mass",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quantity with a lower-bound on its probability mass. This represents\n a 'probable value' as a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that you can use to calculate progressively\n less likely consequences.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e These probabilities are all stored in the log domain. This enables us\n to retain accuracy despite very long multiplication chains. We never add\n these probabilities so the additional overhead of working in the log domain\n is never incurred, except on transitioning in and out.\n\u003c/p\u003e\u003cp\u003eThis is most useful for discrete types, such as\n small \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e instances or a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e like\n \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso note that \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e&?\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e|?\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e are able to use knowledge about the\n function to get better precision on their results than naively using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Approximate.Mass",
          "name": "Mass",
          "package": "approximate",
          "source": "src/Data-Approximate-Mass.html#Mass",
          "type": "data"
        },
        "index": {
          "description": "quantity with lower-bound on its probability mass This represents probable value as Monad that you can use to calculate progressively less likely consequences NB These probabilities are all stored in the log domain This enables us to retain accuracy despite very long multiplication chains We never add these probabilities so the additional overhead of working in the log domain is never incurred except on transitioning in and out This is most useful for discrete types such as small Integral instances or Bounded Enum like Bool Also note that and are able to use knowledge about the function to get better precision on their results than naively using liftA2",
          "hierarchy": "Data Approximate Mass",
          "module": "Data.Approximate.Mass",
          "name": "Mass",
          "package": "approximate",
          "partial": "Mass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#t:Mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the logical \u003ccode\u003eor\u003c/code\u003e of two booleans with confidence lower bounds.\n\u003c/p\u003e",
          "module": "Data.Approximate.Mass",
          "name": "(|?)",
          "package": "approximate",
          "signature": "Mass Bool -\u003e Mass Bool -\u003e Mass Bool",
          "source": "src/Data-Approximate-Mass.html#%7C%3F",
          "type": "function"
        },
        "index": {
          "description": "Calculate the logical or of two booleans with confidence lower bounds",
          "hierarchy": "Data Approximate Mass",
          "module": "Data.Approximate.Mass",
          "name": "(|?) |?",
          "normalized": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
          "package": "approximate",
          "signature": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:-124--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the logical \u003ccode\u003eand\u003c/code\u003e of two booleans with confidence lower bounds.\n\u003c/p\u003e",
          "module": "Data.Approximate.Mass",
          "name": "(&?)",
          "package": "approximate",
          "signature": "Mass Bool -\u003e Mass Bool -\u003e Mass Bool",
          "source": "src/Data-Approximate-Mass.html#%26%3F",
          "type": "function"
        },
        "index": {
          "description": "Calculate the logical and of two booleans with confidence lower bounds",
          "hierarchy": "Data Approximate Mass",
          "module": "Data.Approximate.Mass",
          "name": "(&?) &?",
          "normalized": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
          "package": "approximate",
          "signature": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:-38--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the exclusive \u003ccode\u003eor\u003c/code\u003e of two booleans with confidence lower bounds.\n\u003c/p\u003e",
          "module": "Data.Approximate.Mass",
          "name": "(^?)",
          "package": "approximate",
          "signature": "Mass Bool -\u003e Mass Bool -\u003e Mass Bool",
          "source": "src/Data-Approximate-Mass.html#%5E%3F",
          "type": "function"
        },
        "index": {
          "description": "Calculate the exclusive or of two booleans with confidence lower bounds",
          "hierarchy": "Data Approximate Mass",
          "module": "Data.Approximate.Mass",
          "name": "(^?) ^?",
          "normalized": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
          "package": "approximate",
          "signature": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:-94--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Mass",
          "name": "Mass",
          "package": "approximate",
          "signature": "Mass !(Log Double) a",
          "source": "src/Data-Approximate-Mass.html#Mass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Mass",
          "module": "Data.Approximate.Mass",
          "name": "Mass",
          "package": "approximate",
          "partial": "Mass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:Mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese functions provide wildly inaccurate but very fast\n approximations to common transcendental functions.\n\u003c/p\u003e\u003cp\u003eThe algorithms here are based on Martin Ankerl's optimized \u003ccode\u003epow\u003c/code\u003e,\n \u003ca\u003ehttp://martin.ankerl.com/2007/10/04/optimized-pow-approximation-for-java-and-c-c/\u003c/a\u003e\n which is in turn based on\n \u003ca\u003ehttp://nic.schraudolph.org/pubs/Schraudolph99.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Approximate.Numerics",
          "name": "Numerics",
          "package": "approximate",
          "source": "src/Data-Approximate-Numerics.html",
          "type": "module"
        },
        "index": {
          "description": "These functions provide wildly inaccurate but very fast approximations to common transcendental functions The algorithms here are based on Martin Ankerl optimized pow http martin.ankerl.com optimized-pow-approximation-for-java-and-c-c which is in turn based on http nic.schraudolph.org pubs Schraudolph99.pdf",
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "Numerics",
          "package": "approximate",
          "partial": "Numerics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "Fast",
          "package": "approximate",
          "source": "src/Data-Approximate-Numerics.html#Fast",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "Fast",
          "package": "approximate",
          "partial": "Fast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#t:Fast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBorchardt&#8217;s Algorithm from &#8220;Dead Reckoning: Calculating without instruments&#8221;.\n\u003c/p\u003e\u003cp\u003eThis is a remarkably bad approximate logarithm.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eflog\u003c/a\u003e\u003c/code\u003e had better outperform it! It is provided merely for comparison.\n\u003c/p\u003e",
          "module": "Data.Approximate.Numerics",
          "name": "blog",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#blog",
          "type": "function"
        },
        "index": {
          "description": "Borchardt Algorithm from Dead Reckoning Calculating without instruments This is remarkably bad approximate logarithm flog had better outperform it It is provided merely for comparison",
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "blog",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:blog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate an approximate exp.\n\u003c/p\u003e",
          "module": "Data.Approximate.Numerics",
          "name": "fexp",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#fexp",
          "type": "method"
        },
        "index": {
          "description": "Calculate an approximate exp",
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "fexp",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "fexp_lb",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#fexp_lb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "fexp_lb",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fexp_lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "fexp_ub",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#fexp_ub",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "fexp_ub",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fexp_ub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate an approximate log.\n\u003c/p\u003e",
          "module": "Data.Approximate.Numerics",
          "name": "flog",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#flog",
          "type": "method"
        },
        "index": {
          "description": "Calculate an approximate log",
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "flog",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:flog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "flog_lb",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#flog_lb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "flog_lb",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:flog_lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "flog_ub",
          "package": "approximate",
          "signature": "a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#flog_ub",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "flog_ub",
          "normalized": "a-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:flog_ub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate an approximate pow.\n\u003c/p\u003e",
          "module": "Data.Approximate.Numerics",
          "name": "fpow",
          "package": "approximate",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#fpow",
          "type": "method"
        },
        "index": {
          "description": "Calculate an approximate pow",
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "fpow",
          "normalized": "a-\u003ea-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fpow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "fpow_lb",
          "package": "approximate",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#fpow_lb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "fpow_lb",
          "normalized": "a-\u003ea-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fpow_lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Numerics",
          "name": "fpow_ub",
          "package": "approximate",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Approximate-Numerics.html#fpow_ub",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Numerics",
          "module": "Data.Approximate.Numerics",
          "name": "fpow_ub",
          "normalized": "a-\u003ea-\u003ea",
          "package": "approximate",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fpow_ub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "Type",
          "package": "approximate",
          "source": "src/Data-Approximate-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "Type",
          "package": "approximate",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn approximate number, with a likely interval, an expected value and a lower bound on the \u003ccode\u003elog\u003c/code\u003e of probability that the answer falls in the interval.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e The probabilities associated with confidence are stored in the \u003ccode\u003elog\u003c/code\u003e domain.\n\u003c/p\u003e",
          "module": "Data.Approximate.Type",
          "name": "Approximate",
          "package": "approximate",
          "source": "src/Data-Approximate-Type.html#Approximate",
          "type": "data"
        },
        "index": {
          "description": "An approximate number with likely interval an expected value and lower bound on the log of probability that the answer falls in the interval NB The probabilities associated with confidence are stored in the log domain",
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "Approximate",
          "package": "approximate",
          "partial": "Approximate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#t:Approximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "HasApproximate",
          "package": "approximate",
          "source": "src/Data-Approximate-Type.html#HasApproximate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "HasApproximate",
          "package": "approximate",
          "partial": "Has Approximate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#t:HasApproximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "Approximate",
          "package": "approximate",
          "signature": "Approximate !(Log Double) a a a",
          "source": "src/Data-Approximate-Type.html#Approximate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "Approximate",
          "package": "approximate",
          "partial": "Approximate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:Approximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "approximate",
          "package": "approximate",
          "signature": "Lens' t (Approximate a)",
          "source": "src/Data-Approximate-Type.html#approximate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "approximate",
          "package": "approximate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:approximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "confidence",
          "package": "approximate",
          "signature": "Lens' t (Log Double)",
          "source": "src/Data-Approximate-Type.html#confidence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "confidence",
          "package": "approximate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:confidence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "estimate",
          "package": "approximate",
          "signature": "Lens' t a",
          "source": "src/Data-Approximate-Type.html#estimate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "estimate",
          "package": "approximate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "exact",
          "package": "approximate",
          "signature": "Prism' (Approximate a) a",
          "source": "src/Data-Approximate-Type.html#exact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "exact",
          "package": "approximate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "hi",
          "package": "approximate",
          "signature": "Lens' t a",
          "source": "src/Data-Approximate-Type.html#hi",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "hi",
          "package": "approximate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:hi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "lo",
          "package": "approximate",
          "signature": "Lens' t a",
          "source": "src/Data-Approximate-Type.html#lo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "lo",
          "package": "approximate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:lo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "one",
          "package": "approximate",
          "signature": "Prism' (Approximate a) ()",
          "source": "src/Data-Approximate-Type.html#one",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "one",
          "normalized": "Prism'(Approximate a)()",
          "package": "approximate",
          "signature": "Prism'(Approximate a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "withMax",
          "package": "approximate",
          "signature": "a -\u003e Approximate a -\u003e Approximate a",
          "source": "src/Data-Approximate-Type.html#withMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "withMax",
          "normalized": "a-\u003eApproximate a-\u003eApproximate a",
          "package": "approximate",
          "partial": "Max",
          "signature": "a-\u003eApproximate a-\u003eApproximate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:withMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "withMin",
          "package": "approximate",
          "signature": "a -\u003e Approximate a -\u003e Approximate a",
          "source": "src/Data-Approximate-Type.html#withMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "withMin",
          "normalized": "a-\u003eApproximate a-\u003eApproximate a",
          "package": "approximate",
          "partial": "Min",
          "signature": "a-\u003eApproximate a-\u003eApproximate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:withMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate.Type",
          "name": "zero",
          "package": "approximate",
          "signature": "Prism' (Approximate a) ()",
          "source": "src/Data-Approximate-Type.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Approximate Type",
          "module": "Data.Approximate.Type",
          "name": "zero",
          "normalized": "Prism'(Approximate a)()",
          "package": "approximate",
          "signature": "Prism'(Approximate a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Approximate",
          "name": "Approximate",
          "package": "approximate",
          "source": "src/Data-Approximate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Approximate",
          "module": "Data.Approximate",
          "name": "Approximate",
          "package": "approximate",
          "partial": "Approximate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate.html#"
      }
    }
  ]
]