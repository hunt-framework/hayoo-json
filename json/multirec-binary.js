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
        "word": "multirec-binary"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Binary",
          "name": "HBinary",
          "package": "multirec-binary",
          "source": "http://hackage.haskell.org/package/multirec-binary/docs/src/Generics-MultiRec-Binary.html#HBinary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics MultiRec Binary",
          "module": "Generics.MultiRec.Binary",
          "name": "HBinary",
          "package": "multirec-binary",
          "partial": "HBinary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/multirec-binary/docs/Generics-MultiRec-Binary.html#v:HBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generic binary \u003ctt\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Generics.MultiRec.Binary",
          "name": "gget",
          "package": "multirec-binary",
          "signature": "phi ix -\u003e Get ix",
          "source": "http://hackage.haskell.org/package/multirec-binary/docs/src/Generics-MultiRec-Binary.html#gget",
          "type": "function"
        },
        "index": {
          "description": "Generic binary Get",
          "hierarchy": "Generics MultiRec Binary",
          "module": "Generics.MultiRec.Binary",
          "name": "gget",
          "normalized": "a b-\u003eGet b",
          "package": "multirec-binary",
          "signature": "phi ix-\u003eGet ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-binary/docs/Generics-MultiRec-Binary.html#v:gget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generic binary \u003ctt\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Generics.MultiRec.Binary",
          "name": "gput",
          "package": "multirec-binary",
          "signature": "phi ix -\u003e ix -\u003e Put",
          "source": "http://hackage.haskell.org/package/multirec-binary/docs/src/Generics-MultiRec-Binary.html#gput",
          "type": "function"
        },
        "index": {
          "description": "Generic binary Put",
          "hierarchy": "Generics MultiRec Binary",
          "module": "Generics.MultiRec.Binary",
          "name": "gput",
          "normalized": "a b-\u003eb-\u003ePut",
          "package": "multirec-binary",
          "signature": "phi ix-\u003eix-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-binary/docs/Generics-MultiRec-Binary.html#v:gput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Binary",
          "name": "hget",
          "package": "multirec-binary",
          "signature": "phi ix' -\u003e Get (r ix')) -\u003e phi ix -\u003e Get (f r ix)",
          "source": "http://hackage.haskell.org/package/multirec-binary/docs/src/Generics-MultiRec-Binary.html#hget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Binary",
          "module": "Generics.MultiRec.Binary",
          "name": "hget",
          "normalized": "a b-\u003eGet(c b))-\u003ea d-\u003eGet(e c d)",
          "package": "multirec-binary",
          "signature": "phi ix'-\u003eGet(r ix'))-\u003ephi ix-\u003eGet(f r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-binary/docs/Generics-MultiRec-Binary.html#v:hget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.MultiRec.Binary",
          "name": "hput",
          "package": "multirec-binary",
          "signature": "(forall ix'.  phi ix' -\u003e r ix' -\u003e Put) -\u003e phi ix -\u003e f r ix -\u003e Put",
          "source": "http://hackage.haskell.org/package/multirec-binary/docs/src/Generics-MultiRec-Binary.html#hput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics MultiRec Binary",
          "module": "Generics.MultiRec.Binary",
          "name": "hput",
          "normalized": "(a b c d-\u003ee d-\u003ePut)-\u003ec f-\u003eg e f-\u003ePut",
          "package": "multirec-binary",
          "signature": "(forall ix'. phi ix'-\u003er ix'-\u003ePut)-\u003ephi ix-\u003ef r ix-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multirec-binary/docs/Generics-MultiRec-Binary.html#v:hput"
      }
    }
  ]
]