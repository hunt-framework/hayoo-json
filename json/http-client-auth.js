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
        "word": "http-client-auth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.Auth",
          "name": "Auth",
          "package": "http-client-auth",
          "source": "src/Network-HTTP-Client-Auth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "Auth",
          "package": "http-client-auth",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an abstract type representing the challenge sent by the server.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "Challenge",
          "package": "http-client-auth",
          "source": "src/Network-HTTP-Client-Auth.html#Challenge",
          "type": "data"
        },
        "index": {
          "description": "This is an abstract type representing the challenge sent by the server",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "Challenge",
          "package": "http-client-auth",
          "partial": "Challenge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#t:Challenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function extracts a WWW-Authenticate header from the response.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "extractAuthHeader",
          "package": "http-client-auth",
          "signature": "Response body -\u003e Maybe String",
          "source": "src/Network-HTTP-Client-Auth.html#extractAuthHeader",
          "type": "function"
        },
        "index": {
          "description": "This function extracts WWW-Authenticate header from the response",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "extractAuthHeader",
          "normalized": "Response a-\u003eMaybe String",
          "package": "http-client-auth",
          "partial": "Auth Header",
          "signature": "Response body-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:extractAuthHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function parses the response headers to get the challenge.\n It failes if there is some challenge, but it can't be parsed.\n If there is no challenge at all, function doesn't fail.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "getChallenge",
          "package": "http-client-auth",
          "signature": "Response body -\u003e Maybe Challenge",
          "source": "src/Network-HTTP-Client-Auth.html#getChallenge",
          "type": "function"
        },
        "index": {
          "description": "This function parses the response headers to get the challenge It failes if there is some challenge but it can be parsed If there is no challenge at all function doesn fail",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "getChallenge",
          "normalized": "Response a-\u003eMaybe Challenge",
          "package": "http-client-auth",
          "partial": "Challenge",
          "signature": "Response body-\u003eMaybe Challenge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:getChallenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function makes an MD5 hash of the request body\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "makeRequestBodyHash",
          "package": "http-client-auth",
          "signature": "Request m -\u003e m String",
          "source": "src/Network-HTTP-Client-Auth.html#makeRequestBodyHash",
          "type": "function"
        },
        "index": {
          "description": "This function makes an MD5 hash of the request body",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "makeRequestBodyHash",
          "normalized": "Request a-\u003ea String",
          "package": "http-client-auth",
          "partial": "Request Body Hash",
          "signature": "Request m-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:makeRequestBodyHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function creates a string that should be sent in the Authorization header.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "makeRequestHeader",
          "package": "http-client-auth",
          "signature": "String-\u003e String-\u003e String-\u003e Request m-\u003e Challenge-\u003e MaybeT m String",
          "type": "function"
        },
        "index": {
          "description": "This function creates string that should be sent in the Authorization header",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "makeRequestHeader",
          "normalized": "String-\u003eString-\u003eString-\u003eRequest a-\u003eChallenge-\u003eMaybeT a String",
          "package": "http-client-auth",
          "partial": "Request Header",
          "signature": "String-\u003eString-\u003eString-\u003eRequest m-\u003eChallenge-\u003eMaybeT m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:makeRequestHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function extracts URI part from the request.\n It wouldn't include the host name.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "makeRequestUri",
          "package": "http-client-auth",
          "signature": "Request m -\u003e String",
          "source": "src/Network-HTTP-Client-Auth.html#makeRequestUri",
          "type": "function"
        },
        "index": {
          "description": "This function extracts URI part from the request It wouldn include the host name",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "makeRequestUri",
          "normalized": "Request a-\u003eString",
          "package": "http-client-auth",
          "partial": "Request Uri",
          "signature": "Request m-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:makeRequestUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function parses the WWW-Authenticate header line to get a challenge.\n If it fails, it's probably because the header is malformed\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "parseChallenge",
          "package": "http-client-auth",
          "signature": "String -\u003e Maybe Challenge",
          "source": "src/Network-HTTP-Client-Auth.html#parseChallenge",
          "type": "function"
        },
        "index": {
          "description": "This function parses the WWW-Authenticate header line to get challenge If it fails it probably because the header is malformed",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "parseChallenge",
          "normalized": "String-\u003eMaybe Challenge",
          "package": "http-client-auth",
          "partial": "Challenge",
          "signature": "String-\u003eMaybe Challenge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:parseChallenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRealm is the only thing users are supposed to know about the challenge.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "realm",
          "package": "http-client-auth",
          "signature": "Challenge -\u003e Maybe String",
          "source": "src/Network-HTTP-Client-Auth.html#realm",
          "type": "function"
        },
        "index": {
          "description": "Realm is the only thing users are supposed to know about the challenge",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "realm",
          "normalized": "Challenge-\u003eMaybe String",
          "package": "http-client-auth",
          "signature": "Challenge-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:realm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main function. It sends a request, gets the response, and,\n if this response requires authorization, it sends the same request again,\n now including authorization data (user-supplied login and password).\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.Auth",
          "name": "requestWithAuth",
          "package": "http-client-auth",
          "signature": "String-\u003e String-\u003e (Request (ResourceT IO) -\u003e IO (Response body))-\u003e Request (ResourceT IO)-\u003e MaybeT IO (Response body)",
          "type": "function"
        },
        "index": {
          "description": "This is the main function It sends request gets the response and if this response requires authorization it sends the same request again now including authorization data user-supplied login and password",
          "hierarchy": "Network HTTP Client Auth",
          "module": "Network.HTTP.Client.Auth",
          "name": "requestWithAuth",
          "normalized": "String-\u003eString-\u003e(Request(ResourceT IO)-\u003eIO(Response a))-\u003eRequest(ResourceT IO)-\u003eMaybeT IO(Response a)",
          "package": "http-client-auth",
          "partial": "With Auth",
          "signature": "String-\u003eString-\u003e(Request(ResourceT IO)-\u003eIO(Response body))-\u003eRequest(ResourceT IO)-\u003eMaybeT IO(Response body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-auth/docs/Network-HTTP-Client-Auth.html#v:requestWithAuth"
      }
    }
  ]
]