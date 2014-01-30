[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e class, for performing substitution into\n things that are not necessarily full monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bound.Class",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "This module provides the Bound class for performing substitution into things that are not necessarily full monad transformers",
        "hierarchy": "Bound Class",
        "module": "Bound.Class",
        "name": "Class",
        "normalized": "",
        "package": "bound",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Class.html#t:Bound",
      "description": {
        "fct-descr": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e generate left modules over monads.\n\u003c/p\u003e\u003cp\u003eThis means they should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e m \u003e\u003e\u003e= return &#8801; m\n m \u003e\u003e\u003e= (&#955; x &#8594; k x \u003e\u003e= h) &#8801; (m \u003e\u003e\u003e= k) \u003e\u003e\u003e= \u003c/pre\u003e\u003cp\u003eThis guarantees that a typical Monad instance for an expression type\n where Bound instances appear will satisfy the Monad laws (see doc/BoundLaws.hs).\n\u003c/p\u003e\u003cp\u003eIf instances of Bound are monad transformers, then \u003ccode\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f &#8801; m \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elift\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e\n implies the above laws, and is in fact the default definition.\n\u003c/p\u003e\u003cp\u003eThis is useful for types like expression lists, case alternatives,\n schemas, etc. that may not be expressions in their own right, but often\n contain expressions.\n\u003c/p\u003e",
        "fct-module": "Bound.Class",
        "fct-package": "bound",
        "fct-signature": "class",
        "fct-source": "src/Bound-Class.html#Bound",
        "fct-type": "class",
        "title": "Bound"
      },
      "index": {
        "description": "Instances of Bound generate left modules over monads This means they should satisfy the following laws return This guarantees that typical Monad instance for an expression type where Bound instances appear will satisfy the Monad laws see doc BoundLaws.hs If instances of Bound are monad transformers then lift implies the above laws and is in fact the default definition This is useful for types like expression lists case alternatives schemas etc that may not be expressions in their own right but often contain expressions",
        "hierarchy": "Bound Class",
        "module": "Bound.Class",
        "name": "Bound",
        "normalized": "",
        "package": "bound",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Class.html#v:-61--60--60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eA flipped version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
        "fct-module": "Bound.Class",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e f c) -\u003e t f a -\u003e t f c",
        "fct-source": "src/Bound-Class.html#%3D%3C%3C%3C",
        "fct-type": "function",
        "title": "(=\u003c\u003c\u003c)"
      },
      "index": {
        "description": "flipped version of flip",
        "hierarchy": "Bound Class",
        "module": "Bound.Class",
        "name": "(=\u003c\u003c\u003c) =\u003c\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003ed b a-\u003ed b c",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003ef c)-\u003et f a-\u003et f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Class.html#v:-62--62--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003ePerform substitution\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is an instance of \u003ccode\u003eMonadTrans\u003c/code\u003e and you are compiling on GHC \u003e= 7.4, then this\n gets the default definition:\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = m \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elift\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
        "fct-module": "Bound.Class",
        "fct-package": "bound",
        "fct-signature": "t f a -\u003e (a -\u003e f c) -\u003e t f c",
        "fct-source": "src/Bound-Class.html#%3E%3E%3E%3D",
        "fct-type": "method",
        "title": "(\u003e\u003e\u003e=)"
      },
      "index": {
        "description": "Perform substitution If is an instance of MonadTrans and you are compiling on GHC then this gets the default definition lift",
        "hierarchy": "Bound Class",
        "module": "Bound.Class",
        "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
        "normalized": "a b c-\u003e(c-\u003eb d)-\u003ea b d",
        "package": "bound",
        "partial": "",
        "signature": "t f a-\u003e(a-\u003ef c)-\u003et f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe problem with locally nameless approaches is that original names are\n often useful for error reporting, or to allow for the user in an interactive\n theorem prover to convey some hint about the domain. A \u003ccode\u003e\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e n b\u003c/code\u003e is a value\n \u003ccode\u003eb\u003c/code\u003e supplemented with a (discardable) name that may be useful for error\n reporting purposes. In particular, this name does not participate in\n comparisons for equality.\n\u003c/p\u003e\u003cp\u003eThis module is \u003cem\u003enot\u003c/em\u003e exported from \u003ca\u003eBound\u003c/a\u003e by default. You need to explicitly\n import it, due to the fact that \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e is a pretty common term in other\n people's code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound-Name.html",
        "fct-type": "module",
        "title": "Name"
      },
      "index": {
        "description": "The problem with locally nameless approaches is that original names are often useful for error reporting or to allow for the user in an interactive theorem prover to convey some hint about the domain Name is value supplemented with discardable name that may be useful for error reporting purposes In particular this name does not participate in comparisons for equality This module is not exported from Bound by default You need to explicitly import it due to the fact that Name is pretty common term in other people code",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "Name",
        "normalized": "",
        "package": "bound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eWe track the choice of \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e as a forgettable property that does \u003cem\u003enot\u003c/em\u003e affect\n the result of (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) or \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo compare names rather than values, use \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "data",
        "fct-source": "src/Bound-Name.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "We track the choice of Name as forgettable property that does not affect the result of or compare To compare names rather than values use on compare name instead",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "Name",
        "normalized": "",
        "package": "bound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:Name",
      "description": {
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "Name n b",
        "fct-source": "src/Bound-Name.html#Name",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "Name",
        "normalized": "",
        "package": "bound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:_Name",
      "description": {
        "fct-descr": "\u003cp\u003eThis provides an \u003ccode\u003eIso\u003c/code\u003e that can be used to access the parts of a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_Name\u003c/a\u003e\u003c/code\u003e :: Iso (\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e n a) (\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e m b) (n, a) (m, b)\n\u003c/pre\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "p (n, a) (f (m, b)) -\u003e p (Name n a) (f (Name m b))",
        "fct-source": "src/Bound-Name.html#_Name",
        "fct-type": "function",
        "title": "_Name"
      },
      "index": {
        "description": "This provides an Iso that can be used to access the parts of Name Name Iso Name Name",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "_Name",
        "normalized": "a(b,c)(d(e,f))-\u003ea(Name b c)(d(Name e f))",
        "package": "bound",
        "partial": "Name",
        "signature": "p(n,a)(f(m,b))-\u003ep(Name n a)(f(Name m b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:abstract1Name",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract over a single variable\n\u003c/p\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "a -\u003e f a -\u003e Scope (Name a ()) f a",
        "fct-source": "src/Bound-Name.html#abstract1Name",
        "fct-type": "function",
        "title": "abstract1Name"
      },
      "index": {
        "description": "Abstract over single variable",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "abstract1Name",
        "normalized": "a-\u003eb a-\u003eScope(Name a())b a",
        "package": "bound",
        "partial": "Name",
        "signature": "a-\u003ef a-\u003eScope(Name a())f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:abstractName",
      "description": {
        "fct-descr": "\u003cp\u003eAbstraction, capturing named bound variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e Maybe b) -\u003e f a -\u003e Scope (Name a b) f a",
        "fct-source": "src/Bound-Name.html#abstractName",
        "fct-type": "function",
        "title": "abstractName"
      },
      "index": {
        "description": "Abstraction capturing named bound variables",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "abstractName",
        "normalized": "(a-\u003eMaybe b)-\u003ec a-\u003eScope(Name a b)c a",
        "package": "bound",
        "partial": "Name",
        "signature": "(a-\u003eMaybe b)-\u003ef a-\u003eScope(Name a b)f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:instantiate1Name",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e that binds one (named) variable, instantiating it.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einstantiate1Name\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003einstantiate1\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Scope n f a -\u003e f a",
        "fct-source": "src/Bound-Name.html#instantiate1Name",
        "fct-type": "function",
        "title": "instantiate1Name"
      },
      "index": {
        "description": "Enter Scope that binds one named variable instantiating it instantiate1Name instantiate1",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "instantiate1Name",
        "normalized": "a b-\u003eScope c a b-\u003ea b",
        "package": "bound",
        "partial": "Name",
        "signature": "f a-\u003eScope n f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:instantiateName",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a scope, instantiating all bound variables, but discarding (comonadic)\n meta data, like its name\n\u003c/p\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e f a) -\u003e Scope (n b) f a -\u003e f a",
        "fct-source": "src/Bound-Name.html#instantiateName",
        "fct-type": "function",
        "title": "instantiateName"
      },
      "index": {
        "description": "Enter scope instantiating all bound variables but discarding comonadic meta data like its name",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "instantiateName",
        "normalized": "(a-\u003eb c)-\u003eScope(d a)b c-\u003eb c",
        "package": "bound",
        "partial": "Name",
        "signature": "(b-\u003ef a)-\u003eScope(n b)f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Name.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Name",
        "fct-package": "bound",
        "fct-signature": "Name n b -\u003e n",
        "fct-source": "src/Bound-Name.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Extract the name",
        "hierarchy": "Bound Name",
        "module": "Bound.Name",
        "name": "name",
        "normalized": "Name a b-\u003ea",
        "package": "bound",
        "partial": "",
        "signature": "Name n b-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e provides a single traditional de Bruijn level\n and is often used inside of the definition of binders.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound-Scope-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Scope provides single traditional de Bruijn level and is often used inside of the definition of binders",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "bound",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#t:Scope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e b f a\u003c/code\u003e is an \u003ccode\u003ef\u003c/code\u003e expression with bound variables in \u003ccode\u003eb\u003c/code\u003e,\n and free variables in \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis implements traditional de Bruijn indices, while \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e\n implements generalized de Bruijn indices.\n\u003c/p\u003e\u003cp\u003eThese traditional indices can be used to test the performance gain\n of generalized indices.\n\u003c/p\u003e\u003cp\u003eWhile this type \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e\n this module focuses on a drop-in replacement for \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAnother use case is for syntaxes not stable under substitution,\n therefore with only a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance and no \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "newtype",
        "fct-source": "src/Bound-Scope-Simple.html#Scope",
        "fct-type": "newtype",
        "title": "Scope"
      },
      "index": {
        "description": "Scope is an expression with bound variables in and free variables in This implements traditional de Bruijn indices while Scope implements generalized de Bruijn indices These traditional indices can be used to test the performance gain of generalized indices While this type Scope is identical to EitherT this module focuses on drop-in replacement for Scope Another use case is for syntaxes not stable under substitution therefore with only Functor instance and no Monad instance",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:Scope",
      "description": {
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "Scope",
        "fct-source": "src/Bound-Scope-Simple.html#Scope",
        "fct-type": "function",
        "title": "Scope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:abstract",
      "description": {
        "fct-descr": "\u003cp\u003eCapture some free variables in an expression to yield\n a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e with bound variables in \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m + Data.List\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eabstract (`elemIndex` \"bar\") \"barry\"\n\u003c/code\u003e\u003c/strong\u003eScope [B 0,B 1,B 2,B 2,F 'y']\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e Maybe b) -\u003e f a -\u003e Scope b f a",
        "fct-source": "src/Bound-Scope-Simple.html#abstract",
        "fct-type": "function",
        "title": "abstract"
      },
      "index": {
        "description": "Capture some free variables in an expression to yield Scope with bound variables in Data.List abstract elemIndex bar barry Scope",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "abstract",
        "normalized": "(a-\u003eMaybe b)-\u003ec a-\u003eScope b c a",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003eMaybe b)-\u003ef a-\u003eScope b f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:abstract1",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract over a single variable\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eabstract1 'x' \"xyz\"\n\u003c/code\u003e\u003c/strong\u003eScope [B (),F 'y',F 'z']\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "a -\u003e f a -\u003e Scope () f a",
        "fct-source": "src/Bound-Scope-Simple.html#abstract1",
        "fct-type": "function",
        "title": "abstract1"
      },
      "index": {
        "description": "Abstract over single variable abstract1 xyz Scope",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "abstract1",
        "normalized": "a-\u003eb a-\u003eScope()b a",
        "package": "bound",
        "partial": "",
        "signature": "a-\u003ef a-\u003eScope()f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:bindings",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of occurences of the variables bound by this \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "Scope b f a -\u003e [b]",
        "fct-source": "src/Bound-Scope-Simple.html#bindings",
        "fct-type": "function",
        "title": "bindings"
      },
      "index": {
        "description": "Return list of occurences of the variables bound by this Scope",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "bindings",
        "normalized": "Scope a b c-\u003e[a]",
        "package": "bound",
        "partial": "",
        "signature": "Scope b f a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:deserializeScope",
      "description": {
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "m b -\u003e m v -\u003e m (Scope b f v)",
        "fct-source": "src/Bound-Scope-Simple.html#deserializeScope",
        "fct-type": "function",
        "title": "deserializeScope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "deserializeScope",
        "normalized": "a b-\u003ea c-\u003ea(Scope b d c)",
        "package": "bound",
        "partial": "Scope",
        "signature": "m b-\u003em v-\u003em(Scope b f v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:foldMapBound",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a result by collecting information from both bound and free\n variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e r) -\u003e Scope b f a -\u003e r",
        "fct-source": "src/Bound-Scope-Simple.html#foldMapBound",
        "fct-type": "function",
        "title": "foldMapBound"
      },
      "index": {
        "description": "Obtain result by collecting information from both bound and free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "foldMapBound",
        "normalized": "(a-\u003eb)-\u003eScope a c d-\u003eb",
        "package": "bound",
        "partial": "Map Bound",
        "signature": "(b-\u003er)-\u003eScope b f a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:foldMapScope",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a result by collecting information from both bound and free\n variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e r) -\u003e (a -\u003e r) -\u003e Scope b f a -\u003e r",
        "fct-source": "src/Bound-Scope-Simple.html#foldMapScope",
        "fct-type": "function",
        "title": "foldMapScope"
      },
      "index": {
        "description": "Obtain result by collecting information from both bound and free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "foldMapScope",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eScope a d c-\u003eb",
        "package": "bound",
        "partial": "Map Scope",
        "signature": "(b-\u003er)-\u003e(a-\u003er)-\u003eScope b f a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:fromScope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is just another name for \u003ccode\u003e\u003ca\u003eunscope\u003c/a\u003e\u003c/code\u003e and is exported\n to mimick \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e.\n In particular no \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e constraint is required.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "Scope b f a -\u003e f (Var b a)",
        "fct-source": "src/Bound-Scope-Simple.html#fromScope",
        "fct-type": "function",
        "title": "fromScope"
      },
      "index": {
        "description": "fromScope is just another name for unscope and is exported to mimick fromScope In particular no Monad constraint is required",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "fromScope",
        "normalized": "Scope a b c-\u003eb(Var a c)",
        "package": "bound",
        "partial": "Scope",
        "signature": "Scope b f a-\u003ef(Var b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:instantiate",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a scope, instantiating all bound variables\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m + Data.List\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstantiate (\\x -\u003e [toEnum (97 + x)]) $ abstract (`elemIndex` \"bar\") \"barry\"\n\u003c/code\u003e\u003c/strong\u003e\"abccy\"\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e f a) -\u003e Scope b f a -\u003e f a",
        "fct-source": "src/Bound-Scope-Simple.html#instantiate",
        "fct-type": "function",
        "title": "instantiate"
      },
      "index": {
        "description": "Enter scope instantiating all bound variables Data.List instantiate toEnum abstract elemIndex bar barry abccy",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "instantiate",
        "normalized": "(a-\u003eb c)-\u003eScope a b c-\u003eb c",
        "package": "bound",
        "partial": "",
        "signature": "(b-\u003ef a)-\u003eScope b f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:instantiate1",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e that binds one variable, instantiating it\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstantiate1 \"x\" $ Scope [B (),F 'y',F 'z']\n\u003c/code\u003e\u003c/strong\u003e\"xyz\"\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Scope n f a -\u003e f a",
        "fct-source": "src/Bound-Scope-Simple.html#instantiate1",
        "fct-type": "function",
        "title": "instantiate1"
      },
      "index": {
        "description": "Enter Scope that binds one variable instantiating it instantiate1 Scope xyz",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "instantiate1",
        "normalized": "a b-\u003eScope c a b-\u003ea b",
        "package": "bound",
        "partial": "",
        "signature": "f a-\u003eScope n f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:liftMBound",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a change of variables on bound variables given only a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e b') -\u003e Scope b m a -\u003e Scope b' m a",
        "fct-source": "src/Bound-Scope-Simple.html#liftMBound",
        "fct-type": "function",
        "title": "liftMBound"
      },
      "index": {
        "description": "Perform change of variables on bound variables given only Monad instance",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "liftMBound",
        "normalized": "(a-\u003eb)-\u003eScope a c d-\u003eScope b c d",
        "package": "bound",
        "partial": "MBound",
        "signature": "(b-\u003eb')-\u003eScope b m a-\u003eScope b' m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:liftMScope",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emapScope\u003c/a\u003e\u003c/code\u003e that can be used when you only have the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e d) -\u003e (a -\u003e c) -\u003e Scope b m a -\u003e Scope d m c",
        "fct-source": "src/Bound-Scope-Simple.html#liftMScope",
        "fct-type": "function",
        "title": "liftMScope"
      },
      "index": {
        "description": "version of mapScope that can be used when you only have the Monad instance",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "liftMScope",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eScope a e c-\u003eScope b e d",
        "package": "bound",
        "partial": "MScope",
        "signature": "(b-\u003ed)-\u003e(a-\u003ec)-\u003eScope b m a-\u003eScope d m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:mapBound",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a change of variables on bound variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e b') -\u003e Scope b f a -\u003e Scope b' f a",
        "fct-source": "src/Bound-Scope-Simple.html#mapBound",
        "fct-type": "function",
        "title": "mapBound"
      },
      "index": {
        "description": "Perform change of variables on bound variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "mapBound",
        "normalized": "(a-\u003eb)-\u003eScope a c d-\u003eScope b c d",
        "package": "bound",
        "partial": "Bound",
        "signature": "(b-\u003eb')-\u003eScope b f a-\u003eScope b' f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:mapMBound",
      "description": {
        "fct-descr": "\u003cp\u003emapM over both bound and free variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m c) -\u003e Scope b f a -\u003e m (Scope c f a)",
        "fct-source": "src/Bound-Scope-Simple.html#mapMBound",
        "fct-type": "function",
        "title": "mapMBound"
      },
      "index": {
        "description": "mapM over both bound and free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "mapMBound",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb(Scope c d e)",
        "package": "bound",
        "partial": "MBound",
        "signature": "(b-\u003em c)-\u003eScope b f a-\u003em(Scope c f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:mapMBound_",
      "description": {
        "fct-descr": "\u003cp\u003emapM_ over the variables bound by this scope\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e Scope b f a -\u003e g ()",
        "fct-source": "src/Bound-Scope-Simple.html#mapMBound_",
        "fct-type": "function",
        "title": "mapMBound_"
      },
      "index": {
        "description": "mapM over the variables bound by this scope",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "mapMBound_",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb()",
        "package": "bound",
        "partial": "MBound",
        "signature": "(b-\u003eg d)-\u003eScope b f a-\u003eg()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:mapMScope",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etraverseScope\u003c/a\u003e\u003c/code\u003e that can be used when you only have a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m d) -\u003e (a -\u003e m c) -\u003e Scope b f a -\u003e m (Scope d f c)",
        "fct-source": "src/Bound-Scope-Simple.html#mapMScope",
        "fct-type": "function",
        "title": "mapMScope"
      },
      "index": {
        "description": "traverseScope that can be used when you only have Monad instance",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "mapMScope",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb(Scope c f e)",
        "package": "bound",
        "partial": "MScope",
        "signature": "(b-\u003em d)-\u003e(a-\u003em c)-\u003eScope b f a-\u003em(Scope d f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:mapMScope_",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etraverseScope_\u003c/a\u003e\u003c/code\u003e that can be used when you only have a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m d) -\u003e (a -\u003e m c) -\u003e Scope b f a -\u003e m ()",
        "fct-source": "src/Bound-Scope-Simple.html#mapMScope_",
        "fct-type": "function",
        "title": "mapMScope_"
      },
      "index": {
        "description": "traverseScope that can be used when you only have Monad instance",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "mapMScope_",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb()",
        "package": "bound",
        "partial": "MScope",
        "signature": "(b-\u003em d)-\u003e(a-\u003em c)-\u003eScope b f a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:mapScope",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a change of variables, reassigning both bound and free variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e d) -\u003e (a -\u003e c) -\u003e Scope b f a -\u003e Scope d f c",
        "fct-source": "src/Bound-Scope-Simple.html#mapScope",
        "fct-type": "function",
        "title": "mapScope"
      },
      "index": {
        "description": "Perform change of variables reassigning both bound and free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "mapScope",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eScope a e c-\u003eScope b e d",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003ed)-\u003e(a-\u003ec)-\u003eScope b f a-\u003eScope d f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:serializeScope",
      "description": {
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m ()) -\u003e (v -\u003e m ()) -\u003e Scope b f v -\u003e m ()",
        "fct-source": "src/Bound-Scope-Simple.html#serializeScope",
        "fct-type": "function",
        "title": "serializeScope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "serializeScope",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eScope a d c-\u003eb()",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003em())-\u003e(v-\u003em())-\u003eScope b f v-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:splat",
      "description": {
        "fct-descr": "\u003cp\u003ePerform substitution on both bound and free variables in a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e f c) -\u003e (b -\u003e f c) -\u003e Scope b f a -\u003e f c",
        "fct-source": "src/Bound-Scope-Simple.html#splat",
        "fct-type": "function",
        "title": "splat"
      },
      "index": {
        "description": "Perform substitution on both bound and free variables in Scope",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "splat",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eScope d b a-\u003eb c",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003ef c)-\u003e(b-\u003ef c)-\u003eScope b f a-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:toScope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is just another name for \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e and is exported\n to mimick \u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e.\n In particular no \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e constraint is required.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "f (Var b a) -\u003e Scope b f a",
        "fct-source": "src/Bound-Scope-Simple.html#toScope",
        "fct-type": "function",
        "title": "toScope"
      },
      "index": {
        "description": "toScope is just another name for Scope and is exported to mimick toScope In particular no Monad constraint is required",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "toScope",
        "normalized": "a(Var b c)-\u003eScope b a c",
        "package": "bound",
        "partial": "Scope",
        "signature": "f(Var b a)-\u003eScope b f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:traverseBound",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse both bound and free variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g c) -\u003e Scope b f a -\u003e g (Scope c f a)",
        "fct-source": "src/Bound-Scope-Simple.html#traverseBound",
        "fct-type": "function",
        "title": "traverseBound"
      },
      "index": {
        "description": "Traverse both bound and free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "traverseBound",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb(Scope c d e)",
        "package": "bound",
        "partial": "Bound",
        "signature": "(b-\u003eg c)-\u003eScope b f a-\u003eg(Scope c f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:traverseBound_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e the bound variables in a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e Scope b f a -\u003e g ()",
        "fct-source": "src/Bound-Scope-Simple.html#traverseBound_",
        "fct-type": "function",
        "title": "traverseBound_"
      },
      "index": {
        "description": "traverse the bound variables in Scope",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "traverseBound_",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb()",
        "package": "bound",
        "partial": "Bound",
        "signature": "(b-\u003eg d)-\u003eScope b f a-\u003eg()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:traverseScope",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse both bound and free variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e (a -\u003e g c) -\u003e Scope b f a -\u003e g (Scope d f c)",
        "fct-source": "src/Bound-Scope-Simple.html#traverseScope",
        "fct-type": "function",
        "title": "traverseScope"
      },
      "index": {
        "description": "Traverse both bound and free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "traverseScope",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb(Scope c f e)",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003eg d)-\u003e(a-\u003eg c)-\u003eScope b f a-\u003eg(Scope d f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:traverseScope_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e both the variables bound by this scope and any free variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e (a -\u003e g c) -\u003e Scope b f a -\u003e g ()",
        "fct-source": "src/Bound-Scope-Simple.html#traverseScope_",
        "fct-type": "function",
        "title": "traverseScope_"
      },
      "index": {
        "description": "traverse both the variables bound by this scope and any free variables",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "traverseScope_",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb()",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003eg d)-\u003e(a-\u003eg c)-\u003eScope b f a-\u003eg()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope-Simple.html#v:unscope",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bound.Scope.Simple",
        "fct-package": "bound",
        "fct-signature": "f (Var b a)",
        "fct-source": "src/Bound-Scope-Simple.html#Scope",
        "fct-type": "function",
        "title": "unscope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope Simple",
        "module": "Bound.Scope.Simple",
        "name": "unscope",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the work-horse of the \u003ccode\u003ebound\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e provides a single generalized de Bruijn level\n and is often used inside of the definition of binders.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound-Scope.html",
        "fct-type": "module",
        "title": "Scope"
      },
      "index": {
        "description": "This is the work-horse of the bound library Scope provides single generalized de Bruijn level and is often used inside of the definition of binders",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#t:Scope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e b f a\u003c/code\u003e is an \u003ccode\u003ef\u003c/code\u003e expression with bound variables in \u003ccode\u003eb\u003c/code\u003e,\n and free variables in \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWe store bound variables as their generalized de Bruijn\n representation in that we're allowed to \u003ccode\u003elift\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e) an entire\n tree rather than only succ individual variables, but we're still\n only allowed to do so once per \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e. Weakening trees permits\n \u003cem\u003eO(1)\u003c/em\u003e weakening and permits more sharing opportunities. Here the\n deBruijn 0 is represented by the \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e, while the\n de Bruijn \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e (which may be applied to an entire tree!) is handled\n by \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNB: equality and comparison quotient out the distinct \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e placements\n allowed by the generalized de Bruijn representation and return the\n same result as a traditional de Bruijn representation would.\n\u003c/p\u003e\u003cp\u003eLogically you can think of this as if the shape were the traditional\n \u003ccode\u003ef (Var b a)\u003c/code\u003e, but the extra \u003ccode\u003ef a\u003c/code\u003e inside permits us a cheaper \u003ccode\u003elift\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "newtype",
        "fct-source": "src/Bound-Scope.html#Scope",
        "fct-type": "newtype",
        "title": "Scope"
      },
      "index": {
        "description": "Scope is an expression with bound variables in and free variables in We store bound variables as their generalized de Bruijn representation in that we re allowed to lift using an entire tree rather than only succ individual variables but we re still only allowed to do so once per Scope Weakening trees permits weakening and permits more sharing opportunities Here the deBruijn is represented by the constructor of Var while the de Bruijn succ which may be applied to an entire tree is handled by NB equality and comparison quotient out the distinct placements allowed by the generalized de Bruijn representation and return the same result as traditional de Bruijn representation would Logically you can think of this as if the shape were the traditional Var but the extra inside permits us cheaper lift",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:Scope",
      "description": {
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "Scope",
        "fct-source": "src/Bound-Scope.html#Scope",
        "fct-type": "function",
        "title": "Scope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:abstract",
      "description": {
        "fct-descr": "\u003cp\u003eCapture some free variables in an expression to yield\n a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e with bound variables in \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m + Data.List\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eabstract (`elemIndex` \"bar\") \"barry\"\n\u003c/code\u003e\u003c/strong\u003eScope [B 0,B 1,B 2,B 2,F \"y\"]\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e Maybe b) -\u003e f a -\u003e Scope b f a",
        "fct-source": "src/Bound-Scope.html#abstract",
        "fct-type": "function",
        "title": "abstract"
      },
      "index": {
        "description": "Capture some free variables in an expression to yield Scope with bound variables in Data.List abstract elemIndex bar barry Scope",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "abstract",
        "normalized": "(a-\u003eMaybe b)-\u003ec a-\u003eScope b c a",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003eMaybe b)-\u003ef a-\u003eScope b f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:abstract1",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract over a single variable\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eabstract1 'x' \"xyz\"\n\u003c/code\u003e\u003c/strong\u003eScope [B (),F \"y\",F \"z\"]\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "a -\u003e f a -\u003e Scope () f a",
        "fct-source": "src/Bound-Scope.html#abstract1",
        "fct-type": "function",
        "title": "abstract1"
      },
      "index": {
        "description": "Abstract over single variable abstract1 xyz Scope",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "abstract1",
        "normalized": "a-\u003eb a-\u003eScope()b a",
        "package": "bound",
        "partial": "",
        "signature": "a-\u003ef a-\u003eScope()f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:bindings",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of occurences of the variables bound by this \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "Scope b f a -\u003e [b]",
        "fct-source": "src/Bound-Scope.html#bindings",
        "fct-type": "function",
        "title": "bindings"
      },
      "index": {
        "description": "Return list of occurences of the variables bound by this Scope",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "bindings",
        "normalized": "Scope a b c-\u003e[a]",
        "package": "bound",
        "partial": "",
        "signature": "Scope b f a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:deserializeScope",
      "description": {
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "m b -\u003e m v -\u003e m (Scope b f v)",
        "fct-source": "src/Bound-Scope.html#deserializeScope",
        "fct-type": "function",
        "title": "deserializeScope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "deserializeScope",
        "normalized": "a b-\u003ea c-\u003ea(Scope b d c)",
        "package": "bound",
        "partial": "Scope",
        "signature": "m b-\u003em v-\u003em(Scope b f v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:foldMapBound",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a result by collecting information from both bound and free\n variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e r) -\u003e Scope b f a -\u003e r",
        "fct-source": "src/Bound-Scope.html#foldMapBound",
        "fct-type": "function",
        "title": "foldMapBound"
      },
      "index": {
        "description": "Obtain result by collecting information from both bound and free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "foldMapBound",
        "normalized": "(a-\u003eb)-\u003eScope a c d-\u003eb",
        "package": "bound",
        "partial": "Map Bound",
        "signature": "(b-\u003er)-\u003eScope b f a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:foldMapScope",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a result by collecting information from both bound and free\n variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e r) -\u003e (a -\u003e r) -\u003e Scope b f a -\u003e r",
        "fct-source": "src/Bound-Scope.html#foldMapScope",
        "fct-type": "function",
        "title": "foldMapScope"
      },
      "index": {
        "description": "Obtain result by collecting information from both bound and free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "foldMapScope",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eScope a d c-\u003eb",
        "package": "bound",
        "partial": "Map Scope",
        "signature": "(b-\u003er)-\u003e(a-\u003er)-\u003eScope b f a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:fromScope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e quotients out the possible placements of \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e\n by distributing them all to the leaves. This yields a more traditional\n de Bruijn indexing scheme for bound variables.\n\u003c/p\u003e\u003cp\u003eSince,\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003ewe know that\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eand therefore \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e is idempotent.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "Scope b f a -\u003e f (Var b a)",
        "fct-source": "src/Bound-Scope.html#fromScope",
        "fct-type": "function",
        "title": "fromScope"
      },
      "index": {
        "description": "fromScope quotients out the possible placements of in Scope by distributing them all to the leaves This yields more traditional de Bruijn indexing scheme for bound variables Since fromScope toScope id we know that fromScope toScope fromScope fromScope and therefore toScope fromScope is idempotent",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "fromScope",
        "normalized": "Scope a b c-\u003eb(Var a c)",
        "package": "bound",
        "partial": "Scope",
        "signature": "Scope b f a-\u003ef(Var b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:instantiate",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a scope, instantiating all bound variables\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m + Data.List\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstantiate (\\x -\u003e [toEnum (97 + x)]) $ abstract (`elemIndex` \"bar\") \"barry\"\n\u003c/code\u003e\u003c/strong\u003e\"abccy\"\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e f a) -\u003e Scope b f a -\u003e f a",
        "fct-source": "src/Bound-Scope.html#instantiate",
        "fct-type": "function",
        "title": "instantiate"
      },
      "index": {
        "description": "Enter scope instantiating all bound variables Data.List instantiate toEnum abstract elemIndex bar barry abccy",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "instantiate",
        "normalized": "(a-\u003eb c)-\u003eScope a b c-\u003eb c",
        "package": "bound",
        "partial": "",
        "signature": "(b-\u003ef a)-\u003eScope b f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:instantiate1",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e that binds one variable, instantiating it\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstantiate1 \"x\" $ Scope [B (),F \"y\",F \"z\"]\n\u003c/code\u003e\u003c/strong\u003e\"xyz\"\n\u003c/pre\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Scope n f a -\u003e f a",
        "fct-source": "src/Bound-Scope.html#instantiate1",
        "fct-type": "function",
        "title": "instantiate1"
      },
      "index": {
        "description": "Enter Scope that binds one variable instantiating it instantiate1 Scope xyz",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "instantiate1",
        "normalized": "a b-\u003eScope c a b-\u003ea b",
        "package": "bound",
        "partial": "",
        "signature": "f a-\u003eScope n f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:liftMBound",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a change of variables on bound variables given only a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e b') -\u003e Scope b m a -\u003e Scope b' m a",
        "fct-source": "src/Bound-Scope.html#liftMBound",
        "fct-type": "function",
        "title": "liftMBound"
      },
      "index": {
        "description": "Perform change of variables on bound variables given only Monad instance",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "liftMBound",
        "normalized": "(a-\u003eb)-\u003eScope a c d-\u003eScope b c d",
        "package": "bound",
        "partial": "MBound",
        "signature": "(b-\u003eb')-\u003eScope b m a-\u003eScope b' m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:liftMScope",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emapScope\u003c/a\u003e\u003c/code\u003e that can be used when you only have the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e d) -\u003e (a -\u003e c) -\u003e Scope b m a -\u003e Scope d m c",
        "fct-source": "src/Bound-Scope.html#liftMScope",
        "fct-type": "function",
        "title": "liftMScope"
      },
      "index": {
        "description": "version of mapScope that can be used when you only have the Monad instance",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "liftMScope",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eScope a e c-\u003eScope b e d",
        "package": "bound",
        "partial": "MScope",
        "signature": "(b-\u003ed)-\u003e(a-\u003ec)-\u003eScope b m a-\u003eScope d m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:mapBound",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a change of variables on bound variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e b') -\u003e Scope b f a -\u003e Scope b' f a",
        "fct-source": "src/Bound-Scope.html#mapBound",
        "fct-type": "function",
        "title": "mapBound"
      },
      "index": {
        "description": "Perform change of variables on bound variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "mapBound",
        "normalized": "(a-\u003eb)-\u003eScope a c d-\u003eScope b c d",
        "package": "bound",
        "partial": "Bound",
        "signature": "(b-\u003eb')-\u003eScope b f a-\u003eScope b' f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:mapMBound",
      "description": {
        "fct-descr": "\u003cp\u003emapM over both bound and free variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m c) -\u003e Scope b f a -\u003e m (Scope c f a)",
        "fct-source": "src/Bound-Scope.html#mapMBound",
        "fct-type": "function",
        "title": "mapMBound"
      },
      "index": {
        "description": "mapM over both bound and free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "mapMBound",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb(Scope c d e)",
        "package": "bound",
        "partial": "MBound",
        "signature": "(b-\u003em c)-\u003eScope b f a-\u003em(Scope c f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:mapMBound_",
      "description": {
        "fct-descr": "\u003cp\u003emapM_ over the variables bound by this scope\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e Scope b f a -\u003e g ()",
        "fct-source": "src/Bound-Scope.html#mapMBound_",
        "fct-type": "function",
        "title": "mapMBound_"
      },
      "index": {
        "description": "mapM over the variables bound by this scope",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "mapMBound_",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb()",
        "package": "bound",
        "partial": "MBound",
        "signature": "(b-\u003eg d)-\u003eScope b f a-\u003eg()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:mapMScope",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etraverseScope\u003c/a\u003e\u003c/code\u003e that can be used when you only have a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m d) -\u003e (a -\u003e m c) -\u003e Scope b f a -\u003e m (Scope d f c)",
        "fct-source": "src/Bound-Scope.html#mapMScope",
        "fct-type": "function",
        "title": "mapMScope"
      },
      "index": {
        "description": "traverseScope that can be used when you only have Monad instance",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "mapMScope",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb(Scope c f e)",
        "package": "bound",
        "partial": "MScope",
        "signature": "(b-\u003em d)-\u003e(a-\u003em c)-\u003eScope b f a-\u003em(Scope d f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:mapMScope_",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etraverseScope_\u003c/a\u003e\u003c/code\u003e that can be used when you only have a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n instance\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m d) -\u003e (a -\u003e m c) -\u003e Scope b f a -\u003e m ()",
        "fct-source": "src/Bound-Scope.html#mapMScope_",
        "fct-type": "function",
        "title": "mapMScope_"
      },
      "index": {
        "description": "traverseScope that can be used when you only have Monad instance",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "mapMScope_",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb()",
        "package": "bound",
        "partial": "MScope",
        "signature": "(b-\u003em d)-\u003e(a-\u003em c)-\u003eScope b f a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:mapScope",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a change of variables, reassigning both bound and free variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e d) -\u003e (a -\u003e c) -\u003e Scope b f a -\u003e Scope d f c",
        "fct-source": "src/Bound-Scope.html#mapScope",
        "fct-type": "function",
        "title": "mapScope"
      },
      "index": {
        "description": "Perform change of variables reassigning both bound and free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "mapScope",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eScope a e c-\u003eScope b e d",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003ed)-\u003e(a-\u003ec)-\u003eScope b f a-\u003eScope d f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:serializeScope",
      "description": {
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e m ()) -\u003e (v -\u003e m ()) -\u003e Scope b f v -\u003e m ()",
        "fct-source": "src/Bound-Scope.html#serializeScope",
        "fct-type": "function",
        "title": "serializeScope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "serializeScope",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eScope a d c-\u003eb()",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003em())-\u003e(v-\u003em())-\u003eScope b f v-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:splat",
      "description": {
        "fct-descr": "\u003cp\u003ePerform substitution on both bound and free variables in a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e f c) -\u003e (b -\u003e f c) -\u003e Scope b f a -\u003e f c",
        "fct-source": "src/Bound-Scope.html#splat",
        "fct-type": "function",
        "title": "splat"
      },
      "index": {
        "description": "Perform substitution on both bound and free variables in Scope",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "splat",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eScope d b a-\u003eb c",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003ef c)-\u003e(b-\u003ef c)-\u003eScope b f a-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:toScope",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from traditional de Bruijn to generalized de Bruijn indices.\n\u003c/p\u003e\u003cp\u003eThis requires a full tree traversal\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "f (Var b a) -\u003e Scope b f a",
        "fct-source": "src/Bound-Scope.html#toScope",
        "fct-type": "function",
        "title": "toScope"
      },
      "index": {
        "description": "Convert from traditional de Bruijn to generalized de Bruijn indices This requires full tree traversal",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "toScope",
        "normalized": "a(Var b c)-\u003eScope b a c",
        "package": "bound",
        "partial": "Scope",
        "signature": "f(Var b a)-\u003eScope b f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:traverseBound",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse both bound and free variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g c) -\u003e Scope b f a -\u003e g (Scope c f a)",
        "fct-source": "src/Bound-Scope.html#traverseBound",
        "fct-type": "function",
        "title": "traverseBound"
      },
      "index": {
        "description": "Traverse both bound and free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "traverseBound",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb(Scope c d e)",
        "package": "bound",
        "partial": "Bound",
        "signature": "(b-\u003eg c)-\u003eScope b f a-\u003eg(Scope c f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:traverseBound_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e the bound variables in a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e Scope b f a -\u003e g ()",
        "fct-source": "src/Bound-Scope.html#traverseBound_",
        "fct-type": "function",
        "title": "traverseBound_"
      },
      "index": {
        "description": "traverse the bound variables in Scope",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "traverseBound_",
        "normalized": "(a-\u003eb c)-\u003eScope a d e-\u003eb()",
        "package": "bound",
        "partial": "Bound",
        "signature": "(b-\u003eg d)-\u003eScope b f a-\u003eg()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:traverseScope",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse both bound and free variables\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e (a -\u003e g c) -\u003e Scope b f a -\u003e g (Scope d f c)",
        "fct-source": "src/Bound-Scope.html#traverseScope",
        "fct-type": "function",
        "title": "traverseScope"
      },
      "index": {
        "description": "Traverse both bound and free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "traverseScope",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb(Scope c f e)",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003eg d)-\u003e(a-\u003eg c)-\u003eScope b f a-\u003eg(Scope d f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:traverseScope_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e both the variables bound by this scope and any free variables.\n\u003c/p\u003e",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e g d) -\u003e (a -\u003e g c) -\u003e Scope b f a -\u003e g ()",
        "fct-source": "src/Bound-Scope.html#traverseScope_",
        "fct-type": "function",
        "title": "traverseScope_"
      },
      "index": {
        "description": "traverse both the variables bound by this scope and any free variables",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "traverseScope_",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eScope a f d-\u003eb()",
        "package": "bound",
        "partial": "Scope",
        "signature": "(b-\u003eg d)-\u003e(a-\u003eg c)-\u003eScope b f a-\u003eg()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Scope.html#v:unscope",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bound.Scope",
        "fct-package": "bound",
        "fct-signature": "f (Var b (f a))",
        "fct-source": "src/Bound-Scope.html#Scope",
        "fct-type": "function",
        "title": "unscope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Scope",
        "module": "Bound.Scope",
        "name": "unscope",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Term.html#",
      "description": {
        "fct-module": "Bound.Term",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound-Term.html",
        "fct-type": "module",
        "title": "Term"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Term",
        "module": "Bound.Term",
        "name": "Term",
        "normalized": "",
        "package": "bound",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Term.html#v:closed",
      "description": {
        "fct-descr": "\u003cp\u003eIf a term has no free variables, you can freely change the type of\n free variables it is parameterized on.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eclosed [12]\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eclosed \"\"\n\u003c/code\u003e\u003c/strong\u003eJust []\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t closed \"\"\n\u003c/code\u003e\u003c/strong\u003eclosed \"\" :: Maybe [b]\n\u003c/pre\u003e",
        "fct-module": "Bound.Term",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Maybe (f b)",
        "fct-source": "src/Bound-Term.html#closed",
        "fct-type": "function",
        "title": "closed"
      },
      "index": {
        "description": "If term has no free variables you can freely change the type of free variables it is parameterized on closed Nothing closed Just closed closed Maybe",
        "hierarchy": "Bound Term",
        "module": "Bound.Term",
        "name": "closed",
        "normalized": "a b-\u003eMaybe(a c)",
        "package": "bound",
        "partial": "",
        "signature": "f a-\u003eMaybe(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Term.html#v:isClosed",
      "description": {
        "fct-descr": "\u003cp\u003eA closed term has no free variables.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisClosed []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisClosed [1,2,3]\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Bound.Term",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Bool",
        "fct-source": "src/Bound-Term.html#isClosed",
        "fct-type": "function",
        "title": "isClosed"
      },
      "index": {
        "description": "closed term has no free variables isClosed True isClosed False",
        "hierarchy": "Bound Term",
        "module": "Bound.Term",
        "name": "isClosed",
        "normalized": "a b-\u003eBool",
        "package": "bound",
        "partial": "Closed",
        "signature": "f a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Term.html#v:substitute",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e a p w\u003c/code\u003e replaces the free variable \u003ccode\u003ea\u003c/code\u003e with \u003ccode\u003ep\u003c/code\u003e in \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubstitute \"hello\" [\"goodnight\",\"Gracie\"] [\"hello\",\"!!!\"]\n\u003c/code\u003e\u003c/strong\u003e[\"goodnight\",\"Gracie\",\"!!!\"]\n\u003c/pre\u003e",
        "fct-module": "Bound.Term",
        "fct-package": "bound",
        "fct-signature": "a -\u003e f a -\u003e f a -\u003e f a",
        "fct-source": "src/Bound-Term.html#substitute",
        "fct-type": "function",
        "title": "substitute"
      },
      "index": {
        "description": "substitute replaces the free variable with in substitute hello goodnight Gracie hello goodnight Gracie",
        "hierarchy": "Bound Term",
        "module": "Bound.Term",
        "name": "substitute",
        "normalized": "a-\u003eb a-\u003eb a-\u003eb a",
        "package": "bound",
        "partial": "",
        "signature": "a-\u003ef a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Term.html#v:substituteVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esubstituteVar\u003c/a\u003e\u003c/code\u003e a b w\u003c/code\u003e replaces a free variable \u003ccode\u003ea\u003c/code\u003e with another free variable \u003ccode\u003eb\u003c/code\u003e in \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubstituteVar \"Alice\" \"Bob\" [\"Alice\",\"Bob\",\"Charlie\"]\n\u003c/code\u003e\u003c/strong\u003e[\"Bob\",\"Bob\",\"Charlie\"]\n\u003c/pre\u003e",
        "fct-module": "Bound.Term",
        "fct-package": "bound",
        "fct-signature": "a -\u003e a -\u003e f a -\u003e f a",
        "fct-source": "src/Bound-Term.html#substituteVar",
        "fct-type": "function",
        "title": "substituteVar"
      },
      "index": {
        "description": "substituteVar replaces free variable with another free variable in substituteVar Alice Bob Alice Bob Charlie Bob Bob Charlie",
        "hierarchy": "Bound Term",
        "module": "Bound.Term",
        "name": "substituteVar",
        "normalized": "a-\u003ea-\u003eb a-\u003eb a",
        "package": "bound",
        "partial": "Var",
        "signature": "a-\u003ea-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#",
      "description": {
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound-Var.html",
        "fct-type": "module",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "Var",
        "normalized": "",
        "package": "bound",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003e\"I am not a number, I am a \u003cem\u003efree monad\u003c/em\u003e!\"\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e b a\u003c/code\u003e is a variable that may either be \"bound\" (\u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e) or \"free\" (\u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e(It is also technically a free monad in the same near-trivial sense as\n \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "data",
        "fct-source": "src/Bound-Var.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "am not number am free monad Var is variable that may either be bound or free It is also technically free monad in the same near-trivial sense as Either",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "Var",
        "normalized": "",
        "package": "bound",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#v:B",
      "description": {
        "fct-descr": "\u003cp\u003ethis is a bound variable\n\u003c/p\u003e",
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "B b",
        "fct-source": "src/Bound-Var.html#Var",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "this is bound variable",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "B",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#v:F",
      "description": {
        "fct-descr": "\u003cp\u003ethis is a free variable\n\u003c/p\u003e",
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "F a",
        "fct-source": "src/Bound-Var.html#Var",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "this is free variable",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "F",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#v:_B",
      "description": {
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "p b (f b') -\u003e p (Var b a) (f (Var b' a))",
        "fct-source": "src/Bound-Var.html#_B",
        "fct-type": "function",
        "title": "_B"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "_B",
        "normalized": "a b(c d)-\u003ea(Var b e)(c(Var d e))",
        "package": "bound",
        "partial": "",
        "signature": "p b(f b')-\u003ep(Var b a)(f(Var b' a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#v:_F",
      "description": {
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "p a (f a') -\u003e p (Var b a) (f (Var b a'))",
        "fct-source": "src/Bound-Var.html#_F",
        "fct-type": "function",
        "title": "_F"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "_F",
        "normalized": "a b(c d)-\u003ea(Var e b)(c(Var e d))",
        "package": "bound",
        "partial": "",
        "signature": "p a(f a')-\u003ep(Var b a)(f(Var b a'))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound-Var.html#v:unvar",
      "description": {
        "fct-module": "Bound.Var",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e r) -\u003e (a -\u003e r) -\u003e Var b a -\u003e r",
        "fct-source": "src/Bound-Var.html#unvar",
        "fct-type": "function",
        "title": "unvar"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound Var",
        "module": "Bound.Var",
        "name": "unvar",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eVar a c-\u003eb",
        "package": "bound",
        "partial": "",
        "signature": "(b-\u003er)-\u003e(a-\u003er)-\u003eVar b a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe represent the target language itself as an ideal monad supplied by the\n user, and provide a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e monad transformer for introducing bound\n variables in user supplied terms. Users supply a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eTraversable\u003c/code\u003e\n instance, and we traverse to find free variables, and use the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e to\n perform substitution that avoids bound variables.\n\u003c/p\u003e\u003cp\u003eAn untyped lambda calculus:\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE DeriveFunctor, DeriveFoldable, DeriveTraversable #-}\n import Bound\n import Control.Applicative\n import Control.Monad (\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e)\n import Prelude.Extras\n import Data.Foldable\n import Data.Traversable\n\u003c/pre\u003e\u003cpre\u003e\n infixl 9 :@\n data Exp a = V a | Exp a :@ Exp a | Lam (\u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e () Exp a)\n   deriving (\u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eEq1\u003c/a\u003e\u003c/code\u003e Exp\n instance \u003ccode\u003e\u003ca\u003eOrd1\u003c/a\u003e\u003c/code\u003e Exp\n instance \u003ccode\u003e\u003ca\u003eShow1\u003c/a\u003e\u003c/code\u003e Exp\n instance \u003ccode\u003e\u003ca\u003eRead1\u003c/a\u003e\u003c/code\u003e Exp\n instance \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e Exp where \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = V; (\u003ccode\u003e\u003c*\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e Exp where\n   \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = V\n   V a      \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = f a\n   (x :@ y) \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = (x \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f) :@ (y \u003e\u003e= f)\n   Lam e    \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = Lam (e \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f)\n\u003c/pre\u003e\u003cpre\u003e\n lam :: \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e a =\u003e a -\u003e \u003ccode\u003eExp\u003c/code\u003e a -\u003e \u003ccode\u003eExp\u003c/code\u003e a\n lam v b = Lam (\u003ccode\u003e\u003ca\u003eabstract1\u003c/a\u003e\u003c/code\u003e v b)\n\u003c/pre\u003e\u003cpre\u003e\n whnf :: \u003ccode\u003eExp\u003c/code\u003e a -\u003e \u003ccode\u003eExp\u003c/code\u003e a\n whnf (f :@ a) = case whnf f of\n   Lam b -\u003e whnf (\u003ccode\u003e\u003ca\u003einstantiate1\u003c/a\u003e\u003c/code\u003e a b)\n   f'    -\u003e f' :@ a\n whnf e = e\n\u003c/pre\u003e\u003cp\u003eMore exotic combinators for manipulating a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e can be imported from\n \u003ca\u003eBound.Scope\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eYou can also retain names in your bound variables by using \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e\n and the related combinators from \u003ca\u003eBound.Name\u003c/a\u003e. They are not re-exported\n from this module by default.\n\u003c/p\u003e\u003cp\u003eThe approach used in this package was first elaborated upon by Richard Bird \n and Ross Patterson\n in \"de Bruijn notation as a nested data type\", available from\n \u003ca\u003ehttp://www.cs.uwyo.edu/~jlc/courses/5000_fall_08/debruijn_as_nested_datatype.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHowever, the combinators they used required higher rank types. Here we\n demonstrate that the higher rank \u003ccode\u003egfold\u003c/code\u003e combinator they used isn't necessary\n to build the monad and use a monad transformer to encapsulate the novel\n recursion pattern in their generalized de Bruijn representation. It is named\n \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e to match up with the terminology and usage pattern from Conor McBride\n and James McKinna's \"I am not a number: I am a free variable\", available\n from \u003ca\u003ehttp://www.cs.st-andrews.ac.uk/~james/RESEARCH/notanum.pdf\u003c/a\u003e, but since\n the set of variables is visible in the type, we can provide stronger type\n safety guarantees.\n\u003c/p\u003e\u003cp\u003eThere are longer examples in the \u003ccode\u003eexamples/\u003c/code\u003e folder:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://github.com/ekmett/bound/tree/master/examples\u003c/a\u003e\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eSimple.hs\u003c/em\u003e provides an untyped lambda calculus with recursive let\n   bindings and includes an evaluator for the untyped lambda calculus and a\n   longer example taken from Lennart Augustsson's \u003ca\u003e&#955;-calculus cooked four   ways\u003c/a\u003e available from \u003ca\u003ehttp://www.augustsson.net/Darcs/Lambda/top.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eDerived.hs\u003c/em\u003e shows how much of the API can be automated with\n    DeriveTraversable and adds combinators for building binders that support\n    pattern matching.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eOverkill.hs\u003c/em\u003e provides very strongly typed pattern matching many modern\n   language extensions, including polymorphic kinds to ensure type safety.\n   In general, the approach taken by Derived seems to deliver a better power\n   to weight ratio.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "module",
        "fct-source": "src/Bound.html",
        "fct-type": "module",
        "title": "Bound"
      },
      "index": {
        "description": "We represent the target language itself as an ideal monad supplied by the user and provide Scope monad transformer for introducing bound variables in user supplied terms Users supply Monad and Traversable instance and we traverse to find free variables and use the Monad to perform substitution that avoids bound variables An untyped lambda calculus LANGUAGE DeriveFunctor DeriveFoldable DeriveTraversable import Bound import Control.Applicative import Control.Monad ap import Prelude.Extras import Data.Foldable import Data.Traversable infixl data Exp Exp Exp Lam Scope Exp deriving Eq Ord Show Read Functor Foldable Traversable instance Eq1 Exp instance Ord1 Exp instance Show1 Exp instance Read1 Exp instance Applicative Exp where pure ap instance Monad Exp where return Lam Lam lam Eq Exp Exp lam Lam abstract1 whnf Exp Exp whnf case whnf of Lam whnf instantiate1 whnf More exotic combinators for manipulating Scope can be imported from Bound.Scope You can also retain names in your bound variables by using Name and the related combinators from Bound.Name They are not re-exported from this module by default The approach used in this package was first elaborated upon by Richard Bird and Ross Patterson in de Bruijn notation as nested data type available from http www.cs.uwyo.edu jlc courses fall debruijn as nested datatype.pdf However the combinators they used required higher rank types Here we demonstrate that the higher rank gfold combinator they used isn necessary to build the monad and use monad transformer to encapsulate the novel recursion pattern in their generalized de Bruijn representation It is named Scope to match up with the terminology and usage pattern from Conor McBride and James McKinna am not number am free variable available from http www.cs.st-andrews.ac.uk james RESEARCH notanum.pdf but since the set of variables is visible in the type we can provide stronger type safety guarantees There are longer examples in the examples folder https github.com ekmett bound tree master examples Simple.hs provides an untyped lambda calculus with recursive let bindings and includes an evaluator for the untyped lambda calculus and longer example taken from Lennart Augustsson calculus cooked four ways available from http www.augustsson.net Darcs Lambda top.pdf Derived.hs shows how much of the API can be automated with DeriveTraversable and adds combinators for building binders that support pattern matching Overkill.hs provides very strongly typed pattern matching many modern language extensions including polymorphic kinds to ensure type safety In general the approach taken by Derived seems to deliver better power to weight ratio",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "Bound",
        "normalized": "",
        "package": "bound",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#t:Bound",
      "description": {
        "fct-descr": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e generate left modules over monads.\n\u003c/p\u003e\u003cp\u003eThis means they should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e m \u003e\u003e\u003e= return &#8801; m\n m \u003e\u003e\u003e= (&#955; x &#8594; k x \u003e\u003e= h) &#8801; (m \u003e\u003e\u003e= k) \u003e\u003e\u003e= \u003c/pre\u003e\u003cp\u003eThis guarantees that a typical Monad instance for an expression type\n where Bound instances appear will satisfy the Monad laws (see doc/BoundLaws.hs).\n\u003c/p\u003e\u003cp\u003eIf instances of Bound are monad transformers, then \u003ccode\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f &#8801; m \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elift\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e\n implies the above laws, and is in fact the default definition.\n\u003c/p\u003e\u003cp\u003eThis is useful for types like expression lists, case alternatives,\n schemas, etc. that may not be expressions in their own right, but often\n contain expressions.\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "class",
        "fct-source": "src/Bound-Class.html#Bound",
        "fct-type": "class",
        "title": "Bound"
      },
      "index": {
        "description": "Instances of Bound generate left modules over monads This means they should satisfy the following laws return This guarantees that typical Monad instance for an expression type where Bound instances appear will satisfy the Monad laws see doc BoundLaws.hs If instances of Bound are monad transformers then lift implies the above laws and is in fact the default definition This is useful for types like expression lists case alternatives schemas etc that may not be expressions in their own right but often contain expressions",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "Bound",
        "normalized": "",
        "package": "bound",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#t:Scope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e b f a\u003c/code\u003e is an \u003ccode\u003ef\u003c/code\u003e expression with bound variables in \u003ccode\u003eb\u003c/code\u003e,\n and free variables in \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWe store bound variables as their generalized de Bruijn\n representation in that we're allowed to \u003ccode\u003elift\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e) an entire\n tree rather than only succ individual variables, but we're still\n only allowed to do so once per \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e. Weakening trees permits\n \u003cem\u003eO(1)\u003c/em\u003e weakening and permits more sharing opportunities. Here the\n deBruijn 0 is represented by the \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e, while the\n de Bruijn \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e (which may be applied to an entire tree!) is handled\n by \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNB: equality and comparison quotient out the distinct \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e placements\n allowed by the generalized de Bruijn representation and return the\n same result as a traditional de Bruijn representation would.\n\u003c/p\u003e\u003cp\u003eLogically you can think of this as if the shape were the traditional\n \u003ccode\u003ef (Var b a)\u003c/code\u003e, but the extra \u003ccode\u003ef a\u003c/code\u003e inside permits us a cheaper \u003ccode\u003elift\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "newtype",
        "fct-source": "src/Bound-Scope.html#Scope",
        "fct-type": "newtype",
        "title": "Scope"
      },
      "index": {
        "description": "Scope is an expression with bound variables in and free variables in We store bound variables as their generalized de Bruijn representation in that we re allowed to lift using an entire tree rather than only succ individual variables but we re still only allowed to do so once per Scope Weakening trees permits weakening and permits more sharing opportunities Here the deBruijn is represented by the constructor of Var while the de Bruijn succ which may be applied to an entire tree is handled by NB equality and comparison quotient out the distinct placements allowed by the generalized de Bruijn representation and return the same result as traditional de Bruijn representation would Logically you can think of this as if the shape were the traditional Var but the extra inside permits us cheaper lift",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003e\"I am not a number, I am a \u003cem\u003efree monad\u003c/em\u003e!\"\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e b a\u003c/code\u003e is a variable that may either be \"bound\" (\u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e) or \"free\" (\u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e(It is also technically a free monad in the same near-trivial sense as\n \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "data",
        "fct-source": "src/Bound-Var.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "am not number am free monad Var is variable that may either be bound or free It is also technically free monad in the same near-trivial sense as Either",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "Var",
        "normalized": "",
        "package": "bound",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:-61--60--60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eA flipped version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e f c) -\u003e t f a -\u003e t f c",
        "fct-source": "src/Bound-Class.html#%3D%3C%3C%3C",
        "fct-type": "function",
        "title": "(=\u003c\u003c\u003c)"
      },
      "index": {
        "description": "flipped version of flip",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "(=\u003c\u003c\u003c) =\u003c\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003ed b a-\u003ed b c",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003ef c)-\u003et f a-\u003et f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:-62--62--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003ePerform substitution\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is an instance of \u003ccode\u003eMonadTrans\u003c/code\u003e and you are compiling on GHC \u003e= 7.4, then this\n gets the default definition:\n\u003c/p\u003e\u003cpre\u003em \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e f = m \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elift\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "t f a -\u003e (a -\u003e f c) -\u003e t f c",
        "fct-source": "src/Bound-Class.html#%3E%3E%3E%3D",
        "fct-type": "method",
        "title": "(\u003e\u003e\u003e=)"
      },
      "index": {
        "description": "Perform substitution If is an instance of MonadTrans and you are compiling on GHC then this gets the default definition lift",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
        "normalized": "a b c-\u003e(c-\u003eb d)-\u003ea b d",
        "package": "bound",
        "partial": "",
        "signature": "t f a-\u003e(a-\u003ef c)-\u003et f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:B",
      "description": {
        "fct-descr": "\u003cp\u003ethis is a bound variable\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "B b",
        "fct-source": "src/Bound-Var.html#Var",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "this is bound variable",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "B",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:F",
      "description": {
        "fct-descr": "\u003cp\u003ethis is a free variable\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "F a",
        "fct-source": "src/Bound-Var.html#Var",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "this is free variable",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "F",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:Scope",
      "description": {
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "Scope",
        "fct-source": "src/Bound-Scope.html#Scope",
        "fct-type": "function",
        "title": "Scope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "Scope",
        "normalized": "",
        "package": "bound",
        "partial": "Scope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:abstract",
      "description": {
        "fct-descr": "\u003cp\u003eCapture some free variables in an expression to yield\n a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e with bound variables in \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m + Data.List\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eabstract (`elemIndex` \"bar\") \"barry\"\n\u003c/code\u003e\u003c/strong\u003eScope [B 0,B 1,B 2,B 2,F \"y\"]\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "(a -\u003e Maybe b) -\u003e f a -\u003e Scope b f a",
        "fct-source": "src/Bound-Scope.html#abstract",
        "fct-type": "function",
        "title": "abstract"
      },
      "index": {
        "description": "Capture some free variables in an expression to yield Scope with bound variables in Data.List abstract elemIndex bar barry Scope",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "abstract",
        "normalized": "(a-\u003eMaybe b)-\u003ec a-\u003eScope b c a",
        "package": "bound",
        "partial": "",
        "signature": "(a-\u003eMaybe b)-\u003ef a-\u003eScope b f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:abstract1",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract over a single variable\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eabstract1 'x' \"xyz\"\n\u003c/code\u003e\u003c/strong\u003eScope [B (),F \"y\",F \"z\"]\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "a -\u003e f a -\u003e Scope () f a",
        "fct-source": "src/Bound-Scope.html#abstract1",
        "fct-type": "function",
        "title": "abstract1"
      },
      "index": {
        "description": "Abstract over single variable abstract1 xyz Scope",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "abstract1",
        "normalized": "a-\u003eb a-\u003eScope()b a",
        "package": "bound",
        "partial": "",
        "signature": "a-\u003ef a-\u003eScope()f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:closed",
      "description": {
        "fct-descr": "\u003cp\u003eIf a term has no free variables, you can freely change the type of\n free variables it is parameterized on.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eclosed [12]\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eclosed \"\"\n\u003c/code\u003e\u003c/strong\u003eJust []\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t closed \"\"\n\u003c/code\u003e\u003c/strong\u003eclosed \"\" :: Maybe [b]\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Maybe (f b)",
        "fct-source": "src/Bound-Term.html#closed",
        "fct-type": "function",
        "title": "closed"
      },
      "index": {
        "description": "If term has no free variables you can freely change the type of free variables it is parameterized on closed Nothing closed Just closed closed Maybe",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "closed",
        "normalized": "a b-\u003eMaybe(a c)",
        "package": "bound",
        "partial": "",
        "signature": "f a-\u003eMaybe(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:fromScope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e quotients out the possible placements of \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e\n by distributing them all to the leaves. This yields a more traditional\n de Bruijn indexing scheme for bound variables.\n\u003c/p\u003e\u003cp\u003eSince,\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003ewe know that\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eand therefore \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etoScope\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromScope\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e is idempotent.\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "Scope b f a -\u003e f (Var b a)",
        "fct-source": "src/Bound-Scope.html#fromScope",
        "fct-type": "function",
        "title": "fromScope"
      },
      "index": {
        "description": "fromScope quotients out the possible placements of in Scope by distributing them all to the leaves This yields more traditional de Bruijn indexing scheme for bound variables Since fromScope toScope id we know that fromScope toScope fromScope fromScope and therefore toScope fromScope is idempotent",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "fromScope",
        "normalized": "Scope a b c-\u003eb(Var a c)",
        "package": "bound",
        "partial": "Scope",
        "signature": "Scope b f a-\u003ef(Var b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:instantiate",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a scope, instantiating all bound variables\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m + Data.List\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstantiate (\\x -\u003e [toEnum (97 + x)]) $ abstract (`elemIndex` \"bar\") \"barry\"\n\u003c/code\u003e\u003c/strong\u003e\"abccy\"\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "(b -\u003e f a) -\u003e Scope b f a -\u003e f a",
        "fct-source": "src/Bound-Scope.html#instantiate",
        "fct-type": "function",
        "title": "instantiate"
      },
      "index": {
        "description": "Enter scope instantiating all bound variables Data.List instantiate toEnum abstract elemIndex bar barry abccy",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "instantiate",
        "normalized": "(a-\u003eb c)-\u003eScope a b c-\u003eb c",
        "package": "bound",
        "partial": "",
        "signature": "(b-\u003ef a)-\u003eScope b f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:instantiate1",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e that binds one variable, instantiating it\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstantiate1 \"x\" $ Scope [B (),F \"y\",F \"z\"]\n\u003c/code\u003e\u003c/strong\u003e\"xyz\"\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Scope n f a -\u003e f a",
        "fct-source": "src/Bound-Scope.html#instantiate1",
        "fct-type": "function",
        "title": "instantiate1"
      },
      "index": {
        "description": "Enter Scope that binds one variable instantiating it instantiate1 Scope xyz",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "instantiate1",
        "normalized": "a b-\u003eScope c a b-\u003ea b",
        "package": "bound",
        "partial": "",
        "signature": "f a-\u003eScope n f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:isClosed",
      "description": {
        "fct-descr": "\u003cp\u003eA closed term has no free variables.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisClosed []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisClosed [1,2,3]\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "f a -\u003e Bool",
        "fct-source": "src/Bound-Term.html#isClosed",
        "fct-type": "function",
        "title": "isClosed"
      },
      "index": {
        "description": "closed term has no free variables isClosed True isClosed False",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "isClosed",
        "normalized": "a b-\u003eBool",
        "package": "bound",
        "partial": "Closed",
        "signature": "f a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:substitute",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e a p w\u003c/code\u003e replaces the free variable \u003ccode\u003ea\u003c/code\u003e with \u003ccode\u003ep\u003c/code\u003e in \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubstitute \"hello\" [\"goodnight\",\"Gracie\"] [\"hello\",\"!!!\"]\n\u003c/code\u003e\u003c/strong\u003e[\"goodnight\",\"Gracie\",\"!!!\"]\n\u003c/pre\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "a -\u003e f a -\u003e f a -\u003e f a",
        "fct-source": "src/Bound-Term.html#substitute",
        "fct-type": "function",
        "title": "substitute"
      },
      "index": {
        "description": "substitute replaces the free variable with in substitute hello goodnight Gracie hello goodnight Gracie",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "substitute",
        "normalized": "a-\u003eb a-\u003eb a-\u003eb a",
        "package": "bound",
        "partial": "",
        "signature": "a-\u003ef a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:toScope",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from traditional de Bruijn to generalized de Bruijn indices.\n\u003c/p\u003e\u003cp\u003eThis requires a full tree traversal\n\u003c/p\u003e",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "f (Var b a) -\u003e Scope b f a",
        "fct-source": "src/Bound-Scope.html#toScope",
        "fct-type": "function",
        "title": "toScope"
      },
      "index": {
        "description": "Convert from traditional de Bruijn to generalized de Bruijn indices This requires full tree traversal",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "toScope",
        "normalized": "a(Var b c)-\u003eScope b a c",
        "package": "bound",
        "partial": "Scope",
        "signature": "f(Var b a)-\u003eScope b f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bound/docs/Bound.html#v:unscope",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bound",
        "fct-package": "bound",
        "fct-signature": "f (Var b (f a))",
        "fct-source": "src/Bound-Scope.html#Scope",
        "fct-type": "function",
        "title": "unscope"
      },
      "index": {
        "description": "",
        "hierarchy": "Bound",
        "module": "Bound",
        "name": "unscope",
        "normalized": "",
        "package": "bound",
        "partial": "",
        "signature": ""
      }
    }
  }
]