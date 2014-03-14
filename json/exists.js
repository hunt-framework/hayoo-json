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
        "word": "exists"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a type-level combinator for combining constraint constructors.\n\u003c/p\u003e\u003cp\u003eThis is useful because you can't otherwise write an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExists\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExistential\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance referencing more than one at the same time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Constraint.Combine",
          "name": "Combine",
          "package": "exists",
          "source": "src/Control-Constraint-Combine.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains type-level combinator for combining constraint constructors This is useful because you can otherwise write an Exists type or Existential instance referencing more than one at the same time",
          "hierarchy": "Control Constraint Combine",
          "module": "Control.Constraint.Combine",
          "name": "Combine",
          "package": "exists",
          "partial": "Combine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two constraint constructors of kind \u003ccode\u003e&#967; -\u003e \u003ccode\u003e\u003ca\u003eConstraint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, where \u003ccode\u003e&#967;\u003c/code\u003e is any kind.\n\u003c/p\u003e\u003cp\u003eThis is the same as\n\u003c/p\u003e\u003cpre\u003e type (c :&: d) a = (c a, d a)\n\u003c/pre\u003e\u003cp\u003eexcept that it can be partially applied.\n\u003c/p\u003e\u003cpre\u003e f :: ((Eq :&: Enum :&: Bounded) a) =\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003eis equivalent to\n\u003c/p\u003e\u003cpre\u003e f :: (Eq a, Enum a, Bounded a) =\u003e a -\u003e Bool\n\u003c/pre\u003e",
          "module": "Control.Constraint.Combine",
          "name": ":&:",
          "package": "exists",
          "source": "src/Control-Constraint-Combine.html#%3A%26%3A",
          "type": "class"
        },
        "index": {
          "description": "Combine two constraint constructors of kind Constraint where is any kind This is the same as type except that it can be partially applied Eq Enum Bounded Bool is equivalent to Eq Enum Bounded Bool",
          "hierarchy": "Control Constraint Combine",
          "module": "Control.Constraint.Combine",
          "name": ":&:",
          "package": "exists",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#t::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Constraint.Combine",
          "name": "And",
          "package": "exists",
          "source": "src/Control-Constraint-Combine.html#And",
          "type": "type"
        },
        "index": {
          "description": "The same as",
          "hierarchy": "Control Constraint Combine",
          "module": "Control.Constraint.Combine",
          "name": "And",
          "package": "exists",
          "partial": "And",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#t:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty constraint, which implies nothing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e form a type-level monoid with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as the identity element.\n\u003c/p\u003e",
          "module": "Control.Constraint.Combine",
          "name": "Empty",
          "package": "exists",
          "source": "src/Control-Constraint-Combine.html#Empty",
          "type": "class"
        },
        "index": {
          "description": "An empty constraint which implies nothing and Empty form type-level monoid with Empty as the identity element",
          "hierarchy": "Control Constraint Combine",
          "module": "Control.Constraint.Combine",
          "name": "Empty",
          "package": "exists",
          "partial": "Empty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Control-Constraint-Combine.html#t:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseless existential datatypes holding evidence of no constraint.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Anything",
          "name": "Anything",
          "package": "exists",
          "source": "src/Data-Anything.html",
          "type": "module"
        },
        "index": {
          "description": "Useless existential datatypes holding evidence of no constraint",
          "hierarchy": "Data Anything",
          "module": "Data.Anything",
          "name": "Anything",
          "package": "exists",
          "partial": "Anything",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype containing anything. You can't do anything with it.\n\u003c/p\u003e",
          "module": "Data.Anything",
          "name": "Anything",
          "package": "exists",
          "source": "src/Data-Anything.html#Anything",
          "type": "data"
        },
        "index": {
          "description": "datatype containing anything You can do anything with it",
          "hierarchy": "Data Anything",
          "module": "Data.Anything",
          "name": "Anything",
          "package": "exists",
          "partial": "Anything",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#t:Anything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype containing any \u003ccode\u003e* -\u003e *\u003c/code\u003e kinded type constructor applied to \u003ccode\u003ea\u003c/code\u003e. You can't do anything with it.\n\u003c/p\u003e",
          "module": "Data.Anything",
          "name": "Anything1",
          "package": "exists",
          "source": "src/Data-Anything.html#Anything1",
          "type": "data"
        },
        "index": {
          "description": "datatype containing any kinded type constructor applied to You can do anything with it",
          "hierarchy": "Data Anything",
          "module": "Data.Anything",
          "name": "Anything1",
          "package": "exists",
          "partial": "Anything",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#t:Anything1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Anything",
          "name": "Anything",
          "package": "exists",
          "signature": "a -\u003e Anything",
          "source": "src/Data-Anything.html#Anything",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Anything",
          "module": "Data.Anything",
          "name": "Anything",
          "normalized": "a-\u003eAnything",
          "package": "exists",
          "partial": "Anything",
          "signature": "a-\u003eAnything",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#v:Anything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Anything",
          "name": "Anything1",
          "package": "exists",
          "signature": "f a -\u003e Anything1 a",
          "source": "src/Data-Anything.html#Anything1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Anything",
          "module": "Data.Anything",
          "name": "Anything1",
          "normalized": "a b-\u003eAnything b",
          "package": "exists",
          "partial": "Anything",
          "signature": "f a-\u003eAnything a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Anything.html#v:Anything1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCPS-transformed versions of \u003ccode\u003eExists\u003c/code\u003e and \u003ccode\u003eExists1\u003c/code\u003e, provided for completeness and curiosity.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Exists.CPS",
          "name": "CPS",
          "package": "exists",
          "source": "src/Data-Exists-CPS.html",
          "type": "module"
        },
        "index": {
          "description": "CPS-transformed versions of Exists and Exists1 provided for completeness and curiosity",
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "CPS",
          "package": "exists",
          "partial": "CPS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.CPS",
          "name": "Exists",
          "package": "exists",
          "source": "src/Data-Exists-CPS.html#Exists",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "Exists",
          "package": "exists",
          "partial": "Exists",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#t:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.CPS",
          "name": "Exists1",
          "package": "exists",
          "source": "src/Data-Exists-CPS.html#Exists1",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "Exists1",
          "package": "exists",
          "partial": "Exists",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#t:Exists1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.CPS",
          "name": "Exists",
          "package": "exists",
          "signature": "Exists",
          "source": "src/Data-Exists-CPS.html#Exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "Exists",
          "package": "exists",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.CPS",
          "name": "Exists1",
          "package": "exists",
          "signature": "Exists1",
          "source": "src/Data-Exists-CPS.html#Exists1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "Exists1",
          "package": "exists",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:Exists1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.CPS",
          "name": "withExists",
          "package": "exists",
          "signature": "a -\u003e r) -\u003e r",
          "source": "src/Data-Exists-CPS.html#Exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "withExists",
          "normalized": "a-\u003eb)-\u003eb",
          "package": "exists",
          "partial": "Exists",
          "signature": "a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:withExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.CPS",
          "name": "withExists1",
          "package": "exists",
          "signature": "f a -\u003e r) -\u003e r",
          "source": "src/Data-Exists-CPS.html#Exists1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists CPS",
          "module": "Data.Exists.CPS",
          "name": "withExists1",
          "normalized": "a b-\u003ec)-\u003ec",
          "package": "exists",
          "partial": "Exists",
          "signature": "f a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-CPS.html#v:withExists1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault functions which can be used as method implementations when writing type class instances for existential datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Exists.Defaults",
          "name": "Defaults",
          "package": "exists",
          "source": "src/Data-Exists-Defaults.html",
          "type": "module"
        },
        "index": {
          "description": "Default functions which can be used as method implementations when writing type class instances for existential datatypes",
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "Defaults",
          "package": "exists",
          "partial": "Defaults",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "contramapDefault",
          "package": "exists",
          "signature": "(a -\u003e b) -\u003e e b -\u003e e a",
          "source": "src/Data-Exists-Defaults.html#contramapDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "contramapDefault",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003eb)-\u003ee b-\u003ee a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:contramapDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "fmapDefault",
          "package": "exists",
          "signature": "(a -\u003e b) -\u003e e a -\u003e e b",
          "source": "src/Data-Exists-Defaults.html#fmapDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "fmapDefault",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003eb)-\u003ee a-\u003ee b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:fmapDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "foldDefault",
          "package": "exists",
          "signature": "e m -\u003e m",
          "source": "src/Data-Exists-Defaults.html#foldDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "foldDefault",
          "normalized": "a b-\u003eb",
          "package": "exists",
          "partial": "Default",
          "signature": "e m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "foldMapDefault",
          "package": "exists",
          "signature": "(a -\u003e m) -\u003e e a -\u003e m",
          "source": "src/Data-Exists-Defaults.html#foldMapDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "foldMapDefault",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "exists",
          "partial": "Map Default",
          "signature": "(a-\u003em)-\u003ee a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldMapDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "foldl1Default",
          "package": "exists",
          "signature": "(a -\u003e a -\u003e a) -\u003e e a -\u003e a",
          "source": "src/Data-Exists-Defaults.html#foldl1Default",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "foldl1Default",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003ea-\u003ea)-\u003ee a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldl1Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "foldlDefault",
          "package": "exists",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e e b -\u003e a",
          "source": "src/Data-Exists-Defaults.html#foldlDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "foldlDefault",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003ee b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldlDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "foldr1Default",
          "package": "exists",
          "signature": "(a -\u003e a -\u003e a) -\u003e e a -\u003e a",
          "source": "src/Data-Exists-Defaults.html#foldr1Default",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "foldr1Default",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003ea-\u003ea)-\u003ee a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldr1Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "foldrDefault",
          "package": "exists",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e e a -\u003e b",
          "source": "src/Data-Exists-Defaults.html#foldrDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "foldrDefault",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ee a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:foldrDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "mapMDefault",
          "package": "exists",
          "signature": "(a -\u003e m b) -\u003e e a -\u003e m (e b)",
          "source": "src/Data-Exists-Defaults.html#mapMDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "mapMDefault",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "exists",
          "partial": "MDefault",
          "signature": "(a-\u003em b)-\u003ee a-\u003em(e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:mapMDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "sequenceADefault",
          "package": "exists",
          "signature": "e (f a) -\u003e f (e a)",
          "source": "src/Data-Exists-Defaults.html#sequenceADefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "sequenceADefault",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "exists",
          "partial": "ADefault",
          "signature": "e(f a)-\u003ef(e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:sequenceADefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "sequenceDefault",
          "package": "exists",
          "signature": "e (m a) -\u003e m (e a)",
          "source": "src/Data-Exists-Defaults.html#sequenceDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "sequenceDefault",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "exists",
          "partial": "Default",
          "signature": "e(m a)-\u003em(e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:sequenceDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "showDefault",
          "package": "exists",
          "signature": "e -\u003e String",
          "source": "src/Data-Exists-Defaults.html#showDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "showDefault",
          "normalized": "a-\u003eString",
          "package": "exists",
          "partial": "Default",
          "signature": "e-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:showDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "showsPrecDefault",
          "package": "exists",
          "signature": "Int -\u003e e -\u003e ShowS",
          "source": "src/Data-Exists-Defaults.html#showsPrecDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "showsPrecDefault",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "exists",
          "partial": "Prec Default",
          "signature": "Int-\u003ee-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:showsPrecDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists.Defaults",
          "name": "traverseDefault",
          "package": "exists",
          "signature": "(a -\u003e f b) -\u003e e a -\u003e f (e b)",
          "source": "src/Data-Exists-Defaults.html#traverseDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists Defaults",
          "module": "Data.Exists.Defaults",
          "name": "traverseDefault",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "exists",
          "partial": "Default",
          "signature": "(a-\u003ef b)-\u003ee a-\u003ef(e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists-Defaults.html#v:traverseDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExistential datatypes holding evidence of constraints, and type classes for existential datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Exists",
          "name": "Exists",
          "package": "exists",
          "source": "src/Data-Exists.html",
          "type": "module"
        },
        "index": {
          "description": "Existential datatypes holding evidence of constraints and type classes for existential datatypes",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Exists",
          "package": "exists",
          "partial": "Exists",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists",
          "name": "Constraint",
          "package": "exists",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Constraint",
          "package": "exists",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class to abstract over existential datatypes.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e data EShow where\n      EShow :: Show a =\u003e a -\u003e EShow\n\n instance Existential EShow where\n     type ConstraintOf EShow = Show\n     exists = EShow\n     apply f (EShow a) = f a\n\n foo :: EShow\n foo = exists (Just 9 :: Maybe Int)\n\n main = apply print foo -- prints \"Just 9\"\n\u003c/pre\u003e\u003cp\u003eNote that had we given \u003ccode\u003efoo\u003c/code\u003e the type signature\n\u003c/p\u003e\u003cpre\u003e foo :: (Existential e, ConstraintOf e ~ Show) =\u003e e\n\u003c/pre\u003e\u003cp\u003eGHC would have given us an error message, because the instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExistential\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to use would have been ambiguous. (The \u003ccode\u003e\u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003eexists\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e problem is the same as the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e problem.)\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "Existential",
          "package": "exists",
          "source": "src/Data-Exists-Internal.html#Existential",
          "type": "class"
        },
        "index": {
          "description": "type class to abstract over existential datatypes Example data EShow where EShow Show EShow instance Existential EShow where type ConstraintOf EShow Show exists EShow apply EShow foo EShow foo exists Just Maybe Int main apply print foo prints Just Note that had we given foo the type signature foo Existential ConstraintOf Show GHC would have given us an error message because the instance of Existential to use would have been ambiguous The apply exists problem is the same as the show read problem",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Existential",
          "package": "exists",
          "partial": "Existential",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Existential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExistential\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for kind \u003ccode\u003e* -\u003e *\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "Existential1",
          "package": "exists",
          "source": "src/Data-Exists-Internal.html#Existential1",
          "type": "class"
        },
        "index": {
          "description": "version of Existential for kind",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Existential1",
          "package": "exists",
          "partial": "Existential",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Existential1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for convenience.\n\u003c/p\u003e\u003cpre\u003e foo :: ExistentialWith Show e =\u003e e -\u003e IO ()\n\u003c/pre\u003e\u003cp\u003eis equivalent to\n\u003c/p\u003e\u003cpre\u003e foo :: (Existential e, ConstraintOf e ~ Show) =\u003e e -\u003e IO ()\n\u003c/pre\u003e",
          "module": "Data.Exists",
          "name": "ExistentialWith",
          "package": "exists",
          "source": "src/Data-Exists-Internal.html#ExistentialWith",
          "type": "class"
        },
        "index": {
          "description": "An alias for convenience foo ExistentialWith Show IO is equivalent to foo Existential ConstraintOf Show IO",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "ExistentialWith",
          "package": "exists",
          "partial": "Existential With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:ExistentialWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for convenience. A version of \u003ccode\u003e\u003ca\u003eExistentialWith\u003c/a\u003e\u003c/code\u003e for kind \u003ccode\u003e* -\u003e *\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "ExistentialWith1",
          "package": "exists",
          "source": "src/Data-Exists-Internal.html#ExistentialWith1",
          "type": "class"
        },
        "index": {
          "description": "An alias for convenience version of ExistentialWith for kind",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "ExistentialWith1",
          "package": "exists",
          "partial": "Existential With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:ExistentialWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype which holds a value of a type satisfying the constraint \u003ccode\u003ec\u003c/code\u003e, hiding the type, and evidence for the constraint, so that it can be retrieved by pattern matching later.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e foo :: Exists Show\n foo = Exists (Just 9 :: Maybe Int)\n\n printExists :: Exists Show -\u003e IO ()\n printExists (Exists e) = print e\n\n main = printExists foo -- prints \"Just 9\"\n\u003c/pre\u003e",
          "module": "Data.Exists",
          "name": "Exists",
          "package": "exists",
          "source": "src/Data-Exists-Internal.html#Exists",
          "type": "data"
        },
        "index": {
          "description": "datatype which holds value of type satisfying the constraint hiding the type and evidence for the constraint so that it can be retrieved by pattern matching later Example foo Exists Show foo Exists Just Maybe Int printExists Exists Show IO printExists Exists print main printExists foo prints Just",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Exists",
          "package": "exists",
          "partial": "Exists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e* -\u003e *\u003c/code\u003e kinded version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExists\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e which holds a value of a type constructor applied to a type, hiding the type constructor, and evidence for a constraint on the type constructor.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "Exists1",
          "package": "exists",
          "source": "src/Data-Exists-Internal.html#Exists1",
          "type": "data"
        },
        "index": {
          "description": "kinded version of Exists which holds value of type constructor applied to type hiding the type constructor and evidence for constraint on the type constructor",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Exists1",
          "package": "exists",
          "partial": "Exists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#t:Exists1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists",
          "name": "Exists",
          "package": "exists",
          "signature": "a -\u003e Exists c",
          "source": "src/Data-Exists-Internal.html#Exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Exists",
          "normalized": "a-\u003eExists b",
          "package": "exists",
          "partial": "Exists",
          "signature": "a-\u003eExists c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Exists",
          "name": "Exists1",
          "package": "exists",
          "signature": "f a -\u003e Exists1 c a",
          "source": "src/Data-Exists-Internal.html#Exists1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "Exists1",
          "normalized": "a b-\u003eExists c b",
          "package": "exists",
          "partial": "Exists",
          "signature": "f a-\u003eExists c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:Exists1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function requiring the constraint to the held value.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "apply",
          "package": "exists",
          "signature": "a -\u003e r) -\u003e e -\u003e r",
          "source": "src/Data-Exists-Internal.html#apply",
          "type": "method"
        },
        "index": {
          "description": "Apply function requiring the constraint to the held value",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "apply",
          "normalized": "a-\u003eb)-\u003ec-\u003eb",
          "package": "exists",
          "signature": "a-\u003er)-\u003ee-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function requiring the constraint to the held value.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "apply1",
          "package": "exists",
          "signature": "f a -\u003e r) -\u003e e a -\u003e r",
          "source": "src/Data-Exists-Internal.html#apply1",
          "type": "method"
        },
        "index": {
          "description": "Apply function requiring the constraint to the held value",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "apply1",
          "normalized": "a b-\u003ec)-\u003ed b-\u003ec",
          "package": "exists",
          "signature": "f a-\u003er)-\u003ee a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:apply1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct \u003ccode\u003ee\u003c/code\u003e from a value of a type satisfying the constraint.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "exists",
          "package": "exists",
          "signature": "a -\u003e e",
          "source": "src/Data-Exists-Internal.html#exists",
          "type": "method"
        },
        "index": {
          "description": "Construct from value of type satisfying the constraint",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "exists",
          "normalized": "a-\u003eb",
          "package": "exists",
          "signature": "a-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct \u003ccode\u003ee\u003c/code\u003e from a value of a type constructor applied to a type, where the type constructor satisfies the constraint.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "exists1",
          "package": "exists",
          "signature": "f a -\u003e e a",
          "source": "src/Data-Exists-Internal.html#exists1",
          "type": "method"
        },
        "index": {
          "description": "Construct from value of type constructor applied to type where the type constructor satisfies the constraint",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "exists1",
          "normalized": "a b-\u003ec b",
          "package": "exists",
          "signature": "f a-\u003ee a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:exists1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate between different existential datatypes holding evidence for the same constraint.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "translate",
          "package": "exists",
          "signature": "e1 -\u003e e2",
          "source": "src/Data-Exists-Internal.html#translate",
          "type": "function"
        },
        "index": {
          "description": "Translate between different existential datatypes holding evidence for the same constraint",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "translate",
          "normalized": "a-\u003ea",
          "package": "exists",
          "signature": "e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate between different existential datatypes holding evidence for the same constraint on a \u003ccode\u003e* -\u003e *\u003c/code\u003e kinded type constructor.\n\u003c/p\u003e",
          "module": "Data.Exists",
          "name": "translate1",
          "package": "exists",
          "signature": "e1 a -\u003e e2 a",
          "source": "src/Data-Exists-Internal.html#translate1",
          "type": "function"
        },
        "index": {
          "description": "Translate between different existential datatypes holding evidence for the same constraint on kinded type constructor",
          "hierarchy": "Data Exists",
          "module": "Data.Exists",
          "name": "translate1",
          "normalized": "a b-\u003ea b",
          "package": "exists",
          "signature": "e a-\u003ee a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exists/docs/Data-Exists.html#v:translate1"
      }
    }
  ]
]