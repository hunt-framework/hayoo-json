[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#",
      "description": {
        "fct-module": "Data.Predicate.Env",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Data-Predicate-Env.html",
        "fct-type": "module",
        "title": "Env"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate Env",
        "module": "Data.Predicate.Env",
        "name": "Env",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#t:Env",
      "description": {
        "fct-descr": "\u003cp\u003eAn environment for predicates, consisting of\n mappings form \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate.Env",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate-Env.html#Env",
        "fct-type": "data",
        "title": "Env"
      },
      "index": {
        "description": "An environment for predicates consisting of mappings form ByteString to Dynamic values",
        "hierarchy": "Data Predicate Env",
        "module": "Data.Predicate.Env",
        "name": "Env",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty environment.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate.Env",
        "fct-package": "snap-predicates",
        "fct-signature": "Env",
        "fct-source": "src/Data-Predicate-Env.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty environment",
        "hierarchy": "Data Predicate Env",
        "module": "Data.Predicate.Env",
        "name": "empty",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a binding from key to value to \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e, overriding\n previous bindings if existing.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate.Env",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Predicate-Env.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Add binding from key to value to Env overriding previous bindings if existing",
        "hierarchy": "Data Predicate Env",
        "module": "Data.Predicate.Env",
        "name": "insert",
        "normalized": "ByteString-\u003ea-\u003eb()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eTry to get the associated value for the given key.\n Only successful iff, (i) \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e contains a binding for \u003ccode\u003ek\u003c/code\u003e\n and (ii) the type of value and target match.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate.Env",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString -\u003e m (Maybe a)",
        "fct-source": "src/Data-Predicate-Env.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Try to get the associated value for the given key Only successful iff Env contains binding for and ii the type of value and target match",
        "hierarchy": "Data Predicate Env",
        "module": "Data.Predicate.Env",
        "name": "lookup",
        "normalized": "ByteString-\u003ea(Maybe b)",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Data-Predicate.html",
        "fct-type": "module",
        "title": "Predicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Predicate",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-124--124-:",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance corresponding to the logical\n OR connective of two \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003es. The meta-data of\n each \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003erue branch can be of different types.\n\u003c/p\u003e\u003cp\u003eIf both arguments evaluate to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e the one with the\n smaller \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e will be preferred, or--if equal--the\n left-hand argument.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#%3A%7C%7C%3A",
        "fct-type": "data",
        "title": ":||:"
      },
      "index": {
        "description": "Predicate instance corresponding to the logical OR connective of two Predicate The meta-data of each rue branch can be of different types If both arguments evaluate to the one with the smaller Delta will be preferred or--if equal--the left-hand argument",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":||:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-124-:",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance corresponding to the logical\n OR connective of two \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003es. It requires the\n meta-data of each \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003erue branch to be of the same type.\n\u003c/p\u003e\u003cp\u003eIf both arguments evaluate to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e the one with the\n smaller \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e will be preferred, or--if equal--the\n left-hand argument.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#%3A%7C%3A",
        "fct-type": "data",
        "title": ":|:"
      },
      "index": {
        "description": "Predicate instance corresponding to the logical OR connective of two Predicate It requires the meta-data of each rue branch to be of the same type If both arguments evaluate to the one with the smaller Delta will be preferred or--if equal--the left-hand argument",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":|:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-38-:",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance corresponding to the logical\n AND connective of two \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#%3A%26%3A",
        "fct-type": "data",
        "title": ":&:"
      },
      "index": {
        "description": "Predicate instance corresponding to the logical AND connective of two Predicate",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":&:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-42-:",
      "description": {
        "fct-descr": "\u003cp\u003eData-type used for tupling-up the results of \u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#%3A%2A%3A",
        "fct-type": "data",
        "title": ":*:"
      },
      "index": {
        "description": "Data-type used for tupling-up the results of",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":*:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-43-:",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "type",
        "fct-source": "src/Data-Predicate.html#%3A%2B%3A",
        "fct-type": "type",
        "title": ":+:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":+:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Boolean",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e-like type where each branch \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003erue or \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003ealse carries\n some meta-data which is threaded through \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e evaluation.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#Boolean",
        "fct-type": "data",
        "title": "Boolean"
      },
      "index": {
        "description": "Bool like type where each branch rue or alse carries some meta-data which is threaded through Predicate evaluation",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Boolean",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Const",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance which always returns \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e with\n the given value as T's meta-data.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#Const",
        "fct-type": "data",
        "title": "Const"
      },
      "index": {
        "description": "Predicate instance which always returns with the given value as meta-data",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Const",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Delta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e is a measure of distance. It is (optionally)\n used in predicates that evaluate to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e but not uniquely so, i.e.\n different evaluations of \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e are possible and they may have a different\n \"fitness\".\n\u003c/p\u003e\u003cp\u003eAn example is content-negotiation. A HTTP request may specify\n a preference list of various media-types. A predicate matching one\n specific media-type evaluates to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e, but other media-types may match\n even better. To represent this ambivalence, the predicate will include\n a delta value which can be used to decide which of the matching\n predicates should be preferred.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "type",
        "fct-source": "src/Data-Predicate.html#Delta",
        "fct-type": "type",
        "title": "Delta"
      },
      "index": {
        "description": "Delta is measure of distance It is optionally used in predicates that evaluate to but not uniquely so i.e different evaluations of are possible and they may have different fitness An example is content-negotiation HTTP request may specify preference list of various media-types predicate matching one specific media-type evaluates to but other media-types may match even better To represent this ambivalence the predicate will include delta value which can be used to decide which of the matching predicates should be preferred",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Delta",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Fail",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance which always returns \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e with\n the given value as F's meta-data.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Data-Predicate.html#Fail",
        "fct-type": "data",
        "title": "Fail"
      },
      "index": {
        "description": "Predicate instance which always returns with the given value as meta-data",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Fail",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e class declares the function \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e which\n evaluates the predicate against some value, returning a value\n of type \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e.\n Besides being parameterised over predicate type and predicate\n parameter, the class is also parameterised over the actual types\n of T's and F's meta-data.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "class",
        "fct-source": "src/Data-Predicate.html#Predicate",
        "fct-type": "class",
        "title": "Predicate"
      },
      "index": {
        "description": "The Predicate class declares the function apply which evaluates the predicate against some value returning value of type Boolean Besides being parameterised over predicate type and predicate parameter the class is also parameterised over the actual types of and meta-data",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Predicate",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-124--124-:",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "a :||: b",
        "fct-source": "src/Data-Predicate.html#%3A%7C%7C%3A",
        "fct-type": "function",
        "title": ":||:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":||:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-124-:",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "a :|: b",
        "fct-source": "src/Data-Predicate.html#%3A%7C%3A",
        "fct-type": "function",
        "title": ":|:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":|:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-38-:",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "a :&: b",
        "fct-source": "src/Data-Predicate.html#%3A%26%3A",
        "fct-type": "function",
        "title": ":&:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":&:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-42-:",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "a :*: b",
        "fct-source": "src/Data-Predicate.html#%3A%2A%3A",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": ":*:",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:Const",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "t -\u003e Const f t",
        "fct-source": "src/Data-Predicate.html#Const",
        "fct-type": "function",
        "title": "Const"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Const",
        "normalized": "a-\u003eConst b a",
        "package": "snap-predicates",
        "partial": "Const",
        "signature": "t-\u003eConst f t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:F",
      "description": {
        "fct-descr": "\u003cp\u003elogical False with some meta-data\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "F f",
        "fct-source": "src/Data-Predicate.html#Boolean",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "logical False with some meta-data",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "F",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:Fail",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "f -\u003e Fail f t",
        "fct-source": "src/Data-Predicate.html#Fail",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "Fail",
        "normalized": "a-\u003eFail a b",
        "package": "snap-predicates",
        "partial": "Fail",
        "signature": "f-\u003eFail f t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:T",
      "description": {
        "fct-descr": "\u003cp\u003elogical True with some meta-data\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "T Delta t",
        "fct-source": "src/Data-Predicate.html#Boolean",
        "fct-type": "function",
        "title": "T"
      },
      "index": {
        "description": "logical True with some meta-data",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "T",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:apply",
      "description": {
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "p -\u003e a -\u003e State Env (Boolean (FVal p) (TVal p))",
        "fct-source": "src/Data-Predicate.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "apply",
        "normalized": "a-\u003eb-\u003eState Env(Boolean(FVal a)(TVal a))",
        "package": "snap-predicates",
        "partial": "",
        "signature": "p-\u003ea-\u003eState Env(Boolean(FVal p)(TVal p))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the given predicate \u003ccode\u003ep\u003c/code\u003e against the given value \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "p -\u003e a -\u003e Boolean (FVal p) (TVal p)",
        "fct-source": "src/Data-Predicate.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "Evaluate the given predicate against the given value",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "eval",
        "normalized": "a-\u003eb-\u003eBoolean(FVal a)(TVal a)",
        "package": "snap-predicates",
        "partial": "",
        "signature": "p-\u003ea-\u003eBoolean(FVal p)(TVal p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function will invoke the given function only if the predicate \u003ccode\u003ep\u003c/code\u003e\n applied to the test value \u003ccode\u003ea\u003c/code\u003e evaluates to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "p -\u003e a -\u003e (TVal p -\u003e m ()) -\u003e m ()",
        "fct-source": "src/Data-Predicate.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "The with function will invoke the given function only if the predicate applied to the test value evaluates to",
        "hierarchy": "Data Predicate",
        "module": "Data.Predicate",
        "name": "with",
        "normalized": "a-\u003eb-\u003e(TVal a-\u003ec())-\u003ec()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "p-\u003ea-\u003e(TVal p-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Accept.html#",
      "description": {
        "fct-module": "Snap.Predicate.Accept",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Accept.html",
        "fct-type": "module",
        "title": "Accept"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Accept",
        "module": "Snap.Predicate.Accept",
        "name": "Accept",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Accept.html#t:Accept",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e against the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es \"Accept\" header.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Accept",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Accept.html#Accept",
        "fct-type": "data",
        "title": "Accept"
      },
      "index": {
        "description": "Predicate against the Request Accept header",
        "hierarchy": "Snap Predicate Accept",
        "module": "Snap.Predicate.Accept",
        "name": "Accept",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Accept.html#v:Accept",
      "description": {
        "fct-module": "Snap.Predicate.Accept",
        "fct-package": "snap-predicates",
        "fct-signature": "Accept t s",
        "fct-source": "src/Snap-Predicate-Accept.html#Accept",
        "fct-type": "function",
        "title": "Accept"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Accept",
        "module": "Snap.Predicate.Accept",
        "name": "Accept",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#",
      "description": {
        "fct-module": "Snap.Predicate.Content",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Content.html",
        "fct-type": "module",
        "title": "Content"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Content",
        "module": "Snap.Predicate.Content",
        "name": "Content",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#t:Content",
      "description": {
        "fct-module": "Snap.Predicate.Content",
        "fct-package": "snap-predicates",
        "fct-signature": "type",
        "fct-source": "src/Snap-Predicate-Content.html#Content",
        "fct-type": "type",
        "title": "Content"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Content",
        "module": "Snap.Predicate.Content",
        "name": "Content",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#t:ContentType",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e against the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es \"Content-Type\" header.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Content",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Content.html#ContentType",
        "fct-type": "data",
        "title": "ContentType"
      },
      "index": {
        "description": "Predicate against the Request Content-Type header",
        "hierarchy": "Snap Predicate Content",
        "module": "Snap.Predicate.Content",
        "name": "ContentType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#v:ContentType",
      "description": {
        "fct-module": "Snap.Predicate.Content",
        "fct-package": "snap-predicates",
        "fct-signature": "ContentType t s",
        "fct-source": "src/Snap-Predicate-Content.html#ContentType",
        "fct-type": "function",
        "title": "ContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Content",
        "module": "Snap.Predicate.Content",
        "name": "ContentType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#",
      "description": {
        "fct-module": "Snap.Predicate.Error",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Error",
        "module": "Snap.Predicate.Error",
        "name": "Error",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eThe error type used as \u003ccode\u003eF\u003c/code\u003e meta-data in all snap predicates.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Error",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Error.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "The error type used as meta-data in all snap predicates",
        "hierarchy": "Snap Predicate Error",
        "module": "Snap.Predicate.Error",
        "name": "Error",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:Error",
      "description": {
        "fct-module": "Snap.Predicate.Error",
        "fct-package": "snap-predicates",
        "fct-signature": "Error",
        "fct-source": "src/Snap-Predicate-Error.html#Error",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Error",
        "module": "Snap.Predicate.Error",
        "name": "Error",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:_message",
      "description": {
        "fct-descr": "\u003cp\u003eoptional status message\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Error",
        "fct-package": "snap-predicates",
        "fct-signature": "!(Maybe ByteString)",
        "fct-source": "src/Snap-Predicate-Error.html#Error",
        "fct-type": "function",
        "title": "_message"
      },
      "index": {
        "description": "optional status message",
        "hierarchy": "Snap Predicate Error",
        "module": "Snap.Predicate.Error",
        "name": "_message",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:_status",
      "description": {
        "fct-descr": "\u003cp\u003e(HTTP) status code\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Error",
        "fct-package": "snap-predicates",
        "fct-signature": "!Word",
        "fct-source": "src/Snap-Predicate-Error.html#Error",
        "fct-type": "function",
        "title": "_status"
      },
      "index": {
        "description": "HTTP status code",
        "hierarchy": "Snap Predicate Error",
        "module": "Snap.Predicate.Error",
        "name": "_status",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:err",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to construct \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e values from\n status code and status message.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Error",
        "fct-package": "snap-predicates",
        "fct-signature": "Word -\u003e ByteString -\u003e Error",
        "fct-source": "src/Snap-Predicate-Error.html#err",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "Convenience function to construct Error values from status code and status message",
        "hierarchy": "Snap Predicate Error",
        "module": "Snap.Predicate.Error",
        "name": "err",
        "normalized": "Word-\u003eByteString-\u003eError",
        "package": "snap-predicates",
        "partial": "",
        "signature": "Word-\u003eByteString-\u003eError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#",
      "description": {
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Header.html",
        "fct-type": "module",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "Header",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:HasHdr",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate which is true if the request has a header with the\n given name.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Header.html#HasHdr",
        "fct-type": "data",
        "title": "HasHdr"
      },
      "index": {
        "description": "Predicate which is true if the request has header with the given name",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "HasHdr",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Has Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:Hdr",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e which returns the first request\n header value which could be converted to the target type.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Header.html#Hdr",
        "fct-type": "data",
        "title": "Hdr"
      },
      "index": {
        "description": "Specialisation of Header which returns the first request header value which could be converted to the target type Relies on Readable type-class for the actual conversion",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "Hdr",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:HdrDef",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e which returns the first request\n header value which could be converted to the target type.\n If the header is not present, the provided default will be used.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Header.html#HdrDef",
        "fct-type": "data",
        "title": "HdrDef"
      },
      "index": {
        "description": "Specialisation of Header which returns the first request header value which could be converted to the target type If the header is not present the provided default will be used Relies on Readable type-class for the actual conversion",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "HdrDef",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Hdr Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:HdrOpt",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate which returns the first request header which could be\n converted to the target type wrapped in a Maybe.\n If the header is not present, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Header.html#HdrOpt",
        "fct-type": "data",
        "title": "HdrOpt"
      },
      "index": {
        "description": "Predicate which returns the first request header which could be converted to the target type wrapped in Maybe If the header is not present Nothing will be returned Relies on Readable type-class for the actual conversion",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "HdrOpt",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Hdr Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generic request header predicate provided.\n It will get all request header values of \u003ccode\u003e_name\u003c/code\u003e and pass them on to\n the conversion function \u003ccode\u003e_read\u003c/code\u003e, which might either yield an error\n message or a value. If the header is not present, an optional default may be\n returned instead, if nothing is provided, the error message will be used\n when construction the 400 status.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Header.html#Header",
        "fct-type": "data",
        "title": "Header"
      },
      "index": {
        "description": "The most generic request header predicate provided It will get all request header values of name and pass them on to the conversion function read which might either yield an error message or value If the header is not present an optional default may be returned instead if nothing is provided the error message will be used when construction the status",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "Header",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:HasHdr",
      "description": {
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "HasHdr ByteString",
        "fct-source": "src/Snap-Predicate-Header.html#HasHdr",
        "fct-type": "function",
        "title": "HasHdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "HasHdr",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Has Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:Hdr",
      "description": {
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "Hdr ByteString",
        "fct-source": "src/Snap-Predicate-Header.html#Hdr",
        "fct-type": "function",
        "title": "Hdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "Hdr",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:HdrDef",
      "description": {
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "HdrDef ByteString a",
        "fct-source": "src/Snap-Predicate-Header.html#HdrDef",
        "fct-type": "function",
        "title": "HdrDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "HdrDef",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Hdr Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:HdrOpt",
      "description": {
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "HdrOpt ByteString",
        "fct-source": "src/Snap-Predicate-Header.html#HdrOpt",
        "fct-type": "function",
        "title": "HdrOpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "HdrOpt",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Hdr Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:Header",
      "description": {
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "Header",
        "fct-source": "src/Snap-Predicate-Header.html#Header",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "Header",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:_hdrDefault",
      "description": {
        "fct-descr": "\u003cp\u003e(optional) default value\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "!(Maybe a)",
        "fct-source": "src/Snap-Predicate-Header.html#Header",
        "fct-type": "function",
        "title": "_hdrDefault"
      },
      "index": {
        "description": "optional default value",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "_hdrDefault",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:_hdrName",
      "description": {
        "fct-descr": "\u003cp\u003erequest header name\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "!ByteString",
        "fct-source": "src/Snap-Predicate-Header.html#Header",
        "fct-type": "function",
        "title": "_hdrName"
      },
      "index": {
        "description": "request header name",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "_hdrName",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:_hdrRead",
      "description": {
        "fct-descr": "\u003cp\u003econversion function\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Header",
        "fct-package": "snap-predicates",
        "fct-signature": "[ByteString] -\u003e Either ByteString a",
        "fct-source": "src/Snap-Predicate-Header.html#Header",
        "fct-type": "function",
        "title": "_hdrRead"
      },
      "index": {
        "description": "conversion function",
        "hierarchy": "Snap Predicate Header",
        "module": "Snap.Predicate.Header",
        "name": "_hdrRead",
        "normalized": "[ByteString]-\u003eEither ByteString a",
        "package": "snap-predicates",
        "partial": "Read",
        "signature": "[ByteString]-\u003eEither ByteString a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-MediaType.html",
        "fct-type": "module",
        "title": "MediaType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "MediaType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Media Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:All",
      "description": {
        "fct-descr": "\u003cp\u003emedia-type and sub-type \"*\".\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#All",
        "fct-type": "data",
        "title": "All"
      },
      "index": {
        "description": "media-type and sub-type",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "All",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Application",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Application",
        "fct-type": "data",
        "title": "Application"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Application",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:AtomXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#AtomXml",
        "fct-type": "data",
        "title": "AtomXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "AtomXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Atom Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Audio",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Audio",
        "fct-type": "data",
        "title": "Audio"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Audio",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Audio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Css",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Css",
        "fct-type": "data",
        "title": "Css"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Css",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Css",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Csv",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Csv",
        "fct-type": "data",
        "title": "Csv"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Csv",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Csv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Encrypted",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Encrypted",
        "fct-type": "data",
        "title": "Encrypted"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Encrypted",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Encrypted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:FormData",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#FormData",
        "fct-type": "data",
        "title": "FormData"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "FormData",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Form Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:FormUrlEncoded",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#FormUrlEncoded",
        "fct-type": "data",
        "title": "FormUrlEncoded"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "FormUrlEncoded",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Form Url Encoded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Gif",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Gif",
        "fct-type": "data",
        "title": "Gif"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Gif",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Gif",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Gzip",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Gzip",
        "fct-type": "data",
        "title": "Gzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Gzip",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Gzip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Image",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Image",
        "fct-type": "data",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Image",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Javascript",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Javascript",
        "fct-type": "data",
        "title": "Javascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Javascript",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Jpeg",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Jpeg",
        "fct-type": "data",
        "title": "Jpeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Jpeg",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Jpeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Json",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Json",
        "fct-type": "data",
        "title": "Json"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Json",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:MSubType",
      "description": {
        "fct-descr": "\u003cp\u003eType-class for converting a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a media-subtype.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "class",
        "fct-source": "src/Snap-Predicate-MediaType.html#MSubType",
        "fct-type": "class",
        "title": "MSubType"
      },
      "index": {
        "description": "Type-class for converting ByteString to media-subtype",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "MSubType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "MSub Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:MType",
      "description": {
        "fct-descr": "\u003cp\u003eType-class for converting a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a media-type.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "class",
        "fct-source": "src/Snap-Predicate-MediaType.html#MType",
        "fct-type": "class",
        "title": "MType"
      },
      "index": {
        "description": "Type-class for converting ByteString to media-type",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "MType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "MType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:MediaType",
      "description": {
        "fct-descr": "\u003cp\u003eThe Media-type representation.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#MediaType",
        "fct-type": "data",
        "title": "MediaType"
      },
      "index": {
        "description": "The Media-type representation",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "MediaType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Media Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Message",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Message",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Mixed",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Mixed",
        "fct-type": "data",
        "title": "Mixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Mixed",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Mixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Mp4",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Mp4",
        "fct-type": "data",
        "title": "Mp4"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Mp4",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Mp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Mpeg",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Mpeg",
        "fct-type": "data",
        "title": "Mpeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Mpeg",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Mpeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Multipart",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Multipart",
        "fct-type": "data",
        "title": "Multipart"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Multipart",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Multipart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:OctetStream",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#OctetStream",
        "fct-type": "data",
        "title": "OctetStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "OctetStream",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Octet Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Ogg",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Ogg",
        "fct-type": "data",
        "title": "Ogg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Ogg",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Ogg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Partial",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Partial",
        "fct-type": "data",
        "title": "Partial"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Partial",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs12",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs12",
        "fct-type": "data",
        "title": "Pkcs12"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs12",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7Cert",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7Cert",
        "fct-type": "data",
        "title": "Pkcs7Cert"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7Cert",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Cert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7CertRqRs",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7CertRqRs",
        "fct-type": "data",
        "title": "Pkcs7CertRqRs"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7CertRqRs",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Cert Rq Rs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7Mime",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7Mime",
        "fct-type": "data",
        "title": "Pkcs7Mime"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7Mime",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Mime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7Sig",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7Sig",
        "fct-type": "data",
        "title": "Pkcs7Sig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7Sig",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Plain",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Plain",
        "fct-type": "data",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Plain",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Png",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Png",
        "fct-type": "data",
        "title": "Png"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Png",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Png",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Postscript",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Postscript",
        "fct-type": "data",
        "title": "Postscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Postscript",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Protobuf",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Protobuf",
        "fct-type": "data",
        "title": "Protobuf"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Protobuf",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Protobuf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:RdfXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#RdfXml",
        "fct-type": "data",
        "title": "RdfXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "RdfXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Rdf Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:RssXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#RssXml",
        "fct-type": "data",
        "title": "RssXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "RssXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Rss Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:SubType",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric media-subtype.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#SubType",
        "fct-type": "data",
        "title": "SubType"
      },
      "index": {
        "description": "Generic media-subtype",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "SubType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Sub Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Tar",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Tar",
        "fct-type": "data",
        "title": "Tar"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Tar",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Tar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Text",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Text",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Thrift",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Thrift",
        "fct-type": "data",
        "title": "Thrift"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Thrift",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Thrift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Tiff",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Tiff",
        "fct-type": "data",
        "title": "Tiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Tiff",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Tiff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric media-type.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "Generic media-type",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Type",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Video",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Video",
        "fct-type": "data",
        "title": "Video"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Video",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Video",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Vorbis",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Vorbis",
        "fct-type": "data",
        "title": "Vorbis"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Vorbis",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Vorbis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Webm",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Webm",
        "fct-type": "data",
        "title": "Webm"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Webm",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Webm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:XhtmlXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#XhtmlXml",
        "fct-type": "data",
        "title": "XhtmlXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "XhtmlXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Xhtml Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Xml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-MediaType.html#Xml",
        "fct-type": "data",
        "title": "Xml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Xml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:All",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "All",
        "fct-source": "src/Snap-Predicate-MediaType.html#All",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "All",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Application",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Application",
        "fct-source": "src/Snap-Predicate-MediaType.html#Application",
        "fct-type": "function",
        "title": "Application"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Application",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:AtomXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "AtomXml",
        "fct-source": "src/Snap-Predicate-MediaType.html#AtomXml",
        "fct-type": "function",
        "title": "AtomXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "AtomXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Atom Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Audio",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Audio",
        "fct-source": "src/Snap-Predicate-MediaType.html#Audio",
        "fct-type": "function",
        "title": "Audio"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Audio",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Audio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Css",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Css",
        "fct-source": "src/Snap-Predicate-MediaType.html#Css",
        "fct-type": "function",
        "title": "Css"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Css",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Css",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Csv",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Csv",
        "fct-source": "src/Snap-Predicate-MediaType.html#Csv",
        "fct-type": "function",
        "title": "Csv"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Csv",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Csv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Encrypted",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Encrypted",
        "fct-source": "src/Snap-Predicate-MediaType.html#Encrypted",
        "fct-type": "function",
        "title": "Encrypted"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Encrypted",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Encrypted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:FormData",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "FormData",
        "fct-source": "src/Snap-Predicate-MediaType.html#FormData",
        "fct-type": "function",
        "title": "FormData"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "FormData",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Form Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:FormUrlEncoded",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "FormUrlEncoded",
        "fct-source": "src/Snap-Predicate-MediaType.html#FormUrlEncoded",
        "fct-type": "function",
        "title": "FormUrlEncoded"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "FormUrlEncoded",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Form Url Encoded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Gif",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Gif",
        "fct-source": "src/Snap-Predicate-MediaType.html#Gif",
        "fct-type": "function",
        "title": "Gif"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Gif",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Gif",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Gzip",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Gzip",
        "fct-source": "src/Snap-Predicate-MediaType.html#Gzip",
        "fct-type": "function",
        "title": "Gzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Gzip",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Gzip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Image",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Image",
        "fct-source": "src/Snap-Predicate-MediaType.html#Image",
        "fct-type": "function",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Image",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Javascript",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Javascript",
        "fct-source": "src/Snap-Predicate-MediaType.html#Javascript",
        "fct-type": "function",
        "title": "Javascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Javascript",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Jpeg",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Jpeg",
        "fct-source": "src/Snap-Predicate-MediaType.html#Jpeg",
        "fct-type": "function",
        "title": "Jpeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Jpeg",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Jpeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Json",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Json",
        "fct-source": "src/Snap-Predicate-MediaType.html#Json",
        "fct-type": "function",
        "title": "Json"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Json",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:MediaType",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "MediaType",
        "fct-source": "src/Snap-Predicate-MediaType.html#MediaType",
        "fct-type": "function",
        "title": "MediaType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "MediaType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Media Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Message",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Message",
        "fct-source": "src/Snap-Predicate-MediaType.html#Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Message",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Mixed",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Mixed",
        "fct-source": "src/Snap-Predicate-MediaType.html#Mixed",
        "fct-type": "function",
        "title": "Mixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Mixed",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Mixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Mp4",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Mp4",
        "fct-source": "src/Snap-Predicate-MediaType.html#Mp4",
        "fct-type": "function",
        "title": "Mp4"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Mp4",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Mp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Mpeg",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Mpeg",
        "fct-source": "src/Snap-Predicate-MediaType.html#Mpeg",
        "fct-type": "function",
        "title": "Mpeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Mpeg",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Mpeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Multipart",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Multipart",
        "fct-source": "src/Snap-Predicate-MediaType.html#Multipart",
        "fct-type": "function",
        "title": "Multipart"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Multipart",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Multipart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:OctetStream",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "OctetStream",
        "fct-source": "src/Snap-Predicate-MediaType.html#OctetStream",
        "fct-type": "function",
        "title": "OctetStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "OctetStream",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Octet Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Ogg",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Ogg",
        "fct-source": "src/Snap-Predicate-MediaType.html#Ogg",
        "fct-type": "function",
        "title": "Ogg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Ogg",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Ogg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Partial",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Partial",
        "fct-source": "src/Snap-Predicate-MediaType.html#Partial",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Partial",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs12",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Pkcs12",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs12",
        "fct-type": "function",
        "title": "Pkcs12"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs12",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7Cert",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Pkcs7Cert",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7Cert",
        "fct-type": "function",
        "title": "Pkcs7Cert"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7Cert",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Cert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7CertRqRs",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Pkcs7CertRqRs",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7CertRqRs",
        "fct-type": "function",
        "title": "Pkcs7CertRqRs"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7CertRqRs",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Cert Rq Rs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7Mime",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Pkcs7Mime",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7Mime",
        "fct-type": "function",
        "title": "Pkcs7Mime"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7Mime",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Mime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7Sig",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Pkcs7Sig",
        "fct-source": "src/Snap-Predicate-MediaType.html#Pkcs7Sig",
        "fct-type": "function",
        "title": "Pkcs7Sig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Pkcs7Sig",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Pkcs Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Plain",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Plain",
        "fct-source": "src/Snap-Predicate-MediaType.html#Plain",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Plain",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Png",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Png",
        "fct-source": "src/Snap-Predicate-MediaType.html#Png",
        "fct-type": "function",
        "title": "Png"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Png",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Png",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Postscript",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Postscript",
        "fct-source": "src/Snap-Predicate-MediaType.html#Postscript",
        "fct-type": "function",
        "title": "Postscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Postscript",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Protobuf",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Protobuf",
        "fct-source": "src/Snap-Predicate-MediaType.html#Protobuf",
        "fct-type": "function",
        "title": "Protobuf"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Protobuf",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Protobuf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:RdfXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "RdfXml",
        "fct-source": "src/Snap-Predicate-MediaType.html#RdfXml",
        "fct-type": "function",
        "title": "RdfXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "RdfXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Rdf Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:RssXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "RssXml",
        "fct-source": "src/Snap-Predicate-MediaType.html#RssXml",
        "fct-type": "function",
        "title": "RssXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "RssXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Rss Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:SubType",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "SubType ByteString",
        "fct-source": "src/Snap-Predicate-MediaType.html#SubType",
        "fct-type": "function",
        "title": "SubType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "SubType",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Sub Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Tar",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Tar",
        "fct-source": "src/Snap-Predicate-MediaType.html#Tar",
        "fct-type": "function",
        "title": "Tar"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Tar",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Tar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Text",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Text",
        "fct-source": "src/Snap-Predicate-MediaType.html#Text",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Text",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Thrift",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Thrift",
        "fct-source": "src/Snap-Predicate-MediaType.html#Thrift",
        "fct-type": "function",
        "title": "Thrift"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Thrift",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Thrift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Tiff",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Tiff",
        "fct-source": "src/Snap-Predicate-MediaType.html#Tiff",
        "fct-type": "function",
        "title": "Tiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Tiff",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Tiff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Type",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Type ByteString",
        "fct-source": "src/Snap-Predicate-MediaType.html#Type",
        "fct-type": "function",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Type",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Video",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Video",
        "fct-source": "src/Snap-Predicate-MediaType.html#Video",
        "fct-type": "function",
        "title": "Video"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Video",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Video",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Vorbis",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Vorbis",
        "fct-source": "src/Snap-Predicate-MediaType.html#Vorbis",
        "fct-type": "function",
        "title": "Vorbis"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Vorbis",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Vorbis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Webm",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Webm",
        "fct-source": "src/Snap-Predicate-MediaType.html#Webm",
        "fct-type": "function",
        "title": "Webm"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Webm",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Webm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:XhtmlXml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "XhtmlXml",
        "fct-source": "src/Snap-Predicate-MediaType.html#XhtmlXml",
        "fct-type": "function",
        "title": "XhtmlXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "XhtmlXml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Xhtml Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Xml",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "Xml",
        "fct-source": "src/Snap-Predicate-MediaType.html#Xml",
        "fct-type": "function",
        "title": "Xml"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "Xml",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_params",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "![(ByteString, ByteString)]",
        "fct-source": "src/Snap-Predicate-MediaType.html#MediaType",
        "fct-type": "function",
        "title": "_params"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "_params",
        "normalized": "[(ByteString,ByteString)]",
        "package": "snap-predicates",
        "partial": "",
        "signature": "[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_quality",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "!Double",
        "fct-source": "src/Snap-Predicate-MediaType.html#MediaType",
        "fct-type": "function",
        "title": "_quality"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "_quality",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_subtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "!s",
        "fct-source": "src/Snap-Predicate-MediaType.html#MediaType",
        "fct-type": "function",
        "title": "_subtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "_subtype",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "!t",
        "fct-source": "src/Snap-Predicate-MediaType.html#MediaType",
        "fct-type": "function",
        "title": "_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "_type",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:toSubType",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "a -\u003e ByteString -\u003e Maybe a",
        "fct-source": "src/Snap-Predicate-MediaType.html#toSubType",
        "fct-type": "method",
        "title": "toSubType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "toSubType",
        "normalized": "a-\u003eByteString-\u003eMaybe a",
        "package": "snap-predicates",
        "partial": "Sub Type",
        "signature": "a-\u003eByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:toType",
      "description": {
        "fct-module": "Snap.Predicate.MediaType",
        "fct-package": "snap-predicates",
        "fct-signature": "a -\u003e ByteString -\u003e Maybe a",
        "fct-source": "src/Snap-Predicate-MediaType.html#toType",
        "fct-type": "method",
        "title": "toType"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate MediaType",
        "module": "Snap.Predicate.MediaType",
        "name": "toType",
        "normalized": "a-\u003eByteString-\u003eMaybe a",
        "package": "snap-predicates",
        "partial": "Type",
        "signature": "a-\u003eByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#",
      "description": {
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Param.html",
        "fct-type": "module",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "Param",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:HasParam",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate which is true if the request has a parameter with the\n given name.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Param.html#HasParam",
        "fct-type": "data",
        "title": "HasParam"
      },
      "index": {
        "description": "Predicate which is true if the request has parameter with the given name",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "HasParam",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Has Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e which returns the first request\n parameter which could be converted to the target type.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Param.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "Specialisation of Parameter which returns the first request parameter which could be converted to the target type Relies on Readable type-class for the actual conversion",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "Param",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:ParamDef",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e which returns the first request\n parameter which could be converted to the target type.\n If the parameter is not present, the provided default will be used.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Param.html#ParamDef",
        "fct-type": "data",
        "title": "ParamDef"
      },
      "index": {
        "description": "Specialisation of Parameter which returns the first request parameter which could be converted to the target type If the parameter is not present the provided default will be used Relies on Readable type-class for the actual conversion",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "ParamDef",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:ParamOpt",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate which returns the first request parameter which could be\n converted to the target type wrapped in a Maybe.\n If the parameter is not present, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Param.html#ParamOpt",
        "fct-type": "data",
        "title": "ParamOpt"
      },
      "index": {
        "description": "Predicate which returns the first request parameter which could be converted to the target type wrapped in Maybe If the parameter is not present Nothing will be returned Relies on Readable type-class for the actual conversion",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "ParamOpt",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:Parameter",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generic request parameter predicate provided.\n It will get all request parameter values of \u003ccode\u003e_name\u003c/code\u003e and pass them on to\n the conversion function \u003ccode\u003e_read\u003c/code\u003e, which might either yield an error\n message or a value. If the parameter is not present, an optional default may be\n returned instead, if nothing is provided, the error message will be used\n when construction the 400 status.\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Param.html#Parameter",
        "fct-type": "data",
        "title": "Parameter"
      },
      "index": {
        "description": "The most generic request parameter predicate provided It will get all request parameter values of name and pass them on to the conversion function read which might either yield an error message or value If the parameter is not present an optional default may be returned instead if nothing is provided the error message will be used when construction the status",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "Parameter",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:HasParam",
      "description": {
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "HasParam ByteString",
        "fct-source": "src/Snap-Predicate-Param.html#HasParam",
        "fct-type": "function",
        "title": "HasParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "HasParam",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Has Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:Param",
      "description": {
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "Param ByteString",
        "fct-source": "src/Snap-Predicate-Param.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "Param",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:ParamDef",
      "description": {
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "ParamDef ByteString a",
        "fct-source": "src/Snap-Predicate-Param.html#ParamDef",
        "fct-type": "function",
        "title": "ParamDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "ParamDef",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:ParamOpt",
      "description": {
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "ParamOpt ByteString",
        "fct-source": "src/Snap-Predicate-Param.html#ParamOpt",
        "fct-type": "function",
        "title": "ParamOpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "ParamOpt",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Param Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:Parameter",
      "description": {
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "Parameter",
        "fct-source": "src/Snap-Predicate-Param.html#Parameter",
        "fct-type": "function",
        "title": "Parameter"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "Parameter",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:_pDefault",
      "description": {
        "fct-descr": "\u003cp\u003e(optional) default value\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "!(Maybe a)",
        "fct-source": "src/Snap-Predicate-Param.html#Parameter",
        "fct-type": "function",
        "title": "_pDefault"
      },
      "index": {
        "description": "optional default value",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "_pDefault",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:_pName",
      "description": {
        "fct-descr": "\u003cp\u003erequest parameter name\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "!ByteString",
        "fct-source": "src/Snap-Predicate-Param.html#Parameter",
        "fct-type": "function",
        "title": "_pName"
      },
      "index": {
        "description": "request parameter name",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "_pName",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:_pRead",
      "description": {
        "fct-descr": "\u003cp\u003econversion function\n\u003c/p\u003e",
        "fct-module": "Snap.Predicate.Param",
        "fct-package": "snap-predicates",
        "fct-signature": "[ByteString] -\u003e Either ByteString a",
        "fct-source": "src/Snap-Predicate-Param.html#Parameter",
        "fct-type": "function",
        "title": "_pRead"
      },
      "index": {
        "description": "conversion function",
        "hierarchy": "Snap Predicate Param",
        "module": "Snap.Predicate.Param",
        "name": "_pRead",
        "normalized": "[ByteString]-\u003eEither ByteString a",
        "package": "snap-predicates",
        "partial": "Read",
        "signature": "[ByteString]-\u003eEither ByteString a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Tutorial.html#",
      "description": {
        "fct-module": "Snap.Predicate.Tutorial",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Tutorial.html",
        "fct-type": "module",
        "title": "Tutorial"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Tutorial",
        "module": "Snap.Predicate.Tutorial",
        "name": "Tutorial",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Tutorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Types.html#",
      "description": {
        "fct-module": "Snap.Predicate.Types",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Types",
        "module": "Snap.Predicate.Types",
        "name": "Types",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Types.html#t:CSV",
      "description": {
        "fct-module": "Snap.Predicate.Types",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Predicate-Types.html#CSV",
        "fct-type": "data",
        "title": "CSV"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Types",
        "module": "Snap.Predicate.Types",
        "name": "CSV",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "CSV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Types.html#v:list",
      "description": {
        "fct-module": "Snap.Predicate.Types",
        "fct-package": "snap-predicates",
        "fct-signature": "CSV a -\u003e [a]",
        "fct-source": "src/Snap-Predicate-Types.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate Types",
        "module": "Snap.Predicate.Types",
        "name": "list",
        "normalized": "CSV a-\u003e[a]",
        "package": "snap-predicates",
        "partial": "",
        "signature": "CSV a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate.html#",
      "description": {
        "fct-module": "Snap.Predicate",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Predicate.html",
        "fct-type": "module",
        "title": "Predicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Predicate",
        "module": "Snap.Predicate",
        "name": "Predicate",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#",
      "description": {
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "module",
        "fct-source": "src/Snap-Route.html",
        "fct-type": "module",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "Route",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#t:Routes",
      "description": {
        "fct-descr": "\u003cp\u003eThe Routes monad is used to add routing declarations via \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e or\n one of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e, etc.\n Routing declarations can then be turned into the ordinary snap format,\n i.e. \u003ccode\u003eMonadSnap m =\u003e [(ByteString, m a)]\u003c/code\u003e or into strings.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "data",
        "fct-source": "src/Snap-Route.html#Routes",
        "fct-type": "data",
        "title": "Routes"
      },
      "index": {
        "description": "The Routes monad is used to add routing declarations via addRoute or one of get post etc Routing declarations can then be turned into the ordinary snap format i.e MonadSnap ByteString or into strings",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "Routes",
        "normalized": "",
        "package": "snap-predicates",
        "partial": "Routes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:addRoute",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a route for some \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e and path (potentially with variable\n captures), and constrained the some \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "Method-\u003e ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "addRoute"
      },
      "index": {
        "description": "Add route for some Method and path potentially with variable captures and constrained the some Predicate",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "addRoute",
        "normalized": "Method-\u003eByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "Route",
        "signature": "Method-\u003eByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "connect",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:connect_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "connect_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "connect_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "delete",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:delete_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "delete_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "delete_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:expandRoutes",
      "description": {
        "fct-descr": "\u003cp\u003eTurn route definitions into \"snapable\" format, i.e.\n Routes are grouped per path and selection evaluates routes\n against the given Snap \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "Routes m () -\u003e [(ByteString, m ())]",
        "fct-source": "src/Snap-Route.html#expandRoutes",
        "fct-type": "function",
        "title": "expandRoutes"
      },
      "index": {
        "description": "Turn route definitions into snapable format i.e Routes are grouped per path and selection evaluates routes against the given Snap Request",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "expandRoutes",
        "normalized": "Routes a()-\u003e[(ByteString,a())]",
        "package": "snap-predicates",
        "partial": "Routes",
        "signature": "Routes m()-\u003e[(ByteString,m())]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "get",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:get_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "get_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "get_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "head",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:head_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "head_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "head_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "options",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:options_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "options_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "options_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "post",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:post_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "post_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "post_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "put",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:put_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "put_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "put_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:renderErrorWith",
      "description": {
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "Renderer -\u003e Routes m ()",
        "fct-source": "src/Snap-Route.html#renderErrorWith",
        "fct-type": "function",
        "title": "renderErrorWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "renderErrorWith",
        "normalized": "Renderer-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "Error With",
        "signature": "Renderer-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:showRoutes",
      "description": {
        "fct-descr": "\u003cp\u003eTurn route definitions into a list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "Routes m () -\u003e [String]",
        "fct-source": "src/Snap-Route.html#showRoutes",
        "fct-type": "function",
        "title": "showRoutes"
      },
      "index": {
        "description": "Turn route definitions into list of String",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "showRoutes",
        "normalized": "Routes a()-\u003e[String]",
        "package": "snap-predicates",
        "partial": "Routes",
        "signature": "Routes m()-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "trace",
        "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:trace_",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
        "fct-module": "Snap.Route",
        "fct-package": "snap-predicates",
        "fct-signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
        "fct-type": "function",
        "title": "trace_"
      },
      "index": {
        "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
        "hierarchy": "Snap Route",
        "module": "Snap.Route",
        "name": "trace_",
        "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
        "package": "snap-predicates",
        "partial": "",
        "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()"
      }
    }
  }
]