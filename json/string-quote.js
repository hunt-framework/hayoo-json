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
        "word": "string-quote"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuasiQuoter for non-interpolated strings, texts and bytestrings.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003es\u003c/a\u003e quoter contains a multi-line string with no interpolation at all:\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE QuasiQuotes #-}\n import Data.Text (Text)\n import Data.String.Quote\n foo :: Text -- \u003ca\u003eString\u003c/a\u003e, \u003ca\u003eByteString\u003c/a\u003e etc also works\n foo = [s|\n\nWell here is a\n     multi-line string!\n\n|]\n\u003c/pre\u003e\u003cp\u003eAny instance of the IsString type is permitted.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.String.Quote",
          "name": "Quote",
          "package": "string-quote",
          "source": "src/Data-String-Quote.html",
          "type": "module"
        },
        "index": {
          "description": "QuasiQuoter for non-interpolated strings texts and bytestrings The quoter contains multi-line string with no interpolation at all LANGUAGE QuasiQuotes import Data.Text Text import Data.String.Quote foo Text String ByteString etc also works foo Well here is multi-line string Any instance of the IsString type is permitted",
          "hierarchy": "Data String Quote",
          "module": "Data.String.Quote",
          "name": "Quote",
          "package": "string-quote",
          "partial": "Quote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/string-quote/docs/Data-String-Quote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for a non-interpolating IsString literal. The pattern portion is undefined.\n\u003c/p\u003e",
          "module": "Data.String.Quote",
          "name": "s",
          "package": "string-quote",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Quote.html#s",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for non-interpolating IsString literal The pattern portion is undefined",
          "hierarchy": "Data String Quote",
          "module": "Data.String.Quote",
          "name": "s",
          "package": "string-quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-quote/docs/Data-String-Quote.html#v:s"
      }
    }
  ]
]