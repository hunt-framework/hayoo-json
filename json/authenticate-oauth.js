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
        "word": "authenticate-oauth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This module is deprecated; rewrite your code using MonadResource\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis Module provides interface for the instance of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n What this module do is just adding \u003ccode\u003e\u003ca\u003ewithManager\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "IO",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated This module is deprecated rewrite your code using MonadResource This Module provides interface for the instance of MonadIO instead of MonadIO What this module do is just adding withManager or runResourceT",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "IO",
          "package": "authenticate-oauth",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getAccessToken",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Credential-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getAccessToken",
          "normalized": "OAuth-\u003eCredential-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Access Token",
          "signature": "OAuth-\u003eCredential-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getAccessToken'",
          "package": "authenticate-oauth",
          "signature": "(Request -\u003e Request)-\u003e OAuth-\u003e Credential-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getAccessToken'",
          "normalized": "(Request-\u003eRequest)-\u003eOAuth-\u003eCredential-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Access Token'",
          "signature": "(Request-\u003eRequest)-\u003eOAuth-\u003eCredential-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getAccessToken-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token via the proxy.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getAccessTokenProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy-\u003e OAuth-\u003e Credential-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token via the proxy",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getAccessTokenProxy",
          "normalized": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Access Token Proxy",
          "signature": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getAccessTokenProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet temporary credential for requesting acces token.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredential",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get temporary credential for requesting acces token",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredential",
          "normalized": "OAuth-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential",
          "signature": "OAuth-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getTemporaryCredential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredential'",
          "package": "authenticate-oauth",
          "signature": "(Request -\u003e Request)-\u003e OAuth-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredential'",
          "normalized": "(Request-\u003eRequest)-\u003eOAuth-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential'",
          "signature": "(Request-\u003eRequest)-\u003eOAuth-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getTemporaryCredential-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet temporary credential for requesting access token via the proxy.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredentialProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy-\u003e OAuth-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get temporary credential for requesting access token via the proxy",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredentialProxy",
          "normalized": "Maybe Proxy-\u003eOAuth-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential Proxy",
          "signature": "Maybe Proxy-\u003eOAuth-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getTemporaryCredentialProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet temporary credential for requesting access token with Scope parameter.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredentialWithScope",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003e OAuth-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get temporary credential for requesting access token with Scope parameter",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTemporaryCredentialWithScope",
          "normalized": "ByteString-\u003eOAuth-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential With Scope",
          "signature": "ByteString-\u003eOAuth-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getTemporaryCredentialWithScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTokenCredential",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Credential-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTokenCredential",
          "normalized": "OAuth-\u003eCredential-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Token Credential",
          "signature": "OAuth-\u003eCredential-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getTokenCredential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token via the proxy.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTokenCredentialProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy-\u003e OAuth-\u003e Credential-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token via the proxy",
          "hierarchy": "Web Authenticate OAuth IO",
          "module": "Web.Authenticate.OAuth.IO",
          "name": "getTokenCredentialProxy",
          "normalized": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Token Credential Proxy",
          "signature": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth-IO.html#v:getTokenCredentialProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth",
          "package": "authenticate-oauth",
          "partial": "OAuth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for redential.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "Credential",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth.html#Credential",
          "type": "data"
        },
        "index": {
          "description": "Data type for redential",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "Credential",
          "package": "authenticate-oauth",
          "partial": "Credential",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#t:Credential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for OAuth client (consumer).\n\u003c/p\u003e\u003cp\u003eThe constructor for this data type is not exposed.\n Instead, you should use the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e method or \u003ccode\u003e\u003ca\u003enewOAuth\u003c/a\u003e\u003c/code\u003e function to retrieve a default instance,\n and then use the records below to make modifications.\n This approach allows us to add configuration options without breaking backwards compatibility.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth.html#OAuth",
          "type": "data"
        },
        "index": {
          "description": "Data type for OAuth client consumer The constructor for this data type is not exposed Instead you should use the def method or newOAuth function to retrieve default instance and then use the records below to make modifications This approach allows us to add configuration options without breaking backwards compatibility",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth",
          "package": "authenticate-oauth",
          "partial": "OAuth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#t:OAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "OAuthException",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth.html#OAuthException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuthException",
          "package": "authenticate-oauth",
          "partial": "OAuth Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#t:OAuthException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "OAuthVersion",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth.html#OAuthVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuthVersion",
          "package": "authenticate-oauth",
          "partial": "OAuth Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#t:OAuthVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for signature method.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "SignMethod",
          "package": "authenticate-oauth",
          "source": "src/Web-Authenticate-OAuth.html#SignMethod",
          "type": "data"
        },
        "index": {
          "description": "Data type for signature method",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "SignMethod",
          "package": "authenticate-oauth",
          "partial": "Sign Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#t:SignMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "Credential",
          "package": "authenticate-oauth",
          "signature": "Credential",
          "source": "src/Web-Authenticate-OAuth.html#Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "Credential",
          "package": "authenticate-oauth",
          "partial": "Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:Credential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "HMACSHA1",
          "package": "authenticate-oauth",
          "signature": "HMACSHA1",
          "source": "src/Web-Authenticate-OAuth.html#SignMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "HMACSHA1",
          "package": "authenticate-oauth",
          "partial": "HMACSHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:HMACSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOAuth protocol ver 1.0 (no oauth_verifier; differs from RFC 5849).\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth10",
          "package": "authenticate-oauth",
          "signature": "OAuth10",
          "source": "src/Web-Authenticate-OAuth.html#OAuthVersion",
          "type": "function"
        },
        "index": {
          "description": "OAuth protocol ver no oauth verifier differs from RFC",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth10",
          "package": "authenticate-oauth",
          "partial": "OAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:OAuth10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOAuth protocol ver 1.0a. This corresponds to community's 1.0a spec and RFC 5849.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth10a",
          "package": "authenticate-oauth",
          "signature": "OAuth10a",
          "source": "src/Web-Authenticate-OAuth.html#OAuthVersion",
          "type": "function"
        },
        "index": {
          "description": "OAuth protocol ver This corresponds to community spec and RFC",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuth10a",
          "package": "authenticate-oauth",
          "partial": "OAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:OAuth10a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "OAuthException",
          "package": "authenticate-oauth",
          "signature": "OAuthException String",
          "source": "src/Web-Authenticate-OAuth.html#OAuthException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "OAuthException",
          "package": "authenticate-oauth",
          "partial": "OAuth Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:OAuthException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "PLAINTEXT",
          "package": "authenticate-oauth",
          "signature": "PLAINTEXT",
          "source": "src/Web-Authenticate-OAuth.html#SignMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "PLAINTEXT",
          "package": "authenticate-oauth",
          "partial": "PLAINTEXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:PLAINTEXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "RSASHA1",
          "package": "authenticate-oauth",
          "signature": "RSASHA1 PrivateKey",
          "source": "src/Web-Authenticate-OAuth.html#SignMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "RSASHA1",
          "package": "authenticate-oauth",
          "partial": "RSASHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:RSASHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "addMaybeProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy -\u003e Request -\u003e Request",
          "source": "src/Web-Authenticate-OAuth.html#addMaybeProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "addMaybeProxy",
          "normalized": "Maybe Proxy-\u003eRequest-\u003eRequest",
          "package": "authenticate-oauth",
          "partial": "Maybe Proxy",
          "signature": "Maybe Proxy-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:addMaybeProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "addScope",
          "package": "authenticate-oauth",
          "signature": "ByteString -\u003e Request -\u003e Request",
          "source": "src/Web-Authenticate-OAuth.html#addScope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "addScope",
          "normalized": "ByteString-\u003eRequest-\u003eRequest",
          "package": "authenticate-oauth",
          "partial": "Scope",
          "signature": "ByteString-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:addScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to obtain OAuth verifier.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "authorizeUrl",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Credential-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "URL to obtain OAuth verifier",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "authorizeUrl",
          "normalized": "OAuth-\u003eCredential-\u003eString",
          "package": "authenticate-oauth",
          "partial": "Url",
          "signature": "OAuth-\u003eCredential-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:authorizeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert OAuth and Credential to URL to authorize.\n   This takes function to choice parameter to pass to the server other than\n   \u003cem\u003eoauth_callback\u003c/em\u003e or \u003cem\u003eoauth_token\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "authorizeUrl'",
          "package": "authenticate-oauth",
          "signature": "(OAuth -\u003e Credential -\u003e SimpleQuery)-\u003e OAuth-\u003e Credential-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Convert OAuth and Credential to URL to authorize This takes function to choice parameter to pass to the server other than oauth callback or oauth token",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "authorizeUrl'",
          "normalized": "(OAuth-\u003eCredential-\u003eSimpleQuery)-\u003eOAuth-\u003eCredential-\u003eString",
          "package": "authenticate-oauth",
          "partial": "Url'",
          "signature": "(OAuth-\u003eCredential-\u003eSimpleQuery)-\u003eOAuth-\u003eCredential-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:authorizeUrl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "def",
          "package": "authenticate-oauth",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "def",
          "package": "authenticate-oauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an oauth parameter for key from given \u003ccode\u003e\u003ca\u003eCredential\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "delete",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003e Credential-\u003e Credential",
          "type": "function"
        },
        "index": {
          "description": "Remove an oauth parameter for key from given Credential",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "delete",
          "normalized": "ByteString-\u003eCredential-\u003eCredential",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003eCredential-\u003eCredential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty credential.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "emptyCredential",
          "package": "authenticate-oauth",
          "signature": "Credential",
          "source": "src/Web-Authenticate-OAuth.html#emptyCredential",
          "type": "function"
        },
        "index": {
          "description": "Empty credential",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "emptyCredential",
          "package": "authenticate-oauth",
          "partial": "Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:emptyCredential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "genSign",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e Credential -\u003e Request -\u003e m ByteString",
          "source": "src/Web-Authenticate-OAuth.html#genSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "genSign",
          "normalized": "OAuth-\u003eCredential-\u003eRequest-\u003ea ByteString",
          "package": "authenticate-oauth",
          "partial": "Sign",
          "signature": "OAuth-\u003eCredential-\u003eRequest-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:genSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getAccessToken",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Credential-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getAccessToken",
          "normalized": "OAuth-\u003eCredential-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Access Token",
          "signature": "OAuth-\u003eCredential-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "getAccessToken'",
          "package": "authenticate-oauth",
          "signature": "(Request -\u003e Request)-\u003e OAuth-\u003e Credential-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getAccessToken'",
          "normalized": "(Request-\u003eRequest)-\u003eOAuth-\u003eCredential-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Access Token'",
          "signature": "(Request-\u003eRequest)-\u003eOAuth-\u003eCredential-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getAccessToken-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token via the proxy.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getAccessTokenProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy-\u003e OAuth-\u003e Credential-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token via the proxy",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getAccessTokenProxy",
          "normalized": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Access Token Proxy",
          "signature": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getAccessTokenProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet temporary credential for requesting acces token.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredential",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get temporary credential for requesting acces token",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredential",
          "normalized": "OAuth-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential",
          "signature": "OAuth-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getTemporaryCredential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredential'",
          "package": "authenticate-oauth",
          "signature": "(Request -\u003e Request)-\u003e OAuth-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredential'",
          "normalized": "(Request-\u003eRequest)-\u003eOAuth-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential'",
          "signature": "(Request-\u003eRequest)-\u003eOAuth-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getTemporaryCredential-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet temporary credential for requesting access token via the proxy.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredentialProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy-\u003e OAuth-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get temporary credential for requesting access token via the proxy",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredentialProxy",
          "normalized": "Maybe Proxy-\u003eOAuth-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential Proxy",
          "signature": "Maybe Proxy-\u003eOAuth-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getTemporaryCredentialProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet temporary credential for requesting access token with Scope parameter.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredentialWithScope",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003e OAuth-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get temporary credential for requesting access token with Scope parameter",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getTemporaryCredentialWithScope",
          "normalized": "ByteString-\u003eOAuth-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Temporary Credential With Scope",
          "signature": "ByteString-\u003eOAuth-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getTemporaryCredentialWithScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getTokenCredential",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Credential-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getTokenCredential",
          "normalized": "OAuth-\u003eCredential-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Token Credential",
          "signature": "OAuth-\u003eCredential-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getTokenCredential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Access token via the proxy.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "getTokenCredentialProxy",
          "package": "authenticate-oauth",
          "signature": "Maybe Proxy-\u003e OAuth-\u003e Credential-\u003e Manager-\u003e m Credential",
          "type": "function"
        },
        "index": {
          "description": "Get Access token via the proxy",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "getTokenCredentialProxy",
          "normalized": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003eManager-\u003ea Credential",
          "package": "authenticate-oauth",
          "partial": "Token Credential Proxy",
          "signature": "Maybe Proxy-\u003eOAuth-\u003eCredential-\u003eManager-\u003em Credential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:getTokenCredentialProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "injectVerifier",
          "package": "authenticate-oauth",
          "signature": "ByteString -\u003e Credential -\u003e Credential",
          "source": "src/Web-Authenticate-OAuth.html#injectVerifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "injectVerifier",
          "normalized": "ByteString-\u003eCredential-\u003eCredential",
          "package": "authenticate-oauth",
          "partial": "Verifier",
          "signature": "ByteString-\u003eCredential-\u003eCredential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:injectVerifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an oauth parameter into given \u003ccode\u003e\u003ca\u003eCredential\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "insert",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003e ByteString-\u003e Credential-\u003e Credential",
          "type": "function"
        },
        "index": {
          "description": "Insert an oauth parameter into given Credential",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "insert",
          "normalized": "ByteString-\u003eByteString-\u003eCredential-\u003eCredential",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003eByteString-\u003eCredential-\u003eCredential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient method for inserting multiple parameters into credential.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "inserts",
          "package": "authenticate-oauth",
          "signature": "[(ByteString, ByteString)] -\u003e Credential -\u003e Credential",
          "source": "src/Web-Authenticate-OAuth.html#inserts",
          "type": "function"
        },
        "index": {
          "description": "Convenient method for inserting multiple parameters into credential",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "inserts",
          "normalized": "[(ByteString,ByteString)]-\u003eCredential-\u003eCredential",
          "package": "authenticate-oauth",
          "signature": "[(ByteString,ByteString)]-\u003eCredential-\u003eCredential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:inserts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient function to create \u003ccode\u003e\u003ca\u003eCredential\u003c/a\u003e\u003c/code\u003e with OAuth Token and Token Secret.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "newCredential",
          "package": "authenticate-oauth",
          "signature": "ByteString-\u003e ByteString-\u003e Credential",
          "type": "function"
        },
        "index": {
          "description": "Convenient function to create Credential with OAuth Token and Token Secret",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "newCredential",
          "normalized": "ByteString-\u003eByteString-\u003eCredential",
          "package": "authenticate-oauth",
          "partial": "Credential",
          "signature": "ByteString-\u003eByteString-\u003eCredential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:newCredential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value for OAuth datatype.\n You must specify at least oauthServerName, URIs and Tokens.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "newOAuth",
          "package": "authenticate-oauth",
          "signature": "OAuth",
          "source": "src/Web-Authenticate-OAuth.html#newOAuth",
          "type": "function"
        },
        "index": {
          "description": "Default value for OAuth datatype You must specify at least oauthServerName URIs and Tokens",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "newOAuth",
          "package": "authenticate-oauth",
          "partial": "OAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:newOAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUri to obtain access token (default: \u003ccode\u003e\"\"\u003c/code\u003e).\n   You MUST specify if you use \u003ccode\u003egetAcessToken\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetAccessToken'\u003c/a\u003e\u003c/code\u003e;\n   otherwise you can just leave this empty.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthAccessTokenUri",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e String",
          "source": "src/Web-Authenticate-OAuth.html#oauthAccessTokenUri",
          "type": "function"
        },
        "index": {
          "description": "Uri to obtain access token default You MUST specify if you use getAcessToken or getAccessToken otherwise you can just leave this empty",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthAccessTokenUri",
          "normalized": "OAuth-\u003eString",
          "package": "authenticate-oauth",
          "partial": "Access Token Uri",
          "signature": "OAuth-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthAccessTokenUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUri to authorize (default: \u003ccode\u003e\"\"\u003c/code\u003e).\n   You MUST specify if you use \u003ccode\u003e\u003ca\u003eauthorizeUrl\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eauthorizeZUrl'\u003c/code\u003e;\n   otherwise you can just leave this empty.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthAuthorizeUri",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e String",
          "source": "src/Web-Authenticate-OAuth.html#oauthAuthorizeUri",
          "type": "function"
        },
        "index": {
          "description": "Uri to authorize default You MUST specify if you use authorizeUrl or authorizeZUrl otherwise you can just leave this empty",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthAuthorizeUri",
          "normalized": "OAuth-\u003eString",
          "package": "authenticate-oauth",
          "partial": "Authorize Uri",
          "signature": "OAuth-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthAuthorizeUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback uri to redirect after authentication (default: \u003ccode\u003eNothing\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthCallback",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e Maybe ByteString",
          "source": "src/Web-Authenticate-OAuth.html#oauthCallback",
          "type": "function"
        },
        "index": {
          "description": "Callback uri to redirect after authentication default Nothing",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthCallback",
          "normalized": "OAuth-\u003eMaybe ByteString",
          "package": "authenticate-oauth",
          "partial": "Callback",
          "signature": "OAuth-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumer key (You MUST specify)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthConsumerKey",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e ByteString",
          "source": "src/Web-Authenticate-OAuth.html#oauthConsumerKey",
          "type": "function"
        },
        "index": {
          "description": "Consumer key You MUST specify",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthConsumerKey",
          "normalized": "OAuth-\u003eByteString",
          "package": "authenticate-oauth",
          "partial": "Consumer Key",
          "signature": "OAuth-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthConsumerKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumer Secret (You MUST specify)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthConsumerSecret",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e ByteString",
          "source": "src/Web-Authenticate-OAuth.html#oauthConsumerSecret",
          "type": "function"
        },
        "index": {
          "description": "Consumer Secret You MUST specify",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthConsumerSecret",
          "normalized": "OAuth-\u003eByteString",
          "package": "authenticate-oauth",
          "partial": "Consumer Secret",
          "signature": "OAuth-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthConsumerSecret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional authorization realm (default: \u003ccode\u003eNothing\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthRealm",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e Maybe ByteString",
          "source": "src/Web-Authenticate-OAuth.html#oauthRealm",
          "type": "function"
        },
        "index": {
          "description": "Optional authorization realm default Nothing",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthRealm",
          "normalized": "OAuth-\u003eMaybe ByteString",
          "package": "authenticate-oauth",
          "partial": "Realm",
          "signature": "OAuth-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthRealm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI to request temporary credential (default: \u003ccode\u003e\"\"\u003c/code\u003e).\n   You MUST specify if you use \u003ccode\u003e\u003ca\u003egetTemporaryCredential'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetTemporaryCredentialProxy\u003c/a\u003e\u003c/code\u003e\n   or \u003ccode\u003e\u003ca\u003egetTemporaryCredential\u003c/a\u003e\u003c/code\u003e; otherwise you can just leave this empty.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthRequestUri",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e String",
          "source": "src/Web-Authenticate-OAuth.html#oauthRequestUri",
          "type": "function"
        },
        "index": {
          "description": "URI to request temporary credential default You MUST specify if you use getTemporaryCredential getTemporaryCredentialProxy or getTemporaryCredential otherwise you can just leave this empty",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthRequestUri",
          "normalized": "OAuth-\u003eString",
          "package": "authenticate-oauth",
          "partial": "Request Uri",
          "signature": "OAuth-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthRequestUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService name (default: \u003ccode\u003e\"\"\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthServerName",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e String",
          "source": "src/Web-Authenticate-OAuth.html#oauthServerName",
          "type": "function"
        },
        "index": {
          "description": "Service name default",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthServerName",
          "normalized": "OAuth-\u003eString",
          "package": "authenticate-oauth",
          "partial": "Server Name",
          "signature": "OAuth-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthServerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature Method (default: \u003ccode\u003e\u003ca\u003eHMACSHA1\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthSignatureMethod",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e SignMethod",
          "source": "src/Web-Authenticate-OAuth.html#oauthSignatureMethod",
          "type": "function"
        },
        "index": {
          "description": "Signature Method default HMACSHA1",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthSignatureMethod",
          "normalized": "OAuth-\u003eSignMethod",
          "package": "authenticate-oauth",
          "partial": "Signature Method",
          "signature": "OAuth-\u003eSignMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthSignatureMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOAuth spec version (default: \u003ccode\u003e\u003ca\u003eOAuth10a\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthVersion",
          "package": "authenticate-oauth",
          "signature": "OAuth -\u003e OAuthVersion",
          "source": "src/Web-Authenticate-OAuth.html#oauthVersion",
          "type": "function"
        },
        "index": {
          "description": "OAuth spec version default OAuth10a",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "oauthVersion",
          "normalized": "OAuth-\u003eOAuthVersion",
          "package": "authenticate-oauth",
          "partial": "Version",
          "signature": "OAuth-\u003eOAuthVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:oauthVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string using the percent encoding method for OAuth.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "paramEncode",
          "package": "authenticate-oauth",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Web-Authenticate-OAuth.html#paramEncode",
          "type": "function"
        },
        "index": {
          "description": "Encode string using the percent encoding method for OAuth",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "paramEncode",
          "normalized": "ByteString-\u003eByteString",
          "package": "authenticate-oauth",
          "partial": "Encode",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:paramEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd OAuth headers & sign to \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Authenticate.OAuth",
          "name": "signOAuth",
          "package": "authenticate-oauth",
          "signature": "OAuth-\u003e Credential-\u003e Request-\u003e m Request",
          "type": "function"
        },
        "index": {
          "description": "Add OAuth headers sign to Request",
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "signOAuth",
          "normalized": "OAuth-\u003eCredential-\u003eRequest-\u003ea Request",
          "package": "authenticate-oauth",
          "partial": "OAuth",
          "signature": "OAuth-\u003eCredential-\u003eRequest-\u003em Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:signOAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.OAuth",
          "name": "unCredential",
          "package": "authenticate-oauth",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Web-Authenticate-OAuth.html#Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate OAuth",
          "module": "Web.Authenticate.OAuth",
          "name": "unCredential",
          "normalized": "[(ByteString,ByteString)]",
          "package": "authenticate-oauth",
          "partial": "Credential",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-oauth/docs/Web-Authenticate-OAuth.html#v:unCredential"
      }
    }
  ]
]