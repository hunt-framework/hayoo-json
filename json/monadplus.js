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
        "word": "monadplus"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePartial maps and filters over \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eThis is considerably weaker than \u003ccode\u003eMonadPlus\u003c/code\u003e, as we have no possibility of removing\n intermediate structure, as in \u003ccode\u003emcatMaybes\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.Alternative",
          "name": "Alternative",
          "package": "monadplus",
          "source": "src/Control-Applicative-Alternative.html",
          "type": "module"
        },
        "index": {
          "description": "Partial maps and filters over Alternative instances This is considerably weaker than MonadPlus as we have no possibility of removing intermediate structure as in mcatMaybes",
          "hierarchy": "Control Applicative Alternative",
          "module": "Control.Applicative.Alternative",
          "name": "Alternative",
          "package": "monadplus",
          "partial": "Alternative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Applicative-Alternative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a value into an arbitrary \u003ccode\u003eMonadPlus\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003etoList\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Applicative.Alternative",
          "name": "afold",
          "package": "monadplus",
          "signature": "t a -\u003e f a",
          "source": "src/Control-Applicative-Alternative.html#afold",
          "type": "function"
        },
        "index": {
          "description": "Fold value into an arbitrary MonadPlus type This function generalizes the toList function",
          "hierarchy": "Control Applicative Alternative",
          "module": "Control.Applicative.Alternative",
          "name": "afold",
          "normalized": "a b-\u003ec b",
          "package": "monadplus",
          "signature": "t a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Applicative-Alternative.html#v:afold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generalizes the \u003ccode\u003elistToMaybe\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Applicative.Alternative",
          "name": "afromList",
          "package": "monadplus",
          "signature": "[a] -\u003e f a",
          "source": "src/Control-Applicative-Alternative.html#afromList",
          "type": "function"
        },
        "index": {
          "description": "This function generalizes the listToMaybe function",
          "hierarchy": "Control Applicative Alternative",
          "module": "Control.Applicative.Alternative",
          "name": "afromList",
          "normalized": "[a]-\u003eb a",
          "package": "monadplus",
          "partial": "List",
          "signature": "[a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Applicative-Alternative.html#v:afromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate maybe to an arbitrary \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003emaybeToList\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Applicative.Alternative",
          "name": "afromMaybe",
          "package": "monadplus",
          "signature": "Maybe a -\u003e f a",
          "source": "src/Control-Applicative-Alternative.html#afromMaybe",
          "type": "function"
        },
        "index": {
          "description": "Translate maybe to an arbitrary Alternative type This function generalizes the maybeToList function",
          "hierarchy": "Control Applicative Alternative",
          "module": "Control.Applicative.Alternative",
          "name": "afromMaybe",
          "normalized": "Maybe a-\u003eb a",
          "package": "monadplus",
          "partial": "Maybe",
          "signature": "Maybe a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Applicative-Alternative.html#v:afromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Applicative.Alternative",
          "name": "asum",
          "package": "monadplus",
          "signature": "t (f a) -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "The sum of collection of actions generalizing concat",
          "hierarchy": "Control Applicative Alternative",
          "module": "Control.Applicative.Alternative",
          "name": "asum",
          "normalized": "a(b c)-\u003eb c",
          "package": "monadplus",
          "signature": "t(f a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Applicative-Alternative.html#v:asum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePartial maps and filters over \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances. The basic idea here is that\n the monad interface together with the monoidal structure of \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e is enough\n to implement partial maps and filters (i.e. \u003ccode\u003e\u003ca\u003emmapMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emfilter\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is especially useful for sequential structures such as event lists, tracks etc.\n\u003c/p\u003e\u003cp\u003eInspired by the following blog post:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://conal.net/blog/posts/a-handy-generalized-filter\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.Monad.Plus",
          "name": "Plus",
          "package": "monadplus",
          "source": "src/Control-Monad-Plus.html",
          "type": "module"
        },
        "index": {
          "description": "Partial maps and filters over MonadPlus instances The basic idea here is that the monad interface together with the monoidal structure of MonadPlus is enough to implement partial maps and filters i.e mmapMaybe and mfilter This is especially useful for sequential structures such as event lists tracks etc Inspired by the following blog post http conal.net blog posts a-handy-generalized-filter",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "Plus",
          "package": "monadplus",
          "partial": "Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for partial functions with \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "Partial",
          "package": "monadplus",
          "source": "src/Control-Monad-Plus.html#Partial",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for partial functions with MonadPlus instance",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "Partial",
          "package": "monadplus",
          "partial": "Partial",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#t:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Plus",
          "name": "Partial",
          "package": "monadplus",
          "signature": "Partial",
          "source": "src/Control-Monad-Plus.html#Partial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "Partial",
          "package": "monadplus",
          "partial": "Partial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a total function to a partial function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "always",
          "package": "monadplus",
          "signature": "(a -\u003e b) -\u003e a -\u003e Maybe b",
          "source": "src/Control-Monad-Plus.html#always",
          "type": "function"
        },
        "index": {
          "description": "Convert total function to partial function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "always",
          "normalized": "(a-\u003eb)-\u003ea-\u003eMaybe b",
          "package": "monadplus",
          "signature": "(a-\u003eb)-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Plus",
          "name": "getPartial",
          "package": "monadplus",
          "signature": "a -\u003e Maybe b",
          "source": "src/Control-Monad-Plus.html#Partial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "getPartial",
          "normalized": "a-\u003eMaybe b",
          "package": "monadplus",
          "partial": "Partial",
          "signature": "a-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:getPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass through \u003ccode\u003eJust\u003c/code\u003e elements.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mcatMaybes",
          "package": "monadplus",
          "signature": "m (Maybe a) -\u003e m a",
          "source": "src/Control-Monad-Plus.html#mcatMaybes",
          "type": "function"
        },
        "index": {
          "description": "Pass through Just elements This function generalizes the catMaybes function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mcatMaybes",
          "normalized": "a(Maybe b)-\u003ea b",
          "package": "monadplus",
          "partial": "Maybes",
          "signature": "m(Maybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mcatMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify, discard or spawn values.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mconcatMap",
          "package": "monadplus",
          "signature": "(a -\u003e [b]) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mconcatMap",
          "type": "function"
        },
        "index": {
          "description": "Modify discard or spawn values This function generalizes the concatMap function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mconcatMap",
          "normalized": "(a-\u003e[b])-\u003ec a-\u003ec b",
          "package": "monadplus",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mconcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify, discard or spawn values.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mconcatMap'",
          "package": "monadplus",
          "signature": "(a -\u003e t b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mconcatMap%27",
          "type": "function"
        },
        "index": {
          "description": "Modify discard or spawn values This function generalizes the concatMap function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mconcatMap'",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003ed c",
          "package": "monadplus",
          "partial": "Map'",
          "signature": "(a-\u003et b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mconcatMap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a value into an arbitrary \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mfold",
          "package": "monadplus",
          "signature": "t a -\u003e m a",
          "source": "src/Control-Monad-Plus.html#mfold",
          "type": "function"
        },
        "index": {
          "description": "Fold value into an arbitrary MonadPlus type This function generalizes the toList function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mfold",
          "normalized": "a b-\u003ec b",
          "package": "monadplus",
          "signature": "t a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a list to an arbitrary \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mfromList",
          "package": "monadplus",
          "signature": "[a] -\u003e m a",
          "source": "src/Control-Monad-Plus.html#mfromList",
          "type": "function"
        },
        "index": {
          "description": "Translate list to an arbitrary MonadPlus type This function generalizes the listToMaybe function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mfromList",
          "normalized": "[a]-\u003eb a",
          "package": "monadplus",
          "partial": "List",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mfromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate maybe to an arbitrary \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mfromMaybe",
          "package": "monadplus",
          "signature": "Maybe a -\u003e m a",
          "source": "src/Control-Monad-Plus.html#mfromMaybe",
          "type": "function"
        },
        "index": {
          "description": "Translate maybe to an arbitrary MonadPlus type This function generalizes the maybeToList function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mfromMaybe",
          "normalized": "Maybe a-\u003eb a",
          "package": "monadplus",
          "partial": "Maybe",
          "signature": "Maybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mfromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass through \u003ccode\u003eLeft\u003c/code\u003e elements.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003elefts\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mlefts",
          "package": "monadplus",
          "signature": "m (Either a b) -\u003e m a",
          "source": "src/Control-Monad-Plus.html#mlefts",
          "type": "function"
        },
        "index": {
          "description": "Pass through Left elements This function generalizes the lefts function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mlefts",
          "normalized": "a(Either b c)-\u003ea b",
          "package": "monadplus",
          "signature": "m(Either a b)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mlefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify or discard a value.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mmapMaybe",
          "package": "monadplus",
          "signature": "(a -\u003e Maybe b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mmapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Modify or discard value This function generalizes the mapMaybe function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mmapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003ec a-\u003ec b",
          "package": "monadplus",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mmapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a list and returns\n the pair of lists of elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p xs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mpartition",
          "package": "monadplus",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e (m a, m a)",
          "source": "src/Control-Monad-Plus.html#mpartition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate list and returns the pair of lists of elements which do and do not satisfy the predicate respectively i.e partition xs filter xs filter not xs This function generalizes the partition function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mpartition",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003e(b a,b a)",
          "package": "monadplus",
          "signature": "(a-\u003eBool)-\u003em a-\u003e(m a,m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mpartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate \u003ccode\u003eLeft\u003c/code\u003e and \u003ccode\u003eRight\u003c/code\u003e elements.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003epartitionEithers\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mpartitionEithers",
          "package": "monadplus",
          "signature": "m (Either a b) -\u003e (m a, m b)",
          "source": "src/Control-Monad-Plus.html#mpartitionEithers",
          "type": "function"
        },
        "index": {
          "description": "Separate Left and Right elements This function generalizes the partitionEithers function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mpartitionEithers",
          "normalized": "a(Either b c)-\u003e(a b,a c)",
          "package": "monadplus",
          "partial": "Eithers",
          "signature": "m(Either a b)-\u003e(m a,m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mpartitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a partial function to a function returning an arbitrary\n \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mreturn",
          "package": "monadplus",
          "signature": "(a -\u003e Maybe b) -\u003e a -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mreturn",
          "type": "function"
        },
        "index": {
          "description": "Convert partial function to function returning an arbitrary MonadPlus type",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mreturn",
          "normalized": "(a-\u003eMaybe b)-\u003ea-\u003ec b",
          "package": "monadplus",
          "signature": "(a-\u003eMaybe b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mreturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass through \u003ccode\u003eRight\u003c/code\u003e elements.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003erights\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mrights",
          "package": "monadplus",
          "signature": "m (Either a b) -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mrights",
          "type": "function"
        },
        "index": {
          "description": "Pass through Right elements This function generalizes the rights function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mrights",
          "normalized": "a(Either b c)-\u003ea c",
          "package": "monadplus",
          "signature": "m(Either a b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mrights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin list elements together.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mscatter",
          "package": "monadplus",
          "signature": "m [b] -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mscatter",
          "type": "function"
        },
        "index": {
          "description": "Join list elements together This function generalizes the catMaybes function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mscatter",
          "normalized": "a[b]-\u003ea b",
          "package": "monadplus",
          "signature": "m[b]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mscatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin foldable elements together.\n\u003c/p\u003e\u003cp\u003eThis function generalizes the \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "mscatter'",
          "package": "monadplus",
          "signature": "m (t b) -\u003e m b",
          "source": "src/Control-Monad-Plus.html#mscatter%27",
          "type": "function"
        },
        "index": {
          "description": "Join foldable elements together This function generalizes the catMaybes function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "mscatter'",
          "normalized": "a(b c)-\u003ea c",
          "package": "monadplus",
          "signature": "m(t b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:mscatter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "msum",
          "package": "monadplus",
          "signature": "[m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "monadplus",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function. \n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "msum'",
          "package": "monadplus",
          "signature": "t (m a) -\u003e m a",
          "source": "src/Control-Monad-Plus.html#msum%27",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "msum'",
          "normalized": "a(b c)-\u003eb c",
          "package": "monadplus",
          "signature": "t(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:msum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a partial function that always rejects its input.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "never",
          "package": "monadplus",
          "signature": "a -\u003e Maybe c",
          "source": "src/Control-Monad-Plus.html#never",
          "type": "function"
        },
        "index": {
          "description": "Make partial function that always rejects its input",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "never",
          "normalized": "a-\u003eMaybe b",
          "package": "monadplus",
          "signature": "a-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a predicate to a partial function.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "partial",
          "package": "monadplus",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
          "source": "src/Control-Monad-Plus.html#partial",
          "type": "function"
        },
        "index": {
          "description": "Convert predicate to partial function",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "partial",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "package": "monadplus",
          "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a partial function to a predicate.\n\u003c/p\u003e",
          "module": "Control.Monad.Plus",
          "name": "predicate",
          "package": "monadplus",
          "signature": "(a -\u003e Maybe a) -\u003e a -\u003e Bool",
          "source": "src/Control-Monad-Plus.html#predicate",
          "type": "function"
        },
        "index": {
          "description": "Convert partial function to predicate",
          "hierarchy": "Control Monad Plus",
          "module": "Control.Monad.Plus",
          "name": "predicate",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003eBool",
          "package": "monadplus",
          "signature": "(a-\u003eMaybe a)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadplus/docs/Control-Monad-Plus.html#v:predicate"
      }
    }
  ]
]