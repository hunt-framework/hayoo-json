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
        "word": "hoauth2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple http client to request OAuth2 tokens and several utils.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "HttpClient",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-HttpClient.html",
          "type": "module"
        },
        "index": {
          "description": "simple http client to request OAuth2 tokens and several utils",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "HttpClient",
          "package": "hoauth2",
          "partial": "Http Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduct GET request.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authGetBS",
          "package": "hoauth2",
          "signature": "AccessToken-\u003e URI-\u003e IO (OAuth2Result ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Conduct GET request",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authGetBS",
          "normalized": "AccessToken-\u003eURI-\u003eIO(OAuth Result ByteString)",
          "package": "hoauth2",
          "partial": "Get BS",
          "signature": "AccessToken-\u003eURI-\u003eIO(OAuth Result ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authGetBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduct GET request and return response as JSON.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authGetJSON",
          "package": "hoauth2",
          "signature": "AccessToken-\u003e URI-\u003e IO (OAuth2Result a)",
          "type": "function"
        },
        "index": {
          "description": "Conduct GET request and return response as JSON",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authGetJSON",
          "normalized": "AccessToken-\u003eURI-\u003eIO(OAuth Result a)",
          "package": "hoauth2",
          "partial": "Get JSON",
          "signature": "AccessToken-\u003eURI-\u003eIO(OAuth Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authGetJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduct POST request.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authPostBS",
          "package": "hoauth2",
          "signature": "AccessToken-\u003e URI-\u003e PostBody-\u003e IO (OAuth2Result ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Conduct POST request",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authPostBS",
          "normalized": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result ByteString)",
          "package": "hoauth2",
          "partial": "Post BS",
          "signature": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authPostBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduct POST request and return response as JSON.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authPostJSON",
          "package": "hoauth2",
          "signature": "AccessToken-\u003e URI-\u003e PostBody-\u003e IO (OAuth2Result a)",
          "type": "function"
        },
        "index": {
          "description": "Conduct POST request and return response as JSON",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authPostJSON",
          "normalized": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result a)",
          "package": "hoauth2",
          "partial": "Post JSON",
          "signature": "AccessToken-\u003eURI-\u003ePostBody-\u003eIO(OAuth Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authPostJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a HTTP request including the Authorization header with the specified\n  access token.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authenticatedRequest",
          "package": "hoauth2",
          "signature": "AccessToken-\u003e StdMethod-\u003e Request-\u003e IO (Response ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Sends HTTP request including the Authorization header with the specified access token",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "authenticatedRequest",
          "normalized": "AccessToken-\u003eStdMethod-\u003eRequest-\u003eIO(Response ByteString)",
          "package": "hoauth2",
          "partial": "Request",
          "signature": "AccessToken-\u003eStdMethod-\u003eRequest-\u003eIO(Response ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:authenticatedRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduct post request and return response as JSON.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "doJSONPostRequest",
          "package": "hoauth2",
          "signature": "URI-\u003e PostBody-\u003e IO (OAuth2Result a)",
          "type": "function"
        },
        "index": {
          "description": "Conduct post request and return response as JSON",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "doJSONPostRequest",
          "normalized": "URI-\u003ePostBody-\u003eIO(OAuth Result a)",
          "package": "hoauth2",
          "partial": "JSONPost Request",
          "signature": "URI-\u003ePostBody-\u003eIO(OAuth Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:doJSONPostRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduct post request.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "doSimplePostRequest",
          "package": "hoauth2",
          "signature": "URI-\u003e PostBody-\u003e IO (OAuth2Result ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Conduct post request",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "doSimplePostRequest",
          "normalized": "URI-\u003ePostBody-\u003eIO(OAuth Result ByteString)",
          "package": "hoauth2",
          "partial": "Simple Post Request",
          "signature": "URI-\u003ePostBody-\u003eIO(OAuth Result ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:doSimplePostRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest (via POST method) \u003ca\u003eAccess Token\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "fetchAccessToken",
          "package": "hoauth2",
          "signature": "OAuth2-\u003e ByteString-\u003e IO (OAuth2Result AccessToken)",
          "type": "function"
        },
        "index": {
          "description": "Request via POST method Access Token",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "fetchAccessToken",
          "normalized": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)",
          "package": "hoauth2",
          "partial": "Access Token",
          "signature": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:fetchAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest the \u003ca\u003eRefresh Token\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "fetchRefreshToken",
          "package": "hoauth2",
          "signature": "OAuth2-\u003e ByteString-\u003e IO (OAuth2Result AccessToken)",
          "type": "function"
        },
        "index": {
          "description": "Request the Refresh Token",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "fetchRefreshToken",
          "normalized": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)",
          "package": "hoauth2",
          "partial": "Refresh Token",
          "signature": "OAuth-\u003eByteString-\u003eIO(OAuth Result AccessToken)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:fetchRefreshToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003eResponse\u003c/code\u003e to to \u003ccode\u003eOAuth2Result\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "handleResponse",
          "package": "hoauth2",
          "signature": "Response ByteString -\u003e OAuth2Result ByteString",
          "source": "src/Network-OAuth-OAuth2-HttpClient.html#handleResponse",
          "type": "function"
        },
        "index": {
          "description": "Parses Response to to OAuth2Result",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "handleResponse",
          "normalized": "Response ByteString-\u003eOAuth Result ByteString",
          "package": "hoauth2",
          "partial": "Response",
          "signature": "Response ByteString-\u003eOAuth Result ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:handleResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003eOAuth2Result BSL.ByteString\u003c/code\u003e into \u003ccode\u003eFromJSON a =\u003e a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "parseResponseJSON",
          "package": "hoauth2",
          "signature": "OAuth2Result ByteString -\u003e OAuth2Result a",
          "source": "src/Network-OAuth-OAuth2-HttpClient.html#parseResponseJSON",
          "type": "function"
        },
        "index": {
          "description": "Parses OAuth2Result BSL.ByteString into FromJSON",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "parseResponseJSON",
          "normalized": "OAuth Result ByteString-\u003eOAuth Result a",
          "package": "hoauth2",
          "partial": "Response JSON",
          "signature": "OAuth Result ByteString-\u003eOAuth Result a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:parseResponseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the HTTP method to use\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "setMethod",
          "package": "hoauth2",
          "signature": "StdMethod -\u003e Request -\u003e Request",
          "source": "src/Network-OAuth-OAuth2-HttpClient.html#setMethod",
          "type": "function"
        },
        "index": {
          "description": "Sets the HTTP method to use",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "setMethod",
          "normalized": "StdMethod-\u003eRequest-\u003eRequest",
          "package": "hoauth2",
          "partial": "Method",
          "signature": "StdMethod-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:setMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset several header values.\n   + userAgennt : hoauth2\n   + accept     : application/json\n   + authorization : Bearer xxxxx  if AccessToken provided.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "updateRequestHeaders",
          "package": "hoauth2",
          "signature": "Maybe AccessToken -\u003e Request -\u003e Request",
          "source": "src/Network-OAuth-OAuth2-HttpClient.html#updateRequestHeaders",
          "type": "function"
        },
        "index": {
          "description": "set several header values userAgennt hoauth2 accept application json authorization Bearer xxxxx if AccessToken provided",
          "hierarchy": "Network OAuth OAuth2 HttpClient",
          "module": "Network.OAuth.OAuth2.HttpClient",
          "name": "updateRequestHeaders",
          "normalized": "Maybe AccessToken-\u003eRequest-\u003eRequest",
          "package": "hoauth2",
          "partial": "Request Headers",
          "signature": "Maybe AccessToken-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-HttpClient.html#v:updateRequestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple OAuth2 Haskell binding.\n   (This is supposed to be independent with http client.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "Internal",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "simple OAuth2 Haskell binding This is supposed to be independent with http client",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "Internal",
          "package": "hoauth2",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe gained Access Token. Use \u003ccode\u003eData.Aeson.decode\u003c/code\u003e to decode string to \u003ccode\u003eAccessToken\u003c/code\u003e.\n   The \u003ccode\u003erefresheToken\u003c/code\u003e is special at some case.\n   e.g. https:\u003cem/\u003edevelopers.google.com\u003cem\u003eaccounts\u003c/em\u003edocs/OAuth2\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "AccessToken",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
          "type": "data"
        },
        "index": {
          "description": "The gained Access Token Use Data.Aeson.decode to decode string to AccessToken The refresheToken is special at some case e.g https developers.google.com accounts docs OAuth2",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "AccessToken",
          "package": "hoauth2",
          "partial": "Access Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:AccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery Parameter Representation\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "OAuth2",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "data"
        },
        "index": {
          "description": "Query Parameter Representation",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "OAuth2",
          "package": "hoauth2",
          "partial": "OAuth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:OAuth2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs either \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e containing an error or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e containg a result\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "OAuth2Result",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2Result",
          "type": "type"
        },
        "index": {
          "description": "Is either Left containing an error or Right containg result",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "OAuth2Result",
          "package": "hoauth2",
          "partial": "OAuth Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:OAuth2Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype synonym of post body content\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "PostBody",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#PostBody",
          "type": "type"
        },
        "index": {
          "description": "type synonym of post body content",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "PostBody",
          "package": "hoauth2",
          "partial": "Post Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:PostBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype synonym of query parameters\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "QueryParams",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#QueryParams",
          "type": "type"
        },
        "index": {
          "description": "type synonym of query parameters",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "QueryParams",
          "package": "hoauth2",
          "partial": "Query Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:QueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype synonym of a URI\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "URI",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#URI",
          "type": "type"
        },
        "index": {
          "description": "type synonym of URI",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "URI",
          "package": "hoauth2",
          "partial": "URI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "AccessToken",
          "package": "hoauth2",
          "signature": "AccessToken",
          "source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "AccessToken",
          "package": "hoauth2",
          "partial": "Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:AccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "OAuth2",
          "package": "hoauth2",
          "signature": "OAuth2",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "OAuth2",
          "package": "hoauth2",
          "partial": "OAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:OAuth2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessToken",
          "package": "hoauth2",
          "signature": "ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessToken",
          "package": "hoauth2",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate QueryParams with given access token value.\n\u003c/p\u003e\u003cp\u003eaccessTokenToParam :: BS.ByteString -\u003e QueryParams\naccessTokenToParam token = [(\u003ca\u003eaccess_token\u003c/a\u003e, token)]\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessTokenToParam",
          "package": "hoauth2",
          "signature": "AccessToken -\u003e QueryParams",
          "source": "src/Network-OAuth-OAuth2-Internal.html#accessTokenToParam",
          "type": "function"
        },
        "index": {
          "description": "Create QueryParams with given access token value accessTokenToParam BS.ByteString QueryParams accessTokenToParam token access token token",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessTokenToParam",
          "normalized": "AccessToken-\u003eQueryParams",
          "package": "hoauth2",
          "partial": "Token To Param",
          "signature": "AccessToken-\u003eQueryParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessTokenToParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare URL and the request body query for fetching access token.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessTokenUrl",
          "package": "hoauth2",
          "signature": "OAuth2-\u003e ByteString-\u003e (URI, PostBody)",
          "type": "function"
        },
        "index": {
          "description": "Prepare URL and the request body query for fetching access token",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessTokenUrl",
          "normalized": "OAuth-\u003eByteString-\u003e(URI,PostBody)",
          "package": "hoauth2",
          "partial": "Token Url",
          "signature": "OAuth-\u003eByteString-\u003e(URI,PostBody)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessTokenUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessTokenUrl'",
          "package": "hoauth2",
          "signature": "OAuth2-\u003e ByteString-\u003e Maybe ByteString-\u003e (URI, PostBody)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "accessTokenUrl'",
          "normalized": "OAuth-\u003eByteString-\u003eMaybe ByteString-\u003e(URI,PostBody)",
          "package": "hoauth2",
          "partial": "Token Url'",
          "signature": "OAuth-\u003eByteString-\u003eMaybe ByteString-\u003e(URI,PostBody)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:accessTokenUrl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend query parameters with \u003ccode\u003e&\u003c/code\u003e.\n appendQueryParam' :: URI -\u003e QueryParams -\u003e URI\n appendQueryParam' uri q = uri \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e \u003ca\u003e&\u003c/a\u003e \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e renderSimpleQuery False q\n\u003c/p\u003e\u003cp\u003eFor GET method API.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "appendAccessToken",
          "package": "hoauth2",
          "signature": "URI-\u003e AccessToken-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Append query parameters with appendQueryParam URI QueryParams URI appendQueryParam uri uri append append renderSimpleQuery False For GET method API",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "appendAccessToken",
          "normalized": "URI-\u003eAccessToken-\u003eURI",
          "package": "hoauth2",
          "partial": "Access Token",
          "signature": "URI-\u003eAccessToken-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:appendAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend query parameters with \u003ccode\u003e?\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "appendQueryParam",
          "package": "hoauth2",
          "signature": "URI -\u003e QueryParams -\u003e URI",
          "source": "src/Network-OAuth-OAuth2-Internal.html#appendQueryParam",
          "type": "function"
        },
        "index": {
          "description": "Append query parameters with",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "appendQueryParam",
          "normalized": "URI-\u003eQueryParams-\u003eURI",
          "package": "hoauth2",
          "partial": "Query Param",
          "signature": "URI-\u003eQueryParams-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:appendQueryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare the authorization URL.\n   Redirect to this URL asking for user interactive authentication.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "authorizationUrl",
          "package": "hoauth2",
          "signature": "OAuth2 -\u003e URI",
          "source": "src/Network-OAuth-OAuth2-Internal.html#authorizationUrl",
          "type": "function"
        },
        "index": {
          "description": "Prepare the authorization URL Redirect to this URL asking for user interactive authentication",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "authorizationUrl",
          "normalized": "OAuth-\u003eURI",
          "package": "hoauth2",
          "partial": "Url",
          "signature": "OAuth-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:authorizationUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthAccessTokenEndpoint",
          "package": "hoauth2",
          "signature": "ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthAccessTokenEndpoint",
          "package": "hoauth2",
          "partial": "Access Token Endpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthAccessTokenEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthCallback",
          "package": "hoauth2",
          "signature": "Maybe ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthCallback",
          "package": "hoauth2",
          "partial": "Callback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthClientId",
          "package": "hoauth2",
          "signature": "ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthClientId",
          "package": "hoauth2",
          "partial": "Client Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthClientId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthClientSecret",
          "package": "hoauth2",
          "signature": "ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthClientSecret",
          "package": "hoauth2",
          "partial": "Client Secret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthClientSecret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthOAuthorizeEndpoint",
          "package": "hoauth2",
          "signature": "ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#OAuth2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "oauthOAuthorizeEndpoint",
          "package": "hoauth2",
          "partial": "OAuthorize Endpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:oauthOAuthorizeEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing a Refresh Token.\n   obtain a new access token by sending a refresh token to the Authorization server.\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "refreshAccessTokenUrl",
          "package": "hoauth2",
          "signature": "OAuth2-\u003e ByteString-\u003e (URI, PostBody)",
          "type": "function"
        },
        "index": {
          "description": "Using Refresh Token obtain new access token by sending refresh token to the Authorization server",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "refreshAccessTokenUrl",
          "normalized": "OAuth-\u003eByteString-\u003e(URI,PostBody)",
          "package": "hoauth2",
          "partial": "Access Token Url",
          "signature": "OAuth-\u003eByteString-\u003e(URI,PostBody)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:refreshAccessTokenUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "refreshToken",
          "package": "hoauth2",
          "signature": "Maybe ByteString",
          "source": "src/Network-OAuth-OAuth2-Internal.html#AccessToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "refreshToken",
          "package": "hoauth2",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:refreshToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift value in the Maybe and abonda Nothing\n\u003c/p\u003e",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "transform'",
          "package": "hoauth2",
          "signature": "[(a, Maybe b)] -\u003e [(a, b)]",
          "source": "src/Network-OAuth-OAuth2-Internal.html#transform%27",
          "type": "function"
        },
        "index": {
          "description": "lift value in the Maybe and abonda Nothing",
          "hierarchy": "Network OAuth OAuth2 Internal",
          "module": "Network.OAuth.OAuth2.Internal",
          "name": "transform'",
          "normalized": "[(a,Maybe b)]-\u003e[(a,b)]",
          "package": "hoauth2",
          "signature": "[(a,Maybe b)]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2-Internal.html#v:transform-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.OAuth2",
          "name": "OAuth2",
          "package": "hoauth2",
          "source": "src/Network-OAuth-OAuth2.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network OAuth OAuth2",
          "module": "Network.OAuth.OAuth2",
          "name": "OAuth2",
          "package": "hoauth2",
          "partial": "OAuth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth2/docs/Network-OAuth-OAuth2.html#"
      }
    }
  ]
]