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
        "word": "profunctors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Collage",
          "name": "Collage",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Collage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Profunctor Collage",
          "module": "Data.Profunctor.Collage",
          "name": "Collage",
          "package": "profunctors",
          "partial": "Collage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Collage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cograph of a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Collage",
          "name": "Collage",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Collage.html#Collage",
          "type": "data"
        },
        "index": {
          "description": "The cograph of Profunctor",
          "hierarchy": "Data Profunctor Collage",
          "module": "Data.Profunctor.Collage",
          "name": "Collage",
          "package": "profunctors",
          "partial": "Collage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Collage.html#t:Collage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Collage",
          "name": "C",
          "package": "profunctors",
          "signature": "k b a -\u003e Collage k (L b) (R a)",
          "source": "src/Data-Profunctor-Collage.html#Collage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Collage",
          "module": "Data.Profunctor.Collage",
          "name": "C",
          "normalized": "a b c-\u003eCollage a(L b)(R c)",
          "package": "profunctors",
          "signature": "k b a-\u003eCollage k(L b)(R a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Collage.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Collage",
          "name": "L",
          "package": "profunctors",
          "signature": "(b -\u003e b') -\u003e Collage k (L b) (L b')",
          "source": "src/Data-Profunctor-Collage.html#Collage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Collage",
          "module": "Data.Profunctor.Collage",
          "name": "L",
          "normalized": "(a-\u003eb)-\u003eCollage c(L a)(L b)",
          "package": "profunctors",
          "signature": "(b-\u003eb')-\u003eCollage k(L b)(L b')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Collage.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Collage",
          "name": "R",
          "package": "profunctors",
          "signature": "(a -\u003e a') -\u003e Collage k (R a) (R a')",
          "source": "src/Data-Profunctor-Collage.html#Collage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Collage",
          "module": "Data.Profunctor.Collage",
          "name": "R",
          "normalized": "(a-\u003eb)-\u003eCollage c(R a)(R b)",
          "package": "profunctors",
          "signature": "(a-\u003ea')-\u003eCollage k(R a)(R a')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Collage.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Composition",
          "name": "Composition",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Composition.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "Composition",
          "package": "profunctors",
          "partial": "Composition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e p q\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition of the\n \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003es \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor a good explanation of \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition in Haskell\n see Dan Piponi's article:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://blog.sigfpe.com/2011/07/profunctors-in-haskell.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "Procompose",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Composition.html#Procompose",
          "type": "data"
        },
        "index": {
          "description": "Procompose is the Profunctor composition of the Profunctor and For good explanation of Profunctor composition in Haskell see Dan Piponi article http blog.sigfpe.com profunctors-in-haskell.html",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "Procompose",
          "package": "profunctors",
          "partial": "Procompose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#t:Procompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Composition",
          "name": "Procompose",
          "package": "profunctors",
          "signature": "p d a -\u003e q a c -\u003e Procompose p q d c",
          "source": "src/Data-Profunctor-Composition.html#Procompose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "Procompose",
          "normalized": "a b c-\u003ed c e-\u003eProcompose a d b e",
          "package": "profunctors",
          "partial": "Procompose",
          "signature": "p d a-\u003eq a c-\u003eProcompose p q d c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:Procompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe associator for \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition.\n\u003c/p\u003e\u003cp\u003eThis provides an \u003ccode\u003eIso\u003c/code\u003e for the \u003ccode\u003elens\u003c/code\u003e package that witnesses the\n isomorphism between \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e q r) a b\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e p q) r a b\u003c/code\u003e, which arises because\n \u003ccode\u003eProf\u003c/code\u003e is only a bicategory, rather than a strict 2-category.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "assoc",
          "package": "profunctors",
          "signature": "Iso (Procompose p (Procompose q r) a b) (Procompose x (Procompose y z) a b) (Procompose (Procompose p q) r a b) (Procompose (Procompose x y) z a b)",
          "source": "src/Data-Profunctor-Composition.html#assoc",
          "type": "function"
        },
        "index": {
          "description": "The associator for Profunctor composition This provides an Iso for the lens package that witnesses the isomorphism between Procompose Procompose and Procompose Procompose which arises because Prof is only bicategory rather than strict category",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "assoc",
          "package": "profunctors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a variant on \u003ccode\u003e\u003ca\u003edownstars\u003c/a\u003e\u003c/code\u003e that uses \u003ccode\u003e\u003ca\u003eCokleisli\u003c/a\u003e\u003c/code\u003e instead\n of \u003ccode\u003e\u003ca\u003eDownStar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecokleislis\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f =\u003e Iso' (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCokleisli\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003eCokleisli\u003c/a\u003e\u003c/code\u003e g) d c) (\u003ccode\u003e\u003ca\u003eCokleisli\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCompose\u003c/a\u003e\u003c/code\u003e g f) d c)\u003c/pre\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "cokleislis",
          "package": "profunctors",
          "signature": "Iso (Procompose (Cokleisli f) (Cokleisli g) d c) (Procompose (Cokleisli f') (Cokleisli g') d' c') (Cokleisli (Compose g f) d c) (Cokleisli (Compose g' f') d' c')",
          "source": "src/Data-Profunctor-Composition.html#cokleislis",
          "type": "function"
        },
        "index": {
          "description": "This is variant on downstars that uses Cokleisli instead of DownStar cokleislis Functor Iso Procompose Cokleisli Cokleisli Cokleisli Compose",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "cokleislis",
          "package": "profunctors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:cokleislis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition generalizes \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e composition in two ways.\n\u003c/p\u003e\u003cp\u003eThis is the second, which shows that \u003ccode\u003eexists b. (f a -\u003e b, g b -\u003e c)\u003c/code\u003e is\n isomorphic to \u003ccode\u003eg (f a) -\u003e c\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edownstars\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f =\u003e Iso' (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eDownStar\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003eDownStar\u003c/a\u003e\u003c/code\u003e g) d c) (\u003ccode\u003e\u003ca\u003eDownStar\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCompose\u003c/a\u003e\u003c/code\u003e g f) d c)\u003c/pre\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "downstars",
          "package": "profunctors",
          "signature": "Iso (Procompose (DownStar f) (DownStar g) d c) (Procompose (DownStar f') (DownStar g') d' c') (DownStar (Compose g f) d c) (DownStar (Compose g' f') d' c')",
          "source": "src/Data-Profunctor-Composition.html#downstars",
          "type": "function"
        },
        "index": {
          "description": "Profunctor composition generalizes Functor composition in two ways This is the second which shows that exists is isomorphic to downstars Functor Iso Procompose DownStar DownStar DownStar Compose",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "downstars",
          "package": "profunctors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:downstars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(-\u003e)\u003c/code\u003e functions as a lax identity for \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition.\n\u003c/p\u003e\u003cp\u003eThis provides an \u003ccode\u003eIso\u003c/code\u003e for the \u003ccode\u003elens\u003c/code\u003e package that witnesses the\n isomorphism between \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (-\u003e) q d c\u003c/code\u003e and \u003ccode\u003eq d c\u003c/code\u003e, which\n is the left identity law.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eidl\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e q =\u003e Iso' (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (-\u003e) q d c) (q d c)\n\u003c/pre\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "idl",
          "package": "profunctors",
          "signature": "Iso (Procompose (-\u003e) q d c) (Procompose (-\u003e) r d' c') (q d c) (r d' c')",
          "source": "src/Data-Profunctor-Composition.html#idl",
          "type": "function"
        },
        "index": {
          "description": "functions as lax identity for Profunctor composition This provides an Iso for the lens package that witnesses the isomorphism between Procompose and which is the left identity law idl Profunctor Iso Procompose",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "idl",
          "normalized": "Iso(Procompose(-\u003e)a b c)(Procompose(-\u003e)d e f)(a b c)(d e f)",
          "package": "profunctors",
          "signature": "Iso(Procompose(-\u003e)q d c)(Procompose(-\u003e)r d' c')(q d c)(r d' c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:idl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(-\u003e)\u003c/code\u003e functions as a lax identity for \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition.\n\u003c/p\u003e\u003cp\u003eThis provides an \u003ccode\u003eIso\u003c/code\u003e for the \u003ccode\u003elens\u003c/code\u003e package that witnesses the\n isomorphism between \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e q (-\u003e) d c\u003c/code\u003e and \u003ccode\u003eq d c\u003c/code\u003e, which\n is the right identity law.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eidr\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e q =\u003e Iso' (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e q (-\u003e) d c) (q d c)\n\u003c/pre\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "idr",
          "package": "profunctors",
          "signature": "Iso (Procompose q (-\u003e) d c) (Procompose r (-\u003e) d' c') (q d c) (r d' c')",
          "source": "src/Data-Profunctor-Composition.html#idr",
          "type": "function"
        },
        "index": {
          "description": "functions as lax identity for Profunctor composition This provides an Iso for the lens package that witnesses the isomorphism between Procompose and which is the right identity law idr Profunctor Iso Procompose",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "idr",
          "normalized": "Iso(Procompose a(-\u003e)b c)(Procompose d(-\u003e)e f)(a b c)(d e f)",
          "package": "profunctors",
          "signature": "Iso(Procompose q(-\u003e)d c)(Procompose r(-\u003e)d' c')(q d c)(r d' c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:idr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a variant on \u003ccode\u003e\u003ca\u003eupstars\u003c/a\u003e\u003c/code\u003e that uses \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eUpStar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ekleislis\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e f =\u003e Iso' (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e g) d c) (\u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCompose\u003c/a\u003e\u003c/code\u003e f g) d c)\u003c/pre\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "kleislis",
          "package": "profunctors",
          "signature": "Iso (Procompose (Kleisli f) (Kleisli g) d c) (Procompose (Kleisli f') (Kleisli g') d' c') (Kleisli (Compose f g) d c) (Kleisli (Compose f' g') d' c')",
          "source": "src/Data-Profunctor-Composition.html#kleislis",
          "type": "function"
        },
        "index": {
          "description": "This is variant on upstars that uses Kleisli instead of UpStar kleislis Monad Iso Procompose Kleisli Kleisli Kleisli Compose",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "kleislis",
          "package": "profunctors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:kleislis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Composition",
          "name": "procomposed",
          "package": "profunctors",
          "signature": "Procompose p p a b -\u003e p a b",
          "source": "src/Data-Profunctor-Composition.html#procomposed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "procomposed",
          "normalized": "Procompose a a b c-\u003ea b c",
          "package": "profunctors",
          "signature": "Procompose p p a b-\u003ep a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:procomposed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e composition generalizes \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e composition in two ways.\n\u003c/p\u003e\u003cp\u003eThis is the first, which shows that \u003ccode\u003eexists b. (a -\u003e f b, b -\u003e g c)\u003c/code\u003e is\n isomorphic to \u003ccode\u003ea -\u003e f (g c)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eupstars\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e f =\u003e Iso' (\u003ccode\u003e\u003ca\u003eProcompose\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eUpStar\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003eUpStar\u003c/a\u003e\u003c/code\u003e g) d c) (\u003ccode\u003e\u003ca\u003eUpStar\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCompose\u003c/a\u003e\u003c/code\u003e f g) d c)\u003c/pre\u003e",
          "module": "Data.Profunctor.Composition",
          "name": "upstars",
          "package": "profunctors",
          "signature": "Iso (Procompose (UpStar f) (UpStar g) d c) (Procompose (UpStar f') (UpStar g') d' c') (UpStar (Compose f g) d c) (UpStar (Compose f' g') d' c')",
          "source": "src/Data-Profunctor-Composition.html#upstars",
          "type": "function"
        },
        "index": {
          "description": "Profunctor composition generalizes Functor composition in two ways This is the first which shows that exists is isomorphic to upstars Functor Iso Procompose UpStar UpStar UpStar Compose",
          "hierarchy": "Data Profunctor Composition",
          "module": "Data.Profunctor.Composition",
          "name": "upstars",
          "package": "profunctors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Composition.html#v:upstars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rep",
          "name": "Rep",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Rep.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "Rep",
          "package": "profunctors",
          "partial": "Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eCorepresentable\u003c/a\u003e\u003c/code\u003e if there exists a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e such that\n \u003ccode\u003ep d c\u003c/code\u003e is isomorphic to \u003ccode\u003ef d -\u003e c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Rep",
          "name": "Corepresentable",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Rep.html#Corepresentable",
          "type": "class"
        },
        "index": {
          "description": "Profunctor is Corepresentable if there exists Functor such that is isomorphic to",
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "Corepresentable",
          "package": "profunctors",
          "partial": "Corepresentable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#t:Corepresentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if there exists a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e such that\n \u003ccode\u003ep d c\u003c/code\u003e is isomorphic to \u003ccode\u003ed -\u003e f c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Rep",
          "name": "Representable",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Rep.html#Representable",
          "type": "class"
        },
        "index": {
          "description": "Profunctor is Representable if there exists Functor such that is isomorphic to",
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "Representable",
          "package": "profunctors",
          "partial": "Representable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rep",
          "name": "corep",
          "package": "profunctors",
          "signature": "p d c -\u003e Corep p d -\u003e c",
          "source": "src/Data-Profunctor-Rep.html#corep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "corep",
          "normalized": "a b c-\u003eCorep a b-\u003ec",
          "package": "profunctors",
          "signature": "p d c-\u003eCorep p d-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#v:corep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rep",
          "name": "cotabulate",
          "package": "profunctors",
          "signature": "(Corep p d -\u003e c) -\u003e p d c",
          "source": "src/Data-Profunctor-Rep.html#cotabulate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "cotabulate",
          "normalized": "(Corep a b-\u003ec)-\u003ea b c",
          "package": "profunctors",
          "signature": "(Corep p d-\u003ec)-\u003ep d c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#v:cotabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecotabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecorep\u003c/a\u003e\u003c/code\u003e form two halves of an isomorphism.\n\u003c/p\u003e\u003cp\u003eThis can be used with the combinators from the \u003ccode\u003elens\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etabulated\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eCorep\u003c/a\u003e\u003c/code\u003e f p =\u003e \u003ccode\u003eIso'\u003c/code\u003e (f d -\u003e c) (p d c)\u003c/pre\u003e",
          "module": "Data.Profunctor.Rep",
          "name": "cotabulated",
          "package": "profunctors",
          "signature": "Iso (Corep p d -\u003e c) (Corep q d' -\u003e c') (p d c) (q d' c')",
          "source": "src/Data-Profunctor-Rep.html#cotabulated",
          "type": "function"
        },
        "index": {
          "description": "cotabulate and corep form two halves of an isomorphism This can be used with the combinators from the lens package tabulated Corep Iso",
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "cotabulated",
          "normalized": "Iso(Corep a b-\u003ec)(Corep d e-\u003ef)(a b c)(d e f)",
          "package": "profunctors",
          "signature": "Iso(Corep p d-\u003ec)(Corep q d'-\u003ec')(p d c)(q d' c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#v:cotabulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rep",
          "name": "rep",
          "package": "profunctors",
          "signature": "p d c -\u003e d -\u003e Rep p c",
          "source": "src/Data-Profunctor-Rep.html#rep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "rep",
          "normalized": "a b c-\u003eb-\u003eRep a c",
          "package": "profunctors",
          "signature": "p d c-\u003ed-\u003eRep p c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rep",
          "name": "tabulate",
          "package": "profunctors",
          "signature": "(d -\u003e Rep p c) -\u003e p d c",
          "source": "src/Data-Profunctor-Rep.html#tabulate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "tabulate",
          "normalized": "(a-\u003eRep b c)-\u003eb a c",
          "package": "profunctors",
          "signature": "(d-\u003eRep p c)-\u003ep d c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erep\u003c/a\u003e\u003c/code\u003e form two halves of an isomorphism.\n\u003c/p\u003e\u003cp\u003eThis can be used with the combinators from the \u003ccode\u003elens\u003c/code\u003e package.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etabulated\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e p =\u003e \u003ccode\u003eIso'\u003c/code\u003e (d -\u003e \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e p c) (p d c)\u003c/pre\u003e",
          "module": "Data.Profunctor.Rep",
          "name": "tabulated",
          "package": "profunctors",
          "signature": "Iso (d -\u003e Rep p c) (d' -\u003e Rep q c') (p d c) (q d' c')",
          "source": "src/Data-Profunctor-Rep.html#tabulated",
          "type": "function"
        },
        "index": {
          "description": "tabulate and rep form two halves of an isomorphism This can be used with the combinators from the lens package tabulated Representable Iso Rep",
          "hierarchy": "Data Profunctor Rep",
          "module": "Data.Profunctor.Rep",
          "name": "tabulated",
          "normalized": "Iso(a-\u003eRep b c)(d-\u003eRep e f)(b a c)(e d f)",
          "package": "profunctors",
          "signature": "Iso(d-\u003eRep p c)(d'-\u003eRep q c')(p d c)(q d' c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rep.html#v:tabulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rift",
          "name": "Rift",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Rift.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Profunctor Rift",
          "module": "Data.Profunctor.Rift",
          "name": "Rift",
          "package": "profunctors",
          "partial": "Rift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis represents the right Kan lift of a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eq\u003c/code\u003e along a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e in a limited version of the 2-category of Profunctors where the only object is the category Hask, 1-morphisms are profunctors composed and compose with Profunctor composition, and 2-morphisms are just natural transformations.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Rift",
          "name": "Rift",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Rift.html#Rift",
          "type": "newtype"
        },
        "index": {
          "description": "This represents the right Kan lift of Profunctor along Profunctor in limited version of the category of Profunctors where the only object is the category Hask morphisms are profunctors composed and compose with Profunctor composition and morphisms are just natural transformations",
          "hierarchy": "Data Profunctor Rift",
          "module": "Data.Profunctor.Rift",
          "name": "Rift",
          "package": "profunctors",
          "partial": "Rift",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rift.html#t:Rift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rift",
          "name": "Rift",
          "package": "profunctors",
          "signature": "Rift",
          "source": "src/Data-Profunctor-Rift.html#Rift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Rift",
          "module": "Data.Profunctor.Rift",
          "name": "Rift",
          "package": "profunctors",
          "partial": "Rift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rift.html#v:Rift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 2-morphism that defines a right Kan lift.\n\u003c/p\u003e\u003cp\u003eNote: When \u003ccode\u003ef\u003c/code\u003e is left adjoint to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRift\u003c/a\u003e\u003c/code\u003e f (-\u003e)\u003c/code\u003e then \u003ccode\u003e\u003ca\u003edecomposeRift\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003ecounit\u003c/code\u003e of the adjunction.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Rift",
          "name": "decomposeRift",
          "package": "profunctors",
          "signature": "Procompose q (Rift q p) a b -\u003e p a b",
          "source": "src/Data-Profunctor-Rift.html#decomposeRift",
          "type": "function"
        },
        "index": {
          "description": "The morphism that defines right Kan lift Note When is left adjoint to Rift then decomposeRift is the counit of the adjunction",
          "hierarchy": "Data Profunctor Rift",
          "module": "Data.Profunctor.Rift",
          "name": "decomposeRift",
          "normalized": "Procompose a(Rift a b)c d-\u003eb c d",
          "package": "profunctors",
          "partial": "Rift",
          "signature": "Procompose q(Rift q p)a b-\u003ep a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rift.html#v:decomposeRift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rift",
          "name": "precomposeRift",
          "package": "profunctors",
          "signature": "Procompose (Rift p (-\u003e)) q a b -\u003e Rift p q a b",
          "source": "src/Data-Profunctor-Rift.html#precomposeRift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Rift",
          "module": "Data.Profunctor.Rift",
          "name": "precomposeRift",
          "normalized": "Procompose(Rift a(-\u003e))b c d-\u003eRift a b c d",
          "package": "profunctors",
          "partial": "Rift",
          "signature": "Procompose(Rift p(-\u003e))q a b-\u003eRift p q a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rift.html#v:precomposeRift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Rift",
          "name": "runRift",
          "package": "profunctors",
          "signature": "forall x.  p x a -\u003e q x b",
          "source": "src/Data-Profunctor-Rift.html#Rift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Rift",
          "module": "Data.Profunctor.Rift",
          "name": "runRift",
          "normalized": "a b c d e-\u003ef d g",
          "package": "profunctors",
          "partial": "Rift",
          "signature": "forall x. p x a-\u003eq x b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Rift.html#v:runRift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Trace",
          "name": "Trace",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Trace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Profunctor Trace",
          "module": "Data.Profunctor.Trace",
          "name": "Trace",
          "package": "profunctors",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoend of \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eHask -\u003e Hask\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Profunctor.Trace",
          "name": "Trace",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Trace.html#Trace",
          "type": "data"
        },
        "index": {
          "description": "Coend of Profunctor from Hask Hask",
          "hierarchy": "Data Profunctor Trace",
          "module": "Data.Profunctor.Trace",
          "name": "Trace",
          "package": "profunctors",
          "partial": "Trace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor.Trace",
          "name": "Trace",
          "package": "profunctors",
          "signature": "f a a -\u003e Trace f",
          "source": "src/Data-Profunctor-Trace.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor Trace",
          "module": "Data.Profunctor.Trace",
          "name": "Trace",
          "normalized": "a b b-\u003eTrace a",
          "package": "profunctors",
          "partial": "Trace",
          "signature": "f a a-\u003eTrace f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Trace.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor a good explanation of profunctors in Haskell see Dan Piponi's article:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://blog.sigfpe.com/2011/07/profunctors-in-haskell.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module includes \u003cem\u003eunsafe\u003c/em\u003e composition operators that are useful in\n practice when it comes to generating optimal core in GHC.\n\u003c/p\u003e\u003cp\u003eIf you import this module you are taking upon yourself the obligation\n that you will only call the operators with \u003ccode\u003e#\u003c/code\u003e in their names with functions\n that are operationally identity such as \u003ccode\u003enewtype\u003c/code\u003e constructors or the field\n accessor of a \u003ccode\u003enewtype\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you are ever in doubt, use \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "Unsafe",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "For good explanation of profunctors in Haskell see Dan Piponi article http blog.sigfpe.com profunctors-in-haskell.html This module includes unsafe composition operators that are useful in practice when it comes to generating optimal core in GHC If you import this module you are taking upon yourself the obligation that you will only call the operators with in their names with functions that are operationally identity such as newtype constructors or the field accessor of newtype If you are ever in doubt use rmap or lmap",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "Unsafe",
          "package": "profunctors",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormally, the class \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e represents a profunctor\n from \u003ccode\u003eHask\u003c/code\u003e -\u003e \u003ccode\u003eHask\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIntuitively it is a bifunctor where the first argument is contravariant\n and the second argument is covariant.\n\u003c/p\u003e\u003cp\u003eYou can define a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e by either defining \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e or by defining both\n \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you supply \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e, you should ensure that:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eIf you supply \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e, ensure:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eIf you supply both, you should also ensure:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f g &#8801; \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003cp\u003eThese ensure by parametricity:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) (h \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e i) &#8801; \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e g h \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f i\n \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) &#8801; \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e g \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f\n \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) &#8801; \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e g\n\u003c/pre\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "Profunctor",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Unsafe.html#Profunctor",
          "type": "class"
        },
        "index": {
          "description": "Formally the class Profunctor represents profunctor from Hask Hask Intuitively it is bifunctor where the first argument is contravariant and the second argument is covariant You can define Profunctor by either defining dimap or by defining both lmap and rmap If you supply dimap you should ensure that dimap id id id If you supply lmap and rmap ensure lmap id id rmap id id If you supply both you should also ensure dimap lmap rmap These ensure by parametricity dimap dimap dimap lmap lmap lmap rmap rmap rmap",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "Profunctor",
          "package": "profunctors",
          "partial": "Profunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#t:Profunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly map the second argument argument\n covariantly with a function that is assumed\n operationally to be a cast, such as a newtype\n constructor.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e This operation is explicitly \u003cem\u003eunsafe\u003c/em\u003e\n since an implementation may choose to use\n \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e to implement this combinator\n and it has no way to validate that your function\n meets the requirements.\n\u003c/p\u003e\u003cp\u003eIf you implement this combinator with\n \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e, then you are taking upon yourself\n the obligation that you don't use GADT-like\n tricks to distinguish values.\n\u003c/p\u003e\u003cp\u003eIf you import \u003ca\u003eData.Profunctor.Unsafe\u003c/a\u003e you are\n taking upon yourself the obligation that you\n will only call this with a first argument that is\n operationally identity.\n\u003c/p\u003e\u003cp\u003eThe semantics of this function with respect to bottoms\n should match the default definition:\n\u003c/p\u003e\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e#.\u003c/a\u003e\u003c/code\u003e) &#8801; \\f -\u003e \\p -\u003e p `seq` \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e f p\u003c/pre\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "(#.)",
          "package": "profunctors",
          "signature": "(b -\u003e c) -\u003e p a b -\u003e p a c",
          "source": "src/Data-Profunctor-Unsafe.html#%23.",
          "type": "method"
        },
        "index": {
          "description": "Strictly map the second argument argument covariantly with function that is assumed operationally to be cast such as newtype constructor Note This operation is explicitly unsafe since an implementation may choose to use unsafeCoerce to implement this combinator and it has no way to validate that your function meets the requirements If you implement this combinator with unsafeCoerce then you are taking upon yourself the obligation that you don use GADT-like tricks to distinguish values If you import Data.Profunctor.Unsafe you are taking upon yourself the obligation that you will only call this with first argument that is operationally identity The semantics of this function with respect to bottoms should match the default definition seq rmap",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "(#.) #.",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "profunctors",
          "signature": "(b-\u003ec)-\u003ep a b-\u003ep a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#v:-35-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictly map the first argument argument\n contravariantly with a function that is assumed\n operationally to be a cast, such as a newtype\n constructor.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e This operation is explicitly \u003cem\u003eunsafe\u003c/em\u003e\n since an implementation may choose to use\n \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e to implement this combinator\n and it has no way to validate that your function\n meets the requirements.\n\u003c/p\u003e\u003cp\u003eIf you implement this combinator with\n \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e, then you are taking upon yourself\n the obligation that you don't use GADT-like\n tricks to distinguish values.\n\u003c/p\u003e\u003cp\u003eIf you import \u003ca\u003eData.Profunctor.Unsafe\u003c/a\u003e you are\n taking upon yourself the obligation that you\n will only call this with a second argument that is\n operationally identity.\n\u003c/p\u003e\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e.#\u003c/a\u003e\u003c/code\u003e) &#8801; \\p -\u003e p `seq` \\f -\u003e \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f p\u003c/pre\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "(.#)",
          "package": "profunctors",
          "signature": "p b c -\u003e (a -\u003e b) -\u003e p a c",
          "source": "src/Data-Profunctor-Unsafe.html#.%23",
          "type": "method"
        },
        "index": {
          "description": "Strictly map the first argument argument contravariantly with function that is assumed operationally to be cast such as newtype constructor Note This operation is explicitly unsafe since an implementation may choose to use unsafeCoerce to implement this combinator and it has no way to validate that your function meets the requirements If you implement this combinator with unsafeCoerce then you are taking upon yourself the obligation that you don use GADT-like tricks to distinguish values If you import Data.Profunctor.Unsafe you are taking upon yourself the obligation that you will only call this with second argument that is operationally identity seq lmap",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "(.#) .#",
          "normalized": "a b c-\u003e(d-\u003eb)-\u003ea d c",
          "package": "profunctors",
          "signature": "p b c-\u003e(a-\u003eb)-\u003ep a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#v:.-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over both arguments at the same time.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f g &#8801; \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "dimap",
          "package": "profunctors",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e p b c -\u003e p a d",
          "source": "src/Data-Profunctor-Unsafe.html#dimap",
          "type": "method"
        },
        "index": {
          "description": "Map over both arguments at the same time dimap lmap rmap",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "dimap",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "profunctors",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ep b c-\u003ep a d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#v:dimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the first argument contravariantly.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f &#8801; \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "lmap",
          "package": "profunctors",
          "signature": "(a -\u003e b) -\u003e p b c -\u003e p a c",
          "source": "src/Data-Profunctor-Unsafe.html#lmap",
          "type": "method"
        },
        "index": {
          "description": "Map the first argument contravariantly lmap dimap id",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "lmap",
          "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "profunctors",
          "signature": "(a-\u003eb)-\u003ep b c-\u003ep a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#v:lmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the second argument covariantly.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Profunctor.Unsafe",
          "name": "rmap",
          "package": "profunctors",
          "signature": "(b -\u003e c) -\u003e p a b -\u003e p a c",
          "source": "src/Data-Profunctor-Unsafe.html#rmap",
          "type": "method"
        },
        "index": {
          "description": "Map the second argument covariantly rmap dimap id",
          "hierarchy": "Data Profunctor Unsafe",
          "module": "Data.Profunctor.Unsafe",
          "name": "rmap",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "profunctors",
          "signature": "(b-\u003ec)-\u003ep a b-\u003ep a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor-Unsafe.html#v:rmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor a good explanation of profunctors in Haskell see Dan Piponi's article:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://blog.sigfpe.com/2011/07/profunctors-in-haskell.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor more information on strength and costrength, see:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://comonad.com/reader/2008/deriving-strength-from-laziness/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Profunctor",
          "name": "Profunctor",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html",
          "type": "module"
        },
        "index": {
          "description": "For good explanation of profunctors in Haskell see Dan Piponi article http blog.sigfpe.com profunctors-in-haskell.html For more information on strength and costrength see http comonad.com reader deriving-strength-from-laziness",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "Profunctor",
          "package": "profunctors",
          "partial": "Profunctor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalization of \u003ccode\u003e\u003ca\u003eDownStar\u003c/a\u003e\u003c/code\u003e of a \"costrong\" \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eleft'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eright'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e We use \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e as approximate costrength as needed.\n\u003c/p\u003e",
          "module": "Data.Profunctor",
          "name": "Choice",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html#Choice",
          "type": "class"
        },
        "index": {
          "description": "The generalization of DownStar of costrong Functor Minimal complete definition left or right Note We use traverse and extract as approximate costrength as needed",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "Choice",
          "package": "profunctors",
          "partial": "Choice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e (backwards).\n\u003c/p\u003e",
          "module": "Data.Profunctor",
          "name": "DownStar",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html#DownStar",
          "type": "newtype"
        },
        "index": {
          "description": "Lift Functor into Profunctor backwards",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "DownStar",
          "package": "profunctors",
          "partial": "Down Star",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:DownStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "Forget",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html#Forget",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "Forget",
          "package": "profunctors",
          "partial": "Forget",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:Forget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormally, the class \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e represents a profunctor\n from \u003ccode\u003eHask\u003c/code\u003e -\u003e \u003ccode\u003eHask\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIntuitively it is a bifunctor where the first argument is contravariant\n and the second argument is covariant.\n\u003c/p\u003e\u003cp\u003eYou can define a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e by either defining \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e or by defining both\n \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you supply \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e, you should ensure that:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eIf you supply \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e, ensure:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eIf you supply both, you should also ensure:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f g &#8801; \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003cp\u003eThese ensure by parametricity:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) (h \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e i) &#8801; \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e g h \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f i\n \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) &#8801; \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e g \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f\n \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) &#8801; \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e g\n\u003c/pre\u003e",
          "module": "Data.Profunctor",
          "name": "Profunctor",
          "package": "profunctors",
          "source": "src/Data-Profunctor-Unsafe.html#Profunctor",
          "type": "class"
        },
        "index": {
          "description": "Formally the class Profunctor represents profunctor from Hask Hask Intuitively it is bifunctor where the first argument is contravariant and the second argument is covariant You can define Profunctor by either defining dimap or by defining both lmap and rmap If you supply dimap you should ensure that dimap id id id If you supply lmap and rmap ensure lmap id id rmap id id If you supply both you should also ensure dimap lmap rmap These ensure by parametricity dimap dimap dimap lmap lmap lmap rmap rmap rmap",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "Profunctor",
          "package": "profunctors",
          "partial": "Profunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:Profunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizing upstar of a strong \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efirst'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esecond'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Every \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e in Haskell is strong.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://takeichi.ipl-lab.org/~asada/papers/arrStrMnd.pdf\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Profunctor",
          "name": "Strong",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html#Strong",
          "type": "class"
        },
        "index": {
          "description": "Generalizing upstar of strong Functor Minimal complete definition first or second Note Every Functor in Haskell is strong http takeichi.ipl-lab.org asada papers arrStrMnd.pdf",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "Strong",
          "package": "profunctors",
          "partial": "Strong",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:Strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e (forwards).\n\u003c/p\u003e",
          "module": "Data.Profunctor",
          "name": "UpStar",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html#UpStar",
          "type": "newtype"
        },
        "index": {
          "description": "Lift Functor into Profunctor forwards",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "UpStar",
          "package": "profunctors",
          "partial": "Up Star",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:UpStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an arrow for use as a \u003ccode\u003e\u003ca\u003eProfunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Profunctor",
          "name": "WrappedArrow",
          "package": "profunctors",
          "source": "src/Data-Profunctor.html#WrappedArrow",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap an arrow for use as Profunctor",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "WrappedArrow",
          "package": "profunctors",
          "partial": "Wrapped Arrow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#t:WrappedArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "DownStar",
          "package": "profunctors",
          "signature": "DownStar",
          "source": "src/Data-Profunctor.html#DownStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "DownStar",
          "package": "profunctors",
          "partial": "Down Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:DownStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "Forget",
          "package": "profunctors",
          "signature": "Forget",
          "source": "src/Data-Profunctor.html#Forget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "Forget",
          "package": "profunctors",
          "partial": "Forget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:Forget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "UpStar",
          "package": "profunctors",
          "signature": "UpStar",
          "source": "src/Data-Profunctor.html#UpStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "UpStar",
          "package": "profunctors",
          "partial": "Up Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:UpStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "WrapArrow",
          "package": "profunctors",
          "signature": "WrapArrow",
          "source": "src/Data-Profunctor.html#WrappedArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "WrapArrow",
          "package": "profunctors",
          "partial": "Wrap Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:WrapArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over both arguments at the same time.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f g &#8801; \u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e",
          "module": "Data.Profunctor",
          "name": "dimap",
          "package": "profunctors",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e p b c -\u003e p a d",
          "source": "src/Data-Profunctor-Unsafe.html#dimap",
          "type": "method"
        },
        "index": {
          "description": "Map over both arguments at the same time dimap lmap rmap",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "dimap",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "profunctors",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ep b c-\u003ep a d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:dimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "first'",
          "package": "profunctors",
          "signature": "p a b -\u003e p (a, c) (b, c)",
          "source": "src/Data-Profunctor.html#first%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "first'",
          "normalized": "a b c-\u003ea(b,d)(c,d)",
          "package": "profunctors",
          "signature": "p a b-\u003ep(a,c)(b,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:first-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "left'",
          "package": "profunctors",
          "signature": "p a b -\u003e p (Either a c) (Either b c)",
          "source": "src/Data-Profunctor.html#left%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "left'",
          "normalized": "a b c-\u003ea(Either b d)(Either c d)",
          "package": "profunctors",
          "signature": "p a b-\u003ep(Either a c)(Either b c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:left-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the first argument contravariantly.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elmap\u003c/a\u003e\u003c/code\u003e f &#8801; \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Profunctor",
          "name": "lmap",
          "package": "profunctors",
          "signature": "(a -\u003e b) -\u003e p b c -\u003e p a c",
          "source": "src/Data-Profunctor-Unsafe.html#lmap",
          "type": "method"
        },
        "index": {
          "description": "Map the first argument contravariantly lmap dimap id",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "lmap",
          "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "profunctors",
          "signature": "(a-\u003eb)-\u003ep b c-\u003ep a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:lmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "right'",
          "package": "profunctors",
          "signature": "p a b -\u003e p (Either c a) (Either c b)",
          "source": "src/Data-Profunctor.html#right%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "right'",
          "normalized": "a b c-\u003ea(Either d b)(Either d c)",
          "package": "profunctors",
          "signature": "p a b-\u003ep(Either c a)(Either c b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:right-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the second argument covariantly.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ermap\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003edimap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Profunctor",
          "name": "rmap",
          "package": "profunctors",
          "signature": "(b -\u003e c) -\u003e p a b -\u003e p a c",
          "source": "src/Data-Profunctor-Unsafe.html#rmap",
          "type": "method"
        },
        "index": {
          "description": "Map the second argument covariantly rmap dimap id",
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "rmap",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "profunctors",
          "signature": "(b-\u003ec)-\u003ep a b-\u003ep a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:rmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "runDownStar",
          "package": "profunctors",
          "signature": "f d -\u003e c",
          "source": "src/Data-Profunctor.html#DownStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "runDownStar",
          "normalized": "a b-\u003ec",
          "package": "profunctors",
          "partial": "Down Star",
          "signature": "f d-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:runDownStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "runForget",
          "package": "profunctors",
          "signature": "a -\u003e r",
          "source": "src/Data-Profunctor.html#Forget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "runForget",
          "normalized": "a-\u003eb",
          "package": "profunctors",
          "partial": "Forget",
          "signature": "a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:runForget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "runUpStar",
          "package": "profunctors",
          "signature": "d -\u003e f c",
          "source": "src/Data-Profunctor.html#UpStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "runUpStar",
          "normalized": "a-\u003eb c",
          "package": "profunctors",
          "partial": "Up Star",
          "signature": "d-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:runUpStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "second'",
          "package": "profunctors",
          "signature": "p a b -\u003e p (c, a) (c, b)",
          "source": "src/Data-Profunctor.html#second%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "second'",
          "normalized": "a b c-\u003ea(d,b)(d,c)",
          "package": "profunctors",
          "signature": "p a b-\u003ep(c,a)(c,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:second-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Profunctor",
          "name": "unwrapArrow",
          "package": "profunctors",
          "signature": "p a b",
          "source": "src/Data-Profunctor.html#WrappedArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Profunctor",
          "module": "Data.Profunctor",
          "name": "unwrapArrow",
          "package": "profunctors",
          "partial": "Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/profunctors/docs/Data-Profunctor.html#v:unwrapArrow"
      }
    }
  ]
]