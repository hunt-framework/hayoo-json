[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell library that implements oauth authentication protocol as defined in \u003ca\u003ehttp://tools.ietf.org/html/draft-hammer-oauth-10\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAccording to the RFC [1]:\n   OAuth provides a method for clients to access server resources on behalf\n   of a resource owner (such as a different client or an end- user).  It also\n   provides a process for end-users to authorize third- party access to their\n   server resources without sharing their credentials (typically, a username and\n   password pair), using user- agent redirections.\n\u003c/p\u003e\u003cp\u003eThe following code should perform a request using 3 legged oauth, provided the parameters are defined correctly:\n\u003c/p\u003e\u003cpre\u003e  reqUrl    = fromJust . parseURL $ \"https://service.provider/request_token\"\n  accUrl    = fromJust . parseURL $ \"https://service.provider/access_token\"\n  srvUrl    = fromJust . parseURL $ \"http://service/path/to/resource/\"\n  authUrl   = (\"http://service.provider/authorize?oauth_token=\"++) . findWithDefault (\"oauth_token\",\"ERROR\") . oauthParams\n  app       = Application \"consumerKey\" \"consumerSec\" OOB\n  response  = runOAuthM (fromApplication app) $ do { signRq2 PLAINTEXT Nothing reqUrl \u003e\u003e= oauthRequest CurlHttpClient\n                                                   ; cliAskAuthorization authUrl\n                                                   ; signRq2 PLAINTEXT Nothing accUrl \u003e\u003e= oauthRequest CurlHttpClient\n                                                   ; signRq2 HMACSHA1 (Just $ Realm \"realm\") srvUrl \u003e\u003e= serviceRequest CurlHttpClient\n                                                   }\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Consumer.html",
        "fct-type": "module",
        "title": "Consumer"
      },
      "index": {
        "description": "Haskell library that implements oauth authentication protocol as defined in http tools.ietf.org html draft-hammer-oauth-10 According to the RFC OAuth provides method for clients to access server resources on behalf of resource owner such as different client or an end user It also provides process for end-users to authorize third party access to their server resources without sharing their credentials typically username and password pair using user agent redirections The following code should perform request using legged oauth provided the parameters are defined correctly reqUrl fromJust parseURL https service.provider request token accUrl fromJust parseURL https service.provider access token srvUrl fromJust parseURL http service path to resource authUrl http service.provider authorize oauth token findWithDefault oauth token ERROR oauthParams app Application consumerKey consumerSec OOB response runOAuthM fromApplication app do signRq2 PLAINTEXT Nothing reqUrl oauthRequest CurlHttpClient cliAskAuthorization authUrl signRq2 PLAINTEXT Nothing accUrl oauthRequest CurlHttpClient signRq2 HMACSHA1 Just Realm realm srvUrl serviceRequest CurlHttpClient",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Consumer",
        "normalized": "",
        "package": "hoauth",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Application",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifies the application.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Consumer.html#Application",
        "fct-type": "data",
        "title": "Application"
      },
      "index": {
        "description": "Identifies the application",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Application",
        "normalized": "",
        "package": "hoauth",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Nonce",
      "description": {
        "fct-descr": "\u003cp\u003eRandom string that is unique amongst requests. Refer to \u003ca\u003ehttp://oauth.net/core/1.0/#nonce\u003c/a\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "newtype",
        "fct-source": "src/Network-OAuth-Consumer.html#Nonce",
        "fct-type": "newtype",
        "title": "Nonce"
      },
      "index": {
        "description": "Random string that is unique amongst requests Refer to http oauth.net core nonce for more information",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Nonce",
        "normalized": "",
        "package": "hoauth",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:OAuthCallback",
      "description": {
        "fct-descr": "\u003cp\u003eCallback used in oauth authorization\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Consumer.html#OAuthCallback",
        "fct-type": "data",
        "title": "OAuthCallback"
      },
      "index": {
        "description": "Callback used in oauth authorization",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "OAuthCallback",
        "normalized": "",
        "package": "hoauth",
        "partial": "OAuth Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:OAuthMonadT",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Consumer.html#OAuthMonadT",
        "fct-type": "data",
        "title": "OAuthMonadT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "OAuthMonadT",
        "normalized": "",
        "package": "hoauth",
        "partial": "OAuth Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:OAuthRequest",
      "description": {
        "fct-descr": "\u003cp\u003eA request that is ready to be performed, i.e., that contains authorization headers.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Consumer.html#OAuthRequest",
        "fct-type": "data",
        "title": "OAuthRequest"
      },
      "index": {
        "description": "request that is ready to be performed i.e that contains authorization headers",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "OAuthRequest",
        "normalized": "",
        "package": "hoauth",
        "partial": "OAuth Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Realm",
      "description": {
        "fct-descr": "\u003cp\u003eThe optional authentication realm. Refer to \u003ca\u003ehttp://oauth.net/core/1.0/#auth_header_authorization\u003c/a\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "newtype",
        "fct-source": "src/Network-OAuth-Consumer.html#Realm",
        "fct-type": "newtype",
        "title": "Realm"
      },
      "index": {
        "description": "The optional authentication realm Refer to http oauth.net core auth header authorization for more information",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Realm",
        "normalized": "",
        "package": "hoauth",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:SigMethod",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable signature methods.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Consumer.html#SigMethod",
        "fct-type": "data",
        "title": "SigMethod"
      },
      "index": {
        "description": "Available signature methods",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "SigMethod",
        "normalized": "",
        "package": "hoauth",
        "partial": "Sig Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Timestamp",
      "description": {
        "fct-descr": "\u003cp\u003eUnix timestamp (seconds since epoch). Refer to \u003ca\u003ehttp://oauth.net/core/1.0/#nonce\u003c/a\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "newtype",
        "fct-source": "src/Network-OAuth-Consumer.html#Timestamp",
        "fct-type": "newtype",
        "title": "Timestamp"
      },
      "index": {
        "description": "Unix timestamp seconds since epoch Refer to http oauth.net core nonce for more information",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Timestamp",
        "normalized": "",
        "package": "hoauth",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eThe OAuth Token.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Consumer.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "The OAuth Token",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Token",
        "normalized": "",
        "package": "hoauth",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:AccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a proper 3 legged OAuth. The difference between this and ReqToken\n      is that user has authorized your application and you can perform requests\n      on behalf of that user.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "AccessToken",
        "fct-source": "src/Network-OAuth-Consumer.html#Token",
        "fct-type": "function",
        "title": "AccessToken"
      },
      "index": {
        "description": "This is proper legged OAuth The difference between this and ReqToken is that user has authorized your application and you can perform requests on behalf of that user",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "AccessToken",
        "normalized": "",
        "package": "hoauth",
        "partial": "Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Application",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Application",
        "fct-source": "src/Network-OAuth-Consumer.html#Application",
        "fct-type": "function",
        "title": "Application"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Application",
        "normalized": "",
        "package": "hoauth",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:HMACSHA1",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eHMAC_SHA1\u003c/code\u003e \u003cem\u003econsumer_key\u003c/em\u003e \u003cem\u003etoken_secret\u003c/em\u003e signature method uses the\n      \u003cem\u003eHMAC-SHA1\u003c/em\u003e signature algorithm as defined in\n      \u003ca\u003ehttp://tools.ietf.org/html/rfc2104\u003c/a\u003e where the Signature Base String is\n      the text and the key is the concatenated values (each first encoded per\n      Parameter Encoding) of the Consumer Secret and Token Secret, separated\n      by an \u003cem\u003e&\u003c/em\u003e character (ASCII code 38) even if empty.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "HMACSHA1",
        "fct-source": "src/Network-OAuth-Consumer.html#SigMethod",
        "fct-type": "function",
        "title": "HMACSHA1"
      },
      "index": {
        "description": "The HMAC SHA1 consumer key token secret signature method uses the HMAC-SHA1 signature algorithm as defined in http tools.ietf.org html rfc2104 where the Signature Base String is the text and the key is the concatenated values each first encoded per Parameter Encoding of the Consumer Secret and Token Secret separated by an character ASCII code even if empty",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "HMACSHA1",
        "normalized": "",
        "package": "hoauth",
        "partial": "HMACSHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Nonce",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Nonce",
        "fct-source": "src/Network-OAuth-Consumer.html#Nonce",
        "fct-type": "function",
        "title": "Nonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Nonce",
        "normalized": "",
        "package": "hoauth",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:OOB",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "OOB",
        "fct-source": "src/Network-OAuth-Consumer.html#OAuthCallback",
        "fct-type": "function",
        "title": "OOB"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "OOB",
        "normalized": "",
        "package": "hoauth",
        "partial": "OOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:PLAINTEXT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePLAINTEXT\u003c/a\u003e\u003c/code\u003e \u003cem\u003econsumer_key\u003c/em\u003e \u003cem\u003etoken_secret\u003c/em\u003e method does not provide\n      any security protection and SHOULD only be used over a secure channel\n      such as \u003cem\u003eHTTPS\u003c/em\u003e. It does not use the Signature Base String.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "PLAINTEXT",
        "fct-source": "src/Network-OAuth-Consumer.html#SigMethod",
        "fct-type": "function",
        "title": "PLAINTEXT"
      },
      "index": {
        "description": "The PLAINTEXT consumer key token secret method does not provide any security protection and SHOULD only be used over secure channel such as HTTPS It does not use the Signature Base String",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "PLAINTEXT",
        "normalized": "",
        "package": "hoauth",
        "partial": "PLAINTEXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:RSASHA1",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ca\u003eRSA-SHA1\u003c/a\u003e signature method uses the RSASSA-PKCS1-v1_5 signature\n      algorithm as defined in [RFC3447], Section 8.2 (also known as\n      PKCS#1), using SHA-1 as the hash function for EMSA-PKCS1-v1_5.  To\n      use this method, the client MUST have established client credentials\n      with the server that included its RSA public key (in a manner that is\n      beyond the scope of this specification).\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "RSASHA1 PrivateKey",
        "fct-source": "src/Network-OAuth-Consumer.html#SigMethod",
        "fct-type": "function",
        "title": "RSASHA1"
      },
      "index": {
        "description": "The RSA-SHA1 signature method uses the RSASSA-PKCS1-v1 signature algorithm as defined in RFC3447 Section also known as PKCS using SHA-1 as the hash function for EMSA-PKCS1-v1 To use this method the client MUST have established client credentials with the server that included its RSA public key in manner that is beyond the scope of this specification",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "RSASHA1",
        "normalized": "",
        "package": "hoauth",
        "partial": "RSASHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Realm",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Realm",
        "fct-source": "src/Network-OAuth-Consumer.html#Realm",
        "fct-type": "function",
        "title": "Realm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Realm",
        "normalized": "",
        "package": "hoauth",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:ReqToken",
      "description": {
        "fct-descr": "\u003cp\u003eThe service provider has granted you the request token but the\n      user has not yet authorized your application. You need to\n      exchange this token by a proper AccessToken, but this may only\n      happen after user has granted you permission to do so.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "ReqToken",
        "fct-source": "src/Network-OAuth-Consumer.html#Token",
        "fct-type": "function",
        "title": "ReqToken"
      },
      "index": {
        "description": "The service provider has granted you the request token but the user has not yet authorized your application You need to exchange this token by proper AccessToken but this may only happen after user has granted you permission to do so",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "ReqToken",
        "normalized": "",
        "package": "hoauth",
        "partial": "Req Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:Timestamp",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Timestamp",
        "fct-source": "src/Network-OAuth-Consumer.html#Timestamp",
        "fct-type": "function",
        "title": "Timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "Timestamp",
        "normalized": "",
        "package": "hoauth",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:TwoLegg",
      "description": {
        "fct-descr": "\u003cp\u003eThis token is used to perform 2 legged OAuth requests. \n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "TwoLegg",
        "fct-source": "src/Network-OAuth-Consumer.html#Token",
        "fct-type": "function",
        "title": "TwoLegg"
      },
      "index": {
        "description": "This token is used to perform legged OAuth requests",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "TwoLegg",
        "normalized": "",
        "package": "hoauth",
        "partial": "Two Legg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:URL",
      "description": {
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "URL String",
        "fct-source": "src/Network-OAuth-Consumer.html#OAuthCallback",
        "fct-type": "function",
        "title": "URL"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "URL",
        "normalized": "",
        "package": "hoauth",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:application",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Application",
        "fct-source": "src/Network-OAuth-Consumer.html#Token",
        "fct-type": "function",
        "title": "application"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "application",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:authorization",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the authorization header and updates the request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "SigMethod -\u003e Maybe Realm -\u003e Nonce -\u003e Timestamp -\u003e Token -\u003e Request -\u003e String",
        "fct-source": "src/Network-OAuth-Consumer.html#authorization",
        "fct-type": "function",
        "title": "authorization"
      },
      "index": {
        "description": "Computes the authorization header and updates the request",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "authorization",
        "normalized": "SigMethod-\u003eMaybe Realm-\u003eNonce-\u003eTimestamp-\u003eToken-\u003eRequest-\u003eString",
        "package": "hoauth",
        "partial": "",
        "signature": "SigMethod-\u003eMaybe Realm-\u003eNonce-\u003eTimestamp-\u003eToken-\u003eRequest-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:callback",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "OAuthCallback",
        "fct-source": "src/Network-OAuth-Consumer.html#Application",
        "fct-type": "function",
        "title": "callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "callback",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:cliAskAuthorization",
      "description": {
        "fct-descr": "\u003cp\u003eProbably this is just useful for testing. It asks the user (stdout/stdin)\n to authorize the application and provide the oauth_verifier.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "(Token -\u003e String) -\u003e OAuthMonadT m ()",
        "fct-source": "src/Network-OAuth-Consumer.html#cliAskAuthorization",
        "fct-type": "function",
        "title": "cliAskAuthorization"
      },
      "index": {
        "description": "Probably this is just useful for testing It asks the user stdout stdin to authorize the application and provide the oauth verifier",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "cliAskAuthorization",
        "normalized": "(Token-\u003eString)-\u003eOAuthMonadT a()",
        "package": "hoauth",
        "partial": "Ask Authorization",
        "signature": "(Token-\u003eString)-\u003eOAuthMonadT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:consKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Consumer.html#Application",
        "fct-type": "function",
        "title": "consKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "consKey",
        "normalized": "",
        "package": "hoauth",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:consSec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Consumer.html#Application",
        "fct-type": "function",
        "title": "consSec"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "consSec",
        "normalized": "",
        "package": "hoauth",
        "partial": "Sec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:fromApplication",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a TwoLegg token from an application\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Application -\u003e Token",
        "fct-source": "src/Network-OAuth-Consumer.html#fromApplication",
        "fct-type": "function",
        "title": "fromApplication"
      },
      "index": {
        "description": "Creates TwoLegg token from an application",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "fromApplication",
        "normalized": "Application-\u003eToken",
        "package": "hoauth",
        "partial": "Application",
        "signature": "Application-\u003eToken"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:fromResponse",
      "description": {
        "fct-descr": "\u003cp\u003eReceives a response possibly from a service provider and updates the\n token. As a matter effect, assumes the content-type is\n application/x-www-form-urlencoded (because some service providers send it as\n text/plain) and if the status is [200..300) updates the token accordingly.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Response -\u003e Token -\u003e Either String Token",
        "fct-source": "src/Network-OAuth-Consumer.html#fromResponse",
        "fct-type": "function",
        "title": "fromResponse"
      },
      "index": {
        "description": "Receives response possibly from service provider and updates the token As matter effect assumes the content-type is application x-www-form-urlencoded because some service providers send it as text plain and if the status is updates the token accordingly",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "fromResponse",
        "normalized": "Response-\u003eToken-\u003eEither String Token",
        "package": "hoauth",
        "partial": "Response",
        "signature": "Response-\u003eToken-\u003eEither String Token"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:getToken",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the token from the OAuthMonadT.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "OAuthMonadT m Token",
        "fct-source": "src/Network-OAuth-Consumer.html#getToken",
        "fct-type": "function",
        "title": "getToken"
      },
      "index": {
        "description": "Extracts the token from the OAuthMonadT",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "getToken",
        "normalized": "",
        "package": "hoauth",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:ignite",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms an application into a token.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Application -\u003e OAuthMonadT m ()",
        "fct-source": "src/Network-OAuth-Consumer.html#ignite",
        "fct-type": "function",
        "title": "ignite"
      },
      "index": {
        "description": "Transforms an application into token",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "ignite",
        "normalized": "Application-\u003eOAuthMonadT a()",
        "package": "hoauth",
        "partial": "",
        "signature": "Application-\u003eOAuthMonadT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:injectOAuthVerifier",
      "description": {
        "fct-descr": "\u003cp\u003eInjects the oauth_verifier into the token. Usually this means the user has\n authorized the app to access his data.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "String -\u003e Token -\u003e Token",
        "fct-source": "src/Network-OAuth-Consumer.html#injectOAuthVerifier",
        "fct-type": "function",
        "title": "injectOAuthVerifier"
      },
      "index": {
        "description": "Injects the oauth verifier into the token Usually this means the user has authorized the app to access his data",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "injectOAuthVerifier",
        "normalized": "String-\u003eToken-\u003eToken",
        "package": "hoauth",
        "partial": "OAuth Verifier",
        "signature": "String-\u003eToken-\u003eToken"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:oauthParams",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "FieldList",
        "fct-source": "src/Network-OAuth-Consumer.html#Token",
        "fct-type": "function",
        "title": "oauthParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "oauthParams",
        "normalized": "",
        "package": "hoauth",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:oauthRequest",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes an oauth request which is intended to upgrade/refresh the current\n   token.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "c -\u003e OAuthRequest -\u003e OAuthMonadT m Token",
        "fct-source": "src/Network-OAuth-Consumer.html#oauthRequest",
        "fct-type": "function",
        "title": "oauthRequest"
      },
      "index": {
        "description": "Executes an oauth request which is intended to upgrade refresh the current token",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "oauthRequest",
        "normalized": "a-\u003eOAuthRequest-\u003eOAuthMonadT b Token",
        "package": "hoauth",
        "partial": "Request",
        "signature": "c-\u003eOAuthRequest-\u003eOAuthMonadT m Token"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:packRq",
      "description": {
        "fct-descr": "\u003cp\u003eSimply create the OAuthRequest but adds no Authorization header.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Request -\u003e OAuthRequest",
        "fct-source": "src/Network-OAuth-Consumer.html#packRq",
        "fct-type": "function",
        "title": "packRq"
      },
      "index": {
        "description": "Simply create the OAuthRequest but adds no Authorization header",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "packRq",
        "normalized": "Request-\u003eOAuthRequest",
        "package": "hoauth",
        "partial": "Rq",
        "signature": "Request-\u003eOAuthRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:putToken",
      "description": {
        "fct-descr": "\u003cp\u003eAlias to the put function.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Token -\u003e OAuthMonadT m ()",
        "fct-source": "src/Network-OAuth-Consumer.html#putToken",
        "fct-type": "function",
        "title": "putToken"
      },
      "index": {
        "description": "Alias to the put function",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "putToken",
        "normalized": "Token-\u003eOAuthMonadT a()",
        "package": "hoauth",
        "partial": "Token",
        "signature": "Token-\u003eOAuthMonadT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:runOAuth",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the oauth monad using a given error handler\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "(String -\u003e m a) -\u003e Token -\u003e OAuthMonadT m a -\u003e m a",
        "fct-source": "src/Network-OAuth-Consumer.html#runOAuth",
        "fct-type": "function",
        "title": "runOAuth"
      },
      "index": {
        "description": "Execute the oauth monad using given error handler",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "runOAuth",
        "normalized": "(String-\u003ea b)-\u003eToken-\u003eOAuthMonadT a b-\u003ea b",
        "package": "hoauth",
        "partial": "OAuth",
        "signature": "(String-\u003em a)-\u003eToken-\u003eOAuthMonadT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:runOAuthM",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the oauth monad and returns the value it produced using\n \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e as the error handler.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Token -\u003e OAuthMonadT m a -\u003e m a",
        "fct-source": "src/Network-OAuth-Consumer.html#runOAuthM",
        "fct-type": "function",
        "title": "runOAuthM"
      },
      "index": {
        "description": "Execute the oauth monad and returns the value it produced using fail as the error handler",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "runOAuthM",
        "normalized": "Token-\u003eOAuthMonadT a b-\u003ea b",
        "package": "hoauth",
        "partial": "OAuth",
        "signature": "Token-\u003eOAuthMonadT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:serviceRequest",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a signed request with the available token.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "c -\u003e OAuthRequest -\u003e OAuthMonadT m Response",
        "fct-source": "src/Network-OAuth-Consumer.html#serviceRequest",
        "fct-type": "function",
        "title": "serviceRequest"
      },
      "index": {
        "description": "Performs signed request with the available token",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "serviceRequest",
        "normalized": "a-\u003eOAuthRequest-\u003eOAuthMonadT b Response",
        "package": "hoauth",
        "partial": "Request",
        "signature": "c-\u003eOAuthRequest-\u003eOAuthMonadT m Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:signRq",
      "description": {
        "fct-descr": "\u003cp\u003eComplete the request with authorization headers.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Token -\u003e SigMethod -\u003e Maybe Realm -\u003e Request -\u003e m OAuthRequest",
        "fct-source": "src/Network-OAuth-Consumer.html#signRq",
        "fct-type": "function",
        "title": "signRq"
      },
      "index": {
        "description": "Complete the request with authorization headers",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "signRq",
        "normalized": "Token-\u003eSigMethod-\u003eMaybe Realm-\u003eRequest-\u003ea OAuthRequest",
        "package": "hoauth",
        "partial": "Rq",
        "signature": "Token-\u003eSigMethod-\u003eMaybe Realm-\u003eRequest-\u003em OAuthRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:signRq2",
      "description": {
        "fct-descr": "\u003cp\u003eComplete the request with authorization headers.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "SigMethod -\u003e Maybe Realm -\u003e Request -\u003e OAuthMonadT m OAuthRequest",
        "fct-source": "src/Network-OAuth-Consumer.html#signRq2",
        "fct-type": "function",
        "title": "signRq2"
      },
      "index": {
        "description": "Complete the request with authorization headers",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "signRq2",
        "normalized": "SigMethod-\u003eMaybe Realm-\u003eRequest-\u003eOAuthMonadT a OAuthRequest",
        "package": "hoauth",
        "partial": "Rq",
        "signature": "SigMethod-\u003eMaybe Realm-\u003eRequest-\u003eOAuthMonadT m OAuthRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:signature",
      "description": {
        "fct-descr": "\u003cp\u003eSigns a request using a given signature method. This expects the request\n   to be a valid request already (for instance, none and timestamp are not set).\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "SigMethod -\u003e Token -\u003e Request -\u003e String",
        "fct-source": "src/Network-OAuth-Consumer.html#signature",
        "fct-type": "function",
        "title": "signature"
      },
      "index": {
        "description": "Signs request using given signature method This expects the request to be valid request already for instance none and timestamp are not set",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "signature",
        "normalized": "SigMethod-\u003eToken-\u003eRequest-\u003eString",
        "package": "hoauth",
        "partial": "",
        "signature": "SigMethod-\u003eToken-\u003eRequest-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:threeLegged",
      "description": {
        "fct-descr": "\u003cp\u003eTests whether or not the current token is able to perform 3-legged requests.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Token -\u003e Bool",
        "fct-source": "src/Network-OAuth-Consumer.html#threeLegged",
        "fct-type": "function",
        "title": "threeLegged"
      },
      "index": {
        "description": "Tests whether or not the current token is able to perform legged requests",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "threeLegged",
        "normalized": "Token-\u003eBool",
        "package": "hoauth",
        "partial": "Legged",
        "signature": "Token-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:twoLegged",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the token is able to perform 2-legged oauth requests.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "Token -\u003e Bool",
        "fct-source": "src/Network-OAuth-Consumer.html#twoLegged",
        "fct-type": "function",
        "title": "twoLegged"
      },
      "index": {
        "description": "Returns true if the token is able to perform legged oauth requests",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "twoLegged",
        "normalized": "Token-\u003eBool",
        "package": "hoauth",
        "partial": "Legged",
        "signature": "Token-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:unNonce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Consumer.html#Nonce",
        "fct-type": "function",
        "title": "unNonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "unNonce",
        "normalized": "",
        "package": "hoauth",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:unRealm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Consumer.html#Realm",
        "fct-type": "function",
        "title": "unRealm"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "unRealm",
        "normalized": "",
        "package": "hoauth",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Consumer.html#v:unTimestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Consumer",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Consumer.html#Timestamp",
        "fct-type": "function",
        "title": "unTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Consumer",
        "module": "Network.OAuth.Consumer",
        "name": "unTimestamp",
        "normalized": "",
        "package": "hoauth",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class that is able to perform HTTP requests.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Http.CurlHttpClient",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Http-CurlHttpClient.html",
        "fct-type": "module",
        "title": "CurlHttpClient"
      },
      "index": {
        "description": "type class that is able to perform HTTP requests",
        "hierarchy": "Network OAuth Http CurlHttpClient",
        "module": "Network.OAuth.Http.CurlHttpClient",
        "name": "CurlHttpClient",
        "normalized": "",
        "package": "hoauth",
        "partial": "Curl Http Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#t:CurlClient",
      "description": {
        "fct-module": "Network.OAuth.Http.CurlHttpClient",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-CurlHttpClient.html#CurlClient",
        "fct-type": "data",
        "title": "CurlClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http CurlHttpClient",
        "module": "Network.OAuth.Http.CurlHttpClient",
        "name": "CurlClient",
        "normalized": "",
        "package": "hoauth",
        "partial": "Curl Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#v:CurlClient",
      "description": {
        "fct-module": "Network.OAuth.Http.CurlHttpClient",
        "fct-package": "hoauth",
        "fct-signature": "CurlClient",
        "fct-source": "src/Network-OAuth-Http-CurlHttpClient.html#CurlClient",
        "fct-type": "function",
        "title": "CurlClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http CurlHttpClient",
        "module": "Network.OAuth.Http.CurlHttpClient",
        "name": "CurlClient",
        "normalized": "",
        "package": "hoauth",
        "partial": "Curl Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-CurlHttpClient.html#v:OptionsCurlClient",
      "description": {
        "fct-module": "Network.OAuth.Http.CurlHttpClient",
        "fct-package": "hoauth",
        "fct-signature": "OptionsCurlClient [CurlOption]",
        "fct-source": "src/Network-OAuth-Http-CurlHttpClient.html#CurlClient",
        "fct-type": "function",
        "title": "OptionsCurlClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http CurlHttpClient",
        "module": "Network.OAuth.Http.CurlHttpClient",
        "name": "OptionsCurlClient",
        "normalized": "OptionsCurlClient[CurlOption]",
        "package": "hoauth",
        "partial": "Options Curl Client",
        "signature": "OptionsCurlClient[CurlOption]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMinimum definition of a user agent required to implement oauth\n service calls. This should suffice for most applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Http.HttpClient",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Http-HttpClient.html",
        "fct-type": "module",
        "title": "HttpClient"
      },
      "index": {
        "description": "Minimum definition of user agent required to implement oauth service calls This should suffice for most applications",
        "hierarchy": "Network OAuth Http HttpClient",
        "module": "Network.OAuth.Http.HttpClient",
        "name": "HttpClient",
        "normalized": "",
        "package": "hoauth",
        "partial": "Http Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#t:HttpClient",
      "description": {
        "fct-module": "Network.OAuth.Http.HttpClient",
        "fct-package": "hoauth",
        "fct-signature": "class",
        "fct-source": "src/Network-OAuth-Http-HttpClient.html#HttpClient",
        "fct-type": "class",
        "title": "HttpClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http HttpClient",
        "module": "Network.OAuth.Http.HttpClient",
        "name": "HttpClient",
        "normalized": "",
        "package": "hoauth",
        "partial": "Http Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#v:runClient",
      "description": {
        "fct-module": "Network.OAuth.Http.HttpClient",
        "fct-package": "hoauth",
        "fct-signature": "c -\u003e Request -\u003e m (Either String Response)",
        "fct-source": "src/Network-OAuth-Http-HttpClient.html#runClient",
        "fct-type": "method",
        "title": "runClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http HttpClient",
        "module": "Network.OAuth.Http.HttpClient",
        "name": "runClient",
        "normalized": "a-\u003eRequest-\u003eb(Either String Response)",
        "package": "hoauth",
        "partial": "Client",
        "signature": "c-\u003eRequest-\u003em(Either String Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-HttpClient.html#v:runClient_",
      "description": {
        "fct-module": "Network.OAuth.Http.HttpClient",
        "fct-package": "hoauth",
        "fct-signature": "c -\u003e Request -\u003e m Response",
        "fct-source": "src/Network-OAuth-Http-HttpClient.html#runClient_",
        "fct-type": "method",
        "title": "runClient_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http HttpClient",
        "module": "Network.OAuth.Http.HttpClient",
        "name": "runClient_",
        "normalized": "a-\u003eRequest-\u003eb Response",
        "package": "hoauth",
        "partial": "Client",
        "signature": "c-\u003eRequest-\u003em Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePercent encoding \u003ca\u003ehttp://tools.ietf.org/html/rfc3986#page-12\u003c/a\u003e functions,\n with the exception that all encoding/decoding is in UTF-8.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Http.PercentEncoding",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Http-PercentEncoding.html",
        "fct-type": "module",
        "title": "PercentEncoding"
      },
      "index": {
        "description": "Percent encoding http tools.ietf.org html rfc3986 page-12 functions with the exception that all encoding decoding is in UTF-8",
        "hierarchy": "Network OAuth Http PercentEncoding",
        "module": "Network.OAuth.Http.PercentEncoding",
        "name": "PercentEncoding",
        "normalized": "",
        "package": "hoauth",
        "partial": "Percent Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#t:PercentEncoding",
      "description": {
        "fct-module": "Network.OAuth.Http.PercentEncoding",
        "fct-package": "hoauth",
        "fct-signature": "class",
        "fct-source": "src/Network-OAuth-Http-PercentEncoding.html#PercentEncoding",
        "fct-type": "class",
        "title": "PercentEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http PercentEncoding",
        "module": "Network.OAuth.Http.PercentEncoding",
        "name": "PercentEncoding",
        "normalized": "",
        "package": "hoauth",
        "partial": "Percent Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes a percent-encoded type to its native type.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.PercentEncoding",
        "fct-package": "hoauth",
        "fct-signature": "String -\u003e Maybe (a, String)",
        "fct-source": "src/Network-OAuth-Http-PercentEncoding.html#decode",
        "fct-type": "method",
        "title": "decode"
      },
      "index": {
        "description": "Decodes percent-encoded type to its native type",
        "hierarchy": "Network OAuth Http PercentEncoding",
        "module": "Network.OAuth.Http.PercentEncoding",
        "name": "decode",
        "normalized": "String-\u003eMaybe(a,String)",
        "package": "hoauth",
        "partial": "",
        "signature": "String-\u003eMaybe(a,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#v:decodeWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes a percent encoded string. In case of failure returns a default value, instead of Nothing.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.PercentEncoding",
        "fct-package": "hoauth",
        "fct-signature": "a -\u003e String -\u003e a",
        "fct-source": "src/Network-OAuth-Http-PercentEncoding.html#decodeWithDefault",
        "fct-type": "function",
        "title": "decodeWithDefault"
      },
      "index": {
        "description": "Decodes percent encoded string In case of failure returns default value instead of Nothing",
        "hierarchy": "Network OAuth Http PercentEncoding",
        "module": "Network.OAuth.Http.PercentEncoding",
        "name": "decodeWithDefault",
        "normalized": "a-\u003eString-\u003ea",
        "package": "hoauth",
        "partial": "With Default",
        "signature": "a-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-PercentEncoding.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncodes a type into its percent encoding representation.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.PercentEncoding",
        "fct-package": "hoauth",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Network-OAuth-Http-PercentEncoding.html#encode",
        "fct-type": "method",
        "title": "encode"
      },
      "index": {
        "description": "Encodes type into its percent encoding representation",
        "hierarchy": "Network OAuth Http PercentEncoding",
        "module": "Network.OAuth.Http.PercentEncoding",
        "name": "encode",
        "normalized": "a-\u003eString",
        "package": "hoauth",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe request currently is only able to represent an HTTP request.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Http-Request.html",
        "fct-type": "module",
        "title": "Request"
      },
      "index": {
        "description": "The request currently is only able to represent an HTTP request",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Request",
        "normalized": "",
        "package": "hoauth",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Content",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Request.html#Content",
        "fct-type": "data",
        "title": "Content"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Content",
        "normalized": "",
        "package": "hoauth",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:FieldList",
      "description": {
        "fct-descr": "\u003cp\u003eKey-value list.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Request.html#FieldList",
        "fct-type": "data",
        "title": "FieldList"
      },
      "index": {
        "description": "Key-value list",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "FieldList",
        "normalized": "",
        "package": "hoauth",
        "partial": "Field List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:FormDataPart",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "data",
        "title": "FormDataPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "FormDataPart",
        "normalized": "",
        "package": "hoauth",
        "partial": "Form Data Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eAll known HTTP methods\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "All known HTTP methods",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Method",
        "normalized": "",
        "package": "hoauth",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Request",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Request",
        "normalized": "",
        "package": "hoauth",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eSupported HTTP versions\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Request.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "Supported HTTP versions",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Version",
        "normalized": "",
        "package": "hoauth",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:CONNECT",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "CONNECT",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "CONNECT",
        "normalized": "",
        "package": "hoauth",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ContentBuffer",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "ContentBuffer CString Long",
        "fct-source": "src/Network-OAuth-Http-Request.html#Content",
        "fct-type": "function",
        "title": "ContentBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "ContentBuffer",
        "normalized": "",
        "package": "hoauth",
        "partial": "Content Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ContentFile",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "ContentFile FilePath",
        "fct-source": "src/Network-OAuth-Http-Request.html#Content",
        "fct-type": "function",
        "title": "ContentFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "ContentFile",
        "normalized": "",
        "package": "hoauth",
        "partial": "Content File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ContentString",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "ContentString String",
        "fct-source": "src/Network-OAuth-Http-Request.html#Content",
        "fct-type": "function",
        "title": "ContentString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "ContentString",
        "normalized": "",
        "package": "hoauth",
        "partial": "Content String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:DELETE",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "DELETE",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "DELETE",
        "normalized": "",
        "package": "hoauth",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:FormDataPart",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FormDataPart",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "function",
        "title": "FormDataPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "FormDataPart",
        "normalized": "",
        "package": "hoauth",
        "partial": "Form Data Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:GET",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "GET",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "GET"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "GET",
        "normalized": "",
        "package": "hoauth",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:HEAD",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "HEAD",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "HEAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "HEAD",
        "normalized": "",
        "package": "hoauth",
        "partial": "HEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:Http10",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Http10",
        "fct-source": "src/Network-OAuth-Http-Request.html#Version",
        "fct-type": "function",
        "title": "Http10"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Http10",
        "normalized": "",
        "package": "hoauth",
        "partial": "Http",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:Http11",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Http11",
        "fct-source": "src/Network-OAuth-Http-Request.html#Version",
        "fct-type": "function",
        "title": "Http11"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "Http11",
        "normalized": "",
        "package": "hoauth",
        "partial": "Http",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:POST",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "POST",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "POST"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "POST",
        "normalized": "",
        "package": "hoauth",
        "partial": "POST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:PUT",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "PUT",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "PUT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "PUT",
        "normalized": "",
        "package": "hoauth",
        "partial": "PUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ReqHttp",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "ReqHttp",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "ReqHttp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "ReqHttp",
        "normalized": "",
        "package": "hoauth",
        "partial": "Req Http",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:TRACE",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "TRACE",
        "fct-source": "src/Network-OAuth-Http-Request.html#Method",
        "fct-type": "function",
        "title": "TRACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "TRACE",
        "normalized": "",
        "package": "hoauth",
        "partial": "TRACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:change",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates all occurrences of a given key with a new value. Does nothing if\n   the values does not exist.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String, String) -\u003e FieldList -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#change",
        "fct-type": "function",
        "title": "change"
      },
      "index": {
        "description": "Updates all occurrences of given key with new value Does nothing if the values does not exist",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "change",
        "normalized": "(String,String)-\u003eFieldList-\u003eFieldList",
        "package": "hoauth",
        "partial": "",
        "signature": "(String,String)-\u003eFieldList-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:content",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Content",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "content",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:contentType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "function",
        "title": "contentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "contentType",
        "normalized": "",
        "package": "hoauth",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:convertMultipart",
      "description": {
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "[FormDataPart] -\u003e [HttpPost]",
        "fct-source": "src/Network-OAuth-Http-Request.html#convertMultipart",
        "fct-type": "function",
        "title": "convertMultipart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "convertMultipart",
        "normalized": "[FormDataPart]-\u003e[HttpPost]",
        "package": "hoauth",
        "partial": "Multipart",
        "signature": "[FormDataPart]-\u003e[HttpPost]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an empty fieldlist.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Returns an empty fieldlist",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "empty",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:extraHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "[String]",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "function",
        "title": "extraHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "extraHeaders",
        "normalized": "[String]",
        "package": "hoauth",
        "partial": "Headers",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFind keys that satisfy a given predicate.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String -\u003e Bool) -\u003e FieldList -\u003e [String]",
        "fct-source": "src/Network-OAuth-Http-Request.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Find keys that satisfy given predicate",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "find",
        "normalized": "(String-\u003eBool)-\u003eFieldList-\u003e[String]",
        "package": "hoauth",
        "partial": "",
        "signature": "(String-\u003eBool)-\u003eFieldList-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eFinds a the value defined in a fieldlist or returns a default value. In\n the event there are multiple values under the same key the first one is\n returned.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String, String) -\u003e FieldList -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "Finds the value defined in fieldlist or returns default value In the event there are multiple values under the same key the first one is returned",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "findWithDefault",
        "normalized": "(String,String)-\u003eFieldList-\u003eString",
        "package": "hoauth",
        "partial": "With Default",
        "signature": "(String,String)-\u003eFieldList-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a FieldList type from a list.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "[(String, String)] -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates FieldList type from list",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "fromList",
        "normalized": "[(String,String)]-\u003eFieldList",
        "package": "hoauth",
        "partial": "List",
        "signature": "[(String,String)]-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname to connect to\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "The hostname to connect to",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "host",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ifindWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ca\u003efindWithDefault\u003c/a\u003e but the match is case-insenstiive.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String, String) -\u003e FieldList -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#ifindWithDefault",
        "fct-type": "function",
        "title": "ifindWithDefault"
      },
      "index": {
        "description": "Same as findWithDefault but the match is case-insenstiive",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "ifindWithDefault",
        "normalized": "(String,String)-\u003eFieldList-\u003eString",
        "package": "hoauth",
        "partial": "With Default",
        "signature": "(String,String)-\u003eFieldList-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a new value into a fieldlist.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String, String) -\u003e FieldList -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts new value into fieldlist",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "insert",
        "normalized": "(String,String)-\u003eFieldList-\u003eFieldList",
        "package": "hoauth",
        "partial": "",
        "signature": "(String,String)-\u003eFieldList-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:method",
      "description": {
        "fct-descr": "\u003cp\u003eThe HTTP method of the request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Method",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "The HTTP method of the request",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "method",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:multipartPayload",
      "description": {
        "fct-descr": "\u003cp\u003eThe message body (i.e., for multipart/form-data)\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "[FormDataPart]",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "multipartPayload"
      },
      "index": {
        "description": "The message body i.e for multipart form-data",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "multipartPayload",
        "normalized": "[FormDataPart]",
        "package": "hoauth",
        "partial": "Payload",
        "signature": "[FormDataPart]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:parseQString",
      "description": {
        "fct-descr": "\u003cp\u003eParse a query string.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "String -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#parseQString",
        "fct-type": "function",
        "title": "parseQString"
      },
      "index": {
        "description": "Parse query string",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "parseQString",
        "normalized": "String-\u003eFieldList",
        "package": "hoauth",
        "partial": "QString",
        "signature": "String-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:parseURL",
      "description": {
        "fct-descr": "\u003cp\u003eParse a URL and creates an request type.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "String -\u003e Maybe Request",
        "fct-source": "src/Network-OAuth-Http-Request.html#parseURL",
        "fct-type": "function",
        "title": "parseURL"
      },
      "index": {
        "description": "Parse URL and creates an request type",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "parseURL",
        "normalized": "String-\u003eMaybe Request",
        "package": "hoauth",
        "partial": "URL",
        "signature": "String-\u003eMaybe Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:pathComps",
      "description": {
        "fct-descr": "\u003cp\u003eThe path split into components \n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "[String]",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "pathComps"
      },
      "index": {
        "description": "The path split into components",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "pathComps",
        "normalized": "[String]",
        "package": "hoauth",
        "partial": "Comps",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eThe port to connect to\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Int",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "The port to connect to",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "port",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:postName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "function",
        "title": "postName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "postName",
        "normalized": "",
        "package": "hoauth",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:qString",
      "description": {
        "fct-descr": "\u003cp\u003eThe query string, usually set for GET requests\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "qString"
      },
      "index": {
        "description": "The query string usually set for GET requests",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "qString",
        "normalized": "",
        "package": "hoauth",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eInserts or updates occurrences of a given key.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String, String) -\u003e FieldList -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Inserts or updates occurrences of given key",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "replace",
        "normalized": "(String,String)-\u003eFieldList-\u003eFieldList",
        "package": "hoauth",
        "partial": "",
        "signature": "(String,String)-\u003eFieldList-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:replaces",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003cem\u003ereplace\u003c/em\u003e but work on a list type\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "[(String, String)] -\u003e FieldList -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#replaces",
        "fct-type": "function",
        "title": "replaces"
      },
      "index": {
        "description": "Same as replace but work on list type",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "replaces",
        "normalized": "[(String,String)]-\u003eFieldList-\u003eFieldList",
        "package": "hoauth",
        "partial": "",
        "signature": "[(String,String)]-\u003eFieldList-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:reqHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eRequest headers\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "reqHeaders"
      },
      "index": {
        "description": "Request headers",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "reqHeaders",
        "normalized": "",
        "package": "hoauth",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:reqPayload",
      "description": {
        "fct-descr": "\u003cp\u003eThe message body (the first/only string part)\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "reqPayload"
      },
      "index": {
        "description": "The message body the first only string part",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "reqPayload",
        "normalized": "",
        "package": "hoauth",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showAuthority",
      "description": {
        "fct-descr": "\u003cp\u003eShow the host+port path of the request. May return only the host when\n   (ssl=False && port==80) or (ssl=True && port==443).\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Request -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#showAuthority",
        "fct-type": "function",
        "title": "showAuthority"
      },
      "index": {
        "description": "Show the host port path of the request May return only the host when ssl False port or ssl True port",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "showAuthority",
        "normalized": "Request-\u003eString",
        "package": "hoauth",
        "partial": "Authority",
        "signature": "Request-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-OAuth-Http-Request.html#FormDataPart",
        "fct-type": "function",
        "title": "showName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "showName",
        "normalized": "",
        "package": "hoauth",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showPath",
      "description": {
        "fct-descr": "\u003cp\u003eShow the path component of the URL.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Request -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#showPath",
        "fct-type": "function",
        "title": "showPath"
      },
      "index": {
        "description": "Show the path component of the URL",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "showPath",
        "normalized": "Request-\u003eString",
        "package": "hoauth",
        "partial": "Path",
        "signature": "Request-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eShow the protocol in use (currently either https or http)\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Request -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#showProtocol",
        "fct-type": "function",
        "title": "showProtocol"
      },
      "index": {
        "description": "Show the protocol in use currently either https or http",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "showProtocol",
        "normalized": "Request-\u003eString",
        "package": "hoauth",
        "partial": "Protocol",
        "signature": "Request-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showQString",
      "description": {
        "fct-descr": "\u003cp\u003eShow the querty string of the URL.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Request -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#showQString",
        "fct-type": "function",
        "title": "showQString"
      },
      "index": {
        "description": "Show the querty string of the URL",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "showQString",
        "normalized": "Request-\u003eString",
        "package": "hoauth",
        "partial": "QString",
        "signature": "Request-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:showURL",
      "description": {
        "fct-descr": "\u003cp\u003eShow the URL.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Request -\u003e String",
        "fct-source": "src/Network-OAuth-Http-Request.html#showURL",
        "fct-type": "function",
        "title": "showURL"
      },
      "index": {
        "description": "Show the URL",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "showURL",
        "normalized": "Request-\u003eString",
        "package": "hoauth",
        "partial": "URL",
        "signature": "Request-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a FieldList out from a single element.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "(String, String) -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Creates FieldList out from single element",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "singleton",
        "normalized": "(String,String)-\u003eFieldList",
        "package": "hoauth",
        "partial": "",
        "signature": "(String,String)-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:ssl",
      "description": {
        "fct-descr": "\u003cp\u003eWheter or not to use ssl\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Bool",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "ssl"
      },
      "index": {
        "description": "Wheter or not to use ssl",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "ssl",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a fieldlist into a list type.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FieldList -\u003e [(String, String)]",
        "fct-source": "src/Network-OAuth-Http-Request.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Transforms fieldlist into list type",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "toList",
        "normalized": "FieldList-\u003e[(String,String)]",
        "package": "hoauth",
        "partial": "List",
        "signature": "FieldList-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two fieldsets, but prefere items of the first list.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FieldList -\u003e FieldList -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Combines two fieldsets but prefere items of the first list",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "union",
        "normalized": "FieldList-\u003eFieldList-\u003eFieldList",
        "package": "hoauth",
        "partial": "",
        "signature": "FieldList-\u003eFieldList-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:unionAll",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two fieldsets keeping duplicates.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "FieldList -\u003e FieldList -\u003e FieldList",
        "fct-source": "src/Network-OAuth-Http-Request.html#unionAll",
        "fct-type": "function",
        "title": "unionAll"
      },
      "index": {
        "description": "Combines two fieldsets keeping duplicates",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "unionAll",
        "normalized": "FieldList-\u003eFieldList-\u003eFieldList",
        "package": "hoauth",
        "partial": "All",
        "signature": "FieldList-\u003eFieldList-\u003eFieldList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Request.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eProtocol version\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Request",
        "fct-package": "hoauth",
        "fct-signature": "Version",
        "fct-source": "src/Network-OAuth-Http-Request.html#Request",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Protocol version",
        "hierarchy": "Network OAuth Http Request",
        "module": "Network.OAuth.Http.Request",
        "name": "version",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe response of the server for a given \u003ca\u003eRequest\u003c/a\u003e. Similarly to \u003ca\u003eRequest\u003c/a\u003e,\n it is currently only able to represent HTTP responses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Http-Response.html",
        "fct-type": "module",
        "title": "Response"
      },
      "index": {
        "description": "The response of the server for given Request Similarly to Request it is currently only able to represent HTTP responses",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "Response",
        "normalized": "",
        "package": "hoauth",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#t:Response",
      "description": {
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Http-Response.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "Response",
        "normalized": "",
        "package": "hoauth",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:RspHttp",
      "description": {
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "RspHttp",
        "fct-source": "src/Network-OAuth-Http-Response.html#Response",
        "fct-type": "function",
        "title": "RspHttp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "RspHttp",
        "normalized": "",
        "package": "hoauth",
        "partial": "Rsp Http",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003eThe message that comes along with the status (e.g. HTTP/1.1 200 OK)\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "String",
        "fct-source": "src/Network-OAuth-Http-Response.html#Response",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "The message that comes along with the status e.g HTTP OK",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "reason",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:rspHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eThe response headers\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "FieldList",
        "fct-source": "src/Network-OAuth-Http-Response.html#Response",
        "fct-type": "function",
        "title": "rspHeaders"
      },
      "index": {
        "description": "The response headers",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "rspHeaders",
        "normalized": "",
        "package": "hoauth",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:rspPayload",
      "description": {
        "fct-descr": "\u003cp\u003eThe body of the message\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-Http-Response.html#Response",
        "fct-type": "function",
        "title": "rspPayload"
      },
      "index": {
        "description": "The body of the message",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "rspPayload",
        "normalized": "",
        "package": "hoauth",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Response.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eThe status code (e.g. 200, 302)\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Http.Response",
        "fct-package": "hoauth",
        "fct-signature": "Int",
        "fct-source": "src/Network-OAuth-Http-Response.html#Response",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "The status code e.g",
        "hierarchy": "Network OAuth Http Response",
        "module": "Network.OAuth.Http.Response",
        "name": "status",
        "normalized": "",
        "package": "hoauth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Util.html#",
      "description": {
        "fct-module": "Network.OAuth.Http.Util",
        "fct-package": "hoauth",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Http-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Util",
        "module": "Network.OAuth.Http.Util",
        "name": "Util",
        "normalized": "",
        "package": "hoauth",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoauth/docs/Network-OAuth-Http-Util.html#v:splitBy",
      "description": {
        "fct-module": "Network.OAuth.Http.Util",
        "fct-package": "hoauth",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Network-OAuth-Http-Util.html#splitBy",
        "fct-type": "function",
        "title": "splitBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Http Util",
        "module": "Network.OAuth.Http.Util",
        "name": "splitBy",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "hoauth",
        "partial": "By",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  }
]