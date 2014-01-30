[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#",
      "description": {
        "fct-module": "Data.Approximate.Mass",
        "fct-package": "approximate",
        "fct-signature": "module",
        "fct-source": "src/Data-Approximate-Mass.html",
        "fct-type": "module",
        "title": "Mass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Mass",
        "module": "Data.Approximate.Mass",
        "name": "Mass",
        "normalized": "",
        "package": "approximate",
        "partial": "Mass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#t:Mass",
      "description": {
        "fct-descr": "\u003cp\u003eA quantity with a lower-bound on its probability mass. This represents\n a 'probable value' as a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that you can use to calculate progressively\n less likely consequences.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e These probabilities are all stored in the log domain. This enables us\n to retain accuracy despite very long multiplication chains. We never add\n these probabilities so the additional overhead of working in the log domain\n is never incurred, except on transitioning in and out.\n\u003c/p\u003e\u003cp\u003eThis is most useful for discrete types, such as\n small \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e instances or a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e like\n \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso note that \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e&?\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e|?\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e are able to use knowledge about the\n function to get better precision on their results than naively using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Mass",
        "fct-package": "approximate",
        "fct-signature": "data",
        "fct-source": "src/Data-Approximate-Mass.html#Mass",
        "fct-type": "data",
        "title": "Mass"
      },
      "index": {
        "description": "quantity with lower-bound on its probability mass This represents probable value as Monad that you can use to calculate progressively less likely consequences NB These probabilities are all stored in the log domain This enables us to retain accuracy despite very long multiplication chains We never add these probabilities so the additional overhead of working in the log domain is never incurred except on transitioning in and out This is most useful for discrete types such as small Integral instances or Bounded Enum like Bool Also note that and are able to use knowledge about the function to get better precision on their results than naively using liftA2",
        "hierarchy": "Data Approximate Mass",
        "module": "Data.Approximate.Mass",
        "name": "Mass",
        "normalized": "",
        "package": "approximate",
        "partial": "Mass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:-124--63-",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the logical \u003ccode\u003eor\u003c/code\u003e of two booleans with confidence lower bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Mass",
        "fct-package": "approximate",
        "fct-signature": "Mass Bool -\u003e Mass Bool -\u003e Mass Bool",
        "fct-source": "src/Data-Approximate-Mass.html#%7C%3F",
        "fct-type": "function",
        "title": "(|?)"
      },
      "index": {
        "description": "Calculate the logical or of two booleans with confidence lower bounds",
        "hierarchy": "Data Approximate Mass",
        "module": "Data.Approximate.Mass",
        "name": "(|?) |?",
        "normalized": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
        "package": "approximate",
        "partial": "",
        "signature": "Mass Bool-\u003eMass Bool-\u003eMass Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:-38--63-",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the logical \u003ccode\u003eand\u003c/code\u003e of two booleans with confidence lower bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Mass",
        "fct-package": "approximate",
        "fct-signature": "Mass Bool -\u003e Mass Bool -\u003e Mass Bool",
        "fct-source": "src/Data-Approximate-Mass.html#%26%3F",
        "fct-type": "function",
        "title": "(&?)"
      },
      "index": {
        "description": "Calculate the logical and of two booleans with confidence lower bounds",
        "hierarchy": "Data Approximate Mass",
        "module": "Data.Approximate.Mass",
        "name": "(&?) &?",
        "normalized": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
        "package": "approximate",
        "partial": "",
        "signature": "Mass Bool-\u003eMass Bool-\u003eMass Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:-94--63-",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the exclusive \u003ccode\u003eor\u003c/code\u003e of two booleans with confidence lower bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Mass",
        "fct-package": "approximate",
        "fct-signature": "Mass Bool -\u003e Mass Bool -\u003e Mass Bool",
        "fct-source": "src/Data-Approximate-Mass.html#%5E%3F",
        "fct-type": "function",
        "title": "(^?)"
      },
      "index": {
        "description": "Calculate the exclusive or of two booleans with confidence lower bounds",
        "hierarchy": "Data Approximate Mass",
        "module": "Data.Approximate.Mass",
        "name": "(^?) ^?",
        "normalized": "Mass Bool-\u003eMass Bool-\u003eMass Bool",
        "package": "approximate",
        "partial": "",
        "signature": "Mass Bool-\u003eMass Bool-\u003eMass Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Mass.html#v:Mass",
      "description": {
        "fct-module": "Data.Approximate.Mass",
        "fct-package": "approximate",
        "fct-signature": "Mass !(Log Double) a",
        "fct-source": "src/Data-Approximate-Mass.html#Mass",
        "fct-type": "function",
        "title": "Mass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Mass",
        "module": "Data.Approximate.Mass",
        "name": "Mass",
        "normalized": "",
        "package": "approximate",
        "partial": "Mass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese functions provide wildly inaccurate but very fast\n approximations to common transcendental functions.\n\u003c/p\u003e\u003cp\u003eThe algorithms here are based on Martin Ankerl's optimized \u003ccode\u003epow\u003c/code\u003e,\n \u003ca\u003ehttp://martin.ankerl.com/2007/10/04/optimized-pow-approximation-for-java-and-c-c/\u003c/a\u003e\n which is in turn based on\n \u003ca\u003ehttp://nic.schraudolph.org/pubs/Schraudolph99.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "module",
        "fct-source": "src/Data-Approximate-Numerics.html",
        "fct-type": "module",
        "title": "Numerics"
      },
      "index": {
        "description": "These functions provide wildly inaccurate but very fast approximations to common transcendental functions The algorithms here are based on Martin Ankerl optimized pow http martin.ankerl.com optimized-pow-approximation-for-java-and-c-c which is in turn based on http nic.schraudolph.org pubs Schraudolph99.pdf",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "Numerics",
        "normalized": "",
        "package": "approximate",
        "partial": "Numerics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#t:Fast",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "class",
        "fct-source": "src/Data-Approximate-Numerics.html#Fast",
        "fct-type": "class",
        "title": "Fast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "Fast",
        "normalized": "",
        "package": "approximate",
        "partial": "Fast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:blog",
      "description": {
        "fct-descr": "\u003cp\u003eBorchardt&#8217;s Algorithm from &#8220;Dead Reckoning: Calculating without instruments&#8221;.\n\u003c/p\u003e\u003cp\u003eThis is a remarkably bad approximate logarithm.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eflog\u003c/a\u003e\u003c/code\u003e had better outperform it! It is provided merely for comparison.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#blog",
        "fct-type": "function",
        "title": "blog"
      },
      "index": {
        "description": "Borchardt Algorithm from Dead Reckoning Calculating without instruments This is remarkably bad approximate logarithm flog had better outperform it It is provided merely for comparison",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "blog",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fexp",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate an approximate exp.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#fexp",
        "fct-type": "method",
        "title": "fexp"
      },
      "index": {
        "description": "Calculate an approximate exp",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "fexp",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fexp_lb",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#fexp_lb",
        "fct-type": "method",
        "title": "fexp_lb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "fexp_lb",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fexp_ub",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#fexp_ub",
        "fct-type": "method",
        "title": "fexp_ub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "fexp_ub",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:flog",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate an approximate log.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#flog",
        "fct-type": "method",
        "title": "flog"
      },
      "index": {
        "description": "Calculate an approximate log",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "flog",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:flog_lb",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#flog_lb",
        "fct-type": "method",
        "title": "flog_lb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "flog_lb",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:flog_ub",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#flog_ub",
        "fct-type": "method",
        "title": "flog_ub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "flog_ub",
        "normalized": "a-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fpow",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate an approximate pow.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#fpow",
        "fct-type": "method",
        "title": "fpow"
      },
      "index": {
        "description": "Calculate an approximate pow",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "fpow",
        "normalized": "a-\u003ea-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fpow_lb",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#fpow_lb",
        "fct-type": "method",
        "title": "fpow_lb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "fpow_lb",
        "normalized": "a-\u003ea-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Numerics.html#v:fpow_ub",
      "description": {
        "fct-module": "Data.Approximate.Numerics",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Approximate-Numerics.html#fpow_ub",
        "fct-type": "method",
        "title": "fpow_ub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Numerics",
        "module": "Data.Approximate.Numerics",
        "name": "fpow_ub",
        "normalized": "a-\u003ea-\u003ea",
        "package": "approximate",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "module",
        "fct-source": "src/Data-Approximate-Type.html",
        "fct-type": "module",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "Type",
        "normalized": "",
        "package": "approximate",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#t:Approximate",
      "description": {
        "fct-descr": "\u003cp\u003eAn approximate number, with a likely interval, an expected value and a lower bound on the \u003ccode\u003elog\u003c/code\u003e of probability that the answer falls in the interval.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e The probabilities associated with confidence are stored in the \u003ccode\u003elog\u003c/code\u003e domain.\n\u003c/p\u003e",
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "data",
        "fct-source": "src/Data-Approximate-Type.html#Approximate",
        "fct-type": "data",
        "title": "Approximate"
      },
      "index": {
        "description": "An approximate number with likely interval an expected value and lower bound on the log of probability that the answer falls in the interval NB The probabilities associated with confidence are stored in the log domain",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "Approximate",
        "normalized": "",
        "package": "approximate",
        "partial": "Approximate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#t:HasApproximate",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "class",
        "fct-source": "src/Data-Approximate-Type.html#HasApproximate",
        "fct-type": "class",
        "title": "HasApproximate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "HasApproximate",
        "normalized": "",
        "package": "approximate",
        "partial": "Has Approximate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:Approximate",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Approximate !(Log Double) a a a",
        "fct-source": "src/Data-Approximate-Type.html#Approximate",
        "fct-type": "function",
        "title": "Approximate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "Approximate",
        "normalized": "",
        "package": "approximate",
        "partial": "Approximate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:approximate",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Lens' t (Approximate a)",
        "fct-source": "src/Data-Approximate-Type.html#approximate",
        "fct-type": "method",
        "title": "approximate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "approximate",
        "normalized": "",
        "package": "approximate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:confidence",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Lens' t (Log Double)",
        "fct-source": "src/Data-Approximate-Type.html#confidence",
        "fct-type": "method",
        "title": "confidence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "confidence",
        "normalized": "",
        "package": "approximate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:estimate",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Lens' t a",
        "fct-source": "src/Data-Approximate-Type.html#estimate",
        "fct-type": "method",
        "title": "estimate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "estimate",
        "normalized": "",
        "package": "approximate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:exact",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Prism' (Approximate a) a",
        "fct-source": "src/Data-Approximate-Type.html#exact",
        "fct-type": "function",
        "title": "exact"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "exact",
        "normalized": "",
        "package": "approximate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:hi",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Lens' t a",
        "fct-source": "src/Data-Approximate-Type.html#hi",
        "fct-type": "method",
        "title": "hi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "hi",
        "normalized": "",
        "package": "approximate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:lo",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Lens' t a",
        "fct-source": "src/Data-Approximate-Type.html#lo",
        "fct-type": "method",
        "title": "lo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "lo",
        "normalized": "",
        "package": "approximate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:one",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Prism' (Approximate a) ()",
        "fct-source": "src/Data-Approximate-Type.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "one",
        "normalized": "Prism'(Approximate a)()",
        "package": "approximate",
        "partial": "",
        "signature": "Prism'(Approximate a)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:withMax",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e Approximate a -\u003e Approximate a",
        "fct-source": "src/Data-Approximate-Type.html#withMax",
        "fct-type": "function",
        "title": "withMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "withMax",
        "normalized": "a-\u003eApproximate a-\u003eApproximate a",
        "package": "approximate",
        "partial": "Max",
        "signature": "a-\u003eApproximate a-\u003eApproximate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:withMin",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "a -\u003e Approximate a -\u003e Approximate a",
        "fct-source": "src/Data-Approximate-Type.html#withMin",
        "fct-type": "function",
        "title": "withMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "withMin",
        "normalized": "a-\u003eApproximate a-\u003eApproximate a",
        "package": "approximate",
        "partial": "Min",
        "signature": "a-\u003eApproximate a-\u003eApproximate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate-Type.html#v:zero",
      "description": {
        "fct-module": "Data.Approximate.Type",
        "fct-package": "approximate",
        "fct-signature": "Prism' (Approximate a) ()",
        "fct-source": "src/Data-Approximate-Type.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate Type",
        "module": "Data.Approximate.Type",
        "name": "zero",
        "normalized": "Prism'(Approximate a)()",
        "package": "approximate",
        "partial": "",
        "signature": "Prism'(Approximate a)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate/docs/Data-Approximate.html#",
      "description": {
        "fct-module": "Data.Approximate",
        "fct-package": "approximate",
        "fct-signature": "module",
        "fct-source": "src/Data-Approximate.html",
        "fct-type": "module",
        "title": "Approximate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Approximate",
        "module": "Data.Approximate",
        "name": "Approximate",
        "normalized": "",
        "package": "approximate",
        "partial": "Approximate",
        "signature": ""
      }
    }
  }
]