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
        "word": "hx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell extra operators. Do not import qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskell.X.Ops",
          "name": "Ops",
          "package": "hx",
          "source": "src/Haskell-X-Ops.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell extra operators Do not import qualified",
          "hierarchy": "Haskell X Ops",
          "module": "Haskell.X.Ops",
          "name": "Ops",
          "package": "hx",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflip (.)\u003c/code\u003e, fixity is \u003ccode\u003einfixl 9\u003c/code\u003e (same as for \u003ccode\u003e.\u003c/code\u003e), from F#.\n\u003c/p\u003e",
          "module": "Haskell.X.Ops",
          "name": "(|\u003e)",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Haskell-X-Ops.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "flip fixity is infixl same as for from",
          "hierarchy": "Haskell X Ops",
          "module": "Haskell.X.Ops",
          "name": "(|\u003e) |\u003e",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflip ($)\u003c/code\u003e, fixity is \u003ccode\u003einfixl 1\u003c/code\u003e (like \u003ccode\u003e\u003e\u003e=\u003c/code\u003e but for non-monadic functions)\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Ops\",\"Haskell.X.Prelude\"]",
          "name": "(-\u003e\u003e)",
          "package": "hx",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Haskell-X-Ops.html#-%3E%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#v:-45--62--62-\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-45--62--62-\"]"
        },
        "index": {
          "description": "flip fixity is infixl like but for non-monadic functions",
          "hierarchy": "Haskell X Ops",
          "module": "Haskell.X.Ops",
          "name": "(-\u003e\u003e) -\u003e\u003e",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "hx",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#v:-45--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Ops\",\"Haskell.X.Prelude\"]",
          "name": "(\u003c$\u003e)",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#v:-60--36--62-\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--36--62-\"]"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Haskell X Ops",
          "module": "Haskell.X.Ops",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e-\u003e\u003e\u003c/code\u003e, but wraps its result so that it can be used in a monad.\n Fixity is \u003ccode\u003einfixl 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Ops",
          "name": "(=\u003e\u003e)",
          "package": "hx",
          "signature": "a -\u003e (a -\u003e b) -\u003e m b",
          "source": "src/Haskell-X-Ops.html#%3D%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Like but wraps its result so that it can be used in monad Fixity is infixl",
          "hierarchy": "Haskell X Ops",
          "module": "Haskell.X.Ops",
          "name": "(=\u003e\u003e) =\u003e\u003e",
          "normalized": "a-\u003e(a-\u003eb)-\u003ec b",
          "package": "hx",
          "signature": "a-\u003e(a-\u003eb)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Ops.html#v:-61--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Prelude",
          "package": "hx",
          "source": "src/Haskell-X-Prelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Prelude",
          "package": "hx",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under conjunction.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "All",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Boolean monoid under conjunction",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "All",
          "package": "hx",
          "partial": "All",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid on applicative functors.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf defined, \u003ccode\u003e\u003ca\u003esome\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e should be the least solutions\n of the equations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esome v = (:) \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e many v\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emany v = some v \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e []\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Alternative",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "monoid on applicative functors Minimal complete definition empty and If defined some and many should be the least solutions of the equations some many many some pure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Alternative",
          "package": "hx",
          "partial": "Alternative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Alternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under disjunction.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Any",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Boolean monoid under disjunction",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Any",
          "package": "hx",
          "partial": "Any",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Applicative",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Applicative",
          "package": "hx",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic arrow class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e, satisfying the laws\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e id = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e g) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e g) = \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e \u003e\u003e\u003e f\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** g) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** g) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eassoc\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eassoc\u003c/code\u003e \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e assoc ((a,b),c) = (a,(b,c))\n\u003c/pre\u003e\u003cp\u003eThe other combinators have sensible default definitions,\n which may be overridden for efficiency.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Arrow",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The basic arrow class Minimal complete definition arr and first satisfying the laws arr id id arr arr arr first arr arr first first first first first arr fst arr fst first arr id arr id first first first arr assoc arr assoc first where assoc The other combinators have sensible default definitions which may be overridden for efficiency",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Arrow",
          "package": "hx",
          "partial": "Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome arrows allow application of arrow inputs to other inputs.\n Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\x -\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\y -\u003e (x,y)))) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (g \u003e\u003e\u003e)) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e g \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003e\u003e\u003e h)) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eapp\u003c/a\u003e\u003c/code\u003e \u003e\u003e\u003e h\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSuch arrows are equivalent to monads (see \u003ccode\u003e\u003ca\u003eArrowMonad\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ArrowApply",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Some arrows allow application of arrow inputs to other inputs Instances should satisfy the following laws first arr arr app id first arr app second app first arr app app Such arrows are equivalent to monads see ArrowMonad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowApply",
          "package": "hx",
          "partial": "Arrow Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ArrowApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoice, for arrows that support it.  This class underlies the\n \u003ccode\u003eif\u003c/code\u003e and \u003ccode\u003ecase\u003c/code\u003e constructs in arrow notation.\n Minimal complete definition: \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e, satisfying the laws\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e g) = \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ef \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e +++ g) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e +++ g) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eassocsum\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eassocsum\u003c/code\u003e \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e assocsum (Left (Left x)) = Left x\n assocsum (Left (Right y)) = Right (Left y)\n assocsum (Right z) = Right (Right z)\n\u003c/pre\u003e\u003cp\u003eThe other combinators have sensible default definitions, which may\n be overridden for efficiency.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ArrowChoice",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Choice for arrows that support it This class underlies the if and case constructs in arrow notation Minimal complete definition left satisfying the laws left arr arr left left left left arr Left arr Left left left arr id arr id left left left arr assocsum arr assocsum left where assocsum Left Left Left assocsum Left Right Right Left assocsum Right Right Right The other combinators have sensible default definitions which may be overridden for efficiency",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowChoice",
          "package": "hx",
          "partial": "Arrow Choice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ArrowChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e operator expresses computations in which an output value\n is fed back as input, although the computation occurs only once.\n It underlies the \u003ccode\u003erec\u003c/code\u003e value recursion construct in arrow notation.\n \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eextension\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ b -\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e (\\ (c,d) -\u003e f (b,d))))\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eleft tightening\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e h \u003e\u003e\u003e f) = h \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eright tightening\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e h) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e h\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003esliding\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** k)) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** k) \u003e\u003e\u003e f)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003evanishing\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e unassoc \u003e\u003e\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e assoc)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003esuperposing\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e assoc \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e unassoc)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e assoc ((a,b),c) = (a,(b,c))\n unassoc (a,(b,c)) = ((a,b),c)\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ArrowLoop",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The loop operator expresses computations in which an output value is fed back as input although the computation occurs only once It underlies the rec value recursion construct in arrow notation loop should satisfy the following laws extension loop arr arr fst fix left tightening loop first loop right tightening loop first loop sliding loop arr id loop arr id vanishing loop loop loop arr unassoc arr assoc superposing second loop loop arr assoc second arr unassoc where assoc unassoc",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowLoop",
          "package": "hx",
          "partial": "Arrow Loop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ArrowLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowApply\u003c/a\u003e\u003c/code\u003e class is equivalent to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e: any monad gives rise\n   to a \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrow, and any instance of \u003ccode\u003e\u003ca\u003eArrowApply\u003c/a\u003e\u003c/code\u003e defines a monad.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ArrowMonad",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "The ArrowApply class is equivalent to Monad any monad gives rise to Kleisli arrow and any instance of ArrowApply defines monad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowMonad",
          "package": "hx",
          "partial": "Arrow Monad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ArrowMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid on arrows.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ArrowPlus",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "monoid on arrows",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowPlus",
          "package": "hx",
          "partial": "Arrow Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ArrowPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "ArrowZero",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowZero",
          "package": "hx",
          "partial": "Arrow Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ArrowZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "AtLeastPair",
          "package": "hx",
          "source": "src/Haskell-X-Prelude.html#AtLeastPair",
          "type": "class"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "AtLeastPair",
          "package": "hx",
          "partial": "At Least Pair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:AtLeastPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Bool",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Bool",
          "package": "hx",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class is used to name the upper and lower limits of a\n type.  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is not a superclass of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e since types that are not\n totally ordered may also have upper and lower bounds.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class may be derived for any enumeration type;\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e is the first constructor listed in the \u003ccode\u003edata\u003c/code\u003e declaration\n and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is the last.\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e may also be derived for single-constructor datatypes whose\n constituent types are in \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Bounded",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The Bounded class is used to name the upper and lower limits of type Ord is not superclass of Bounded since types that are not totally ordered may also have upper and lower bounds The Bounded class may be derived for any enumeration type minBound is the first constructor listed in the data declaration and maxBound is the last Bounded may also be derived for single-constructor datatypes whose constituent types are in Bounded",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Bounded",
          "package": "hx",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Char",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Char",
          "package": "hx",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Complex",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Complex",
          "package": "hx",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Const",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Const",
          "package": "hx",
          "partial": "Const",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Data",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Data",
          "package": "hx",
          "partial": "Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Double",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Double",
          "package": "hx",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of a monoid, obtained by swapping the arguments of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Dual",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "The dual of monoid obtained by swapping the arguments of mappend",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Dual",
          "package": "hx",
          "partial": "Dual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Either",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Either",
          "package": "hx",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monoid of endomorphisms under composition.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Endo",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "The monoid of endomorphisms under composition",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Endo",
          "package": "hx",
          "partial": "Endo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Enum",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Enum",
          "package": "hx",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Eq",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Eq",
          "package": "hx",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Exception",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Exception",
          "package": "hx",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe monoid returning the leftmost non-Nothing value.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "First",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Maybe monoid returning the leftmost non-Nothing value",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "First",
          "package": "hx",
          "partial": "First",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Float",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Float",
          "package": "hx",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigonometric and hyperbolic functions and related functions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e,\n      \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Floating",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Trigonometric and hyperbolic functions and related functions Minimal complete definition pi exp log sin cos sinh cosh asin acos atan asinh acosh and atanh",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Floating",
          "package": "hx",
          "partial": "Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structures that can be folded.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldMap f Empty = mempty\n    foldMap f (Leaf x) = f x\n    foldMap f (Node l k r) = foldMap f l `mappend` f k `mappend` foldMap f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the monoid is assumed\n to satisfy the monoid laws.  Alternatively, one could define \u003ccode\u003efoldr\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldr f z Empty = z\n    foldr f z (Leaf x) = f x z\n    foldr f z (Node l k r) = foldr f (f k (foldr f z r)) l\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Foldable",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Data structures that can be folded Minimal complete definition foldMap or foldr For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Foldable Tree where foldMap Empty mempty foldMap Leaf foldMap Node foldMap mappend mappend foldMap This is suitable even for abstract types as the monoid is assumed to satisfy the monoid laws Alternatively one could define foldr instance Foldable Tree where foldr Empty foldr Leaf foldr Node foldr foldr",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Foldable",
          "package": "hx",
          "partial": "Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Foldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional numbers, supporting real division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e and (\u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Fractional",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Fractional numbers supporting real division Minimal complete definition fromRational and recip or",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Fractional",
          "package": "hx",
          "partial": "Fractional",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Fractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Functor",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Functor",
          "package": "hx",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou need this when using \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Handler",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "You need this when using catches",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Handler",
          "package": "hx",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "IO",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "IO",
          "package": "hx",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions that occur in the \u003ccode\u003eIO\u003c/code\u003e monad.\n An \u003ccode\u003eIOException\u003c/code\u003e records a more specific error type, a descriptive\n string and maybe the handle that was used when the error was\n flagged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "IOException",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "Exceptions that occur in the IO monad An IOException records more specific error type descriptive string and maybe the handle that was used when the error was flagged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "IOException",
          "package": "hx",
          "partial": "IOException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:IOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Int",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Int",
          "package": "hx",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit signed integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Int16",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Int16",
          "package": "hx",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit signed integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Int32",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Int32",
          "package": "hx",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit signed integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Int64",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Int64",
          "package": "hx",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit signed integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Int8",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Int8",
          "package": "hx",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Integer",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary-precision integers",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Integer",
          "package": "hx",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Integral",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Integral numbers supporting integer division Minimal complete definition quotRem and toInteger",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Integral",
          "package": "hx",
          "partial": "Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for string-like datastructures; used by the overloaded string\n   extension (-foverloaded-strings in GHC).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "IsString",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Class for string-like datastructures used by the overloaded string extension foverloaded-strings in GHC",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "IsString",
          "package": "hx",
          "partial": "Is String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:IsString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKleisli arrows of a monad.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Kleisli",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Kleisli arrows of monad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Kleisli",
          "package": "hx",
          "partial": "Kleisli",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe monoid returning the rightmost non-Nothing value.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Last",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Maybe monoid returning the rightmost non-Nothing value",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Last",
          "package": "hx",
          "partial": "Last",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Maybe",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Maybe",
          "package": "hx",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Monad",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Monad",
          "package": "hx",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that also support choice and failure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "MonadPlus",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Monads that also support choice and failure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "MonadPlus",
          "package": "hx",
          "partial": "Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:MonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Monoid",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Monoid",
          "package": "hx",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Num",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Basic numeric class Minimal complete definition all except negate or",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Num",
          "package": "hx",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is used for totally ordered datatypes.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e can be derived for any user-defined\n datatype whose constituent types are in \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.  The declared order\n of the constructors in the data declaration determines the ordering\n in derived \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.  The \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e datatype allows a single\n comparison to determine the precise ordering of two objects.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e.\n Using \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e can be more efficient for complex types.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Ord",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The Ord class is used for totally ordered datatypes Instances of Ord can be derived for any user-defined datatype whose constituent types are in Ord The declared order of the constructors in the data declaration determines the ordering in derived Ord instances The Ordering datatype allows single comparison to determine the precise ordering of two objects Minimal complete definition either compare or Using compare can be more efficient for complex types",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Ord",
          "package": "hx",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Ordering",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Ordering",
          "package": "hx",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoid under multiplication.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Product",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Monoid under multiplication",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Product",
          "package": "hx",
          "partial": "Product",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRational numbers, with numerator and denominator of some \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Ratio",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "Rational numbers with numerator and denominator of some Integral type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Ratio",
          "package": "hx",
          "partial": "Ratio",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Rational",
          "package": "hx",
          "type": "type"
        },
        "index": {
          "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Rational",
          "package": "hx",
          "partial": "Rational",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Read",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Read",
          "package": "hx",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for a type \u003ccode\u003ea\u003c/code\u003e, represented as a function that takes a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and returns a list of possible parses as \u003ccode\u003e(a,\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eNote that this kind of backtracking parser is very inefficient;\n reading a large structure may be quite slow (cf \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ReadS",
          "package": "hx",
          "type": "type"
        },
        "index": {
          "description": "parser for type represented as function that takes String and returns list of possible parses as String pairs Note that this kind of backtracking parser is very inefficient reading large structure may be quite slow cf ReadP",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ReadS",
          "package": "hx",
          "partial": "Read",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Real",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Real",
          "package": "hx",
          "partial": "Real",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient, machine-independent access to the components of a\n floating-point number.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      all except \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "RealFloat",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Efficient machine-independent access to the components of floating-point number Minimal complete definition all except exponent significand scaleFloat and atan2",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "RealFloat",
          "package": "hx",
          "partial": "Real Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:RealFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting components of fractions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "RealFrac",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Extracting components of fractions Minimal complete definition properFraction",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "RealFrac",
          "package": "hx",
          "partial": "Real Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:RealFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Show",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Show",
          "package": "hx",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eshows\u003c/code\u003e functions return a function that prepends the\n output \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  This allows constant-time\n concatenation of results using function composition.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ShowS",
          "package": "hx",
          "type": "type"
        },
        "index": {
          "description": "The shows functions return function that prepends the output String to an existing String This allows constant-time concatenation of results using function composition",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ShowS",
          "package": "hx",
          "partial": "Show",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "SomeException",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "SomeException",
          "package": "hx",
          "partial": "Some Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoid under addition.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Sum",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Monoid under addition",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Sum",
          "package": "hx",
          "partial": "Sum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctors representing data structures that can be traversed from\n left to right.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances are similar to \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, e.g. given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Traversable Tree where\n    traverse f Empty = pure Empty\n    traverse f (Leaf x) = Leaf \u003c$\u003e f x\n    traverse f (Node l k r) = Node \u003c$\u003e traverse f l \u003c*\u003e f k \u003c*\u003e traverse f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the laws for \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n imply a form of associativity.\n\u003c/p\u003e\u003cp\u003eThe superclass instances should satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance, \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e should be equivalent to traversal\n    with the identity applicative functor (\u003ccode\u003e\u003ca\u003efmapDefault\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e In the \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e instance, \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e should be\n    equivalent to traversal with a constant applicative functor\n    (\u003ccode\u003e\u003ca\u003efoldMapDefault\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Traversable",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "Functors representing data structures that can be traversed from left to right Minimal complete definition traverse or sequenceA Instances are similar to Functor e.g given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Traversable Tree where traverse Empty pure Empty traverse Leaf Leaf traverse Node Node traverse traverse This is suitable even for abstract types as the laws for imply form of associativity The superclass instances should satisfy the following In the Functor instance fmap should be equivalent to traversal with the identity applicative functor fmapDefault In the Foldable instance foldMap should be equivalent to traversal with constant applicative functor foldMapDefault",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Traversable",
          "package": "hx",
          "partial": "Traversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Traversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Typeable",
          "package": "hx",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Typeable",
          "package": "hx",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Word16",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Word16",
          "package": "hx",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Word32",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Word32",
          "package": "hx",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Word64",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Word64",
          "package": "hx",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "Word8",
          "package": "hx",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Word8",
          "package": "hx",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "WrappedArrow",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "WrappedArrow",
          "package": "hx",
          "partial": "Wrapped Arrow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:WrappedArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "WrappedMonad",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "WrappedMonad",
          "package": "hx",
          "partial": "Wrapped Monad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:WrappedMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists, but with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functor based on zipping, so that\n\u003c/p\u003e\u003cpre\u003ef \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eZipList\u003c/a\u003e\u003c/code\u003e xs1 \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e ... \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eZipList\u003c/a\u003e\u003c/code\u003e xsn = \u003ccode\u003e\u003ca\u003eZipList\u003c/a\u003e\u003c/code\u003e (zipWithn f xs1 ... xsn)\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ZipList",
          "package": "hx",
          "type": "newtype"
        },
        "index": {
          "description": "Lists but with an Applicative functor based on zipping so that ZipList xs1 ZipList xsn ZipList zipWithn xs1 xsn",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ZipList",
          "package": "hx",
          "partial": "Zip List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#t:ZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(||)",
          "package": "hx",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "hx",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFanin: Split the input between the two argument arrows and\n   merge their outputs.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(|||)",
          "package": "hx",
          "signature": "a b d -\u003e a c d -\u003e a (Either b c) d",
          "type": "method"
        },
        "index": {
          "description": "Fanin Split the input between the two argument arrows and merge their outputs The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(|||) |||",
          "normalized": "a b c-\u003ea d c-\u003ea(Either b d)c",
          "package": "hx",
          "signature": "a b d-\u003ea c d-\u003ea(Either b c)d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList index (subscript) operator, starting from 0.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e,\n which takes an index of any integral type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(!!)",
          "package": "hx",
          "signature": "[a] -\u003e Int -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "List index subscript operator starting from It is an instance of the more general genericIndex which takes an index of any integral type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(!!) !!",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "hx",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication operator.  This operator is redundant, since ordinary\n application \u003ccode\u003e(f x)\u003c/code\u003e means the same as \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e x)\u003c/code\u003e. However, \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e has\n low, right-associative binding precedence, so it sometimes allows\n parentheses to be omitted; for example:\n\u003c/p\u003e\u003cpre\u003e     f $ g $ h x  =  f (g (h x))\n\u003c/pre\u003e\u003cp\u003eIt is also useful in higher-order situations, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e 0) xs\u003c/code\u003e,\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e) fs xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "($)",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Application operator This operator is redundant since ordinary application means the same as However has low right-associative binding precedence so it sometimes allows parentheses to be omitted for example It is also useful in higher-order situations such as map xs or zipWith fs xs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "($) $",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict (call-by-value) application, defined in terms of \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "($!)",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Strict call-by-value application defined in terms of seq",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "($!) $!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(&&)",
          "package": "hx",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "hx",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFanout: send the input to both argument arrows and combine\n   their output.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(&&&)",
          "package": "hx",
          "signature": "a b c -\u003e a b c' -\u003e a b (c, c')",
          "type": "method"
        },
        "index": {
          "description": "Fanout send the input to both argument arrows and combine their output The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(&&&) &&&",
          "normalized": "a b c-\u003ea b d-\u003ea b(c,d)",
          "package": "hx",
          "signature": "a b c-\u003ea b c'-\u003ea b(c,c')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(*)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(**)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(**) **",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the input between the two argument arrows and combine\n   their output.  Note that this is in general not a functor.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(***)",
          "package": "hx",
          "signature": "a b c -\u003e a b' c' -\u003e a (b, b') (c, c')",
          "type": "method"
        },
        "index": {
          "description": "Split the input between the two argument arrows and combine their output Note that this is in general not functor The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(***) ***",
          "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
          "package": "hx",
          "signature": "a b c-\u003ea b' c'-\u003ea(b,b')(c,c')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the first argument.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(*\u003e)",
          "package": "hx",
          "signature": "f a -\u003e f b -\u003e f b",
          "type": "method"
        },
        "index": {
          "description": "Sequence actions discarding the value of the first argument",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(*\u003e) *\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "hx",
          "signature": "f a-\u003ef b-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(+)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(++)",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(++) ++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the input between the two argument arrows, retagging\n   and merging their outputs.\n   Note that this is in general not a functor.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(+++)",
          "package": "hx",
          "signature": "a b c -\u003e a b' c' -\u003e a (Either b b') (Either c c')",
          "type": "method"
        },
        "index": {
          "description": "Split the input between the two argument arrows retagging and merging their outputs Note that this is in general not functor The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(+++) +++",
          "normalized": "a b c-\u003ea d e-\u003ea(Either b d)(Either c e)",
          "package": "hx",
          "signature": "a b c-\u003ea b' c'-\u003ea(Either b b')(Either c c')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(-)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efractional division\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(/)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "fractional division",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(/=)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(/=) /=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "hx",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(\u003c)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "hx",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative binary operation\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c|\u003e)",
          "package": "hx",
          "signature": "f a -\u003e f a -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "An associative binary operation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "hx",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c$)",
          "package": "hx",
          "signature": "a -\u003e f b -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c$) \u003c$",
          "normalized": "a-\u003eb c-\u003eb a",
          "package": "hx",
          "signature": "a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the second argument.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c*)",
          "package": "hx",
          "signature": "f a -\u003e f b -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Sequence actions discarding the value of the second argument",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "hx",
          "signature": "f a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c**\u003e)",
          "package": "hx",
          "signature": "f a -\u003e f (a -\u003e b) -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "variant of with the arguments reversed",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a b-\u003ea(b-\u003ec)-\u003ea c",
          "package": "hx",
          "signature": "f a-\u003ef(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential application.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c*\u003e)",
          "package": "hx",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "description": "Sequential application",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "hx",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation with identity \u003ccode\u003e\u003ca\u003ezeroArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c+\u003e)",
          "package": "hx",
          "signature": "a b c -\u003e a b c -\u003e a b c",
          "type": "method"
        },
        "index": {
          "description": "An associative operation with identity zeroArrow",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a b c-\u003ea b c-\u003ea b c",
          "package": "hx",
          "signature": "a b c-\u003ea b c-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-to-left composition\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c\u003c\u003c)",
          "package": "hx",
          "signature": "cat b c -\u003e cat a b -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "Right-to-left composition",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "hx",
          "signature": "cat b c-\u003ecat a b-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecomposition with a pure function (right-to-left variant).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c\u003c^)",
          "package": "hx",
          "signature": "a c d -\u003e (b -\u003e c) -\u003e a b d",
          "type": "function"
        },
        "index": {
          "description": "Precomposition with pure function right-to-left variant",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c\u003c^) \u003c\u003c^",
          "normalized": "a b c-\u003e(d-\u003eb)-\u003ea d c",
          "package": "hx",
          "signature": "a c d-\u003e(b-\u003ec)-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--60--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(\u003c=)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c=) \u003c=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "hx",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-to-left Kleisli composition of monads. \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, with the arguments flipped\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c=\u003c)",
          "package": "hx",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Right-to-left Kleisli composition of monads with the arguments flipped",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c=\u003c) \u003c=\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "hx",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c\u003e)",
          "package": "hx",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(=\u003c\u003c)",
          "package": "hx",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Same as but with the arguments interchanged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "hx",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(==)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(==) ==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "hx",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(\u003e)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "hx",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "(\u003e=)",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e=) \u003e=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "hx",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right Kleisli composition of monads.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e=\u003e)",
          "package": "hx",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Left-to-right Kleisli composition of monads",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "hx",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e)",
          "package": "hx",
          "signature": "m a -\u003e m b -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "hx",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e=)",
          "package": "hx",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "hx",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right composition\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e\u003e)",
          "package": "hx",
          "signature": "cat a b -\u003e cat b c -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "Left-to-right composition",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "hx",
          "signature": "cat a b-\u003ecat b c-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostcomposition with a pure function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e^)",
          "package": "hx",
          "signature": "a b c -\u003e (c -\u003e d) -\u003e a b d",
          "type": "function"
        },
        "index": {
          "description": "Postcomposition with pure function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(\u003e\u003e^) \u003e\u003e^",
          "normalized": "a b c-\u003e(c-\u003ed)-\u003ea b d",
          "package": "hx",
          "signature": "a b c-\u003e(c-\u003ed)-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-62--62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to a non-negative integral power\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(^)",
          "package": "hx",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to non-negative integral power",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "hx",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostcomposition with a pure function (right-to-left variant).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(^\u003c\u003c)",
          "package": "hx",
          "signature": "(c -\u003e d) -\u003e a b c -\u003e a b d",
          "type": "function"
        },
        "index": {
          "description": "Postcomposition with pure function right-to-left variant",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(^\u003c\u003c) ^\u003c\u003c",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "hx",
          "signature": "(c-\u003ed)-\u003ea b c-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-94--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecomposition with a pure function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(^\u003e\u003e)",
          "package": "hx",
          "signature": "(b -\u003e c) -\u003e a c d -\u003e a b d",
          "type": "function"
        },
        "index": {
          "description": "Precomposition with pure function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(^\u003e\u003e) ^\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "hx",
          "signature": "(b-\u003ec)-\u003ea c d-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-94--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to an integral power\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(^^)",
          "package": "hx",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to an integral power",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(^^) ^^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "hx",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:-94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emorphism composition\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "(.)",
          "package": "hx",
          "signature": "forall b c a.  cat b c -\u003e cat a b -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "morphism composition",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "(.) .",
          "normalized": "a b c d e b c-\u003ee f b-\u003ee f c",
          "package": "hx",
          "signature": "forall b c a. cat b c-\u003ecat a b-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "All",
          "package": "hx",
          "signature": "All",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "All",
          "package": "hx",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Any",
          "package": "hx",
          "signature": "Any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Any",
          "package": "hx",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "ArrowMonad",
          "package": "hx",
          "signature": "ArrowMonad (a () b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ArrowMonad",
          "normalized": "ArrowMonad(a()b)",
          "package": "hx",
          "partial": "Arrow Monad",
          "signature": "ArrowMonad(a()b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:ArrowMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Const",
          "package": "hx",
          "signature": "Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Const",
          "package": "hx",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Dual",
          "package": "hx",
          "signature": "Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Dual",
          "package": "hx",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "EQ",
          "package": "hx",
          "signature": "EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "EQ",
          "package": "hx",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Endo",
          "package": "hx",
          "signature": "Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Endo",
          "package": "hx",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "False",
          "package": "hx",
          "signature": "False",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "False",
          "package": "hx",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "First",
          "package": "hx",
          "signature": "First",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "First",
          "package": "hx",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "GT",
          "package": "hx",
          "signature": "GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "GT",
          "package": "hx",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Handler",
          "package": "hx",
          "signature": "(e -\u003e IO a) -\u003e Handler a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Handler",
          "normalized": "(a-\u003eIO b)-\u003eHandler b",
          "package": "hx",
          "partial": "Handler",
          "signature": "(e-\u003eIO a)-\u003eHandler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Just",
          "package": "hx",
          "signature": "Just a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Just",
          "package": "hx",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Kleisli",
          "package": "hx",
          "signature": "Kleisli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Kleisli",
          "package": "hx",
          "partial": "Kleisli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "LT",
          "package": "hx",
          "signature": "LT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "LT",
          "package": "hx",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Last",
          "package": "hx",
          "signature": "Last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Last",
          "package": "hx",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Left",
          "package": "hx",
          "signature": "Left a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Left",
          "package": "hx",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Nothing",
          "package": "hx",
          "signature": "Nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Nothing",
          "package": "hx",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Product",
          "package": "hx",
          "signature": "Product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Product",
          "package": "hx",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Right",
          "package": "hx",
          "signature": "Right b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Right",
          "package": "hx",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "Sum",
          "package": "hx",
          "signature": "Sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "Sum",
          "package": "hx",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "True",
          "package": "hx",
          "signature": "True",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "True",
          "package": "hx",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "WrapArrow",
          "package": "hx",
          "signature": "WrapArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "WrapArrow",
          "package": "hx",
          "partial": "Wrap Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:WrapArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "WrapMonad",
          "package": "hx",
          "signature": "WrapMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "WrapMonad",
          "package": "hx",
          "partial": "Wrap Monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:WrapMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "ZipList",
          "package": "hx",
          "signature": "ZipList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ZipList",
          "package": "hx",
          "partial": "Zip List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:ZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "abs",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Absolute value",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "abs",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "acos",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "acos",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "acosh",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "acosh",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort, then group\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "aggregate",
          "package": "hx",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Haskell-X.html#aggregate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:aggregate\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:aggregate\"]"
        },
        "index": {
          "description": "Sort then group",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "aggregate",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggregate an association list, such that keys become unique.\n\u003c/p\u003e\u003cp\u003e(c) \n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "aggregateAL",
          "package": "hx",
          "signature": "[(a, b)] -\u003e [(a, [b])]",
          "source": "src/Haskell-X.html#aggregateAL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:aggregateAL\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:aggregateAL\"]"
        },
        "index": {
          "description": "Aggregate an association list such that keys become unique",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "aggregateAL",
          "normalized": "[(a,b)]-\u003e[(a,[b])]",
          "package": "hx",
          "partial": "AL",
          "signature": "[(a,b)]-\u003e[(a,[b])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:aggregateAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort, then group\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "aggregateBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [[a]]",
          "source": "src/Haskell-X.html#aggregateBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:aggregateBy\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:aggregateBy\"]"
        },
        "index": {
          "description": "Sort then group",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "aggregateBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[[a]]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:aggregateBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether all elements of the structure satisfy the predicate.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "all",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Determines whether all elements of the structure satisfy the predicate",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen invoked inside \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, this function allows a blocked\n asynchronous exception to be raised, if one exists.  It is\n equivalent to performing an interruptible operation (see\n \u003ca name=\"interruptible\"/\u003e), but does not involve any actual blocking.\n\u003c/p\u003e\u003cp\u003eWhen called outside \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, or inside \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e, this\n function has no effect.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "allowInterrupt",
          "package": "hx",
          "signature": "IO ()",
          "type": "function"
        },
        "index": {
          "description": "When invoked inside mask this function allows blocked asynchronous exception to be raised if one exists It is equivalent to performing an interruptible operation see but does not involve any actual blocking When called outside mask or inside uninterruptibleMask this function has no effect",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "allowInterrupt",
          "normalized": "IO()",
          "package": "hx",
          "partial": "Interrupt",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:allowInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a container of Bools.  For the\n result to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the container must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however,\n results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e value finitely far from the left end.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "and",
          "package": "hx",
          "signature": "t Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "and returns the conjunction of container of Bools For the result to be True the container must be finite False however results from False value finitely far from the left end",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "and",
          "normalized": "a Bool-\u003eBool",
          "package": "hx",
          "signature": "t Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether any element of the structure satisfies the predicate.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "any",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Determines whether any element of the structure satisfies the predicate",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ap",
          "package": "hx",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "hx",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "app",
          "package": "hx",
          "signature": "a (a b c, b) c",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "app",
          "normalized": "a(a b c,b)c",
          "package": "hx",
          "signature": "a(a b c,b)c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "appEndo",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "appEndo",
          "normalized": "a-\u003ea",
          "package": "hx",
          "partial": "Endo",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:appEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "appendFile",
          "package": "hx",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "hx",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function to an arrow.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "arr",
          "package": "hx",
          "signature": "(b -\u003e c) -\u003e a b c",
          "type": "method"
        },
        "index": {
          "description": "Lift function to an arrow",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "arr",
          "normalized": "(a-\u003eb)-\u003ec a b",
          "package": "hx",
          "signature": "(b-\u003ec)-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.  It is usually\n used as an infix operator, and its typing forces its first argument\n (which is usually overloaded) to have the same type as the second.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "asTypeOf",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "asTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the second",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "asTypeOf",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "partial": "Type Of",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:asTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "asin",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "asin",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "asinh",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "asinh",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the first argument evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then the result is the\n second argument.  Otherwise an \u003ccode\u003eAssertionFailed\u003c/code\u003e exception is raised,\n containing a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e with the source file and line number of the\n call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAssertions can normally be turned on or off with a compiler flag\n (for GHC, assertions are normally on unless optimisation is turned on \n with \u003ccode\u003e-O\u003c/code\u003e or the \u003ccode\u003e-fignore-asserts\u003c/code\u003e\n option is given).  When assertions are turned off, the first\n argument to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is ignored, and the second argument is\n returned as the result.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "assert",
          "package": "hx",
          "signature": "Bool -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "If the first argument evaluates to True then the result is the second argument Otherwise an AssertionFailed exception is raised containing String with the source file and line number of the call to assert Assertions can normally be turned on or off with compiler flag for GHC assertions are normally on unless optimisation is turned on with or the fignore-asserts option is given When assertions are turned off the first argument to assert is ignored and the second argument is returned as the result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "assert",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "hx",
          "signature": "Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "asum",
          "package": "hx",
          "signature": "t (f a) -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "The sum of collection of actions generalizing concat",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "asum",
          "normalized": "a(b c)-\u003eb c",
          "package": "hx",
          "signature": "t(f a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:asum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "atan",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "atan",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea version of arctangent taking two real floating-point arguments.\n For real floating \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e computes the angle\n (from the positive x-axis) of the vector from the origin to the\n point \u003ccode\u003e(x,y)\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e returns a value in the range [\u003ccode\u003e-pi\u003c/code\u003e,\n \u003ccode\u003epi\u003c/code\u003e].  It follows the Common Lisp semantics for the origin when\n signed zeroes are supported.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y 1\u003c/code\u003e, with \u003ccode\u003ey\u003c/code\u003e in a type\n that is \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e, should return the same value as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e.\n A default definition of \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e is provided, but implementors\n can provide a more accurate implementation.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "atan2",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "version of arctangent taking two real floating-point arguments For real floating and atan2 computes the angle from the positive x-axis of the vector from the origin to the point atan2 returns value in the range pi pi It follows the Common Lisp semantics for the origin when signed zeroes are supported atan2 with in type that is RealFloat should return the same value as atan default definition of atan2 is provided but implementors can provide more accurate implementation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "atan2",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:atan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "atanh",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "atanh",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen you want to acquire a resource, do some work with it, and\n then release the resource, it is a good idea to use \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e,\n because \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e will install the necessary exception handler to\n release the resource in the event that an exception is raised\n during the computation.  If an exception is raised, then \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e will\n re-raise the exception (after performing the release).\n\u003c/p\u003e\u003cp\u003eA common example is opening a file:\n\u003c/p\u003e\u003cpre\u003e bracket\n   (openFile \"filename\" ReadMode)\n   (hClose)\n   (\\fileHandle -\u003e do { ... })\n\u003c/pre\u003e\u003cp\u003eThe arguments to \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e are in this order so that we can partially apply\n it, e.g.:\n\u003c/p\u003e\u003cpre\u003e withFile name mode = bracket (openFile name mode) hClose\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "bracket",
          "package": "hx",
          "signature": "IO a-\u003e (a -\u003e IO b)-\u003e (a -\u003e IO c)-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "When you want to acquire resource do some work with it and then release the resource it is good idea to use bracket because bracket will install the necessary exception handler to release the resource in the event that an exception is raised during the computation If an exception is raised then bracket will re-raise the exception after performing the release common example is opening file bracket openFile filename ReadMode hClose fileHandle do The arguments to bracket are in this order so that we can partially apply it e.g withFile name mode bracket openFile name mode hClose",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "bracket",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO c",
          "package": "hx",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the in-between computation.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "bracketOnError",
          "package": "hx",
          "signature": "IO a-\u003e (a -\u003e IO b)-\u003e (a -\u003e IO c)-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Like bracket but only performs the final action if there was an exception raised by the in-between computation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "bracketOnError",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO c",
          "package": "hx",
          "partial": "On Error",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the first computation\n is not required.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "bracket_",
          "package": "hx",
          "signature": "IO a -\u003e IO b -\u003e IO c -\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket where the return value from the first computation is not required",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "bracket_",
          "normalized": "IO a-\u003eIO b-\u003eIO c-\u003eIO c",
          "package": "hx",
          "signature": "IO a-\u003eIO b-\u003eIO c-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e break (\u003e 3) [1,2,3,4,1,2,3,4] == ([1,2,3],[4,1,2,3,4])\n break (\u003c 9) [1,2,3] == ([],[1,2,3])\n break (\u003e 9) [1,2,3] == ([1,2,3],[])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "break",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "break applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the list break break break break is equivalent to span not",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values. \n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "catMaybes",
          "package": "hx",
          "signature": "[Maybe a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "catMaybes",
          "normalized": "[Maybe a]-\u003e[a]",
          "package": "hx",
          "partial": "Maybes",
          "signature": "[Maybe a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest of the exception-catching functions.  It\n takes a single argument, runs it, and if an exception is raised\n the \"handler\" is executed, with the value of the exception passed as an\n argument.  Otherwise, the result is returned as normal.  For example:\n\u003c/p\u003e\u003cpre\u003e   catch (readFile f)\n         (\\e -\u003e do let err = show (e :: IOException)\n                   hPutStr stderr (\"Warning: Couldn't open \" ++ f ++ \": \" ++ err)\n                   return \"\")\n\u003c/pre\u003e\u003cp\u003eNote that we have to give a type signature to \u003ccode\u003ee\u003c/code\u003e, or the program\n will not typecheck as the type is ambiguous. While it is possible\n to catch exceptions of any type, see the section \"Catching all\n exceptions\" (in \u003ca\u003eControl.Exception\u003c/a\u003e) for an explanation of the problems with doing so.\n\u003c/p\u003e\u003cp\u003eFor catching exceptions in pure (non-\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e) expressions, see the\n function \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that due to Haskell's unspecified evaluation order, an\n expression may throw one of several possible exceptions: consider\n the expression \u003ccode\u003e(error \"urk\") + (1 `div` 0)\u003c/code\u003e.  Does\n the expression throw\n \u003ccode\u003eErrorCall \"urk\"\u003c/code\u003e, or \u003ccode\u003eDivideByZero\u003c/code\u003e?\n\u003c/p\u003e\u003cp\u003eThe answer is \"it might throw either\"; the choice is\n non-deterministic. If you are catching any type of exception then you\n might catch either. If you are calling \u003ccode\u003ecatch\u003c/code\u003e with type\n \u003ccode\u003eIO Int -\u003e (ArithException -\u003e IO Int) -\u003e IO Int\u003c/code\u003e then the handler may\n get run with \u003ccode\u003eDivideByZero\u003c/code\u003e as an argument, or an \u003ccode\u003eErrorCall \"urk\"\u003c/code\u003e\n exception may be propogated further up. If you call it again, you\n might get a the opposite behaviour. This is ok, because \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e is an\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "catch",
          "package": "hx",
          "signature": "IO a-\u003e (e -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "This is the simplest of the exception-catching functions It takes single argument runs it and if an exception is raised the handler is executed with the value of the exception passed as an argument Otherwise the result is returned as normal For example catch readFile do let err show IOException hPutStr stderr Warning Couldn open err return Note that we have to give type signature to or the program will not typecheck as the type is ambiguous While it is possible to catch exceptions of any type see the section Catching all exceptions in Control.Exception for an explanation of the problems with doing so For catching exceptions in pure non IO expressions see the function evaluate Note that due to Haskell unspecified evaluation order an expression may throw one of several possible exceptions consider the expression error urk div Does the expression throw ErrorCall urk or DivideByZero The answer is it might throw either the choice is non-deterministic If you are catching any type of exception then you might catch either If you are calling catch with type IO Int ArithException IO Int IO Int then the handler may get run with DivideByZero as an argument or an ErrorCall urk exception may be propogated further up If you call it again you might get the opposite behaviour This is ok because catch is an IO computation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "catch",
          "normalized": "IO a-\u003e(b-\u003eIO a)-\u003eIO a",
          "package": "hx",
          "signature": "IO a-\u003e(e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, but it takes an extra\n argument which is an \u003cem\u003eexception predicate\u003c/em\u003e, a function which\n selects which type of exceptions we're interested in.\n\u003c/p\u003e\u003cpre\u003e catchJust (\\e -\u003e if isDoesNotExistErrorType (ioeGetErrorType e) then Just () else Nothing)\n           (readFile f)\n           (\\_ -\u003e do hPutStrLn stderr (\"No such file: \" ++ show f)\n                     return \"\")\n\u003c/pre\u003e\u003cp\u003eAny other exceptions which are not matched by the predicate\n are re-raised, and may be caught by an enclosing\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "catchJust",
          "package": "hx",
          "signature": "(e -\u003e Maybe b)-\u003e IO a-\u003e (b -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The function catchJust is like catch but it takes an extra argument which is an exception predicate function which selects which type of exceptions we re interested in catchJust if isDoesNotExistErrorType ioeGetErrorType then Just else Nothing readFile do hPutStrLn stderr No such file show return Any other exceptions which are not matched by the predicate are re-raised and may be caught by an enclosing catch catchJust etc",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "catchJust",
          "normalized": "(a-\u003eMaybe b)-\u003eIO c-\u003e(b-\u003eIO c)-\u003eIO c",
          "package": "hx",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003eIO a-\u003e(b-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:catchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes you want to catch two different sorts of exception. You could\ndo something like\n\u003c/p\u003e\u003cpre\u003e f = expr `catch` \\ (ex :: ArithException) -\u003e handleArith ex\n          `catch` \\ (ex :: IOException)    -\u003e handleIO    ex\n\u003c/pre\u003e\u003cp\u003eHowever, there are a couple of problems with this approach. The first is\nthat having two exception handlers is inefficient. However, the more\nserious issue is that the second exception handler will catch exceptions\nin the first, e.g. in the example above, if \u003ccode\u003ehandleArith\u003c/code\u003e throws an\n\u003ccode\u003eIOException\u003c/code\u003e then the second exception handler will catch it.\n\u003c/p\u003e\u003cp\u003eInstead, we provide a function \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, which would be used thus:\n\u003c/p\u003e\u003cpre\u003e f = expr `catches` [Handler (\\ (ex :: ArithException) -\u003e handleArith ex),\n                     Handler (\\ (ex :: IOException)    -\u003e handleIO    ex)]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "catches",
          "package": "hx",
          "signature": "IO a -\u003e [Handler a] -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Sometimes you want to catch two different sorts of exception You could do something like expr catch ex ArithException handleArith ex catch ex IOException handleIO ex However there are couple of problems with this approach The first is that having two exception handlers is inefficient However the more serious issue is that the second exception handler will catch exceptions in the first e.g in the example above if handleArith throws an IOException then the second exception handler will catch it Instead we provide function catches which would be used thus expr catches Handler ex ArithException handleArith ex Handler ex IOException handleIO ex",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "catches",
          "normalized": "IO a-\u003e[Handler a]-\u003eIO a",
          "package": "hx",
          "signature": "IO a-\u003e[Handler a]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ceiling",
          "package": "hx",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "ceiling returns the least integer not less than",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ceiling",
          "normalized": "a-\u003eb",
          "package": "hx",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e method restricted to the type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "chr",
          "package": "hx",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "The toEnum method restricted to the type Char",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "chr",
          "normalized": "Int-\u003eChar",
          "package": "hx",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecis\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e is a complex value with magnitude \u003ccode\u003e1\u003c/code\u003e\n and phase \u003ccode\u003et\u003c/code\u003e (modulo \u003ccode\u003e2*\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "cis",
          "package": "hx",
          "signature": "a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "cis is complex value with magnitude and phase modulo pi",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "cis",
          "normalized": "a-\u003eComplex a",
          "package": "hx",
          "signature": "a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "compare",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Ordering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "hx",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe concatenation of all the elements of a container of lists.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "concat",
          "package": "hx",
          "signature": "t [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The concatenation of all the elements of container of lists",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "concat",
          "normalized": "a[b]-\u003e[b]",
          "package": "hx",
          "signature": "t[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all the elements of a container and concatenate\n the resulting lists.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "concatMap",
          "package": "hx",
          "signature": "(a -\u003e [b]) -\u003e t a -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Map function over all the elements of container and concatenate the resulting lists",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003ec a-\u003e[b]",
          "package": "hx",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003et a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjugate of a complex number.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "conjugate",
          "package": "hx",
          "signature": "Complex a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "The conjugate of complex number",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "conjugate",
          "normalized": "Complex a-\u003eComplex a",
          "package": "hx",
          "signature": "Complex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "const",
          "package": "hx",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Constant function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "const",
          "normalized": "a-\u003eb-\u003ea",
          "package": "hx",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "cos",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "cos",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "cosh",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "cosh",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many elements there are in a 2 levels deep list.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "count2",
          "package": "hx",
          "signature": "[[a]] -\u003e Int",
          "source": "src/Haskell-X.html#count2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:count2\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:count2\"]"
        },
        "index": {
          "description": "Counts how many elements there are in levels deep list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "count2",
          "normalized": "[[a]]-\u003eInt",
          "package": "hx",
          "signature": "[[a]]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:count2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many elements there are in a 3 levels deep list.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "count3",
          "package": "hx",
          "signature": "[[[a]]] -\u003e Int",
          "source": "src/Haskell-X.html#count3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:count3\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:count3\"]"
        },
        "index": {
          "description": "Counts how many elements there are in levels deep list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "count3",
          "normalized": "[[[a]]]-\u003eInt",
          "package": "hx",
          "signature": "[[[a]]]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:count3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many elements there are in a 4 levels deep list.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "count4",
          "package": "hx",
          "signature": "[[[[a]]]] -\u003e Int",
          "source": "src/Haskell-X.html#count4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:count4\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:count4\"]"
        },
        "index": {
          "description": "Counts how many elements there are in levels deep list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "count4",
          "normalized": "[[[[a]]]]-\u003eInt",
          "package": "hx",
          "signature": "[[[[a]]]]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:count4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "curry",
          "package": "hx",
          "signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "curry converts an uncurried function to curried function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "curry",
          "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "hx",
          "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "cycle",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "cycle",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMediate types and unary type constructors.\n In \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances of the form \u003ccode\u003eT a\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edataCast1\u003c/a\u003e\u003c/code\u003e should be defined\n as \u003ccode\u003e\u003ca\u003egcast1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which is appropriate\n for non-unary type constructors.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "dataCast1",
          "package": "hx",
          "signature": "c (t d)) -\u003e Maybe (c a)",
          "type": "method"
        },
        "index": {
          "description": "Mediate types and unary type constructors In Data instances of the form dataCast1 should be defined as gcast1 The default definition is const Nothing which is appropriate for non-unary type constructors",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "dataCast1",
          "normalized": "a(b c))-\u003eMaybe(a d)",
          "package": "hx",
          "partial": "Cast",
          "signature": "c(t d))-\u003eMaybe(c a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:dataCast1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMediate types and binary type constructors.\n In \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances of the form \u003ccode\u003eT a b\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edataCast2\u003c/a\u003e\u003c/code\u003e should be\n defined as \u003ccode\u003e\u003ca\u003egcast2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which is appropriate\n for non-binary type constructors.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "dataCast2",
          "package": "hx",
          "signature": "c (t d e)) -\u003e Maybe (c a)",
          "type": "method"
        },
        "index": {
          "description": "Mediate types and binary type constructors In Data instances of the form dataCast2 should be defined as gcast2 The default definition is const Nothing which is appropriate for non-binary type constructors",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "dataCast2",
          "normalized": "a(b c d))-\u003eMaybe(a e)",
          "package": "hx",
          "partial": "Cast",
          "signature": "c(t d e))-\u003eMaybe(c a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:dataCast2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outer type constructor of the type\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "dataTypeOf",
          "package": "hx",
          "signature": "a -\u003e DataType",
          "type": "method"
        },
        "index": {
          "description": "The outer type constructor of the type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "dataTypeOf",
          "normalized": "a-\u003eDataType",
          "package": "hx",
          "partial": "Type Of",
          "signature": "a-\u003eDataType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:dataTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e applied to a real floating-point\n number returns the significand expressed as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and an\n appropriately scaled exponent (an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e).  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n yields \u003ccode\u003e(m,n)\u003c/code\u003e, then \u003ccode\u003ex\u003c/code\u003e is equal in value to \u003ccode\u003em*b^^n\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e\n is the floating-point radix, and furthermore, either \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e\n are both zero or else \u003ccode\u003eb^(d-1) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e m \u003c b^d\u003c/code\u003e, where \u003ccode\u003ed\u003c/code\u003e is\n the value of \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e 0 = (0,0)\u003c/code\u003e. If the type\n contains a negative zero, also \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e (-0.0) = (0,0)\u003c/code\u003e.\n \u003cem\u003eThe result of\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis unspecified if either of\u003c/em\u003e\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis\u003c/em\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "decodeFloat",
          "package": "hx",
          "signature": "a -\u003e (Integer, Int)",
          "type": "method"
        },
        "index": {
          "description": "The function decodeFloat applied to real floating-point number returns the significand expressed as an Integer and an appropriately scaled exponent an Int If decodeFloat yields then is equal in value to where is the floating-point radix and furthermore either and are both zero or else d-1 abs where is the value of floatDigits In particular decodeFloat If the type contains negative zero also decodeFloat The result of decodeFloat is unspecified if either of isNaN or isInfinite is True",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "decodeFloat",
          "normalized": "a-\u003e(Integer,Int)",
          "package": "hx",
          "partial": "Float",
          "signature": "a-\u003e(Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:decodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e removes the first occurrence of \u003ccode\u003ex\u003c/code\u003e from its list argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e delete 'a' \"banana\" == \"bnana\"\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "delete",
          "package": "hx",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "delete removes the first occurrence of from its list argument For example delete banana bnana It is special case of deleteBy which allows the programmer to supply their own equality test",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "delete",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but takes a\n user-supplied equality predicate.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "deleteBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The deleteBy function behaves like delete but takes user-supplied equality predicate",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "deleteBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e function takes a predicate and two lists and\n returns the first list with the first occurrence of each element of\n the second list removed.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "deleteFirstsBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The deleteFirstsBy function takes predicate and two lists and returns the first list with the first occurrence of each element of the second list removed",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "deleteFirstsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "Firsts By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:deleteFirstsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a single digit \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.  \n This function fails unless its argument satisfies \u003ccode\u003e\u003ca\u003eisHexDigit\u003c/a\u003e\u003c/code\u003e,\n but recognises both upper and lower-case hexadecimal digits\n (i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e, \u003ccode\u003e'a'\u003c/code\u003e..\u003ccode\u003e'f'\u003c/code\u003e, \u003ccode\u003e'A'\u003c/code\u003e..\u003ccode\u003e'F'\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "digitToInt",
          "package": "hx",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Convert single digit Char to the corresponding Int This function fails unless its argument satisfies isHexDigit but recognises both upper and lower-case hexadecimal digits i.e",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "digitToInt",
          "normalized": "Char-\u003eInt",
          "package": "hx",
          "partial": "To Int",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:digitToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward negative infinity\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "div",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward negative infinity",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "div",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "divMod",
          "package": "hx",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous div and mod",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "divMod",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "hx",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:divMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e\n after the first \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e drop 6 \"Hello World!\" == \"World!\"\n drop 3 [1,2,3,4,5] == [4,5]\n drop 3 [1,2] == []\n drop 3 [] == []\n drop (-1) [1,2] == [1,2]\n drop 0 [1,2] == [1,2]\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "drop",
          "package": "hx",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs drop Hello World World drop drop drop drop drop It is an instance of the more general genericDrop in which may be of any integral type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "drop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e dropWhile (\u003c 3) [1,2,3,4,5,1,2,3] == [3,4,5,1,2,3]\n dropWhile (\u003c 9) [1,2,3] == []\n dropWhile (\u003c 0) [1,2,3] == [1,2,3]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "dropWhile",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs dropWhile dropWhile dropWhile",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n If the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "either",
          "package": "hx",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Case analysis for the Either type If the value is Left apply the first function to if it is Right apply the second function to",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "hx",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the element occur in the structure?\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "elem",
          "package": "hx",
          "signature": "a -\u003e t a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Does the element occur in the structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "elem",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "hx",
          "signature": "a-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given list which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "elemIndex",
          "package": "hx",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given list which is equal by to the query element or Nothing if there is no such element",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "elemIndex",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "hx",
          "partial": "Index",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "elemIndices",
          "package": "hx",
          "signature": "a -\u003e [a] -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "elemIndices",
          "normalized": "a-\u003e[a]-\u003e[Int]",
          "package": "hx",
          "partial": "Indices",
          "signature": "a-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "empty",
          "package": "hx",
          "signature": "f a",
          "type": "method"
        },
        "index": {
          "description": "The identity of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "empty",
          "package": "hx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e performs the inverse of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e in the\n sense that for finite \u003ccode\u003ex\u003c/code\u003e with the exception of \u003ccode\u003e-0.0\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003euncurry\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) = x\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e m n\u003c/code\u003e is one of the two closest representable\n floating-point numbers to \u003ccode\u003em*b^^n\u003c/code\u003e (or \u003ccode\u003e&#177;Infinity\u003c/code\u003e if overflow\n occurs); usually the closer, but if \u003ccode\u003em\u003c/code\u003e contains too many bits,\n the result may be rounded in the wrong direction.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "encodeFloat",
          "package": "hx",
          "signature": "Integer -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "encodeFloat performs the inverse of decodeFloat in the sense that for finite with the exception of uncurry encodeFloat decodeFloat encodeFloat is one of the two closest representable floating-point numbers to or Infinity if overflow occurs usually the closer but if contains too many bits the result may be rounded in the wrong direction",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "encodeFloat",
          "normalized": "Integer-\u003eInt-\u003ea",
          "package": "hx",
          "partial": "Float",
          "signature": "Integer-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:encodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "enumFrom",
          "package": "hx",
          "signature": "a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "hx",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "enumFromThen",
          "package": "hx",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "hx",
          "partial": "From Then",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "enumFromThenTo",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "hx",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "enumFromTo",
          "package": "hx",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of n..m",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "hx",
          "partial": "From To",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "error",
          "package": "hx",
          "signature": "[Char] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "error stops execution and displays an error message",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "error",
          "normalized": "[Char]-\u003ea",
          "package": "hx",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces its argument to be evaluated to weak head normal form when\n the resultant \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is executed. It can be used to order\n evaluation with respect to other \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations; its semantics are\n given by\n\u003c/p\u003e\u003cpre\u003e   evaluate x `seq` y    ==\u003e  y\n   evaluate x `catch` f  ==\u003e  (return $! x) `catch` f\n   evaluate x \u003e\u003e= f      ==\u003e  (return $! x) \u003e\u003e= f\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e the first equation implies that \u003ccode\u003e(evaluate x)\u003c/code\u003e is \u003cem\u003enot\u003c/em\u003e the\n same as \u003ccode\u003e(return $! x)\u003c/code\u003e.  A correct definition is\n\u003c/p\u003e\u003cpre\u003e   evaluate x = (return $! x) \u003e\u003e= return\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "evaluate",
          "package": "hx",
          "signature": "a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Forces its argument to be evaluated to weak head normal form when the resultant IO action is executed It can be used to order evaluation with respect to other IO operations its semantics are given by evaluate seq evaluate catch return catch evaluate return Note the first equation implies that evaluate is not the same as return correct definition is evaluate return return",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "evaluate",
          "normalized": "a-\u003eIO a",
          "package": "hx",
          "signature": "a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "even",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "even",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function exhaustively.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "exhaustively",
          "package": "hx",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Haskell-X.html#exhaustively",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustively\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:exhaustively\"]"
        },
        "index": {
          "description": "Apply function exhaustively",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "exhaustively",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "hx",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustively"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function exhaustively.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "exhaustivelyBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Haskell-X.html#exhaustivelyBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustivelyBy\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:exhaustivelyBy\"]"
        },
        "index": {
          "description": "Apply function exhaustively",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "exhaustivelyBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustivelyBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic function exhaustively.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "exhaustivelyByM",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Haskell-X.html#exhaustivelyByM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustivelyByM\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:exhaustivelyByM\"]"
        },
        "index": {
          "description": "Apply monadic function exhaustively",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "exhaustivelyByM",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustivelyByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic function exhaustively.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "exhaustivelyM",
          "package": "hx",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Haskell-X.html#exhaustivelyM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustivelyM\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:exhaustivelyM\"]"
        },
        "index": {
          "description": "Apply monadic function exhaustively",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "exhaustivelyM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "hx",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exhaustivelyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "exp",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "exp",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e corresponds to the second component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e 0 = 0\u003c/code\u003e and for finite nonzero \u003ccode\u003ex\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x = snd (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) + \u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n If \u003ccode\u003ex\u003c/code\u003e is a finite floating-point number, it is equal in value to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e x * b ^^ \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e is the\n floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "exponent",
          "package": "hx",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "exponent corresponds to the second component of decodeFloat exponent and for finite nonzero exponent snd decodeFloat floatDigits If is finite floating-point number it is equal in value to significand exponent where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "exponent",
          "normalized": "a-\u003eInt",
          "package": "hx",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fail",
          "package": "hx",
          "signature": "String -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "hx",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "filter",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "filterM",
          "package": "hx",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based filter function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "hx",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with just a computation to run\n afterward.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "finally",
          "package": "hx",
          "signature": "IO a-\u003e IO b-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "specialised variant of bracket with just computation to run afterward",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "finally",
          "normalized": "IO a-\u003eIO b-\u003eIO a",
          "package": "hx",
          "signature": "IO a-\u003eIO b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a structure and returns\n the leftmost element of the structure matching the predicate, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "find",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and structure and returns the leftmost element of the structure matching the predicate or Nothing if there is no such element",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eMaybe a",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003et a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns\n the index of the first element in the list satisfying the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "findIndex",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and list and returns the index of the first element in the list satisfying the predicate or Nothing if there is no such element",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "package": "hx",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "findIndices",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "package": "hx",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "first",
          "package": "hx",
          "signature": "a b c -\u003e a (b, d) (c, d)",
          "type": "method"
        },
        "index": {
          "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "first",
          "normalized": "a b c-\u003ea(b,d)(c,d)",
          "package": "hx",
          "signature": "a b c-\u003ea(b,d)(c,d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is the least fixed point of the function \u003ccode\u003ef\u003c/code\u003e,\n i.e. the least defined \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ef x = x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fix",
          "package": "hx",
          "signature": "(a -\u003e a) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "fix is the least fixed point of the function i.e the least defined such that",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fix",
          "normalized": "(a-\u003ea)-\u003ea",
          "package": "hx",
          "signature": "(a-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes its (first) two arguments in the reverse order of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "flip",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "flip takes its first two arguments in the reverse order of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "flip",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "hx",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the number of digits of\n \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e in the significand\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "floatDigits",
          "package": "hx",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the number of digits of floatRadix in the significand",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "floatDigits",
          "normalized": "a-\u003eInt",
          "package": "hx",
          "partial": "Digits",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:floatDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the radix of the representation\n (often \u003ccode\u003e2\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "floatRadix",
          "package": "hx",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the radix of the representation often",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "floatRadix",
          "normalized": "a-\u003eInteger",
          "package": "hx",
          "partial": "Radix",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:floatRadix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the lowest and highest values\n the exponent may assume\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "floatRange",
          "package": "hx",
          "signature": "a -\u003e (Int, Int)",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the lowest and highest values the exponent may assume",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "floatRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "hx",
          "partial": "Range",
          "signature": "a-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:floatRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "floor",
          "package": "hx",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "floor returns the greatest integer not greater than",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "floor",
          "normalized": "a-\u003eb",
          "package": "hx",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "fmap",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the elements of a structure using a monoid.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fold",
          "package": "hx",
          "signature": "t m -\u003e m",
          "type": "method"
        },
        "index": {
          "description": "Combine the elements of structure using monoid",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fold",
          "normalized": "a b-\u003eb",
          "package": "hx",
          "signature": "t m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e function is analogous to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, except that its result is\nencapsulated in a monad. Note that \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e works from left-to-right over\nthe list arguments. This could be an issue where \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and the `folded\nfunction' are not commutative.\n\u003c/p\u003e\u003cpre\u003e       foldM f a1 [x1, x2, ..., xm]\n\u003c/pre\u003e\u003cp\u003e==  \n\u003c/p\u003e\u003cpre\u003e       do\n         a2 \u003c- f a1 x1\n         a3 \u003c- f a2 x2\n         ...\n         f am xm\n\u003c/pre\u003e\u003cp\u003eIf right-to-left evaluation is required, the input list should be reversed.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldM",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The foldM function is analogous to foldl except that its result is encapsulated in monad Note that foldM works from left-to-right over the list arguments This could be an issue where and the folded function are not commutative foldM a1 x1 x2 xm do a2 a1 x1 a3 a2 x2 am xm If right-to-left evaluation is required the input list should be reversed",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
          "package": "hx",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldM_",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like foldM but discards the result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldM_",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
          "package": "hx",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of the structure to a monoid,\n and combine the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldMap",
          "package": "hx",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "type": "method"
        },
        "index": {
          "description": "Map each element of the structure to monoid and combine the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "hx",
          "partial": "Map",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold of a structure.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldl",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Left-associative fold of structure foldl foldl toList",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "hx",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold of a structure.\n but with strict application of the operator.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldl'\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldl'",
          "package": "hx",
          "signature": "forall a b.  (a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Left-associative fold of structure but with strict application of the operator foldl foldl toList",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldl'",
          "normalized": "a b c(b-\u003ed-\u003eb)-\u003eb-\u003ee d-\u003eb",
          "package": "hx",
          "signature": "forall a b.(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldl1",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "variant of foldl that has no base case and thus may only be applied to non-empty structures foldl1 foldl1 toList",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic fold over the elements of a structure,\n associating to the left, i.e. from left to right.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldlM",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e t b -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Monadic fold over the elements of structure associating to the left i.e from left to right",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldlM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed b-\u003ec a",
          "package": "hx",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003et b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldlM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative fold of a structure.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldr",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "Right-associative fold of structure foldr foldr toList",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "hx",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative fold of a structure, \n but with strict application of the operator.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldr'",
          "package": "hx",
          "signature": "forall a b.  (a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Right-associative fold of structure but with strict application of the operator",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldr'",
          "normalized": "a b c(b-\u003ed-\u003ed)-\u003ed-\u003ee b-\u003ed",
          "package": "hx",
          "signature": "forall a b.(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldr1",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "variant of foldr that has no base case and thus may only be applied to non-empty structures foldr1 foldr1 toList",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic fold over the elements of a structure,\n associating to the right, i.e. from right to left.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "foldrM",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e m b) -\u003e b -\u003e t a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Monadic fold over the elements of structure associating to the right i.e from right to left",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "foldrM",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003ed a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003eb-\u003em b)-\u003eb-\u003et a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:foldrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "forM",
          "package": "hx",
          "signature": "t a -\u003e (a -\u003e m b) -\u003e m (t b)",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "forM",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec(a d)",
          "package": "hx",
          "signature": "t a-\u003e(a-\u003em b)-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "forM_",
          "package": "hx",
          "signature": "t a -\u003e (a -\u003e m b) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "forM_",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec()",
          "package": "hx",
          "signature": "t a-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "for_",
          "package": "hx",
          "signature": "t a -\u003e (a -\u003e f b) -\u003e f ()",
          "type": "function"
        },
        "index": {
          "description": "for is traverse with its arguments flipped",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "for_",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec()",
          "package": "hx",
          "signature": "t a-\u003e(a-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:for_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e act\u003c/code\u003e repeats the action infinitely.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "forever",
          "package": "hx",
          "signature": "m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "forever act repeats the action infinitely",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "forever",
          "normalized": "a b-\u003ea c",
          "package": "hx",
          "signature": "m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:forever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fromEnum",
          "package": "hx",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromEnum",
          "normalized": "a-\u003eInt",
          "package": "hx",
          "partial": "Enum",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "fromException",
          "package": "hx",
          "signature": "SomeException -\u003e Maybe e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "hx",
          "partial": "Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fromInteger",
          "package": "hx",
          "signature": "Integer -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "hx",
          "partial": "Integer",
          "signature": "Integer-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fromIntegral",
          "package": "hx",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion from integral types",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "hx",
          "partial": "Integral",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fromJust",
          "package": "hx",
          "signature": "Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromJust function extracts the element out of Just and throws an error if its argument is Nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromJust",
          "normalized": "Maybe a-\u003ea",
          "package": "hx",
          "partial": "Just",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fromMaybe",
          "package": "hx",
          "signature": "a -\u003e Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "hx",
          "partial": "Maybe",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e (that is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n A floating literal stands for an application of \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e\n to a value of type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, so such literals have type\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "fromRational",
          "package": "hx",
          "signature": "Rational -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from Rational that is Ratio Integer floating literal stands for an application of fromRational to value of type Rational so such literals have type Fractional",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromRational",
          "normalized": "Rational-\u003ea",
          "package": "hx",
          "partial": "Rational",
          "signature": "Rational-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "fromString",
          "package": "hx",
          "signature": "String -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "hx",
          "partial": "String",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "fst",
          "package": "hx",
          "signature": "a -\u003e Fst a",
          "source": "src/Haskell-X-Prelude.html#fst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "fst",
          "normalized": "a-\u003eFst a",
          "package": "hx",
          "signature": "a-\u003eFst a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the non-negative factor of both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e of which\n every common factor of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e is also a factor; for example\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 4 2 = 2\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-4) 6 = 2\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 4\u003c/code\u003e = \u003ccode\u003e4\u003c/code\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 0\u003c/code\u003e = \u003ccode\u003e0\u003c/code\u003e.\n (That is, the common divisor that is \"greatest\" in the divisibility\n preordering.)\n\u003c/p\u003e\u003cp\u003eNote: Since for signed fixed-width integer types, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c 0\u003c/code\u003e,\n the result may be negative if one of the arguments is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (and\n necessarily is if the other is \u003ccode\u003e0\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e) for such types.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gcd",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "gcd is the non-negative factor of both and of which every common factor of and is also factor for example gcd gcd gcd gcd That is the common divisor that is greatest in the divisibility preordering Note Since for signed fixed-width integer types abs minBound the result may be negative if one of the arguments is minBound and necessarily is if the other is or minBound for such types",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gcd",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getAll",
          "package": "hx",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getAll",
          "package": "hx",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getAny",
          "package": "hx",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getAny",
          "package": "hx",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "getChar",
          "package": "hx",
          "signature": "IO Char",
          "type": "function"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getChar",
          "package": "hx",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getConst",
          "package": "hx",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getConst",
          "package": "hx",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "getContents",
          "package": "hx",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getContents",
          "package": "hx",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getDual",
          "package": "hx",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getDual",
          "package": "hx",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getFirst",
          "package": "hx",
          "signature": "Maybe a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getFirst",
          "package": "hx",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getLast",
          "package": "hx",
          "signature": "Maybe a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getLast",
          "package": "hx",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "getLine",
          "package": "hx",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getLine",
          "package": "hx",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eMaskingState\u003c/a\u003e\u003c/code\u003e for the current thread.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "getMaskingState",
          "package": "hx",
          "signature": "IO MaskingState",
          "type": "function"
        },
        "index": {
          "description": "Returns the MaskingState for the current thread",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getMaskingState",
          "package": "hx",
          "partial": "Masking State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getMaskingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getProduct",
          "package": "hx",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getProduct",
          "package": "hx",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getSum",
          "package": "hx",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getSum",
          "package": "hx",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "getZipList",
          "package": "hx",
          "signature": "[a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "getZipList",
          "normalized": "[a]",
          "package": "hx",
          "partial": "Zip List",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:getZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold operation for constructor applications.\n\u003c/p\u003e\u003cp\u003eThe type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is a headache, but operationally it is a simple\n generalisation of a list fold.\n\u003c/p\u003e\u003cp\u003eThe default definition for \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which is\n suitable for abstract datatypes with no substructures.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gfoldl",
          "package": "hx",
          "signature": "gfoldl",
          "type": "method"
        },
        "index": {
          "description": "Left-associative fold operation for constructor applications The type of gfoldl is headache but operationally it is simple generalisation of list fold The default definition for gfoldl is const id which is suitable for abstract datatypes with no substructures",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gfoldl",
          "package": "hx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gfoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic monadic transformation that maps over the immediate subterms\n\u003c/p\u003e\u003cp\u003eThe default definition instantiates the type constructor \u003ccode\u003ec\u003c/code\u003e in\n the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e to the monad datatype constructor, defining\n injection and projection using \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapM",
          "package": "hx",
          "signature": "d -\u003e m d) -\u003e a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "generic monadic transformation that maps over the immediate subterms The default definition instantiates the type constructor in the type of gfoldl to the monad datatype constructor defining injection and projection using return and",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapM",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "hx",
          "signature": "d-\u003em d)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformation of one immediate subterm with success\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapMo",
          "package": "hx",
          "signature": "d -\u003e m d) -\u003e a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Transformation of one immediate subterm with success",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapMo",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "hx",
          "partial": "Mo",
          "signature": "d-\u003em d)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapMo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformation of at least one immediate subterm does not fail\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapMp",
          "package": "hx",
          "signature": "d -\u003e m d) -\u003e a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Transformation of at least one immediate subterm does not fail",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapMp",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "hx",
          "partial": "Mp",
          "signature": "d-\u003em d)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapMp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic query that processes the immediate subterms and returns a list\n of results.  The list is given in the same order as originally specified\n in the declaratoin of the data constructors.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapQ",
          "package": "hx",
          "signature": "d -\u003e u) -\u003e a -\u003e [u]",
          "type": "method"
        },
        "index": {
          "description": "generic query that processes the immediate subterms and returns list of results The list is given in the same order as originally specified in the declaratoin of the data constructors",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapQ",
          "normalized": "a-\u003eb)-\u003ec-\u003e[b]",
          "package": "hx",
          "signature": "d-\u003eu)-\u003ea-\u003e[u]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic query that processes one child by index (zero-based)\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapQi",
          "package": "hx",
          "signature": "d -\u003e u) -\u003e a -\u003e u",
          "type": "method"
        },
        "index": {
          "description": "generic query that processes one child by index zero-based",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapQi",
          "normalized": "a-\u003eb)-\u003ec-\u003eb",
          "package": "hx",
          "partial": "Qi",
          "signature": "d-\u003eu)-\u003ea-\u003eu",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapQi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic query with a left-associative binary operator\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapQl",
          "package": "hx",
          "signature": "d -\u003e r') -\u003e a -\u003e r",
          "type": "method"
        },
        "index": {
          "description": "generic query with left-associative binary operator",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapQl",
          "normalized": "a-\u003eb)-\u003ec-\u003ed",
          "package": "hx",
          "partial": "Ql",
          "signature": "d-\u003er')-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapQl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic query with a right-associative binary operator\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapQr",
          "package": "hx",
          "signature": "d -\u003e r') -\u003e a -\u003e r",
          "type": "method"
        },
        "index": {
          "description": "generic query with right-associative binary operator",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapQr",
          "normalized": "a-\u003eb)-\u003ec-\u003ed",
          "package": "hx",
          "partial": "Qr",
          "signature": "d-\u003er')-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapQr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic transformation that maps over the immediate subterms\n\u003c/p\u003e\u003cp\u003eThe default definition instantiates the type constructor \u003ccode\u003ec\u003c/code\u003e in the\n type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e to an identity datatype constructor, using the\n isomorphism pair as injection and projection.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gmapT",
          "package": "hx",
          "signature": "b -\u003e b) -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "generic transformation that maps over the immediate subterms The default definition instantiates the type constructor in the type of gfoldl to an identity datatype constructor using the isomorphism pair as injection and projection",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gmapT",
          "normalized": "a-\u003ea)-\u003eb-\u003eb",
          "package": "hx",
          "signature": "b-\u003eb)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gmapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a list and returns a list of lists such\n that the concatenation of the result is equal to the argument.  Moreover,\n each sublist in the result contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "group",
          "package": "hx",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The group function takes list and returns list of lists such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "group",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "groupBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "guard",
          "package": "hx",
          "signature": "Bool -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "guard is return if is True and mzero if is False",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "hx",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfolding constructor applications\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "gunfold",
          "package": "hx",
          "signature": "c (b -\u003e r) -\u003e c r) -\u003e (forall r.  r -\u003e c r) -\u003e Constr -\u003e c a",
          "type": "method"
        },
        "index": {
          "description": "Unfolding constructor applications",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "gunfold",
          "normalized": "a(b-\u003ec)-\u003ea c)-\u003e(d e c-\u003ea c)-\u003eConstr-\u003ea f",
          "package": "hx",
          "signature": "c(b-\u003er)-\u003ec r)-\u003e(forall r. r-\u003ec r)-\u003eConstr-\u003ec a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:gunfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e with the arguments swapped around; useful in\n situations where the code for the handler is shorter.  For example:\n\u003c/p\u003e\u003cpre\u003e   do handle (\\NonTermination -\u003e exitWith (ExitFailure 1)) $\n      ...\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "handle",
          "package": "hx",
          "signature": "(e -\u003e IO a) -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "version of catch with the arguments swapped around useful in situations where the code for the handler is shorter For example do handle NonTermination exitWith ExitFailure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "handle",
          "normalized": "(a-\u003eIO b)-\u003eIO b-\u003eIO b",
          "package": "hx",
          "signature": "(e-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e with the arguments swapped around (see\n \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "handleJust",
          "package": "hx",
          "signature": "(e -\u003e Maybe b) -\u003e (b -\u003e IO a) -\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "version of catchJust with the arguments swapped around see handle",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "handleJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003eIO c)-\u003eIO c-\u003eIO c",
          "package": "hx",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003e(b-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:handleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "head",
          "package": "hx",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of list which must be non-empty",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "head",
          "normalized": "[a]-\u003ea",
          "package": "hx",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe identity morphism\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "id",
          "package": "hx",
          "signature": "forall a.  cat a a",
          "type": "function"
        },
        "index": {
          "description": "the identity morphism",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "id",
          "package": "hx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the imaginary part of a complex number.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "imagPart",
          "package": "hx",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the imaginary part of complex number",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "imagPart",
          "normalized": "Complex a-\u003ea",
          "package": "hx",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the elements of a list except the last one.\n The list must be non-empty.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "init",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of list except the last one The list must be non-empty",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "init",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function returns all initial segments of the argument,\n shortest first.  For example,\n\u003c/p\u003e\u003cpre\u003e inits \"abc\" == [\"\",\"a\",\"ab\",\"abc\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003einits _|_ = [] : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "inits",
          "package": "hx",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The inits function returns all initial segments of the argument shortest first For example inits abc ab abc Note that inits has the following strictness property inits",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "inits",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e function takes an element and a list and inserts the\n element into the list at the first position where it is less\n than or equal to the next element.  In particular, if the list\n is sorted before the call, the result will also be sorted.\n It is a special case of \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own comparison function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "insert",
          "package": "hx",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The insert function takes an element and list and inserts the element into the list at the first position where it is less than or equal to the next element In particular if the list is sorted before the call the result will also be sorted It is special case of insertBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "insert",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe non-overloaded version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "insertBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The non-overloaded version of insert",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e in the range \u003ccode\u003e0\u003c/code\u003e..\u003ccode\u003e15\u003c/code\u003e to the corresponding single\n digit \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.  This function fails on other inputs, and generates\n lower-case hexadecimal digits.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "intToDigit",
          "package": "hx",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert an Int in the range to the corresponding single digit Char This function fails on other inputs and generates lower-case hexadecimal digits",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "intToDigit",
          "normalized": "Int-\u003eChar",
          "package": "hx",
          "partial": "To Digit",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:intToDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "interact",
          "package": "hx",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "hx",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs xss\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e xs xss))\u003c/code\u003e.\n It inserts the list \u003ccode\u003exs\u003c/code\u003e in between the lists in \u003ccode\u003exss\u003c/code\u003e and concatenates the\n result.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "intercalate",
          "package": "hx",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "intercalate xs xss is equivalent to concat intersperse xs xss It inserts the list xs in between the lists in xss and concatenates the result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "intercalate",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e function takes the list intersection of two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e [1,2,3,4] `intersect` [2,4,6,8] == [2,4]\n\u003c/pre\u003e\u003cp\u003eIf the first list contains duplicates, so will the result.\n\u003c/p\u003e\u003cpre\u003e [1,2,2,3,4] `intersect` [6,4,4,2] == [2,2,4]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. If the element is found in both the first\n and the second list, the element from the first list will be used.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "intersect",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersect function takes the list intersection of two lists For example intersect If the first list contains duplicates so will the result intersect It is special case of intersectBy which allows the programmer to supply their own equality test If the element is found in both the first and the second list the element from the first list will be used",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "intersect",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "intersectBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersectBy function is the non-overloaded version of intersect",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "intersectBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:intersectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes an element and a list and\n `intersperses' that element between the elements of the list.\n For example,\n\u003c/p\u003e\u003cpre\u003e intersperse ',' \"abcde\" == \"a,b,c,d,e\"\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "intersperse",
          "package": "hx",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes an element and list and intersperses that element between the elements of the list For example intersperse abcde",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "intersperse",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ioError",
          "package": "hx",
          "signature": "IOError -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Raise an IOError in the IO monad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ioError",
          "normalized": "IOError-\u003eIO a",
          "package": "hx",
          "partial": "Error",
          "signature": "IOError-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic Unicode characters (lower-case, upper-case and\n title-case letters, plus letters of caseless scripts and modifiers letters).\n This function is equivalent to \u003ccode\u003e\u003ca\u003eisLetter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isAlpha",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters This function is equivalent to isLetter",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isAlpha",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic or numeric digit Unicode characters.\n\u003c/p\u003e\u003cp\u003eNote that numeric digits outside the ASCII range are selected by this\n function but not by \u003ccode\u003e\u003ca\u003eisDigit\u003c/a\u003e\u003c/code\u003e.  Such digits may be part of identifiers\n but are not used by the printer and reader to represent numbers.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isAlphaNum",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic or numeric digit Unicode characters Note that numeric digits outside the ASCII range are selected by this function but not by isDigit Such digits may be part of identifiers but are not used by the printer and reader to represent numbers",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isAlphaNum",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Alpha Num",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the first 128 characters of the Unicode character set,\n corresponding to the ASCII character set.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isAscii",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects the first characters of the Unicode character set corresponding to the ASCII character set",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isAscii",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Ascii",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII lower-case letters,\n i.e. characters satisfying both \u003ccode\u003e\u003ca\u003eisAscii\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisLower\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isAsciiLower",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII lower-case letters i.e characters satisfying both isAscii and isLower",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isAsciiLower",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Ascii Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isAsciiLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII upper-case letters,\n i.e. characters satisfying both \u003ccode\u003e\u003ca\u003eisAscii\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisUpper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isAsciiUpper",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII upper-case letters i.e characters satisfying both isAscii and isUpper",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isAsciiUpper",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Ascii Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isAsciiUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects control characters, which are the non-printing characters of\n the Latin-1 subset of Unicode.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isControl",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects control characters which are the non-printing characters of the Latin-1 subset of Unicode",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isControl",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Control",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is too small to be represented in\n normalized format\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isDenormalized",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is too small to be represented in normalized format",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isDenormalized",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "partial": "Denormalized",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isDenormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII digits, i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isDigit",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII digits i.e",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isDigit",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII hexadecimal digits,\n i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e, \u003ccode\u003e'a'\u003c/code\u003e..\u003ccode\u003e'f'\u003c/code\u003e, \u003ccode\u003e'A'\u003c/code\u003e..\u003ccode\u003e'F'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isHexDigit",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII hexadecimal digits i.e",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE floating point number\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isIEEE",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE floating point number",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isIEEE",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "partial": "IEEE",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE infinity or negative infinity\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isInfinite",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE infinity or negative infinity",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isInfinite",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "partial": "Infinite",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is contained, wholly and intact,\n anywhere within the second.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eisInfixOf \"Haskell\" \"I really like Haskell.\" == True\nisInfixOf \"Ial\" \"I really like Haskell.\" == False\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isInfixOf",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isInfixOf function takes two lists and returns True iff the first list is contained wholly and intact anywhere within the second Example isInfixOf Haskell really like Haskell True isInfixOf Ial really like Haskell False",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isInfixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "hx",
          "partial": "Infix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the\n form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isJust",
          "package": "hx",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isJust function returns True iff its argument is of the form Just",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isJust",
          "normalized": "Maybe a-\u003eBool",
          "package": "hx",
          "partial": "Just",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the first 256 characters of the Unicode character set,\n corresponding to the ISO 8859-1 (Latin-1) character set.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isLatin1",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects the first characters of the Unicode character set corresponding to the ISO Latin-1 character set",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isLatin1",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Latin",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic Unicode characters (lower-case, upper-case and\n title-case letters, plus letters of caseless scripts and modifiers letters).\n This function is equivalent to \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isLetter",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters This function is equivalent to isAlpha",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isLetter",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Letter",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects lower-case alphabetic Unicode characters (letters).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isLower",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects lower-case alphabetic Unicode characters letters",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isLower",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode mark characters, e.g. accents and the like, which\n combine with preceding letters.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isMark",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode mark characters e.g accents and the like which combine with preceding letters",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isMark",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Mark",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE \"not-a-number\" (NaN) value\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isNaN",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE not-a-number NaN value",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isNaN",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "partial": "Na",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE negative zero\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isNegativeZero",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE negative zero",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isNegativeZero",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "partial": "Negative Zero",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isNegativeZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisNothing\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isNothing",
          "package": "hx",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isNothing function returns True iff its argument is Nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isNothing",
          "normalized": "Maybe a-\u003eBool",
          "package": "hx",
          "partial": "Nothing",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode numeric characters, including digits from various\n scripts, Roman numerals, etc.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isNumber",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode numeric characters including digits from various scripts Roman numerals etc",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isNumber",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Number",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII octal digits, i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'7'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isOctDigit",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII octal digits i.e",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isOctDigit",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Oct Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a prefix of the second.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isPrefixOf",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two lists and returns True iff the first list is prefix of the second",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "hx",
          "partial": "Prefix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects printable Unicode characters\n (letters, numbers, marks, punctuation, symbols and spaces).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isPrint",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects printable Unicode characters letters numbers marks punctuation symbols and spaces",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isPrint",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Print",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode punctuation characters, including various kinds\n of connectors, brackets and quotes.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isPunctuation",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode punctuation characters including various kinds of connectors brackets and quotes",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isPunctuation",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Punctuation",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode space and separator characters.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isSeparator",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode space and separator characters",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isSeparator",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for any Unicode space character, and the control\n characters \u003ccode\u003e\\t\u003c/code\u003e, \u003ccode\u003e\\n\u003c/code\u003e, \u003ccode\u003e\\r\u003c/code\u003e, \u003ccode\u003e\\f\u003c/code\u003e, \u003ccode\u003e\\v\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isSpace",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns True for any Unicode space character and the control characters",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isSpace",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a suffix of the second.\n Both lists must be finite.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isSuffixOf",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two lists and returns True iff the first list is suffix of the second Both lists must be finite",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isSuffixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "hx",
          "partial": "Suffix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects Unicode symbol characters, including mathematical and\n currency symbols.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isSymbol",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects Unicode symbol characters including mathematical and currency symbols",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isSymbol",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Symbol",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects upper-case or title-case alphabetic Unicode characters (letters).\n Title case is used by a small number of letter ligatures like the\n single-character form of \u003cem\u003eLj\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "isUpper",
          "package": "hx",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects upper-case or title-case alphabetic Unicode characters letters Title case is used by small number of letter ligatures like the single-character form of Lj",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "isUpper",
          "normalized": "Char-\u003eBool",
          "package": "hx",
          "partial": "Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:isUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "iterate",
          "package": "hx",
          "signature": "(a -\u003e a) -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite list of repeated applications of to iterate",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
          "package": "hx",
          "signature": "(a-\u003ea)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function is the conventional monad join operator. It is used to\n remove one level of monadic structure, projecting its bound argument into the\n outer level.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "join",
          "package": "hx",
          "signature": "m (m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The join function is the conventional monad join operator It is used to remove one level of monadic structure projecting its bound argument into the outer level",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "hx",
          "signature": "m(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of a list, which must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "last",
          "package": "hx",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of list which must be finite and non-empty",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "last",
          "normalized": "[a]-\u003ea",
          "package": "hx",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the smallest positive integer that both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e divide.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "lcm",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "lcm is the smallest positive integer that both and divide",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "lcm",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:lcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed marked inputs through the argument arrow, passing the\n   rest through unchanged to the output.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "left",
          "package": "hx",
          "signature": "a b c -\u003e a (Either b d) (Either c d)",
          "type": "method"
        },
        "index": {
          "description": "Feed marked inputs through the argument arrow passing the rest through unchanged to the output",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "left",
          "normalized": "a b c-\u003ea(Either b d)(Either c d)",
          "package": "hx",
          "signature": "a b c-\u003ea(Either b d)(Either c d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny instance of \u003ccode\u003e\u003ca\u003eArrowApply\u003c/a\u003e\u003c/code\u003e can be made into an instance of\n   \u003ccode\u003e\u003ca\u003eArrowChoice\u003c/a\u003e\u003c/code\u003e by defining \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eleftApp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "leftApp",
          "package": "hx",
          "signature": "a b c -\u003e a (Either b d) (Either c d)",
          "type": "function"
        },
        "index": {
          "description": "Any instance of ArrowApply can be made into an instance of ArrowChoice by defining left leftApp",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "leftApp",
          "normalized": "a b c-\u003ea(Either b d)(Either c d)",
          "package": "hx",
          "partial": "App",
          "signature": "a b c-\u003ea(Either b d)(Either c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:leftApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts from a list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e all the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e elements\n All the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e elements are extracted in order.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "lefts",
          "package": "hx",
          "signature": "[Either a b] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Extracts from list of Either all the Left elements All the Left elements are extracted in order",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "lefts",
          "normalized": "[Either a b]-\u003e[a]",
          "package": "hx",
          "signature": "[Either a b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a finite list as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e,\n the result type of which may be any kind of number.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "length",
          "package": "hx",
          "signature": "[a] -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of finite list as an Int It is an instance of the more general genericLength the result type of which may be any kind of number",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "length",
          "normalized": "[a]-\u003eInt",
          "package": "hx",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e function reads a single lexeme from the input, discarding\n initial white space, and returning the characters that constitute the\n lexeme.  If the input string contains only white space, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e returns a\n single successful `lexeme' consisting of the empty string.  (Thus\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e \"\" = [(\"\",\"\")]\u003c/code\u003e.)  If there is no legal lexeme at the\n beginning of the input string, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e fails (i.e. returns \u003ccode\u003e[]\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis lexer is not completely faithful to the Haskell lexical syntax\n in the following respects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Qualified names are not handled properly\n\u003c/li\u003e\u003cli\u003e Octal and hexadecimal numerics are not recognized as a single token\n\u003c/li\u003e\u003cli\u003e Comments are not treated properly\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Haskell.X.Prelude",
          "name": "lex",
          "package": "hx",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "The lex function reads single lexeme from the input discarding initial white space and returning the characters that constitute the lexeme If the input string contains only white space lex returns single successful lexeme consisting of the empty string Thus lex If there is no legal lexeme at the beginning of the input string lex fails i.e returns This lexer is not completely faithful to the Haskell lexical syntax in the following respects Qualified names are not handled properly Octal and hexadecimal numerics are not recognized as single token Comments are not treated properly",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "lex",
          "package": "hx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function to actions.\n This function may be used as a value for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftA",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "Lift function to actions This function may be used as value for fmap in Functor instance",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftA",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary function to actions.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftA2",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "type": "function"
        },
        "index": {
          "description": "Lift binary function to actions",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftA2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "hx",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a ternary function to actions.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftA3",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "type": "function"
        },
        "index": {
          "description": "Lift ternary function to actions",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftA3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "hx",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftM",
          "package": "hx",
          "signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003er)-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftM2",
          "package": "hx",
          "signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftM3",
          "package": "hx",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftM4",
          "package": "hx",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "liftM5",
          "package": "hx",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "liftM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings at newline\n characters.  The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "lines",
          "package": "hx",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "hx",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on an empty list\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the first element of the list.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "listToMaybe",
          "package": "hx",
          "signature": "[a] -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "The listToMaybe function returns Nothing on an empty list or Just where is the first element of the list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "listToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hx",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "log",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "log",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "logBase",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "logBase",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "partial": "Base",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an association list.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "lookup",
          "package": "hx",
          "signature": "a -\u003e [(a, b)] -\u003e Maybe b",
          "type": "function"
        },
        "index": {
          "description": "lookup key assocs looks up key in an association list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "lookup",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "hx",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "loop",
          "package": "hx",
          "signature": "a (b, d) (c, d) -\u003e a b c",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "loop",
          "normalized": "a(b,c)(d,c)-\u003ea b d",
          "package": "hx",
          "signature": "a(b,d)(c,d)-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nonnegative magnitude of a complex number.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "magnitude",
          "package": "hx",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The nonnegative magnitude of complex number",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "magnitude",
          "normalized": "Complex a-\u003ea",
          "package": "hx",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or more.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "many",
          "package": "hx",
          "signature": "f a -\u003e f [a]",
          "type": "method"
        },
        "index": {
          "description": "Zero or more",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "many",
          "normalized": "a b-\u003ea[b]",
          "package": "hx",
          "signature": "f a-\u003ef[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "map",
          "package": "hx",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Haskell-X-Prelude.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "hx",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a structure,\n passing an accumulating parameter from left to right, and returning\n a final value of this accumulator together with the new structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapAccumL",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of fmap and foldl it applies function to each element of structure passing an accumulating parameter from left to right and returning final value of this accumulator together with the new structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapAccumL",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
          "package": "hx",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003efoldr\u003c/code\u003e; it applies a function to each element of a structure,\n passing an accumulating parameter from right to left, and returning\n a final value of this accumulator together with the new structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapAccumR",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of fmap and foldr it applies function to each element of structure passing an accumulating parameter from right to left and returning final value of this accumulator together with the new structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
          "package": "hx",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAndUnzipM\u003c/a\u003e\u003c/code\u003e function maps its first argument over a list, returning\n the result as a pair of lists. This function is mainly used with complicated\n data structures or a state-transforming monad.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapAndUnzipM",
          "package": "hx",
          "signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The mapAndUnzipM function maps its first argument over list returning the result as pair of lists This function is mainly used with complicated data structures or state-transforming monad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
          "package": "hx",
          "partial": "And Unzip",
          "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function maps one exception into another as proposed in the\n paper \"A semantics for imprecise exceptions\".\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapException",
          "package": "hx",
          "signature": "(e1 -\u003e e2) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "This function maps one exception into another as proposed in the paper semantics for imprecise exceptions",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapException",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "hx",
          "partial": "Exception",
          "signature": "(e-\u003ee)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapM",
          "package": "hx",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "hx",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of a structure to a monadic action, evaluate\n these actions from left to right, and ignore the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapM_",
          "package": "hx",
          "signature": "(a -\u003e m b) -\u003e t a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Map each element of structure to monadic action evaluate these actions from left to right and ignore the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb()",
          "package": "hx",
          "signature": "(a-\u003em b)-\u003et a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e function is a version of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e which can throw\n out elements.  In particular, the functional argument returns\n something of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.  If this is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no element\n is added on to the result list.  If it just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is\n included in the result list.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mapMaybe",
          "package": "hx",
          "signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "The mapMaybe function is version of map which can throw out elements In particular the functional argument returns something of type Maybe If this is Nothing no element is added on to the result list If it just Just then is included in the result list",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "package": "hx",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mappend",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes an IO computation with asynchronous\n exceptions \u003cem\u003emasked\u003c/em\u003e.  That is, any thread which attempts to raise\n an exception in the current thread with \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e\n will be blocked until asynchronous exceptions are unmasked again.\n\u003c/p\u003e\u003cp\u003eThe argument passed to \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e is a function that takes as its\n argument another function, which can be used to restore the\n prevailing masking state within the context of the masked\n computation.  For example, a common way to use \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e is to protect\n the acquisition of a resource:\n\u003c/p\u003e\u003cpre\u003e mask $ \\restore -\u003e do\n     x \u003c- acquire\n     restore (do_something_with x) `onException` release\n     release\n\u003c/pre\u003e\u003cp\u003eThis code guarantees that \u003ccode\u003eacquire\u003c/code\u003e is paired with \u003ccode\u003erelease\u003c/code\u003e, by masking\n asynchronous exceptions for the critical parts. (Rather than write\n this code yourself, it would be better to use\n \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e which abstracts the general pattern).\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003erestore\u003c/code\u003e action passed to the argument to \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e\n does not necessarily unmask asynchronous exceptions, it just\n restores the masking state to that of the enclosing context.  Thus\n if asynchronous exceptions are already masked, \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e cannot be used\n to unmask exceptions again.  This is so that if you call a library function\n with exceptions masked, you can be sure that the library call will not be\n able to unmask exceptions again.  If you are writing library code and need\n to use asynchronous exceptions, the only way is to create a new thread;\n see \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAsynchronous exceptions may still be received while in the masked\n state if the masked thread \u003cem\u003eblocks\u003c/em\u003e in certain ways; see\n \u003ca\u003eControl.Exception\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThreads created by \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e inherit the masked\n state from the parent; that is, to start a thread in blocked mode,\n use \u003ccode\u003emask_ $ forkIO ...\u003c/code\u003e.  This is particularly useful if you need\n to establish an exception handler in the forked thread before any\n asynchronous exceptions are received.  To create a a new thread in\n an unmasked state use \u003ccode\u003e\u003ca\u003eforkIOUnmasked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mask",
          "package": "hx",
          "signature": "((forall a.  IO a -\u003e IO a) -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Executes an IO computation with asynchronous exceptions masked That is any thread which attempts to raise an exception in the current thread with throwTo will be blocked until asynchronous exceptions are unmasked again The argument passed to mask is function that takes as its argument another function which can be used to restore the prevailing masking state within the context of the masked computation For example common way to use mask is to protect the acquisition of resource mask restore do acquire restore do something with onException release release This code guarantees that acquire is paired with release by masking asynchronous exceptions for the critical parts Rather than write this code yourself it would be better to use bracket which abstracts the general pattern Note that the restore action passed to the argument to mask does not necessarily unmask asynchronous exceptions it just restores the masking state to that of the enclosing context Thus if asynchronous exceptions are already masked mask cannot be used to unmask exceptions again This is so that if you call library function with exceptions masked you can be sure that the library call will not be able to unmask exceptions again If you are writing library code and need to use asynchronous exceptions the only way is to create new thread see forkIOWithUnmask Asynchronous exceptions may still be received while in the masked state if the masked thread blocks in certain ways see Control.Exception Threads created by forkIO inherit the masked state from the parent that is to start thread in blocked mode use mask forkIO This is particularly useful if you need to establish an exception handler in the forked thread before any asynchronous exceptions are received To create new thread in an unmasked state use forkIOUnmasked",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mask",
          "normalized": "((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO d",
          "package": "hx",
          "signature": "((forall a. IO a-\u003eIO a)-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the argument.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mask_",
          "package": "hx",
          "signature": "IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Like mask but does not pass restore action to the argument",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mask_",
          "normalized": "IO a-\u003eIO a",
          "package": "hx",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "max",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "max",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "maxBound",
          "package": "hx",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "maxBound",
          "package": "hx",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:maxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe largest element of a non-empty structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "maximum",
          "package": "hx",
          "signature": "t a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The largest element of non-empty structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "maximum",
          "normalized": "a b-\u003eb",
          "package": "hx",
          "signature": "t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe largest element of a non-empty structure with respect to the\n given comparison function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "maximumBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e t a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The largest element of non-empty structure with respect to the given comparison function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb a-\u003ea",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "maybe",
          "package": "hx",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "hx",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e function returns an empty list when given\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or a singleton list when not given \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "maybeToList",
          "package": "hx",
          "signature": "Maybe a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The maybeToList function returns an empty list when given Nothing or singleton list when not given Nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "maybeToList",
          "normalized": "Maybe a-\u003e[a]",
          "package": "hx",
          "partial": "To List",
          "signature": "Maybe a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:maybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mconcat",
          "package": "hx",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "hx",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mempty",
          "package": "hx",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mempty",
          "package": "hx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e equivalent of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e = \u003ccode\u003e(mfilter:: (a -\u003e Bool) -\u003e [a] -\u003e [a]\u003c/code\u003e\n applicable to any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e, for example\n \u003ccode\u003emfilter odd (Just 1) == Just 1\u003c/code\u003e\n \u003ccode\u003emfilter odd (Just 2) == Nothing\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mfilter",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Direct MonadPlus equivalent of filter filter mfilter Bool applicable to any MonadPlus for example mfilter odd Just Just mfilter odd Just Nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mfilter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "min",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "min",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "minBound",
          "package": "hx",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "minBound",
          "package": "hx",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:minBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe least element of a non-empty structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "minimum",
          "package": "hx",
          "signature": "t a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The least element of non-empty structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "minimum",
          "normalized": "a b-\u003eb",
          "package": "hx",
          "signature": "t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe least element of a non-empty structure with respect to the\n given comparison function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "minimumBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e t a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The least element of non-empty structure with respect to the given comparison function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb a-\u003ea",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a complex number from polar components of magnitude and phase.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mkPolar",
          "package": "hx",
          "signature": "a -\u003e a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "Form complex number from polar components of magnitude and phase",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mkPolar",
          "normalized": "a-\u003ea-\u003eComplex a",
          "package": "hx",
          "partial": "Polar",
          "signature": "a-\u003ea-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger modulus, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `div` y)*y + (x `mod` y) == x\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mod",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer modulus satisfying div mod",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean associative operation\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mplus",
          "package": "hx",
          "signature": "m a -\u003e m a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "an associative operation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mplus",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "hx",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "msum",
          "package": "hx",
          "signature": "t (m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The sum of collection of actions generalizing concat",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "msum",
          "normalized": "a(b c)-\u003eb c",
          "package": "hx",
          "signature": "t(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe identity of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.  It should also satisfy the equations\n\u003c/p\u003e\u003cpre\u003e mzero \u003e\u003e= f  =  mzero\n v \u003e\u003e mzero   =  mzero\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "mzero",
          "package": "hx",
          "signature": "m a",
          "type": "method"
        },
        "index": {
          "description": "the identity of mplus It should also satisfy the equations mzero mzero mzero mzero",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "mzero",
          "package": "hx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "negate",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Unary negation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "not",
          "package": "hx",
          "signature": "Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean not",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "hx",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "notElem",
          "package": "hx",
          "signature": "a -\u003e t a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "notElem",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "hx",
          "partial": "Elem",
          "signature": "a-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e function removes duplicate elements from a list.\n In particular, it keeps only the first occurrence of each element.\n (The name \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e means `essence'.)\n It is a special case of \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "nub",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The nub function removes duplicate elements from list In particular it keeps only the first occurrence of each element The name nub means essence It is special case of nubBy which allows the programmer to supply their own equality test",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function behaves just like \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except it uses a\n user-supplied equality predicate instead of the overloaded \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "nubBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The nubBy function behaves just like nub except it uses user-supplied equality predicate instead of the overloaded function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a list is empty.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "null",
          "package": "hx",
          "signature": "[a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether list is empty",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "hx",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "odd",
          "package": "hx",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "odd",
          "normalized": "a-\u003eBool",
          "package": "hx",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(*) `on` f = \\x y -\u003e f x * f y\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTypical usage: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e `on` \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlgebraic properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(*) `on` \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e = (*)\u003c/code\u003e (if \u003ccode\u003e(*) &#8713; {&#8869;, \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e &#8869;}\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e((*) `on` f) `on` g = (*) `on` (f . g)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on f . \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on g = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on (g . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Haskell.X.Prelude",
          "name": "on",
          "package": "hx",
          "signature": "(b -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "on Typical usage sortBy compare on fst Algebraic properties on id if const on on on flip on flip on flip on",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "on",
          "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
          "package": "hx",
          "signature": "(b-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was an\n exception raised by the computation.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "onException",
          "package": "hx",
          "signature": "IO a -\u003e IO b -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Like finally but only performs the final action if there was an exception raised by the computation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "onException",
          "normalized": "IO a-\u003eIO b-\u003eIO a",
          "package": "hx",
          "partial": "Exception",
          "signature": "IO a-\u003eIO b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or none.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "optional",
          "package": "hx",
          "signature": "f a -\u003e f (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "One or none",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "optional",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "hx",
          "signature": "f a-\u003ef(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a container of Bools.  For the\n result to be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the container must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however,\n results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value finitely far from the left end.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "or",
          "package": "hx",
          "signature": "t Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "or returns the disjunction of container of Bools For the result to be False the container must be finite True however results from True value finitely far from the left end",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "or",
          "normalized": "a Bool-\u003eBool",
          "package": "hx",
          "signature": "t Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e method restricted to the type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "ord",
          "package": "hx",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The fromEnum method restricted to the type Char",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "ord",
          "normalized": "Char-\u003eInt",
          "package": "hx",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "otherwise",
          "package": "hx",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "otherwise",
          "package": "hx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a list and returns\n the pair of lists of elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p xs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "partition",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate list and returns the pair of lists of elements which do and do not satisfy the predicate respectively i.e partition xs filter xs filter not xs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartitions a list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e into two lists\n All the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e elements are extracted, in order, to the first\n component of the output.  Similarly the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e elements are extracted\n to the second component of the output.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "partitionEithers",
          "package": "hx",
          "signature": "[Either a b] -\u003e ([a], [b])",
          "type": "function"
        },
        "index": {
          "description": "Partitions list of Either into two lists All the Left elements are extracted in order to the first component of the output Similarly the Right elements are extracted to the second component of the output",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "partitionEithers",
          "normalized": "[Either a b]-\u003e([a],[b])",
          "package": "hx",
          "partial": "Eithers",
          "signature": "[Either a b]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:partitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epermutations\u003c/a\u003e\u003c/code\u003e function returns the list of all permutations of the argument.\n\u003c/p\u003e\u003cpre\u003e permutations \"abc\" == [\"abc\",\"bac\",\"cba\",\"bca\",\"cab\",\"acb\"]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "permutations",
          "package": "hx",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The permutations function returns the list of all permutations of the argument permutations abc abc bac cba bca cab acb",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "permutations",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:permutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phase of a complex number, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n If the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "phase",
          "package": "hx",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The phase of complex number in the range pi pi If the magnitude is zero then so is the phase",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "phase",
          "normalized": "Complex a-\u003ea",
          "package": "hx",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "pi",
          "package": "hx",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "pi",
          "package": "hx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epolar\u003c/a\u003e\u003c/code\u003e takes a complex number and\n returns a (magnitude, phase) pair in canonical form:\n the magnitude is nonnegative, and the phase in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e;\n if the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "polar",
          "package": "hx",
          "signature": "Complex a -\u003e (a, a)",
          "type": "function"
        },
        "index": {
          "description": "The function polar takes complex number and returns magnitude phase pair in canonical form the magnitude is nonnegative and the phase in the range pi pi if the magnitude is zero then so is the phase",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "polar",
          "normalized": "Complex a-\u003e(a,a)",
          "package": "hx",
          "signature": "Complex a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "pred",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the predecessor of value For numeric types pred subtracts",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "print",
          "package": "hx",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "hx",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of the numbers of a structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "product",
          "package": "hx",
          "signature": "t a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The product function computes the product of the numbers of structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "product",
          "normalized": "a b-\u003eb",
          "package": "hx",
          "signature": "t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e takes a real fractional number \u003ccode\u003ex\u003c/code\u003e\n and returns a pair \u003ccode\u003e(n,f)\u003c/code\u003e such that \u003ccode\u003ex = n+f\u003c/code\u003e, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is an integral number with the same sign as \u003ccode\u003ex\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e is a fraction with the same type and sign as \u003ccode\u003ex\u003c/code\u003e,\n   and with absolute value less than \u003ccode\u003e1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default definitions of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e functions are in terms of \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "properFraction",
          "package": "hx",
          "signature": "a -\u003e (b, a)",
          "type": "method"
        },
        "index": {
          "description": "The function properFraction takes real fractional number and returns pair such that and is an integral number with the same sign as and is fraction with the same type and sign as and with absolute value less than The default definitions of the ceiling floor truncate and round functions are in terms of properFraction",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "properFraction",
          "normalized": "a-\u003e(b,a)",
          "package": "hx",
          "partial": "Fraction",
          "signature": "a-\u003e(b,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:properFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a value.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "pure",
          "package": "hx",
          "signature": "a -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Lift value",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "pure",
          "normalized": "a-\u003eb a",
          "package": "hx",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "putChar",
          "package": "hx",
          "signature": "Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "hx",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "putStr",
          "package": "hx",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "hx",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "putStrLn",
          "package": "hx",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "hx",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward zero\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "quot",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward zero",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "quot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "quotRem",
          "package": "hx",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous quot and rem",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "quotRem",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "hx",
          "partial": "Rem",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:quotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function reads input from a string, which must be\n completely consumed by the input process.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "read",
          "package": "hx",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The read function reads input from string which must be completely consumed by the input process",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "read",
          "normalized": "String-\u003ea",
          "package": "hx",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "readFile",
          "package": "hx",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "hx",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "readIO",
          "package": "hx",
          "signature": "String -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "hx",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "readList",
          "package": "hx",
          "signature": "ReadS [a]",
          "type": "method"
        },
        "index": {
          "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "readList",
          "normalized": "ReadS[a]",
          "package": "hx",
          "partial": "List",
          "signature": "ReadS[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:readList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "readLn",
          "package": "hx",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "readLn",
          "package": "hx",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but surrounded with\n parentheses.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but optionally\n surrounded with parentheses.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "readParen",
          "package": "hx",
          "signature": "Bool -\u003e ReadS a -\u003e ReadS a",
          "type": "function"
        },
        "index": {
          "description": "readParen True parses what parses but surrounded with parentheses readParen False parses what parses but optionally surrounded with parentheses",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "readParen",
          "normalized": "Bool-\u003eReadS a-\u003eReadS a",
          "package": "hx",
          "partial": "Paren",
          "signature": "Bool-\u003eReadS a-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:readParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "reads",
          "package": "hx",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "equivalent to readsPrec with precedence of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "reads",
          "package": "hx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "readsPrec",
          "package": "hx",
          "signature": "readsPrec",
          "type": "method"
        },
        "index": {
          "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "readsPrec",
          "package": "hx",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the real part of a complex number.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "realPart",
          "package": "hx",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the real part of complex number",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "realPart",
          "normalized": "Complex a-\u003ea",
          "package": "hx",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:realPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion to fractional types\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "realToFrac",
          "package": "hx",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion to fractional types",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "realToFrac",
          "normalized": "a-\u003eb",
          "package": "hx",
          "partial": "To Frac",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:realToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereciprocal fraction\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "recip",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "reciprocal fraction",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger remainder, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `quot` y)*y + (x `rem` y) == x\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "rem",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer remainder satisfying quot rem",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "rem",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "repeat",
          "package": "hx",
          "signature": "a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "hx",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "replicate",
          "package": "hx",
          "signature": "Int -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "replicate is list of length with the value of every element It is an instance of the more general genericReplicate in which may be of any integral type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "hx",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n act\u003c/code\u003e performs the action \u003ccode\u003en\u003c/code\u003e times,\n gathering the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "replicateM",
          "package": "hx",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "replicateM act performs the action times gathering the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "hx",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "replicateM_",
          "package": "hx",
          "signature": "Int -\u003e m a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like replicateM but discards the result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "replicateM_",
          "normalized": "Int-\u003ea b-\u003ea()",
          "package": "hx",
          "signature": "Int-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:replicateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "return",
          "package": "hx",
          "signature": "a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Inject value into the monadic type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "hx",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity arrow, which plays the role of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in arrow notation.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "returnA",
          "package": "hx",
          "signature": "a b b",
          "type": "function"
        },
        "index": {
          "description": "The identity arrow which plays the role of return in arrow notation",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "returnA",
          "package": "hx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:returnA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "reverse",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "right",
          "package": "hx",
          "signature": "a b c -\u003e a (Either d b) (Either d c)",
          "type": "method"
        },
        "index": {
          "description": "mirror image of left The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "right",
          "normalized": "a b c-\u003ea(Either d b)(Either d c)",
          "package": "hx",
          "signature": "a b c-\u003ea(Either d b)(Either d c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts from a list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e all the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e elements\n All the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e elements are extracted in order.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "rights",
          "package": "hx",
          "signature": "[Either a b] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Extracts from list of Either all the Right elements All the Right elements are extracted in order",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "rights",
          "normalized": "[Either a b]-\u003e[b]",
          "package": "hx",
          "signature": "[Either a b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e;\n   the even integer if \u003ccode\u003ex\u003c/code\u003e is equidistant between two integers\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "round",
          "package": "hx",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "round returns the nearest integer to the even integer if is equidistant between two integers",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "round",
          "normalized": "a-\u003eb",
          "package": "hx",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "runKleisli",
          "package": "hx",
          "signature": "a -\u003e m b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "runKleisli",
          "normalized": "a-\u003eb c",
          "package": "hx",
          "partial": "Kleisli",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:runKleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiplies a floating-point number by an integer power of the radix\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "scaleFloat",
          "package": "hx",
          "signature": "Int -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "multiplies floating-point number by an integer power of the radix",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "scaleFloat",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "hx",
          "partial": "Float",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:scaleFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "scanl",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "hx",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "scanl1",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Note that\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs.\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "scanr",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "hx",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "scanr1",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "second",
          "package": "hx",
          "signature": "a b c -\u003e a (d, b) (d, c)",
          "type": "method"
        },
        "index": {
          "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "second",
          "normalized": "a b c-\u003ea(d,b)(d,c)",
          "package": "hx",
          "signature": "a b c-\u003ea(d,b)(d,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegments the elements of a 2 levels deep list such that\n the segments contain at least the specified amount of elements,\n without breaking apart any subsegments.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "segment2",
          "package": "hx",
          "signature": "Int -\u003e [[a]] -\u003e [[a]]",
          "source": "src/Haskell-X.html#segment2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:segment2\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:segment2\"]"
        },
        "index": {
          "description": "Segments the elements of levels deep list such that the segments contain at least the specified amount of elements without breaking apart any subsegments",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "segment2",
          "normalized": "Int-\u003e[[a]]-\u003e[[a]]",
          "package": "hx",
          "signature": "Int-\u003e[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:segment2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegments the elements of a 3 levels deep list such that\n the segments contain at least the specified amount of elements,\n without breaking apart any subsegments.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "segment3",
          "package": "hx",
          "signature": "Int -\u003e [[[a]]] -\u003e [[a]]",
          "source": "src/Haskell-X.html#segment3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:segment3\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:segment3\"]"
        },
        "index": {
          "description": "Segments the elements of levels deep list such that the segments contain at least the specified amount of elements without breaking apart any subsegments",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "segment3",
          "normalized": "Int-\u003e[[[a]]]-\u003e[[a]]",
          "package": "hx",
          "signature": "Int-\u003e[[[a]]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:segment3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "seq",
          "package": "hx",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "hx",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sequence",
          "package": "hx",
          "signature": "[m a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "hx",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the structure from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sequenceA",
          "package": "hx",
          "signature": "t (f a) -\u003e f (t a)",
          "type": "method"
        },
        "index": {
          "description": "Evaluate each action in the structure from left to right and collect the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sequenceA",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "hx",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sequenceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the structure from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sequenceA_",
          "package": "hx",
          "signature": "t (f a) -\u003e f ()",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the structure from left to right and ignore the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sequenceA_",
          "normalized": "a(b c)-\u003eb()",
          "package": "hx",
          "signature": "t(f a)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sequenceA_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each monadic action in the structure from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sequence_",
          "package": "hx",
          "signature": "t (m a) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each monadic action in the structure from left to right and ignore the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sequence_",
          "normalized": "a(b c)-\u003eb()",
          "package": "hx",
          "signature": "t(m a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "show",
          "package": "hx",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "hx",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the character unchanged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "showChar",
          "package": "hx",
          "signature": "Char -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting Char to show function that simply prepends the character unchanged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "showChar",
          "normalized": "Char-\u003eShowS",
          "package": "hx",
          "partial": "Char",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:showChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "showList",
          "package": "hx",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "hx",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function that surrounds the inner show function with\n parentheses when the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "showParen",
          "package": "hx",
          "signature": "Bool -\u003e ShowS -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function that surrounds the inner show function with parentheses when the Bool parameter is True",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "showParen",
          "normalized": "Bool-\u003eShowS-\u003eShowS",
          "package": "hx",
          "partial": "Paren",
          "signature": "Bool-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:showParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the string unchanged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "showString",
          "package": "hx",
          "signature": "String -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting String to show function that simply prepends the string unchanged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "showString",
          "normalized": "String-\u003eShowS",
          "package": "hx",
          "partial": "String",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:showString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "shows",
          "package": "hx",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "equivalent to showsPrec with precedence of",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "shows",
          "normalized": "a-\u003eShowS",
          "package": "hx",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:shows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "showsPrec",
          "package": "hx",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "showsPrec",
          "package": "hx",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, scaled to lie in the open\n interval (\u003ccode\u003e-1\u003c/code\u003e,\u003ccode\u003e1\u003c/code\u003e), either \u003ccode\u003e0.0\u003c/code\u003e or of absolute value \u003ccode\u003e\u003e= 1/b\u003c/code\u003e,\n where \u003ccode\u003eb\u003c/code\u003e is the floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "significand",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "The first component of decodeFloat scaled to lie in the open interval either or of absolute value where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "significand",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:significand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "signum",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "signum",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "sin",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sin",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "sinh",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sinh",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "snd",
          "package": "hx",
          "signature": "a -\u003e Snd a",
          "source": "src/Haskell-X-Prelude.html#snd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "snd",
          "normalized": "a-\u003eSnd a",
          "package": "hx",
          "signature": "a-\u003eSnd a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "some",
          "package": "hx",
          "signature": "f a -\u003e f [a]",
          "type": "method"
        },
        "index": {
          "description": "One or more",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "some",
          "normalized": "a b-\u003ea[b]",
          "package": "hx",
          "signature": "f a-\u003ef[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e function implements a stable sorting algorithm.\n It is a special case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own comparison function.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sort",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sort function implements stable sorting algorithm It is special case of sortBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sortBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sortBy function is the non-overloaded version of sort",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e span (\u003c 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])\n span (\u003c 9) [1,2,3] == ([1,2,3],[])\n span (\u003c 0) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "span",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "span applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the list span span span span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e when \u003ccode\u003en\u003c/code\u003e is not \u003ccode\u003e_|_\u003c/code\u003e\n (\u003ccode\u003esplitAt _|_ xs = _|_\u003c/code\u003e).\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "splitAt",
          "package": "hx",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs when is not splitAt xs splitAt is an instance of the more general genericSplitAt in which may be of any integral type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "hx",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "sqrt",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sqrt",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e function drops the given prefix from a list.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list did not start with the prefix\n given, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the list after the prefix, if it does.\n\u003c/p\u003e\u003cpre\u003e stripPrefix \"foo\" \"foobar\" == Just \"bar\"\n stripPrefix \"foo\" \"foo\" == Just \"\"\n stripPrefix \"foo\" \"barfoo\" == Nothing\n stripPrefix \"foo\" \"barfoobaz\" == Nothing\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "stripPrefix",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e Maybe [a]",
          "type": "function"
        },
        "index": {
          "description": "The stripPrefix function drops the given prefix from list It returns Nothing if the list did not start with the prefix given or Just the list after the prefix if it does stripPrefix foo foobar Just bar stripPrefix foo foo Just stripPrefix foo barfoo Nothing stripPrefix foo barfoobaz Nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "stripPrefix",
          "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
          "package": "hx",
          "partial": "Prefix",
          "signature": "[a]-\u003e[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:stripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubsequences\u003c/a\u003e\u003c/code\u003e function returns the list of all subsequences of the argument.\n\u003c/p\u003e\u003cpre\u003e subsequences \"abc\" == [\"\",\"a\",\"b\",\"ab\",\"c\",\"ac\",\"bc\",\"abc\"]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "subsequences",
          "package": "hx",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The subsequences function returns the list of all subsequences of the argument subsequences abc ab ac bc abc",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "subsequences",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:subsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e-\u003c/code\u003e is treated specially in the Haskell grammar,\n \u003ccode\u003e(-\u003c/code\u003e \u003cem\u003ee\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is not a section, but an application of prefix negation.\n However, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is equivalent to the disallowed section.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "subtract",
          "package": "hx",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "the same as flip Because is treated specially in the Haskell grammar is not section but an application of prefix negation However subtract exp is equivalent to the disallowed section",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "succ",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the successor of value For numeric types succ adds",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of the numbers of a structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "sum",
          "package": "hx",
          "signature": "t a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The sum function computes the sum of the numbers of structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "sum",
          "normalized": "a b-\u003eb",
          "package": "hx",
          "signature": "t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the components of a pair.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "swap",
          "package": "hx",
          "signature": "(a, b) -\u003e (b, a)",
          "type": "function"
        },
        "index": {
          "description": "Swap the components of pair",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "swap",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "hx",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements after the head of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "tail",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of list which must be non-empty",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function returns all final segments of the argument,\n longest first.  For example,\n\u003c/p\u003e\u003cpre\u003e tails \"abc\" == [\"abc\", \"bc\", \"c\",\"\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003etails _|_ = _|_ : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "tails",
          "package": "hx",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The tails function returns all final segments of the argument longest first For example tails abc abc bc Note that tails has the following strictness property tails",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "tails",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hx",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a list \u003ccode\u003exs\u003c/code\u003e, returns the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e take 5 \"Hello World!\" == \"Hello\"\n take 3 [1,2,3,4,5] == [1,2,3]\n take 3 [1,2] == [1,2]\n take 3 [] == []\n take (-1) [1,2] == []\n take 0 [1,2] == []\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "take",
          "package": "hx",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "take applied to list xs returns the prefix of xs of length or xs itself if length xs take Hello World Hello take take take take take It is an instance of the more general genericTake in which may be of any integral type",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "take",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e takeWhile (\u003c 3) [1,2,3,4,1,2,3,4] == [1,2]\n takeWhile (\u003c 9) [1,2,3] == [1,2,3]\n takeWhile (\u003c 0) [1,2,3] == []\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "takeWhile",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and list xs returns the longest prefix possibly empty of xs of elements that satisfy takeWhile takeWhile takeWhile",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "tan",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "tan",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "tanh",
          "package": "hx",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "tanh",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception.  Exceptions may be thrown from purely\n functional code, but may only be caught within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "throw",
          "package": "hx",
          "signature": "e -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception Exceptions may be thrown from purely functional code but may only be caught within the IO monad",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "throw",
          "normalized": "a-\u003eb",
          "package": "hx",
          "signature": "e-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e that can only be used within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e has a type that is an instance of the type of \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e, the\n two functions are subtly different:\n\u003c/p\u003e\u003cpre\u003e throw e   `seq` x  ===\u003e throw e\n throwIO e `seq` x  ===\u003e x\n\u003c/pre\u003e\u003cp\u003eThe first example will cause the exception \u003ccode\u003ee\u003c/code\u003e to be raised,\n whereas the second one won't.  In fact, \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e will only cause\n an exception to be raised when it is used within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n The \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e variant should be used in preference to \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e to\n raise an exception within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad because it guarantees\n ordering with respect to other \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations, whereas \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\n does not.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "throwIO",
          "package": "hx",
          "signature": "e -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "variant of throw that can only be used within the IO monad Although throwIO has type that is an instance of the type of throw the two functions are subtly different throw seq throw throwIO seq The first example will cause the exception to be raised whereas the second one won In fact throwIO will only cause an exception to be raised when it is used within the IO monad The throwIO variant should be used in preference to throw to raise an exception within the IO monad because it guarantees ordering with respect to other IO operations whereas throw does not",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "throwIO",
          "normalized": "a-\u003eIO b",
          "package": "hx",
          "partial": "IO",
          "signature": "e-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:throwIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e raises an arbitrary exception in the target thread (GHC only).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e does not return until the exception has been raised in the\ntarget thread.\nThe calling thread can thus be certain that the target\nthread has received the exception.  This is a useful property to know\nwhen dealing with race conditions: eg. if there are two threads that\ncan kill each other, it is guaranteed that only one of the threads\nwill get to kill the other.\n\u003c/p\u003e\u003cp\u003eWhatever work the target thread was doing when the exception was\nraised is not lost: the computation is suspended until required by\nanother thread.\n\u003c/p\u003e\u003cp\u003eIf the target thread is currently making a foreign call, then the\nexception will not be raised (and hence \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e will not return)\nuntil the call has completed.  This is the case regardless of whether\nthe call is inside a \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e or not.  However, in GHC a foreign call\ncan be annotated as \u003ccode\u003einterruptible\u003c/code\u003e, in which case a \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e will\ncause the RTS to attempt to cause the call to return; see the GHC\ndocumentation for more details.\n\u003c/p\u003e\u003cp\u003eImportant note: the behaviour of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e differs from that described in\nthe paper \"Asynchronous exceptions in Haskell\"\n(\u003ca\u003ehttp://research.microsoft.com/~simonpj/Papers/asynch-exns.htm\u003c/a\u003e).\nIn the paper, \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e is non-blocking; but the library implementation adopts\na more synchronous design in which \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e does not return until the exception\nis received by the target thread.  The trade-off is discussed in Section 9 of the paper.\nLike any blocking operation, \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e is therefore interruptible (see Section 5.3 of\nthe paper).  Unlike other interruptible operations, however, \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e\nis \u003cem\u003ealways\u003c/em\u003e interruptible, even if it does not actually block.\n\u003c/p\u003e\u003cp\u003eThere is no guarantee that the exception will be delivered promptly,\nalthough the runtime will endeavour to ensure that arbitrary\ndelays don't occur.  In GHC, an exception can only be raised when a\nthread reaches a \u003cem\u003esafe point\u003c/em\u003e, where a safe point is where memory\nallocation occurs.  Some loops do not perform any memory allocation\ninside the loop and therefore cannot be interrupted by a \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the target of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e is the calling thread, then the behaviour\nis the same as \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e, except that the exception\nis thrown as an asynchronous exception.  This means that if there is\nan enclosing pure computation, which would be the case if the current\nIO operation is inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e, that\ncomputation is not permanently replaced by the exception, but is\nsuspended as if it had received an asynchronous exception.\n\u003c/p\u003e\u003cp\u003eNote that if \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e is called with the current thread as the\ntarget, the exception will be thrown even if the thread is currently\ninside \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "throwTo",
          "package": "hx",
          "signature": "ThreadId -\u003e e -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "throwTo raises an arbitrary exception in the target thread GHC only throwTo does not return until the exception has been raised in the target thread The calling thread can thus be certain that the target thread has received the exception This is useful property to know when dealing with race conditions eg if there are two threads that can kill each other it is guaranteed that only one of the threads will get to kill the other Whatever work the target thread was doing when the exception was raised is not lost the computation is suspended until required by another thread If the target thread is currently making foreign call then the exception will not be raised and hence throwTo will not return until the call has completed This is the case regardless of whether the call is inside mask or not However in GHC foreign call can be annotated as interruptible in which case throwTo will cause the RTS to attempt to cause the call to return see the GHC documentation for more details Important note the behaviour of throwTo differs from that described in the paper Asynchronous exceptions in Haskell http research.microsoft.com simonpj Papers asynch-exns.htm In the paper throwTo is non-blocking but the library implementation adopts more synchronous design in which throwTo does not return until the exception is received by the target thread The trade-off is discussed in Section of the paper Like any blocking operation throwTo is therefore interruptible see Section of the paper Unlike other interruptible operations however throwTo is always interruptible even if it does not actually block There is no guarantee that the exception will be delivered promptly although the runtime will endeavour to ensure that arbitrary delays don occur In GHC an exception can only be raised when thread reaches safe point where safe point is where memory allocation occurs Some loops do not perform any memory allocation inside the loop and therefore cannot be interrupted by throwTo If the target of throwTo is the calling thread then the behaviour is the same as throwIO except that the exception is thrown as an asynchronous exception This means that if there is an enclosing pure computation which would be the case if the current IO operation is inside unsafePerformIO or unsafeInterleaveIO that computation is not permanently replaced by the exception but is suspended as if it had received an asynchronous exception Note that if throwTo is called with the current thread as the target the exception will be thrown even if the thread is currently inside mask or uninterruptibleMask",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "throwTo",
          "normalized": "ThreadId-\u003ea-\u003eIO()",
          "package": "hx",
          "partial": "To",
          "signature": "ThreadId-\u003ee-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:throwTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining the constructor from a given datum.\n For proper terms, this is meant to be the top-level constructor.\n Primitive datatypes are here viewed as potentially infinite sets of\n values (i.e., constructors).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toConstr",
          "package": "hx",
          "signature": "a -\u003e Constr",
          "type": "method"
        },
        "index": {
          "description": "Obtaining the constructor from given datum For proper terms this is meant to be the top-level constructor Primitive datatypes are here viewed as potentially infinite sets of values i.e constructors",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toConstr",
          "normalized": "a-\u003eConstr",
          "package": "hx",
          "partial": "Constr",
          "signature": "a-\u003eConstr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toConstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toEnum",
          "package": "hx",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Convert from an Int",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toEnum",
          "normalized": "Int-\u003ea",
          "package": "hx",
          "partial": "Enum",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "toException",
          "package": "hx",
          "signature": "e -\u003e SomeException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toException",
          "normalized": "a-\u003eSomeException",
          "package": "hx",
          "partial": "Exception",
          "signature": "e-\u003eSomeException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toInteger",
          "package": "hx",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "conversion to Integer",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toInteger",
          "normalized": "a-\u003eInteger",
          "package": "hx",
          "partial": "Integer",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toList",
          "package": "hx",
          "signature": "t a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "List of elements of structure",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "hx",
          "partial": "List",
          "signature": "t a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding lower-case letter, if any.\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toLower",
          "package": "hx",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding lower-case letter if any Any other character is returned unchanged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toLower",
          "normalized": "Char-\u003eChar",
          "package": "hx",
          "partial": "Lower",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe rational equivalent of its real argument with full precision\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toRational",
          "package": "hx",
          "signature": "a -\u003e Rational",
          "type": "method"
        },
        "index": {
          "description": "the rational equivalent of its real argument with full precision",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toRational",
          "normalized": "a-\u003eRational",
          "package": "hx",
          "partial": "Rational",
          "signature": "a-\u003eRational",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding title-case or upper-case\n letter, if any.  (Title case differs from upper case only for a small\n number of ligature letters.)\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toTitle",
          "package": "hx",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding title-case or upper-case letter if any Title case differs from upper case only for small number of ligature letters Any other character is returned unchanged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toTitle",
          "normalized": "Char-\u003eChar",
          "package": "hx",
          "partial": "Title",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding upper-case letter, if any.\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "toUpper",
          "package": "hx",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding upper-case letter if any Any other character is returned unchanged",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "toUpper",
          "normalized": "Char-\u003eChar",
          "package": "hx",
          "partial": "Upper",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all occurences of a specific thing in a list of things another thing. \n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "tr",
          "package": "hx",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Haskell-X.html#tr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tr\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:tr\"]"
        },
        "index": {
          "description": "Replace all occurences of specific thing in list of things another thing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "tr",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "transpose",
          "package": "hx",
          "signature": "[[a]] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its argument For example transpose",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "transpose",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "hx",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of a structure to an action, evaluate\n these actions from left to right, and collect the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "traverse",
          "package": "hx",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "type": "method"
        },
        "index": {
          "description": "Map each element of structure to an action evaluate these actions from left to right and collect the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "hx",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of a structure to an action, evaluate\n these actions from left to right, and ignore the results.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "traverse_",
          "package": "hx",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f ()",
          "type": "function"
        },
        "index": {
          "description": "Map each element of structure to an action evaluate these actions from left to right and ignore the results",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "traverse_",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb()",
          "package": "hx",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "truncate",
          "package": "hx",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "truncate returns the integer nearest between zero and",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "truncate",
          "normalized": "a-\u003eb",
          "package": "hx",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, but returns an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result which is\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e if no exception of type \u003ccode\u003ee\u003c/code\u003e was raised, or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e ex)\u003c/code\u003e\n if an exception of type \u003ccode\u003ee\u003c/code\u003e was raised and its value is \u003ccode\u003eex\u003c/code\u003e.\n If any other type of exception is raised than it will be propogated\n up to the next enclosing exception handler.\n\u003c/p\u003e\u003cpre\u003e  try a = catch (Right `liftM` a) (return . Left)\n\u003c/pre\u003e\u003cp\u003eNote that \u003ca\u003eSystem.IO.Error\u003c/a\u003e also exports a function called\n \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e with a similar type to \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e,\n except that it catches only the IO and user families of exceptions\n (as required by the Haskell 98 \u003ccode\u003eIO\u003c/code\u003e module).\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "try",
          "package": "hx",
          "signature": "IO a -\u003e IO (Either e a)",
          "type": "function"
        },
        "index": {
          "description": "Similar to catch but returns an Either result which is Right if no exception of type was raised or Left ex if an exception of type was raised and its value is ex If any other type of exception is raised than it will be propogated up to the next enclosing exception handler try catch Right liftM return Left Note that System.IO.Error also exports function called try with similar type to try except that it catches only the IO and user families of exceptions as required by the Haskell IO module",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "try",
          "normalized": "IO a-\u003eIO(Either b a)",
          "package": "hx",
          "signature": "IO a-\u003eIO(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e that takes an exception predicate to select\n which exceptions are caught (c.f. \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e).  If the exception\n does not match the predicate, it is re-thrown.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "tryJust",
          "package": "hx",
          "signature": "(e -\u003e Maybe b) -\u003e IO a -\u003e IO (Either b a)",
          "type": "function"
        },
        "index": {
          "description": "variant of try that takes an exception predicate to select which exceptions are caught c.f catchJust If the exception does not match the predicate it is re-thrown",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003eIO c-\u003eIO(Either b c)",
          "package": "hx",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003eIO a-\u003eIO(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a value of type \u003ccode\u003ea\u003c/code\u003e and returns a concrete representation\n of that type.  The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by\n any instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, so that it is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as\n the argument.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "typeOf",
          "package": "hx",
          "signature": "a -\u003e TypeRep",
          "type": "method"
        },
        "index": {
          "description": "Takes value of type and returns concrete representation of that type The value of the argument should be ignored by any instance of Typeable so that it is safe to pass undefined as the argument",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "typeOf",
          "normalized": "a-\u003eTypeRep",
          "package": "hx",
          "partial": "Of",
          "signature": "a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "uncurry",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "uncurry converts curried function to function on pairs",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "hx",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "undefined",
          "package": "hx",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "undefined",
          "package": "hx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an Either contains the same types in Left and Right,\n unify it by dropping the Either wrapper.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "uneither",
          "package": "hx",
          "signature": "Either a a -\u003e a",
          "source": "src/Haskell-X.html#uneither",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uneither\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:uneither\"]"
        },
        "index": {
          "description": "If an Either contains the same types in Left and Right unify it by dropping the Either wrapper",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "uneither",
          "normalized": "Either a a-\u003ea",
          "package": "hx",
          "signature": "Either a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uneither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n reduces a list to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a list from\n a seed value.  The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the list and \u003ccode\u003eb\u003c/code\u003e is used as the next\n element in a recursive call.  For example,\n\u003c/p\u003e\u003cpre\u003e iterate f == unfoldr (\\x -\u003e Just (x, f x))\n\u003c/pre\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e can undo a \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e unfoldr f' (foldr f z xs) == xs\n\u003c/pre\u003e\u003cp\u003eif the following holds:\n\u003c/p\u003e\u003cpre\u003e f' (f x y) = Just (x,y)\n f' z       = Nothing\n\u003c/pre\u003e\u003cp\u003eA simple use of unfoldr:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n  [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unfoldr",
          "package": "hx",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is dual to foldr while foldr reduces list to summary value unfoldr builds list from seed value The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is prepended to the list and is used as the next element in recursive call For example iterate unfoldr Just In some cases unfoldr can undo foldr operation unfoldr foldr xs xs if the following holds Just Nothing simple use of unfoldr unfoldr if then Nothing else Just b-1",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e[b]",
          "package": "hx",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but the masked computation is not interruptible (see\n \u003ca\u003eControl.Exception\u003c/a\u003e).  THIS SHOULD BE USED WITH\n GREAT CARE, because if a thread executing in \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e\n blocks for any reason, then the thread (and possibly the program,\n if this is the main thread) will be unresponsive and unkillable.\n This function should only be necessary if you need to mask\n exceptions around an interruptible operation, and you can guarantee\n that the interruptible operation will only block for a short period\n of time.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "uninterruptibleMask",
          "package": "hx",
          "signature": "((forall a.  IO a -\u003e IO a) -\u003e IO b) -\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Like mask but the masked computation is not interruptible see Control.Exception THIS SHOULD BE USED WITH GREAT CARE because if thread executing in uninterruptibleMask blocks for any reason then the thread and possibly the program if this is the main thread will be unresponsive and unkillable This function should only be necessary if you need to mask exceptions around an interruptible operation and you can guarantee that the interruptible operation will only block for short period of time",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "uninterruptibleMask",
          "normalized": "((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO d",
          "package": "hx",
          "partial": "Mask",
          "signature": "((forall a. IO a-\u003eIO a)-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uninterruptibleMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action\n to the argument.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "uninterruptibleMask_",
          "package": "hx",
          "signature": "IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Like uninterruptibleMask but does not pass restore action to the argument",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "uninterruptibleMask_",
          "normalized": "IO a-\u003eIO a",
          "package": "hx",
          "partial": "Mask",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uninterruptibleMask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e function returns the list union of the two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e \"dog\" `union` \"cow\" == \"dogcw\"\n\u003c/pre\u003e\u003cp\u003eDuplicates, and elements of the first list, are removed from the\n the second list, but if the first list contains duplicates, so will\n the result.\n It is a special case of \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "union",
          "package": "hx",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The union function returns the list union of the two lists For example dog union cow dogcw Duplicates and elements of the first list are removed from the the second list but if the first list contains duplicates so will the result It is special case of unionBy which allows the programmer to supply their own equality test",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "union",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "hx",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unionBy",
          "package": "hx",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The unionBy function is the non-overloaded version of union",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "hx",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a list and leave out duplicates. Like \u003ccode\u003enub . sort\u003c/code\u003e but faster.\n\u003c/p\u003e",
          "module": "[\"Haskell.X.Prelude\",\"Haskell.X\"]",
          "name": "uniqSort",
          "package": "hx",
          "signature": "[a] -\u003e [a]",
          "source": "src/Haskell-X.html#uniqSort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uniqSort\",\"http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:uniqSort\"]"
        },
        "index": {
          "description": "Sort list and leave out duplicates Like nub sort but faster",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "uniqSort",
          "normalized": "[a]-\u003e[a]",
          "package": "hx",
          "partial": "Sort",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:uniqSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unless",
          "package": "hx",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "The reverse of when",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "hx",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unlines",
          "package": "hx",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "hx",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "until",
          "package": "hx",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "until yields the result of applying until holds",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "hx",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unwords",
          "package": "hx",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unwords is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "hx",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "unwrapArrow",
          "package": "hx",
          "signature": "a b c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unwrapArrow",
          "package": "hx",
          "partial": "Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unwrapArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "unwrapMonad",
          "package": "hx",
          "signature": "m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unwrapMonad",
          "package": "hx",
          "partial": "Monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unwrapMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs into a list of first components\n and a list of second components.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unzip",
          "package": "hx",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs into list of first components and list of second components",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "hx",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unzip3",
          "package": "hx",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "hx",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns four\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unzip4",
          "package": "hx",
          "signature": "[(a, b, c, d)] -\u003e ([a], [b], [c], [d])",
          "type": "function"
        },
        "index": {
          "description": "The unzip4 function takes list of quadruples and returns four lists analogous to unzip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unzip4",
          "normalized": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "package": "hx",
          "signature": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns five\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unzip5",
          "package": "hx",
          "signature": "[(a, b, c, d, e)] -\u003e ([a], [b], [c], [d], [e])",
          "type": "function"
        },
        "index": {
          "description": "The unzip5 function takes list of five-tuples and returns five lists analogous to unzip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unzip5",
          "normalized": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "package": "hx",
          "signature": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unzip6",
          "package": "hx",
          "signature": "[(a, b, c, d, e, f)] -\u003e ([a], [b], [c], [d], [e], [f])",
          "type": "function"
        },
        "index": {
          "description": "The unzip6 function takes list of six-tuples and returns six lists analogous to unzip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unzip6",
          "normalized": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "package": "hx",
          "signature": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip7\u003c/a\u003e\u003c/code\u003e function takes a list of seven-tuples and returns\n seven lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "unzip7",
          "package": "hx",
          "signature": "[(a, b, c, d, e, f, g)] -\u003e ([a], [b], [c], [d], [e], [f], [g])",
          "type": "function"
        },
        "index": {
          "description": "The unzip7 function takes list of seven-tuples and returns seven lists analogous to unzip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "unzip7",
          "normalized": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "package": "hx",
          "signature": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:unzip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value with a string describing the error.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class raises a\n \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e, thus:\n\u003c/p\u003e\u003cpre\u003e instance Monad IO where \n   ...\n   fail s = ioError (userError s)\n\u003c/pre\u003e",
          "module": "Haskell.X.Prelude",
          "name": "userError",
          "package": "hx",
          "signature": "String -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError value with string describing the error The fail method of the IO instance of the Monad class raises userError thus instance Monad IO where fail ioError userError",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "userError",
          "normalized": "String-\u003eIOError",
          "package": "hx",
          "partial": "Error",
          "signature": "String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:userError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003evoid\u003c/a\u003e\u003c/code\u003e value\u003c/code\u003e discards or ignores the result of evaluation, such as the return value of an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "void",
          "package": "hx",
          "signature": "f a -\u003e f ()",
          "type": "function"
        },
        "index": {
          "description": "void value discards or ignores the result of evaluation such as the return value of an IO action",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "void",
          "normalized": "a b-\u003ea()",
          "package": "hx",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "when",
          "package": "hx",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "hx",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "words",
          "package": "hx",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "words breaks string up into list of words which were delimited by white space",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "hx",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "writeFile",
          "package": "hx",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "hx",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X.Prelude",
          "name": "zeroArrow",
          "package": "hx",
          "signature": "a b c",
          "type": "method"
        },
        "index": {
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zeroArrow",
          "package": "hx",
          "partial": "Arrow",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zeroArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of corresponding pairs.\n If one input list is short, excess elements of the longer list are\n discarded.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zip",
          "package": "hx",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "type": "function"
        },
        "index": {
          "description": "zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "hx",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e takes three lists and returns a list of triples, analogous to\n \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zip3",
          "package": "hx",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "type": "function"
        },
        "index": {
          "description": "zip3 takes three lists and returns list of triples analogous to zip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "hx",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e function takes four lists and returns a list of\n quadruples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zip4",
          "package": "hx",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [(a, b, c, d)]",
          "type": "function"
        },
        "index": {
          "description": "The zip4 function takes four lists and returns list of quadruples analogous to zip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zip4",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "package": "hx",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e function takes five lists and returns a list of\n five-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zip5",
          "package": "hx",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [(a, b, c, d, e)]",
          "type": "function"
        },
        "index": {
          "description": "The zip5 function takes five lists and returns list of five-tuples analogous to zip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zip5",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "package": "hx",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e function takes six lists and returns a list of six-tuples,\n analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zip6",
          "package": "hx",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [(a, b, c, d, e, f)]",
          "type": "function"
        },
        "index": {
          "description": "The zip6 function takes six lists and returns list of six-tuples analogous to zip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zip6",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "package": "hx",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e function takes seven lists and returns a list of\n seven-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zip7",
          "package": "hx",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [(a, b, c, d, e, f, g)]",
          "type": "function"
        },
        "index": {
          "description": "The zip7 function takes seven lists and returns list of seven-tuples analogous to zip",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zip7",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "package": "hx",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given\n as the first argument, instead of a tupling function.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two lists to produce the\n list of corresponding sums.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWith",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two lists to produce the list of corresponding sums",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which combines three\n elements, as well as three lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWith3",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith3 function takes function which combines three elements as well as three lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e function takes a function which combines four\n elements, as well as four lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWith4",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith4 function takes function which combines four elements as well as four lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e function takes a function which combines five\n elements, as well as five lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWith5",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith5 function takes function which combines five elements as well as five lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e function takes a function which combines six\n elements, as well as six lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWith6",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith6 function takes function which combines six elements as well as six lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e function takes a function which combines seven\n elements, as well as seven lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWith7",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [h]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith7 function takes function which combines seven elements as well as seven lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e to arbitrary monads.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWithM",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "type": "function"
        },
        "index": {
          "description": "The zipWithM function generalizes zipWith to arbitrary monads",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithM_\u003c/a\u003e\u003c/code\u003e is the extension of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e which ignores the final result.\n\u003c/p\u003e",
          "module": "Haskell.X.Prelude",
          "name": "zipWithM_",
          "package": "hx",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "zipWithM is the extension of zipWithM which ignores the final result",
          "hierarchy": "Haskell X Prelude",
          "module": "Haskell.X.Prelude",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
          "package": "hx",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Prelude.html#v:zipWithM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe functions (use for debugging only).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskell.X.Unsafe",
          "name": "Unsafe",
          "package": "hx",
          "source": "src/Haskell-X-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafe functions use for debugging only",
          "hierarchy": "Haskell X Unsafe",
          "module": "Haskell.X.Unsafe",
          "name": "Unsafe",
          "package": "hx",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edebug x a\u003c/code\u003e shows \u003ccode\u003ex\u003c/code\u003e and returns \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Unsafe",
          "name": "debug",
          "package": "hx",
          "signature": "b -\u003e a -\u003e a",
          "source": "src/Haskell-X-Unsafe.html#debug",
          "type": "function"
        },
        "index": {
          "description": "debug shows and returns",
          "hierarchy": "Haskell X Unsafe",
          "module": "Haskell.X.Unsafe",
          "name": "debug",
          "normalized": "a-\u003eb-\u003eb",
          "package": "hx",
          "signature": "b-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Unsafe.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a shorthand for \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Unsafe",
          "name": "io",
          "package": "hx",
          "signature": "IO a -\u003e a",
          "source": "src/Haskell-X-Unsafe.html#io",
          "type": "function"
        },
        "index": {
          "description": "This is shorthand for unsafePerformIO",
          "hierarchy": "Haskell X Unsafe",
          "module": "Haskell.X.Unsafe",
          "name": "io",
          "normalized": "IO a-\u003ea",
          "package": "hx",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Unsafe.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etrace x\u003c/code\u003e shows and returns \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Haskell.X.Unsafe",
          "name": "trace",
          "package": "hx",
          "signature": "a -\u003e a",
          "source": "src/Haskell-X-Unsafe.html#trace",
          "type": "function"
        },
        "index": {
          "description": "trace shows and returns",
          "hierarchy": "Haskell X Unsafe",
          "module": "Haskell.X.Unsafe",
          "name": "trace",
          "normalized": "a-\u003ea",
          "package": "hx",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X-Unsafe.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell extra utility functions. Best imported by \u003ccode\u003eimport qualified Haskell.X as X\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskell.X",
          "name": "X",
          "package": "hx",
          "source": "src/Haskell-X.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell extra utility functions Best imported by import qualified Haskell.X as",
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "X",
          "package": "hx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X",
          "name": "Version",
          "package": "hx",
          "source": "src/Haskell-X.html#Version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "Version",
          "package": "hx",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X",
          "name": "Version",
          "package": "hx",
          "signature": "Version",
          "source": "src/Haskell-X.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "Version",
          "package": "hx",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ebreakLast xs == (init xs, last xs)\u003c/pre\u003e",
          "module": "Haskell.X",
          "name": "breakLast",
          "package": "hx",
          "signature": "[a] -\u003e ([a], a)",
          "source": "src/Haskell-X.html#breakLast",
          "type": "function"
        },
        "index": {
          "description": "breakLast xs init xs last xs",
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "breakLast",
          "normalized": "[a]-\u003e([a],a)",
          "package": "hx",
          "partial": "Last",
          "signature": "[a]-\u003e([a],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:breakLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many elements there are in a 1 level deep list.\n\u003c/p\u003e",
          "module": "Haskell.X",
          "name": "count1",
          "package": "hx",
          "signature": "[a] -\u003e Int",
          "source": "src/Haskell-X.html#count1",
          "type": "function"
        },
        "index": {
          "description": "Counts how many elements there are in level deep list",
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "count1",
          "normalized": "[a]-\u003eInt",
          "package": "hx",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:count1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X",
          "name": "parseVersion",
          "package": "hx",
          "signature": "String -\u003e [(Version, String)]",
          "source": "src/Haskell-X.html#parseVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "parseVersion",
          "normalized": "String-\u003e[(Version,String)]",
          "package": "hx",
          "partial": "Version",
          "signature": "String-\u003e[(Version,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:parseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X",
          "name": "versionBranch",
          "package": "hx",
          "signature": "[Integer]",
          "source": "src/Haskell-X.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "versionBranch",
          "normalized": "[Integer]",
          "package": "hx",
          "partial": "Branch",
          "signature": "[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:versionBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskell.X",
          "name": "versionTags",
          "package": "hx",
          "signature": "[String]",
          "source": "src/Haskell-X.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskell X",
          "module": "Haskell.X",
          "name": "versionTags",
          "normalized": "[String]",
          "package": "hx",
          "partial": "Tags",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hx/docs/Haskell-X.html#v:versionTags"
      }
    }
  ]
]