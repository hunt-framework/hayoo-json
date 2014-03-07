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
        "word": "StrategyLib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Maybe",
          "name": "3AMaybeT",
          "package": "StrategyLib",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "3AMaybeT",
          "package": "StrategyLib",
          "partial": "AMaybe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Maybe.html#t:3AMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "3AErrorAlg",
          "package": "StrategyLib",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3AErrorAlg",
          "package": "StrategyLib",
          "partial": "AError Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#t:3AErrorAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "3AListAlg",
          "package": "StrategyLib",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3AListAlg",
          "package": "StrategyLib",
          "partial": "AList Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#t:3AListAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "3AMaybeAlg",
          "package": "StrategyLib",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3AMaybeAlg",
          "package": "StrategyLib",
          "partial": "AMaybe Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#t:3AMaybeAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "3AStateAlg",
          "package": "StrategyLib",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3AStateAlg",
          "package": "StrategyLib",
          "partial": "AState Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#t:3AStateAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "3AMonadRun",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3AMonadRun",
          "package": "StrategyLib",
          "partial": "AMonad Run",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3AMonadRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "3AMonadUnTrans",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3AMonadUnTrans",
          "package": "StrategyLib",
          "partial": "AMonad Un Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3AMonadUnTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Specialization of \u003ctt\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/tt\u003e for MaybeT.\n",
          "module": "Control.Monad.Run",
          "name": "3Amayswitch",
          "package": "StrategyLib",
          "signature": "[MaybeT m b] -\u003e m b -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Specialization of mswitch for MaybeT",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amayswitch",
          "normalized": "[MaybeT a b]-\u003ea b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Amayswitch",
          "signature": "[MaybeT m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amayswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Monadic function choice combinator that confines the partiality effect\n   to the first argument. This is a variation on mchoice which\n   allows the partiality effect to spread to both arguments and to the\n   result.\n",
          "module": "Control.Monad.Run",
          "name": "3Amchoice'",
          "package": "StrategyLib",
          "signature": "(a -\u003e t m b) -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Monadic function choice combinator that confines the partiality effect to the first argument This is variation on mchoice which allows the partiality effect to spread to both arguments and to the result",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amchoice'",
          "normalized": "(a-\u003eb c d)-\u003e(a-\u003ec d)-\u003ea-\u003ec d",
          "package": "StrategyLib",
          "partial": "Amchoice'",
          "signature": "(a-\u003et m b)-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amchoice'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Monadic function choice combinator. Generalization of \u003ctt\u003e\u003ca\u003emchoice'\u003c/a\u003e\u003c/tt\u003e that\n   takes a list of choice arguments rather than a single one.\n",
          "module": "Control.Monad.Run",
          "name": "3Amchoices",
          "package": "StrategyLib",
          "signature": "[a -\u003e t m b] -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Monadic function choice combinator Generalization of mchoice that takes list of choice arguments rather than single one",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amchoices",
          "normalized": "[a-\u003eb c d]-\u003e(a-\u003ec d)-\u003ea-\u003ec d",
          "package": "StrategyLib",
          "partial": "Amchoices",
          "signature": "[a-\u003et m b]-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amchoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Monadic choice combinator that confines the partiality effect to\n   the first argument. This is a variation on \u003ctt\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/tt\u003e which allows\n   the partiality effect to spread to both arguments and to the result.\t  \n",
          "module": "Control.Monad.Run",
          "name": "3Amplus'",
          "package": "StrategyLib",
          "signature": "t m b -\u003e m b -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Monadic choice combinator that confines the partiality effect to the first argument This is variation on mplus which allows the partiality effect to spread to both arguments and to the result",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amplus'",
          "normalized": "a b c-\u003eb c-\u003eb c",
          "package": "StrategyLib",
          "partial": "Amplus'",
          "signature": "t m b-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amplus'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Exchange one monad by another.\n   This function runs one monad, and puts its value in another. This is\n   basically a monadic version of the \u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e function itself. Note that the two\n   monads are unrelated, so none of the effects of the incoming monad are\n   transferred to the result monad.\n",
          "module": "Control.Monad.Run",
          "name": "3Amrun",
          "package": "StrategyLib",
          "signature": "s a b -\u003e m a -\u003e m' b",
          "type": "function"
        },
        "index": {
          "description": "Exchange one monad by another This function runs one monad and puts its value in another This is basically monadic version of the run function itself Note that the two monads are unrelated so none of the effects of the incoming monad are transferred to the result monad",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amrun",
          "normalized": "a b c-\u003ed b-\u003ee c",
          "package": "StrategyLib",
          "partial": "Amrun",
          "signature": "s a b-\u003em a-\u003em' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amrun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "choice branches\notherwise\nresult\n",
          "module": "Control.Monad.Run",
          "name": "3Amswitch",
          "package": "StrategyLib",
          "signature": "[t m b]-\u003e m b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "choice branches otherwise result",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amswitch",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "StrategyLib",
          "partial": "Amswitch",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Implementation variant of \u003ctt\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/tt\u003e where the unlift is postponed\n   to the very end.\n",
          "module": "Control.Monad.Run",
          "name": "3Amswitch'",
          "package": "StrategyLib",
          "signature": "[t m b] -\u003e m b -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Implementation variant of mswitch where the unlift is postponed to the very end",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amswitch'",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "StrategyLib",
          "partial": "Amswitch'",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amswitch'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Implementation variant of \u003ctt\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/tt\u003e in terms of foldr.\n",
          "module": "Control.Monad.Run",
          "name": "3Amswitch0",
          "package": "StrategyLib",
          "signature": "[t m b] -\u003e m b -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Implementation variant of mswitch in terms of foldr",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amswitch0",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "StrategyLib",
          "partial": "Amswitch",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amswitch0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Implementation variant of \u003ctt\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/tt\u003e with \u003ctt\u003e\u003ca\u003emplus'\u003c/a\u003e\u003c/tt\u003e expanded:\n",
          "module": "Control.Monad.Run",
          "name": "3Amswitch1",
          "package": "StrategyLib",
          "signature": "[t m b] -\u003e m b -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Implementation variant of mswitch with mplus expanded",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Amswitch1",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "StrategyLib",
          "partial": "Amswitch",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Amswitch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The overloaded function run takes as first argument an \u003ca\u003ealgebra\u003c/a\u003e which\n captures the ingredients necessary to run the particular monad at hand.\n This algebra is parameterized with the domain and co-domain of run.\n",
          "module": "Control.Monad.Run",
          "name": "3Arun",
          "package": "StrategyLib",
          "signature": "s a b -\u003e m a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The overloaded function run takes as first argument an algebra which captures the ingredients necessary to run the particular monad at hand This algebra is parameterized with the domain and co-domain of run",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Arun",
          "normalized": "a b c-\u003ed b-\u003ec",
          "package": "StrategyLib",
          "partial": "Arun",
          "signature": "s a b-\u003em a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Arun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The overloaded function \u003ctt\u003e\u003ca\u003eunlift\u003c/a\u003e\u003c/tt\u003e for monad transformers takes as first \n   argument an \u003ca\u003ealgebra\u003c/a\u003e just like the run function for base monads. For\n   each monad transformer, the same algebra is used as for the base monad\n   of which the transformer is the parameterized variant.\n",
          "module": "Control.Monad.Run",
          "name": "3Aunlift",
          "package": "StrategyLib",
          "signature": "s a b -\u003e t m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "The overloaded function unlift for monad transformers takes as first argument an algebra just like the run function for base monads For each monad transformer the same algebra is used as for the base monad of which the transformer is the parameterized variant",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "3Aunlift",
          "normalized": "a b c-\u003ed e b-\u003ee c",
          "package": "StrategyLib",
          "partial": "Aunlift",
          "signature": "s a b-\u003et m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Control-Monad-Run.html#v:3Aunlift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The type of names of chaseable things. Synonym of \u003ctt\u003e\u003ca\u003eString\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AChaseName",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "description": "The type of names of chaseable things Synonym of String",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AChaseName",
          "package": "StrategyLib",
          "partial": "AChase Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#t:3AChaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "path (directories to search)\nbase name\npossible extensions\ncontents of file\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AchaseFile",
          "package": "StrategyLib",
          "signature": "[FilePath]-\u003e String-\u003e [String]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "path directories to search base name possible extensions contents of file",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AchaseFile",
          "normalized": "[FilePath]-\u003eString-\u003e[String]-\u003eIO String",
          "package": "StrategyLib",
          "partial": "Achase File",
          "signature": "[FilePath]-\u003eString-\u003e[String]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#v:3AchaseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "path (list of directories to search)\ntodo (list of modules still to find)\ndone (list of modules already found)\ninitial (start value of accumulator)\nparse (function that attempt to find and parse a module)\nimports (function that extracts imports from\n   a parse result)\non module (function that computes a new\n   accumulator from a parse result)\non missing (function that computes a new\n   accumulator value when parsing failed)\nresult (accumulated value)\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AchaseWith",
          "package": "StrategyLib",
          "signature": "[FilePath]-\u003e [ChaseName]-\u003e [ChaseName]-\u003e accu-\u003e ([FilePath] -\u003e ChaseName -\u003e IO (Either cu String))-\u003e (cu -\u003e [ChaseName])-\u003e (ChaseName -\u003e [ChaseName] -\u003e cu -\u003e accu -\u003e IO accu)-\u003e (ChaseName -\u003e accu -\u003e IO accu)-\u003e IO accu",
          "type": "function"
        },
        "index": {
          "description": "path list of directories to search todo list of modules still to find done list of modules already found initial start value of accumulator parse function that attempt to find and parse module imports function that extracts imports from parse result on module function that computes new accumulator from parse result on missing function that computes new accumulator value when parsing failed result accumulated value",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AchaseWith",
          "normalized": "[FilePath]-\u003e[ChaseName]-\u003e[ChaseName]-\u003ea-\u003e([FilePath]-\u003eChaseName-\u003eIO(Either b String))-\u003e(b-\u003e[ChaseName])-\u003e(ChaseName-\u003e[ChaseName]-\u003eb-\u003ea-\u003eIO a)-\u003e(ChaseName-\u003ea-\u003eIO a)-\u003eIO a",
          "package": "StrategyLib",
          "partial": "Achase With",
          "signature": "[FilePath]-\u003e[ChaseName]-\u003e[ChaseName]-\u003eaccu-\u003e([FilePath]-\u003eChaseName-\u003eIO(Either cu String))-\u003e(cu-\u003e[ChaseName])-\u003e(ChaseName-\u003e[ChaseName]-\u003ecu-\u003eaccu-\u003eIO accu)-\u003e(ChaseName-\u003eaccu-\u003eIO accu)-\u003eIO accu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#v:3AchaseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "path (directories to search)\nbase name\npossible extensions\ncontents of file\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AfindFile",
          "package": "StrategyLib",
          "signature": "[FilePath]-\u003e String-\u003e [String]-\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "path directories to search base name possible extensions contents of file",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "3AfindFile",
          "normalized": "[FilePath]-\u003eString-\u003e[String]-\u003eIO FilePath",
          "package": "StrategyLib",
          "partial": "Afind File",
          "signature": "[FilePath]-\u003eString-\u003e[String]-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#v:3AfindFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3ACoder",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3ACoder",
          "package": "StrategyLib",
          "partial": "ACoder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:3ACoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AGList",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AGList",
          "package": "StrategyLib",
          "partial": "AGList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:3AGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type of generic maps\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AGMap",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "description": "Type of generic maps",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AGMap",
          "package": "StrategyLib",
          "partial": "AGMap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:3AGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type of generic sets\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AGSet",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "description": "Type of generic sets",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AGSet",
          "package": "StrategyLib",
          "partial": "AGSet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:3AGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AaddGList",
          "package": "StrategyLib",
          "signature": "t -\u003e GList -\u003e GList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AaddGList",
          "normalized": "a-\u003eGList-\u003eGList",
          "package": "StrategyLib",
          "partial": "Aadd GList",
          "signature": "t-\u003eGList-\u003eGList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AaddGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add an element to a generic set\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AaddGSet",
          "package": "StrategyLib",
          "signature": "t -\u003e GSet -\u003e GSet",
          "type": "function"
        },
        "index": {
          "description": "Add an element to generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AaddGSet",
          "normalized": "a-\u003eGSet-\u003eGSet",
          "package": "StrategyLib",
          "partial": "Aadd GSet",
          "signature": "t-\u003eGSet-\u003eGSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AaddGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test whether an element with given key is contained in a generic map\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AcontainsGMap",
          "package": "StrategyLib",
          "signature": "t -\u003e GMap v -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether an element with given key is contained in generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AcontainsGMap",
          "normalized": "a-\u003eGMap b-\u003eBool",
          "package": "StrategyLib",
          "partial": "Acontains GMap",
          "signature": "t-\u003eGMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AcontainsGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test whether a given element is contained in a generic set\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AcontainsGSet",
          "package": "StrategyLib",
          "signature": "t -\u003e GSet -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether given element is contained in generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AcontainsGSet",
          "normalized": "a-\u003eGSet-\u003eBool",
          "package": "StrategyLib",
          "partial": "Acontains GSet",
          "signature": "t-\u003eGSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AcontainsGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AelemsGList",
          "package": "StrategyLib",
          "signature": "(t -\u003e ()) -\u003e GList -\u003e [t]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AelemsGList",
          "normalized": "(a-\u003e())-\u003eGList-\u003e[a]",
          "package": "StrategyLib",
          "partial": "Aelems GList",
          "signature": "(t-\u003e())-\u003eGList-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AelemsGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AemptyGList",
          "package": "StrategyLib",
          "signature": "GList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AemptyGList",
          "package": "StrategyLib",
          "partial": "Aempty GList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AemptyGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Empty generic map\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AemptyGMap",
          "package": "StrategyLib",
          "signature": "GMap v",
          "type": "function"
        },
        "index": {
          "description": "Empty generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AemptyGMap",
          "package": "StrategyLib",
          "partial": "Aempty GMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AemptyGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Empty generic set.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AemptyGSet",
          "package": "StrategyLib",
          "signature": "GSet",
          "type": "function"
        },
        "index": {
          "description": "Empty generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AemptyGSet",
          "package": "StrategyLib",
          "partial": "Aempty GSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AemptyGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AenCode",
          "package": "StrategyLib",
          "signature": "Coder -\u003e x -\u003e Coder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AenCode",
          "normalized": "Coder-\u003ea-\u003eCoder",
          "package": "StrategyLib",
          "partial": "Aen Code",
          "signature": "Coder-\u003ex-\u003eCoder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AenCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Completely filled generic set\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AfullGSet",
          "package": "StrategyLib",
          "signature": "GSet",
          "type": "function"
        },
        "index": {
          "description": "Completely filled generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AfullGSet",
          "package": "StrategyLib",
          "partial": "Afull GSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AfullGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AgetCode",
          "package": "StrategyLib",
          "signature": "Coder -\u003e x -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AgetCode",
          "normalized": "Coder-\u003ea-\u003eMaybe Int",
          "package": "StrategyLib",
          "partial": "Aget Code",
          "signature": "Coder-\u003ex-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AgetCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AgetGList",
          "package": "StrategyLib",
          "signature": "Integer -\u003e GList -\u003e Maybe t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AgetGList",
          "normalized": "Integer-\u003eGList-\u003eMaybe a",
          "package": "StrategyLib",
          "partial": "Aget GList",
          "signature": "Integer-\u003eGList-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AgetGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Obtain the value for a given key from a generic map\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AgetGMap",
          "package": "StrategyLib",
          "signature": "t -\u003e GMap v -\u003e Maybe v",
          "type": "function"
        },
        "index": {
          "description": "Obtain the value for given key from generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AgetGMap",
          "normalized": "a-\u003eGMap b-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Aget GMap",
          "signature": "t-\u003eGMap v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AgetGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmapGListTP",
          "package": "StrategyLib",
          "signature": "TP Maybe -\u003e GList -\u003e GList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmapGListTP",
          "normalized": "TP Maybe-\u003eGList-\u003eGList",
          "package": "StrategyLib",
          "partial": "Amap GList TP",
          "signature": "TP Maybe-\u003eGList-\u003eGList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AmapGListTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmapGListTU",
          "package": "StrategyLib",
          "signature": "(t -\u003e ()) -\u003e TU a Maybe -\u003e GList -\u003e [Maybe a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmapGListTU",
          "normalized": "(a-\u003e())-\u003eTU b Maybe-\u003eGList-\u003e[Maybe b]",
          "package": "StrategyLib",
          "partial": "Amap GList TU",
          "signature": "(t-\u003e())-\u003eTU a Maybe-\u003eGList-\u003e[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AmapGListTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pointwise modification of monomorphic functions\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3Amodify",
          "package": "StrategyLib",
          "signature": "(x -\u003e y) -\u003e x -\u003e y -\u003e x -\u003e y",
          "type": "function"
        },
        "index": {
          "description": "Pointwise modification of monomorphic functions",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3Amodify",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "package": "StrategyLib",
          "partial": "Amodify",
          "signature": "(x-\u003ey)-\u003ex-\u003ey-\u003ex-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3Amodify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pointwise modification of type-preserving strategies\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmodifyTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e t -\u003e m t -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Pointwise modification of type-preserving strategies",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmodifyTP",
          "normalized": "TP a-\u003eb-\u003ea b-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Amodify TP",
          "signature": "TP m-\u003et-\u003em t-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AmodifyTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pointwise modification of type-unifying strategies\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmodifyTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e t -\u003e m a -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Pointwise modification of type-unifying strategies",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AmodifyTU",
          "normalized": "TU a b-\u003ec-\u003eb a-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Amodify TU",
          "signature": "TU a m-\u003et-\u003em a-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AmodifyTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AnextCode",
          "package": "StrategyLib",
          "signature": "Coder -\u003e (Int, Coder)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AnextCode",
          "normalized": "Coder-\u003e(Int,Coder)",
          "package": "StrategyLib",
          "partial": "Anext Code",
          "signature": "Coder-\u003e(Int,Coder)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AnextCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AnoCode",
          "package": "StrategyLib",
          "signature": "Coder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AnoCode",
          "package": "StrategyLib",
          "partial": "Ano Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AnoCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3Anth",
          "package": "StrategyLib",
          "signature": "[a] -\u003e Integer -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3Anth",
          "normalized": "[a]-\u003eInteger-\u003ea",
          "package": "StrategyLib",
          "partial": "Anth",
          "signature": "[a]-\u003eInteger-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3Anth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AputGList",
          "package": "StrategyLib",
          "signature": "Integer -\u003e t -\u003e GList -\u003e GList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AputGList",
          "normalized": "Integer-\u003ea-\u003eGList-\u003eGList",
          "package": "StrategyLib",
          "partial": "Aput GList",
          "signature": "Integer-\u003et-\u003eGList-\u003eGList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AputGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add an entry with given key and value to a generic map\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AputGMap",
          "package": "StrategyLib",
          "signature": "t -\u003e v -\u003e GMap v -\u003e GMap v",
          "type": "function"
        },
        "index": {
          "description": "Add an entry with given key and value to generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AputGMap",
          "normalized": "a-\u003eb-\u003eGMap b-\u003eGMap b",
          "package": "StrategyLib",
          "partial": "Aput GMap",
          "signature": "t-\u003ev-\u003eGMap v-\u003eGMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AputGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Remove an element from a generic map (my key)\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AremoveGMap",
          "package": "StrategyLib",
          "signature": "t -\u003e GMap v -\u003e GMap v",
          "type": "function"
        },
        "index": {
          "description": "Remove an element from generic map my key",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AremoveGMap",
          "normalized": "a-\u003eGMap b-\u003eGMap b",
          "package": "StrategyLib",
          "partial": "Aremove GMap",
          "signature": "t-\u003eGMap v-\u003eGMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AremoveGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Remove an element from a generic set\n",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AremoveGSet",
          "package": "StrategyLib",
          "signature": "t -\u003e GSet -\u003e GSet",
          "type": "function"
        },
        "index": {
          "description": "Remove an element from generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AremoveGSet",
          "normalized": "a-\u003eGSet-\u003eGSet",
          "package": "StrategyLib",
          "partial": "Aremove GSet",
          "signature": "t-\u003eGSet-\u003eGSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AremoveGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AsetCode",
          "package": "StrategyLib",
          "signature": "Coder -\u003e x -\u003e Int -\u003e Coder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "3AsetCode",
          "normalized": "Coder-\u003ea-\u003eInt-\u003eCoder",
          "package": "StrategyLib",
          "partial": "Aset Code",
          "signature": "Coder-\u003ex-\u003eInt-\u003eCoder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:3AsetCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "default value (Note: universally quantified!)\ntype-preserving partial strategy\ntype-preserving strategy without partiality\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AguaranteeSuccessTP",
          "package": "StrategyLib",
          "signature": "(forall a . a)-\u003e TP (t m)-\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "default value Note universally quantified type-preserving partial strategy type-preserving strategy without partiality",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AguaranteeSuccessTP",
          "normalized": "(a b b)-\u003eTP(c d)-\u003eTP d",
          "package": "StrategyLib",
          "partial": "Aguarantee Success TP",
          "signature": "(forall a a)-\u003eTP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AguaranteeSuccessTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "default value\ntype-preserving partial strategy\ntype-preserving strategy without partiality\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AguaranteeSuccessTU",
          "package": "StrategyLib",
          "signature": "a-\u003e TU a (t m)-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "default value type-preserving partial strategy type-preserving strategy without partiality",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AguaranteeSuccessTU",
          "normalized": "a-\u003eTU a(b c)-\u003eTU a c",
          "package": "StrategyLib",
          "partial": "Aguarantee Success TU",
          "signature": "a-\u003eTU a(t m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AguaranteeSuccessTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add an effect to the monad in a type-preserving strategy. \n   The monads are related by a monad transformer, so the effects of the\n   incoming monad are preserved in the result monad. We use the \u003ctt\u003e\u003ca\u003elift\u003c/a\u003e\u003c/tt\u003e\n   function of the monad transformer.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AliftTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP (t m)",
          "type": "function"
        },
        "index": {
          "description": "Add an effect to the monad in type-preserving strategy The monads are related by monad transformer so the effects of the incoming monad are preserved in the result monad We use the lift function of the monad transformer",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AliftTP",
          "normalized": "TP a-\u003eTP(b a)",
          "package": "StrategyLib",
          "partial": "Alift TP",
          "signature": "TP m-\u003eTP(t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AliftTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add an effect to the monad in a type-unifying strategy. \n   The monads are related by a monad transformer, so the effects of the\n   incoming monad are preserved in the result monad. We use the \u003ctt\u003e\u003ca\u003elift\u003c/a\u003e\u003c/tt\u003e\n   function of the monad transformer.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AliftTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a (t m)",
          "type": "function"
        },
        "index": {
          "description": "Add an effect to the monad in type-unifying strategy The monads are related by monad transformer so the effects of the incoming monad are preserved in the result monad We use the lift function of the monad transformer",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AliftTU",
          "normalized": "TU a b-\u003eTU a(c b)",
          "package": "StrategyLib",
          "partial": "Alift TU",
          "signature": "TU a m-\u003eTU a(t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AliftTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Localize the state of a type-preserving strategy. The first argument\n   represents the initial state.  \n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AlocalStateTP",
          "package": "StrategyLib",
          "signature": "s -\u003e TP (t m) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Localize the state of type-preserving strategy The first argument represents the initial state",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AlocalStateTP",
          "normalized": "a-\u003eTP(b c)-\u003eTP c",
          "package": "StrategyLib",
          "partial": "Alocal State TP",
          "signature": "s-\u003eTP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AlocalStateTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Localize the state of a type-unifying strategy. The first argument\n   represents the initial state.  \n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AlocalStateTU",
          "package": "StrategyLib",
          "signature": "s -\u003e TU a (t m) -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Localize the state of type-unifying strategy The first argument represents the initial state",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AlocalStateTU",
          "normalized": "a-\u003eTU b(c d)-\u003eTU b d",
          "package": "StrategyLib",
          "partial": "Alocal State TU",
          "signature": "s-\u003eTU a(t m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AlocalStateTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Replace the monad in a type-preserving strategy, given a monad\n   algebra (see \u003ctt\u003e\u003ca\u003eMonadRun\u003c/a\u003e\u003c/tt\u003e) for the monad that is replaced. The two \n   monads are unrelated, so none of the effects in the monad that is\n   replaced carry over to the one that replaces it.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AmrunTP",
          "package": "StrategyLib",
          "signature": "(forall a . s a a) -\u003e TP m -\u003e TP m'",
          "type": "function"
        },
        "index": {
          "description": "Replace the monad in type-preserving strategy given monad algebra see MonadRun for the monad that is replaced The two monads are unrelated so none of the effects in the monad that is replaced carry over to the one that replaces it",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AmrunTP",
          "normalized": "(a b c b b)-\u003eTP d-\u003eTP e",
          "package": "StrategyLib",
          "partial": "Amrun TP",
          "signature": "(forall a s a a)-\u003eTP m-\u003eTP m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AmrunTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Replace the monad in a type-unifying strategy, given a monad\n   algebra (see \u003ctt\u003e\u003ca\u003eMonadRun\u003c/a\u003e\u003c/tt\u003e) for the monad that is replaced. The two \n   monads are unrelated, so none of the effects in the monad that is\n   replaced carry over to the one that replaces it.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AmrunTU",
          "package": "StrategyLib",
          "signature": "s a a -\u003e TU a m -\u003e TU a m'",
          "type": "function"
        },
        "index": {
          "description": "Replace the monad in type-unifying strategy given monad algebra see MonadRun for the monad that is replaced The two monads are unrelated so none of the effects in the monad that is replaced carry over to the one that replaces it",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AmrunTU",
          "normalized": "a b b-\u003eTU b c-\u003eTU b d",
          "package": "StrategyLib",
          "partial": "Amrun TU",
          "signature": "s a a-\u003eTU a m-\u003eTU a m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AmrunTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "remove an effect from the monad of a type-preserving strategy.\n   The monads are related by a monad untransformer (see \u003ctt\u003e\u003ca\u003eMonadUnTrans\u003c/a\u003e\u003c/tt\u003e),\n   so the effects of the incoming monad are preserved in the result\n   monad, except for the effect for which a monad algebra is supplied.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AunliftTP",
          "package": "StrategyLib",
          "signature": "(forall a . s a a) -\u003e TP (t m) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "remove an effect from the monad of type-preserving strategy The monads are related by monad untransformer see MonadUnTrans so the effects of the incoming monad are preserved in the result monad except for the effect for which monad algebra is supplied",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AunliftTP",
          "normalized": "(a b c b b)-\u003eTP(d e)-\u003eTP e",
          "package": "StrategyLib",
          "partial": "Aunlift TP",
          "signature": "(forall a s a a)-\u003eTP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AunliftTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "remove an effect from the monad of a type-unifying strategy.\n   The monads are related by a monad untransformer (see \u003ctt\u003e\u003ca\u003eMonadUnTrans\u003c/a\u003e\u003c/tt\u003e),\n   so the effects of the incoming monad are preserved in the result\n   monad, except for the effect for which a monad algebra is supplied.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AunliftTU",
          "package": "StrategyLib",
          "signature": "s a a -\u003e TU a (t m) -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "remove an effect from the monad of type-unifying strategy The monads are related by monad untransformer see MonadUnTrans so the effects of the incoming monad are preserved in the result monad except for the effect for which monad algebra is supplied",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AunliftTU",
          "normalized": "a b b-\u003eTU b(c d)-\u003eTU b d",
          "package": "StrategyLib",
          "partial": "Aunlift TU",
          "signature": "s a a-\u003eTU a(t m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AunliftTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unsafe version of \u003ctt\u003e\u003ca\u003eguaranteeSuccessTP\u003c/a\u003e\u003c/tt\u003e. This version uses uses \u003ctt\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/tt\u003e\n   to recover from failure. For the type-preserving case, this is the only\n   possible default value.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AunsafeGuaranteeSuccessTP",
          "package": "StrategyLib",
          "signature": "TP (t m) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Unsafe version of guaranteeSuccessTP This version uses uses undefined to recover from failure For the type-preserving case this is the only possible default value",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "3AunsafeGuaranteeSuccessTP",
          "normalized": "TP(a b)-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Aunsafe Guarantee Success TP",
          "signature": "TP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:3AunsafeGuaranteeSuccessTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Exhaustive repeated application according to the left-most\n   innermost traversal strategy, implemented in a more \n   efficient way.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Ainnermost",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application according to the left-most innermost traversal strategy implemented in more efficient way",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Ainnermost",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Ainnermost",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:3Ainnermost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Exhaustive repeated application according to the left-most\n   innermost traversal strategy, implemented in a naive way.\n   Use \u003ctt\u003e\u003ca\u003einnermost\u003c/a\u003e\u003c/tt\u003e instead.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Ainnermost'",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application according to the left-most innermost traversal strategy implemented in naive way Use innermost instead",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Ainnermost'",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Ainnermost'",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:3Ainnermost'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Exhaustive repeated application according to the left-most\n   outermost traversal strategy.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Aoutermost",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application according to the left-most outermost traversal strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Aoutermost",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aoutermost",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:3Aoutermost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Exhaustive repeated application throughout the input term.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Areduce",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application throughout the input term",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3Areduce",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Areduce",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:3Areduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Exhaustive repeated application at the root of the input term\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3ArepeatTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application at the root of the input term",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "3ArepeatTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Arepeat TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:3ArepeatTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type guard (function type), i.e., guard that does not observe values\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3ATypeGuard",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "description": "Type guard function type i.e guard that does not observe values",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3ATypeGuard",
          "package": "StrategyLib",
          "partial": "AType Guard",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#t:3ATypeGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If predicate g holds for the input term, return it as output term,\n   otherwise fail.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AfilterTP",
          "package": "StrategyLib",
          "signature": "(t -\u003e Bool) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "If predicate holds for the input term return it as output term otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AfilterTP",
          "normalized": "(a-\u003eBool)-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Afilter TP",
          "signature": "(t-\u003eBool)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AfilterTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If predicate g holds for the input term, return it as output value,\n   otherwise fail.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AfilterTU",
          "package": "StrategyLib",
          "signature": "(t -\u003e Bool) -\u003e TU t m",
          "type": "function"
        },
        "index": {
          "description": "If predicate holds for the input term return it as output value otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AfilterTU",
          "normalized": "(a-\u003eBool)-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Afilter TU",
          "signature": "(t-\u003eBool)-\u003eTU t m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AfilterTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If c succeeds, pass its value to the then-clause t, \n   otherwise revert to the else-clause e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifS",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e (u -\u003e s m) -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "If succeeds pass its value to the then-clause otherwise revert to the else-clause",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifS",
          "normalized": "TU a b-\u003e(a-\u003ec b)-\u003ec b-\u003ec b",
          "package": "StrategyLib",
          "partial": "Aif",
          "signature": "TU u m-\u003e(u-\u003es m)-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AifS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If c succeeds, pass its value to the then-clause t, \n   otherwise revert to the else-clause e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifTP",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e (u -\u003e TP m) -\u003e TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "If succeeds pass its value to the then-clause otherwise revert to the else-clause",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifTP",
          "normalized": "TU a b-\u003e(a-\u003eTP b)-\u003eTP b-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Aif TP",
          "signature": "TU u m-\u003e(u-\u003eTP m)-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AifTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If c succeeds, pass its value to the then-clause t, \n   otherwise revert to the else-clause e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifTU",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e (u -\u003e TU u' m) -\u003e TU u' m -\u003e TU u' m",
          "type": "function"
        },
        "index": {
          "description": "If succeeds pass its value to the then-clause otherwise revert to the else-clause",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifTU",
          "normalized": "TU a b-\u003e(a-\u003eTU c b)-\u003eTU c b-\u003eTU c b",
          "package": "StrategyLib",
          "partial": "Aif TU",
          "signature": "TU u m-\u003e(u-\u003eTU u' m)-\u003eTU u' m-\u003eTU u' m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AifTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Guard then-clause t by the void-valued type-unifying\n   condition c.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifthenS",
          "package": "StrategyLib",
          "signature": "TU () m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Guard then-clause by the void-valued type-unifying condition",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifthenS",
          "normalized": "TU()a-\u003eb a-\u003eb a",
          "package": "StrategyLib",
          "partial": "Aifthen",
          "signature": "TU()m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AifthenS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Guard type-preserving then-clause t by the void-valued type-unifying\n   condition c.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifthenTP",
          "package": "StrategyLib",
          "signature": "TU () m -\u003e TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Guard type-preserving then-clause by the void-valued type-unifying condition",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifthenTP",
          "normalized": "TU()a-\u003eTP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aifthen TP",
          "signature": "TU()m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AifthenTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Guard type-unifying then-clause t by the void-valued type-unifying\n   condition c.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifthenTU",
          "package": "StrategyLib",
          "signature": "TU () m -\u003e TU u m -\u003e TU u m",
          "type": "function"
        },
        "index": {
          "description": "Guard type-unifying then-clause by the void-valued type-unifying condition",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AifthenTU",
          "normalized": "TU()a-\u003eTU b a-\u003eTU b a",
          "package": "StrategyLib",
          "partial": "Aifthen TU",
          "signature": "TU()m-\u003eTU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AifthenTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Invert the success-value of strategy s.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AnotS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Invert the success-value of strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AnotS",
          "normalized": "a b-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Anot",
          "signature": "s m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AnotS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Invert the success-value of type-preserving strategy s. Its output\n   term (in case of success) will be ignored.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AnotTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Invert the success-value of type-preserving strategy Its output term in case of success will be ignored",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AnotTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Anot TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AnotTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Invert the success-value of type-unifying strategy s. Its output\n   value (in case of success) will be ignored.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AnotTU",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Invert the success-value of type-unifying strategy Its output value in case of success will be ignored",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AnotTU",
          "normalized": "TU a b-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Anot TU",
          "signature": "TU u m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AnotTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test for a strategy's success in a type-preserving context.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtestS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Test for strategy success in type-preserving context",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtestS",
          "normalized": "a b-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Atest",
          "signature": "s m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtestS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test for a type-preserving strategy's success in a\n   type-preserving context.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtestTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Test for type-preserving strategy success in type-preserving context",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtestTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Atest TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtestTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test for a type-unifying strategy's success in a \n   type-preserving context.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtestTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Test for type-unifying strategy success in type-preserving context",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtestTU",
          "normalized": "TU a b-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Atest TU",
          "signature": "TU a m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtestTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If predicate g holds for the input term, \n   return 1 otherwise return 0.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtickTU",
          "package": "StrategyLib",
          "signature": "(t -\u003e Bool) -\u003e TU n m",
          "type": "function"
        },
        "index": {
          "description": "If predicate holds for the input term return otherwise return",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtickTU",
          "normalized": "(a-\u003eBool)-\u003eTU b c",
          "package": "StrategyLib",
          "partial": "Atick TU",
          "signature": "(t-\u003eBool)-\u003eTU n m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtickTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attempt a strategy s, but recover if it fails.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtryS",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Attempt strategy but recover if it fails",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtryS",
          "normalized": "a b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Atry",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtryS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attempt a type-preserving strategy s, but if it fails, return the\n   input term unchanged.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtryTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Attempt type-preserving strategy but if it fails return the input term unchanged",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtryTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Atry TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtryTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attempt a type-unifying strategy s, but if it fails, return the\n   \u003ctt\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/tt\u003e element of a \u003ctt\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtryTU",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e TU u m",
          "type": "function"
        },
        "index": {
          "description": "Attempt type-unifying strategy but if it fails return the mempty element of Monoid",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtryTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Atry TU",
          "signature": "TU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtryTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If type guard holds for the input term, return it as output term,\n   otherwise fail. \n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeFilterTP",
          "package": "StrategyLib",
          "signature": "TypeGuard t -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "If type guard holds for the input term return it as output term otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeFilterTP",
          "normalized": "TypeGuard a-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Atype Filter TP",
          "signature": "TypeGuard t-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtypeFilterTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If type guard holds for the input term, return it as output value,\n   otherwise fail. \n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeFilterTU",
          "package": "StrategyLib",
          "signature": "TypeGuard t -\u003e TU t m",
          "type": "function"
        },
        "index": {
          "description": "If type guard holds for the input term return it as output value otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeFilterTU",
          "normalized": "TypeGuard a-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Atype Filter TU",
          "signature": "TypeGuard t-\u003eTU t m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtypeFilterTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType guard (function). \n   Typical usage:\n\u003c/p\u003e\u003cpre\u003e \n   full_tdTU (typeTickTU (typeGuard::TypeGuard MyType))\n \u003c/pre\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeGuard",
          "package": "StrategyLib",
          "signature": "TypeGuard a",
          "type": "function"
        },
        "index": {
          "description": "Type guard function Typical usage full tdTU typeTickTU typeGuard TypeGuard MyType",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeGuard",
          "package": "StrategyLib",
          "partial": "Atype Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtypeGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If type guard holds for the input term, \n   return 1 otherwise return 0.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeTickTU",
          "package": "StrategyLib",
          "signature": "TypeGuard t -\u003e TU n m",
          "type": "function"
        },
        "index": {
          "description": "If type guard holds for the input term return otherwise return",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AtypeTickTU",
          "normalized": "TypeGuard a-\u003eTU b c",
          "package": "StrategyLib",
          "partial": "Atype Tick TU",
          "signature": "TypeGuard t-\u003eTU n m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AtypeTickTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Succeed if exactly one argument strategy succeeds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AxchoiceS",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Succeed if exactly one argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AxchoiceS",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Axchoice",
          "signature": "s m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AxchoiceS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Succeed if exactly one argument strategy succeeds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AxchoiceTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Succeed if exactly one argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AxchoiceTP",
          "normalized": "TP a-\u003eTP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Axchoice TP",
          "signature": "TP m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AxchoiceTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Succeed if exactly one argument strategy succeeds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AxchoiceTU",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e TU u m -\u003e TU u m",
          "type": "function"
        },
        "index": {
          "description": "Succeed if exactly one argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "3AxchoiceTU",
          "normalized": "TU a b-\u003eTU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Axchoice TU",
          "signature": "TU u m-\u003eTU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:3AxchoiceTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify focus\nInput term\nOutput term without focused entity\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AdeleteFocus",
          "package": "StrategyLib",
          "signature": "(f -\u003e Maybe f)-\u003e t-\u003e Maybe t",
          "type": "function"
        },
        "index": {
          "description": "Identify focus Input term Output term without focused entity",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AdeleteFocus",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Adelete Focus",
          "signature": "(f-\u003eMaybe f)-\u003et-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3AdeleteFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply the argument function to the unique subterm of the input term.\n   Fail if the input term has more subterms or if the subterm is not of\n   the appropriate type. This is a keyhole version of the traversal\n   combinator \u003ctt\u003e\u003ca\u003einjTP\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3Ainj",
          "package": "StrategyLib",
          "signature": "(c -\u003e m c) -\u003e x -\u003e m x",
          "type": "function"
        },
        "index": {
          "description": "Apply the argument function to the unique subterm of the input term Fail if the input term has more subterms or if the subterm is not of the appropriate type This is keyhole version of the traversal combinator injTP",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3Ainj",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "StrategyLib",
          "partial": "Ainj",
          "signature": "(c-\u003em c)-\u003ex-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3Ainj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Put all nodes of a certain type into a list.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3Alistify",
          "package": "StrategyLib",
          "signature": "x -\u003e [y]",
          "type": "function"
        },
        "index": {
          "description": "Put all nodes of certain type into list",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3Alistify",
          "normalized": "a-\u003e[b]",
          "package": "StrategyLib",
          "partial": "Alistify",
          "signature": "x-\u003e[y]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3Alistify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test focus\nWrap host\nInput term\nOutput term\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AmarkHost",
          "package": "StrategyLib",
          "signature": "(f -\u003e Bool)-\u003e (h -\u003e h)-\u003e t-\u003e Maybe t",
          "type": "function"
        },
        "index": {
          "description": "Test focus Wrap host Input term Output term",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AmarkHost",
          "normalized": "(a-\u003eBool)-\u003e(b-\u003eb)-\u003ec-\u003eMaybe c",
          "package": "StrategyLib",
          "partial": "Amark Host",
          "signature": "(f-\u003eBool)-\u003e(h-\u003eh)-\u003et-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3AmarkHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Replace the identified focus.\n   Fails if no subterm can be replaced.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AreplaceFocus",
          "package": "StrategyLib",
          "signature": "(t -\u003e Maybe t) -\u003e t' -\u003e Maybe t'",
          "type": "function"
        },
        "index": {
          "description": "Replace the identified focus Fails if no subterm can be replaced",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AreplaceFocus",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Areplace Focus",
          "signature": "(t-\u003eMaybe t)-\u003et'-\u003eMaybe t'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3AreplaceFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify focus\nInput term\nFocused term\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AselectFocus",
          "package": "StrategyLib",
          "signature": "(f -\u003e Maybe f)-\u003e t-\u003e Maybe f",
          "type": "function"
        },
        "index": {
          "description": "Identify focus Input term Focused term",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AselectFocus",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMaybe a",
          "package": "StrategyLib",
          "partial": "Aselect Focus",
          "signature": "(f-\u003eMaybe f)-\u003et-\u003eMaybe f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3AselectFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get focus\nGet host\nInput term\nLocated host\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AselectHost",
          "package": "StrategyLib",
          "signature": "(f -\u003e Maybe f)-\u003e (h -\u003e Maybe h)-\u003e t-\u003e Maybe h",
          "type": "function"
        },
        "index": {
          "description": "Get focus Get host Input term Located host",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3AselectHost",
          "normalized": "(a-\u003eMaybe a)-\u003e(b-\u003eMaybe b)-\u003ec-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Aselect Host",
          "signature": "(f-\u003eMaybe f)-\u003e(h-\u003eMaybe h)-\u003et-\u003eMaybe h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3AselectHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Put all nodes of type \u003ctt\u003e\u003ca\u003eString\u003c/a\u003e\u003c/tt\u003e into a list. This is a type-specialization\n   of \u003ctt\u003e\u003ca\u003elistify\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3Astrings",
          "package": "StrategyLib",
          "signature": "x -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Put all nodes of type String into list This is type-specialization of listify",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "3Astrings",
          "normalized": "a-\u003e[String]",
          "package": "StrategyLib",
          "partial": "Astrings",
          "signature": "x-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:3Astrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The type of metric names\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AMetricName",
          "package": "StrategyLib",
          "type": "type"
        },
        "index": {
          "description": "The type of metric names",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AMetricName",
          "package": "StrategyLib",
          "partial": "AMetric Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#t:3AMetricName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AMetrics",
          "package": "StrategyLib",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AMetrics",
          "package": "StrategyLib",
          "partial": "AMetrics",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#t:3AMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Recognize relevant contructs\nCount nesting depth of relevant constructs.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AdepthWith",
          "package": "StrategyLib",
          "signature": "TU () m-\u003e TU Int m",
          "type": "function"
        },
        "index": {
          "description": "Recognize relevant contructs Count nesting depth of relevant constructs",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AdepthWith",
          "normalized": "TU()a-\u003eTU Int a",
          "package": "StrategyLib",
          "partial": "Adepth With",
          "signature": "TU()m-\u003eTU Int m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AdepthWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ctt\u003e\u003ca\u003eMetrics\u003c/a\u003e\u003c/tt\u003e with\ninitTypeMetrics \t:: MetricName -\u003e a -\u003e Metrics\ninitTypeMetrics key _   =  incMetrics1 key initMetrics0\n\u003c/p\u003e\u003cp\u003eIncrement metric with the given name with the given value.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AincMetrics",
          "package": "StrategyLib",
          "signature": "MetricName -\u003e Integer -\u003e Metrics -\u003e Metrics",
          "type": "function"
        },
        "index": {
          "description": "Create Metrics with initTypeMetrics MetricName Metrics initTypeMetrics key incMetrics1 key initMetrics0 Increment metric with the given name with the given value",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AincMetrics",
          "normalized": "MetricName-\u003eInteger-\u003eMetrics-\u003eMetrics",
          "package": "StrategyLib",
          "partial": "Ainc Metrics",
          "signature": "MetricName-\u003eInteger-\u003eMetrics-\u003eMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AincMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Increment metric with the given name by 1.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AincMetrics1",
          "package": "StrategyLib",
          "signature": "MetricName -\u003e Metrics -\u003e Metrics",
          "type": "function"
        },
        "index": {
          "description": "Increment metric with the given name by",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AincMetrics1",
          "normalized": "MetricName-\u003eMetrics-\u003eMetrics",
          "package": "StrategyLib",
          "partial": "Ainc Metrics",
          "signature": "MetricName-\u003eMetrics-\u003eMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AincMetrics1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create \u003ctt\u003e\u003ca\u003eMetrics\u003c/a\u003e\u003c/tt\u003e with given initial value for all metrics.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AinitMetrics",
          "package": "StrategyLib",
          "signature": "Integer -\u003e Metrics",
          "type": "function"
        },
        "index": {
          "description": "Create Metrics with given initial value for all metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AinitMetrics",
          "normalized": "Integer-\u003eMetrics",
          "package": "StrategyLib",
          "partial": "Ainit Metrics",
          "signature": "Integer-\u003eMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AinitMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create \u003ctt\u003e\u003ca\u003eMetrics\u003c/a\u003e\u003c/tt\u003e with 0 as initial value for all metrics.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AinitMetrics0",
          "package": "StrategyLib",
          "signature": "Metrics",
          "type": "function"
        },
        "index": {
          "description": "Create Metrics with as initial value for all metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AinitMetrics0",
          "package": "StrategyLib",
          "partial": "Ainit Metrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AinitMetrics0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Strategy that collects metrics\nName of the metric, and predicate\nStrategy that additionally collects predicate-based metric\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3ApredMetric",
          "package": "StrategyLib",
          "signature": "TU Metrics m-\u003e (MetricName, b -\u003e m ())-\u003e TU Metrics m",
          "type": "function"
        },
        "index": {
          "description": "Strategy that collects metrics Name of the metric and predicate Strategy that additionally collects predicate-based metric",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3ApredMetric",
          "normalized": "TU Metrics a-\u003e(MetricName,b-\u003ea())-\u003eTU Metrics a",
          "package": "StrategyLib",
          "partial": "Apred Metric",
          "signature": "TU Metrics m-\u003e(MetricName,b-\u003em())-\u003eTU Metrics m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3ApredMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Print value of metric with the given name.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AputMetricLn",
          "package": "StrategyLib",
          "signature": "MetricName -\u003e Metrics -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Print value of metric with the given name",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AputMetricLn",
          "normalized": "MetricName-\u003eMetrics-\u003eIO()",
          "package": "StrategyLib",
          "partial": "Aput Metric Ln",
          "signature": "MetricName-\u003eMetrics-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AputMetricLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Metric collecting strategy\nName of the metric and type guard\nStrategy that additionally collects type-based metrics\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AtypeMetric",
          "package": "StrategyLib",
          "signature": "TU Metrics m-\u003e (MetricName, a -\u003e ())-\u003e TU Metrics m",
          "type": "function"
        },
        "index": {
          "description": "Metric collecting strategy Name of the metric and type guard Strategy that additionally collects type-based metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "3AtypeMetric",
          "normalized": "TU Metrics a-\u003e(MetricName,b-\u003e())-\u003eTU Metrics a",
          "package": "StrategyLib",
          "partial": "Atype Metric",
          "signature": "TU Metrics m-\u003e(MetricName,a-\u003e())-\u003eTU Metrics m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:3AtypeMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type guard described by the argument type of a function.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Aargtype",
          "package": "StrategyLib",
          "signature": "(x -\u003e y) -\u003e x -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Type guard described by the argument type of function",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Aargtype",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec()",
          "package": "StrategyLib",
          "partial": "Aargtype",
          "signature": "(x-\u003ey)-\u003ex-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:3Aargtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A kind of monadic conditional.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3AifM",
          "package": "StrategyLib",
          "signature": "m a -\u003e (a -\u003e m c) -\u003e m c -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "kind of monadic conditional",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3AifM",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c-\u003ea c",
          "package": "StrategyLib",
          "partial": "Aif",
          "signature": "m a-\u003e(a-\u003em c)-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:3AifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Choice combinator for monadic functions\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Amchoice",
          "package": "StrategyLib",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Choice combinator for monadic functions",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Amchoice",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "StrategyLib",
          "partial": "Amchoice",
          "signature": "(a-\u003em b)-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:3Amchoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition with value passing; a kind of monadic let.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Amlet",
          "package": "StrategyLib",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e a -\u003e m c) -\u003e a -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition with value passing kind of monadic let",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Amlet",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ea-\u003eb d)-\u003ea-\u003eb d",
          "package": "StrategyLib",
          "partial": "Amlet",
          "signature": "(a-\u003em b)-\u003e(b-\u003ea-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:3Amlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition of monadic functions\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Amseq",
          "package": "StrategyLib",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition of monadic functions",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Amseq",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "StrategyLib",
          "partial": "Amseq",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:3Amseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type guard described by a type of a value.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Avaltype",
          "package": "StrategyLib",
          "signature": "x -\u003e x -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Type guard described by type of value",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "3Avaltype",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "StrategyLib",
          "partial": "Avaltype",
          "signature": "x-\u003ex-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:3Avaltype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Accumulate declarations for focus \n",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "3AboundTypedNames",
          "package": "StrategyLib",
          "signature": "TU [(name, tpe)] Identity -\u003e (f -\u003e Maybe f) -\u003e t -\u003e Maybe ([(name, tpe)], f)",
          "type": "function"
        },
        "index": {
          "description": "Accumulate declarations for focus",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "3AboundTypedNames",
          "normalized": "TU[(a,b)]Identity-\u003e(c-\u003eMaybe c)-\u003ed-\u003eMaybe([(a,b)],c)",
          "package": "StrategyLib",
          "partial": "Abound Typed Names",
          "signature": "TU[(name,tpe)]Identity-\u003e(f-\u003eMaybe f)-\u003et-\u003eMaybe([(name,tpe)],f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#v:3AboundTypedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify declarations\nIdentify references\nInput term\nFree names\n",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "3AfreeNames",
          "package": "StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e t-\u003e [name]",
          "type": "function"
        },
        "index": {
          "description": "Identify declarations Identify references Input term Free names",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "3AfreeNames",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003ec-\u003e[a]",
          "package": "StrategyLib",
          "partial": "Afree Names",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003et-\u003e[name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#v:3AfreeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify declarations\nIdentify references\nDerived declarations\nInput term\nFree names with types\n",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "3AfreeTypedNames",
          "package": "StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e [(name, tpe)]-\u003e t-\u003e [(name, tpe)]",
          "type": "function"
        },
        "index": {
          "description": "Identify declarations Identify references Derived declarations Input term Free names with types",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "3AfreeTypedNames",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e[(a,b)]-\u003ec-\u003e[(a,b)]",
          "package": "StrategyLib",
          "partial": "Afree Typed Names",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e[(name,tpe)]-\u003et-\u003e[(name,tpe)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#v:3AfreeTypedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategy",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategy",
          "package": "StrategyLib",
          "partial": "AStrategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyApply",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyApply",
          "package": "StrategyLib",
          "partial": "AStrategy Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AStrategyApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyMSubst",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyMSubst",
          "package": "StrategyLib",
          "partial": "AStrategy MSubst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AStrategyMSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyMonoid",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyMonoid",
          "package": "StrategyLib",
          "partial": "AStrategy Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AStrategyMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyPlus",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AStrategyPlus",
          "package": "StrategyLib",
          "partial": "AStrategy Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AStrategyPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic type case\n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AadhocS",
          "package": "StrategyLib",
          "signature": "s m -\u003e (t -\u003e m x) -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Dynamic type case",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AadhocS",
          "normalized": "a b-\u003e(c-\u003eb d)-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aadhoc",
          "signature": "s m-\u003e(t-\u003em x)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AadhocS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Push down to all children             \n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AallS",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Push down to all children",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AallS",
          "normalized": "a b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aall",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AallS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Strategy application\n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AapplyS",
          "package": "StrategyLib",
          "signature": "s m -\u003e t -\u003e m x",
          "type": "function"
        },
        "index": {
          "description": "Strategy application",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AapplyS",
          "normalized": "a b-\u003ec-\u003eb d",
          "package": "StrategyLib",
          "partial": "Aapply",
          "signature": "s m-\u003et-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AapplyS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Choice             \n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AchoiceS",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Choice",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AchoiceS",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Achoice",
          "signature": "s m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AchoiceS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Combine sequentially        \n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AcombS",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Combine sequentially",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AcombS",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Acomb",
          "signature": "s m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AcombS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Failure\n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AfailS",
          "package": "StrategyLib",
          "signature": "s m",
          "type": "function"
        },
        "index": {
          "description": "Failure",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AfailS",
          "package": "StrategyLib",
          "partial": "Afail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AfailS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Overloaded lifting with failure \n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AmonoS",
          "package": "StrategyLib",
          "signature": "(t -\u003e m x) -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Overloaded lifting with failure",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AmonoS",
          "normalized": "(a-\u003eb c)-\u003ed b",
          "package": "StrategyLib",
          "partial": "Amono",
          "signature": "(t-\u003em x)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AmonoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Substitute one monad for another\n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AmsubstS",
          "package": "StrategyLib",
          "signature": "(forall t . m t -\u003e m' t) -\u003e s m -\u003e s m'",
          "type": "function"
        },
        "index": {
          "description": "Substitute one monad for another",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AmsubstS",
          "normalized": "(a b c b-\u003ed b)-\u003ee c-\u003ee d",
          "package": "StrategyLib",
          "partial": "Amsubst",
          "signature": "(forall t m t-\u003em' t)-\u003es m-\u003es m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AmsubstS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Push down to a single child\n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AoneS",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Push down to single child",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AoneS",
          "normalized": "a b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aone",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AoneS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition with value passing        \n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3ApassS",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e s m) -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition with value passing",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3ApassS",
          "normalized": "TU a b-\u003e(a-\u003ec b)-\u003ec b",
          "package": "StrategyLib",
          "partial": "Apass",
          "signature": "TU a m-\u003e(a-\u003es m)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3ApassS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition          \n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AseqS",
          "package": "StrategyLib",
          "signature": "TP m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AseqS",
          "normalized": "TP a-\u003eb a-\u003eb a",
          "package": "StrategyLib",
          "partial": "Aseq",
          "signature": "TP m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AseqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identity (success)\n",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AskipS",
          "package": "StrategyLib",
          "signature": "s m",
          "type": "function"
        },
        "index": {
          "description": "Identity success",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AskipS",
          "package": "StrategyLib",
          "partial": "Askip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AskipS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AvoidS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TU () m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "3AvoidS",
          "normalized": "a b-\u003eTU()b",
          "package": "StrategyLib",
          "partial": "Avoid",
          "signature": "s m-\u003eTU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:3AvoidS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Select or transform a node above a node where a condition holds. The\n   distance between guard and application node is minimized.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node above node where condition holds The distance between guard and application node is minimized",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aabove",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AaboveS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply a transformation strictly above a node where a condition holds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation strictly above node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aabove TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AaboveTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Select or transform a node above or at a node where a condition holds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveeqS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node above or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveeqS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aaboveeq",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AaboveeqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply a transformation above or at a node where a condition holds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveeqTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation above or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AaboveeqTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aaboveeq TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AaboveeqTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Select or transform a node below a node where a condition holds.\n We find the top-most node which admits selection or transformation\n below the top-most node which meets the condition. Thus, the\n distance between guard and application node is minimized.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbelowS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node below node where condition holds We find the top-most node which admits selection or transformation below the top-most node which meets the condition Thus the distance between guard and application node is minimized",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbelowS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Abelow",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AbelowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply a transformation strictly below a node where a condition holds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbelowTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation strictly below node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbelowTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Abelow TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AbelowTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Select or transform a node below or at a node where a condition holds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbeloweqS",
          "package": "StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node below or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbeloweqS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Abeloweq",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AbeloweqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply a transformation below or at a node where a condition holds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbeloweqTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation below or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "3AbeloweqTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Abeloweq TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:3AbeloweqTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AAbstraction",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AAbstraction",
          "package": "StrategyLib",
          "partial": "AAbstraction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AAbstraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AconstrAbstr",
          "package": "StrategyLib",
          "signature": "name -\u003e [(name, tpe)] -\u003e apply -\u003e Maybe abstr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AconstrAbstr",
          "normalized": "a-\u003e[(a,b)]-\u003ec-\u003eMaybe d",
          "package": "StrategyLib",
          "partial": "Aconstr Abstr",
          "signature": "name-\u003e[(name,tpe)]-\u003eapply-\u003eMaybe abstr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AconstrAbstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AconstrApply",
          "package": "StrategyLib",
          "signature": "name -\u003e [(name, tpe)] -\u003e Maybe apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AconstrApply",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe c",
          "package": "StrategyLib",
          "partial": "Aconstr Apply",
          "signature": "name-\u003e[(name,tpe)]-\u003eMaybe apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AconstrApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify declarations\nIdentify references\nUnwrap abstraction\nInput program\nOutput program\n",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3Aeliminate",
          "package": "StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e (abstr -\u003e Maybe abstr)-\u003e prog-\u003e Maybe prog",
          "type": "function"
        },
        "index": {
          "description": "Identify declarations Identify references Unwrap abstraction Input program Output program",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3Aeliminate",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e(c-\u003eMaybe c)-\u003ed-\u003eMaybe d",
          "package": "StrategyLib",
          "partial": "Aeliminate",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e(abstr-\u003eMaybe abstr)-\u003eprog-\u003eMaybe prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3Aeliminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify declarations\nIdentify references\nUnwrap focus\nWrap host\nUnwrap host\nCheck focus\nName for abstraction\nInput program\nOutput program\n",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3Aextract",
          "package": "StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e (apply -\u003e Maybe apply)-\u003e ([abstr] -\u003e [abstr])-\u003e ([abstr] -\u003e Maybe [abstr])-\u003e ([(name, tpe)] -\u003e apply -\u003e Bool)-\u003e name-\u003e prog-\u003e Maybe prog",
          "type": "function"
        },
        "index": {
          "description": "Identify declarations Identify references Unwrap focus Wrap host Unwrap host Check focus Name for abstraction Input program Output program",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3Aextract",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e(c-\u003eMaybe c)-\u003e([d]-\u003e[d])-\u003e([d]-\u003eMaybe[d])-\u003e([(a,b)]-\u003ec-\u003eBool)-\u003ea-\u003ee-\u003eMaybe e",
          "package": "StrategyLib",
          "partial": "Aextract",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e(apply-\u003eMaybe apply)-\u003e([abstr]-\u003e[abstr])-\u003e([abstr]-\u003eMaybe[abstr])-\u003e([(name,tpe)]-\u003eapply-\u003eBool)-\u003ename-\u003eprog-\u003eMaybe prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3Aextract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetAbstrBody",
          "package": "StrategyLib",
          "signature": "abstr -\u003e Maybe apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetAbstrBody",
          "normalized": "a-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Aget Abstr Body",
          "signature": "abstr-\u003eMaybe apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AgetAbstrBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetAbstrName",
          "package": "StrategyLib",
          "signature": "abstr -\u003e Maybe name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetAbstrName",
          "normalized": "a-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Aget Abstr Name",
          "signature": "abstr-\u003eMaybe name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AgetAbstrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetAbstrParas",
          "package": "StrategyLib",
          "signature": "abstr -\u003e Maybe [(name, tpe)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetAbstrParas",
          "normalized": "a-\u003eMaybe[(b,c)]",
          "package": "StrategyLib",
          "partial": "Aget Abstr Paras",
          "signature": "abstr-\u003eMaybe[(name,tpe)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AgetAbstrParas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetApplyName",
          "package": "StrategyLib",
          "signature": "apply -\u003e Maybe name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetApplyName",
          "normalized": "a-\u003eMaybe b",
          "package": "StrategyLib",
          "partial": "Aget Apply Name",
          "signature": "apply-\u003eMaybe name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AgetApplyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetApplyParas",
          "package": "StrategyLib",
          "signature": "apply -\u003e Maybe [(name, tpe)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3AgetApplyParas",
          "normalized": "a-\u003eMaybe[(b,c)]",
          "package": "StrategyLib",
          "partial": "Aget Apply Paras",
          "signature": "apply-\u003eMaybe[(name,tpe)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3AgetApplyParas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Identify declarations\nIdentify references\nUnwrap scope with abstractions\nAbstraction to be inserted\nInput program\nOutput program\n",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3Aintroduce",
          "package": "StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e ([abstr] -\u003e Maybe [abstr])-\u003e abstr-\u003e prog-\u003e Maybe prog",
          "type": "function"
        },
        "index": {
          "description": "Identify declarations Identify references Unwrap scope with abstractions Abstraction to be inserted Input program Output program",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "3Aintroduce",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e([c]-\u003eMaybe[c])-\u003ec-\u003ed-\u003eMaybe d",
          "package": "StrategyLib",
          "partial": "Aintroduce",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e([abstr]-\u003eMaybe[abstr])-\u003eabstr-\u003eprog-\u003eMaybe prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:3Aintroduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic type-case\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A-+",
          "package": "StrategyLib",
          "signature": "s m -\u003e (t -\u003e m x) -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Dynamic type-case",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A-+",
          "normalized": "a b-\u003e(c-\u003eb d)-\u003ea b",
          "package": "StrategyLib",
          "signature": "s m-\u003e(t-\u003em x)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:3A-+"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A\u003e\u003e\u003e",
          "package": "StrategyLib",
          "signature": "TP m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A\u003e\u003e\u003e",
          "normalized": "TP a-\u003eb a-\u003eb a",
          "package": "StrategyLib",
          "signature": "TP m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:3A\u003e\u003e\u003e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition, ignoring value from first strategy\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A\u003e\u003e\u003e-",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition ignoring value from first strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A\u003e\u003e\u003e-",
          "normalized": "TU a b-\u003ec b-\u003ec b",
          "package": "StrategyLib",
          "signature": "TU a m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:3A\u003e\u003e\u003e-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential composition with value passing\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A\u003e\u003e\u003e=",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e s m) -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition with value passing",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "3A\u003e\u003e\u003e=",
          "normalized": "TU a b-\u003e(a-\u003ec b)-\u003ec b",
          "package": "StrategyLib",
          "signature": "TU a m-\u003e(a-\u003es m)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:3A\u003e\u003e\u003e="
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test for compound term, i.e. having at least one subterm.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3Acom",
          "package": "StrategyLib",
          "signature": "TP m",
          "type": "function"
        },
        "index": {
          "description": "Test for compound term i.e having at least one subterm",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3Acom",
          "package": "StrategyLib",
          "partial": "Acom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3Acom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type-unifying monadic constant strategy. Always performs the argument\n   computation a, independent of the incoming term. This is a monadic\n   variation of \u003ctt\u003e\u003ca\u003econstTU\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AcompTU",
          "package": "StrategyLib",
          "signature": "m a -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Type-unifying monadic constant strategy Always performs the argument computation independent of the incoming term This is monadic variation of constTU",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AcompTU",
          "normalized": "a b-\u003eTU b a",
          "package": "StrategyLib",
          "partial": "Acomp TU",
          "signature": "m a-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AcompTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test for constant term, i.e. having no subterms.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3Acon",
          "package": "StrategyLib",
          "signature": "TP m",
          "type": "function"
        },
        "index": {
          "description": "Test for constant term i.e having no subterms",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3Acon",
          "package": "StrategyLib",
          "partial": "Acon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3Acon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type-unifying constant strategy. Always returns the argument value a,\n   independent of the incoming term.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AconstTU",
          "package": "StrategyLib",
          "signature": "a -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Type-unifying constant strategy Always returns the argument value independent of the incoming term",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AconstTU",
          "normalized": "a-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aconst TU",
          "signature": "a-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AconstTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequential ccomposition of monomorphic function and type-unifying strategy.\n   In other words, after the type-unifying strategy s has been applied, \n   the monomorphic function f is applied to the resulting value.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AdotTU",
          "package": "StrategyLib",
          "signature": "(a -\u003e b) -\u003e TU a m -\u003e TU b m",
          "type": "function"
        },
        "index": {
          "description": "Sequential ccomposition of monomorphic function and type-unifying strategy In other words after the type-unifying strategy has been applied the monomorphic function is applied to the resulting value",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AdotTU",
          "normalized": "(a-\u003eb)-\u003eTU a c-\u003eTU b c",
          "package": "StrategyLib",
          "partial": "Adot TU",
          "signature": "(a-\u003eb)-\u003eTU a m-\u003eTU b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AdotTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type-preserving failure. Always fails, independent of the incoming\n   term. Uses \u003ctt\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/tt\u003e to model partiality.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AfailTP",
          "package": "StrategyLib",
          "signature": "TP m",
          "type": "function"
        },
        "index": {
          "description": "Type-preserving failure Always fails independent of the incoming term Uses MonadPlus to model partiality",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AfailTP",
          "package": "StrategyLib",
          "partial": "Afail TP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AfailTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type-unifying failure. Always fails, independent of the incoming\n   term. Uses \u003ctt\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/tt\u003e to model partiality.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AfailTU",
          "package": "StrategyLib",
          "signature": "TU a m",
          "type": "function"
        },
        "index": {
          "description": "Type-unifying failure Always fails independent of the incoming term Uses MonadPlus to model partiality",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AfailTU",
          "package": "StrategyLib",
          "partial": "Afail TU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AfailTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type-preserving identity. Returns the incoming term without change.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AidTP",
          "package": "StrategyLib",
          "signature": "TP m",
          "type": "function"
        },
        "index": {
          "description": "Type-preserving identity Returns the incoming term without change",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AidTP",
          "package": "StrategyLib",
          "partial": "Aid TP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AidTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply the monomorphic, type-preserving argument function, if its \n   input type matches the input term's type. Otherwise, fail.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AmonoTP",
          "package": "StrategyLib",
          "signature": "(a -\u003e m a) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Apply the monomorphic type-preserving argument function if its input type matches the input term type Otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AmonoTP",
          "normalized": "(a-\u003eb a)-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Amono TP",
          "signature": "(a-\u003em a)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AmonoTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply the monomorphic, type-unifying argument function, if its \n   input type matches the input term's type. Otherwise, fail.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AmonoTU",
          "package": "StrategyLib",
          "signature": "(a -\u003e m b) -\u003e TU b m",
          "type": "function"
        },
        "index": {
          "description": "Apply the monomorphic type-unifying argument function if its input type matches the input term type Otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AmonoTU",
          "normalized": "(a-\u003eb c)-\u003eTU c b",
          "package": "StrategyLib",
          "partial": "Amono TU",
          "signature": "(a-\u003em b)-\u003eTU b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AmonoTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parallel combination of two type-unifying strategies with a binary\n   combinator. In other words, the values resulting from applying the\n   type-unifying strategies are combined to a final value by applying\n   the combinator o.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3Aop2TU",
          "package": "StrategyLib",
          "signature": "(a -\u003e b -\u003e c) -\u003e TU a m -\u003e TU b m -\u003e TU c m",
          "type": "function"
        },
        "index": {
          "description": "Parallel combination of two type-unifying strategies with binary combinator In other words the values resulting from applying the type-unifying strategies are combined to final value by applying the combinator",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3Aop2TU",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTU a d-\u003eTU b d-\u003eTU c d",
          "package": "StrategyLib",
          "partial": "Aop TU",
          "signature": "(a-\u003eb-\u003ec)-\u003eTU a m-\u003eTU b m-\u003eTU c m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3Aop2TU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Reduce a type-preserving strategy to a type-unifying one that\n   ignores its result term and returns void, but retains its \n   monadic effects.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AvoidTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TU () m",
          "type": "function"
        },
        "index": {
          "description": "Reduce type-preserving strategy to type-unifying one that ignores its result term and returns void but retains its monadic effects",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AvoidTP",
          "normalized": "TP a-\u003eTU()a",
          "package": "StrategyLib",
          "partial": "Avoid TP",
          "signature": "TP m-\u003eTU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AvoidTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Reduce a type-unifying strategy to a type-unifying one that\n   ignores its result value and returns void, but retains its \n   monadic effects.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AvoidTU",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e TU () m",
          "type": "function"
        },
        "index": {
          "description": "Reduce type-unifying strategy to type-unifying one that ignores its result value and returns void but retains its monadic effects",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "3AvoidTU",
          "normalized": "TU a b-\u003eTU()b",
          "package": "StrategyLib",
          "partial": "Avoid TU",
          "signature": "TU u m-\u003eTU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:3AvoidTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ATP",
          "package": "StrategyLib",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ATP",
          "package": "StrategyLib",
          "partial": "ATP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#t:3ATP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ATU",
          "package": "StrategyLib",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ATU",
          "package": "StrategyLib",
          "partial": "ATU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#t:3ATU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ATerm",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ATerm",
          "package": "StrategyLib",
          "partial": "ATerm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3ATerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AadhocTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e (t -\u003e m t) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AadhocTP",
          "normalized": "TP a-\u003e(b-\u003ea b)-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aadhoc TP",
          "signature": "TP m-\u003e(t-\u003em t)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AadhocTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AadhocTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e (t -\u003e m a) -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AadhocTU",
          "normalized": "TU a b-\u003e(c-\u003eb a)-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aadhoc TU",
          "signature": "TU a m-\u003e(t-\u003em a)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AadhocTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AallTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AallTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aall TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AallTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AallTU",
          "package": "StrategyLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AallTU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aall TU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AallTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AallTU'",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AallTU'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aall TU'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AallTU'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AanyTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AanyTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aany TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AanyTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AanyTU",
          "package": "StrategyLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AanyTU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aany TU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AanyTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AanyTU'",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AanyTU'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aany TU'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AanyTU'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AapplyTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e x -\u003e m x",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AapplyTP",
          "normalized": "TP a-\u003eb-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aapply TP",
          "signature": "TP m-\u003ex-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AapplyTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AapplyTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e x -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AapplyTU",
          "normalized": "TU a b-\u003ec-\u003eb a",
          "package": "StrategyLib",
          "partial": "Aapply TU",
          "signature": "TU a m-\u003ex-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AapplyTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AchoiceTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AchoiceTP",
          "normalized": "TP a-\u003eTP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Achoice TP",
          "signature": "TP m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AchoiceTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AchoiceTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AchoiceTU",
          "normalized": "TU a b-\u003eTU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Achoice TU",
          "signature": "TU a m-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AchoiceTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AinjTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AinjTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Ainj TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AinjTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AmsubstTP",
          "package": "StrategyLib",
          "signature": "(forall t . m t -\u003e m' t) -\u003e TP m -\u003e TP m'",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AmsubstTP",
          "normalized": "(a b c b-\u003ed b)-\u003eTP c-\u003eTP d",
          "package": "StrategyLib",
          "partial": "Amsubst TP",
          "signature": "(forall t m t-\u003em' t)-\u003eTP m-\u003eTP m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AmsubstTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AmsubstTU",
          "package": "StrategyLib",
          "signature": "(m a -\u003e m' a) -\u003e TU a m -\u003e TU a m'",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AmsubstTU",
          "normalized": "(a b-\u003ec b)-\u003eTU b a-\u003eTU b c",
          "package": "StrategyLib",
          "partial": "Amsubst TU",
          "signature": "(m a-\u003em' a)-\u003eTU a m-\u003eTU a m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AmsubstTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AoneTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AoneTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aone TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AoneTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AoneTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AoneTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aone TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AoneTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AparaTP",
          "package": "StrategyLib",
          "signature": "(forall t . t -\u003e m t) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AparaTP",
          "normalized": "(a b b-\u003ec b)-\u003eTP c",
          "package": "StrategyLib",
          "partial": "Apara TP",
          "signature": "(forall t t-\u003em t)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AparaTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AparaTU",
          "package": "StrategyLib",
          "signature": "(forall t . t -\u003e m a) -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AparaTU",
          "normalized": "(a b b-\u003ec d)-\u003eTU d c",
          "package": "StrategyLib",
          "partial": "Apara TU",
          "signature": "(forall t t-\u003em a)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AparaTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ApassTP",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e TP m) -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ApassTP",
          "normalized": "TU a b-\u003e(a-\u003eTP b)-\u003eTP b",
          "package": "StrategyLib",
          "partial": "Apass TP",
          "signature": "TU a m-\u003e(a-\u003eTP m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3ApassTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ApassTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e TU b m) -\u003e TU b m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3ApassTU",
          "normalized": "TU a b-\u003e(a-\u003eTU c b)-\u003eTU c b",
          "package": "StrategyLib",
          "partial": "Apass TU",
          "signature": "TU a m-\u003e(a-\u003eTU b m)-\u003eTU b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3ApassTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AseqTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AseqTP",
          "normalized": "TP a-\u003eTP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aseq TP",
          "signature": "TP m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AseqTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AseqTU",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AseqTU",
          "normalized": "TP a-\u003eTU b a-\u003eTU b a",
          "package": "StrategyLib",
          "partial": "Aseq TU",
          "signature": "TP m-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AseqTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AsomeTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AsomeTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Asome TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AsomeTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AsomeTU",
          "package": "StrategyLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AsomeTU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Asome TU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AsomeTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AsomeTU'",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrimitives",
          "name": "3AsomeTU'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Asome TU'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrimitives.html#v:3AsomeTU'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.TermRep",
          "name": "3ATerm",
          "package": "StrategyLib",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib TermRep",
          "module": "Data.Generics.Strafunski.StrategyLib.TermRep",
          "name": "3ATerm",
          "package": "StrategyLib",
          "partial": "ATerm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TermRep.html#v:3ATerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "binary strategy combinator\nargument strategy\nresult strategy\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aall_recTU",
          "package": "StrategyLib",
          "signature": "(t -\u003e TU a m -\u003e TU a m)-\u003e t-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "binary strategy combinator argument strategy result strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aall_recTU",
          "normalized": "(a-\u003eTU b c-\u003eTU b c)-\u003ea-\u003eTU b c",
          "package": "StrategyLib",
          "partial": "Aall TU",
          "signature": "(t-\u003eTU a m-\u003eTU a m)-\u003et-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aall_recTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Use \u003ctt\u003e\u003ca\u003eanyTP\u003c/a\u003e\u003c/tt\u003e instead.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3AanyTP'",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Use anyTP instead",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3AanyTP'",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aany TP'",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3AanyTP'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type-specialised version of \u003ctt\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/tt\u003e, which works with lists instead of\n   any arbitrary monoid.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Acollect",
          "package": "StrategyLib",
          "signature": "TU [a] m -\u003e TU [a] m",
          "type": "function"
        },
        "index": {
          "description": "Type-specialised version of crush which works with lists instead of any arbitrary monoid",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Acollect",
          "normalized": "TU[a]b-\u003eTU[a]b",
          "package": "StrategyLib",
          "partial": "Acollect",
          "signature": "TU[a]m-\u003eTU[a]m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Acollect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "See \u003ctt\u003e\u003ca\u003efull_tdTU\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Acrush",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e TU u m",
          "type": "function"
        },
        "index": {
          "description": "See full tdTU",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Acrush",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Acrush",
          "signature": "TU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Acrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Full type-preserving traversal in bottom-up order.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_buTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Full type-preserving traversal in bottom-up order",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_buTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Afull TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Afull_buTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Full top-down traversal (overloaded between \u003ctt\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/tt\u003e).\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_td",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "Full top-down traversal overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_td",
          "normalized": "a b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Afull",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Afull_td"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Full type-preserving traversal in top-down order.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_tdTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Full type-preserving traversal in top-down order",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_tdTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Afull TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Afull_tdTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Full type-unifying traversal in top-down order.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_tdTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Full type-unifying traversal in top-down order",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Afull_tdTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Afull TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Afull_tdTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "One-hit bottom-up traversal (overloaded between \u003ctt\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/tt\u003e).\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_bu",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "One-hit bottom-up traversal overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_bu",
          "normalized": "a b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aonce",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_bu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Bottom-up type-preserving traversal that performs its argument\n   strategy at most once.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_buTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up type-preserving traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_buTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aonce TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_buTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Bottom-up type-unifying traversal that performs its argument\n   strategy at most once.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_buTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up type-unifying traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_buTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aonce TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_buTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "One-hit top-down traversal with environment propagation \n   (overloaded between \u003ctt\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/tt\u003e).\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_pe",
          "package": "StrategyLib",
          "signature": "(e -\u003e s m) -\u003e (e -\u003e TU e m) -\u003e e -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "One-hit top-down traversal with environment propagation overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_pe",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eTU a c)-\u003ea-\u003eb c",
          "package": "StrategyLib",
          "partial": "Aonce",
          "signature": "(e-\u003es m)-\u003e(e-\u003eTU e m)-\u003ee-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_pe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "initial environment\nenvironment modification at downward step\nextraction of value, dependent on environment\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_peTU",
          "package": "StrategyLib",
          "signature": "e-\u003e (e -\u003e TU e m)-\u003e (e -\u003e TU a m)-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "initial environment environment modification at downward step extraction of value dependent on environment",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_peTU",
          "normalized": "a-\u003e(a-\u003eTU a b)-\u003e(a-\u003eTU c b)-\u003eTU c b",
          "package": "StrategyLib",
          "partial": "Aonce TU",
          "signature": "e-\u003e(e-\u003eTU e m)-\u003e(e-\u003eTU a m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_peTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "One-hit top-down traversal (overloaded between \u003ctt\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/tt\u003e).\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_td",
          "package": "StrategyLib",
          "signature": "s m -\u003e s m",
          "type": "function"
        },
        "index": {
          "description": "One-hit top-down traversal overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_td",
          "normalized": "a b-\u003ea b",
          "package": "StrategyLib",
          "partial": "Aonce",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_td"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Top-down type-preserving traversal that performs its argument\n   strategy at most once.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_tdTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-preserving traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_tdTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Aonce TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_tdTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Top-down type-unifying traversal that performs its argument\n   strategy at most once.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_tdTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-unifying traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aonce_tdTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aonce TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aonce_tdTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "binary strategy combinator\nargument strategy\nresult strategy\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aone_recTU",
          "package": "StrategyLib",
          "signature": "(t -\u003e TU a m -\u003e TU a m)-\u003e t-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "binary strategy combinator argument strategy result strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aone_recTU",
          "normalized": "(a-\u003eTU b c-\u003eTU b c)-\u003ea-\u003eTU b c",
          "package": "StrategyLib",
          "partial": "Aone TU",
          "signature": "(t-\u003eTU a m-\u003eTU a m)-\u003et-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aone_recTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "See \u003ctt\u003e\u003ca\u003eonce_tdTU\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aselect",
          "package": "StrategyLib",
          "signature": "TU u m -\u003e TU u m",
          "type": "function"
        },
        "index": {
          "description": "See once tdTU",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aselect",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Aselect",
          "signature": "TU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aselect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "See \u003ctt\u003e\u003ca\u003eonce_peTU\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aselectenv",
          "package": "StrategyLib",
          "signature": "e -\u003e (e -\u003e TU e m) -\u003e (e -\u003e TU a m) -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "See once peTU",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Aselectenv",
          "normalized": "a-\u003e(a-\u003eTU a b)-\u003e(a-\u003eTU c b)-\u003eTU c b",
          "package": "StrategyLib",
          "partial": "Aselectenv",
          "signature": "e-\u003e(e-\u003eTU e m)-\u003e(e-\u003eTU a m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Aselectenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Use \u003ctt\u003e\u003ca\u003esomeTP\u003c/a\u003e\u003c/tt\u003e instead.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3AsomeTP'",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Use someTP instead",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3AsomeTP'",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Asome TP'",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3AsomeTP'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Top-down type-preserving traversal that is cut of below nodes\n   where the argument strategy succeeds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Astop_tdTP",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-preserving traversal that is cut of below nodes where the argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Astop_tdTP",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Astop TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Astop_tdTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Top-down type-unifying traversal that is cut of below nodes\n   where the argument strategy succeeds.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Astop_tdTU",
          "package": "StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-unifying traversal that is cut of below nodes where the argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Astop_tdTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "StrategyLib",
          "partial": "Astop TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Astop_tdTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "See \u003ctt\u003e\u003ca\u003efull_tdTP\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Atopdown",
          "package": "StrategyLib",
          "signature": "TP m -\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "See full tdTP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "3Atopdown",
          "normalized": "TP a-\u003eTP a",
          "package": "StrategyLib",
          "partial": "Atopdown",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:3Atopdown"
      }
    }
  ]
]