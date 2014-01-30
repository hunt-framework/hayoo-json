[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstructing an action as a choice between all the permutations of\n some given actions (e.g. parsers), based on \"Parsing Permutation\n Phrases\", by Arthur Baars, Andres Loeh and S. Doaitse Swierstra,\n \u003cem\u003eHaskell Workshop 2001\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis version has a slightly different interface from the paper.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Permutation.html",
        "fct-type": "module",
        "title": "Permutation"
      },
      "index": {
        "description": "Constructing an action as choice between all the permutations of some given actions e.g parsers based on Parsing Permutation Phrases by Arthur Baars Andres Loeh and Doaitse Swierstra Haskell Workshop This version has slightly different interface from the paper",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "Permutation",
        "normalized": "",
        "package": "action-permutations",
        "partial": "Permutation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#t:Perms",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of a permutation of actions of an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e type \u003ccode\u003ep\u003c/code\u003e.\n The value type of the composite action is \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePermutations are constructed from the primitives \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoptAtom\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003emaybeAtom\u003c/a\u003e\u003c/code\u003e, and combined using the methods of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.  They are converted back to composite actions using\n \u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunPermsSep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe component actions of a permutation will be executed in each\n possible order, but the values they produce are always assembled\n in the order they occur in the program text, as in the following\n permutations of one, two or three component actions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e a) = f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e b) = (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e b) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e c) =\n   ((\\ x (y,z) -\u003e f x y z) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e ((,) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e c) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (,) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e c \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e b)) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n   ((\\ y (z,x) -\u003e f x y z) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e ((,) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e c) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (,) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e c \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e a)) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n   ((\\ z (x,y) -\u003e f x y z) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e c \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e ((,) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e b) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (,) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe permutation is encoded as a tree, with the first action\n executed before the second selection is made.  Thus failing actions,\n e.g. parsers, prune this tree.  The size of the tree is exponential\n in the number of components, but it is constructed lazily.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Permutation.html#Perms",
        "fct-type": "data",
        "title": "Perms"
      },
      "index": {
        "description": "representation of permutation of actions of an Alternative type The value type of the composite action is Permutations are constructed from the primitives atom optAtom and maybeAtom and combined using the methods of Functor and Applicative They are converted back to composite actions using runPerms and runPermsSep The component actions of permutation will be executed in each possible order but the values they produce are always assembled in the order they occur in the program text as in the following permutations of one two or three component actions runPerms atom runPerms atom atom flip runPerms atom atom atom flip flip flip The permutation is encoded as tree with the first action executed before the second selection is made Thus failing actions e.g parsers prune this tree The size of the tree is exponential in the number of components but it is constructed lazily",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "Perms",
        "normalized": "",
        "package": "action-permutations",
        "partial": "Perms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#v:atom",
      "description": {
        "fct-descr": "\u003cp\u003eA primitive permutation consisting of a single action.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e a) = a\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhen building permutation parsers, the argument parser should not match\n the empty string: use \u003ccode\u003e\u003ca\u003eoptAtom\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emaybeAtom\u003c/a\u003e\u003c/code\u003e for optional elements.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "p a -\u003e Perms p a",
        "fct-source": "src/Control-Applicative-Permutation.html#atom",
        "fct-type": "function",
        "title": "atom"
      },
      "index": {
        "description": "primitive permutation consisting of single action runPerms atom When building permutation parsers the argument parser should not match the empty string use optAtom or maybeAtom for optional elements",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "atom",
        "normalized": "a b-\u003ePerms a b",
        "package": "action-permutations",
        "partial": "",
        "signature": "p a-\u003ePerms p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#v:maybeAtom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e, but the action may be omitted from the permutation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emaybeAtom\u003c/a\u003e\u003c/code\u003e p) = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e p \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhen building permutation parsers, the argument parser should not match\n the empty string.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "p a -\u003e Perms p (Maybe a)",
        "fct-source": "src/Control-Applicative-Permutation.html#maybeAtom",
        "fct-type": "function",
        "title": "maybeAtom"
      },
      "index": {
        "description": "Like atom but the action may be omitted from the permutation runPerms maybeAtom Just pure Nothing When building permutation parsers the argument parser should not match the empty string",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "maybeAtom",
        "normalized": "a b-\u003ePerms a(Maybe b)",
        "package": "action-permutations",
        "partial": "Atom",
        "signature": "p a-\u003ePerms p(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#v:optAtom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e, but the action may be omitted from the permutation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eoptAtom\u003c/a\u003e\u003c/code\u003e d p) = p \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e d\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhen building permutation parsers, the argument parser should not match\n the empty string.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "a -\u003e p a -\u003e Perms p a",
        "fct-source": "src/Control-Applicative-Permutation.html#optAtom",
        "fct-type": "function",
        "title": "optAtom"
      },
      "index": {
        "description": "Like atom but the action may be omitted from the permutation runPerms optAtom pure When building permutation parsers the argument parser should not match the empty string",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "optAtom",
        "normalized": "a-\u003eb a-\u003ePerms b a",
        "package": "action-permutations",
        "partial": "Atom",
        "signature": "a-\u003ep a-\u003ePerms p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#v:runPerms",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation action.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x) = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e p) = f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e p\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "Perms p a -\u003e p a",
        "fct-source": "src/Control-Applicative-Permutation.html#runPerms",
        "fct-type": "function",
        "title": "runPerms"
      },
      "index": {
        "description": "Construct permutation action runPerms pure pure runPerms runPerms",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "runPerms",
        "normalized": "Perms a b-\u003ea b",
        "package": "action-permutations",
        "partial": "Perms",
        "signature": "Perms p a-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/action-permutations/docs/Control-Applicative-Permutation.html#v:runPermsSep",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erunPermsSep\u003c/a\u003e\u003c/code\u003e sep p\u003c/code\u003e is similar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunPerms\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e, except that the\n action \u003ccode\u003esep\u003c/code\u003e is interleaved between atomic actions in each permutation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPermsSep\u003c/a\u003e\u003c/code\u003e sep (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e a) = f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunPermsSep\u003c/a\u003e\u003c/code\u003e sep (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e b) = (f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e sep \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e b) \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e b \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e sep \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is particularly useful in constructing permutation persers, where\n \u003ccode\u003esep\u003c/code\u003e might be a parser for a comma or other separator.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Permutation",
        "fct-package": "action-permutations",
        "fct-signature": "p b -\u003e Perms p a -\u003e p a",
        "fct-source": "src/Control-Applicative-Permutation.html#runPermsSep",
        "fct-type": "function",
        "title": "runPermsSep"
      },
      "index": {
        "description": "runPermsSep sep is similar to runPerms except that the action sep is interleaved between atomic actions in each permutation runPermsSep sep atom runPermsSep sep atom atom sep flip sep It is particularly useful in constructing permutation persers where sep might be parser for comma or other separator",
        "hierarchy": "Control Applicative Permutation",
        "module": "Control.Applicative.Permutation",
        "name": "runPermsSep",
        "normalized": "a b-\u003ePerms a c-\u003ea c",
        "package": "action-permutations",
        "partial": "Perms Sep",
        "signature": "p b-\u003ePerms p a-\u003ep a"
      }
    }
  }
]