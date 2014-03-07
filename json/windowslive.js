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
        "word": "windowslive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.App",
          "name": "App",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-App.html#App",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network WindowsLive App",
          "module": "Network.WindowsLive.App",
          "name": "App",
          "package": "windowslive",
          "partial": "App",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-App.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.App",
          "name": "AppID",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-App.html#AppID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network WindowsLive App",
          "module": "Network.WindowsLive.App",
          "name": "AppID",
          "package": "windowslive",
          "partial": "App ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-App.html#t:AppID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.App",
          "name": "appId",
          "package": "windowslive",
          "signature": "App -\u003e AppID",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-App.html#appId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network WindowsLive App",
          "module": "Network.WindowsLive.App",
          "name": "appId",
          "normalized": "App-\u003eAppID",
          "package": "windowslive",
          "partial": "Id",
          "signature": "App-\u003eAppID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-App.html#v:appId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Decode, validate, and parse a String containing x-www-urlencoded\n |data encrypted with this application's secret\n",
          "module": "Network.WindowsLive.App",
          "name": "decode",
          "package": "windowslive",
          "signature": "App -\u003e String -\u003e m URLEncoded",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-App.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode validate and parse String containing x-www-urlencoded data encrypted with this application secret",
          "hierarchy": "Network WindowsLive App",
          "module": "Network.WindowsLive.App",
          "name": "decode",
          "normalized": "App-\u003eString-\u003ea URLEncoded",
          "package": "windowslive",
          "signature": "App-\u003eString-\u003em URLEncoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-App.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a new \u003ctt\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/tt\u003e, validating the Application ID and Secret key\n",
          "module": "Network.WindowsLive.App",
          "name": "new",
          "package": "windowslive",
          "signature": "String -\u003e String -\u003e m App",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-App.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new App validating the Application ID and Secret key",
          "hierarchy": "Network WindowsLive App",
          "module": "Network.WindowsLive.App",
          "name": "new",
          "normalized": "String-\u003eString-\u003ea App",
          "package": "windowslive",
          "signature": "String-\u003eString-\u003em App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-App.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generate an application verifier to prove to the server that we\n know the secret and application ID\n",
          "module": "Network.WindowsLive.App",
          "name": "verifier",
          "package": "windowslive",
          "signature": "App -\u003e POSIXTime -\u003e URLEncoded",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-App.html#verifier",
          "type": "function"
        },
        "index": {
          "description": "Generate an application verifier to prove to the server that we know the secret and application ID",
          "hierarchy": "Network WindowsLive App",
          "module": "Network.WindowsLive.App",
          "name": "verifier",
          "normalized": "App-\u003ePOSIXTime-\u003eURLEncoded",
          "package": "windowslive",
          "signature": "App-\u003ePOSIXTime-\u003eURLEncoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-App.html#v:verifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.ConsentToken",
          "name": "ConsentQuery",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#ConsentQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "ConsentQuery",
          "package": "windowslive",
          "partial": "Consent Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#t:ConsentQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.ConsentToken",
          "name": "ConsentToken",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#ConsentToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "ConsentToken",
          "package": "windowslive",
          "partial": "Consent Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#t:ConsentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.ConsentToken",
          "name": "DelegationToken",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#DelegationToken",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "DelegationToken",
          "package": "windowslive",
          "partial": "Delegation Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#t:DelegationToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.ConsentToken",
          "name": "Offer",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#Offer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "Offer",
          "package": "windowslive",
          "partial": "Offer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#t:Offer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.ConsentToken",
          "name": "OfferType",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#OfferType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "OfferType",
          "package": "windowslive",
          "partial": "Offer Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#t:OfferType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.ConsentToken",
          "name": "RefreshToken",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#RefreshToken",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "RefreshToken",
          "package": "windowslive",
          "partial": "Refresh Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#t:RefreshToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generate a consent query with the minimum information filled in\n",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "consentQuery",
          "package": "windowslive",
          "signature": "[OfferType] -\u003e URI -\u003e URI -\u003e ConsentQuery",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#consentQuery",
          "type": "function"
        },
        "index": {
          "description": "Generate consent query with the minimum information filled in",
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "consentQuery",
          "normalized": "[OfferType]-\u003eURI-\u003eURI-\u003eConsentQuery",
          "package": "windowslive",
          "partial": "Query",
          "signature": "[OfferType]-\u003eURI-\u003eURI-\u003eConsentQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#v:consentQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The base consent URL for consent requests\n",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "consentUrl",
          "package": "windowslive",
          "signature": "URI",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#consentUrl",
          "type": "function"
        },
        "index": {
          "description": "The base consent URL for consent requests",
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "consentUrl",
          "package": "windowslive",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#v:consentUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a consent query, generate a (relative) \u003ctt\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/tt\u003e to initiate\n Delegated Authentication. This URI must be turned into an absolute\n URI by e.g:\n\u003c/p\u003e\u003cpre\u003e\n   let relConsentUrl = getConsentUrl app ts consentQuery\n   in relConsentUrl `relativeTo` \u003ctt\u003e\u003ca\u003econsentUrl\u003c/a\u003e\u003c/tt\u003e\n\u003c/pre\u003e",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "getConsentUrl",
          "package": "windowslive",
          "signature": "App -\u003e POSIXTime -\u003e ConsentQuery -\u003e URI",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#getConsentUrl",
          "type": "function"
        },
        "index": {
          "description": "Given consent query generate relative URI to initiate Delegated Authentication This URI must be turned into an absolute URI by e.g let relConsentUrl getConsentUrl app ts consentQuery in relConsentUrl relativeTo consentUrl",
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "getConsentUrl",
          "normalized": "App-\u003ePOSIXTime-\u003eConsentQuery-\u003eURI",
          "package": "windowslive",
          "partial": "Consent Url",
          "signature": "App-\u003ePOSIXTime-\u003eConsentQuery-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#v:getConsentUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract and validate an encrypted consent token. This function\n does not check to see if the token has expired.\n",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "processConsentToken",
          "package": "windowslive",
          "signature": "App -\u003e String -\u003e m ConsentToken",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-ConsentToken.html#processConsentToken",
          "type": "function"
        },
        "index": {
          "description": "Extract and validate an encrypted consent token This function does not check to see if the token has expired",
          "hierarchy": "Network WindowsLive ConsentToken",
          "module": "Network.WindowsLive.ConsentToken",
          "name": "processConsentToken",
          "normalized": "App-\u003eString-\u003ea ConsentToken",
          "package": "windowslive",
          "partial": "Consent Token",
          "signature": "App-\u003eString-\u003em ConsentToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-ConsentToken.html#v:processConsentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.Login",
          "name": "User",
          "package": "windowslive",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-Login.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network WindowsLive Login",
          "module": "Network.WindowsLive.Login",
          "name": "User",
          "package": "windowslive",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-Login.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.Login",
          "name": "baseUrl",
          "package": "windowslive",
          "signature": "URI",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-Login.html#baseUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network WindowsLive Login",
          "module": "Network.WindowsLive.Login",
          "name": "baseUrl",
          "package": "windowslive",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-Login.html#v:baseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The application context\nThe locale in which to display the\n authentication UI\n",
          "module": "Network.WindowsLive.Login",
          "name": "getLoginUrl",
          "package": "windowslive",
          "signature": "App-\u003e Maybe String-\u003e Maybe String-\u003e URI",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-Login.html#getLoginUrl",
          "type": "function"
        },
        "index": {
          "description": "The application context The locale in which to display the authentication UI",
          "hierarchy": "Network WindowsLive Login",
          "module": "Network.WindowsLive.Login",
          "name": "getLoginUrl",
          "normalized": "App-\u003eMaybe String-\u003eMaybe String-\u003eURI",
          "package": "windowslive",
          "partial": "Login Url",
          "signature": "App-\u003eMaybe String-\u003eMaybe String-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-Login.html#v:getLoginUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The locale in which to display\n the sign out process\n",
          "module": "Network.WindowsLive.Login",
          "name": "getLogoutUrl",
          "package": "windowslive",
          "signature": "App-\u003e Maybe String-\u003e URI",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-Login.html#getLogoutUrl",
          "type": "function"
        },
        "index": {
          "description": "The locale in which to display the sign out process",
          "hierarchy": "Network WindowsLive Login",
          "module": "Network.WindowsLive.Login",
          "name": "getLogoutUrl",
          "normalized": "App-\u003eMaybe String-\u003eURI",
          "package": "windowslive",
          "partial": "Logout Url",
          "signature": "App-\u003eMaybe String-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-Login.html#v:getLogoutUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse and validate a token from an authentication response. Throws\n an error on failure.\n",
          "module": "Network.WindowsLive.Login",
          "name": "processToken",
          "package": "windowslive",
          "signature": "App -\u003e String -\u003e m User",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-Login.html#processToken",
          "type": "function"
        },
        "index": {
          "description": "Parse and validate token from an authentication response Throws an error on failure",
          "hierarchy": "Network WindowsLive Login",
          "module": "Network.WindowsLive.Login",
          "name": "processToken",
          "normalized": "App-\u003eString-\u003ea User",
          "package": "windowslive",
          "partial": "Token",
          "signature": "App-\u003eString-\u003em User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-Login.html#v:processToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.WindowsLive.Login",
          "name": "secureUrl",
          "package": "windowslive",
          "signature": "URI",
          "source": "http://hackage.haskell.org/package/windowslive/docs/src/Network-WindowsLive-Login.html#secureUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network WindowsLive Login",
          "module": "Network.WindowsLive.Login",
          "name": "secureUrl",
          "package": "windowslive",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/windowslive/docs/Network-WindowsLive-Login.html#v:secureUrl"
      }
    }
  ]
]