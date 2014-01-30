[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#",
      "description": {
        "fct-module": "Data.Proxy",
        "fct-package": "tagged",
        "fct-signature": "module",
        "fct-source": "src/Data-Proxy.html",
        "fct-type": "module",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Proxy",
        "module": "Data.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "tagged",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#t:Proxy",
      "description": {
        "fct-module": "Data.Proxy",
        "fct-package": "tagged",
        "fct-signature": "data",
        "fct-source": "src/Data-Proxy.html#Proxy",
        "fct-type": "data",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Proxy",
        "module": "Data.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "tagged",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#v:Proxy",
      "description": {
        "fct-module": "Data.Proxy",
        "fct-package": "tagged",
        "fct-signature": "Proxy",
        "fct-source": "src/Data-Proxy.html#Proxy",
        "fct-type": "function",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Proxy",
        "module": "Data.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "tagged",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#v:asProxyTypeOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easProxyTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n It is usually used as an infix operator, and its typing forces its first\n argument (which is usually overloaded) to have the same type as the tag\n of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Proxy",
        "fct-package": "tagged",
        "fct-signature": "a -\u003e proxy a -\u003e a",
        "fct-source": "src/Data-Proxy.html#asProxyTypeOf",
        "fct-type": "function",
        "title": "asProxyTypeOf"
      },
      "index": {
        "description": "asProxyTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the tag of the second",
        "hierarchy": "Data Proxy",
        "module": "Data.Proxy",
        "name": "asProxyTypeOf",
        "normalized": "a-\u003eb a-\u003ea",
        "package": "tagged",
        "partial": "Proxy Type Of",
        "signature": "a-\u003eproxy a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Proxy.html#v:reproxy",
      "description": {
        "fct-descr": "\u003cp\u003eSome times you need to change the proxy you have lying around.\n Idiomatic usage is to make a new combinator for the relationship\n between the proxies that you want to enforce, and define that\n combinator using \u003ccode\u003e\u003ca\u003ereproxy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data Succ n\n reproxySucc :: proxy n -\u003e Proxy (Succ n)\n reproxySucc = reproxy\n\u003c/pre\u003e",
        "fct-module": "Data.Proxy",
        "fct-package": "tagged",
        "fct-signature": "proxy s -\u003e Proxy t",
        "fct-source": "src/Data-Proxy.html#reproxy",
        "fct-type": "function",
        "title": "reproxy"
      },
      "index": {
        "description": "Some times you need to change the proxy you have lying around Idiomatic usage is to make new combinator for the relationship between the proxies that you want to enforce and define that combinator using reproxy data Succ reproxySucc proxy Proxy Succ reproxySucc reproxy",
        "hierarchy": "Data Proxy",
        "module": "Data.Proxy",
        "name": "reproxy",
        "normalized": "a b-\u003eProxy c",
        "package": "tagged",
        "partial": "",
        "signature": "proxy s-\u003eProxy t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#",
      "description": {
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "module",
        "fct-source": "src/Data-Tagged.html",
        "fct-type": "module",
        "title": "Tagged"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "Tagged",
        "normalized": "",
        "package": "tagged",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#t:Tagged",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e s b\u003c/code\u003e value is a value \u003ccode\u003eb\u003c/code\u003e with an attached phantom type \u003ccode\u003es\u003c/code\u003e.\n This can be used in place of the more traditional but less safe idiom of\n passing in an undefined value with the type, because unlike an \u003ccode\u003e(s -\u003e b)\u003c/code\u003e,\n a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e s b\u003c/code\u003e can't try to use the argument \u003ccode\u003es\u003c/code\u003e as a real value.\n\u003c/p\u003e\u003cp\u003eMoreover, you don't have to rely on the compiler to inline away the extra\n argument, because the newtype is \"free\"\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tagged.html#Tagged",
        "fct-type": "newtype",
        "title": "Tagged"
      },
      "index": {
        "description": "Tagged value is value with an attached phantom type This can be used in place of the more traditional but less safe idiom of passing in an undefined value with the type because unlike an Tagged can try to use the argument as real value Moreover you don have to rely on the compiler to inline away the extra argument because the newtype is free",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "Tagged",
        "normalized": "",
        "package": "tagged",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:Tagged",
      "description": {
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "Tagged",
        "fct-source": "src/Data-Tagged.html#Tagged",
        "fct-type": "function",
        "title": "Tagged"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "Tagged",
        "normalized": "",
        "package": "tagged",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:asTaggedTypeOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTaggedTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e. It is usually used as an infix operator, and its typing forces its first argument (which is usually overloaded) to have the same type as the tag of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "s -\u003e tagged s b -\u003e s",
        "fct-source": "src/Data-Tagged.html#asTaggedTypeOf",
        "fct-type": "function",
        "title": "asTaggedTypeOf"
      },
      "index": {
        "description": "asTaggedTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the tag of the second",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "asTaggedTypeOf",
        "normalized": "a-\u003eb a c-\u003ea",
        "package": "tagged",
        "partial": "Tagged Type Of",
        "signature": "s-\u003etagged s b-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:proxy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e representation to a representation\n based on a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "Tagged s a -\u003e proxy s -\u003e a",
        "fct-source": "src/Data-Tagged.html#proxy",
        "fct-type": "function",
        "title": "proxy"
      },
      "index": {
        "description": "Convert from Tagged representation to representation based on Proxy",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "proxy",
        "normalized": "Tagged a b-\u003ec a-\u003eb",
        "package": "tagged",
        "partial": "",
        "signature": "Tagged s a-\u003eproxy s-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:retag",
      "description": {
        "fct-descr": "\u003cp\u003eSome times you need to change the tag you have lying around.\n Idiomatic usage is to make a new combinator for the relationship between the\n tags that you want to enforce, and define that combinator using \u003ccode\u003e\u003ca\u003eretag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n data Succ n\n retagSucc :: \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e n a -\u003e \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e (Succ n) a\n retagSucc = \u003ccode\u003e\u003ca\u003eretag\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "Tagged s b -\u003e Tagged t b",
        "fct-source": "src/Data-Tagged.html#retag",
        "fct-type": "function",
        "title": "retag"
      },
      "index": {
        "description": "Some times you need to change the tag you have lying around Idiomatic usage is to make new combinator for the relationship between the tags that you want to enforce and define that combinator using retag data Succ retagSucc Tagged Tagged Succ retagSucc retag",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "retag",
        "normalized": "Tagged a b-\u003eTagged c b",
        "package": "tagged",
        "partial": "",
        "signature": "Tagged s b-\u003eTagged t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:tagSelf",
      "description": {
        "fct-descr": "\u003cp\u003eTag a value with its own type.\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "a -\u003e Tagged a a",
        "fct-source": "src/Data-Tagged.html#tagSelf",
        "fct-type": "function",
        "title": "tagSelf"
      },
      "index": {
        "description": "Tag value with its own type",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "tagSelf",
        "normalized": "a-\u003eTagged a a",
        "package": "tagged",
        "partial": "Self",
        "signature": "a-\u003eTagged a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:unTagged",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "b",
        "fct-source": "src/Data-Tagged.html#Tagged",
        "fct-type": "function",
        "title": "unTagged"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "unTagged",
        "normalized": "",
        "package": "tagged",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:unproxy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a representation based on a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "(Proxy s -\u003e a) -\u003e Tagged s a",
        "fct-source": "src/Data-Tagged.html#unproxy",
        "fct-type": "function",
        "title": "unproxy"
      },
      "index": {
        "description": "Convert from representation based on Proxy to Tagged representation",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "unproxy",
        "normalized": "(Proxy a-\u003eb)-\u003eTagged a b",
        "package": "tagged",
        "partial": "",
        "signature": "(Proxy s-\u003ea)-\u003eTagged s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:untag",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eunTagged\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "Tagged s b -\u003e b",
        "fct-source": "src/Data-Tagged.html#untag",
        "fct-type": "function",
        "title": "untag"
      },
      "index": {
        "description": "Alias for unTagged",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "untag",
        "normalized": "Tagged a b-\u003eb",
        "package": "tagged",
        "partial": "",
        "signature": "Tagged s b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:untagSelf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euntagSelf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003euntag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "Tagged a a -\u003e a",
        "fct-source": "src/Data-Tagged.html#untagSelf",
        "fct-type": "function",
        "title": "untagSelf"
      },
      "index": {
        "description": "untagSelf is type-restricted version of untag",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "untagSelf",
        "normalized": "Tagged a a-\u003ea",
        "package": "tagged",
        "partial": "Self",
        "signature": "Tagged a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagged/docs/Data-Tagged.html#v:witness",
      "description": {
        "fct-module": "Data.Tagged",
        "fct-package": "tagged",
        "fct-signature": "Tagged a b -\u003e a -\u003e b",
        "fct-source": "src/Data-Tagged.html#witness",
        "fct-type": "function",
        "title": "witness"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tagged",
        "module": "Data.Tagged",
        "name": "witness",
        "normalized": "Tagged a b-\u003ea-\u003eb",
        "package": "tagged",
        "partial": "",
        "signature": "Tagged a b-\u003ea-\u003eb"
      }
    }
  }
]