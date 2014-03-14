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
        "word": "tagged-transformer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Trans.Tagged",
          "name": "Tagged",
          "package": "tagged-transformer",
          "source": "src/Data-Functor-Trans-Tagged.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "Tagged",
          "package": "tagged-transformer",
          "partial": "Tagged",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003eTagged\u003c/code\u003e s b\u003c/code\u003e value is a value \u003ccode\u003eb\u003c/code\u003e with an attached phantom type \u003ccode\u003es\u003c/code\u003e.\n This can be used in place of the more traditional but less safe idiom of\n passing in an undefined value with the type, because unlike an \u003ccode\u003e(s -\u003e b)\u003c/code\u003e,\n a \u003ccode\u003e\u003ccode\u003eTagged\u003c/code\u003e s b\u003c/code\u003e can't try to use the argument \u003ccode\u003es\u003c/code\u003e as a real value.\n\u003c/p\u003e\u003cp\u003eMoreover, you don't have to rely on the compiler to inline away the extra\n argument, because the newtype is \"free\"\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "TaggedT",
          "package": "tagged-transformer",
          "source": "src/Data-Functor-Trans-Tagged.html#TaggedT",
          "type": "newtype"
        },
        "index": {
          "description": "Tagged value is value with an attached phantom type This can be used in place of the more traditional but less safe idiom of passing in an undefined value with the type because unlike an Tagged can try to use the argument as real value Moreover you don have to rely on the compiler to inline away the extra argument because the newtype is free",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "TaggedT",
          "package": "tagged-transformer",
          "partial": "Tagged",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#t:TaggedT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Trans.Tagged",
          "name": "TagT",
          "package": "tagged-transformer",
          "signature": "TagT",
          "source": "src/Data-Functor-Trans-Tagged.html#TaggedT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "TagT",
          "package": "tagged-transformer",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:TagT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTaggedTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e. It is usually used as an infix operator, and its typing forces its first argument (which is usually overloaded) to have the same type as the tag of the second.\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "asTaggedTypeOf",
          "package": "tagged-transformer",
          "signature": "s -\u003e TaggedT s m b -\u003e s",
          "source": "src/Data-Functor-Trans-Tagged.html#asTaggedTypeOf",
          "type": "function"
        },
        "index": {
          "description": "asTaggedTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the tag of the second",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "asTaggedTypeOf",
          "normalized": "a-\u003eTaggedT a b c-\u003ea",
          "package": "tagged-transformer",
          "partial": "Tagged Type Of",
          "signature": "s-\u003eTaggedT s m b-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:asTaggedTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an operation on underlying monad\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "mapTaggedT",
          "package": "tagged-transformer",
          "signature": "(m a -\u003e n b) -\u003e TaggedT s m a -\u003e TaggedT s n b",
          "source": "src/Data-Functor-Trans-Tagged.html#mapTaggedT",
          "type": "function"
        },
        "index": {
          "description": "Lift an operation on underlying monad",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "mapTaggedT",
          "normalized": "(a b-\u003ec d)-\u003eTaggedT e a b-\u003eTaggedT e c d",
          "package": "tagged-transformer",
          "partial": "Tagged",
          "signature": "(m a-\u003en b)-\u003eTaggedT s m a-\u003eTaggedT s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:mapTaggedT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflect reified value back in \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e context\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "reflected",
          "package": "tagged-transformer",
          "signature": "TaggedT s m a",
          "source": "src/Data-Functor-Trans-Tagged.html#reflected",
          "type": "function"
        },
        "index": {
          "description": "Reflect reified value back in Applicative context",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "reflected",
          "package": "tagged-transformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:reflected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflect reified value back in \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e context\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "reflectedM",
          "package": "tagged-transformer",
          "signature": "TaggedT s m a",
          "source": "src/Data-Functor-Trans-Tagged.html#reflectedM",
          "type": "function"
        },
        "index": {
          "description": "Reflect reified value back in Monad context",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "reflectedM",
          "package": "tagged-transformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:reflectedM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome times you need to change the tag you have lying around.\n Idiomatic usage is to make a new combinator for the relationship between the\n tags that you want to enforce, and define that combinator using \u003ccode\u003e\u003ca\u003eretag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data Succ n\n retagSucc :: Tagged n a -\u003e Tagged (Succ n) a\n retagSucc = retag\n\u003c/pre\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "retag",
          "package": "tagged-transformer",
          "signature": "TaggedT s m b -\u003e TaggedT t m b",
          "source": "src/Data-Functor-Trans-Tagged.html#retag",
          "type": "function"
        },
        "index": {
          "description": "Some times you need to change the tag you have lying around Idiomatic usage is to make new combinator for the relationship between the tags that you want to enforce and define that combinator using retag data Succ retagSucc Tagged Tagged Succ retagSucc retag",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "retag",
          "normalized": "TaggedT a b c-\u003eTaggedT d b c",
          "package": "tagged-transformer",
          "signature": "TaggedT s m b-\u003eTaggedT t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:retag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEasier to type alias for \u003ccode\u003e\u003ca\u003eTagT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "tag",
          "package": "tagged-transformer",
          "signature": "m b -\u003e TaggedT s m b",
          "source": "src/Data-Functor-Trans-Tagged.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Easier to type alias for TagT",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "tag",
          "normalized": "a b-\u003eTaggedT c a b",
          "package": "tagged-transformer",
          "signature": "m b-\u003eTaggedT s m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEasier to type alias for \u003ccode\u003e\u003ca\u003euntagT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Functor.Trans.Tagged",
          "name": "untag",
          "package": "tagged-transformer",
          "signature": "TaggedT s m b -\u003e m b",
          "source": "src/Data-Functor-Trans-Tagged.html#untag",
          "type": "function"
        },
        "index": {
          "description": "Easier to type alias for untagT",
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "untag",
          "normalized": "TaggedT a b c-\u003eb c",
          "package": "tagged-transformer",
          "signature": "TaggedT s m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:untag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Trans.Tagged",
          "name": "untagT",
          "package": "tagged-transformer",
          "signature": "m b",
          "source": "src/Data-Functor-Trans-Tagged.html#TaggedT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Trans Tagged",
          "module": "Data.Functor.Trans.Tagged",
          "name": "untagT",
          "package": "tagged-transformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:untagT"
      }
    }
  ]
]