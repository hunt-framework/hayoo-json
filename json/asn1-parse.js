[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser combinator for ASN1 Stream.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "module",
        "fct-source": "src/Data-ASN1-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "parser combinator for ASN1 Stream",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "asn1-parse",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#t:ParseASN1",
      "description": {
        "fct-descr": "\u003cp\u003eParse ASN1 Monad\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "data",
        "fct-source": "src/Data-ASN1-Parse.html#ParseASN1",
        "fct-type": "data",
        "title": "ParseASN1"
      },
      "index": {
        "description": "Parse ASN1 Monad",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "ParseASN1",
        "normalized": "",
        "package": "asn1-parse",
        "partial": "Parse ASN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getMany",
      "description": {
        "fct-descr": "\u003cp\u003eget many elements until there's nothing left\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ParseASN1 a -\u003e ParseASN1 [a]",
        "fct-source": "src/Data-ASN1-Parse.html#getMany",
        "fct-type": "function",
        "title": "getMany"
      },
      "index": {
        "description": "get many elements until there nothing left",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "getMany",
        "normalized": "ParseASN a-\u003eParseASN[a]",
        "package": "asn1-parse",
        "partial": "Many",
        "signature": "ParseASN a-\u003eParseASN[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNext",
      "description": {
        "fct-descr": "\u003cp\u003eget next element from the stream\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ParseASN1 ASN1",
        "fct-source": "src/Data-ASN1-Parse.html#getNext",
        "fct-type": "function",
        "title": "getNext"
      },
      "index": {
        "description": "get next element from the stream",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "getNext",
        "normalized": "",
        "package": "asn1-parse",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNextContainer",
      "description": {
        "fct-descr": "\u003cp\u003eget next container of specified type and return all its elements\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ASN1ConstructionType -\u003e ParseASN1 [ASN1]",
        "fct-source": "src/Data-ASN1-Parse.html#getNextContainer",
        "fct-type": "function",
        "title": "getNextContainer"
      },
      "index": {
        "description": "get next container of specified type and return all its elements",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "getNextContainer",
        "normalized": "ASN ConstructionType-\u003eParseASN[ASN]",
        "package": "asn1-parse",
        "partial": "Next Container",
        "signature": "ASN ConstructionType-\u003eParseASN[ASN]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNextContainerMaybe",
      "description": {
        "fct-descr": "\u003cp\u003ejust like getNextContainer, except it doesn't throw an error if the container doesn't exists.\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ASN1ConstructionType -\u003e ParseASN1 (Maybe [ASN1])",
        "fct-source": "src/Data-ASN1-Parse.html#getNextContainerMaybe",
        "fct-type": "function",
        "title": "getNextContainerMaybe"
      },
      "index": {
        "description": "just like getNextContainer except it doesn throw an error if the container doesn exists",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "getNextContainerMaybe",
        "normalized": "ASN ConstructionType-\u003eParseASN(Maybe[ASN])",
        "package": "asn1-parse",
        "partial": "Next Container Maybe",
        "signature": "ASN ConstructionType-\u003eParseASN(Maybe[ASN])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNextMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eget next element from the stream maybe\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "(ASN1 -\u003e Maybe a) -\u003e ParseASN1 (Maybe a)",
        "fct-source": "src/Data-ASN1-Parse.html#getNextMaybe",
        "fct-type": "function",
        "title": "getNextMaybe"
      },
      "index": {
        "description": "get next element from the stream maybe",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "getNextMaybe",
        "normalized": "(ASN-\u003eMaybe a)-\u003eParseASN(Maybe a)",
        "package": "asn1-parse",
        "partial": "Next Maybe",
        "signature": "(ASN-\u003eMaybe a)-\u003eParseASN(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getObject",
      "description": {
        "fct-descr": "\u003cp\u003eget next object\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ParseASN1 a",
        "fct-source": "src/Data-ASN1-Parse.html#getObject",
        "fct-type": "function",
        "title": "getObject"
      },
      "index": {
        "description": "get next object",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "getObject",
        "normalized": "",
        "package": "asn1-parse",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:hasNext",
      "description": {
        "fct-descr": "\u003cp\u003ereturns if there's more elements in the stream.\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ParseASN1 Bool",
        "fct-source": "src/Data-ASN1-Parse.html#hasNext",
        "fct-type": "function",
        "title": "hasNext"
      },
      "index": {
        "description": "returns if there more elements in the stream",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "hasNext",
        "normalized": "",
        "package": "asn1-parse",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:onNextContainer",
      "description": {
        "fct-descr": "\u003cp\u003erun a function of the next elements of a container of specified type\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ASN1ConstructionType -\u003e ParseASN1 a -\u003e ParseASN1 a",
        "fct-source": "src/Data-ASN1-Parse.html#onNextContainer",
        "fct-type": "function",
        "title": "onNextContainer"
      },
      "index": {
        "description": "run function of the next elements of container of specified type",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "onNextContainer",
        "normalized": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN a",
        "package": "asn1-parse",
        "partial": "Next Container",
        "signature": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:onNextContainerMaybe",
      "description": {
        "fct-descr": "\u003cp\u003ejust like onNextContainer, except it doesn't throw an error if the container doesn't exists.\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ASN1ConstructionType -\u003e ParseASN1 a -\u003e ParseASN1 (Maybe a)",
        "fct-source": "src/Data-ASN1-Parse.html#onNextContainerMaybe",
        "fct-type": "function",
        "title": "onNextContainerMaybe"
      },
      "index": {
        "description": "just like onNextContainer except it doesn throw an error if the container doesn exists",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "onNextContainerMaybe",
        "normalized": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN(Maybe a)",
        "package": "asn1-parse",
        "partial": "Next Container Maybe",
        "signature": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:runParseASN1",
      "description": {
        "fct-descr": "\u003cp\u003erun the parse monad over a stream and returns the result.\n\u003c/p\u003e\u003cp\u003eIf there's still some asn1 object in the state after calling f,\n an error will be raised.\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ParseASN1 a -\u003e [ASN1] -\u003e Either String a",
        "fct-source": "src/Data-ASN1-Parse.html#runParseASN1",
        "fct-type": "function",
        "title": "runParseASN1"
      },
      "index": {
        "description": "run the parse monad over stream and returns the result If there still some asn1 object in the state after calling an error will be raised",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "runParseASN1",
        "normalized": "ParseASN a-\u003e[ASN]-\u003eEither String a",
        "package": "asn1-parse",
        "partial": "Parse ASN",
        "signature": "ParseASN a-\u003e[ASN]-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:runParseASN1State",
      "description": {
        "fct-descr": "\u003cp\u003erun the parse monad over a stream and returns the result and the remaining ASN1 Stream.\n\u003c/p\u003e",
        "fct-module": "Data.ASN1.Parse",
        "fct-package": "asn1-parse",
        "fct-signature": "ParseASN1 a -\u003e [ASN1] -\u003e Either String (a, [ASN1])",
        "fct-source": "src/Data-ASN1-Parse.html#runParseASN1State",
        "fct-type": "function",
        "title": "runParseASN1State"
      },
      "index": {
        "description": "run the parse monad over stream and returns the result and the remaining ASN1 Stream",
        "hierarchy": "Data ASN1 Parse",
        "module": "Data.ASN1.Parse",
        "name": "runParseASN1State",
        "normalized": "ParseASN a-\u003e[ASN]-\u003eEither String(a,[ASN])",
        "package": "asn1-parse",
        "partial": "Parse ASN State",
        "signature": "ParseASN a-\u003e[ASN]-\u003eEither String(a,[ASN])"
      }
    }
  }
]