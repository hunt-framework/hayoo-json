[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#",
      "description": {
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Trans-Tagged.html",
        "fct-type": "module",
        "title": "Tagged"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "Tagged",
        "normalized": "",
        "package": "tagged-transformer",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#t:TaggedT",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003eTagged\u003c/code\u003e s b\u003c/code\u003e value is a value \u003ccode\u003eb\u003c/code\u003e with an attached phantom type \u003ccode\u003es\u003c/code\u003e.\n This can be used in place of the more traditional but less safe idiom of\n passing in an undefined value with the type, because unlike an \u003ccode\u003e(s -\u003e b)\u003c/code\u003e,\n a \u003ccode\u003e\u003ccode\u003eTagged\u003c/code\u003e s b\u003c/code\u003e can't try to use the argument \u003ccode\u003es\u003c/code\u003e as a real value.\n\u003c/p\u003e\u003cp\u003eMoreover, you don't have to rely on the compiler to inline away the extra\n argument, because the newtype is \"free\"\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#TaggedT",
        "fct-type": "newtype",
        "title": "TaggedT"
      },
      "index": {
        "description": "Tagged value is value with an attached phantom type This can be used in place of the more traditional but less safe idiom of passing in an undefined value with the type because unlike an Tagged can try to use the argument as real value Moreover you don have to rely on the compiler to inline away the extra argument because the newtype is free",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "TaggedT",
        "normalized": "",
        "package": "tagged-transformer",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:TagT",
      "description": {
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "TagT",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#TaggedT",
        "fct-type": "function",
        "title": "TagT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "TagT",
        "normalized": "",
        "package": "tagged-transformer",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:asTaggedTypeOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTaggedTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e. It is usually used as an infix operator, and its typing forces its first argument (which is usually overloaded) to have the same type as the tag of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "s -\u003e TaggedT s m b -\u003e s",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#asTaggedTypeOf",
        "fct-type": "function",
        "title": "asTaggedTypeOf"
      },
      "index": {
        "description": "asTaggedTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the tag of the second",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "asTaggedTypeOf",
        "normalized": "a-\u003eTaggedT a b c-\u003ea",
        "package": "tagged-transformer",
        "partial": "Tagged Type Of",
        "signature": "s-\u003eTaggedT s m b-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:mapTaggedT",
      "description": {
        "fct-descr": "\u003cp\u003eLift an operation on underlying monad\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "(m a -\u003e n b) -\u003e TaggedT s m a -\u003e TaggedT s n b",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#mapTaggedT",
        "fct-type": "function",
        "title": "mapTaggedT"
      },
      "index": {
        "description": "Lift an operation on underlying monad",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "mapTaggedT",
        "normalized": "(a b-\u003ec d)-\u003eTaggedT e a b-\u003eTaggedT e c d",
        "package": "tagged-transformer",
        "partial": "Tagged",
        "signature": "(m a-\u003en b)-\u003eTaggedT s m a-\u003eTaggedT s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:reflected",
      "description": {
        "fct-descr": "\u003cp\u003eReflect reified value back in \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e context\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "TaggedT s m a",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#reflected",
        "fct-type": "function",
        "title": "reflected"
      },
      "index": {
        "description": "Reflect reified value back in Applicative context",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "reflected",
        "normalized": "",
        "package": "tagged-transformer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:reflectedM",
      "description": {
        "fct-descr": "\u003cp\u003eReflect reified value back in \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e context\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "TaggedT s m a",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#reflectedM",
        "fct-type": "function",
        "title": "reflectedM"
      },
      "index": {
        "description": "Reflect reified value back in Monad context",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "reflectedM",
        "normalized": "",
        "package": "tagged-transformer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:retag",
      "description": {
        "fct-descr": "\u003cp\u003eSome times you need to change the tag you have lying around.\n Idiomatic usage is to make a new combinator for the relationship between the\n tags that you want to enforce, and define that combinator using \u003ccode\u003e\u003ca\u003eretag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data Succ n\n retagSucc :: Tagged n a -\u003e Tagged (Succ n) a\n retagSucc = retag\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "TaggedT s m b -\u003e TaggedT t m b",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#retag",
        "fct-type": "function",
        "title": "retag"
      },
      "index": {
        "description": "Some times you need to change the tag you have lying around Idiomatic usage is to make new combinator for the relationship between the tags that you want to enforce and define that combinator using retag data Succ retagSucc Tagged Tagged Succ retagSucc retag",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "retag",
        "normalized": "TaggedT a b c-\u003eTaggedT d b c",
        "package": "tagged-transformer",
        "partial": "",
        "signature": "TaggedT s m b-\u003eTaggedT t m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eEasier to type alias for \u003ccode\u003e\u003ca\u003eTagT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "m b -\u003e TaggedT s m b",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Easier to type alias for TagT",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "tag",
        "normalized": "a b-\u003eTaggedT c a b",
        "package": "tagged-transformer",
        "partial": "",
        "signature": "m b-\u003eTaggedT s m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:untag",
      "description": {
        "fct-descr": "\u003cp\u003eEasier to type alias for \u003ccode\u003e\u003ca\u003euntagT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "TaggedT s m b -\u003e m b",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#untag",
        "fct-type": "function",
        "title": "untag"
      },
      "index": {
        "description": "Easier to type alias for untagT",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "untag",
        "normalized": "TaggedT a b c-\u003eb c",
        "package": "tagged-transformer",
        "partial": "",
        "signature": "TaggedT s m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged-transformer/docs/Data-Functor-Trans-Tagged.html#v:untagT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Trans.Tagged",
        "fct-package": "tagged-transformer",
        "fct-signature": "m b",
        "fct-source": "src/Data-Functor-Trans-Tagged.html#TaggedT",
        "fct-type": "function",
        "title": "untagT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Trans Tagged",
        "module": "Data.Functor.Trans.Tagged",
        "name": "untagT",
        "normalized": "",
        "package": "tagged-transformer",
        "partial": "",
        "signature": ""
      }
    }
  }
]