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
        "word": "simple-session"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdds cookie-based session management to simple \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003es. To add to an\n  application, declare the Controller setting's type an instance of\n  \u003ccode\u003e\u003ca\u003eHasSession\u003c/a\u003e\u003c/code\u003e, and wrap routes with \u003ccode\u003e\u003ca\u003ewithSession\u003c/a\u003e\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e data AppSettings = ...\n\n instance HasSession AppSettings where\n   ...\n\u003c/pre\u003e\u003cpre\u003e controllerApp settings $ withSessions $ do\n   routeName \\\"posts\\\" $ ...\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.Simple.Session",
          "name": "Session",
          "package": "simple-session",
          "source": "src/Web-Simple-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Adds cookie-based session management to simple Controller To add to an application declare the Controller setting type an instance of HasSession and wrap routes with withSession For example data AppSettings instance HasSession AppSettings where controllerApp settings withSessions do routeName posts",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "Session",
          "package": "simple-session",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of this class can be used as states by a \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e states\n to manage cookie-based user sessions. Instances must minimally implement\n \u003ccode\u003e\u003ca\u003egetSession\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetSession\u003c/a\u003e\u003c/code\u003e. By default, the secret session key is taken\n from the environment variable \"SESSION_KEY\", or a default dummy key is\n used if the environment variable \"ENV\" is set to \"development\". You can\n override this behaviour by implementing the \u003ccode\u003e\u003ca\u003esessionKey\u003c/a\u003e\u003c/code\u003e method.\n If the controller state contains a dedicated field of type 'Maybe Session',\n a reasonable implementation would be:\n\u003c/p\u003e\u003cpre\u003e data MyAppSettings = MyAppSettings { myAppSess :: Maybe Session, ...}\n\n instance HasSession MyAppSettings where\n    getSession = myAppSess \u003c$\u003e controllerState\n    setSession sess = do\n      cs \u003c- controllerState\n      putState $ cs { myAppSess = sess }\n\u003c/pre\u003e",
          "module": "Web.Simple.Session",
          "name": "HasSession",
          "package": "simple-session",
          "source": "src/Web-Simple-Session.html#HasSession",
          "type": "class"
        },
        "index": {
          "description": "Instances of this class can be used as states by Controller states to manage cookie-based user sessions Instances must minimally implement getSession and setSession By default the secret session key is taken from the environment variable SESSION KEY or default dummy key is used if the environment variable ENV is set to development You can override this behaviour by implementing the sessionKey method If the controller state contains dedicated field of type Maybe Session reasonable implementation would be data MyAppSettings MyAppSettings myAppSess Maybe Session instance HasSession MyAppSettings where getSession myAppSess controllerState setSession sess do cs controllerState putState cs myAppSess sess",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "HasSession",
          "package": "simple-session",
          "partial": "Has Session",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#t:HasSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaintext mapping of the session map. Both keys and values are\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "Session",
          "package": "simple-session",
          "source": "src/Web-Simple-Session.html#Session",
          "type": "type"
        },
        "index": {
          "description": "Plaintext mapping of the session map Both keys and values are ByteString",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "Session",
          "package": "simple-session",
          "partial": "Session",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a \"Set-Cookie\" with the given key-value tuple to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n The path set on the cookie is \"/\", meaning it applies to all routes on the\n domain, and no expiration is set.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "addCookie",
          "package": "simple-session",
          "signature": "(ByteString, ByteString) -\u003e Response -\u003e Response",
          "source": "src/Web-Simple-Session.html#addCookie",
          "type": "function"
        },
        "index": {
          "description": "Adds Set-Cookie with the given key-value tuple to the Response The path set on the cookie is meaning it applies to all routes on the domain and no expiration is set",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "addCookie",
          "normalized": "(ByteString,ByteString)-\u003eResponse-\u003eResponse",
          "package": "simple-session",
          "partial": "Cookie",
          "signature": "(ByteString,ByteString)-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:addCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerializes a \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e by applying a sha256 hmac with the given secret\n key to the serialized \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003erenderSimpleQuery\u003c/a\u003e\u003c/code\u003e), base64 encoding\n the result, and prepending it to the serialized \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "dumpSession",
          "package": "simple-session",
          "signature": "ByteString -\u003e Session -\u003e ByteString",
          "source": "src/Web-Simple-Session.html#dumpSession",
          "type": "function"
        },
        "index": {
          "description": "Serializes Session by applying sha256 hmac with the given secret key to the serialized Session using renderSimpleQuery base64 encoding the result and prepending it to the serialized Session",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "dumpSession",
          "normalized": "ByteString-\u003eSession-\u003eByteString",
          "package": "simple-session",
          "partial": "Session",
          "signature": "ByteString-\u003eSession-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:dumpSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the cached session for the current request, or nothing if the\n session has not been set yet for this request. \n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "getSession",
          "package": "simple-session",
          "signature": "hs -\u003e Maybe Session",
          "source": "src/Web-Simple-Session.html#getSession",
          "type": "method"
        },
        "index": {
          "description": "Returns the cached session for the current request or nothing if the session has not been set yet for this request",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "getSession",
          "normalized": "a-\u003eMaybe Session",
          "package": "simple-session",
          "partial": "Session",
          "signature": "hs-\u003eMaybe Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses and validates a serialized \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e given the secret. If the\n \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e is invalid (i.e. the hmac does not match), an empty \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "parseSession",
          "package": "simple-session",
          "signature": "ByteString -\u003e ByteString -\u003e Session",
          "source": "src/Web-Simple-Session.html#parseSession",
          "type": "function"
        },
        "index": {
          "description": "Parses and validates serialized Session given the secret If the Session is invalid i.e the hmac does not match an empty Session is returned",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "parseSession",
          "normalized": "ByteString-\u003eByteString-\u003eSession",
          "package": "simple-session",
          "partial": "Session",
          "signature": "ByteString-\u003eByteString-\u003eSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:parseSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e, either from the \u003ccode\u003e\u003ca\u003egetSession\u003c/a\u003e\u003c/code\u003e cache or by\n parsing the cookie from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003esessionFromCookie\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "session",
          "package": "simple-session",
          "signature": "Controller hs Session",
          "source": "src/Web-Simple-Session.html#session",
          "type": "function"
        },
        "index": {
          "description": "Returns the current Session either from the getSession cache or by parsing the cookie from the Request using sessionFromCookie",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "session",
          "package": "simple-session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the entire \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "sessionClear",
          "package": "simple-session",
          "signature": "Controller hs ()",
          "source": "src/Web-Simple-Session.html#sessionClear",
          "type": "function"
        },
        "index": {
          "description": "Clear the entire Session",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "sessionClear",
          "normalized": "Controller a()",
          "package": "simple-session",
          "partial": "Clear",
          "signature": "Controller hs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:sessionClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a key from the current \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es session.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "sessionDelete",
          "package": "simple-session",
          "signature": "ByteString -\u003e Controller hs ()",
          "source": "src/Web-Simple-Session.html#sessionDelete",
          "type": "function"
        },
        "index": {
          "description": "Remove key from the current Request session",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "sessionDelete",
          "normalized": "ByteString-\u003eController a()",
          "package": "simple-session",
          "partial": "Delete",
          "signature": "ByteString-\u003eController hs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:sessionDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert or replace a key in the current \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es session.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "sessionInsert",
          "package": "simple-session",
          "signature": "ByteString -\u003e ByteString -\u003e Controller hs ()",
          "source": "src/Web-Simple-Session.html#sessionInsert",
          "type": "function"
        },
        "index": {
          "description": "Insert or replace key in the current Request session",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "sessionInsert",
          "normalized": "ByteString-\u003eByteString-\u003eController a()",
          "package": "simple-session",
          "partial": "Insert",
          "signature": "ByteString-\u003eByteString-\u003eController hs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:sessionInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the secret session key. The default implementation uses the\n \"SESSION_KEY\" environment variable. If it is not present, and the\n \"ENV\" environment variable is set to \"development\", a dummy, hardcoded\n key is used.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "sessionKey",
          "package": "simple-session",
          "signature": "Controller hs ByteString",
          "source": "src/Web-Simple-Session.html#sessionKey",
          "type": "method"
        },
        "index": {
          "description": "Returns the secret session key The default implementation uses the SESSION KEY environment variable If it is not present and the ENV environment variable is set to development dummy hardcoded key is used",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "sessionKey",
          "package": "simple-session",
          "partial": "Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:sessionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a key from the current \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es session.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "sessionLookup",
          "package": "simple-session",
          "signature": "ByteString -\u003e Controller hs (Maybe ByteString)",
          "source": "src/Web-Simple-Session.html#sessionLookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup key from the current Request session",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "sessionLookup",
          "normalized": "ByteString-\u003eController a(Maybe ByteString)",
          "package": "simple-session",
          "partial": "Lookup",
          "signature": "ByteString-\u003eController hs(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:sessionLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores a parsed or changed session for the remainder of the request.This\n is used both for cached a parsed session cookie as well as for serializing\n to the \"Set-Cookie\" header when responding.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "setSession",
          "package": "simple-session",
          "signature": "Session -\u003e Controller hs ()",
          "source": "src/Web-Simple-Session.html#setSession",
          "type": "method"
        },
        "index": {
          "description": "Stores parsed or changed session for the remainder of the request.This is used both for cached parsed session cookie as well as for serializing to the Set-Cookie header when responding",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "setSession",
          "normalized": "Session-\u003eController a()",
          "package": "simple-session",
          "partial": "Session",
          "signature": "Session-\u003eController hs()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:setSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA middleware wrapper around a \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e that sets the \"Set-Cookie\"\n header in the HTTP response if the Session is present, i.e. if it was\n accessed/modified by the \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Session",
          "name": "withSession",
          "package": "simple-session",
          "signature": "Controller hs a -\u003e Controller hs a",
          "source": "src/Web-Simple-Session.html#withSession",
          "type": "function"
        },
        "index": {
          "description": "middleware wrapper around Controller that sets the Set-Cookie header in the HTTP response if the Session is present i.e if it was accessed modified by the Controller",
          "hierarchy": "Web Simple Session",
          "module": "Web.Simple.Session",
          "name": "withSession",
          "normalized": "Controller a b-\u003eController a b",
          "package": "simple-session",
          "partial": "Session",
          "signature": "Controller hs a-\u003eController hs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-session/docs/Web-Simple-Session.html#v:withSession"
      }
    }
  ]
]