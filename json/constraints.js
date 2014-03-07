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
        "word": "constraints"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Forall",
          "name": "Forall",
          "package": "constraints",
          "source": "src/Data-Constraint-Forall.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "Forall",
          "package": "constraints",
          "partial": "Forall",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quantified constraint\n\u003c/p\u003e",
          "module": "Data.Constraint.Forall",
          "name": "Forall",
          "package": "constraints",
          "source": "src/Data-Constraint-Forall.html#Forall",
          "type": "type"
        },
        "index": {
          "description": "quantified constraint",
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "Forall",
          "package": "constraints",
          "partial": "Forall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#t:Forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Forall",
          "name": "Forall1",
          "package": "constraints",
          "source": "src/Data-Constraint-Forall.html#Forall1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "Forall1",
          "package": "constraints",
          "partial": "Forall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#t:Forall1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Forall",
          "name": "ForallF",
          "package": "constraints",
          "source": "src/Data-Constraint-Forall.html#ForallF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "ForallF",
          "package": "constraints",
          "partial": "Forall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#t:ForallF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Forall",
          "name": "ForallT",
          "package": "constraints",
          "source": "src/Data-Constraint-Forall.html#ForallT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "ForallT",
          "package": "constraints",
          "partial": "Forall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#t:ForallT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstantiate a quantified constraint on kind \u003ccode\u003e*\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Constraint.Forall",
          "name": "inst",
          "package": "constraints",
          "signature": "forall p a.  Forall p :- p a",
          "source": "src/Data-Constraint-Forall.html#inst",
          "type": "function"
        },
        "index": {
          "description": "instantiate quantified constraint on kind",
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "inst",
          "package": "constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#v:inst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstantiate a quantified constraint on kind \u003ccode\u003e* -\u003e *\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Constraint.Forall",
          "name": "inst1",
          "package": "constraints",
          "signature": "forall p f.  Forall1 p :- p f",
          "source": "src/Data-Constraint-Forall.html#inst1",
          "type": "function"
        },
        "index": {
          "description": "instantiate quantified constraint on kind",
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "inst1",
          "package": "constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#v:inst1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Forall",
          "name": "instF",
          "package": "constraints",
          "signature": "forall p f a.  ForallF p f :- p (f a)",
          "source": "src/Data-Constraint-Forall.html#instF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "instF",
          "package": "constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#v:instF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Forall",
          "name": "instT",
          "package": "constraints",
          "signature": "forall p t f a.  ForallT p t :- p (t f a)",
          "source": "src/Data-Constraint-Forall.html#instT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Constraint Forall",
          "module": "Data.Constraint.Forall",
          "name": "instT",
          "package": "constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Forall.html#v:instT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint.Unsafe",
          "name": "Unsafe",
          "package": "constraints",
          "source": "src/Data-Constraint-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Constraint Unsafe",
          "module": "Data.Constraint.Unsafe",
          "name": "Unsafe",
          "package": "constraints",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an Alternative instance from a MonadPlus\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeAlternative",
          "package": "constraints",
          "signature": "m a) -\u003e m a",
          "source": "src/Data-Constraint-Unsafe.html#unsafeAlternative",
          "type": "function"
        },
        "index": {
          "description": "Construct an Alternative instance from MonadPlus",
          "hierarchy": "Data Constraint Unsafe",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeAlternative",
          "normalized": "a b)-\u003ea b",
          "package": "constraints",
          "partial": "Alternative",
          "signature": "m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Unsafe.html#v:unsafeAlternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an Applicative instance from a Monad\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeApplicative",
          "package": "constraints",
          "signature": "m a) -\u003e m a",
          "source": "src/Data-Constraint-Unsafe.html#unsafeApplicative",
          "type": "function"
        },
        "index": {
          "description": "Construct an Applicative instance from Monad",
          "hierarchy": "Data Constraint Unsafe",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeApplicative",
          "normalized": "a b)-\u003ea b",
          "package": "constraints",
          "partial": "Applicative",
          "signature": "m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Unsafe.html#v:unsafeApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce a dictionary unsafely from one type to another\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeCoerceConstraint",
          "package": "constraints",
          "signature": "a :- b",
          "source": "src/Data-Constraint-Unsafe.html#unsafeCoerceConstraint",
          "type": "function"
        },
        "index": {
          "description": "Coerce dictionary unsafely from one type to another",
          "hierarchy": "Data Constraint Unsafe",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeCoerceConstraint",
          "package": "constraints",
          "partial": "Coerce Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Unsafe.html#v:unsafeCoerceConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce a dictionary unsafely from one type to a newtype of that type\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeDerive",
          "package": "constraints",
          "signature": "(o -\u003e n) -\u003e t o :- t n",
          "source": "src/Data-Constraint-Unsafe.html#unsafeDerive",
          "type": "function"
        },
        "index": {
          "description": "Coerce dictionary unsafely from one type to newtype of that type",
          "hierarchy": "Data Constraint Unsafe",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeDerive",
          "normalized": "(a-\u003eb)-\u003ec a c b",
          "package": "constraints",
          "partial": "Derive",
          "signature": "(o-\u003en)-\u003et o t n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Unsafe.html#v:unsafeDerive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce a dictionary unsafely from a newtype of a type to the base type\n\u003c/p\u003e",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeUnderive",
          "package": "constraints",
          "signature": "(o -\u003e n) -\u003e t n :- t o",
          "source": "src/Data-Constraint-Unsafe.html#unsafeUnderive",
          "type": "function"
        },
        "index": {
          "description": "Coerce dictionary unsafely from newtype of type to the base type",
          "hierarchy": "Data Constraint Unsafe",
          "module": "Data.Constraint.Unsafe",
          "name": "unsafeUnderive",
          "normalized": "(a-\u003eb)-\u003ec b c a",
          "package": "constraints",
          "partial": "Underive",
          "signature": "(o-\u003en)-\u003et n t o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint-Unsafe.html#v:unsafeUnderive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": "Constraint",
          "package": "constraints",
          "source": "src/Data-Constraint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "Constraint",
          "package": "constraints",
          "partial": "Constraint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": ":-",
          "package": "constraints",
          "source": "src/Data-Constraint.html#%3A-",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": ":-",
          "package": "constraints",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#t::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify the relationship between an instance head and its body as a class\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": ":=\u003e",
          "package": "constraints",
          "source": "src/Data-Constraint.html#%3A%3D%3E",
          "type": "class"
        },
        "index": {
          "description": "Reify the relationship between an instance head and its body as class",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": ":=\u003e",
          "package": "constraints",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#t::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify the relationship between a class and its superclass constraints as a class\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "Class",
          "package": "constraints",
          "source": "src/Data-Constraint.html#Class",
          "type": "class"
        },
        "index": {
          "description": "Reify the relationship between class and its superclass constraints as class",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "Class",
          "package": "constraints",
          "partial": "Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": "Constraint",
          "package": "constraints",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "Constraint",
          "package": "constraints",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture a dictionary for a given constraint\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "Dict",
          "package": "constraints",
          "source": "src/Data-Constraint.html#Dict",
          "type": "data"
        },
        "index": {
          "description": "Capture dictionary for given constraint",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "Dict",
          "package": "constraints",
          "partial": "Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#t:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint product\n\u003c/p\u003e\u003cpre\u003e trans weaken1 (f &&& g) = f\n trans weaken2 (f &&& g) = g\n\u003c/pre\u003e",
          "module": "Data.Constraint",
          "name": "(&&&)",
          "package": "constraints",
          "signature": "(a :- b) -\u003e (a :- c) -\u003e a :- (b, c)",
          "source": "src/Data-Constraint.html#%26%26%26",
          "type": "function"
        },
        "index": {
          "description": "Constraint product trans weaken1 trans weaken2",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "(&&&) &&&",
          "normalized": "(a b)-\u003e(a c)-\u003ea(b,c)",
          "package": "constraints",
          "signature": "(a b)-\u003e(a c)-\u003ea(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edue to the hack for the kind of (,) in the current version of GHC we can't actually\n make instances for (,) :: Constraint -\u003e Constraint -\u003e Constraint\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "(***)",
          "package": "constraints",
          "signature": "(a :- b) -\u003e (c :- d) -\u003e (a, c) :- (b, d)",
          "source": "src/Data-Constraint.html#%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "description": "due to the hack for the kind of in the current version of GHC we can actually make instances for Constraint Constraint Constraint",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "(***) ***",
          "normalized": "(a b)-\u003e(c d)-\u003e(a,c)(b,d)",
          "package": "constraints",
          "signature": "(a b)-\u003e(c d)-\u003e(a,c)(b,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven that \u003ccode\u003ea :- b\u003c/code\u003e, derive something that needs a context \u003ccode\u003eb\u003c/code\u003e, using the context \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "(\\\\)",
          "package": "constraints",
          "signature": "r) -\u003e (a :- b) -\u003e r",
          "source": "src/Data-Constraint.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Given that derive something that needs context using the context",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "(\\\\) \\\\",
          "normalized": "a)-\u003e(b c)-\u003ea",
          "package": "constraints",
          "signature": "r)-\u003e(a b)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": "Dict",
          "package": "constraints",
          "signature": "Dict a",
          "source": "src/Data-Constraint.html#Dict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "Dict",
          "package": "constraints",
          "partial": "Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": "Sub",
          "package": "constraints",
          "signature": "Dict b)",
          "source": "src/Data-Constraint.html#%3A-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "Sub",
          "package": "constraints",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bad type coercion lets you derive any type you want.\n\u003c/p\u003e\u003cp\u003eThese are the initial arrows of the category and (() ~ Bool) is the initial object\n\u003c/p\u003e\u003cp\u003eThis demonstrates the law of classical logical \u003ca\u003eex falso quodlibet\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "bottom",
          "package": "constraints",
          "signature": "(() ~ Bool) :- c",
          "source": "src/Data-Constraint.html#bottom",
          "type": "function"
        },
        "index": {
          "description": "bad type coercion lets you derive any type you want These are the initial arrows of the category and Bool is the initial object This demonstrates the law of classical logical ex falso quodlibet",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "bottom",
          "normalized": "(()Bool)a",
          "package": "constraints",
          "signature": "(()Bool)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": "cls",
          "package": "constraints",
          "signature": "h :- b",
          "source": "src/Data-Constraint.html#cls",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "cls",
          "package": "constraints",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:cls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContracting a constraint / diagonal morphism\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "contract",
          "package": "constraints",
          "signature": "a :- (a, a)",
          "source": "src/Data-Constraint.html#contract",
          "type": "function"
        },
        "index": {
          "description": "Contracting constraint diagonal morphism",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "contract",
          "normalized": "a(a,a)",
          "package": "constraints",
          "signature": "a(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:contract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Constraint",
          "name": "ins",
          "package": "constraints",
          "signature": "b :- h",
          "source": "src/Data-Constraint.html#ins",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "ins",
          "package": "constraints",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:ins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflexivity of entailment\n\u003c/p\u003e\u003cp\u003eIf we view '(:-)' as a Constraint-indexed category, then this is \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "refl",
          "package": "constraints",
          "signature": "a :- a",
          "source": "src/Data-Constraint.html#refl",
          "type": "function"
        },
        "index": {
          "description": "Reflexivity of entailment If we view as Constraint-indexed category then this is id",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "refl",
          "package": "constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery constraint implies truth\n\u003c/p\u003e\u003cp\u003eThese are the terminal arrows of the category, and () is the terminal object.\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "top",
          "package": "constraints",
          "signature": "a :- ()",
          "source": "src/Data-Constraint.html#top",
          "type": "function"
        },
        "index": {
          "description": "Every constraint implies truth These are the terminal arrows of the category and is the terminal object",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "top",
          "normalized": "a()",
          "package": "constraints",
          "signature": "a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransitivity of entailment\n\u003c/p\u003e\u003cp\u003eIf we view '(:-)' as a Constraint-indexed category, then this is '(.)'\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "trans",
          "package": "constraints",
          "signature": "(b :- c) -\u003e (a :- b) -\u003e a :- c",
          "source": "src/Data-Constraint.html#trans",
          "type": "function"
        },
        "index": {
          "description": "Transitivity of entailment If we view as Constraint-indexed category then this is",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "trans",
          "normalized": "(a b)-\u003e(c a)-\u003ec b",
          "package": "constraints",
          "signature": "(b c)-\u003e(a b)-\u003ea c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeakening a constraint product\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "weaken1",
          "package": "constraints",
          "signature": "(a, b) :- a",
          "source": "src/Data-Constraint.html#weaken1",
          "type": "function"
        },
        "index": {
          "description": "Weakening constraint product",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "weaken1",
          "normalized": "(a,b)a",
          "package": "constraints",
          "signature": "(a,b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:weaken1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeakening a constraint product\n\u003c/p\u003e",
          "module": "Data.Constraint",
          "name": "weaken2",
          "package": "constraints",
          "signature": "(a, b) :- b",
          "source": "src/Data-Constraint.html#weaken2",
          "type": "function"
        },
        "index": {
          "description": "Weakening constraint product",
          "hierarchy": "Data Constraint",
          "module": "Data.Constraint",
          "name": "weaken2",
          "normalized": "(a,b)b",
          "package": "constraints",
          "signature": "(a,b)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/constraints/docs/Data-Constraint.html#v:weaken2"
      }
    }
  ]
]