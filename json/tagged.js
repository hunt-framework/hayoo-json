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
        "word": "tagged"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Proxy",
          "name": "Proxy",
          "package": "tagged",
          "source": "src/Data-Proxy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Proxy",
          "module": "Data.Proxy",
          "name": "Proxy",
          "package": "tagged",
          "partial": "Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Proxy",
          "name": "Proxy",
          "package": "tagged",
          "source": "src/Data-Proxy.html#Proxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Proxy",
          "module": "Data.Proxy",
          "name": "Proxy",
          "package": "tagged",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Proxy",
          "name": "Proxy",
          "package": "tagged",
          "signature": "Proxy",
          "source": "src/Data-Proxy.html#Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Proxy",
          "module": "Data.Proxy",
          "name": "Proxy",
          "package": "tagged",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#v:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easProxyTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n It is usually used as an infix operator, and its typing forces its first\n argument (which is usually overloaded) to have the same type as the tag\n of the second.\n\u003c/p\u003e",
          "module": "Data.Proxy",
          "name": "asProxyTypeOf",
          "package": "tagged",
          "signature": "a -\u003e proxy a -\u003e a",
          "source": "src/Data-Proxy.html#asProxyTypeOf",
          "type": "function"
        },
        "index": {
          "description": "asProxyTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the tag of the second",
          "hierarchy": "Data Proxy",
          "module": "Data.Proxy",
          "name": "asProxyTypeOf",
          "normalized": "a-\u003eb a-\u003ea",
          "package": "tagged",
          "partial": "Proxy Type Of",
          "signature": "a-\u003eproxy a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#v:asProxyTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome times you need to change the proxy you have lying around.\n Idiomatic usage is to make a new combinator for the relationship\n between the proxies that you want to enforce, and define that\n combinator using \u003ccode\u003e\u003ca\u003ereproxy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data Succ n\n reproxySucc :: proxy n -\u003e Proxy (Succ n)\n reproxySucc = reproxy\n\u003c/pre\u003e",
          "module": "Data.Proxy",
          "name": "reproxy",
          "package": "tagged",
          "signature": "proxy s -\u003e Proxy t",
          "source": "src/Data-Proxy.html#reproxy",
          "type": "function"
        },
        "index": {
          "description": "Some times you need to change the proxy you have lying around Idiomatic usage is to make new combinator for the relationship between the proxies that you want to enforce and define that combinator using reproxy data Succ reproxySucc proxy Proxy Succ reproxySucc reproxy",
          "hierarchy": "Data Proxy",
          "module": "Data.Proxy",
          "name": "reproxy",
          "normalized": "a b-\u003eProxy c",
          "package": "tagged",
          "signature": "proxy s-\u003eProxy t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#v:reproxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tagged",
          "name": "Tagged",
          "package": "tagged",
          "source": "src/Data-Tagged.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "Tagged",
          "package": "tagged",
          "partial": "Tagged",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e s b\u003c/code\u003e value is a value \u003ccode\u003eb\u003c/code\u003e with an attached phantom type \u003ccode\u003es\u003c/code\u003e.\n This can be used in place of the more traditional but less safe idiom of\n passing in an undefined value with the type, because unlike an \u003ccode\u003e(s -\u003e b)\u003c/code\u003e,\n a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e s b\u003c/code\u003e can't try to use the argument \u003ccode\u003es\u003c/code\u003e as a real value.\n\u003c/p\u003e\u003cp\u003eMoreover, you don't have to rely on the compiler to inline away the extra\n argument, because the newtype is \"free\"\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "Tagged",
          "package": "tagged",
          "source": "src/Data-Tagged.html#Tagged",
          "type": "newtype"
        },
        "index": {
          "description": "Tagged value is value with an attached phantom type This can be used in place of the more traditional but less safe idiom of passing in an undefined value with the type because unlike an Tagged can try to use the argument as real value Moreover you don have to rely on the compiler to inline away the extra argument because the newtype is free",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "Tagged",
          "package": "tagged",
          "partial": "Tagged",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#t:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tagged",
          "name": "Tagged",
          "package": "tagged",
          "signature": "Tagged",
          "source": "src/Data-Tagged.html#Tagged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "Tagged",
          "package": "tagged",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTaggedTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e. It is usually used as an infix operator, and its typing forces its first argument (which is usually overloaded) to have the same type as the tag of the second.\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "asTaggedTypeOf",
          "package": "tagged",
          "signature": "s -\u003e tagged s b -\u003e s",
          "source": "src/Data-Tagged.html#asTaggedTypeOf",
          "type": "function"
        },
        "index": {
          "description": "asTaggedTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the tag of the second",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "asTaggedTypeOf",
          "normalized": "a-\u003eb a c-\u003ea",
          "package": "tagged",
          "partial": "Tagged Type Of",
          "signature": "s-\u003etagged s b-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:asTaggedTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e representation to a representation\n based on a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "proxy",
          "package": "tagged",
          "signature": "Tagged s a -\u003e proxy s -\u003e a",
          "source": "src/Data-Tagged.html#proxy",
          "type": "function"
        },
        "index": {
          "description": "Convert from Tagged representation to representation based on Proxy",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "proxy",
          "normalized": "Tagged a b-\u003ec a-\u003eb",
          "package": "tagged",
          "signature": "Tagged s a-\u003eproxy s-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome times you need to change the tag you have lying around.\n Idiomatic usage is to make a new combinator for the relationship between the\n tags that you want to enforce, and define that combinator using \u003ccode\u003e\u003ca\u003eretag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n data Succ n\n retagSucc :: \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e n a -\u003e \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e (Succ n) a\n retagSucc = \u003ccode\u003e\u003ca\u003eretag\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Tagged",
          "name": "retag",
          "package": "tagged",
          "signature": "Tagged s b -\u003e Tagged t b",
          "source": "src/Data-Tagged.html#retag",
          "type": "function"
        },
        "index": {
          "description": "Some times you need to change the tag you have lying around Idiomatic usage is to make new combinator for the relationship between the tags that you want to enforce and define that combinator using retag data Succ retagSucc Tagged Tagged Succ retagSucc retag",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "retag",
          "normalized": "Tagged a b-\u003eTagged c b",
          "package": "tagged",
          "signature": "Tagged s b-\u003eTagged t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:retag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag a value with its own type.\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "tagSelf",
          "package": "tagged",
          "signature": "a -\u003e Tagged a a",
          "source": "src/Data-Tagged.html#tagSelf",
          "type": "function"
        },
        "index": {
          "description": "Tag value with its own type",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "tagSelf",
          "normalized": "a-\u003eTagged a a",
          "package": "tagged",
          "partial": "Self",
          "signature": "a-\u003eTagged a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:tagSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tagged",
          "name": "unTagged",
          "package": "tagged",
          "signature": "b",
          "source": "src/Data-Tagged.html#Tagged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "unTagged",
          "package": "tagged",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:unTagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a representation based on a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "unproxy",
          "package": "tagged",
          "signature": "(Proxy s -\u003e a) -\u003e Tagged s a",
          "source": "src/Data-Tagged.html#unproxy",
          "type": "function"
        },
        "index": {
          "description": "Convert from representation based on Proxy to Tagged representation",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "unproxy",
          "normalized": "(Proxy a-\u003eb)-\u003eTagged a b",
          "package": "tagged",
          "signature": "(Proxy s-\u003ea)-\u003eTagged s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:unproxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eunTagged\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "untag",
          "package": "tagged",
          "signature": "Tagged s b -\u003e b",
          "source": "src/Data-Tagged.html#untag",
          "type": "function"
        },
        "index": {
          "description": "Alias for unTagged",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "untag",
          "normalized": "Tagged a b-\u003eb",
          "package": "tagged",
          "signature": "Tagged s b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:untag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euntagSelf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003euntag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tagged",
          "name": "untagSelf",
          "package": "tagged",
          "signature": "Tagged a a -\u003e a",
          "source": "src/Data-Tagged.html#untagSelf",
          "type": "function"
        },
        "index": {
          "description": "untagSelf is type-restricted version of untag",
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "untagSelf",
          "normalized": "Tagged a a-\u003ea",
          "package": "tagged",
          "partial": "Self",
          "signature": "Tagged a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:untagSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tagged",
          "name": "witness",
          "package": "tagged",
          "signature": "Tagged a b -\u003e a -\u003e b",
          "source": "src/Data-Tagged.html#witness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tagged",
          "module": "Data.Tagged",
          "name": "witness",
          "normalized": "Tagged a b-\u003ea-\u003eb",
          "package": "tagged",
          "signature": "Tagged a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:witness"
      }
    }
  ]
]