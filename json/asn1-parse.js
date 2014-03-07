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
        "word": "asn1-parse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser combinator for ASN1 Stream.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ASN1.Parse",
          "name": "Parse",
          "package": "asn1-parse",
          "source": "src/Data-ASN1-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "parser combinator for ASN1 Stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "Parse",
          "package": "asn1-parse",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse ASN1 Monad\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "ParseASN1",
          "package": "asn1-parse",
          "source": "src/Data-ASN1-Parse.html#ParseASN1",
          "type": "data"
        },
        "index": {
          "description": "Parse ASN1 Monad",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "ParseASN1",
          "package": "asn1-parse",
          "partial": "Parse ASN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#t:ParseASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget many elements until there's nothing left\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getMany",
          "package": "asn1-parse",
          "signature": "ParseASN1 a -\u003e ParseASN1 [a]",
          "source": "src/Data-ASN1-Parse.html#getMany",
          "type": "function"
        },
        "index": {
          "description": "get many elements until there nothing left",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getMany",
          "normalized": "ParseASN a-\u003eParseASN[a]",
          "package": "asn1-parse",
          "partial": "Many",
          "signature": "ParseASN a-\u003eParseASN[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget next element from the stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNext",
          "package": "asn1-parse",
          "signature": "ParseASN1 ASN1",
          "source": "src/Data-ASN1-Parse.html#getNext",
          "type": "function"
        },
        "index": {
          "description": "get next element from the stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNext",
          "package": "asn1-parse",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget next container of specified type and return all its elements\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainer",
          "package": "asn1-parse",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 [ASN1]",
          "source": "src/Data-ASN1-Parse.html#getNextContainer",
          "type": "function"
        },
        "index": {
          "description": "get next container of specified type and return all its elements",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainer",
          "normalized": "ASN ConstructionType-\u003eParseASN[ASN]",
          "package": "asn1-parse",
          "partial": "Next Container",
          "signature": "ASN ConstructionType-\u003eParseASN[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNextContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust like getNextContainer, except it doesn't throw an error if the container doesn't exists.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainerMaybe",
          "package": "asn1-parse",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 (Maybe [ASN1])",
          "source": "src/Data-ASN1-Parse.html#getNextContainerMaybe",
          "type": "function"
        },
        "index": {
          "description": "just like getNextContainer except it doesn throw an error if the container doesn exists",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainerMaybe",
          "normalized": "ASN ConstructionType-\u003eParseASN(Maybe[ASN])",
          "package": "asn1-parse",
          "partial": "Next Container Maybe",
          "signature": "ASN ConstructionType-\u003eParseASN(Maybe[ASN])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNextContainerMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget next element from the stream maybe\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNextMaybe",
          "package": "asn1-parse",
          "signature": "(ASN1 -\u003e Maybe a) -\u003e ParseASN1 (Maybe a)",
          "source": "src/Data-ASN1-Parse.html#getNextMaybe",
          "type": "function"
        },
        "index": {
          "description": "get next element from the stream maybe",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNextMaybe",
          "normalized": "(ASN-\u003eMaybe a)-\u003eParseASN(Maybe a)",
          "package": "asn1-parse",
          "partial": "Next Maybe",
          "signature": "(ASN-\u003eMaybe a)-\u003eParseASN(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getNextMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget next object\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getObject",
          "package": "asn1-parse",
          "signature": "ParseASN1 a",
          "source": "src/Data-ASN1-Parse.html#getObject",
          "type": "function"
        },
        "index": {
          "description": "get next object",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getObject",
          "package": "asn1-parse",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:getObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns if there's more elements in the stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "hasNext",
          "package": "asn1-parse",
          "signature": "ParseASN1 Bool",
          "source": "src/Data-ASN1-Parse.html#hasNext",
          "type": "function"
        },
        "index": {
          "description": "returns if there more elements in the stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "hasNext",
          "package": "asn1-parse",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:hasNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a function of the next elements of a container of specified type\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainer",
          "package": "asn1-parse",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 a -\u003e ParseASN1 a",
          "source": "src/Data-ASN1-Parse.html#onNextContainer",
          "type": "function"
        },
        "index": {
          "description": "run function of the next elements of container of specified type",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainer",
          "normalized": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN a",
          "package": "asn1-parse",
          "partial": "Next Container",
          "signature": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:onNextContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust like onNextContainer, except it doesn't throw an error if the container doesn't exists.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainerMaybe",
          "package": "asn1-parse",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 a -\u003e ParseASN1 (Maybe a)",
          "source": "src/Data-ASN1-Parse.html#onNextContainerMaybe",
          "type": "function"
        },
        "index": {
          "description": "just like onNextContainer except it doesn throw an error if the container doesn exists",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainerMaybe",
          "normalized": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN(Maybe a)",
          "package": "asn1-parse",
          "partial": "Next Container Maybe",
          "signature": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:onNextContainerMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parse monad over a stream and returns the result.\n\u003c/p\u003e\u003cp\u003eIf there's still some asn1 object in the state after calling f,\n an error will be raised.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1",
          "package": "asn1-parse",
          "signature": "ParseASN1 a -\u003e [ASN1] -\u003e Either String a",
          "source": "src/Data-ASN1-Parse.html#runParseASN1",
          "type": "function"
        },
        "index": {
          "description": "run the parse monad over stream and returns the result If there still some asn1 object in the state after calling an error will be raised",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1",
          "normalized": "ParseASN a-\u003e[ASN]-\u003eEither String a",
          "package": "asn1-parse",
          "partial": "Parse ASN",
          "signature": "ParseASN a-\u003e[ASN]-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:runParseASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parse monad over a stream and returns the result and the remaining ASN1 Stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1State",
          "package": "asn1-parse",
          "signature": "ParseASN1 a -\u003e [ASN1] -\u003e Either String (a, [ASN1])",
          "source": "src/Data-ASN1-Parse.html#runParseASN1State",
          "type": "function"
        },
        "index": {
          "description": "run the parse monad over stream and returns the result and the remaining ASN1 Stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1State",
          "normalized": "ParseASN a-\u003e[ASN]-\u003eEither String(a,[ASN])",
          "package": "asn1-parse",
          "partial": "Parse ASN State",
          "signature": "ParseASN a-\u003e[ASN]-\u003eEither String(a,[ASN])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-parse/docs/Data-ASN1-Parse.html#v:runParseASN1State"
      }
    }
  ]
]