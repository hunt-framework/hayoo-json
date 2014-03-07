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
        "word": "http-querystring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString",
          "name": "QueryString",
          "package": "http-querystring",
          "source": "src/Network-HTTP-QueryString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString",
          "module": "Network.HTTP.QueryString",
          "name": "QueryString",
          "package": "http-querystring",
          "partial": "Query String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string for HTTP.\n\u003c/p\u003e\u003cpre\u003e \"param1=value1&param2=value2\"\n\u003c/pre\u003e",
          "module": "Network.HTTP.QueryString",
          "name": "QueryString",
          "package": "http-querystring",
          "source": "src/Network-HTTP-QueryString-Internal.html#QueryString",
          "type": "data"
        },
        "index": {
          "description": "query string for HTTP param1 value1 param2 value2",
          "hierarchy": "Network HTTP QueryString",
          "module": "Network.HTTP.QueryString",
          "name": "QueryString",
          "package": "http-querystring",
          "partial": "Query String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#t:QueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString",
          "name": "parseQuery",
          "package": "http-querystring",
          "signature": "ByteString -\u003e Maybe QueryString",
          "source": "src/Network-HTTP-QueryString-Internal.html#parseQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString",
          "module": "Network.HTTP.QueryString",
          "name": "parseQuery",
          "normalized": "ByteString-\u003eMaybe QueryString",
          "package": "http-querystring",
          "partial": "Query",
          "signature": "ByteString-\u003eMaybe QueryString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:parseQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a parameter list to \u003ccode\u003e\u003ca\u003eQueryString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoString $ queryString [(\"param1\", \"value1\"), (\"param2\", \"value2\")]\n\u003c/code\u003e\u003c/strong\u003e\"param1=value1&param2=value2\"\n\u003c/pre\u003e",
          "module": "Network.HTTP.QueryString",
          "name": "queryString",
          "package": "http-querystring",
          "signature": "[(ByteString, ByteString)] -\u003e QueryString",
          "source": "src/Network-HTTP-QueryString-Internal.html#queryString",
          "type": "function"
        },
        "index": {
          "description": "Convert parameter list to QueryString toString queryString param1 value1 param2 value2 param1 value1 param2 value2",
          "hierarchy": "Network HTTP QueryString",
          "module": "Network.HTTP.QueryString",
          "name": "queryString",
          "normalized": "[(ByteString,ByteString)]-\u003eQueryString",
          "package": "http-querystring",
          "partial": "String",
          "signature": "[(ByteString,ByteString)]-\u003eQueryString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a parameter map to \u003ccode\u003e\u003ca\u003eQueryString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Data.Map as Map\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoString $ queryStringFromMap $ Map.fromList [(\"param1\", \"value1\"), (\"param2\", \"value2\")]\n\u003c/code\u003e\u003c/strong\u003e\"param1=value1&param2=value2\"\n\u003c/pre\u003e",
          "module": "Network.HTTP.QueryString",
          "name": "queryStringFromMap",
          "package": "http-querystring",
          "signature": "Map ByteString ByteString -\u003e QueryString",
          "source": "src/Network-HTTP-QueryString-Internal.html#queryStringFromMap",
          "type": "function"
        },
        "index": {
          "description": "Convert parameter map to QueryString import qualified Data.Map as Map toString queryStringFromMap Map.fromList param1 value1 param2 value2 param1 value1 param2 value2",
          "hierarchy": "Network HTTP QueryString",
          "module": "Network.HTTP.QueryString",
          "name": "queryStringFromMap",
          "normalized": "Map ByteString ByteString-\u003eQueryString",
          "package": "http-querystring",
          "partial": "String From Map",
          "signature": "Map ByteString ByteString-\u003eQueryString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:queryStringFromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.QueryString",
          "name": "toString",
          "package": "http-querystring",
          "signature": "QueryString -\u003e ByteString",
          "source": "src/Network-HTTP-QueryString-Internal.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP QueryString",
          "module": "Network.HTTP.QueryString",
          "name": "toString",
          "normalized": "QueryString-\u003eByteString",
          "package": "http-querystring",
          "partial": "String",
          "signature": "QueryString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:toString"
      }
    }
  ]
]