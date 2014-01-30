[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a type-level combinator for combining constraint constructors.\n\u003c/p\u003e\u003cp\u003eThis is useful because you can't otherwise write an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExists\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExistential\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance referencing more than one at the same time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Constraint.Combine",
        "fct-package": "exists",
        "fct-signature": "module",
        "fct-source": "src/Control-Constraint-Combine.html",
        "fct-type": "module",
        "title": "Combine"
      },
      "index": {
        "description": "This module contains type-level combinator for combining constraint constructors This is useful because you can otherwise write an Exists type or Existential instance referencing more than one at the same time",
        "hierarchy": "Control Constraint Combine",
        "module": "Control.Constraint.Combine",
        "name": "Combine",
        "normalized": "",
        "package": "exists",
        "partial": "Combine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#t::-38-:",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two constraint constructors of kind \u003ccode\u003e&#967; -\u003e \u003ccode\u003e\u003ca\u003eConstraint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, where \u003ccode\u003e&#967;\u003c/code\u003e is any kind.\n\u003c/p\u003e\u003cp\u003eThis is the same as\n\u003c/p\u003e\u003cpre\u003e type (c :&: d) a = (c a, d a)\n\u003c/pre\u003e\u003cp\u003eexcept that it can be partially applied.\n\u003c/p\u003e\u003cpre\u003e f :: ((Eq :&: Enum :&: Bounded) a) =\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003eis equivalent to\n\u003c/p\u003e\u003cpre\u003e f :: (Eq a, Enum a, Bounded a) =\u003e a -\u003e Bool\n\u003c/pre\u003e",
        "fct-module": "Control.Constraint.Combine",
        "fct-package": "exists",
        "fct-signature": "class",
        "fct-source": "src/Control-Constraint-Combine.html#%3A%26%3A",
        "fct-type": "class",
        "title": ":&:"
      },
      "index": {
        "description": "Combine two constraint constructors of kind Constraint where is any kind This is the same as type except that it can be partially applied Eq Enum Bounded Bool is equivalent to Eq Enum Bounded Bool",
        "hierarchy": "Control Constraint Combine",
        "module": "Control.Constraint.Combine",
        "name": ":&:",
        "normalized": "",
        "package": "exists",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#t:And",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Constraint.Combine",
        "fct-package": "exists",
        "fct-signature": "type",
        "fct-source": "src/Control-Constraint-Combine.html#And",
        "fct-type": "type",
        "title": "And"
      },
      "index": {
        "description": "The same as",
        "hierarchy": "Control Constraint Combine",
        "module": "Control.Constraint.Combine",
        "name": "And",
        "normalized": "",
        "package": "exists",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#t:Empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty constraint, which implies nothing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e form a type-level monoid with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as the identity element.\n\u003c/p\u003e",
        "fct-module": "Control.Constraint.Combine",
        "fct-package": "exists",
        "fct-signature": "class",
        "fct-source": "src/Control-Constraint-Combine.html#Empty",
        "fct-type": "class",
        "title": "Empty"
      },
      "index": {
        "description": "An empty constraint which implies nothing and Empty form type-level monoid with Empty as the identity element",
        "hierarchy": "Control Constraint Combine",
        "module": "Control.Constraint.Combine",
        "name": "Empty",
        "normalized": "",
        "package": "exists",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseless existential datatypes holding evidence of no constraint.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Anything",
        "fct-package": "exists",
        "fct-signature": "module",
        "fct-source": "src/Data-Anything.html",
        "fct-type": "module",
        "title": "Anything"
      },
      "index": {
        "description": "Useless existential datatypes holding evidence of no constraint",
        "hierarchy": "Data Anything",
        "module": "Data.Anything",
        "name": "Anything",
        "normalized": "",
        "package": "exists",
        "partial": "Anything",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#t:Anything",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype containing anything. You can't do anything with it.\n\u003c/p\u003e",
        "fct-module": "Data.Anything",
        "fct-package": "exists",
        "fct-signature": "data",
        "fct-source": "src/Data-Anything.html#Anything",
        "fct-type": "data",
        "title": "Anything"
      },
      "index": {
        "description": "datatype containing anything You can do anything with it",
        "hierarchy": "Data Anything",
        "module": "Data.Anything",
        "name": "Anything",
        "normalized": "",
        "package": "exists",
        "partial": "Anything",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#t:Anything1",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype containing any \u003ccode\u003e* -\u003e *\u003c/code\u003e kinded type constructor applied to \u003ccode\u003ea\u003c/code\u003e. You can't do anything with it.\n\u003c/p\u003e",
        "fct-module": "Data.Anything",
        "fct-package": "exists",
        "fct-signature": "data",
        "fct-source": "src/Data-Anything.html#Anything1",
        "fct-type": "data",
        "title": "Anything1"
      },
      "index": {
        "description": "datatype containing any kinded type constructor applied to You can do anything with it",
        "hierarchy": "Data Anything",
        "module": "Data.Anything",
        "name": "Anything1",
        "normalized": "",
        "package": "exists",
        "partial": "Anything",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#v:Anything",
      "description": {
        "fct-module": "Data.Anything",
        "fct-package": "exists",
        "fct-signature": "a -\u003e Anything",
        "fct-source": "src/Data-Anything.html#Anything",
        "fct-type": "function",
        "title": "Anything"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Anything",
        "module": "Data.Anything",
        "name": "Anything",
        "normalized": "a-\u003eAnything",
        "package": "exists",
        "partial": "Anything",
        "signature": "a-\u003eAnything"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#v:Anything1",
      "description": {
        "fct-module": "Data.Anything",
        "fct-package": "exists",
        "fct-signature": "f a -\u003e Anything1 a",
        "fct-source": "src/Data-Anything.html#Anything1",
        "fct-type": "function",
        "title": "Anything1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Anything",
        "module": "Data.Anything",
        "name": "Anything1",
        "normalized": "a b-\u003eAnything b",
        "package": "exists",
        "partial": "Anything",
        "signature": "f a-\u003eAnything a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCPS-transformed versions of \u003ccode\u003eExists\u003c/code\u003e and \u003ccode\u003eExists1\u003c/code\u003e, provided for completeness and curiosity.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "module",
        "fct-source": "src/Data-Exists-CPS.html",
        "fct-type": "module",
        "title": "CPS"
      },
      "index": {
        "description": "CPS-transformed versions of Exists and Exists1 provided for completeness and curiosity",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "CPS",
        "normalized": "",
        "package": "exists",
        "partial": "CPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#t:Exists",
      "description": {
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Exists-CPS.html#Exists",
        "fct-type": "newtype",
        "title": "Exists"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "Exists",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#t:Exists1",
      "description": {
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Exists-CPS.html#Exists1",
        "fct-type": "newtype",
        "title": "Exists1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "Exists1",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:Exists",
      "description": {
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "Exists",
        "fct-source": "src/Data-Exists-CPS.html#Exists",
        "fct-type": "function",
        "title": "Exists"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "Exists",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:Exists1",
      "description": {
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "Exists1",
        "fct-source": "src/Data-Exists-CPS.html#Exists1",
        "fct-type": "function",
        "title": "Exists1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "Exists1",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:withExists",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "a -\u003e r) -\u003e r",
        "fct-source": "src/Data-Exists-CPS.html#Exists",
        "fct-type": "function",
        "title": "withExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "withExists",
        "normalized": "a-\u003eb)-\u003eb",
        "package": "exists",
        "partial": "Exists",
        "signature": "a-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:withExists1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Exists.CPS",
        "fct-package": "exists",
        "fct-signature": "f a -\u003e r) -\u003e r",
        "fct-source": "src/Data-Exists-CPS.html#Exists1",
        "fct-type": "function",
        "title": "withExists1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists CPS",
        "module": "Data.Exists.CPS",
        "name": "withExists1",
        "normalized": "a b-\u003ec)-\u003ec",
        "package": "exists",
        "partial": "Exists",
        "signature": "f a-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault functions which can be used as method implementations when writing type class instances for existential datatypes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "module",
        "fct-source": "src/Data-Exists-Defaults.html",
        "fct-type": "module",
        "title": "Defaults"
      },
      "index": {
        "description": "Default functions which can be used as method implementations when writing type class instances for existential datatypes",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "Defaults",
        "normalized": "",
        "package": "exists",
        "partial": "Defaults",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:contramapDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e b) -\u003e e b -\u003e e a",
        "fct-source": "src/Data-Exists-Defaults.html#contramapDefault",
        "fct-type": "function",
        "title": "contramapDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "contramapDefault",
        "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003eb)-\u003ee b-\u003ee a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:fmapDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e b) -\u003e e a -\u003e e b",
        "fct-source": "src/Data-Exists-Defaults.html#fmapDefault",
        "fct-type": "function",
        "title": "fmapDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "fmapDefault",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003eb)-\u003ee a-\u003ee b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "e m -\u003e m",
        "fct-source": "src/Data-Exists-Defaults.html#foldDefault",
        "fct-type": "function",
        "title": "foldDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "foldDefault",
        "normalized": "a b-\u003eb",
        "package": "exists",
        "partial": "Default",
        "signature": "e m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldMapDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e m) -\u003e e a -\u003e m",
        "fct-source": "src/Data-Exists-Defaults.html#foldMapDefault",
        "fct-type": "function",
        "title": "foldMapDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "foldMapDefault",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "exists",
        "partial": "Map Default",
        "signature": "(a-\u003em)-\u003ee a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldl1Default",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e e a -\u003e a",
        "fct-source": "src/Data-Exists-Defaults.html#foldl1Default",
        "fct-type": "function",
        "title": "foldl1Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "foldl1Default",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003ea-\u003ea)-\u003ee a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldlDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e e b -\u003e a",
        "fct-source": "src/Data-Exists-Defaults.html#foldlDefault",
        "fct-type": "function",
        "title": "foldlDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "foldlDefault",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003ee b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldr1Default",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e e a -\u003e a",
        "fct-source": "src/Data-Exists-Defaults.html#foldr1Default",
        "fct-type": "function",
        "title": "foldr1Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "foldr1Default",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003ea-\u003ea)-\u003ee a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldrDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e e a -\u003e b",
        "fct-source": "src/Data-Exists-Defaults.html#foldrDefault",
        "fct-type": "function",
        "title": "foldrDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "foldrDefault",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ee a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:mapMDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e m b) -\u003e e a -\u003e m (e b)",
        "fct-source": "src/Data-Exists-Defaults.html#mapMDefault",
        "fct-type": "function",
        "title": "mapMDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "mapMDefault",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "exists",
        "partial": "MDefault",
        "signature": "(a-\u003em b)-\u003ee a-\u003em(e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:sequenceADefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "e (f a) -\u003e f (e a)",
        "fct-source": "src/Data-Exists-Defaults.html#sequenceADefault",
        "fct-type": "function",
        "title": "sequenceADefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "sequenceADefault",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "exists",
        "partial": "ADefault",
        "signature": "e(f a)-\u003ef(e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:sequenceDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "e (m a) -\u003e m (e a)",
        "fct-source": "src/Data-Exists-Defaults.html#sequenceDefault",
        "fct-type": "function",
        "title": "sequenceDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "sequenceDefault",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "exists",
        "partial": "Default",
        "signature": "e(m a)-\u003em(e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:showDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "e -\u003e String",
        "fct-source": "src/Data-Exists-Defaults.html#showDefault",
        "fct-type": "function",
        "title": "showDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "showDefault",
        "normalized": "a-\u003eString",
        "package": "exists",
        "partial": "Default",
        "signature": "e-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:showsPrecDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "Int -\u003e e -\u003e ShowS",
        "fct-source": "src/Data-Exists-Defaults.html#showsPrecDefault",
        "fct-type": "function",
        "title": "showsPrecDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "showsPrecDefault",
        "normalized": "Int-\u003ea-\u003eShowS",
        "package": "exists",
        "partial": "Prec Default",
        "signature": "Int-\u003ee-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:traverseDefault",
      "description": {
        "fct-module": "Data.Exists.Defaults",
        "fct-package": "exists",
        "fct-signature": "(a -\u003e f b) -\u003e e a -\u003e f (e b)",
        "fct-source": "src/Data-Exists-Defaults.html#traverseDefault",
        "fct-type": "function",
        "title": "traverseDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists Defaults",
        "module": "Data.Exists.Defaults",
        "name": "traverseDefault",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "exists",
        "partial": "Default",
        "signature": "(a-\u003ef b)-\u003ee a-\u003ef(e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExistential datatypes holding evidence of constraints, and type classes for existential datatypes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "module",
        "fct-source": "src/Data-Exists.html",
        "fct-type": "module",
        "title": "Exists"
      },
      "index": {
        "description": "Existential datatypes holding evidence of constraints and type classes for existential datatypes",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Exists",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Constraint",
      "description": {
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Constraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Constraint",
        "normalized": "",
        "package": "exists",
        "partial": "Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Existential",
      "description": {
        "fct-descr": "\u003cp\u003eA type class to abstract over existential datatypes.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e data EShow where\n      EShow :: Show a =\u003e a -\u003e EShow\n\n instance Existential EShow where\n     type ConstraintOf EShow = Show\n     exists = EShow\n     apply f (EShow a) = f a\n\n foo :: EShow\n foo = exists (Just 9 :: Maybe Int)\n\n main = apply print foo -- prints \"Just 9\"\n\u003c/pre\u003e\u003cp\u003eNote that had we given \u003ccode\u003efoo\u003c/code\u003e the type signature\n\u003c/p\u003e\u003cpre\u003e foo :: (Existential e, ConstraintOf e ~ Show) =\u003e e\n\u003c/pre\u003e\u003cp\u003eGHC would have given us an error message, because the instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExistential\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to use would have been ambiguous. (The \u003ccode\u003e\u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003eexists\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e problem is the same as the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e problem.)\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "class",
        "fct-source": "src/Data-Exists-Internal.html#Existential",
        "fct-type": "class",
        "title": "Existential"
      },
      "index": {
        "description": "type class to abstract over existential datatypes Example data EShow where EShow Show EShow instance Existential EShow where type ConstraintOf EShow Show exists EShow apply EShow foo EShow foo exists Just Maybe Int main apply print foo prints Just Note that had we given foo the type signature foo Existential ConstraintOf Show GHC would have given us an error message because the instance of Existential to use would have been ambiguous The apply exists problem is the same as the show read problem",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Existential",
        "normalized": "",
        "package": "exists",
        "partial": "Existential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Existential1",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExistential\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for kind \u003ccode\u003e* -\u003e *\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "class",
        "fct-source": "src/Data-Exists-Internal.html#Existential1",
        "fct-type": "class",
        "title": "Existential1"
      },
      "index": {
        "description": "version of Existential for kind",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Existential1",
        "normalized": "",
        "package": "exists",
        "partial": "Existential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:ExistentialWith",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for convenience.\n\u003c/p\u003e\u003cpre\u003e foo :: ExistentialWith Show e =\u003e e -\u003e IO ()\n\u003c/pre\u003e\u003cp\u003eis equivalent to\n\u003c/p\u003e\u003cpre\u003e foo :: (Existential e, ConstraintOf e ~ Show) =\u003e e -\u003e IO ()\n\u003c/pre\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "class",
        "fct-source": "src/Data-Exists-Internal.html#ExistentialWith",
        "fct-type": "class",
        "title": "ExistentialWith"
      },
      "index": {
        "description": "An alias for convenience foo ExistentialWith Show IO is equivalent to foo Existential ConstraintOf Show IO",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "ExistentialWith",
        "normalized": "",
        "package": "exists",
        "partial": "Existential With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:ExistentialWith1",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for convenience. A version of \u003ccode\u003e\u003ca\u003eExistentialWith\u003c/a\u003e\u003c/code\u003e for kind \u003ccode\u003e* -\u003e *\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "class",
        "fct-source": "src/Data-Exists-Internal.html#ExistentialWith1",
        "fct-type": "class",
        "title": "ExistentialWith1"
      },
      "index": {
        "description": "An alias for convenience version of ExistentialWith for kind",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "ExistentialWith1",
        "normalized": "",
        "package": "exists",
        "partial": "Existential With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Exists",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype which holds a value of a type satisfying the constraint \u003ccode\u003ec\u003c/code\u003e, hiding the type, and evidence for the constraint, so that it can be retrieved by pattern matching later.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e foo :: Exists Show\n foo = Exists (Just 9 :: Maybe Int)\n\n printExists :: Exists Show -\u003e IO ()\n printExists (Exists e) = print e\n\n main = printExists foo -- prints \"Just 9\"\n\u003c/pre\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "data",
        "fct-source": "src/Data-Exists-Internal.html#Exists",
        "fct-type": "data",
        "title": "Exists"
      },
      "index": {
        "description": "datatype which holds value of type satisfying the constraint hiding the type and evidence for the constraint so that it can be retrieved by pattern matching later Example foo Exists Show foo Exists Just Maybe Int printExists Exists Show IO printExists Exists print main printExists foo prints Just",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Exists",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Exists1",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e* -\u003e *\u003c/code\u003e kinded version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExists\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e which holds a value of a type constructor applied to a type, hiding the type constructor, and evidence for a constraint on the type constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "data",
        "fct-source": "src/Data-Exists-Internal.html#Exists1",
        "fct-type": "data",
        "title": "Exists1"
      },
      "index": {
        "description": "kinded version of Exists which holds value of type constructor applied to type hiding the type constructor and evidence for constraint on the type constructor",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Exists1",
        "normalized": "",
        "package": "exists",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:Exists",
      "description": {
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "a -\u003e Exists c",
        "fct-source": "src/Data-Exists-Internal.html#Exists",
        "fct-type": "function",
        "title": "Exists"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Exists",
        "normalized": "a-\u003eExists b",
        "package": "exists",
        "partial": "Exists",
        "signature": "a-\u003eExists c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:Exists1",
      "description": {
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "f a -\u003e Exists1 c a",
        "fct-source": "src/Data-Exists-Internal.html#Exists1",
        "fct-type": "function",
        "title": "Exists1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "Exists1",
        "normalized": "a b-\u003eExists c b",
        "package": "exists",
        "partial": "Exists",
        "signature": "f a-\u003eExists c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function requiring the constraint to the held value.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "a -\u003e r) -\u003e e -\u003e r",
        "fct-source": "src/Data-Exists-Internal.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "Apply function requiring the constraint to the held value",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "apply",
        "normalized": "a-\u003eb)-\u003ec-\u003eb",
        "package": "exists",
        "partial": "",
        "signature": "a-\u003er)-\u003ee-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:apply1",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function requiring the constraint to the held value.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "f a -\u003e r) -\u003e e a -\u003e r",
        "fct-source": "src/Data-Exists-Internal.html#apply1",
        "fct-type": "method",
        "title": "apply1"
      },
      "index": {
        "description": "Apply function requiring the constraint to the held value",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "apply1",
        "normalized": "a b-\u003ec)-\u003ed b-\u003ec",
        "package": "exists",
        "partial": "",
        "signature": "f a-\u003er)-\u003ee a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:exists",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct \u003ccode\u003ee\u003c/code\u003e from a value of a type satisfying the constraint.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "a -\u003e e",
        "fct-source": "src/Data-Exists-Internal.html#exists",
        "fct-type": "method",
        "title": "exists"
      },
      "index": {
        "description": "Construct from value of type satisfying the constraint",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "exists",
        "normalized": "a-\u003eb",
        "package": "exists",
        "partial": "",
        "signature": "a-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:exists1",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct \u003ccode\u003ee\u003c/code\u003e from a value of a type constructor applied to a type, where the type constructor satisfies the constraint.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "f a -\u003e e a",
        "fct-source": "src/Data-Exists-Internal.html#exists1",
        "fct-type": "method",
        "title": "exists1"
      },
      "index": {
        "description": "Construct from value of type constructor applied to type where the type constructor satisfies the constraint",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "exists1",
        "normalized": "a b-\u003ec b",
        "package": "exists",
        "partial": "",
        "signature": "f a-\u003ee a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate between different existential datatypes holding evidence for the same constraint.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "e1 -\u003e e2",
        "fct-source": "src/Data-Exists-Internal.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Translate between different existential datatypes holding evidence for the same constraint",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "translate",
        "normalized": "a-\u003ea",
        "package": "exists",
        "partial": "",
        "signature": "e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:translate1",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate between different existential datatypes holding evidence for the same constraint on a \u003ccode\u003e* -\u003e *\u003c/code\u003e kinded type constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Exists",
        "fct-package": "exists",
        "fct-signature": "e1 a -\u003e e2 a",
        "fct-source": "src/Data-Exists-Internal.html#translate1",
        "fct-type": "function",
        "title": "translate1"
      },
      "index": {
        "description": "Translate between different existential datatypes holding evidence for the same constraint on kinded type constructor",
        "hierarchy": "Data Exists",
        "module": "Data.Exists",
        "name": "translate1",
        "normalized": "a b-\u003ea b",
        "package": "exists",
        "partial": "",
        "signature": "e a-\u003ee a"
      }
    }
  }
]