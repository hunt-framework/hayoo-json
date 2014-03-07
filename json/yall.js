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
        "word": "yall"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "Iso",
          "package": "yall",
          "source": "src/Data-Yall-Iso.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "Iso",
          "package": "yall",
          "partial": "Iso",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea partial Isomorphism\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": ":\u003c~\u003e",
          "package": "yall",
          "source": "src/Data-Yall-Iso.html#%3A%3C~%3E",
          "type": "type"
        },
        "index": {
          "description": "partial Isomorphism",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": ":\u003c~\u003e",
          "package": "yall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#t::-60--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epure Iso\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": ":\u003c-\u003e",
          "package": "yall",
          "source": "src/Data-Yall-Iso.html#%3A%3C-%3E",
          "type": "type"
        },
        "index": {
          "description": "pure Iso",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": ":\u003c-\u003e",
          "package": "yall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#t::-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Isomorphism or one-to-one mapping between types. These are very similar\n to a \u003ccode\u003eLens\u003c/code\u003e, but are not dependent on context, making them more flexible. The\n functions also alow a Monadic context, supporting partial isomorphisms, and \n other interesting functionality.\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": "Iso",
          "package": "yall",
          "source": "src/Data-Yall-Iso.html#Iso",
          "type": "data"
        },
        "index": {
          "description": "An Isomorphism or one-to-one mapping between types These are very similar to Lens but are not dependent on context making them more flexible The functions also alow Monadic context supporting partial isomorphisms and other interesting functionality",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "Iso",
          "package": "yall",
          "partial": "Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for a more \u003ccode\u003e(-\u003e)\u003c/code\u003e-like Functor instances\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": "IsoPure",
          "package": "yall",
          "source": "src/Data-Yall-Iso.html#IsoPure",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for more like Functor instances",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "IsoPure",
          "package": "yall",
          "partial": "Iso Pure",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#t:IsoPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply the forward function\n\u003c/p\u003e\u003cpre\u003e i $- a = runIdentity $ apply i a\n\u003c/pre\u003e",
          "module": "Data.Yall.Iso",
          "name": "($-)",
          "package": "yall",
          "signature": "(a :\u003c-\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Yall-Iso.html#%24-",
          "type": "function"
        },
        "index": {
          "description": "apply the forward function runIdentity apply",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "($-) $-",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:-36--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply the backward function\n\u003c/p\u003e\u003cpre\u003e i -$ b = runIdentity $ unapply i b\n\u003c/pre\u003e",
          "module": "Data.Yall.Iso",
          "name": "(-$)",
          "package": "yall",
          "signature": "(a :\u003c-\u003e b) -\u003e b -\u003e a",
          "source": "src/Data-Yall-Iso.html#-%24",
          "type": "function"
        },
        "index": {
          "description": "apply the backward function runIdentity unapply",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "(-$) -$",
          "normalized": "(a-\u003eb)-\u003eb-\u003ea",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:-45--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "Iso",
          "package": "yall",
          "signature": "Iso",
          "source": "src/Data-Yall-Iso.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "Iso",
          "package": "yall",
          "partial": "Iso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "IsoPure",
          "package": "yall",
          "signature": "IsoPure",
          "source": "src/Data-Yall-Iso.html#IsoPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "IsoPure",
          "package": "yall",
          "partial": "Iso Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:IsoPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "apply",
          "package": "yall",
          "signature": "a -\u003e m b",
          "source": "src/Data-Yall-Iso.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "apply",
          "normalized": "a-\u003eb c",
          "package": "yall",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e on the empty list.\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": "consI",
          "package": "yall",
          "signature": "Iso w m (a, [a]) [a]",
          "source": "src/Data-Yall-Iso.html#consI",
          "type": "function"
        },
        "index": {
          "description": "Calls fail on the empty list",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "consI",
          "normalized": "Iso a b(c,[c])[c]",
          "package": "yall",
          "signature": "Iso w m(a,[a])[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:consI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "curryI",
          "package": "yall",
          "signature": "Iso w m ((a, b) -\u003e c) (a -\u003e b -\u003e c)",
          "source": "src/Data-Yall-Iso.html#curryI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "curryI",
          "normalized": "Iso a b((c,d)-\u003ee)(c-\u003ed-\u003ee)",
          "package": "yall",
          "signature": "Iso w m((a,b)-\u003ec)(a-\u003eb-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:curryI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "distributeI",
          "package": "yall",
          "signature": "Iso w m (a, Either b c) (Either (a, b) (a, c))",
          "source": "src/Data-Yall-Iso.html#distributeI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "distributeI",
          "normalized": "Iso a b(c,Either d e)(Either(c,d)(c,e))",
          "package": "yall",
          "signature": "Iso w m(a,Either b c)(Either(a,b)(a,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:distributeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "enumI",
          "package": "yall",
          "signature": "Iso w m Int a",
          "source": "src/Data-Yall-Iso.html#enumI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "enumI",
          "package": "yall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:enumI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "factorI",
          "package": "yall",
          "signature": "Iso w m (Either (a, b) (a, c)) (a, Either b c)",
          "source": "src/Data-Yall-Iso.html#factorI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "factorI",
          "normalized": "Iso a b(Either(c,d)(c,e))(c,Either d e)",
          "package": "yall",
          "signature": "Iso w m(Either(a,b)(a,c))(a,Either b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:factorI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap and make polymorphic an \u003ccode\u003e\u003ca\u003eIsoPure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": "fromPure",
          "package": "yall",
          "signature": "IsoPure a b -\u003e Iso w m a b",
          "source": "src/Data-Yall-Iso.html#fromPure",
          "type": "function"
        },
        "index": {
          "description": "Unwrap and make polymorphic an IsoPure",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "fromPure",
          "normalized": "IsoPure a b-\u003eIso c d a b",
          "package": "yall",
          "partial": "Pure",
          "signature": "IsoPure a b-\u003eIso w m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:fromPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more categorical \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, with wrapping / unwrapping for convenience. See\n also the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ifmap = fromPure . C.fmap . IsoPure\n\u003c/pre\u003e",
          "module": "Data.Yall.Iso",
          "name": "ifmap",
          "package": "yall",
          "signature": "Iso Identity Identity a b -\u003e Iso w m (f a) (f b)",
          "source": "src/Data-Yall-Iso.html#ifmap",
          "type": "function"
        },
        "index": {
          "description": "more categorical fmap with wrapping unwrapping for convenience See also the Functor instances for Iso ifmap fromPure C.fmap IsoPure",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "ifmap",
          "normalized": "Iso Identity Identity a b-\u003eIso c d(e a)(e b)",
          "package": "yall",
          "signature": "Iso Identity Identity a b-\u003eIso w m(f a)(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:ifmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "incrementByI",
          "package": "yall",
          "signature": "a -\u003e Iso w m a a",
          "source": "src/Data-Yall-Iso.html#incrementByI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "incrementByI",
          "normalized": "a-\u003eIso b c a a",
          "package": "yall",
          "partial": "By",
          "signature": "a-\u003eIso w m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:incrementByI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "incrementI",
          "package": "yall",
          "signature": "Iso w m a a",
          "source": "src/Data-Yall-Iso.html#incrementI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "incrementI",
          "package": "yall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:incrementI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "integerI",
          "package": "yall",
          "signature": "Iso w m a Integer",
          "source": "src/Data-Yall-Iso.html#integerI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "integerI",
          "package": "yall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:integerI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee also an Iso wrapped in \u003ccode\u003eDual\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yall.Iso",
          "name": "inverseI",
          "package": "yall",
          "signature": "Iso w m a b -\u003e Iso m w b a",
          "source": "src/Data-Yall-Iso.html#inverseI",
          "type": "function"
        },
        "index": {
          "description": "See also an Iso wrapped in Dual",
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "inverseI",
          "normalized": "Iso a b c d-\u003eIso b a d c",
          "package": "yall",
          "signature": "Iso w m a b-\u003eIso m w b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:inverseI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "iso",
          "package": "yall",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Iso w m a b",
          "source": "src/Data-Yall-Iso.html#iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "iso",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eIso c d a b",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eIso w m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "isoPure",
          "package": "yall",
          "signature": "Iso Identity Identity a b",
          "source": "src/Data-Yall-Iso.html#IsoPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "isoPure",
          "package": "yall",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:isoPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "linesI",
          "package": "yall",
          "signature": "Iso w m String [String]",
          "source": "src/Data-Yall-Iso.html#linesI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "linesI",
          "normalized": "Iso a b String[String]",
          "package": "yall",
          "signature": "Iso w m String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:linesI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "rationalI",
          "package": "yall",
          "signature": "Iso w m a Rational",
          "source": "src/Data-Yall-Iso.html#rationalI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "rationalI",
          "package": "yall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:rationalI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "showI",
          "package": "yall",
          "signature": "Iso w m s String",
          "source": "src/Data-Yall-Iso.html#showI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "showI",
          "package": "yall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:showI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "unapply",
          "package": "yall",
          "signature": "b -\u003e w a",
          "source": "src/Data-Yall-Iso.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "unapply",
          "normalized": "a-\u003eb c",
          "package": "yall",
          "signature": "b-\u003ew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:unapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "wordsI",
          "package": "yall",
          "signature": "Iso w m String [String]",
          "source": "src/Data-Yall-Iso.html#wordsI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "wordsI",
          "normalized": "Iso a b String[String]",
          "package": "yall",
          "signature": "Iso w m String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:wordsI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Iso",
          "name": "zipI",
          "package": "yall",
          "signature": "Iso w m ([a], [b]) [(a, b)]",
          "source": "src/Data-Yall-Iso.html#zipI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Iso",
          "module": "Data.Yall.Iso",
          "name": "zipI",
          "normalized": "Iso a b([c],[d])[(c,d)]",
          "package": "yall",
          "signature": "Iso w m([a],[b])[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Iso.html#v:zipI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "Lens",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "Lens",
          "package": "yall",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea lens that can fail in the Maybe monad on the outer type. Suitable for a\n normal lens on a multi-constructor type. The more general \u003ccode\u003e\u003ca\u003esetM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetM\u003c/a\u003e\u003c/code\u003e, etc.\n can be used with this type.\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": ":~\u003e",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "lens that can fail in the Maybe monad on the outer type Suitable for normal lens on multi-constructor type The more general setM getM etc can be used with this type",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": ":~\u003e",
          "package": "yall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea simple lens, suitable for single-constructor types\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": ":-\u003e",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "simple lens suitable for single-constructor types",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": ":-\u003e",
          "package": "yall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "Lens",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#Lens",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "Lens",
          "package": "yall",
          "partial": "Lens",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elenses in which \u003ccode\u003em\u003c/code\u003e == \u003ccode\u003ew\u003c/code\u003e and we would like to \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e the two in get/set\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "LensJoin",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#LensJoin",
          "type": "newtype"
        },
        "index": {
          "description": "lenses in which and we would like to join the two in get set",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LensJoin",
          "package": "yall",
          "partial": "Lens Join",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t:LensJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elenses in which set/get should \u003ccode\u003elift\u003c/code\u003e the inner monad \u003ccode\u003ew\u003c/code\u003e to \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "LensLift",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#LensLift",
          "type": "newtype"
        },
        "index": {
          "description": "lenses in which set get should lift the inner monad to",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LensLift",
          "package": "yall",
          "partial": "Lens Lift",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t:LensLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens in which the setter returns its result in the trivial \u003ccode\u003eIdentity\u003c/code\u003e\n monad. This is appropriate e.g. for traditional partial lenses on sum types,\n where there is a potential that the lens could fail only on the \u003cem\u003eouter\u003c/em\u003e\n constructor.\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "LensM",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#LensM",
          "type": "type"
        },
        "index": {
          "description": "lens in which the setter returns its result in the trivial Identity monad This is appropriate e.g for traditional partial lenses on sum types where there is potential that the lens could fail only on the outer constructor",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LensM",
          "package": "yall",
          "partial": "Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t:LensM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elenses in which only the setter \u003ccode\u003ew\u003c/code\u003e is monadic\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "LensW",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#LensW",
          "type": "newtype"
        },
        "index": {
          "description": "lenses in which only the setter is monadic",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LensW",
          "package": "yall",
          "partial": "Lens",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t:LensW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for our basic (monadic) lens operations. Minimal complete\n definition is \u003ccode\u003e\u003ca\u003egetM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "Lenses",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#Lenses",
          "type": "class"
        },
        "index": {
          "description": "class for our basic monadic lens operations Minimal complete definition is getM and setM",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "Lenses",
          "package": "yall",
          "partial": "Lenses",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#t:Lenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "(|||)",
          "package": "yall",
          "signature": "Lens w m a c -\u003e Lens w m b c -\u003e Lens w m (Either a b) c",
          "source": "src/Data-Yall-Lens.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "(|||) |||",
          "normalized": "Lens a b c d-\u003eLens a b e d-\u003eLens a b(Either c e)d",
          "package": "yall",
          "signature": "Lens w m a c-\u003eLens w m b c-\u003eLens w m(Either a b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (^$) = get\n\u003c/pre\u003e",
          "module": "Data.Yall.Lens",
          "name": "(^$)",
          "package": "yall",
          "signature": "Lens w Identity a b -\u003e a -\u003e b",
          "source": "src/Data-Yall-Lens.html#%5E%24",
          "type": "function"
        },
        "index": {
          "description": "get",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "(^$) ^$",
          "normalized": "Lens a Identity b c-\u003eb-\u003ec",
          "package": "yall",
          "signature": "Lens w Identity a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:-94--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e ma ^\u003e\u003e= l = ma \u003e\u003e= getM l\n\u003c/pre\u003e",
          "module": "Data.Yall.Lens",
          "name": "(^\u003e\u003e=)",
          "package": "yall",
          "signature": "m a -\u003e l m a b -\u003e m b",
          "source": "src/Data-Yall-Lens.html#%5E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "ma ma getM",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "(^\u003e\u003e=) ^\u003e\u003e=",
          "normalized": "a b-\u003ec a b d-\u003ea d",
          "package": "yall",
          "signature": "m a-\u003el m a b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:-94--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "LJoin",
          "package": "yall",
          "signature": "LJoin (Lens m m a b)",
          "source": "src/Data-Yall-Lens.html#LensJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LJoin",
          "package": "yall",
          "partial": "LJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:LJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "LLift",
          "package": "yall",
          "signature": "LLift (Lens w m a b)",
          "source": "src/Data-Yall-Lens.html#LensLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LLift",
          "package": "yall",
          "partial": "LLift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:LLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "LW",
          "package": "yall",
          "signature": "LW (Lens w Identity a b)",
          "source": "src/Data-Yall-Lens.html#LensW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "LW",
          "package": "yall",
          "partial": "LW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:LW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "Lens",
          "package": "yall",
          "signature": "Lens",
          "source": "src/Data-Yall-Lens.html#Lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "Lens",
          "package": "yall",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "distributeL",
          "package": "yall",
          "signature": "Lens w m (a, Either b c) (Either (a, b) (a, c))",
          "source": "src/Data-Yall-Lens.html#distributeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "distributeL",
          "normalized": "Lens a b(c,Either d e)(Either(c,d)(c,e))",
          "package": "yall",
          "signature": "Lens w m(a,Either b c)(Either(a,b)(a,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:distributeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecodiag from Cartesian\n\u003c/p\u003e\u003cpre\u003e eitherL = id ||| id\n\u003c/pre\u003e",
          "module": "Data.Yall.Lens",
          "name": "eitherL",
          "package": "yall",
          "signature": "Lens w m (Either a a) a",
          "source": "src/Data-Yall-Lens.html#eitherL",
          "type": "function"
        },
        "index": {
          "description": "codiag from Cartesian eitherL id id",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "eitherL",
          "package": "yall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:eitherL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "factorL",
          "package": "yall",
          "signature": "Lens w m (Either (a, b) (a, c)) (a, Either b c)",
          "source": "src/Data-Yall-Lens.html#factorL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "factorL",
          "normalized": "Lens a b(Either(c,d)(c,e))(c,Either d e)",
          "package": "yall",
          "signature": "Lens w m(Either(a,b)(a,c))(a,Either b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:factorL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "fstL",
          "package": "yall",
          "signature": "Lens w m (a, b) a",
          "source": "src/Data-Yall-Lens.html#fstL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "fstL",
          "normalized": "Lens a b(c,d)c",
          "package": "yall",
          "signature": "Lens w m(a,b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:fstL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the getter function of a pure lens\n\u003c/p\u003e\u003cpre\u003e get l = runIdentity . getM l\n\u003c/pre\u003e",
          "module": "Data.Yall.Lens",
          "name": "get",
          "package": "yall",
          "signature": "Lens w Identity a b -\u003e a -\u003e b",
          "source": "src/Data-Yall-Lens.html#get",
          "type": "function"
        },
        "index": {
          "description": "Run the getter function of pure lens get runIdentity getM",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "get",
          "normalized": "Lens a Identity b c-\u003eb-\u003ec",
          "package": "yall",
          "signature": "Lens w Identity a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "getM",
          "package": "yall",
          "signature": "l m a b -\u003e a -\u003e m b",
          "source": "src/Data-Yall-Lens.html#getM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "getM",
          "normalized": "a b c d-\u003ec-\u003eb d",
          "package": "yall",
          "signature": "l m a b-\u003ea-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:getM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an isomorphism \u003ccode\u003ei\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e. When \u003ccode\u003eapply i . unapply i =\n unapply i . apply i = id\u003c/code\u003e, the resulting lens will be well-behaved.\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "isoL",
          "package": "yall",
          "signature": "Iso m w a b -\u003e Lens m w a b",
          "source": "src/Data-Yall-Lens.html#isoL",
          "type": "function"
        },
        "index": {
          "description": "Convert an isomorphism to Lens When apply unapply unapply apply id the resulting lens will be well-behaved",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "isoL",
          "normalized": "Iso a b c d-\u003eLens a b c d",
          "package": "yall",
          "signature": "Iso m w a b-\u003eLens m w a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:isoL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pure Lens from a getter and setter\n\u003c/p\u003e\u003cpre\u003e lens g = lensM (fmap return g) . fmap (fmap return)\n\u003c/pre\u003e",
          "module": "[\"Data.Yall.Lens\",\"Data.Yall\"]",
          "name": "lens",
          "package": "yall",
          "signature": "(a -\u003e b) -\u003e (a -\u003e b -\u003e a) -\u003e a :-\u003e b",
          "source": "src/Data-Yall-Lens.html#lens",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:lens\",\"http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:lens\"]"
        },
        "index": {
          "description": "Create pure Lens from getter and setter lens lensM fmap return fmap fmap return",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eb",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a monadic lens from a getter and setter\n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "lensM",
          "package": "yall",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m (b -\u003e a)) -\u003e LensM m a b",
          "source": "src/Data-Yall-Lens.html#lensM",
          "type": "function"
        },
        "index": {
          "description": "Create monadic lens from getter and setter",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "lensM",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb(c-\u003ea))-\u003eLensM b a c",
          "package": "yall",
          "signature": "(a-\u003em b)-\u003e(a-\u003em(b-\u003ea))-\u003eLensM m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:lensM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a monadic Lens from a setter and getter.\n\u003c/p\u003e\u003cpre\u003e lensMW g s = Lens $ \\a-\u003e liftM2 (,) (s a) (g a)\n\u003c/pre\u003e",
          "module": "Data.Yall.Lens",
          "name": "lensMW",
          "package": "yall",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m (b -\u003e w a)) -\u003e Lens w m a b",
          "source": "src/Data-Yall-Lens.html#lensMW",
          "type": "function"
        },
        "index": {
          "description": "Create monadic Lens from setter and getter lensMW Lens liftM2",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "lensMW",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb(c-\u003ed a))-\u003eLens d b a c",
          "package": "yall",
          "partial": "MW",
          "signature": "(a-\u003em b)-\u003e(a-\u003em(b-\u003ew a))-\u003eLens w m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:lensMW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Yall.Lens\",\"Data.Yall\"]",
          "name": "modify",
          "package": "yall",
          "signature": "(a :-\u003e b) -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Yall-Lens.html#modify",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:modify\",\"http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:modify\"]"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "modify",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "modifyM",
          "package": "yall",
          "signature": "l m a b -\u003e (b -\u003e b) -\u003e a -\u003e m a",
          "source": "src/Data-Yall-Lens.html#modifyM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "modifyM",
          "normalized": "a b c d-\u003e(d-\u003ed)-\u003ec-\u003eb c",
          "package": "yall",
          "signature": "l m a b-\u003e(b-\u003eb)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:modifyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a Lens an isomorphism between a value \u003ccode\u003ea\u003c/code\u003e and a tuple of a\n value \u003ccode\u003eb\u003c/code\u003e with some \"residual\" value \u003ccode\u003er\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Yall.Lens",
          "name": "residualL",
          "package": "yall",
          "signature": "Iso m w a (b, r) -\u003e Lens m w a b",
          "source": "src/Data-Yall-Lens.html#residualL",
          "type": "function"
        },
        "index": {
          "description": "Convert to Lens an isomorphism between value and tuple of value with some residual value",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "residualL",
          "normalized": "Iso a b c(d,e)-\u003eLens a b c d",
          "package": "yall",
          "signature": "Iso m w a(b,r)-\u003eLens m w a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:residualL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "runLens",
          "package": "yall",
          "signature": "a -\u003e m (b -\u003e w a, b)",
          "source": "src/Data-Yall-Lens.html#Lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "runLens",
          "normalized": "a-\u003eb(c-\u003ed a,c)",
          "package": "yall",
          "partial": "Lens",
          "signature": "a-\u003em(b-\u003ew a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:runLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the getter function of a pure lens\n\u003c/p\u003e\u003cpre\u003e set l b = runIdentity . setM l a\n\u003c/pre\u003e",
          "module": "[\"Data.Yall.Lens\",\"Data.Yall\"]",
          "name": "set",
          "package": "yall",
          "signature": "(a :-\u003e b) -\u003e a -\u003e b -\u003e a",
          "source": "src/Data-Yall-Lens.html#set",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:set\",\"http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:set\"]"
        },
        "index": {
          "description": "Run the getter function of pure lens set runIdentity setM",
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "set",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb-\u003ea",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003ea-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "setM",
          "package": "yall",
          "signature": "l m a b -\u003e a -\u003e b -\u003e m a",
          "source": "src/Data-Yall-Lens.html#setM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "setM",
          "normalized": "a b c d-\u003ec-\u003ed-\u003eb c",
          "package": "yall",
          "signature": "l m a b-\u003ea-\u003eb-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:setM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall.Lens",
          "name": "sndL",
          "package": "yall",
          "signature": "Lens w m (a, b) b",
          "source": "src/Data-Yall-Lens.html#sndL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yall Lens",
          "module": "Data.Yall.Lens",
          "name": "sndL",
          "normalized": "Lens a b(c,d)d",
          "package": "yall",
          "signature": "Lens w m(a,b)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall-Lens.html#v:sndL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yall",
          "name": "Yall",
          "package": "yall",
          "source": "src/Data-Yall.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": "Yall",
          "package": "yall",
          "partial": "Yall",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea lens that can fail in the Maybe monad on the outer type. Suitable for a\n normal lens on a multi-constructor type. The more general \u003ccode\u003e\u003ca\u003esetM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetM\u003c/a\u003e\u003c/code\u003e, etc.\n can be used with this type.\n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": ":~\u003e",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "lens that can fail in the Maybe monad on the outer type Suitable for normal lens on multi-constructor type The more general setM getM etc can be used with this type",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": ":~\u003e",
          "package": "yall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea simple lens, suitable for single-constructor types\n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": ":-\u003e",
          "package": "yall",
          "source": "src/Data-Yall-Lens.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "simple lens suitable for single-constructor types",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": ":-\u003e",
          "package": "yall",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the getter function of a pure lens\n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": "get",
          "package": "yall",
          "signature": "(a :-\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Yall.html#get",
          "type": "function"
        },
        "index": {
          "description": "Run the getter function of pure lens",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": "get",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "yall",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to run the getter function on a value \n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": "getM",
          "package": "yall",
          "signature": "(a :~\u003e b) -\u003e a -\u003e Maybe b",
          "source": "src/Data-Yall.html#getM",
          "type": "function"
        },
        "index": {
          "description": "Try to run the getter function on value",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": "getM",
          "normalized": "(a b)-\u003ea-\u003eMaybe b",
          "package": "yall",
          "signature": "(a b)-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:getM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a partial lens from a getter and setter\n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": "lensM",
          "package": "yall",
          "signature": "(a -\u003e Maybe b) -\u003e (a -\u003e Maybe (b -\u003e a)) -\u003e a :~\u003e b",
          "source": "src/Data-Yall.html#lensM",
          "type": "function"
        },
        "index": {
          "description": "Create partial lens from getter and setter",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": "lensM",
          "normalized": "(a-\u003eMaybe b)-\u003e(a-\u003eMaybe(b-\u003ea))-\u003ea b",
          "package": "yall",
          "signature": "(a-\u003eMaybe b)-\u003e(a-\u003eMaybe(b-\u003ea))-\u003ea b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:lensM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to modify the inner type of a value\n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": "modifyM",
          "package": "yall",
          "signature": "(a :~\u003e b) -\u003e (b -\u003e b) -\u003e a -\u003e Maybe a",
          "source": "src/Data-Yall.html#modifyM",
          "type": "function"
        },
        "index": {
          "description": "try to modify the inner type of value",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": "modifyM",
          "normalized": "(a b)-\u003e(b-\u003eb)-\u003ea-\u003eMaybe a",
          "package": "yall",
          "signature": "(a b)-\u003e(b-\u003eb)-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:modifyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to run the setter function on an outer and new inner value\n\u003c/p\u003e",
          "module": "Data.Yall",
          "name": "setM",
          "package": "yall",
          "signature": "(a :~\u003e b) -\u003e a -\u003e b -\u003e Maybe a",
          "source": "src/Data-Yall.html#setM",
          "type": "function"
        },
        "index": {
          "description": "try to run the setter function on an outer and new inner value",
          "hierarchy": "Data Yall",
          "module": "Data.Yall",
          "name": "setM",
          "normalized": "(a b)-\u003ea-\u003eb-\u003eMaybe a",
          "package": "yall",
          "signature": "(a b)-\u003ea-\u003eb-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yall/docs/Data-Yall.html#v:setM"
      }
    }
  ]
]