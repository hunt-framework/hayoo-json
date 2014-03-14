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
        "word": "snap-predicates"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate.Env",
          "name": "Env",
          "package": "snap-predicates",
          "source": "src/Data-Predicate-Env.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Predicate Env",
          "module": "Data.Predicate.Env",
          "name": "Env",
          "package": "snap-predicates",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn environment for predicates, consisting of\n mappings form \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Predicate.Env",
          "name": "Env",
          "package": "snap-predicates",
          "source": "src/Data-Predicate-Env.html#Env",
          "type": "data"
        },
        "index": {
          "description": "An environment for predicates consisting of mappings form ByteString to Dynamic values",
          "hierarchy": "Data Predicate Env",
          "module": "Data.Predicate.Env",
          "name": "Env",
          "package": "snap-predicates",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty environment.\n\u003c/p\u003e",
          "module": "Data.Predicate.Env",
          "name": "empty",
          "package": "snap-predicates",
          "signature": "Env",
          "source": "src/Data-Predicate-Env.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty environment",
          "hierarchy": "Data Predicate Env",
          "module": "Data.Predicate.Env",
          "name": "empty",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a binding from key to value to \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e, overriding\n previous bindings if existing.\n\u003c/p\u003e",
          "module": "Data.Predicate.Env",
          "name": "insert",
          "package": "snap-predicates",
          "signature": "ByteString -\u003e a -\u003e m ()",
          "source": "src/Data-Predicate-Env.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Add binding from key to value to Env overriding previous bindings if existing",
          "hierarchy": "Data Predicate Env",
          "module": "Data.Predicate.Env",
          "name": "insert",
          "normalized": "ByteString-\u003ea-\u003eb()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the associated value for the given key.\n Only successful iff, (i) \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e contains a binding for \u003ccode\u003ek\u003c/code\u003e\n and (ii) the type of value and target match.\n\u003c/p\u003e",
          "module": "Data.Predicate.Env",
          "name": "lookup",
          "package": "snap-predicates",
          "signature": "ByteString -\u003e m (Maybe a)",
          "source": "src/Data-Predicate-Env.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Try to get the associated value for the given key Only successful iff Env contains binding for and ii the type of value and target match",
          "hierarchy": "Data Predicate Env",
          "module": "Data.Predicate.Env",
          "name": "lookup",
          "normalized": "ByteString-\u003ea(Maybe b)",
          "package": "snap-predicates",
          "signature": "ByteString-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate-Env.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": "Predicate",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Predicate",
          "package": "snap-predicates",
          "partial": "Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance corresponding to the logical\n OR connective of two \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003es. The meta-data of\n each \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003erue branch can be of different types.\n\u003c/p\u003e\u003cp\u003eIf both arguments evaluate to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e the one with the\n smaller \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e will be preferred, or--if equal--the\n left-hand argument.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": ":||:",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#%3A%7C%7C%3A",
          "type": "data"
        },
        "index": {
          "description": "Predicate instance corresponding to the logical OR connective of two Predicate The meta-data of each rue branch can be of different types If both arguments evaluate to the one with the smaller Delta will be preferred or--if equal--the left-hand argument",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":||:",
          "package": "snap-predicates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-124--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance corresponding to the logical\n OR connective of two \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003es. It requires the\n meta-data of each \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003erue branch to be of the same type.\n\u003c/p\u003e\u003cp\u003eIf both arguments evaluate to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e the one with the\n smaller \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e will be preferred, or--if equal--the\n left-hand argument.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": ":|:",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#%3A%7C%3A",
          "type": "data"
        },
        "index": {
          "description": "Predicate instance corresponding to the logical OR connective of two Predicate It requires the meta-data of each rue branch to be of the same type If both arguments evaluate to the one with the smaller Delta will be preferred or--if equal--the left-hand argument",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":|:",
          "package": "snap-predicates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance corresponding to the logical\n AND connective of two \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": ":&:",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#%3A%26%3A",
          "type": "data"
        },
        "index": {
          "description": "Predicate instance corresponding to the logical AND connective of two Predicate",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":&:",
          "package": "snap-predicates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData-type used for tupling-up the results of \u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": ":*:",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "Data-type used for tupling-up the results of",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":*:",
          "package": "snap-predicates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": ":+:",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#%3A%2B%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":+:",
          "package": "snap-predicates",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e-like type where each branch \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003erue or \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003ealse carries\n some meta-data which is threaded through \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e evaluation.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "Boolean",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#Boolean",
          "type": "data"
        },
        "index": {
          "description": "Bool like type where each branch rue or alse carries some meta-data which is threaded through Predicate evaluation",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Boolean",
          "package": "snap-predicates",
          "partial": "Boolean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance which always returns \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e with\n the given value as T's meta-data.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "Const",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#Const",
          "type": "data"
        },
        "index": {
          "description": "Predicate instance which always returns with the given value as meta-data",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Const",
          "package": "snap-predicates",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e is a measure of distance. It is (optionally)\n used in predicates that evaluate to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e but not uniquely so, i.e.\n different evaluations of \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e are possible and they may have a different\n \"fitness\".\n\u003c/p\u003e\u003cp\u003eAn example is content-negotiation. A HTTP request may specify\n a preference list of various media-types. A predicate matching one\n specific media-type evaluates to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e, but other media-types may match\n even better. To represent this ambivalence, the predicate will include\n a delta value which can be used to decide which of the matching\n predicates should be preferred.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "Delta",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#Delta",
          "type": "type"
        },
        "index": {
          "description": "Delta is measure of distance It is optionally used in predicates that evaluate to but not uniquely so i.e different evaluations of are possible and they may have different fitness An example is content-negotiation HTTP request may specify preference list of various media-types predicate matching one specific media-type evaluates to but other media-types may match even better To represent this ambivalence the predicate will include delta value which can be used to decide which of the matching predicates should be preferred",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Delta",
          "package": "snap-predicates",
          "partial": "Delta",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e instance which always returns \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e with\n the given value as F's meta-data.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "Fail",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#Fail",
          "type": "data"
        },
        "index": {
          "description": "Predicate instance which always returns with the given value as meta-data",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Fail",
          "package": "snap-predicates",
          "partial": "Fail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e class declares the function \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e which\n evaluates the predicate against some value, returning a value\n of type \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e.\n Besides being parameterised over predicate type and predicate\n parameter, the class is also parameterised over the actual types\n of T's and F's meta-data.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "Predicate",
          "package": "snap-predicates",
          "source": "src/Data-Predicate.html#Predicate",
          "type": "class"
        },
        "index": {
          "description": "The Predicate class declares the function apply which evaluates the predicate against some value returning value of type Boolean Besides being parameterised over predicate type and predicate parameter the class is also parameterised over the actual types of and meta-data",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Predicate",
          "package": "snap-predicates",
          "partial": "Predicate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": ":||:",
          "package": "snap-predicates",
          "signature": "a :||: b",
          "source": "src/Data-Predicate.html#%3A%7C%7C%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":||:",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-124--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": ":|:",
          "package": "snap-predicates",
          "signature": "a :|: b",
          "source": "src/Data-Predicate.html#%3A%7C%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":|:",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": ":&:",
          "package": "snap-predicates",
          "signature": "a :&: b",
          "source": "src/Data-Predicate.html#%3A%26%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":&:",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": ":*:",
          "package": "snap-predicates",
          "signature": "a :*: b",
          "source": "src/Data-Predicate.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": ":*:",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": "Const",
          "package": "snap-predicates",
          "signature": "t -\u003e Const f t",
          "source": "src/Data-Predicate.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Const",
          "normalized": "a-\u003eConst b a",
          "package": "snap-predicates",
          "partial": "Const",
          "signature": "t-\u003eConst f t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elogical False with some meta-data\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "F",
          "package": "snap-predicates",
          "signature": "F f",
          "source": "src/Data-Predicate.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "logical False with some meta-data",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "F",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": "Fail",
          "package": "snap-predicates",
          "signature": "f -\u003e Fail f t",
          "source": "src/Data-Predicate.html#Fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "Fail",
          "normalized": "a-\u003eFail a b",
          "package": "snap-predicates",
          "partial": "Fail",
          "signature": "f-\u003eFail f t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elogical True with some meta-data\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "T",
          "package": "snap-predicates",
          "signature": "T Delta t",
          "source": "src/Data-Predicate.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "logical True with some meta-data",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "T",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Predicate",
          "name": "apply",
          "package": "snap-predicates",
          "signature": "p -\u003e a -\u003e State Env (Boolean (FVal p) (TVal p))",
          "source": "src/Data-Predicate.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "apply",
          "normalized": "a-\u003eb-\u003eState Env(Boolean(FVal a)(TVal a))",
          "package": "snap-predicates",
          "signature": "p-\u003ea-\u003eState Env(Boolean(FVal p)(TVal p))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the given predicate \u003ccode\u003ep\u003c/code\u003e against the given value \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "eval",
          "package": "snap-predicates",
          "signature": "p -\u003e a -\u003e Boolean (FVal p) (TVal p)",
          "source": "src/Data-Predicate.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the given predicate against the given value",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "eval",
          "normalized": "a-\u003eb-\u003eBoolean(FVal a)(TVal a)",
          "package": "snap-predicates",
          "signature": "p-\u003ea-\u003eBoolean(FVal p)(TVal p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function will invoke the given function only if the predicate \u003ccode\u003ep\u003c/code\u003e\n applied to the test value \u003ccode\u003ea\u003c/code\u003e evaluates to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Predicate",
          "name": "with",
          "package": "snap-predicates",
          "signature": "p -\u003e a -\u003e (TVal p -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Predicate.html#with",
          "type": "function"
        },
        "index": {
          "description": "The with function will invoke the given function only if the predicate applied to the test value evaluates to",
          "hierarchy": "Data Predicate",
          "module": "Data.Predicate",
          "name": "with",
          "normalized": "a-\u003eb-\u003e(TVal a-\u003ec())-\u003ec()",
          "package": "snap-predicates",
          "signature": "p-\u003ea-\u003e(TVal p-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Data-Predicate.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Accept",
          "name": "Accept",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Accept.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Accept",
          "module": "Snap.Predicate.Accept",
          "name": "Accept",
          "package": "snap-predicates",
          "partial": "Accept",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Accept.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e against the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es \"Accept\" header.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Accept",
          "name": "Accept",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Accept.html#Accept",
          "type": "data"
        },
        "index": {
          "description": "Predicate against the Request Accept header",
          "hierarchy": "Snap Predicate Accept",
          "module": "Snap.Predicate.Accept",
          "name": "Accept",
          "package": "snap-predicates",
          "partial": "Accept",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Accept.html#t:Accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Accept",
          "name": "Accept",
          "package": "snap-predicates",
          "signature": "Accept t s",
          "source": "src/Snap-Predicate-Accept.html#Accept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Accept",
          "module": "Snap.Predicate.Accept",
          "name": "Accept",
          "package": "snap-predicates",
          "partial": "Accept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Accept.html#v:Accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Content",
          "name": "Content",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Content.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Content",
          "module": "Snap.Predicate.Content",
          "name": "Content",
          "package": "snap-predicates",
          "partial": "Content",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Content",
          "name": "Content",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Content.html#Content",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Predicate Content",
          "module": "Snap.Predicate.Content",
          "name": "Content",
          "package": "snap-predicates",
          "partial": "Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e against the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es \"Content-Type\" header.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Content",
          "name": "ContentType",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Content.html#ContentType",
          "type": "data"
        },
        "index": {
          "description": "Predicate against the Request Content-Type header",
          "hierarchy": "Snap Predicate Content",
          "module": "Snap.Predicate.Content",
          "name": "ContentType",
          "package": "snap-predicates",
          "partial": "Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Content",
          "name": "ContentType",
          "package": "snap-predicates",
          "signature": "ContentType t s",
          "source": "src/Snap-Predicate-Content.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Content",
          "module": "Snap.Predicate.Content",
          "name": "ContentType",
          "package": "snap-predicates",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Content.html#v:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Error",
          "name": "Error",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Error",
          "module": "Snap.Predicate.Error",
          "name": "Error",
          "package": "snap-predicates",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error type used as \u003ccode\u003eF\u003c/code\u003e meta-data in all snap predicates.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Error",
          "name": "Error",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Error.html#Error",
          "type": "data"
        },
        "index": {
          "description": "The error type used as meta-data in all snap predicates",
          "hierarchy": "Snap Predicate Error",
          "module": "Snap.Predicate.Error",
          "name": "Error",
          "package": "snap-predicates",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Error",
          "name": "Error",
          "package": "snap-predicates",
          "signature": "Error",
          "source": "src/Snap-Predicate-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Error",
          "module": "Snap.Predicate.Error",
          "name": "Error",
          "package": "snap-predicates",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional status message\n\u003c/p\u003e",
          "module": "Snap.Predicate.Error",
          "name": "_message",
          "package": "snap-predicates",
          "signature": "(Maybe ByteString)",
          "source": "src/Snap-Predicate-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "optional status message",
          "hierarchy": "Snap Predicate Error",
          "module": "Snap.Predicate.Error",
          "name": "_message",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(HTTP) status code\n\u003c/p\u003e",
          "module": "Snap.Predicate.Error",
          "name": "_status",
          "package": "snap-predicates",
          "signature": "Word",
          "source": "src/Snap-Predicate-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "HTTP status code",
          "hierarchy": "Snap Predicate Error",
          "module": "Snap.Predicate.Error",
          "name": "_status",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to construct \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e values from\n status code and status message.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Error",
          "name": "err",
          "package": "snap-predicates",
          "signature": "Word -\u003e ByteString -\u003e Error",
          "source": "src/Snap-Predicate-Error.html#err",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to construct Error values from status code and status message",
          "hierarchy": "Snap Predicate Error",
          "module": "Snap.Predicate.Error",
          "name": "err",
          "normalized": "Word-\u003eByteString-\u003eError",
          "package": "snap-predicates",
          "signature": "Word-\u003eByteString-\u003eError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Error.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Header",
          "name": "Header",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Header.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "Header",
          "package": "snap-predicates",
          "partial": "Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which is true if the request has a header with the\n given name.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "HasHdr",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Header.html#HasHdr",
          "type": "data"
        },
        "index": {
          "description": "Predicate which is true if the request has header with the given name",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "HasHdr",
          "package": "snap-predicates",
          "partial": "Has Hdr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:HasHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e which returns the first request\n header value which could be converted to the target type.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "Hdr",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Header.html#Hdr",
          "type": "data"
        },
        "index": {
          "description": "Specialisation of Header which returns the first request header value which could be converted to the target type Relies on Readable type-class for the actual conversion",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "Hdr",
          "package": "snap-predicates",
          "partial": "Hdr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:Hdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e which returns the first request\n header value which could be converted to the target type.\n If the header is not present, the provided default will be used.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "HdrDef",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Header.html#HdrDef",
          "type": "data"
        },
        "index": {
          "description": "Specialisation of Header which returns the first request header value which could be converted to the target type If the header is not present the provided default will be used Relies on Readable type-class for the actual conversion",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "HdrDef",
          "package": "snap-predicates",
          "partial": "Hdr Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:HdrDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which returns the first request header which could be\n converted to the target type wrapped in a Maybe.\n If the header is not present, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "HdrOpt",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Header.html#HdrOpt",
          "type": "data"
        },
        "index": {
          "description": "Predicate which returns the first request header which could be converted to the target type wrapped in Maybe If the header is not present Nothing will be returned Relies on Readable type-class for the actual conversion",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "HdrOpt",
          "package": "snap-predicates",
          "partial": "Hdr Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:HdrOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most generic request header predicate provided.\n It will get all request header values of \u003ccode\u003e_name\u003c/code\u003e and pass them on to\n the conversion function \u003ccode\u003e_read\u003c/code\u003e, which might either yield an error\n message or a value. If the header is not present, an optional default may be\n returned instead, if nothing is provided, the error message will be used\n when construction the 400 status.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "Header",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Header.html#Header",
          "type": "data"
        },
        "index": {
          "description": "The most generic request header predicate provided It will get all request header values of name and pass them on to the conversion function read which might either yield an error message or value If the header is not present an optional default may be returned instead if nothing is provided the error message will be used when construction the status",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "Header",
          "package": "snap-predicates",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Header",
          "name": "HasHdr",
          "package": "snap-predicates",
          "signature": "HasHdr ByteString",
          "source": "src/Snap-Predicate-Header.html#HasHdr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "HasHdr",
          "package": "snap-predicates",
          "partial": "Has Hdr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:HasHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Header",
          "name": "Hdr",
          "package": "snap-predicates",
          "signature": "Hdr ByteString",
          "source": "src/Snap-Predicate-Header.html#Hdr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "Hdr",
          "package": "snap-predicates",
          "partial": "Hdr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:Hdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Header",
          "name": "HdrDef",
          "package": "snap-predicates",
          "signature": "HdrDef ByteString a",
          "source": "src/Snap-Predicate-Header.html#HdrDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "HdrDef",
          "package": "snap-predicates",
          "partial": "Hdr Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:HdrDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Header",
          "name": "HdrOpt",
          "package": "snap-predicates",
          "signature": "HdrOpt ByteString",
          "source": "src/Snap-Predicate-Header.html#HdrOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "HdrOpt",
          "package": "snap-predicates",
          "partial": "Hdr Opt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:HdrOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Header",
          "name": "Header",
          "package": "snap-predicates",
          "signature": "Header",
          "source": "src/Snap-Predicate-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "Header",
          "package": "snap-predicates",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(optional) default value\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "_hdrDefault",
          "package": "snap-predicates",
          "signature": "(Maybe a)",
          "source": "src/Snap-Predicate-Header.html#Header",
          "type": "function"
        },
        "index": {
          "description": "optional default value",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "_hdrDefault",
          "package": "snap-predicates",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:_hdrDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest header name\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "_hdrName",
          "package": "snap-predicates",
          "signature": "ByteString",
          "source": "src/Snap-Predicate-Header.html#Header",
          "type": "function"
        },
        "index": {
          "description": "request header name",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "_hdrName",
          "package": "snap-predicates",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:_hdrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion function\n\u003c/p\u003e",
          "module": "Snap.Predicate.Header",
          "name": "_hdrRead",
          "package": "snap-predicates",
          "signature": "[ByteString] -\u003e Either ByteString a",
          "source": "src/Snap-Predicate-Header.html#Header",
          "type": "function"
        },
        "index": {
          "description": "conversion function",
          "hierarchy": "Snap Predicate Header",
          "module": "Snap.Predicate.Header",
          "name": "_hdrRead",
          "normalized": "[ByteString]-\u003eEither ByteString a",
          "package": "snap-predicates",
          "partial": "Read",
          "signature": "[ByteString]-\u003eEither ByteString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Header.html#v:_hdrRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "MediaType",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "MediaType",
          "package": "snap-predicates",
          "partial": "Media Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emedia-type and sub-type \"*\".\n\u003c/p\u003e",
          "module": "Snap.Predicate.MediaType",
          "name": "All",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#All",
          "type": "data"
        },
        "index": {
          "description": "media-type and sub-type",
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "All",
          "package": "snap-predicates",
          "partial": "All",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Application",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Application",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Application",
          "package": "snap-predicates",
          "partial": "Application",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "AtomXml",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#AtomXml",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "AtomXml",
          "package": "snap-predicates",
          "partial": "Atom Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:AtomXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Audio",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Audio",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Audio",
          "package": "snap-predicates",
          "partial": "Audio",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Audio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Css",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Css",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Css",
          "package": "snap-predicates",
          "partial": "Css",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Csv",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Csv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Csv",
          "package": "snap-predicates",
          "partial": "Csv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Encrypted",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Encrypted",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Encrypted",
          "package": "snap-predicates",
          "partial": "Encrypted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Encrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "FormData",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#FormData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "FormData",
          "package": "snap-predicates",
          "partial": "Form Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:FormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "FormUrlEncoded",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#FormUrlEncoded",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "FormUrlEncoded",
          "package": "snap-predicates",
          "partial": "Form Url Encoded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:FormUrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Gif",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Gif",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Gif",
          "package": "snap-predicates",
          "partial": "Gif",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Gif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Gzip",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Gzip",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Gzip",
          "package": "snap-predicates",
          "partial": "Gzip",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Image",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Image",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Image",
          "package": "snap-predicates",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Javascript",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Javascript",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Javascript",
          "package": "snap-predicates",
          "partial": "Javascript",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Javascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Jpeg",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Jpeg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Jpeg",
          "package": "snap-predicates",
          "partial": "Jpeg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Jpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Json",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Json",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Json",
          "package": "snap-predicates",
          "partial": "Json",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-class for converting a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a media-subtype.\n\u003c/p\u003e",
          "module": "Snap.Predicate.MediaType",
          "name": "MSubType",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#MSubType",
          "type": "class"
        },
        "index": {
          "description": "Type-class for converting ByteString to media-subtype",
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "MSubType",
          "package": "snap-predicates",
          "partial": "MSub Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:MSubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-class for converting a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a media-type.\n\u003c/p\u003e",
          "module": "Snap.Predicate.MediaType",
          "name": "MType",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#MType",
          "type": "class"
        },
        "index": {
          "description": "Type-class for converting ByteString to media-type",
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "MType",
          "package": "snap-predicates",
          "partial": "MType",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:MType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Media-type representation.\n\u003c/p\u003e",
          "module": "Snap.Predicate.MediaType",
          "name": "MediaType",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#MediaType",
          "type": "data"
        },
        "index": {
          "description": "The Media-type representation",
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "MediaType",
          "package": "snap-predicates",
          "partial": "Media Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Message",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Message",
          "package": "snap-predicates",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Mixed",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Mixed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Mixed",
          "package": "snap-predicates",
          "partial": "Mixed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Mp4",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Mp4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Mp4",
          "package": "snap-predicates",
          "partial": "Mp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Mp4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Mpeg",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Mpeg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Mpeg",
          "package": "snap-predicates",
          "partial": "Mpeg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Mpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Multipart",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Multipart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Multipart",
          "package": "snap-predicates",
          "partial": "Multipart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Multipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "OctetStream",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#OctetStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "OctetStream",
          "package": "snap-predicates",
          "partial": "Octet Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:OctetStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Ogg",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Ogg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Ogg",
          "package": "snap-predicates",
          "partial": "Ogg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Ogg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Partial",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Partial",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Partial",
          "package": "snap-predicates",
          "partial": "Partial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs12",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs12",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs12",
          "package": "snap-predicates",
          "partial": "Pkcs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Cert",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7Cert",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Cert",
          "package": "snap-predicates",
          "partial": "Pkcs Cert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7Cert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7CertRqRs",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7CertRqRs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7CertRqRs",
          "package": "snap-predicates",
          "partial": "Pkcs Cert Rq Rs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7CertRqRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Mime",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7Mime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Mime",
          "package": "snap-predicates",
          "partial": "Pkcs Mime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7Mime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Sig",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7Sig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Sig",
          "package": "snap-predicates",
          "partial": "Pkcs Sig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Pkcs7Sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Plain",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Plain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Plain",
          "package": "snap-predicates",
          "partial": "Plain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Png",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Png",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Png",
          "package": "snap-predicates",
          "partial": "Png",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Png"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Postscript",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Postscript",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Postscript",
          "package": "snap-predicates",
          "partial": "Postscript",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Postscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Protobuf",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Protobuf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Protobuf",
          "package": "snap-predicates",
          "partial": "Protobuf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Protobuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "RdfXml",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#RdfXml",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "RdfXml",
          "package": "snap-predicates",
          "partial": "Rdf Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:RdfXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "RssXml",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#RssXml",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "RssXml",
          "package": "snap-predicates",
          "partial": "Rss Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:RssXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric media-subtype.\n\u003c/p\u003e",
          "module": "Snap.Predicate.MediaType",
          "name": "SubType",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#SubType",
          "type": "data"
        },
        "index": {
          "description": "Generic media-subtype",
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "SubType",
          "package": "snap-predicates",
          "partial": "Sub Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:SubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Tar",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Tar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Tar",
          "package": "snap-predicates",
          "partial": "Tar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Tar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Text",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Text",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Text",
          "package": "snap-predicates",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Thrift",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Thrift",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Thrift",
          "package": "snap-predicates",
          "partial": "Thrift",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Thrift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Tiff",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Tiff",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Tiff",
          "package": "snap-predicates",
          "partial": "Tiff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Tiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric media-type.\n\u003c/p\u003e",
          "module": "Snap.Predicate.MediaType",
          "name": "Type",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Generic media-type",
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Type",
          "package": "snap-predicates",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Video",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Video",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Video",
          "package": "snap-predicates",
          "partial": "Video",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Video"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Vorbis",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Vorbis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Vorbis",
          "package": "snap-predicates",
          "partial": "Vorbis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Vorbis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Webm",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Webm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Webm",
          "package": "snap-predicates",
          "partial": "Webm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Webm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "XhtmlXml",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#XhtmlXml",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "XhtmlXml",
          "package": "snap-predicates",
          "partial": "Xhtml Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:XhtmlXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Xml",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-MediaType.html#Xml",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Xml",
          "package": "snap-predicates",
          "partial": "Xml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#t:Xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "All",
          "package": "snap-predicates",
          "signature": "All",
          "source": "src/Snap-Predicate-MediaType.html#All",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "All",
          "package": "snap-predicates",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Application",
          "package": "snap-predicates",
          "signature": "Application",
          "source": "src/Snap-Predicate-MediaType.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Application",
          "package": "snap-predicates",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "AtomXml",
          "package": "snap-predicates",
          "signature": "AtomXml",
          "source": "src/Snap-Predicate-MediaType.html#AtomXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "AtomXml",
          "package": "snap-predicates",
          "partial": "Atom Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:AtomXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Audio",
          "package": "snap-predicates",
          "signature": "Audio",
          "source": "src/Snap-Predicate-MediaType.html#Audio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Audio",
          "package": "snap-predicates",
          "partial": "Audio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Audio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Css",
          "package": "snap-predicates",
          "signature": "Css",
          "source": "src/Snap-Predicate-MediaType.html#Css",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Css",
          "package": "snap-predicates",
          "partial": "Css",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Csv",
          "package": "snap-predicates",
          "signature": "Csv",
          "source": "src/Snap-Predicate-MediaType.html#Csv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Csv",
          "package": "snap-predicates",
          "partial": "Csv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Encrypted",
          "package": "snap-predicates",
          "signature": "Encrypted",
          "source": "src/Snap-Predicate-MediaType.html#Encrypted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Encrypted",
          "package": "snap-predicates",
          "partial": "Encrypted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Encrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "FormData",
          "package": "snap-predicates",
          "signature": "FormData",
          "source": "src/Snap-Predicate-MediaType.html#FormData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "FormData",
          "package": "snap-predicates",
          "partial": "Form Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:FormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "FormUrlEncoded",
          "package": "snap-predicates",
          "signature": "FormUrlEncoded",
          "source": "src/Snap-Predicate-MediaType.html#FormUrlEncoded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "FormUrlEncoded",
          "package": "snap-predicates",
          "partial": "Form Url Encoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:FormUrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Gif",
          "package": "snap-predicates",
          "signature": "Gif",
          "source": "src/Snap-Predicate-MediaType.html#Gif",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Gif",
          "package": "snap-predicates",
          "partial": "Gif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Gif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Gzip",
          "package": "snap-predicates",
          "signature": "Gzip",
          "source": "src/Snap-Predicate-MediaType.html#Gzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Gzip",
          "package": "snap-predicates",
          "partial": "Gzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Image",
          "package": "snap-predicates",
          "signature": "Image",
          "source": "src/Snap-Predicate-MediaType.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Image",
          "package": "snap-predicates",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Javascript",
          "package": "snap-predicates",
          "signature": "Javascript",
          "source": "src/Snap-Predicate-MediaType.html#Javascript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Javascript",
          "package": "snap-predicates",
          "partial": "Javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Javascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Jpeg",
          "package": "snap-predicates",
          "signature": "Jpeg",
          "source": "src/Snap-Predicate-MediaType.html#Jpeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Jpeg",
          "package": "snap-predicates",
          "partial": "Jpeg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Jpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Json",
          "package": "snap-predicates",
          "signature": "Json",
          "source": "src/Snap-Predicate-MediaType.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Json",
          "package": "snap-predicates",
          "partial": "Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "MediaType",
          "package": "snap-predicates",
          "signature": "MediaType",
          "source": "src/Snap-Predicate-MediaType.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "MediaType",
          "package": "snap-predicates",
          "partial": "Media Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Message",
          "package": "snap-predicates",
          "signature": "Message",
          "source": "src/Snap-Predicate-MediaType.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Message",
          "package": "snap-predicates",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Mixed",
          "package": "snap-predicates",
          "signature": "Mixed",
          "source": "src/Snap-Predicate-MediaType.html#Mixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Mixed",
          "package": "snap-predicates",
          "partial": "Mixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Mp4",
          "package": "snap-predicates",
          "signature": "Mp4",
          "source": "src/Snap-Predicate-MediaType.html#Mp4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Mp4",
          "package": "snap-predicates",
          "partial": "Mp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Mp4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Mpeg",
          "package": "snap-predicates",
          "signature": "Mpeg",
          "source": "src/Snap-Predicate-MediaType.html#Mpeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Mpeg",
          "package": "snap-predicates",
          "partial": "Mpeg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Mpeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Multipart",
          "package": "snap-predicates",
          "signature": "Multipart",
          "source": "src/Snap-Predicate-MediaType.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Multipart",
          "package": "snap-predicates",
          "partial": "Multipart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Multipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "OctetStream",
          "package": "snap-predicates",
          "signature": "OctetStream",
          "source": "src/Snap-Predicate-MediaType.html#OctetStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "OctetStream",
          "package": "snap-predicates",
          "partial": "Octet Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:OctetStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Ogg",
          "package": "snap-predicates",
          "signature": "Ogg",
          "source": "src/Snap-Predicate-MediaType.html#Ogg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Ogg",
          "package": "snap-predicates",
          "partial": "Ogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Ogg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Partial",
          "package": "snap-predicates",
          "signature": "Partial",
          "source": "src/Snap-Predicate-MediaType.html#Partial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Partial",
          "package": "snap-predicates",
          "partial": "Partial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs12",
          "package": "snap-predicates",
          "signature": "Pkcs12",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs12",
          "package": "snap-predicates",
          "partial": "Pkcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Cert",
          "package": "snap-predicates",
          "signature": "Pkcs7Cert",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7Cert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Cert",
          "package": "snap-predicates",
          "partial": "Pkcs Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7Cert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7CertRqRs",
          "package": "snap-predicates",
          "signature": "Pkcs7CertRqRs",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7CertRqRs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7CertRqRs",
          "package": "snap-predicates",
          "partial": "Pkcs Cert Rq Rs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7CertRqRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Mime",
          "package": "snap-predicates",
          "signature": "Pkcs7Mime",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7Mime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Mime",
          "package": "snap-predicates",
          "partial": "Pkcs Mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7Mime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Sig",
          "package": "snap-predicates",
          "signature": "Pkcs7Sig",
          "source": "src/Snap-Predicate-MediaType.html#Pkcs7Sig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Pkcs7Sig",
          "package": "snap-predicates",
          "partial": "Pkcs Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Pkcs7Sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Plain",
          "package": "snap-predicates",
          "signature": "Plain",
          "source": "src/Snap-Predicate-MediaType.html#Plain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Plain",
          "package": "snap-predicates",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Png",
          "package": "snap-predicates",
          "signature": "Png",
          "source": "src/Snap-Predicate-MediaType.html#Png",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Png",
          "package": "snap-predicates",
          "partial": "Png",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Png"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Postscript",
          "package": "snap-predicates",
          "signature": "Postscript",
          "source": "src/Snap-Predicate-MediaType.html#Postscript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Postscript",
          "package": "snap-predicates",
          "partial": "Postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Postscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Protobuf",
          "package": "snap-predicates",
          "signature": "Protobuf",
          "source": "src/Snap-Predicate-MediaType.html#Protobuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Protobuf",
          "package": "snap-predicates",
          "partial": "Protobuf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Protobuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "RdfXml",
          "package": "snap-predicates",
          "signature": "RdfXml",
          "source": "src/Snap-Predicate-MediaType.html#RdfXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "RdfXml",
          "package": "snap-predicates",
          "partial": "Rdf Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:RdfXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "RssXml",
          "package": "snap-predicates",
          "signature": "RssXml",
          "source": "src/Snap-Predicate-MediaType.html#RssXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "RssXml",
          "package": "snap-predicates",
          "partial": "Rss Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:RssXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "SubType",
          "package": "snap-predicates",
          "signature": "SubType ByteString",
          "source": "src/Snap-Predicate-MediaType.html#SubType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "SubType",
          "package": "snap-predicates",
          "partial": "Sub Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:SubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Tar",
          "package": "snap-predicates",
          "signature": "Tar",
          "source": "src/Snap-Predicate-MediaType.html#Tar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Tar",
          "package": "snap-predicates",
          "partial": "Tar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Tar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Text",
          "package": "snap-predicates",
          "signature": "Text",
          "source": "src/Snap-Predicate-MediaType.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Text",
          "package": "snap-predicates",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Thrift",
          "package": "snap-predicates",
          "signature": "Thrift",
          "source": "src/Snap-Predicate-MediaType.html#Thrift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Thrift",
          "package": "snap-predicates",
          "partial": "Thrift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Thrift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Tiff",
          "package": "snap-predicates",
          "signature": "Tiff",
          "source": "src/Snap-Predicate-MediaType.html#Tiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Tiff",
          "package": "snap-predicates",
          "partial": "Tiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Tiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Type",
          "package": "snap-predicates",
          "signature": "Type ByteString",
          "source": "src/Snap-Predicate-MediaType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Type",
          "package": "snap-predicates",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Video",
          "package": "snap-predicates",
          "signature": "Video",
          "source": "src/Snap-Predicate-MediaType.html#Video",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Video",
          "package": "snap-predicates",
          "partial": "Video",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Video"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Vorbis",
          "package": "snap-predicates",
          "signature": "Vorbis",
          "source": "src/Snap-Predicate-MediaType.html#Vorbis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Vorbis",
          "package": "snap-predicates",
          "partial": "Vorbis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Vorbis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Webm",
          "package": "snap-predicates",
          "signature": "Webm",
          "source": "src/Snap-Predicate-MediaType.html#Webm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Webm",
          "package": "snap-predicates",
          "partial": "Webm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Webm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "XhtmlXml",
          "package": "snap-predicates",
          "signature": "XhtmlXml",
          "source": "src/Snap-Predicate-MediaType.html#XhtmlXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "XhtmlXml",
          "package": "snap-predicates",
          "partial": "Xhtml Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:XhtmlXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "Xml",
          "package": "snap-predicates",
          "signature": "Xml",
          "source": "src/Snap-Predicate-MediaType.html#Xml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "Xml",
          "package": "snap-predicates",
          "partial": "Xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:Xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "_params",
          "package": "snap-predicates",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Snap-Predicate-MediaType.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "_params",
          "normalized": "[(ByteString,ByteString)]",
          "package": "snap-predicates",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "_quality",
          "package": "snap-predicates",
          "signature": "Double",
          "source": "src/Snap-Predicate-MediaType.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "_quality",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "_subtype",
          "package": "snap-predicates",
          "signature": "s",
          "source": "src/Snap-Predicate-MediaType.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "_subtype",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_subtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "_type",
          "package": "snap-predicates",
          "signature": "t",
          "source": "src/Snap-Predicate-MediaType.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "_type",
          "package": "snap-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "toSubType",
          "package": "snap-predicates",
          "signature": "a -\u003e ByteString -\u003e Maybe a",
          "source": "src/Snap-Predicate-MediaType.html#toSubType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "toSubType",
          "normalized": "a-\u003eByteString-\u003eMaybe a",
          "package": "snap-predicates",
          "partial": "Sub Type",
          "signature": "a-\u003eByteString-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:toSubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.MediaType",
          "name": "toType",
          "package": "snap-predicates",
          "signature": "a -\u003e ByteString -\u003e Maybe a",
          "source": "src/Snap-Predicate-MediaType.html#toType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Predicate MediaType",
          "module": "Snap.Predicate.MediaType",
          "name": "toType",
          "normalized": "a-\u003eByteString-\u003eMaybe a",
          "package": "snap-predicates",
          "partial": "Type",
          "signature": "a-\u003eByteString-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-MediaType.html#v:toType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Param",
          "name": "Param",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Param.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "Param",
          "package": "snap-predicates",
          "partial": "Param",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which is true if the request has a parameter with the\n given name.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "HasParam",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Param.html#HasParam",
          "type": "data"
        },
        "index": {
          "description": "Predicate which is true if the request has parameter with the given name",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "HasParam",
          "package": "snap-predicates",
          "partial": "Has Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:HasParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e which returns the first request\n parameter which could be converted to the target type.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "Param",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Param.html#Param",
          "type": "data"
        },
        "index": {
          "description": "Specialisation of Parameter which returns the first request parameter which could be converted to the target type Relies on Readable type-class for the actual conversion",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "Param",
          "package": "snap-predicates",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e which returns the first request\n parameter which could be converted to the target type.\n If the parameter is not present, the provided default will be used.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "ParamDef",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Param.html#ParamDef",
          "type": "data"
        },
        "index": {
          "description": "Specialisation of Parameter which returns the first request parameter which could be converted to the target type If the parameter is not present the provided default will be used Relies on Readable type-class for the actual conversion",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "ParamDef",
          "package": "snap-predicates",
          "partial": "Param Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:ParamDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which returns the first request parameter which could be\n converted to the target type wrapped in a Maybe.\n If the parameter is not present, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n Relies on \u003ccode\u003e\u003ca\u003eReadable\u003c/a\u003e\u003c/code\u003e type-class for the actual conversion.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "ParamOpt",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Param.html#ParamOpt",
          "type": "data"
        },
        "index": {
          "description": "Predicate which returns the first request parameter which could be converted to the target type wrapped in Maybe If the parameter is not present Nothing will be returned Relies on Readable type-class for the actual conversion",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "ParamOpt",
          "package": "snap-predicates",
          "partial": "Param Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:ParamOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most generic request parameter predicate provided.\n It will get all request parameter values of \u003ccode\u003e_name\u003c/code\u003e and pass them on to\n the conversion function \u003ccode\u003e_read\u003c/code\u003e, which might either yield an error\n message or a value. If the parameter is not present, an optional default may be\n returned instead, if nothing is provided, the error message will be used\n when construction the 400 status.\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "Parameter",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Param.html#Parameter",
          "type": "data"
        },
        "index": {
          "description": "The most generic request parameter predicate provided It will get all request parameter values of name and pass them on to the conversion function read which might either yield an error message or value If the parameter is not present an optional default may be returned instead if nothing is provided the error message will be used when construction the status",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "Parameter",
          "package": "snap-predicates",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Param",
          "name": "HasParam",
          "package": "snap-predicates",
          "signature": "HasParam ByteString",
          "source": "src/Snap-Predicate-Param.html#HasParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "HasParam",
          "package": "snap-predicates",
          "partial": "Has Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:HasParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Param",
          "name": "Param",
          "package": "snap-predicates",
          "signature": "Param ByteString",
          "source": "src/Snap-Predicate-Param.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "Param",
          "package": "snap-predicates",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Param",
          "name": "ParamDef",
          "package": "snap-predicates",
          "signature": "ParamDef ByteString a",
          "source": "src/Snap-Predicate-Param.html#ParamDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "ParamDef",
          "package": "snap-predicates",
          "partial": "Param Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:ParamDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Param",
          "name": "ParamOpt",
          "package": "snap-predicates",
          "signature": "ParamOpt ByteString",
          "source": "src/Snap-Predicate-Param.html#ParamOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "ParamOpt",
          "package": "snap-predicates",
          "partial": "Param Opt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:ParamOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Param",
          "name": "Parameter",
          "package": "snap-predicates",
          "signature": "Parameter",
          "source": "src/Snap-Predicate-Param.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "Parameter",
          "package": "snap-predicates",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(optional) default value\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "_pDefault",
          "package": "snap-predicates",
          "signature": "(Maybe a)",
          "source": "src/Snap-Predicate-Param.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "optional default value",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "_pDefault",
          "package": "snap-predicates",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:_pDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest parameter name\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "_pName",
          "package": "snap-predicates",
          "signature": "ByteString",
          "source": "src/Snap-Predicate-Param.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "request parameter name",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "_pName",
          "package": "snap-predicates",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:_pName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion function\n\u003c/p\u003e",
          "module": "Snap.Predicate.Param",
          "name": "_pRead",
          "package": "snap-predicates",
          "signature": "[ByteString] -\u003e Either ByteString a",
          "source": "src/Snap-Predicate-Param.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "conversion function",
          "hierarchy": "Snap Predicate Param",
          "module": "Snap.Predicate.Param",
          "name": "_pRead",
          "normalized": "[ByteString]-\u003eEither ByteString a",
          "package": "snap-predicates",
          "partial": "Read",
          "signature": "[ByteString]-\u003eEither ByteString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Param.html#v:_pRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Tutorial",
          "name": "Tutorial",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Tutorial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Tutorial",
          "module": "Snap.Predicate.Tutorial",
          "name": "Tutorial",
          "package": "snap-predicates",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Types",
          "name": "Types",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate Types",
          "module": "Snap.Predicate.Types",
          "name": "Types",
          "package": "snap-predicates",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Types",
          "name": "CSV",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate-Types.html#CSV",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Predicate Types",
          "module": "Snap.Predicate.Types",
          "name": "CSV",
          "package": "snap-predicates",
          "partial": "CSV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Types.html#t:CSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate.Types",
          "name": "list",
          "package": "snap-predicates",
          "signature": "CSV a -\u003e [a]",
          "source": "src/Snap-Predicate-Types.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Predicate Types",
          "module": "Snap.Predicate.Types",
          "name": "list",
          "normalized": "CSV a-\u003e[a]",
          "package": "snap-predicates",
          "signature": "CSV a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate-Types.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Predicate",
          "name": "Predicate",
          "package": "snap-predicates",
          "source": "src/Snap-Predicate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Predicate",
          "module": "Snap.Predicate",
          "name": "Predicate",
          "package": "snap-predicates",
          "partial": "Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Predicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Route",
          "name": "Route",
          "package": "snap-predicates",
          "source": "src/Snap-Route.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "Route",
          "package": "snap-predicates",
          "partial": "Route",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Routes monad is used to add routing declarations via \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e or\n one of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e, etc.\n Routing declarations can then be turned into the ordinary snap format,\n i.e. \u003ccode\u003eMonadSnap m =\u003e [(ByteString, m a)]\u003c/code\u003e or into strings.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "Routes",
          "package": "snap-predicates",
          "source": "src/Snap-Route.html#Routes",
          "type": "data"
        },
        "index": {
          "description": "The Routes monad is used to add routing declarations via addRoute or one of get post etc Routing declarations can then be turned into the ordinary snap format i.e MonadSnap ByteString or into strings",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "Routes",
          "package": "snap-predicates",
          "partial": "Routes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#t:Routes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a route for some \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e and path (potentially with variable\n captures), and constrained the some \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "addRoute",
          "package": "snap-predicates",
          "signature": "Method-\u003e ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Add route for some Method and path potentially with variable captures and constrained the some Predicate",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "addRoute",
          "normalized": "Method-\u003eByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "partial": "Route",
          "signature": "Method-\u003eByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:addRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "connect",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "connect",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "connect_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "connect_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:connect_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "delete",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "delete",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "delete_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "delete_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:delete_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn route definitions into \"snapable\" format, i.e.\n Routes are grouped per path and selection evaluates routes\n against the given Snap \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "expandRoutes",
          "package": "snap-predicates",
          "signature": "Routes m () -\u003e [(ByteString, m ())]",
          "source": "src/Snap-Route.html#expandRoutes",
          "type": "function"
        },
        "index": {
          "description": "Turn route definitions into snapable format i.e Routes are grouped per path and selection evaluates routes against the given Snap Request",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "expandRoutes",
          "normalized": "Routes a()-\u003e[(ByteString,a())]",
          "package": "snap-predicates",
          "partial": "Routes",
          "signature": "Routes m()-\u003e[(ByteString,m())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:expandRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "get",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "get",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "get_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "get_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:get_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "head",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "head",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "head_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "head_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:head_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "options",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "options",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "options_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "options_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:options_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "post",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "post",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "post_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "post_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:post_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "put",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "put",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "put_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "put_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Route",
          "name": "renderErrorWith",
          "package": "snap-predicates",
          "signature": "Renderer -\u003e Routes m ()",
          "source": "src/Snap-Route.html#renderErrorWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "renderErrorWith",
          "normalized": "Renderer-\u003eRoutes a()",
          "package": "snap-predicates",
          "partial": "Error With",
          "signature": "Renderer-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:renderErrorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn route definitions into a list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "showRoutes",
          "package": "snap-predicates",
          "signature": "Routes m () -\u003e [String]",
          "source": "src/Snap-Route.html#showRoutes",
          "type": "function"
        },
        "index": {
          "description": "Turn route definitions into list of String",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "showRoutes",
          "normalized": "Routes a()-\u003e[String]",
          "package": "snap-predicates",
          "partial": "Routes",
          "signature": "Routes m()-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:showRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "trace",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (TVal p -\u003e m ())-\u003e p-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "trace",
          "normalized": "ByteString-\u003e(TVal a-\u003eb())-\u003ea-\u003eRoutes b()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(TVal p-\u003em())-\u003ep-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ca\u003eaddRoute\u003c/a\u003e\u003c/code\u003e for a specific HTTP \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e taking\n no \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e into consideration.\n\u003c/p\u003e",
          "module": "Snap.Route",
          "name": "trace_",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e (() -\u003e m ())-\u003e Routes m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of addRoute for specific HTTP Method taking no Predicate into consideration",
          "hierarchy": "Snap Route",
          "module": "Snap.Route",
          "name": "trace_",
          "normalized": "ByteString-\u003e(()-\u003ea())-\u003eRoutes a()",
          "package": "snap-predicates",
          "signature": "ByteString-\u003e(()-\u003em())-\u003eRoutes m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-predicates/docs/Snap-Route.html#v:trace_"
      }
    }
  ]
]