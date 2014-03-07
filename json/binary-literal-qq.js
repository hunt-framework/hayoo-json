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
        "word": "binary-literal-qq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a quasiquoter for binary integer literals.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n import Language.Literals.Binary\n import Data.Word\n\nnot :: Word32 -\u003e Word32\n not [b| 0 |] = [b| 1 |]\n not [b| 1 |] = [b| 0 |]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.Literals.Binary",
          "name": "Binary",
          "package": "binary-literal-qq",
          "source": "src/Language-Literals-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports quasiquoter for binary integer literals Example usage import Language.Literals.Binary import Data.Word not Word32 Word32 not not",
          "hierarchy": "Language Literals Binary",
          "module": "Language.Literals.Binary",
          "name": "Binary",
          "package": "binary-literal-qq",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-literal-qq/docs/Language-Literals-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Literals.Binary",
          "name": "b",
          "package": "binary-literal-qq",
          "signature": "QuasiQuoter",
          "source": "src/Language-Literals-Binary.html#b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Literals Binary",
          "module": "Language.Literals.Binary",
          "name": "b",
          "package": "binary-literal-qq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-literal-qq/docs/Language-Literals-Binary.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Literals.Binary",
          "name": "readBinary",
          "package": "binary-literal-qq",
          "signature": "String -\u003e Integer",
          "source": "src/Language-Literals-Binary.html#readBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Literals Binary",
          "module": "Language.Literals.Binary",
          "name": "readBinary",
          "normalized": "String-\u003eInteger",
          "package": "binary-literal-qq",
          "partial": "Binary",
          "signature": "String-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-literal-qq/docs/Language-Literals-Binary.html#v:readBinary"
      }
    }
  ]
]