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
        "word": "ChasingBottoms"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.Approx",
          "name": "Approx",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-Approx.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms Approx",
          "module": "Test.ChasingBottoms.Approx",
          "name": "Approx",
          "package": "ChasingBottoms",
          "partial": "Approx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Approx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eApprox\u003c/a\u003e\u003c/code\u003e is a class for approximation functions as described\nin The generic approximation lemma, Graham Hutton and Jeremy\nGibbons, Information Processing Letters, 79(4):197-201, Elsevier\nScience, August 2001, \u003ca\u003ehttp://www.cs.nott.ac.uk/~gmh/bib.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eInstances are provided for all members of the \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e type class. Due\nto the limitations of the \u003ca\u003eData.Generics\u003c/a\u003e approach to generic\nprogramming, which is not really aimed at this kind of application,\nthe implementation is only guaranteed to perform correctly, with\nrespect to the paper (and modulo any bugs), on non-mutually-recursive\nsum-of-products datatypes. In particular, nested and mutually\nrecursive types are not handled correctly with respect to the\npaper. The specification below is correct, though (if we assume that\nthe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances are well-behaved).\n\u003c/p\u003e\u003cp\u003eIn practice the \u003ccode\u003e\u003ca\u003eapproxAll\u003c/a\u003e\u003c/code\u003e function can probably be more useful than\n\u003ccode\u003e\u003ca\u003eapprox\u003c/a\u003e\u003c/code\u003e. It traverses down \u003cem\u003eall\u003c/em\u003e subterms, and it should be possible\nto prove a variant of the approximation lemma which \u003ccode\u003e\u003ca\u003eapproxAll\u003c/a\u003e\u003c/code\u003e\nsatisfies.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Approx",
          "name": "Approx",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-Approx.html#Approx",
          "type": "class"
        },
        "index": {
          "description": "Approx is class for approximation functions as described in The generic approximation lemma Graham Hutton and Jeremy Gibbons Information Processing Letters Elsevier Science August http www.cs.nott.ac.uk gmh bib.html Instances are provided for all members of the Data type class Due to the limitations of the Data.Generics approach to generic programming which is not really aimed at this kind of application the implementation is only guaranteed to perform correctly with respect to the paper and modulo any bugs on non-mutually-recursive sum-of-products datatypes In particular nested and mutually recursive types are not handled correctly with respect to the paper The specification below is correct though if we assume that the Data instances are well-behaved In practice the approxAll function can probably be more useful than approx It traverses down all subterms and it should be possible to prove variant of the approximation lemma which approxAll satisfies",
          "hierarchy": "Test ChasingBottoms Approx",
          "module": "Test.ChasingBottoms.Approx",
          "name": "Approx",
          "package": "ChasingBottoms",
          "partial": "Approx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Approx.html#t:Approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapprox\u003c/a\u003e\u003c/code\u003e works like \u003ccode\u003e\u003ca\u003eapproxAll\u003c/a\u003e\u003c/code\u003e, but the traversal and\n replacement is only performed at subterms of the same monomorphic\n type as the original term. For polynomial datatypes this is\n exactly what the version of \u003ccode\u003eapprox\u003c/code\u003e described in the paper above\n does.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Approx",
          "name": "approx",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e a -\u003e a",
          "source": "src/Test-ChasingBottoms-Approx.html#approx",
          "type": "method"
        },
        "index": {
          "description": "approx works like approxAll but the traversal and replacement is only performed at subterms of the same monomorphic type as the original term For polynomial datatypes this is exactly what the version of approx described in the paper above does",
          "hierarchy": "Test ChasingBottoms Approx",
          "module": "Test.ChasingBottoms.Approx",
          "name": "approx",
          "normalized": "Nat-\u003ea-\u003ea",
          "package": "ChasingBottoms",
          "signature": "Nat-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Approx.html#v:approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eapproxAll\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e traverses \u003ccode\u003en\u003c/code\u003e levels down in \u003ccode\u003ex\u003c/code\u003e and replaces all\n values at that level with bottoms.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Approx",
          "name": "approxAll",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e a -\u003e a",
          "source": "src/Test-ChasingBottoms-Approx.html#approxAll",
          "type": "method"
        },
        "index": {
          "description": "approxAll traverses levels down in and replaces all values at that level with bottoms",
          "hierarchy": "Test ChasingBottoms Approx",
          "module": "Test.ChasingBottoms.Approx",
          "name": "approxAll",
          "normalized": "Nat-\u003ea-\u003ea",
          "package": "ChasingBottoms",
          "partial": "All",
          "signature": "Nat-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Approx.html#v:approxAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting arbitrary (non-function, partial,\n possibly infinite) values into strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "ApproxShow",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ApproxShow.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for converting arbitrary non-function partial possibly infinite values into strings",
          "hierarchy": "Test ChasingBottoms ApproxShow",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "ApproxShow",
          "package": "ChasingBottoms",
          "partial": "Approx Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ApproxShow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "ApproxShow",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ApproxShow.html#ApproxShow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms ApproxShow",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "ApproxShow",
          "package": "ChasingBottoms",
          "partial": "Approx Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ApproxShow.html#t:ApproxShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecedence level.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "Prec",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ApproxShow.html#Prec",
          "type": "type"
        },
        "index": {
          "description": "Precedence level",
          "hierarchy": "Test ChasingBottoms ApproxShow",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "Prec",
          "package": "ChasingBottoms",
          "partial": "Prec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ApproxShow.html#t:Prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "approxShow",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e a -\u003e String",
          "source": "src/Test-ChasingBottoms-ApproxShow.html#approxShow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms ApproxShow",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "approxShow",
          "normalized": "Nat-\u003ea-\u003eString",
          "package": "ChasingBottoms",
          "partial": "Show",
          "signature": "Nat-\u003ea-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ApproxShow.html#v:approxShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "approxShows",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e a -\u003e ShowS",
          "source": "src/Test-ChasingBottoms-ApproxShow.html#approxShows",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms ApproxShow",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "approxShows",
          "normalized": "Nat-\u003ea-\u003eShowS",
          "package": "ChasingBottoms",
          "partial": "Shows",
          "signature": "Nat-\u003ea-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ApproxShow.html#v:approxShows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eApproxShow\u003c/a\u003e\u003c/code\u003e makes sure that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eapproxShowsPrec\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e behaves (more or less) like the derived\n version of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, with the following differences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e After \u003ccode\u003en\u003c/code\u003e levels of descent into a term the output is\n     replaced by \u003ccode\u003e\"_\"\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e All detectable occurences of bottoms are replaced by \u003ccode\u003e\"_|_\"\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Non-bottom functions are displayed as \u003ccode\u003e\"\u003cfunction /= _|_\u003e\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "approxShowsPrec",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e Prec -\u003e a -\u003e ShowS",
          "source": "src/Test-ChasingBottoms-ApproxShow.html#approxShowsPrec",
          "type": "method"
        },
        "index": {
          "description": "The Data instance of ApproxShow makes sure that approxShowsPrec behaves more or less like the derived version of showsPrec with the following differences After levels of descent into term the output is replaced by All detectable occurences of bottoms are replaced by Non-bottom functions are displayed as function",
          "hierarchy": "Test ChasingBottoms ApproxShow",
          "module": "Test.ChasingBottoms.ApproxShow",
          "name": "approxShowsPrec",
          "normalized": "Nat-\u003ePrec-\u003ea-\u003eShowS",
          "package": "ChasingBottoms",
          "partial": "Shows Prec",
          "signature": "Nat-\u003ePrec-\u003ea-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ApproxShow.html#v:approxShowsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote: \u003cem\u003eThis module is unfinished and experimental. However, I do not think that I will ever finish it, so I have released it in its current state. The documentation below may not be completely correct. The source code lists some things which should be addressed.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA framework for generating possibly non-strict, partial,\n continuous functions.\n\u003c/p\u003e\u003cp\u003eThe functions generated using the standard QuickCheck \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e\n instances are all strict. In the presence of partial and infinite\n values testing using only strict functions leads to worse coverage\n than if more general functions are used, though.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e it is relatively easy to generate possibly\n non-strict functions that are, in general, not monotone. For\n instance, using\n\u003c/p\u003e\u003cpre\u003e type Cogen a = forall b. a -\u003e Gen b -\u003e Gen b\n\n integer :: Gen Integer\n integer = frequency [ (1, return bottom), (10, arbitrary) ]\n\n coBool :: CoGen Bool\n coBool b | isBottom b = variant 0\n coBool False          = variant 1\n coBool True           = variant 2\n\n function :: Cogen a -\u003e Gen b -\u003e Gen (a -\u003e b)\n function coGen gen = promote (\\a -\u003e coGen a gen)\n\u003c/pre\u003e\u003cp\u003ewe can generate possibly non-strict functions from \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003efunction coBool integer\u003c/code\u003e. There is a high\n likelihood that the functions generated are not monotone, though.\n The reason that we can get non-monotone functions in a language\n like Haskell is that we are using the impure function \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSometimes using possibly non-monotone functions is good enough,\n since that set of functions is a superset of the continuous\n functions. However, say that we want to test that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c=!\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n implies that \u003ccode\u003ef x \u003ccode\u003e\u003ca\u003e\u003c=!\u003c/a\u003e\u003c/code\u003e f y\u003c/code\u003e for all functions \u003ccode\u003ef\u003c/code\u003e (whenever the\n latter expression returns a total result). This property is not\n valid in the presence of non-monotone functions.\n\u003c/p\u003e\u003cp\u003eBy avoiding \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e and, unlike the standard \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e\n functions, deferring some pattern matches, we can generate\n continuous, possibly non-strict functions. There are two steps\n involved in generating a continuous function using the framework\n defined here.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e First the argument to the function is turned into a\n     \u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003e wraps up the pattern match on\n     the top-level constructor of the argument, plus all further\n     pattern matches on the children of the argument. Just like when\n     \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e is used a pattern match is represented as a\n     generator transformer. The difference here is that there is not\n     just one transformation per input, but one transformation per\n     constructor in the input. \u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003ees can be constructed\n     generically using \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Then the result is generated, almost like for a normal\n     \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e instance. However, for each constructor generated a\n     subset of the transformations from step 1 are applied. This\n     transformation application is wrapped up in the function\n     \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe net result of this is that some pattern matches are performed\n later, or not at all, so functions can be lazy.\n\u003c/p\u003e\u003cp\u003eHere is an example illustrating typical use of this framework:\n\u003c/p\u003e\u003cpre\u003e data Tree a\n   = Branch (Tree a) (Tree a)\n   | Leaf a\n     deriving (Show, Typeable, Data)\n\n finiteTreeOf :: MakeResult a -\u003e MakeResult (Tree a)\n finiteTreeOf makeResult = sized' tree\n   where\n   tree size = transform $\n     if size == 0 then\n       baseCase\n      else\n       frequency' [ (1, baseCase)\n                  , (1, liftM2 Branch tree' tree')\n                  ]\n     where\n     tree' = tree (size `div` 2)\n\n     baseCase =\n       frequency' [ (1, return bottom)\n                  , (2, liftM Leaf makeResult)\n                  ]\n\u003c/pre\u003e\u003cp\u003eNote the use of \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e. To use this function to generate\n functions of type \u003ccode\u003eBool -\u003e Tree Integer\u003c/code\u003e we can use\n\u003c/p\u003e\u003cpre\u003e forAll (functionTo (finiteTreeOf flat)) $\n   \\(f :: Bool -\u003e Tree Integer) -\u003e\n     ...\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "ContinuousFunctions",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html",
          "type": "module"
        },
        "index": {
          "description": "Note This module is unfinished and experimental However do not think that will ever finish it so have released it in its current state The documentation below may not be completely correct The source code lists some things which should be addressed framework for generating possibly non-strict partial continuous functions The functions generated using the standard QuickCheck Arbitrary instances are all strict In the presence of partial and infinite values testing using only strict functions leads to worse coverage than if more general functions are used though Using isBottom it is relatively easy to generate possibly non-strict functions that are in general not monotone For instance using type Cogen forall Gen Gen integer Gen Integer integer frequency return bottom arbitrary coBool CoGen Bool coBool isBottom variant coBool False variant coBool True variant function Cogen Gen Gen function coGen gen promote coGen gen we can generate possibly non-strict functions from Bool to Integer using function coBool integer There is high likelihood that the functions generated are not monotone though The reason that we can get non-monotone functions in language like Haskell is that we are using the impure function isBottom Sometimes using possibly non-monotone functions is good enough since that set of functions is superset of the continuous functions However say that we want to test that implies that for all functions whenever the latter expression returns total result This property is not valid in the presence of non-monotone functions By avoiding isBottom and unlike the standard coarbitrary functions deferring some pattern matches we can generate continuous possibly non-strict functions There are two steps involved in generating continuous function using the framework defined here First the argument to the function is turned into PatternMatch PatternMatch wraps up the pattern match on the top-level constructor of the argument plus all further pattern matches on the children of the argument Just like when coarbitrary is used pattern match is represented as generator transformer The difference here is that there is not just one transformation per input but one transformation per constructor in the input PatternMatch es can be constructed generically using match Then the result is generated almost like for normal Arbitrary instance However for each constructor generated subset of the transformations from step are applied This transformation application is wrapped up in the function transform The net result of this is that some pattern matches are performed later or not at all so functions can be lazy Here is an example illustrating typical use of this framework data Tree Branch Tree Tree Leaf deriving Show Typeable Data finiteTreeOf MakeResult MakeResult Tree finiteTreeOf makeResult sized tree where tree size transform if size then baseCase else frequency baseCase liftM2 Branch tree tree where tree tree size div baseCase frequency return bottom liftM Leaf makeResult Note the use of transform To use this function to generate functions of type Bool Tree Integer we can use forAll functionTo finiteTreeOf flat Bool Tree Integer",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "ContinuousFunctions",
          "package": "ChasingBottoms",
          "partial": "Continuous Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a generator transformer.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "GenTransformer",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#GenTransformer",
          "type": "type"
        },
        "index": {
          "description": "The type of generator transformer",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "GenTransformer",
          "package": "ChasingBottoms",
          "partial": "Gen Transformer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#t:GenTransformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a \u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003e generator.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "MakePM",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#MakePM",
          "type": "type"
        },
        "index": {
          "description": "The type of PatternMatch generator",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "MakePM",
          "package": "ChasingBottoms",
          "partial": "Make PM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#t:MakePM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for generating results given previously generated pattern\n matches.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMakeResult\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e should be implemented almost as other generators for\n the type \u003ccode\u003ea\u003c/code\u003e, with the difference that \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e should be\n used wherever the resulting function should be allowed to pattern\n match (typically for each constructor emitted). See example above.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "MakeResult",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#MakeResult",
          "type": "data"
        },
        "index": {
          "description": "Monad for generating results given previously generated pattern matches MakeResult should be implemented almost as other generators for the type with the difference that transform should be used wherever the resulting function should be allowed to pattern match typically for each constructor emitted See example above",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "MakeResult",
          "package": "ChasingBottoms",
          "partial": "Make Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#t:MakeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003e packages up the possible outcomes of a pattern\n match in a style suitable for generating functions. A pattern match\n is a generator (\u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e) transformer based on the top-level\n constructor, and a sequence (see\n \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/software/html/Data.Sequence.html\u003c/a\u003e) of\n \u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003ees based on the children of that constructor.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "PatternMatch",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#PatternMatch",
          "type": "data"
        },
        "index": {
          "description": "PatternMatch packages up the possible outcomes of pattern match in style suitable for generating functions pattern match is generator Gen transformer based on the top-level constructor and sequence see http www.soi.city.ac.uk ross software html Data.Sequence.html of PatternMatch es based on the children of that constructor",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "PatternMatch",
          "package": "ChasingBottoms",
          "partial": "Pattern Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#t:PatternMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "PatternMatch",
          "package": "ChasingBottoms",
          "signature": "PatternMatch",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#PatternMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "PatternMatch",
          "package": "ChasingBottoms",
          "partial": "Pattern Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:PatternMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generator transformer, in the style of \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "apply",
          "package": "ChasingBottoms",
          "signature": "GenTransformer",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#PatternMatch",
          "type": "function"
        },
        "index": {
          "description": "generator transformer in the style of coarbitrary",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "apply",
          "package": "ChasingBottoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003earbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "arbitrary'",
          "package": "ChasingBottoms",
          "signature": "MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#arbitrary%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of arbitrary",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "arbitrary'",
          "package": "ChasingBottoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:arbitrary-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "choose'",
          "package": "ChasingBottoms",
          "signature": "(a, a) -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#choose%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of choose",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "choose'",
          "normalized": "(a,a)-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "(a,a)-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:choose-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "elements'",
          "package": "ChasingBottoms",
          "signature": "[a] -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#elements%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of elements",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "elements'",
          "normalized": "[a]-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "[a]-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:elements-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMakeResult\u003c/a\u003e\u003c/code\u003e yields finite partial lists.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "finiteListOf",
          "package": "ChasingBottoms",
          "signature": "MakeResult a -\u003e MakeResult [a]",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#finiteListOf",
          "type": "function"
        },
        "index": {
          "description": "This MakeResult yields finite partial lists",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "finiteListOf",
          "normalized": "MakeResult a-\u003eMakeResult[a]",
          "package": "ChasingBottoms",
          "partial": "List Of",
          "signature": "MakeResult a-\u003eMakeResult[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:finiteListOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMakeResult\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e which is suitable when \u003ccode\u003ea\u003c/code\u003e\n is flat and has an \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e instance. Yields bottoms around 10%\n of the time.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "flat",
          "package": "ChasingBottoms",
          "signature": "MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#flat",
          "type": "function"
        },
        "index": {
          "description": "An implementation of MakeResult which is suitable when is flat and has an Arbitrary instance Yields bottoms around of the time",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "flat",
          "package": "ChasingBottoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003efrequency\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "frequency'",
          "package": "ChasingBottoms",
          "signature": "[(Int, MakeResult a)] -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#frequency%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of frequency",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "frequency'",
          "normalized": "[(Int,MakeResult a)]-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "[(Int,MakeResult a)]-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:frequency-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator for continuous, not necessarily strict functions.\n Functions are generated by first generating pattern matches, and\n then generating a result.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "function",
          "package": "ChasingBottoms",
          "signature": "MakePM a -\u003e MakeResult b -\u003e Gen (a -\u003e b)",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#function",
          "type": "function"
        },
        "index": {
          "description": "Generator for continuous not necessarily strict functions Functions are generated by first generating pattern matches and then generating result",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "function",
          "normalized": "MakePM a-\u003eMakeResult b-\u003eGen(a-\u003eb)",
          "package": "ChasingBottoms",
          "signature": "MakePM a-\u003eMakeResult b-\u003eGen(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efunctionTo\u003c/a\u003e\u003c/code\u003e specialises \u003ccode\u003e\u003ca\u003efunction\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  \u003ccode\u003e\u003ca\u003efunctionTo\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efunction\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "functionTo",
          "package": "ChasingBottoms",
          "signature": "MakeResult b -\u003e Gen (a -\u003e b)",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#functionTo",
          "type": "function"
        },
        "index": {
          "description": "functionTo specialises function functionTo function match",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "functionTo",
          "normalized": "MakeResult a-\u003eGen(b-\u003ea)",
          "package": "ChasingBottoms",
          "partial": "To",
          "signature": "MakeResult b-\u003eGen(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:functionTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMakeResult\u003c/a\u003e\u003c/code\u003e yields infinite partial lists.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "infiniteListOf",
          "package": "ChasingBottoms",
          "signature": "MakeResult a -\u003e MakeResult [a]",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#infiniteListOf",
          "type": "function"
        },
        "index": {
          "description": "This MakeResult yields infinite partial lists",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "infiniteListOf",
          "normalized": "MakeResult a-\u003eMakeResult[a]",
          "package": "ChasingBottoms",
          "partial": "List Of",
          "signature": "MakeResult a-\u003eMakeResult[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:infiniteListOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of a \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "lift'",
          "package": "ChasingBottoms",
          "signature": "Gen a -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#lift%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of Gen",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "lift'",
          "normalized": "Gen a-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "Gen a-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:lift-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMakeResult\u003c/a\u003e\u003c/code\u003e yields finite or infinite partial lists.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "listOf",
          "package": "ChasingBottoms",
          "signature": "MakeResult a -\u003e MakeResult [a]",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#listOf",
          "type": "function"
        },
        "index": {
          "description": "This MakeResult yields finite or infinite partial lists",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "listOf",
          "normalized": "MakeResult a-\u003eMakeResult[a]",
          "package": "ChasingBottoms",
          "partial": "Of",
          "signature": "MakeResult a-\u003eMakeResult[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:listOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric implementation of \u003ccode\u003e\u003ca\u003ePatternMatch\u003c/a\u003e\u003c/code\u003e construction.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "match",
          "package": "ChasingBottoms",
          "signature": "MakePM a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#match",
          "type": "function"
        },
        "index": {
          "description": "Generic implementation of PatternMatch construction",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "match",
          "package": "ChasingBottoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFurther pattern matches made possible by this\n match.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "more",
          "package": "ChasingBottoms",
          "signature": "Seq PatternMatch",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#PatternMatch",
          "type": "function"
        },
        "index": {
          "description": "Further pattern matches made possible by this match",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "more",
          "package": "ChasingBottoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:more"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003eoneof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "oneof'",
          "package": "ChasingBottoms",
          "signature": "[MakeResult a] -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#oneof%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of oneof",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "oneof'",
          "normalized": "[MakeResult a]-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "[MakeResult a]-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:oneof-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003eresize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "resize'",
          "package": "ChasingBottoms",
          "signature": "Int -\u003e MakeResult a -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#resize%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of resize",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "resize'",
          "normalized": "Int-\u003eMakeResult a-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "Int-\u003eMakeResult a-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:resize-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003esized\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "sized'",
          "package": "ChasingBottoms",
          "signature": "(Int -\u003e MakeResult a) -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#sized%27",
          "type": "function"
        },
        "index": {
          "description": "Lifting of sized",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "sized'",
          "normalized": "(Int-\u003eMakeResult a)-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "(Int-\u003eMakeResult a)-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:sized-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e makes sure that the pattern matches get to influence\n the generated value. See \u003ccode\u003e\u003ca\u003eMakeResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "transform",
          "package": "ChasingBottoms",
          "signature": "MakeResult a -\u003e MakeResult a",
          "source": "src/Test-ChasingBottoms-ContinuousFunctions.html#transform",
          "type": "function"
        },
        "index": {
          "description": "transform makes sure that the pattern matches get to influence the generated value See MakeResult",
          "hierarchy": "Test ChasingBottoms ContinuousFunctions",
          "module": "Test.ChasingBottoms.ContinuousFunctions",
          "name": "transform",
          "normalized": "MakeResult a-\u003eMakeResult a",
          "package": "ChasingBottoms",
          "signature": "MakeResult a-\u003eMakeResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-ContinuousFunctions.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "IsBottom",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-IsBottom.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms IsBottom",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "IsBottom",
          "package": "ChasingBottoms",
          "partial": "Is Bottom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-IsBottom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e generates a bottom that is suitable for testing using\n \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "bottom",
          "package": "ChasingBottoms",
          "signature": "a",
          "source": "src/Test-ChasingBottoms-IsBottom.html#bottom",
          "type": "function"
        },
        "index": {
          "description": "bottom generates bottom that is suitable for testing using isBottom",
          "hierarchy": "Test ChasingBottoms IsBottom",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "bottom",
          "package": "ChasingBottoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-IsBottom.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ea\u003c/code\u003e is distinct from bottom. If\n \u003ccode\u003ea\u003c/code\u003e equals bottom and results in an exception of a certain kind\n (see below), then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e a = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e never reaches a\n weak head normal form and never throws one of these exceptions,\n then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e never terminates.\n\u003c/p\u003e\u003cp\u003eThe exceptions that yield \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e correspond to \"pure bottoms\",\n i.e. bottoms that can originate in pure code:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eArrayException\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eErrorCall\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoMethodError\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNonTermination\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePatternMatchFail\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRecConError\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRecSelError\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRecUpdError\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAssertions are excluded, because their behaviour depends on\n compiler flags (not pure, and a failed assertion should really\n yield an exception and nothing else). The same applies to\n arithmetic exceptions (machine dependent, except possibly for\n \u003ccode\u003e\u003ca\u003eDivideByZero\u003c/a\u003e\u003c/code\u003e, but the value infinity makes that case unclear as\n well).\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "isBottom",
          "package": "ChasingBottoms",
          "signature": "a -\u003e Bool",
          "source": "src/Test-ChasingBottoms-IsBottom.html#isBottom",
          "type": "function"
        },
        "index": {
          "description": "isBottom returns False if is distinct from bottom If equals bottom and results in an exception of certain kind see below then isBottom True If never reaches weak head normal form and never throws one of these exceptions then isBottom never terminates The exceptions that yield True correspond to pure bottoms i.e bottoms that can originate in pure code ArrayException ErrorCall NoMethodError NonTermination PatternMatchFail RecConError RecSelError RecUpdError Assertions are excluded because their behaviour depends on compiler flags not pure and failed assertion should really yield an exception and nothing else The same applies to arithmetic exceptions machine dependent except possibly for DivideByZero but the value infinity makes that case unclear as well",
          "hierarchy": "Test ChasingBottoms IsBottom",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "isBottom",
          "normalized": "a-\u003eBool",
          "package": "ChasingBottoms",
          "partial": "Bottom",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-IsBottom.html#v:isBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBottomTimeOut\u003c/a\u003e\u003c/code\u003e timeOutLimit\u003c/code\u003e works like \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e, but if\n \u003ccode\u003etimeOutLimit\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e lim\u003c/code\u003e, then computations taking more than\n \u003ccode\u003elim\u003c/code\u003e seconds are also considered to be equal to bottom. Note that\n this is a very crude approximation of what a bottom is. Also note\n that this \"function\" may return different answers upon different\n invocations. Take it for what it is worth.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eisBottomTimeOut\u003c/a\u003e\u003c/code\u003e is subject to all the same vagaries as\n \u003ccode\u003e\u003ca\u003etimeOut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "isBottomTimeOut",
          "package": "ChasingBottoms",
          "signature": "Maybe Int -\u003e a -\u003e Bool",
          "source": "src/Test-ChasingBottoms-IsBottom.html#isBottomTimeOut",
          "type": "function"
        },
        "index": {
          "description": "isBottomTimeOut timeOutLimit works like isBottom but if timeOutLimit is Just lim then computations taking more than lim seconds are also considered to be equal to bottom Note that this is very crude approximation of what bottom is Also note that this function may return different answers upon different invocations Take it for what it is worth isBottomTimeOut is subject to all the same vagaries as timeOut",
          "hierarchy": "Test ChasingBottoms IsBottom",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "isBottomTimeOut",
          "normalized": "Maybe Int-\u003ea-\u003eBool",
          "package": "ChasingBottoms",
          "partial": "Bottom Time Out",
          "signature": "Maybe Int-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-IsBottom.html#v:isBottomTimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enonBottomError\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e raises an exception (\u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e)\n that is not caught by \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003es\u003c/code\u003e to describe the\n exception.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "nonBottomError",
          "package": "ChasingBottoms",
          "signature": "String -\u003e a",
          "source": "src/Test-ChasingBottoms-IsBottom.html#nonBottomError",
          "type": "function"
        },
        "index": {
          "description": "nonBottomError raises an exception AssertionFailed that is not caught by isBottom Use to describe the exception",
          "hierarchy": "Test ChasingBottoms IsBottom",
          "module": "Test.ChasingBottoms.IsBottom",
          "name": "nonBottomError",
          "normalized": "String-\u003ea",
          "package": "ChasingBottoms",
          "partial": "Bottom Error",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-IsBottom.html#v:nonBottomError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of natural numbers on top of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es.\n Note that since \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es are used there is no infinite natural\n number; in other words, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e is strict.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.ChasingBottoms.Nat",
          "name": "Nat",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-Nat.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of natural numbers on top of Integer Note that since Integer are used there is no infinite natural number in other words succ is strict",
          "hierarchy": "Test ChasingBottoms Nat",
          "module": "Test.ChasingBottoms.Nat",
          "name": "Nat",
          "package": "ChasingBottoms",
          "partial": "Nat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Nat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural numbers.\n\u003c/p\u003e\u003cp\u003eNo \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance is provided, because the implementation should\n be abstract.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Nat",
          "name": "Nat",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-Nat.html#Nat",
          "type": "data"
        },
        "index": {
          "description": "Natural numbers No Data instance is provided because the implementation should be abstract",
          "hierarchy": "Test ChasingBottoms Nat",
          "module": "Test.ChasingBottoms.Nat",
          "name": "Nat",
          "package": "ChasingBottoms",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Nat.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldN\u003c/a\u003e\u003c/code\u003e is a fold on natural numbers:\n\u003c/p\u003e\u003cpre\u003e\n  \u003ccode\u003e\u003ca\u003efoldN\u003c/a\u003e\u003c/code\u003e g h = \u003ccode\u003e\u003ca\u003enatrec\u003c/a\u003e\u003c/code\u003e g (\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e h . \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e",
          "module": "Test.ChasingBottoms.Nat",
          "name": "foldN",
          "package": "ChasingBottoms",
          "signature": "a -\u003e (a -\u003e a) -\u003e Nat -\u003e a",
          "source": "src/Test-ChasingBottoms-Nat.html#foldN",
          "type": "function"
        },
        "index": {
          "description": "foldN is fold on natural numbers foldN natrec curry snd",
          "hierarchy": "Test ChasingBottoms Nat",
          "module": "Test.ChasingBottoms.Nat",
          "name": "foldN",
          "normalized": "a-\u003e(a-\u003ea)-\u003eNat-\u003ea",
          "package": "ChasingBottoms",
          "signature": "a-\u003e(a-\u003ea)-\u003eNat-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Nat.html#v:foldN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efromSucc\u003c/a\u003e\u003c/code\u003e 0 == \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromSucc\u003c/a\u003e\u003c/code\u003e (n+1) == \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e for a\n total natural number \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Nat",
          "name": "fromSucc",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e Maybe Nat",
          "source": "src/Test-ChasingBottoms-Nat.html#fromSucc",
          "type": "function"
        },
        "index": {
          "description": "fromSucc Nothing fromSucc Just for total natural number",
          "hierarchy": "Test ChasingBottoms Nat",
          "module": "Test.ChasingBottoms.Nat",
          "name": "fromSucc",
          "normalized": "Nat-\u003eMaybe Nat",
          "package": "ChasingBottoms",
          "partial": "Succ",
          "signature": "Nat-\u003eMaybe Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Nat.html#v:fromSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSucc\u003c/a\u003e\u003c/code\u003e 0 == \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, for other total natural numbers it is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Nat",
          "name": "isSucc",
          "package": "ChasingBottoms",
          "signature": "Nat -\u003e Bool",
          "source": "src/Test-ChasingBottoms-Nat.html#isSucc",
          "type": "function"
        },
        "index": {
          "description": "isSucc False for other total natural numbers it is True",
          "hierarchy": "Test ChasingBottoms Nat",
          "module": "Test.ChasingBottoms.Nat",
          "name": "isSucc",
          "normalized": "Nat-\u003eBool",
          "package": "ChasingBottoms",
          "partial": "Succ",
          "signature": "Nat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Nat.html#v:isSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enatrec\u003c/a\u003e\u003c/code\u003e performs primitive recursion on natural numbers.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.Nat",
          "name": "natrec",
          "package": "ChasingBottoms",
          "signature": "a -\u003e (Nat -\u003e a -\u003e a) -\u003e Nat -\u003e a",
          "source": "src/Test-ChasingBottoms-Nat.html#natrec",
          "type": "function"
        },
        "index": {
          "description": "natrec performs primitive recursion on natural numbers",
          "hierarchy": "Test ChasingBottoms Nat",
          "module": "Test.ChasingBottoms.Nat",
          "name": "natrec",
          "normalized": "a-\u003e(Nat-\u003ea-\u003ea)-\u003eNat-\u003ea",
          "package": "ChasingBottoms",
          "signature": "a-\u003e(Nat-\u003ea-\u003ea)-\u003eNat-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-Nat.html#v:natrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric semantic equality and order. The semantic order referred\n to is that of a typical CPO for Haskell types, where e.g. \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c=!\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, but where \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e are incomparable.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003ccode\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/code\u003e, and has the same\n limitations. Note that non-bottom functions are not handled by any\n of the functions described below.\n\u003c/p\u003e\u003cp\u003eOne could imagine using QuickCheck for testing equality of\n functions, but I have not managed to tweak the type system so that\n it can be done transparently.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "SemanticOrd",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html",
          "type": "module"
        },
        "index": {
          "description": "Generic semantic equality and order The semantic order referred to is that of typical CPO for Haskell types where e.g True bottom True False but where True True and True False are incomparable The implementation is based on isBottom and has the same limitations Note that non-bottom functions are not handled by any of the functions described below One could imagine using QuickCheck for testing equality of functions but have not managed to tweak the type system so that it can be done transparently",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "SemanticOrd",
          "package": "ChasingBottoms",
          "partial": "Semantic Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSemanticEq\u003c/a\u003e\u003c/code\u003e contains methods for testing whether two terms are\n semantically equal.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "SemanticEq",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#SemanticEq",
          "type": "class"
        },
        "index": {
          "description": "SemanticEq contains methods for testing whether two terms are semantically equal",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "SemanticEq",
          "package": "ChasingBottoms",
          "partial": "Semantic Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#t:SemanticEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSemanticOrd\u003c/a\u003e\u003c/code\u003e contains methods for testing whether two terms are\n related according to the semantic domain ordering.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "SemanticOrd",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#SemanticOrd",
          "type": "class"
        },
        "index": {
          "description": "SemanticOrd contains methods for testing whether two terms are related according to the semantic domain ordering",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "SemanticOrd",
          "package": "ChasingBottoms",
          "partial": "Semantic Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#t:SemanticOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe behaviour of some of the functions below can be tweaked.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "Tweak",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#Tweak",
          "type": "data"
        },
        "index": {
          "description": "The behaviour of some of the functions below can be tweaked",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "Tweak",
          "package": "ChasingBottoms",
          "partial": "Tweak",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#t:Tweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(/\\!)",
          "package": "ChasingBottoms",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#%2F%5C%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(/\\!) /\\!",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ChasingBottoms",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:-47--92--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(\u003c!)",
          "package": "ChasingBottoms",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#%3C%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(\u003c!) \u003c!",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ChasingBottoms",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:-60--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(==!)",
          "package": "ChasingBottoms",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#%3D%3D%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(==!) ==!",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ChasingBottoms",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:-61--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(\\/!)",
          "package": "ChasingBottoms",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#%5C%2F%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "(\\/!) \\/!",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "ChasingBottoms",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:-92--47--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "Tweak",
          "package": "ChasingBottoms",
          "signature": "Tweak",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#Tweak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "Tweak",
          "package": "ChasingBottoms",
          "partial": "Tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:Tweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf equal to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e, an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eapproxAll\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e is performed on\n all arguments before doing whatever the function is supposed to\n be doing.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "approxDepth",
          "package": "ChasingBottoms",
          "signature": "Maybe Nat",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#Tweak",
          "type": "function"
        },
        "index": {
          "description": "If equal to Just an approxAll is performed on all arguments before doing whatever the function is supposed to be doing",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "approxDepth",
          "package": "ChasingBottoms",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:approxDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo tweak (both fields are \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "noTweak",
          "package": "ChasingBottoms",
          "signature": "Tweak",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#noTweak",
          "type": "function"
        },
        "index": {
          "description": "No tweak both fields are Nothing",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "noTweak",
          "package": "ChasingBottoms",
          "partial": "Tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:noTweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esemanticCompare\u003c/a\u003e\u003c/code\u003e tweak x y\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e are\n incomparable, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e o\u003c/code\u003e otherwise, where \u003ccode\u003eo :: \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n represents the relation between \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticCompare",
          "package": "ChasingBottoms",
          "signature": "Tweak -\u003e a -\u003e a -\u003e Maybe Ordering",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#semanticCompare",
          "type": "method"
        },
        "index": {
          "description": "semanticCompare tweak returns Nothing if and are incomparable and Just otherwise where Ordering represents the relation between and",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticCompare",
          "normalized": "Tweak-\u003ea-\u003ea-\u003eMaybe Ordering",
          "package": "ChasingBottoms",
          "partial": "Compare",
          "signature": "Tweak-\u003ea-\u003ea-\u003eMaybe Ordering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:semanticCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticEq",
          "package": "ChasingBottoms",
          "signature": "Tweak -\u003e a -\u003e a -\u003e Bool",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#semanticEq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticEq",
          "normalized": "Tweak-\u003ea-\u003ea-\u003eBool",
          "package": "ChasingBottoms",
          "partial": "Eq",
          "signature": "Tweak-\u003ea-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:semanticEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticJoin",
          "package": "ChasingBottoms",
          "signature": "Tweak -\u003e a -\u003e a -\u003e Maybe a",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#semanticJoin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticJoin",
          "normalized": "Tweak-\u003ea-\u003ea-\u003eMaybe a",
          "package": "ChasingBottoms",
          "partial": "Join",
          "signature": "Tweak-\u003ea-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:semanticJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\\/!\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e and \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e/\\!\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e compute the least upper and greatest\n lower bounds, respectively, of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e in the semantical\n domain ordering. Note that the least upper bound may not always\n exist.\n This functionality was implemented just because it was\n possible (and to provide analogues of \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n class). If anyone finds any use for it, please let me know.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticMeet",
          "package": "ChasingBottoms",
          "signature": "Tweak -\u003e a -\u003e a -\u003e a",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#semanticMeet",
          "type": "method"
        },
        "index": {
          "description": "and compute the least upper and greatest lower bounds respectively of and in the semantical domain ordering Note that the least upper bound may not always exist This functionality was implemented just because it was possible and to provide analogues of max and min in the Ord class If anyone finds any use for it please let me know",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "semanticMeet",
          "normalized": "Tweak-\u003ea-\u003ea-\u003ea",
          "package": "ChasingBottoms",
          "partial": "Meet",
          "signature": "Tweak-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:semanticMeet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf equal to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e, then all computations that take more\n than \u003ccode\u003en\u003c/code\u003e seconds to complete are considered to be equal to\n \u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e. This functionality is implemented using\n \u003ccode\u003e\u003ca\u003eisBottomTimeOut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "timeOutLimit",
          "package": "ChasingBottoms",
          "signature": "Maybe Int",
          "source": "src/Test-ChasingBottoms-SemanticOrd.html#Tweak",
          "type": "function"
        },
        "index": {
          "description": "If equal to Just then all computations that take more than seconds to complete are considered to be equal to bottom This functionality is implemented using isBottomTimeOut",
          "hierarchy": "Test ChasingBottoms SemanticOrd",
          "module": "Test.ChasingBottoms.SemanticOrd",
          "name": "timeOutLimit",
          "package": "ChasingBottoms",
          "partial": "Out Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-SemanticOrd.html#v:timeOutLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen dealing with \"hard bottoms\", i.e. non-terminating\n computations that do not result in exceptions, the following functions\n may be handy.\n\u003c/p\u003e\u003cp\u003eNote that a computation is considered to have terminated when it\n has reached weak head normal form (i.e. something distinct from\n bottom).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "TimeOut",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-TimeOut.html",
          "type": "module"
        },
        "index": {
          "description": "When dealing with hard bottoms i.e non-terminating computations that do not result in exceptions the following functions may be handy Note that computation is considered to have terminated when it has reached weak head normal form i.e something distinct from bottom",
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "TimeOut",
          "package": "ChasingBottoms",
          "partial": "Time Out",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "Result",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms-TimeOut.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "Result",
          "package": "ChasingBottoms",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "Exception",
          "package": "ChasingBottoms",
          "signature": "Exception SomeException",
          "source": "src/Test-ChasingBottoms-TimeOut.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "Exception",
          "package": "ChasingBottoms",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "NonTermination",
          "package": "ChasingBottoms",
          "signature": "NonTermination",
          "source": "src/Test-ChasingBottoms-TimeOut.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "NonTermination",
          "package": "ChasingBottoms",
          "partial": "Non Termination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:NonTermination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "Value",
          "package": "ChasingBottoms",
          "signature": "Value a",
          "source": "src/Test-ChasingBottoms-TimeOut.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "Value",
          "package": "ChasingBottoms",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etimeOut\u003c/a\u003e\u003c/code\u003e n c\u003c/code\u003e runs \u003ccode\u003ec\u003c/code\u003e for at most \u003ccode\u003en\u003c/code\u003e seconds (modulo\n scheduling issues).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the computation terminates before that, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e is\n     returned, where \u003ccode\u003ev\u003c/code\u003e is the resulting value. Note that this\n     value may be equal to bottom, e.g. if \u003ccode\u003ec = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n     \u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the computation does not terminate, then \u003ccode\u003e\u003ca\u003eNonTermination\u003c/a\u003e\u003c/code\u003e is\n     returned.\n\u003c/li\u003e\u003cli\u003e If the computation raises an exception, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e e\u003c/code\u003e is\n     returned, where \u003ccode\u003ee\u003c/code\u003e is the exception.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that a user-defined exception is used to terminate the\n computation, so if \u003ccode\u003ec\u003c/code\u003e catches all exceptions, or blocks\n asynchronous exceptions, then \u003ccode\u003e\u003ca\u003etimeOut\u003c/a\u003e\u003c/code\u003e may fail to function\n properly.\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOut",
          "package": "ChasingBottoms",
          "signature": "Int -\u003e IO a -\u003e IO (Result a)",
          "source": "src/Test-ChasingBottoms-TimeOut.html#timeOut",
          "type": "function"
        },
        "index": {
          "description": "timeOut runs for at most seconds modulo scheduling issues If the computation terminates before that then Value is returned where is the resulting value Note that this value may be equal to bottom e.g if return bottom If the computation does not terminate then NonTermination is returned If the computation raises an exception then Exception is returned where is the exception Note that user-defined exception is used to terminate the computation so if catches all exceptions or blocks asynchronous exceptions then timeOut may fail to function properly",
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOut",
          "normalized": "Int-\u003eIO a-\u003eIO(Result a)",
          "package": "ChasingBottoms",
          "partial": "Out",
          "signature": "Int-\u003eIO a-\u003eIO(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:timeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etimeOut'\u003c/a\u003e\u003c/code\u003e is a variant which can be used for pure\n computations. The definition,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003etimeOut'\u003c/a\u003e\u003c/code\u003e n = \u003ccode\u003e\u003ca\u003etimeOut\u003c/a\u003e\u003c/code\u003e n . \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eensures that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etimeOut'\u003c/a\u003e\u003c/code\u003e 1 \u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e usually returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e\n \u003csomething\u003e\u003c/code\u003e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etimeOut\u003c/a\u003e\u003c/code\u003e 1 (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e usually\n returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ebottom\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e; in other words, the computation\n reaches whnf almost immediately, defeating the purpose of the\n time-out.)\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOut'",
          "package": "ChasingBottoms",
          "signature": "Int -\u003e a -\u003e IO (Result a)",
          "source": "src/Test-ChasingBottoms-TimeOut.html#timeOut%27",
          "type": "function"
        },
        "index": {
          "description": "timeOut is variant which can be used for pure computations The definition timeOut timeOut evaluate ensures that timeOut bottom usually returns Exception something timeOut return bottom usually returns Value bottom in other words the computation reaches whnf almost immediately defeating the purpose of the time-out",
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOut'",
          "normalized": "Int-\u003ea-\u003eIO(Result a)",
          "package": "ChasingBottoms",
          "partial": "Out'",
          "signature": "Int-\u003ea-\u003eIO(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:timeOut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etimeOutMicro\u003c/a\u003e\u003c/code\u003e takes a delay in microseconds. Note that the\n resolution is not necessarily very high (the last time I checked it\n was 0.02 seconds when using the standard runtime system settings\n for GHC).\n\u003c/p\u003e",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOutMicro",
          "package": "ChasingBottoms",
          "signature": "Int -\u003e IO a -\u003e IO (Result a)",
          "source": "src/Test-ChasingBottoms-TimeOut.html#timeOutMicro",
          "type": "function"
        },
        "index": {
          "description": "timeOutMicro takes delay in microseconds Note that the resolution is not necessarily very high the last time checked it was seconds when using the standard runtime system settings for GHC",
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOutMicro",
          "normalized": "Int-\u003eIO a-\u003eIO(Result a)",
          "package": "ChasingBottoms",
          "partial": "Out Micro",
          "signature": "Int-\u003eIO a-\u003eIO(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:timeOutMicro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etimeOutMicro'\u003c/a\u003e\u003c/code\u003e is the equivalent variant of \u003ccode\u003e\u003ca\u003etimeOutMicro\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  \u003ccode\u003e\u003ca\u003etimeOutMicro'\u003c/a\u003e\u003c/code\u003e n = \u003ccode\u003e\u003ca\u003etimeOutMicro\u003c/a\u003e\u003c/code\u003e n . \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOutMicro'",
          "package": "ChasingBottoms",
          "signature": "Int -\u003e a -\u003e IO (Result a)",
          "source": "src/Test-ChasingBottoms-TimeOut.html#timeOutMicro%27",
          "type": "function"
        },
        "index": {
          "description": "timeOutMicro is the equivalent variant of timeOutMicro timeOutMicro timeOutMicro evaluate",
          "hierarchy": "Test ChasingBottoms TimeOut",
          "module": "Test.ChasingBottoms.TimeOut",
          "name": "timeOutMicro'",
          "normalized": "Int-\u003ea-\u003eIO(Result a)",
          "package": "ChasingBottoms",
          "partial": "Out Micro'",
          "signature": "Int-\u003ea-\u003eIO(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms-TimeOut.html#v:timeOutMicro-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module just re-exports all the other modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.ChasingBottoms",
          "name": "ChasingBottoms",
          "package": "ChasingBottoms",
          "source": "src/Test-ChasingBottoms.html",
          "type": "module"
        },
        "index": {
          "description": "This module just re-exports all the other modules",
          "hierarchy": "Test ChasingBottoms",
          "module": "Test.ChasingBottoms",
          "name": "ChasingBottoms",
          "package": "ChasingBottoms",
          "partial": "Chasing Bottoms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ChasingBottoms/docs/Test-ChasingBottoms.html#"
      }
    }
  ]
]