[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#",
      "description": {
        "fct-module": "Network.HTTP.QueryString",
        "fct-package": "http-querystring",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-QueryString.html",
        "fct-type": "module",
        "title": "QueryString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString",
        "module": "Network.HTTP.QueryString",
        "name": "QueryString",
        "normalized": "",
        "package": "http-querystring",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#t:QueryString",
      "description": {
        "fct-descr": "\u003cp\u003eA query string for HTTP.\n\u003c/p\u003e\u003cpre\u003e \"param1=value1&param2=value2\"\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.QueryString",
        "fct-package": "http-querystring",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-QueryString-Internal.html#QueryString",
        "fct-type": "data",
        "title": "QueryString"
      },
      "index": {
        "description": "query string for HTTP param1 value1 param2 value2",
        "hierarchy": "Network HTTP QueryString",
        "module": "Network.HTTP.QueryString",
        "name": "QueryString",
        "normalized": "",
        "package": "http-querystring",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:parseQuery",
      "description": {
        "fct-module": "Network.HTTP.QueryString",
        "fct-package": "http-querystring",
        "fct-signature": "ByteString -\u003e Maybe QueryString",
        "fct-source": "src/Network-HTTP-QueryString-Internal.html#parseQuery",
        "fct-type": "function",
        "title": "parseQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString",
        "module": "Network.HTTP.QueryString",
        "name": "parseQuery",
        "normalized": "ByteString-\u003eMaybe QueryString",
        "package": "http-querystring",
        "partial": "Query",
        "signature": "ByteString-\u003eMaybe QueryString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a parameter list to \u003ccode\u003e\u003ca\u003eQueryString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoString $ queryString [(\"param1\", \"value1\"), (\"param2\", \"value2\")]\n\u003c/code\u003e\u003c/strong\u003e\"param1=value1&param2=value2\"\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.QueryString",
        "fct-package": "http-querystring",
        "fct-signature": "[(ByteString, ByteString)] -\u003e QueryString",
        "fct-source": "src/Network-HTTP-QueryString-Internal.html#queryString",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "Convert parameter list to QueryString toString queryString param1 value1 param2 value2 param1 value1 param2 value2",
        "hierarchy": "Network HTTP QueryString",
        "module": "Network.HTTP.QueryString",
        "name": "queryString",
        "normalized": "[(ByteString,ByteString)]-\u003eQueryString",
        "package": "http-querystring",
        "partial": "String",
        "signature": "[(ByteString,ByteString)]-\u003eQueryString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:queryStringFromMap",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a parameter map to \u003ccode\u003e\u003ca\u003eQueryString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Data.Map as Map\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoString $ queryStringFromMap $ Map.fromList [(\"param1\", \"value1\"), (\"param2\", \"value2\")]\n\u003c/code\u003e\u003c/strong\u003e\"param1=value1&param2=value2\"\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.QueryString",
        "fct-package": "http-querystring",
        "fct-signature": "Map ByteString ByteString -\u003e QueryString",
        "fct-source": "src/Network-HTTP-QueryString-Internal.html#queryStringFromMap",
        "fct-type": "function",
        "title": "queryStringFromMap"
      },
      "index": {
        "description": "Convert parameter map to QueryString import qualified Data.Map as Map toString queryStringFromMap Map.fromList param1 value1 param2 value2 param1 value1 param2 value2",
        "hierarchy": "Network HTTP QueryString",
        "module": "Network.HTTP.QueryString",
        "name": "queryStringFromMap",
        "normalized": "Map ByteString ByteString-\u003eQueryString",
        "package": "http-querystring",
        "partial": "String From Map",
        "signature": "Map ByteString ByteString-\u003eQueryString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-querystring/docs/Network-HTTP-QueryString.html#v:toString",
      "description": {
        "fct-module": "Network.HTTP.QueryString",
        "fct-package": "http-querystring",
        "fct-signature": "QueryString -\u003e ByteString",
        "fct-source": "src/Network-HTTP-QueryString-Internal.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP QueryString",
        "module": "Network.HTTP.QueryString",
        "name": "toString",
        "normalized": "QueryString-\u003eByteString",
        "package": "http-querystring",
        "partial": "String",
        "signature": "QueryString-\u003eByteString"
      }
    }
  }
]