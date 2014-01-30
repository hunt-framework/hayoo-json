[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSuppose we are given mutually recursive data types \u003ccode\u003eA\u003c/code\u003e, \u003ccode\u003eB\u003c/code\u003e, and \u003ccode\u003eC\u003c/code\u003e.\n Here are some definitions of terms.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003echild\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A maximal subexpression of \u003ccode\u003eA\u003c/code\u003e, \u003ccode\u003eB\u003c/code\u003e, or \u003ccode\u003eC\u003c/code\u003e. \n A child does not necessarily have to have the same type as the parent.\n \u003ccode\u003eA\u003c/code\u003e might have some children of type \u003ccode\u003eB\u003c/code\u003e and other children of type \u003ccode\u003eC\u003c/code\u003e or even \u003ccode\u003eA\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003echildren\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A list of all children.\n In particular children are ordered from left to right.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003edescendant\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Any subexpression of of \u003ccode\u003eA\u003c/code\u003e, \u003ccode\u003eB\u003c/code\u003e, or \u003ccode\u003eC\u003c/code\u003e.\n Specifically a descendant of an expression is either the expression itself or a descendant of one of its children.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003efamily\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A list of all descendant.\n The order is a context dependent.\n \u003ccode\u003e\u003ca\u003epreorderFold\u003c/a\u003e\u003c/code\u003e uses preorder, while \u003ccode\u003e\u003ca\u003epostorderFold\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emapFamilyM\u003c/a\u003e\u003c/code\u003e uses postorder.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eplate\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A plate is a record parametrized by a functor \u003ccode\u003ef\u003c/code\u003e with one field of type\n \u003ccode\u003eA -\u003e f A\u003c/code\u003e for each type belonging to the mutually recursive set of types.  For example,\n a plate for \u003ccode\u003eA\u003c/code\u003e, \u003ccode\u003eB\u003c/code\u003e, and \u003ccode\u003eC\u003c/code\u003e would look like\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e\n data ABCPlate f = ABCPlate\n                 { fieldA :: A -\u003e f A\n                 , fieldB :: B -\u003e f B\n                 , fieldC :: C -\u003e f C\n                 }\n\u003c/pre\u003e\u003cp\u003eAlthough this above is the original motivation behind multiplate,but you can make\n any structure you want into a \u003ccode\u003e\u003ca\u003eMultiplate\u003c/a\u003e\u003c/code\u003e as long as you satisfy the two multiplate laws listed\n below.\n\u003c/p\u003e\u003cp\u003eThe names of the functions in this module are based on Sebastian Fischer's Refactoring Uniplate: \n \u003ca\u003ehttp://www-ps.informatik.uni-kiel.de/~sebf/projects/traversal.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Multiplate.html",
        "fct-type": "module",
        "title": "Multiplate"
      },
      "index": {
        "description": "Suppose we are given mutually recursive data types and Here are some definitions of terms child maximal subexpression of or child does not necessarily have to have the same type as the parent might have some children of type and other children of type or even children list of all children In particular children are ordered from left to right descendant Any subexpression of of or Specifically descendant of an expression is either the expression itself or descendant of one of its children family list of all descendant The order is context dependent preorderFold uses preorder while postorderFold and mapFamilyM uses postorder plate plate is record parametrized by functor with one field of type for each type belonging to the mutually recursive set of types For example plate for and would look like data ABCPlate ABCPlate fieldA fieldB fieldC Although this above is the original motivation behind multiplate but you can make any structure you want into Multiplate as long as you satisfy the two multiplate laws listed below The names of the functions in this module are based on Sebastian Fischer Refactoring Uniplate http www-ps.informatik.uni-kiel.de sebf projects traversal.html",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "Multiplate",
        "normalized": "",
        "package": "multiplate",
        "partial": "Multiplate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#t:Multiplate",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMultiplate\u003c/a\u003e\u003c/code\u003e is a constructor of kind \u003ccode\u003e(* -\u003e *) -\u003e *\u003c/code\u003e operating on \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functors\n having functions \u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e that satisfy the following two laws:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e\n   where\n     \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e (\\_ -\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecomposePlate\u003c/a\u003e\u003c/code\u003e p1 p2) = \u003ccode\u003e\u003ca\u003ecomposePlate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e p1) (\u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e p2)\n   where\n     \u003ccode\u003e\u003ca\u003ecomposePlate\u003c/a\u003e\u003c/code\u003e p1 p2 = \u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e (\\proj a -\u003e (\u003ccode\u003e\u003ca\u003eCompose\u003c/a\u003e\u003c/code\u003e (proj p1 `\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e` proj p2 a)))\n\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eNote: By parametricity, it suffices for (1) to prove \n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e (\\_ -\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e)) = \u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e (\\_ -\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Multiplate.html#Multiplate",
        "fct-type": "class",
        "title": "Multiplate"
      },
      "index": {
        "description": "Multiplate is constructor of kind operating on Applicative functors having functions multiplate and mkPlate that satisfy the following two laws multiplate purePlate purePlate where purePlate mkPlate pure multiplate composePlate p1 p2 composePlate multiplate p1 multiplate p2 where composePlate p1 p2 mkPlate proj Compose proj p1 fmap proj p2 Note By parametricity it suffices for to prove multiplate mkPlate Identity mkPlate Identity",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "Multiplate",
        "normalized": "",
        "package": "multiplate",
        "partial": "Multiplate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#t:Projector",
      "description": {
        "fct-descr": "\u003cp\u003eA plate over \u003ccode\u003ef\u003c/code\u003e consists of several fields of type \u003ccode\u003eA -\u003e f A\u003c/code\u003e for various \u003ccode\u003eA\u003c/code\u003es.\n \u003ccode\u003e\u003ca\u003eProjector\u003c/a\u003e\u003c/code\u003e is the type of the projection functions of plates. \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "type",
        "fct-source": "src/Data-Generics-Multiplate.html#Projector",
        "fct-type": "type",
        "title": "Projector"
      },
      "index": {
        "description": "plate over consists of several fields of type for various Projector is the type of the projection functions of plates",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "Projector",
        "normalized": "",
        "package": "multiplate",
        "partial": "Projector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:allFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrappers.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant All) -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Generics-Multiplate.html#allFor",
        "fct-type": "function",
        "title": "allFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant All functor upgrade the projection function to strip off the wrappers",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "allFor",
        "normalized": "Projector a b-\u003ea(Constant All)-\u003eb-\u003eBool",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant All)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate used for \u003ccode\u003e\u003ca\u003eevalFamily\u003c/a\u003e\u003c/code\u003e, replace returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n with returning the input.  This transforms plates suitable for \u003ccode\u003e\u003ca\u003eevalFamily\u003c/a\u003e\u003c/code\u003e\n into plates suitable form \u003ccode\u003e\u003ca\u003emapFamily\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p Maybe -\u003e p Identity",
        "fct-source": "src/Data-Generics-Multiplate.html#always",
        "fct-type": "function",
        "title": "always"
      },
      "index": {
        "description": "Given plate used for evalFamily replace returning Nothing with returning the input This transforms plates suitable for evalFamily into plates suitable form mapFamily",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "always",
        "normalized": "a Maybe-\u003ea Identity",
        "package": "multiplate",
        "partial": "",
        "signature": "p Maybe-\u003ep Identity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:alwaysM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate used for \u003ccode\u003e\u003ca\u003eevalFamilyM\u003c/a\u003e\u003c/code\u003e, replace returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n with returning the input.  This transforms plates suitable for \u003ccode\u003e\u003ca\u003eevalFamilyM\u003c/a\u003e\u003c/code\u003e\n into plates suitable form \u003ccode\u003e\u003ca\u003emapFamilyM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p (MaybeT f) -\u003e p f",
        "fct-source": "src/Data-Generics-Multiplate.html#alwaysM",
        "fct-type": "function",
        "title": "alwaysM"
      },
      "index": {
        "description": "Given plate used for evalFamilyM replace returning Nothing with returning the input This transforms plates suitable for evalFamilyM into plates suitable form mapFamilyM",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "alwaysM",
        "normalized": "a(MaybeT b)-\u003ea b",
        "package": "multiplate",
        "partial": "",
        "signature": "p(MaybeT f)-\u003ep f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:anyFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrappers.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant Any) -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Generics-Multiplate.html#anyFor",
        "fct-type": "function",
        "title": "anyFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant Any functor upgrade the projection function to strip off the wrappers",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "anyFor",
        "normalized": "Projector a b-\u003ea(Constant Any)-\u003eb-\u003eBool",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant Any)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:appendPlate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two plates with one over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e o\u003c/code\u003e applicative functor for a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eo\u003c/code\u003e,\n each field of the plate can be pointwise appended with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p (Constant o) -\u003e p (Constant o) -\u003e p (Constant o)",
        "fct-source": "src/Data-Generics-Multiplate.html#appendPlate",
        "fct-type": "function",
        "title": "appendPlate"
      },
      "index": {
        "description": "Given two plates with one over the Constant applicative functor for Monoid each field of the plate can be pointwise appended with mappend",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "appendPlate",
        "normalized": "a(Constant b)-\u003ea(Constant b)-\u003ea(Constant b)",
        "package": "multiplate",
        "partial": "Plate",
        "signature": "p(Constant o)-\u003ep(Constant o)-\u003ep(Constant o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:applyNaturalTransform",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a natural transformation between two functors, \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, and a plate over\n \u003ccode\u003ef\u003c/code\u003e, compose the natural transformation with each field of the plate.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "(forall a.  f a -\u003e g a) -\u003e p f -\u003e p g",
        "fct-source": "src/Data-Generics-Multiplate.html#applyNaturalTransform",
        "fct-type": "function",
        "title": "applyNaturalTransform"
      },
      "index": {
        "description": "Given natural transformation between two functors and and plate over compose the natural transformation with each field of the plate",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "applyNaturalTransform",
        "normalized": "(a b c d-\u003ee d)-\u003ef c-\u003ef e",
        "package": "multiplate",
        "partial": "Natural Transform",
        "signature": "(forall a. f a-\u003eg a)-\u003ep f-\u003ep g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:composePlate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two plates, they can be composed fieldwise yielding the composite functor.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p f -\u003e p g -\u003e p (Compose g f)",
        "fct-source": "src/Data-Generics-Multiplate.html#composePlate",
        "fct-type": "function",
        "title": "composePlate"
      },
      "index": {
        "description": "Given two plates they can be composed fieldwise yielding the composite functor",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "composePlate",
        "normalized": "a b-\u003ea c-\u003ea(Compose c b)",
        "package": "multiplate",
        "partial": "Plate",
        "signature": "p f-\u003ep g-\u003ep(Compose g f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:composePlateLeftId",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two plates with one over the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e functor, the two plates\n can be composed fieldwise.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p Identity -\u003e p f -\u003e p f",
        "fct-source": "src/Data-Generics-Multiplate.html#composePlateLeftId",
        "fct-type": "function",
        "title": "composePlateLeftId"
      },
      "index": {
        "description": "Given two plates with one over the Identity functor the two plates can be composed fieldwise",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "composePlateLeftId",
        "normalized": "a Identity-\u003ea b-\u003ea b",
        "package": "multiplate",
        "partial": "Plate Left Id",
        "signature": "p Identity-\u003ep f-\u003ep f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:composePlateRightId",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two plates with one over the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e functor, the two plates\n can be composed fieldwise.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p f -\u003e p Identity -\u003e p f",
        "fct-source": "src/Data-Generics-Multiplate.html#composePlateRightId",
        "fct-type": "function",
        "title": "composePlateRightId"
      },
      "index": {
        "description": "Given two plates with one over the Identity functor the two plates can be composed fieldwise",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "composePlateRightId",
        "normalized": "a b-\u003ea Identity-\u003ea b",
        "package": "multiplate",
        "partial": "Plate Right Id",
        "signature": "p f-\u003ep Identity-\u003ep f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:emptyPlate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eemptyPlate\u003c/a\u003e\u003c/code\u003e builds a plate\n over \u003ccode\u003ef\u003c/code\u003e whose fields are all \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGenerally \u003ccode\u003e\u003ca\u003eemptyPlate\u003c/a\u003e\u003c/code\u003e is used as the base of a record update. One constructs\n the expression \n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eemptyPlate\u003c/a\u003e\u003c/code\u003e { \u003cem\u003efieldOfInterest\u003c/em\u003e = \\a -\u003e case a of \n              | \u003cem\u003econstructorOfInterest\u003c/em\u003e -\u003e \u003cem\u003eexpr\u003c/em\u003e\n              | _                     -\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n            }\n\u003c/pre\u003e\u003cp\u003eand this is a typical parameter that is passed to \u003ccode\u003e\u003ca\u003eevalFamily\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eevalFamilyM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p f",
        "fct-source": "src/Data-Generics-Multiplate.html#emptyPlate",
        "fct-type": "function",
        "title": "emptyPlate"
      },
      "index": {
        "description": "Given an Alternative emptyPlate builds plate over whose fields are all const empty Generally emptyPlate is used as the base of record update One constructs the expression emptyPlate fieldOfInterest case of constructorOfInterest expr empty and this is typical parameter that is passed to evalFamily and evalFamilyM",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "emptyPlate",
        "normalized": "",
        "package": "multiplate",
        "partial": "Plate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:evalFamily",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields maybe transforms each type, \u003ccode\u003e\u003ca\u003eevalFamily\u003c/a\u003e\u003c/code\u003e\n returns a plate whose fields exhaustively transform the family of the input.\n The traversal proceeds bottom up, first transforming the families of\n the children. If a transformation succeeds then the result is re-\u003ccode\u003e\u003ca\u003eevalFamily\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e\u003cp\u003eA post-condition is that the input transform returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on all family members\n of the output, or more formally\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003epreorderFold\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eapplyNaturalTransform\u003c/a\u003e\u003c/code\u003e t f) `\u003ccode\u003e\u003ca\u003ecomposePlate\u003c/a\u003e\u003c/code\u003e` (\u003ccode\u003e\u003ca\u003eevalFamily\u003c/a\u003e\u003c/code\u003e f) &#8849; \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e\n  where\n   t :: forall a. \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e a\n   t = \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eisNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p Maybe -\u003e p Identity",
        "fct-source": "src/Data-Generics-Multiplate.html#evalFamily",
        "fct-type": "function",
        "title": "evalFamily"
      },
      "index": {
        "description": "Given plate whose fields maybe transforms each type evalFamily returns plate whose fields exhaustively transform the family of the input The traversal proceeds bottom up first transforming the families of the children If transformation succeeds then the result is re evalFamily ed post-condition is that the input transform returns Nothing on all family members of the output or more formally preorderFold applyNaturalTransform composePlate evalFamily purePlate where forall Maybe Constant All Constant All isNothing",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "evalFamily",
        "normalized": "a Maybe-\u003ea Identity",
        "package": "multiplate",
        "partial": "Family",
        "signature": "p Maybe-\u003ep Identity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:evalFamilyM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields maybe transforms each type, \u003ccode\u003e\u003ca\u003eevalFamilyM\u003c/a\u003e\u003c/code\u003e\n returns a plate whose fields exhaustively transform the family of the input.\n The sequencing is done in a depth-first postorder traversal, but \n if a transformation succeeds then the result is re-\u003ccode\u003e\u003ca\u003eevalFamilyM\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p (MaybeT m) -\u003e p m",
        "fct-source": "src/Data-Generics-Multiplate.html#evalFamilyM",
        "fct-type": "function",
        "title": "evalFamilyM"
      },
      "index": {
        "description": "Given plate whose fields maybe transforms each type evalFamilyM returns plate whose fields exhaustively transform the family of the input The sequencing is done in depth-first postorder traversal but if transformation succeeds then the result is re evalFamilyM ed",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "evalFamilyM",
        "normalized": "a(MaybeT b)-\u003ea b",
        "package": "multiplate",
        "partial": "Family",
        "signature": "p(MaybeT m)-\u003ep m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:firstFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrappers.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant (First b)) -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-Generics-Multiplate.html#firstFor",
        "fct-type": "function",
        "title": "firstFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant First functor upgrade the projection function to strip off the wrappers",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "firstFor",
        "normalized": "Projector a b-\u003ea(Constant(First c))-\u003eb-\u003eMaybe c",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant(First b))-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:foldFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e o\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrapper.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant o) -\u003e a -\u003e o",
        "fct-source": "src/Data-Generics-Multiplate.html#foldFor",
        "fct-type": "function",
        "title": "foldFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant functor upgrade the projection function to strip off the wrapper",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "foldFor",
        "normalized": "Projector a b-\u003ea(Constant c)-\u003eb-\u003ec",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant o)-\u003ea-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:kleisliComposePlate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two plates over a monad \u003ccode\u003em\u003c/code\u003e, the fields of the plate can be\n Kleisli composed (\u003ccode\u003e\u003ca\u003e\u003c=\u003c\u003c/a\u003e\u003c/code\u003e) fieldwise.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p m -\u003e p m -\u003e p m",
        "fct-source": "src/Data-Generics-Multiplate.html#kleisliComposePlate",
        "fct-type": "function",
        "title": "kleisliComposePlate"
      },
      "index": {
        "description": "Given two plates over monad the fields of the plate can be Kleisli composed fieldwise",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "kleisliComposePlate",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "multiplate",
        "partial": "Compose Plate",
        "signature": "p m-\u003ep m-\u003ep m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:lastFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrappers.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant (Last b)) -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-Generics-Multiplate.html#lastFor",
        "fct-type": "function",
        "title": "lastFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant Last functor upgrade the projection function to strip off the wrappers",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "lastFor",
        "normalized": "Projector a b-\u003ea(Constant(Last c))-\u003eb-\u003eMaybe c",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant(Last b))-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:mChildren",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields all return a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eo\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003emChildren\u003c/a\u003e\u003c/code\u003e produces a plate that returns the \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e\n of all the children of the input.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p (Constant o) -\u003e p (Constant o)",
        "fct-source": "src/Data-Generics-Multiplate.html#mChildren",
        "fct-type": "function",
        "title": "mChildren"
      },
      "index": {
        "description": "Given plate whose fields all return Monoid mChildren produces plate that returns the mconcat of all the children of the input",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "mChildren",
        "normalized": "a(Constant b)-\u003ea(Constant b)",
        "package": "multiplate",
        "partial": "Children",
        "signature": "p(Constant o)-\u003ep(Constant o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:mapChildren",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields transform each type, \u003ccode\u003e\u003ca\u003emapChildren\u003c/a\u003e\u003c/code\u003e\n returns a plate whose fields transform the children of the input.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p Identity -\u003e p Identity",
        "fct-source": "src/Data-Generics-Multiplate.html#mapChildren",
        "fct-type": "function",
        "title": "mapChildren"
      },
      "index": {
        "description": "Given plate whose fields transform each type mapChildren returns plate whose fields transform the children of the input",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "mapChildren",
        "normalized": "a Identity-\u003ea Identity",
        "package": "multiplate",
        "partial": "Children",
        "signature": "p Identity-\u003ep Identity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:mapChildrenM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields transform each type, \u003ccode\u003e\u003ca\u003emapChildrenM\u003c/a\u003e\u003c/code\u003e\n returns a plate whose fields transform the children of the input.\n The processing is sequenced from the first child to the last child.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p m -\u003e p m",
        "fct-source": "src/Data-Generics-Multiplate.html#mapChildrenM",
        "fct-type": "function",
        "title": "mapChildrenM"
      },
      "index": {
        "description": "Given plate whose fields transform each type mapChildrenM returns plate whose fields transform the children of the input The processing is sequenced from the first child to the last child",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "mapChildrenM",
        "normalized": "a b-\u003ea b",
        "package": "multiplate",
        "partial": "Children",
        "signature": "p m-\u003ep m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:mapFamily",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields transform each type, \u003ccode\u003e\u003ca\u003emapFamily\u003c/a\u003e\u003c/code\u003e\n returns a plate whose fields transform the family of the input.\n The traversal proceeds bottom up, first transforming the families of\n the children, before finally transforming the value itself.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p Identity -\u003e p Identity",
        "fct-source": "src/Data-Generics-Multiplate.html#mapFamily",
        "fct-type": "function",
        "title": "mapFamily"
      },
      "index": {
        "description": "Given plate whose fields transform each type mapFamily returns plate whose fields transform the family of the input The traversal proceeds bottom up first transforming the families of the children before finally transforming the value itself",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "mapFamily",
        "normalized": "a Identity-\u003ea Identity",
        "package": "multiplate",
        "partial": "Family",
        "signature": "p Identity-\u003ep Identity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:mapFamilyM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields transform each type, \u003ccode\u003e\u003ca\u003emapFamilyM\u003c/a\u003e\u003c/code\u003e\n returns a plate whose fields transform the family of the input.\n The sequencing is done in a depth-first postorder traversal.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p m -\u003e p m",
        "fct-source": "src/Data-Generics-Multiplate.html#mapFamilyM",
        "fct-type": "function",
        "title": "mapFamilyM"
      },
      "index": {
        "description": "Given plate whose fields transform each type mapFamilyM returns plate whose fields transform the family of the input The sequencing is done in depth-first postorder traversal",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "mapFamilyM",
        "normalized": "a b-\u003ea b",
        "package": "multiplate",
        "partial": "Family",
        "signature": "p m-\u003ep m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:mkPlate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a generic builder creating an \u003ccode\u003ea -\u003e f a\u003c/code\u003e, use the builder to construct each field\n of the plate \u003ccode\u003ep f\u003c/code\u003e.  The builder may need a little help to construct a field of type\n \u003ccode\u003ea -\u003e f a\u003c/code\u003e, so to help out the builder pass it the projection function for the field\n being built.\n\u003c/p\u003e\u003cp\u003ee.g. Given a plate of type\n\u003c/p\u003e\u003cpre\u003e\n data ABCPlate f = ABCPlate {\n                 { fieldA :: A -\u003e f B\n                 , fieldB :: B -\u003e f B\n                 , fieldC :: C -\u003e f C\n                 }\n\u003c/pre\u003e\u003cp\u003ethe instance of \u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eABCPlate\u003c/code\u003e should be\n\u003c/p\u003e\u003cpre\u003e\n  \u003ccode\u003e\u003ca\u003emkPlate\u003c/a\u003e\u003c/code\u003e builder = ABCPlate (builder fieldA) (builder fieldB) (builder fieldC)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "(forall a.  Projector p a -\u003e a -\u003e f a) -\u003e p f",
        "fct-source": "src/Data-Generics-Multiplate.html#mkPlate",
        "fct-type": "method",
        "title": "mkPlate"
      },
      "index": {
        "description": "Given generic builder creating an use the builder to construct each field of the plate The builder may need little help to construct field of type so to help out the builder pass it the projection function for the field being built e.g Given plate of type data ABCPlate ABCPlate fieldA fieldB fieldC the instance of mkPlate for ABCPlate should be mkPlate builder ABCPlate builder fieldA builder fieldB builder fieldC",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "mkPlate",
        "normalized": "(a b Projector c d-\u003ed-\u003ee d)-\u003ec e",
        "package": "multiplate",
        "partial": "Plate",
        "signature": "(forall a. Projector p a-\u003ea-\u003ef a)-\u003ep f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:multiplate",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the heart of the Multiplate library.  Given a plate of functions over some\n applicative functor \u003ccode\u003ef\u003c/code\u003e, create a new plate that applies these functions to the children\n of each data type in the plate.\n\u003c/p\u003e\u003cp\u003eThis process essentially defines the semantics what the children of these data types are.\n They don't have to literally be the syntactic children.  For example, if a language supports\n quoted syntax, that quoted syntax behaves more like a literal than as a sub-expression.\n Therefore, although quoted expressions may syntactically be subexpressions, the user may\n chose to implement \u003ccode\u003e\u003ca\u003emultiplate\u003c/a\u003e\u003c/code\u003e so that they are not semantically considered subexpressions.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p f -\u003e p f",
        "fct-source": "src/Data-Generics-Multiplate.html#multiplate",
        "fct-type": "method",
        "title": "multiplate"
      },
      "index": {
        "description": "This is the heart of the Multiplate library Given plate of functions over some applicative functor create new plate that applies these functions to the children of each data type in the plate This process essentially defines the semantics what the children of these data types are They don have to literally be the syntactic children For example if language supports quoted syntax that quoted syntax behaves more like literal than as sub-expression Therefore although quoted expressions may syntactically be subexpressions the user may chose to implement multiplate so that they are not semantically considered subexpressions",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "multiplate",
        "normalized": "a b-\u003ea b",
        "package": "multiplate",
        "partial": "",
        "signature": "p f-\u003ep f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:postorderFold",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields all return a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eo\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epreorderFold\u003c/a\u003e\u003c/code\u003e produces a plate that returns the \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e\n of the family of the input. The concatenation sequence begins with\n the family of the first child, then \n it is followed by the family of the second child, and so forth until finally\n the input itself produces the rightmost element of the concatenation.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p (Constant o) -\u003e p (Constant o)",
        "fct-source": "src/Data-Generics-Multiplate.html#postorderFold",
        "fct-type": "function",
        "title": "postorderFold"
      },
      "index": {
        "description": "Given plate whose fields all return Monoid preorderFold produces plate that returns the mconcat of the family of the input The concatenation sequence begins with the family of the first child then it is followed by the family of the second child and so forth until finally the input itself produces the rightmost element of the concatenation",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "postorderFold",
        "normalized": "a(Constant b)-\u003ea(Constant b)",
        "package": "multiplate",
        "partial": "Fold",
        "signature": "p(Constant o)-\u003ep(Constant o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:preorderFold",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a plate whose fields all return a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eo\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003epreorderFold\u003c/a\u003e\u003c/code\u003e produces a plate that returns the \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e\n of the family of the input. The input itself produces the leftmost element\n of the concatenation, then this is followed by the family of the first child, then\n it is followed by the family of the second child, and so forth.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p (Constant o) -\u003e p (Constant o)",
        "fct-source": "src/Data-Generics-Multiplate.html#preorderFold",
        "fct-type": "function",
        "title": "preorderFold"
      },
      "index": {
        "description": "Given plate whose fields all return Monoid preorderFold produces plate that returns the mconcat of the family of the input The input itself produces the leftmost element of the concatenation then this is followed by the family of the first child then it is followed by the family of the second child and so forth",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "preorderFold",
        "normalized": "a(Constant b)-\u003ea(Constant b)",
        "package": "multiplate",
        "partial": "Fold",
        "signature": "p(Constant o)-\u003ep(Constant o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:productFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrappers.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant (Product n)) -\u003e a -\u003e n",
        "fct-source": "src/Data-Generics-Multiplate.html#productFor",
        "fct-type": "function",
        "title": "productFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant Product functor upgrade the projection function to strip off the wrappers",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "productFor",
        "normalized": "Projector a b-\u003ea(Constant(Product c))-\u003eb-\u003ec",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant(Product n))-\u003ea-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:purePlate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e builds a plate\n over \u003ccode\u003ef\u003c/code\u003e whose fields are all \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGenerally \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e is used as the base of a record update. One constructs\n the expression \n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003epurePlate\u003c/a\u003e\u003c/code\u003e { \u003cem\u003efieldOfInterest\u003c/em\u003e = \\a -\u003e case a of \n             | \u003cem\u003econstructorOfInterest\u003c/em\u003e -\u003e \u003cem\u003eexpr\u003c/em\u003e\n             | _                     -\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e a\n           }\n\u003c/pre\u003e\u003cp\u003eand this is a typical parameter that is passed to most functions in this library.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "p f",
        "fct-source": "src/Data-Generics-Multiplate.html#purePlate",
        "fct-type": "function",
        "title": "purePlate"
      },
      "index": {
        "description": "Given an Applicative purePlate builds plate over whose fields are all pure Generally purePlate is used as the base of record update One constructs the expression purePlate fieldOfInterest case of constructorOfInterest expr pure and this is typical parameter that is passed to most functions in this library",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "purePlate",
        "normalized": "",
        "package": "multiplate",
        "partial": "Plate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:sumFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrappers.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p (Constant (Sum n)) -\u003e a -\u003e n",
        "fct-source": "src/Data-Generics-Multiplate.html#sumFor",
        "fct-type": "function",
        "title": "sumFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant Sum functor upgrade the projection function to strip off the wrappers",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "sumFor",
        "normalized": "Projector a b-\u003ea(Constant(Sum c))-\u003eb-\u003ec",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep(Constant(Sum n))-\u003ea-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:traverseFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e functor,\n upgrade the projection function to strip off the wrapper.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p Identity -\u003e a -\u003e a",
        "fct-source": "src/Data-Generics-Multiplate.html#traverseFor",
        "fct-type": "function",
        "title": "traverseFor"
      },
      "index": {
        "description": "Given projection function for plate over the Identity functor upgrade the projection function to strip off the wrapper",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "traverseFor",
        "normalized": "Projector a b-\u003ea Identity-\u003eb-\u003eb",
        "package": "multiplate",
        "partial": "For",
        "signature": "Projector p a-\u003ep Identity-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:traverseMFor",
      "description": {
        "fct-descr": "\u003cp\u003eInstantiate a projection function at a monad.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "Projector p a -\u003e p m -\u003e a -\u003e m a",
        "fct-source": "src/Data-Generics-Multiplate.html#traverseMFor",
        "fct-type": "function",
        "title": "traverseMFor"
      },
      "index": {
        "description": "Instantiate projection function at monad",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "traverseMFor",
        "normalized": "Projector a b-\u003ea c-\u003eb-\u003ec b",
        "package": "multiplate",
        "partial": "MFor",
        "signature": "Projector p a-\u003ep m-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate/docs/Data-Generics-Multiplate.html#v:unwrapFor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a projection function for a plate over the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e o\u003c/code\u003e functor,\n and a continuation for \u003ccode\u003eo\u003c/code\u003e, upgrade  the projection function to strip off the wrapper\n and run the continuation.\n\u003c/p\u003e\u003cp\u003eTypically the continuation simply strips off a wrapper for \u003ccode\u003eo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Multiplate",
        "fct-package": "multiplate",
        "fct-signature": "(o -\u003e b) -\u003e Projector p a -\u003e p (Constant o) -\u003e a -\u003e b",
        "fct-source": "src/Data-Generics-Multiplate.html#unwrapFor",
        "fct-type": "function",
        "title": "unwrapFor"
      },
      "index": {
        "description": "Given projection function for plate over the Constant functor and continuation for upgrade the projection function to strip off the wrapper and run the continuation Typically the continuation simply strips off wrapper for",
        "hierarchy": "Data Generics Multiplate",
        "module": "Data.Generics.Multiplate",
        "name": "unwrapFor",
        "normalized": "(a-\u003eb)-\u003eProjector c d-\u003ec(Constant a)-\u003ed-\u003eb",
        "package": "multiplate",
        "partial": "For",
        "signature": "(o-\u003eb)-\u003eProjector p a-\u003ep(Constant o)-\u003ea-\u003eb"
      }
    }
  }
]