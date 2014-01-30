[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple http client to request OAuth2 tokens and several utils.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-OAuth2-HttpClient.html",
        "fct-type": "module",
        "title": "HttpClient"
      },
      "index": {
        "description": "simple http client to request OAuth2 tokens and several utils",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "HttpClient",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Http Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authGetBS",
      "description": {
        "fct-descr": "\u003cp\u003eConduct GET request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken-\u003e URI-\u003e IO (OAuth2Result ByteString)",
        "fct-type": "function",
        "title": "authGetBS"
      },
      "index": {
        "description": "Conduct GET request",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "authGetBS",
        "normalized": "AccessToken-\u003eURI-\u003eIO(OAuth Result ByteString)",
        "package": "hoauth2",
        "partial": "Get BS",
        "signature": "AccessToken-\u003eURI-\u003eIO(OAuth Result ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authGetJSON",
      "description": {
        "fct-descr": "\u003cp\u003eConduct GET request and return response as JSON.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken-\u003e URI-\u003e IO (OAuth2Result a)",
        "fct-type": "function",
        "title": "authGetJSON"
      },
      "index": {
        "description": "Conduct GET request and return response as JSON",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "authGetJSON",
        "normalized": "AccessToken-\u003eURI-\u003eIO(OAuth Result a)",
        "package": "hoauth2",
        "partial": "Get JSON",
        "signature": "AccessToken-\u003eURI-\u003eIO(OAuth Result a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authPostBS",
      "description": {
        "fct-descr": "\u003cp\u003eConduct POST request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken-\u003e URI-\u003e PostBody-\u003e IO (OAuth2Result ByteString)",
        "fct-type": "function",
        "title": "authPostBS"
      },
      "index": {
        "description": "Conduct POST request",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "authPostBS",
        "normalized": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result ByteString)",
        "package": "hoauth2",
        "partial": "Post BS",
        "signature": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authPostJSON",
      "description": {
        "fct-descr": "\u003cp\u003eConduct POST request and return response as JSON.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken-\u003e URI-\u003e PostBody-\u003e IO (OAuth2Result a)",
        "fct-type": "function",
        "title": "authPostJSON"
      },
      "index": {
        "description": "Conduct POST request and return response as JSON",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "authPostJSON",
        "normalized": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result a)",
        "package": "hoauth2",
        "partial": "Post JSON",
        "signature": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authenticatedRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSends a HTTP request including the Authorization header with the specified\n  access token.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken-\u003e StdMethod-\u003e Request (ResourceT IO)-\u003e IO (Response ByteString)",
        "fct-type": "function",
        "title": "authenticatedRequest"
      },
      "index": {
        "description": "Sends HTTP request including the Authorization header with the specified access token",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "authenticatedRequest",
        "normalized": "AccessToken-\u003eStdMethod-\u003eRequest(ResourceT IO)-\u003eIO(Response ByteString)",
        "package": "hoauth2",
        "partial": "Request",
        "signature": "AccessToken-\u003eStdMethod-\u003eRequest(ResourceT IO)-\u003eIO(Response ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:doJSONPostRequest",
      "description": {
        "fct-descr": "\u003cp\u003eConduct post request and return response as JSON.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "URI-\u003e PostBody-\u003e IO (OAuth2Result a)",
        "fct-type": "function",
        "title": "doJSONPostRequest"
      },
      "index": {
        "description": "Conduct post request and return response as JSON",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "doJSONPostRequest",
        "normalized": "URI-\u003ePostBody-\u003eIO(OAuth Result a)",
        "package": "hoauth2",
        "partial": "JSONPost Request",
        "signature": "URI-\u003ePostBody-\u003eIO(OAuth Result a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:doSimplePostRequest",
      "description": {
        "fct-descr": "\u003cp\u003eConduct post request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "URI-\u003e PostBody-\u003e IO (OAuth2Result ByteString)",
        "fct-type": "function",
        "title": "doSimplePostRequest"
      },
      "index": {
        "description": "Conduct post request",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "doSimplePostRequest",
        "normalized": "URI-\u003ePostBody-\u003eIO(OAuth Result ByteString)",
        "package": "hoauth2",
        "partial": "Simple Post Request",
        "signature": "URI-\u003ePostBody-\u003eIO(OAuth Result ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:fetchAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eRequest (via POST method) \u003ca\u003eAccess Token\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2-\u003e ByteString-\u003e IO (OAuth2Result AccessToken)",
        "fct-type": "function",
        "title": "fetchAccessToken"
      },
      "index": {
        "description": "Request via POST method Access Token",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "fetchAccessToken",
        "normalized": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)",
        "package": "hoauth2",
        "partial": "Access Token",
        "signature": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:fetchRefreshToken",
      "description": {
        "fct-descr": "\u003cp\u003eRequest the \u003ca\u003eRefresh Token\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2-\u003e ByteString-\u003e IO (OAuth2Result AccessToken)",
        "fct-type": "function",
        "title": "fetchRefreshToken"
      },
      "index": {
        "description": "Request the Refresh Token",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "fetchRefreshToken",
        "normalized": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)",
        "package": "hoauth2",
        "partial": "Refresh Token",
        "signature": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:handleResponse",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003eResponse\u003c/code\u003e to to \u003ccode\u003eOAuth2Result\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "Response ByteString -\u003e OAuth2Result ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-HttpClient.html#handleResponse",
        "fct-type": "function",
        "title": "handleResponse"
      },
      "index": {
        "description": "Parses Response to to OAuth2Result",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "handleResponse",
        "normalized": "Response ByteString-\u003eOAuth Result ByteString",
        "package": "hoauth2",
        "partial": "Response",
        "signature": "Response ByteString-\u003eOAuth Result ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:parseResponseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003eOAuth2Result BSL.ByteString\u003c/code\u003e into \u003ccode\u003eFromJSON a =\u003e a\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2Result ByteString -\u003e OAuth2Result a",
        "fct-source": "src/Network-OAuth-OAuth2-HttpClient.html#parseResponseJSON",
        "fct-type": "function",
        "title": "parseResponseJSON"
      },
      "index": {
        "description": "Parses OAuth2Result BSL.ByteString into FromJSON",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "parseResponseJSON",
        "normalized": "OAuth Result ByteString-\u003eOAuth Result a",
        "package": "hoauth2",
        "partial": "Response JSON",
        "signature": "OAuth Result ByteString-\u003eOAuth Result a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:setMethod",
      "description": {
        "fct-descr": "\u003cp\u003eSets the HTTP method to use\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "StdMethod -\u003e Request m -\u003e Request m",
        "fct-source": "src/Network-OAuth-OAuth2-HttpClient.html#setMethod",
        "fct-type": "function",
        "title": "setMethod"
      },
      "index": {
        "description": "Sets the HTTP method to use",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "setMethod",
        "normalized": "StdMethod-\u003eRequest a-\u003eRequest a",
        "package": "hoauth2",
        "partial": "Method",
        "signature": "StdMethod-\u003eRequest m-\u003eRequest m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:updateRequestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eset several header values.\n   + userAgennt : hoauth2\n   + accept     : application/json\n   + authorization : Bearer xxxxx  if AccessToken provided.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.HttpClient",
        "fct-package": "hoauth2",
        "fct-signature": "Maybe AccessToken -\u003e Request m -\u003e Request m",
        "fct-source": "src/Network-OAuth-OAuth2-HttpClient.html#updateRequestHeaders",
        "fct-type": "function",
        "title": "updateRequestHeaders"
      },
      "index": {
        "description": "set several header values userAgennt hoauth2 accept application json authorization Bearer xxxxx if AccessToken provided",
        "hierarchy": "Network OAuth OAuth2 HttpClient",
        "module": "Network.OAuth.OAuth2.HttpClient",
        "name": "updateRequestHeaders",
        "normalized": "Maybe AccessToken-\u003eRequest a-\u003eRequest a",
        "package": "hoauth2",
        "partial": "Request Headers",
        "signature": "Maybe AccessToken-\u003eRequest m-\u003eRequest m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple OAuth2 Haskell binding.\n   (This is supposed to be independent with http client.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "simple OAuth2 Haskell binding This is supposed to be independent with http client",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:AccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eThe gained Access Token. Use \u003ccode\u003eData.Aeson.decode\u003c/code\u003e to decode string to \u003ccode\u003eAccessToken\u003c/code\u003e.\n   The \u003ccode\u003erefresheToken\u003c/code\u003e is special at some case.\n   e.g. https:\u003cem/\u003edevelopers.google.com\u003cem\u003eaccounts\u003c/em\u003edocs/OAuth2\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
        "fct-type": "data",
        "title": "AccessToken"
      },
      "index": {
        "description": "The gained Access Token Use Data.Aeson.decode to decode string to AccessToken The refresheToken is special at some case e.g https developers.google.com accounts docs OAuth2",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "AccessToken",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:OAuth2",
      "description": {
        "fct-descr": "\u003cp\u003eQuery Parameter Representation\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "data",
        "title": "OAuth2"
      },
      "index": {
        "description": "Query Parameter Representation",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "OAuth2",
        "normalized": "",
        "package": "hoauth2",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:OAuth2Result",
      "description": {
        "fct-descr": "\u003cp\u003eIs either \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e containing an error or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e containg a result\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2Result",
        "fct-type": "type",
        "title": "OAuth2Result"
      },
      "index": {
        "description": "Is either Left containing an error or Right containg result",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "OAuth2Result",
        "normalized": "",
        "package": "hoauth2",
        "partial": "OAuth Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:PostBody",
      "description": {
        "fct-descr": "\u003cp\u003etype synonym of post body content\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#PostBody",
        "fct-type": "type",
        "title": "PostBody"
      },
      "index": {
        "description": "type synonym of post body content",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "PostBody",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Post Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:QueryParams",
      "description": {
        "fct-descr": "\u003cp\u003etype synonym of query parameters\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#QueryParams",
        "fct-type": "type",
        "title": "QueryParams"
      },
      "index": {
        "description": "type synonym of query parameters",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "QueryParams",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Query Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:URI",
      "description": {
        "fct-descr": "\u003cp\u003etype synonym of a URI\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#URI",
        "fct-type": "type",
        "title": "URI"
      },
      "index": {
        "description": "type synonym of URI",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "URI",
        "normalized": "",
        "package": "hoauth2",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:AccessToken",
      "description": {
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
        "fct-type": "function",
        "title": "AccessToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "AccessToken",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:OAuth2",
      "description": {
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "function",
        "title": "OAuth2"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "OAuth2",
        "normalized": "",
        "package": "hoauth2",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
        "fct-type": "function",
        "title": "accessToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "accessToken",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessTokenToParam",
      "description": {
        "fct-descr": "\u003cp\u003eCreate QueryParams with given access token value.\n\u003c/p\u003e\u003cp\u003eaccessTokenToParam :: BS.ByteString -\u003e QueryParams\naccessTokenToParam token = [(\u003ca\u003eaccess_token\u003c/a\u003e, token)]\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "AccessToken -\u003e QueryParams",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#accessTokenToParam",
        "fct-type": "function",
        "title": "accessTokenToParam"
      },
      "index": {
        "description": "Create QueryParams with given access token value accessTokenToParam BS.ByteString QueryParams accessTokenToParam token access token token",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "accessTokenToParam",
        "normalized": "AccessToken-\u003eQueryParams",
        "package": "hoauth2",
        "partial": "Token To Param",
        "signature": "AccessToken-\u003eQueryParams"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessTokenUrl",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare URL and the request body query for fetching access token.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2-\u003e ByteString-\u003e (URI, PostBody)",
        "fct-type": "function",
        "title": "accessTokenUrl"
      },
      "index": {
        "description": "Prepare URL and the request body query for fetching access token",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "accessTokenUrl",
        "normalized": "OAuth-\u003eByteString-\u003e(URI,PostBody)",
        "package": "hoauth2",
        "partial": "Token Url",
        "signature": "OAuth-\u003eByteString-\u003e(URI,PostBody)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessTokenUrl-39-",
      "description": {
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2-\u003e ByteString-\u003e Maybe ByteString-\u003e (URI, PostBody)",
        "fct-type": "function",
        "title": "accessTokenUrl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "accessTokenUrl'",
        "normalized": "OAuth-\u003eByteString-\u003eMaybe ByteString-\u003e(URI,PostBody)",
        "package": "hoauth2",
        "partial": "Token Url'",
        "signature": "OAuth-\u003eByteString-\u003eMaybe ByteString-\u003e(URI,PostBody)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:appendAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eAppend query parameters with \u003ccode\u003e&\u003c/code\u003e.\n appendQueryParam' :: URI -\u003e QueryParams -\u003e URI\n appendQueryParam' uri q = uri \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e \u003ca\u003e&\u003c/a\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e renderSimpleQuery False q\n\u003c/p\u003e\u003cp\u003eFor GET method API.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "URI-\u003e AccessToken-\u003e URI",
        "fct-type": "function",
        "title": "appendAccessToken"
      },
      "index": {
        "description": "Append query parameters with appendQueryParam URI QueryParams URI appendQueryParam uri uri append append renderSimpleQuery False For GET method API",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "appendAccessToken",
        "normalized": "URI-\u003eAccessToken-\u003eURI",
        "package": "hoauth2",
        "partial": "Access Token",
        "signature": "URI-\u003eAccessToken-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:appendQueryParam",
      "description": {
        "fct-descr": "\u003cp\u003eAppend query parameters with \u003ccode\u003e?\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "URI -\u003e QueryParams -\u003e URI",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#appendQueryParam",
        "fct-type": "function",
        "title": "appendQueryParam"
      },
      "index": {
        "description": "Append query parameters with",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "appendQueryParam",
        "normalized": "URI-\u003eQueryParams-\u003eURI",
        "package": "hoauth2",
        "partial": "Query Param",
        "signature": "URI-\u003eQueryParams-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:authorizationUrl",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare the authorization URL.\n   Redirect to this URL asking for user interactive authentication.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2 -\u003e URI",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#authorizationUrl",
        "fct-type": "function",
        "title": "authorizationUrl"
      },
      "index": {
        "description": "Prepare the authorization URL Redirect to this URL asking for user interactive authentication",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "authorizationUrl",
        "normalized": "OAuth-\u003eURI",
        "package": "hoauth2",
        "partial": "Url",
        "signature": "OAuth-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthAccessTokenEndpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "function",
        "title": "oauthAccessTokenEndpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "oauthAccessTokenEndpoint",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Access Token Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthCallback",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "function",
        "title": "oauthCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "oauthCallback",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthClientId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "function",
        "title": "oauthClientId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "oauthClientId",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Client Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthClientSecret",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "function",
        "title": "oauthClientSecret"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "oauthClientSecret",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Client Secret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthOAuthorizeEndpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
        "fct-type": "function",
        "title": "oauthOAuthorizeEndpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "oauthOAuthorizeEndpoint",
        "normalized": "",
        "package": "hoauth2",
        "partial": "OAuthorize Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:refreshAccessTokenUrl",
      "description": {
        "fct-descr": "\u003cp\u003eUsing a Refresh Token.\n   obtain a new access token by sending a refresh token to the Authorization server.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "OAuth2-\u003e ByteString-\u003e (URI, PostBody)",
        "fct-type": "function",
        "title": "refreshAccessTokenUrl"
      },
      "index": {
        "description": "Using Refresh Token obtain new access token by sending refresh token to the Authorization server",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "refreshAccessTokenUrl",
        "normalized": "OAuth-\u003eByteString-\u003e(URI,PostBody)",
        "package": "hoauth2",
        "partial": "Access Token Url",
        "signature": "OAuth-\u003eByteString-\u003e(URI,PostBody)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:refreshToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
        "fct-type": "function",
        "title": "refreshToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "refreshToken",
        "normalized": "",
        "package": "hoauth2",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:transform-39-",
      "description": {
        "fct-descr": "\u003cp\u003elift value in the Maybe and abonda Nothing\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.OAuth2.Internal",
        "fct-package": "hoauth2",
        "fct-signature": "[(a, Maybe b)] -\u003e [(a, b)]",
        "fct-source": "src/Network-OAuth-OAuth2-Internal.html#transform%27",
        "fct-type": "function",
        "title": "transform'"
      },
      "index": {
        "description": "lift value in the Maybe and abonda Nothing",
        "hierarchy": "Network OAuth OAuth2 Internal",
        "module": "Network.OAuth.OAuth2.Internal",
        "name": "transform'",
        "normalized": "[(a,Maybe b)]-\u003e[(a,b)]",
        "package": "hoauth2",
        "partial": "",
        "signature": "[(a,Maybe b)]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2.html#",
      "description": {
        "fct-module": "Network.OAuth.OAuth2",
        "fct-package": "hoauth2",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-OAuth2.html",
        "fct-type": "module",
        "title": "OAuth2"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth OAuth2",
        "module": "Network.OAuth.OAuth2",
        "name": "OAuth2",
        "normalized": "",
        "package": "hoauth2",
        "partial": "OAuth",
        "signature": ""
      }
    }
  }
]