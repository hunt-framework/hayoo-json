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
        "word": "hoauth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell library that implements oauth authentication protocol as defined in \u003ca\u003ehttp://tools.ietf.org/html/draft-hammer-oauth-10\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAccording to the RFC [1]:\n   OAuth provides a method for clients to access server resources on behalf\n   of a resource owner (such as a different client or an end- user).  It also\n   provides a process for end-users to authorize third- party access to their\n   server resources without sharing their credentials (typically, a username and\n   password pair), using user- agent redirections.\n\u003c/p\u003e\u003cp\u003eThe following code should perform a request using 3 legged oauth, provided the parameters are defined correctly:\n\u003c/p\u003e\u003cpre\u003e  reqUrl    = fromJust . parseURL $ \"https://service.provider/request_token\"\n  accUrl    = fromJust . parseURL $ \"https://service.provider/access_token\"\n  srvUrl    = fromJust . parseURL $ \"http://service/path/to/resource/\"\n  authUrl   = (\"http://service.provider/authorize?oauth_token=\"++) . findWithDefault (\"oauth_token\",\"ERROR\") . oauthParams\n  app       = Application \"consumerKey\" \"consumerSec\" OOB\n  response  = runOAuthM (fromApplication app) $ do { signRq2 PLAINTEXT Nothing reqUrl \u003e\u003e= oauthRequest CurlHttpClient\n                                                   ; cliAskAuthorization authUrl\n                                                   ; signRq2 PLAINTEXT Nothing accUrl \u003e\u003e= oauthRequest CurlHttpClient\n                                                   ; signRq2 HMACSHA1 (Just $ Realm \"realm\") srvUrl \u003e\u003e= serviceRequest CurlHttpClient\n                                                   }\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "Consumer",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell library that implements oauth authentication protocol as defined in http tools.ietf.org html draft-hammer-oauth-10 According to the RFC OAuth provides method for clients to access server resources on behalf of resource owner such as different client or an end user It also provides process for end-users to authorize third party access to their server resources without sharing their credentials typically username and password pair using user agent redirections The following code should perform request using legged oauth provided the parameters are defined correctly reqUrl fromJust parseURL https service.provider request token accUrl fromJust parseURL https service.provider access token srvUrl fromJust parseURL http service path to resource authUrl http service.provider authorize oauth token findWithDefault oauth token ERROR oauthParams app Application consumerKey consumerSec OOB response runOAuthM fromApplication app do signRq2 PLAINTEXT Nothing reqUrl oauthRequest CurlHttpClient cliAskAuthorization authUrl signRq2 PLAINTEXT Nothing accUrl oauthRequest CurlHttpClient signRq2 HMACSHA1 Just Realm realm srvUrl serviceRequest CurlHttpClient",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Consumer",
          "package": "hoauth",
          "partial": "Consumer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies the application.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "Application",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#Application",
          "type": "data"
        },
        "index": {
          "description": "Identifies the application",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Application",
          "package": "hoauth",
          "partial": "Application",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom string that is unique amongst requests. Refer to \u003ca\u003ehttp://oauth.net/core/1.0/#nonce\u003c/a\u003e for more information.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "Nonce",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#Nonce",
          "type": "newtype"
        },
        "index": {
          "description": "Random string that is unique amongst requests Refer to http oauth.net core nonce for more information",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Nonce",
          "package": "hoauth",
          "partial": "Nonce",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Nonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback used in oauth authorization\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "OAuthCallback",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#OAuthCallback",
          "type": "data"
        },
        "index": {
          "description": "Callback used in oauth authorization",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "OAuthCallback",
          "package": "hoauth",
          "partial": "OAuth Callback",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:OAuthCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "OAuthMonadT",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#OAuthMonadT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "OAuthMonadT",
          "package": "hoauth",
          "partial": "OAuth Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:OAuthMonadT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA request that is ready to be performed, i.e., that contains authorization headers.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "OAuthRequest",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#OAuthRequest",
          "type": "data"
        },
        "index": {
          "description": "request that is ready to be performed i.e that contains authorization headers",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "OAuthRequest",
          "package": "hoauth",
          "partial": "OAuth Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:OAuthRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe optional authentication realm. Refer to \u003ca\u003ehttp://oauth.net/core/1.0/#auth_header_authorization\u003c/a\u003e for more information.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "Realm",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#Realm",
          "type": "newtype"
        },
        "index": {
          "description": "The optional authentication realm Refer to http oauth.net core auth header authorization for more information",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Realm",
          "package": "hoauth",
          "partial": "Realm",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Realm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable signature methods.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "SigMethod",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#SigMethod",
          "type": "data"
        },
        "index": {
          "description": "Available signature methods",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "SigMethod",
          "package": "hoauth",
          "partial": "Sig Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:SigMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnix timestamp (seconds since epoch). Refer to \u003ca\u003ehttp://oauth.net/core/1.0/#nonce\u003c/a\u003e for more information.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "Timestamp",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#Timestamp",
          "type": "newtype"
        },
        "index": {
          "description": "Unix timestamp seconds since epoch Refer to http oauth.net core nonce for more information",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Timestamp",
          "package": "hoauth",
          "partial": "Timestamp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe OAuth Token.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "Token",
          "package": "hoauth",
          "source": "src/Network-OAuth-Consumer.html#Token",
          "type": "data"
        },
        "index": {
          "description": "The OAuth Token",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Token",
          "package": "hoauth",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a proper 3 legged OAuth. The difference between this and ReqToken\n      is that user has authorized your application and you can perform requests\n      on behalf of that user.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "AccessToken",
          "package": "hoauth",
          "signature": "AccessToken",
          "source": "src/Network-OAuth-Consumer.html#Token",
          "type": "function"
        },
        "index": {
          "description": "This is proper legged OAuth The difference between this and ReqToken is that user has authorized your application and you can perform requests on behalf of that user",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "AccessToken",
          "package": "hoauth",
          "partial": "Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:AccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "Application",
          "package": "hoauth",
          "signature": "Application",
          "source": "src/Network-OAuth-Consumer.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Application",
          "package": "hoauth",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eHMAC_SHA1\u003c/code\u003e \u003cem\u003econsumer_key\u003c/em\u003e \u003cem\u003etoken_secret\u003c/em\u003e signature method uses the\n      \u003cem\u003eHMAC-SHA1\u003c/em\u003e signature algorithm as defined in\n      \u003ca\u003ehttp://tools.ietf.org/html/rfc2104\u003c/a\u003e where the Signature Base String is\n      the text and the key is the concatenated values (each first encoded per\n      Parameter Encoding) of the Consumer Secret and Token Secret, separated\n      by an \u003cem\u003e&\u003c/em\u003e character (ASCII code 38) even if empty.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "HMACSHA1",
          "package": "hoauth",
          "signature": "HMACSHA1",
          "source": "src/Network-OAuth-Consumer.html#SigMethod",
          "type": "function"
        },
        "index": {
          "description": "The HMAC SHA1 consumer key token secret signature method uses the HMAC-SHA1 signature algorithm as defined in http tools.ietf.org html rfc2104 where the Signature Base String is the text and the key is the concatenated values each first encoded per Parameter Encoding of the Consumer Secret and Token Secret separated by an character ASCII code even if empty",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "HMACSHA1",
          "package": "hoauth",
          "partial": "HMACSHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:HMACSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "Nonce",
          "package": "hoauth",
          "signature": "Nonce",
          "source": "src/Network-OAuth-Consumer.html#Nonce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Nonce",
          "package": "hoauth",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Nonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "OOB",
          "package": "hoauth",
          "signature": "OOB",
          "source": "src/Network-OAuth-Consumer.html#OAuthCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "OOB",
          "package": "hoauth",
          "partial": "OOB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:OOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePLAINTEXT\u003c/a\u003e\u003c/code\u003e \u003cem\u003econsumer_key\u003c/em\u003e \u003cem\u003etoken_secret\u003c/em\u003e method does not provide\n      any security protection and SHOULD only be used over a secure channel\n      such as \u003cem\u003eHTTPS\u003c/em\u003e. It does not use the Signature Base String.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "PLAINTEXT",
          "package": "hoauth",
          "signature": "PLAINTEXT",
          "source": "src/Network-OAuth-Consumer.html#SigMethod",
          "type": "function"
        },
        "index": {
          "description": "The PLAINTEXT consumer key token secret method does not provide any security protection and SHOULD only be used over secure channel such as HTTPS It does not use the Signature Base String",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "PLAINTEXT",
          "package": "hoauth",
          "partial": "PLAINTEXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:PLAINTEXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eRSA-SHA1\u003c/a\u003e signature method uses the RSASSA-PKCS1-v1_5 signature\n      algorithm as defined in [RFC3447], Section 8.2 (also known as\n      PKCS#1), using SHA-1 as the hash function for EMSA-PKCS1-v1_5.  To\n      use this method, the client MUST have established client credentials\n      with the server that included its RSA public key (in a manner that is\n      beyond the scope of this specification).\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "RSASHA1",
          "package": "hoauth",
          "signature": "RSASHA1 PrivateKey",
          "source": "src/Network-OAuth-Consumer.html#SigMethod",
          "type": "function"
        },
        "index": {
          "description": "The RSA-SHA1 signature method uses the RSASSA-PKCS1-v1 signature algorithm as defined in RFC3447 Section also known as PKCS using SHA-1 as the hash function for EMSA-PKCS1-v1 To use this method the client MUST have established client credentials with the server that included its RSA public key in manner that is beyond the scope of this specification",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "RSASHA1",
          "package": "hoauth",
          "partial": "RSASHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:RSASHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "Realm",
          "package": "hoauth",
          "signature": "Realm",
          "source": "src/Network-OAuth-Consumer.html#Realm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Realm",
          "package": "hoauth",
          "partial": "Realm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Realm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service provider has granted you the request token but the\n      user has not yet authorized your application. You need to\n      exchange this token by a proper AccessToken, but this may only\n      happen after user has granted you permission to do so.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "ReqToken",
          "package": "hoauth",
          "signature": "ReqToken",
          "source": "src/Network-OAuth-Consumer.html#Token",
          "type": "function"
        },
        "index": {
          "description": "The service provider has granted you the request token but the user has not yet authorized your application You need to exchange this token by proper AccessToken but this may only happen after user has granted you permission to do so",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "ReqToken",
          "package": "hoauth",
          "partial": "Req Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:ReqToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "Timestamp",
          "package": "hoauth",
          "signature": "Timestamp",
          "source": "src/Network-OAuth-Consumer.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "Timestamp",
          "package": "hoauth",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token is used to perform 2 legged OAuth requests. \n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "TwoLegg",
          "package": "hoauth",
          "signature": "TwoLegg",
          "source": "src/Network-OAuth-Consumer.html#Token",
          "type": "function"
        },
        "index": {
          "description": "This token is used to perform legged OAuth requests",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "TwoLegg",
          "package": "hoauth",
          "partial": "Two Legg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:TwoLegg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "URL",
          "package": "hoauth",
          "signature": "URL String",
          "source": "src/Network-OAuth-Consumer.html#OAuthCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "URL",
          "package": "hoauth",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "application",
          "package": "hoauth",
          "signature": "Application",
          "source": "src/Network-OAuth-Consumer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "application",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the authorization header and updates the request.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "authorization",
          "package": "hoauth",
          "signature": "SigMethod -\u003e Maybe Realm -\u003e Nonce -\u003e Timestamp -\u003e Token -\u003e Request -\u003e String",
          "source": "src/Network-OAuth-Consumer.html#authorization",
          "type": "function"
        },
        "index": {
          "description": "Computes the authorization header and updates the request",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "authorization",
          "normalized": "SigMethod-\u003eMaybe Realm-\u003eNonce-\u003eTimestamp-\u003eToken-\u003eRequest-\u003eString",
          "package": "hoauth",
          "signature": "SigMethod-\u003eMaybe Realm-\u003eNonce-\u003eTimestamp-\u003eToken-\u003eRequest-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:authorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "callback",
          "package": "hoauth",
          "signature": "OAuthCallback",
          "source": "src/Network-OAuth-Consumer.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "callback",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbably this is just useful for testing. It asks the user (stdout/stdin)\n to authorize the application and provide the oauth_verifier.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "cliAskAuthorization",
          "package": "hoauth",
          "signature": "(Token -\u003e String) -\u003e OAuthMonadT m ()",
          "source": "src/Network-OAuth-Consumer.html#cliAskAuthorization",
          "type": "function"
        },
        "index": {
          "description": "Probably this is just useful for testing It asks the user stdout stdin to authorize the application and provide the oauth verifier",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "cliAskAuthorization",
          "normalized": "(Token-\u003eString)-\u003eOAuthMonadT a()",
          "package": "hoauth",
          "partial": "Ask Authorization",
          "signature": "(Token-\u003eString)-\u003eOAuthMonadT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:cliAskAuthorization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "consKey",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Consumer.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "consKey",
          "package": "hoauth",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:consKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "consSec",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Consumer.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "consSec",
          "package": "hoauth",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:consSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a TwoLegg token from an application\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "fromApplication",
          "package": "hoauth",
          "signature": "Application -\u003e Token",
          "source": "src/Network-OAuth-Consumer.html#fromApplication",
          "type": "function"
        },
        "index": {
          "description": "Creates TwoLegg token from an application",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "fromApplication",
          "normalized": "Application-\u003eToken",
          "package": "hoauth",
          "partial": "Application",
          "signature": "Application-\u003eToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:fromApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives a response possibly from a service provider and updates the\n token. As a matter effect, assumes the content-type is\n application/x-www-form-urlencoded (because some service providers send it as\n text/plain) and if the status is [200..300) updates the token accordingly.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "fromResponse",
          "package": "hoauth",
          "signature": "Response -\u003e Token -\u003e Either String Token",
          "source": "src/Network-OAuth-Consumer.html#fromResponse",
          "type": "function"
        },
        "index": {
          "description": "Receives response possibly from service provider and updates the token As matter effect assumes the content-type is application x-www-form-urlencoded because some service providers send it as text plain and if the status is updates the token accordingly",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "fromResponse",
          "normalized": "Response-\u003eToken-\u003eEither String Token",
          "package": "hoauth",
          "partial": "Response",
          "signature": "Response-\u003eToken-\u003eEither String Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:fromResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the token from the OAuthMonadT.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "getToken",
          "package": "hoauth",
          "signature": "OAuthMonadT m Token",
          "source": "src/Network-OAuth-Consumer.html#getToken",
          "type": "function"
        },
        "index": {
          "description": "Extracts the token from the OAuthMonadT",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "getToken",
          "package": "hoauth",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:getToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms an application into a token.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "ignite",
          "package": "hoauth",
          "signature": "Application -\u003e OAuthMonadT m ()",
          "source": "src/Network-OAuth-Consumer.html#ignite",
          "type": "function"
        },
        "index": {
          "description": "Transforms an application into token",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "ignite",
          "normalized": "Application-\u003eOAuthMonadT a()",
          "package": "hoauth",
          "signature": "Application-\u003eOAuthMonadT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:ignite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjects the oauth_verifier into the token. Usually this means the user has\n authorized the app to access his data.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "injectOAuthVerifier",
          "package": "hoauth",
          "signature": "String -\u003e Token -\u003e Token",
          "source": "src/Network-OAuth-Consumer.html#injectOAuthVerifier",
          "type": "function"
        },
        "index": {
          "description": "Injects the oauth verifier into the token Usually this means the user has authorized the app to access his data",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "injectOAuthVerifier",
          "normalized": "String-\u003eToken-\u003eToken",
          "package": "hoauth",
          "partial": "OAuth Verifier",
          "signature": "String-\u003eToken-\u003eToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:injectOAuthVerifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "oauthParams",
          "package": "hoauth",
          "signature": "FieldList",
          "source": "src/Network-OAuth-Consumer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "oauthParams",
          "package": "hoauth",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:oauthParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes an oauth request which is intended to upgrade/refresh the current\n   token.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "oauthRequest",
          "package": "hoauth",
          "signature": "c -\u003e OAuthRequest -\u003e OAuthMonadT m Token",
          "source": "src/Network-OAuth-Consumer.html#oauthRequest",
          "type": "function"
        },
        "index": {
          "description": "Executes an oauth request which is intended to upgrade refresh the current token",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "oauthRequest",
          "normalized": "a-\u003eOAuthRequest-\u003eOAuthMonadT b Token",
          "package": "hoauth",
          "partial": "Request",
          "signature": "c-\u003eOAuthRequest-\u003eOAuthMonadT m Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:oauthRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply create the OAuthRequest but adds no Authorization header.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "packRq",
          "package": "hoauth",
          "signature": "Request -\u003e OAuthRequest",
          "source": "src/Network-OAuth-Consumer.html#packRq",
          "type": "function"
        },
        "index": {
          "description": "Simply create the OAuthRequest but adds no Authorization header",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "packRq",
          "normalized": "Request-\u003eOAuthRequest",
          "package": "hoauth",
          "partial": "Rq",
          "signature": "Request-\u003eOAuthRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:packRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to the put function.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "putToken",
          "package": "hoauth",
          "signature": "Token -\u003e OAuthMonadT m ()",
          "source": "src/Network-OAuth-Consumer.html#putToken",
          "type": "function"
        },
        "index": {
          "description": "Alias to the put function",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "putToken",
          "normalized": "Token-\u003eOAuthMonadT a()",
          "package": "hoauth",
          "partial": "Token",
          "signature": "Token-\u003eOAuthMonadT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:putToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the oauth monad using a given error handler\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "runOAuth",
          "package": "hoauth",
          "signature": "(String -\u003e m a) -\u003e Token -\u003e OAuthMonadT m a -\u003e m a",
          "source": "src/Network-OAuth-Consumer.html#runOAuth",
          "type": "function"
        },
        "index": {
          "description": "Execute the oauth monad using given error handler",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "runOAuth",
          "normalized": "(String-\u003ea b)-\u003eToken-\u003eOAuthMonadT a b-\u003ea b",
          "package": "hoauth",
          "partial": "OAuth",
          "signature": "(String-\u003em a)-\u003eToken-\u003eOAuthMonadT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:runOAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the oauth monad and returns the value it produced using\n \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e as the error handler.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "runOAuthM",
          "package": "hoauth",
          "signature": "Token -\u003e OAuthMonadT m a -\u003e m a",
          "source": "src/Network-OAuth-Consumer.html#runOAuthM",
          "type": "function"
        },
        "index": {
          "description": "Execute the oauth monad and returns the value it produced using fail as the error handler",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "runOAuthM",
          "normalized": "Token-\u003eOAuthMonadT a b-\u003ea b",
          "package": "hoauth",
          "partial": "OAuth",
          "signature": "Token-\u003eOAuthMonadT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:runOAuthM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a signed request with the available token.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "serviceRequest",
          "package": "hoauth",
          "signature": "c -\u003e OAuthRequest -\u003e OAuthMonadT m Response",
          "source": "src/Network-OAuth-Consumer.html#serviceRequest",
          "type": "function"
        },
        "index": {
          "description": "Performs signed request with the available token",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "serviceRequest",
          "normalized": "a-\u003eOAuthRequest-\u003eOAuthMonadT b Response",
          "package": "hoauth",
          "partial": "Request",
          "signature": "c-\u003eOAuthRequest-\u003eOAuthMonadT m Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:serviceRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete the request with authorization headers.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "signRq",
          "package": "hoauth",
          "signature": "Token -\u003e SigMethod -\u003e Maybe Realm -\u003e Request -\u003e m OAuthRequest",
          "source": "src/Network-OAuth-Consumer.html#signRq",
          "type": "function"
        },
        "index": {
          "description": "Complete the request with authorization headers",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "signRq",
          "normalized": "Token-\u003eSigMethod-\u003eMaybe Realm-\u003eRequest-\u003ea OAuthRequest",
          "package": "hoauth",
          "partial": "Rq",
          "signature": "Token-\u003eSigMethod-\u003eMaybe Realm-\u003eRequest-\u003em OAuthRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:signRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete the request with authorization headers.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "signRq2",
          "package": "hoauth",
          "signature": "SigMethod -\u003e Maybe Realm -\u003e Request -\u003e OAuthMonadT m OAuthRequest",
          "source": "src/Network-OAuth-Consumer.html#signRq2",
          "type": "function"
        },
        "index": {
          "description": "Complete the request with authorization headers",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "signRq2",
          "normalized": "SigMethod-\u003eMaybe Realm-\u003eRequest-\u003eOAuthMonadT a OAuthRequest",
          "package": "hoauth",
          "partial": "Rq",
          "signature": "SigMethod-\u003eMaybe Realm-\u003eRequest-\u003eOAuthMonadT m OAuthRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:signRq2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigns a request using a given signature method. This expects the request\n   to be a valid request already (for instance, none and timestamp are not set).\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "signature",
          "package": "hoauth",
          "signature": "SigMethod -\u003e Token -\u003e Request -\u003e String",
          "source": "src/Network-OAuth-Consumer.html#signature",
          "type": "function"
        },
        "index": {
          "description": "Signs request using given signature method This expects the request to be valid request already for instance none and timestamp are not set",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "signature",
          "normalized": "SigMethod-\u003eToken-\u003eRequest-\u003eString",
          "package": "hoauth",
          "signature": "SigMethod-\u003eToken-\u003eRequest-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether or not the current token is able to perform 3-legged requests.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "threeLegged",
          "package": "hoauth",
          "signature": "Token -\u003e Bool",
          "source": "src/Network-OAuth-Consumer.html#threeLegged",
          "type": "function"
        },
        "index": {
          "description": "Tests whether or not the current token is able to perform legged requests",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "threeLegged",
          "normalized": "Token-\u003eBool",
          "package": "hoauth",
          "partial": "Legged",
          "signature": "Token-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:threeLegged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the token is able to perform 2-legged oauth requests.\n\u003c/p\u003e",
          "module": "Network.OAuth.Consumer",
          "name": "twoLegged",
          "package": "hoauth",
          "signature": "Token -\u003e Bool",
          "source": "src/Network-OAuth-Consumer.html#twoLegged",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the token is able to perform legged oauth requests",
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "twoLegged",
          "normalized": "Token-\u003eBool",
          "package": "hoauth",
          "partial": "Legged",
          "signature": "Token-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:twoLegged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "unNonce",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Consumer.html#Nonce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "unNonce",
          "package": "hoauth",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:unNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "unRealm",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Consumer.html#Realm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "unRealm",
          "package": "hoauth",
          "partial": "Realm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:unRealm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Consumer",
          "name": "unTimestamp",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Consumer.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Consumer",
          "module": "Network.OAuth.Consumer",
          "name": "unTimestamp",
          "package": "hoauth",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:unTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class that is able to perform HTTP requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "CurlHttpClient",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-CurlHttpClient.html",
          "type": "module"
        },
        "index": {
          "description": "type class that is able to perform HTTP requests",
          "hierarchy": "Network OAuth Http CurlHttpClient",
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "CurlHttpClient",
          "package": "hoauth",
          "partial": "Curl Http Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "CurlClient",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-CurlHttpClient.html#CurlClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OAuth Http CurlHttpClient",
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "CurlClient",
          "package": "hoauth",
          "partial": "Curl Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#t:CurlClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "CurlClient",
          "package": "hoauth",
          "signature": "CurlClient",
          "source": "src/Network-OAuth-Http-CurlHttpClient.html#CurlClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http CurlHttpClient",
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "CurlClient",
          "package": "hoauth",
          "partial": "Curl Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#v:CurlClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "OptionsCurlClient",
          "package": "hoauth",
          "signature": "OptionsCurlClient [CurlOption]",
          "source": "src/Network-OAuth-Http-CurlHttpClient.html#CurlClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http CurlHttpClient",
          "module": "Network.OAuth.Http.CurlHttpClient",
          "name": "OptionsCurlClient",
          "normalized": "OptionsCurlClient[CurlOption]",
          "package": "hoauth",
          "partial": "Options Curl Client",
          "signature": "OptionsCurlClient[CurlOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#v:OptionsCurlClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMinimum definition of a user agent required to implement oauth\n service calls. This should suffice for most applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.Http.HttpClient",
          "name": "HttpClient",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-HttpClient.html",
          "type": "module"
        },
        "index": {
          "description": "Minimum definition of user agent required to implement oauth service calls This should suffice for most applications",
          "hierarchy": "Network OAuth Http HttpClient",
          "module": "Network.OAuth.Http.HttpClient",
          "name": "HttpClient",
          "package": "hoauth",
          "partial": "Http Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.HttpClient",
          "name": "HttpClient",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-HttpClient.html#HttpClient",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network OAuth Http HttpClient",
          "module": "Network.OAuth.Http.HttpClient",
          "name": "HttpClient",
          "package": "hoauth",
          "partial": "Http Client",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#t:HttpClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.HttpClient",
          "name": "runClient",
          "package": "hoauth",
          "signature": "c -\u003e Request -\u003e m (Either String Response)",
          "source": "src/Network-OAuth-Http-HttpClient.html#runClient",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network OAuth Http HttpClient",
          "module": "Network.OAuth.Http.HttpClient",
          "name": "runClient",
          "normalized": "a-\u003eRequest-\u003eb(Either String Response)",
          "package": "hoauth",
          "partial": "Client",
          "signature": "c-\u003eRequest-\u003em(Either String Response)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#v:runClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.HttpClient",
          "name": "runClient_",
          "package": "hoauth",
          "signature": "c -\u003e Request -\u003e m Response",
          "source": "src/Network-OAuth-Http-HttpClient.html#runClient_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network OAuth Http HttpClient",
          "module": "Network.OAuth.Http.HttpClient",
          "name": "runClient_",
          "normalized": "a-\u003eRequest-\u003eb Response",
          "package": "hoauth",
          "partial": "Client",
          "signature": "c-\u003eRequest-\u003em Response",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#v:runClient_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePercent encoding \u003ca\u003ehttp://tools.ietf.org/html/rfc3986#page-12\u003c/a\u003e functions,\n with the exception that all encoding/decoding is in UTF-8.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "PercentEncoding",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-PercentEncoding.html",
          "type": "module"
        },
        "index": {
          "description": "Percent encoding http tools.ietf.org html rfc3986 page-12 functions with the exception that all encoding decoding is in UTF-8",
          "hierarchy": "Network OAuth Http PercentEncoding",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "PercentEncoding",
          "package": "hoauth",
          "partial": "Percent Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "PercentEncoding",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-PercentEncoding.html#PercentEncoding",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network OAuth Http PercentEncoding",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "PercentEncoding",
          "package": "hoauth",
          "partial": "Percent Encoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#t:PercentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a percent-encoded type to its native type.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "decode",
          "package": "hoauth",
          "signature": "String -\u003e Maybe (a, String)",
          "source": "src/Network-OAuth-Http-PercentEncoding.html#decode",
          "type": "method"
        },
        "index": {
          "description": "Decodes percent-encoded type to its native type",
          "hierarchy": "Network OAuth Http PercentEncoding",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "decode",
          "normalized": "String-\u003eMaybe(a,String)",
          "package": "hoauth",
          "signature": "String-\u003eMaybe(a,String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a percent encoded string. In case of failure returns a default value, instead of Nothing.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "decodeWithDefault",
          "package": "hoauth",
          "signature": "a -\u003e String -\u003e a",
          "source": "src/Network-OAuth-Http-PercentEncoding.html#decodeWithDefault",
          "type": "function"
        },
        "index": {
          "description": "Decodes percent encoded string In case of failure returns default value instead of Nothing",
          "hierarchy": "Network OAuth Http PercentEncoding",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "decodeWithDefault",
          "normalized": "a-\u003eString-\u003ea",
          "package": "hoauth",
          "partial": "With Default",
          "signature": "a-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#v:decodeWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a type into its percent encoding representation.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "encode",
          "package": "hoauth",
          "signature": "a -\u003e String",
          "source": "src/Network-OAuth-Http-PercentEncoding.html#encode",
          "type": "method"
        },
        "index": {
          "description": "Encodes type into its percent encoding representation",
          "hierarchy": "Network OAuth Http PercentEncoding",
          "module": "Network.OAuth.Http.PercentEncoding",
          "name": "encode",
          "normalized": "a-\u003eString",
          "package": "hoauth",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe request currently is only able to represent an HTTP request.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "Request",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html",
          "type": "module"
        },
        "index": {
          "description": "The request currently is only able to represent an HTTP request",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Request",
          "package": "hoauth",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "Content",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html#Content",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Content",
          "package": "hoauth",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey-value list.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "FieldList",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html#FieldList",
          "type": "data"
        },
        "index": {
          "description": "Key-value list",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "FieldList",
          "package": "hoauth",
          "partial": "Field List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:FieldList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "FormDataPart",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "FormDataPart",
          "package": "hoauth",
          "partial": "Form Data Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:FormDataPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll known HTTP methods\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "Method",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "data"
        },
        "index": {
          "description": "All known HTTP methods",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Method",
          "package": "hoauth",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "Request",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Request",
          "package": "hoauth",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported HTTP versions\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "Version",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Request.html#Version",
          "type": "data"
        },
        "index": {
          "description": "Supported HTTP versions",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Version",
          "package": "hoauth",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "CONNECT",
          "package": "hoauth",
          "signature": "CONNECT",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "CONNECT",
          "package": "hoauth",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "ContentBuffer",
          "package": "hoauth",
          "signature": "ContentBuffer CString Long",
          "source": "src/Network-OAuth-Http-Request.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "ContentBuffer",
          "package": "hoauth",
          "partial": "Content Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ContentBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "ContentFile",
          "package": "hoauth",
          "signature": "ContentFile FilePath",
          "source": "src/Network-OAuth-Http-Request.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "ContentFile",
          "package": "hoauth",
          "partial": "Content File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ContentFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "ContentString",
          "package": "hoauth",
          "signature": "ContentString String",
          "source": "src/Network-OAuth-Http-Request.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "ContentString",
          "package": "hoauth",
          "partial": "Content String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ContentString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "DELETE",
          "package": "hoauth",
          "signature": "DELETE",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "DELETE",
          "package": "hoauth",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "FormDataPart",
          "package": "hoauth",
          "signature": "FormDataPart",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "FormDataPart",
          "package": "hoauth",
          "partial": "Form Data Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:FormDataPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "GET",
          "package": "hoauth",
          "signature": "GET",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "GET",
          "package": "hoauth",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "HEAD",
          "package": "hoauth",
          "signature": "HEAD",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "HEAD",
          "package": "hoauth",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "Http10",
          "package": "hoauth",
          "signature": "Http10",
          "source": "src/Network-OAuth-Http-Request.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Http10",
          "package": "hoauth",
          "partial": "Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:Http10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "Http11",
          "package": "hoauth",
          "signature": "Http11",
          "source": "src/Network-OAuth-Http-Request.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "Http11",
          "package": "hoauth",
          "partial": "Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:Http11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "POST",
          "package": "hoauth",
          "signature": "POST",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "POST",
          "package": "hoauth",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "PUT",
          "package": "hoauth",
          "signature": "PUT",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "PUT",
          "package": "hoauth",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "ReqHttp",
          "package": "hoauth",
          "signature": "ReqHttp",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "ReqHttp",
          "package": "hoauth",
          "partial": "Req Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ReqHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "TRACE",
          "package": "hoauth",
          "signature": "TRACE",
          "source": "src/Network-OAuth-Http-Request.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "TRACE",
          "package": "hoauth",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates all occurrences of a given key with a new value. Does nothing if\n   the values does not exist.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "change",
          "package": "hoauth",
          "signature": "(String, String) -\u003e FieldList -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#change",
          "type": "function"
        },
        "index": {
          "description": "Updates all occurrences of given key with new value Does nothing if the values does not exist",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "change",
          "normalized": "(String,String)-\u003eFieldList-\u003eFieldList",
          "package": "hoauth",
          "signature": "(String,String)-\u003eFieldList-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "content",
          "package": "hoauth",
          "signature": "Content",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "content",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "contentType",
          "package": "hoauth",
          "signature": "Maybe String",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "contentType",
          "package": "hoauth",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:contentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "convertMultipart",
          "package": "hoauth",
          "signature": "[FormDataPart] -\u003e [HttpPost]",
          "source": "src/Network-OAuth-Http-Request.html#convertMultipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "convertMultipart",
          "normalized": "[FormDataPart]-\u003e[HttpPost]",
          "package": "hoauth",
          "partial": "Multipart",
          "signature": "[FormDataPart]-\u003e[HttpPost]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:convertMultipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an empty fieldlist.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "empty",
          "package": "hoauth",
          "signature": "FieldList",
          "source": "src/Network-OAuth-Http-Request.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Returns an empty fieldlist",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "empty",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "extraHeaders",
          "package": "hoauth",
          "signature": "[String]",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "extraHeaders",
          "normalized": "[String]",
          "package": "hoauth",
          "partial": "Headers",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:extraHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind keys that satisfy a given predicate.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "find",
          "package": "hoauth",
          "signature": "(String -\u003e Bool) -\u003e FieldList -\u003e [String]",
          "source": "src/Network-OAuth-Http-Request.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find keys that satisfy given predicate",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "find",
          "normalized": "(String-\u003eBool)-\u003eFieldList-\u003e[String]",
          "package": "hoauth",
          "signature": "(String-\u003eBool)-\u003eFieldList-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds a the value defined in a fieldlist or returns a default value. In\n the event there are multiple values under the same key the first one is\n returned.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "findWithDefault",
          "package": "hoauth",
          "signature": "(String, String) -\u003e FieldList -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "Finds the value defined in fieldlist or returns default value In the event there are multiple values under the same key the first one is returned",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "findWithDefault",
          "normalized": "(String,String)-\u003eFieldList-\u003eString",
          "package": "hoauth",
          "partial": "With Default",
          "signature": "(String,String)-\u003eFieldList-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a FieldList type from a list.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "fromList",
          "package": "hoauth",
          "signature": "[(String, String)] -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates FieldList type from list",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "fromList",
          "normalized": "[(String,String)]-\u003eFieldList",
          "package": "hoauth",
          "partial": "List",
          "signature": "[(String,String)]-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hostname to connect to\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "host",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The hostname to connect to",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "host",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003efindWithDefault\u003c/a\u003e but the match is case-insenstiive.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "ifindWithDefault",
          "package": "hoauth",
          "signature": "(String, String) -\u003e FieldList -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#ifindWithDefault",
          "type": "function"
        },
        "index": {
          "description": "Same as findWithDefault but the match is case-insenstiive",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "ifindWithDefault",
          "normalized": "(String,String)-\u003eFieldList-\u003eString",
          "package": "hoauth",
          "partial": "With Default",
          "signature": "(String,String)-\u003eFieldList-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ifindWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into a fieldlist.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "insert",
          "package": "hoauth",
          "signature": "(String, String) -\u003e FieldList -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts new value into fieldlist",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "insert",
          "normalized": "(String,String)-\u003eFieldList-\u003eFieldList",
          "package": "hoauth",
          "signature": "(String,String)-\u003eFieldList-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP method of the request.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "method",
          "package": "hoauth",
          "signature": "Method",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The HTTP method of the request",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "method",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message body (i.e., for multipart/form-data)\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "multipartPayload",
          "package": "hoauth",
          "signature": "[FormDataPart]",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The message body i.e for multipart form-data",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "multipartPayload",
          "normalized": "[FormDataPart]",
          "package": "hoauth",
          "partial": "Payload",
          "signature": "[FormDataPart]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:multipartPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a query string.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "parseQString",
          "package": "hoauth",
          "signature": "String -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#parseQString",
          "type": "function"
        },
        "index": {
          "description": "Parse query string",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "parseQString",
          "normalized": "String-\u003eFieldList",
          "package": "hoauth",
          "partial": "QString",
          "signature": "String-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:parseQString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a URL and creates an request type.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "parseURL",
          "package": "hoauth",
          "signature": "String -\u003e Maybe Request",
          "source": "src/Network-OAuth-Http-Request.html#parseURL",
          "type": "function"
        },
        "index": {
          "description": "Parse URL and creates an request type",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "parseURL",
          "normalized": "String-\u003eMaybe Request",
          "package": "hoauth",
          "partial": "URL",
          "signature": "String-\u003eMaybe Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:parseURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path split into components \n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "pathComps",
          "package": "hoauth",
          "signature": "[String]",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The path split into components",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "pathComps",
          "normalized": "[String]",
          "package": "hoauth",
          "partial": "Comps",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:pathComps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port to connect to\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "port",
          "package": "hoauth",
          "signature": "Int",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The port to connect to",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "port",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "postName",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "postName",
          "package": "hoauth",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:postName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe query string, usually set for GET requests\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "qString",
          "package": "hoauth",
          "signature": "FieldList",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The query string usually set for GET requests",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "qString",
          "package": "hoauth",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:qString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts or updates occurrences of a given key.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "replace",
          "package": "hoauth",
          "signature": "(String, String) -\u003e FieldList -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Inserts or updates occurrences of given key",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "replace",
          "normalized": "(String,String)-\u003eFieldList-\u003eFieldList",
          "package": "hoauth",
          "signature": "(String,String)-\u003eFieldList-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003cem\u003ereplace\u003c/em\u003e but work on a list type\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "replaces",
          "package": "hoauth",
          "signature": "[(String, String)] -\u003e FieldList -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#replaces",
          "type": "function"
        },
        "index": {
          "description": "Same as replace but work on list type",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "replaces",
          "normalized": "[(String,String)]-\u003eFieldList-\u003eFieldList",
          "package": "hoauth",
          "signature": "[(String,String)]-\u003eFieldList-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:replaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest headers\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "reqHeaders",
          "package": "hoauth",
          "signature": "FieldList",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Request headers",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "reqHeaders",
          "package": "hoauth",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:reqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message body (the first/only string part)\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "reqPayload",
          "package": "hoauth",
          "signature": "ByteString",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The message body the first only string part",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "reqPayload",
          "package": "hoauth",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:reqPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the host+port path of the request. May return only the host when\n   (ssl=False && port==80) or (ssl=True && port==443).\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "showAuthority",
          "package": "hoauth",
          "signature": "Request -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#showAuthority",
          "type": "function"
        },
        "index": {
          "description": "Show the host port path of the request May return only the host when ssl False port or ssl True port",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "showAuthority",
          "normalized": "Request-\u003eString",
          "package": "hoauth",
          "partial": "Authority",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Request",
          "name": "showName",
          "package": "hoauth",
          "signature": "Maybe String",
          "source": "src/Network-OAuth-Http-Request.html#FormDataPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "showName",
          "package": "hoauth",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the path component of the URL.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "showPath",
          "package": "hoauth",
          "signature": "Request -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#showPath",
          "type": "function"
        },
        "index": {
          "description": "Show the path component of the URL",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "showPath",
          "normalized": "Request-\u003eString",
          "package": "hoauth",
          "partial": "Path",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the protocol in use (currently either https or http)\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "showProtocol",
          "package": "hoauth",
          "signature": "Request -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#showProtocol",
          "type": "function"
        },
        "index": {
          "description": "Show the protocol in use currently either https or http",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "showProtocol",
          "normalized": "Request-\u003eString",
          "package": "hoauth",
          "partial": "Protocol",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the querty string of the URL.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "showQString",
          "package": "hoauth",
          "signature": "Request -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#showQString",
          "type": "function"
        },
        "index": {
          "description": "Show the querty string of the URL",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "showQString",
          "normalized": "Request-\u003eString",
          "package": "hoauth",
          "partial": "QString",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showQString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the URL.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "showURL",
          "package": "hoauth",
          "signature": "Request -\u003e String",
          "source": "src/Network-OAuth-Http-Request.html#showURL",
          "type": "function"
        },
        "index": {
          "description": "Show the URL",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "showURL",
          "normalized": "Request-\u003eString",
          "package": "hoauth",
          "partial": "URL",
          "signature": "Request-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a FieldList out from a single element.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "singleton",
          "package": "hoauth",
          "signature": "(String, String) -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Creates FieldList out from single element",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "singleton",
          "normalized": "(String,String)-\u003eFieldList",
          "package": "hoauth",
          "signature": "(String,String)-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWheter or not to use ssl\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "ssl",
          "package": "hoauth",
          "signature": "Bool",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Wheter or not to use ssl",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "ssl",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ssl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a fieldlist into a list type.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "toList",
          "package": "hoauth",
          "signature": "FieldList -\u003e [(String, String)]",
          "source": "src/Network-OAuth-Http-Request.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Transforms fieldlist into list type",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "toList",
          "normalized": "FieldList-\u003e[(String,String)]",
          "package": "hoauth",
          "partial": "List",
          "signature": "FieldList-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two fieldsets, but prefere items of the first list.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "union",
          "package": "hoauth",
          "signature": "FieldList -\u003e FieldList -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#union",
          "type": "function"
        },
        "index": {
          "description": "Combines two fieldsets but prefere items of the first list",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "union",
          "normalized": "FieldList-\u003eFieldList-\u003eFieldList",
          "package": "hoauth",
          "signature": "FieldList-\u003eFieldList-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two fieldsets keeping duplicates.\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "unionAll",
          "package": "hoauth",
          "signature": "FieldList -\u003e FieldList -\u003e FieldList",
          "source": "src/Network-OAuth-Http-Request.html#unionAll",
          "type": "function"
        },
        "index": {
          "description": "Combines two fieldsets keeping duplicates",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "unionAll",
          "normalized": "FieldList-\u003eFieldList-\u003eFieldList",
          "package": "hoauth",
          "partial": "All",
          "signature": "FieldList-\u003eFieldList-\u003eFieldList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:unionAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtocol version\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Request",
          "name": "version",
          "package": "hoauth",
          "signature": "Version",
          "source": "src/Network-OAuth-Http-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Protocol version",
          "hierarchy": "Network OAuth Http Request",
          "module": "Network.OAuth.Http.Request",
          "name": "version",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe response of the server for a given \u003ca\u003eRequest\u003c/a\u003e. Similarly to \u003ca\u003eRequest\u003c/a\u003e,\n it is currently only able to represent HTTP responses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.OAuth.Http.Response",
          "name": "Response",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Response.html",
          "type": "module"
        },
        "index": {
          "description": "The response of the server for given Request Similarly to Request it is currently only able to represent HTTP responses",
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "Response",
          "package": "hoauth",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Response",
          "name": "Response",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Response.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "Response",
          "package": "hoauth",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Response",
          "name": "RspHttp",
          "package": "hoauth",
          "signature": "RspHttp",
          "source": "src/Network-OAuth-Http-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "RspHttp",
          "package": "hoauth",
          "partial": "Rsp Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:RspHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message that comes along with the status (e.g. HTTP/1.1 200 OK)\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Response",
          "name": "reason",
          "package": "hoauth",
          "signature": "String",
          "source": "src/Network-OAuth-Http-Response.html#Response",
          "type": "function"
        },
        "index": {
          "description": "The message that comes along with the status e.g HTTP OK",
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "reason",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe response headers\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Response",
          "name": "rspHeaders",
          "package": "hoauth",
          "signature": "FieldList",
          "source": "src/Network-OAuth-Http-Response.html#Response",
          "type": "function"
        },
        "index": {
          "description": "The response headers",
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "rspHeaders",
          "package": "hoauth",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:rspHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe body of the message\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Response",
          "name": "rspPayload",
          "package": "hoauth",
          "signature": "ByteString",
          "source": "src/Network-OAuth-Http-Response.html#Response",
          "type": "function"
        },
        "index": {
          "description": "The body of the message",
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "rspPayload",
          "package": "hoauth",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:rspPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe status code (e.g. 200, 302)\n\u003c/p\u003e",
          "module": "Network.OAuth.Http.Response",
          "name": "status",
          "package": "hoauth",
          "signature": "Int",
          "source": "src/Network-OAuth-Http-Response.html#Response",
          "type": "function"
        },
        "index": {
          "description": "The status code e.g",
          "hierarchy": "Network OAuth Http Response",
          "module": "Network.OAuth.Http.Response",
          "name": "status",
          "package": "hoauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Util",
          "name": "Util",
          "package": "hoauth",
          "source": "src/Network-OAuth-Http-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network OAuth Http Util",
          "module": "Network.OAuth.Http.Util",
          "name": "Util",
          "package": "hoauth",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OAuth.Http.Util",
          "name": "splitBy",
          "package": "hoauth",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Network-OAuth-Http-Util.html#splitBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OAuth Http Util",
          "module": "Network.OAuth.Http.Util",
          "name": "splitBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "hoauth",
          "partial": "By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Util.html#v:splitBy"
      }
    }
  ]
]