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
        "word": "yesod-fb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Facebook",
          "name": "Facebook",
          "package": "yesod-fb",
          "source": "src/Yesod-Facebook.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "Facebook",
          "package": "yesod-fb",
          "partial": "Facebook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eYesodFacebook\u003c/a\u003e\u003c/code\u003e class for foundation datatypes that\n support running \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e actions.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "YesodFacebook",
          "package": "yesod-fb",
          "source": "src/Yesod-Facebook.html#YesodFacebook",
          "type": "class"
        },
        "index": {
          "description": "The YesodFacebook class for foundation datatypes that support running FacebookT actions",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "YesodFacebook",
          "package": "yesod-fb",
          "partial": "Yesod Facebook",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#t:YesodFacebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer Facebook's challenge if the \u003ccode\u003e\u003ca\u003eRealTimeUpdateToken\u003c/a\u003e\u003c/code\u003e\n matches.\n\u003c/p\u003e\u003cp\u003eWhenever you modify your subscriptions, Facebook will try to\n contact your server with the \u003ccode\u003e\u003ca\u003eRealTimeUpdateToken\u003c/a\u003e\u003c/code\u003e that you\n gave on your call to \u003ccode\u003e\u003ca\u003emodifySubscription\u003c/a\u003e\u003c/code\u003e.  This function\n will correctly answer Facebook's challenge if the\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateToken\u003c/a\u003e\u003c/code\u003e matches, otherwise it will return\n \u003ccode\u003e\u003ca\u003enotFound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "answerRealTimeUpdateChallenge",
          "package": "yesod-fb",
          "signature": "RealTimeUpdateToken -\u003e m RepPlain",
          "source": "src/Yesod-Facebook.html#answerRealTimeUpdateChallenge",
          "type": "function"
        },
        "index": {
          "description": "Answer Facebook challenge if the RealTimeUpdateToken matches Whenever you modify your subscriptions Facebook will try to contact your server with the RealTimeUpdateToken that you gave on your call to modifySubscription This function will correctly answer Facebook challenge if the RealTimeUpdateToken matches otherwise it will return notFound",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "answerRealTimeUpdateChallenge",
          "normalized": "RealTimeUpdateToken-\u003ea RepPlain",
          "package": "yesod-fb",
          "partial": "Real Time Update Challenge",
          "signature": "RealTimeUpdateToken-\u003em RepPlain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:answerRealTimeUpdateChallenge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe credentials of your app.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "fbCredentials",
          "package": "yesod-fb",
          "signature": "site -\u003e Credentials",
          "source": "src/Yesod-Facebook.html#fbCredentials",
          "type": "method"
        },
        "index": {
          "description": "The credentials of your app",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "fbCredentials",
          "normalized": "a-\u003eCredentials",
          "package": "yesod-fb",
          "partial": "Credentials",
          "signature": "site-\u003eCredentials",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:fbCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP manager used for contacting Facebook (may be the same\n as the one used for \u003ccode\u003eyesod-auth\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "fbHttpManager",
          "package": "yesod-fb",
          "signature": "site -\u003e Manager",
          "source": "src/Yesod-Facebook.html#fbHttpManager",
          "type": "method"
        },
        "index": {
          "description": "HTTP manager used for contacting Facebook may be the same as the one used for yesod-auth",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "fbHttpManager",
          "normalized": "a-\u003eManager",
          "package": "yesod-fb",
          "partial": "Http Manager",
          "signature": "site-\u003eManager",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:fbHttpManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse Facebook's beta tier if \u003ccode\u003eTrue\u003c/code\u003e.  The default is \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "fbUseBetaTier",
          "package": "yesod-fb",
          "signature": "site -\u003e Bool",
          "source": "src/Yesod-Facebook.html#fbUseBetaTier",
          "type": "method"
        },
        "index": {
          "description": "Use Facebook beta tier if True The default is False",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "fbUseBetaTier",
          "normalized": "a-\u003eBool",
          "package": "yesod-fb",
          "partial": "Use Beta Tier",
          "signature": "site-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:fbUseBetaTier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns Facebook's \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e from inside a\n \u003ccode\u003e\u003ca\u003eHandlerT\u003c/a\u003e\u003c/code\u003e.  Just a convenience wrapper around\n \u003ccode\u003e\u003ca\u003efbCredentials\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "getFbCredentials",
          "package": "yesod-fb",
          "signature": "m Credentials",
          "source": "src/Yesod-Facebook.html#getFbCredentials",
          "type": "function"
        },
        "index": {
          "description": "Returns Facebook Credentials from inside HandlerT Just convenience wrapper around fbCredentials",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "getFbCredentials",
          "package": "yesod-fb",
          "partial": "Fb Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:getFbCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup and parse the \u003ccode\u003erequest_ids\u003c/code\u003e GET parameter\n \u003ca\u003ehttp://developers.facebook.com/docs/requests/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "lookupRequestIds",
          "package": "yesod-fb",
          "signature": "m (Maybe [Id])",
          "source": "src/Yesod-Facebook.html#lookupRequestIds",
          "type": "function"
        },
        "index": {
          "description": "Lookup and parse the request ids GET parameter http developers.facebook.com docs requests",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "lookupRequestIds",
          "normalized": "a(Maybe[Id])",
          "package": "yesod-fb",
          "partial": "Request Ids",
          "signature": "m(Maybe[Id])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:lookupRequestIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003egetRealTimeUpdateNotifications\u003c/code\u003e but does the\n heavy-lifting for you.  Throws an exception whenever any step\n fails (signature header not found, invalid signature, invalid\n JSON).\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "parseRealTimeUpdateNotifications",
          "package": "yesod-fb",
          "signature": "m (RealTimeUpdateNotification a)",
          "source": "src/Yesod-Facebook.html#parseRealTimeUpdateNotifications",
          "type": "function"
        },
        "index": {
          "description": "Same as getRealTimeUpdateNotifications but does the heavy-lifting for you Throws an exception whenever any step fails signature header not found invalid signature invalid JSON",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "parseRealTimeUpdateNotifications",
          "package": "yesod-fb",
          "partial": "Real Time Update Notifications",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:parseRealTimeUpdateNotifications"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003eFacebookT\u003c/code\u003e action inside a \u003ccode\u003e\u003ca\u003eGHandler\u003c/a\u003e\u003c/code\u003e without using\n your credentials.  Usually you won't need to use this function\n but it's provided for completeness' sake.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "runNoAuthYesodFbT",
          "package": "yesod-fb",
          "signature": "FacebookT NoAuth m a -\u003e m a",
          "source": "src/Yesod-Facebook.html#runNoAuthYesodFbT",
          "type": "function"
        },
        "index": {
          "description": "Run FacebookT action inside GHandler without using your credentials Usually you won need to use this function but it provided for completeness sake",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "runNoAuthYesodFbT",
          "normalized": "FacebookT NoAuth a b-\u003ea b",
          "package": "yesod-fb",
          "partial": "No Auth Yesod Fb",
          "signature": "FacebookT NoAuth m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:runNoAuthYesodFbT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003eFacebookT\u003c/code\u003e action inside a \u003ccode\u003e\u003ca\u003eGHandler\u003c/a\u003e\u003c/code\u003e using your\n credentials.\n\u003c/p\u003e",
          "module": "Yesod.Facebook",
          "name": "runYesodFbT",
          "package": "yesod-fb",
          "signature": "FacebookT Auth m a -\u003e m a",
          "source": "src/Yesod-Facebook.html#runYesodFbT",
          "type": "function"
        },
        "index": {
          "description": "Run FacebookT action inside GHandler using your credentials",
          "hierarchy": "Yesod Facebook",
          "module": "Yesod.Facebook",
          "name": "runYesodFbT",
          "normalized": "FacebookT Auth a b-\u003ea b",
          "package": "yesod-fb",
          "partial": "Yesod Fb",
          "signature": "FacebookT Auth m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fb/docs/Yesod-Facebook.html#v:runYesodFbT"
      }
    }
  ]
]