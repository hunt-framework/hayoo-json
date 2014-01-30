[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSigning forms the core process for OAuth. Given a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e about to be\n sent, \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e parameters, and a full \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e we append a set of parameters to\n the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e which turns it into a signed OAuth request.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Signing.html",
        "fct-type": "module",
        "title": "Signing"
      },
      "index": {
        "description": "Signing forms the core process for OAuth Given Request about to be sent Server parameters and full Oa we append set of parameters to the Request which turns it into signed OAuth request",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "Signing",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Signing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:augmentRequest",
      "description": {
        "fct-descr": "\u003cp\u003eAugments whatever component of the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is specified by\n \u003ccode\u003e\u003ca\u003eParameterMethod\u003c/a\u003e\u003c/code\u003e with one built from the apropriate OAuth parameters\n (passed as a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eCurrently this actually \u003cem\u003ereplaces\u003c/em\u003e the \u003ccode\u003eAuthorization\u003c/code\u003e header if one\n exists. This may be a bad idea if the \u003ccode\u003erealm\u003c/code\u003e parameter is pre-set,\n perhaps.\n\u003c/p\u003e\u003cp\u003eTODO: Parse \u003ccode\u003eAuthorization\u003c/code\u003e header and augment it.\n\u003c/p\u003e\u003cp\u003eCurrently this actually \u003cem\u003ereplaces\u003c/em\u003e the entity body if one\n exists. This is definitely just me being lazy.\n\u003c/p\u003e\u003cp\u003eTODO: Try to parse entity body and augment it.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "ParameterMethod -\u003e Query -\u003e Request -\u003e Request",
        "fct-source": "src/Network-OAuth-Signing.html#augmentRequest",
        "fct-type": "function",
        "title": "augmentRequest"
      },
      "index": {
        "description": "Augments whatever component of the Request is specified by ParameterMethod with one built from the apropriate OAuth parameters passed as Query Currently this actually replaces the Authorization header if one exists This may be bad idea if the realm parameter is pre-set perhaps TODO Parse Authorization header and augment it Currently this actually replaces the entity body if one exists This is definitely just me being lazy TODO Try to parse entity body and augment it",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "augmentRequest",
        "normalized": "ParameterMethod-\u003eQuery-\u003eRequest-\u003eRequest",
        "package": "oauthenticated",
        "partial": "Request",
        "signature": "ParameterMethod-\u003eQuery-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:bodyParams",
      "description": {
        "fct-descr": "\u003cp\u003eQueries a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e body and tries to interpret it as a set of OAuth\n valid parameters. It makes the assumption that if the body type is a\n streaming variety then it is \u003cem\u003enot\u003c/em\u003e a set of OAuth parameters---dropping this\n assumption would prevent this from being pure.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Request -\u003e Query",
        "fct-source": "src/Network-OAuth-Signing.html#bodyParams",
        "fct-type": "function",
        "title": "bodyParams"
      },
      "index": {
        "description": "Queries Request body and tries to interpret it as set of OAuth valid parameters It makes the assumption that if the body type is streaming variety then it is not set of OAuth parameters---dropping this assumption would prevent this from being pure",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "bodyParams",
        "normalized": "Request-\u003eQuery",
        "package": "oauthenticated",
        "partial": "Params",
        "signature": "Request-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:canonicalBaseString",
      "description": {
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Oa ty -\u003e Server -\u003e Request -\u003e ByteString",
        "fct-source": "src/Network-OAuth-Signing.html#canonicalBaseString",
        "fct-type": "function",
        "title": "canonicalBaseString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "canonicalBaseString",
        "normalized": "Oa a-\u003eServer-\u003eRequest-\u003eByteString",
        "package": "oauthenticated",
        "partial": "Base String",
        "signature": "Oa ty-\u003eServer-\u003eRequest-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:canonicalParams",
      "description": {
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Oa ty -\u003e Server -\u003e Request -\u003e ByteString",
        "fct-source": "src/Network-OAuth-Signing.html#canonicalParams",
        "fct-type": "function",
        "title": "canonicalParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "canonicalParams",
        "normalized": "Oa a-\u003eServer-\u003eRequest-\u003eByteString",
        "package": "oauthenticated",
        "partial": "Params",
        "signature": "Oa ty-\u003eServer-\u003eRequest-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:canonicalUri",
      "description": {
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Request -\u003e ByteString",
        "fct-source": "src/Network-OAuth-Signing.html#canonicalUri",
        "fct-type": "function",
        "title": "canonicalUri"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "canonicalUri",
        "normalized": "Request-\u003eByteString",
        "package": "oauthenticated",
        "partial": "Uri",
        "signature": "Request-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:makeSignature",
      "description": {
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "SignatureMethod -\u003e ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-OAuth-Signing.html#makeSignature",
        "fct-type": "function",
        "title": "makeSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "makeSignature",
        "normalized": "SignatureMethod-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "oauthenticated",
        "partial": "Signature",
        "signature": "SignatureMethod-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:oauth",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request with a fresh set of parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e Server -\u003e Request -\u003e gen -\u003e IO (Request, gen)",
        "fct-source": "src/Network-OAuth-Signing.html#oauth",
        "fct-type": "function",
        "title": "oauth"
      },
      "index": {
        "description": "Sign request with fresh set of parameters",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "oauth",
        "normalized": "Cred a-\u003eServer-\u003eRequest-\u003eb-\u003eIO(Request,b)",
        "package": "oauthenticated",
        "partial": "",
        "signature": "Cred ty-\u003eServer-\u003eRequest-\u003egen-\u003eIO(Request,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:oauthParams",
      "description": {
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Oa ty -\u003e Server -\u003e Query",
        "fct-source": "src/Network-OAuth-Signing.html#oauthParams",
        "fct-type": "function",
        "title": "oauthParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "oauthParams",
        "normalized": "Oa a-\u003eServer-\u003eQuery",
        "package": "oauthenticated",
        "partial": "Params",
        "signature": "Oa ty-\u003eServer-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:queryParams",
      "description": {
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Request -\u003e Query",
        "fct-source": "src/Network-OAuth-Signing.html#queryParams",
        "fct-type": "function",
        "title": "queryParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "queryParams",
        "normalized": "Request-\u003eQuery",
        "package": "oauthenticated",
        "partial": "Params",
        "signature": "Request-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Signing.html#v:sign",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request given generated parameters\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Signing",
        "fct-package": "oauthenticated",
        "fct-signature": "Oa ty -\u003e Server -\u003e Request -\u003e Request",
        "fct-source": "src/Network-OAuth-Signing.html#sign",
        "fct-type": "function",
        "title": "sign"
      },
      "index": {
        "description": "Sign request given generated parameters",
        "hierarchy": "Network OAuth Signing",
        "module": "Network.OAuth.Signing",
        "name": "sign",
        "normalized": "Oa a-\u003eServer-\u003eRequest-\u003eRequest",
        "package": "oauthenticated",
        "partial": "",
        "signature": "Oa ty-\u003eServer-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplified Monadic interface for managing \u003ccode\u003ehttp-client\u003c/code\u003e and\n \u003ccode\u003eoauthenticated\u003c/code\u003e state. Re-exposes all of the functionality from\n \u003ca\u003eNetwork.OAuth\u003c/a\u003e and \u003ca\u003eNetwork.OAuth.ThreeLegged\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Simplified Monadic interface for managing http-client and oauthenticated state Re-exposes all of the functionality from Network.OAuth and Network.OAuth.ThreeLegged",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Callback",
      "description": {
        "fct-descr": "\u003cp\u003eWhen performing the second leg of the three-leg token request workflow,\n the user must pass the \u003ccode\u003eoauth_verifier\u003c/code\u003e code back to the client. In order to\n ensure that this protocol is secure, OAuth demands that the client\n associates this \"callback method\" with the temporary credentials generated\n for the workflow. This \u003ccode\u003e\u003ca\u003eCallback\u003c/a\u003e\u003c/code\u003e method may be a URL where the parameters\n are returned to or the string \u003ccode\u003e\"oob\"\u003c/code\u003e which indicates that the user is\n responsible for returning the \u003ccode\u003eoauth_verifier\u003c/code\u003e to the client \u003ccode\u003e\u003ca\u003eOutOfBand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "data",
        "title": "Callback"
      },
      "index": {
        "description": "When performing the second leg of the three-leg token request workflow the user must pass the oauth verifier code back to the client In order to ensure that this protocol is secure OAuth demands that the client associates this callback method with the temporary credentials generated for the workflow This Callback method may be URL where the parameters are returned to or the string oob which indicates that the user is responsible for returning the oauth verifier to the client OutOfBand",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials and \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es are assigned to a particular client by\n the server and are used for all requests sent by that client. They form the\n core component of resource specific credentials.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Client Cred entials and Token are assigned to particular client by the server and are used for all requests sent by that client They form the core component of resource specific credentials",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Client",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Cred",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials pair a \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e and either a \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e token corresponding to a particular set of user\n resources on the server.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Cred",
        "fct-type": "data",
        "title": "Cred"
      },
      "index": {
        "description": "Cred entials pair Client Token and either Temporary or Permanent token corresponding to particular set of user resources on the server",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Cred",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:OAuth",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOAuthT\u003c/a\u003e\u003c/code\u003e wrapped over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-Simple.html#OAuth",
        "fct-type": "type",
        "title": "OAuth"
      },
      "index": {
        "description": "OAuthT wrapped over IO",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OAuth",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:OAuthT",
      "description": {
        "fct-descr": "\u003cp\u003ePerform authenticated requests using a shared \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e and\n a particular set of \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "newtype",
        "fct-source": "src/Network-OAuth-Simple.html#OAuthT",
        "fct-type": "newtype",
        "title": "OAuthT"
      },
      "index": {
        "description": "Perform authenticated requests using shared Manager and particular set of Cred",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OAuthT",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:ParameterMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe OAuth spec suggest that the OAuth parameter be passed via the\n \u003ccode\u003eAuthorization\u003c/code\u003e header, but allows for other methods of\n transmission (see section \u003ca\u003e3.5. Parameter Transmission\u003c/a\u003e) so we\n select the 'Server'\\'s preferred method with this type.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "data",
        "title": "ParameterMethod"
      },
      "index": {
        "description": "The OAuth spec suggest that the OAuth parameter be passed via the Authorization header but allows for other methods of transmission see section Parameter Transmission so we select the Server preferred method with this type",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "ParameterMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Parameter Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Permanent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials are the primary means of accessing\n server resources. They must be maintained by the client for each user who\n authorizes that client to access resources on their behalf.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Permanent",
        "fct-type": "data",
        "title": "Permanent"
      },
      "index": {
        "description": "Permanent Token and Cred entials are the primary means of accessing server resources They must be maintained by the client for each user who authorizes that client to access resources on their behalf",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Permanent",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Permanent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Server",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e information contains details which parameterize how a\n particular server wants to interpret OAuth requests.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "data",
        "title": "Server"
      },
      "index": {
        "description": "The Server information contains details which parameterize how particular server wants to interpret OAuth requests",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Server",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:SignatureMethod",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth culminates in the creation of the \u003ccode\u003eoauth_signature\u003c/code\u003e which\n signs and authenticates the request using the secret components of\n a particular OAuth \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSeveral methods exist for generating these signatures, the most\n popular being \u003ccode\u003e\u003ca\u003eHmacSha1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "data",
        "title": "SignatureMethod"
      },
      "index": {
        "description": "OAuth culminates in the creation of the oauth signature which signs and authenticates the request using the secret components of particular OAuth Cred Several methods exist for generating these signatures the most popular being HmacSha1",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "SignatureMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Signature Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Temporary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials are created during authorization\n protocols and are rarely meant to be kept for more than a few minutes.\n Typically they are authorized to access only a very select set of server\n resources. During \"three-legged authorization\" in OAuth 1.0 they are used\n to generate the authorization request URI the client sends and, after that,\n in the \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Temporary",
        "fct-type": "data",
        "title": "Temporary"
      },
      "index": {
        "description": "Temporary Token and Cred entials are created during authorization protocols and are rarely meant to be kept for more than few minutes Typically they are authorized to access only very select set of server resources During three-legged authorization in OAuth they are used to generate the authorization request URI the client sends and after that in the Permanent Token request",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Temporary",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Temporary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:ThreeLegged",
      "description": {
        "fct-descr": "\u003cp\u003eData parameterizing the \"Three-legged OAuth\" redirection-based\n authorization protocol. These parameters cover the protocol as described\n in the community editions \u003cem\u003eOAuth Core 1.0\u003c/em\u003e and \u003cem\u003eOAuth Core 1.0a\u003c/em\u003e as well\n as RFC 5849.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "data",
        "title": "ThreeLegged"
      },
      "index": {
        "description": "Data parameterizing the Three-legged OAuth redirection-based authorization protocol These parameters cover the protocol as described in the community editions OAuth Core and OAuth Core as well as RFC",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "ThreeLegged",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es are public, private key pairs and come in many varieties,\n \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "Token are public private key pairs and come in many varieties Client Temporary and Permanent",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Token",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:TokenRequestFailure",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Simple.html#TokenRequestFailure",
        "fct-type": "data",
        "title": "TokenRequestFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "TokenRequestFailure",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token Request Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Verifier",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e is produced when a user authorizes a set of \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es. Using the \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e allows the client to request \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-Types-Params.html#Verifier",
        "fct-type": "type",
        "title": "Verifier"
      },
      "index": {
        "description": "Verifier is produced when user authorizes set of Temporary Cred Using the Verifier allows the client to request Permanent Cred",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Verifier",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Verifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth has progressed through several versions since its inception. In\n particular, there are two community editions \"OAuth Core 1.0\" (2007)\n \u003cimg src=\"http://oauth.net/core/1.0\"/\u003e and \"OAuth Core 1.0a\" (2009)\n \u003cimg src=\"http://oauth.net/core/1.0a\"/\u003e along with the IETF Official version RFC\n 5849 (2010) \u003cimg src=\"http://tools.ietf.org/html/rfc5849\"/\u003e which is confusingly\n named \u003ca\u003eOAuth 1.0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e/Servers which only implement the obsoleted community edition \"OAuth\n Core 1.0\" are susceptible to a session fixation attack./\n\u003c/p\u003e\u003cp\u003eIf at all possible, choose the RFC 5849 version (the \u003ccode\u003e\u003ca\u003eOAuth1\u003c/a\u003e\u003c/code\u003e value) as\n it is the modern standard. Some servers may only be compliant with an\n earlier OAuth version---this should be tested against each server, in\n particular the protocols defined in \u003ca\u003eNetwork.OAuth.ThreeLegged\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "OAuth has progressed through several versions since its inception In particular there are two community editions OAuth Core and OAuth Core along with the IETF Official version RFC which is confusingly named OAuth Servers which only implement the obsoleted community edition OAuth Core are susceptible to session fixation attack If at all possible choose the RFC version the OAuth1 value as it is the modern standard Some servers may only be compliant with an earlier OAuth version---this should be tested against each server in particular the protocols defined in Network.OAuth.ThreeLegged",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Version",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:AuthorizationHeader",
      "description": {
        "fct-descr": "\u003cp\u003ePlace the \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters in the\n \u003ccode\u003eAuthorization\u003c/code\u003e HTTP header.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "AuthorizationHeader",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "AuthorizationHeader"
      },
      "index": {
        "description": "Place the Oa parameters in the Authorization HTTP header",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "AuthorizationHeader",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Authorization Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:BadPermanentToken",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "BadPermanentToken ByteString",
        "fct-source": "src/Network-OAuth-Simple.html#TokenRequestFailure",
        "fct-type": "function",
        "title": "BadPermanentToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "BadPermanentToken",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Bad Permanent Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:BadTemporaryToken",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "BadTemporaryToken ByteString",
        "fct-source": "src/Network-OAuth-Simple.html#TokenRequestFailure",
        "fct-type": "function",
        "title": "BadTemporaryToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "BadTemporaryToken",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Bad Temporary Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:Callback",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Callback Request",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "function",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:HmacSha1",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "HmacSha1",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "function",
        "title": "HmacSha1"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "HmacSha1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Hmac Sha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OAuth1",
      "description": {
        "fct-descr": "\u003cp\u003eRFC 5849 \u003cimg src=\"http://tools.ietf.org/html/rfc5849\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuth1",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuth1"
      },
      "index": {
        "description": "RFC",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OAuth1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OAuthCommunity1",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth Core 1.0 Community Edition\n \u003cimg src=\"http://oauth.net/core/1.0\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthCommunity1",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuthCommunity1"
      },
      "index": {
        "description": "OAuth Core Community Edition",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OAuthCommunity1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth Community",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OAuthCommunity1a",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth Core 1.0 Community Edition, Revision\n A \u003cimg src=\"http://oauth.net/core/1.0a\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthCommunity1a",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuthCommunity1a"
      },
      "index": {
        "description": "OAuth Core Community Edition Revision",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OAuthCommunity1a",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth Community",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OAuthT",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthT",
        "fct-source": "src/Network-OAuth-Simple.html#OAuthT",
        "fct-type": "function",
        "title": "OAuthT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OAuthT",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OnPermanentRequest",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OnPermanentRequest HttpException",
        "fct-source": "src/Network-OAuth-Simple.html#TokenRequestFailure",
        "fct-type": "function",
        "title": "OnPermanentRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OnPermanentRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "On Permanent Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OnTemporaryRequest",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OnTemporaryRequest HttpException",
        "fct-source": "src/Network-OAuth-Simple.html#TokenRequestFailure",
        "fct-type": "function",
        "title": "OnTemporaryRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OnTemporaryRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "On Temporary Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:OutOfBand",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OutOfBand",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "function",
        "title": "OutOfBand"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "OutOfBand",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Out Of Band",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:Plaintext",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Plaintext",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "function",
        "title": "Plaintext"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Plaintext",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Plaintext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:QueryString",
      "description": {
        "fct-descr": "\u003cp\u003eAugment the \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e query\n string with \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "QueryString",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "QueryString"
      },
      "index": {
        "description": "Augment the www-form-urlencoded query string with Oa parameters",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "QueryString",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:RequestEntityBody",
      "description": {
        "fct-descr": "\u003cp\u003eAugment the \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e request\n body with \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "RequestEntityBody",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "RequestEntityBody"
      },
      "index": {
        "description": "Augment the www-form-urlencoded request body with Oa parameters",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "RequestEntityBody",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Request Entity Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:Server",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Server",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Server",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:ThreeLegged",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "ThreeLegged",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "ThreeLegged"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "ThreeLegged",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:Token",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Token !Key !Secret",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Token",
        "fct-type": "function",
        "title": "Token"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "Token",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:buildAuthorizationUrl",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthT Temporary m URI",
        "fct-source": "src/Network-OAuth-Simple.html#buildAuthorizationUrl",
        "fct-type": "function",
        "title": "buildAuthorizationUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "buildAuthorizationUrl",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Authorization Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:callback",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eCallback\u003c/code\u003e parameter configures how the user is\n intended to communicate the \u003ccode\u003eVerifier\u003c/code\u003e back to the client.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Callback",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "callback"
      },
      "index": {
        "description": "The Callback parameter configures how the user is intended to communicate the Verifier back to the client",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:clientCred",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Client -\u003e Cred Client",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#clientCred",
        "fct-type": "function",
        "title": "clientCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "clientCred",
        "normalized": "Token Client-\u003eCred Client",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Client-\u003eCred Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:defaultServer",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e parameterization uses OAuth recommended parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Server",
        "fct-source": "src/Network-OAuth-Types-Params.html#defaultServer",
        "fct-type": "function",
        "title": "defaultServer"
      },
      "index": {
        "description": "The default Server parameterization uses OAuth recommended parameters",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "defaultServer",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:fromUrlEncoded",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e stream to produce a \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e if possible. \n The first result value is whether or not the token data is OAuth 1.0a \n compatible.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromUrlEncoded \"oauth_token=key&oauth_token_secret=secret\"\n\u003c/code\u003e\u003c/strong\u003eJust (False, Token \"key\" \"secret\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromUrlEncoded \"oauth_token=key&oauth_token_secret=secret&oauth_callback_confirmed=true\"\n\u003c/code\u003e\u003c/strong\u003eJust (True, Token \"key\" \"secret\")\n\u003c/pre\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "ByteString -\u003e Maybe (Bool, Token ty)",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#fromUrlEncoded",
        "fct-type": "function",
        "title": "fromUrlEncoded"
      },
      "index": {
        "description": "Parses www-form-urlencoded stream to produce Token if possible The first result value is whether or not the token data is OAuth compatible fromUrlEncoded oauth token key oauth token secret secret Just False Token key secret fromUrlEncoded oauth token key oauth token secret secret oauth callback confirmed true Just True Token key secret",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "fromUrlEncoded",
        "normalized": "ByteString-\u003eMaybe(Bool,Token a)",
        "package": "oauthenticated",
        "partial": "Url Encoded",
        "signature": "ByteString-\u003eMaybe(Bool,Token ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:oAuthVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Version",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "oAuthVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "oAuthVersion",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Auth Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:oauth",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request using fresh credentials.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Request -\u003e OAuthT ty m Request",
        "fct-source": "src/Network-OAuth-Simple.html#oauth",
        "fct-type": "function",
        "title": "oauth"
      },
      "index": {
        "description": "Sign request using fresh credentials",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "oauth",
        "normalized": "Request-\u003eOAuthT a b Request",
        "package": "oauthenticated",
        "partial": "",
        "signature": "Request-\u003eOAuthT ty m Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:parameterMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "ParameterMethod",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "parameterMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "parameterMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:parseThreeLegged",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience method for creating a \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e configuration from\n a trio of URLs and a \u003ccode\u003eCallback\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if one of the\n callback URLs could not be parsed correctly.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "String -\u003e String -\u003e String -\u003e Callback -\u003e Maybe ThreeLegged",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#parseThreeLegged",
        "fct-type": "function",
        "title": "parseThreeLegged"
      },
      "index": {
        "description": "Convenience method for creating ThreeLegged configuration from trio of URLs and Callback Returns Nothing if one of the callback URLs could not be parsed correctly",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "parseThreeLegged",
        "normalized": "String-\u003eString-\u003eString-\u003eCallback-\u003eMaybe ThreeLegged",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": "String-\u003eString-\u003eString-\u003eCallback-\u003eMaybe ThreeLegged"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:permanentCred",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Permanent -\u003e Cred Client -\u003e Cred Permanent",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#permanentCred",
        "fct-type": "function",
        "title": "permanentCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "permanentCred",
        "normalized": "Token Permanent-\u003eCred Client-\u003eCred Permanent",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Permanent-\u003eCred Client-\u003eCred Permanent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:permanentTokenRequest",
      "description": {
        "fct-descr": "\u003cp\u003eBase \u003ccode\u003eRequest\u003c/code\u003e for the \"endpoint used by the client to\n request a set of token credentials using the set of\n \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eCred\u003c/code\u003eentials\". This request is also\n instantiated and performed by \u003ccode\u003eoauthenticated\u003c/code\u003e in order to\n produce a \u003ccode\u003ePermanent\u003c/code\u003e \u003ccode\u003eToken\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Request",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "permanentTokenRequest"
      },
      "index": {
        "description": "Base Request for the endpoint used by the client to request set of token credentials using the set of Temporary Cred entials This request is also instantiated and performed by oauthenticated in order to produce Permanent Token",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "permanentTokenRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:requestPermanentToken",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Manager -\u003e Verifier -\u003e OAuthT Temporary m (Response (Either ByteString (Token Permanent)))",
        "fct-source": "src/Network-OAuth-Simple.html#requestPermanentToken",
        "fct-type": "function",
        "title": "requestPermanentToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "requestPermanentToken",
        "normalized": "Manager-\u003eVerifier-\u003eOAuthT Temporary a(Response(Either ByteString(Token Permanent)))",
        "package": "oauthenticated",
        "partial": "Permanent Token",
        "signature": "Manager-\u003eVerifier-\u003eOAuthT Temporary m(Response(Either ByteString(Token Permanent)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:requestTemporaryToken",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Manager -\u003e OAuthT Client m (Response (Either ByteString (Token Temporary)))",
        "fct-source": "src/Network-OAuth-Simple.html#requestTemporaryToken",
        "fct-type": "function",
        "title": "requestTemporaryToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "requestTemporaryToken",
        "normalized": "Manager-\u003eOAuthT Client a(Response(Either ByteString(Token Temporary)))",
        "package": "oauthenticated",
        "partial": "Temporary Token",
        "signature": "Manager-\u003eOAuthT Client m(Response(Either ByteString(Token Temporary)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:requestTokenProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eRun a full Three-legged authorization protocol using the simple interface\n of this module. This is similar to the \u003ccode\u003e\u003ca\u003erequestTokenProtocol\u003c/a\u003e\u003c/code\u003e in\n \u003ca\u003eNetwork.OAuth.ThreeLegged\u003c/a\u003e, but offers better error handling due in part to\n the easier management of configuration state.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Manager -\u003e (URI -\u003e m Verifier) -\u003e OAuthT Client m (Either TokenRequestFailure (Cred Permanent))",
        "fct-source": "src/Network-OAuth-Simple.html#requestTokenProtocol",
        "fct-type": "function",
        "title": "requestTokenProtocol"
      },
      "index": {
        "description": "Run full Three-legged authorization protocol using the simple interface of this module This is similar to the requestTokenProtocol in Network.OAuth.ThreeLegged but offers better error handling due in part to the easier management of configuration state",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "requestTokenProtocol",
        "normalized": "Manager-\u003e(URI-\u003ea Verifier)-\u003eOAuthT Client a(Either TokenRequestFailure(Cred Permanent))",
        "package": "oauthenticated",
        "partial": "Token Protocol",
        "signature": "Manager-\u003e(URI-\u003em Verifier)-\u003eOAuthT Client m(Either TokenRequestFailure(Cred Permanent))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:resourceOwnerAuthorization",
      "description": {
        "fct-descr": "\u003cp\u003eBase \u003ccode\u003eRequest\u003c/code\u003e for the \"endpoint to which the resource\n owner is redirected to grant authorization\". This request\n must be performed by the user granting token authorization\n to the client. Transmitting the parameters of this request\n to the user is out of scope of \u003ccode\u003eoauthenticated\u003c/code\u003e, but\n functions are provided to make it easier.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Request",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "resourceOwnerAuthorization"
      },
      "index": {
        "description": "Base Request for the endpoint to which the resource owner is redirected to grant authorization This request must be performed by the user granting token authorization to the client Transmitting the parameters of this request to the user is out of scope of oauthenticated but functions are provided to make it easier",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "resourceOwnerAuthorization",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Owner Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:runOAuth",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuth ty a -\u003e Cred ty -\u003e Server -\u003e ThreeLegged -\u003e IO a",
        "fct-source": "src/Network-OAuth-Simple.html#runOAuth",
        "fct-type": "function",
        "title": "runOAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "runOAuth",
        "normalized": "OAuth a b-\u003eCred a-\u003eServer-\u003eThreeLegged-\u003eIO b",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": "OAuth ty a-\u003eCred ty-\u003eServer-\u003eThreeLegged-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:runOAuthSimple",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest way to execute a set of authenticated requests. Produces\n invalid \u003ccode\u003eThreeLegged\u003c/code\u003e requests---use \u003ccode\u003e\u003ca\u003erunOAuth\u003c/a\u003e\u003c/code\u003e to provide \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e configuration information.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuth ty a -\u003e Cred ty -\u003e IO a",
        "fct-source": "src/Network-OAuth-Simple.html#runOAuthSimple",
        "fct-type": "function",
        "title": "runOAuthSimple"
      },
      "index": {
        "description": "The simplest way to execute set of authenticated requests Produces invalid ThreeLegged requests---use runOAuth to provide Server and ThreeLegged configuration information",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "runOAuthSimple",
        "normalized": "OAuth a b-\u003eCred a-\u003eIO b",
        "package": "oauthenticated",
        "partial": "OAuth Simple",
        "signature": "OAuth ty a-\u003eCred ty-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:runOAuthT",
      "description": {
        "fct-descr": "\u003cp\u003eRun's an \u003ccode\u003e\u003ca\u003eOAuthT\u003c/a\u003e\u003c/code\u003e using a fresh \u003ccode\u003e\u003ca\u003eEntropyPool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthT ty m a -\u003e Cred ty -\u003e Server -\u003e ThreeLegged -\u003e m a",
        "fct-source": "src/Network-OAuth-Simple.html#runOAuthT",
        "fct-type": "function",
        "title": "runOAuthT"
      },
      "index": {
        "description": "Run an OAuthT using fresh EntropyPool",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "runOAuthT",
        "normalized": "OAuthT a b c-\u003eCred a-\u003eServer-\u003eThreeLegged-\u003eb c",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": "OAuthT ty m a-\u003eCred ty-\u003eServer-\u003eThreeLegged-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:signatureMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "SignatureMethod",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "signatureMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "signatureMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:temporaryCred",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Temporary -\u003e Cred Client -\u003e Cred Temporary",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#temporaryCred",
        "fct-type": "function",
        "title": "temporaryCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "temporaryCred",
        "normalized": "Token Temporary-\u003eCred Client-\u003eCred Temporary",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Temporary-\u003eCred Client-\u003eCred Temporary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:temporaryTokenRequest",
      "description": {
        "fct-descr": "\u003cp\u003eBase \u003ccode\u003eRequest\u003c/code\u003e for the \"endpoint used by the client to\n obtain a set of \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eCred\u003c/code\u003eentials\" in the form of\n a \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eToken\u003c/code\u003e. This request is automatically\n instantiated and performed during the first leg of the\n \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e authorization protocol.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Request",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "temporaryTokenRequest"
      },
      "index": {
        "description": "Base Request for the endpoint used by the client to obtain set of Temporary Cred entials in the form of Temporary Token This request is automatically instantiated and performed during the first leg of the ThreeLegged authorization protocol",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "temporaryTokenRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:unOAuthT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "ReaderT (OaConfig ty) (StateT SystemRNG m) a",
        "fct-source": "src/Network-OAuth-Simple.html#OAuthT",
        "fct-type": "function",
        "title": "unOAuthT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "unOAuthT",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:upgrade",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eResourceToken\u003c/a\u003e\u003c/code\u003e of some kind, run an inner \u003ccode\u003e\u003ca\u003eOAuthT\u003c/a\u003e\u003c/code\u003e session\n with the same configuration but new credentials.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Token ty' -\u003e OAuthT ty' m a -\u003e OAuthT ty m a",
        "fct-source": "src/Network-OAuth-Simple.html#upgrade",
        "fct-type": "function",
        "title": "upgrade"
      },
      "index": {
        "description": "Given ResourceToken of some kind run an inner OAuthT session with the same configuration but new credentials",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "upgrade",
        "normalized": "Token a-\u003eOAuthT a b c-\u003eOAuthT d b c",
        "package": "oauthenticated",
        "partial": "",
        "signature": "Token ty'-\u003eOAuthT ty' m a-\u003eOAuthT ty m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Simple.html#v:upgradeCred",
      "description": {
        "fct-module": "Network.OAuth.Simple",
        "fct-package": "oauthenticated",
        "fct-signature": "Token ty' -\u003e OAuthT ty m (Cred ty')",
        "fct-source": "src/Network-OAuth-Simple.html#upgradeCred",
        "fct-type": "function",
        "title": "upgradeCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Simple",
        "module": "Network.OAuth.Simple",
        "name": "upgradeCred",
        "normalized": "Token a-\u003eOAuthT b c(Cred a)",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token ty'-\u003eOAuthT ty m(Cred ty')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \"Three-legged OAuth\" protocol implementing RFC 5849's\n \u003cem\u003eRedirection-Based Authorization\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-ThreeLegged.html",
        "fct-type": "module",
        "title": "ThreeLegged"
      },
      "index": {
        "description": "The Three-legged OAuth protocol implementing RFC Redirection-Based Authorization",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "ThreeLegged",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#t:Callback",
      "description": {
        "fct-descr": "\u003cp\u003eWhen performing the second leg of the three-leg token request workflow,\n the user must pass the \u003ccode\u003eoauth_verifier\u003c/code\u003e code back to the client. In order to\n ensure that this protocol is secure, OAuth demands that the client\n associates this \"callback method\" with the temporary credentials generated\n for the workflow. This \u003ccode\u003e\u003ca\u003eCallback\u003c/a\u003e\u003c/code\u003e method may be a URL where the parameters\n are returned to or the string \u003ccode\u003e\"oob\"\u003c/code\u003e which indicates that the user is\n responsible for returning the \u003ccode\u003eoauth_verifier\u003c/code\u003e to the client \u003ccode\u003e\u003ca\u003eOutOfBand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "data",
        "title": "Callback"
      },
      "index": {
        "description": "When performing the second leg of the three-leg token request workflow the user must pass the oauth verifier code back to the client In order to ensure that this protocol is secure OAuth demands that the client associates this callback method with the temporary credentials generated for the workflow This Callback method may be URL where the parameters are returned to or the string oob which indicates that the user is responsible for returning the oauth verifier to the client OutOfBand",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "Callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#t:ThreeLegged",
      "description": {
        "fct-descr": "\u003cp\u003eData parameterizing the \"Three-legged OAuth\" redirection-based\n authorization protocol. These parameters cover the protocol as described\n in the community editions \u003cem\u003eOAuth Core 1.0\u003c/em\u003e and \u003cem\u003eOAuth Core 1.0a\u003c/em\u003e as well\n as RFC 5849.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "data",
        "title": "ThreeLegged"
      },
      "index": {
        "description": "Data parameterizing the Three-legged OAuth redirection-based authorization protocol These parameters cover the protocol as described in the community editions OAuth Core and OAuth Core as well as RFC",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "ThreeLegged",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#t:Verifier",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e is produced when a user authorizes a set of \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es. Using the \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e allows the client to request \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-Types-Params.html#Verifier",
        "fct-type": "type",
        "title": "Verifier"
      },
      "index": {
        "description": "Verifier is produced when user authorizes set of Temporary Cred Using the Verifier allows the client to request Permanent Cred",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "Verifier",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Verifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:Callback",
      "description": {
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Callback Request",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "function",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "Callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:OutOfBand",
      "description": {
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "OutOfBand",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "function",
        "title": "OutOfBand"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "OutOfBand",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Out Of Band",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:ThreeLegged",
      "description": {
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "ThreeLegged",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "ThreeLegged"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "ThreeLegged",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:buildAuthorizationUrl",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e which the user should be directed to in order to\n authorize a set of \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eCred\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred Temporary -\u003e ThreeLegged -\u003e URI",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#buildAuthorizationUrl",
        "fct-type": "function",
        "title": "buildAuthorizationUrl"
      },
      "index": {
        "description": "Produce URI which the user should be directed to in order to authorize set of Temporary Cred",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "buildAuthorizationUrl",
        "normalized": "Cred Temporary-\u003eThreeLegged-\u003eURI",
        "package": "oauthenticated",
        "partial": "Authorization Url",
        "signature": "Cred Temporary-\u003eThreeLegged-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:callback",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eCallback\u003c/code\u003e parameter configures how the user is\n intended to communicate the \u003ccode\u003eVerifier\u003c/code\u003e back to the client.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Callback",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "callback"
      },
      "index": {
        "description": "The Callback parameter configures how the user is intended to communicate the Verifier back to the client",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:parseThreeLegged",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience method for creating a \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e configuration from\n a trio of URLs and a \u003ccode\u003eCallback\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if one of the\n callback URLs could not be parsed correctly.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "String -\u003e String -\u003e String -\u003e Callback -\u003e Maybe ThreeLegged",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#parseThreeLegged",
        "fct-type": "function",
        "title": "parseThreeLegged"
      },
      "index": {
        "description": "Convenience method for creating ThreeLegged configuration from trio of URLs and Callback Returns Nothing if one of the callback URLs could not be parsed correctly",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "parseThreeLegged",
        "normalized": "String-\u003eString-\u003eString-\u003eCallback-\u003eMaybe ThreeLegged",
        "package": "oauthenticated",
        "partial": "Three Legged",
        "signature": "String-\u003eString-\u003eString-\u003eCallback-\u003eMaybe ThreeLegged"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:permanentTokenRequest",
      "description": {
        "fct-descr": "\u003cp\u003eBase \u003ccode\u003eRequest\u003c/code\u003e for the \"endpoint used by the client to\n request a set of token credentials using the set of\n \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eCred\u003c/code\u003eentials\". This request is also\n instantiated and performed by \u003ccode\u003eoauthenticated\u003c/code\u003e in order to\n produce a \u003ccode\u003ePermanent\u003c/code\u003e \u003ccode\u003eToken\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Request",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "permanentTokenRequest"
      },
      "index": {
        "description": "Base Request for the endpoint used by the client to request set of token credentials using the set of Temporary Cred entials This request is also instantiated and performed by oauthenticated in order to produce Permanent Token",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "permanentTokenRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:requestPermanentToken",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the response could not be decoded as a \u003ccode\u003eToken\u003c/code\u003e.\n See also \u003ccode\u003e\u003ca\u003erequestPermanentTokenRaw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred Temporary -\u003e Server -\u003e Verifier -\u003e ThreeLegged -\u003e Manager -\u003e gen -\u003e IO (Response (Either ByteString (Token Permanent)), gen)",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#requestPermanentToken",
        "fct-type": "function",
        "title": "requestPermanentToken"
      },
      "index": {
        "description": "Returns Nothing if the response could not be decoded as Token See also requestPermanentTokenRaw Throws HttpException",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "requestPermanentToken",
        "normalized": "Cred Temporary-\u003eServer-\u003eVerifier-\u003eThreeLegged-\u003eManager-\u003ea-\u003eIO(Response(Either ByteString(Token Permanent)),a)",
        "package": "oauthenticated",
        "partial": "Permanent Token",
        "signature": "Cred Temporary-\u003eServer-\u003eVerifier-\u003eThreeLegged-\u003eManager-\u003egen-\u003eIO(Response(Either ByteString(Token Permanent)),gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:requestPermanentTokenRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRequest a 'Permanent \u003ccode\u003eToken\u003c/code\u003e based on the parameters of\n a \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e protocol. This returns the raw response which should be\n encoded as \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred Temporary -\u003e Server -\u003e Verifier -\u003e ThreeLegged -\u003e Manager -\u003e gen -\u003e IO (Response ByteString, gen)",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#requestPermanentTokenRaw",
        "fct-type": "function",
        "title": "requestPermanentTokenRaw"
      },
      "index": {
        "description": "Request Permanent Token based on the parameters of ThreeLegged protocol This returns the raw response which should be encoded as www-form-urlencoded Throws HttpException",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "requestPermanentTokenRaw",
        "normalized": "Cred Temporary-\u003eServer-\u003eVerifier-\u003eThreeLegged-\u003eManager-\u003ea-\u003eIO(Response ByteString,a)",
        "package": "oauthenticated",
        "partial": "Permanent Token Raw",
        "signature": "Cred Temporary-\u003eServer-\u003eVerifier-\u003eThreeLegged-\u003eManager-\u003egen-\u003eIO(Response ByteString,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:requestTemporaryToken",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the raw result if the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e could not be parsed as\n a valid \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.  Importantly, in RFC 5849 compliant modes this\n requires that the token response includes \u003ccode\u003ecallback_confirmed=true\u003c/code\u003e. See\n also \u003ccode\u003e\u003ca\u003erequestTemporaryTokenRaw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred Client -\u003e Server -\u003e ThreeLegged -\u003e Manager -\u003e gen -\u003e IO (Response (Either ByteString (Token Temporary)), gen)",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#requestTemporaryToken",
        "fct-type": "function",
        "title": "requestTemporaryToken"
      },
      "index": {
        "description": "Returns the raw result if the Response could not be parsed as valid Token Importantly in RFC compliant modes this requires that the token response includes callback confirmed true See also requestTemporaryTokenRaw Throws HttpException",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "requestTemporaryToken",
        "normalized": "Cred Client-\u003eServer-\u003eThreeLegged-\u003eManager-\u003ea-\u003eIO(Response(Either ByteString(Token Temporary)),a)",
        "package": "oauthenticated",
        "partial": "Temporary Token",
        "signature": "Cred Client-\u003eServer-\u003eThreeLegged-\u003eManager-\u003egen-\u003eIO(Response(Either ByteString(Token Temporary)),gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:requestTemporaryTokenRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRequest a \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eToken\u003c/code\u003e based on the parameters of\n a \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e protocol. This returns the raw response which should be\n encoded as \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred Client -\u003e Server -\u003e ThreeLegged -\u003e Manager -\u003e gen -\u003e IO (Response ByteString, gen)",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#requestTemporaryTokenRaw",
        "fct-type": "function",
        "title": "requestTemporaryTokenRaw"
      },
      "index": {
        "description": "Request Temporary Token based on the parameters of ThreeLegged protocol This returns the raw response which should be encoded as www-form-urlencoded Throws HttpException",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "requestTemporaryTokenRaw",
        "normalized": "Cred Client-\u003eServer-\u003eThreeLegged-\u003eManager-\u003ea-\u003eIO(Response ByteString,a)",
        "package": "oauthenticated",
        "partial": "Temporary Token Raw",
        "signature": "Cred Client-\u003eServer-\u003eThreeLegged-\u003eManager-\u003egen-\u003eIO(Response ByteString,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:requestTokenProtocol",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an interactive token request provided credentials,\n configuration, and a way to convert a user authorization \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e into\n a \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e out of band. Does not use any kind of TLS protection---it\n will throw a \u003ccode\u003e\u003ca\u003eTlsNotSupported\u003c/a\u003e\u003c/code\u003e exception if TLS is required.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred Client -\u003e Server -\u003e ThreeLegged -\u003e (URI -\u003e IO Verifier) -\u003e IO (Maybe (Cred Permanent))",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#requestTokenProtocol",
        "fct-type": "function",
        "title": "requestTokenProtocol"
      },
      "index": {
        "description": "Performs an interactive token request provided credentials configuration and way to convert user authorization URI into Verifier out of band Does not use any kind of TLS protection---it will throw TlsNotSupported exception if TLS is required Throws HttpException",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "requestTokenProtocol",
        "normalized": "Cred Client-\u003eServer-\u003eThreeLegged-\u003e(URI-\u003eIO Verifier)-\u003eIO(Maybe(Cred Permanent))",
        "package": "oauthenticated",
        "partial": "Token Protocol",
        "signature": "Cred Client-\u003eServer-\u003eThreeLegged-\u003e(URI-\u003eIO Verifier)-\u003eIO(Maybe(Cred Permanent))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:requestTokenProtocol-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erequestTokenProtocol\u003c/a\u003e\u003c/code\u003e but allows for specification of the\n \u003ccode\u003e\u003ca\u003eManagerSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "ManagerSettings -\u003e Cred Client -\u003e Server -\u003e ThreeLegged -\u003e (URI -\u003e IO Verifier) -\u003e IO (Maybe (Cred Permanent))",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#requestTokenProtocol%27",
        "fct-type": "function",
        "title": "requestTokenProtocol'"
      },
      "index": {
        "description": "Like requestTokenProtocol but allows for specification of the ManagerSettings",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "requestTokenProtocol'",
        "normalized": "ManagerSettings-\u003eCred Client-\u003eServer-\u003eThreeLegged-\u003e(URI-\u003eIO Verifier)-\u003eIO(Maybe(Cred Permanent))",
        "package": "oauthenticated",
        "partial": "Token Protocol'",
        "signature": "ManagerSettings-\u003eCred Client-\u003eServer-\u003eThreeLegged-\u003e(URI-\u003eIO Verifier)-\u003eIO(Maybe(Cred Permanent))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:resourceOwnerAuthorization",
      "description": {
        "fct-descr": "\u003cp\u003eBase \u003ccode\u003eRequest\u003c/code\u003e for the \"endpoint to which the resource\n owner is redirected to grant authorization\". This request\n must be performed by the user granting token authorization\n to the client. Transmitting the parameters of this request\n to the user is out of scope of \u003ccode\u003eoauthenticated\u003c/code\u003e, but\n functions are provided to make it easier.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Request",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "resourceOwnerAuthorization"
      },
      "index": {
        "description": "Base Request for the endpoint to which the resource owner is redirected to grant authorization This request must be performed by the user granting token authorization to the client Transmitting the parameters of this request to the user is out of scope of oauthenticated but functions are provided to make it easier",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "resourceOwnerAuthorization",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Owner Authorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-ThreeLegged.html#v:temporaryTokenRequest",
      "description": {
        "fct-descr": "\u003cp\u003eBase \u003ccode\u003eRequest\u003c/code\u003e for the \"endpoint used by the client to\n obtain a set of \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eCred\u003c/code\u003eentials\" in the form of\n a \u003ccode\u003eTemporary\u003c/code\u003e \u003ccode\u003eToken\u003c/code\u003e. This request is automatically\n instantiated and performed during the first leg of the\n \u003ccode\u003e\u003ca\u003eThreeLegged\u003c/a\u003e\u003c/code\u003e authorization protocol.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.ThreeLegged",
        "fct-package": "oauthenticated",
        "fct-signature": "Request",
        "fct-source": "src/Network-OAuth-ThreeLegged.html#ThreeLegged",
        "fct-type": "function",
        "title": "temporaryTokenRequest"
      },
      "index": {
        "description": "Base Request for the endpoint used by the client to obtain set of Temporary Cred entials in the form of Temporary Token This request is automatically instantiated and performed during the first leg of the ThreeLegged authorization protocol",
        "hierarchy": "Network OAuth ThreeLegged",
        "module": "Network.OAuth.ThreeLegged",
        "name": "temporaryTokenRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCredentials, \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es, are built from \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es, public/private key pairs, and\n come in 3 varieties.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e: Represents a particular client or consumer, used as part of\n every transaction that client signs.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e: Resource token representing a short-lived grant to access a\n restricted set of server resources on behalf of the user. Typically used as\n part of a authorization negotiation protocol.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e: Resource token representing a long-lived grant to access an\n authorized set of server resources on behalf of the user. Outside of access\n negotiation this is the most common kind of resource \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Types-Credentials.html",
        "fct-type": "module",
        "title": "Credentials"
      },
      "index": {
        "description": "Credentials Cred are built from Token public private key pairs and come in varieties Client Represents particular client or consumer used as part of every transaction that client signs Temporary Resource token representing short-lived grant to access restricted set of server resources on behalf of the user Typically used as part of authorization negotiation protocol Permanent Resource token representing long-lived grant to access an authorized set of server resources on behalf of the user Outside of access negotiation this is the most common kind of resource Token",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Credentials",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Credentials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials and \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es are assigned to a particular client by\n the server and are used for all requests sent by that client. They form the\n core component of resource specific credentials.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Client Cred entials and Token are assigned to particular client by the server and are used for all requests sent by that client They form the core component of resource specific credentials",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Client",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Cred",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials pair a \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e and either a \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e token corresponding to a particular set of user\n resources on the server.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Cred",
        "fct-type": "data",
        "title": "Cred"
      },
      "index": {
        "description": "Cred entials pair Client Token and either Temporary or Permanent token corresponding to particular set of user resources on the server",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Cred",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003es are public keys which allow a server to uniquely identify a\n particular \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "Token Key are public keys which allow server to uniquely identify particular Token",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Key",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Permanent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials are the primary means of accessing\n server resources. They must be maintained by the client for each user who\n authorizes that client to access resources on their behalf.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Permanent",
        "fct-type": "data",
        "title": "Permanent"
      },
      "index": {
        "description": "Permanent Token and Cred entials are the primary means of accessing server resources They must be maintained by the client for each user who authorizes that client to access resources on their behalf",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Permanent",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Permanent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:ResourceToken",
      "description": {
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "class",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#ResourceToken",
        "fct-type": "class",
        "title": "ResourceToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "ResourceToken",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Resource Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Secret",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSecret\u003c/a\u003e\u003c/code\u003es are private keys which the \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e uses for\n cryptographic purposes.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Secret",
        "fct-type": "type",
        "title": "Secret"
      },
      "index": {
        "description": "Token Secret are private keys which the Token uses for cryptographic purposes",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Secret",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Secret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Temporary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials are created during authorization\n protocols and are rarely meant to be kept for more than a few minutes.\n Typically they are authorized to access only a very select set of server\n resources. During \"three-legged authorization\" in OAuth 1.0 they are used\n to generate the authorization request URI the client sends and, after that,\n in the \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Temporary",
        "fct-type": "data",
        "title": "Temporary"
      },
      "index": {
        "description": "Temporary Token and Cred entials are created during authorization protocols and are rarely meant to be kept for more than few minutes Typically they are authorized to access only very select set of server resources During three-legged authorization in OAuth they are used to generate the authorization request URI the client sends and after that in the Permanent Token request",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Temporary",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Temporary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es are public, private key pairs and come in many varieties,\n \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "Token are public private key pairs and come in many varieties Client Temporary and Permanent",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Token",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:Token",
      "description": {
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Token !Key !Secret",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Token",
        "fct-type": "function",
        "title": "Token"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "Token",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:clientCred",
      "description": {
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Client -\u003e Cred Client",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#clientCred",
        "fct-type": "function",
        "title": "clientCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "clientCred",
        "normalized": "Token Client-\u003eCred Client",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Client-\u003eCred Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:clientToken",
      "description": {
        "fct-descr": "\u003cp\u003eA lens on the client \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e in any \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "(Token Client -\u003e f (Token Client)) -\u003e Cred ty -\u003e f (Cred ty)",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#clientToken",
        "fct-type": "function",
        "title": "clientToken"
      },
      "index": {
        "description": "lens on the client Token in any Cred",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "clientToken",
        "normalized": "(Token Client-\u003ea(Token Client))-\u003eCred b-\u003ea(Cred b)",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": "(Token Client-\u003ef(Token Client))-\u003eCred ty-\u003ef(Cred ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:fromUrlEncoded",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e stream to produce a \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e if possible. \n The first result value is whether or not the token data is OAuth 1.0a \n compatible.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromUrlEncoded \"oauth_token=key&oauth_token_secret=secret\"\n\u003c/code\u003e\u003c/strong\u003eJust (False, Token \"key\" \"secret\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromUrlEncoded \"oauth_token=key&oauth_token_secret=secret&oauth_callback_confirmed=true\"\n\u003c/code\u003e\u003c/strong\u003eJust (True, Token \"key\" \"secret\")\n\u003c/pre\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "ByteString -\u003e Maybe (Bool, Token ty)",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#fromUrlEncoded",
        "fct-type": "function",
        "title": "fromUrlEncoded"
      },
      "index": {
        "description": "Parses www-form-urlencoded stream to produce Token if possible The first result value is whether or not the token data is OAuth compatible fromUrlEncoded oauth token key oauth token secret secret Just False Token key secret fromUrlEncoded oauth token key oauth token secret secret oauth callback confirmed true Just True Token key secret",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "fromUrlEncoded",
        "normalized": "ByteString-\u003eMaybe(Bool,Token a)",
        "package": "oauthenticated",
        "partial": "Url Encoded",
        "signature": "ByteString-\u003eMaybe(Bool,Token ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:getResourceTokenDef",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth assumes that, by default, any credential has a resource \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e that\n is by default completely blank. In this way we can talk about the resource\n \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e of even \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetResourceTokenDef (clientCred $ Token \"key\" \"secret\")\n\u003c/code\u003e\u003c/strong\u003eToken \"\" \"\"\n\u003c/pre\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e Token ty",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#getResourceTokenDef",
        "fct-type": "function",
        "title": "getResourceTokenDef"
      },
      "index": {
        "description": "OAuth assumes that by default any credential has resource Token that is by default completely blank In this way we can talk about the resource Token of even Client Cred getResourceTokenDef clientCred Token key secret Token",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "getResourceTokenDef",
        "normalized": "Cred a-\u003eToken a",
        "package": "oauthenticated",
        "partial": "Resource Token Def",
        "signature": "Cred ty-\u003eToken ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:key",
      "description": {
        "fct-descr": "\u003cp\u003eLens on the key component of a \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "(Key -\u003e f Key) -\u003e Token ty -\u003e f (Token ty)",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "Lens on the key component of Token",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "key",
        "normalized": "(Key-\u003ea Key)-\u003eToken b-\u003ea(Token b)",
        "package": "oauthenticated",
        "partial": "",
        "signature": "(Key-\u003ef Key)-\u003eToken ty-\u003ef(Token ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:permanentCred",
      "description": {
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Permanent -\u003e Cred Client -\u003e Cred Permanent",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#permanentCred",
        "fct-type": "function",
        "title": "permanentCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "permanentCred",
        "normalized": "Token Permanent-\u003eCred Client-\u003eCred Permanent",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Permanent-\u003eCred Client-\u003eCred Permanent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:resourceToken",
      "description": {
        "fct-descr": "\u003cp\u003eA lens focused on the resource \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e when available. The only\n instances of \u003ccode\u003e\u003ca\u003eResourceToken\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e. This can\n be used to upgrade \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "(Token ty -\u003e f (Token ty')) -\u003e Cred ty -\u003e f (Cred ty')",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#resourceToken",
        "fct-type": "function",
        "title": "resourceToken"
      },
      "index": {
        "description": "lens focused on the resource Token when available The only instances of ResourceToken are Temporary and Permanent This can be used to upgrade Temporary Cred to Permanent Cred",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "resourceToken",
        "normalized": "(Token a-\u003eb(Token c))-\u003eCred a-\u003eb(Cred c)",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": "(Token ty-\u003ef(Token ty'))-\u003eCred ty-\u003ef(Cred ty')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:secret",
      "description": {
        "fct-descr": "\u003cp\u003eLens on the key secret component of a \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "(Secret -\u003e f Secret) -\u003e Token ty -\u003e f (Token ty)",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#secret",
        "fct-type": "function",
        "title": "secret"
      },
      "index": {
        "description": "Lens on the key secret component of Token",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "secret",
        "normalized": "(Secret-\u003ea Secret)-\u003eToken b-\u003ea(Token b)",
        "package": "oauthenticated",
        "partial": "",
        "signature": "(Secret-\u003ef Secret)-\u003eToken ty-\u003ef(Token ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:signingKey",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003esigningKey\u003c/a\u003e\u003c/code\u003e from a set of credentials. This is a URL\n encoded string built from the client secret and the token\n secret.\n\u003c/p\u003e\u003cp\u003eIf no token secret exists then the blank string is used.\n\u003c/p\u003e\u003cpre\u003e\\secret -\u003e signingKey (clientCred $ Token \"key\" secret) == (pctEncode secret \u003c\u003e \"&\" \u003c\u003e \"\")\u003c/pre\u003e",
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e ByteString",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#signingKey",
        "fct-type": "function",
        "title": "signingKey"
      },
      "index": {
        "description": "Produce signingKey from set of credentials This is URL encoded string built from the client secret and the token secret If no token secret exists then the blank string is used secret signingKey clientCred Token key secret pctEncode secret",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "signingKey",
        "normalized": "Cred a-\u003eByteString",
        "package": "oauthenticated",
        "partial": "Key",
        "signature": "Cred ty-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:temporaryCred",
      "description": {
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Temporary -\u003e Cred Client -\u003e Cred Temporary",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#temporaryCred",
        "fct-type": "function",
        "title": "temporaryCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "temporaryCred",
        "normalized": "Token Temporary-\u003eCred Client-\u003eCred Temporary",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Temporary-\u003eCred Client-\u003eCred Temporary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Credentials.html#v:upgradeCred",
      "description": {
        "fct-module": "Network.OAuth.Types.Credentials",
        "fct-package": "oauthenticated",
        "fct-signature": "Token tk -\u003e Cred tk' -\u003e Cred tk",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#upgradeCred",
        "fct-type": "function",
        "title": "upgradeCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Credentials",
        "module": "Network.OAuth.Types.Credentials",
        "name": "upgradeCred",
        "normalized": "Token a-\u003eCred b-\u003eCred a",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token tk-\u003eCred tk'-\u003eCred tk"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eOAuth Parameters\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eOAuth 1.0 operates by creating a set of \"oauth parameters\" here\n called \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e which augment a request with OAuth specific\n metadata. They may be used to augment the request by one of several\n \u003ccode\u003eParameterMethods\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth-Types-Params.html",
        "fct-type": "module",
        "title": "Params"
      },
      "index": {
        "description": "OAuth Parameters OAuth operates by creating set of oauth parameters here called Oa which augment request with OAuth specific metadata They may be used to augment the request by one of several ParameterMethods",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Params",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Callback",
      "description": {
        "fct-descr": "\u003cp\u003eWhen performing the second leg of the three-leg token request workflow,\n the user must pass the \u003ccode\u003eoauth_verifier\u003c/code\u003e code back to the client. In order to\n ensure that this protocol is secure, OAuth demands that the client\n associates this \"callback method\" with the temporary credentials generated\n for the workflow. This \u003ccode\u003e\u003ca\u003eCallback\u003c/a\u003e\u003c/code\u003e method may be a URL where the parameters\n are returned to or the string \u003ccode\u003e\"oob\"\u003c/code\u003e which indicates that the user is\n responsible for returning the \u003ccode\u003eoauth_verifier\u003c/code\u003e to the client \u003ccode\u003e\u003ca\u003eOutOfBand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "data",
        "title": "Callback"
      },
      "index": {
        "description": "When performing the second leg of the three-leg token request workflow the user must pass the oauth verifier code back to the client In order to ensure that this protocol is secure OAuth demands that the client associates this callback method with the temporary credentials generated for the workflow This Callback method may be URL where the parameters are returned to or the string oob which indicates that the user is responsible for returning the oauth verifier to the client OutOfBand",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Oa",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters include all the OAuth information specific to a single\n request. They are not sufficient information by themselves to generate the\n entire OAuth request but instead must be augmented with \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e information.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Oa",
        "fct-type": "data",
        "title": "Oa"
      },
      "index": {
        "description": "The Oa parameters include all the OAuth information specific to single request They are not sufficient information by themselves to generate the entire OAuth request but instead must be augmented with Server information",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Oa",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Oa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:OaPin",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOaPin\u003c/a\u003e\u003c/code\u003e is a set of impure OAuth parameters which are generated for each\n request in order to ensure uniqueness and temporality.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#OaPin",
        "fct-type": "data",
        "title": "OaPin"
      },
      "index": {
        "description": "The OaPin is set of impure OAuth parameters which are generated for each request in order to ensure uniqueness and temporality",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "OaPin",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Oa Pin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:ParameterMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe OAuth spec suggest that the OAuth parameter be passed via the\n \u003ccode\u003eAuthorization\u003c/code\u003e header, but allows for other methods of\n transmission (see section \u003ca\u003e3.5. Parameter Transmission\u003c/a\u003e) so we\n select the 'Server'\\'s preferred method with this type.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "data",
        "title": "ParameterMethod"
      },
      "index": {
        "description": "The OAuth spec suggest that the OAuth parameter be passed via the Authorization header but allows for other methods of transmission see section Parameter Transmission so we select the Server preferred method with this type",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "ParameterMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Parameter Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Server",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e information contains details which parameterize how a\n particular server wants to interpret OAuth requests.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "data",
        "title": "Server"
      },
      "index": {
        "description": "The Server information contains details which parameterize how particular server wants to interpret OAuth requests",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Server",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:SignatureMethod",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth culminates in the creation of the \u003ccode\u003eoauth_signature\u003c/code\u003e which\n signs and authenticates the request using the secret components of\n a particular OAuth \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSeveral methods exist for generating these signatures, the most\n popular being \u003ccode\u003e\u003ca\u003eHmacSha1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "data",
        "title": "SignatureMethod"
      },
      "index": {
        "description": "OAuth culminates in the creation of the oauth signature which signs and authenticates the request using the secret components of particular OAuth Cred Several methods exist for generating these signatures the most popular being HmacSha1",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "SignatureMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Signature Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Timestamp",
      "description": {
        "fct-descr": "\u003cp\u003eAn Epoch time format timestamp.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "newtype",
        "fct-source": "src/Network-OAuth-Types-Params.html#Timestamp",
        "fct-type": "newtype",
        "title": "Timestamp"
      },
      "index": {
        "description": "An Epoch time format timestamp",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Timestamp",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Verifier",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e is produced when a user authorizes a set of \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es. Using the \u003ccode\u003e\u003ca\u003eVerifier\u003c/a\u003e\u003c/code\u003e allows the client to request \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "type",
        "fct-source": "src/Network-OAuth-Types-Params.html#Verifier",
        "fct-type": "type",
        "title": "Verifier"
      },
      "index": {
        "description": "Verifier is produced when user authorizes set of Temporary Cred Using the Verifier allows the client to request Permanent Cred",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Verifier",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Verifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth has progressed through several versions since its inception. In\n particular, there are two community editions \"OAuth Core 1.0\" (2007)\n \u003cimg src=\"http://oauth.net/core/1.0\"/\u003e and \"OAuth Core 1.0a\" (2009)\n \u003cimg src=\"http://oauth.net/core/1.0a\"/\u003e along with the IETF Official version RFC\n 5849 (2010) \u003cimg src=\"http://tools.ietf.org/html/rfc5849\"/\u003e which is confusingly\n named \u003ca\u003eOAuth 1.0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e/Servers which only implement the obsoleted community edition \"OAuth\n Core 1.0\" are susceptible to a session fixation attack./\n\u003c/p\u003e\u003cp\u003eIf at all possible, choose the RFC 5849 version (the \u003ccode\u003e\u003ca\u003eOAuth1\u003c/a\u003e\u003c/code\u003e value) as\n it is the modern standard. Some servers may only be compliant with an\n earlier OAuth version---this should be tested against each server, in\n particular the protocols defined in \u003ca\u003eNetwork.OAuth.ThreeLegged\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "OAuth has progressed through several versions since its inception In particular there are two community editions OAuth Core and OAuth Core along with the IETF Official version RFC which is confusingly named OAuth Servers which only implement the obsoleted community edition OAuth Core are susceptible to session fixation attack If at all possible choose the RFC version the OAuth1 value as it is the modern standard Some servers may only be compliant with an earlier OAuth version---this should be tested against each server in particular the protocols defined in Network.OAuth.ThreeLegged",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Version",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#t:Workflow",
      "description": {
        "fct-descr": "\u003cp\u003eSome special OAuth requests use extra \u003ccode\u003eoauth_*\u003c/code\u003e parameters. For example,\n when requesting a temporary credential, it's necessary that a\n \u003ccode\u003eoauth_callback\u003c/code\u003e parameter be specified. \u003ccode\u003eWorkflowParams\u003c/code\u003e allows these extra\n parameters to be specified.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Workflow",
        "fct-type": "data",
        "title": "Workflow"
      },
      "index": {
        "description": "Some special OAuth requests use extra oauth parameters For example when requesting temporary credential it necessary that oauth callback parameter be specified WorkflowParams allows these extra parameters to be specified",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Workflow",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Workflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:AuthorizationHeader",
      "description": {
        "fct-descr": "\u003cp\u003ePlace the \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters in the\n \u003ccode\u003eAuthorization\u003c/code\u003e HTTP header.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "AuthorizationHeader",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "AuthorizationHeader"
      },
      "index": {
        "description": "Place the Oa parameters in the Authorization HTTP header",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "AuthorizationHeader",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Authorization Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:Callback",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Callback Request",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "function",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Callback",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:HmacSha1",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "HmacSha1",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "function",
        "title": "HmacSha1"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "HmacSha1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Hmac Sha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:OAuth1",
      "description": {
        "fct-descr": "\u003cp\u003eRFC 5849 \u003cimg src=\"http://tools.ietf.org/html/rfc5849\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuth1",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuth1"
      },
      "index": {
        "description": "RFC",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "OAuth1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:OAuthCommunity1",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth Core 1.0 Community Edition\n \u003cimg src=\"http://oauth.net/core/1.0\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthCommunity1",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuthCommunity1"
      },
      "index": {
        "description": "OAuth Core Community Edition",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "OAuthCommunity1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth Community",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:OAuthCommunity1a",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth Core 1.0 Community Edition, Revision\n A \u003cimg src=\"http://oauth.net/core/1.0a\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthCommunity1a",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuthCommunity1a"
      },
      "index": {
        "description": "OAuth Core Community Edition Revision",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "OAuthCommunity1a",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth Community",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:Oa",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Oa",
        "fct-source": "src/Network-OAuth-Types-Params.html#Oa",
        "fct-type": "function",
        "title": "Oa"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Oa",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Oa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:OaPin",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OaPin",
        "fct-source": "src/Network-OAuth-Types-Params.html#OaPin",
        "fct-type": "function",
        "title": "OaPin"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "OaPin",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Oa Pin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:OutOfBand",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OutOfBand",
        "fct-source": "src/Network-OAuth-Types-Params.html#Callback",
        "fct-type": "function",
        "title": "OutOfBand"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "OutOfBand",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Out Of Band",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:PermanentTokenRequest",
      "description": {
        "fct-descr": "\u003cp\u003eIncludes the \u003ccode\u003eoauth_verifier\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "PermanentTokenRequest ByteString",
        "fct-source": "src/Network-OAuth-Types-Params.html#Workflow",
        "fct-type": "function",
        "title": "PermanentTokenRequest"
      },
      "index": {
        "description": "Includes the oauth verifier",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "PermanentTokenRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Permanent Token Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:Plaintext",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Plaintext",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "function",
        "title": "Plaintext"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Plaintext",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Plaintext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:QueryString",
      "description": {
        "fct-descr": "\u003cp\u003eAugment the \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e query\n string with \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "QueryString",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "QueryString"
      },
      "index": {
        "description": "Augment the www-form-urlencoded query string with Oa parameters",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "QueryString",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:RequestEntityBody",
      "description": {
        "fct-descr": "\u003cp\u003eAugment the \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e request\n body with \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "RequestEntityBody",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "RequestEntityBody"
      },
      "index": {
        "description": "Augment the www-form-urlencoded request body with Oa parameters",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "RequestEntityBody",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Request Entity Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:Server",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Server",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Server",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:Standard",
      "description": {
        "fct-descr": "\u003cp\u003eNo special OAuth parameters needed\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Standard",
        "fct-source": "src/Network-OAuth-Types-Params.html#Workflow",
        "fct-type": "function",
        "title": "Standard"
      },
      "index": {
        "description": "No special OAuth parameters needed",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Standard",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Standard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:TemporaryTokenRequest",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "TemporaryTokenRequest Callback",
        "fct-source": "src/Network-OAuth-Types-Params.html#Workflow",
        "fct-type": "function",
        "title": "TemporaryTokenRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "TemporaryTokenRequest",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Temporary Token Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:Timestamp",
      "description": {
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Timestamp UTCTime",
        "fct-source": "src/Network-OAuth-Types-Params.html#Timestamp",
        "fct-type": "function",
        "title": "Timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "Timestamp",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:credentials",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty",
        "fct-source": "src/Network-OAuth-Types-Params.html#Oa",
        "fct-type": "function",
        "title": "credentials"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "credentials",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:defaultServer",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e parameterization uses OAuth recommended parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Server",
        "fct-source": "src/Network-OAuth-Types-Params.html#defaultServer",
        "fct-type": "function",
        "title": "defaultServer"
      },
      "index": {
        "description": "The default Server parameterization uses OAuth recommended parameters",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "defaultServer",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:emptyOa",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003eemptyPin\u003c/a\u003e\u003c/code\u003e to create an empty set of params \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e Oa ty",
        "fct-source": "src/Network-OAuth-Types-Params.html#emptyOa",
        "fct-type": "function",
        "title": "emptyOa"
      },
      "index": {
        "description": "Uses emptyPin to create an empty set of params Oa",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "emptyOa",
        "normalized": "Cred a-\u003eOa a",
        "package": "oauthenticated",
        "partial": "Oa",
        "signature": "Cred ty-\u003eOa ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:emptyPin",
      "description": {
        "fct-descr": "\u003cp\u003eAn \"empty\" pin useful for testing. This \u003ccode\u003e\u003ca\u003eOaPin\u003c/a\u003e\u003c/code\u003e is referentially\n transparent and thus has none of the necessary security features---it should\n \u003cem\u003enever\u003c/em\u003e be used in an actual transaction!\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OaPin",
        "fct-source": "src/Network-OAuth-Types-Params.html#emptyPin",
        "fct-type": "function",
        "title": "emptyPin"
      },
      "index": {
        "description": "An empty pin useful for testing This OaPin is referentially transparent and thus has none of the necessary security features---it should never be used in an actual transaction",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "emptyPin",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Pin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:freshOa",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003efreshPin\u003c/a\u003e\u003c/code\u003e to create a fresh, default set of params \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e gen -\u003e IO (Oa ty, gen)",
        "fct-source": "src/Network-OAuth-Types-Params.html#freshOa",
        "fct-type": "function",
        "title": "freshOa"
      },
      "index": {
        "description": "Uses freshPin to create fresh default set of params Oa",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "freshOa",
        "normalized": "Cred a-\u003eb-\u003eIO(Oa a,b)",
        "package": "oauthenticated",
        "partial": "Oa",
        "signature": "Cred ty-\u003egen-\u003eIO(Oa ty,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:freshPin",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new, unique, unpredictable \u003ccode\u003e\u003ca\u003eOaPin\u003c/a\u003e\u003c/code\u003e. This should be used quickly\n as dependent on the OAuth server settings it may expire.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "gen -\u003e IO (OaPin, gen)",
        "fct-source": "src/Network-OAuth-Types-Params.html#freshPin",
        "fct-type": "function",
        "title": "freshPin"
      },
      "index": {
        "description": "Creates new unique unpredictable OaPin This should be used quickly as dependent on the OAuth server settings it may expire",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "freshPin",
        "normalized": "a-\u003eIO(OaPin,a)",
        "package": "oauthenticated",
        "partial": "Pin",
        "signature": "gen-\u003eIO(OaPin,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:nonce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-OAuth-Types-Params.html#OaPin",
        "fct-type": "function",
        "title": "nonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "nonce",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:oAuthVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Version",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "oAuthVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "oAuthVersion",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Auth Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:parameterMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "ParameterMethod",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "parameterMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "parameterMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:pin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "OaPin",
        "fct-source": "src/Network-OAuth-Types-Params.html#Oa",
        "fct-type": "function",
        "title": "pin"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "pin",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:signatureMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "SignatureMethod",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "signatureMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "signatureMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:timestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Timestamp",
        "fct-source": "src/Network-OAuth-Types-Params.html#OaPin",
        "fct-type": "function",
        "title": "timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "timestamp",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:timestampFromSeconds",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTimestamp\u003c/a\u003e\u003c/code\u003e deterministically from a POSIX Epoch Time.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Integer -\u003e Timestamp",
        "fct-source": "src/Network-OAuth-Types-Params.html#timestampFromSeconds",
        "fct-type": "function",
        "title": "timestampFromSeconds"
      },
      "index": {
        "description": "Create Timestamp deterministically from POSIX Epoch Time",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "timestampFromSeconds",
        "normalized": "Integer-\u003eTimestamp",
        "package": "oauthenticated",
        "partial": "From Seconds",
        "signature": "Integer-\u003eTimestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth-Types-Params.html#v:workflow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth.Types.Params",
        "fct-package": "oauthenticated",
        "fct-signature": "Workflow",
        "fct-source": "src/Network-OAuth-Types-Params.html#Oa",
        "fct-type": "function",
        "title": "workflow"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth Types Params",
        "module": "Network.OAuth.Types.Params",
        "name": "workflow",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOAuth tools for using \u003ccode\u003ehttp-client\u003c/code\u003e for authenticated requests.\n\u003c/p\u003e\u003cp\u003eThe functions here form the simplest basis for sending OAuthenticated\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es. In order to generate credentials according to the OAuth\n \u003ca\u003ethree-legged workflow\u003c/a\u003e use actions in the \u003ca\u003eNetwork.OAuth.ThreeLegged\u003c/a\u003e\n module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "module",
        "fct-source": "src/Network-OAuth.html",
        "fct-type": "module",
        "title": "OAuth"
      },
      "index": {
        "description": "OAuth tools for using http-client for authenticated requests The functions here form the simplest basis for sending OAuthenticated Request In order to generate credentials according to the OAuth three-legged workflow use actions in the Network.OAuth.ThreeLegged module",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "OAuth",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials and \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es are assigned to a particular client by\n the server and are used for all requests sent by that client. They form the\n core component of resource specific credentials.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Client Cred entials and Token are assigned to particular client by the server and are used for all requests sent by that client They form the core component of resource specific credentials",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Client",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Cred",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials pair a \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e and either a \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e token corresponding to a particular set of user\n resources on the server.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Cred",
        "fct-type": "data",
        "title": "Cred"
      },
      "index": {
        "description": "Cred entials pair Client Token and either Temporary or Permanent token corresponding to particular set of user resources on the server",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Cred",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:ParameterMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe OAuth spec suggest that the OAuth parameter be passed via the\n \u003ccode\u003eAuthorization\u003c/code\u003e header, but allows for other methods of\n transmission (see section \u003ca\u003e3.5. Parameter Transmission\u003c/a\u003e) so we\n select the 'Server'\\'s preferred method with this type.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "data",
        "title": "ParameterMethod"
      },
      "index": {
        "description": "The OAuth spec suggest that the OAuth parameter be passed via the Authorization header but allows for other methods of transmission see section Parameter Transmission so we select the Server preferred method with this type",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "ParameterMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Parameter Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Permanent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials are the primary means of accessing\n server resources. They must be maintained by the client for each user who\n authorizes that client to access resources on their behalf.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Permanent",
        "fct-type": "data",
        "title": "Permanent"
      },
      "index": {
        "description": "Permanent Token and Cred entials are the primary means of accessing server resources They must be maintained by the client for each user who authorizes that client to access resources on their behalf",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Permanent",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Permanent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Server",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e information contains details which parameterize how a\n particular server wants to interpret OAuth requests.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "data",
        "title": "Server"
      },
      "index": {
        "description": "The Server information contains details which parameterize how particular server wants to interpret OAuth requests",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Server",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:SignatureMethod",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth culminates in the creation of the \u003ccode\u003eoauth_signature\u003c/code\u003e which\n signs and authenticates the request using the secret components of\n a particular OAuth \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSeveral methods exist for generating these signatures, the most\n popular being \u003ccode\u003e\u003ca\u003eHmacSha1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "data",
        "title": "SignatureMethod"
      },
      "index": {
        "description": "OAuth culminates in the creation of the oauth signature which signs and authenticates the request using the secret components of particular OAuth Cred Several methods exist for generating these signatures the most popular being HmacSha1",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "SignatureMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Signature Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Temporary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eCred\u003c/a\u003e\u003c/code\u003eentials are created during authorization\n protocols and are rarely meant to be kept for more than a few minutes.\n Typically they are authorized to access only a very select set of server\n resources. During \"three-legged authorization\" in OAuth 1.0 they are used\n to generate the authorization request URI the client sends and, after that,\n in the \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e request.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Temporary",
        "fct-type": "data",
        "title": "Temporary"
      },
      "index": {
        "description": "Temporary Token and Cred entials are created during authorization protocols and are rarely meant to be kept for more than few minutes Typically they are authorized to access only very select set of server resources During three-legged authorization in OAuth they are used to generate the authorization request URI the client sends and after that in the Permanent Token request",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Temporary",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Temporary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es are public, private key pairs and come in many varieties,\n \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTemporary\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ePermanent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "Token are public private key pairs and come in many varieties Client Temporary and Permanent",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Token",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth has progressed through several versions since its inception. In\n particular, there are two community editions \"OAuth Core 1.0\" (2007)\n \u003cimg src=\"http://oauth.net/core/1.0\"/\u003e and \"OAuth Core 1.0a\" (2009)\n \u003cimg src=\"http://oauth.net/core/1.0a\"/\u003e along with the IETF Official version RFC\n 5849 (2010) \u003cimg src=\"http://tools.ietf.org/html/rfc5849\"/\u003e which is confusingly\n named \u003ca\u003eOAuth 1.0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e/Servers which only implement the obsoleted community edition \"OAuth\n Core 1.0\" are susceptible to a session fixation attack./\n\u003c/p\u003e\u003cp\u003eIf at all possible, choose the RFC 5849 version (the \u003ccode\u003e\u003ca\u003eOAuth1\u003c/a\u003e\u003c/code\u003e value) as\n it is the modern standard. Some servers may only be compliant with an\n earlier OAuth version---this should be tested against each server, in\n particular the protocols defined in \u003ca\u003eNetwork.OAuth.ThreeLegged\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "data",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "OAuth has progressed through several versions since its inception In particular there are two community editions OAuth Core and OAuth Core along with the IETF Official version RFC which is confusingly named OAuth Servers which only implement the obsoleted community edition OAuth Core are susceptible to session fixation attack If at all possible choose the RFC version the OAuth1 value as it is the modern standard Some servers may only be compliant with an earlier OAuth version---this should be tested against each server in particular the protocols defined in Network.OAuth.ThreeLegged",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Version",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:AuthorizationHeader",
      "description": {
        "fct-descr": "\u003cp\u003ePlace the \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters in the\n \u003ccode\u003eAuthorization\u003c/code\u003e HTTP header.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "AuthorizationHeader",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "AuthorizationHeader"
      },
      "index": {
        "description": "Place the Oa parameters in the Authorization HTTP header",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "AuthorizationHeader",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Authorization Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:HmacSha1",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "HmacSha1",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "function",
        "title": "HmacSha1"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "HmacSha1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Hmac Sha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:OAuth1",
      "description": {
        "fct-descr": "\u003cp\u003eRFC 5849 \u003cimg src=\"http://tools.ietf.org/html/rfc5849\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuth1",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuth1"
      },
      "index": {
        "description": "RFC",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "OAuth1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:OAuthCommunity1",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth Core 1.0 Community Edition\n \u003cimg src=\"http://oauth.net/core/1.0\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthCommunity1",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuthCommunity1"
      },
      "index": {
        "description": "OAuth Core Community Edition",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "OAuthCommunity1",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth Community",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:OAuthCommunity1a",
      "description": {
        "fct-descr": "\u003cp\u003eOAuth Core 1.0 Community Edition, Revision\n A \u003cimg src=\"http://oauth.net/core/1.0a\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "OAuthCommunity1a",
        "fct-source": "src/Network-OAuth-Types-Params.html#Version",
        "fct-type": "function",
        "title": "OAuthCommunity1a"
      },
      "index": {
        "description": "OAuth Core Community Edition Revision",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "OAuthCommunity1a",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "OAuth Community",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:Plaintext",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Plaintext",
        "fct-source": "src/Network-OAuth-Types-Params.html#SignatureMethod",
        "fct-type": "function",
        "title": "Plaintext"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Plaintext",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Plaintext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:QueryString",
      "description": {
        "fct-descr": "\u003cp\u003eAugment the \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e query\n string with \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "QueryString",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "QueryString"
      },
      "index": {
        "description": "Augment the www-form-urlencoded query string with Oa parameters",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "QueryString",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:RequestEntityBody",
      "description": {
        "fct-descr": "\u003cp\u003eAugment the \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e request\n body with \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "RequestEntityBody",
        "fct-source": "src/Network-OAuth-Types-Params.html#ParameterMethod",
        "fct-type": "function",
        "title": "RequestEntityBody"
      },
      "index": {
        "description": "Augment the www-form-urlencoded request body with Oa parameters",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "RequestEntityBody",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Request Entity Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:Server",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Server",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Server",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:Token",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Token !Key !Secret",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#Token",
        "fct-type": "function",
        "title": "Token"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "Token",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:clientCred",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Client -\u003e Cred Client",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#clientCred",
        "fct-type": "function",
        "title": "clientCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "clientCred",
        "normalized": "Token Client-\u003eCred Client",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Client-\u003eCred Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:defaultServer",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eServer\u003c/a\u003e\u003c/code\u003e parameterization uses OAuth recommended parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Server",
        "fct-source": "src/Network-OAuth-Types-Params.html#defaultServer",
        "fct-type": "function",
        "title": "defaultServer"
      },
      "index": {
        "description": "The default Server parameterization uses OAuth recommended parameters",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "defaultServer",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:emptyOa",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003eemptyPin\u003c/a\u003e\u003c/code\u003e to create an empty set of params \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e Oa ty",
        "fct-source": "src/Network-OAuth-Types-Params.html#emptyOa",
        "fct-type": "function",
        "title": "emptyOa"
      },
      "index": {
        "description": "Uses emptyPin to create an empty set of params Oa",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "emptyOa",
        "normalized": "Cred a-\u003eOa a",
        "package": "oauthenticated",
        "partial": "Oa",
        "signature": "Cred ty-\u003eOa ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:emptyPin",
      "description": {
        "fct-descr": "\u003cp\u003eAn \"empty\" pin useful for testing. This \u003ccode\u003e\u003ca\u003eOaPin\u003c/a\u003e\u003c/code\u003e is referentially\n transparent and thus has none of the necessary security features---it should\n \u003cem\u003enever\u003c/em\u003e be used in an actual transaction!\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "OaPin",
        "fct-source": "src/Network-OAuth-Types-Params.html#emptyPin",
        "fct-type": "function",
        "title": "emptyPin"
      },
      "index": {
        "description": "An empty pin useful for testing This OaPin is referentially transparent and thus has none of the necessary security features---it should never be used in an actual transaction",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "emptyPin",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Pin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:freshOa",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003efreshPin\u003c/a\u003e\u003c/code\u003e to create a fresh, default set of params \u003ccode\u003e\u003ca\u003eOa\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e gen -\u003e IO (Oa ty, gen)",
        "fct-source": "src/Network-OAuth-Types-Params.html#freshOa",
        "fct-type": "function",
        "title": "freshOa"
      },
      "index": {
        "description": "Uses freshPin to create fresh default set of params Oa",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "freshOa",
        "normalized": "Cred a-\u003eb-\u003eIO(Oa a,b)",
        "package": "oauthenticated",
        "partial": "Oa",
        "signature": "Cred ty-\u003egen-\u003eIO(Oa ty,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:freshPin",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new, unique, unpredictable \u003ccode\u003e\u003ca\u003eOaPin\u003c/a\u003e\u003c/code\u003e. This should be used quickly\n as dependent on the OAuth server settings it may expire.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "gen -\u003e IO (OaPin, gen)",
        "fct-source": "src/Network-OAuth-Types-Params.html#freshPin",
        "fct-type": "function",
        "title": "freshPin"
      },
      "index": {
        "description": "Creates new unique unpredictable OaPin This should be used quickly as dependent on the OAuth server settings it may expire",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "freshPin",
        "normalized": "a-\u003eIO(OaPin,a)",
        "package": "oauthenticated",
        "partial": "Pin",
        "signature": "gen-\u003eIO(OaPin,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:fromUrlEncoded",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003ewww-form-urlencoded\u003c/code\u003e stream to produce a \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e if possible. \n The first result value is whether or not the token data is OAuth 1.0a \n compatible.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromUrlEncoded \"oauth_token=key&oauth_token_secret=secret\"\n\u003c/code\u003e\u003c/strong\u003eJust (False, Token \"key\" \"secret\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromUrlEncoded \"oauth_token=key&oauth_token_secret=secret&oauth_callback_confirmed=true\"\n\u003c/code\u003e\u003c/strong\u003eJust (True, Token \"key\" \"secret\")\n\u003c/pre\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "ByteString -\u003e Maybe (Bool, Token ty)",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#fromUrlEncoded",
        "fct-type": "function",
        "title": "fromUrlEncoded"
      },
      "index": {
        "description": "Parses www-form-urlencoded stream to produce Token if possible The first result value is whether or not the token data is OAuth compatible fromUrlEncoded oauth token key oauth token secret secret Just False Token key secret fromUrlEncoded oauth token key oauth token secret secret oauth callback confirmed true Just True Token key secret",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "fromUrlEncoded",
        "normalized": "ByteString-\u003eMaybe(Bool,Token a)",
        "package": "oauthenticated",
        "partial": "Url Encoded",
        "signature": "ByteString-\u003eMaybe(Bool,Token ty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:oAuthVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Version",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "oAuthVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "oAuthVersion",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Auth Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:oauth",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request with a fresh set of parameters.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e Server -\u003e Request -\u003e gen -\u003e IO (Request, gen)",
        "fct-source": "src/Network-OAuth-Signing.html#oauth",
        "fct-type": "function",
        "title": "oauth"
      },
      "index": {
        "description": "Sign request with fresh set of parameters",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "oauth",
        "normalized": "Cred a-\u003eServer-\u003eRequest-\u003eb-\u003eIO(Request,b)",
        "package": "oauthenticated",
        "partial": "",
        "signature": "Cred ty-\u003eServer-\u003eRequest-\u003egen-\u003eIO(Request,gen)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:oauthSimple",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request with a fresh set of parameters. Creates a fresh\n \u003ccode\u003e\u003ca\u003eSystemRNG\u003c/a\u003e\u003c/code\u003e using new entropy for each signing and thus is potentially\n \u003cem\u003edangerous\u003c/em\u003e if used too frequently. In almost all cases, \u003ccode\u003e\u003ca\u003eoauth\u003c/a\u003e\u003c/code\u003e\n should be used instead.\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Cred ty -\u003e Server -\u003e Request -\u003e IO Request",
        "fct-source": "src/Network-OAuth.html#oauthSimple",
        "fct-type": "function",
        "title": "oauthSimple"
      },
      "index": {
        "description": "Sign request with fresh set of parameters Creates fresh SystemRNG using new entropy for each signing and thus is potentially dangerous if used too frequently In almost all cases oauth should be used instead",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "oauthSimple",
        "normalized": "Cred a-\u003eServer-\u003eRequest-\u003eIO Request",
        "package": "oauthenticated",
        "partial": "Simple",
        "signature": "Cred ty-\u003eServer-\u003eRequest-\u003eIO Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:parameterMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "ParameterMethod",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "parameterMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "parameterMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:permanentCred",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Permanent -\u003e Cred Client -\u003e Cred Permanent",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#permanentCred",
        "fct-type": "function",
        "title": "permanentCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "permanentCred",
        "normalized": "Token Permanent-\u003eCred Client-\u003eCred Permanent",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Permanent-\u003eCred Client-\u003eCred Permanent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:sign",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request given generated parameters\n\u003c/p\u003e",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Oa ty -\u003e Server -\u003e Request -\u003e Request",
        "fct-source": "src/Network-OAuth-Signing.html#sign",
        "fct-type": "function",
        "title": "sign"
      },
      "index": {
        "description": "Sign request given generated parameters",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "sign",
        "normalized": "Oa a-\u003eServer-\u003eRequest-\u003eRequest",
        "package": "oauthenticated",
        "partial": "",
        "signature": "Oa ty-\u003eServer-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:signatureMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "SignatureMethod",
        "fct-source": "src/Network-OAuth-Types-Params.html#Server",
        "fct-type": "function",
        "title": "signatureMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "signatureMethod",
        "normalized": "",
        "package": "oauthenticated",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oauthenticated/docs/Network-OAuth.html#v:temporaryCred",
      "description": {
        "fct-module": "Network.OAuth",
        "fct-package": "oauthenticated",
        "fct-signature": "Token Temporary -\u003e Cred Client -\u003e Cred Temporary",
        "fct-source": "src/Network-OAuth-Types-Credentials.html#temporaryCred",
        "fct-type": "function",
        "title": "temporaryCred"
      },
      "index": {
        "description": "",
        "hierarchy": "Network OAuth",
        "module": "Network.OAuth",
        "name": "temporaryCred",
        "normalized": "Token Temporary-\u003eCred Client-\u003eCred Temporary",
        "package": "oauthenticated",
        "partial": "Cred",
        "signature": "Token Temporary-\u003eCred Client-\u003eCred Temporary"
      }
    }
  }
]